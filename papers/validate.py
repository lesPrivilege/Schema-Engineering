#!/usr/bin/env python3
"""Validate source invariants and the compiled Schema Engineering release."""

import re
import sys
from pathlib import Path


SCRIPT_DIR = Path(__file__).resolve().parent
SRC_DIR = SCRIPT_DIR / "src"
DIST_DIR = SCRIPT_DIR / "dist"
EDITION = "2026-09-01"
RELEASE_FILE = DIST_DIR / f"schema-engineering-{EDITION}.html"
INDEX_FILE = DIST_DIR / "index.html"
SOURCE_FILES = {
    "canonical": SRC_DIR / "canonical.md",
    "practice": SRC_DIR / "practice.md",
    "index": SRC_DIR / "practice-index.md",
}


def fail(message: str) -> None:
    print(f"FAIL: {message}", file=sys.stderr)
    raise SystemExit(1)


def front_matter(text: str, name: str) -> dict[str, str]:
    match = re.match(r"^---\n(.*?)\n---\n", text, re.DOTALL)
    if not match:
        fail(f"{name} has no YAML-style front matter")
    fields: dict[str, str] = {}
    for line in match.group(1).splitlines():
        if ":" in line:
            key, value = line.split(":", 1)
            fields[key.strip()] = value.strip()
    return fields


def validate_source(name: str, path: Path) -> str:
    if not path.is_file():
        fail(f"missing source: {path}")
    text = path.read_text(encoding="utf-8")
    fields = front_matter(text, name)
    if fields.get("Edition") != EDITION:
        fail(f"{name} Edition is not {EDITION}")
    if text.count("```") % 2:
        fail(f"{name} has an unclosed fenced block")

    used = set(re.findall(r"\[\^([^\]]+)\]", text))
    defined = set(re.findall(r"(?m)^\[\^([^\]]+)\]:", text))
    missing = used - defined
    if missing:
        fail(f"{name} has undefined footnotes: {sorted(missing)}")
    if name != "index" and re.search(r"https?://", text):
        fail(f"{name} contains an external URL; move it to Practice Index")
    return text


def main() -> None:
    sources = {
        name: validate_source(name, path)
        for name, path in SOURCE_FILES.items()
    }

    expected_bases = {
        "practice": "Canonical base: 2026-09-01 Canonical Edition",
        "index": "Canonical base: 2026-09-01 Canonical Edition",
    }
    for name, marker in expected_bases.items():
        if marker not in sources[name]:
            fail(f"{name} does not declare the expected Canonical base")
    if "Practice base: 2026-09-01 Generalized Practice Snapshot" not in sources["index"]:
        fail("index does not declare the expected Practice base")

    for path in (RELEASE_FILE, INDEX_FILE):
        if not path.is_file():
            fail(f"missing compiled output: {path}")
    release = RELEASE_FILE.read_text(encoding="utf-8")
    current = INDEX_FILE.read_text(encoding="utf-8")
    if release != current:
        fail("current Pages entry point differs from the dated release")

    checks = {
        "three paper views": release.count('<article class="paper"') == 3,
        "canonical default": '<article class="paper" id="paper-canonical">' in release,
        "practice hidden": '<article class="paper" id="paper-practice" hidden>' in release,
        "index hidden": '<article class="paper" id="paper-index" hidden>' in release,
        "three modes": all(
            f'data-mode="{mode}"' in release
            for mode in ("canonical", "practice", "index")
        ),
        "index switch": "getElementById('paper-index').hidden = mode !== 'index'" in release,
        "responsive metadata": 'name="viewport"' in release,
        "self-contained runtime": "<script src=" not in release and "<link rel=" not in release,
        "9.1 index record": "### 2026-09-01 · 9.1" in sources["index"],
    }
    failed = [name for name, passed in checks.items() if not passed]
    if failed:
        fail("compiled checks failed: " + ", ".join(failed))

    print(f"PASS: {len(SOURCE_FILES)} sources, {len(checks)} release checks, Edition {EDITION}")
    print(f"PASS: {RELEASE_FILE.name} == index.html ({RELEASE_FILE.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
