#!/usr/bin/env python3
"""Build the reviewed English reader from ``papers/translations/en``.

Chinese ``papers/src`` remains the editorial authority. This compiler reads a
separate, derived translation cache, verifies that its manifest binds both
source and translation bytes, and assigns the Chinese heading IDs to the
translated HTML so old deep links and language switches remain stable.
"""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

import build as zh_build


SCRIPT_DIR = Path(__file__).resolve().parent
MANIFEST_FILE = SCRIPT_DIR / "translations" / "manifest.json"
CHECKER_FILE = SCRIPT_DIR / "check_translation_alignment.py"


def fail(message: str) -> None:
    raise SystemExit(f"FAIL: {message}")


def manifest() -> dict:
    if not MANIFEST_FILE.is_file():
        return {}
    try:
        value = json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        fail(f"invalid translation manifest: {exc}")
    return value if isinstance(value, dict) else {}


def run_alignment_checker() -> None:
    if not CHECKER_FILE.is_file():
        fail("missing translation alignment checker")
    result = subprocess.run(
        [sys.executable, str(CHECKER_FILE)],
        cwd=SCRIPT_DIR,
        text=True,
        capture_output=True,
    )
    if result.returncode:
        output = (result.stdout + result.stderr).strip()
        fail(f"translation alignment failed{': ' + output if output else ''}")
    if result.stdout.strip():
        print(result.stdout.strip())


def main() -> None:
    payload = manifest()
    files = zh_build.TRANSLATION_FILES
    if not zh_build.reviewed_translation_cache():
        # A stale current entry point would falsely claim that English is in
        # sync. Preserve dated output for historical recall, but remove only
        # the mutable Pages alias.
        zh_build.EN_INDEX_FILE.unlink(missing_ok=True)
        print("SKIP: English reader requires a complete reviewed translation manifest")
        return

    source_digests = zh_build.file_digests(zh_build.SOURCE_FILES)
    translation_digests = zh_build.file_digests(files)
    run_alignment_checker()

    source_html = {
        name: zh_build.render_paper(path.read_text(encoding="utf-8"))
        for name, path in zh_build.SOURCE_FILES.items()
    }
    source_html = zh_build.unique_document_ids(source_html)
    source_ids = {name: zh_build.heading_ids(markup) for name, markup in source_html.items()}
    papers: dict[str, str] = {}
    for name, path in files.items():
        translated = path.read_text(encoding="utf-8")
        papers[name] = zh_build.render_paper(translated, stable_ids=source_ids[name])

    page = zh_build.render_page(
        papers,
        language="en",
        source_digests=source_digests,
        translation_digests=translation_digests,
        language_href="index.html",
        language_ready=True,
        source_commit=zh_build.manifest_source_commit(payload),
    )
    zh_build.DIST_DIR.mkdir(parents=True, exist_ok=True)
    zh_build.EN_OUT_FILE.write_text(page, encoding="utf-8")
    zh_build.EN_INDEX_FILE.write_text(page, encoding="utf-8")
    print(f"Built: {zh_build.EN_OUT_FILE}  ({zh_build.EN_OUT_FILE.stat().st_size:,} bytes)")
    print(f"Current: {zh_build.EN_INDEX_FILE}")


if __name__ == "__main__":
    main()
