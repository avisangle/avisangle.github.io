# Dev.to + Hashnode Cross-post - Gemini 4 Argon for Agentic Coding: When It Beats Opus 5.5

**Post date:** Day 14-21 (2026-11-03 to 2026-11-10). Lag the cross-post 2-3 weeks behind the
origin so dev.to does not outrank the canonical page. Post before Nov 30 while the intro
pricing in the article is still current.
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py gemini-4-argon-agentic-coding-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py gemini-4-argon-agentic-coding-guide --dry-run`
  (Hashnode publishes LIVE even with PUBLISHED: false)

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Gemini 4 Argon for Agentic Coding: When It Beats Opus 5.5
DESCRIPTION: Gemini 4 Argon costs $2/$10 until Nov 30, then the same as Opus 5.5. Where it wins on code, what thinking_level really costs, and a tested Claude Code setup.
TAGS: gemini, claudecode, ai, llm
CANONICAL_URL: https://avinashsangle.com/blog/gemini-4-argon-agentic-coding-guide
COVER_IMAGE: https://avinashsangle.com/og-gemini-4-argon-agentic-coding-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/gemini-4-argon-agentic-coding-guide).

Gemini 4 Argon is Google's frontier model, generally available since October 13, 2026. For agentic coding it leads on long-horizon tasks (77.9% DeepSWE v1.1) but trails Claude Opus 5.5 on terminal work (57.4% vs 66.4% Terminal-Bench 4.0). It costs $2/$10 per million tokens until November 30, then $4/$20, which matches Opus 5.5.

## TL;DR

- Argon is half Opus 5.5's per-token price until November 30. From December 1 it costs exactly the same.
- It writes a lot more output. In the one public real-repo test, Argon produced 2.8x Opus's output tokens and cost 1.26x more even at the intro price, while passing more runs (16 of 20 vs 13).
- `thinking_level` is the cost lever: low, medium or high, default medium, and no `minimal`. On my test task, high cost roughly 7-8x more than low for the same passing result.
- It runs inside Claude Code through LiteLLM, but only with `DISABLE_PROMPT_CACHING=1`. Without it every request fails with a 400.

## What is Gemini 4 Argon?

Gemini 4 Argon is Google DeepMind's top model, with the API ID `gemini-4-argon`. Google moved it from limited preview to general availability on October 13, 2026, across the Gemini API, AI Studio, the Antigravity desktop app and CLI, the Gemini app, and Gemini Enterprise ([Google's launch post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)).

The context window is 1,048,576 tokens, shared between input and output. That shared part matters. Thinking tokens, function calls and the answer all come out of the same pool. A single request caps output at 32,768 tokens without streaming and 65,536 with it, and a feature Google calls long decode hands back a `continuation_token` so the SDK can keep going past that cap ([Gemini API docs](https://ai.google.dev/gemini-api/docs/generate-content/latest-model)). The [model card](https://deepmind.google/models/model-cards/gemini-4-argon/) gives a knowledge cutoff of March 2026. Inputs can be text, images, video, audio or PDF. Output is text only.

Google's own coding claims are big, and they're Google's: a Chrome refactor across hundreds of files finished in weeks instead of months, agentic code submissions in Antigravity up more than 35%, and "shortcut attempts" down to 2%. Nobody outside Google can check those. The benchmarks below are at least on a shared scoreboard.

## Gemini 4 Argon coding benchmarks vs Claude Opus 5.5

Argon wins the long-horizon and long-context rows. Opus 5.5 wins terminal work and the harder software-engineering set. These numbers are all from Google's [model card](https://deepmind.google/models/model-cards/gemini-4-argon/), so read them as vendor-reported:

| Benchmark | Gemini 4 Argon | Claude Opus 5.5 | GPT-6 Astra | Claude Fable 5.1 |
|---|---|---|---|---|
| DeepSWE v1.1 | 77.9% | 74.2% | 74.1% | 67.4% |
| FrontierSWE v2 | 55.0% | 62.3% | 65.5% | 56.3% |
| Terminal-Bench 4.0 | 57.4% | 66.4% | 58.2% | 57.9% |
| Vibe Code Bench | 91.9% | 90.3% | 89.6% | 90.3% |
| CWE-bench v1 | 68.0% | 67.0% | 68.0% | 58.0% |
| GraphWalks 256k-1M (F1) | 84.2% | 66.8% | 71.8% | 65.0% |

The nine-point Terminal-Bench gap is the one I'd weigh most. That benchmark is closest to what Claude Code does all day: run a command, read the output, decide the next command. Argon is effectively tied with Fable 5.1 there. The GraphWalks gap points the other way. At 256k to 1M tokens, Argon keeps its footing (84.2%) while Opus drops to 66.8%, so for "read this whole service and tell me where X happens" Argon has a real edge.

Independent scores are less flattering. Artificial Analysis puts Argon at 53 on its Intelligence Index against 58 for Opus 5.5, and Argon sits 8th on Code Arena WebDev, according to a [DEV roundup](https://dev.to/max_quimby/gemini-4-argon-wins-12-of-18-benchmarks-code-isnt-one-2h70). That same roundup quotes a different Astra Terminal-Bench number (62.1%) from the model card, so I've kept the model card's figures in the table.

### The one real-repo test so far

The most useful data point isn't a benchmark. [paddo.dev](https://paddo.dev/blog/gemini-4-argon/) replayed six merged changes from a production monorepo (11 to 26 files each) against Argon, Opus 5.5, Sonnet 5.5 and GPT-6.1 Sol, 20 runs per model, graded by the tests that shipped with the original fix. Argon ran inside Claude Code via OpenRouter.

| 20 runs each | Argon | Opus 5.5 | Sonnet 5.5 | GPT-6.1 Sol |
|---|---|---|---|---|
| Runs passing every test | 16 | 13 | 11 | 11 |
| Runs breaking a passing test | 0 | 0 | 0 | 5 |
| Output tokens | 1.37M | 495k | 247k | 167k |
| Cost at list price | $57.68 | $45.81 | $11.76 | $6.73 |

So on real code, the vendor ranking reversed: Argon passed more runs than Opus. It also took about 2.2x as long on the change both were timed on (991 seconds per run vs 455). One codebase and small samples, as the author says. Still, "more accurate, slower and wordier" is a more useful summary than any table above.

## Gemini 4 Argon pricing and the November 30 price cliff

Argon costs $2 per million input tokens and $10 per million output tokens through November 30, 2026, then doubles. Output includes thinking tokens. There is no free tier and no explicit caching, only implicit caching on prompts of 4,096 tokens or more ([Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)).

| Per 1M tokens | Through Nov 30 | From Dec 1 |
|---|---|---|
| Input | $2.00 | $4.00 |
| Output (incl. thinking) | $10.00 | $20.00 |
| Cached input (implicit) | $0.10 | $0.20 |
| Batch input / output | $1.00 / $5.00 | $2.00 / $10.00 |

Now put the Anthropic list next to it ([Claude pricing](https://claude.com/pricing)). Opus 5.5 is $4/$20. Sonnet 5.5 is $2/$10. Fable 5.1 is $10/$50, and third-party trackers list GPT-6 Astra at the same $10/$50 (I couldn't load OpenAI's own page to confirm). Most launch coverage repeats "half the price of Opus." That's true for six weeks. On December 1 Argon lands at exactly Opus 5.5's per-token price, and during the intro window it costs the same as Sonnet 5.5.

The per-token price was never the whole story anyway, because Argon writes more. In the paddo.dev runs above, Argon cost 1.26x Opus at the intro price, and the author estimates about $115 for the same 20 runs after the increase, roughly 2.5x Opus. The DEV roundup cites around 62,000 output tokens per task for Argon against 27,000 for Astra. If output volume drives your bill, the cliff makes Argon more expensive per fix than Opus, not equal.

What I'd do with the six weeks: run your own tasks on Argon now while they're cheap, record pass rate and output tokens per task, and multiply the output by $20/M. If it still beats Opus on pass rate for a task type, keep routing that type to Argon in December. If it only won on price, it stops winning on December 1.

## How to set thinking_level for coding

Argon takes `thinking_level` set to `low`, `medium` or `high`, and the default is medium. Google's advice is to evaluate all three with a high `max_output_tokens` and pick the lowest level that clears your quality bar. Since thinking is billed as output, that choice is most of your cost control.

Two details trip people coming from Gemini 3.5 Flash. First, Argon has no `minimal` level. I sent one straight to the API to check:

```bash
curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-argon:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{"role": "user", "parts": [{"text": "Reply with the word ok."}]}],
    "generationConfig": {
      "maxOutputTokens": 256,
      "thinkingConfig": {"thinkingLevel": "minimal"}
    }
  }'
