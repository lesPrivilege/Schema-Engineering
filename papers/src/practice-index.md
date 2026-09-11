---
Status: Practice Index · Evidence and Revision Ledger
Edition: 2026-09-07
Canonical base: 2026-09-07 Canonical Edition
Practice base: 2026-09-07 Generalized Practice Snapshot
Scope: 来源、局部命题、证据边界、检验状态与增量修订记录。
---

# Schema Engineering · Practice Index

## 引用、检验与增量修订记录

## 一、用途

Practice Index 保存会折旧的实例、来源和裁决记录。Canonical 定义 Kernel，Practice 给出当下可执行的泛化快照，Index 回答：

- 某项局部观察来自哪里；
- 它直接支持什么，不支持什么；
- 应如何复现、消融或证伪；
- 经过讨论后，是否修订 Canonical 或 Practice；
- 哪一版文本吸收了何种最小增量。

Index 不是案例汇编，也不为正文提供必要前提。删除 Index 后，Canonical 和 Practice 仍应各自完整。

---

## 二、登记格式

每个条目至少包含：

```text
id / observed_at / source_class
source / version or access date
observable mechanism
smallest supported claim
unsupported extrapolations
verification or falsification
text disposition
status
```

状态只使用：

| 状态 | 含义 |
|---|---|
| observed | 来源和机制已登记，未形成文本裁决 |
| abstracted | 已抽取可检验的最小机制 |
| indexed | 只保留于 Index，不修订正文 |
| practice-adopted | 已以泛化形式写入 Practice |
| canonical-adopted | 已证明现有 Kernel 边界需修订 |
| rejected | 观察不足以支持候选命题 |
| superseded | 条目的产品或解释已被后续证据覆盖 |

---

## 三、局部命题索引

### PI-01 · Runtime composability

- **观察**：插件原生 Runtime 公开 model、tool、session、event、permission、question、storage 与 UI seam；可组合系统还可以提供 effect tracking、dependency resolution、configuration reconciliation 与可逆生命周期。[^dsh-home][^dsh-readme][^dsh-architecture][^dsh-question][^dsh-ui][^cordis]
- **最小命题**：Work Extension 可以在不把领域语义写入宿主核心的条件下被封装、加载、撤销和投影。
- **不支持**：Work Contract 正确；跨宿主零成本迁移；热替换后成果质量不退化。
- **检验**：No Core Patch、Upstream Upgrade、Plugin Reload、AOT / JIT Equivalence。
- **处置**：Practice §2.1、3.1 以宿主无关表述采用；具体 API 仅留本条。
- **状态**：practice-adopted。

### PI-02 · External completion governance

- **观察**：在所选长程软件重建任务中，供应方先构造 executable standard of completion，再以它约束实现与 continue / stop decision；报告结果来自自选任务和自建 system / benchmark。[^factory-completion]
- **最小命题**：独立于当前 Agent 的 completion inventory、evidence procedure 与 validation gate 可以改变长程执行结果。
- **不支持**：一般专业正确性；完整 Work Contract；跨领域因果；独立复现。
- **检验**：固定模型与任务，消融 external completion inventory、evidence gathering 和 stopping gate，同时报告负面结果。
- **处置**：Practice §2.3 采用泛化机制；数字与供应方叙事留在 Index。
- **状态**：practice-adopted。

### PI-03 · Feedback compilation

- **观察**：实践系统将相对稳定的 procedural Skill 与 inference-time Memory 区分，把 domain instructions 保存为文件，在工作位置捕获 Human feedback，由 improver 提出小幅 diff，再经普通 PR / review / merge 流程进入后续执行；材料同时提醒 feedback 可能错误，需筛选其 Authority 与适用范围。[^warp-improver]
- **最小命题**：Human correction 可以被低摩擦捕获、审阅、版本化并在模型权重之外跨 Run 复用；可复用 procedural rule 的变更应走独立于自动 Memory 写入的 commitment path。
- **不支持**：Skill 已成为完整 governance substrate；accepted-work-product 因果；post-training 收益；局部偏好可泛化；自动 improver 已能判断所有 feedback 的 Authority。
- **检验**：检查 feedback Authority、scope、version、rollback、Reviewer disagreement 与后续 outcome。
- **处置**：Practice §2.4、6.3 采用；具体产品流程留在 Index。
- **状态**：practice-adopted。

### PI-04 · Project-bounded recall

- **观察**：Frontier lab 的官方产品文档描述工作域内的记忆隔离、旧对话检索与域外上下文排除。[^frontier-project-memory]
- **最小命题**：持久内容可以按工作域隔离，历史可以保留检索权而不必全量占用当前 Context。
- **不支持**：Project 等于 accountable Matter；retrieval 等于 Current Semantic State；Review、Authority 与 supersession 已解决。
- **检验**：Retrieval / Canonical Separation、Session Replacement、stale-state reintroduction。
- **处置**：Practice §2.5 采用机制区分；产品名与版本留在 Index。
- **状态**：practice-adopted。

### PI-05 · Managed resource surface

- **观察**：Frontier lab 的官方文档公开 memory synthesis、project scope、persistent file references、source reuse 与 source disclosure 等产品表面。[^openai-managed-resources]
- **最小命题**：Context 可以从一次 message payload 转向拥有 identity、scope、lifecycle 和 reference 的可管理资源；storage 与 current attention 可分离。
- **不支持**：不可观察的 backend 已采用 event / object ontology；UI 表明 Govern layer 已成立；资源不会在模型输入前被 flatten。
- **检验**：查验 identity、scope、version、source return、deletion、expiry 与 Context disclosure，不从 UI 反推内部实现。
- **处置**：Practice §2.5、4.3 采用 storage-attention separation；产品表面留在 Index。
- **状态**：practice-adopted。

### PI-06 · Execution-to-judgment migration

- **观察**：专家文章指出，即使 Agent 降低局部实现成本，人仍需理解 data architecture、system architecture、security、reliability、production operation 与 lifecycle trade-off。[^andrew-ng-se-fundamentals]
- **最小命题**：execution 变便宜不会自动消除 architecture、verification 和 lifecycle judgment。
- **不支持**：该作者提出了 Schema Engineering；人需要理解的内容必然应全部成为系统状态；软件工程与专业工作的成熟度对称。
- **检验**：在执行成本下降后，测量决策、验证、责任和生命周期错误是否成为更主要的成果失败来源。
- **处置**：只作为 Practice 的结构假设背景，不在正文点名。
- **状态**：indexed。

### PI-07 · Proactive context management

- **观察**：Frontier 研究把 context editing 表达为 planning、structured memory、offloading、partial rollout 与 snapshot-level credit 的一部分，并公开 inference、evaluation 与 training 实现。[^contextpilot-paper][^contextpilot-code]
- **最小命题**：Context 的删除、摘要、压缩与重载是改变后续行为的 action，可以被快照、回放和给予局部 credit。
- **不支持**：已建立 governed Matter memory；被保留的内容具有正式效力；特定长上下文任务的结果具有跨领域外部效度。
- **检验**：Context Mutation Preservation；对 token、局部得分和 accepted-work-product 分别报告；保留 Raw Evidence recovery、scope 与 lifetime。
- **处置**：Canonical §5.4 作最小边界澄清，Practice §2.6、4.4 写入实现与测试；不新增 ontology 或原则编号。
- **状态**：canonical-adopted / practice-adopted。

### PI-08 · Multi-agent work topology

- **观察**：个人实践描述多种模型或 TUI 共享 harness、skills 与工作约束，并用 planner、worker、critic 等位置隔离 Context；另一个人实践强调并发实例需要状态、优先级、隔离环境与调度。[^fryxell-harness][^ondrej-setup]
- **最小命题**：执行拓扑、能力配置、工作责任与最终 Authority 是不同对象。
- **不支持**：角色名称等于 Expert；Agent 数量提高必然改善质量；个人工作流已证明一般架构或收益幅度。
- **检验**：Runtime Profile Separation、Correlated Review Failure、Authority Failure。
- **处置**：Canonical §4.3–4.4 已充分表达责任区分，不修订；Practice §2.7 增加 topology / Expert 分离及相关测试。
- **状态**：practice-adopted。

### PI-09 · Documentation as work surface

- **观察**：社区实践把文档驱动、对抗审查、测试、复杂度约束、完整记录与工作索引并置。[^document-driven-practice]
- **最小命题**：文档可以兼任执行规格、审阅、恢复和交付表面；同一文件形式不消除对象的制度差异。
- **不支持**：Session log 等于 Current Semantic State；自动索引可以改变正式状态；Agent 共识等于验收；个人报告的成本比例具有一般性。
- **检验**：Documentation Promotion Boundary、Session Replacement、Candidate / Committed Isolation。
- **处置**：Practice §2.8、5.4 采用；Canonical 已有 History / State / Context / Artifact 边界，不增加新对象。
- **状态**：practice-adopted。

### PI-10 · Structured state as the execution substrate

