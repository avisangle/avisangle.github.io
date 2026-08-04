# Dev.to + Hashnode Cross-post - DeepSeek V4 Flash for Claude Code

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py deepseek-v4-flash-agentic-coding-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py deepseek-v4-flash-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: DeepSeek V4 Flash for Claude Code: Setup, Routing, and Real Costs
DESCRIPTION: DeepSeek V4 Flash 0731 costs $0.14/$0.28 per 1M tokens and speaks the Anthropic API. How to route Claude Code work to it, and when not to.
TAGS: ai, deepseek, claudecode, llm
CANONICAL_URL: https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide
COVER_IMAGE: https://avinashsangle.com/og-deepseek-v4-flash-agentic-coding-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide).

DeepSeek V4 Flash 0731, released July 31, 2026, is a 284B Mixture-of-Experts model with 13B active parameters that costs $0.14 input and $0.28 output per 1M tokens. It speaks the Anthropic API, so Claude Code can point at it with four environment variables. It wins on short-horizon tool use and loses on long-horizon agent work.

## TL;DR

- **Post-training only:** same 284B architecture as the April preview, no new pretraining. DeepSWE went from 7.3 to 54.4 and Terminal Bench 2.1 from 61.8 to 82.7 on identical weights.
- **It beat its own flagship:** Flash outscores V4-Pro-Preview on all nine published agent benchmarks, which is why the release took two Hacker News front pages in three days.
- **The price is real:** $0.14/$0.28 per 1M tokens, and $0.0028 on cache hits. Artificial Analysis ran its full Intelligence Index suite for $72.02 and scored it 50, third of 101 models.
- **Route carefully:** Flash beats GPT-5.6 Terra on Terminal Bench and Toolathlon, then loses Agents' Last Exam 25.2 to 50.4. It executes well. It doesn't plan.
- **My take:** put it on search, grep, and subagent fan-out inside a stack you already trust. Keep Claude on the code that ships.

## What Changed on July 31, 2026

DeepSeek shipped `DeepSeek-V4-Flash-0731` on July 31, 2026, graduating Flash from preview to public beta and releasing the weights under the MIT license the same week. The interesting part isn't the release itself. It's that nothing about the model got bigger. Same 284B-parameter Mixture-of-Experts architecture, same 13B active parameters per token, same 1M-token context. Every gain came from a new post-training run.

That distinction matters more than the headline numbers. Post-training is the step that teaches a model strategy, planning, error-checking, and recovery - the behaviours an agent needs when a tool call fails and it has to decide what to do next. DeepSeek moved DeepSWE from 7.3 to 54.4 without touching the weights' capacity, which is a different and more transferable result than "we trained something larger."

One number needs clearing up before the tables make sense. The [Hugging Face repo](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) reports 304B total parameters while every write-up says 284B. Both are right. The repo total includes the attached DSpark speculative-decoding draft module; the model itself is 284B with 13B active. If you're sizing hardware, 284B is the number that matters.

Housekeeping before you write any config: the model ID is `deepseek-v4-flash`. The older `deepseek-chat` and `deepseek-reasoner` aliases are retired, so any guide published before July 31 will hand you a dead model name alongside stale benchmark numbers.

## The Benchmarks: Where Flash Beats Pro

The story that carried this release is that the cheap model beat the expensive one. Flash-0731 outscores DeepSeek's own V4-Pro-Preview on all nine published agent benchmarks. Here is the full table from the model card, with DeepSeek's own comparison columns intact.

