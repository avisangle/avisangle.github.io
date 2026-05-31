# Dev.to + Hashnode Cross-post - Claude Code Dynamic Workflows: When They're Worth the Cost

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py claude-code-dynamic-workflows-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py claude-code-dynamic-workflows-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Claude Code Dynamic Workflows: When They're Worth the Cost
DESCRIPTION: Claude Code dynamic workflows orchestrate up to 1,000 subagents from one prompt. Here's which tasks justify the token cost, how to bound the agent count, and when a single session is the better call.
TAGS: claudecode, ai, agents, productivity
CANONICAL_URL: https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide
COVER_IMAGE: https://avinashsangle.com/og-claude-code-dynamic-workflows-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide).

Claude Code dynamic workflows let Claude write a JavaScript orchestration script that fans a task out across up to 1,000 subagents, 16 running at once. They earn their keep on codebase-wide audits, large migrations, and cross-checked research. For anything a single session can hold, they just burn tokens. This guide covers which is which.

## TL;DR

- A dynamic workflow is a script Claude writes that runs dozens to hundreds of subagents in the background. Your session stays free and only the final answer hits Claude's context.
- Hard caps: **16 concurrent agents, 1,000 total per run**. Research preview, needs **Claude Code v2.1.154+**, on by default for Max, Team, and Enterprise, opt-in via `/config` on Pro.
- Cost can jump by an order of magnitude versus a normal session because each agent pays its own context overhead. Scope a small task first to calibrate.
- Reach for a workflow only when a task is too big for one context window. Otherwise a single session is cheaper, faster, and easier to steer.

## What Are Dynamic Workflows in Claude Code?

A dynamic workflow is a JavaScript script that orchestrates subagents at scale. You describe a task, Claude writes the script, and a runtime runs it in the background while your session stays responsive. Anthropic shipped the feature on **May 28, 2026** alongside the Opus 4.8 release, and it is in research preview today.

The thing that makes it different from spawning a few subagents by hand is where the plan lives. With subagents and skills, Claude is the orchestrator: it decides turn by turn what to spawn next, and every result lands back in its context window. A workflow moves the loop, the branching, and the intermediate results into the script itself. Claude's context only holds the final answer. That is what lets a single run coordinate hundreds of agents without drowning in its own transcript.

The script is plain JavaScript with no imports and no filesystem access. Inputs arrive through `args`, results come back through `return`, and a handful of helpers do the orchestration: `agent()` spawns a subagent, `parallel()` runs a batch and waits for all of them, `pipeline()` streams each item through a set of stages without a barrier, and `phase()` groups the progress view. You rarely write this by hand. Claude does, and you read it before approving.

```javascript
export const meta = {
  name: 'audit-auth',
  description: 'Audit every route for missing auth checks',
  phases: [{ title: 'Find' }, { title: 'Verify' }],
}

// args is the list of route files passed in
const results = await pipeline(
  args,
  file => agent(`Check ${file} for missing auth guards.`,
    { phase: 'Find', schema: GAPS }),
  review => parallel(review.gaps.map(gap => () =>
    agent(`Adversarially verify this gap is real: ${gap.detail}`,
      { phase: 'Verify', schema: VERDICT })))
)

return results.flat().filter(Boolean)
```

