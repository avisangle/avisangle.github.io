# Content Brief: Claude Code Dynamic Workflows Guide

**Research date:** 2026-05-30
**Status:** ready to write
**Topic source:** `.claude/topic-suggestions.md` (PR #33, 2026-05-29)

---

## Phase 1 — Topic Validation

### Search demand (strong, fresh)
Dynamic workflows shipped **May 28, 2026** with the Opus 4.8 release. Within 48 hours there are two active Hacker News threads, broad news coverage (TechCrunch, MarkTechPost, The New Stack, TechTimes, WinBuzzer, gHacks, 9to5Mac, technology.org), and 5-6 day-one "what is this" overviews. Search intent is rising fast and is dominated by two unanswered questions: **what does it cost** and **when should I actually use it**.

Key demand signals:
- HN: ["Dynamic Workflows in Claude Code"](https://news.ycombinator.com/item?id=48311705) — cost control, long-run monitoring, mid-run corrections.
- HN: ["Ask HN: About Claude Code's New Feature: Dynamic Workflows"](https://news.ycombinator.com/item?id=48317595) — when to use workflows vs a standard session.
- [TechTimes](https://www.techtimes.com/articles/317363/20260529/claude-code-dynamic-workflows-scripts-replace-context-windows-ultracode-automates-orchestration.htm): "a 500-agent audit can shift the session bill by an order of magnitude" — the cost story nobody has modeled.

### Competition (wide gap)
All ranking content is <48h old and falls into two buckets:
1. **Official** — [Anthropic blog](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code) and [Claude Code docs](https://code.claude.com/docs/en/workflows). Authoritative on mechanics, deliberately vague on cost ("substantially more tokens").
2. **Day-one overviews** — claudefa.st, agentpedia.codes, Ken Huang's Substack, findskill.ai, MindStudio. All explain WHAT it is and HOW to turn it on.

**Nobody answers:** which tasks justify the cost vs a single session, how to write prompts that bound subagent count, how to monitor/debug a multi-hour run, how effort levels (`ultracode`/`xhigh`) interact with cost, and how workflows compare with `/ultrareview` for audits.

### AI citation potential (high)
"When should I use Claude Code dynamic workflows?" and "how much do dynamic workflows cost?" are exactly the decision questions developers ask AI assistants. Official docs won't give a cost number, leaving a citable gap for a practitioner who publishes a real before/after token figure. A clean FAQ block targeting these queries has strong AI-Overview / Perplexity pickup potential.

### Freshness opportunity
Feature is in **research preview**, requires **Claude Code v2.1.154+**. Everything published so far is a launch-day skim. A guide grounded in a real run on a real repo, with an actual dollar/token delta, is durable primary-source content.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`Claude Code dynamic workflows`

### Secondary keywords
- Claude Code dynamic workflows cost
- Claude Code subagent orchestration
- when to use Claude Code workflows
- Claude Code ultracode
- Claude Code Workflow tool

### Long-tail queries
1. how much do Claude Code dynamic workflows cost
2. when should I use a Claude Code workflow vs a single session
3. how to control subagent count in Claude Code workflows
4. how many agents can a Claude Code workflow run
5. how to monitor a running Claude Code workflow
6. what is ultracode in Claude Code
7. Claude Code workflow vs subagent vs skill
8. how to save and reuse a Claude Code workflow

### FAQ candidates (8-10, mirror search queries)
1. What are dynamic workflows in Claude Code?
2. How much do Claude Code dynamic workflows cost?
3. When should I use a workflow instead of a single Claude Code session?
4. How many subagents can a dynamic workflow run?
5. How do I control how many agents a workflow spawns?
6. What is ultracode in Claude Code?
7. What's the difference between a workflow, a subagent, and a skill?
8. Can I pause, resume, or stop a running workflow?
9. Which plans support dynamic workflows?
10. How do dynamic workflows compare to /ultrareview for code audits?

---

## Phase 3 — Content Brief

### Article Metadata
- **Title (58 chars):** `Claude Code Dynamic Workflows: When They're Worth the Cost`
- **Slug:** `claude-code-dynamic-workflows-guide`
- **Meta description (151 chars):** `Claude Code dynamic workflows orchestrate up to 1,000 subagents from one prompt. Learn which tasks justify the token cost and when a single session wins.`
- **Target word count:** 2,400-2,800
- **Estimated read time:** 11 min
- **Category:** Claude Code
- **Lucide icon:** `Workflow` (fallbacks: `Network`, `Boxes`)
- **Date published / modified:** 2026-05-30

### Content Outline

**Intro (direct answer, 40-60 words)**
Open by answering the title immediately: dynamic workflows let Claude Code write a JavaScript orchestration script that fans a task out across up to 1,000 subagents (16 running at once). They're worth it for codebase-wide audits, large migrations, and cross-checked research — and a waste of tokens for anything a single session can hold. Then the TL;DR.

**TL;DR (3-4 bullets)**
- A dynamic workflow is a script Claude writes that runs dozens to hundreds of subagents in the background; your session stays free and only the final answer hits Claude's context.
- Caps: **16 concurrent agents, 1,000 total per run**. Research preview, needs **Claude Code v2.1.154+**, on by default for Max/Team/Enterprise, opt-in via `/config` on Pro.
- Cost can jump by an order of magnitude vs a normal session. Scope a small task first to calibrate.
- Reach for it only when a task is too big for one context window; otherwise a single session is cheaper and faster.

**H2: What Are Dynamic Workflows in Claude Code?**
- Plain-English definition: Claude writes a JS orchestration script, a runtime runs it in the background, intermediate results live in script variables (not Claude's context), you get one coordinated answer.
- The primitives in one sentence each: `agent()` (spawn a subagent), `parallel()` (barrier — wait for all), `pipeline()` (per-item stages, no barrier), `phase()` (group progress). Note it's plain JavaScript — no imports, no filesystem, inputs via `args`, results via `return`.
- Source: [Claude Code docs — workflows](https://code.claude.com/docs/en/workflows).

**H2: When to Use a Workflow vs a Single Session**
- The decision rule: who holds the plan. Subagents/skills → Claude holds it turn by turn in context. Workflow → the script holds it. Use a workflow only when the work exceeds one context window.
- Reproduce the docs' comparison as a table: Subagents vs Skills vs Workflows (what it is / who decides next / where results live / scale / interruption).
- Good fits: codebase-wide bug sweep, 500-file migration, research cross-checked across sources, a hard plan drafted from several angles. Bad fits: a single bug fix, a feature in a few files, anything you'd finish in one conversation.
- Cross-link: [regression-proofing-claude-code-workflows](/blog/regression-proofing-claude-code-workflows).

**H2: How Much Do Dynamic Workflows Cost?**
- Direct answer: Anthropic publishes no fixed rate; each agent pays its own context overhead at the session model's standard rate, so a big fan-out multiplies token use. A 500-agent audit can shift the bill by an order of magnitude ([TechTimes](https://www.techtimes.com/articles/317363/20260529/...)).
- **Primary-source angle (the differentiator):** run a real scoped workflow on a real repo and report the actual numbers — agent count, total tokens (from the `/workflows` token totals), wall-clock, and rough dollar delta vs doing the same task in one session. This is the data no competitor has.
- Cost controls to document: check `/model` before a big run; ask Claude to route cheap stages to a smaller model; set a token budget in the prompt (the `budget` directive); the 5-minute prompt-cache TTL angle if relevant.
- Cross-link: [claude-code-cost-tracking](/blog/claude-code-cost-tracking) — natural cost-cluster pairing.

**H2: How to Run Your First Workflow (Step-by-Step)**  *(HowTo schema)*
1. Confirm v2.1.154+; on Pro, enable Dynamic workflows in `/config`.
2. Easiest start: `/deep-research <question>` — the bundled workflow. Watch it fan out, cross-check, and return one cited report.
3. Trigger one for your own task: include the word **`workflow`** in your prompt (e.g., "Run a workflow to audit every API endpoint under src/routes/ for missing auth checks"). `alt+w` ignores the keyword if you didn't mean it.
4. Approve the plan: the prompt shows planned phases + a token caution. Options: Yes / Yes-don't-ask-again / View raw script / No. `Ctrl+G` opens the script in your editor.
5. Watch with `/workflows` — phase view shows agent count, token total, elapsed time. Keys: `p` pause/resume, `x` stop, `r` restart agent, `s` save.

**H2: How to Bound Subagent Count and Keep Cost Predictable**
- The lever is the **prompt scope**, not a flag. A narrow, well-bounded task ("audit src/routes/ only") produces a small fan-out; "audit the whole codebase" can hit the 1,000-agent cap.
- Concrete tactics: name explicit paths/dirs, set a target count in the prompt, ask Claude to read the script (View raw script) before approving, run a scoped pilot first to calibrate, route non-critical stages to a smaller model.
- Note the hard limits as guardrails: 16 concurrent / 1,000 total are runaway backstops, not budgets — you still pay for everything under them.

**H2: ultracode and Effort Levels — What They Cost You**
- `ultracode` = `xhigh` reasoning effort + automatic workflow orchestration; with it on Claude plans a workflow for **every substantive task**, so one request can spawn several workflows (understand → change → verify). Per-session, resets on new session; drop back with `/effort high`.
- The cost warning: ultracode is the fastest way to 10x your token bill without noticing. Use it deliberately on hard, high-value work; turn it off for routine edits.
- Approval nuance: in Auto permission mode the launch prompt is skipped entirely when ultracode is on — know that before you flip it.

**H2: Dynamic Workflows vs /ultrareview for Code Audits**
- Both fan out many agents for review, but `/ultrareview` is a fixed, cloud-run review pipeline over a branch/PR; a workflow is a script you (or Claude) author and can read, rerun, and save.
- Decision guidance: reach for `/ultrareview` when you want a turnkey branch review; reach for a workflow when you want a custom adversarial-verify pattern or a repeatable orchestration you control.
- Cross-link: [ultrareview-ci-cd-pipelines](/blog/ultrareview-ci-cd-pipelines).

**H2: Monitoring, Pausing, and Resuming a Long Run**
- `/workflows` is mission control: phase token totals, per-agent prompts/tool calls/results, pause (`p`), stop one agent or the whole run (`x`), restart (`r`), save (`s`).
- Resume semantics: completed agents return cached results, the rest run live — but **resume only works within the same session**. Exit Claude Code mid-run and the next session starts fresh. Call this out as a real gotcha.
- No mid-run user input: only agent permission prompts can pause. For sign-off between stages, run each stage as its own workflow. Add needed shell/MCP commands to your allowlist before a long run so it doesn't stall on a prompt.

**FAQ section (Accordion + FAQPage schema)** — use the 8-10 candidates above, 40-60 words each.

**Related articles / CTA**
- claude-code-cost-tracking, ultrareview-ci-cd-pipelines, regression-proofing-claude-code-workflows, claude-managed-agents.

### Data points / facts to include (all primary-source verified 2026-05-30)
- Launched **May 28, 2026** with Opus 4.8.
- Requires **Claude Code v2.1.154+**; research preview.
- **16 concurrent agents**, **1,000 total per run**.
- On by default for Max/Team/Enterprise; Pro enables in `/config`; available in CLI, Desktop, IDE extensions, `claude -p`, Agent SDK, plus Anthropic API, Bedrock, Vertex AI, Microsoft Foundry.
- Bun proof point: **750,000 lines** Zig→Rust, **11 days**, **99.8%** test pass rate.
- Subagents always run in `acceptEdits` mode and inherit your tool allowlist regardless of session mode.
- Disable via `/config`, `"disableWorkflows": true`, or `CLAUDE_CODE_DISABLE_WORKFLOWS=1`.

### Unique Angle
**"I ran one on a real repo — here's the token bill and when it paid off."** Every competing post is a launch-day feature explainer. This guide is the only one with (a) a real measured cost figure from an actual run, (b) a concrete decision rule for workflow-vs-single-session, (c) prompt-scoping tactics to bound agent count, and (d) an honest `ultracode` cost warning. Avinash's primary-source advantage is genuine here: the tool runs inside the very assistant writing the post, so the cost data and the `/workflows` screenshots are real, not paraphrased from docs.

### Internal Linking Opportunities
- **Existing posts:** `claude-code-cost-tracking` (cost cluster), `ultrareview-ci-cd-pipelines` (audit comparison), `regression-proofing-claude-code-workflows` (workflow resilience), `claude-managed-agents` (orchestration sibling), `persistent-memory-ai-coding-agents` (context-window framing).
- **Projects:** `jenkins-mcp`, `method-crm-mcp` (real codebases a workflow audit could target — optional mention).
- **Future cluster articles:** "Writing your own Claude Code workflow script", "deep-research workflow deep-dive", "ultracode in practice".

---

## Ready to Write?
Run: /write-blogpost claude-code-dynamic-workflows-guide
