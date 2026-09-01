---
Status: Companion Paper · Practice Snapshot
Edition: 2026-09-01
Revision: 9.1 · Generalized Practice Snapshot
Canonical base: 2026-09-01 Canonical Edition
Scope: Sparse Work Harness、Compiled Work Expert、Matter Sidecar、Context governance、Human Work Surface、Work Extension 编订与验证。
Closure posture: 本文是带日期的实践快照，只保留当下可执行的最小、泛化结论。产品、论文、社区个例、来源、检验状态与增量裁决统一编入 Practice Index，不作为本文成立的前提。
---

# Schema Engineering 的实践面

## Sparse Work Harness、Matter Continuity 与 Governed Work Surface

## 摘要

Schema Engineering 的实践问题是：如何把通用模型和 Agentic Runtime 已经提供的推理、工具、会话、权限和界面能力，编订为可以恢复、审阅、提交和修订的工作能力。

实践不应从某个宿主、产品或成功案例出发。最小出发点是四个不受具体实现影响的约束：

1. Runtime 只提供执行机制，不自动提供工作语义。
2. 总存量与单次 Attention 必须分离，否则长期工作会退化为反复全量重读。
3. 模型、人和多个执行实例只能提出候选变更，不能因为输出完整或意见一致就取得正式效力。
4. 专业用户应直接处理工作对象、证据、版本、异议和决定，而不是学习 Session、Prompt、Tool routing 或 Subagent mechanics。

因此，当前实践形态可压缩为：通用 Runtime 之上放置宿主适配层；用 Sparse Work Harness 组合经治理的 Work Extension 与 Compiled Work Expert；用 Matter Sidecar 保存正式状态、未完义务和 Artifact 版本；用 Context Compiler 与 Human Work Surface 生成面向模型和人的不同投影；用 typed commitment boundary 决定什么可以生效。

---

## 一、文本责任与快照方法

本文记录一套当下可执行的实践构造，不编辑产品案例、个人工作法或新闻式趋势。每次增量按以下顺序处理：

```text
observe an instance or failure
→ state the smallest mechanism it may expose
→ separate observation from inference
→ test against existing Canonical and Practice text
→ adjudicate: no change / index only / practice revision / canonical revision
→ record the decision and disconfirming condition
```

正文只接受同时满足三个条件的增量：

- 能够脱离原实例独立表达；
- 会改变实现、验证或失败边界；
- 现有文本无法用更小的解释吸收。

仅能说明某个产品已提供一项机制、某个团队自报一项收益、或某个人采用一种组织方式的材料，默认只进入 Index。正文中的结论必须可以不借助 Index 被理解和检验。

---

## 二、当前实践边界

### 2.1 Runtime seam 不是 Work Contract

可用的 Agentic Runtime 通常提供 model、tool、sandbox、session、event、storage、permission、question、trace 与 UI extension point。这些能力足以承载 Work Extension，但并不定义：

- 正在处理什么 Matter；
- 什么是当前有效状态；
- 哪些证据支持哪项主张；
- 什么算完成；
- 谁可以接受、批准、发布或承担后果；
- 哪个 Artifact 版本已经生效。

因此适配层只负责把宿主的通用机制绑定到稳定语义，不得成为领域规则的唯一存放地。等价的宿主接口替换不应改变专业含义；否则说明 interface accident 已经污染 Work Contract。

### 2.2 Capability surface 与 governance surface

执行层回答“此次运行能做什么”；治理层回答“什么可以取得什么效力”。

```text
Capability surface
  tools / files / network / models / sessions / UI

Governance surface
  scope / evidence / completion / authority / review / commitment / recovery
```

两者可以实现在同一系统中，但不能用工具调用成功替代工作接受，也不能用宿主已经保存 Session 替代 Matter continuity。

### 2.3 完成条件必须外置

长程执行不能以当前执行者的自评作为唯一终止条件。最小 Completion Contract 需要把目标分解为可查询义务，为每项义务绑定 evidence procedure、validator 或 Reviewer，并把 continue、stop、return-for-revision 与 escalate 写成独立于执行者的 gate。

这只证明已明示的完成条件被检查，不证明专业正确性已经完全形式化。

### 2.4 修正必须经编订才能跨 Run 复用

一次修正只能说明某个结果在某个 Matter 和时点下被改变。要进入后续执行，必须区分：

```text
artifact-local edit
matter-specific decision
institution convention
domain invariant
candidate evaluator or training signal
```