```

```json
{
  "error": {
    "code": 400,
    "message": "Thinking level MINIMAL is not supported for this model. Please retry with other thinking level.",
    "status": "INVALID_ARGUMENT"
  }
}
```

Second, the old numeric `thinkingBudget` still works. A couple of third-party guides say it returns HTTP 400 on Argon. It didn't for me: `{"thinkingBudget": 1024}` came back 200 with a normal answer and no warning header over REST. Google's docs say it maps to the nearest level with a warning, which the SDK may surface. Either way, switch to `thinking_level`, which is what Google's docs now recommend. Here's the shape from Google's quickstart, with low as my starting point for coding:

```python
# pip install -U "google-genai>=2.30.1"
from google import genai
from google.genai import types

client = genai.Client()  # reads GEMINI_API_KEY

response = client.models.generate_content(
    model="gemini-4-argon",
    contents="Refactor this function to remove the N+1 query: ...",
    config=types.GenerateContentConfig(
        max_output_tokens=65536,
        thinking_config=types.ThinkingConfig(thinking_level="low"),
    ),
)

print(response.text)
print(response.usage_metadata)  # check thoughts_token_count before raising the level
```

### What I measured across the three levels

I gave Argon one coding task six times, twice per level: write a `compare(a, b)` function that follows Semantic Versioning 2.0.0 precedence, including pre-release ordering and rejecting invalid versions. A 13-case pytest suite I wrote separately graded each answer. Same 204-token prompt every time, via the REST API on October 20:

| Level | Tests passed | Thinking tokens | Answer tokens | Cost per call | Wall time |
|---|---|---|---|---|---|
| low (run 1) | 13/13 | 0 | 544 | $0.006 | 25.7 s |
| low (run 2) | 13/13 | 0 | 554 | $0.006 | 6.1 s |
| medium (run 1) | 13/13 | 0 | 533 | $0.006 | 7.6 s |
| medium (run 2) | 13/13 | 0 | 759 | $0.008 | 10.7 s |
| high (run 1) | 13/13 | 4,272 | 610 | $0.049 | 56.1 s |
| high (run 2) | 13/13 | 3,472 | 448 | $0.040 | 101.8 s |

Every run passed. Low and medium reported no thinking tokens at all on this task, so the model decided it didn't need to think. High spent 3,472 to 4,272 thinking tokens, cost roughly 7-8x as much as low, took several times longer, and produced the same passing code. Costs are at the intro price. One task with six runs proves nothing about hard refactors, but it does show the thing worth checking on your own work: read `thoughts_token_count` in the usage metadata before you reach for high.

Latency was noisy in launch week. A one-word "ok" reply took 37 seconds at one point and 137 seconds at another. Google's own migration notes tell you to set HTTP timeouts to at least 20 minutes, and they also list the other changes from Gemini 3.x: sampling parameters like `temperature` are ignored, explicit caching calls error, and function-calling loops must send back the thought signatures from earlier turns. On hard tasks a request can spend its whole budget thinking and return empty text with a `continuation_token`. Google calls that normal. The current SDKs (Python 2.30.1+, JavaScript 2.29.1+) continue automatically.

## How to run Gemini 4 Argon inside Claude Code

Claude Code only speaks the Anthropic Messages API, and I didn't find an Anthropic-compatible endpoint from Google. So Argon needs a gateway in front of it that translates. I used [LiteLLM](https://docs.litellm.ai/docs/tutorials/claude_non_anthropic_models) (version 1.106.0) running locally with Claude Code 2.1.303. This is the config I tested, not a sketch.

```yaml
# litellm.yaml
model_list:
  - model_name: gemini-4-argon
    litellm_params:
      model: gemini/gemini-4-argon
      api_key: os.environ/GEMINI_API_KEY
