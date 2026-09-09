---
Status: Practice Index · Evidence and Revision Ledger
Edition: 2026-09-07
Canonical base: 2026-09-07 Canonical Edition
Practice base: 2026-09-07 Generalized Practice Snapshot
Language: en
Source commit: a0234bc42dda75767554a2da89c247d66c2ad022
Scope: Sources, local propositions, evidence boundaries, verification status, and incremental revision records.
---

# Schema Engineering · Practice Index

## Citation, verification and incremental revision record

## I. Purpose

The Practice Index preserves perishable instances, sources and adjudication records. Canonical defines the Kernel, Practice gives the currently executable generalized snapshot, and the Index answers:

- where a local observation came from;
- what it directly supports and what it does not;
- how it should be reproduced, ablated or falsified;
- whether Canonical or Practice should be revised after discussion;
- what minimal increment was absorbed by which text version.

The Index is neither a case collection nor a prerequisite for the main texts. After the Index is removed, Canonical and Practice should each remain complete.

---

## II. Registration format

Each entry contains at least:

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

Only these statuses are used:

| Status | Meaning |
|---|---|
| observed | The source and mechanism have been recorded; no textual adjudication has been made |
| abstracted | The smallest testable mechanism has been extracted |
| indexed | Retained only in the Index; the main text is not revised |
| practice-adopted | Written into Practice in generalized form |
| canonical-adopted | The existing Kernel boundary has been shown to require revision |
| rejected | The observation does not support the candidate proposition |
| superseded | The entry's product or interpretation has been superseded by later evidence |

---

## III. Index of local propositions

### PI-01 · Runtime composability

- **Observation**: A plugin-native Runtime exposes model, tool, session, event, permission, question, storage and UI seams; composable systems can also provide effect tracking, dependency resolution, configuration reconciliation and reversible lifecycles. [^dsh-home][^dsh-readme][^dsh-architecture][^dsh-question][^dsh-ui][^cordis]
- **Smallest proposition**: A Work Extension can be packaged, loaded, revoked and projected without writing domain semantics into the host core.
- **Not supported**: That the Work Contract is correct; zero-cost migration across hosts; no degradation in output quality after hot replacement.
- **Verification**: No Core Patch, Upstream Upgrade, Plugin Reload, AOT / JIT Equivalence.
- **Disposition**: Adopted in Practice §2.1 and §3.1 in host-independent language; specific APIs remain only in this entry.
- **Status**: practice-adopted.

### PI-02 · External completion governance

- **Observation**: In the selected long-horizon software reconstruction task, the provider first constructed an executable standard of completion and then used it to constrain implementation and the continue / stop decision; the reported results came from a self-selected task and a provider-built system / benchmark. [^factory-completion]
- **Smallest proposition**: A completion inventory, evidence procedure and validation gate independent of the current Agent can change long-horizon execution outcomes.
- **Not supported**: General professional correctness; a complete Work Contract; cross-domain causality; independent replication.
- **Verification**: Fix the model and task, ablate the external completion inventory, evidence gathering and stopping gate, and report negative results as well.
- **Disposition**: The generalized mechanism is adopted in Practice §2.3; numbers and the provider's narrative remain in the Index.
- **Status**: practice-adopted.

### PI-03 · Feedback compilation

- **Observation**: A practice system distinguishes relatively stable procedural Skill from inference-time Memory, stores domain instructions as files, captures Human feedback at the work location, has an improver propose a small diff, and sends it through an ordinary PR / review / merge process into later execution; the material also warns that feedback may be wrong and that its Authority and scope must be screened. [^warp-improver]
- **Smallest proposition**: Human correction can be captured, reviewed, versioned and reused across Runs outside model weights with low friction; changes to a reusable procedural rule should use a commitment path independent of automatic Memory writes.
- **Not supported**: That Skill has become a complete governance substrate; causality for an accepted-work-product; post-training gains; local preferences generalize; an automatic improver can judge the Authority of all feedback.
- **Verification**: Check feedback Authority, scope, version, rollback, Reviewer disagreement and subsequent outcome.
- **Disposition**: Adopted in Practice §2.4 and §6.3; the concrete product flow remains in the Index.
- **Status**: practice-adopted.

### PI-04 · Project-bounded recall

- **Observation**: Official product documentation from frontier labs describes memory isolation within a work domain, retrieval of old conversations and exclusion of out-of-domain context. [^frontier-project-memory]
- **Smallest proposition**: Persistent content can be isolated by work domain, while history retains retrieval rights without occupying the whole current Context.
- **Not supported**: That Project equals an accountable Matter; retrieval equals Current Semantic State; Review, Authority and supersession are solved.
- **Verification**: Retrieval / Canonical Separation, Session Replacement, stale-state reintroduction.
- **Disposition**: The mechanism distinction is adopted in Practice §2.5; product names and versions remain in the Index.
- **Status**: practice-adopted.

### PI-05 · Managed resource surface

- **Observation**: Official frontier-lab documentation exposes product surfaces such as memory synthesis, project scope, persistent file references, source reuse and source disclosure. [^openai-managed-resources]
- **Smallest proposition**: Context can shift from a one-time message payload to a manageable resource with identity, scope, lifecycle and reference; storage and current attention can be separated.
- **Not supported**: That an unobservable backend has adopted an event / object ontology; that a UI shows the Govern layer is established; that resources are not flattened before entering model input.
- **Verification**: Check identity, scope, version, source return, deletion, expiry and Context disclosure; do not infer internal implementation from the UI.
- **Disposition**: Storage-attention separation is adopted in Practice §2.5 and §4.3; product surfaces remain in the Index.
- **Status**: practice-adopted.

### PI-06 · Execution-to-judgment migration

- **Observation**: An expert article argues that even when an Agent reduces local implementation cost, people still need to understand data architecture, system architecture, security, reliability, production operation and lifecycle trade-offs. [^andrew-ng-se-fundamentals]
- **Smallest proposition**: Cheaper execution does not automatically eliminate architecture, verification and lifecycle judgment.
- **Not supported**: That this author proposed Schema Engineering; that everything people need to understand must become system state; that software engineering and professional work have symmetric maturity.
- **Verification**: After execution cost falls, measure whether decision, verification, responsibility and lifecycle errors become more important sources of outcome failure.
- **Disposition**: Retained only as background for Practice's structural assumptions; not named in the main text.
- **Status**: indexed.

### PI-07 · Proactive context management

- **Observation**: Frontier research presents context editing as part of planning, structured memory, offloading, partial rollout and snapshot-level credit, and publishes inference, evaluation and training implementations. [^contextpilot-paper][^contextpilot-code]
- **Smallest proposition**: Deleting, summarizing, compressing and reloading Context are actions that change later behavior and can be snapshotted, replayed and given local credit.
- **Not supported**: That governed Matter memory has been established; that retained content has formal effect; that results on a particular long-context task have cross-domain external validity.
- **Verification**: Context Mutation Preservation; report token, local score and accepted-work-product separately; preserve Raw Evidence recovery, scope and lifetime.
- **Disposition**: Canonical §5.4 receives a minimal boundary clarification; implementation and tests enter Practice §2.6 and §4.4; no ontology or principle number is added.
- **Status**: canonical-adopted / practice-adopted.

### PI-08 · Multi-agent work topology

- **Observation**: Personal practice describes multiple models or TUIs sharing a harness, skills and work constraints, with planner, worker and critic positions isolating Context; another practitioner's setup emphasizes state, priority, isolated environments and scheduling for concurrent instances. [^fryxell-harness][^ondrej-setup]
- **Smallest proposition**: Execution topology, capability configuration, work responsibility and final Authority are different objects.
- **Not supported**: That a role name equals an Expert; that more Agents necessarily improve quality; that a personal workflow proves a general architecture or benefit magnitude.
- **Verification**: Runtime Profile Separation, Correlated Review Failure, Authority Failure.
- **Disposition**: Canonical §4.3–4.4 already expresses the responsibility distinction and is not revised; Practice §2.7 adds topology / Expert separation and related tests.
- **Status**: practice-adopted.

### PI-09 · Documentation as work surface

- **Observation**: Community practice places documentation-driven work, adversarial review, testing, complexity constraints, complete records and work indexes side by side. [^document-driven-practice]
- **Smallest proposition**: Documentation can serve simultaneously as an execution specification, review, recovery and delivery surface; a shared file form does not erase institutional differences between objects.
- **Not supported**: That a Session log equals Current Semantic State; that an automatic index can change formal state; that Agent consensus equals acceptance; that a personal report's cost proportions generalize.
- **Verification**: Documentation Promotion Boundary, Session Replacement, Candidate / Committed Isolation.
- **Disposition**: Adopted in Practice §2.8 and §5.4; Canonical already has History / State / Context / Artifact boundaries, so no object is added.
- **Status**: practice-adopted.

### PI-10 · Structured state as the execution substrate

