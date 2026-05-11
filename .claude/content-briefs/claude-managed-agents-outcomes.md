# Content Brief: Claude Managed Agents Outcomes

## Research Summary (2026-05-12)

### Topic Validation

**Search Demand:** HIGH and rising (feature launched 6 days ago, May 6, 2026)
- "Claude Managed Agents Outcomes"
- "Claude Outcomes rubric"
- "how to auto-grade AI agent output"
- "Claude grader feedback"
- "Claude max_iterations rubric"
- "Claude Outcomes vs Codex /goal"
- "rubric LLM-as-judge agent"

Demand context:
- Reddit thread "An AI Agent Deleted Our Production Database" (851 upvotes, late April 2026) reignited the "how do we trust agent output" discussion, primed the audience to look for verification primitives like Outcomes.
- HN front-page coverage of Anthropic the same week as the Outcomes launch (item 48037986, May 6 2026).
- DEV Community roundup highlighting active multi-agent reliability threads.

**Competition Level:** LOW for practitioner depth, MEDIUM for news coverage
- **Official sources (high authority, low practitioner depth):**
  - https://platform.claude.com/docs/en/managed-agents/define-outcomes (reference)
  - https://platform.claude.com/cookbook/managed-agents-cma-verify-with-outcome-grader (single recipe)
  - https://claude.com/blog/new-in-claude-managed-agents (launch post)
- **News coverage (broad, no how-to):** 9to5Mac, SDTimes, VentureBeat, Long Island NY, Booboone.
- **Closest practitioner pieces:**
  - MindStudio: "Claude Outcomes Feature Improved PowerPoint Quality 10.1%" - explains rubric grading conceptually, no end-to-end code.
  - Developers Digest: "Codex /goal vs Claude Managed Outcomes" - comparison, not a tutorial.
  - cozypet.github.io 30-min Managed Agents tutorial - touches Outcomes in passing.
  - buildfastwithai - focused on the "dreaming" sibling feature, not Outcomes.
- **Gap to own:** No focused practitioner guide covers all four of (1) rubric authoring patterns that don't get rubber-stamped, (2) reading the five `outcome_evaluation_end.result` states, (3) tuning `max_iterations` vs fixing the rubric, (4) cost math for outcome-iterated sessions.

**AI Citation Potential:** VERY HIGH
- "How does Claude Outcomes work?" / "How do I write a rubric for a Claude agent?" / "What are Claude Managed Agents result states?" are textbook AI-extractable questions.
- Anthropic's official docs are dense reference; AI overviews need a practitioner-summary tier. We can be that tier with concrete code + tables.
- First-mover advantage: brief was scoped before Google's AI overview consensus solidifies.

**Freshness Opportunity:** VERY HIGH
- Feature is 6 days old (launched 2026-05-06). Public-beta API surface (`user.define_outcome`, `max_iterations` default 3 / max 20, `span.outcome_evaluation_*` events) is not yet indexed in any third-party guide.
- The new `outcome_evaluation` event names and the five-state result table are extractable schema-style content AI crawlers love.

### Honest Assessment

This is a strong, time-sensitive topic. The previous post (`/blog/claude-managed-agents`) answered "which platform do I pick" (Managed Agents vs Agent SDK). Developers who picked Managed Agents now hit the next wall: "my agent finished but the output is garbage." Outcomes is the built-in answer, but the docs are reference-style. A practitioner guide with code, the five result states, rubric anti-patterns, and a cost model fills the obvious gap.

**Recommended angle:** "Claude Managed Agents Outcomes: How to Auto-Grade Your AI Agent's Work"

Tutorial-first, but goes deeper than the cookbook on three things existing content skips:
1. Rubric anti-patterns (vague criteria, unverifiable factual claims, missing feedback-format guidance) - drawn from the cookbook's between-the-lines warnings.
2. The full result-state table with what to do when each fires.
3. Cost math: how outcome iterations multiply the `$0.08/session-hour` line item.

---

## Keyword Strategy

### Primary Keyword
`claude managed agents outcomes`

### Secondary Keywords
- `claude outcomes rubric`
- `claude agent grader`
- `claude managed agents max_iterations`
- `auto grade ai agent output`
- `claude user define_outcome`
- `rubric llm as judge`

