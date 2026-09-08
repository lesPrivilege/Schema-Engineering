# Revision Log

本文件记录版本级变化。逐项观察、来源与裁决保存在 `papers/src/practice-index.md`。

## Unreleased

### 9.6 — 2026-09-07 · 本地发表候选

- Astra 主笔合成稳定工作表示、授权视图、候选可见性与正式效力的关系；Luna 探索与独立 Astra 文本审查支持裁决。
- Canonical 重写 §5.4 的输入治理，修正 §5.5 将候选进入 Context 与正式提交混同的表述，并在既有 §2.3 / §6.1 内厘清状态表示和信息传播。
- Practice 合并状态分层、Runtime 适配与工作视图编译的叙述；保护性校验、数学类比、CS 映射及原始来源核验进入 Index。
- 独立 Astra 修后复审通过；修正 F21 将任何接受率变化视为失败的措辞，并删除乘法蕴含独立等性质的旧误述。详细审稿裁决留 Index。
- 保留同日 9.5 HTML 的版本副本；本地构建、链接和浏览器抽查通过。2026-09-08 用户裁定发布并由 CourtWork 采用：推送 main 触发 Pages 工作流，部署结果另核。

### 9.5 — 2026-09-07 · 本地发表候选

- Canonical 正文保持稳定，仅同步版本元数据。
- Practice 重写参考架构，明确 Runtime 能力协商、provider-managed 与薄 Runtime 的适用条件，以及 API / Browser / Computer Use 的授权、结果核对与通道切换边界。
- Index 新增 PI-20、V-19 / V-20；讨论中的产品比较与市场推断未作为实现事实或实证吸收。
- 生成 2026-09-07 三视图 HTML；尚未推送或部署 Pages。

### 9.4 — 2026-09-06 · 本地发表候选

- Canonical 将 Work Contract 收紧为声明目标状态、不变量、证据与 admissible transition 的弱编译表示；通用 Agent loop 与 imperative orchestration 保持可替换。
- Canonical 明确 Matter 是 durable unit，Session 是 attention window，Run / executor 是可丢弃执行尝试；Context 是 governed state 的运行时编译视图。
- Canonical 将 proposal / commitment 边界补充为 failure-containment architecture：局部错误在 validation 前隔离，避免晋升为 durable shared state，并从 latest trusted state 恢复。
- Practice 增加 state-mediated Multi-agent、control-plane review surface、成熟组件复用、trusted recovery 测试及对应失败模式。
- Index 新增 PI-19 与 V-16–V-18，记录 TiDB 等从业者访谈的最小命题、自报边界和待验证对照；未新增 ontology、Contract 类型或原则编号。
- 生成 2026-09-06 三视图 HTML；尚未推送或部署 Pages。

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