- **Observation**: Google's / Purdue's *SKILL.state: Scalable Long-Horizon Agent Skills* expresses long-horizon procedural execution as `immutable procedure + current structured state + latest observation`; the model proposes a State Patch and action, and a deterministic runtime validates, merges and executes them. Version 2 of the paper was revised on 2026-08-28, and the arXiv page marks it accepted at EMNLP. [^skill-state]
- **Smallest proposition**: For a long-horizon procedural task in which Current Semantic State can serve as a sufficient statistic for future execution, canonical structured state is a better default execution substrate than append-only conversational history; it can reduce both cumulative token complexity and history contamination.
- **Experimental boundary**: The paper compares ReAct-style Prompt, Summary Memory, State + History and State-only Runtime on synthetic SkillExecBench, InterCode CTF and Sierra τ-Bench. In the budget-matched Warehouse `T=100` comparison, the scores for sliding window, capped summary, LLMLingua and structured state are 0.18, 0.52, 0.22 and 0.94; structured state uses 65,408 cumulative tokens. At `T=200`, structured state reports 0.94 / approximately 122k tokens. With 50 distractor events per round at `T=50`, Prompt and structured state score 0.53 and 0.98 respectively. [^skill-state]
- **Not supported**: That History can be deleted from storage; that a fixed Schema applies to all professional work; that the paper establishes Evidence, Authority, Review, Artifact version or Matter governance; that a single-Agent procedural benchmark result can be directly extrapolated to audit, legal, investment or multi-writer work.
- **Paper-stated limitations**: State must be a sufficient statistic for future execution. This assumption fails in three kinds of situation: the Schema must be discovered during execution; the importance of an old Observation was not recognized and committed in time; or the historical trajectory itself is the work object for auditing, debugging provenance or explaining past actions. The current implementation also validates only a single Agent; shared State across multiple Agents still needs deterministic concurrent-write conflict resolution. [^skill-state]
- **Failure attribution**: For a smaller open-weight model, the paper classifies State failures as premature overwrite / deletion 68%, schema comprehension / type coercion 20% and JSON syntax 12%. This only shows that failures become more attributable after a structured transition; it does not show that reasoning errors have been eliminated. [^skill-state]
- **Verification**: State Sufficiency / History Disclosure, Patch Preservation, Context Omission / Pollution, Session Replacement, Candidate / Committed Isolation. Ablations should compare accuracy / accepted outcome, token, latency, recovery, source preservation and recall of old Observations together.
- **Disposition**: Add one normative convergence with a sufficient-state condition to Canonical §5 without adding a principle; add the Memory / State / Schema distinction, State-first execution chain and boundary tests to Practice §2.5, §4.3 and §7.3. The paper title, numbers and limitations remain only in the Index.
- **Status**: canonical-adopted / practice-adopted (local evidence; replication in professional-work settings pending).

### PI-11 · Fresh-context continuation as a runtime hypothesis

- **Observation**: A user-saved screenshot of a 2026-09-03 Codex implementation discussion describes a candidate `new_context` mechanism: an Agent can end a polluted working window, enter a fresh initial context without generating a compaction summary, and retrieve older information on demand through history / notes-like tools. Current public OpenAI documentation confirms support in a long-horizon Runtime for compaction, state continuity, tool orchestration and the autonomy boundary, but does not independently confirm the screenshot's specific interface, merged state or release semantics. [^openai-runtime-context]
- **Smallest proposition**: Treating history as a queryable data source and current Context as a disposable working set is a Runtime path different from continuously pushing old attention into new attention; both paths can coexist.
- **Not supported**: That Codex has stopped compaction; that `new_context` has shipped or will be implemented as shown in the screenshot; that notes / history constitute governed Matter State; that a fresh window necessarily improves accepted-work-product.
- **Verification**: Fresh-context / Compaction comparison; Session Replacement; State Sufficiency / History Disclosure; compare omission of key constraints, reintroduction of stale state, token, latency, recovery and accepted outcome.
- **Disposition**: Existing Canonical §5 and Practice §2.5–2.6 can express this already, so the main text is not revised for an independently unverified product interface; it is retained only as a candidate trend for internalized context / state management in a Harness.
- **Status**: indexed (product implementation observation awaiting a public source or reproducible experiment).

### PI-12 · Human attention as a review constraint

- **Observation**: Mitchell, Ghosh and Passi's position paper argues that putting a person in the Agent loop does not automatically constitute effective oversight; Agent speed, step count and long-term automation can weaken situational awareness, create approval fatigue and erode the skills needed for supervision. The paper proposes strategic friction, bounded autonomy, batch review, automated pre-checks, monitoring and organizational protocols as design directions. [^agents-out-of-loop]
- **Smallest proposition**: Human Review has an independent attention and cognition constraint; a Review Contract must specify what a person sees, when they see it, and at what decision-unit and Evidence granularity, rather than only specifying that an approval step exists.
- **Not supported**: That the paper demonstrates a particular Review UI; that all batch review is better than item-by-item review; that review duration, override or a canary metric alone can prove judgment quality; that HITL can eliminate capability gaps or responsibility risk.
- **Verification**: Fix the task, Agent and Authority; compare raw chronology, tool-call approval and a structured decision packet; measure critical error detection, evidence-seeking, Review time, override, later reversal, canary and accepted-work-product.
- **Disposition**: Add Review's cognitive sufficiency and decision-unit projection to Canonical §6.6; add Human attention, Review Sufficiency and monitoring boundaries to Practice §5.1, §5.3 and §7.3; add no Contract type or principle number.
- **Status**: canonical-adopted / practice-adopted (design constraint; concrete UI benefit pending evidence).

### PI-13 · Software engineering becomes work-shaped beyond the task boundary

- **Observation**: *Harness-of-Harness* organizes multi-day autonomous software development as an iterative planning–development–independent QA cycle. The Runtime preserves software Artifact State and Evidence State, freezes inputs for different roles, limits read / write permissions, requires structured output, progressively discloses persistent Artifacts through a concise index, and binds Evidence to a read-only candidate version. [^hoh]
- **Smallest proposition**: When coding autonomy extends beyond one bounded task, continued progress requires durable Specification, Artifact continuity, Evidence continuity, a bounded objective, role-specific Authority and independent Acceptance; Artifact and Evidence cannot substitute for one another.
- **Experimental boundary**: The paper reports gains across three software benchmarks, three harness–model pairs and one 70+ iteration game-development case; the multi-day case comes from one project and the authors' system, while the benchmark verifier and software substrate are more executable, replayable and versionable than most professional work. [^hoh]
- **Not supported**: That Planner / Developer / QA is a universally best topology; that a QA report already forms an external commitment gate; that a fixed Specification suits work whose rules evolve; that software tests can replace broader professional judgment; that the result can be directly extrapolated to legal, investment or institutional approval.
- **Verification**: Fix the model, Harness and task; ablate Artifact / Evidence dual state, progressive disclosure, role Authority, frozen candidate and independent Acceptance; measure regression, repeated work, unsupported completion, token, recovery and accepted artifact separately.
- **Disposition**: Add the work-shaped Runtime and extrapolation boundary after coding crosses the task boundary to Canonical §8.5; add Artifact / Evidence dual continuity to Practice §4.3; concrete roles, models, benchmarks and numbers remain only in the Index.
- **Status**: canonical-adopted / practice-adopted (local software-domain evidence; cross-professional-domain validation pending).

### PI-14 · Evaluator criteria have a governed lifecycle

- **Observation**: Netflix's production case study organizes an LLM judge into a four-stage lifecycle of Birth, Training, Deployment and Monitoring: experts define must-have criteria, labeling guidelines, boundary samples and rationales; rubric tuning addresses both label error and cases that are both fail but have inconsistent reasons; in production the judge gates the explanation and also sends the reason back to bounded revision; weekly Human review monitors drift and rubric gaps, a new rubric can be deployed only after a manual review gate, and the old version remains available for rollback. [^judge-lifecycle]
- **Smallest proposition**: When a criterion, verdict or reason changes the production lifecycle, the Evaluator and rubric themselves are governed artifacts requiring an owner, version, monitoring, Review, deployment gate and rollback; label agreement cannot cover attribution errors with downstream consequences.
- **Experimental boundary**: The case covers only one recommendation-explanation family and a mobile surface; some criteria and model details are undisclosed; drift-triggered automatic retuning has not yet triggered in production; and the meta-judge and primary judge use the same base-model family, so correlated errors may exist. [^judge-lifecycle]
- **Not supported**: That LLM-as-a-Judge can replace an Accountable Reviewer; that this rubric lifecycle has validated a general professional Work Contract; that reusing one judge's gate and critique is safer in every domain; or that online business lift proves the causality of each rubric revision.
- **Verification**: Criterion / Evaluator Version Binding; Right-label / Wrong-reason cases; Drift and Rubric-gap Detection; Candidate Rubric / Deployed Rubric Isolation; Rollback; downstream revision contamination.
- **Disposition**: Add the Evaluator / criterion lifecycle and the execution consequences of reasons to Canonical §11.2; add Evaluator Lifecycle tests to Practice §7.3; numbers, product scale and limitations remain only in the Index.
- **Status**: canonical-adopted / practice-adopted (production case; limited external validity).

### PI-15 · Repository-governed handoff continuation

