# Dev.to + Hashnode Cross-post - Claude Managed Agents Outcomes

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py claude-managed-agents-outcomes --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py claude-managed-agents-outcomes --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Claude Managed Agents Outcomes: Auto-Grading Agent Work
DESCRIPTION: Claude Managed Agents Outcomes auto-grades agent output against a rubric and re-runs until it passes. Rubric format, max_iterations, grader events explained.
TAGS: claudecode, ai, agents, llm
CANONICAL_URL: https://avinashsangle.com/blog/claude-managed-agents-outcomes
COVER_IMAGE: https://avinashsangle.com/og-claude-managed-agents-outcomes.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/claude-managed-agents-outcomes).

Claude Managed Agents Outcomes is a public-beta feature, launched on May 6, 2026, that lets you hand the agent a rubric and have a separate grader model check every draft against it. If the grader returns `needs_revision`, the gaps flow back to the writer for another pass, up to `max_iterations` (default 3, max 20). Same hosted harness, no human in the loop.

## TL;DR

- Outcomes is a rubric-graded iteration loop built into the Managed Agents harness. You send one event, `user.define_outcome`, and the agent works until the grader says `satisfied` or hits `max_iterations`.
- A separate grader (same model and tools as the writer, fresh context window) evaluates every draft. Its feedback is the only signal the writer gets back on each revision.
- Anthropic's internal benchmarks report up to **+10 points overall task success**, **+10.1% on .pptx generation**, and **+8.4% on .docx** ([Anthropic, May 2026](https://claude.com/blog/new-in-claude-managed-agents)).
- The cost trap is the iteration count, not a per-outcome fee. Each revision multiplies writer plus grader tokens against the same $0.08-per-session-hour line item from the underlying Managed Agents pricing.

## What Are Claude Managed Agents Outcomes?

