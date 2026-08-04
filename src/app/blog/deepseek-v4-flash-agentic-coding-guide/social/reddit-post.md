# Reddit Posts - DeepSeek V4 Flash for Claude Code

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py deepseek-v4-flash-agentic-coding-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

> **Flair warning:** `list_reddit_flairs.py` returned HTTP 401 for both subs at
> draft time, so these flair values are names taken from the registry and from
> past successful posts in `POSTED.md`, not verified IDs. `Claude Code` is the
> flair that worked for r/ClaudeAI on 2026-04-26 (`Tutorial` was rejected as
> invalid). Re-run `python scripts/list_reddit_flairs.py <sub>` once the Reddit
> credentials are fixed, and expect a flair validation error otherwise.

---POST---
SUBREDDIT: ClaudeAI
TITLE: DeepSeek's own Claude Code config tells you not to put V4 Flash in the main loop
FLAIR: Claude Code
---BODY---
DeepSeek shipped V4 Flash 0731 on July 31 with an Anthropic-compatible endpoint, so you can repoint Claude Code at it with four environment variables. I went through the benchmarks and their official setup docs before deciding whether that's worth doing.

The thing nobody seems to have noticed: **DeepSeek's own recommended Claude Code config does not put Flash in the main loop.**

Their documented setup maps `ANTHROPIC_DEFAULT_OPUS_MODEL` and `ANTHROPIC_DEFAULT_SONNET_MODEL` to `deepseek-v4-pro`, and only gives `deepseek-v4-flash` the Haiku slot plus `CLAUDE_CODE_SUBAGENT_MODEL`. Community reports put the resulting spend split near 85% Pro / 15% Flash.

That mapping matches the benchmark shape exactly.

**Where Flash wins** (against GPT-5.6 Terra, both self-reported):
- Terminal Bench 2.1: 82.7 vs 78.4
- Toolathlon: 70.3 vs 53.1

**Where it falls apart:**
- DeepSWE: 54.4 vs 69.6
- Agents' Last Exam: 25.2 vs 50.4

Short-horizon tool use, strong. Long-horizon autonomous work, not close. **Flash executes, it doesn't plan.**

Against Claude specifically, Flash trails Opus 4.8 on **every single row** of DeepSeek's own table. Terminal Bench 82.7 vs 85.0 is close. NL2Repo 54.2 vs 69.7 is not. So the pitch was never parity, it's most of the capability on tool-shaped work at roughly 2% of the token price ($0.14/$0.28 per 1M against $5/$25).

Two things worth knowing before you swap the endpoint:

**Claude Code's `/cost` will lie to you.** It prices tokens at Anthropic's rates, so pointed at DeepSeek it reports numbers wrong by about two orders of magnitude. Read the DeepSeek dashboard instead.

**The harness is tuned for Anthropic models.** The compatibility layer translates the wire format, not the prompt engineering. Someone on HN reported it underperforming inside Claude Code while praising the same model in a product where he wrote the prompts himself. Both can be true.

Also: no training opt-out on the hosted API, which rules it out for NDA work unless you self-host the MIT weights.

Full write-up with the env block, the complete benchmark table, and the cost math: https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide

Happy to answer questions if you've tried the swap yourself.

---POST---
SUBREDDIT: LocalLLaMA
TITLE: V4 Flash 0731 gained 47 points on DeepSWE from post-training alone
FLAIR: Discussion
---BODY---
DeepSeek released the 0731 build on July 31 under MIT. What makes it interesting isn't the scores, it's that **the architecture didn't change at all**: same 284B MoE, same 13B active per token, same 1M context as the April preview. No new pretraining.

The deltas on identical weights:
- DeepSWE: **7.3 -> 54.4**
- Terminal Bench 2.1: **61.8 -> 82.7**
- Toolathlon-Verified: **49.7 -> 70.3**
- Cybergym: **38.7 -> 76.7**

A preview model scoring 7.3 on DeepSWE was effectively unusable for repo work. At 54.4 it's in the conversation. That's all post-training: strategy, planning, error-checking, recovery.

**The part I think deserves more scrutiny.** DeepSeek ran its own evaluation setup. The model card says V4-Flash "natively supports the Responses API format and is specifically adapted for Codex", so the cross-vendor rows aren't same-harness. And as of Aug 4 there is still **no DeepSeek entry on the public Terminal-Bench 2.1 leaderboard** at tbench.ai, which is currently led by Claude Code + Fable 5 at 83.8%, Codex + GPT-5.5 at 83.1%, and Claude Code + Opus 4.8 at 78.9%.

Artificial Analysis measured slightly below DeepSeek's reported figures and still put it at **index 50, #3 of 101 models** against a median of 25, at 122.7 tok/s and 1.31s TTFT. That's a strong independent result and it isn't the vendor table.

My rule reading this: trust the model-against-itself rows completely (same weights, same setup, one variable), treat cross-vendor rows as directional until someone runs a same-harness comparison.

**Local numbers**, since that's the reason to care about MIT weights. 284B total but only 13B active makes this a memory problem, not a compute problem. Reported: 2x DGX Spark at roughly 60 tok/s at full context for ~EUR 8,200. 2x RTX PRO 6000 for ~$20k and faster. Mac Studio M3 Ultra 256GB is slower and pricier at ~EUR 12,000. vLLM with `--speculative-config` or SGLang with `--speculative-algorithm DSPARK` using the attached draft module.

Honest take though: at $0.14/$0.28 per 1M on the API, self-hosting this is a data-residency and no-training decision, not a cost optimization. There's no training opt-out on the hosted API, which is the actual argument for running it yourself.

Full benchmark table, the claimed-vs-verified section, and the serving commands: https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide

Curious whether anyone here has run 0731 locally yet and what throughput you're seeing.
