---
Status: Companion Paper · Practice Snapshot
Edition: 2026-09-07
Revision: 9.6 · Generalized Practice Snapshot
Language: en
Source commit: a0234bc42dda75767554a2da89c247d66c2ad022
Canonical base: 2026-09-07 Canonical Edition
Scope: Sparse Work Harness, Compiled Work Expert, Matter Sidecar, Context governance, Human Work Surface, Work Extension compilation, offline Eval and validation.
Closure posture: This is a dated practice snapshot. It retains only the smallest, generalized conclusions that can be executed at present. Products, papers, community cases, sources, verification status and incremental adjudications are all recorded in the Practice Index and are not prerequisites for this text to stand.
---

# Schema Engineering in Practice

## Sparse Work Harness, Matter Continuity and Governed Work Surface

## Abstract

The practical problem of Schema Engineering is how to compile the reasoning, tools, sessions, permissions and interface capabilities already provided by general models and an Agentic Runtime into work capabilities that can be recovered, reviewed, committed and revised.

Practice should not begin from a particular host, product or success case. Its smallest starting point is four implementation-independent constraints:

1. Runtime provides execution mechanisms only; it does not automatically provide work semantics.
2. The total store must be separated from per-run Attention, or long-running work degenerates into repeatedly rereading everything.
3. Models, people and multiple executor instances may propose Candidate Changes only; complete output or agreement does not give them formal effect.
4. Professional users should handle work objects, evidence, versions, objections and decisions directly, rather than learning Session, Prompt, Tool routing or Subagent mechanics.

The current practice form can therefore be compressed as follows: place a host adapter layer above the general Runtime; combine governed Work Extensions with Compiled Work Experts through a Sparse Work Harness; keep formal state, outstanding obligations and Artifact versions in a Matter Sidecar; use a Context Compiler and Human Work Surface to produce different projections for the model and the person; and use a typed commitment boundary to determine what may take effect.

---

## I. Text Responsibility and Snapshot Method

This text records a practice construction that can be executed at present. It does not edit product cases, personal working methods or news-like trends. Each increment is handled in the following order:

```text
observe an instance or failure
→ state the smallest mechanism it may expose
→ separate observation from inference
→ test against existing Canonical and Practice text
→ adjudicate: no change / index only / practice revision / canonical revision
→ record the decision and disconfirming condition
```

The text accepts an increment only when all three conditions hold:

- it can be expressed independently of the original instance;
- it changes an implementation, verification or failure boundary;
- the existing text cannot absorb it with a smaller explanation.

Material that can only show that a product already provides a mechanism, that a team reports a benefit, or that an individual uses a particular organizational method defaults to the Index. Conclusions in the text must be understandable and testable without relying on the Index.

---

## II. Current Practice Boundaries

### 2.1 A Runtime seam is not a Work Contract

An available Agentic Runtime usually provides model, tool, sandbox, session, event, storage, permission, question, trace and UI extension points. These capabilities can carry a Work Extension, but they do not define:

- which Matter is being handled;
- what the current effective state is;
- which evidence supports which claim;
- what counts as complete;
- who may accept, approve, publish or bear the consequences;
- which Artifact version has taken effect.

The adapter layer therefore binds the host's general mechanisms to stable semantics; it must not become the sole place where domain rules are stored. Replacing an equivalent host interface should not change professional meaning. If it does, an interface accident has contaminated the Work Contract.

### 2.2 Capability surface and governance surface

The execution layer answers “what can this Run do?”; the governance layer answers “what may acquire what effect?”

```text
Capability surface
  tools / files / network / models / sessions / UI

Governance surface
  scope / evidence / completion / authority / review / commitment / recovery
```

Both may be implemented in one system, but successful tool invocation cannot substitute for work acceptance, and a host's saved Session cannot substitute for Matter continuity.