只有声明 provenance、scope、owner、review、version、rollback 和后续检验的修改，才能从 Candidate feedback 晋升为可复用规则。可读、可版本化的 instruction 能够成为 policy memory，但只有绑定工作对象、状态、Evidence、Authority 与 outcome 后，才能成为 Work Contract 的一部分。

### 2.5 持久化、检索与正式状态分层

当下实践已经足以采用以下分层：

```text
Raw Evidence / History
→ Governed Repository and Current Semantic State
→ Retrieval Candidate Set
→ Model-facing Context or Human-facing Work Surface
```

工作域隔离、历史检索和持久资源可以缓解 chronology 持续膨胀，但 retrieval 仍然只回答“可能相关的对象是什么”。哪项陈述已被确认、驳回、覆盖或批准，仍由 Govern layer 与 commit protocol 决定。

Memory 保存与召回信息；State 表达当前 execution semantics；Schema 规定什么具有跨步骤持续存在的资格。因此 Schema 不是压缩格式，而是 persistence policy。只有当 Current State 足以支持后续执行时，它才可以成为默认 execution substrate；未被及时编入 State 的旧 Observation、需要动态发现的 Schema，以及本身就是工作对象的历史 trajectory，仍需要 Raw History / Evidence 与按需检索。

### 2.6 Context Mutation 是有效果的运行动作

删除、截断、摘要、压缩、折叠和重载会改变模型下一步能够注意、比较和引用的对象。因此 Context Mutation 默认只改变 Run-local working set，不改变 Repository、Current Semantic State 或 Active Artifact。

可恢复的 mutation 至少记录：

```text
source object or span
+ previous projection
+ proposed mutation and reason
+ scope and lifetime
+ resulting projection
+ recovery path
+ downstream outcome
```

对 Context 操作给予更细的 credit 可以产生 Eval 或训练候选，但局部任务得分不能回答被保留的内容是否具有正式效力。

### 2.7 Multi-agent 是执行拓扑，Expert 是能力语义

多个 Agent instance 表示存在多个执行位置，它们可以并行、委派、竞争、审阅或汇总。Compiled Expert 则表示对某个任务族已声明、验证并收窄权限的能力配置。

```text
Run Plan
= Compiled Expert Profile
+ Current Matter State
+ role and stage
+ current Authority
+ Context Projection
```

多个 Agent 可以共用同一 Expert，一个流程也可以在不同阶段绑定不同 Expert。模型数量、Session 数量、终端数量或角色名称都不能代替 Expert 的 applicability、permission、Eval、fallback 和 release evidence。多个实例的意见一致也不等于独立证据或 Authority。

### 2.8 文档是工作表面，不是自动成立的记忆

文档可以同时承载执行规格、来源与理由、Review surface、recovery index 和 accepted artifact。这些职责不得因共用同一文件形式而混同：

| 对象 | 默认地位 | 可否直接改变正式状态 |
|---|---|---|
| Session / Tool Trace | Raw History / Evidence | 否 |
| 自动摘要或索引 | Retrieval aid / Candidate Projection | 否 |
| Contract / Decision Record | 取决于 version 与 Authority | 只在提交后 |
| 测试与审阅报告 | Evidence / Review Record | 不单独决定 |
| 已接受文档成果 | Active Artifact | 经 commitment 后可以 |

完整保留原始记录有助于回溯，生成索引有助于恢复；二者都不取代 Current Semantic State。

### 2.9 当前实践命题

当下快照只承担以下可检验命题：

1. Runtime 与 Work semantics 可以通过适配层分离。
2. Completion 外置、feedback 编订、工作域隔离、持久资源和 Context 管理是互补机制，不是完整架构的替代品。
3. Sparse capability activation 与 sparse state projection 需要共同接受 omission、pollution、permission 和 accepted-work-product 检验。
4. Context Mutation、multi-agent topology 和 documentation workflow 都必须回到同一 Candidate / Committed 边界。
5. 上述命题是当前实现方向，并非已完成的普遍验证。

---

## 三、参考架构：Sparse Work Harness

### 3.1 分层

```text
Model Providers
        ↓
Generic Agent Runtime
        model / loop / tools / sandbox / session / event / permission / UI
        ↓
Host Adapter
        context / capability / session reference / HITL / trace / compatibility
        ↓
Sparse Work Harness
        Expert Registry / Primitive Registry / Activation Planner / Context Compiler
        ↓
Matter Sidecar or Existing System of Record
        Committed Events / Current State / Candidates / Artifact Versions / Obligations
        ↓
Person / Organization / Downstream Work
```

