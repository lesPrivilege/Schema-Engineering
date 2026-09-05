# Revision Log

本文件记录版本级变化。逐项观察、来源与裁决保存在 `papers/src/practice-index.md`。

## Unreleased

### 9.3 — 2026-09-05 · 本地发表候选

- Practice §6.5 补全 Runtime 外的评测、失败定位与版本修订理念；对照、留出、评分校准与真实成果校验仅存入 Index。
- Canonical §11.2 区分符合已声明判据、判据充分与因果归因；评测产生证据和候选，不取得修改 Authority。
- 经不继承聊天历史的 Astra 审稿与修后复审，澄清事件溯源参考实现、引用定位与语义支持、训练默认顺序以及既有方法的承接关系。
- Index 新增 PI-16–PI-18、V-14/V-15 与审稿裁决；明确未运行实证，不把 practitioner account 或模型审稿提升为独立实验与同行评审接受。
- 生成 2026-09-05 三视图 HTML，保留历史发布文件；尚未推送或部署 Pages。

## 9.2 — 2026-09-04

### Canonical

- 将 Context Projection、Human Work Surface 与 Retrieval Index 明确为同一 Current Semantic State 的三类可重建 Projection，禁止它们各自形成事实源。
- 将有效 Review 收紧为有限 attention 下可形成独立判断的 decision unit，而不只是人在 loop 中或点击 approval。
- 明确长程软件工作中的 Artifact / Evidence 双连续性及其跨专业领域的外推边界。
- 将 criterion、rubric 与 reason 纳入 Evaluator 的版本、监测、Review、部署与回滚生命周期。
- 未新增 ontology、Contract 类型或原则编号。

### Practice

- 将 Human Work Surface 从双投影扩展为 machine / human / future 三类 attention projection。
- 增加 Artifact / Evidence dual state、Review Sufficiency、Projection Consistency 与 Evaluator Lifecycle 测试。
- 增加 Formal HITL、Projection split-brain 与 ungoverned Evaluator drift 失败模式。

### Index and release

- 新增 PI-11 至 PI-15，分别登记 fresh-context Runtime 假设、human review attention、work-shaped software development、Evaluator lifecycle 与本轮 repository-governed handoff 自观察。
- 把未公开 Codex 接口与官方可确认的 Runtime 能力分开，保留严格的不支持项。
- 发布 2026-09-04 三视图单文件 HTML，并保留 9.1 历史版本。

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