Implementation should keep high-depreciation model protocols, reasoning loops, streaming, generic tool calling and internal planner topology in the replaceable execution layer. Low-depreciation Matter State, Evidence, Authority, side-effect boundaries, validation, commitment, checkpoints and recovery belong in the governance layer. A stronger model may reduce imperative orchestration; it does not change which states have the authority to take effect. A Work Contract should first declare target states, invariants, sufficient Evidence, prohibited transitions and commitment conditions, fixing execution steps only where their order itself carries professional semantics.

### 2.3 Completion conditions must be external

Long-running execution cannot use the current Agent's self-assessment as its only termination condition. A minimal Completion Contract must decompose the goal into queryable obligations, bind an evidence procedure, validator or Reviewer to each obligation, and express continue, stop, return-for-revision and escalate as gates independent of the Agent.

This proves only that the stated completion conditions were checked; it does not prove that professional correctness has been fully formalized.

### 2.4 A correction must be compiled before it can be reused across Runs

A single correction shows only that a result changed for a particular Matter at a particular time. To enter subsequent execution, it must be distinguished as one of:

```text
artifact-local edit
matter-specific decision
institution convention
domain invariant
candidate evaluator or training signal
```

Only a change with declared provenance, scope, owner, review, version, rollback and subsequent verification can be promoted from Candidate feedback to a reusable rule. A readable, versionable instruction can become policy memory, but it can become part of a Work Contract only after it is bound to work objects, state, Evidence, Authority and outcome.

### 2.5 Persistence, retrieval and formal state are separate layers

Persistent content separately carries the responsibilities of raw record, current state and work rules. Memory supports saving and recall; Current Semantic State expresses currently effective facts, decisions and open obligations; Schema specifies object relations, state meanings and acceptable transitions, and constrains what should persist across Runs.

Stable semantics allow different executor instances to compare changes in the same work. A Candidate should cite the object and basis versions, declare what it proposes to change and its preconditions, and be revalidated against current state at commitment. When Schema versions change, establish an explicit mapping first, then explain the relationship between old state and the new Candidate.

Context Projection, Human Work Surface and Retrieval Index are different views needed for execution, adjudication and location. They jointly reference formal state and original sources; none maintains facts independently. When Current Semantic State can carry the information required for the next decision, it may serve as the default execution base. Observations not yet compiled, work relations still to be found and historical processes treated as research objects are supplemented on demand through Raw History / Evidence.

### 2.6 Context Mutation is an action with effects

Deletion, truncation, summarization, compression, folding and reloading change what the model can notice, compare and cite next. Context Mutation therefore defaults to changing only the Run-local working set; it does not change the Repository, Current Semantic State or Active Artifact.

A recoverable mutation records at least:

```text
source object or span
+ previous projection
+ proposed mutation and reason
+ scope and lifetime
+ resulting projection
+ recovery path
+ downstream outcome
```

Giving Context operations finer-grained credit can produce an Eval or training Candidate, but a local task score cannot answer whether the retained content has formal effect.

### 2.7 Multi-agent is execution topology; Expert is capability semantics

Multiple Agent instances mean multiple execution locations. They may run in parallel, delegate, compete, review or aggregate. A Compiled Expert instead represents a capability configuration declared and verified for a task family, with narrowed permissions.

```text
Run Plan
= Compiled Expert Profile
+ current Matter State
+ role and stage
+ current Authority
+ Context Projection
```

Multiple Agents may share one Expert, and one workflow may bind different Experts at different stages. The number of models, Sessions or terminals, or the names of roles, cannot replace an Expert's applicability, permission, Eval, fallback and release evidence. Agreement among multiple instances is not independent evidence or Authority.

The default coordination surface should be a governed artifact with identity, version, status, provenance and write rules, rather than high-frequency Agent-to-Agent conversation. Execution that can be split independently produces a bounded Candidate in an isolated branch and then converges through an explicit comparison, merge, discard or Review transition. Add a message edge only when communication itself produces necessary information. State mediation does not remove concurrent conflicts, so shared writes still need an owner, base version, conflict handling and commitment gate.

### 2.8 Documents are work surfaces, not automatically valid memory

A document may carry an execution specification, sources and reasons, a Review surface, a recovery index and an accepted artifact at the same time. Sharing one file form must not conflate these responsibilities:

| Object | Default standing | Can it directly change formal state? |
|---|---|---|
| Session / Tool Trace | Raw History / Evidence | No |
| Automatic summary or index | Retrieval aid / Candidate Projection | No |
| Contract / Decision Record | Depends on version and Authority | Only after commitment |
| Test and review report | Evidence / Review Record | Does not decide alone |
| Accepted document result | Active Artifact | Yes, after commitment |

Keeping the complete raw record helps with retrospection, and generating an index helps with recovery; neither replaces Current Semantic State.

### 2.9 Current practice propositions

The current snapshot carries only the following testable propositions:

1. Runtime and Work semantics can be separated through an adapter layer.
2. Externalized Completion, feedback compilation, work-domain isolation, persistent resources and Context management are complementary mechanisms, not substitutes for a complete architecture.
3. Sparse capability activation and sparse state projection must jointly undergo omission, pollution, permission and accepted-work-product checks.
4. Context Mutation, multi-agent topology and documentation workflow must all return to the same Candidate / Committed boundary.
5. Context Projection, Human Work Surface and Retrieval Index share the same authoritative state and materials and Candidates marked with source and effect; they do not maintain separate fact sources.
6. These propositions describe the current implementation direction; they are not a completed general validation.

---

## III. Reference Architecture: Sparse Work Harness

### 3.1 Layers

```text
Person / Organization / Downstream Work
        ↕
Human Work Surface
        review / revision / decision / work-state projection
        ↕
Sparse Work Harness ↔ Matter Sidecar or Existing System of Record
        Expert / Primitive Registry / Activation Planner / Context Compiler
        Work Contract / Candidates / Evidence / Authority / Committed State
        ↕
Host Adapter
        run control / capability negotiation / event mapping / context handoff
        ↕
Provider-managed Runtime or Thin Runtime
        model invocation / loop / tool dispatch / execution persistence
        ↕
Native API / Structured Browser Interaction / Computer Use
```

The layers are organized around the different rates at which work semantics and execution mechanisms change. Work Contract, Matter State and Expert manifest preserve work objects, evidence, permissions and acceptance conditions. Host Adapter binds this Assignment to host capabilities and translates run control and events. Human Work Surface gives the person the Candidate delta and the consequences of a decision. Execution events provide process evidence; formal state is still updated through the commitment path.

Runtime compatibility is judged against the capabilities required by the current Contract. The Adapter declares available control points, Context management, history access, recovery, authorization interception and effect checking, then selects a native implementation, a verified substitute or a narrowed task. This binding covers the materials that actually enter execution and the effects it can produce, including history recalled by the host itself. A task that cannot meet a necessary boundary is not executed. The host may retain its own scheduling, compression and concurrency mechanisms; work facts that must persist across Runs enter Matter State. The upper layer therefore shares work semantics while the lower layer executes according to its own capabilities.

The execution layer may consume a provider-managed Runtime or wrap a thin Runtime for a private model. A thin implementation begins with model invocation, constrained tool dispatch, event recording and continuation, relying on the upper layer's state, Context and approval contracts. The required execution infrastructure depends on autonomous length, concurrency and failure recovery; short feedback loops and explicit human adjudication points can reduce the burden of autonomous scheduling.

API, structured browser interaction and Computer Use are different channels for accessing external systems. The choice depends on the authorization, preconditions and result-checking ability the task requires, as well as operating and maintenance cost. When an effect is unknown, check it before continuing; frequent or more tightly controlled operations may be compiled as Work Primitives. Observed traces provide material for that compilation, while release still requires permission constraints and verification.

Mature implementations of generic execution, storage, retrieval and interface components may be reused. SE implementation work focuses on joining them into one semantic chain: generate a bounded work view from formal state, return a reviewable Candidate from execution, and write an accepted change back to the one authoritative state.

### 3.2 Seven objects