Host Adapter 是唯一可以依赖具体宿主 service、event、package name 与 UI channel 的层。Semantic Core、Compiled Expert manifest 和 Matter State 不得依赖宿主内部命名。

### 3.2 七个对象

| 对象 | 逻辑职责 |
|---|---|
| Runtime Plugin | 通用技术能力 |
| Runtime Profile | 一组技术运行环境 |
| Work Primitive | 最小可组合工作能力 |
| Work Extension | 面向宿主分发的领域语义和实现 |
| Compiled Work Expert | 对高频任务族已版本化、评测和收窄权限的 activation profile |
| Matter State | 一项具体工作的长期正式状态 |
| Run Plan | Expert / primitives 与 Matter、role、stage 的一次绑定 |

Expert 不是人格化 Agent，也不是一组工具。它的最小单元是：

```text
schema
+ tools
+ retrieval policy
+ validators and evaluators
+ permissions
+ Human Work Surface
+ transition and escalation rules
+ applicability and exclusions
+ E2E release evidence
```

### 3.3 五个承重组件

Sparse Work Harness 至少需要：

1. **Activation Planner**：根据 Matter type、role、stage 和 policy 选择 preset、Expert 或受限 primitive composition。
2. **Context Compiler**：从 Stable Contract、Current State、Resources 与 History 生成最小充分工作集。
3. **Expert / Primitive Registry**：保存版本、依赖、适用范围、权限、验证时间和退出路径。
4. **Matter binding**：将本次执行绑定到唯一工作对象、当前版本与开放义务。
5. **Commitment interface**：将 Candidate Output 路由给 Schema、Evidence、Completion、Authority 和 Review。

### 3.4 三层 activation

```text
Preset binding
→ Expert routing
→ bounded Primitive composition
```

Matter type、role 和 stage 已能确定的工作使用 Preset；常规歧义只在少量 approved Experts 中选择；没有适用 Expert、跨域或低置信度时，才进入 primitive composition。最后一层默认 least-privilege 且 Candidate-only，不自动取得 approve、publish、external transmit 或 irreversible authority。

Activation lifetime 按 `organization → role → matter → stage → run` 分层。越稳定的左侧内容越适合预编译，越靠近当前 Run 的内容越适合动态投影。Sparse 不表示每个 turn 热替换全部能力。

### 3.5 Compiled Expert 的发布与折旧

```text
frontier execution or expert intervention
→ Candidate Expert Profile
→ applicability / exclusions / provenance
→ Contract and dependency versions
→ held-out E2E and risk-stratified Review
→ release Authority
→ Committed Expert Version
→ outcome / disagreement / reversal / drift monitoring
→ revalidate / narrow / rollback / deprecate
```

成功 trace 不是 Expert。每个版本至少具有 owner、applicability、exclusions、provenance、dependency versions、risk-stratified E2E、freshness trigger、abstention、fallback、rollback 和 deprecation path。法规、来源、机构政策、工具、模型、任务分布或 Reviewer outcome 变化都可以触发重验证。

未覆盖事项必须安全退出：

```text
unsupported case
→ abstain or request Review
→ Human expert or bounded composition
→ preserve Candidate-only boundary
→ capture intervention and outcome
→ Candidate revision
→ E2E revalidation and release
```

---

## 四、Matter Sidecar 与 Context Compiler

### 4.1 两种数据层

Matter 可以首先实现为现有 Session 和 system of record 之外的薄层，不必一开始就替换它们。

```text
Canonical Semantic Layer
  committed events
  current semantic state
  active artifact references
  authority and review decisions
  open obligations

Rebuildable Index Layer
  full-text and vector indexes
  session and source locators
  graph and projection caches
  retrieval ranking
```

索引可以重建；哪个成果已被接受、哪项候选被驳回、谁作出何种裁决以及什么仍未完成，不能靠重新摘要 Transcript 猜回。

### 4.2 最小 Matter 声明

```json
{
  "matter_id": "matter-001",
  "extension_id": "evidence-memo",
  "contract_version": "0.1.0",
  "status": "awaiting_review",
  "active_artifact": "memo:v3",
  "session_refs": ["session-a", "session-b"],
  "open_obligations": ["verify-source-7"],
  "pending_reviews": ["review-12"]
}
```

