# Reddit Posts - Gemini 4 Argon for Agentic Coding: When It Beats Opus 5.5

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py gemini-4-argon-agentic-coding-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

Flair note: `list_reddit_flairs.py` returned a 401 on 2026-10-20 (same as 2026-10-06), so
flairs below are names, not looked-up IDs. "Claude Code" has worked on r/ClaudeAI before.
"Discussion" is the registry default for r/LLMDevs. If posting fails on flair, fix the
Reddit credentials and re-run `python scripts/list_reddit_flairs.py <sub>`.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Running Gemini 4 Argon inside Claude Code: every request fails until you set DISABLE_PROMPT_CACHING=1
FLAIR: Claude Code
---BODY---
I wanted to see how Gemini 4 Argon behaves as the model behind Claude Code, so I put a local LiteLLM proxy (1.106.0) in front of the Gemini API and pointed Claude Code 2.1.303 at it.

The first run failed on the very first request:

```
API Error: 400 litellm.BadRequestError: GeminiException BadRequestError -
"Explicit caching is not supported for models/gemini-4-argon."
```

**What's happening:** Claude Code tags its system prompt and history with Anthropic `cache_control` breakpoints. LiteLLM translates those into Gemini explicit caching, and Argon doesn't support explicit caching, so the whole request is rejected.

**The fix is one env var:** `DISABLE_PROMPT_CACHING=1`. You don't lose caching. Gemini's implicit cache still kicked in on its own: 83,880 of about 120k input tokens came from cache in my run.

With that set, headless Claude Code fixed a planted bug and answered a question about package.json in 6 turns and 75 seconds. The env I used:

```bash
export ANTHROPIC_BASE_URL="http://localhost:4000"
export ANTHROPIC_AUTH_TOKEN="$LITELLM_MASTER_KEY"
export ANTHROPIC_API_KEY=""
export ANTHROPIC_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_OPUS_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_SONNET_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="gemini-4-argon"
export CLAUDE_CODE_SUBAGENT_MODEL="gemini-4-argon"
export DISABLE_PROMPT_CACHING=1
```

Two more things I tripped over:

- **LiteLLM now refuses to start without a master key.** Set `LITELLM_MASTER_KEY` and use it as the auth token.
- **Claude Code's cost number is wrong for Argon.** It reported $0.29. Using Google's intro prices on the same token counts, it's about $0.11. The model entry shows `costBasis: "unknown"`. It also assumes a 200k context window, so it'll compact long before Argon's 1M.

**Is it worth it vs Opus 5.5?** Mixed. Google's card has Argon ahead on DeepSWE (77.9% vs 74.2%) and long context, behind on Terminal-Bench 4.0 (57.4% vs 66.4%). The one real-repo test I found had Argon passing more runs than Opus but writing 2.8x the output tokens. And the $2/$10 intro price becomes $4/$20 on December 1, the same as Opus.

I wrote up the full setup, a thinking_level cost test, and how I'd route tasks between the two here: https://avinashsangle.com/blog/gemini-4-argon-agentic-coding-guide

Happy to answer questions. Has anyone tried the OpenRouter route with Argon and checked their cache hit rate?

---POST---
SUBREDDIT: LLMDevs
TITLE: Gemini 4 Argon API notes: minimal thinking level is rejected, thinkingBudget still works, and high cost 7-8x more for the same code
FLAIR: Discussion
---BODY---
I've been testing Gemini 4 Argon (`gemini-4-argon`) against the raw REST API this week, partly because third-party guides disagree about the thinking parameters. Here's what the API actually did on 2026-10-20.

**`thinkingLevel: "minimal"` is rejected.** Argon only takes low, medium (default) and high:

```
400 INVALID_ARGUMENT: "Thinking level MINIMAL is not supported for this model.
Please retry with other thinking level."
```

If you're carrying over Gemini 3.5 Flash code that uses `minimal`, it breaks.

**`thinkingBudget` is not rejected.** A couple of guides say it returns 400 on Argon. `{"thinkingBudget": 1024}` came back 200 with a normal answer and no warning header over REST. Google's docs say it maps to the nearest level. Still, move to `thinking_level`.

**The level sweep.** One coding task (SemVer 2.0.0 precedence `compare(a, b)` with invalid-input handling), 6 runs, graded by a separate 13-case pytest suite:

| Level | Passed | Thinking tokens | Cost/call |
|---|---|---|---|
| low x2 | 13/13 | 0 | ~$0.006 |
| medium x2 | 13/13 | 0 | ~$0.006-0.008 |
| high x2 | 13/13 | 3,472-4,272 | ~$0.040-0.049 |

Low and medium decided not to think at all. High thought for 3-4k tokens and wrote the same passing code. Thinking is billed as output, so that's where the cost goes. One task proves nothing about hard refactors, but checking `thoughts_token_count` before raising the level seems worth doing.

**Other API behavior worth knowing:**

- **Explicit caching errors.** Only implicit caching is supported. This bites if you put an Anthropic-format gateway in front of it, because `cache_control` gets translated into explicit caching. In Claude Code via LiteLLM, `DISABLE_PROMPT_CACHING=1` fixed it.
- **Latency was noisy in launch week.** A one-word "ok" reply took 37 seconds once and 137 seconds another time. Google recommends HTTP timeouts of at least 20 minutes.
- **Output cap is 32,768 tokens non-streaming, 65,536 streaming**, with a `continuation_token` mechanism to keep going. Hard tasks can return empty text plus a token, which Google calls normal.
- **Pricing:** $2/$10 per 1M through Nov 30, then $4/$20. No free tier.

Full write-up with the benchmark split vs Opus 5.5 and the LiteLLM gateway config: https://avinashsangle.com/blog/gemini-4-argon-agentic-coding-guide

Happy to share the probe script if anyone wants to rerun the sweep on their own tasks.
