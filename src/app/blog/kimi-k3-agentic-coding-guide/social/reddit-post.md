# Reddit Posts - Kimi K3 for Agentic Coding

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py kimi-k3-agentic-coding-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

NOTE (flair): `list_reddit_flairs.py` returned 401 at draft time, so the FLAIR
values below are name-based fallbacks from the subreddit registry, not verified
IDs. If posting fails on flair validation, run
`python scripts/list_reddit_flairs.py <sub>` and swap in a real ID.

NOTE (r/ChatGPTCoding): this sub has `requires_user_flair: true`. You must set
account-level user flair on the sub once (sidebar at
https://www.reddit.com/r/ChatGPTCoding/) or the post fails with
POST_GUIDANCE_VALIDATION_FAILED.

---POST---
SUBREDDIT: LocalLLaMA
TITLE: Kimi K3 is out (2.8T open-weight MoE, weights July 27) - benchmarks, local-run reality, and how I'm actually using it
FLAIR: Discussion
---BODY---
Moonshot released Kimi K3 on July 16. It's a **2.8 trillion-parameter Mixture-of-Experts** model (896 experts, 16 active per token), KDA hybrid linear attention, native vision, 1M-token context. Open weights are scheduled for **July 27**, and Moonshot says they're contributing a vLLM implementation alongside them (KDA breaks conventional prefix caching, so the serving support ships with the weights).

**Where it landed on benchmarks:**
- #3 on the overall Artificial Analysis index (behind Claude Fable 5 and GPT-5)
- #1 on Frontend Code Arena with 1679 points, ahead of Fable 5 and GPT-5.6 Sol
- Leads SWE Marathon and Program Bench, trails GPT-5.6 Sol on Terminal Bench 2.1 by 0.5 pt
- 67.5 on SWE-bench with its own KimiCode harness

**The local-run reality check, since that's what this sub actually cares about:** you can't run full K3 on a desktop. At 2.8T params the weight-only 4-bit planning floor is near 1.4TB before any KV cache, and Moonshot recommends supernodes with at least 64 accelerators. So realistic self-hosting once weights drop means a quantized multi-GPU server, not a single card. If your goal is genuinely local on owned hardware, a smaller open-weight model is still the honest pick.

Until weights land it's API-only through Moonshot's OpenAI-compatible endpoint (`https://api.moonshot.ai/v1`, model `kimi-k3`), which drops straight into Cline, Roo, or Aider. Pricing is $3/$15 per 1M tokens with cached input at $0.30/M.

One credibility caveat worth flagging for this crowd: K3 has been observed identifying itself as Anthropic's Claude in at least one conversation, which usually points to distilled training data. Doesn't change coding performance, but worth knowing.

I wrote up the full setup (including the Claude Code drop-in via the Anthropic-compatible path), pricing math, and an honest verdict here: https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide

Happy to answer questions, especially curious what people plan to run it on after the 27th.
---POST---
SUBREDDIT: ChatGPTCoding
TITLE: How to actually use Kimi K3 for agentic coding (Claude Code drop-in, Cline/Roo, pricing) after 3 days with it
FLAIR: Discussion
---BODY---
Kimi K3 launched July 16 and most of the coverage is either benchmark tables or news reactions. Here's the practical side for anyone who lives in an agentic coding tool.

**The fastest way to try it is inside Claude Code.** It speaks any Anthropic-compatible endpoint, so you repoint it at Moonshot with an env block:

```
export ANTHROPIC_BASE_URL="https://api.moonshot.ai/anthropic"
export ANTHROPIC_AUTH_TOKEN="YOUR_MOONSHOT_KEY"
export ANTHROPIC_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_OPUS_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_SONNET_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="kimi-k3"
```

**Two things that trip people up:**
- Set the **Haiku override** too. Claude Code uses a small model for background jobs (titles, summaries). Leave it unset and those calls try to reach real Anthropic and fail without an Anthropic key.
- **Unset ANTHROPIC_API_KEY** first. If both it and ANTHROPIC_AUTH_TOKEN are present, you get auth errors that look like a bad key.

Then `/status` should show the moonshot base URL and `kimi-k3`.

**For Cline, Roo, Aider,** it's the OpenAI-compatible endpoint instead: base URL `https://api.moonshot.ai/v1`, model `kimi-k3`. Same key works for both paths.

**Pricing/routing angle:** $3/$15 per 1M tokens, but cached input is $0.30/M. On long agent loops where most of the context is cached, a turn lands near $0.08, roughly a third of Claude's token price. The catch: K3 runs at max reasoning effort by default, so it's slow and verbose. Cheaper per token isn't always cheaper per finished task.

There's also a native Kimi Code CLI (open-source) whose `/init` generates an AGENTS.md, the direct analog of CLAUDE.md.

My honest verdict: use K3 as a cost lever for bulk and frontend-heavy work, keep Claude for interactive edits. Full write-up with benchmarks and the CLI setup: https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide

Happy to answer questions if anyone's wiring it into their setup.