| Object | Logical responsibility |
|---|---|
| Runtime Plugin | General technical capability |
| Runtime Profile | A set of technical execution environments |
| Work Primitive | Smallest composable work capability |
| Work Extension | Domain semantics and implementation distributed to the host |
| Compiled Work Expert | An activation profile versioned, evaluated and permission-narrowed for a frequent task family |
| Matter State | Persistent work package for one concrete work item, containing Current Semantic State, versions, Evidence, decisions and outstanding obligations |
| Run Plan | One binding of Expert / primitives to Matter, role and stage |

Expert is not a personified Agent or a set of tools. Its smallest unit is:

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

### 3.3 Five load-bearing components

A Sparse Work Harness needs at least:

1. **Activation Planner**: selects a preset, Expert or constrained primitive composition from Matter type, role, stage and policy.
2. **Context Compiler**: generates the smallest sufficient working set from Stable Contract, Current Semantic State, Resources and History.
3. **Expert / Primitive Registry**: stores versions, dependencies, applicability, permissions, verification time and exit paths.
4. **Matter binding**: binds this execution to one work object, its current version and its open obligations.
5. **Commitment interface**: routes Candidate Output to Schema, Evidence, Completion, Authority and Review.

### 3.4 Three activation tiers

```text
Preset binding
→ Expert routing
→ bounded Primitive composition
```

Use a Preset when Matter type, role and stage determine the work. Resolve ordinary ambiguity among a small set of approved Experts. Enter primitive composition only when no applicable Expert exists, the task crosses domains or confidence is low. The last tier defaults to least-privilege and Candidate-only; it does not automatically acquire authority to approve, publish, transmit externally or perform irreversible actions.

Activation lifetime is layered as `organization → role → matter → stage → run`. The more stable material on the left is more suitable for precompilation; material closer to the current Run is more suitable for dynamic projection. Sparse does not mean hot-swapping every capability on every turn.

### 3.5 Release and depreciation of a Compiled Expert

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

A successful trace is not an Expert. Each version has at least an owner, applicability, exclusions, provenance, dependency versions, risk-stratified E2E, freshness trigger, abstention, fallback, rollback and deprecation path. Changes in regulations, sources, institutional policy, tools, models, task distribution or Reviewer outcomes can trigger revalidation.

Uncovered matters must exit safely:

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

## IV. Matter Sidecar and Context Compiler

### 4.1 Two data layers

Matter can first be implemented as a thin layer outside the existing Session and system of record; neither needs to be replaced at the outset.

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

An index can be rebuilt. Which result has been accepted, which Candidate has been rejected, who made what adjudication and what remains unfinished cannot be guessed back by resummarizing a Transcript. The semantic layer may be implemented through event sourcing, or it may use the transactional state, versions and commitment records of an existing system of record; recovery reads the specified authoritative state.

### 4.2 Minimal Matter declaration

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

A Matter can be associated with multiple Sessions. Deleting a Session, replacing a model or upgrading a host should not also delete the active Artifact, Current Semantic State or outstanding obligations.

Session is only the current interaction and attention window; Run / executor is one disposable execution attempt. Recovery testing must prove that a new executor can continue from canonical state, active Artifact, Evidence, open obligations and checkpoint, rather than relying on the old sandbox, the old model's subjective continuity or a complete transcript replay.

### 4.3 Store → Govern → Retrieve → Compile

```text
Store
  Sources / Events / Artifacts / Raw History / Current Semantic State
→ Govern
  identity / status / version / provenance / authority / scope / expiry
→ Retrieve
  relevant objects within the authorized scope
→ Compile
  Context Projection / Human Work Surface / Retrieval Index / Run Plan
```

Implementation begins with the recipient, purpose, task stage and state version of this Assignment to determine the available scope, then locates the objects and relations required to complete the current obligations. Queries, indexes and caches may share these operations; authorization rules execute before data enters the corresponding Runtime, tool or user interface. Relevance ranking decides priority only among materials that are permitted for use.

The Compiler organizes the working set around the task. Routing may use Matter category and open obligations; execution needs relevant facts, Evidence and current version; Review needs Candidate differences, criteria and unresolved conflicts. Each view retains the qualifications and sources on which its judgment depends. When it is insufficient for the next step, retrieve authorized material or return the gap. Context budget determines representation size; it cannot compile uncovered obligations as complete.