- **Observation**: During this continuation on 2026-09-04, a new Run first read the repository README, CONTRIBUTING, papers/README, CHANGELOG, recent commits, the responsibility boundaries of the three source texts and the build / validation rules, then expanded three chat attachments and the original papers as needed; it recognized that PI-10 had already been adjudicated and did not reintroduce it, and handled the unpublished Codex-interface observation, paper evidence and the synthesis developed here separately.
- **Smallest proposition**: Explicit repository state, a revision protocol, a source / generated-artifact division and queryable history can let a new execution continue revising without treating the entire old chat as Current Semantic State.
- **Not supported**: That one self-observation proves this method better than compaction; that the Agent obtained hidden context; that the result has been accepted by an independent Reviewer; or that the same protocol can be reproduced reliably in other models, repositories or professional domains.
- **Verification**: Compare three fresh Runs on the same revision task: repository-governed handoff, chat summary only and no governance files; check repeated propositions, source mismatch, excessive Canonical revision, version consistency, validation pass rate, Review time and later reversal.
- **Disposition**: Record this only as the method's self-observation for this round and the starting point of V-13; it is not external evidence that Canonical or Practice is established.
- **Status**: observed (single self-observation; independent comparison and human Review pending).

---

### PI-16 · Product signals motivate offline attribution

- **Date / source class**: Accessed 2026-09-05; author publication, supplemented by a practitioner's practice share. The WeChat link supplied by the user could not be read directly; the full Substack text by the same author was checked, and the chat paraphrase was used only as a search lead. [^manus-research-bench]
- **Observation**: The article describes local Research Bench metrics through the number of factual points and metaphor rate; it reports that GPT made more search calls but yielded less final information, changes the writing after inspecting intermediate notes, and self-reports an improvement in information quantity. It also acknowledges that the metrics need continued validation against online outcomes.
- **Smallest supported proposition**: Output signals can guide trace inspection and produce revision hypotheses for intermediate representations and a Harness. This is a local observation from product diagnostic practice.
- **Unsupported extrapolation**: Search count is not the same as relevant information encountered and cannot rule out retrieval-quality or coverage deficits; the self-reported intervention provides no independently reproducible control or effect interval and cannot establish a unique cause; the number of information points does not automatically measure truth, relevance or obligation coverage; metaphor rate is not readability. An undisclosed architecture cannot be judged present or absent from the article; this paper does not adopt its mathematical explanation that metaphors necessarily cause information loss.
- **Verification**: Fix sources, task and resource budget; compare free summarization, atomic notes and a representation that records evidence relations under the existing Work Contract. Use independently checked task obligations and source support as the reference, measure extraction omission, persistence omission, Projection omission and final-use error separately, and record relevance, duplication, unsupported propositions, Review time and outcome acceptance. Use a separate end-to-end retrieval comparison; do not have one extractor generate and adjudicate the entire reference.
- **Discussion and adjudication**: The concrete case enters only the Index; together with PI-14, PI-17 and existing P19 and P21, it combines diagnosis, controlled comparison and regression release into Practice's offline Eval practice. Schema provides checkable locations and relations; it does not automatically provide complete observation, correct labels or causal identification.
- **Main-text disposition**: Complete the evaluation loop outside the Runtime in Practice §6.5; no new ontology, Contract type or principle is needed.
- **Status**: practice-adopted (mechanism design adopted; benefit and causality pending verification).

### PI-17 · Evaluation harness and agent harness have distinct responsibilities

- **Date / source class**: Accessed 2026-09-05; Anthropic official engineering-practice summary, published 2026-01-09. [^agent-evals]
- **Observation**: The article distinguishes task, trial, grader, trace, outcome and evaluation harness; separates capability exploration from regression checks; and requires calibrated graders, trace reading, isolated trial environments, repeated runs and combination with production observations.
- **Smallest supported proposition**: The execution Agent's Harness and the evaluation facilities that organize trials, records, scoring and comparison can have different responsibilities; a trial's final external state cannot be inferred from the Agent's self-report alone.
- **Unsupported extrapolation**: The engineering advice is not a controlled experiment in general benefit; offline passage does not mean professional work has been accepted; repeated calls to the same model family do not form independent professional judgment; a readable Trace does not mean the failure cause has been identified.
- **Verification**: Fix the same candidate version; compare a single total score with repeated, risk-stratified metrics and blind review; inject environment residue, scoring-order changes and grader drift and check whether the conclusion changes; use tasks not involved in tuning and subsequent outcomes to recheck the judgment.
- **Discussion and adjudication / main-text disposition**: Together with PI-16, this supports the evaluation philosophy in Practice §6.5; retain the stratification and attribution boundaries of Canonical §8.5, §10 and §11.2.
- **Status**: practice-adopted (engineering method; incremental validity for SE not yet verified).

---

### PI-18 · Existing foundations and the scope of the contribution

- **Date / source class**: 2026-09-05; conceptual positioning and independent review adjudication. The original authors' Event Sourcing explanation and the formal sources for W3C PROV-DM and OMG CMMN 1.1 were checked. [^event-sourcing][^prov-dm][^cmmn]
- **Observation and relationship to prior work**: Event Sourcing preserves state changes as an event sequence and supports reconstruction, corresponding to this paper's Ledger / reducer reference implementation; PROV-DM provides provenance expressions such as entity, activity, agent and derivation, corresponding to the existing modeling basis for provenance; CMMN provides modeling standards for case, case file and case plan, corresponding to existing foundations for work objects and non-fixed processes.
- **Smallest supported proposition**: These primitives have clear precedents. This paper proposes a compositional framework for Agent-oriented work compilation, candidate commitment, state projection and evaluation revision; it is not the first invention of state, case management or provenance modeling.
- **Unsupported extrapolation**: Similar terminology does not mean the models are fully equivalent; PROV derivation does not automatically amount to semantic support under an Evidence Contract; CMMN does not automatically include all of this paper's model permissions and Context semantics; Event Sourcing is not the only implementation that can establish governance. This positioning is not an exhaustive survey of related work.
- **Verification / counterexample**: Use an existing case or process system with provenance records and a model interface as the baseline; claim a compositional benefit only when an increment attributable to compilation, commitment or continuity boundaries appears under the same work requirements. Do not exclude a system that implements equivalent mechanisms because the baseline is not called SE.
- **Discussion and adjudication / main-text disposition**: Explain the contribution and relationship to prior work in Canonical §2; limit Event Sourcing to a reference implementation in §4 while retaining the existing SoR path.
- **Status**: canonical-adopted (positioning and boundary clarification; compositional benefit pending verification).

---

### PI-19 · Replaceable execution, durable control and contained failure

- **Date / source class**: Accessed 2026-09-06; an InfoQ interview report with practitioners from TiDB, Tencent Research Institute, Floatboat and Trae. [^infoq-thin-loop]
- **Observation**: The TiDB interviewee summarizes the internal Harness as “thin Agent Loop, thick Control Plane” and reports retaining Sandbox, permissions, persistent state and recovery facilities when replacing OpenCode with Pi; the same report describes a declarative goal, a low-communication topology, collaboration through explicit state and results, and `fail fast → limit propagation → recover from trusted state`. Project duration, workspace count and the absence of human coding / review are self-reported by interviewees and were not independently checked here.
- **Smallest supported proposition**: A general execution loop and the boundaries for persistent state / permissions / side effects / recovery can be layered; when a model absorbs generic execution steps, a Work Contract can reduce imperative orchestration that carries no professional semantics; long-horizon reliability needs error propagation and trusted recovery measures, not only continuous step count; decomposable tasks can preferentially collaborate through bounded state output.
- **Unsupported extrapolation**: That Pi or any Agent core is generally optimal; that all Skills or orchestration will disappear; that all work should use databases, a filesystem, MVCC, checkpoints or Multi-agent; that less communication necessarily improves outcomes; that the interviewed system already implements a complete Work Contract, Matter governance or accepted-work-product gate; or that self-reported scale and duration have independent causal validity.
- **Verification**: Fix model, task, resources and Work Contract; replace an equivalent Agent loop and compare state semantics and outcomes; compare a declarative contract with a fixed planner / worker / reviewer path; inject errors at different stages and measure durable-state contamination, detection latency, rollback loss and recovery success; compare conflict, duplication, cost and acceptance outcomes for governed branch / artifact convergence and high-frequency messaging.
- **Discussion and adjudication / main-text disposition**: Canonical §2.1, §3, §4.5, §5.4–5.5 and §8.1 absorb only the minimal relationships among declarative contract, Matter / Session / Run, Context compilation, failure containment and replaceable execution, without adopting product implementation as a theoretical source; Practice §2, §3, §4, §5, §7 and §8 add implementation, UI, reuse, testing and failure boundaries. No ontology, Contract type or principle number is added.
- **Status**: practice-adopted; canonical-adopted (necessary clarification of existing boundaries; empirical effect pending verification).

---

### PI-20 · Runtime compatibility and action-channel guarantees