- **观察**：Google / Purdue 的 *SKILL.state: Scalable Long-Horizon Agent Skills* 将长程 procedural execution 表达为 `immutable procedure + current structured state + latest observation`，由模型提出 State Patch 与 action，再由 deterministic runtime 验证、merge 和执行。论文 v2 于 2026-08-28 修订，arXiv 页标注 accepted at EMNLP。[^skill-state]
- **最小命题**：在 Current Semantic State 能够作为后续执行充分统计量的长程 procedural task 中，canonical structured state 比 append-only conversational history 更适合作为默认 execution substrate；它可以同时降低累计 token 复杂度和 history contamination。
- **实验边界**：论文在 synthetic SkillExecBench、InterCode CTF 与 Sierra τ-Bench 上比较 ReAct-style Prompt、Summary Memory、State + History 与 State-only Runtime。Warehouse `T=100` 的 budget-matched 对照中，sliding window、capped summary、LLMLingua 与 structured state 的 score 分别为 0.18、0.52、0.22 与 0.94；structured state 的累计 token 为 65,408。`T=200` 时 structured state 报告 0.94 / 约 122k tokens。在 `T=50` 每轮 50 个 distractor events 时，Prompt 与 structured state 的 score 分别为 0.53 与 0.98。[^skill-state]
- **不支持**：History 可以从存储删除；固定 Schema 适用所有专业工作；论文已建立 Evidence、Authority、Review、Artifact version 或 Matter governance；单 Agent procedural benchmark 结果可直接外推到审计、法律、投资或多写者工作。
- **论文自述限制**：State 必须是 future execution 的 sufficient statistic。该假设在三类场景失效：Schema 需在执行中发现；旧 Observation 的重要性未被及时识别和 commit；historical trajectory 本身是 auditing、debugging provenance 或解释过去行动的工作对象。当前实现也只验证单 Agent；多 Agent 共享 State 还需要 deterministic concurrent-write conflict resolution。[^skill-state]
- **失败归因**：论文对一个较小 open-weight model 的 State 失败分类为 premature overwrite / deletion 68%、schema comprehension / type coercion 20% 和 JSON syntax 12%。这只能说明失败在结构化 transition 后更可归因；不证明 reasoning error 已被消除。[^skill-state]
- **检验**：State Sufficiency / History Disclosure、Patch Preservation、Context Omission / Pollution、Session Replacement、Candidate / Committed Isolation。消融应同时比较 accuracy / accepted outcome、token、latency、recovery、source preservation 和旧 Observation 召回。
- **处置**：Canonical §5 增加一句带 sufficient-state 条件的规范性收敛，不新增原则；Practice §2.5、4.3、7.3 增加 Memory / State / Schema 区分、State-first 运行链与边界测试。论文名、数字和限制仅留 Index。
- **状态**：canonical-adopted / practice-adopted（局部实证，待专业工作场景复现）。

### PI-11 · Fresh-context continuation as a runtime hypothesis

- **观察**：用户保存的 2026-09-03 Codex 实现讨论截图描述一个候选 `new_context` 机制：Agent 可以结束已污染的 working window，在不生成 compaction summary 的情况下进入 fresh initial context，并通过 history / notes 类工具按需取回旧信息。当前公开 OpenAI 文档能够确认长程 Runtime 对 compaction、state continuity、tool orchestration 与 autonomy boundary 的支持，但未能独立确认该截图中的具体接口、合并状态或发布语义。[^openai-runtime-context]
- **最小命题**：将 history 作为可查询数据源、将 current Context 作为可销毁 working set，是一条不同于“持续把旧 attention 压入新 attention”的 Runtime 路径；两者可以并存。
- **不支持**：Codex 已停止 compaction；`new_context` 已发布或会按截图落地；notes / history 已构成 governed Matter State；fresh window 一定提高 accepted-work-product。
- **检验**：Fresh-context / Compaction 对照；Session Replacement；State Sufficiency / History Disclosure；比较关键约束遗漏、旧状态重引入、token、latency、recovery 与 accepted outcome。
- **处置**：现有 Canonical §5 和 Practice §2.5–2.6 已能表达，不因未独立核验的产品接口修订正文；仅作为 Harness 内化 context / state management 的候选趋势保留。
- **状态**：indexed（产品实现观察待公开来源或可重复实验确认）。

### PI-12 · Human attention as a review constraint

- **观察**：Mitchell、Ghosh 与 Passi 的 position paper 认为，把人放入 Agent loop 不自动构成有效监督；Agent 的速度、步骤与长期自动化可能削弱 situational awareness、形成 approval fatigue，并使监督所需技能退化。论文提出 strategic friction、bounded autonomy、batch review、automated pre-checks、monitoring 与组织协议等设计方向。[^agents-out-of-loop]
- **最小命题**：Human Review 有独立的 attention 与 cognition constraint；Review Contract 必须规定人看到什么、何时看到、以何种 decision unit 和 Evidence 颗粒度看到，而不能只规定“存在 approval step”。
- **不支持**：论文实证了某一种 Review UI；所有 batch review 都优于逐项 review；review duration、override 或 canary 单项指标能够证明判断质量；HITL 可以消除能力差距或责任风险。
- **检验**：固定任务、Agent 与 Authority，比较 raw chronology、tool-call approval 与 structured decision packet；测 critical error detection、evidence-seeking、Review time、override、later reversal、canary 与 accepted-work-product。
- **处置**：Canonical §6.6 增加 Review 的认知充分性与 decision-unit projection；Practice §5.1、5.3、7.3 增加 Human attention、Review Sufficiency 与监测边界；不新增 Contract 类型或原则编号。
- **状态**：canonical-adopted / practice-adopted（设计约束；具体 UI 收益待实证）。

### PI-13 · Software engineering becomes work-shaped beyond the task boundary

- **观察**：*Harness-of-Harness* 把多日 autonomous software development 组织为 planning–development–independent QA 的迭代循环。Runtime 保存 software Artifact State 与 Evidence State，为不同 role 冻结输入、限制读写权限、要求 structured output、按 concise index 渐进披露持久 Artifact，并把 Evidence 绑定到 read-only candidate version。[^hoh]
- **最小命题**：当 coding autonomy 跨出一次 bounded task，持续推进需要长期 Specification、Artifact continuity、Evidence continuity、bounded objective、role-specific Authority 与独立 Acceptance；Artifact 与 Evidence 谁也不能替代谁。
- **实验边界**：论文在三个 software benchmark、三组 harness–model pair 和一个 70+ iteration 游戏开发案例中报告增益；多日案例来自单一项目和作者系统，benchmark 的 verifier 与软件 substrate 也比多数专业工作更可执行、可回放和可版本化。[^hoh]
- **不支持**：Planner / Developer / QA 是通用最佳拓扑；QA 报告已经形成外部 commitment gate；固定 Specification 适合规则会演化的工作；software tests 可以替代 broader professional judgment；结果可直接外推到法律、投资或机构审批。
- **检验**：固定模型、Harness 与任务，消融 Artifact / Evidence dual state、progressive disclosure、role Authority、frozen candidate 和 independent Acceptance；分别测 regression、重复工作、unsupported completion、token、recovery 与 accepted artifact。
- **处置**：Canonical §8.5 增加 coding 跨 task boundary 后的 work-shaped runtime 与外推边界；Practice §4.3 增加 Artifact / Evidence dual continuity；具体角色、模型、benchmark 与数字仅留 Index。
- **状态**：canonical-adopted / practice-adopted（软件域局部实证，跨专业域待验证）。

### PI-14 · Evaluator criteria have a governed lifecycle

- **观察**：Netflix 的 production case study 把 LLM judge 组织为 Birth、Training、Deployment、Monitoring 四阶段 lifecycle：专家定义 must-have criteria、labeling guideline、边界样本与 rationale；rubric tuning 同时处理 label error 和“同为 fail 但 reason 不一致”；生产中 judge 既 gate explanation，又把 reason 送回 bounded revision；每周 Human review 监测 drift 和 rubric gap，新 rubric 经 manual review gate 后才能部署，旧版保留 rollback。[^judge-lifecycle]
- **最小命题**：当 criterion、verdict 或 reason 会改变生产 lifecycle 时，Evaluator 与 rubric 本身是需要 owner、version、monitoring、Review、deployment gate 和 rollback 的 governed artifacts；label agreement 不能覆盖具有下游后果的 attribution error。
- **实验边界**：案例只覆盖一个 recommendation-explanation family 和 mobile surface；部分 criterion 与模型细节未公开；drift-triggered automatic retuning 尚未在生产触发；meta-judge 与 primary judge 使用同一 base-model family，可能存在相关错误。[^judge-lifecycle]
- **不支持**：LLM-as-a-Judge 可以替代 Accountable Reviewer；该 rubric lifecycle 已验证一般专业 Work Contract；单一 judge 的 gate 与 critique 复用在所有领域都更安全；线上业务 lift 证明每项 rubric revision 的因果。
- **检验**：Criterion / Evaluator Version Binding；Right-label / Wrong-reason cases；Drift and Rubric-gap Detection；Candidate Rubric / Deployed Rubric Isolation；Rollback；下游 revision contamination。
- **处置**：Canonical §11.2 增加 Evaluator / criterion lifecycle 与 reason 的执行后果；Practice §7.3 增加 Evaluator Lifecycle 测试；数字、产品规模与限制仅留 Index。
- **状态**：canonical-adopted / practice-adopted（生产案例，外部效度受限）。

### PI-15 · Repository-governed handoff continuation

- **观察**：在 2026-09-04 本轮续行中，新 Run 先读取仓库 README、CONTRIBUTING、papers/README、CHANGELOG、近期 commits、三份 source 的责任边界与 build / validation 规则，再按需展开三段 chat attachment 和原始论文；它识别 PI-10 已完成裁决而未重复引入，并把未公开的 Codex 接口观察、论文证据与本文综合推论分开处置。
- **最小命题**：显式 repository state、revision protocol、source / generated artifact 分工与可查询 history 可以让一次新的执行在不把全部旧聊天当作 Current Semantic State 的条件下继续修订。
- **不支持**：单次自观察证明该方法优于 compaction；Agent 未获得隐含上下文；结果已经由独立 Reviewer 接受；相同协议能在其他模型、仓库或专业领域稳定复现。
- **检验**：用同一修订任务比较 repository-governed handoff、仅提供 chat summary 与无治理文件三组 fresh Run；检查重复论断、来源错配、Canonical 过度修订、版本一致性、验证通过率、Review time 与 later reversal。
- **处置**：只登记为本轮方法自观察和 V-13 起点，不作为 Canonical 或 Practice 成立的外部证据。
- **状态**：observed（单次自观察，待独立对照与人工 Review）。

---

### PI-16 · Product signals motivate offline attribution