The source version, rule version and applicability of a view are saved with the generated result. After an object changes or permission expires, the reuse path reassesses applicability. Summaries and tool parameters that depend on private material carry the corresponding disclosure constraints; changing the representation or operation channel cannot enlarge the receiving scope. Enforcement occurs at the transfer boundary; it cannot be left to a confidentiality requirement in a Prompt.

This execution produces a Candidate with objects, versions and preconditions. The commitment path decides which content may be written back to formal state. External operations first pass authorization and precondition checks; after completion, their result evidence is associated with the corresponding Candidate. When the result is unknown, retain a state pending verification. A new Run continues from valid state and open obligations.

Artifact State and Evidence State answer different questions: “what is the current object?” and “which actions have been verified, and which claims remain unsupported?” Each work round carries both an Artifact that can continue to be modified and verification records bound to a specific version, while original material and historical actions remain retrievable. Intermediate reasoning may leave the next Context; continuity is carried by formal state, Evidence and the recovery path.

### 4.4 Context Mutation Preservation

Under the same task and resources, check deletion, summarization, compression and reloading separately for:

- whether qualifications, conflicts, negations and source coordinates are retained;
- whether Raw Evidence required by the retention policy can be recovered;
- whether superseded or rejected state is reintroduced;
- whether the mutation's scope, lifetime, provenance and recovery path are visible;
- whether a shorter Context improves accepted-work-product rather than only token count or local score.

---

## V. Human Work Surface

### 5.1 Three projections

```text
Current Semantic State + Sources / Evidence + Candidates
├── Context Projection
│   compact / normalized / executable
├── Human Work Surface
│   inspect / compare / trace / revise / decide
└── Retrieval Index
    identify / version / locate / disclose later
```

People need to see original anchors, source relations, version differences, unresolved conflicts, coverage gaps and adjudication consequences. The model needs a compact, normalized working set that conforms to current permissions and task stage. A future Runtime needs to relocate objects by Matter, state, version, applicability and provenance. The three explain sources and Candidates through the same authoritative state, retaining their own versions and effect; they need not share one representation.

### 5.2 Representation primitives

| Primitive | Main task |
|---|---|
| List / Table | Scan, filter, classify and adjudicate item by item |
| Tree / Outline | Hierarchy, scope and coverage |
| Anchored Document | Return original text and check it locally |
| Graph | Multiple objects and relations |
| Timeline | Sequence, effect, change and conflict |
| State Graph | Steps, responsibility, blockage and transition |
| Matrix | Two-dimensional coverage, correspondence and conflict |
| Diff / Lineage | Version, Candidate, coverage and withdrawal |
| Queue / Coverage | Objects to process, gaps and completion |

These are renderer grammar, not a general ontology. Which nodes, relations, fields, actions and permissions are valid is still determined by the Work Contract.

### 5.3 Review grammar

```text
Review Item
= Target
+ Anchors
+ Current Semantic State and Candidate Delta
+ Judgment Dimensions
+ Evidence
+ Automated Checks
+ Uncertainty and Open Questions
+ Commit Consequence and Reversibility
+ Decision
+ Authority
+ State Consequence
```

Review is compiled in batches around decision units with state consequences. The default surface holds the smallest sufficient set of objects needed to form an independent judgment. Raw Trace, old versions and supplementary Evidence remain retrievable and may be expanded as needed. Per-tool-call confirmation and replaying chronology after the fact cannot substitute for professional adjudication of the Candidate delta.

The primary interaction should make the state differences of `Current → Proposed → Reviewed → Committed` visible, while also showing prior state, Evidence, uncertainty, Authority, side effect, reversibility and recovery point. The model's internal plan, Agent avatar, Agent-to-Agent chat and decorative workflow graph should be disclosed progressively only when they help diagnosis or adjudication. The user first reviews the work change and its consequences, rather than watching an execution performance.

