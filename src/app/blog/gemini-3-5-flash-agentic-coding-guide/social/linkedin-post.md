# LinkedIn Post - Gemini 3.5 Flash for Agentic Coding

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py gemini-3-5-flash-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Google shipped Gemini 3.5 Flash last week and the agent benchmarks tell an unusual story: a Flash-tier model is now beating the previous Pro tier on 11 of 15 published evals.

The routing question that matters for Claude Code users is what nobody else is answering. So I wrote it up.

What changed on May 19, 2026:

- Terminal-Bench 2.1: 76.2% (Gemini 3.1 Pro: 70.3%)
- MCP Atlas: 83.6% (beats Claude Opus 4.7 by 4.5 points)
- GDPval-AA Elo: 1656 vs 1314 on 3.1 Pro
- Pricing: $1.50 input, $9 output, $0.15 cached input per 1M tokens

The cheap framing is misleading though. Simon Willison flagged that Artificial Analysis spent $1,551 running their benchmark suite on Gemini 3.5 Flash versus $892 on Gemini 3.1 Pro. Cheaper per token, more expensive per workload, because thinking tokens persist across turns and agent loops chew more output.

There is also a silent default trap. Google changed the thinking parameter from an integer budget to a string enum and dropped the default from high to medium. Copy-pasted code from gemini-3-flash-preview keeps running but produces measurably worse outputs. For agentic coding with MCP tools, set thinking_level to low explicitly. Google retuned low for tool-calling and it is faster, cheaper, and roughly equivalent to medium on coding benchmarks.

My routing rule today: Claude Code with Sonnet 4.6 stays the editor for anything that touches the repo. Gemini 3.5 Flash handles MCP-heavy planning, parallel sub-agent fan-out, log triage, and cheap intermediate steps where Sonnet 4.6 would be overkill.

Where Flash is the wrong answer: multi-file refactors in real repos (Sonnet 4.6 still leads SWE-Bench Verified), ARC-style reasoning, and any retrieval beyond 128k tokens.

GitHub Copilot launched Flash with a 14x premium-request multiplier, so a 300-request Pro quota becomes about 21 Flash calls before overage. The raw API via OpenRouter is almost always cheaper.

Full guide with the benchmark tables, the before/after Python migration diff, a working 40-line MCP agent, and three concrete routing mechanisms:

https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide

Are you routing across vendors yet, or still picking a single model per stack?

#ClaudeCode #AIEngineering #MCP #GenerativeAI #AIAgents
