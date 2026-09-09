#!/usr/bin/env python3
"""检查固定中文源与派生译文的结构守恒；不替代语义审读。"""
from collections import Counter
from pathlib import Path
import argparse
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parent
NAMES = {"canonical": "canonical.md", "practice": "practice.md", "index": "practice-index.md"}


def body(text):
    return re.sub(r"\A---\n.*?\n---\n", "", text, count=1, flags=re.S)


def structure(text):
    text = body(text)
    fences = re.findall(r"^```[^\n]*\n.*?^```[^\n]*$", text, flags=re.S | re.M)
    prose = re.sub(r"^```[^\n]*\n.*?^```[^\n]*$", "", text, flags=re.S | re.M)
    tables = re.findall(r"(?:^\|[^\n]*\n?)+", prose, flags=re.M)
    return {
        "headings": [len(s) for s in re.findall(r"^(#{1,6})\s+", prose, flags=re.M)],
        "fences": fences,
        "table_rows": [len(t.strip().splitlines()) for t in tables],
        "footnote_keys": Counter(re.findall(r"\[\^([^\]]+)\]", prose)),
        "urls": Counter(re.findall(r"https?://[^\s<>\]\)）]+", text)),
        "inline_code": Counter(re.findall(r"(?<!`)`([^`\n]+)`(?!`)", prose)),
        "list_markers": Counter(re.findall(r"^\s*(?:[-*+] |\d+[.)] )", prose, flags=re.M)),
    }


def check_pair(source, translation):
    a, b = structure(source), structure(translation)
    return [key for key in a if a[key] != b[key]]


def inspect(directory=ROOT / "translations" / "en"):
    rows = []
    for mode, filename in NAMES.items():
        source = ROOT / "src" / filename
        translated = directory / filename
        if not translated.is_file():
            rows.append({"mode": mode, "pass": False, "problems": ["translation missing"]})
            continue
        problems = check_pair(source.read_text(), translated.read_text())
        rows.append({"mode": mode, "pass": not problems, "problems": problems,
                     "source_sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
                     "translation_sha256": hashlib.sha256(translated.read_bytes()).hexdigest(),
                     "remaining_cjk_lines": [line[:180] for line in re.sub(r"^```[^\n]*\n.*?^```[^\n]*$", "", body(translated.read_text()), flags=re.S | re.M).splitlines() if re.search(r"[\u4e00-\u9fff]", re.sub(r"`[^`]+`", "", line))]})
    return rows


def self_test():
    sample = '# 标题\n\n`Work Contract`\n\n| 列 |\n| --- |\n| 值 |\n\n[^x]: https://example.invalid/ref\n\n```js\nconst value = 1;\n```\n'
    translated = sample.replace('标题', 'Title').replace('列', 'Column').replace('值', 'Value')
    assert not check_pair(sample, translated)
    for changed in [translated.replace('# Title', '## Title'), translated.replace('const value = 1', 'const value = 2'), translated.replace('[^x]', '[^y]'), translated.replace('https://example.invalid/ref', 'https://example.invalid/other'), translated.replace('| Value |\n', '')]:
        assert check_pair(sample, changed)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--self-test', action='store_true')
    parser.add_argument('--out', type=Path)
    args = parser.parse_args()
    self_test()
    if args.self_test:
        print('alignment反例 5/5 通过')
    else:
        rows = inspect()
        result = {"pass": all(row["pass"] for row in rows), "note": "仅结构守恒；不能代替语义审读。", "files": rows}
        if args.out:
            args.out.parent.mkdir(parents=True, exist_ok=True)
            args.out.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
        print(json.dumps(result, ensure_ascii=False, indent=2))
        raise SystemExit(0 if result['pass'] else 1)