Reusable action families include accept, reject, revise, request further work, request evidence, qualify, defer, waive, escalate, approve, publish, supersede and withdraw. Action names do not create reusability. Only the following chain can be reused:

```text
decision
→ authority requirement
→ validation
→ committed event type
→ semantic-state transition
→ artifact-version effect
→ next-context effect
```

### 5.4 Promotion boundary between documents and interfaces

HTML, Markdown, tables and graphics are only representations of a Human Work Surface. A button, comment or checkmark in an interface updates Current Semantic State or the active Artifact reference only when it generates a typed Candidate Decision and Authority plus validation write a Committed Event.

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

## VI. Work Extension and Tacit Knowledge Compilation

### 6.1 Products absorb Agent complexity

| Runtime object | Work semantics facing the professional user |
|---|---|
| Session | One execution in a Matter |
| Memory | Recallable information, sources and applicability |
| Tool permission | Permission for a resource or action |
| Agent / Subagent | Execution location; Operator binds run obligations, Lane expresses parallel relations |
| Output | Candidate Change / Artifact Version |
| Approval | Professional adjudication with state consequences |
| Plugin / Skill | Work Extension / Primitive / Expert dependency |

Users need not be shielded from these technical objects, but the default interaction should center on professional objects and work decisions.

### 6.2 From observation to Contract

```text
expert demonstration
→ intervention and correction capture
→ separate invariant / institution / matter / habit / judgment
→ compile Contract / validator / surface / escalation
→ E2E without the original author
→ production review and revision
```

Tacit knowledge first appears as manual control over tasks, sources, Context, tools, failures, retries, completion and delivery. Compilation extracts only what must persist across time, changes subsequent action, supports Review or can be verified; it does not serialize the expert's entire cognitive process.

### 6.3 Routing

| Content | Destination |
|---|---|
| Stable obligations, source hierarchy, required checks | Domain Contract / Evaluator |
| Institutional approvals, format and risk preference | Versioned institution configuration |
| Requirements specific to a client, Matter and time | Matter context |
| Personal expression, shortcuts and tool preferences | User preference, not promoted by default |
| Risk acceptance, strategy and major exceptions | Human Review / Accountable Decision |

Frequency cannot promote a personal habit to an institutional rule, and an institutional rule cannot be written as a domain truth.

### 6.4 Search Contract

Review Contract limits what may be accepted; Search Contract limits which solution space an Agent should enter. It may specify which source classes to search first, which conflicts must be retained, which shortcuts are prohibited, when to broaden the search, when to converge, and when to abandon and escalate.

Search Contract must not narrow the Candidate space until it can only copy old answers. Its role is to preserve stable, reviewable constraints in professional search and to retain a frontier path for questions beyond its declared boundary.

### 6.5 Evaluation and improvement outside Runtime

Checks inside Runtime determine whether this Candidate may continue or be committed; Eval outside Runtime compares how different versions perform the same kind of work and supplies evidence for the next revision. They may share execution infrastructure and criteria, but an evaluation score does not give work formal effect. An offline evaluation produces evidence about system behavior and a revision Candidate; formal results and new versions still pass through their own acceptance and release boundaries.

```text
产品问题与工作要求
→ 可解释的局部信号
→ 跨任务、跨版本的评测
→ 沿 Evidence / State / Projection / Artifact 定位失败
→ Contract / Evaluator / Harness / Context / Tool / Model 修订候选
→ 重新评测与版本裁决
→ 后续工作中的反馈
```

Local signals turn a vague sense of quality into a traceable problem. Work Contract supplies coordinates for the investigation: which obligations remain unhandled, what a source supports, which relations entered persistent state, and where something was undisclosed or misused. Schema makes a gap identifiable; it does not guarantee that unrecorded information has been found, and it does not automatically turn an observable location into a cause of failure.

Compliance with the existing Contract and whether the Contract adequately expresses the work requirement are two different judgments. The former checks execution and result; the latter lets omissions, disagreement and consequences in real work revise the criteria in return. Eval therefore constrains how the system executes and helps the team judge whether what the system was originally required to do was appropriate.