```

```bash
# terminal 1: start the proxy
python3 -m venv .venv && source .venv/bin/activate
pip install 'litellm[proxy]'

export GEMINI_API_KEY="your-gemini-key"
export LITELLM_MASTER_KEY="sk-$(openssl rand -hex 16)"
litellm --config litellm.yaml --port 4000
```

The master key isn't optional anymore. Without it, LiteLLM 1.106 prints "proxy refused to start: no master key is set" and exits. Then point Claude Code at the proxy. The variable names come from Anthropic's [LLM gateway docs](https://code.claude.com/docs/en/llm-gateway-rollout), which also warn that some background sub-calls ask for built-in Claude model IDs regardless of your override. Setting every slot covers that.

```bash
# terminal 2: launch Claude Code
export ANTHROPIC_BASE_URL="http://localhost:4000"
export ANTHROPIC_AUTH_TOKEN="$LITELLM_MASTER_KEY"
export ANTHROPIC_API_KEY=""

# Every slot, including background calls, goes to Argon
export ANTHROPIC_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_OPUS_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_SONNET_MODEL="gemini-4-argon"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="gemini-4-argon"
export CLAUDE_CODE_SUBAGENT_MODEL="gemini-4-argon"

# Without this, Argon rejects every request (see below)
export DISABLE_PROMPT_CACHING=1