### Long-Tail Queries
1. "how to write a rubric for claude managed agents"
2. "claude managed agents outcomes example code"
3. "claude outcome_evaluation_end result states"
4. "claude managed agents max iterations default"
5. "what does claude grader do"
6. "claude outcomes vs codex /goal"
7. "claude managed agents outcomes pricing"
8. "claude rubric needs_revision feedback"

### FAQ Candidates (mirror real search queries)
1. What are Claude Managed Agents Outcomes?
2. How does the Claude outcome grader work?
3. How do I write a good rubric for Claude Outcomes?
4. What is the default value of max_iterations in Claude Outcomes?
5. What are the result states of a Claude outcome evaluation?
6. How much do Claude Outcomes cost on top of session-hours?
7. Can I use Claude Outcomes with the Agent SDK or only Managed Agents?
8. What's the difference between Claude Outcomes and Codex /goal?
9. When should I increase max_iterations vs rewrite the rubric?
10. Can the Claude grader verify factual accuracy?

---

## Article Metadata

- **Suggested title:** "Claude Managed Agents Outcomes: Auto-Grading Agent Work" (56 chars)
- **Alt title:** "Claude Outcomes Tutorial: Rubrics, Graders, and Iteration" (57 chars)
- **Suggested slug:** `claude-managed-agents-outcomes`
- **Meta description:** "Claude Managed Agents Outcomes auto-grades agent output against a rubric and re-runs until it passes. Rubric format, max_iterations, grader events explained." (157 chars)
- **Target word count:** 2800-3200
- **Estimated read time:** 12 min
- **Category:** AI Development
- **Suggested Lucide icon:** `ClipboardCheck` (or `Gauge` / `ScrollText`)
- **Banned-word check:** title and meta avoid em dashes, "delve", "harness" as verb, etc.

---

## Content Outline

### H1: Claude Managed Agents Outcomes: How to Auto-Grade Your AI Agent's Work

**Opening (40-60 words, direct answer):**
Claude Managed Agents Outcomes is a public-beta feature, launched May 6, 2026, that lets you hand the agent a rubric and a separate grader model checks each draft against it. If the grader says `needs_revision`, the gaps go back to the writer for another pass, up to `max_iterations`.

### TL;DR
- Outcomes = rubric-graded iteration loop built into the Managed Agents harness.
- A separate grader (same model, fresh context) evaluates every draft against your markdown rubric.
- `max_iterations` defaults to 3, max 20; outcome returns one of five result states.
- Anthropic's internal benchmarks: +10 points overall task success, +10.1% on .pptx generation.
- Beta header: `managed-agents-2026-04-01` (the SDK sets this automatically).

### H2: What Are Claude Managed Agents Outcomes?
- Direct one-paragraph definition. Launched 2026-05-06 alongside dreaming and multiagent orchestration.
- Position vs the prior model: agent runs until it self-assesses as done, or you read transcripts. Outcomes replaces that with a separate grader process and a rubric.
- Quote Anthropic: "Agents do their best work when they know what 'good' looks like."
- Link: https://claude.com/blog/new-in-claude-managed-agents
- Link to your prior post `/blog/claude-managed-agents` for readers who haven't picked Managed Agents yet.

### H2: How the Outcome Grader Works (Inside Anthropic's Loop)
- Flow: writer drafts -> `span.outcome_evaluation_start` -> grader inspects artifact in fresh context window -> `span.outcome_evaluation_end` with verdict -> feedback handed back to writer if `needs_revision`.
- Grader uses same model + tools as the writer agent (per cookbook).
- Independence: fresh context window so the grader can't be talked into approving unmet criteria.
- Three benchmark numbers: +10pp overall, +10.1% on .pptx, +8.4% on .docx (Anthropic internal benchmarks).
- Named launch users: Harvey (legal docs), Spiral by Every (editorial quality), Wisedocs (document QA).
- Link: https://platform.claude.com/docs/en/managed-agents/define-outcomes

