---
Status: Practice Index · Evidence and Revision Ledger
Edition: 2026-09-04
Canonical base: 2026-09-04 Canonical Edition
Practice base: 2026-09-04 Generalized Practice Snapshot
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
- **最小命题**：独立于当前执行者的 completion inventory、evidence procedure 与 validation gate 可以改变长程执行结果。
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
- **不支持**：Project 等于 accountable Matter；retrieval 等于 canonical state；Review、Authority 与 supersession 已解决。
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
- **不支持**：Session log 等于 canonical state；自动索引可以改变正式状态；Agent 共识等于验收；个人报告的成本比例具有一般性。
- **检验**：Documentation Promotion Boundary、Session Replacement、Candidate / Committed Isolation。
- **处置**：Practice §2.8、5.4 采用；Canonical 已有 History / State / Context / Artifact 边界，不增加新对象。
- **状态**：practice-adopted。

### PI-10 · Structured state as the execution substrate

- **观察**：Google / Purdue 的 *SKILL.state: Scalable Long-Horizon Agent Skills* 将长程 procedural execution 表达为 `immutable procedure + current structured state + latest observation`，由模型提出 State Patch 与 action，再由 deterministic runtime 验证、merge 和执行。论文 v2 于 2026-08-28 修订，arXiv 页标注 accepted at EMNLP。[^skill-state]
- **最小命题**：在 Current State 能够作为后续执行充分统计量的长程 procedural task 中，canonical structured state 比 append-only conversational history 更适合作为默认 execution substrate；它可以同时降低累计 token 复杂度和 history contamination。
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
- **最小命题**：显式 repository state、revision protocol、source / generated artifact 分工与可查询 history 可以让一次新的执行在不把全部旧聊天当作 canonical state 的条件下继续修订。
- **不支持**：单次自观察证明该方法优于 compaction；执行者没有获得隐含上下文；结果已经由独立 Reviewer 接受；相同协议能在其他模型、仓库或专业领域稳定复现。
- **检验**：用同一修订任务比较 repository-governed handoff、仅提供 chat summary 与无治理文件三组 fresh Run；检查重复论断、来源错配、Canonical 过度修订、版本一致性、验证通过率、Review time 与 later reversal。
- **处置**：只登记为本轮方法自观察和 V-13 起点，不作为 Canonical 或 Practice 成立的外部证据。
- **状态**：observed（单次自观察，待独立对照与人工 Review）。

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
| V-09 | Current State 可作为长程工作的默认 execution substrate | State-only vs State + on-demand History vs State + append-only Transcript | accepted outcome、token、latency、recovery、omission、source disclosure | procedural benchmark 局部实证，待专业工作复现 |
| V-10 | Human Review packet 在有限 attention 下仍支持独立判断 | raw trace / per-action approval vs structured decision unit | error detection、evidence-seeking、time、override、reversal、canary | position paper 支持问题定义，待产品实验 |
| V-11 | Artifact / Evidence dual state 改善跨轮 work continuity | 仅 Artifact vs Artifact + governed Evidence | regression、repeat work、unsupported completion、recovery | software benchmark 局部实证，待跨域验证 |
| V-12 | Governed Evaluator lifecycle 防止 rubric 与 attribution drift | static rubric vs versioned monitoring / review / rollback | wrong-reason contamination、drift detection、rollback、outcome | 单一生产案例，跨域与因果待验证 |
| V-13 | Repository-governed handoff 支持自主续行 | repository state vs chat summary vs no governance files | duplication、source mismatch、revision scope、validation、Review | 单次自观察，待独立对照 |

---

## 五、增量修订记录

### 2026-09-04 · 9.2

| 观察 / 讨论 | 裁决 | Canonical | Practice | Index |
|---|---|---|---|---|
| Codex 实现讨论显示 fresh Context + on-demand history 的候选方向 | 公开资料不足以确认具体接口；现有 Context / State 边界已经充分 | 不修订 | 不修订 | PI-11 作为产品趋势观察，保留严格不支持项 |
| 人在 loop 中仍可能因 attention overload 失去有效监督 | Review Contract 必须包含认知充分性，不只包含审批拓扑 | §6.6 最小增量；无新 Contract / 原则 | §5、7 增加三投影、Review packet 与测试 | PI-12 保留 position paper、边界与待验证指标 |
| 同一 governed state 同时服务模型、人和未来 Run | 三者是不同 Projection；Canonical State 保持唯一事实源 | §5.4 明确三类 Projection 与 split-brain 边界 | §2.5、4.3、5.1、7.3 增加实现与测试 | 作为 PI-10–PI-12 的综合裁决，不虚构独立外部来源 |
| 多日 autonomous software development 同时保存 Artifact 与 Evidence，并隔离角色权限和 Acceptance | software 跨 task boundary 后呈现 work-shaped runtime；软件 substrate 的可验证性限制外推 | §8.5 增加局部边界 | §4.3 增加 dual continuity | PI-13 保留具体实现、实验范围和限制 |
| 生产 Evaluator 的 criterion、reason 与 rubric 会变化并产生下游后果 | Evaluator 是 governed artifact；正确 label 不能掩盖错误 attribution | §11.2 增加 lifecycle 与 commitment boundary | §7.3 增加测试 | PI-14 保留生产案例与外部效度限制 |
| 本轮由 repository state、revision protocol 与渐进披露续行 | 只构成单次方法自观察，不构成因果证据 | 不修订 | 不修订 | PI-15 / V-13 登记对照设计 |
| 正文修订仍可从新增段落和版本摘要辨认材料加入顺序 | 接受后的命题必须重写进最小完整章节；逐项记录与校验只留 Index | 重写 §5.4、6.6、8.5、11.2，删除补丁式解释 | 重写 §2.5、5.3，删除版本摘要 | 修订合成纪律写入 CONTRIBUTING 与 papers/README |

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