- **日期 / 来源类别**：2026-09-05 访问；作者发布、由从业者补充的实践分享。用户提供的微信链接无法直接读取；已核对同作者 Substack 全文，聊天转述仅作查找线索。[^manus-research-bench]
- **观察**：文章以事实点数量和隐喻率描述 Research Bench 的局部指标；报告 GPT 搜索调用较多但最终信息量较低，检查中间笔记后修改写法，并自报信息量改善。文中也承认指标需要线上结果持续校验。
- **最小支持命题**：输出信号可以引导 trace inspection，并产生针对中间表示和 Harness 的修订假说。这是产品诊断实践的局部观察。
- **不支持的外推**：Search 次数不等于接触到的相关信息量，不能排除检索质量或覆盖不足；干预自报没有给出足以独立复现的对照与效应区间，不能认定唯一因果；信息点数量不自动度量真实性、相关性或义务覆盖；隐喻率不等于易读性。文章未公开的架构不能据此判定存在或缺失；本文不采用其中关于隐喻必然造成信息损失的数学解释。
- **检验**：固定来源、任务和资源预算，比较自由摘要、原子笔记与按既有 Work Contract 记录证据关系的表示；以独立核对的任务义务和来源支持为参照，分别测抽取遗漏、持久化遗漏、Projection 遗漏与最终使用错误，同时记录相关性、重复、未获支持的主张、Review 时间和成果接受。端到端检索另设对照；不以同一个抽取器生成并裁决全部参照。
- **讨论与裁决**：具体案例只入 Index；结合 PI-14、PI-17 与既有 P19、P21，把诊断、受控比较和回归发布合成为 Practice 的离线 Eval 实践。Schema 提供可检查的位置和关系，不自动提供完整观测、正确标签或因果识别。
- **正文处置**：Practice §6.5 补全 Runtime 外的评测闭环；无需新 ontology、Contract 类型或原则。
- **状态**：practice-adopted（机制设计已采用；收益与因果待验证）。

### PI-17 · Evaluation harness and agent harness have distinct responsibilities

- **日期 / 来源类别**：2026-09-05 访问；Anthropic 官方工程实践总结，2026-01-09 发布。[^agent-evals]
- **观察**：文章区分 task、trial、grader、trace、outcome 和 evaluation harness；区分能力探索与回归检查，并要求校准 grader、读取轨迹、隔离试验环境、重复运行及结合生产观察。
- **最小支持命题**：执行 Agent 的 Harness 与组织试验、记录、评分和比较的评测设施可以分担不同职责；一次试验的最终外部状态不能只从 Agent 自述推断。
- **不支持的外推**：工程建议不是通用收益的受控实验；离线通过不等于专业工作已被接受；重复调用同一家族模型不形成独立专业判断；Trace 可读不等于失败原因已被识别。
- **检验**：固定同一候选版本，对比单次总分与重复、按风险分层的指标及盲审；注入环境残留、评分顺序变化和 grader 漂移，检查结论是否变化；用未参与调优的任务和后续成果复核判断。
- **讨论与裁决 / 正文处置**：与 PI-16 合并支持 Practice §6.5 的评测理念；沿用 Canonical §8.5、10、11.2 的分层与归因边界。
- **状态**：practice-adopted（工程方法；SE 的增量效度未完成验证）。

---

### PI-18 · Existing foundations and the scope of the contribution

- **日期 / 来源类别**：2026-09-05；概念定位与独立审稿裁决。核对原作者 Event Sourcing 说明、W3C PROV-DM 与 OMG CMMN 1.1 的正式来源。[^event-sourcing][^prov-dm][^cmmn]
- **观察与承接关系**：Event Sourcing 用事件序列保存状态变化并支持重建，对应本文的 Ledger / reducer 参考实现；PROV-DM 提供 entity、activity、agent 与 derivation 等来源表达，对应 provenance 的既有建模基础；CMMN 提供 case、case file 与 case plan 的建模标准，对应工作对象和非固定流程的既有基础。
- **最小支持命题**：这些原语已有明确先例。本文提出的是面向 Agent 的实践编订、候选提交、状态投影与评测修订的组合框架，不是状态、案件管理或来源建模的首次发明。
- **不支持的外推**：术语相近不表示模型完全等价；PROV 的 derivation 不自动等于 Evidence Contract 的语义支持；CMMN 不自动包含本文全部模型权限与 Context 语义；事件溯源不是治理成立的唯一实现。这组定位不构成穷尽相关工作的综述。
- **检验 / 反例**：以既有案件或流程系统加来源记录与模型接口为基线；只有在相同工作要求下出现可归于编订、提交或连续性边界的增量，才主张组合收益。不能以“基线不叫 SE”排除已经实现同等机制的系统。
- **讨论与裁决 / 正文处置**：Canonical §2 交代贡献与承接关系；§4 把事件溯源限定为参考实现，保留既有 SoR 路径。
- **状态**：canonical-adopted（定位与边界澄清；组合收益待验证）。

---

### PI-19 · Replaceable execution, durable control and contained failure

- **日期 / 来源类别**：2026-09-06 访问；InfoQ 对 TiDB、腾讯研究院、Floatboat 与 Trae 从业者的访谈报道。[^infoq-thin-loop]
- **观察**：TiDB 受访者将内部 Harness 概括为“薄 Agent Loop，厚 Control Plane”，报告从 OpenCode 更换到 Pi 时保留 Sandbox、权限、持久状态与恢复设施；同一报道还描述 declarative goal、低通信拓扑、通过明确状态与结果协作，以及 `fail fast → limit propagation → recover from trusted state`。项目周期、workspace 数量与无人工编码／审阅均为受访者自报，未见本文独立复核。
- **最小支持命题**：通用执行 loop 与持久状态／权限／副作用／恢复边界可以分层；模型吸收通用执行步骤时，Work Contract 可以减少不承载专业语义的 imperative orchestration；长程可靠性需要衡量错误传播与 trusted recovery，而不只衡量连续步数；可分解任务可以优先通过 bounded state output 协作。
- **不支持的外推**：Pi 或任何 Agent core 是通用最优；所有 Skill 或 orchestration 都会消失；所有工作应使用数据库、filesystem、MVCC、checkpoint 或 Multi-agent；少通信必然提高结果；受访系统已经实现完整 Work Contract、Matter governance 或 accepted-work-product gate；自报规模与周期具有独立因果效度。
- **检验**：固定模型、任务、资源与 Work Contract，替换等价 Agent loop 并比较状态语义与成果；比较 declarative contract 与固定 planner / worker / reviewer 路径；在不同阶段注入错误，测 durable-state contamination、detection latency、rollback loss 与 recovery success；比较 governed branch / artifact 汇合与高频 messaging 的冲突、重复、成本与接受结果。
- **讨论与裁决 / 正文处置**：Canonical §2.1、3、4.5、5.4–5.5 与 8.1 只吸收 declarative contract、Matter / Session / Run、Context compilation、failure containment 和可替换执行的最小关系，不采用产品实现为理论来源；Practice §2、3、4、5、7、8 增加实现、UI、复用、测试与失败边界。未新增 ontology、Contract 类型或原则编号。
- **状态**：practice-adopted；canonical-adopted（既有边界的必要澄清，实证效果未验证）。

---

### PI-20 · Runtime compatibility and action-channel guarantees