### H2: How to Write a Rubric That Won't Rubber-Stamp Everything
- The rubric is the only lever you have on the grader. Default failure mode: a grader that approves everything.
- Concrete checkable criteria, not vibes ("CSV has a numeric price column" beats "data looks good").
- Stick to verifiable structure and completeness; the grader cannot independently confirm factual accuracy.
- Anticipate shortcuts: "Do NOT corroborate via mirrors, reposts, or search snippets."
- Specify feedback format: "one-line scoreboard, then one bullet per failure with what's wrong and what to do."
- Tell the grader what to ignore (out-of-scope items prevent thrashing on style nits).
- Bootstrap trick from Anthropic docs: give Claude a known-good artifact and ask it to write the rubric.
- Sample rubric (DCF model from Anthropic docs) in a `markdown` code block.

### H2: Define an Outcome: Python Code Walkthrough
- Beta header: `managed-agents-2026-04-01` (cookbook sets it automatically via `betas=BETAS`).
- Create environment + writer agent (cookbook example, web_search/web_fetch/read/write toolset).
- Create session.
- Send the `user.define_outcome` event with `description`, `rubric` (text or file), `max_iterations`.
- Include side-by-side `rubric: {type: "text", content: RUBRIC}` and `rubric: {type: "file", file_id: ...}` (the file form needs the `files-api-2025-04-14` beta).
- Note: agent starts work on receipt; no extra user message needed.
- Link: https://platform.claude.com/cookbook/managed-agents-cma-verify-with-outcome-grader

### H2: Reading Grader Feedback: The Five Result States
- Table covering `satisfied`, `needs_revision`, `max_iterations_reached`, `failed`, `interrupted`, with the next-state behavior for each. Pull straight from the docs table - this is high-AEO content because it's a definitive enumeration.
- Stream-handling code (cookbook example) showing `span.outcome_evaluation_start` and `span.outcome_evaluation_end` with `ev.result` and `ev.explanation`.
- Heartbeat events (`span.outcome_evaluation_ongoing`) - opaque grader reasoning.
- How to retrieve deliverables from `/mnt/session/outputs/` via the Files API scoped to `session_id`.

### H2: Tuning max_iterations (and When to Fix the Rubric Instead)
- Default 3, max 20.
- Decision rule: if the loop hits the cap with the *same* failures every iteration, the rubric is wrong; if hits the cap with *different* failures converging, raise the cap.
- Cookbook recommendation: start with `max_iterations: 5` for strict rubrics.
- Cost trade-off: each iteration costs a writer turn + a grader turn (tokens) on top of `$0.08/session-hour`.
- Anti-pattern: max_iterations=20 with vague rubric -> expensive thrash.

### H2: What Outcomes Cost (And Why the Math Surprises People)
- Outcomes is included in the Managed Agents pricing (no separate per-outcome fee).
- Real cost driver: extra writer-grader iteration cycles each consume tokens AND keep the session-hour clock running.
- Worked example: 2-iteration outcome on a 20-min session = ~$0.027 session-hour + writer/grader tokens for 2 rounds.
- Compare to manual human review: 10x cheaper per check; the cost framing is iteration-count, not per-outcome.
- Link to your `/blog/claude-code-cost-tracking` post for general cost-tracking workflow.

### H2: Claude Outcomes vs LLM-as-Judge vs Codex /goal
- LLM-as-judge in 2026 is a category (Galileo, DeepEval, Langfuse, G-Eval). Outcomes is the same idea, but baked into the agent harness so feedback flows back automatically.
- Codex `/goal`: similar concept on the OpenAI side. Reference the Developers Digest comparison.
- Why bundling matters: rolling your own judge means wiring score -> retry. Outcomes does that wiring and surfaces it as events.
- Link: https://www.developersdigest.tech/blog/codex-goal-vs-claude-managed-outcomes-practical-differences

### H2: Anti-Patterns: When Outcomes Make Things Worse
- Rubrics that grade factual accuracy with no verification path (grader has nothing to check against).
- Rubrics that prescribe steps instead of describing the goal (over-constrains, grader marks every novel approach as failed).
- Description and rubric contradicting each other -> `result: failed`.
- One rubric criterion that's actually 4 packed together -> noisy per-criterion verdicts.
- Raising `max_iterations` to mask a bad rubric.

### H2: FAQ Section (8-10 questions from FAQ candidates above)

### CTA / Related Reading
- `/blog/claude-managed-agents` - which platform first
- `/blog/claude-code-cost-tracking` - cost tracking
- `/blog/hardening-ai-agents-cicd-prompt-injection` - agent reliability adjacent
- `/blog/ultrareview-ci-cd-pipelines` - reviewing agent output in CI

