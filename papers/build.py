#!/usr/bin/env python3
"""
Schema Engineering Papers — HTML compiler

Reads src/canonical.md, src/practice.md and src/practice-index.md,
renders them into a single three-view HTML page, and writes both the dated
release and the current GitHub Pages entry point.

Dependencies: Python 3.10+, markdown2 2.5.5.

Usage:
    python build.py
"""

import re
from pathlib import Path

import markdown2

SCRIPT_DIR = Path(__file__).resolve().parent
SRC_DIR = SCRIPT_DIR / "src"
DIST_DIR = SCRIPT_DIR / "dist"
EDITION = "2026-09-07"
OUT_FILE = DIST_DIR / f"schema-engineering-{EDITION}.html"
INDEX_FILE = DIST_DIR / "index.html"


def strip_front_matter(text: str) -> str:
    """Remove YAML front matter delimited by --- lines."""
    if text.startswith("---"):
        m = re.match(r"^---\n(.*?\n)---\n", text, re.DOTALL)
        if m:
            return text[m.end():]
    return text


def md_to_html(text: str) -> str:
    return markdown2.markdown(
        text,
        # highlightjs-lang keeps fenced rendering independent of whether the
        # optional Pygments package happens to exist in the host environment.
        extras=[
            "tables",
            "fenced-code-blocks",
            "highlightjs-lang",
            "footnotes",
            "header-ids",
        ],
    )


# ── CSS ──────────────────────────────────────────────────────────────

CSS = """\
:root { --paper-width: 780px; --text: #111; --muted: #555; --rule: #bbb; --link: #0645ad; --shade: #f7f7f7; }
* { box-sizing: border-box; }
body { margin: 0; background: #fff; color: var(--text); font-family: "Times New Roman", Times, serif; font-size: 12pt; line-height: 1.42; }
.page { width: min(var(--paper-width), calc(100vw - 32px)); margin: 28px auto 56px; }
.controls { display: flex; justify-content: center; gap: 6px; margin-bottom: 22px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; }
.controls button { border: 1px solid #999; background: #fff; color: #111; padding: 4px 9px; cursor: pointer; }
.controls button[aria-pressed="true"] { background: #111; color: #fff; border-color: #111; }
.paper[hidden] { display: none; }
.paper h1 { margin: 0 0 10px; text-align: center; font-size: 22pt; line-height: 1.12; font-weight: 700; }
.paper h2:first-of-type { margin: 0 auto 18px; max-width: 620px; text-align: center; color: var(--muted); border: 0; padding: 0; font-size: 11pt; font-style: normal; font-weight: 400; }
.paper h2 { margin: 1.45em 0 0.55em; padding-top: 0.35em; border-top: 1px solid var(--rule); font-size: 14pt; line-height: 1.2; font-weight: 700; }
.paper h3 { margin: 1.15em 0 0.4em; font-size: 12.5pt; font-weight: 700; }
.paper h4 { margin: 1em 0 0.35em; font-size: 12pt; font-weight: 700; }
.paper p { margin: 0 0 0.8em; }
.paper a { color: var(--link); text-decoration: none; }
.paper a:hover { text-decoration: underline; }
.paper ul, .paper ol { margin: 0.35em 0 0.9em 1.3em; padding: 0; }
.paper li { margin: 0.2em 0; }
.paper blockquote { margin: 0.9em 0; padding-left: 1em; border-left: 2px solid var(--rule); color: #333; font-style: italic; }
.paper code { font-family: Menlo, Consolas, "Courier New", monospace; font-size: 10pt; background: var(--shade); padding: 0 0.18em; }
.paper pre { margin: 0.9em 0; padding: 0.75em; overflow-x: auto; border: 1px solid #ccc; background: var(--shade); font-size: 10pt; line-height: 1.35; }
.paper pre code { background: transparent; padding: 0; }
.paper table { width: 100%; border-collapse: collapse; margin: 0.9em 0 1.1em; font-size: 10.5pt; }
.paper th, .paper td { border-top: 1px solid #999; border-bottom: 1px solid #ddd; padding: 0.35em 0.45em; text-align: left; vertical-align: top; }
.paper th { font-weight: 700; background: #fafafa; }
.paper hr { border: 0; border-top: 1px solid var(--rule); margin: 1.4em 0; }
.paper .footnote { font-size: 10pt; color: var(--muted); margin-top: 2em; border-top: 1px solid var(--rule); padding-top: 0.8em; }
.paper .footnote ol { margin-left: 1.2em; }
.paper .footnote li { margin: 0.3em 0; }
.paper .footnote hr { display: none; }
.paper sup { font-size: 0.75em; }
@media (max-width: 860px) { body { font-size: 11.5pt; } .page { width: min(100% - 24px, var(--paper-width)); margin-top: 18px; } .controls { position: sticky; top: 0; background: #fff; padding: 8px 0; z-index: 2; } }
@media print { body { font-size: 11pt; } .page { width: auto; margin: 0; } .controls { display: none; } .paper h2 { break-after: avoid; } .paper table, .paper pre { break-inside: avoid; } }
"""

# ── JS ───────────────────────────────────────────────────────────────

JS = """\
function setMode(mode) {
  document.getElementById('paper-canonical').hidden = mode !== 'canonical';
  document.getElementById('paper-practice').hidden = mode !== 'practice';
  document.getElementById('paper-index').hidden = mode !== 'index';
  document.querySelectorAll('.controls button').forEach(function(button) {
    button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
  });
}
document.querySelector('.controls').addEventListener('click', function(event) {
  var button = event.target.closest('button[data-mode]');
  if (button) setMode(button.dataset.mode);
});
"""

# ── HTML template ────────────────────────────────────────────────────

TEMPLATE = """\
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Schema Engineering Working Papers · 2026-09-07</title>
  <style>{css}</style>
</head>
<body>
  <main class="page">
    <div class="controls" aria-label="Paper view">
      <button type="button" data-mode="canonical" aria-pressed="true">正文</button>
      <button type="button" data-mode="practice" aria-pressed="false">实践快照</button>
      <button type="button" data-mode="index" aria-pressed="false">Practice Index</button>
    </div>
    <article class="paper" id="paper-canonical">{canonical}</article>
    <article class="paper" id="paper-practice" hidden>{practice}</article>
    <article class="paper" id="paper-index" hidden>{index}</article>
  </main>
  <script>{js}</script>
</body>
</html>
"""


def build():
    canonical_md = (SRC_DIR / "canonical.md").read_text(encoding="utf-8")
    practice_md = (SRC_DIR / "practice.md").read_text(encoding="utf-8")
    index_md = (SRC_DIR / "practice-index.md").read_text(encoding="utf-8")

    canonical_html = md_to_html(strip_front_matter(canonical_md))
    practice_html = md_to_html(strip_front_matter(practice_md))
    index_html = md_to_html(strip_front_matter(index_md))

    page = TEMPLATE.format(
        css=CSS,
        js=JS,
        canonical=canonical_html,
        practice=practice_html,
        index=index_html,
    )

    DIST_DIR.mkdir(parents=True, exist_ok=True)
    OUT_FILE.write_text(page, encoding="utf-8")
    INDEX_FILE.write_text(page, encoding="utf-8")

    size = OUT_FILE.stat().st_size
    print(f"Built: {OUT_FILE}  ({size:,} bytes)")
    print(f"Current: {INDEX_FILE}")


if __name__ == "__main__":
    build()