一个 Matter 可以关联多个 Session。删除 Session、替换模型或宿主升级不应同时删除 active Artifact、Committed State 和未完义务。

### 4.3 Store → Govern → Retrieve → Compile

```text
Store
  Sources / Events / Artifacts / Raw History / Committed State
→ Govern
  identity / status / version / provenance / authority / scope / expiry
→ Retrieve
  potentially relevant governed objects
→ Compile
  model working set / human work surface / executable run plan
```

Store 解决总容量，Govern 使对象可被区分，Retrieve 缩小候选集，Compile 决定谁占用当前 Attention。Govern 是承重层：每个规则和状态需要 owner、scope、version、review path、disagreement representation、expiry 与 rollback。

对边界稳定的 procedural task，每步可进一步收窄为：

```text
Stable Procedure + Current State + Latest Observation
→ transient reasoning + Candidate State Patch + action
→ deterministic validation
→ Committed State Change + executed action
→ next Context Projection
```

中间 reasoning 可以从下一步 prompt 移除，但“不再进入热 Context”不等于“从存储删除”。当工作需要 provenance、audit、debugging、recovery 或对历史行动的解释时，Event / Evidence Ledger 仍保留原始对象与坐标；Current State 只是默认执行基底，不是全部历史的替代品。

### 4.4 Context Mutation Preservation

在相同任务和资源下，对删除、摘要、压缩和重载分别检查：

- 限定、冲突、否定关系和来源坐标是否保留；
- retention policy 要求保留的 Raw Evidence 是否可恢复；
- superseded 或 rejected state 是否被重新引入；
- mutation 的 scope、lifetime、provenance 和 recovery path 是否可见；
- 更短 Context 是否改善 accepted-work-product，而不只改善 token 或局部得分。

---

## 五、Human Work Surface

### 5.1 两种投影

```text
Canonical Matter State
├── Model-facing Context Projection
│   compact / normalized / executable
└── Human-facing Work Surface
    inspect / compare / trace / revise / decide
```

人需要看到原文锨点、来源关系、版本差异、未解冲突、覆盖缺口与裁决后果。模型需要紧凑、规范化、符合当前权限和任务阶段的工作集。两者来自同一正式状态，不必共用同一表示。

### 5.2 表示原语

| 原语 | 主要任务 |
|---|---|
| List / Table | 扫描、筛选、分类、逐项裁决 |
| Tree / Outline | 层级、范围与覆盖 |
| Anchored Document | 返回原文并局部校验 |
| Graph | 多对象与多关系 |
| Timeline | 先后、生效、变化与冲突 |
| State Graph | 步骤、责任、阻塞与转换 |
| Matrix | 两维覆盖、对应与冲突 |
| Diff / Lineage | 版本、候选、覆盖与撤回 |
| Queue / Coverage | 待处理对象、缺口与完成度 |

这些是 renderer grammar，不是通用 ontology。哪些节点、关系、字段、动作和权限合法，仍由 Work Contract 决定。

### 5.3 Review grammar

```text
Review Item
= Target
+ Anchors
+ Candidate Assertion or Change
+ Judgment Dimensions
+ Evidence
+ Decision
+ Authority
+ State Consequence
```

可复用的动作族包括 accept、reject、revise、request further work、request evidence、qualify、defer、waive、escalate、approve、publish、supersede 和 withdraw。动作名称不产生复用性；只有以下链路可复用：

```text
decision
→ authority requirement
→ validation
→ committed event type
→ semantic-state transition
→ artifact-version effect
→ next-context effect
```

### 5.4 文档与界面的晋升边界

HTML、Markdown、表格或图形只是 Work Surface 的表示。界面中的按钮、评论或勾选只有在生成 typed Candidate Decision，并经 Authority 与 validation 写入 Committed Event 时，才改变 Matter State 和 active Artifact。

```text
Model proposes Candidate
→ deterministic Renderer builds surface
→ Human reviews or revises
→ typed Candidate Decision
→ Authority and validation
→ Committed Event
→ State and active Artifact update
```

---

## 六、Work Extension 与隐性知识编订

### 6.1 产品吸收 Agent 复杂度

| Runtime 对象 | 专业用户面对的工作语义 |
|---|---|
| Session | Matter 中的一次执行 |
| Memory | 当前状态、可检索历史与适用范围 |
| Tool permission | 某项资源或行动权限 |
| Agent / Subagent | Operator 或 Lane |
| Output | Candidate Change / Artifact Version |
| Approval | 具有状态后果的专业裁决 |
| Plugin / Skill | Work Extension / Primitive / Expert dependency |