| Benchmark | Flash 0731 | Flash Preview | V4-Pro-Preview | GLM-5.2 | Claude Opus 4.8 |
|---|---|---|---|---|---|
| Terminal Bench 2.1 | 82.7 | 61.8 | 72.1 | 81.0 | 85.0 |
| DeepSWE | 54.4 | 7.3 | 12.8 | 46.2 | 58.0 |
| Cybergym | 76.7 | 38.7 | 52.7 | n/a | 83.1 |
| Toolathlon-Verified | 70.3 | 49.7 | 55.9 | 59.9 | 76.2 |
| NL2Repo | 54.2 | 39.4 | 38.5 | 48.9 | 69.7 |
| DSBench-FullStack | 68.7 | 37.0 | 41.8 | 61.8 | 71.6 |
| DSBench-Hard | 59.6 | 25.8 | 31.1 | 54.5 | 71.7 |
| AutomationBench | 25.1 | 10.8 | 12.8 | 12.9 | 27.2 |
| Agents' Last Exam | 25.2 | 15.8 | 16.5 | 23.8 | 25.7 |

The DeepSWE row is the one worth staring at. A jump from 7.3 to 54.4 on the same weights is roughly sevenfold, and DeepSWE measures end-to-end software engineering against real repositories. A preview model scoring 7.3 was effectively unusable for that work. At 54.4 it is in the conversation.

Now read the Opus column honestly, because most coverage skipped it. Flash trails Claude Opus 4.8 on every single benchmark in DeepSeek's own table. It's close on Terminal Bench (82.7 against 85.0) and near-identical on Agents' Last Exam (25.2 against 25.7). It's 15 points behind on NL2Repo and 12 behind on DSBench-Hard. So the pitch was never "as good as Opus." The pitch is 70 to 90 percent of Opus on tool-shaped work at roughly two percent of the price, and that ratio is interesting enough without inflating it.

## What the Benchmarks Don't Show

Everything in the table above is DeepSeek reporting on DeepSeek. That doesn't make it wrong, but it changes which rows you can lean on. Three caveats are worth carrying into any decision.

**DeepSeek ran its own harness.** The model card notes that the official V4-Flash "natively supports the Responses API format and is specifically adapted for Codex," which means the cross-vendor comparisons aren't same-harness. Commenters on the [launch thread](https://news.ycombinator.com/item?id=49119559) caught this within hours and flagged that somebody will eventually produce a same-harness run.