- **日期 / 来源类别**：2026-09-07；用户提供的架构讨论与本轮文本对照，属于设计推论，无新增实证。
- **来源**：[Harness架构对比](chatgpt-conversation://6a9e6c32-5afc-83ec-834b-19ba8b9e9efa)，本轮读取完整四轮讨论。聊天中的产品说明与引用未独立核验，不作为供应方实现事实。
- **可观察机制**：讨论提出 provider-managed / 自封装薄 Runtime 两条路径，终端围绕 Review / revision 组织，并比较 SaaS API 与 Computer Use 的适配成本；这是方案描述，不是运行观察。
- **最小支持命题**：由既有分层 Contract 推导，替换执行层与操作通道必须保留工作语义并显式检验能力缺口；执行复杂度应随任务要求选择。
- **不支持的外推**：不证明 Codex 或 Claude 的具体内部机制、CodeRabbit 的定位与优劣、专业任务普遍简单、API 天然幂等或可回滚、Computer Use 必然替代 connector，也不证明 SE 因治理语义而必然拥有市场优势。
- **复现 / 证伪**：V-19 固定 Work Contract 比较原生、模拟和缺失能力的执行层；V-20 注入未知副作用结果并切换操作通道；另以相同成果接受标准比较薄与完整 Runtime 的开发、运维、Review 和恢复成本。均未运行。
- **讨论与裁决**：Canonical §13.2、P21 与 F21 已容纳替换边界，不改正文；Practice §3.1 重写逻辑责任、能力协商、薄 Runtime 及通道选择，并在 §7.3 补充测试。§5.3 已表达面向变化的 Review surface，不重复增加产品类比。拒绝把“停止→注入→恢复”视作无条件等价的 steering，也不把本地 checkpoint 当作外部回滚。
- **正文处置 / 状态**：已吸收为实现约束；9.6 重写 §3.1，并将新增的逐项测试移至 PI-21 / V-19–V-20。性能、互操作性与经济性待验证。不新增 ontology、Contract 或原则。

---

### PI-21 · Structured state, authorized views and reusable CS mechanisms

- **日期 / 来源类别**：2026-09-07；用户提供的概念讨论与本轮文本对照，属于形式化候选与工程研究线索，无新增实证。
- **来源**：[稳定 Schema 是否向量空间](chatgpt-conversation://6a9e71a9-85b4-83ec-8a39-93f4a1427090)。已读取三轮讨论，依次涉及状态空间、分层披露和 CS 范式迁移。初次入账未核理论文献；9.6 审阅补核下列原始资料，聊天类比仍不作为定理、实现保证或新颖性证据。
- **可观察机制**：讨论尝试以同一 Schema 表达 Matter State、候选变化及不同执行角色的可见视图，并提出数据库、编译器、权限与程序分析机制作为实现候选。这是方案描述，尚无运行观察。
- **最小支持命题**：既有 Schema、Context Projection 与 Authority 边界可以进一步转译为可测试的状态约束、读取策略、候选操作和提交检查；工程选型可按这些职责查找成熟机制，不必增加新的 Kernel 对象。
- **数学边界**：可暂记 `X_S = {x ∈ ∏ᵢ Xᵢ | I_S(x)}`，表示满足 Schema 不变量的异质状态集合；分量间约束意味着并非所有字段组合都合法。候选操作 `p` 在给定版本、授权与前置条件下通过部分转换 `apply_S(x, p)` 求得候选结果，正式生效另经提交边界。这里不默认存在状态减法、线性加法、标量乘法或可逆操作；操作组合可能有顺序依赖、冲突或无定义。数值字段、文本 embedding 与稳定字段名均不能自动赋予整个工作状态向量空间结构。“坐标系”只作表示类比；流形、切空间与局部线性化需要另行定义结构和证明条件，本次不采纳。
- **披露边界**：视图可暂记为 `v_i = π(x; assignment, purpose, policy_version, state_version)`；可读范围、可提议操作与可提交权限分别验证。授权过滤应在数据跨越相应信任边界前执行，但不因此把 Project 固定为新增流水线阶段或规定它总先于所有检索；可信域内的查询计划和最终 Context 编译可以分阶段实施。摘要、索引、缓存、日志、工具参数与结果也属于需检查的传播路径；隐藏原文不排除从派生值推断敏感信息。权限撤销不能使已经披露的数据自动消失。

| 候选范式 | 对应的既有 SE 职责 | 迁移边界与待检验问题 |
|---|---|---|
| 数据库 view、行列访问控制、查询优化、物化视图 | 按 Matter / role / purpose 生成 Context Projection 与 Retrieval Index | 普通 view 或 projection pushdown 不自动成为安全边界；检查跨对象关联、派生字段、缓存失效与撤权后的重建 |
| 编译器 IR / lowering、ISA / ABI 契约 | Work Contract 的中间表示与 Host Adapter 兼容边界 | 不将 Schema 等同于 ISA，也不新增 Work ABI；版本映射、语义保持和能力缺失继续按 PI-20 / V-19 检验 |
| 类型、guard 与状态转换检查 | Candidate 形状、前置条件与 typed commitment boundary | 类型正确不等于 Evidence 充分或具有 Authority；并发版本冲突仍需提交时验证 |
| OS 隔离、object capability、信息流控制 | 资源访问、最小权限、委派与输出去向 | 执行层 capability 不等于组织 Authority；RBAC 与 capability 可组合。Context 裁剪不是内存隔离或不泄漏证明，读取与外传权限的组合需单独检查 |
| Abstract interpretation / abstract domain | 保留 unknown、冲突、限定和任务所需性质的抽象视图 | 普通摘要不自动具有 soundness；须定义具体域、抽象域、所保留性质与转换关系后才讨论可靠近似，不能仅凭两个映射声称 Galois connection |
| CQRS / event sourcing | 读投影、候选命令、正式写入与可恢复历史 | 二者不互相蕴含，也不自动提供 Review / Authority；沿用 PI-18，事件溯源仍只是参考实现 |

- **不支持的外推**：Schema 稳定即变化可自由组合、Context 编译必然确定或最小充分；数据库检索与投影可以任意交换且保持权限和结果；Agent 只能知道本次 Context 中的信息；传统 CS 只治理计算位置而不治理信息与动作；通用理论机制已证明 SE 的安全性、效率、专业正确性或市场价值。
- **复现 / 证伪**：V-21 比较源端授权视图与检索后过滤，注入跨 Matter 关联、敏感派生值、缓存与撤权变化，检查各信任边界的暴露及必要证据遗漏；V-22 固定任务与授权范围，对比全文、自由摘要与按声明性质生成的视图，保留反例、unknown 和冲突，测错误确信、成果接受与披露成本。跨版本映射和 Runtime 替换复用 V-19，不新建重复队列。均未运行；本轮来源核验只覆盖下表，具体安全模型、实现选型和证明仍待执行。
- **讨论与裁决 / 正文处置**：初次裁决为 indexed；9.6 强审后，主要概念仍由既有 Kernel 承载，但发现候选可见性被误写成必须先取得正式效力，以及 Schema 被缩窄为 persistence policy 的表述问题。Canonical §2.3、§5.4–5.5、§6.1 重写既有表示、披露与提交关系；Practice §2.5、§3.1、§4.3 将其编排为实现叙述。数学公式、CS 对应、反例和证明要求保留本条，不增加 Project 阶段、epistemic sandbox 或 Work ABI 等对象，不据此采纳技术栈。
- **状态**：practice-adopted；Canonical 为既有原则的一致性修订，不新增 Kernel 命题。

**9.6 原始来源核验（2026-09-07）**：

| 来源 | 本轮核验到的内容 | 不据此推导 |
|---|---|---|
| PostgreSQL 18 Row Security Policies 与 CREATE VIEW [^pg-authorized-views] | 行级策略可分别限制读取与修改；view 的安全语义取决于执行身份与 security 配置，部分访问路径有例外 | 普通 view、查询优化或简单字段投影自动防泄漏；任何数据库配置直接满足 SE 的组织 Authority |
| LLVM Language Reference，Introduction / Well-Formedness [^llvm-ir] | 同一 IR 有多种表示；可解析与满足内部结构约束有区别 | Work Schema 具有 LLVM 的精确执行语义，或宿主替换无需证明兼容 |
| Cousot & Cousot 1977，作者保存的论文摘要及书目信息 [^abstract-interpretation] | 抽象解释通过有序结构、转换和不动点讨论程序性质及抽象间一致性 | 普通摘要具备可靠近似；本轮已复核完整论文证明或为 SE 建立 Galois connection |
| Sabelfeld & Myers 2003，§I、§V.D [^information-flow] | 读取控制不直接约束读取后的传播；允许的信息释放需由相应策略定义 | 标签检查能完全追踪 LLM 的语义依赖，或当前 SE 已证明 noninterference |

**保留于 Index 的实现与审查条件**：

- PI-20 的 Runtime 兼容测试继续覆盖控制时点、能力缺失、取消后完成和未知副作用；恢复 Matter State 不等于迁移内部推理快照，API 不天然提供幂等或回滚，薄 Runtime 不自动满足主权部署的数据边界。将这些条件从 Practice §3.1 的逐项警戒句和 §7.3 的两项新增测试收回本条与 V-19 / V-20；正文保留能力协商、效果核对与必要授权的机制。
- 候选可保存、检索和进入 Review，但身份不得被摘要或重复召回升级为正式状态；对照“候选进入 Context”与“候选取得 Authority”分别断言。视图的一致性按相同对象、版本和效力检查，不要求不同时间的快照逐字相同。
- 检查对象存在性、关联、派生值、工具参数、日志、缓存和接收端；撤权阻止后续复用，不能收回已披露信息。允许的脱敏或释放需要具备 Authority 的规则或决定，不能由模型自行降低限制。
- 视图内容不足时应标明缺口或请求授权补充；对未能识别的遗漏另用 V-22 外部参照评测，不把“按 Schema 编译”当作充分性证明。保留先验知识、推断与隐蔽通道等模型边界，不声称限制了模型全部可知信息。
- 保留 unknown、限定、冲突和来源的目标属于任务性质保持；如果要上升为形式可靠性，必须另行定义状态域、转换、抽象关系与威胁模型。没有该证明仍可实现并测量视图治理，不借数学术语取得保证。


---

### PI-22 · Personal Attention 与既有连续性原语

- **日期 / 来源类别**：2026-09-09；用户提供的设计讨论。完整读取13个turn与1张截图，属于设计输入；外部项目机制与Courtwork实际接缝由Courtwork研究索引登记，不在论文重复选型。
- **来源**：[解释 GoRaven](chatgpt-conversation://6aa122d3-ac50-83ec-bbb3-a7959c28d9d3)。后续用户明确Attention可拥有独立于单个Matter和Session的生命周期；“全量memory”指可寻址、按需要披露。完整私有原文留在个人项目，外部技术来源及本轮消费见[Courtwork固定来源索引](https://github.com/lesPrivilege/Courtwork/blob/b260feb213bf60c39165d2070fcfe7c4940bb590/engineering/research/attention-2026-09-09/source-index.md)与[局部核验](https://github.com/lesPrivilege/Courtwork/blob/b260feb213bf60c39165d2070fcfe7c4940bb590/engineering/research/attention-2026-09-09/verification.md)。固定提交已在本地形成，未推送前远端链接可能暂不可用。
- **观察与最小支持命题**：这是对个人持续关注对象的设计要求，而非运行结果。可检验一个关注关系在关联零个、一个或多个Matter时，能否保留identity、owner、未完义务与生命周期；人的视图与执行Session是否仍可替换且不成为第二事实源。
- **Astra裁决 / 正文处置**：本轮不修订Canonical或Practice。Canonical摘要已明确 `anything governed is addressable`、持久状态与Context分离；PI-21已容纳存在性、关联、缓存与撤权的披露边界；PI-20 / V-19已容纳Runtime能力协商。typed lookup与grep作为实现选择进入Courtwork局部选型，不升为新的普遍检索定律。独立Attention的产品对象语义不自动要求新增Kernel ontology；先比较既有对象关系是否足够，再决定是否需要最小正文修订。若未来需修正文，由Astra在SE源目录亲自撰写。
- **不支持的外推**：不证明Attention必须成为新的Kernel实体、任何Runtime可无损互换、grep提供访问控制，或文件化手动loop已经证明自动ACL、效率及专业质量；来信中的产品主张不证明成熟度。个人通信原文、Courtwork工单和选型台账不复制到论文。
- **复现 / 证伪**：V-23比较独立Attention记录与既有Topic/Queue/Matter关系及State/Event原语，覆盖零/单/多Matter、Session替换、关闭/重开及未完义务。若既有对象可保持同等边界，则否决新增ontology。存在性与内容披露复用V-21，Runtime缺失能力与替换复用V-19；本轮均未运行这些对照实验。
- **状态**：indexed；设计线索已登记，正文不改，无新Edition或发布。

---

### PI-23 · DSH model–harness 协同与持续工作 loop（候选观察）

- **原始讨论入口**：[DSH协同训练分析](chatgpt-conversation://6aa26525-7848-83ec-90b3-34b4da6ef670)；访问需要原讨论权限。导出 JSON SHA-256：`c2d975314cc1f3c2ce4b0af79927d07e6fb3d73aa5591c63705481bef995e58f`；原文不复制到论文仓。
- **日期 / 来源类别**：2026-09-10；用户提供的产品讨论导出与社交媒体截图。来源身份是完整的《DSH协同训练分析》导出（7 turns、13 messages，最新用户轮无 assistant reply）及一张 X.com 截图；本条仅消费 T01–T03 技术讨论，不复制后续职业交流材料。截图可见发帖人 Tianyi Cui（`@tianyi`）、`13:27 · 10/09/2026`，帖子 URL 未随附件提供；评论者与聊天中 Exa 的引用不作为已核验来源。
- **核验级别**：仅核对附件文字、导出完整性和来源身份；属于未核验产品信号 / 设计推论（非运行观察、非独立实证）。截图声称 DSH `v0.1.5` 与 DeepSeek V4.1 Flash 深度结合并在不同配置中专项训练／优化，且 Agent Teams 将以模型训练结合的实验功能开放；这些版本、训练关系和实验语义尚未由本条独立确认。已有 [CourtWork 固定来源索引（`9c8b64e`）](https://github.com/lesPrivilege/Courtwork/blob/9c8b64e85e1b4a906dcd23cd5be621da1ba90638/engineering/research/architecture-maintenance-2026-09-09/source-index.md) 与本 Index 的 [DSH 官方入口][^dsh-home][^dsh-readme][^dsh-architecture] 只可作为后续核验入口，不替代本轮新证据。
- **可观察机制与候选解释**：材料把以下五个方面放在同一 model × harness 叙事中，但后四项主要来自聊天内的二手分析，当前只登记为待核对候选：

  | 观察面 | 材料中的声称或类比 | 本条限度 |
  |---|---|---|
  | model–harness specialization | Standard / PTC / Minimal 等配置与模型专项优化共同演化；工具语法、Context 排列、反馈与 Eval 可能成为能力的一部分 | 不能据截图确认模型确实按这些配置训练，更不能把收益归因给 Harness 或模型单一组件 |
  | state / Context / cache | 稳定状态、运行时 Context、superseding snapshot 与 prefix/KV-cache 可分层；聊天提及 cache 命中与排序的数字 | 未提供可定位的原始代码、版本、请求 trace 或对照；不把 cache 数字、snapshot 语义或收益当作 DSH 事实 |
  | durable coordination | Agent Teams 被描述为持久 identity / roster、mailbox、task DAG、revision/CAS，并区分 durable phase 与 live runtime status | 未确认这些对象、重放、并发和投递语义已在 v0.1.5 或稳定包中实现；不把“多个 Agent”当作治理对象本身 |
  | expert-maintained loop / post-train 类比 | 专家 loop 可由 trace → failure attribution → Eval → policy revision → regression 维护；这与模型 post-training 相似但不等同于权重更新 | 这是概念综合，不是 DSH 运行证据；不新增 Expert、Policy 或训练 ontology |
  | coding ≠ software engineering | 局部 coding 输出与跨时间的架构、版本、回归、发布和维护闭环被区分 | 该材料没有独立软件工程结果；沿用 PI-13 与 Canonical §12.2 的既有边界 |

- **最小支持命题**：本材料最多支持一个可追踪的外部产品／社区信号：DSH 叙事明确把 Harness 配置、模型专项优化和实验性 Agent Teams 放在共同演化语境中，并提出一个可检验的分层候选——稳定的 Work semantics、durable state 与 provenance 应与可专门化的 model / Harness / Context / coordination execution 分离；专家维护的工作 loop 可作为由 trace、Eval、修复和版本化推动的行为改进候选，但不等于模型 post-training。该命题是 Index 级候选，不是独立趋同已证明，也不证明任何收益。
- **不支持的外推**：不支持 DSH `v0.1.5`、V4.1 Flash 的完整发布或训练细节；不支持不同 Harness 配置已经导致质量、效率或 cache 命中改善；不支持 Agent Teams 的 roster、mailbox、CAS、DAG、live-vs-durable separation、replay 或实验包隔离已经实现；不支持任何聊天内数字、代码路径、API、产品 roadmap、组织或市场判断；不支持 Harness specialization 必然保持 Work semantics、专家 loop 等于权重 post-training、trace 可直接变成训练数据、coding agent 已成为 software-engineering agent，或 DSH 与 SE 已形成独立趋同／跨领域效度。亦不据此增加 Career-kit 内容或复制个人职业／私密原文。
- **复现 / 证伪**：先用带版本的官方 release、tag、源码／文档和可定位的原帖核对产品与训练声称；无原帖 URL 或官方训练说明时，将相关项保持未核验。对 model–Harness 候选，固定 Work Contract、模型、任务与预算，比较 generic 与 harness-specialized profile，并做 tool rename、protocol substitution、field-order、Context Projection 和环境迁移，复用 Canonical §11.3、PI-20 / V-19 的 interface-accident 与兼容边界。对 state / Context / cache，比较同一 Matter 的跨 Session 投影，注入 compaction、stale / superseded context、policy 变化和 prefix 重排，分别测 provenance、omission / pollution、cache stability、成本与 accepted work，复用 PI-07、PI-10、PI-21 / V-06、V-09、V-21、V-22。对 durable coordination，注入重复投递、迟到回执、CAS 冲突和并发写入，对照 governed branch / artifact 与 messaging topology，测污染、重复、恢复和接受，复用 PI-19 / V-17、V-18。对 expert loop / post-train，固定 rights、专家工时、计算、模型族和留出集，对照静态 prompt、版本化 loop policy 与权重训练，检查 attribution、held-out Work Eval、accepted outcome、reversal、成本和回归，复用 PI-03、PI-13、PI-14、PI-16 / P15–P16。coding 与 software engineering 的区分沿用 PI-13 的局部 coding benchmark 对长期 Artifact / Evidence、架构和独立 Acceptance 的对照；本条不新建验证队列。
- **讨论与裁决 / 正文处置**：主 Astra 复读候选差异及既有 PI-03、PI-22 / 验证队列后，裁为 `indexed` / Index-only：只保留来源身份、逐项候选、核验级别、最小命题和证伪路径；不把原文“极强命中”“独立趋同”作为裁决，不修改 Canonical、Practice、Edition、CHANGELOG、验证队列或发布生成物。上述既有正文坐标是 Luna 的候选映射，不声称本轮独立逐条验证；没有足够证据支持新增 ontology 或正文修订。后续若提出新命题，由 Astra 另行复读承重正文并裁决。
- **状态**：indexed（候选仅入 Index；不构成产品或实证接受，未发布）。

---

## 四、验证队列

| ID | 待验证命题 | 最小对照 | 主要结果 | 当前状态 |
|---|---|---|---|---|
| V-01 | 宿主适配可以隔离 Runtime 与 Work semantics | 固定 Work Contract，替换等价宿主接口 | 语义一致性、适配成本、E2E | 未完成 |
| V-02 | External Completion 改善长程任务 | 有无独立 completion inventory / gate | completion、accepted outcome、负面结果 | 供应方观察，待独立复现 |
| V-03 | Governed feedback 可以跨 Run 复利 | 仅保存 comment vs 经 scope / Authority / version 编订 | 接受率、reversal、错误放大 | 未完成 |
| V-04 | Govern layer 相比 files + search 有增量 | 固定模型、任务和材料 | 状态一致、critical omission、token、Review | 未完成 |
| V-05 | Sparse activation 解耦总存量与单次 Attention | 稠密激活 vs preset / Expert / primitive | Context / Tool surface、omission、pollution、permission | 未完成 |
| V-06 | Context Mutation 可管理且可恢复 | 各类 mutation vs 未修改 Context | accepted outcome、source preservation、recovery | 研究方向性证据，待工作场景验证 |
| V-07 | Multi-agent review 不会把相关错误误当独立证据 | 注入共享前提、来源缺失和 Evaluator 偏差 | false consensus、escalation、Authority routing | 未完成 |
| V-08 | Document surface 改善 Review 而不污染正式状态 | 文档表面 vs 非结构输出 | Review time、修正率、promotion errors | 社区观察，待消融 |
| V-09 | Current Semantic State 可作为长程工作的默认 execution substrate | State-only vs State + on-demand History vs State + append-only Transcript | accepted outcome、token、latency、recovery、omission、source disclosure | procedural benchmark 局部实证，待专业工作复现 |
| V-10 | Human Review packet 在有限 attention 下仍支持独立判断 | raw trace / per-action approval vs structured decision unit | error detection、evidence-seeking、time、override、reversal、canary | position paper 支持问题定义，待产品实验 |
| V-11 | Artifact / Evidence dual state 改善跨轮 work continuity | 仅 Artifact vs Artifact + governed Evidence | regression、repeat work、unsupported completion、recovery | software benchmark 局部实证，待跨域验证 |
| V-12 | Governed Evaluator lifecycle 防止 rubric 与 attribution drift | static rubric vs versioned monitoring / review / rollback | wrong-reason contamination、drift detection、rollback、outcome | 单一生产案例，跨域与因果待验证 |
| V-13 | Repository-governed handoff 支持自主续行 | repository state vs chat summary vs no governance files | duplication、source mismatch、revision scope、validation、Review | 单次自观察，待独立对照 |
| V-14 | 按工作义务和状态边界记录信号改善失败定位 | 自由摘要 vs 原子笔记 vs Contract 证据记录；固定来源后另做端到端对照 | 独立参照下的遗漏、归因准确度、相关性、支持、Review 成本、接受与 reversal | 方法已定义，实验未运行 |
| V-15 | 离线 signal 的改善预测真实工作改善 | 调优集 vs 按来源 / Matter 隔离的留出集及后续成果 | 指标稳定性、排序偏差、风险分层、成果接受、成本、指标与结果背离 | 方法已定义，实验未运行 |
| V-16 | 可替换 Agent loop 不改变 Work semantics | 固定 Contract / Matter，替换语义等价 Runtime core | state transition、permission、recovery、accepted outcome、adapter cost | 访谈自报支持可行性，待独立复现 |
| V-17 | Failure containment 比持续步数更能解释长程可靠性 | 分阶段注入相同错误；有无 commit isolation / trusted checkpoint | detection latency、propagation depth、state contamination、rollback loss、recovery | 从业者观察与架构推论，实验未运行 |
| V-18 | Governed state 协作优于高频 Agent chatter 的条件 | bounded branches / artifacts vs messaging topology | conflict、duplicate work、Context cost、error propagation、accepted outcome | 从业者观察，适用边界待验证 |
| V-19 | Runtime 能力协商保留 Work Contract | 原生 / 经验证替代 / 缺失能力；固定任务、权限和接受标准 | 非法提交、信息丢失、可恢复性、显式拒绝与总成本 | 设计推论，待验证 |
| V-20 | 操作通道切换不突破效果边界 | API / Browser / Computer Use；注入超时、迟到结果、重复回执 | 重复副作用、授权绕过、结果核对与错误成功报告 | 设计推论，待验证 |
| V-21 | 授权视图约束端到端披露 | 源端授权视图 vs 检索后过滤；跨 Matter、关联推断、缓存与撤权注入 | 边界暴露、外传、陈旧权限、必要证据遗漏 | 已核局部原始来源，实验未运行 |
| V-22 | 任务抽象保留所声明的必要性质 | 全文 vs 自由摘要 vs 按声明性质生成的视图；固定授权范围 | unknown / 冲突保留、错误确信、接受率与披露成本 | 设计候选，不声称形式可靠性 |
| V-23 | 个人Attention是否需要独立对象语义 | 独立记录 vs 既有Topic/Queue/Matter关系与State/Event；零/单/多Matter及Session替换 | identity、owner、未完义务、生命周期、恢复与重复事实源 | 设计候选，实验未运行 |

### V-14 / V-15 · 离线评测快照与查考方法

以下是待执行的评测设计，不是本次实验结果。它使用已有的 Contract、Evidence、Artifact 与 Review 对象，不增设运行时 ontology。

| 环节 | 应保存的快照或记录 | 解释边界与校验 |
|---|---|---|
| 定义比较 | 任务与义务版本、来源快照、初始状态、模型、Harness、Context policy、预算、工具环境和评测器版本 | 模型比较与完整系统比较分开命名；环境不能冻结时记录变化，不声称严格可回放 |
| 构造信号 | 测量对象、单位、分母、去重与相关性规则、原文坐标、grader 判据 | 数量、支持、覆盖与可读性分开报告；重复或无关事实不能靠累积数量获得工作价值；不将局部信号相乘为未经定义的总分 |
| 留出与校准 | 调优样本、独立留出 Matter / 来源、边界样本、人工分歧与评分器输出 | 同源改写不算独立留出；盲化模型标签、交换输出顺序、重复评分；共享模型家族的结果不当作独立验证 |
| 定位遗漏 | 来源 → 抽取 → 持久状态 → Projection → Artifact 的对象对应与版本 | 留存率只针对明示且独立核对的应保留集合；没有抽取到的内容不能从分母消失；允许合理归并、舍弃与未解冲突；无法对应时标为不可测 |
| 归因与重测 | 原配置、候选修改、配对任务、重复 trial、失败样本、成本与延迟 | 固定来源检查表示，再恢复端到端检索；共同变更只能支持组合效果；区分改进 signal 与改善成果；样本量与不确定性不足时不下稳定排序结论 |
| 接受与后续 | 未参与调优的 Reviewer 判断、声明观察窗口、下游采用、返工、reversal 和风险分层 | 当前 Contract 未覆盖但影响工作的问题必须能进入评测；保留全部尝试与退出，避免只统计成功件；离线结果与真实结果背离时重开指标或判据 |

评测快照可以作为版本发布的 Evidence，但评分器没有部署 Authority。已用于反复调优的留出集应降为开发或回归资料；后续候选使用新的留出材料。这里的校验是研究队列，不能写作已经验证的 SE 性能。

---

## 五、增量修订记录

### 2026-09-09 · Attention · Index-only

Astra复读现有正文与PI-20/PI-21后裁决：只登记PI-22及对象生命周期对照V-23，披露与Runtime验证复用V-21/V-19；不修订Canonical、Practice、Edition、CHANGELOG或发布产物。外部成熟实践的局部核验与产品消费留在Courtwork，不把本轮设计讨论提升为实现证据。

### 2026-09-07 · 9.6

| 审查对象 | 裁决与有机合成 | 正文处置 |
|---|---|---|
| 稳定 Schema / 状态空间 | 保留跨执行可比较的对象、状态、版本与转换语义；不用向量、流形或 ISA 替代工作定义 | Canonical §2.3 首段；Practice §2.5 |
| 按角色披露与工作集编译 | 从授权范围、当前义务到不同接收视图，保留判断依赖的来源、限定和缺口 | 重写 Canonical §5.4、Practice §4.3 |
| 候选可见性与正式效力混同 | Candidate 可被保存、检索并供后续 Review；正式更新单独过提交边界 | Canonical §5.5 |
| 读取、操作与信息传播 | 读取权、工具权和向外传递的权限不能相互代替 | Canonical §6.1；Practice §4.3 |
| Runtime / 通道适配段落累积保护性条件 | 按语义责任、能力协商、执行复杂度和操作通道重新合成 | 压缩 Practice §3.1；详细校验归 PI-21 / V-19–V-22 |

本轮由 Astra 主笔，Luna 只读探索，另由未继承聊天历史的 Astra 实例进行独立文本审查。初审与终稿复审结果见下表。属于模型审稿与原始来源核验，不是安全证明、互操作实测或同行评审接受。没有新增 ontology、Contract 类型或原则编号。

**审稿与修后复审**：Luna（`gpt-5.6-luna`，max）只读定位既有承重章节与重复，建议不新增 Kernel 对象；主笔据此选择重写而非加入术语合集。独立 Astra（`gpt-6-astra`，xhigh）在未继承聊天的情况下完整通读三份原稿，并复核磁盘修订稿；最终未发现阻断本轮修订接受的承重矛盾。主笔保留最终裁决与文字责任。

| 审稿发现 | 最终处置与反例 |
|---|---|
| 候选尚未提交便不能进入下一轮 Context | §5.5 允许有明确身份的候选被保存、检索和审阅；候选可见不等于取得正式效力 |
| “未提交错误仍是局部失败”与共享候选冲突 | 整段改写为传播时保留认识状态、提交限制正式效力及污染后的修复；Committed working assumption 仍非已证实事实 |
| 三视图只从正式状态生成，排除了候选与原始材料 | 同步 Practice §2.9、§5.1 图示与说明、Projection Consistency 测试和 Canonical 开放问题 33；一致性比较相同版本和效力，不要求披露相同 |
| 本地提交与外部执行被写在同一步 | 删除原 Practice §4.3 procedural 图，以授权和前置检查、结果证据与待核对状态表达边界 |
| 宿主历史不透明仅被视为审计限制 | Practice §3.1 的兼容绑定覆盖宿主实际召回的信息及可产生的效果；不能只约束新传入的 Context |
| §11.5 声称相乘公式预设独立、单调且同号 | 删除错误数学断言；`X·X` 即可反驳独立性推论，负因子反驳同号预设。组合模型仍需定义与消融，不在正文扩写代数解释 |
| F21 将接受率的任何变化视为兼容失败 | 收紧为所需能力满足时仍破坏工作语义或无法维持声明的接受条件；质量改善和随机轨迹变化本身不触发证伪 |
| “未审阅 output”可能被读成人工 Review 普遍必需 | Practice §7.3 统一为“未通过适用提交检查的 output”，服从既有混合裁决边界 |

**本地候选检查**：构建与 10 项发布检查通过，67 个文内链接均有目标，当前入口与带日期 HTML 一致，`git diff --check` 通过。浏览器检查三视图切换与入口排版，并抽查重写后的 Practice §4.3；不声称逐屏检查全文。Canonical 与 Practice 正文合计较本轮起点缩短约 1,600 字符。原始来源核验仅覆盖 PI-21 所列范围；V-19–V-22 实验未运行，未推送或部署 Pages。

同日 9.5 HTML 保存为 `papers/dist/schema-engineering-2026-09-07-v9.5.html`；当前带日期文件在本轮更新为 9.6。此前 Index-only 条目随本次构建进入 HTML。未推送或部署。

### 2026-09-07 · Index-only 补记

登记 PI-21 与 V-21 / V-22：保留受约束状态空间、授权视图及 CS 机制映射；拒绝把向量空间、流形、隔离或可靠抽象类比提升为已证命题。Canonical / Practice 与版本元数据不变；按索引更新规则不重新构建发布文件，本条尚未进入已生成的 9.5 HTML。检查条目编号、聊天来源、章节指向与 diff；实验及外部理论来源核验待执行。

### 2026-09-07 · 9.5

| 观察 / 讨论 | 裁决 | Canonical | Practice | Index |
|---|---|---|---|---|
| 可替换 Runtime、薄主权部署、面向 Review 的终端与 API / Computer Use 适配 | 采用能力与效果边界；产品事实和市场推断不提升为证据 | 正文不变，仅同步 Edition / Revision | 重写 §3.1；§7.3 增加两项验证要求；§5.3 已充分 | PI-20；V-19 / V-20，均待实测 |

本轮为架构与文字审阅，不是运行时互操作实验或独立模型审稿。保留已有未提交修订与历史候选产物；本地生成不等于 Pages 发布。

**本地候选检查**：三份源文件 Edition / base 同步为 2026-09-07；构建与 10 项发布检查通过，带日期 HTML 与当前入口一致，`git diff --check` 通过。本轮未做浏览器视觉复核，未推送或部署。

### 2026-09-06 · 9.4

| 观察 / 讨论 | 裁决 | Canonical | Practice | Index |
|---|---|---|---|---|
| TiDB 等从业者访谈把易折旧 Agent loop 与状态、权限、副作用、验证和恢复控制面分层 | 作为既有 SE layering 的工程佐证；不把具体 Harness、数据库类比或自报结果提升为理论权威 | §2.1、8.1 合并重复 Runtime 说明，收紧为 declarative Contract 与 replaceable execution | §2.2、3.1 增加折旧分层与成熟组件复用 | PI-19；V-16 |
| 长程失败来自局部错误越过验证成为持久共享状态 | 吸收为 proposal / commitment 的 failure-containment 解释，不新增状态对象 | §5.5 增加最小段落；§3、4.5 明确 Matter / Session / Run 与 executor replacement | §4.2、7.3、8.2 增加 trusted recovery 测试与失败模式 | PI-19；V-17 |
| Agent 间通信拓扑会增加协调状态；安静协作可以经 bounded artifacts 汇合 | 只采用 state-mediated coordination 的默认倾向，保留任务相关通信与并发冲突边界 | 现有 Operator / Lane / Candidate 关系已充分，不修订 | §2.7、7.3、8.2 增加 branch / artifact 协作和对照 | PI-19；V-18 |
| Human review 与 GUI 应暴露状态、证据、权限、提交与恢复，而不是 Agent 表演 | 作为既有 Human Work Surface 的产品推导；UI 形态不进入 Canonical ontology | 不修订 | §5.3、8.2 明确 transition surface 与 Agent theater 失败 | PI-19 记录来源边界；具体组件不作为证据命题 |

本轮没有新增 Canonical ontology、Contract 类型或原则编号。正文净增量通过合并 Canonical §8.1 的重复 Runtime / composability 说明控制；外部项目、受访者判断和易折旧实现细节只留 Index。

**本地候选检查**：三份源文件 Edition / base 已同步到 2026-09-06；构建与 10 项现有发布检查通过，当前入口与带日期 HTML 内容一致，`git diff --check` 通过；桌面浏览器完成当前 Canonical 入口的渲染检查。未推送、未部署，Pages 工作流尚未执行。

### 2026-09-05 · 9.3

| 观察 / 讨论 | 裁决 | Canonical | Practice | Index |
|---|---|---|---|---|
| Manus 实践分享用局部信号追查笔记行为；官方 Agent eval 方法区分执行设施和评测设施 | 抽取 Runtime 外的评测—归因—修订闭环；不将案例自报提升为因果 | §11.2 澄清遵守判据与判据充分，明确归因坐标的边界 | §6.5 写入理念，原训练候选移 §6.6 | PI-16/17；V-14/15；具体校验只留 Index |
| Fresh Astra 独立通读指出提交语义被写成事件溯源的唯一实现 | 保留 Candidate / Committed 与唯一权威状态；事件重放限定为参考实现 | §2、4、5 明确语义要求与持久化选择 | §4.1 明确既有 SoR 的承载方式 | 记录反例：事务状态表、版本化成果与可审计提交记录可实现同一边界 |
| 独立审稿发现示例把可解析引用直接晋升为 supported | 证据定位与语义支持分别成立 | §6.2、8.8 补清语义检查责任 | 沿用既有 Evidence / Review 边界 | 反例：引用确实存在，但只限定或反驳目标主张 |
| 训练的默认检查顺序被写成普遍必要前后关系 | 不以训练替代判据和接受；允许训练参与首次能力形成或降低成本 | §9、11.4、P15 及对应检查统一范围 | §6.6 保留产品不依赖训练飞轮的独立价值 | 反例：基础模型不满足任务门槛，先训练再做首次 E2E；质量相同但训练显著降低成本 |
| 独立审稿要求交代与既有工作建模、来源与事件溯源方法的关系 | 贡献限定为 Agent 工作生命周期中的组合与边界 | §2 增加最小定位 | 不扩写 | PI-18 登记 primary sources、承接与非等价关系 |

本版以可公开讨论的概念工作论文为目标；文本修订与本地构建不表示完成实证或已经线上发布。独立审稿不继承聊天历史，仍属于模型审稿，不替代作者或专业共同体接受。

**审稿与修后复审**：2026-09-05，使用不继承父任务聊天的 `gpt-6-astra` 实例，以 `xhigh` reasoning 完整通读三份文本，再核对修订 diff 与受影响章节。首轮提出五项必要边界修复，上表均已处置；复审未发现阻断公开概念／立场工作论文发表的承重矛盾。其判断不覆盖全部外部来源的独立复核，不等于实证论文或正式同行评审接受。篇幅收敛、系统实现、跨域结果与训练增益继续作为后续工作，不扩大本轮正文。

**本地候选检查**：三份源文件 Edition / base 已同步到 2026-09-05；构建与 10 项现有发布检查通过，当前入口与带日期 HTML 内容一致，57 个文内链接均有目标，`git diff --check` 通过。浏览器安全策略拒绝本地文件预览，未完成视觉复核；不以结构校验代替视觉校验。未推送、未部署，Pages 工作流尚未执行。

### 2026-09-04 · 9.2

| 观察 / 讨论 | 裁决 | Canonical | Practice | Index |
|---|---|---|---|---|
| Codex 实现讨论显示 fresh Context + on-demand history 的候选方向 | 公开资料不足以确认具体接口；现有 Context / State 边界已经充分 | 不修订 | 不修订 | PI-11 作为产品趋势观察，保留严格不支持项 |
| 人在 loop 中仍可能因 attention overload 失去有效监督 | Review Contract 必须包含认知充分性，不只包含审批拓扑 | §6.6 最小增量；无新 Contract / 原则 | §5、7 增加三投影、Review packet 与测试 | PI-12 保留 position paper、边界与待验证指标 |
| 同一 governed state 同时服务模型、人和未来 Run | Context Projection、Human Work Surface 与 Retrieval Index 是不同 Projection；Current Semantic State 保持唯一事实源 | §5.4 明确三类 Projection 与 split-brain 边界 | §2.5、4.3、5.1、7.3 增加实现与测试 | 作为 PI-10–PI-12 的综合裁决，不虚构独立外部来源 |
| 多日 autonomous software development 同时保存 Artifact 与 Evidence，并隔离角色权限和 Acceptance | software 跨 task boundary 后呈现 work-shaped runtime；软件 substrate 的可验证性限制外推 | §8.5 增加局部边界 | §4.3 增加 dual continuity | PI-13 保留具体实现、实验范围和限制 |
| 生产 Evaluator 的 criterion、reason 与 rubric 会变化并产生下游后果 | Evaluator 是 governed artifact；正确 label 不能掩盖错误 attribution | §11.2 增加 lifecycle 与 commitment boundary | §7.3 增加测试 | PI-14 保留生产案例与外部效度限制 |
| 本轮由 repository state、revision protocol 与渐进披露续行 | 只构成单次方法自观察，不构成因果证据 | 不修订 | 不修订 | PI-15 / V-13 登记对照设计 |
| 正文修订仍可从新增段落和版本摘要辨认材料加入顺序 | 接受后的命题必须重写进最小完整章节；逐项记录与校验只留 Index | 重写 §5.4、6.6、8.5、11.2，删除补丁式解释 | 重写 §2.5、5.3，删除版本摘要 | 修订合成纪律写入 CONTRIBUTING 与 papers/README |
| 同一 SE 对象曾出现无意别名和机械翻译；反过来，固定词形会把自然多义误作治理问题 | 用词按语境自然达意并保持全篇体例；治理同一指代与概念边界，不治理单词本身；SE 抽象优先对接共识，自撰概念保持最少 | 统一没有语义差别的定义、状态转换和 Projection 名称；不要求单词一义，不改变 ontology 或原则 | 统一同一对象的实现与测试表述，保留不同语境所需的自然用词 | 写作凡例并入既有治理文件；本行保存裁决与 repo-wide 校验范围 |

本轮没有新增 Canonical ontology、Contract 类型或原则编号。

### 2026-09-01 · 9.1

| 观察 / 讨论 | 裁决 | Canonical | Practice | Index |
|---|---|---|---|---|
| 主动 Context 编辑可以被表达为 action 并给予局部 credit | 这是 Projection 操作纪律，不是新 Memory ontology | §5.4 增加最小边界；无新原则 | 增加 Context Mutation 实现与 Preservation 测试 | PI-07 保留论文、代码和外推边界 |
| 多个 Agent 可以共享 Harness 或隔离 Context | 这描述 execution topology，不定义 Expert 或 Authority | §4.3–4.4 已充分，不修订 | §2.7 明确 topology / Expert；增加 correlated failure 测试 | PI-08 保留个人实践与限制 |
| 文档驱动工作可以同时服务执行、审阅、恢复和交付 | 吸收“文档是共享工作表面”，保留 Trace / Index / State / Artifact 分离 | 已有对象边界，不新增术语 | §2.8、5.4 与 Documentation Promotion 测试 | PI-09 保留社区来源和自报限制 |
| 旧 Practice 以宿主、产品和个例组织大量论证 | 正文改为泛化、最小、连贯的实践快照；实例与来源移入 Index | 移除当前证据图谱，保留稳定证据纪律 | 整体重写，保留架构、对象、测试与失败边界 | PI-01–PI-09 承接来源、检验与处置 |
| Structured State 在长程 procedural task 中比累积 Transcript 更准确且更省 token | 吸收带 sufficient-state 前提的 state-first execution；History 仍属于 Evidence / Ledger，discard from prompt 不等于 delete from storage | §5 增加一句规范性收敛；无新 ontology 或原则 | §2.5、4.3、7.3 增加操作区分和测试 | PI-10 保留论文、数字、限制与待复现边界 |

本轮没有新增 Canonical ontology、Contract 类型或原则编号。

---

## 六、来源登记

[^dsh-home]: DeepSeek, “DeepSeek Harness developer preview: Everything is a plugin,” https://deepseek.com/harness/en/ （快照日期：2026-08-28）。仅用于可观察的插件化能力面。

[^dsh-readme]: DeepSeek AI, “deepseek-ai/deepseek-harness,” https://github.com/deepseek-ai/deepseek-harness （developer preview）。官方仓库明示 compatibility-breaking changes，因而只支持带版本的宿主适配实验。

[^dsh-architecture]: DeepSeek Harness Documentation, “DeepSeek Harness Architecture,” https://deepseek-harness.github.io/deepseek-harness/en/reference/ 。用于 session events、agent events、capability events、turn flow 与 session log 的公开定义。

[^dsh-question]: DeepSeek Harness Documentation, “User Interaction,” https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/user-questions 。用于 provider-neutral question vocabulary 与 presentation intent。

[^dsh-ui]: DeepSeek Harness Documentation, “Cookbook: extension plugin shapes,” https://deepseek-harness.github.io/deepseek-harness/en/reference/cookbook/extension-cookbook 。用于 UI extension surface。

[^cordis]: Cordiverse, “A Programming Paradigm for Spatiotemporal Composability,” https://github.com/cordiverse/paper 。用于 reversible effects、reactive coeffects、effect tracking、resolution、reconciliation 与 hot replacement 的形式化参照；不证明 Work semantics。

[^factory-completion]: Factory Research, Theo Luan, “What it Takes for Coding Agents to Complete Large Software Tasks,” https://factory.ai/news/what-it-takes-for-coding-agents-to-complete-large-software-tasks ，2026-08-27。来自所选 ProgramBench 任务、供应方自建 system / benchmark；仅用于 Completion governance 的局部机制。

[^warp-improver]: Michael Segner, Anthropic / Claude, “How Warp builds self-improving agents on Claude,” https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude ，2026-08-26。仅用于 feedback capture、proposed diff、Human review 与 versioned reuse；不把 Skill 等同于 Work Contract。

[^frontier-project-memory]: Anthropic Help Center, “Use Claude’s chat search and memory to build on previous context,” https://support.anthropic.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context ；“How can I create and manage projects?,” https://support.anthropic.com/en/articles/9519177-how-can-i-create-and-manage-projects ；OpenAI Help Center, “Projects in ChatGPT,” https://help.openai.com/en/articles/10169521-projects-in-chatgpt 。快照日期：2026-08-29。仅用于 project-bounded recall 与 archive retrieval。

[^openai-managed-resources]: OpenAI, “Memory FAQ,” https://help.openai.com/en/articles/8590148-memory-faq ；“ChatGPT Release Notes,” https://help.openai.com/en/articles/6825453-chatgpt-release-notes ；“Dreaming: Better memory for a more helpful ChatGPT,” https://openai.com/index/chatgpt-memory-dreaming/ 。快照日期：2026-08-29。仅用于 managed-resource 与 scoped-context 的产品表面，不反推 backend ontology。

[^andrew-ng-se-fundamentals]: Andrew Ng / DeepLearning.AI, “The AI Engineering Skills Map In Detail — Software Engineering Fundamentals,” https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map-in-detail-software-engineering-fundamentals ，2026-08-28。仅用于 execution-to-judgment migration 的结构假设，不作为 Schema Engineering 的外部背书。

[^contextpilot-paper]: Zhuoshi Pan et al., “ContextPilot: Teaching Agents for Proactive Context Management via Fine-grained RL,” arXiv:2608.28476, 2026, https://arxiv.org/abs/2608.28476 。仅用于 context-editing action、snapshot 与局部 credit 的机制；不视为 Matter governance 或跨领域专业能力的证明。

[^contextpilot-code]: Tencent, “ContextPilot,” https://github.com/Tencent/ContextPilot 。截至 2026-09-01 公开 inference、evaluation 与 training 实现；公开时间短，尚不足以建立独立复现或外部效度。

[^fryxell-harness]: Scott Fryxell, “The Harness Is the Thing,” 2026, https://scott-fryxell.github.io/blog/the-harness-is-the-thing/ 。个人实践观察；仅用于共享 Harness 与执行位置隔离，不推断一般收益。

[^ondrej-setup]: David Ondrej, “Agentic Engineering Setup (after 2,000+ hours),” 2026 Q3，用户保存的公开帖子快照；原作者主页 https://x.com/DavidOndrej1 。个人经验与趋势判断，无统一 benchmark 或独立复现。

[^document-driven-practice]: Vonng, “如何验收 AI 拉出来的屎山？”，2026，用户保存的公开文章快照；发布说明 https://x.com/RonVonng/status/2094288759743545769 。仅吸收文档作为共享工作表面的观察；成本比例与效果判断作为作者自报。

[^skill-state]: Sanket Badhe, Priyanka Tiwari, and Jonghyun Chung, “SKILL.state: Scalable Long-Horizon Agent Skills,” arXiv:2608.26263v2, 2026, https://arxiv.org/abs/2608.26263 。v1 于 2026-08-26 提交，v2 于 2026-08-28 修订，arXiv 页标注 accepted at EMNLP。作者所属 Google LLC 与 Purdue University。本 Index 仅将其用作 explicit execution state、validated patch、bounded prompt footprint、noise robustness 与 sufficient-statistic limitation 的局部实证，不视为完整 Schema Engineering 的证明。

[^openai-runtime-context]: OpenAI, “Model guidance,” https://developers.openai.com/api/docs/guides/latest-model 。访问日期：2026-09-04。官方材料用于确认 Responses Runtime 中的 persisted reasoning、conversation / state compaction、tool orchestration 与 autonomy guidance；未发现公开 `new_context` 或截图所述 history / notes 接口，因而不据此确认 Codex 产品实现。

[^agents-out-of-loop]: Margaret Mitchell, Avijit Ghosh, and Samir Passi, “AI Agents Push Humans Out of the Loop,” arXiv:2608.23642, 2026, https://arxiv.org/abs/2608.23642 。Position paper；用于 human oversight 的 cognitive requirement、approval fatigue、strategic friction、batch review 与 monitoring 设计约束，不作为特定 Review UI 收益的实证。

[^hoh]: Haoyang Yan et al., “Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement,” arXiv:2609.01481v1, 2026, https://arxiv.org/abs/2609.01481 。用于 Artifact / Evidence dual state、bounded increment、role-specific Authority、progressive disclosure、frozen candidate 与 independent QA 的软件域观察；不把其多 Agent topology 或 benchmark 数字外推为一般专业工作结论。

[^judge-lifecycle]: Emma Yanyang Kong et al., “The Lifecycle of LLM-as-a-Judge for Large-Scale Recommendation Explanations,” arXiv:2608.18300, 2026, https://arxiv.org/abs/2608.18300 。用于 criterion / guideline / rubric 的生产 lifecycle、reason-aligned evaluation、bounded revision、drift monitoring、Human review gate 与 rollback；不把单一 recommendation surface 视为通用 Work Eval 的证明。

[^manus-research-bench]: 葬愛咸鱼，邀请胡迪 Hoodie 补充整理，《Manus团队测模型一点微小的经验》，2026-09-04，https://funeralai.substack.com/p/manus 。访问日期：2026-09-05。用户提供的微信入口为 https://mp.weixin.qq.com/s/2CXssAsQMxdPn_5aLcaijw?scene=1 ，本次无法直接读取；以作者 Substack 全文核验，不声称逐字核对两个版本。证据类别为 practitioner account，不是 Manus 完整评测架构规格或独立实验。

[^agent-evals]: Anthropic, “Demystifying evals for AI agents,” 2026-01-09, https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents 。访问日期：2026-09-05。官方工程实践总结，用于离线评测设施、重复 trial、多类 grader、轨迹与 outcome 分离及回归纪律；不视为 Schema Engineering 的效度证明。

[^event-sourcing]: Martin Fowler, “Event Sourcing,” 2005-12-12, https://martinfowler.com/eaaDev/EventSourcing.html 。访问日期：2026-09-05。作者的架构模式说明；用于事件序列、状态重建与 system-of-record 选择的定位，不证明 SE 组合收益。

[^prov-dm]: W3C, “PROV-DM: The PROV Data Model,” Recommendation, 2013-04-30, https://www.w3.org/TR/prov-dm/ 。访问日期：2026-09-05。用于 provenance 对象和关系的既有基础；来源关系本身不判定专业主张为真。

[^cmmn]: OMG, “Case Management Model and Notation,” Version 1.1, December 2016, https://www.omg.org/spec/CMMN/1.1/About-CMMN ，规范正文 https://www.omg.org/spec/CMMN/1.1/PDF ，§4–5。访问日期：2026-09-05。用于 case 工作建模的定位，不把 SE 等同于 CMMN，也不声称穷尽案件管理相关工作。

[^infoq-thin-loop]: Tina，InfoQ，《人人都能整个“自己的 DeepSeek Harness”，那我们为啥还在给 Claude Code 们充会员？》，2026-09-04，https://www.infoq.cn/article/6Jc130IN2OaXqsPDIzmJ ，访问日期：2026-09-06。访谈报道用于 thin loop / control plane、Runtime replacement、declarative orchestration、state-mediated coordination 与 failure containment 的从业者观察；系统规模、开发周期、无人工编码／PR review 与行业共识均视为报道或受访者自述，不作为独立实验。

[^pg-authorized-views]: PostgreSQL Global Development Group, PostgreSQL 18 Documentation, “Row Security Policies,” https://www.postgresql.org/docs/18/ddl-rowsecurity.html ；“CREATE VIEW,” https://www.postgresql.org/docs/18/sql-createview.html 。访问日期：2026-09-07，访问 current 页面时版本为 18；登记固定主版本入口。用于区分访问与修改策略、执行身份及视图安全配置，不构成 SE 安全验证。

[^llvm-ir]: LLVM Project, “LLVM Language Reference Manual,” Introduction / Well-Formedness, https://llvm.org/docs/LangRef.html 。访问日期：2026-09-07。仅用于中间表示与结构约束的既有机制定位；不证明 Work Contract 的语义保持。

[^abstract-interpretation]: Patrick Cousot and Radhia Cousot, “Abstract interpretation: a unified lattice model for static analysis of programs by construction or approximation of fixpoints,” POPL 1977, pp. 238–252，作者摘要与书目 https://www.di.ens.fr/~cousot/COUSOTpapers/POPL77.shtml 。访问日期：2026-09-07。本轮核验摘要，不声称逐项复核论文证明。

[^information-flow]: Andrei Sabelfeld and Andrew C. Myers, “Language-Based Information-Flow Security,” IEEE Journal on Selected Areas in Communications, 21(1), 2003，§I、§V.D，作者保存的原文 https://www.cs.cornell.edu/andru/papers/jsac/sm-jsac03.pdf 。访问日期：2026-09-07。用于访问控制与传播约束的区别及显式信息释放策略，不把传统程序分析保证直接外推给 LLM。