claude
```

### The caching error you'll hit first

My first run didn't include `DISABLE_PROMPT_CACHING`. It failed on the first request:

```text
API Error: 400 litellm.BadRequestError: GeminiException BadRequestError - {
  "error": {
    "code": 400,
    "message": "Explicit caching is not supported for models/gemini-4-argon.",
    "status": "INVALID_ARGUMENT"
  }
}
```

Here's the chain. Claude Code tags its system prompt and conversation with Anthropic `cache_control` breakpoints. LiteLLM translates those into Gemini explicit caching. Argon doesn't support explicit caching, so it rejects the whole request. `DISABLE_PROMPT_CACHING=1` stops Claude Code sending the markers. You don't lose caching: Gemini's implicit cache still kicks in on its own.

With that set, I gave headless Claude Code a small job in a scratch folder: fix a broken `add()` in `calc.py` and report the Next.js version in `package.json`. It finished in 6 turns and 75 seconds, made the right one-line edit, and answered correctly. The usage report showed 36,391 uncached input tokens, 83,880 cached input tokens and 2,465 output tokens. At the intro price that's about $0.11.

Two things in that report are wrong, and you should know which. Claude Code put the cost at $0.29, because it doesn't know Argon's prices (the model entry says `costBasis: "unknown"`). Use your gateway's spend log or the Google Cloud billing page instead, as I covered in [Claude Code cost tracking](https://avinashsangle.com/blog/claude-code-cost-tracking). It also listed the context window as 200,000 tokens, so Claude Code will compact long sessions long before Argon's 1M limit. OpenRouter's [Claude Code guide](https://openrouter.ai/docs/guides/guides/claude-code-integration) says a `[1m]` suffix on the model name lifts that assumption. I haven't tested that with LiteLLM.

If you'd rather use OpenRouter, the same guide sets `ANTHROPIC_BASE_URL=https://openrouter.ai/api`, your OpenRouter key in `ANTHROPIC_AUTH_TOKEN`, and an explicitly empty `ANTHROPIC_API_KEY`, with `google/gemini-4-argon` as the model. Watch the cache on the first run. paddo.dev saw one OpenRouter run cache only 59k of 8.4M input tokens ($17.60), because the way system messages were moved into Gemini's prompt broke the prefix match. A local proxy fixed it: same run, $2.62, 94% cache hits. In my LiteLLM run, 70% of input came from cache.

## Argon in Antigravity vs Claude Code