**It is not on the public leaderboard.** I checked the [Terminal-Bench 2.1 leaderboard](https://www.tbench.ai/leaderboard/terminal-bench/2.1) on August 4 and there is no DeepSeek entry at all. The board is led by Claude Code with Fable 5 at 83.8 percent, Codex with GPT-5.5 at 83.1, Claude Code with Opus 4.8 at 78.9, and Codex with GPT-5.6 Terra at 78.4. Until a submission lands, 82.7 is a vendor number sitting next to a set of independently reproduced ones.

**Independent scoring exists and is slightly lower.** [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-flash) measured somewhat below DeepSeek's reported figures on its own suite, and still put the model at 50 on its Intelligence Index, ranking third out of 101 models against a median of 25. That is a strong independent result, and it is not the same as the vendor table.

The practical rule I'd take from this: trust the model-against-itself rows completely and treat the cross-vendor rows as directional. Flash-0731 against Flash-Preview is airtight - same weights, same harness, same evaluator, one variable changed. The Opus and GPT columns are two different harnesses being compared through a single lab's reporting. A useful framing surfaced in that HN thread is that harness quality is now part of the model, and the future is paired model-and-harness releases rather than plain weight dumps.

## How to Use DeepSeek V4 Flash in Claude Code

DeepSeek runs an Anthropic-compatible endpoint that translates Anthropic message format, tool calls, and streaming into DeepSeek-native execution. You keep the Claude Code CLI you already use and repoint it. The official config lives in [DeepSeek's coding-agents guide](https://api-docs.deepseek.com/guides/coding_agents/), and it looks like this.

```bash
# Point Claude Code at DeepSeek's Anthropic-compatible endpoint
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="YOUR_DEEPSEEK_API_KEY"

# The main loop runs on Pro
export ANTHROPIC_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro"

# Flash takes the cheap tier: background jobs and subagents
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_EFFORT_LEVEL="max"
```

Read that mapping again, because it is the whole argument of this post. DeepSeek's own recommended configuration does not put Flash in the main loop. Opus and Sonnet slots both get **Pro**. Flash gets the Haiku slot and the subagents. The vendor is telling you where its own model belongs, and it lines up exactly with the benchmark shape: Flash for file search, grep, title generation, and parallel fan-out; Pro for the code that ships. Community reports around the setup guides put the resulting spend split near 85 percent Pro and 15 percent Flash.

Two details that will bite you. Paste the DeepSeek key raw, with no `Bearer` prefix. And clear `ANTHROPIC_API_KEY` before launching, because when both it and `ANTHROPIC_AUTH_TOKEN` are set, Claude Code can pick the wrong credential and hand you an auth error that reads like a bad key.

```bash
unset ANTHROPIC_API_KEY   # avoid a credential conflict
claude                    # launch Claude Code
# then inside the session:
/status                   # base URL should show deepseek, model deepseek-v4-pro
```

If you want the OpenAI-shaped path instead - for Cline, Roo Code, OpenCode, or your own script - the base URL is `https://api.deepseek.com` with the same model IDs. The [Anthropic API compatibility page](https://api-docs.deepseek.com/guides/anthropic_api/) documents full or partial support for `max_tokens`, `system`, `stream`, `temperature`, `top_p`, tool definitions, and thinking config. The model card recommends `temperature 1.0` with `top_p 0.95` for agentic work, and `reasoning_effort` accepts `low`, `high`, or `max`.

### The honest caveat, up front

A developer on the [August 3 analysis thread](https://news.ycombinator.com/item?id=49120299) reported plainly that he tried DeepSeek with Claude Code and it underperformed - while separately praising the same model inside a product where he writes the prompts himself. Both can be true, and the gap between them is the actual finding. The compatibility layer translates the wire format, not the prompt engineering. Claude Code's harness, its system prompts, and its tool descriptions were all tuned against Anthropic models. Swapping the endpoint is possible. It isn't free.

## Pricing: Cheap Per Token, Cheap Per Task

I've written before about cheap models that are only cheap per token and turn expensive per task. This one holds up on both, which is rare enough to say plainly.

| Model | Input ($/1M) | Output ($/1M) | Cached input ($/1M) |
|---|---|---|---|
| DeepSeek V4 Flash | $0.14 | $0.28 | $0.0028 |
| DeepSeek V4 Pro | $0.435 | $0.87 | $0.0036 |
| Claude Haiku 4.5 | $1.00 | $5.00 | - |
| Claude Sonnet 5 | $3.00 | $15.00 | $0.30 |
| Claude Opus 5 / 4.8 | $5.00 | $25.00 | $0.50 |

Blend those at a three-to-one input-to-output mix, which is roughly what an agent loop looks like, and Flash lands near $0.175 per 1M against Opus 4.8's $10. Call it 57 times cheaper, with the mix stated so you can redo the math for your own workload. A naive one-to-one blend gives you 71 times, which is why bare multiples in launch coverage are worth ignoring.

Cost per task is the number that actually decides routing, and there is an independent one. Artificial Analysis puts Flash at max effort around $0.03 per task at index 50, against OpenAI Luna at $0.03, $0.04 and $0.07 for index 46, 49 and 51. Comparable intelligence at two to three times lower cost, and two to five times slower inference. The blunt summary from the thread is the right one: it's cheaper if you don't value your time.

The sleeper number is cache-hit input at $0.0028 per 1M, a 98 percent discount that Artificial Analysis ranks first across all models. If you're running an agent loop that resends a large stable prefix every turn, that's where your real saving lives, not in the headline input price.

Two costs nobody is writing about. First, verbosity: Artificial Analysis flags Flash as very verbose, burning 210M output tokens during evaluation against a 100M median. Output costs double the input rate, so a model that talks twice as much eats part of its own advantage. Second, and more consequential, [DeepSeek's pricing page](https://api-docs.deepseek.com/quick_start/pricing) announces a peak/off-peak policy charging **2x** during 09:00-12:00 and 14:00-18:00 Beijing Time, with the effective date still pending. From India that's roughly 06:30-09:30 and 11:30-15:30 IST, squarely inside a working day. Build the multiplier into any projection now rather than discovering it in a bill.

One more spec that matters for routing: Flash allows 2,500 concurrent requests against Pro's 500. If your plan involves fanning out parallel subagents rather than running one long session, that ceiling is the reason Flash belongs in the subagent slot.

## When to Route to Flash and When Not To

The benchmark table has a shape, and once you see it the routing decision writes itself. Benchmarks that measure "call tools correctly across a handful of steps" are where Flash wins. Benchmarks that measure "stay coherent across a long autonomous run" are where it falls apart. Here are both vendors' self-reported numbers side by side.

| Benchmark | V4 Flash 0731 | GPT-5.6 Terra | What it measures |
|---|---|---|---|
| Terminal Bench 2.1 | 82.7 | 78.4 | Short-horizon terminal tool use |
| Toolathlon | 70.3 | 53.1 | Multi-tool orchestration |
| DeepSWE | 54.4 | 69.6 | Real repository engineering |
| Agents' Last Exam | 25.2 | 50.4 | Long-horizon agentic reasoning |

Flash executes. It doesn't plan. Give it the step, not the goal. That single sentence turns the table into a routing rule, and every recommendation below follows from it.

| Task | Route to | Why |
|---|---|---|
| Search, grep, file discovery, title generation | V4 Flash | Pure tool dispatch, 70.3 Toolathlon, $0.14 input |
| Parallel subagent fan-out | V4 Flash | 2,500 concurrent ceiling, negligible per-call cost |
| Log triage, lint fixes, mechanical refactors | V4 Flash | Well-specified and short; cheap to re-run on failure |
| Multi-file feature work in a real repo | Claude Code | Flash gives up 15 points on both DeepSWE and NL2Repo |
| Overnight autonomous runs | Claude Code | Agents' Last Exam 25.2 against 50.4; coherence drops |
| Anything where a missed defensive check is expensive | Claude Code | Cheaper models need more correcting, and that time is real |
| High-volume product features you prompt yourself | V4 Flash | The one place practitioners consistently report it shining |

Notice that this is the same conclusion DeepSeek's own Claude Code config already encodes. Pro in the Opus and Sonnet slots, Flash in Haiku and subagents. When the vendor's defaults agree with the benchmark shape and with independent measurement, that's about as much corroboration as you get before running it yourself.

## Can You Run DeepSeek V4 Flash Locally?

Yes, and the active-parameter count is why. You need memory for 284B parameters but compute for only the 13B active per token, which is a very different hardware problem from a dense model of the same size. The weights are MIT-licensed and downloadable, so there's no license friction for commercial use either.

The model card documents vLLM with `--speculative-config` and SGLang with `--speculative-algorithm DSPARK`, using the DSpark draft module that ships attached to the weights. A representative SGLang launch looks like this.

```bash
python -m sglang.launch_server \
  --model-path deepseek-ai/DeepSeek-V4-Flash-0731 \
  --tp 4 \
  --moe-runner-backend flashinfer_mxfp4 \
  --speculative-algorithm DSPARK
```

Real numbers reported by people who actually did it: two NVIDIA DGX Sparks run it at roughly 60 tokens per second at full context for around 8,200 euros. Two RTX PRO 6000s in a workstation get you faster for about $20,000. A Mac Studio M3 Ultra with 256GB is both slower and more expensive at around 12,000 euros. Quantized GGUF builds exist for people who want to try it on less.

The honest conclusion is the one from that same thread: even for mid-level projects the API is orders of magnitude cheaper, because you skip the setup and the maintenance. At $0.14 per 1M input tokens you can burn an enormous amount of inference before 8,200 euros of hardware breaks even. Local makes sense for data residency, for a hard no-training guarantee, and for air-gapped work. It doesn't make sense as a cost optimization.

## Limitations and Gotchas

Every recap I read skipped this section, so here it is with sources attached.

- **No training opt-out.** Raised directly in the launch discussion and unanswered. For client work under an NDA that's a blocker, not a preference. Self-hosting the MIT weights is the only workaround.
- **No multimodal.** Text only, which rules it out for screenshot-driven or document-heavy agent work.
- **Vendor-harness benchmarks.** Still absent from the public Terminal-Bench leaderboard as of August 4.
- **Very verbose.** 210M output tokens in the Artificial Analysis eval against a 100M median, on a model where output costs double the input rate.
- **Slower than the frontier.** 122.7 tokens per second and 1.31 seconds to first token. Fine for background work, noticeable in an interactive loop.
- **Peak-hour 2x pricing is announced but undated.** Plan for it before it lands.
- **The harness is tuned for Anthropic models.** Expect to re-tune your `CLAUDE.md` and subagent prompts, and expect the first session to feel worse than the benchmarks promised.

One more thing about cost visibility. Claude Code's `/cost` command prices tokens against Anthropic's rates, so pointed at DeepSeek it will report numbers that are wrong by roughly two orders of magnitude. Read usage from the DeepSeek platform dashboard, or pull token counts out of the session JSONL and apply DeepSeek's rates yourself. Don't trust the in-session figure after you've swapped the endpoint.

## Frequently Asked Questions

### How much does DeepSeek V4 Flash cost per 1M tokens?

DeepSeek charges $0.14 per 1M input tokens on a cache miss, $0.0028 on a cache hit, and $0.28 per 1M output tokens. V4 Pro costs roughly three times more at $0.435 input and $0.87 output. A peak-hour policy charging 2x has been announced but has no effective date yet.

### How do I configure Claude Code to use DeepSeek V4 Flash?

Set `ANTHROPIC_BASE_URL` to `https://api.deepseek.com/anthropic`, put your DeepSeek key in `ANTHROPIC_AUTH_TOKEN`, then map the model tiers. DeepSeek's own documented config puts `deepseek-v4-pro` in the Opus and Sonnet slots and `deepseek-v4-flash` in the Haiku slot and subagents.

### Is it possible to track the cost of a Claude Code session on DeepSeek?

Not through Claude Code's own `/cost` command, which prices tokens against Anthropic's rates and will report numbers that are wrong by roughly two orders of magnitude. Read usage from the DeepSeek platform dashboard instead, or parse token counts from the session JSONL and apply DeepSeek's rates yourself.

### Can DeepSeek V4 Flash run locally?

Yes. The weights are MIT-licensed on Hugging Face at 284B total parameters with 13B active per token. Two NVIDIA DGX Sparks run it at a reported 60 tokens per second for around 8,200 euros. At $0.14 per 1M input tokens, the API stays cheaper for a very long time.

### Is DeepSeek V4 Flash better than DeepSeek V4 Pro?

On agent benchmarks, yes. The 0731 build beats V4-Pro-Preview on all nine published agent benchmarks, including 82.7 against 72.1 on Terminal Bench 2.1 and 54.4 against 12.8 on DeepSWE. DeepSeek has said an updated Pro is coming, which will likely reverse this.

### How does DeepSeek V4 Flash compare to Claude on agent benchmarks?

It trails Claude Opus 4.8 on every benchmark in DeepSeek's own table. The gap is narrow on Terminal Bench (82.7 against 85.0) and wide on NL2Repo (54.2 against 69.7). The pitch is not parity, it is most of the capability on tool-shaped work at a fraction of the price.

### Does DeepSeek train on my API data?

There is no opt-out for training use on the hosted API, and this came up repeatedly in the launch discussion without a vendor response. For work under an NDA that is a blocker rather than a preference. Self-hosting the MIT-licensed weights is the only workaround today.

### What is the DeepSeek V4 Flash context window?

One million tokens, with a maximum output length of 384,000 tokens. The API supports 2,500 concurrent requests on Flash against 500 on Pro, which matters if you plan to fan out parallel subagents rather than run one long session.
