# LinkedIn Post - Kimi K3 for Agentic Coding

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py kimi-k3-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Moonshot AI released Kimi K3 three days ago, and the interesting part for me isn't the leaderboard headline. It's that I can run it inside Claude Code without changing my workflow.

K3 is a 2.8 trillion-parameter open-weight model. It debuted #3 on Artificial Analysis overall and took #1 on Frontend Code Arena, ahead of Claude Fable 5 and GPT-5.6 Sol. Open weights land July 27.

For a Claude Code user, that changes the routing math, not the tool. Here's what stood out after setting it up:

- One environment block repoints Claude Code at Moonshot's Anthropic-compatible endpoint. No wrapper, no new CLI.
- Pricing is $3/$15 per 1M tokens, dropping to $0.30/M on cached input. On long, cache-heavy agent loops that lands near a third of Claude's token price.
- Two setup traps: you have to set the Haiku model override too (background jobs fail otherwise), and remove any existing ANTHROPIC_API_KEY or it conflicts with the auth token.
- It also ships a native Kimi Code CLI whose /init generates an AGENTS.md file, the direct analog of CLAUDE.md.

It's not a clean win. K3 runs at max reasoning effort by default, so it's slow and verbose, and cheaper per token doesn't always mean cheaper per finished task. You can't self-host it either, the 2.8T weights need a multi-GPU server, not a laptop.

My take: use K3 as a cost lever for bulk, frontend-heavy, and long-running jobs, and keep Claude for interactive latency-sensitive edits. A hybrid stack beats a switch.

I wrote the full setup, pricing math, benchmarks, and an honest verdict here:

https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide

Are you mixing cheaper models into your Claude Code stack yet, or keeping it single-vendor?

#ClaudeCode #AgenticCoding #KimiK3 #AIEngineering #OpenWeights
