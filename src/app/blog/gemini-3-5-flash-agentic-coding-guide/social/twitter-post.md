# Twitter/X Long-form Post - Gemini 3.5 Flash for Agentic Coding

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py gemini-3-5-flash-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Gemini 3.5 Flash beats Gemini 3.1 Pro on 11 of 15 agent benchmarks. At $1.50/$9 per 1M tokens.

The headline writes itself. The routing question is what nobody is answering for Claude Code users.

I wrote that piece.

THE BENCHMARKS THAT MATTER

- Terminal-Bench 2.1: 76.2% (vs 70.3% on 3.1 Pro)
- MCP Atlas: 83.6% (beats Claude Opus 4.7 by 4.5 pts, GPT-5.5 by 8.3 pts)
- GDPval-AA Elo: 1656 (3.1 Pro: 1314)
- SWE-Bench Pro: 55.1% (Opus 4.7 still leads at 64.3%)

MCP Atlas predicts tool-call reliability across multi-step agents. That score is the load-bearing number for anyone running an MCP stack.

THE PRICING TRAP

$1.50 input looks cheap. Per task it isn't.

Simon Willison's analysis cites Artificial Analysis benchmark costs: $1,551.60 on Gemini 3.5 Flash vs $892.28 on Gemini 3.1 Pro. NxCode reports 9x the cost of gemini-3-flash on equivalent eval workloads ($1,552 vs $278).

Thinking tokens persist across turns. Agent loops chew more output. Cheaper per token, more expensive per workload.

THE THINKING_LEVEL DEFAULT TRAP

Google changed thinking_budget (int) to thinking_level (enum) and silently dropped the default from high to medium. Copy-pasted code from gemini-3-flash-preview keeps running but produces dumber outputs.

For agentic coding with MCP tools, set thinking_level="low" explicitly. Google retuned low for tool-calling. It is faster, cheaper, and on coding benchmarks roughly equivalent to medium.

Drop temperature, top_p, top_k from your config. They are silently ignored.

THE ROUTING RULE

I keep Claude Code with Sonnet 4.6 as the editor for anything that touches the repo. I route to Gemini 3.5 Flash for:

- MCP-heavy planning that fans out 10-100 tool calls
- Long-running background tasks (log triage, doc gen, cron agents)
- Cheap intermediate planning where Sonnet 4.6 is overkill
- Parallel sub-agent fan-out (cached input at $0.15/1M makes this viable)

Three ways to do it:
1. OpenRouter proxy
2. A thin custom MCP server wrapping generate_content
3. Antigravity CLI (Flash is the default model)

WHERE FLASH IS THE WRONG ANSWER

- Multi-file refactors in real repos (Sonnet 4.6 still leads SWE-Bench Verified)
- ARC-style reasoning (Flash gives up 5 pts vs prior Pro, 12.5 pts to GPT-5.5)
- 128k+ retrieval (regressed 7.6 pts vs 3.1 Pro)
- Defensive code review (Anthropic models add error handling more naturally)

ONE MORE THING

GitHub Copilot launched Gemini 3.5 Flash with a 14x premium-request multiplier. A 300-request Copilot Pro quota becomes ~21 Flash calls before overage. Raw API plus OpenRouter is almost always cheaper.

Full guide: benchmarks tables, before/after Python diff, the 40-line MCP agent, three routing mechanisms, and seven honest limitations:

https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide

Follow @avi_sangle for more cross-vendor Claude Code workflows.
