---
Status: WorkPaper · Canonical
Edition: 2026-09-07
Revision: Canonical Edition · 9.6 Minimal Revision
Language: en
Source commit: a0234bc42dda75767554a2da89c247d66c2ad022
Scope: From the capability boundary of general models and Agentic Runtime, through Work Extension, formal work, Context / Output governance, and the layered method, architecture boundaries, and evidence discipline of Work Eval and Post-agentic Refinement.
Finalization posture: The body presents only the current Kernel; sources, observations, checks, adjudications, and revision records are maintained by the Practice Index.
---

# Schema Engineering: Work Beyond the Model

## A method of weak compilation, work compilation, and layered governance from general capability to committable work

## Abstract

Probabilistic models can already search, compare, explain, draft, and call tools, but a single output cannot by itself acquire the factual effect, action authority, completion status, and accountability required by formal work. A Run ends, a model is replaced, and context is compressed; Matter, Artifact, Review decision, outstanding obligations, and applicability boundaries must continue to exist. Formal work cannot appear or disappear together with a single generation.

Another bottleneck for professional Agents is not merely model capability. A leading expert in an industry may personally run a high-quality Demo with a frontier Agent, but the Demo often depends on an unrecorded Human Harness: the expert chooses tasks and materials, identifies omissions, adjusts search and context, repairs failures, and judges what can be delivered. When the original author leaves, these capabilities often disappear with them.

Schema Engineering is a weak compilation and work compilation method for Agents. It does not reduce work to a table of fields. It compiles the implicit obligations, states, permissions, evidence, completion standards, and adjudication boundaries demonstrated by experts in real work into a versionable, executable, verifiable, and recoverable Work Contract, and uses the same Schema to govern provenance, versions, and evolution among Sources, Events, State, and Artifacts. The Work Contract thereby constrains how models and tools participate in work, specifies how candidate results enter formal state through Evidence, Completion, Authority, and Review, and turns Revision and Failure in production into the semantic basis for Eval, Environment, and subsequent system improvement.

This is not a manifesto for one kind of vertical Agent product. It is a method of compilation and commitment governance for Agents participating in consequential work. Professional Work Runtime is the complete profile of this Kernel in high-responsibility, high-semantic-density settings; general Infra primitives, host-loadable Work Extensions, embedded capabilities in existing systems, sidecars, vertical products, and organizational operating protocols can all be implementation forms. Products compile general governance primitives into work objects recognized by specific people; organizations provide final Authority, Accountability, and acceptance of the work product.

The method governs both ends of a Run. On the input side, it projects the Stable Contract, Current Semantic State, relevant resources, and retrievable history into task-specific Context; on the output side, it treats the Model / Human Proposal as a Candidate Change that can be written as a Committed Event and update Current Semantic State only after validation, authorization, and applicable Review. The quality of a single output therefore is not the quality of work across time; whenever output becomes input to later work, what remains after a run, what expires, and what receives priority next are part of system capability.

In the Continuity Profile, the input side can further be compressed into an operating pipeline: `Store → Govern → Retrieve → Compile`. Store preserves Sources, Events, Artifact versions, Raw History, and formal state; Govern gives these objects selectable semantics through Work Contract, commit protocol, status, version, Authority, and applicability; Retrieve returns potentially relevant objects; only Compile generates the minimally sufficient Context Projection, Human Work Surface, and Retrieval Index for the current Assignment, role, and task stage. This is an operational projection of the existing ontology. A Matter repository is not a Prompt, and a Work Contract is not a larger system prompt; information present in a user's workspace is not therefore required to be present in the current model Context.

The pipeline also decouples total work capacity from per-run Attention cost. Matter, history, institutional knowledge, and available capabilities may continue to grow; the working set activated by one Run should not grow linearly with total inventory. The meaning of a general Agent is therefore not `everything loaded`, but `anything governed is addressable`: it can enter different workspaces and reliably obtain the minimally sufficient Projection required by the current task.

For task families that are frequent and have stable boundaries, this Projection can be published further as a **Compiled Work Expert**: a versioned activation configuration that has passed E2E validation and permission convergence. Routine work should preferentially select such configurations through institutional policy or a small amount of Expert routing; only uncovered, cross-domain, or low-confidence tasks should fall back to constrained primitive composition. A Compiled Expert is a publication projection of an Agent Extension. It is not a personified Agent and does not add another professional ontology.

This method fully covers three mutually nested chains that must not be mixed:

```text
A. Expert Demonstration
→ Invisible Human Harness Extraction
→ Work Contract
→ Agent Extension
→ E2E Acceptance

B. Stable Contract / Current Semantic State / Resources
→ Context Projection
→ Model / Human Proposal
→ Candidate State Change / Candidate Artifact Version
→ Validation / Evidence / Authority / Review
→ Committed Change
→ Updated Current Semantic State / Active Artifact

C. Production Use / Review / Revision / Failure
→ Failure Attribution
→ Eval / Environment / Regression
→ Contract / Evaluator / Harness / Context / Tool Refinement
→ Selective Model Post-training, only when justified
```

The first compiles Expert Demonstration into an Agent Extension with its own Validator, Evaluator, Review boundary, and E2E release suite; the second projects Current Semantic State into finite Context, then writes a probabilistic Proposal as a Committed Change through a typed commitment interface; the third, after the Extension enters production, first attributes failures to Contract, Evaluator, Context, Tool, Harness, Model, or institutional disagreement, then selects the object to improve. Models propose and execute, deterministic systems maintain invariants, Evaluators measure explicitly specified semantics, and people carry out irreducible professional judgment.

Besides these three horizontal work chains, the system has a vertical layering that must not be mixed:

```text
Model Capability Layer
→ Agentic Runtime / Harness
→ Work Extension
→ Commitment Boundary / System of Record
→ Person / Organization / Downstream Work
```

The upstream layers extend reasoning, knowledge, tool use, and execution boundaries; the downstream layers converge general capability into a work penetration surface with domain semantics, HITL, Review, and accepted-work-product standards. Each layer has its own Contract, Eval, long-lived assets, and improvement cycle; success at an adjacent layer cannot prove that the layer itself is correct.

Law provides a high-requirement example but does not define the scope. Finance, medicine, consulting, research, engineering, compliance, auditing, and other work likewise require sources, permissions, versions, review, and accountability. A one-time high-consequence action requires commitment governance; work that extends across time, has state, and lacks a cheap stable verifier additionally requires Matter, continuity, and Context Projection. Domains can share Runtime primitives, but cannot thereby omit their own professional semantics.

## Part I　Weak Compilation and Formal Work

The Schema Engineering Kernel handles two irreducible transformations at once: how practice personally carried through by an expert becomes transferable Agent capability, and how a probabilistic proposal acquires accountable work commitment. Runtime objects, Contracts, Agent Extensions, and E2E all serve these transformations; they do not form competing ontologies.

### 1. Probabilistic Proposals and Organizational Commitment

A model output is first a proposal. Proposals can coexist, be withdrawn, be exploratory, and contradict one another; organizational commitment must answer scope, basis, version, responsibility, and consequence. No fluency of language automatically turns a proposal into organizational commitment.

A contract review opinion may be written completely yet still lack original-text coordinates, the applicable version, the risk acceptor, and approval status; a research report may list many sources without stating which claims have been adopted and which conclusions still require review; a tool call may succeed technically without acquiring business authority. Output quality and work effect are different objects.

A model also cannot simultaneously execute, define factual sources, set completion criteria, and make the final adjudication. When the four responsibilities are combined, the system cannot distinguish “the model considers this complete” from “the organization has accepted the work product,” nor can it reconstruct formal state when the model is replaced, a task is resumed, or accountability must be traced.

> **P6 — The model proposes; deterministic systems enforce invariants; the Evaluator measures explicitly specified semantics; people adjudicate irreducible professional judgment.**

Professional correctness usually has no cheap, complete Boolean oracle. Field structure, permissions, versions, citation coordinates, arithmetic, and explicit coverage can be checked by systems; importance, policy, risk acceptance, exceptions, and responsibility still require professional judgment. Hybrid adjudication preserves this distinction.

Formal work state therefore lies outside the model. A model may enter and leave execution, but organizational commitment cannot appear or disappear with a single output.

### 2. Schema Engineering and Work Contract

> **Schema Engineering is a weak compilation and work compilation method for Agents: it compiles the implicit obligations, states, permissions, evidence, completion standards, and adjudication boundaries demonstrated by experts in real work into a versionable, executable, verifiable, and recoverable Work Contract; uses the same Schema to govern the relationships among Sources, Events, State, and Artifacts in the work object (Matter in the Continuity Profile); and on that basis publishes an Agent Extension that can pass end-to-end acceptance and continue to improve through Review in production.**

It performs two different transformations:

```text
Expert practice → transferable Agent capability
Probabilistic proposal → accountable work commitment
```

The first addresses “how does a Demo personally carried through by an expert become a capability usable by others?”; the second addresses “on what grounds may a model output change formal state?” If only the latter is written, Schema Engineering degenerates into a Work Commitment Runtime; if only the former is written, it degenerates into productizing an expert workflow. Both transformations take place in a continuous Context / State loop: formal state is projected to an execution, and the result of that execution changes formal state through narrowed commitment.

This paper builds on existing methods for modeling work and matters, governing sources, managing versions, controlling commitments, and evaluation. Schema Engineering's contribution is to organize these methods around the Agent work lifecycle: compile expert intervention into a delegable Contract, use it to connect execution in finite Context with formal state outside the model, and let failure feedback enter bounded revision. No individual state machine, source model, or approval mechanism is newly invented here; what requires testing is whether this combination can improve delegation, continuity, and acceptance of the work product.

Its minimum operation is not “add structure to work,” but establish a typed commitment interface. Models and people can both propose changes, but neither can directly rewrite formal state:

```text
Stable Contract + Current Semantic State + selected Resources / History
→ Context Projection
→ Model / Human Proposal
→ Candidate State Change
→ Candidate Artifact Version, when applicable
→ Schema Validation
→ Evidence Check
→ Authority Check
→ Completion / Review Routing
→ Committed Event
→ Atomic Projection: Current Semantic State + Active Artifact Reference
→ New Context Projection
```

On the input side, it organizes real work into Context available to the current execution; on the output side, it organizes probabilistic results into a Candidate Change that can be committed, rejected, or reviewed. The Runtime does not execute all of the expert's thinking; it executes only the conditions a proposal must satisfy to enter formal work. The necessary boundary is candidate, formal checking, and traceable commitment; the diagram expresses it through event records and state projections, and existing systems' transactions, versions, and approval records can also carry it. Domain modeling, workflow, structured output, or memory summarization alone does not establish this boundary.

#### 2.1 Four Roles of the Work Contract

The Work Contract is the hub of the method, but it is not a complete professional knowledge base, the whole procedure, or a Boolean oracle. It carries four logical responsibilities at once:

1. **Execution specification**: specifies task families, target states, purpose limits on input resources, deliverables and audiences, invariants, tools and Authority, Evidence, Completion, Review, Escalation, and the state that must be retained for interruption and recovery. It declares what valid work and valid transitions must satisfy; it does not require freezing every execution path that the Runtime can choose for itself.
2. **Result and commitment validator**: provides the semantic source for schema validation, deterministic validators, evidence checks, completion ledgers, authority checks, evaluator rubrics, review routing, and accepted-work-product criteria. It determines which results can be rejected by machines, which require human adjudication, and which may acquire formal effect; it does not guarantee that a professional conclusion is necessarily correct.
3. **State and Context compiler**: specifies which facts, decisions, Artifacts, and outstanding obligations should persist; which information has a time limit or scope of applicability; which old states should be superseded; which content requires Human confirmation; and what the next Run should disclose first. It governs both input and output rather than merely helping a model generate a one-time result.
4. **Post-agentic Refinement target**: provides a stable reference for Failure Attribution, regression, Eval, and Environment, allowing a team to distinguish “the model was wrong” from “the product was not defined clearly,” then decide whether to modify Contract, Validator, Evaluator, Context, Tool, Harness, or model weights.

A Work Contract need not be one file. It can be compiled or projected into:

```text
state schema
+ artifact schema
+ evidence requirements
+ completion obligations
+ authority policy
+ review / escalation policy
+ context and resource policy
+ persistence / expiry / supersession policy
+ validators
+ evaluators
+ E2E and Work Eval cases
+ version / compatibility metadata
```

These objects may be physically combined in one system; their logical responsibilities must remain clear, while physical services need not be split apart.

#### 2.2 Why “Weak Compilation”

Compilation does not mean complete formal verification, nor does it require turning all expert knowledge into rules. It is a weak compiler because the source chiefly consists of incomplete demonstrations, revisions, accept / reject decisions, and invisible human substitutions; professional correctness usually has no cheap and complete Boolean oracle; the target is a hybrid Runtime composed jointly of deterministic systems, Evaluators, Agents, and people; and some semantics can only be represented as Review, Escalation, or Accountable Decision rather than adjudicated automatically.

The weak compiler therefore makes explicit only the boundaries required for reliable delegation. It makes explicit “the consequences and boundaries of judgment,” not “the entire mental process of judgment”:

- what matter is being handled;
- who bears the run obligation and who bears final accountability;
- what may be read, modified, approved, and published;
- which claims require sources;
- what is currently known, decided, and missing;
- what conditions count as complete;
- which judgments systems may adjudicate;
- which judgments must be carried by people;
- how modification, approval, and escalation change the formal work product;
- which results may enter long-lived state and which belong only to the current execution.

Fully encoding professional knowledge is both expensive and brittle. An expert may not be able to state a judgment process completely; rules that can be stated may apply only to a particular institution, client, moment, or personal habit. Schema does not seek a complete description of an entire domain. It retains only the minimum explicit semantics required for delegation, verification, recovery, review, and continued work.

Schema is not implicit knowledge itself, nor is it serialization of expert cognition. It is the intermediate representation exposed after implicit professional judgment has been made visible: it extracts only the work semantics that must persist across time, must change later action, must support Review, or must be verifiable, revocable, and attributable. The remaining judgment may stay with people, model reasoning, Source, Context, and contextualized Review.

#### 2.3 Schema as Work Outline and Catalog

Schema specifies how work objects are identified, related, and distinguished by state, and which changes have meaning under which conditions. It lets different people and execution instances compare judgments around the same object, version, and source without first reconstructing each other's conversation. Types, state machines, permission rules, provenance relations, and review conditions together form this intermediate representation; JSON Schema is only a constraint on data shape within it.

Here, an “outline form” does not crudely summarize complex work into a few sentences. It compresses reality within limited length and limited attention while retaining enough structure to recover the original relationships. A qualified Matter state should answer more than “what happened”; it should also be able to answer:

- Which material, communication, and version did this judgment come from?
- Which facts are confirmed, and which remain inference or working assumption?
- Which conclusion superseded which older conclusion, and when did it take effect?
- Which sources conflict with one another, and which relations are limiting rather than supporting?
- Why did the current state evolve to this point?
- When necessary, how can one return to the original text, old versions, and execution trace?

This is close to what cataloging emphasizes in distinguishing scholarship and examining the line of provenance: cataloging is not putting materials into drawers, but preserving the internal order of knowledge through origin, version, relation, evolution, and scope of applicability. What is borrowed here is not the decoration of a classical term, but a data-governance requirement: once provenance, version, state, conflict, and revocation are lost in compression, the natural language left behind no longer has the reliability of professional work even when it is semantically similar.

> **Schema does not stuff reality into a database; it leaves reality a traceable, updateable skeleton with which work can continue.**

Data governance at cataloging level is therefore itself part of work intelligence. Automatic summaries may serve as indexes or temporary projections, but cannot replace authoritative state; an unvalidated model output cannot become the fact for the next round merely because it is “written completely.”

Eval grows naturally from this compilation relation. Once the system explicitly records:

```text
state → source → judgment → transition → artifact
```

