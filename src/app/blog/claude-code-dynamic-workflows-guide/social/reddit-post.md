# Reddit Posts - Claude Code Dynamic Workflows: When They're Worth the Cost

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py claude-code-dynamic-workflows-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

Subreddit selection (2026-05-31): scored against `.claude/subreddit-registry.md`.
r/ClaudeAI top score (~11). r/ChatGPTCoding was the registry table's 2nd pick but
was posted to twice in the last 7 days (2026-05-26, 2026-05-28), so it was skipped
on the 1-post-per-week guardrail. User confirmed r/ClaudeAI + r/AI_Agents.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Dynamic workflows in Claude Code - when they're worth the token cost (and when they aren't)
FLAIR: Claude Code Workflow
---BODY---
Dynamic workflows shipped with Opus 4.8 on May 28, and most of the coverage so far just explains what they are. After going through the docs and the feature itself, the questions I actually care about are cost and when to reach for one. Here's where I landed.

**What it actually is:** you describe a task, Claude writes a JavaScript script that fans it across subagents - up to 16 concurrent, 1,000 total per run. The script holds the loop and the intermediate results, so only the final answer hits Claude's context. That's the real difference from spawning a few subagents by hand: the plan lives in code, not in the context window.

**The cost reality:** there's no fixed token rate. Each agent pays its own context overhead at your session model's rate. Fan a task across 40 agents and you pay 40 context setups, not one. A 500-agent audit can shift the bill by an order of magnitude. I model a run before starting it - agent count times context per agent, plus what each returns. A 40-file auth audit pencils out near 850K tokens, roughly 5-7x the same task in one session.

**When it's worth that:** only when the work is too big for one context window. A codebase-wide audit, a 500-file migration, research cross-checked across sources, a plan stress-tested from several angles. For a single bug fix or a three-file feature, a normal session is cheaper and faster.

**The trap:** ultracode (`/effort ultracode`) makes Claude plan a workflow for every substantive task automatically. One request can become several workflows. It's the fastest way to 10x your bill without noticing, so I keep it off for routine work.

**One gotcha worth knowing:** resume only works within the same session. Exit Claude Code mid-run and the next session starts the workflow fresh, from zero. On a multi-hour run, that one bites.

Full writeup with the cost model, scoping tactics to bound the agent count, and how it compares to /ultrareview for audits: https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide

Happy to answer questions if you're weighing this for a real codebase.
---POST---
SUBREDDIT: AI_Agents
TITLE: How Claude Code's dynamic workflows move the orchestration plan out of the context window
FLAIR: Discussion
---BODY---
Anthropic shipped dynamic workflows in Claude Code last week. For anyone building agent systems, the design choice underneath it is worth studying regardless of which models you run.

The core idea: instead of the orchestrator (the LLM) deciding turn by turn what to spawn next and holding every result in its context, a workflow moves the plan into a JavaScript script. The script holds the loop, the branching, and the intermediate results. The model's context only ends up with the final answer.

That solves the problem every multi-agent setup hits - the orchestrator drowning in its own transcript once you fan out past a handful of agents. Here it scales to 16 concurrent agents and 1,000 total per run, and the orchestrator's context stays clean because the state lives in script variables.

The other detail I liked: it's not just "run more agents." The script can encode a repeatable quality pattern. The example that stuck with me is find-then-refute - one phase finds candidate issues, then independent agents each try to adversarially refute a finding before it counts. That's a verification structure you can't get from a single pass, and it's codified, so you rerun the exact same orchestration next time.

The tradeoff is cost. Every agent pays its own context overhead, so a large fan-out multiplies token use, and a big audit can move the bill by an order of magnitude. The lever that controls it is prompt scope, not a flag: bound the task to specific paths and the agent count stays predictable.

I wrote up the full picture, including a cost model and how to keep the agent count bounded: https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide

Curious how others are handling orchestrator context bloat in their own agent systems.
