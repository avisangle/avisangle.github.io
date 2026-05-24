# Reddit Posts - Gemini 3.5 Flash for Agentic Coding

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py gemini-3-5-flash-agentic-coding-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: When to route subtasks from Claude Code to Gemini 3.5 Flash - benchmarks, the thinking_level trap, and a routing playbook
FLAIR: Comparison
---BODY---
Google shipped Gemini 3.5 Flash last week at I/O. It beats Gemini 3.1 Pro on 11 of 15 agent benchmarks while pricing at $1.50/$9 per 1M tokens. For Claude Code users this is not a "should I switch" question. It is a "what should I route" question. I spent the last few days going through the model card, Simon Willison's analysis, the NxCode developer guide, and the Hacker News launch thread to figure out the practical answer.

**The benchmarks that matter for Claude Code users**

- Terminal-Bench 2.1: 76.2% (3.1 Pro: 70.3%)
- MCP Atlas: 83.6% (beats Claude Opus 4.7's 79.1% by 4.5 pts, GPT-5.5 by 8.3 pts)
- GDPval-AA Elo: 1656 (3.1 Pro: 1314)
- SWE-Bench Pro: 55.1% (Opus 4.7 still leads at 64.3%)

MCP Atlas measures multi-step tool-call reliability. It predicts task-completion rate more directly than SWE-bench for MCP-heavy stacks. That score is the load-bearing number.

**The thinking_level default trap**

Google replaced `thinking_budget` (int) with `thinking_level` (string enum) and silently dropped the default from `high` to `medium`. Copy-pasted code from `gemini-3-flash-preview` still runs but produces measurably worse outputs.

For agentic coding with MCP tools, set `thinking_level="low"` explicitly. Google retuned `low` for code and tool-calling workflows. It is faster, cheaper, and on coding benchmarks roughly equivalent to `medium`. `temperature`, `top_p`, and `top_k` are silently ignored in the new SDK profile.

**Cost-per-task, not cost-per-token**

Simon Willison cites Artificial Analysis: $1,551.60 to run their benchmark suite on Gemini 3.5 Flash vs $892.28 on Gemini 3.1 Pro. NxCode reports ~9x the cost vs gemini-3-flash ($1,552 vs $278) on equivalent eval workloads. Thinking tokens persist across turns. Agent loops chew more output. Cheaper per token, more expensive per workload.

GitHub Copilot launched Flash with a 14x premium-request multiplier. A 300-request Pro quota becomes ~21 Flash calls before overage.

**My routing rule**

Keep Claude Code with Sonnet 4.6 as the editor for anything that touches the repo. The `Edit`, `Write`, `Glob`, `Grep` tools stay where they are.

Route to Gemini 3.5 Flash for:

- MCP-heavy planning subtasks (10-100 tool calls per loop)
- Long-running background tasks (log triage, doc gen, cron agents)
- Cheap intermediate planning where Sonnet 4.6 is overkill
- Parallel sub-agent fan-out (cached input at $0.15/1M makes it viable)

Three mechanisms I actually use:

1. OpenRouter as a routing proxy (one key, swap models without code changes)
2. A thin custom MCP server wrapping `generate_content`, mounted via `~/.claude.json`
3. Antigravity CLI for hybrid teams (Flash is the default `agy` model)

**Where Flash is the wrong answer**

- Multi-file refactor in a real repo (Sonnet 4.6 still leads SWE-Bench Verified)
- ARC-style abstract reasoning (Flash gives up 5 pts to prior Pro, 12.5 to GPT-5.5)
- 128k+ retrieval (regressed 7.6 pts vs 3.1 Pro)
- Defensive code review (Anthropic models add error handling more naturally)

Full guide with the full benchmark table, before/after Python migration diff, a working 40-line MCP agent example, and seven honest limitations: https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide

Happy to answer questions if you are evaluating Flash for your stack.
---POST---
SUBREDDIT: AI_Agents
TITLE: MCP Atlas 83.6% on Gemini 3.5 Flash - cross-vendor routing for agent loops without rewriting the stack
FLAIR: Discussion
---BODY---
For anyone building MCP-driven agent stacks, Gemini 3.5 Flash (GA May 19, 2026) is the first Flash-tier model to lead MCP Atlas at 83.6%, beating Claude Opus 4.7 by 4.5 points and GPT-5.5 by 8.3 points. That score predicts how reliably a model chains multi-step tool calls without stalling. It is the most useful production-time number on the model card.

**What the launch actually changed**

- Pricing: $1.50 input, $9 output, $0.15 cached input per 1M tokens
- Context: 1M input, 65k output
- thinking parameter is now `thinking_level` (string enum: minimal/low/medium/high), default dropped from `high` to `medium`
- `temperature`, `top_p`, `top_k` are silently ignored - dead config

**The two traps people are hitting**

1. Copy-pasted code from `gemini-3-flash-preview` runs but produces worse outputs. The new default `medium` is dumber than the old implicit `high`. For MCP agent loops, set `thinking_level="low"` - Google retuned `low` for tool-calling and it is faster, cheaper, and roughly equivalent to `medium` on coding benchmarks.
2. Thinking tokens now persist across turns. Per-task input token count climbs 30-50%. Artificial Analysis ran their benchmark suite for $1,551 on Flash vs $892 on Gemini 3.1 Pro. Cheaper per token, more expensive per workload.

**Cross-vendor routing pattern**

I keep Claude Code with Sonnet 4.6 for repo-level edits. I route to Gemini 3.5 Flash for:

- MCP-heavy planning subtasks (10-100 tool calls)
- Parallel sub-agent fan-out (cached input at $0.15/1M makes this economical)
- Cheap intermediate steps inside a larger agent loop

Three mechanisms work without rewriting the agent stack: OpenRouter as a proxy, a thin custom MCP server wrapping `generate_content`, or Antigravity CLI for hybrid teams.

**Where it doesn't help**

128k+ retrieval regressed 7.6 pts vs Gemini 3.1 Pro. ARC-style abstract reasoning lost 5 pts to prior Pro and 12.5 to GPT-5.5. No Computer Use yet. Knowledge cutoff January 2025. TPU 503 hiccups reported in week one.

Full guide with the benchmark table, a 40-line Python MCP agent using the google-genai SDK with `thinking_level="low"`, three routing mechanisms, and seven honest limitations: https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide

Curious what others are doing - single-model stacks, or routing across vendors per task type?