### 6.6 From product signals to training Candidates

```text
codified artifacts
→ software-grounded interaction trajectories
→ governed situated judgment trajectories
```

The third class of signal requires at least Matter, State, Evidence, Candidate / Committed, Review, Authority, Outcome and later reversal. These objects first serve execution, recovery and Eval. They become selective post-training Candidates only when rights, failure attribution, held-out Work Eval and feedback from external reality are established. A product does not depend on a training flywheel for its own validity.

---

## VII. Validation of the Thesis

### 7.1 Validation target

> Validate whether a Work Contract can be compiled, without modifying the host core, into loadable capability, Matter continuity, Context Projection, Human Work Surface, Authority boundary and typed commitment protocol.

Thesis validation needs only one pluggable or adaptable Runtime, one Matter repository, a set of Work Extensions, one Context Compiler, one Human Work Surface renderer and one commit protocol. A multi-tenant platform, marketplace, training pipeline or ontology for every domain need not be completed first.

### 7.2 Shared scenarios

Use at least three task classes with different responsibility structures:

- item-by-item adjudication of structured objects;
- checking claims, sources, support, rebuttals and qualifications;
- remediation adjudication involving finding, control, evidence, owner and remediation.

Add one comparison scenario with weak commitment to check whether the Human Work Surface still improves review bandwidth without relying on full Matter governance.

### 7.3 Required tests

#### Architecture

- **No Core Patch**: load, revoke and recover an Extension without modifying the host core.
- **Upstream Upgrade**: an equivalent interface replacement changes only the adapter and does not change Work semantics.
- **Plugin Reload**: Matter and active Artifact survive reload.
- **AOT / JIT Equivalence**: precompilation and runtime composition produce equivalent semantics under the same boundaries.

#### Continuity and governance

- **Session Replacement**: recover from governed state after replacing a Session or model.
- **Candidate / Committed Isolation**: output that has not passed the applicable commitment checks does not change Current Semantic State.
- **Authority Failure**: an unauthorized adjudication is rejected and its Candidate record is retained.
- **Retrieval / Canonical Separation**: an old statement returned by retrieval is not automatically restored as current state.
- **Documentation Promotion**: Trace, Index, Candidate Decision, Active Contract and Accepted Artifact have different write paths.
- **Context Mutation Preservation**: qualifications, conflicts, negations, sources and recovery paths are not lost through compression.
- **State Sufficiency / History Disclosure**: compare State-only, State + on-demand History and append-only Transcript, checking whether an Observation not compiled in time, a dynamic Schema or a trajectory-defined task requires history to be disclosed.
- **Patch Preservation**: a State patch uses merge semantics rather than silently replacing the whole state; deleting an old field, changing its type and submitting an invalid patch must be explicitly verified, rejected or rolled back.
- **Failure Containment / Trusted Recovery**: inject errors respectively at Observation, Proposition, Candidate and validation stages, checking whether each is found or isolated before commitment and whether a new executor can recover from the nearest trusted checkpoint.

#### Sparse activation and Expert release

- **Sparse Capacity Scaling**: per-Run Context and Tool surface do not grow linearly with the total store.
- **Omission / Pollution**: necessary constraints are not omitted, and old versions, other Matters and unauthorized capabilities are not introduced.
- **Least Privilege**: activated capabilities receive only the permissions required by the current role and stage.
- **Three-tier Priority**: Preset comes before Expert routing, and Expert comes before primitive composition.
- **Compiled Expert E2E**: evaluate the entire activation profile rather than one tool or Prompt.
- **Staleness / Revalidation**: dependency or reality changes can trigger narrowing, pause, rollback or deprecation.
- **Graceful Escape**: uncovered matters enter a Candidate-only frontier path and are not hidden by the fast path.

#### Review and evaluation