Eval can check whether the source is correct and still valid, whether a judgment crossed a precondition, whether conflicts were disclosed, whether a state transition conforms to the Contract, and whether an Artifact can be traced back along provenance. It is no longer a later-added set of questions, but a collation mechanism for the work catalog, contract, and result. Schema Engineering first solves “how to describe and continue a piece of work,” and then obtains “how to check that it stands under the standards it declared.”

#### 2.4 Which Semantics Deserve Explicit Representation

Schema makes the consequences of judgment explicit, not the complete process of judgment. A semantic object generally deserves to enter Schema when most of the following conditions hold:

1. It changes formal state, such as acceptance, rejection, approval, publication, completion, or escalation.
2. It must persist across time, models, or people.
3. Operators, Reviewers, and the Accountable Principal need a shared understanding of it.
4. Omission or misunderstanding would cause an erroneous commitment, duplicated work, unclear accountability, version drift, or costly Review.
5. It is stable enough to name and maintain at acceptable cost.
6. Making it explicit changes validation, routing, Authority, Completion, Review, or Context Projection rather than merely adding a field.
7. It changes what the next execution should see first, or determines whether the current output may enter long-lived state.
8. It can be captured, explained, and maintained at a cost below its expected governance benefit, without requiring experts to increase form-filling and annotation labor in the same proportion.

Low-risk and reversible judgments, information used only in one-off reasoning, professional intuition highly dependent on overall context, content that is cheap to re-infer, and descriptions that do not affect formal state may remain in source, context, or Reviewer judgment. If making something explicit continually produces many exceptions or false certainty, it should be returned to a weaker representation.

Every field and object needs a deletion test: after removal, does recovery, permission, audit, completion, Review, Context Projection, or adoption of the work product become observably worse? If it has no measurable long-term effect, it should not continue to occupy the Schema. P13 and F12 are therefore also everyday product discipline, not only something to use when models are upgraded.

The deletion test must be applied together with Capture Economics. Even if a semantic object has theoretical value, it should not become the default Schema if only the most expensive experts can keep filling it in by hand and its maintenance cost approaches or exceeds the Review, recovery, and error cost it saves. The preferred path is:

```text
normal work behavior
→ implicit event / before-after capture
→ uncertain semantic inference
→ selective clarification, only when ambiguity matters
→ Candidate rule or state change
→ authorized promotion
```

The path should not ask experts to turn routine work into frequent data labeling for the sake of future AI learning.

When generalizing to a new setting, do not begin with “what can be structured?” Begin by answering four minimum questions:

```text
What persists?                 运行结束后，哪些事实、决定和 Artifact 应当留下？
What expires?                  哪些信息具有时效、版本或适用范围？
What gates action?             什么状态必须确认后才能继续或提交？
What deserves attention next? 下一次执行应优先披露什么，而不是重放全部历史？
```

If a Schema declaration cannot change any of these four questions, nor improve validation, Review, recovery, or accountability, it is likely formalism alone.

## Part II　Work Commitment and Continuity Runtime

This Part covers two nested but non-equivalent scopes. The **Commitment Kernel** applies to any probabilistic Output that may change persistent shared state, trigger external action, or produce real-world consequences, even if it occurs only once; the **Continuity Kernel** additionally applies to work that persists across Runs, people, or time. Matter, Event Ledger, Semantic State, and Context Projection primarily serve the latter; Candidate, Authority, Review, and Committed Change serve both. Professional Work Runtime is the high-assurance profile where the two overlap; it does not constitute the full scope.

### 3. Matter, Not Session

A Run ends, a model is replaced, context is compressed, and the user returns the next day. Work that needs to persist must still retain materials, facts, versions, unresolved questions, permissions, and review results. If work exists only in a transcript, continuity depends on repeatedly compressing past conversations, guessing at implicit reasoning from an old model, reproducing a one-time prompt, and the user's memory of “where we left off.”

In the Continuity Profile, the primary user object of a Professional Work product is **Matter**: the smallest unit of work commitment with an identifiable accountability boundary, state continuity, and a history of work products or decisions. A Matter may be a case, a transaction, an audit, a research task, a client project, or an independently handled and tracked piece of work arising in ongoing operations.

Session is the temporary interaction and attention window for a Matter; Run is one executable attempt within it that may stop, fail, or be replaced; Matter is the work itself. New Sessions, models, or executors must be able to recover the work from governed state without reproducing the complete transcript.

> **P1 — Matter over Session: Session is an infrastructure object; Matter is the user object.**

Matter holds identity, resources, participants, permissions, Assignments, Artifacts, Semantic State, evidence, Events, Reviews, and outcomes. Conversation still exists, but only as one interaction surface.

> **P2 — Conversation is an interaction surface, not the product ontology: Conversation is an interaction surface, not the work ontology.**

A governed Matter can further be understood as a **semantic repository**. It has stable identity, authoritative current state, versioned Artifacts, candidate changes, Review, commit, and recoverable history; when necessary, competing hypotheses, plans, or institutional configurations can evolve on independent branches / forks, entering the current authoritative state only after applicable Evidence, Authority, and Review. What is borrowed here is the governance level of a repository, not a requirement that professional users operate Git directly, nor a requirement that every work detail be made into a file.

The authoritative semantic layer of this repository is usually much smaller than the raw materials and complete execution history it references, while having higher semantic density. It does not use boilerplate, execution logs, and the full transcript as current state. It mainly preserves findings that remain valid, evidence relations, decisions, open issues, the active Artifact version, and outstanding obligations. Merging a Fork is also not a text-level merge, but a business adjudication of which judgment, plan, or version acquires formal effect.

Topic-level memory belongs to another layer. It can retain preferences, project facts, continuing concerns, and recent changes by topic, reducing repeated explanations across Sessions; but Topic answers “what are these pieces of information about?” It need not answer for objective, Accountable Principal, Artifact, Authority, Completion, Review, formal version, or commitment history. Moving from transcript summaries to editable, continuously updated topics is therefore progress from chronology toward semantic persistence, but it does not automatically constitute Matter management.

> **Topic organizes remembered information; Matter organizes accountable work: Topic organizes remembered information; Matter organizes accountable work.**

When users return to a Matter, they are not looking for a Session with an automatically generated title; when they review an Artifact version, they are not guessing from a message stream which answer has taken effect; when they resume work, they read current state rather than replaying the complete chat.

Portfolio, Queue, Program, or Practice sit above Matter and organize multiple Matters. Continuous monitoring, periodic compliance, long-term account management, and ticket queues are usually managed by these higher-level objects, which create a Matter when an independent responsibility, state, or work product appears. Putting an entire long-term responsibility into one Matter makes Matter an unbounded workspace; making every small event a Matter causes over-modeling.

Ordinary chat, companionship, and open exploration may share persistent Runtime primitives, but need not share the Evidence, Completion, Authority, Operational Responsibility, and Accountability semantics of professional work. Matter-first is a choice of professional work object; it is not a renaming of every long-lived conversation as Work.

### 4. Work Commitment and Continuity Runtime

Runtime objects represent logical responsibilities, states, and authority boundaries. The following uses event sourcing as a reference implementation: Committed Event preserves effective changes, and a reducer generates Current Semantic State from events. Existing systems can also implement the same semantics with transactional state tables, versioned work products, and auditable commitment records; they must preserve a unique canonical owner, validated writes, and recoverable state, but need not reconstruct all history from an event log. A one-time consequential action may implement only Candidate → Authority / Review → Committed Change; when work needs to persist, Matter and continuity objects are introduced.

Two kinds of “minimum” must be distinguished here:

- **Semantic Minimum** is the complete logical loop needed to describe high-assurance continuous work, namely the Continuity Runtime Kernel in this section;
- **Deployable Minimum** is the smallest product slice that lets a user first experience work as no longer existing only in Chat, and usually implements just one real commitment boundary.

Semantic Minimum defines the direction of extension; it is not a prerequisite construction checklist for product adoption. Deployable Minimum can place multiple logical objects in an existing system or monolithic implementation. The complete Kernel consists of:

```text
Matter
├── Resources / Context
├── Assignment / Work Contract
├── Operator
│   ├── Lane
│   │   └── Run
│   └── Delegated Operator
├── Accountable Principal
├── Event Ledger
├── Semantic State
│   └── Evidence Graph
├── Artifacts
└── Review
    └── Revision / Outcome
```

#### 4.1 Matter

Matter is the smallest unit of work commitment. It defines the accountability boundary, resources, participants, permissions, current facts, formal work products, and decision history. It persists across models, Conversations, and people, and can contain multiple Assignments and multiple versions of the same Artifact; Portfolio, Queue, Program, and Practice only organize multiple Matters.

#### 4.2 Assignment and Work Contract

Assignment is a bounded delegation within a Matter, not an alias for a natural-language prompt. It specifies at least the objective, deliverable, audience, constraints, deadline, authority, completion requirements, and Review requirements.

Assignment states may include not started, in progress, blocked, awaiting review, completed, superseded, and cancelled. The Runtime maintains these states; they cannot exist only in an Agent's natural-language self-report.

Work Contract is the collection of contracts that constrains an Assignment and supports reuse across the same task family. Here it serves as the semantic source for the execution specification and commitment validation, and after production becomes a reference for Failure Attribution and improvement. Matter is the work object, Assignment is one bounded delegation, and Work Contract is a versionable specification; they do not need to be combined into a new superordinate term.

#### 4.3 Operator and Accountable Principal

An Operator bears stable **Operational Responsibility** for a given scope. It may be a person, a primary Agent, or a delegated Agent. This responsibility means only who must execute, recover, deliver, or escalate the work; it does not mean who ultimately bears professional, organizational, or legal consequences.

**Authority** specifies who is permitted to read, propose, modify, approve, publish, or delegate. **Accountability** specifies who ultimately accepts the professional judgment and organizational consequences. An Accountable Principal must be a person or organizational role capable of bearing that accountability; an Agent may acquire part of Operational Responsibility and Authority, but cannot acquire irreducible Accountability on its own.

A new Operator exists only when Operational Responsibility, scope, tools, Authority, completion obligation, and escalation path are relatively independent. Each Assignment must make the Operator, authorization scope, and Accountable Principal explicit; the three fields cannot substitute for one another.

Parallel calls, retrieval threads, or background tasks do not automatically form Multi-agent. Neither the run obligation nor ultimate accountability can be inferred from computation topology.

#### 4.4 Lane

Lane is an independent work line or execution cursor within the same Operator. Different Lanes may inspect questions in parallel, gather materials, or draft different parts while sharing Operational Responsibility and Authority.

> **P9 — Lane is parallelism; Operator carries operational responsibility; the Accountable Principal carries ultimate accountability: Lane represents parallelism, Operator bears the run obligation, and the Accountable Principal bears ultimate accountability.**

A Lane is promoted to a new Operator only after it acquires independent Operational Responsibility, Authority, completion obligations, and an escalation path.

#### 4.5 Run

Run is one activation of a Lane. It receives inputs, calls tools, reads or updates state, creates or modifies Artifacts, produces Events, requests Review, and may stop, fail, or recover.

A Run carries only one temporary execution. Its model invocation, sandbox, tools, and working Context may all be replaced. Its ending does not prove that the Assignment is complete, and completion of an Assignment does not mean that the Matter has ended; disposable state in a Run cannot be the sole source for recovering a Matter.

#### 4.6 Event

Event records “What happened,” but candidate changes and changes already in effect must be separated:

- **Candidate Event** records a pending state change and has no formal effect;
- **Committed Event** has passed Schema Validation, Evidence Check, Authority Check, and applicable Review Policy and may change Current Semantic State.

Both models and people may propose Candidate Events, but only the Runtime may write a Committed Event Ledger under the commitment protocol. Within the applicable retention policy, a Committed Event is not silently rewritten; corrections are expressed through a new Committed Event, while deletion, anonymization, and archival are handled by explicit rights and retention policies.

Typical Events include assignment accepted, resource accessed, tool called, artifact proposed, review requested, revision committed, approval granted, and failure occurred. The Committed Event Ledger is the authoritative record of formal state transitions; execution traces and uncommitted candidates may be stored separately but must not be mixed into the formal ledger.

#### 4.7 Artifact

Artifact is a formal work product that can enter a real workflow, with identity, type, version, provenance, status, and downstream use. Documents, spreadsheets, redlines, workpapers, findings, decisions, plans, and structured issue sets may all be Artifacts. Artifact content is stored in a versioned Artifact Store; a Committed Event references an immutable Artifact version, while Current Semantic State stores only the reference to and status of the current authoritative version.

A Candidate Artifact Version may be staged before commitment and has no formal effect. It becomes a formal Artifact only after the Committed Event referencing that version is written to the ledger. A Chat answer likewise enters formal work only through this path, or by forming another state change that has already been committed.

#### 4.8 Semantic State

Semantic State represents “What is happening now.” Each claim, finding, or decision carries at least two independent state axes:

| State axis | Available states | Question answered |
|---|---|---|
| Epistemic Status | proposed、supported、contradicted、uncertain、working assumption、resolved | What state are the evidence and knowledge in? |
| Institutional Status | draft、under review、approved、published、superseded、withdrawn | What effect has the organization assigned? |

Sufficient evidence does not mean approved; acceptance as a business decision does not mean that something has been proved as an objective fact. Current Semantic State also preserves open issues, Evidence relations and gaps, coverage, completion status, pending decisions, active Artifact references, and Review state.

> **P3 — Transcript is evidence of execution, not canonical work state: Transcript is evidence of execution, not canonical work state.**

In an event-sourced implementation, the Committed Event Ledger is the authoritative record of state transitions, while Current Semantic State is the deterministic projection of those events. It can be checkpointed and rebuilt from the ledger and referenced Artifact versions. When an existing system of record holds the state, recovery follows its formal versions and commitment records. Artifact Store preserves work-product content, while Semantic State preserves the authoritative version reference; when the reference and actual version disagree, the Runtime blocks further commitment and enters a repair flow.

#### 4.9 Review

Review is an adjudication action in the work lifecycle. It includes accept, reject, revise, request further work, escalate, approve, and promote policy. A Reviewer first proposes a Candidate Decision; after the Runtime checks Authority and Review Policy, it writes a Committed Event, and the reducer then updates Current Semantic State and the active Artifact reference. Review does not directly rewrite State.

A professional system does not aim for “click Yes all the way through.” Review should appear only at nodes with professional, permission, or learning-governance significance, and must change formal state rather than merely leave a comment.

#### 4.10 Lifecycle

These objects together form a recoverable work chain:

```text
Matter created
→ Resources, Accountable Principal and permissions established
→ Assignment accepted
→ Operator and Work Contract selected
→ one or more Lanes execute through Runs
→ Candidate State Changes and Candidate Artifact Versions proposed
→ Schema, Evidence and Authority checks executed
→ Completion / Review Policy routes the candidate
→ Committed Event appended
→ Current Semantic State and active Artifact reference projected atomically
→ Outcome and reusable signals recorded
```

The chain need not proceed linearly. Review may return a work product to execution, an Assignment may be split among new Operators, new evidence may reopen a closed issue, and a new Artifact may replace an old version. Each turnback changes Current Semantic State and the active Artifact reference through a Committed Event; history and current state therefore remain consistent.

### 5. History, State, Context, and Output Must Not Be Conflated

Persistent work must answer four questions separately:

| Question | Carrier | Function |
|---|---|---|
| What happened? | Committed Event Ledger and Raw History | Formal state transitions and execution traceability |
| What is true now? | Current Semantic State | Current facts, decisions, supersession, outstanding obligations |
| What should the next execution see? | Context Projection | Temporary view for a particular Operator, Lane, and Run |
| What produced by this run may remain? | Candidate Change + Commit Protocol | Distinguishes temporary results from formal state updates |

