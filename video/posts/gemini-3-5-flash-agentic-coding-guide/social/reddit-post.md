**Suggested subreddit:** r/ClaudeAI (alt: r/AI_Agents)
**Title:** Gemini 3.5 Flash beats Opus 4.7 on tool calling — when it's worth routing agent tasks off Claude Code

---

Gemini 3.5 Flash went GA last week and I've been testing it for agent loops as a Claude Code user. Short version: it's not a Claude replacement, but for tool-heavy work it's hard to ignore.

On MCP Atlas (the benchmark for calling tools and chaining them together) it scores 83.6%, ahead of Claude Opus 4.7 at 79.1%. Pricing is $1.50 in / $9 out per million tokens — roughly a third of what an Opus agent loop costs me. So my rule now: route tool-heavy planning and research to Flash, keep the actual repo edits on Claude Code.

One trap worth knowing: Flash defaults to a high reasoning level on every call. If you copy the example straight from the docs and don't set it, thinking tokens persist across turns and inflate input cost 30–50% on a long loop. Set thinking_level to "low" for agent work and the cost lines up with the headline price.

Full writeup with the code: https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide
60s version: https://www.youtube.com/shorts/qVz1f8LXbYE