Antigravity is Google's own agent harness and the zero-setup way to use Argon, if your account qualifies. That part is unclear. Google's launch post lists Antigravity access for AI Ultra subscribers. The [Antigravity blog](https://antigravity.google/blog/gemini-4-argon-in-google-antigravity) says Pro and Ultra, plus eligible Gemini Enterprise plans. paddo.dev reports a Workspace account being refused. Check your own account before planning around it.

The harness itself drew most of the complaints in the [Hacker News launch thread](https://news.ycombinator.com/item?id=49913571) (1,705 points and 1,199 comments when I checked): no skills or subagents, weak permission controls, tool calls that hang, and forced compaction around 250k tokens. paddo.dev timed the same task at 1.75x slower in Antigravity than in Claude Code, with the same pass result in both. If you already live in Claude Code, the gateway route above keeps your hooks, skills and CLAUDE.md. My [Gemini CLI to Antigravity CLI guide](https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide) covers the `agy` side if you want both.

## When to route coding work to Argon vs Opus 5.5

Send Argon the work where its benchmark lead is large and the task tolerates a slow, wordy model. Keep Opus 5.5 on the tight loop. This is how I'd split it today:

| Task | Route to | Why |
|---|---|---|
| Reading a large codebase (256k+ tokens) | Argon | GraphWalks 256k-1M: 84.2% vs 66.8% |
| Long multi-file changes with a test suite | Argon (trial) | DeepSWE lead; 16 vs 13 full passes on paddo.dev |
| Terminal-heavy agent loops | Opus 5.5 | Terminal-Bench 4.0: 66.4% vs 57.4% |
| Screenshot-to-UI and layout work | Opus 5.5 | 0.831 vs 0.754 on paddo.dev's screenshot-to-HTML |
| Interactive, latency-sensitive sessions | Opus 5.5 | About 2x faster on the one change timed |
| Cheap bulk edits and subagent fan-out | Sonnet 5.5 | Same $2/$10 as Argon now, 5.5x fewer output tokens |

The date changes the math. Until November 30, Argon is worth a trial on any task in the first two rows, because it's cheap to be wrong. After December 1 it only earns a place where it beats Opus on pass rate, since it no longer beats it on price. For the Claude side of the routing setup, see [Claude Code model routing with Fable 5](https://avinashsangle.com/blog/claude-code-fable-5-model-routing). If you're comparing Google's cheaper tier, I measured the trade-offs in [Gemini 3.5 Flash for agentic coding](https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide).

## Frequently Asked Questions

### Is Gemini 4 Argon better than Claude Opus 5.5 for coding?

It depends on the task. Google's model card puts Argon ahead on DeepSWE v1.1 (77.9% vs 74.2%) and long-context reads, and behind on Terminal-Bench 4.0 (57.4% vs 66.4%) and FrontierSWE v2. One independent real-repo test had Argon passing more runs than Opus while costing more per fix.

### How much does Gemini 4 Argon cost, and what changes on December 1, 2026?

Through November 30, 2026 the Gemini API charges $2 per million input tokens and $10 per million output tokens, thinking included. From December 1 it is $4 and $20, which is the same per-token price as Claude Opus 5.5. Cached input is $0.10, rising to $0.20. There is no free tier.

### What thinking levels does Gemini 4 Argon support?

Low, medium and high, with medium as the default. Argon has no minimal level: I sent thinkingLevel minimal and got a 400 saying the level is not supported for this model. The older thinkingBudget field still returned a normal 200 response in my test, but Google recommends thinking_level instead.

### Can I use Gemini 4 Argon inside Claude Code?

Yes, through a gateway that speaks the Anthropic Messages API, such as LiteLLM or OpenRouter. I ran Claude Code 2.1.303 through a local LiteLLM proxy and it fixed a bug in six turns. You must set DISABLE_PROMPT_CACHING=1, or Argon rejects the request because it does not support explicit caching.

### Does Gemini 4 Argon have an Anthropic-compatible endpoint?

I didn't find one from Google. Claude Code needs the Anthropic Messages format, so you put a translating gateway in front of the Gemini API. LiteLLM serves /v1/messages and maps it to Gemini. OpenRouter documents a Claude Code setup using ANTHROPIC_BASE_URL set to https://openrouter.ai/api with an empty ANTHROPIC_API_KEY.

### Why does Claude Code fail with 'Explicit caching is not supported for models/gemini-4-argon'?

Claude Code marks its system prompt and history with Anthropic cache_control breakpoints. LiteLLM translates those into Gemini explicit caching, which Argon rejects. Set DISABLE_PROMPT_CACHING=1 before launching claude. Argon's implicit caching still works: in my run 83,880 input tokens were served from cache without any explicit markers.

### Who can use Gemini 4 Argon in Google Antigravity?

Sources disagree. Google's October 13 launch post lists Antigravity access for AI Ultra subscribers. The Antigravity blog says Pro and Ultra subscribers plus eligible Gemini Enterprise plans. One developer reported a Workspace account being refused. The Gemini API itself is open to any paid-tier key.

### When should I keep using Claude Opus 5.5 instead of Gemini 4 Argon?

Keep Opus for terminal-heavy agent loops, screenshot-to-UI work, and anything latency-sensitive. Opus leads Terminal-Bench 4.0 by nine points, scored higher on screenshot-to-HTML in paddo.dev's test, and finished runs roughly twice as fast. After December 1 Argon also loses its per-token price advantage.

---

*Originally published at [avinashsangle.com](https://avinashsangle.com/blog/gemini-4-argon-agentic-coding-guide). I write about Claude Code, AI coding agents and the costs behind them.*