Transcript cannot carry all four responsibilities at once. The longer history becomes, the higher the cost of injecting it in full; repeated summaries in turn write temporary interpretations as facts and accumulate drift over multiple compressions. Ungoverned output that enters memory directly also carries a one-off speculation, old version, or unreviewed result into later executions.

For long-running work where the information needed for future decisions can be expressed as current semantic state, the normative execution substrate should be Current Semantic State rather than an accumulating Transcript. History remains in the evidence and provenance layer: it is retrieved and disclosed when needed, not replayed as execution context by default.

Continuity consists jointly of three layers of persistent content and one commitment path:

#### 5.1 Stable Contract

Stable Contract preserves long-term stable role, institutional policy, Assignment semantics, professional schema, permissions, and tool authority.

#### 5.2 Current Semantic State

Current Semantic State preserves dual-axis claim status, open issues, Evidence Relations, coverage, active Artifact reference, completion, decisions, and pending Review; it is maintained by the designated system of record, and in an event-sourced implementation is the current projection of Committed Events.

#### 5.3 Raw History / Evidence

Raw History / Evidence preserves the complete transcript, original materials, tool traces, Candidate Events, execution traces, and old work-product versions. They are retrievable by default, not injected in full by default, and cannot directly change Current Semantic State.

> **P4 — Continuity comes from stable contracts, current Semantic State and retrievable history: Continuity comes from stable contracts, current Semantic State, and retrievable history; it does not depend on repeatedly compressing chronology.**

Isolating persistent content by work domain, preserving retrievable history, and generating a working set on demand solve only the recall boundary and attention allocation. They do not automatically establish authoritative Semantic State, Evidence status, Authority, supersession, or commitment governance.

#### 5.4 Store → Govern → Retrieve → Compile

Context is a temporary working view for the current Assignment. It selects, from persistent content, objects that the current execution is authorized to use and that relate to its current obligations, while retaining the state, sources, and qualifications needed for judgment. The input side of Continuity Runtime consists of four responsibilities:

```text
Store
→ preserve Sources / Events / Artifacts / Raw History / Current Semantic State

Govern
→ assign identity / status / version / provenance / authority / scope / expiry

Retrieve
→ locate relevant objects within the authorized scope

Compile
→ represent the working set for this recipient, task and stage
```

Govern determines an object's effect and use boundary, Retrieve locates candidate materials, and Compile organizes them into a representation usable for current work. Relevance cannot grant access; an object may be readable without its claims being supported or already in effect. Disclosure is constrained jointly by recipient, Assignment, purpose, and current rules, and the rules are applied before data is handed to the relevant recipient.

Context Projection, Human Work Surface, and Retrieval Index serve execution, adjudication, and future location respectively. They may use different levels of granularity, but the identity, version, source, and effect of the same object must remain consistent. An executor may see only facts and Evidence relevant to the current question, while a Reviewer needs candidate differences, unresolved conflicts, and decision consequences. An omitted item in a Projection does not therefore become a negative fact; unknowns, qualifications, and disagreements that affect judgment should remain in the view, and when materials are insufficient they should be supplemented through an authorized path or the question should be returned for adjudication.

Every rule in the Govern layer needs an owner, scope, version, review path, disagreement representation, deprecation, and rollback. If these rules can be maintained only by a few experts forever by hand, or their structuring cost grows in proportion to usage, the Runtime has merely rewritten the invisible Human Harness as configuration labor.

A Projection is rebuilt as tasks, permissions, and state change. Its inputs are Stable Contract, Current Semantic State, selected Resources / History, and the current Assignment; formal state and Evidence protected by the retention policy remain outside the Projection. Recovery therefore restores valid state and regenerates the working view; an expired permission or old view cannot become effective again merely because execution resumes.

Deletion, truncation, summarization, compression, folding, and reloading are **Context Mutation**. They change what the current Run can attend to, compare, and cite. Their effect is limited to the working view; facts and decisions requiring long-term retention still follow the formal commitment path, while Raw Evidence is retained under the retention policy. A mutation affecting recovery, source integrity, or an important judgment should preserve its source, scope, reason for change, and recovery path.

#### 5.5 Bidirectional Governance of a Run

A Run does not generate “new memory” directly from “all memory.” It sits between two governance steps:

```text
Stable Contract + Current Semantic State + selected Resources / History
→ Task-specific Context Projection
→ Model Attention / Tool Execution
→ Candidate Output
→ Schema / Evidence / Authority / Completion / Review
→ Committed Event + Committed Artifact Version
→ New Current Semantic State
→ Next Context Projection
```

The input side determines which materials enter attention and in what state; the output side determines which results acquire formal effect. Unsupported findings, plans, and candidate work products may be saved, retrieved, and placed in authorized views for continued execution and Review, but their candidate identity, source, and scope of applicability must remain. Only a change that passes the relevant Contract may update authoritative state or the active Artifact. Visibility serves work; commitment determines effect.

The commitment boundary limits erroneous acquisition of formal effect, while source and epistemic status constrain how a result may be used in later work. Errors in candidates can still spread through sharing and retrieval, so later views must retain their unsupported, disputed, or awaiting-review status; recording a working assumption as a formal record does not turn it into a confirmed fact. Once a deviation is discovered, the system should locate the affected candidate, state, and work product, revise its effect, and continue from a checked state. Long-run reliability is supported by this chain of discovery, limitation, correction, and recovery.

> **P18 — Context is a projection; output is a candidate state update: Context is a projection generated for current work; Output is only a candidate state update and must not be persisted as Memory by default.**

This distinction lets a system retain rich exploration without contaminating current state with brainstorming, withdrawn judgments, failed attempts, and unreviewed results. It also shows that one-shot quality and longitudinal work quality are different metrics: one generation may be excellent while work across time still fails because state was not updated, version supersession was wrong, a source expired, or an error was persisted.

#### 5.6 Attention Economics

A larger context window reduces some retrieval and compression pressure, but does not remove information governance. At least three constraints remain:

1. **Visible information is not the same as effective information.** A model “seeing” the entire history does not mean that it will assign the correct weight to the information that is currently valid and most consequential.
2. **Semantic similarity is not epistemic status.** Confirmed facts, old conclusions, user guesses, withdrawn decisions, authoritative sources, and brainstorming may be semantically similar, but cannot be used as equals.
3. **Output becomes upstream of the next Context.** If an unvalidated result is persisted directly, it accumulates into erroneous state, erroneous summaries, and erroneous retrieval indexes.

Without structured governance, a system often pays the same cost repeatedly:

```text
全部历史
→ 塞入 Context
→ 模型重新辨别有效与失效状态
→ 再摘要或压缩
→ 丢弃大部分
→ 下一次重新开始
```

Schema Engineering rewrites it as:

```text
Raw History / Evidence
→ 一次编订与提交
→ Current Semantic State
→ task-specific Context Projection
```

The former repeatedly pays token, latency, retrieval, context-construction, state-reclassification, and attention-dilution costs; the latter preserves resolved state judgments and discloses them progressively only when the current task needs them. More Context therefore cannot automatically equal better Context. Expanding a context window resembles expanding repository capacity; it does not make catalogs, versions, and authoritative relations valueless.

The key contribution of this semantic repository to attention economics is not to create another shortened transcript, but to separate voluminous materials and traces from authoritative state that is smaller in volume and higher in semantic density. Under the same Context budget, one no longer mainly loads chronology whose validity must be reclassified; one loads committed facts, judgments, relations, versions, applicability boundaries, and outstanding obligations.

Context Projection is also not a fresh summary of the entire repository. It is the working view for this execution compiled from authoritative state. With the same model and Context budget, this compilation can carry a longer Matter horizon and higher semantic complexity; it expands the effective capability boundary supported by work infrastructure, which does not mean the model parameters themselves have received an equivalent improvement.

Schema Engineering controls the transformations among Reality, Sources, State, Contract, Projection, and Output. It does not try to be smarter than the model; under finite attention, it configures model capability for the correct reality.

Memory is no longer an ever-growing “model memory jar.” What must persist are professional objects, formal state, source relations, and retrieval rights; each model execution receives only the Projection relevant to it.

This can be further described as **sparse activation** of the work knowledge layer:

```text
Total governed work knowledge and capability
→ Matter / Contract / Catalog boundary
→ retrieve potentially relevant objects and packs
→ compile a minimal sufficient working set
→ Model Attention / Tool Execution / Human Review
```

The goal is not to compress the total inventory into one permanent summary, but to decouple total capacity from per-run activation cost. As Matter, Artifacts, history, and available capability grow, per-run Context should vary mainly with the working set of the current Assignment rather than linearly with the entire repository. The Compile layer controls two kinds of error at once: under-inclusion may omit binding facts, the active version, or Authority; over-inclusion may introduce superseded, unauthorized, or irrelevant objects, increasing token, attention-dilution, state-reclassification, and stale-context risks.

This structure can be compared in a limited way with Mixture-of-Experts inside a model: MoE sparsifies computation over model capacity, while Matter Runtime sparsifies Attention over work knowledge and capability. Both attempt to decouple total capacity from per-run cost; but model experts are usually homogeneous parameter modules activated by a learned router, whereas Matter, Work Contract, Evidence, Authority, and Tool are heterogeneous, stateful objects with provenance and real-world consequences. The routing here is closer to semantic compilation, least-privilege composition, and a governance gate, and cannot be directly replaced by MoE top-k gating. The comparison illustrates a scaling principle; it is not evidence of implementation or correctness.

### 6. Contract Discipline

Professional work is constrained by a set of complementary contracts. A single schema cannot express sources, permissions, completion, work products, and adjudication at the same time.

#### 6.1 Explore Broadly Within Authorization; Commit Narrowly at the Formal Boundary

Assignment separately constrains the resources that may be read, the changes that may be proposed, and the results that may be committed or transmitted externally. Read permission does not grant commitment permission; lawful reading and a lawful tool call cannot automatically combine into permission to disclose information to any recipient. Purpose and recipient scope therefore constrain information propagation in Context, tool parameters, and deliverables, and external transmission must satisfy the relevant authorization conditions before it occurs.

> **P5 — Explore broadly within authorized scope; commit narrowly across the formal boundary: Only a narrow boundary with explicit type, evidence, permission, and accountable principal can change formal state.**

Within this scope, a model may search, compare, probe, and propose alternatives. A candidate change must bind the target object, basis version, and preconditions, after which Evidence, Authority, Completion, and Review determine whether it can acquire formal effect. Exploration may remain open; commitment must be specific about the object and its consequences.

#### 6.2 Evidence Contract

A formal claim that requires factual basis must be associated with a machine-readable Evidence Relation. A source coordinate says where material is located; it does not say whether the material supports, contradicts, or qualifies a claim. Minimum relations include:

```text
claim
source
source_version
location
relation: supports / contradicts / qualifies / derives-from
extraction_actor
derivation_method
effective_time
status
```

A model may propose citations, claims, and candidate relations; the Runtime parses sources, versions, coordinates, and relation types. A parseable citation confirms only location. Whether it semantically supports a claim is judged by the verifiable rules, Evaluator, or Reviewer specified by the Evidence Contract; a relation that has not passed that judgment remains a candidate. The vertical Contract defines source authority, precedent hierarchy, freshness, and admissibility; the general Runtime does not assign a uniform weight to sources across different domains.

> **P7 — Provenance is state, not prose: Source relations belong to work state and cannot exist only in explanatory prose.**

A factual claim without a source relation cannot enter formal state that requires factual commitment. Usable sources include not only documents and databases, but also explicit statements by users or professionals, system observations and tool returns, and derivations that can be recomputed. A claim without sufficient basis may remain proposed, uncertain, or a working assumption, but cannot masquerade as a confirmed fact.

Evidence Contract must distinguish facts, inferences, preferences, policies, and human adjudication. A source may support a factual premise, but cannot bear risk acceptance or a policy choice on behalf of the Reviewer.

#### 6.3 Completion Contract

A Run may stop because of tokens, tool failure, uncertainty, or partial success; none of these constitutes professional completion. An Assignment enters completed state only when the Completion Contract is satisfied, or an authorized person explicitly waives or modifies that Contract.

A completion ledger may include:

- required Artifacts;
- required issue families and coverage;
- unresolved questions;
- evidence gaps;
- mandatory checks;
- dependency state;
- pending external input;
- required approvals;
- known exceptions.

> **P8 — Completion must exist outside the model’s self-assessment: Completion criteria must exist outside the model's self-assessment.**

An executable completion inventory, evidence procedure, and continue / stop gate can change the result of long-running execution; they can only prove that the expressed completion conditions were executed, not general professional correctness, and do not replace Evidence, Authority, Matter continuity, or independent testing of the accepted-work-product.

The system should make “incomplete” visible, but must not pretend that every completion condition can be adjudicated mechanically. Machine-verifiable obligations and human adjudication points need separate representations.

#### 6.4 Authority Contract

Tool capability and business authority are different objects. A model may technically be able to create a file without being authorized to publish it; it may generate an email without being authorized to send it; it may propose a modification without being able to change approved state.

The Runtime should at least distinguish read, propose, modify draft, modify approved state, approve, publish, transmit externally, execute irreversible action, delegate, and promote policy. Acquiring Authority is not acquiring Accountability; automation may prepare materials, propose recommendations, and execute reversible steps, but cannot make a final accountable decision in place of the Accountable Principal.

What users see is business semantics:

```text
write_file                  → 接受这项成果修订
run_external_tool           → 把这份工作成果发送给客户
resume_session              → 返回当前 Matter
create_subagent             → 委派一项边界明确的运行义务
```

Technical operations should not automatically become the user's mental objects.

#### 6.5 Artifact Contract

Artifact Contract defines work-product type, structure, version, status, reference relations, approval conditions, and downstream usability. A Committed Event must reference a specific Artifact version, and Current Semantic State may designate as active only a version that has been committed. Product value is measured in adoptable work products, not in the length or fluency of chat answers.

#### 6.6 Review Contract

Review Contract defines, for each state, who may accept, reject, revise, request additions, approve, and promote rules. Effective Review also requires a person with Authority to form an independent judgment under finite attention. Human Work Surface is therefore compiled by decision unit from current state, Candidate delta, Evidence, automated checks, unresolved questions, reversibility, Authority requirement, and state consequence; Raw Trace remains retrievable without becoming the default review object. Review produces a Candidate Decision; only after it passes Authority Check and is written as a Committed Event may it change Semantic State or the active Artifact reference.

#### 6.7 Escalation Contract

Escalation is a formal Runtime action, not a fallback after model failure. A qualified escalation expresses at least:

```text
issue
+ evidence
+ alternatives
+ recommendation
+ reason_for_escalation
```

The system does not force a model to answer when information is insufficient or permissions are exceeded. It sends the uncertainty to a subject with the relevant Authority or Accountability.

## Part III　From Expert Demonstration to Agent Extension

### 7. Expert Demonstration and the Invisible Human Harness

An expert Demo is not product capability, but it is runnable source material closer to real work than a static SOP. An expert need not first write a complete SOP, Schema, or rubric; a Schema Engineering team can extract transferable work semantics from the following material:

- complete demonstrations on real or synthetic Matters;
- selection of prompts, context, tools, and sources;
- repeated retries, failure recovery, and changes in execution path;
- before / after revision;
- accept, reject, request further work, and escalation;
- judgments about materiality, coverage, and deliverability;
- which results enter downstream processes and which are overturned.

Compilation is therefore not simply “interview the expert and write requirements,” but:

```text
观察 → 抽取 → 分层 → 编订 → 反例验证
```

A model prototype made by an expert is often supported by an unrecorded human Runtime:

```text
Expert selects task and context
→ Model attempts
→ Expert notices omission or error
→ Expert changes framing, source or search
→ Model retries
→ Expert judges materiality
→ Expert decides what is deliverable
```

When the prototype maker operates it personally, these interventions are easily mistaken for model capability. Once the prototype is handed to someone else, task selection, context assembly, omission detection, failure recovery, and completion judgment disappear at the same time. Productization needs to externalize enough intervention to support delegation, verification, recovery, and review; it does not need to reproduce the expert's entire mind.