- **Completion Independence**: completion conditions are not lowered temporarily by the Agent.
- **UI Representation Equivalence**: different renderers produce the same state consequence for the same adjudication.
- **Review Bandwidth**: when result quality does not decline, expert Review time or recovery cost decreases.
- **Review Sufficiency**: after removing the complete execution trace, a structured Review packet still lets the Reviewer find key errors, request necessary evidence and form an explainable independent judgment.
- **Projection Consistency**: rebuild three views from the same state and source snapshot, checking that Candidate identity, version and effect agree and that different disclosure ranges are not mistaken for factual conflict.
- **Evaluator Lifecycle**: criterion, rubric, reason and deployment version are traceable; a chance-correct label must not send an incorrectly attributed error into downstream revision or training signals.
- **Correlated Review Failure**: inject shared false premises, common missing sources and the same Evaluator bias, checking whether consensus among instances is mistaken for independent verification.
- **State-mediated Coordination**: compare governed branch / artifact convergence with high-frequency Agent messaging under the same task, checking conflict, duplicated work, error propagation, Context cost and accepted outcome.
- **Accepted Work Product**: a Reviewer with Authority accepts the result at the planned point; it can enter downstream work without substantive modification.

---

## VIII. Non-goals and Failure Modes

### 8.1 Non-goals

This snapshot does not claim:

- that any host is the sole or permanent implementation;
- that all work can be fully formalized;
- that professional judgment can be eliminated or transferred to a vote among Agents;
- that a document, index, memory or retrieval system is the same as Current Semantic State;
- that ordinary users should orchestrate all tools and primitives themselves;
- that training, market scale or a horizontal platform is a prerequisite for product value.

### 8.2 Failure modes

| Failure | Diagnosis |
|---|---|
| Sidecar split-brain | Matter State and the system of record both claim authority without a clear owner and reconciliation |
| Retrieval mistaken for governance | Semantically similar old content is treated as current effective state |
| Context optimization destroys evidence | Compression lowers token count while losing qualifications, negations, conflicts or coordinates |
| Surface theater | The interface becomes more structured, but actions have neither Authority nor state consequences |
| Formal HITL | A person is put in the loop without enough Evidence, time or state difference to form an independent judgment |
| Projection split-brain | Context Projection, Human Work Surface and Retrieval Index hold different facts or versions for the same Matter |
| Evaluator drift without governance | A changed rubric or reason alters production behavior without versioning, Review, monitoring or rollback |
| Correlated consensus | Multiple instances share false premises and an Evaluator, and consensus is mistaken for independent checking |
| Chatter topology | Agent messages become the fact source without versions, conflict handling or a commitment boundary |
| Executor-bound work | A new Session or executor cannot recover from governed Matter State and must rely on an old sandbox or transcript |
| Imperative ossification | Runtime can already choose an execution path safely, but the Contract still freezes unnecessary planner / worker / reviewer steps |
| Agent theater | The UI emphasizes internal plans, avatars and chat while weakening Candidate delta, Evidence, Authority and commit consequences |
| Dense activation regression | As capability and data volume grow, each Run's Context and permission surface grow at the same rate |
| Expert ossification | Old sources, rules, tools or preferences remain active through a fast path |
| False promotion | A successful trace is promoted to Expert without applicability, counterexamples, Authority and held-out E2E |
| Annotation displacement | Structured work depends mainly on extra expert form-filling, so cost grows with usage |
| Interface overfit | An equivalent host change alters professional semantics or result quality |
| Structure without outcome | More structure produces no improvement in accepted-work-product, Review, recovery, gap discovery or cost |

---

## IX. Conclusion

The smallest structure of current practice is:

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

This structure separates total capability, total knowledge and per-run Attention; separates execution topology from Expert semantics; separates raw records, indexes, current state and formal results; and makes every rewrite of Context and every write-back of Output inspectable.

Whether it holds is not proved by host capability, interface completeness, Agent count, community adoption or the number of Experts in a library. The adjudication conditions are whether qualified users other than the original author can produce adoptable results, whether work can recover after replacing a Session, model or host, whether Candidate and formal state remain separate, whether expert Review or recovery cost declines, and whether newly formed signals have incremental value under rights, attribution and held-out Work Eval.
