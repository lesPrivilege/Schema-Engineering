# Revision Log

本文件记录版本级变化。逐项观察、来源与裁决保存在 `papers/src/practice-index.md`。

## Unreleased

- 从下一项观察开始，依照 `CONTRIBUTING.md` 先登记、讨论和裁决，再决定是否修订正文。

## 9.1 — 2026-09-01

### Canonical

- 将 Context 的删除、摘要、压缩和重载明确为 Projection 边界内的运行动作。
- 在 State 足以支持后续执行时，明确 Current Semantic State 而非累积 Transcript 是规范执行基底。
- 未新增 ontology、Contract 类型或原则编号。

### Practice

- 将旧实践文本重写为最小、泛化、自足的实践快照。
- 增加 Context Mutation、State-first runtime、Memory / State / Schema 区分及相应边界测试。
- 将产品、人物、个例、来源和供应方数字移入 Practice Index。

### Index and release

- 建立独立 Practice Index，保存来源、检验、裁决和增量记录。
- 发布包含 Canonical、Practice 与 Practice Index 三个视图的单文件 HTML。
- 建立可复现构建、自动校验和 GitHub Pages 发布流程。