Compilation must stratify by responsibility, applicability, and stability:

| Layer | Example | Compilation target |
|---|---|---|
| Domain invariant | Stable professional obligations, source hierarchy, mandatory checks | Product Contract / Evaluator |
| Institution convention | Team approval, format, risk preference | Versioned institution configuration |
| Client / Matter context | Requirements for a particular client, transaction, or point in time | Client / Matter context |
| Individual habit | Personal phrasing, shortcuts, tool preferences | User preference, not promoted by default |
| Irreducible judgment | Risk acceptance, strategy, material exceptions | Expert Review / Accountable Decision |

Repeatable, low-dispute, mechanically verifiable actions may become a Validator or deterministic policy; delegable steps that still require judgment belong in Assignment, Review, or Escalation. This is an implementation choice for the semantic layering above, not a second classification system.

A single prototype often mixes domain invariants, institution conventions, client or Matter context, and individual habits. Frequency of occurrence cannot automatically promote a personal habit to an institutional rule, nor turn an institutional rule into a domain truth.

The completion criterion for productization is this: after the prototype author leaves, can other qualified users delegate the same kind of work through explicit objects and states; does expert Review time decrease; does the accepted-work-product rate increase? If experts still need to intervene at nearly the original frequency, the product supports only expert augmentation and has not formed a delegable Agent Extension.

### 8. Agent Extension, Work Extension, and E2E Publication

> **An Agent Extension is a versionable professional capability package constrained by a Work Contract, capable of producing adoptable work products for a specific task family, and carrying its own execution boundary, result validation, Review / Escalation semantics, and E2E publication gate.**

It does not prescribe a physical form. It may be implemented as a package, plugin, skill, workflow, service, sidecar, embedded module, or another host-loadable unit. But an Agent Extension is not prompt + tools + workflow; a mature Extension contains at least these logical objects:

```text
Agent Extension
├── Task family and applicability
├── Work Contract
├── Context / resource policy
├── Artifact / evidence / completion contracts
├── Authority contract
├── Review / escalation policy
├── Validators / Evaluators
├── Recovery behavior
├── Golden / adversarial / boundary cases
└── E2E release suite
```

Prompt, tool definitions, and workflow are only implementation components subject to depreciation; they do not constitute the Extension's entire identity.

#### 8.1 Work Extension as Runtime Encapsulation

Agent Extension denotes the logical identity of a capability independent of a particular host. When it is encapsulated as a runtime unit that a general Harness can load, replace, or compose, this paper calls that implementation form a **Work Extension package**. They are not two professional ontologies: the former preserves portable work semantics, while the latter provides a compilation target and deployment wrapper for a particular Runtime.

```text
Work Extension package
├── Semantic core
│   └── Work Contract / State / Artifact / Evidence / Completion / Authority / Review
├── Runtime adapter
│   └── required services / tools / events / model and harness compatibility
├── Human Work Surface
│   └── inspection / comparison / provenance / correction / review / approval / escalation
├── State compatibility
│   └── version / migration / rollback / canonical-owner mapping
└── Evaluation and release
    └── Validators / Work benchmark / boundary cases / E2E suite
```

A general Harness may provide mechanisms such as mount / unmount, dependency resolution, events, tools, permissions, sessions, traces, recovery, and UI slots; the Work Extension determines what these mechanisms mean in specific work. A Harness may provide an approval primitive of “allow once, deny, or ask.” The Extension must compile it into “accept this work-product version,” “approve this risk,” “request more evidence,” or “escalate the decision to whom,” and specify which formal state the operation changes. HITL is therefore not a synonym for a generic confirmation dialog; it is the human adjudication surface of the Work Contract.

This layering allows the model, Agent loop, Harness, and Work Extension to evolve at different speeds. Model protocol, reasoning loop, streaming, generic tool calling, adapters, and renderers usually depreciate faster than work state, Evidence, Authority, validation, commitment, and recovery. A mature Work Contract therefore first declares target states, invariants, sufficient evidence, prohibited transitions, and commitment conditions, leaving a replaceable Runtime to choose the concrete planner / worker / reviewer path; a stronger model may reduce imperative orchestration but cannot thereby acquire broader side effects or formal commitment permissions. Runtime composability proves only that components can be composed, replaced, or revoked; it does not prove that the Work Contract is correct, and cannot bypass state migration, canonical ownership, or E2E Acceptance.

One non-normative implementation form is **Sparse Work Harness**:

```text
Shared Core
  agent loop / tool protocol / event / permission / artifact IO / compiler
+ Work Primitive Packs
  schema / instructions / tools / verifier / transition / surface / policy
+ Matter State
  Current Semantic State / versions / evidence / decisions / open obligations
+ Context Compiler
  activate capabilities + project Matter State + mount gates + exclude noise
```

A Work Primitive Pack is not a personified Agent, and Matter is not an executable expert. The Compiler outputs not a single expert ID, but an executable context plan: which schemas, tools, verifiers, and Human Work Surfaces may be loaded for this Run, which Matter slices are projected, and which old versions, other Matters, and unauthorized capabilities are explicitly excluded. A Model may propose “what I think is needed”; the Harness must determine “what may be loaded” according to Contract, role, stage, and policy. Because capability activation changes data access, Tool Authority, and the scope of real-world action, routing must combine learned proposal with a deterministic permission / commitment gate.

Sparse composition does not require dynamic hot-plugging on every turn. Activation lifetime may be layered as `organization → role → matter → stage → run`: the farther left, the more suitable for precompilation; the farther right, the more suitable for dynamic projection. In practice one can use `cold composition / stage-bound reconfiguration / hot execution`, keeping tool definitions, the Contract prefix, permissions, and Surface relatively stable within a Matter or stage, while letting Current Semantic State and Evidence disclosure change from Run to Run. Modularity makes sparse composition possible; pre-orchestrated composition makes expert orchestration distributable.

#### 8.2 Compiled Work Expert and Three-Tier Activation

**Compiled Work Expert** is a versioned, evaluated, and permission-converged activation profile. It binds one or more Work Extensions / Work Primitives with institutional configuration, applicable task families, Review / Escalation policy, and E2E evidence into a reusable work capability. It does not simulate an expert's personality, and is not a single Tool, Matter instance, or new Contract type.

Logical objects should remain separate:

```text
Work Primitive
→ 原子 schema / tool / verifier / renderer / permission capability

Work Extension
→ 面向某一 Harness 的可分发领域封装

Compiled Work Expert
→ 针对高频任务族或 stage 的预编译、已验证 activation profile

Run Plan
→ Compiled Expert + current Matter State + role + stage 的本次执行计划
```

A mature Runtime may use three tiers of activation:

1. **Preset binding**: Matter type, institutional policy, role, and stage are already sufficient to determine the Expert, so model routing is unnecessary;
2. **Expert routing**: a model or rule proposes a selection only within a set of already approved, mutually compatible Experts, after which the Runtime checks applicability, version, and permission envelope;
3. **Primitive composition**: used only when no suitable Expert exists, for cross-domain or low-confidence work, or for frontier exploration; by default it is bounded by least-privilege and Candidate-only, and may not directly acquire approve, publish, external-transmit, or irreversible authority.

The value of pre-orchestration is not only reduced routing entropy. The Expert is evaluated as a complete work capability, so `schema + retrieval + tools + verifier + permissions + Human Work Surface + transitions` can jointly undergo Work benchmark and accepted-work-product testing; the model need not reinvent the capability graph in every Run. A primary Expert may call auxiliary Experts explicitly allowed by the Contract, but cannot freely obtain composition permissions from any arbitrary subset of the Registry.

“Compiling dynamic composition into an Expert” is itself a governance process, not an automatic cache of a successful trace:

```text
frontier composition / expert intervention
→ Candidate Expert Profile
→ applicability and exclusions
→ provenance and source demonstrations
→ Contract / primitive dependency versions
→ held-out E2E, risk-stratified Review and reversal window
→ release Authority
→ Committed Expert Version
→ production monitoring
→ revalidate / recompile / suspend / deprecate
```

A Candidate Expert should at least record `expert_id / version`, semantic owner, applicability and exclusions, source demonstrations and corrections, dependent Contract / Tool / model / Harness versions, evaluation samples and Reviewer distribution, known limitations, last validation time, freshness trigger, abstention / fallback, rollback, and deprecation path. Different domains need not share one “number of successes” threshold; slow-feedback settings such as law, consulting, and medicine may jointly use accepted-work-product outcomes, Reviewer disagreement, subsequent reversal, risk stratification, and an observation window to adjudicate whether publication is sufficient.

A Compiled Expert is both an asset and a responsibility for frozen judgments. Changes in regulations, source catalogs, institutional policy, base model, Tool provider, Matter distribution, or Reviewer outcomes may make it obsolete. Production edge cases must allow an Expert to abstain or escalate to Human / frontier composition and form a Candidate Expert Change; uncovered matters must not be forcibly interpreted as covered merely to preserve the fast path.

The fast path / slow path is therefore only a limited product analogy. A Compiled Expert is a governed default path, while primitive composition is a constrained exploratory path; they do not guarantee the same result. Productization is not a one-way waterfall, but:

```text
Compiled Expert execution
→ uncovered case / drift / disagreement
→ abstain or escalate
→ Human expert / bounded primitive composition
→ structured trace and outcome
→ Candidate Expert revision or new Expert
→ E2E revalidation and release
```

This loop keeps the Expert frontier connected to productized work while preventing the active Expert from being silently rewritten by an improver or model.

#### 8.3 Extension Release Criteria

A Demo is promoted to an Agent Extension only when all of the following conditions hold:

1. The original author no longer provides step-by-step driving;
2. Other qualified users can start and complete the same kind of work;
3. Inputs, applicability, and inapplicable boundaries are clear;
4. Required artifacts, evidence, completion, and review requirements can be queried;
5. Failure, interruption, return-for-revision, and recovery have verifiable behavior;
6. A Reviewer can accept the result as an accepted work product and move it into the next process;
7. The E2E suite covers the normal path, key counterexamples, permission boundaries, recovery, and model replacement;
8. At least one of expert Review time, work-product acceptance rate, or recovery cost shows measurable improvement, without deterioration in high-risk indicators;
9. The release version has queryable semantic owner, provenance, applicability / exclusions, dependency versions, last validation, freshness trigger, abstention, fallback, and rollback;
10. Uncovered or drifting production matters can fail closed, abstain, or escalate to a Human / frontier path and enter reevaluation as a Candidate Change instead of silently modifying the active Expert.

#### 8.4 E2E Test Object

E2E is not completing page clicks, stopping Agent generation, or successfully writing a file. It tests whether an Extension can stably complete work within its declared scope:

```text
Representative Matter / Task
→ authorized resources and context
→ Agent execution
→ candidate artifacts and state changes
→ contract validation
→ review / revision / escalation
→ accepted work product
→ downstream handoff or recoverable continuation
```

A complete suite may combine deterministic checks, schema / evidence / completion / authority validators, evaluator rubrics, expert review, accepted-work-product outcomes, recovery and replay tests, and equivalent-interface perturbation tests. E2E does not require all professional correctness to be automated, nor may an all-green result claim that the entire domain has been formalized. It must observe execution success, correct state commitment, and whether the work product constitutes acceptable work at the same time, rather than compressing all three into one opaque total score.

#### 8.5 Model, Agentic, and Work Benchmarks

Professional Agent evaluation contains at least three layers, answering different questions:

| Layer | Main test object | Typical question |
|---|---|---|
| Model benchmark | reasoning, knowledge, instruction following | Does the model know, or can it reason to, the correct candidate? |
| Agentic benchmark | agent loop, harness, tool use, recovery | Can the Runtime plan, call, retry, execute across tools, and maintain its goal? |
| Work benchmark | Work State, professional judgment, Artifact, and commitment boundary | Under real work state, do the actions and judgments form adoptable work? |

Agentic benchmarks are relatively easy to standardize. Inputs, action spaces, target states, and technical success conditions can usually be defined in advance, such as whether tool calling is correct, long-context retrieval is stable, failure can be recovered from, or cross-file operations complete. They mainly measure execution quality inside the Runtime.

The semantic source of a Work benchmark lies outside the Runtime. It does not first ask “did the Agent run the process to completion?” but “under this Matter's facts, permissions, versions, and responsibility conditions, does the judgment, intermediate state, and final Artifact it formed satisfy the Work Contract?” The test may be executed by the Runtime, but its acceptance criteria must come from the domain, institution, and Reviewer rather than being defined by the agent loop itself.

For example, a legal Agent may successfully complete:

```text
读取材料 → 搜索法规 → 起草 memo → 写入文档
```

All tool calls may succeed, and the task may stop normally, while the work still fails:

- It identified the wrong actual dispute at the Matter's center;
- It should have asked the client for additional facts but began drafting directly;
- It used an expired version or an inapplicable jurisdiction;
- It selected a legally viable but commercially unacceptable option;
- It ignored insufficient probative force, conflicting sources, or outstanding obligations;
- The deliverable is formally complete but still cannot be accepted by the Reviewer as an accepted work product.

These failures cannot be defined only through a “better planner” or “more tool coverage.” The Work Contract must first declare:

```text
Context / Work State
→ Required Judgment
→ Intermediate Artifacts and State Transitions
→ Evidence / Authority / Completion / Review
→ Acceptance Criteria
```

Deterministic validators, Evaluator rubrics, adversarial cases, expert review points, and accepted-work-product outcomes are then derived from the same Contract. The benchmark is a test projection of the Work Contract, not a separate QA system added later, nor the starting point of system design.

> **P19 — Work benchmarks are derived from Work Contracts; runtime success cannot substitute for work acceptance: Work benchmarks are derived from Work Contracts; Runtime execution success cannot substitute for acceptance of the work product.**


These three benchmark types correspond simultaneously to three architectural layers, three kinds of Contract, and three groups of long-lived assets:

| Layer | Its own Contract | Main long-lived assets | Main task | Success evidence |
|---|---|---|---|---|
| Model Capability Layer | Context / output interface, capability and safety boundaries | weights, training data and pipelines, inference stack, Model Eval | Extend reasoning, knowledge, generation, and candidate-action boundaries | held-out Model benchmark, cross-task capability, and cost |
| Agentic Runtime / Harness | observation / action, tool, session, event, plugin, permission, trace, recovery contract | Harness kernel, service / plugin ABI, tool adapters, sandbox, session / event infrastructure, Agentic Eval | Turn model capability into executable, composable, recoverable, observable action | Agentic benchmark, tool success, recovery, trace invariant, cross-model reproducibility |
| Work Extension | Work Contract, Context / State, Evidence, Completion, Authority, Review, accepted work product | domain semantics, institutional configuration, HITL UX, Validators, Work Eval, failure distribution, accepted / reversal outcomes | Converge general capability into a work surface on which specific people can rely | Work benchmark, Expert Review, accepted work product, and downstream adoption |

Coding crosses the latter two layers at the same time. A bounded issue mainly tests Harness execution; software development across days and iterations also needs a long-lived Specification, continually changing Artifact State, an Evidence State for verified behavior and unresolved failures, a constrained objective for each round, role-specific Context and Authority, and Acceptance independent of the implementer's self-assessment. Repository, toolchain, test, CI, and PR lifecycle provide a machine-readable, versionable, replayable substrate and define part of the software-engineering Contract; product intent, Architecture, Compatibility, Release Authority, and operational consequences remain the responsibility of the Work Contract. When other professional domains reuse this set of state and responsibility relations, they need to replace the low-cost verifier supplied by software tests with their own Evidence and Acceptance semantics.

> **P21 — Layered contracts, local evidence: Model, Agentic Runtime, and Work Extension each have their own Contract, Eval, long-lived assets, and evolution cycle; upstream capability cannot replace downstream work acceptance, and downstream failure cannot be attributed to the model without attribution.**

