# Twitter/X Long-form Post - Kimi K3 for Agentic Coding

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py kimi-k3-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Moonshot dropped Kimi K3 three days ago: a 2.8 trillion-parameter open-weight model that took #1 on Frontend Code Arena, ahead of Claude Fable 5 and GPT-5.6 Sol.

You can run it for agentic coding without leaving Claude Code. Here's the practical setup.

THE DROP-IN

Claude Code speaks to any Anthropic-compatible endpoint. Point it at Moonshot and every model call routes to K3:

export ANTHROPIC_BASE_URL="https://api.moonshot.ai/anthropic"
export ANTHROPIC_AUTH_TOKEN="YOUR_MOONSHOT_KEY"
export ANTHROPIC_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_OPUS_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_SONNET_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="kimi-k3"

TWO GOTCHAS MOST GUIDES SKIP

- Set the HAIKU override too. Claude Code uses a small model for background jobs. Leave it unset and those calls try to reach real Anthropic and fail.
- Unset ANTHROPIC_API_KEY first. If it and ANTHROPIC_AUTH_TOKEN both exist, you get auth errors that look like a bad key.

Run /status to confirm the base URL shows moonshot and the model reads kimi-k3.

THE PRICE MATH

$3 / $15 per 1M tokens, but cached input drops to $0.30/M. On long agent loops where most of the context is cached, a turn works out near $0.08, roughly a third of Claude's token price.

THE HONEST CATCH

K3 runs at max reasoning effort by default. It's slow and verbose. Cheaper per token does not always mean cheaper per finished task. Measure your own workload.

CAN YOU RUN IT LOCAL?

Not on a desktop. 2.8T params give a ~1.4TB 4-bit weight floor. Moonshot recommends 64+ accelerators. Open weights land July 27 with a vLLM implementation.

Full guide: env setup, the native Kimi Code CLI, Cline/Roo config, benchmarks, and an honest hybrid verdict.

https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide

Follow @avi_sangle for more Claude Code deep-dives.