用户不必看不见这些技术对象，但默认交互应以专业对象和工作决定为中心。

### 6.2 从观察到 Contract

```text
expert demonstration
→ intervention and correction capture
→ separate invariant / institution / matter / habit / judgment
→ compile Contract / validator / surface / escalation
→ E2E without the original author
→ production review and revision
```

隐性知识首先表现为对任务、来源、Context、工具、失败、重试、完成和交付的手动控制。编订只抽取跨时间必须保留、会改变后续行动、支持 Review 或能被验证的部分，不序列化专家的全部认知过程。

### 6.3 分流

| 内容 | 去向 |
|---|---|
| 稳定义务、来源层级、必查项 | Domain Contract / Evaluator |
| 机构审批、格式、风险偏好 | Versioned institution configuration |
| 特定客户、Matter 和时点要求 | Matter context |
| 个人表达、捷径与工具偏好 | User preference，默认不推广 |
| 风险接受、策略与重大例外 | Human Review / Accountable Decision |

出现频率不能把个人习惯提升为机构规则，也不能把机构规则写成领域真理。

### 6.4 Search Contract

Review Contract 限定什么可以被接受；Search Contract 限定执行者应进入哪个 solution space。它可以规定先查哪类来源、什么冲突必须保留、哪些捷径禁止、何时扩大搜索、何时收敛、何时放弃并升级。

Search Contract 不能把候选空间收窄到只能复制旧答案。它的作用是保留专业搜索中稳定且可审阅的约束，并为超出声明边界的问题保留 frontier path。

### 6.5 从产品信号到训练候选

```text
codified artifacts
→ software-grounded interaction trajectories
→ governed situated judgment trajectories
```

第三类信号至少需要 Matter、State、Evidence、Candidate / Committed、Review、Authority、Outcome 与 later reversal。这些对象首先服务运行、恢复和 Eval；只有在 rights、failure attribution、held-out Work Eval 和外部现实反馈成立时，才成为 selective post-training 候选。产品成立不以训练飞轮成立为前提。

---

## 七、理念认证

### 7.1 验证目标

> 验证 Work Contract 能否在不修改宿主核心的条件下，被编译为可加载能力、Matter continuity、Context Projection、Human Work Surface、Authority boundary 与 typed commitment protocol。

理念认证只需一个可插拔或可适配的 Runtime、一个 Matter repository、一组 Work Extension、一个 Context Compiler、一个 Human Surface renderer 和一条 commit protocol。不必先完成多租户平台、市场、训练管线或全领域 ontology。

### 7.2 共享场景

至少使用三类责任结构不同的任务：

- 结构化对象的逐项裁决；
- 主张、来源、支持、反驳与限定的校勘；
- finding、control、evidence、owner 与 remediation 的整改裁决。

再增加一个弱 commitment 的对照场景，检查 Human Work Surface 是否在不依赖完整 Matter governance 时仍能改善 review bandwidth。

### 7.3 必要测试

#### Architecture

- **No Core Patch**：不修改宿主核心也能加载、撤销和恢复 Extension。
- **Upstream Upgrade**：等价接口替换只修改 adapter，不改变 Work semantics。
- **Plugin Reload**：重载后 Matter 与 active Artifact 不丢失。
- **AOT / JIT Equivalence**：预编译与运行时组合在相同边界下产生等价语义。

#### Continuity and governance

- **Session Replacement**：替换 Session 或模型后从 governed state 恢复。
- **Candidate / Committed Isolation**：未审阅 output 不改变 Current State。
- **Authority Failure**：越权裁决被拒绝并保留候选记录。
- **Retrieval / Canonical Separation**：检索命中的旧陈述不被自动恢复为当前状态。
- **Documentation Promotion**：Trace、Index、Candidate Decision、Active Contract 和 Accepted Artifact 具有不同写入路径。
- **Context Mutation Preservation**：限定、冲突、否定、来源和恢复路径不因压缩丢失。
- **State Sufficiency / History Disclosure**：对照 State-only、State + on-demand History 与 append-only Transcript，检查未被及时编入的 Observation、动态 Schema 和 trajectory-defined task 是否需要披露历史。
- **Patch Preservation**：State patch 采用 merge semantics 而不是无声全量覆写；旧字段删除、类型改变与非法 patch 必须显式验证、拒绝或回滚。