The three benchmark types may all enter E2E, but cannot impersonate one another. A higher Model score does not automatically prove that the Harness is effective; a fully green Agentic benchmark does not automatically prove that work is correct; a Work benchmark cannot in turn claim that all professional judgment has been formalized. The stable order is to define the work-state contract first, derive benchmarks from the Contract, and validate external validity through real Review and downstream adoption.

#### 8.6 Accepted Work Product

Accepted work product means an Artifact version accepted by a Reviewer with the relevant Authority at a predetermined process point, able to enter the next business process without substantive modification. Accepted-work-product rate is a core metric for Extension publication and iteration, not a substitute name for a single model benchmark; it must be stratified by task family, risk, institution, and Reviewer, and record reversal.

> **P17 — A demo becomes an Extension only when its hidden human harness is compiled and it passes E2E without its author: A Demo becomes an Extension only when the invisible Human Harness is compiled and it can still deliver an adoptable result end to end after the original author leaves.**

#### 8.7 The Product Absorbs Agent Complexity

The broader a Frontier Agent's capabilities, the more configurable objects there are. Session, Memory, context window, compaction, handoff, tool call, MCP, plugin, subagent, system prompt, and model-specific recovery logic are concepts for building an execution system, not concepts for professional users to complete work.

Users need to manage Matter, Assignment, resources, issue, evidence, Artifact, revision, approval, and outcome.

> **P10 — Agent complexity should be absorbed by the product: Users face professional objects and business adjudication; the product absorbs Session, Memory, Tool, Subagent, and Context mechanics.**

Complexity has not disappeared. The product moves it from the user's per-run configuration into reusable contracts, defaults, routing, recovery, and review design. One product decision can serve many tasks, so users need not reinvent a work method each time.

Completely hiding the technical layer is not unconditionally appropriate. Some professional users may need to diagnose Context Projection, tool failures, or delegation topology. A product can use progressive disclosure: present domain objects by default and expose technical evidence when diagnosis requires it, without making technical objects the primary work surface.

#### 8.8 A Complete Commit, Return, and Recovery Process

The goal of a contract-review Matter is to produce a risk list and redline that can be handed to the business owner. The legal lead is the Accountable Principal; the primary Operator bears the obligations to review, recover, deliver, and escalate; the Authority Contract allows it to read the contract, propose findings, and modify a draft, but does not allow approval or external transmission.

```text
1. Matter 创建
   → 建立原合同、标准条款库、参与人和权限边界

2. Assignment 接受
   → Work Contract 要求覆盖责任、付款、终止和数据义务
   → Completion ledger 登记四类义务与两个交付物

3. 主 Operator 建立两个 Lane
   → Lane A 检查责任与终止
   → Lane B 检查付款与数据义务

4. Lane A 提出 Finding F-17
   → Epistemic Status = proposed
   → Institutional Status = draft
   → Candidate Event 还没有进入 Committed Event Ledger

5. Evidence Check 失败
   → Finding 只有原文摘录，没有 source version 和 location
   → F-17 保留为 proposed，不能进入 accepted state

6. Lane B 定位合同版本与条款坐标
   → 提出候选 Evidence Relation = source supports claim
   → Candidate State Change 再次提交

7. Schema、Evidence 与 Authority checks 通过
   → 指定 Reviewer 确认原文在适用范围内支持该事实主张
   → Runtime 写入 Committed Event
   → reducer 把 F-17 投影为 supported / under review

8. Completion ledger 仍显示数据义务未覆盖
   → Operator 不能宣布 Assignment 完成
   → Context Projection 为下一次 Run 加入缺口和相关材料

9. Reviewer 处理候选成果
   → 接受 F-17 的事实基础
   → 退回风险等级判断
   → Candidate Decision 通过 Authority Check 后写入 Committed Event

10. Revision 生成 Artifact v3
    → Artifact Store 保存不可变版本
    → Committed Event 引用 v3
    → 同一次投影把 Current Semantic State 与 active Artifact reference 更新到 v3

11. 法务负责人批准发布
    → Authority 允许 approve，不允许 Operator external transmit
    → Accountable Principal 的批准写入 Committed Event
    → 发布动作由具备 transmit Authority 的角色执行

12. 新 Run 恢复
    → Runtime 从 Committed Event Ledger 重建 Current Semantic State
    → 读取 active Artifact v3 与未完成义务
    → 生成新的 Context Projection，不重放完整 transcript
```

This trace simultaneously constrains Lane and Operator, Candidate and Committed, Evidence and Completion, Authority and Accountability, and the write order of Event, State, Artifact, and Context Projection. No step can be replaced by a model's self-report that it is “already complete.”

## Part IV　Post-agentic Refinement

Post-agentic Refinement derives product operation, learning, and model strategy from the Kernel, but does not treat every production trace as training data automatically, nor call every system improvement Training. The propositions in this Part must be tested separately for cost, data rights, and product outcomes.

### 9. Post-agentic Refinement and Review Governance

> **Post-agentic Refinement is the subsequent improvement of an entire Agentic System, based on production use, Review, Revision, Failure, and E2E results after an Agent Extension is already able to run end to end.**

The default order for checking improvement targets includes:

1. whether the Work Contract omits or incorrectly expresses a professional obligation;
2. whether a Validator / Evaluator is too weak, too strong, or treats an institutional preference as fact;
3. whether the Compiled Expert's applicability, dependency versions, routing, fallback, or freshness has become invalid;
4. whether Context Projection and resource selection are missing, stale, or redundant;
5. whether a Tool / interface is creating an interface accident;
6. whether the Harness / recovery is causing systematic failure;
7. whether the base model has a measurable, generalizable residual capability gap;
8. whether Selective Model Post-training is worth adopting for the residual capability gap or a measurable gain in quality, cost, or efficiency.

Professional work already advances through Review and Revision. A product should capture revisions that actually occur; it should not require professionals to fill in reason codes, materiality, scope, and judgment type at every edit for the sake of future training.

> **P11 — Capture first, infer later, promote selectively: First capture facts, then infer semantics, and promote only a small number of confirmed candidates into rules.**

P11 is also a Capture Economics principle: structure should arise mainly as a byproduct of normal work, rather than being filled in by professionals as extra Schema work. Deleting a sentence, choosing another version, rejecting a source, requesting coverage of an additional jurisdiction, returning a candidate, or escalating can first be recorded as an Event and before / after diff; only when behavior cannot be disambiguated and the judgment has sufficient value for future work should the system request minimal clarification.

Human corrections can be captured, abstracted, reviewed, versioned, and reused outside model weights. If a correction modifies only natural-language instructions or a heuristic, it remains policy memory and is not a complete Work Contract; write-back must also be constrained by feedback authority, semantic validation, applicability, and outcome attribution.

#### 9.1 Automatically Captured Facts

The system automatically records before / after, Artifact path and version, actor and role, Matter and Assignment, evidence, surrounding context, trajectory, outcome, and learning rights. These objects first serve audit, recovery, and current product operation.

#### 9.2 Machine-Inferred Semantics

The system may infer correction type, likely scope, materiality, failure family, applicability, and Reviewer disagreement with uncertainty. Inferred results are not formal rules and can be calibrated through comparisons across Matters, Reviewers, and versions.

#### 9.3 Rule Promotion with Human Confirmation

Only when the system is preparing to change future behavior does it require an explicit adjudication:

- whether a Matter rule becomes a client preference;
- whether a repeated client preference becomes an institution-configuration candidate;
- whether a repeated institutional correction becomes a product or domain-rule candidate;
- whether a class of failures enters formal Eval;
- whether a class of data may be used for aggregation, evaluation, or training.

Infrequent rule promotion determines future behavior and is suitable for bearing governance cost; high-frequency Review handles current work only and should not degrade into a data-labeling interface.

A production revision cannot necessarily distinguish correctness, client preference, strategy, and style reliably. If automatic semantics remain inaccurate over time, the Revision Event still retains audit value, while learning semantics must be collected separately.

#### 9.4 Capture Economics

“Can be captured” does not mean “worth capturing.” Each class of structured signal should be assessed at least on all of the following:

- whether the behavior or Artifact would naturally arise from the current work anyway;
- the accuracy and calibratability of automatic inference;
- the frequency, duration, and interruption cost of clarification;
- the number, risk, and reversibility of Matters that future rules would affect;
- whether the structure reduces total expert time compared with an ordinary document, free-form Review, or not saving it.

If structure can be obtained only by increasing Expert operating cost in the same proportion, an expert-trace flywheel cannot be a precondition for the product to exist. The system may still retain original Event and Artifact diffs for audit and future reinterpretation; it should not force current users to annotate merely because complete semantics are not immediately available.

### 10. Failure Attribution, Production Learning, and Synthetic Environment

Every production failure should be able to fall into at least one of the following types:

```text
contract gap
validator gap
evaluator disagreement
expert profile / routing / staleness gap
context / resource gap
tool / interface accident
harness / recovery failure
model capability gap
institutional disagreement
rights / data limitation
```

Failure Attribution itself may be an uncertain inference and cannot automatically change formal rules. Rule promotion still follows capture first, infer later, promote selectively. The Work Contract provides the task boundary, target work product, accepted-work-product standard, verifiable obligations, failure taxonomy, Eval rubric, Environment seed, and permission and data-rights boundaries for this attribution. It is not merely a Runtime guard; it is also the governance layer for training objectives.

A structured product interface can produce learning signals, but does not automatically form a data flywheel. Production traces first reveal the observed production distribution jointly shaped by the current product, client choices, permission conditions, and usage:

- task distribution;
- failure distribution;
- preference distribution;
- escalation distribution;
- environment seeds;
- accepted-work-product standard.

These traces may be limited by client confidentiality, permissions, contextual dependence, Reviewer disagreement, and selection bias, and may not be suitable for direct training. Documents are content assets; tasks, state, trajectories, judgments, and outcomes situated in concrete contexts may become learning assets. Neither type of asset automatically acquires the right to be aggregated, evaluated, or used for training.

Synthetic Environment follows another path:

```text
Expert defines task family / rubric ontology
→ Synthetic Environment generation
→ oracle or multi-agent solve
→ deterministic checks
→ expert audits disagreements and high-value cases
→ accepted Eval / training environments
```

The two paths have different functions:

- Production Learning reveals where the system works, where it fails, and which preferences and escalations carry real-world weight;
- Synthetic Environment expands task families and failure modes at lower marginal cost;
- held-out production Matters check whether the synthetic system merely optimizes its own world.

> **P12 — Production traces reveal observed production distributions; synthetic environments expand them: Production traces reveal distributions observable under current product conditions and provide environment seeds; synthetic environments expand scale but cannot by themselves prove that they represent the complete task distribution.**

If a synthetic-only path consistently achieves equivalent results on held-out real Matters at lower cost, production instrumentation still serves operation and failure discovery, but no longer constitutes a defensible learning advantage. If production failures cannot form reusable task families, traces retain only local audit value.

### 11. Eval, Environment, Depreciation, and Selective Model Post-training

Model-facing scaffolding in Schema and work semantics for people and systems have different lifetimes.

#### 11.1 Semantics Resistant to Depreciation Under Finite Attention

As long as mainstream intelligent systems continue to produce Output from currently visible Context under finite attention, while work experience cannot be written back to parameters continuously, reliably, and at low cost, Context and Output governance are not a temporary workaround but part of system capability. Context windows, model reasoning, and Harness automation may continue to improve, but will not automatically remove three constraints:

1. visible information is not the same as effective information; a larger window merely turns part of the retrieval problem into an attention-allocation problem;
2. a model does not inherently know the source, version, freshness, scope of applicability, Epistemic Status, and Institutional Status of each piece of natural language;
3. Output enters new work state and becomes upstream of later Context, so persisted errors amplify over multiple rounds.

Two kinds of objects must therefore be distinguished deliberately.

What depreciates quickly with the model is model-facing scaffolding: explicit reasoning recipes, model-specific prompt tricks, over-detailed workflow instructions, checkpoint tool workarounds, fixed prefixes, particular tool names, and context orchestration that compensates for current model defects. The stronger the model and the more native the Harness, the more this procedural glue should be removed.

What does not disappear automatically as models improve is work semantics: Artifact identity and version, provenance, authority, permissions, Semantic State, completion, Review, audit, institutional policy, rights, temporal validity, Matter isolation, and correction / revocation. A stronger model does not automatically decide who may approve, which sources may be adopted, which old conclusion has been superseded, or when an organization is willing to bear the result.

> **P13 — Delete scaffolding aggressively; preserve semantics deliberately: Delete scaffolding that depreciates with models, and preserve work semantics deliberately.**

Schema preserves meaning; Harness executes. The stronger the Harness, the fewer procedural instructions that exist in a Work Contract only to guide the model; but what the facts are, where the sources are, when they are effective, who may commit, when work is complete, and what requires Review do not disappear with an API, agent loop, or model version. What makes Schema Engineering resistant to depreciation is not that one Schema never changes, but that the implementation layer can continually be reduced while compilation and governance of the real world remain.

Even if persistent learning matures in the future, some explicit memory management may diminish, but serious work still needs provenance, version control, access control, auditability, Matter isolation, temporal validity, human authority, and revocation. A system cannot merely know that a model has “learned” a client preference; it must also know where that preference came from, whom it applies to, when it was changed, and how it can be revoked. Governance objects may partially migrate from external memory to “what the model has learned,” but governance responsibility will not automatically disappear.

This judgment remains subject to a deletion test. If a model can infer a contract reliably from raw context and is no worse on accepted work product, accountability, audit, recovery, multi-role collaboration, cost, and latency than an explicit contract, that contract may be reduced to model-facing scaffolding, an on-demand Projection, or an audit view. A higher benchmark score, a larger context window, or one successful one-shot is insufficient to draw this conclusion.

#### 11.2 Eval Infrastructure and Item Depreciation

Eval infrastructure manages task generation, execution, scoring, regression, stratification, and review; Evaluators, rubrics, labeling guidelines, and Eval items are all governed artifacts within it. They need an owner, source criteria, version, scope of applicability, disagreement, monitoring, Candidate revision, Review, deployment gate, and rollback. An individual Eval item may lose discriminative power because models pass it broadly, the task distribution changes, or institutions change; it should therefore be marked separately for stable regression value, frontier discriminative value, distribution relevance, and legal or institutional validity.

Schema and Eval can be execution and measurement projections of the same governed criterion; agreement between them shows only that execution conforms to the declared criterion, not that the criterion is sufficient. Evaluation outside the Runtime turns product problems into interpretable signals, locates failure through work objects and state changes, and sends revisions back to the Contract, Evaluator, or execution system. Unencoded obligations, human disagreement, and external outcomes also mean that the criterion itself can be challenged. Schema is therefore both the evaluation object and the coordinate system for attribution; a coordinate system does not automatically provide a cause.

When an Evaluator's reason enters the next generation, state transition, rejection, escalation, or training signal, the evaluation trace has already acquired execution consequences. Criterion, verdict, and reason all need traceable versions and revision boundaries; a rubric revision, like an ordinary candidate, cannot silently change formal rules.

> **P14 — Eval infrastructure compounds; individual Eval items saturate: Eval infrastructure compounds, while individual items saturate and depreciate.**

Environment-generation capability also compounds; an individual environment instance likewise saturates.

#### 11.3 Harness Specialization and Interface Accident

Valuable Harness specialization adapts a model to work semantics such as state, evidence, authority, completion, and escalation. Fragile specialization adapts only to a fixed prefix, tool name, field order, wrapper, or protocol.

The two must be distinguished through tool renaming, protocol substitution, field-order randomization, Context Projection changes, and environment migration under equivalent semantics. If the gain disappears after these changes, the system learned an interface accident, with low portability and fast depreciation.

#### 11.4 The Place of Selective Model Post-training