- **Date / source class**: 2026-09-07; user-provided architecture discussion and comparison against this round's text, a design inference with no new empirical evidence.
- **Source**: [Harness architecture comparison](chatgpt-conversation://6a9e6c32-5afc-83ec-834b-19ba8b9e9efa), with all four rounds of the discussion read in this round. Product descriptions and citations in the chat were not independently checked and are not treated as provider implementation facts.
- **Observable mechanism**: The discussion proposes two paths, provider-managed and a self-wrapped thin Runtime, organizes the terminal around Review / revision, and compares the adaptation cost of SaaS APIs and Computer Use; this is a solution description, not a runtime observation.
- **Smallest supported proposition**: As derived from the existing layered Contract, replacing the execution layer and operation channel must preserve work semantics and explicitly test capability gaps; execution complexity should be selected according to task requirements.
- **Unsupported extrapolation**: This does not establish the specific internal mechanisms of Codex or Claude, CodeRabbit's positioning or relative merits, that professional tasks are generally simple, that APIs are naturally idempotent or reversible, that Computer Use must replace connectors, or that SE necessarily has a market advantage because of governance semantics.
- **Reproduction / falsification**: V-19 fixes a Work Contract and compares native, simulated and capability-missing execution layers; V-20 injects unknown side-effect outcomes and switches operation channels; a further comparison uses the same outcome-acceptance standard to compare the development, operations, Review and recovery cost of thin and complete Runtimes. None has been run.
- **Discussion and adjudication**: Canonical §13.2, P21 and F21 already contain the replacement boundary and the main text is not revised; Practice §3.1 rewrites logical responsibility, capability negotiation, thin Runtime and channel selection, and adds tests in §7.3. §5.3 already expresses a Review surface oriented toward change, so no product analogy is added again. Do not treat “stop → inject → recover” as unconditionally equivalent steering, and do not treat a local checkpoint as external rollback.
- **Main-text disposition / status**: Absorbed as an implementation constraint; 9.6 rewrites §3.1 and moves the new itemized tests to PI-21 / V-19–V-20. Performance, interoperability and economics remain to be verified. No ontology, Contract or principle is added.

---

### PI-21 · Structured state, authorized views and reusable CS mechanisms

- **Date / source class**: 2026-09-07; user-provided conceptual discussion and comparison against this round's text, a formalization candidate and engineering research lead with no new empirical evidence.
- **Source**: [Whether a stable Schema is a vector space](chatgpt-conversation://6a9e71a9-85b4-83ec-8a39-93f4a1427090). Three rounds of discussion were read, covering state spaces, layered disclosure and transfer of CS paradigms in sequence. The initial entry did not check theoretical literature; the 9.6 review checked the primary sources below, while the chat analogies are not treated as theorems, implementation guarantees or evidence of novelty.
- **Observable mechanism**: The discussion attempts to express Matter State, candidate changes and visible views for different execution roles through one Schema, and proposes database, compiler, authorization and program-analysis mechanisms as implementation candidates. This is a solution description; there is no runtime observation yet.
- **Smallest supported proposition**: Existing Schema, Context Projection and Authority boundaries can be translated further into testable state constraints, read strategies, candidate operations and commitment checks; engineering choices can look for mature mechanisms by these responsibilities without adding new Kernel objects.
- **Mathematical boundary**: We may provisionally write `X_S = {x ∈ ∏ᵢ Xᵢ | I_S(x)}` for the heterogeneous state set satisfying Schema invariants; constraints between components mean that not every field combination is valid. Given a version, authorization and preconditions, a candidate operation `p` obtains a candidate result through the partial transformation `apply_S(x, p)`; formal effect passes through a separate commitment boundary. This does not assume state subtraction, linear addition, scalar multiplication or invertible operations; operation composition may depend on order, conflict or be undefined. Numeric fields, text embeddings and stable field names do not automatically give the entire work state a vector-space structure. “Coordinate system” is only a representational analogy; manifolds, tangent spaces and local linearization require separately defined structures and proof conditions, and are not adopted here.
- **Disclosure boundary**: A view may provisionally be written as `v_i = π(x; assignment, purpose, policy_version, state_version)`; readable scope, proposable operations and commit authority are verified separately. Authorization filtering should occur before data crosses the corresponding trust boundary, but this does not fix Project as a new pipeline stage or require it always to precede every retrieval; query planning within a trusted domain and final Context compilation can be staged separately. Summaries, indexes, caches, logs, tool parameters and results are also propagation paths that require checking; hiding the source text does not rule out inference from derived values. Revoking permission cannot make already disclosed data disappear.

| Candidate paradigm | Corresponding existing SE responsibility | Transfer boundary and questions to test |
|---|---|---|
| Database views, row / column access control, query optimization, materialized views | Generate Context Projection and Retrieval Index by Matter / role / purpose | An ordinary view or projection pushdown does not automatically become a security boundary; check cross-object relations, derived fields, cache invalidation and rebuilding after revocation |
| Compiler IR / lowering, ISA / ABI contracts | Intermediate representation of the Work Contract and Host Adapter compatibility boundary | Do not equate Schema with an ISA or add a Work ABI; continue to test version mapping, semantic preservation and missing capabilities under PI-20 / V-19 |
| Types, guards and state-transition checks | Candidate shape, preconditions and typed commitment boundary | Type correctness does not equal sufficient Evidence or Authority; concurrent version conflicts still require verification at commitment |
| OS isolation, object capabilities, information-flow control | Resource access, least privilege, delegation and output destination | Execution-layer capability does not equal organizational Authority; RBAC and capabilities can be combined. Context trimming is not memory isolation or a non-disclosure proof; the combination of read and external-transfer permissions needs a separate check |
| Abstract interpretation / abstract domain | An abstract view that retains unknowns, conflicts, qualifications and properties required by the task | An ordinary summary does not automatically have soundness; define concrete and abstract domains, retained properties and transformation relations before discussing a sound approximation; two mappings alone cannot establish a Galois connection |
| CQRS / event sourcing | Read projections, candidate commands, formal writes and recoverable history | Neither implies the other, nor do they automatically provide Review / Authority; following PI-18, Event Sourcing remains a reference implementation |

- **Unsupported extrapolation**: That stable Schema makes changes freely composable, or Context compilation necessarily deterministic or minimally sufficient; that database retrieval and projection can be exchanged arbitrarily while preserving permission and result; that an Agent can know only what is in the current Context; that traditional CS governs only computation placement and not information or action; or that general theoretical mechanisms have proved SE's security, efficiency, professional correctness or market value.
- **Reproduction / falsification**: V-21 compares source-side authorized views with post-retrieval filtering, injects cross-Matter relations, sensitive derived values, cache changes and revocation changes, and checks exposure and necessary-evidence omission at each trust boundary; V-22 fixes task and authorization scope, compares full text, free summaries and views generated for declared properties, retains counterexamples, unknowns and conflicts, and measures overconfidence, outcome acceptance and disclosure cost. Version mapping and Runtime replacement reuse V-19 rather than creating a duplicate queue. None has been run; this round's source check covers only the table below, while the concrete security model, implementation choice and proof remain to be executed.
- **Discussion and adjudication / main-text disposition**: The initial adjudication was indexed; after the 9.6 strong review, the main concepts were still carried by the existing Kernel, but the wording had incorrectly made candidate visibility depend on first acquiring formal effect and had narrowed Schema into a persistence policy. Canonical §2.3, §5.4–5.5 and §6.1 rewrite the existing representation, disclosure and commitment relationships; Practice §2.5, §3.1 and §4.3 organize them as implementation prose. The mathematical formulas, CS correspondences, counterexamples and proof requirements remain in this entry; no Project stage, epistemic sandbox or Work ABI object is added, and no technology stack is adopted on this basis.
- **Status**: practice-adopted; Canonical is a consistency revision of existing principles and adds no Kernel proposition.

**9.6 primary-source verification (2026-09-07)**:

| Source | What this round verified | What is not inferred from it |
|---|---|---|
| PostgreSQL 18 Row Security Policies and CREATE VIEW [^pg-authorized-views] | Row-level policies can separately restrict reading and modification; view security semantics depend on execution identity and security configuration, with exceptions on some access paths | That an ordinary view, query optimization or simple field projection automatically prevents leakage; that any database configuration directly satisfies SE's organizational Authority |
| LLVM Language Reference, Introduction / Well-Formedness [^llvm-ir] | The same IR has multiple representations; parsability and satisfaction of internal structural constraints are distinct | That Work Schema has LLVM's precise execution semantics, or that a host replacement needs no compatibility proof |
| Cousot & Cousot 1977, author-kept paper abstract and bibliographic information [^abstract-interpretation] | Abstract interpretation discusses program properties and consistency between abstractions through ordered structures, transformations and fixed points | That an ordinary summary is a sound approximation; that this round checked the complete paper proofs or established a Galois connection for SE |
| Sabelfeld & Myers 2003, §I, §V.D [^information-flow] | Reading control does not directly constrain propagation after reading; permitted information release must be defined by the corresponding policy | That label checks can fully track an LLM's semantic dependencies, or that current SE has proved noninterference |

**Implementation and review conditions retained in the Index**:

- PI-20's Runtime compatibility tests continue to cover control timing, missing capability, completion after cancellation and unknown side effects; recovering Matter State is not migrating an internal reasoning snapshot, an API is not naturally idempotent or reversible, and a thin Runtime does not automatically satisfy the data boundary of sovereign deployment. These conditions are withdrawn from the itemized warnings in Practice §3.1 and the two new tests in §7.3 back into this entry and V-19 / V-20; the main text retains capability negotiation, effect checking and necessary authorization.
- A candidate may be saved, retrieved and enter Review, but its identity must not be upgraded into formal state by summarization or repeated recall; assert “candidate enters Context” and “candidate acquires Authority” separately. Check view consistency against the same object, version and effect; snapshots from different times need not be textually identical.
- Check object existence, relations, derived values, tool parameters, logs, caches and receiving ends; revocation blocks later reuse but cannot recall disclosed information. Permitted redaction or release requires an authoritative rule or decision; the model cannot lower the restriction itself.
- When a view is insufficient, mark the gap or request authorized supplementation; use the V-22 external-reference evaluation for omissions that were not identified, and do not treat “compile by Schema” as a sufficiency proof. Retain model boundaries such as prior knowledge, inference and covert channels; do not claim to limit everything the model can know.
- Retaining unknowns, qualifications, conflicts and sources is a form of preserving task properties; to elevate it to formal soundness, define the state domain, transformations, abstraction relation and threat model separately. The view-governance mechanism can still be implemented and measured without that proof; mathematical terms do not confer a guarantee.


---

### PI-22 · Personal Attention and existing continuity primitives

- **Date / source class**: 2026-09-09; user-provided design discussion. Thirteen turns and one screenshot were read in full as design input; external project mechanisms and their actual CourtWork seams are recorded in the CourtWork research index rather than selected again in the paper.
- **Source**: [Explaining GoRaven](chatgpt-conversation://6aa122d3-ac50-83ec-bbb3-a7959c28d9d3). The user later clarified that Attention can have a lifecycle independent of one Matter and Session; “full memory” means addressable and disclosed as needed. The complete private original remains in the personal project; external technical sources and this round's consumption are listed in the [CourtWork fixed-source index](https://github.com/lesPrivilege/Courtwork/blob/b260feb213bf60c39165d2070fcfe7c4940bb590/engineering/research/attention-2026-09-09/source-index.md) and [local verification](https://github.com/lesPrivilege/Courtwork/blob/b260feb213bf60c39165d2070fcfe7c4940bb590/engineering/research/attention-2026-09-09/verification.md). The fixed commit exists locally; the remote links may be unavailable until it is pushed.
- **Observation and smallest supported proposition**: This is a design requirement for a person's persistent object of attention, not a runtime result. One can test whether an attention relation preserves identity, owner, outstanding obligations and lifecycle when associated with zero, one or multiple Matters, and whether the person's view and execution Session remain replaceable without becoming a second fact source.
- **Astra adjudication / main-text disposition**: Canonical or Practice is not revised in this round. The Canonical abstract already states `anything governed is addressable` and separates persistent state from Context; PI-21 contains the disclosure boundaries for existence, relations, caches and revocation; PI-20 / V-19 contains Runtime capability negotiation. Typed lookup and grep enter CourtWork's local selection as implementation choices, not as a new general law of retrieval. The product semantics of an independent Attention do not automatically require a new Kernel ontology; first compare whether existing object relations are sufficient, then decide whether a minimal main-text revision is needed. If a future main-text revision is needed, Astra will write it personally in the SE source directory.
- **Unsupported extrapolation**: This does not establish that Attention must be a new Kernel entity, that any Runtime is losslessly replaceable, that grep provides access control, or that a file-based manual loop has proved automatic ACLs, efficiency or professional quality; product claims in the message do not prove maturity. The original personal correspondence, CourtWork work orders and selection ledger are not copied into the paper.
- **Reproduction / falsification**: V-23 compares an independent Attention record with existing Topic / Queue / Matter relations and State / Event primitives, covering zero / one / multiple Matters, Session replacement, closing / reopening and outstanding obligations. If existing objects preserve equivalent boundaries, reject the added ontology. Reuse V-21 for existence and content disclosure and V-19 for Runtime missing capabilities and replacement; none of these comparisons was run in this round.
- **Status**: indexed; the design lead is recorded, the main text is unchanged, and there is no new Edition or release.

---

## IV. Verification queue

| ID | Proposition to verify | Smallest comparison | Main results | Current status |
|---|---|---|---|---|
| V-01 | Host adaptation can isolate Runtime from Work semantics | Fix a Work Contract and replace an equivalent host interface | Semantic consistency, adaptation cost, E2E | Not completed |
| V-02 | External Completion improves long-horizon tasks | With vs. without an independent completion inventory / gate | Completion, accepted outcome, negative results | Provider observation; independent replication pending |
| V-03 | Governed feedback compounds across Runs | Save a comment only vs. compile through scope / Authority / version | Acceptance rate, reversal, error amplification | Not completed |
| V-04 | The Govern layer adds value over files + search | Fix model, task and materials | State consistency, critical omission, token, Review | Not completed |
| V-05 | Sparse activation decouples total stock from per-Run Attention | Dense activation vs. preset / Expert / primitive | Context / Tool surface, omission, pollution, permission | Not completed |
| V-06 | Context Mutation can be managed and recovered | Each mutation type vs. an unmodified Context | Accepted outcome, source preservation, recovery | Directional research evidence; work-setting validation pending |
| V-07 | Multi-agent review does not mistake correlated errors for independent evidence | Inject shared premises, missing sources and Evaluator bias | False consensus, escalation, Authority routing | Not completed |
| V-08 | A document surface improves Review without polluting formal state | Document surface vs. unstructured output | Review time, correction rate, promotion errors | Community observation; ablation pending |
| V-09 | Current Semantic State can be the default execution substrate for long-horizon work | State-only vs. State + on-demand History vs. State + append-only Transcript | Accepted outcome, token, latency, recovery, omission, source disclosure | Local procedural benchmark evidence; professional-work replication pending |
| V-10 | A Human Review packet still supports independent judgment under limited attention | Raw trace / per-action approval vs. structured decision unit | Error detection, evidence-seeking, time, override, reversal, canary | Position paper supports problem definition; product experiment pending |
| V-11 | Artifact / Evidence dual state improves work continuity across rounds | Artifact only vs. Artifact + governed Evidence | Regression, repeated work, unsupported completion, recovery | Local software benchmark evidence; cross-domain validation pending |
| V-12 | A governed Evaluator lifecycle prevents rubric and attribution drift | Static rubric vs. versioned monitoring / review / rollback | Wrong-reason contamination, drift detection, rollback, outcome | Single production case; cross-domain and causal validation pending |
| V-13 | Repository-governed handoff supports autonomous continuation | Repository state vs. chat summary vs. no governance files | Duplication, source mismatch, revision scope, validation, Review | Single self-observation; independent comparison pending |
| V-14 | Recording signals by work obligations and state boundaries improves failure localization | Free summary vs. atomic notes vs. Contract evidence record; add an end-to-end comparison after fixing sources | Omission under an independent reference, attribution accuracy, relevance, support, Review cost, acceptance and reversal | Method defined; experiment not run |
| V-15 | Offline signal improvement predicts improvement in real work | Tuning set vs. source / Matter-isolated holdout set and later outcomes | Metric stability, ranking bias, risk stratification, outcome acceptance, cost, metric–outcome divergence | Method defined; experiment not run |
| V-16 | Replaceable Agent loops do not change Work semantics | Fix Contract / Matter and replace a semantically equivalent Runtime core | State transition, permission, recovery, accepted outcome, adapter cost | Interview self-report supports feasibility; independent replication pending |
| V-17 | Failure containment explains long-horizon reliability better than step count | Inject the same error by stage; with vs. without commit isolation / trusted checkpoint | Detection latency, propagation depth, state contamination, rollback loss, recovery | Practitioner observation and architectural inference; experiment not run |
| V-18 | Conditions under which governed-state collaboration is better than high-frequency Agent chatter | Bounded branches / artifacts vs. messaging topology | Conflict, duplicate work, Context cost, error propagation, accepted outcome | Practitioner observation; scope pending verification |
| V-19 | Runtime capability negotiation preserves the Work Contract | Native / verified substitute / missing capability; fix task, permissions and acceptance standard | Illegal commitment, information loss, recoverability, explicit refusal and total cost | Design inference; pending verification |
| V-20 | Switching operation channels does not cross the effect boundary | API / Browser / Computer Use; inject timeouts, late results and duplicate receipts | Duplicate side effects, authorization bypass, result checking and false success reports | Design inference; pending verification |
| V-21 | Authorized views constrain end-to-end disclosure | Source-side authorized view vs. post-retrieval filtering; inject cross-Matter relations, inference, caches and revocation | Boundary exposure, external transfer, stale permissions, necessary-evidence omission | Local primary sources checked; experiment not run |
| V-22 | Task abstraction preserves the necessary properties it declares | Full text vs. free summary vs. view generated for declared properties; fix authorization scope | Retention of unknowns / conflicts, overconfidence, acceptance rate and disclosure cost | Design candidate; no formal soundness claim |
| V-23 | Whether Personal Attention needs independent object semantics | Independent record vs. existing Topic / Queue / Matter relations and State / Event; zero / one / multiple Matters and Session replacement | Identity, owner, outstanding obligations, lifecycle, recovery and duplicate fact source | Design candidate; experiment not run |

### V-14 / V-15 · Offline evaluation snapshots and examination method

The following is an evaluation design to be executed, not a result of this round's experiment. It uses existing Contract, Evidence, Artifact and Review objects and adds no runtime ontology.

| Stage | Snapshot or record to preserve | Interpretation boundary and check |
|---|---|---|
| Define comparison | Task and obligation version, source snapshot, initial state, model, Harness, Context policy, budget, tool environment and evaluator version | Name model comparison and complete-system comparison separately; if the environment cannot be frozen, record the change and do not claim strict replayability |
| Construct signal | Measurement object, unit, denominator, deduplication and relevance rules, source coordinates, grader criteria | Report quantity, support, coverage and readability separately; duplicate or irrelevant facts do not acquire work value by accumulation; do not multiply local signals into an undefined total score |
| Holdout and calibration | Tuning samples, independent holdout Matters / sources, boundary samples, human disagreement and scorer output | A rewrite from the same source is not an independent holdout; blind model labels, swap output order and repeat scoring; results from a shared model family are not independent validation |
| Locate omissions | Object correspondence and version from source → extraction → persistent state → Projection → Artifact | Retention rate applies only to an explicitly stated and independently checked set that should be retained; unextracted content cannot disappear from the denominator; reasonable merging, discarding and unresolved conflict are allowed; mark it unmeasurable when no correspondence exists |
| Attribute and retest | Original configuration, candidate modification, paired task, repeated trial, failure sample, cost and latency | Check the representation with fixed sources first, then restore end-to-end retrieval; a shared change supports only a combined effect; distinguish improved signal from improved outcome; do not draw a stable ranking when sample size and uncertainty are insufficient |
| Acceptance and follow-up | Reviewer judgment not used in tuning, declared observation window, downstream adoption, rework, reversal and risk stratification | A problem affecting work that the current Contract does not cover must still be able to enter evaluation; preserve all attempts and exits instead of counting successes only; reopen the metric or criterion when offline and real outcomes diverge |

Evaluation snapshots can serve as Evidence for a version release, but the scorer has no deployment Authority. A holdout set used repeatedly for tuning should be downgraded to development or regression material; later candidates should use new holdout material. These checks are a research queue and must not be written as validated SE performance.

---

## V. Incremental revision record
### 2026-09-09 · Attention · Index-only

After rereading the existing main texts and PI-20/PI-21, Astra adjudicated: register only PI-22 and the object-lifecycle comparison V-23; reuse V-21/V-19 for disclosure and Runtime verification; do not revise Canonical, Practice, Edition, CHANGELOG or publication artifacts. Local checks of mature external practices and product consumption remain in CourtWork; this round's design discussion is not elevated into implementation evidence.

### 2026-09-07 · 9.6

| Review subject | Adjudication and synthesis | Main-text disposition |
|---|---|---|
| Stable Schema / state space | Retain objects, states, versions and transition semantics that can be compared across executions; do not use vectors, manifolds or ISA to replace working definitions | Canonical §2.3 first paragraph; Practice §2.5 |
| Role-based disclosure and working-set compilation | From authorized scope and current obligations to different receiving views, retain the sources, qualifications and gaps on which judgment depends | Rewrite Canonical §5.4 and Practice §4.3 |
| Conflating candidate visibility with formal effect | A Candidate can be saved, retrieved and made available for later Review; a formal update crosses a separate commitment boundary | Canonical §5.5 |
| Reading, operation and information propagation | Reading rights, tool rights and permission to pass information outward cannot substitute for one another | Canonical §6.1; Practice §4.3 |
| Protective conditions accumulating in Runtime / channel adaptation paragraphs | Recompose them by semantic responsibility, capability negotiation, execution complexity and operational channel | Compress Practice §3.1; detailed checks belong in PI-21 / V-19–V-22 |

This round was led by Astra, with Luna conducting a read-only exploration and an independent Astra instance without inherited chat history conducting an independent textual review. The initial and final review results are shown below. They are model review and primary-source checking, not a security proof, interoperability measurement or peer-review acceptance. No ontology, Contract type or principle number was added.

**Review and post-revision reread**: Luna (`gpt-5.6-luna`, max) read-only located existing load-bearing sections and repetition, recommending no new Kernel objects; the lead therefore chose rewriting rather than adding a terminology bundle. An independent Astra (`gpt-6-astra`, xhigh), without inherited chat, read all three drafts and rechecked the revision on disk; it found no load-bearing contradiction blocking acceptance of this round's revisions. The lead retains final adjudication and textual responsibility.

| Review finding | Final disposition and counterexample |
|---|---|
| A candidate that has not been submitted cannot enter the next Context | §5.5 allows a candidate with an explicit identity to be saved, retrieved and reviewed; candidate visibility does not equal formal effect |
| “An unsubmitted error remains a local failure” conflicted with shared candidates | Rewrite the whole passage so propagation preserves epistemic status, commitment limits formal effect, and contamination is repaired; a Committed working assumption remains an unverified fact |
| Generating the three views only from formal state excluded candidates and source material | Synchronize Practice §2.9, the diagram and explanation in §5.1, the Projection Consistency test, and Canonical open question 33; consistency compares the same version and effect, and does not require identical disclosure |
| Local commitment and external execution were written as one step | Delete the former procedural diagram from Practice §4.3; express the boundary through authorization and preconditions, result evidence and a pending-check state |
| Opaque host history was treated only as an audit limitation | Practice §3.1's compatibility binding covers information actually recalled by the host and the effects it can produce; it cannot constrain only newly supplied Context |
| §11.5 claimed a multiplication formula presupposed independence, monotonicity and common sign | Delete the incorrect mathematical claim; `X·X` alone refutes the independence inference, and a negative factor refutes the common-sign presupposition. A combined model still needs definition and ablation; the main text does not expand the algebraic explanation |
| F21 treated any change in acceptance rate as a compatibility failure | Tighten it to cases where the required capabilities are satisfied but work semantics are still broken or the declared acceptance condition cannot be maintained; quality improvement and random trajectory changes alone do not falsify compatibility |
| “Unreviewed output” could be read as making human Review universally mandatory | Standardize Practice §7.3 on “output that has not passed the applicable submission checks,” subject to the existing mixed-adjudication boundary |

**Local candidate checks**: the build and 10 publication checks passed, all 67 in-text links had targets, the current entry matched the dated HTML, and `git diff --check` passed. The browser check covered switching among the three views and entry layout, with a spot check of the rewritten Practice §4.3; this does not claim a screen-by-screen check of the full text. Canonical and Practice together were shortened by about 1,600 characters from the start of this round. Primary-source checking covered only the range listed in PI-21; V-19–V-22 experiments were not run, and Pages was neither pushed nor deployed.

The same day's 9.5 HTML was saved as `papers/dist/schema-engineering-2026-09-07-v9.5.html`; the current dated file was updated to 9.6 in this round. The earlier Index-only entries entered the HTML with this build. Nothing was pushed or deployed.

### 2026-09-07 · Index-only addendum

Register PI-21 and V-21 / V-22: retain the constrained state space, authorized views and CS mechanism mapping; reject elevating analogies to vector spaces, manifolds, isolation or sound abstraction into established propositions. Canonical / Practice and version metadata remain unchanged; under the index update rule, publication files were not rebuilt, so this entry was not yet included in the generated 9.5 HTML. Check the entry numbers, chat sources, section pointers and diff; experiments and external theoretical-source verification remained pending.

### 2026-09-07 · 9.5

| Observation / discussion | Adjudication | Canonical | Practice | Index |
|---|---|---|---|---|
| Replaceable Runtime, thin sovereign deployment, and terminal plus API / Computer Use adaptation for Review | Adopt capability and effect boundaries; do not elevate product facts and market inferences into evidence | Main text unchanged; synchronize Edition / Revision only | Rewrite §3.1; add two verification requirements to §7.3; §5.3 already sufficient | PI-20; V-19 / V-20, both pending measurement |

This round was architectural and textual review, not a Runtime interoperability experiment or an independent model review. Existing unsubmitted revisions and historical candidate artifacts were retained; local generation does not equal Pages publication.

**Local candidate checks**: the Edition / base of all three source files was synchronized to 2026-09-07; the build and 10 publication checks passed, the dated HTML matched the current entry, and `git diff --check` passed. No browser visual review was performed in this round; nothing was pushed or deployed.

### 2026-09-06 · 9.4

| Observation / discussion | Adjudication | Canonical | Practice | Index |
|---|---|---|---|---|
| Practitioner interviews including TiDB separated easily deprecated Agent loops from the control plane of state, permissions, side effects, verification and recovery | Treat this as engineering support for existing SE layering; do not elevate a specific Harness, database analogy or self-reported result into theoretical authority | Merge repeated Runtime explanations in §§2.1 and 8.1, tightening them to a declarative Contract and replaceable execution | Add the layer for readily deprecated loops and reuse mature components in §§2.2 and 3.1 | PI-19; V-16 |
| Long-horizon failures arise when a local error passes verification and becomes persistent shared state | Absorb this as a failure-containment explanation for proposal / commitment; add no state object | Add a minimal paragraph to §5.5; clarify Matter / Session / Run and executor replacement in §§3 and 4.5 | Add trusted recovery tests and failure modes to §§4.2, 7.3 and 8.2 | PI-19; V-17 |
| Agent communication topology adds coordination state; quiet collaboration can converge through bounded artifacts | Adopt only the default preference for state-mediated coordination, preserving task-specific communication and concurrency-conflict boundaries | Existing Operator / Lane / Candidate relations are sufficient; no revision | Add branch / artifact collaboration and comparison to §§2.7, 7.3 and 8.2 | PI-19; V-18 |
| Human review and a GUI should expose state, evidence, permissions, commitment and recovery, rather than Agent performance | Treat this as a product deduction from the existing Human Work Surface; UI form does not enter the Canonical ontology | No revision | Clarify transition surfaces and the Agent-theater failure in §§5.3 and 8.2 | PI-19 records the source boundary; specific components are not evidence propositions |

This round added no Canonical ontology, Contract type or principle number. Net additions to the main text were controlled by merging the repeated Runtime / composability explanation from Canonical §8.1; external projects, interviewee judgments and easily deprecated implementation details remain only in the Index.

**Local candidate checks**: the Edition / base of all three source files was synchronized to 2026-09-06; the build and 10 existing publication checks passed, the current entry matched the dated HTML, and `git diff --check` passed; a desktop browser checked rendering of the current Canonical entry. Nothing was pushed or deployed, and the Pages workflow has not run.

### 2026-09-05 · 9.3

| Observation / discussion | Adjudication | Canonical | Practice | Index |
|---|---|---|---|---|
| Manus's practice report used local signals to trace note behavior; the official Agent eval method distinguished execution infrastructure from evaluation infrastructure | Extract the evaluation—attribution—revision loop outside the Runtime; do not elevate a self-reported case into causality | Clarify the boundary between compliance criteria and sufficient criteria in §11.2, including attribution coordinates | Write the idea into §6.5 and move the former training candidate to §6.6 | PI-16/17; V-14/15; detailed checks remain only in the Index |
| An independent Fresh Astra reread found that commitment semantics had been written as the sole implementation of event sourcing | Retain Candidate / Committed and one authoritative state; limit event replay to a reference implementation | Clarify semantic requirements and persistence choices in §§2, 4 and 5 | Clarify the way an existing SoR carries the semantics in §4.1 | Counterexample recorded: a transaction state table, versioned results and auditable commitment records can implement the same boundary |
| An independent review found that the example promoted a parseable citation directly to supported | Evidence location and semantic support are separate conditions | Clarify the responsibility for semantic checks in §§6.2 and 8.8 | Retain the existing Evidence / Review boundary | Counterexample: a citation exists but only qualifies or refutes the target claim |
| The default order of training checks was written as a universally necessary precedence relation | Do not replace criteria and acceptance with training; allow training to form an initial capability or lower cost | Unify the scope of §9, §11.4, P15 and the corresponding checks | Retain the product's independent value without relying on a training flywheel in §6.6 | Counterexample: the base model fails the task gate, training comes first for the initial E2E; quality is equal but training greatly lowers cost |
| An independent review requested the relationship to existing work modeling, sources and event-sourcing methods | Limit the contribution to composition and boundaries in the Agent work lifecycle | Add minimal positioning to §2 | No expansion | PI-18 registers primary sources, inheritance and non-equivalence |

This version targets a concept / position paper open to public discussion; text revision and a local build do not mean empirical completion or online publication. The independent review did not inherit chat history, remains model review, and does not replace author or professional-community acceptance.

**Review and post-revision reread**: On 2026-09-05, an independent `gpt-6-astra` instance without the parent task's chat history used `xhigh` reasoning to read all three texts, then checked the revision diff and affected sections. The first round proposed five necessary boundary repairs, all handled in the table above; rereading found no load-bearing contradiction blocking publication of the public concept / position paper. Its judgment did not cover independent verification of all external sources and does not equal acceptance of an empirical paper or formal peer review. Narrowing the text, system implementation, cross-domain results and training gains remain future work; this round does not expand the main text.

**Local candidate checks**: the Edition / base of all three source files was synchronized to 2026-09-05; the build and 10 existing publication checks passed, the current entry matched the dated HTML, 57 in-text links had targets, and `git diff --check` passed. Browser security policy rejected local-file preview, so visual review was not completed; structural checks do not substitute for visual review. Nothing was pushed or deployed, and the Pages workflow has not run.

### 2026-09-04 · 9.2

| Observation / discussion | Adjudication | Canonical | Practice | Index |
|---|---|---|---|---|
| Codex implementation discussion showed a candidate direction of fresh Context + on-demand history | Public materials were insufficient to confirm a specific interface; the existing Context / State boundary was sufficient | No revision | No revision | PI-11 retained as a product-trend observation with strict unsupported items |
| People in the loop can still lose effective oversight through attention overload | The Review Contract must include cognitive sufficiency, not only approval topology | Minimal increment to §6.6; no new Contract / principle | Add three projections, a Review packet and tests to §§5 and 7 | PI-12 retains the position paper, boundaries and metrics to verify |
| The same governed state serves the model, the person and a future Run | Context Projection, Human Work Surface and Retrieval Index are different Projections; Current Semantic State remains the single source of truth | Clarify the three Projection classes and split-brain boundary in §5.4 | Add implementation and tests to §§2.5, 4.3, 5.1 and 7.3 | Composite adjudication of PI-10–PI-12; do not invent an independent external source |
| Multi-day autonomous software development simultaneously preserves Artifact and Evidence, while isolating role permissions and Acceptance | Software crossing a task boundary presents a work-shaped Runtime; the verifiability limits of a software substrate constrain extrapolation | Add a local boundary to §8.5 | Add dual continuity to §4.3 | PI-13 retains the concrete implementation, experimental scope and limitations |
| A production Evaluator's criterion, reason and rubric change and produce downstream consequences | An Evaluator is a governed artifact; a correct label cannot mask incorrect attribution | Add lifecycle and commitment boundary to §11.2 | Add tests to §7.3 | PI-14 retains the production case and external-validity limits |
| This round continued through repository state, a revision protocol and progressive disclosure | This is only a single methodological self-observation, not causal evidence | No revision | No revision | PI-15 / V-13 register the comparison design |
| The order in which material entered the main-text revision remained recognizable from new paragraphs and version summaries | Accepted propositions must be rewritten into the smallest complete section; itemized records and checks remain only in the Index | Rewrite §§5.4, 6.6, 8.5 and 11.2, deleting patch-style explanations | Rewrite §§2.5 and 5.3, deleting version summaries | Revision-synthesis discipline added to CONTRIBUTING and papers/README |
| The same SE object had accidental aliases and mechanical translations; conversely, fixing one word form can mistake natural polysemy for a governance problem | Use natural wording by context while retaining whole-document style; govern a shared referent and conceptual boundary, not the word itself; align SE abstractions with shared practice first and keep self-authored concepts minimal | Unify definitions, state transitions and Projection names without requiring one word per meaning; do not change ontology or principles | Unify implementation and test wording for the same object while keeping natural wording required by context | Writing conventions joined existing governance documents; this row preserves the adjudication and repo-wide check scope |

This round added no Canonical ontology, Contract type or principle number.

### 2026-09-01 · 9.1

| Observation / discussion | Adjudication | Canonical | Practice | Index |
|---|---|---|---|---|
| Active Context editing can be expressed as an action and given local credit | This is Projection operation discipline, not a new Memory ontology | Add a minimal boundary to §5.4; no new principle | Add Context Mutation implementation and Preservation tests | PI-07 retains paper, code and extrapolation boundaries |
| Multiple Agents can share a Harness or isolate Context | This describes execution topology and does not define an Expert or Authority | §§4.3–4.4 already sufficient; no revision | Clarify topology / Expert in §2.7; add correlated-failure tests | PI-08 retains the personal-practice scope and limitations |
| Document-driven work can serve execution, review, recovery and delivery at once | Absorb “a document is a shared work surface,” retaining the separation of Trace / Index / State / Artifact | Existing object boundaries suffice; add no term | Add Documentation Promotion tests to §§2.8 and 5.4 | PI-09 retains community source and self-report limitations |
| The old Practice organized extensive argument around hosts, products and individual cases | Rewrite the main text as a generalized, minimal and coherent practice snapshot; move instances and sources into the Index | Remove the current evidence graph while retaining stable evidence discipline | Rewrite the whole document, retaining architecture, objects, tests and failure boundaries | PI-01–PI-09 inherit sources, checks and dispositions |
| Structured State was more accurate and used fewer tokens than an accumulating Transcript on long-horizon procedural tasks | Absorb state-first execution with a sufficient-state premise; History remains Evidence / Ledger, and discarding it from a prompt does not mean deleting it from storage | Add one normative convergence sentence to §5; no new ontology or principle | Add operational distinctions and tests to §§2.5, 4.3 and 7.3 | PI-10 retains the paper, numbers, limitations and replication boundary |

This round added no Canonical ontology, Contract type or principle number.

---

## VI. Source register

[^dsh-home]: DeepSeek, “DeepSeek Harness developer preview: Everything is a plugin,” https://deepseek.com/harness/en/ (snapshot date: 2026-08-28). Used only for the observable plugin capability surface.

[^dsh-readme]: DeepSeek AI, “deepseek-ai/deepseek-harness,” https://github.com/deepseek-ai/deepseek-harness (developer preview). The official repository states that it contains compatibility-breaking changes; therefore it supports only versioned host-adaptation experiments.

[^dsh-architecture]: DeepSeek Harness Documentation, “DeepSeek Harness Architecture,” https://deepseek-harness.github.io/deepseek-harness/en/reference/ . Used for the public definitions of session events, agent events, capability events, turn flow and session logs.

[^dsh-question]: DeepSeek Harness Documentation, “User Interaction,” https://deepseek-harness.github.io/deepseek-harness/en/reference/subsystems/user-questions . Used for provider-neutral question vocabulary and presentation intent.

[^dsh-ui]: DeepSeek Harness Documentation, “Cookbook: extension plugin shapes,” https://deepseek-harness.github.io/deepseek-harness/en/reference/cookbook/extension-cookbook . Used for the UI extension surface.

[^cordis]: Cordiverse, “A Programming Paradigm for Spatiotemporal Composability,” https://github.com/cordiverse/paper . Used as a formal reference for reversible effects, reactive coeffects, effect tracking, resolution, reconciliation and hot replacement; it does not prove Work semantics.

[^factory-completion]: Factory Research, Theo Luan, “What it Takes for Coding Agents to Complete Large Software Tasks,” https://factory.ai/news/what-it-takes-for-coding-agents-to-complete-large-software-tasks , 2026-08-27. From selected ProgramBench tasks and the provider's self-built system / benchmark; used only for a local mechanism in Completion governance.

[^warp-improver]: Michael Segner, Anthropic / Claude, “How Warp builds self-improving agents on Claude,” https://claude.com/blog/how-warp-builds-self-improving-agents-on-claude , 2026-08-26. Used only for feedback capture, proposed diffs, Human review and versioned reuse; Skill is not equated with Work Contract.

[^frontier-project-memory]: Anthropic Help Center, “Use Claude's chat search and memory to build on previous context,” https://support.anthropic.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context ; “How can I create and manage projects?,” https://support.anthropic.com/en/articles/9519177-how-can-i-create-and-manage-projects ; OpenAI Help Center, “Projects in ChatGPT,” https://help.openai.com/en/articles/10169521-projects-in-chatgpt . Snapshot date: 2026-08-29. Used only for project-bounded recall and archive retrieval.

[^openai-managed-resources]: OpenAI, “Memory FAQ,” https://help.openai.com/en/articles/8590148-memory-faq ; “ChatGPT Release Notes,” https://help.openai.com/en/articles/6825453-chatgpt-release-notes ; “Dreaming: Better memory for a more helpful ChatGPT,” https://openai.com/index/chatgpt-memory-dreaming/ . Snapshot date: 2026-08-29. Used only for the managed-resource and scoped-context product surface; it does not imply a backend ontology.

[^andrew-ng-se-fundamentals]: Andrew Ng / DeepLearning.AI, “The AI Engineering Skills Map In Detail — Software Engineering Fundamentals,” https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map-in-detail-software-engineering-fundamentals , 2026-08-28. Used only for the structural assumption of migrating from execution to judgment; not an endorsement of Schema Engineering.

[^contextpilot-paper]: Zhuoshi Pan et al., “ContextPilot: Teaching Agents for Proactive Context Management via Fine-grained RL,” https://arxiv.org/abs/2608.28476 , 2026. Used only for context-editing action, snapshots and local credit; not evidence of Matter governance or cross-domain professional capability.

[^contextpilot-code]: Tencent, “ContextPilot,” https://github.com/Tencent/ContextPilot . Public inference, evaluation and training implementations as of 2026-09-01; the public release is too recent for an independent replication or external-validity claim.

[^fryxell-harness]: Scott Fryxell, “The Harness Is the Thing,” 2026, https://scott-fryxell.github.io/blog/the-harness-is-the-thing/ . Personal-practice observation; used only for shared Harness and execution-location isolation, without inferring general benefit.

[^ondrej-setup]: David Ondrej, “Agentic Engineering Setup (after 2,000+ hours),” 2026 Q3, user-saved public-post snapshot; author home page https://x.com/DavidOndrej1 . Personal experience and trend judgment, without a uniform benchmark or independent replication.

[^document-driven-practice]: Vonng, “How do you accept the AI-pulled garbage pile?,” 2026, user-saved public-article snapshot; publication notice https://x.com/RonVonng/status/2094288759743545769 . Only the observation that documents act as a shared work surface is absorbed; cost ratios and effect judgments are the author's self-report.

[^skill-state]: Sanket Badhe, Priyanka Tiwari, and Jonghyun Chung, “SKILL.state: Scalable Long-Horizon Agent Skills,” https://arxiv.org/abs/2608.26263 , 2026. v1 was submitted on 2026-08-26 and v2 revised on 2026-08-28; the arXiv page marks it accepted at EMNLP. The authors are affiliated with Google LLC and Purdue University. This Index uses it only as local evidence for explicit execution state, validated patches, bounded prompt footprint, noise robustness and sufficient-statistic limitations; it is not evidence for Schema Engineering as a whole.

[^openai-runtime-context]: OpenAI, “Model guidance,” https://developers.openai.com/api/docs/guides/latest-model . Accessed 2026-09-04. Official material used to confirm persisted reasoning, conversation / state compaction, tool orchestration and autonomy guidance in the Responses Runtime; no public `new_context` or history / notes interface shown in the screenshot was found, so this does not confirm the Codex product implementation.

[^agents-out-of-loop]: Margaret Mitchell, Avijit Ghosh and Samir Passi, “AI Agents Push Humans Out of the Loop,” https://arxiv.org/abs/2608.23642 , 2026. Position paper; used for cognitive requirements for human oversight, approval fatigue, strategic friction, batch review and monitoring constraints, not as empirical evidence for a particular Review UI.

[^hoh]: Haoyang Yan et al., “Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement,” https://arxiv.org/abs/2609.01481 , 2026. Used for software-domain observations about Artifact / Evidence dual state, bounded increments, role-specific Authority, progressive disclosure, frozen candidates and independent QA; do not generalize its multi-Agent topology or benchmark numbers to professional work in general.

[^judge-lifecycle]: Emma Yanyang Kong et al., “The Lifecycle of LLM-as-a-Judge for Large-Scale Recommendation Explanations,” https://arxiv.org/abs/2608.18300 , 2026. Used for the production lifecycle of criteria, guidelines and rubrics, reason-aligned evaluation, bounded revision, drift monitoring, Human review gates and rollback; a single recommendation surface is not evidence for Work Eval in general.

[^manus-research-bench]: 葬愛咸鱼, with supplemental organization by Hoodie, “A Few Small Experiences from the Manus Team's Model Testing,” 2026-09-04, https://funeralai.substack.com/p/manus . Accessed 2026-09-05. The WeChat entry supplied by the user was https://mp.weixin.qq.com/s/2CXssAsQMxdPn_5aLcaijw?scene=1 and could not be read in this round; the author's Substack was checked in full, without claiming line-by-line agreement between the two versions. Evidence class: practitioner account, not a complete Manus evaluation architecture specification or an independent experiment.

[^agent-evals]: Anthropic, “Demystifying evals for AI agents,” 2026-01-09, https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents . Accessed 2026-09-05. Official engineering-practice summary used for offline evaluation infrastructure, repeated trials, multiple grader classes, separation of trajectory and outcome, and regression discipline; not evidence of Schema Engineering validity.

[^event-sourcing]: Martin Fowler, “Event Sourcing,” 2005-12-12, https://martinfowler.com/eaaDev/EventSourcing.html . Accessed 2026-09-05. The author's architectural-pattern description; used to position event sequences, state reconstruction and system-of-record choices, not to prove SE's compositional benefit.

[^prov-dm]: W3C, “PROV-DM: The PROV Data Model,” Recommendation, 2013-04-30, https://www.w3.org/TR/prov-dm/ . Accessed 2026-09-05. Used for the existing foundation of provenance objects and relations; a provenance relation itself does not judge a professional claim true.

[^cmmn]: OMG, “Case Management Model and Notation,” Version 1.1, December 2016, https://www.omg.org/spec/CMMN/1.1/About-CMMN ; normative text https://www.omg.org/spec/CMMN/1.1/PDF , §§4–5. Accessed 2026-09-05. Used to position case-work modeling; SE is not equated with CMMN, and this does not claim to exhaust case-management work.

[^infoq-thin-loop]: Tina, InfoQ, “Everyone Can Make Their Own ‘DeepSeek Harness’—So Why Are We Still Paying Claude Code Subscriptions?,” 2026-09-04, https://www.infoq.cn/article/6Jc130IN2OaXqsPDIzmJ . Accessed 2026-09-06. Interview report used for practitioner observations about thin loops / control planes, Runtime replacement, declarative orchestration, state-mediated coordination and failure containment; system scale, development cycle, no-human-coding / PR review and industry consensus are treated as the report or interviewee's claims, not as an independent experiment.

[^pg-authorized-views]: PostgreSQL Global Development Group, PostgreSQL 18 Documentation, “Row Security Policies,” https://www.postgresql.org/docs/18/ddl-rowsecurity.html ; “CREATE VIEW,” https://www.postgresql.org/docs/18/sql-createview.html . Accessed 2026-09-07; the current page was version 18 at access time, and the fixed major-version entry is registered. Used to distinguish access and modification policies, execution identity and view-security configuration; it is not SE security validation.

[^llvm-ir]: LLVM Project, “LLVM Language Reference Manual,” Introduction / Well-Formedness, https://llvm.org/docs/LangRef.html . Accessed 2026-09-07. Used only to position existing mechanisms for intermediate representation and structural constraints; it does not prove Work Contract semantic preservation.

[^abstract-interpretation]: Patrick Cousot and Radhia Cousot, “Abstract interpretation: a unified lattice model for static analysis of programs by construction or approximation of fixpoints,” POPL 1977, pp. 238–252, author-kept abstract and bibliography https://www.di.ens.fr/~cousot/COUSOTpapers/POPL77.shtml . Accessed 2026-09-07. This round checked the abstract only and does not claim to have reviewed the paper's proofs item by item.

[^information-flow]: Andrei Sabelfeld and Andrew C. Myers, “Language-Based Information-Flow Security,” IEEE Journal on Selected Areas in Communications, 21(1), 2003, §§I, V.D, author-kept original https://www.cs.cornell.edu/andru/papers/jsac/sm-jsac03.pdf . Accessed 2026-09-07. Used to distinguish access control from propagation constraints and explicit information release policies; traditional program-analysis guarantees are not directly generalized to LLMs.