#### Sparse activation and Expert release

- **Sparse Capacity Scaling**：per-run Context 和 Tool surface 不随总存量线性增长。
- **Omission / Pollution**：必要约束不被遗漏，旧版本、其他 Matter 和越权 capability 不被引入。
- **Least Privilege**：激活能力只获得当前 role 与 stage 所需权限。
- **Three-tier Priority**：Preset 先于 Expert routing，Expert 先于 primitive composition。
- **Compiled Expert E2E**：评测整个 activation profile，而不是单个 tool 或 prompt。
- **Staleness / Revalidation**：依赖或现实变化能触发缩窄、暂停、回滚或弃用。
- **Graceful Escape**：未覆盖事项进入 Candidate-only frontier path，不被快速路径掩盖。

#### Review and evaluation

- **Completion Independence**：完成条件不由执行者临时降低。
- **UI Representation Equivalence**：不同 renderer 对同一裁决产生相同状态后果。
- **Review Bandwidth**：在成果质量不降低时，专家 Review 时间或恢复成本下降。
- **Correlated Review Failure**：注入共享错误前提、共同缺失来源和相同 Evaluator 偏差，检查多实例共识是否被误当独立验证。
- **Accepted Work Product**：结果由具备 Authority 的 Reviewer 在预定节点接受，可进入下游且无需实质性修改。

---

## 八、非目标与失败模式

### 8.1 非目标

本快照不主张：

- 某个宿主是唯一或永久实现；
- 把所有工作完全形式化；
- 把专业判断消除或转移给多个 Agent 投票；
- 把文档、索引、记忆或检索系统等同于 canonical state；
- 让普通用户在全量工具和 primitives 中自行编排；
- 以训练、市场规模或横向平台作为产品价值成立的前提。

### 8.2 失败模式

| 失败 | 判定 |
|---|---|
| Sidecar split-brain | Matter State 与 system of record 同时声称权威，却无明确 owner 和 reconciliation |
| Retrieval mistaken for governance | 语义相近的旧内容被当作当前有效状态 |
| Context optimization destroys evidence | 压缩降低 token，同时丢失限定、否定、冲突或坐标 |
| Surface theater | 界面更结构化，动作却没有 Authority 和状态后果 |
| Correlated consensus | 多个实例共享错误前提和 Evaluator，共识被误当独立校验 |
| Dense activation regression | 能力与数据总量增长时，每次 Run 的 Context 和权限表面同比增长 |
| Expert ossification | 旧来源、规则、工具或偏好因快速路径而持续生效 |
| False promotion | 成功 trace 在无适用范围、反例、Authority 和 held-out E2E 时晋升为 Expert |
| Annotation displacement | 结构化主要依赖专家额外填表，成本与使用量同比增长 |
| Interface overfit | 等价宿主变更即使专业语义或成果质量变化 |
| Structure without outcome | 结构增多，accepted-work-product、Review、恢复、缺口发现和成本均无改善 |

---

## 九、结论

当下实践的最小结构是：

```text
thin shared runtime
+ host adapter
+ Preset / Expert / Primitive activation
+ Matter State
+ Context Compiler
+ Human Work Surface
+ typed commitment boundary
+ E2E and lifecycle governance
```

这一结构把总能力、总知识与单次 Attention 分离，把执行拓扑与 Expert 语义分离，把原始记录、索引、当前状态与正式成果分离，并使 Context 的每次重写和 Output 的每次写回都可被检查。

是否成立不由宿主能力、界面完整度、Agent 数量、社区采用或库内 Expert 数量证明。裁决条件是：原作者离场后其他合格用户能否产生可采用成果，替换 Session、模型或宿主后工作能否恢复，候选与正式状态是否始终分离，专家 Review 或恢复成本是否下降，以及新形成的信号是否在 rights、归因和 held-out Work Eval 下具有增量价值。

---

## 9.1 快照说明

本版在不改变 Canonical ontology 的前提下，完成四项增量：将 Context Mutation 纳入 Projection 治理；在 State 足以支持后续执行时把 Current State 而非累积 Transcript 作为默认 execution substrate；区分 multi-agent 执行拓扑与 Compiled Expert 能力语义；区分原始轨迹、索引、当前状态、裁决记录与已接受文档成果。快照中不再保留宿主专属 API、产品故事、个人帖子或供应方数字；它们的来源、局部命题、不支持的外推、检验状态与本轮裁决改由 Practice Index 保留。
