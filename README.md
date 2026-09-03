# Schema Engineering

Schema Engineering 是一组持续修订的工作论文，讨论 Agent 如何参与可提交、可恢复、可审阅的正式工作。

当前版本为 **9.2（2026-09-04）**。可从 [GitHub Pages](https://lesprivilege.github.io/Schema-Engineering/) 阅读；带日期的发布文件保留在 [`papers/dist/`](papers/dist/) 中。

## 文本体系

| 文本 | 责任 | 修订姿态 |
|---|---|---|
| [`canonical.md`](papers/src/canonical.md) | 稳定 Kernel 与证伪边界 | 默认不变，只接受必要最小增量 |
| [`practice.md`](papers/src/practice.md) | 当下可执行的泛化实践快照 | 随实践证据增量修订 |
| [`practice-index.md`](papers/src/practice-index.md) | 来源、观察、检验、裁决与修订记录 | 持续追加和校正 |

Canonical 与 Practice 正文均自足。可折旧的产品行为、个人实例、帖子、数字和引用进入 Practice Index，不承担正文论证。

## 工作方法

修订从观察开始，不从结论开始：

```text
观察实例或失败
→ 区分事实与推论
→ 抽取最小、泛化、可检验的机制
→ 与现有文本对照并讨论
→ 裁决：不改 / 仅入 Index / 修订 Practice / 修订 Canonical
→ 记录来源、边界、检验和处置
```

具体登记格式、提交边界和发版规则见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。版本级变化见 [`CHANGELOG.md`](CHANGELOG.md)。

## 本地构建

```bash
python3 -m pip install -r papers/requirements.txt
python3 papers/build.py
python3 papers/validate.py
```

构建同时生成当前入口 `papers/dist/index.html` 和带日期的不可变发布文件。推送到 `main` 后，GitHub Actions 会重新构建、校验并发布 Pages。

## 目录

```text
.
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── .github/workflows/pages.yml
└── papers/
    ├── README.md
    ├── build.py
    ├── validate.py
    ├── requirements.txt
    ├── src/
    │   ├── canonical.md
    │   ├── practice.md
    │   └── practice-index.md
    └── dist/
        └── schema-engineering-YYYY-MM-DD.html
```