---

## Unique Angle

**What makes THIS article different:**
- The only practitioner guide that pulls together the API surface, the result-state table, the rubric anti-patterns, and the cost math in one place.
- Published 6 days after launch, before any other deep practitioner content exists.
- Honest take on when Outcomes fails (factual-accuracy rubrics, max_iterations masking).
- Builds on your existing Managed Agents post; together they form a mini cluster (decision -> implementation).

**Original perspective Avinash brings:**
- DevOps cost-awareness: iteration math, not just "rubrics good".
- CI/CD reliability framing (parallel to `/blog/hardening-ai-agents-cicd-prompt-injection`).
- Practical decision rule for `max_iterations` tuning based on whether failures repeat or converge.

---

## Internal Linking Opportunities

### Link TO from this article:
- `/blog/claude-managed-agents` (prerequisite: which platform)
- `/blog/claude-code-cost-tracking` (cost lens)
- `/blog/hardening-ai-agents-cicd-prompt-injection` (agent reliability)
- `/blog/ultrareview-ci-cd-pipelines` (agent-output review parallel)
- `/projects/jenkins-mcp` and `/projects/method-crm-mcp` (MCP integration context, when relevant to tool config)

### Future articles this connects to:
- "Claude Managed Agents Dreaming: How Agents Learn Between Sessions"
- "Multiagent Orchestration in Claude Managed Agents: Patterns"
- "Building a Production Rubric Library for Claude Outcomes"

---

## Key Sources to Reference (with URLs)

Primary:
- [Claude API Docs: Define outcomes](https://platform.claude.com/docs/en/managed-agents/define-outcomes)
- [Claude Cookbook: Outcomes - verify with grader](https://platform.claude.com/cookbook/managed-agents-cma-verify-with-outcome-grader)
- [Claude Blog: New in Claude Managed Agents (May 6 2026)](https://claude.com/blog/new-in-claude-managed-agents)

Secondary / context:
- [SDTimes: Outcomes coverage](https://sdtimes.com/ai/new-in-claude-managed-agents-dreaming-outcomes-and-multiagent-orchestration/)
- [VentureBeat: Dreaming feature context](https://venturebeat.com/technology/anthropic-introduces-dreaming-a-system-that-lets-ai-agents-learn-from-their-own-mistakes)
- [9to5Mac: Three new features](https://9to5mac.com/2026/05/07/anthropic-updates-claude-managed-agents-with-three-new-features/)
- [MindStudio: Outcomes lifted .pptx 10.1%](https://www.mindstudio.ai/blog/claude-outcomes-feature-rubric-grading-agent-powerpoint-quality)
- [Developers Digest: Codex /goal vs Outcomes](https://www.developersdigest.tech/blog/codex-goal-vs-claude-managed-outcomes-practical-differences)

LLM-as-judge / category context:
- [Galileo: Agent Evaluation Framework 2026](https://galileo.ai/blog/agent-evaluation-framework-metrics-rubrics-benchmarks)
- [Langfuse: LLM-as-a-Judge](https://langfuse.com/docs/evaluation/evaluation-methods/llm-as-a-judge)

---

## Key Facts Cheat-Sheet (for writer)

- **Launch:** 2026-05-06, public beta.
- **Beta header:** `managed-agents-2026-04-01` (SDK auto-sets).
- **Event to start:** `user.define_outcome` with fields `description` (string), `rubric` (`{type: "text", content}` or `{type: "file", file_id}`), `max_iterations` (optional int, default 3, max 20).
- **Stream events:** `span.outcome_evaluation_start`, `span.outcome_evaluation_ongoing`, `span.outcome_evaluation_end`.
- **Result states:** `satisfied`, `needs_revision`, `max_iterations_reached`, `failed`, `interrupted`.
- **Output location:** `/mnt/session/outputs/` inside the container; fetch via Files API with `scope_id=session_id`.
- **Grader:** same model and tools as the writer agent, fresh context window.
- **Benchmarks:** +10 points overall, +10.1% .pptx, +8.4% .docx (Anthropic internal).
- **Named partners:** Harvey, Spiral by Every, Wisedocs.
- **Companion features same day:** dreaming (research preview), multiagent orchestration (public beta).

---

## Ready to Write?
Run: /write-blogpost claude-managed-agents-outcomes