> **P15 — Selective model post-training is optional; acceptance criteria come first: Training model weights is optional; acceptance criteria precede training objectives.**

For an Extension that can already pass E2E, the default improvement order is:

```text
Expert Demonstration
→ Work Contract
→ Agent Extension
→ E2E Acceptance
→ Production Use
→ Failure Attribution
→ Eval / Environment
→ Post-agentic Refinement
→ Selective Model Post-training, if residual gains justify it
```

Training may also contribute to initial capability formation or reduce cost at the same quality. It still needs evaluation against independently stated work requirements; a product that has not been established cannot be replaced by a training plan, and existing training investment cannot replace acceptance of the work product.

Model weights themselves are not an explicit knowledge base, but an implicit representation of a training distribution. From the standpoint of training signals, three continuous but non-substitutable accumulations can be distinguished:

```text
codified human knowledge
→ foundation pretraining

software-grounded interaction trajectories
→ agentic post-training

situated expert judgment in governed Work State
→ next Eval / Environment / training candidate
```

Foundation models absorb at scale the knowledge and behavior that humans have textualized, encoded, and publicly expressed; Agentic post-training then strengthens a model's procedural policy for observing state in computer and software environments, calling tools, reading feedback, recovering from failure, and continuing execution. The scarcer signal at the next layer is situated judgment that professional communities exercise but rarely write down completely: when evidence is insufficient, when to switch paths, what change may enter Current Semantic State, which exceptions must escalate, and what counts as deliverable. This layering does not mean that current Agents have only a procedural shell, nor that data scale automatically produces new judgment capability.

Schema Engineering may produce here a class of professional-behavior signals that normally do not exist in naturally formed pretraining corpora, at least not in an executable and attributable form. Regulations, contracts, papers, SOPs, and final reports record world knowledge and some work products, but rarely record completely: under a particular Work State, why an expert requested an additional fact, rejected a candidate, adopted a source, escalated, modified an Artifact, or what conditions made a result ready to enter a downstream process.

When an expert uses a frontier Agent to compile the invisible Human Harness into a Work Contract, Evaluator, Review boundary, and Agent Extension, and production leaves Committed Event, Current Semantic State, Revision, Failure Attribution, and accepted-work-product outcomes, the system produces more than professional text. It produces structured records of “how professional work changes state under a Contract.” It is not packaging expert experience as a static skill, but preserving situation, judgment, action, review, and outcome in the same collation-ready work structure.

Coding offers a limited analogy: repository, diff, test, and CI were first infrastructure for software production, and later became training upstream that code models could use. Coding Agents may also help build interaction surfaces and products through which AI enters more professional settings; once in those settings, experts and models jointly compile new Work Contracts and Extensions, producing new Evals, Environments, and training candidates:

```text
Coding Agent / product engineering
→ domain interaction surface
→ Expert + frontier model compile hidden practice
→ Work Contract / Agent Extension / Work Eval
→ governed state, revision, review and outcome
→ validated training candidate
→ broader professional behavior capability
```

What needs to expand here is not abstract “user volume,” but effective coverage of the **work penetration surface**: horizontal breadth across more task families, a deeper delegable lifecycle, continuity across time, commitment depth closer to real consequences, and feedback depth capable of observing later validation / reversal. Scale can become a model-learning signal only when diverse, comparable, attributable Work States and judgment trajectories form along these dimensions.

This yields a proposition to be tested: Schema Engineering may not only consume model capability, but may also produce a new kind of training upstream that expands the boundary of the model's professional behavior. The proposition does not hold automatically because data exists. Local institutional preferences, Reviewer disagreement, selection bias, interface accidents, client confidentiality, and training rights may all make these records unsuitable for training; only signals that have passed semantic attribution, rights confirmation, held-out Work benchmark, and real work-product testing may enter Selective Model Post-training.

The superordinate term here is Post-agentic Refinement; only an update to model weights is called Selective Model Post-training. The latter is justified for adoption only when it can improve accepted work product, completeness, grounding, escalation calibration, institutional adherence, cost, latency, or tool efficiency, with a measurable magnitude of improvement. If a new frontier model exceeds an old specialized model on accepted-work-product Eval, it should be migrated directly; sunk cost in the old checkpoint should not delay replacement.

> **P16 — Do not use training as a substitute for reliable validation; do not globalize local preference; do not let automation substitute for the accountable decision: Training cannot replace reliable validation; local preference cannot be generalized directly; automation cannot replace the final accountable decision.**

Behaviors that can already be validated may be trained to improve first-pass rate, lower cost, or reduce retries; the Validator retains the power of adjudication. Automation may also prepare materials, propose recommendations, and execute reversible steps; the Accountable Principal retains final adjudication authority.

Even without its own model, proprietary checkpoint, or post-training, a Professional Work product still needs Matter, state, evidence, authority, Artifact, and Review to create real value.

#### 11.5 System Composition Cannot Prove Causality for an Individual Component

System performance is produced jointly by model, Runtime, environment, context, Contracts, and Evaluator. These components interact: the same Harness change may improve results on one base model and move them in the opposite direction on another. Better performance by a composed system on its own benchmark can prove only that the composition works under the corresponding setup; it cannot assign the primary contribution to a particular component.

Component judgments therefore require independent ablations, cross-model reproduction, interface perturbation, and held-out environments.

## Part V　Implementation Forms, Long-lived Assets, and Evidence Discipline

The Kernel can define architecture and governance boundaries, but cannot alone prove market size, defensible learning advantages, horizontal platform opportunity, or general intelligence. This Part treats implementation forms, product value, layered assets, and market evidence separately.

### 12. Scope, Layered Assets, and Work Penetration Surface

#### 12.1 Scope: Consequential Commitment and Longitudinal Continuity

Schema Engineering is not the claim that “all LLM applications need an extra Schema.” It has two scopes that increase in layers:

- **Commitment scope**: probabilistic Output changes persistent shared state, triggers external action, or produces real-world consequences that require Authority and Accountability;
- **Continuity scope**: work persists across Runs, people, or time, while Evidence, Authority, Completion, or professional correctness cannot be fully judged by a cheap, stable verifier.

A one-time send, publication, merge, approval, or irreversible operation needs a Candidate / Committed boundary even without a long-lived Matter; complete Matter, Semantic State, and Context Projection create greater value within continuity scope. Explicit Work Contract and state governance are more valuable as a setting meets more of the following conditions:

- work continues across multiple rounds, people, or time;
- the current Output becomes the next Input and the Matter continually accumulates history;
- sources, versions, temporal validity, state changes, and mutually conflicting statements exist;
- professional correctness lacks a cheap, stable, complete external verifier;
- incorrect Context, omitted premises, or stale state materially affect the result;
- HITL, approval, Authority, Escalation, or final accountability exists;
- users should not bear Session, Memory, compaction, and Context assembly;
- recovery, version coordination, Review, and outstanding obligations themselves have visible cost.

Even when a frontier model can already produce a high-quality research report, contract review, investment judgment, or consulting recommendation one-shot, this layer of governance has independent value. The next piece of work still needs to determine which facts remain valid, which were only assumptions at the time, which conclusions have been superseded by new material, which results are worth reusing, and which intermediate reasoning should not enter long-lived state.

> **P20 — One-shot quality is not longitudinal work quality: The quality of a single deliverable is not the quality of work across time; when Output enters subsequent work, state governance is part of product quality.**

Conversely, for one-time translation, rewriting, summarization, or open brainstorming, if Output does not enter formal state, create later obligations, or have version, source, and accountability continuity, the benefit of additional Schema is usually low. Schema Engineering does not aim to proceduralize all work; it adds minimum structure where work needs to continue, be traced, and bear consequences.

A more direct way to select settings is to observe **Judgment density** and **Continuity requirement** separately:

| | Low continuity | High continuity |
|---|---|---|
| Low judgment density | Ordinary automation; usually no SE needed | Workflow / traditional software; focus on state transitions |
| High judgment density | Strong model / copilot; focus on one-time professional judgment | **Schema Engineering is most likely to produce incremental value** |

Consequentiality is another orthogonal axis: even where continuity is low, a one-time send, approval, publication, merge, or irreversible action may still need Candidate / Committed, Authority, and Review. The table is not a domain classification, but a starting hypothesis about governance ROI. A product must measure the judgment × continuity × consequence threshold at which the benefit of explicit state and Contract exceeds modeling, maintenance, and interaction cost.

Coding in fact shows why other work needs this layer more. Code repositories already have a long-lived work infrastructure by nature:

```text
file system → state
git → version history
type system → schema
compiler → verifier
tests → eval
diff → change representation
CI → acceptance gate
```

A Coding Agent can appear highly free because it stands on decades of accumulated structures, states, and verification systems. Legal opinions, investment judgments, consulting recommendations, research conclusions, and client management usually have no native `git + compiler + test suite`. Schema Engineering can be understood as supplying non-Coding work with a weakened, incrementally buildable infrastructure for state, provenance, commitment, and verification, rather than disguising professional judgment as a fully compilable program.

Coding itself is not an absolute exception. The verifiers above act mainly on the **code execution layer**: whether code compiles, tests pass, and interfaces meet declared checks. Software engineering as continuous work must also handle product intent, architectural boundaries, migration strategy, backward compatibility, security and performance constraints, deployment readiness, cross-team dependencies, technical debt, and release authority. Green tests show only that declared checks pass; they do not show that functional, architectural, and operational conditions are fully implemented, nor do they automatically form mature software.

Issue, spec, ADR, PR discussion, code review, release checklist, and incident record can be understood as Work Schema distributed through software engineering; engineers' manual judgments about omission, materiality, trade-offs, and completion state form an invisible Human Harness. Engineering groups usually have strong manual-loop capability, so this Schema can be thinner and more implicit and may not be worth wrapping as a new product gate. But when a Coding Agent moves from completing a local patch to delivering mature software one-shot, the bottleneck reappears outside the model and agent runtime: what counts as implemented, which architectural changes are acceptable, who may merge and publish, when an old decision is superseded, and which constraints the next Run must see first.

Coding is therefore more accurately understood as two layers: below, code execution with strong verifiers; above, software engineering that still needs semantic contracts and professional adjudication. Schema Engineering can be very thin for the former and still apply to the latter. This also explains why “all tests green” cannot replace a Work benchmark, and why one-shot generation of mature software cannot merely wait for a stronger model or longer agent loop.

Under the current paradigm, capability reaching real work can be understood as continuous connection in two directions:

```text
Upstream expansion
Model scaling / attention / post-training
→ Agentic Runtime / coding infrastructure
→ broader candidate capability

Downstream convergence
Work Contract / Work Extension / HITL UX
→ Commitment Boundary / System of Record
→ accepted work for a concrete person or organization
```

Upstream expands the capability frontier of models and Agentic execution; downstream converges open capability into task families, evidence, permissions, completion, Review, and the user's work surface. The path from Provider to a particular person is not one API call, but a compilation path from model interface through Harness service, Work Extension, formal state, and organizational acceptance. As Work Extension covers more settings and the reliably delegable depth within each setting increases, the system gains an expanding **work penetration surface**.

If AGI is understood as general capability continually reaching many kinds of real work rather than only a model benchmark, this combination of “upstream expansion of capability boundaries and downstream compilation and validation of the penetration surface” is one possible system path under the current Context + Output and Agentic Runtime paradigm. It does not claim that AGI has already been achieved, nor prove that any model itself has general intelligence; the testable propositions remain whether each layer's Contract holds, accepted work increases, and cost and accountability improve.

More distant recursive improvement becomes discussable only when a system can not only complete work, but propose Candidate changes to Contracts, Evaluators, Tools, Environments, and learning procedures from failures and outcomes, validate them through counterfactual experiments, independent Review, and external reality feedback, and commit them through explicit Authority. This paper limits that to a research hypothesis of **governed meta-improvement**; it is not inferred automatically from the volume of judgment data, model “emergence,” or a system optimizing its own scorer, and is not a prerequisite for Schema Engineering to hold.

As upstream capability becomes increasingly commoditized, the bottleneck moves further toward the external world: whether work has observable state, whether expert judgment can be compiled at low burden, whether an organization has executable Authority and Review, and whether data and behavioral signals have reuse rights. Schema Engineering does not only let a model read the world; it also increases the world's compilability as a work environment that a model can reliably reach.

The minimum necessary Schema still follows the four questions in 2.4: What persists, What expires, What gates action, and What deserves attention next. An implementation should not exceed what real Review, recovery, version, and accountability problems require.

#### 12.2 Layered Long-lived Assets and Implementation Boundaries

Professional Work Runtime is the high-assurance profile of the Work Commitment and Continuity Kernel: a model participates in work under an executable contract; the system maintains state, evidence, permissions, completion conditions, Context Projection, and recoverable history outside the conversation; and the Accountable Principal adjudicates at nodes requiring final accountability.

This definition can form a product, Infra, or embedded capability, but conceptual completeness alone cannot prove that a horizontal market category exists naturally. Artifact, Evidence, Authority, Completion, Review, and Work benchmark semantics differ across domains. Shared Runtime primitives can lower duplicated construction, but cannot replace downstream definitions of specific work.

Each layer has its own long-lived assets, main tasks, and validation methods:

| Layer | Long-lived assets | Main task | Key checks |
|---|---|---|---|
| Model Capability | weights, training and data pipelines, inference infrastructure, Model Eval | Extend boundaries of candidate reasoning, knowledge, and generation | held-out capability, cost, robustness, and cross-task transfer |
| Agentic Runtime / Harness | kernel, service / plugin ABI, tool adapters, sandbox / permission, session / event / trace, recovery, and Agentic Eval | Make capability executable, composable, replaceable, and recoverable | tool / recovery success, trace invariant, cross-model and equivalent-interface reproduction |
| Work Extension | Work Contract, domain vocabulary, state / evidence / completion / authority / review policy, HITL UX, Work Eval, failure distribution, accepted / reversal outcomes | Compile general capability into a bounded work penetration surface | accepted work product, Review time, completion, grounding, and downstream adoption |
| Product / Organization | distribution, Expert access, institutional configuration, Runtime integration, canonical ownership, rights, and procurement relationships | Have concrete people adopt the work capability and give it formal effect | retention, replacement, payment, accountability, cross-Matter reproduction, and lawful reuse |

Schema-derived behavior signals, Environment generation, and Post-agentic Refinement span the Work Extension and organization layers, but cannot bypass rights, Failure Attribution, and the held-out Work benchmark. No single moat arises automatically; these assets may produce procurement value in combination, or may separately be commoditized by frontier providers, platform companies, open-source ecosystems, or vertical software.

Institutions can accumulate Work Contracts, precedent hierarchy, institutional policy, client preference, completion standards, Review patterns, escalation rules, Work Eval infrastructure, environment generators, Context Projection policy, and trained policies. These become organizational capability only when they make professional judgment and work continuity reproducible beyond the original individual.

If an upstream platform supplies general Matter persistence, Artifact state, permissions, Evidence, Completion, Review, Context Projection, and commitment primitives, and prevents vertical products from improving professional semantics, work-product acceptance rate, integration retention, state-governance cost, or willingness to pay, Schema Engineering may remain a design discipline but no longer constitutes an independent product opportunity.

### 13. Adoption Path and Existing Systems

Deployable Minimum begins with one real commitment boundary: a model proposes a result, and a person with Authority and Accountability judges whether it may enter formal work. The first version only needs to move this conversion from the expert's head into the product; it need not first build all Runtime primitives.

#### 13.1 Minimal Viable Matter

The first version should not start with a complete domain ontology or a full Contract. It should choose objects from the four minimum questions: what must remain, what will expire, what blocks commitment, and what should be seen first next time. The minimum slice can be compressed to:

```text
1 Matter
+ 1 Artifact type
+ 1 Reviewer role
+ 1 formal commit transition
+ 1 active version pointer
+ 1 unresolved-obligation list
+ 1 next-context projection
```