That nine-line script is the whole point. It finds gaps and then has independent agents try to refute each one before it reports back. A single pass does not do that. The [official workflows docs](https://code.claude.com/docs/en/workflows) call this a repeatable quality pattern, and it is the real reason to reach for a workflow over just running more agents.

## When to Use a Workflow vs a Single Session

Use a workflow only when the work is too big for one context window. That is the entire decision rule. A codebase-wide bug sweep, a migration that touches 500 files, a research question that needs sources cross-checked against each other, a hard plan you want drafted from several independent angles before you commit. Those are workflow shaped. A single bug fix, a feature that spans three files, anything you would finish in one conversation? That is a normal session, and a workflow would only make it slower and pricier.

Anthropic frames the choice as who holds the plan. Here is how the three primitives line up.

|                    | Subagents          | Skills             | Workflows            |
| ------------------ | ------------------ | ------------------ | -------------------- |
| Who decides next   | Claude, turn by turn | Claude, per the prompt | The script       |
| Where results live | Claude's context   | Claude's context   | Script variables     |
| Scale              | A few per turn     | Same as subagents  | Dozens to hundreds   |
| Interruption       | Restarts the turn  | Restarts the turn  | Resumable in session |

The proof point everyone cites is Jarred Sumner using a workflow to port Bun from Zig to Rust: **750,000 lines** of Rust, **11 days** from first commit to merge, with **99.8%** of the existing test suite passing, per Anthropic's [launch post](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code). That makes the capability real. It also makes the cost question urgent, because work at that scale is not what your routine session bill looks like.

## How Much Do Dynamic Workflows Cost?

Anthropic does not publish a fixed token rate for workflow runs, and that is not evasion, it is honest. Cost depends on the task scope, the agent count, and the model active in your session. Every agent in a workflow pays its own context overhead against the session model's standard rate. Fan a task across 40 agents and you pay 40 context setups, not one. The official docs only warn that a run can use "substantially more tokens" than the same task in conversation, and [TechTimes](https://www.techtimes.com/articles/317363/20260529/claude-code-dynamic-workflows-scripts-replace-context-windows-ultracode-automates-orchestration.htm) puts it more bluntly: a 500-agent audit can shift the session bill by an order of magnitude.

Vague warnings do not help you budget, so here is how I model a run before I start one. Take an agent count, estimate the context each agent reads, add what it returns, and multiply. The numbers below are a planning model, not a measured invoice. Your real figures come off the token totals in the `/workflows` view once the run is going.

```text
Scenario: audit 40 route files for missing auth checks
  Find phase:    40 agents x ~12K input + ~2K output  = ~560K tokens
  Verify phase:  ~25 findings x ~6K input + ~1K output = ~175K tokens
  Orchestration + overhead (rough)                     = ~15%

  Estimated total: ~850K tokens for the run

Same task in one session, reading files serially:
  ~120K-180K tokens before the context window forces a compaction

Takeaway: the workflow costs roughly 5-7x here, and buys you
parallel coverage + adversarial verification you can't get in one pass.
```

That ratio is the whole tradeoff. You are paying several times the tokens to get coverage and a verification pass a single session physically cannot do once it runs out of context. On a security audit before a release, that is money well spent. On a task you could have one-shot, it is waste. To control the model side, check `/model` before a large run if you normally drop to a smaller model for routine work, and when you describe the task you can ask Claude to route the cheap stages, the find-and-summarize work, to a smaller model while the judgment stages stay on the strong one. Measure the delta the same way I do for everything else, with [Claude Code cost tracking](https://avinashsangle.com/blog/claude-code-cost-tracking), so you are deciding on numbers and not on a vibe.

## How to Run Your First Workflow (Step by Step)

The fastest way to feel what a workflow does is to run the one Claude Code ships with. You do not write any script. Confirm you are on v2.1.154 or later first, and on Pro switch on the Dynamic workflows row in `/config`. Max, Team, and Enterprise have them on by default.

```bash
# 1. The bundled workflow: research a question across many sources
/deep-research What changed in the Node.js permission model between v20 and v22?

# It fans out web searches, cross-checks the sources it finds,
# votes on each claim, and returns ONE cited report at the end.

# 2. Trigger a workflow for your own task: include the word "workflow"
Run a workflow to audit every API endpoint under src/routes/ for missing auth checks

# Claude highlights the keyword and writes an orchestration script
# instead of working through the task turn by turn.
```

When you trigger one, Claude Code shows an approval prompt with the planned phases and a token-usage caution before anything runs. Your options are to run it, run it and stop asking for this workflow in this project, view the raw script, or cancel. Press `Ctrl+G` to open the script in your editor, or `Tab` to adjust the prompt before it starts. I read the raw script on the first run of anything that touches a real codebase. It takes thirty seconds and tells you exactly how many agents are about to spawn.

One permissions detail worth knowing: the subagents a workflow spawns always run in `acceptEdits` mode and inherit your tool allowlist, no matter what permission mode your session is in. File edits are auto-approved. Shell commands, web fetches, and MCP tools that are not on your allowlist can still pause the run to prompt you. Before a long run, add the commands the agents will need to your allowlist so it does not stall an hour in waiting on a confirmation.

Once a run does what you wanted, you can keep it. In the `/workflows` view, select the run and press `s` to save its script as a command in either `.claude/workflows/` (shared with the repo) or `~/.claude/workflows/` (personal, every project). It then runs as `/your-name` in future sessions, the same way `/deep-research` does.

## How to Bound Subagent Count and Keep Cost Predictable

The lever that controls cost is the scope of your prompt, not a flag. A narrow task produces a small fan-out. "Audit `src/routes/` for missing auth checks" spawns one agent per route file. "Audit the whole codebase" can march toward the 1,000-agent cap. The runtime allows up to 16 agents concurrently, fewer on machines with limited CPU cores, and caps a single run at 1,000 agents total. Read that 1,000 as a runaway backstop, not a budget. You pay for every agent that runs under it.

Four habits keep my runs predictable. Name explicit paths and directories instead of pointing at the repo root. Put a target count in the prompt when you have one, like "sample 30 representative files, not all of them." Use View raw script at the approval prompt to see the real agent count before you commit. And run a scoped pilot first, watch what one phase actually costs in the `/workflows` token totals, then widen the scope once the number is in front of you.

```text
Loose  ->  "Run a workflow to find every bug in this project"
           Unbounded fan-out. Could approach the 1,000-agent cap.

Tight  ->  "Run a workflow to audit the 40 files under src/routes/
            for missing auth checks. One agent per file, then verify
            each finding once."
           ~40 + ~25 agents. Predictable, readable, cheap to rerun.
```

Same intent, very different bill. The tight version is also easier to trust, because you can reason about what it did. If you have used the cloud review tools, this is the same instinct as scoping a diff before you ask for a review rather than throwing the whole branch at it.

## ultracode and Effort Levels: What They Cost You

Ultracode is the setting that turns workflows from opt-in into automatic. It combines `xhigh` reasoning effort with automatic workflow orchestration, so Claude plans a workflow for every substantive task instead of waiting for you to type the keyword. A single request can become several workflows in a row, one to understand the code, one to make the change, one to verify it. It is the fastest way I know to 10x a token bill without noticing.

```bash
# Let Claude decide when a task warrants a workflow
/effort ultracode

# Lasts for the current session, resets when you start a new one.
# Drop back to normal high effort for routine work:
/effort high
```

Use it deliberately. Ultracode earns its cost on hard, high-value work where you want maximum thoroughness and you have decided the budget is worth it: a gnarly migration, a security audit, a design you want attacked from every angle. For editing a config file or fixing one test, turn it off. There is also an approval wrinkle to know before you flip it: in Auto permission mode the per-run launch prompt is skipped entirely when ultracode is on, so workflows start without pausing to ask. That is convenient and also exactly why the bill can climb quietly. It is only offered on models that support `xhigh` effort, so on other models the `/effort` menu will not show it.

## Dynamic Workflows vs /ultrareview for Code Audits

Both fan a job out across many agents, so the overlap is real, but they solve different problems. `/ultrareview` is a packaged, cloud-run review over a branch or PR. You point it at changes and it returns findings. A dynamic workflow is a script you or Claude author, run locally in the background, and can read, rerun, and save. One is a product; the other is a primitive you compose.

My rule is simple. When I want a turnkey review of a branch with no setup, I reach for `/ultrareview`, and I have written up [running it in CI/CD pipelines](https://avinashsangle.com/blog/ultrareview-ci-cd-pipelines) for exactly that. When I want a custom pattern, say find issues, dedupe them, then have three independent agents try to refute each one before it counts, or a repeatable orchestration I save as a command and run on every release, I reach for a workflow. The workflow gives you control over the orchestration logic. `/ultrareview` gives you a result without you owning the machinery.

## Monitoring, Pausing, and Resuming a Long Run

`/workflows` is mission control. It lists running and completed runs, and drilling into one shows each phase with its agent count, token total, and elapsed time. Go deeper and you can read an individual agent's prompt, its recent tool calls, and what it found. The footer keys do the work: `p` pauses or resumes, `x` stops the selected agent or the whole run, `r` restarts a running agent, and `s` saves the script.

Resume is genuinely useful and has one sharp edge. If you stop a run and resume it, the agents that already finished return their cached results and only the rest run live, so you do not pay twice for completed work. But resume only works **within the same Claude Code session**. Exit Claude Code while a workflow is running and the next session starts it fresh, from zero. On a multi-hour run, that is the gotcha that bites. Keep the session open, or stop and resume rather than quitting.

One more limit to plan around: a workflow takes no user input once it starts. Only agent permission prompts can pause it. You cannot nudge it halfway through with a "wait, also check X." If you need sign-off between stages, the documented pattern is to run each stage as its own workflow so you get a checkpoint to inspect results before the next stage spends tokens. Plan the phases up front, because you are committing to them when you approve the run.

If you ever want them gone, workflows turn off three ways: the Dynamic workflows toggle in `/config`, `"disableWorkflows": true` in `~/.claude/settings.json`, or the `CLAUDE_CODE_DISABLE_WORKFLOWS=1` environment variable. Organizations can disable them in managed settings.

## Frequently Asked Questions

### What are dynamic workflows in Claude Code?

A dynamic workflow is a JavaScript script Claude writes to orchestrate subagents at scale. A runtime runs it in the background while your session stays responsive. Intermediate results live in script variables, so only the final answer reaches Claude's context. They shipped May 28, 2026 with Opus 4.8.

### How much do Claude Code dynamic workflows cost?

Anthropic publishes no fixed rate. Each agent pays its own context overhead at the session model's standard token rate, so a large fan-out multiplies usage. A 500-agent audit can shift the bill by an order of magnitude versus a single session. Scope a small run first to calibrate.

### When should I use a workflow instead of a single Claude Code session?

Use a workflow only when a task is too big for one context window: a codebase-wide audit, a 500-file migration, or research cross-checked across many sources. For a single bug fix or a feature in a few files, a normal session is cheaper and faster.

### How many subagents can a dynamic workflow run?

Up to 16 agents run concurrently, fewer on machines with limited CPU cores, and a single run is capped at 1,000 agents total. The 1,000 limit is a runaway backstop, not a budget. You still pay for every agent that runs under it.

### How do I control how many agents a workflow spawns?

The lever is prompt scope, not a flag. Name explicit paths like `src/routes/` instead of the whole repo, set a target count in your prompt, and read the raw script before approving. Run a scoped pilot first to see the agent count, then widen.

### What is ultracode in Claude Code?

Ultracode combines `xhigh` reasoning effort with automatic workflow orchestration. With it on, Claude plans a workflow for every substantive task instead of waiting for you to ask, so one request can spawn several workflows. It lasts for the session and resets when you start a new one.

### What's the difference between a workflow, a subagent, and a skill?

The difference is who holds the plan. With subagents and skills, Claude orchestrates turn by turn and every result lands in its context. A workflow moves the plan into a script: the loop, branching, and intermediate results live in code, so it scales to hundreds of agents.

### Can I pause, resume, or stop a running workflow?

Yes. From the `/workflows` view, press `p` to pause or resume and `x` to stop. Completed agents return cached results on resume, so you keep finished work. Resume only works within the same session. Exit Claude Code mid-run and the next session starts the workflow fresh.

### Which plans support dynamic workflows?

Dynamic workflows are in research preview on all paid plans (Pro, Max, Team, Enterprise) and require Claude Code v2.1.154 or later. On Pro you switch them on in `/config`. They also work on the Anthropic API, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry.

### How do dynamic workflows compare to /ultrareview for code audits?

`/ultrareview` is a turnkey, cloud-run review over a branch or PR. A workflow is a script you or Claude author and can read, rerun, and save. Reach for `/ultrareview` when you want a packaged branch review, and a workflow when you want a custom adversarial-verify pattern you control.