Outcomes is the part of [Claude Managed Agents](https://avinashsangle.com/blog/claude-managed-agents) that lets the agent verify its own work. Instead of running until it self-assesses as done, the session runs against a markdown rubric, and a second Claude (the grader) inspects each artifact with no access to the writer's reasoning. Anthropic launched Outcomes in public beta on May 6, 2026, alongside two sibling features: dreaming (research preview) and multiagent orchestration (public beta).

The framing matters. Anthropic describes it as *"agents do their best work when they know what 'good' looks like - a structural framework, a presentation standard, or a set of requirements"* ([Anthropic blog, May 6 2026](https://claude.com/blog/new-in-claude-managed-agents)). The earlier Managed Agents flow asked you to write transcripts and review output yourself. Outcomes replaces that loop with a grader process and a rubric, so the agent keeps iterating without paging a human.

On the launch list, three companies were explicitly named as production users of Outcomes: **Harvey** (legal document drafting), **Spiral by Every** (writing quality against editorial principles), and **Wisedocs** (document quality checks against internal guidelines). Per Anthropic's internal benchmarks, the loop lifts task success rates by up to **10 percentage points** over a standard prompting loop, with the largest gains on the hardest tasks ([MindStudio, 2026](https://www.mindstudio.ai/blog/claude-outcomes-feature-rubric-grading-agent-powerpoint-quality)).

The beta header is `managed-agents-2026-04-01`. Every Managed Agents API call carries it, and the official SDKs set it for you when you pass `betas=BETAS`. If you forget the header on a raw HTTP call, the session API returns 400 before you even get to the outcome event.

## How the Outcome Grader Works

The flow is small and predictable. You create an environment and a writer agent. You start a session and send one event, `user.define_outcome`, carrying the task description and the rubric. The writer drafts. After each writer turn, the harness emits `span.outcome_evaluation_start` and spins up a grader in a fresh context window. The grader reads only the rubric, inspects the artifact (it has the same model and tools as the writer), and emits `span.outcome_evaluation_end` with a verdict. If the verdict is `needs_revision`, the explanation flows back into the writer's next turn.

Two design choices make this useful rather than gimmicky. First, the grader runs with no visibility into the writer's internal reasoning, so it cannot be talked into approving an artifact that does not meet the rubric. Second, the grader re-checks the full artifact on every iteration, not the diff, so a fix that breaks a previously-passing criterion gets caught on the next round. The [official define-outcomes reference](https://platform.claude.com/docs/en/managed-agents/define-outcomes) states this plainly: the grader uses a separate context window to avoid being influenced by the main agent's implementation choices.

The benchmark numbers are useful context. On Anthropic's internal eval set, file generation specifically saw **+8.4% on .docx outputs** and **+10.1% on .pptx outputs** over a standard prompting loop ([Anthropic, May 2026](https://claude.com/blog/new-in-claude-managed-agents)). Those are not headline-chart numbers; they are the difference between a slide deck that ships and one that doesn't. The gain is largest on the hardest tasks, which fits the pattern: easy work looks fine on the first pass anyway.

## Writing a Rubric the Grader Will Actually Enforce

The rubric is the only lever you have on the grader. The default failure mode is a grader that approves everything, and the reason is almost always vague criteria. The Anthropic docs are blunt about it: structure the rubric as explicit, gradeable criteria, such as *the CSV contains a price column with numeric values* rather than *the data looks good*. The grader scores each criterion independently, so vague criteria produce noisy evaluations ([Define outcomes, Anthropic](https://platform.claude.com/docs/en/managed-agents/define-outcomes)).

A working rubric has five properties. Each criterion is **checkable** by the grader using its tools. The target is the artifact's **structure and completeness**, not a fact the grader cannot independently confirm. The rubric **anticipates shortcuts** (for example, blocks corroboration via search snippets and mirrors when you want a primary source). It **mandates a feedback format** so you can parse the explanation downstream. And it **tells the grader what to ignore**, so you do not burn iterations on style nits.

Anthropic ships a working DCF model rubric on the docs page. It's worth reading because it shows what "explicit and gradeable" looks like in practice:

```markdown
# DCF Model Rubric

## Revenue Projections
- Uses historical revenue data from the last 5 fiscal years
- Projects revenue for at least 5 years forward
- Growth rate assumptions are explicitly stated and reasonable

## Cost Structure
- COGS and operating expenses are modeled separately
- Margins are consistent with historical trends or deviations are justified

## Discount Rate
- WACC is calculated with stated assumptions for cost of equity and cost of debt
- Beta, risk-free rate, and equity risk premium are sourced or justified

## Terminal Value
- Uses either perpetuity growth or exit multiple method (stated which)
- Terminal growth rate does not exceed long-term GDP growth

## Output Quality
- All figures are in a single .xlsx file with clearly labeled sheets
- Key assumptions are on a separate "Assumptions" sheet
- Sensitivity analysis on WACC and terminal growth rate is included
```

Notice what the rubric does not say. It never asks the grader to verify that the input revenue figures are factually accurate. The grader has no way to confirm that a 2023 revenue number is real without going off and looking it up, and even if it did, you cannot easily test that part of the work. The rubric checks *that history was used*, not that the numbers are true. That is the right line.

If you do not have a rubric and you are starting from scratch, the docs offer a bootstrap trick worth stealing: hand Claude a known-good artifact and ask it to write the rubric. The output is usually better than the rubric you would have written from a blank page, because it can name what makes the good artifact good. I run this once per document type and keep the rubric in a markdown file uploaded via the Files API with the `files-api-2025-04-14` beta. That way you can pass `rubric: {type: "file", file_id: ...}` and reuse it across sessions.

## Define an Outcome: Python Code Walkthrough

The setup is three calls plus one event. Create the environment. Create the writer agent with whatever tools the task needs. Create the session. Send a single `user.define_outcome` event carrying a description string and the rubric, and the writer starts on receipt. No separate `user.message` event is needed to kick it off.

```python
import anthropic
from pathlib import Path

BETAS = ["managed-agents-2026-04-01", "files-api-2025-04-14"]
MODEL = "claude-opus-4-7"

client = anthropic.Anthropic()

# 1. Environment - the sandbox the agent runs in
env = client.beta.environments.create(
    name="research-brief",
    config={"type": "anthropic_cloud", "networking": {"type": "unrestricted"}},
    betas=BETAS,
)

# 2. Writer agent - same model and tools the grader will use
writer = client.beta.agents.create(
    name="Research Analyst",
    model=MODEL,
    system=(
        "You are a research analyst. You write one-page business briefs. "
        "Cite every factual claim with an inline footnote [n]."
    ),
    tools=[
        {
            "type": "agent_toolset_20260401",
            "configs": [
                {"name": "web_search"},
                {"name": "web_fetch"},
                {"name": "read"},
                {"name": "write"},
            ],
        }
    ],
    betas=BETAS,
)

# 3. Upload the rubric once, reuse across sessions
rubric = client.beta.files.upload(file=Path("dcf-rubric.md"), betas=BETAS)
print(f"Uploaded rubric: {rubric.id}")

# 4. Session + the one event that starts everything
session = client.beta.sessions.create(
    agent={"type": "agent", "id": writer.id, "version": writer.version},
    environment_id=env.id,
    title="Brief: EV fast-charging unit economics",
    betas=BETAS,
)

client.beta.sessions.events.send(
    session.id,
    betas=BETAS,
    events=[
        {
            "type": "user.define_outcome",
            "description": "Build a one-page business brief on EV fast-charging unit economics in .docx",
            "rubric": {"type": "file", "file_id": rubric.id},
            # or inline: {"type": "text", "content": RUBRIC_MD},
            "max_iterations": 5,  # optional, default 3, max 20
        }
    ],
)
```

The rubric field accepts either inline text or a file reference. For one-off notebook work I keep the rubric inline as a long string, because the round-trip is faster and the rubric is right there in the source. For anything I run more than once I upload it once and pass the `file_id`, so updates to the rubric do not require re-pasting it everywhere.

Two notes on the agent definition that bite people. The grader uses the same model and the same tools as the writer agent. If the writer has `read` and `write`, so does the grader, and the grader can open every file the writer produced. If you scope the writer too tightly (no `read`, for example) the grader will not be able to verify the artifact and you will get noisy verdicts. Give the grader the tools it needs to confirm what the rubric demands.

## Grader Feedback: The Five Result States

Every grader pass ends with a `span.outcome_evaluation_end` event. The `result` field on that event takes one of five values and tells you exactly what the harness will do next. Memorize this table once and you will save yourself a lot of stream-parsing.

| result | What happens next |
| --- | --- |
| `satisfied` | All criteria met. Session transitions to `idle`. |
| `needs_revision` | Writer starts another iteration with the grader's explanation as feedback. |
| `max_iterations_reached` | No further evaluation. Writer may run one final revision before the session goes idle. |
| `failed` | Rubric fundamentally does not match the task. Session goes idle. |
| `interrupted` | A `user.interrupt` event landed mid-evaluation. You can start a new outcome. |

In practice you watch the stream and react to two events: `span.outcome_evaluation_start` tells you the writer finished a draft, and `span.outcome_evaluation_end` carries the verdict. A heartbeat event, `span.outcome_evaluation_ongoing`, fires while the grader works, but the grader's internal reasoning is opaque - you see that it is working, not what it is thinking.

```python
TERMINAL = {"satisfied", "max_iterations_reached", "failed", "interrupted"}

with client.beta.sessions.events.stream(session.id, betas=BETAS) as stream:
    for ev in stream:
        if ev.type == "span.outcome_evaluation_start":
            print(f"[iter {ev.iteration}] grader evaluating draft...")
        elif ev.type == "span.outcome_evaluation_end":
            print(f"[iter {ev.iteration}] result: {ev.result}")
            print(ev.explanation)  # per-criterion feedback
            if ev.result in TERMINAL:
                break

# After the loop, fetch deliverables from /mnt/session/outputs/
files = client.beta.files.list(scope_id=session.id, betas=BETAS)
for f in files.data:
    client.beta.files.download(f.id, betas=BETAS).write_to_file(f.filename)
```

Output files live at `/mnt/session/outputs/` inside the container and you fetch them via the Files API with `scope_id=session.id`. The grader's `explanation` field is the part you actually want to log for postmortems - it's the verbatim feedback the writer used for the next pass, so if a session looped to `max_iterations_reached`, that field tells you what the grader kept catching.

## Tuning max_iterations vs Fixing the Rubric

`max_iterations` defaults to 3 and the cap is 20. The cookbook recommends starting at 5 for strict rubrics. The mistake I see most is people raising the cap when they should be rewriting the rubric. There's a simple decision rule that catches the difference.

Log every iteration's `explanation` field and look at the failures across passes. If the grader is flagging **the same criterion every time** and the writer is not closing it, the rubric is the problem - either the criterion is unverifiable, or the grader and writer are interpreting it differently. Raise the cap and you just pay for more iterations of the same loop. If the grader is flagging **different criteria each pass**, with the failures converging on the last unsolved item, the rubric is fine and you need a higher cap. That is real progress and another iteration will close it out.

The other anti-patterns are easier to spot once you know what to look for. A rubric that prescribes specific steps instead of describing the goal will over-constrain the writer, and the grader will mark novel approaches as failed. A description and rubric that contradict each other returns `result: failed` on the first pass, before any work is done - check the explanation, it is usually unambiguous about which one is wrong. A single criterion that packs four ideas together produces noisy per-criterion verdicts because the grader cannot tell which of the four is failing on a given draft.

Treat `max_iterations` as a circuit breaker, not a knob. Set it once based on how strict your rubric is, and let repeated `max_iterations_reached` events tell you when the rubric needs work. Raising the cap from 5 to 20 to mask a bad rubric doubles your token spend and surfaces nothing useful.

## What Outcomes Actually Cost

Outcomes does not add a separate per-outcome fee. The cost driver is iteration count: every revision adds writer tokens plus grader tokens and keeps the same Managed Agents **$0.08-per-session-hour** clock running. There is no standalone grader bill or rubric bill. There is just more of the same line items.

Worked example for a research brief task. The writer takes about ten minutes per draft. The grader takes about a minute per evaluation. A session that goes two iterations to `satisfied` runs roughly 22 minutes of wall-clock session time. At $0.08 per hour, that is about $0.029 in session-hours. The token spend is whatever the writer and grader cost across two passes (typically the dominant line in this kind of work). For comparison, a manual human review of the same brief at, say, $25 per round, blows past the entire outcome-driven session cost on the first review.

Two cost levers actually move the bill. First, `max_iterations`. A run that loops six times when three would have done it doubles the writer plus grader tokens. Track the average iteration count per task type and tune accordingly. Second, the grader's tools. The grader uses whatever the writer agent was created with - if you gave the writer `web_search` and the rubric does not require cross-checking, you are paying for grader web searches it does not need. Strip unused tools from the writer config and the grader stops calling them.

For broader cost-tracking patterns across Claude Code and Managed Agents work, my [Claude Code cost tracking](https://avinashsangle.com/blog/claude-code-cost-tracking) post covers the JSONL logs and ccusage workflow I run weekly. The same approach works for Managed Agents sessions: dump the events stream to a file per session and roll up iteration counts and token usage from the `usage` field on `span.outcome_evaluation_end`.

## Outcomes vs LLM-as-Judge vs Codex /goal

LLM-as-judge is a category in 2026, not a single product. Tools like Galileo, DeepEval, Langfuse, and G-Eval all let you score agent or model output against a rubric using an LLM, and they do it well. Strong LLM judges in current research achieve roughly **80% agreement with human evaluators**, matching human-to-human consistency on many quality dimensions ([Galileo, 2026](https://galileo.ai/blog/agent-evaluation-framework-metrics-rubrics-benchmarks)). What you get from those tools is the score. What you do with it is up to you.

What Outcomes adds is the wiring. The grader runs inside the harness, the explanation flows back into the writer's next turn without any code on your side, and the iteration loop stops when the grader is satisfied. With a standalone judge, you build that loop yourself: capture the score, decide if it is good enough, format the gaps as a prompt, and restart the agent. That wiring is the difference between a one-off evaluation script and a self-correcting agent in production.

On the OpenAI side, Codex `/goal` is the closest analogue. Both attach a success target to an autonomous run. The difference is the verdict shape. Outcomes leans on a markdown rubric and natural-language gap explanations. Codex `/goal` leans on verifier scripts and structured pass-fail signals, which works well for code where you can run tests. Practitioners comparing them note that `/goal` fits programmatic tasks better, while Outcomes fits qualitative artifacts (documents, decks, prose) better ([Developers Digest, 2026](https://www.developersdigest.tech/blog/codex-goal-vs-claude-managed-outcomes-practical-differences)). They are not interchangeable, they target different shapes of work.

Pick Outcomes if you live in the Managed Agents harness already and your artifacts are document-like. Pick a standalone judge if you want to evaluate offline across a corpus, or you need cross-provider scoring. Pick Codex `/goal` if your success criterion is "does the test suite pass" and you are already on OpenAI.

## Frequently Asked Questions

### What are Claude Managed Agents Outcomes?

Outcomes is a public-beta Managed Agents feature launched May 6, 2026. You attach a markdown rubric to a session via a `user.define_outcome` event, and a separate grader model evaluates each draft in its own context window. If the grader returns `needs_revision`, the feedback goes back to the writer for another iteration.

### How does the Claude outcome grader work?

The grader runs in a fresh context window using the same model and tools as the writer agent. It reads only the rubric, inspects the artifact, and returns a per-criterion verdict on every iteration. Its reasoning is opaque, but its `explanation` field carries the gaps that the writer must close on the next pass.

### How do I write a good rubric for Claude Outcomes?

Use explicit, gradeable criteria like "the CSV has a numeric price column," not vibes like "the data looks good." Anchor the rubric in verifiable structure and completeness, anticipate shortcuts the writer might take, mandate a feedback format, and tell the grader what to ignore so it does not thrash on style nits.

### What is the default value of max_iterations in Claude Outcomes?

The `max_iterations` field defaults to 3 and accepts values up to 20. For strict rubrics, the Anthropic cookbook recommends starting at 5. If the loop hits the cap with the same failures every iteration, the rubric is wrong; if it hits the cap with failures that converge, raise the cap instead of rewriting.

### What are the result states of a Claude outcome evaluation?

Five values appear on `span.outcome_evaluation_end.result`: `satisfied` (criteria met, session goes idle), `needs_revision` (writer starts another pass), `max_iterations_reached` (one final revision allowed before idle), `failed` (rubric contradicts the task description), and `interrupted` (a `user.interrupt` event landed mid-evaluation).

### How much do Claude Outcomes cost on top of session-hours?

Outcomes has no separate per-outcome fee. The real cost driver is iterations: each revision adds writer tokens plus grader tokens and keeps the $0.08-per-session-hour clock running. A 20-minute session that iterates twice still bills around $0.027 in session-hours, plus the writer-and-grader tokens for both rounds.

### Can I use Claude Outcomes with the Agent SDK or only Managed Agents?

Outcomes is a Managed Agents feature. The grader, the iteration loop, and the `span.outcome_evaluation_*` events all live in the hosted harness. If you run the Agent SDK locally, you can still build an LLM-as-judge yourself with a separate Anthropic API call, but the wiring back to the writer is on you.

### What is the difference between Claude Outcomes and Codex /goal?

Both attach a success target to an autonomous agent run. Outcomes uses a rubric plus a separate grader and feeds the gaps back as natural-language revision notes. OpenAI's Codex `/goal` favors verifier scripts and structured pass-fail signals. Outcomes leans qualitative, `/goal` leans test-driven, and the runtime substrates differ.

---

If you're still deciding between Managed Agents and the Agent SDK, start with [Claude Managed Agents vs Agent SDK](https://avinashsangle.com/blog/claude-managed-agents). And if you're running agents in CI, my [prompt-injection defense guide for GitHub Actions](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection) applies to outcome-driven sessions too.