The corresponding implementation needs only a stable Matter identity, a bounded Assignment, a distinction between Candidate Artifact and active Artifact, an Accountable Principal, two levels of Authority for propose and approve, visible outstanding obligations, versioned commit / reject / revise records, and a structured work package that can recover from current state.

Evidence Contract can initially cover the most consequential factual claims; Completion can combine a small checklist with human adjudication; Context Projection can simply be a work package consisting of the active Artifact, open issues, applicable version, Assignment, and a small number of relevant sources. On the Output side it need only make clear which version can be committed, which findings remain proposed, and which old states have been superseded. These logical objects can exist in the same application and database; they need not first be split into separate services.

Once a product can answer which version is in effect, who accepted it, what remains incomplete, which information is stale, and what the next execution should see first, it has crossed the boundary of a Session-first product. Subsequent extension can follow this path:

```text
Chat + invisible human gate
→ explicit Candidate / Accepted Artifact
→ persistent Matter State
→ task-specific Context Projection
→ typed Evidence / Authority / Completion Contracts
→ reusable institution configuration
→ Work Eval and selective learning
```

This path is not a mandatory maturity model. A high-risk setting may build Authority first; a research setting may build Evidence first; a long-running task may build Completion, Context Projection, and Recovery first. The first Matter should have a clear deliverable, an existing Review, a clear Reviewer or Accountable Principal, a repeatable task, and visible cost from lost state, version confusion, repeated injection, or omissions; the first version should not require the model to execute irreversible external action.

#### 13.2 Layered Runtime, Work Extension, and System of Record

Schema Engineering does not require ownership of a new Agent Harness or system of record, nor does it require an independent physical platform. The logical call and commitment chain can be represented as:

```text
Model Capability Layer
        ↓ generates candidate reasoning / action intent
Agentic Runtime / Harness
        ↓ executes through service, plugin, permission and trace contracts
Work Extension
        ↓ projects Context, proposes Candidate Change, renders HITL and validates work
Commitment Boundary
        ↓ commits through Authority / Review
Existing System of Record / Downstream Work
        ↓ acquires organizational effect
Person / Organization
```

The general Harness handles model adapters, tool execution, sessions, events, plugin lifecycle, sandbox, approval seam, traces, and recovery; the Work Extension handles the semantics of a specific Task family, Work State, Artifact, Evidence, Completion, Authority, Review, and HITL. They should connect through stable service, event, permission, UI-slot, and state interfaces. The host may be replaced without forcing domain semantics to be rewritten; a domain Contract may be revised without requiring model retraining or forking the Harness core.

Case Management, EHR, BPM, audit platforms, and vertical SaaS may already hold Matter identity, client or patient materials, Artifacts, user roles, approval flows, formal state, and retention policies. The Schema and Commitment Layer should not unconditionally duplicate these objects. It should add the distinction between Candidate Change and Current Semantic State, model-facing Authority, Evidence Relation, Completion obligation, persistence / expiry / supersession policy, Context Projection, and recovery and escalation semantics across model Runs.

Every class of formal object must have only one **canonical owner**. An AI sidecar or Work Extension may hold Candidates, Context Projections, and execution traces, but cannot keep an independently approved Artifact alongside the original system. Final approval state must be committed to the designated system of record, or the Schema Runtime must explicitly become that object's canonical owner. An Event Ledger may also reference an external system's immutable event ID, approval record, and Artifact version; it need not copy all existing events.

#### 13.3 Two Orthogonal Deployment Axes

How a Work Extension is loaded into a Runtime and who owns formal state are two orthogonal axes. The first is the runtime wrapper:

| Runtime wrapper | Host relationship | Applicable setting |
|---|---|---|
| Host-loaded Work Extension | Loaded into a general Harness through a plugin / package / bundle | Reuse the host's tools, session, permissions, traces, and UI seam while keeping the domain package versioned independently |
| Embedded Module | An internal module of a vertical product | The product already owns the main work objects and UI and needs the shortest call path and a consistent experience |
| Remote Service / Sidecar | Connected to the Harness / business system through an API, event, or protocol | Isolate permission, language-stack, or deployment boundaries and allow independent scaling and upgrades |

The second is canonical ownership of formal state:

| Form | Canonical owner | Place of Schema Engineering |
|---|---|---|
| Overlay / Sidecar | Existing professional system | Read formal state, generate Candidate Change, and submit through the original system API |
| Embedded Runtime | Case Management, EHR, BPM, or vertical SaaS | Proposal, Evidence, Completion, HITL, and Context Projection become internal capabilities of the original product |
| Greenfield Vertical System | New Work product | Own Matter, Artifact Store, Committed Event Ledger, Review, and model execution layers together, while allowing external systems to own some objects |

Hot swap acts only on the first axis. Even if a Runtime can safely replace a plugin, that cannot change the canonical owner on the second axis, automatically migrate formal State, or skip Authority and Review. An existing system implementing some Runtime primitives does not mean that F14 has been established; the independent vertical opportunity disappears only when an upstream platform further commoditizes the model-facing commitment interface and the downstream cannot differentiate on professional semantics, work-product acceptance rate, integration retention, or willingness to pay.

### 14. Boundary Tests

Boundary Tests separately check architecture, continuity and governance, and product value. The three groups must not be combined into one total score; Model, Agentic, and Work benchmarks must also retain their respective interpretive boundaries.

#### 14.1 Architecture

1. A Candidate State Change can be written as a Committed Event only after Schema, Evidence, Authority, and applicable Review Policy checks.
2. There is one clear authoritative relation among Committed Event Ledger, Current Semantic State, and Artifact Store; they do not each form conflicting states.
3. Evidence Relation, Authority, Operational Responsibility, and Accountability exist outside prose and can be queried separately.
4. Assignment completion is not declared unilaterally by an Agent.
5. Parallel execution does not blur the Operator's run obligation or change the Accountable Principal's ultimate accountability.
6. Work Contract can derive validators, an Evaluator rubric, a Work benchmark, and Review points; tool success, Run stop, or a fully green Agentic benchmark cannot directly promote a result into an accepted work product.
7. Work Extension depends on the host through declarative service / event / permission / UI seams; replacing a semantically equivalent Harness provider, model adapter, or UI channel does not change the Work Contract or accepted-work-product standard.
8. A HITL action has a domain-specific decision type, Authority, evidence context, and formal state consequence; it does not replace the Review Contract with a semantic-free generic confirmation box.
9. Capability activation is constrained by Contract, role, Matter stage, and a deterministic permission gate; a model cannot mount an unauthorized Tool, other Matter data, or an execution path that bypasses Review merely by self-report.
10. A Work Extension may be pre-orchestrated at organization, role, Matter, or stage level, or dynamically projected at Run level; when AOT and JIT compositions are semantically equivalent, they produce the same Authority, Commitment, and accepted-work-product standards.
11. A Compiled Work Expert has independent identity, version, semantic owner, provenance, applicability, dependency compatibility, E2E evidence, freshness trigger, abstention / fallback, and rollback; a model or improver cannot directly rewrite the active version.
12. Preset binding, Expert routing, and primitive composition have explicit escalation and downgrade boundaries; the primitive path is Candidate-only by default, and an uncovered Compiled Expert matter can fail closed and return to a Human / frontier path.

#### 14.2 Continuity / Governance

1. The user returns to a Matter rather than reconstructing a Chat.
2. The current work state can be understood without reading the complete transcript.
3. Artifact, approved decision, source relation, and outstanding obligation can persist across models and Sessions.
4. Human Review changes formal state through a Committed Event rather than merely leaving a comment.
5. The system can answer separately: what happened, what is now, what the model should see next, and what this Run produced that may remain.
6. Uncommitted, rejected, withdrawn, or superseded Output does not silently enter authoritative state or the priority Context of the next round.
7. Context Projection can be rebuilt from Stable Contract, Current Semantic State, and retrievable history without using repeated compression of complete chronology as the only recovery method.
8. As the total Matter, Artifact, history, and available Work Primitive inventory grows, the size of a single Context, Tool surface, and Human Work Surface varies mainly with the current Assignment working set rather than linearly with total Store size; omission of critical constraints, reintroduction of wrong versions, and work-product acceptance rate do not worsen because of sparse Projection.
9. Publication, suspension, revalidation, replacement, and deprecation of a Compiled Expert all have Committed version history; production edge cases, Reviewer disagreement, and later reversal can be traced to a specific Expert version and release decision.

#### 14.3 Product Value

1. Ordinary professional users do not need to learn Agent engineering to complete their main work.
2. Current work-product acceptance is not replaced by a promise of a future training flywheel; implementations using external models and implementations using internally trained models are judged by the same work requirements.
3. After the prototype author is removed, at least one of qualified users' work-product acceptance rate, recovery cost, or expert Review time improves measurably, without deterioration in other high-risk indicators.
4. A bounded Matter can separate Candidate and Committed and measurably lower Review, recovery, or version-coordination cost without replacing the existing system of record or deploying the complete Runtime.
5. Compared with repeatedly injecting Raw History in full, Current Semantic State + task-specific Context Projection improves at least one of cost, latency, state consistency, recovery, or accepted-work-product rate without worsening audit or discovery of open issues.
6. Improvements in Model or Agentic benchmarks can be interpreted as improvements in professional product capability only when they improve Work benchmark, accepted work product, completion, grounding, escalation calibration, or real downstream adoption.
7. Structure arises mainly from normal work behavior, Artifact diffs, and actual Review; at fixed work-product quality, Expert time spent on additional clarification, field entry, and Contract maintenance is lower than the Review, recovery, repeated-orchestration, and error cost it saves.
8. After expert free orchestration is compiled into a Work Extension, other qualified users can reproduce work within the declared scope without learning Tool routing, Prompts, Plugins, or Context mechanics, and the Expert shifts from per-run driving to low-frequency Contract / rule governance.
9. When high-frequency tasks execute through a preset / Compiled Expert, routing and orchestration cost falls; uncovered tasks can safely escalate into the frontier path and return as a Candidate Expert without fallback hiding the gap or forcing ordinary users to orchestrate plugins openly.

**Accepted work product** means an Artifact version accepted by a Reviewer with the relevant Authority at a predetermined process point, able to enter the next business process without substantive modification. Formatting and wording adjustments may be recorded separately; changing the conclusion, risk level, factual basis, or action recommendation is a substantive modification. A work product overturned during the evaluation period must record reversal, and results must be reported by risk level, task family, institution, and Reviewer rather than as one aggregate acceptance rate.

These conditions specify product boundaries only; they do not prove that a particular implementation satisfies them. Tests must cover real Matters, task recovery, model replacement, permission boundaries, Review state transitions, Context Projection, Output commitment, all three benchmark layers, and accepted work product.

### 15. Evidence Discipline and Falsifiable Boundaries

Product, learning, and market propositions in Schema Engineering have different evidence strengths. Matter-first, external Semantic State, Evidence, Authority, Completion, Review, Operational Responsibility, Accountability, Context Projection, Candidate Output commitment, and Lane parallelism are product-structure judgments; the incremental explanatory power of Work benchmarks, attention economics, Production Learning, schema-derived behavior signals, institution-level generalization, synthetic economics, refinement capability, and a horizontal market category still requires empirical evidence. Anti-depreciation judgments likewise rest on the condition that Output is generated from Context under finite attention and work experience cannot be reliably written back to parameters over time; they are not unconditional technical prophecies.

Evidence sources also cannot be merged into “validated.” Independent reproductions, independent benchmarks, vendor technical reports that retain negative results, vendor self-benchmarks, official product documentation, community observations, and product inferences answer different questions. A vendor self-benchmark can prove only a result under the supplier's chosen settings; official product documentation can prove that a mechanism or boundary is publicly provided by the product, but not its quality, causality, or generality; community observation can expose a phenomenon, but cannot by itself confirm causality; a product inference requires separate tests of user behavior, work-product quality, and economics.

#### 15.1 Evidence Propositions and Test Units

Canonical retains only propositions and evidence responsibilities that do not depreciate with product versions. Every claim awaiting validation should at least be written as `claim + scope + observable mechanism + outcome measure + comparison + disconfirming result + evidence class and date`. Instances, product mechanisms, individual practices, and sources do not enter the Kernel's definition or chain of reasoning; they can support only the local mechanism they directly present. The simultaneous presence of multiple necessary conditions does not constitute sufficient proof of the overall architecture. Depreciating sources, local explanations, test status, and incremental adjudications are maintained separately in the dated Practice Index; removing that Index does not affect the completeness of this paper.

#### 15.2 Discipline for Interpreting Evidence

Evidence strength is jointly determined by source independence, methodological inspectability, retention of negative results, correspondence between measurement and proposition, counterfactual design, reproducibility, and external validity. Different kinds of evidence must not be merged into “validated.”

The following table limits the maximum interpretive scope of each evidence type:

| Evidence type | Can support | Cannot support by itself |
|---|---|---|
| Observable product mechanisms and official documentation | That a surface, scope, or mechanism is provided | Unobservable backend ontology, effect size, or general causality |
| Vendor reports and self-built benchmarks | Local results under a public setting | Cross-task, cross-institution, or general professional correctness |
| Community and individual practice | Testable phenomena, candidate mechanisms, or failure modes | Causality, magnitude of benefit, or external validity |
| Independent reproduction, ablation, and real outcomes | Mechanism and outcome relations within the declared boundary | Extrapolation beyond sampling, permissions, time window, and task distribution |
| Inferences in this paper | System propositions awaiting validation and counterevidence designs | External endorsement or already-established product facts |

Moving from structures and trade-offs that people need to understand to the states that a system needs to represent and preserve is an additional proposition. An observable managed-resource or scoped-context surface proves only that a mechanism has been provided; it cannot infer that a backend ontology or Govern layer exists.

Mechanism analogies are for generating questions, not proving answers. Sparse routing of parameter modules cannot mutually prove the activation of heterogeneous, stateful Work Primitives carrying Authority. Multiple local necessary conditions appearing together still do not automatically constitute sufficient validation of the overall architecture.

#### 15.3 Falsification Results

The following results would invalidate or narrow the corresponding propositions:

| ID | Falsifying result | Direct consequence |
|---|---|---|
| F1 | An Agent using only Conversation History is consistently equal or superior to external Semantic State in long-running professional Matters | Downscope P3, P4, and external-state complexity |
| F2 | Session-first is no worse than Matter-first in recovery, review, version, and search cost | Matter-first becomes a choice for particular information architectures |
| F3 | Runtime ontology repeatedly degenerates into many exceptions across domains | Return the cross-domain paradigm to a small number of vertical architectures |
| F4 | Externalizing expert intervention does not improve expert intervention frequency or work-product acceptance rate | Return the positioning to expert augmentation |
| F5 | Structured Contract continually misses open questions or creates false certainty | Reduce Contract to accountability fields and abandon structure for some tasks |
| F6 | Professional quality depends on continuous fine-grained human intervention | Human Review cannot be concentrated only at milestones or the terminal state |
| F7 | Automatically captured Revisions cannot form reliable semantics at low cost | Revision Event retains only audit value |
| F8 | Synthetic-only has equivalent effect on real Matters at substantially lower cost | Production traces no longer constitute a defensible learning advantage |
| F9 | Production failures cannot form reusable Environment Seeds | Traces retain only local audit value |
| F10 | Disagreement within an institution is no lower than between institutions, and institutional rules lower work-product acceptance | Keep configuration at Reviewer or team scope |
| F11 | Rights make legally reusable signals insufficient to support learning | The learning branch fails; product structure is unaffected |
| F12 | In long-running Matters, full Raw History injection and raw-context inference remain no worse than explicit Contract, Current Semantic State, and Context Projection on accepted work product, discovery of open issues, cost, latency, accountability, audit, and recovery | Reduce the relevant Contract and external state to scaffolding, on-demand Projection, or an audit view; narrow P18's scope |
| F13 | Equivalent interface changes continually eliminate specialization gains | Harness has learned only an interface accident |
| F14 | A frontier provider commoditizes general Runtime primitives and vertical products cannot improve professional semantics, work-product acceptance, integration retention, state-governance cost, or willingness to pay | Retain the design discipline but remove the independent product opportunity; if vertical differentiation remains, only the differentiation of Runtime primitives disappears |
| F15 | Shared Runtime has no independent adoption, reuse, or payment value | The horizontal market category does not hold |
| F16 | Significantly better results are possible only when technical objects are exposed | Use progressive disclosure rather than hiding the technical layer completely |
| F17 | Every valuable use first requires a complete domain Contract and Runtime build, while up-front encoding, integration, and maintenance cost remains higher than savings in Review, recovery, and version coordination | The incremental adoption path fails; Schema Engineering remains an architectural discipline but is not an independently launchable product wedge |
| F18 | Agentic benchmark already fully predicts accepted work product on held-out Matters across task families, risk, and institutions, while Work Contract-derived rubrics add no incremental discrimination or failure explanation | Downgrade the independent Work benchmark; E2E may rely more on Agentic benchmark and real outcomes |
| F19 | High-value use is mainly one-time work, Output rarely enters subsequent work, and persistent state and Context Projection do not improve retention, work-product quality, recovery, or cost | Narrow P20 and the longitudinal product wedge to a small number of continuity settings; retain the Commitment Profile for sending, publishing, approving, merging, and irreversible action |
| F20 | With fixed model, task distribution, expert-hour, rights, and compute budgets, structured signals formed by Work Contract, Committed Revision, Review, and outcomes are no better on held-out Matters than ordinary documents, human SOPs, or synthetic-only data | The proposition that “Schema Engineering produces new professional-behavior training upstream” fails; these objects retain operating, audit, and Eval value but do not form a path to expanded model capability |
| F21 | A Work Extension works only through continuous patching of one Harness's internal implementation, or repeatedly breaks established work semantics or cannot maintain its declared acceptance conditions when the required capability is supplied by an equivalent service, plugin, model adapter, or UI channel | Narrow the independent Work Extension packaging and portability proposition; the setting may require deep coupling to one Runtime, but Work Contract and commitment governance remain necessary |
| F22 | On fixed tasks and models, Store → Govern → Retrieve → Compile does not improve state consistency, critical omission, token, latency, Review, or accepted work product over files + search + raw context, or long-term Govern-layer maintenance costs exceed its benefit | Reduce the pipeline to an implementation preference; retain only minimum accountability fields in Govern and leave the rest to retrieval and Human Review |
| F23 | Structured signals can be obtained only through frequent Expert entry, with operating cost growing approximately in proportion to data volume, and implicit capture + inference + selective clarification cannot lower cost | The expert-trace learning branch fails; Schema retains only objects necessary for current operation and audit and does not claim scalable distillation of implicit knowledge |
| F24 | As the total Matter, Artifact, history, and capability inventory grows, per-run Context / Tool surface still grows approximately linearly, or sparse Projection continually omits critical constraints and mixes in other Matters and old state | The Sparse Work Harness and attention-scaling propositions fail; return to narrower settings, fixed profiles, or simpler retrieval |
| F25 | Pre-orchestrated Work Extension cannot let non-original Experts reproduce the work; qualified users still need to choose tools, repair Prompts, explain context, and judge every next step | “Precompiled composition makes expert orchestration distributable” fails; product positioning returns to Expert frontier / augmentation |
| F26 | Compiled Expert validity cannot be maintained through owner, version, freshness trigger, reversal, and held-out outcome; old rules and old source / Tool / policy continually contaminate work through the “fast path,” or maintenance cost becomes uncontrollable with the number of Experts | Reduce Expert Registry to temporary presets; formal Authority returns to Human / dynamic path, and the Expert layer cannot claim sustainable compounding |
| F27 | The “success” of long-tail composition cannot form reviewable publication evidence in high-judgment settings, while Reviewer disagreement, slow feedback, and later reversal prevent a Candidate Expert from being promoted reliably | Keep Expert promotion institutional, human, and infrequent; the automatic compilation flywheel fails without affecting the operating value of Work Contract and Matter governance |

Every falsification condition needs a corresponding test design. Longitudinal continuity comparisons should include interruption, work across weeks, and model replacement; ontology comparisons should cover at least three domains with different responsibility structures; Contract comparisons should jointly measure open-issue discovery, anchoring, false certainty, work-product acceptance rate, token, latency, and maintenance cost; Model / Agentic / Work benchmark comparisons should hold model, Harness, and task stratification fixed and check incremental predictive power for accepted work product and reversal; learning-path comparisons should hold expert-hour, compute, rights, and data budgets fixed and compare incremental benefit from schema-derived signals, ordinary documents, and synthetic-only data; Harness tests should use semantically equivalent interface changes; product boundaries should be validated by real procurement, replacement, retention, and payment behavior; incremental-adoption tests should hold Matter scope fixed, fully count encoding, integration, migration, and ongoing maintenance cost, and compare it with savings in Review, recovery, Context construction, and version coordination.

### 16. Questions Remaining

1. What should the minimum Semantic State contain to improve continuity without becoming a second obsolete transcript?
2. Which Completion obligations are stable enough to encode, and which can only be Reviewer prompts?
3. How should the Runtime represent real disagreement among Reviewers with equal authorization?
4. Under what conditions should a Lane be promoted to an independent Operator?
5. Which Events are necessary for audit, and which are merely noise that should expire?
6. How should Context Projection expose that state may be stale, conflicting, or insufficiently confident?
7. What threshold is needed for a repeated correction to be promoted from Matter to client, institution, or product scope?
8. How can an Accepted-work-product Eval resist both benchmark saturation and institution overfit?
9. When Training rights do not exist, what rights are minimally required for aggregation and evaluation?
10. Which objects in a legal implementation must remain domain-specific and cannot enter the general Runtime?
11. When extracting stable obligations from Expert Demonstration, how many Matters and how many Reviewers are sufficient to distinguish a domain invariant from an individual habit?
12. How can an Extension's E2E suite cover task-family boundaries without mistaking an all-green result for professional correctness across the entire domain?
13. How should Failure Attribution represent multiple causes for one outcome, attribution uncertainty, and real disagreement between institutions?
14. At what granularity should a Work benchmark be derived from a Work Contract so that it explains real failure without hardening one institution's or Reviewer's preference?
15. What rules determine Candidate Output persistence, expiry, supersession, and next-round attention priority without rewriting Current Semantic State as a compressed transcript?
16. Under a fixed model, task, and accepted-work-product standard, how should one measure the token, latency, Review, drift, and recovery benefit of Context Projection relative to injecting the full history?
17. Once Persistent learning reaches what standard of reliability, revocability, and permission isolation may some external state be downgraded, and which provenance and institutional semantics must still remain explicit?
18. How should the product interface for Capture → infer → promote concentrate rule promotion into infrequent adjudication without making high-frequency Review degrade again into data labeling?
19. Which objects among Work Contract, Evaluator, Committed Revision, Review decision, and accepted outcome contain behavior signals that ordinary professional documents and SOPs do not; and how can cross-setting capability, institutional preference, and interface overfit be distinguished?
20. In software engineering, which higher-level Completion, Architecture, Compatibility, and Release obligations can form a minimum Work Contract beyond tests / CI without duplicating the manual loop engineers already have?
21. How should the promotion rule between Topic-level memory, Project / workspace, and Matter be defined so that it avoids both Session-first degradation and turning every persistent memory or broad topic into a Matter?
22. What service, event, permission, HITL UI, state migration, rollback, and compatibility semantics should the minimum stable interface between a Work Extension and a general Harness contain, so that it supports hot swapping without contaminating the Work Contract with Runtime-specific code?
23. Which minimum mechanism in an external case must be independently reproduced to raise a vendor observation from directional evidence to attributable evidence; and how can one avoid miswriting shared constraints from the same technology cycle as independent convergence on the complete architecture?
24. How should owner, version, Reviewer disagreement, deprecation, and rollback in the Govern layer be defined so that it does not become a second business system maintained permanently by a small number of experts?
25. As Store continually grows, how should one measure critical omission, irrelevant disclosure, stale-state reintroduction, token, latency, and cache stability of the Context compiler at the same time?
26. How should a Work Primitive Pack's minimum interface divide schema, tool, verifier, permission, transition, and Human Work Surface so that it supports composition without fragmenting the domain ontology?
27. What activation lifetime is appropriate for each of Organization, role, Matter, stage, and Run; when should composition be AOT-precompiled, and when should it be JIT-recompiled?
28. How much reproduction across Matters and Operators is needed to promote expert orchestration from a free Demo to a distributable Extension and distinguish stable work structure from an effective shortcut of one Expert?
29. How should a Compiled Expert's release gate combine accepted-work-product, Reviewer disagreement, risk stratification, observation window, and later reversal to determine “enough to deploy” in slow-feedback professional domains without producing false certainty?
30. Which changes should trigger automatic Expert revalidation, suspension, or recompilation; and how can source / regulation / institution drift, model / Harness drift, and actual work-distribution changes be distinguished?
31. When a Compiled Expert encounters an uncovered matter, how should abstention, Human escalation, bounded primitive composition, and Candidate Expert revision form a low-friction loop without sending ordinary users back to open orchestration?
32. What Evidence, delta, uncertainty, consequence, and Authority information does a Review packet need at minimum to show that a person formed an independent judgment under finite attention rather than merely completing a formal approval?
33. When Context Projection, Human Work Surface, and Retrieval Index explain sources and candidates from the same authoritative state, how can omission, staleness, and cross-Projection inconsistency be detected without physically locking the three views into one representation?
34. When an Evaluator reason is consumed by downstream execution, how should criterion, verdict, rationale, and state consequence be versioned separately, and how should closed-loop contamination from “correct label but wrong attribution” be detected?

### 17. Layered Principles Index

#### Compilation Principles

- **P17 — A demo becomes an Extension only when its hidden human harness is compiled and it passes E2E without its author.** A Demo becomes an Extension only when the invisible Human Harness is compiled and it can still deliver an adoptable result end to end after the original author leaves.

#### Ontology and Continuity Principles

- **P1 — Matter over Session.** Matter is the user object; Session is the infrastructure object.
- **P2 — Conversation is an interaction surface, not the product ontology.** Conversation provides interaction; it does not carry the work ontology.
- **P3 — Transcript is evidence of execution, not canonical work state.** Transcript records execution; it does not represent current formal state.
- **P4 — Continuity comes from Stable Contracts, Current Semantic State and retrievable history.** Continuity comes from stable contracts, current state, and retrievable history.
- **P9 — Lane is parallelism; Operator carries operational responsibility; the Accountable Principal carries ultimate accountability.** Lane represents parallelism; Operator bears the run obligation, and the Accountable Principal bears ultimate accountability.
- **P18 — Context is a projection; output is a candidate state update.** Context is a Projection generated for current work; Output is only a Candidate State Change and must not be persisted as Memory by default.

#### Commitment Principles

- **P5 — Explore broadly within authorized scope; commit narrowly across the formal boundary.** Explore broadly within authorized resources; only a narrow boundary with explicit type, evidence, permission, and accountable principal can change formal state.
- **P6 — Model proposes; systems enforce invariants; Evaluators measure specified semantics; humans adjudicate irreducible judgment.** Model, systems, Evaluators, and people respectively carry proposal, constraint, measurement, and adjudication.
- **P7 — Provenance is state, not prose.** Source relations belong to work state and cannot exist only in explanatory prose.
- **P8 — Completion must exist outside the model’s self-assessment.** Completion conditions must be maintained by objects outside the model.

#### Layering and Evaluation Principles

- **P19 — Work benchmarks are derived from Work Contracts; runtime success cannot substitute for work acceptance.** Work benchmarks are derived from Work Contracts; Runtime execution success cannot substitute for acceptance of the work product.
- **P21 — Layered contracts, local evidence.** Model, Agentic Runtime, and Work Extension each have their own Contract, Eval, long-lived assets, and evolution cycle; adjacent layers cannot borrow one another's correctness.

#### Product Governance

- **P10 — Agent complexity should be absorbed by the product.** The product absorbs Agent technical complexity, while users handle professional objects.
- **P11 — Capture first, infer later, promote selectively.** First capture facts, then infer semantics, and finally promote a small number of candidates into rules.
- **P12 — Production traces reveal observed production distributions; Synthetic Environments expand them.** Production traces reveal distributions observable under current product conditions; synthetic environments expand coverage.
- **P20 — One-shot quality is not longitudinal work quality.** The quality of a single deliverable is not the quality of work across time; when Output enters subsequent work, state governance is part of product quality.

#### Evolution Strategy

- **P13 — Delete scaffolding aggressively; preserve semantics deliberately.** Delete scaffolding that depreciates with models; preserve work semantics.
- **P14 — Eval infrastructure compounds; individual Eval items saturate.** Eval infrastructure can accumulate; individual items saturate and depreciate.
- **P15 — Selective model post-training is optional; acceptance criteria come first.** Training model weights is optional; acceptance criteria precede training objectives.
- **P16 — Do not use training as a substitute for reliable validation; do not globalize local preference; do not let automation substitute for the accountable decision.** Training cannot replace reliable validation; local preference cannot be generalized directly; automation cannot replace the final accountable decision.

The Compilation, Ontology / Continuity, and Commitment groups jointly define the Schema Engineering Kernel; Layering and Evaluation Principles specify the evidence boundaries of Model, Agentic Runtime, and Work Extension, and how Work benchmarks are derived from Work Contracts; Product Governance and Evolution Strategy are operating disciplines derived from the Kernel and require separate validation. P17 describes the publication gate for compiling professional capability and covers publication, revalidation, and deprecation discipline from Candidate Expert to Committed Expert Version; P18 describes the continuity boundary between Context and Output and requires Store and the current working set to be separated through Govern, Retrieve, and Compile; P19 describes the semantic source of Work Eval, P20 describes long-term quality, and P21 describes layered Contract and asset ownership without rewriting the Runtime ontology of Matter, Event, Semantic State, Artifact, and Review. Sparse Work Harness, Compiled Work Expert, three-tier activation, AOT / JIT composition, and the MoE analogy are implementation interpretations derived from these principles and do not add another Kernel ontology.

## Conclusion

Model capability determines what changes it can propose; Agentic Runtime determines whether it can execute those changes; Work Contract determines under what conditions those changes can be understood, validated, and acquire real-world effect; Matter Runtime and Context Compiler further determine which small part of continually growing work knowledge and capability deserves the model's and people's Attention at this moment. Upstream continually expands the capability boundaries of reasoning, knowledge, and action; downstream continually compiles these capabilities into work penetration surfaces for specific people, organizations, and consequences. The Contracts, Evals, Extensions, Commitments, and long-lived assets between them constitute what this paper calls Schema Engineering.

High-frequency work can be published as a Compiled Work Expert, allowing ordinary users to consume validated capability through a preset or a small amount of Expert routing; long-tail work retains constrained frontier composition and returns to the main path through abstention, Human Review, Candidate revision, E2E revalidation, and version publication. An Expert is therefore not a persona being played, but a work-capability commitment with provenance, Authority, applicability, failure conditions, and a rollback path.

Under the current paradigm of generating Output from Context with finite Attention, this can be understood as a possible system-level path to general intelligence, rather than a claim that a single model has already reached AGI: general capability keeps expanding, the work world keeps becoming readable, committable, revocable, and continuable, and codified knowledge, software-grounded execution, and governed professional judgment thereby gain a possible path of continuous learning. Only when a system can further improve its Contract, Tool, Environment, and learning procedure under external feedback and Authority boundaries can governed meta-improvement be discussed; that inference is ultimately adjudicated separately by each layer's Contract, held-out Eval, accepted work product, real adoption, and falsification conditions.
