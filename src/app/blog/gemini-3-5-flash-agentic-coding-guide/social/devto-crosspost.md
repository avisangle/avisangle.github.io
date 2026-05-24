# Dev.to + Hashnode Cross-post - Gemini 3.5 Flash for Agentic Coding

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py gemini-3-5-flash-agentic-coding-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py gemini-3-5-flash-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide
DESCRIPTION: Gemini 3.5 Flash beats Gemini 3.1 Pro on 11 of 15 agent benchmarks at $1.50/$9 per 1M tokens. When to route tasks from Claude Code, the thinking_level trap, and a 40-line MCP agent.
TAGS: ai, claudecode, gemini, mcp
CANONICAL_URL: https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide
COVER_IMAGE: https://avinashsangle.com/og-gemini-3-5-flash-agentic-coding-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide).

Gemini 3.5 Flash is Google's new Flash-tier coding model, generally available since May 19, 2026. It scores 76.2% on Terminal-Bench 2.1 and 83.6% on MCP Atlas, beating Gemini 3.1 Pro on 11 of 15 benchmarks. Pricing is $1.50 input and $9 output per 1M tokens. For Claude Code users, it's the right model for tool-heavy agent loops, not a replacement for production code edits.

## TL;DR

- **What it is:** Gemini 3.5 Flash (GA May 19, 2026) is a Flash-tier model that outperforms Gemini 3.1 Pro on agentic benchmarks while costing 25% less per token than the Pro tier.
- **Pricing reality:** $1.50/$9 per 1M tokens looks cheap, but it's 3x the price of Gemini 3 Flash Preview and runs about 5.5x more expensive per full benchmark suite according to Artificial Analysis.
- **The thinking_level trap:** the default dropped from `high` to `medium`. Copy-pasted code from `gemini-3-flash-preview` silently produces dumber outputs. For agentic coding, set `thinking_level: "low"` explicitly.
- **Where Flash wins:** MCP tool orchestration (83.6% MCP Atlas, beats Claude Opus 4.7 by 4.5 points), parallel function calling, fast iterative agent loops.
- **Where Claude Code still wins:** production codebase editing (Sonnet 4.6 leads SWE-Bench Verified), defensive code, long-context retrieval past 128k tokens.
- **Routing rule:** keep Claude Code for `Edit` and `Write` tasks; route MCP-heavy planning and tool fan-out to Gemini 3.5 Flash via OpenRouter or a thin custom MCP server.

## What is Gemini 3.5 Flash and what changed on May 19, 2026

Gemini 3.5 Flash is a Flash-tier Gemini model that Google announced at I/O 2026 and shipped straight to GA on the same day. It is the first Flash-tier model to outperform the previous Pro tier on real agentic coding benchmarks. The launch lives on the [official Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) and the technical details on the [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/).

The model is available on the Gemini API, AI Studio, Antigravity CLI (the successor to Gemini CLI), Vertex AI, the Gemini app, AI Mode in Search, and now GitHub Copilot per the [May 19 changelog](https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/). The context window is 1,048,576 input tokens with a 65,536 output cap.

Why this matters for a Claude Code user: the cheap model is now smart enough to handle production agent loops. That changes routing math, not loyalty. If you already run Sonnet 4.6 or Opus 4.7 inside Claude Code, you don't throw the stack away. You ask which subtasks now belong on a cheaper, faster Gemini call.

## Gemini 3.5 Flash benchmarks: where it beats Gemini 3.1 Pro

Gemini 3.5 Flash wins 11 of 15 published benchmarks against Gemini 3.1 Pro, including the ones that matter most for agentic coding. The headline numbers from the [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) and the [WaveSpeed roundup](https://wavespeed.ai/blog/posts/gemini-3-5-flash-shipped-leads-agent-benchmarks/) are below.

| Benchmark | Gemini 3.5 Flash | Gemini 3.1 Pro | Claude Opus 4.7 | GPT-5.5 |
|-----------|------------------|----------------|-----------------|---------|
| Terminal-Bench 2.1 | 76.2% | 70.3% | n/a | 78.2% |
| MCP Atlas | 83.6% | 78.2% | 79.1% | 75.3% |
| GDPval-AA (Elo) | 1656 | 1314 | n/a | 1769 |
| SWE-Bench Pro | 55.1% | n/a | 64.3% | n/a |
| ARC-AGI-2 | 72.1% | ~77% | n/a | 84.6% |
| 128k retrieval | -7.6 pts vs 3.1 Pro | baseline | strong | strong |

The single most important number on that table for Claude Code users is the 83.6% MCP Atlas score. MCP Atlas measures how reliably a model chains multi-step tool calls without stalling on a malformed or out-of-order call. For anyone running an MCP-heavy stack, that score predicts task-completion rate more directly than SWE-bench does. The current Flash score beats Claude Opus 4.7 by 4.5 points and GPT-5.5 by 8.3 points.

The honest other side: Gemini 3.5 Flash regresses 7.6 points on 128k-token retrieval versus Gemini 3.1 Pro, and gives up 5 points on ARC-AGI-2 versus the prior Pro tier (12.5 points to GPT-5.5). If you have a million-token context refactor, or a problem that looks like ARC-style abstract reasoning, Flash is the wrong answer.

## Gemini 3.5 Flash pricing: cheap per token, expensive per task

Gemini 3.5 Flash is $1.50 per 1M input tokens, $9 per 1M output tokens, and $0.15 per 1M cached input tokens (see [OpenRouter](https://openrouter.ai/google/gemini-3.5-flash) for live pricing). On its face the Flash tier looks cheap. Per task it is not.

Simon Willison's [May 19, 2026 analysis](https://simonwillison.net/2026/May/19/gemini-35-flash/) cites Artificial Analysis benchmark-suite costs: running their full evaluation cost $1,551.60 on Gemini 3.5 Flash versus $892.28 on Gemini 3.1 Pro. Cheaper per token, more expensive per workload, because thinking tokens persist across turns and agent loops chew more output tokens. NxCode reports a similar multiplier: [roughly 9x the cost of gemini-3-flash on equivalent eval jobs ($1,552 vs $278)](https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026).

The pricing comparison that matters for routing:

| Model | Input ($/1M) | Output ($/1M) | Cached input ($/1M) |
|-------|--------------|---------------|---------------------|
| Gemini 3.5 Flash | $1.50 | $9.00 | $0.15 |
| Gemini 3.1 Pro | $2.50 | $15.00 | - |
| Gemini 3 Flash Preview (deprecated) | $0.50 | $3.00 | - |
| Claude Sonnet 4.6 | $3.00 | $15.00 | $0.30 |
| Claude Opus 4.7 | $5.00 | $25.00 | $0.50 |
| GPT-5.5 | $1.25 | $10.00 | - |

One trap to call out before the next section. GitHub Copilot launched Gemini 3.5 Flash with a 14x premium-request multiplier ([GitHub Changelog, May 19 2026](https://github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/)). A 300-request Copilot Pro quota becomes about 21 Flash calls before overage. If you already have Claude Code and an OpenRouter or AI Studio API key, calling Flash directly at roughly $0.015 per call is almost always cheaper than burning Copilot quota.

## The thinking_level default trap that breaks copy-pasted code

Google replaced the integer `thinking_budget` parameter with a string enum `thinking_level` and quietly dropped the default from `high` to `medium`. Code copy-pasted from `gemini-3-flash-preview` still runs, but it produces measurably worse outputs unless you set the new field. The official notes live on [Google AI Developers - What's new in Gemini 3.5](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.5).

The four values are `minimal`, `low`, `medium` (new default), and `high`. Google retuned `low` specifically for coding and tool-calling workloads. For agent loops with MCP tools, `thinking_level: "low"` is faster, cheaper, and on coding benchmarks roughly equivalent to `medium`. For hard reasoning, set `high`.

### Before and after diff

```python
# Before - gemini-3-flash-preview
from google import genai
from google.genai import types

config = types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(thinking_budget=-1),  # was "dynamic" / high
    temperature=0.2,                                            # ignored by 3.5
    top_p=0.95,                                                 # ignored by 3.5
)
```

```python
# After - gemini-3.5-flash, explicit and tuned for agent loops
from google import genai
from google.genai import types

config = types.GenerateContentConfig(
    thinking_config=types.ThinkingConfig(thinking_level="low"),  # for MCP agent loops
    # for hard reasoning tasks, use thinking_level="high"
    # for latency-sensitive work, use thinking_level="minimal"
)
```

Two cleanup notes from the migration. `temperature`, `top_p`, and `top_k` are no longer recommended controls in the new SDK profile. Leaving them in your config is not an error, but they are silently ignored - delete them so the next reader of your code doesn't assume they still work. And inspect `response.usage_metadata` on your first run: thinking tokens now persist across multi-turn conversations, and the per-task token count for an agent loop can climb 30 to 50 percent versus the preview model.

## Gemini 3.5 Flash vs Claude Code (Sonnet 4.6, Opus 4.7) for coding

The short version: Flash wins agent orchestration and MCP tool chains. Claude Code wins repo-level edits and defensive code generation. Pick by task, not by model loyalty.

| Task type | Best model | Reason |
|-----------|-----------|--------|
| MCP tool orchestration, parallel function calling | Gemini 3.5 Flash | 83.6% MCP Atlas, ~289 tok/sec, $1.50 input |
| Multi-file refactor in a real repo | Claude Sonnet 4.6 in Claude Code | Default Claude Code model; strong SWE-Bench Verified |
| ARC-style abstract reasoning | Claude Opus 4.7 or GPT-5.5 | Flash gives up 5 pts ARC-AGI-2 vs prior Pro |
| Long-context retrieval beyond 128k | Gemini 3.1 Pro or Sonnet 4.6 (1M ctx) | Flash regresses 7.6 pts on 128k retrieval |
| Cheap intermediate planning inside an agent | Gemini 3.5 Flash | Cached input at $0.15/1M is the lowest among frontier models |
| Production code review with defensive patches | Claude Sonnet 4.6 | Anthropic models add error handling more naturally |

The defensive-code observation isn't hand-wavy. Multiple head-to-head reviews this month converge on the same pattern. [MindStudio](https://www.mindstudio.ai/blog/gemini-3-5-flash-vs-claude-opus-4-7-agentic-workflows) and [BuildFastWithAI](https://www.buildfastwithai.com/blogs/gemini-3-5-flash-vs-gpt-5-5-claude-deepseek-2026) both report that Claude Opus 4.7 anticipates edge cases and adds error handling more naturally, while Gemini 3.5 Flash produces more concise code that occasionally skips defensive patterns. That maps to my own experience: I trust Sonnet 4.6 to write production patches; I lean on Flash to coordinate the 30 tool calls that fetch the inputs.

## When to route tasks from Claude Code to Gemini 3.5 Flash

My default: I keep Claude Code with Sonnet 4.6 as the editor for anything that touches the repo. The `Edit`, `Write`, `Glob`, and `Grep` tools stay where they are. That is the production path and it doesn't need a different model today.

Where I route to Gemini 3.5 Flash is the supporting cast of tasks around the editor:

- **MCP-heavy planning subtasks** where an agent fans out 10 to 100 tool calls to query an API, hit a database, or coordinate with another agent. The 83.6% MCP Atlas score shows up here as fewer retries and fewer stalled tool calls.
- **Long-running background tasks** where speed beats defensive depth: linting summaries, log triage, doc generation, scheduled cron-style agents. Flash's ~289 tok/sec output throughput is roughly 4x what Opus 4.7 delivers.
- **Cheap intermediate planning steps** inside a larger agent loop where Sonnet 4.6 is overkill. Use Flash to pick which tool to call next, then hand control back to Sonnet for the actual code change.
- **Parallel sub-agent fan-out** like the 93 parallel agents in Antigravity's demo described in the [NxCode developer guide](https://www.nxcode.io/resources/news/gemini-3-5-flash-developer-guide-agentic-coding-2026). Cached input pricing at $0.15/1M makes the fan-out economically viable.

### Three ways I actually route

1. **OpenRouter as a routing proxy.** Configure Claude Code or any Claude SDK call to dispatch specific tool calls to `google/gemini-3.5-flash` on OpenRouter. You keep one API key, one billing surface, and you can swap models without code changes.
2. **A thin custom MCP server** that wraps `client.models.generate_content` with `gemini-3.5-flash` as an exposed tool, then mount it inside Claude Code via `~/.claude.json`.
3. **Antigravity CLI for hybrid teams.** If your team already migrated from Gemini CLI to `agy`, Flash is the default model. Use Antigravity for parallel agents and keep Claude Code as your primary editor.

## Build an MCP agent with Gemini 3.5 Flash in 40 lines of Python

The Google GenAI SDK has native MCP support. You hand the SDK a connected MCP `ClientSession`, and it auto-executes tool calls and feeds the responses back to the model in a loop until the agent finishes. The official reference lives on [Google AI Developers - Function calling](https://ai.google.dev/gemini-api/docs/function-calling).

### Install the SDKs

```bash
pip install "google-genai>=2.0" "mcp>=1.4"
export GEMINI_API_KEY="your-key-from-aistudio"
```

### Working agent example

The script below connects to an MCP server, hands the session to Gemini 3.5 Flash with `thinking_level="low"`, and runs a real triage prompt. Replace `your_mcp_server` with the module path to whatever MCP server you already run.

```python
import asyncio
from google import genai
from google.genai import types
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client


async def main() -> None:
    server = StdioServerParameters(
        command="python",
        args=["-m", "your_mcp_server"],
    )

    async with stdio_client(server) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            client = genai.Client()
            response = await client.aio.models.generate_content(
                model="gemini-3.5-flash",
                contents=(
                    "Triage the 5 most recent open PRs in this repo. "
                    "For each, return: PR number, risk score (low/med/high), "
                    "and a one-line reason. Use the tools available."
                ),
                config=types.GenerateContentConfig(
                    thinking_config=types.ThinkingConfig(thinking_level="low"),
                    tools=[session],  # SDK auto-executes MCP tool calls
                ),
            )

            print(response.text)
            print(response.usage_metadata)


if __name__ == "__main__":
    asyncio.run(main())
```

### Why every choice is what it is

- `thinking_level="low"`: Google retuned `low` for code and tool-calling. It is faster, cheaper, and on coding benchmarks comparable to `medium`. The default `medium` would quietly inflate cost without improving the tool-call sequence.
- `tools=[session]`: the SDK accepts an MCP `ClientSession` directly. It introspects the server's tool list, calls each tool when the model requests it, matches the `FunctionResponse` by id and name, and continues the loop until the model stops asking for tool calls.
- `response.usage_metadata`: log this on every run. Inspect `ThoughtsTokenCount`. Thinking tokens persist across turns and can inflate input costs 30 to 50 percent on long agent loops.
- No `temperature`, no `top_p`: these parameters are silently ignored in Gemini 3.5. Leaving them in your config will confuse the next person to read it.

## Gemini 3.5 Flash in Antigravity, GitHub Copilot, and the raw API

Flash ships across four meaningful surfaces. The right one depends on what you already pay for and how you build.

| Surface | Cost model | Best for |
|---------|-----------|----------|
| Raw Gemini API | $1.50 / $9 per 1M (cached $0.15) | Custom agents, MCP servers, routing layers |
| Antigravity CLI (agy) | Free weekly cap, Pro $19.99/mo, Ultra $249.99/mo | Hybrid teams on Google's stack |
| GitHub Copilot | 14x premium-request multiplier | Existing Copilot users with light volume |
| OpenRouter | $1.50 / $9 per 1M + small markup | Routing inside Claude Code or multi-model proxies |

One opinionated note: for a Claude Code user with even one active OpenRouter or AI Studio key, raw API plus OpenRouter is almost always cheaper than burning Copilot quota at the 14x multiplier. If you don't already pay for Copilot, the decision is easy. If you do, do the math once on your own workload before changing anything.

## Limitations and gotchas

The honest list. None of these are deal-breakers, but each one is worth knowing before you swap an existing agent over.

- **No Computer Use yet.** Flash doesn't drive a browser. For browser-driving agents, use a Pro-tier Gemini or Claude with Computer Use.
- **Knowledge cutoff January 2025.** Tool-augmented prompts and web search are the standard workarounds for fresh facts.
- **Text-only output.** Multimodal input works. Output is text only - no image or audio generation.
- **128k retrieval regressed.** If you have million-token contexts and need exact-recall retrieval at scale, Sonnet 4.6 with its 1M context or Gemini 3.1 Pro are stronger picks.
- **Thought-token inflation.** Thinking tokens persist across multi-turn conversations and can inflate input costs 30 to 50 percent on agent loops. Track `ThoughtsTokenCount` from `response.usage_metadata`.
- **thinking_level: medium is the silent default.** Set it explicitly in every config. The previous `high` default is gone.
- **TPU capacity hiccups.** Multiple developers reported 503 errors during the first week. Build retry-with-backoff into any production caller.

## Frequently Asked Questions

### What is Gemini 3.5 Flash?

Gemini 3.5 Flash is Google's Flash-tier coding and agent model, generally available since May 19, 2026. It ships across the Gemini API, AI Studio, Antigravity CLI, Vertex AI, GitHub Copilot, and the Gemini app. It beats Gemini 3.1 Pro on 11 of 15 published agent benchmarks while pricing at $1.50 input and $9 output per 1M tokens.

### How much does Gemini 3.5 Flash cost per 1M tokens?

Gemini 3.5 Flash costs $1.50 per 1M input tokens, $9 per 1M output tokens, and $0.15 per 1M cached input tokens. That is 25 percent cheaper than Gemini 3.1 Pro, but 3x the price of the Gemini 3 Flash Preview it replaces and 6x the price of Gemini 3.1 Flash-Lite.

### Is Gemini 3.5 Flash better than Gemini 3.1 Pro?

On agent benchmarks, yes. Gemini 3.5 Flash beats Gemini 3.1 Pro on Terminal-Bench 2.1 (76.2 vs 70.3), MCP Atlas (83.6 vs 78.2), and GDPval-AA Elo (1656 vs 1314). It regresses on 128k-token retrieval by 7.6 points and ARC-AGI-2 by 5 points, so long-context or pure reasoning work still wants Pro.

### How does Gemini 3.5 Flash compare to Claude Code for coding?

Flash leads MCP tool orchestration at 83.6 percent MCP Atlas, beating Claude Opus 4.7 by 4.5 points. Claude Sonnet 4.6 still leads production code editing on SWE-Bench Verified and is the default model in Claude Code. The practical answer is to route: Claude Code for repository edits, Gemini 3.5 Flash for tool-heavy agent loops.

### What is the thinking_level default in Gemini 3.5 Flash and why does it matter?

Google replaced the integer `thinking_budget` with a string enum `thinking_level` and dropped the default from `high` to `medium`. Copy-pasting code from `gemini-3-flash-preview` silently produces worse outputs. For agentic coding with MCP tools, set `thinking_level: "low"`. For hard reasoning, set `high`.

### Can Gemini 3.5 Flash call MCP tools?

Yes. The Google GenAI SDK has built-in MCP support that auto-executes tool calls and feeds responses back in a loop until the agent finishes. Gemini 3.5 Flash scored 83.6 percent on MCP Atlas, the benchmark that measures multi-step tool-call reliability. It is currently the strongest published score on that benchmark among major frontier models.

### Why is Gemini 3.5 Flash 3x more expensive than Gemini 3 Flash Preview?

Google retuned Flash to handle frontier-grade agent loops and is pricing it accordingly. Simon Willison observed all three major labs probing API price tolerance at the same time. Artificial Analysis reported their benchmark suite cost $1,551.60 on Gemini 3.5 Flash versus $892.28 on Gemini 3.1 Pro. Cheaper per token, more expensive per workload.

### What is the GitHub Copilot premium multiplier for Gemini 3.5 Flash?

GitHub Copilot launched Gemini 3.5 Flash with a 14x premium-request multiplier across Copilot Pro, Pro Plus, Business, and Enterprise plans. A 300-request monthly quota becomes about 21 Gemini 3.5 Flash calls before overage. For most Claude Code users, calling the raw API through OpenRouter or AI Studio is cheaper than burning Copilot quota.

### Should I switch from Claude Code to Gemini 3.5 Flash?

Not as a wholesale swap. Claude Code with Sonnet 4.6 is still the strongest tool for production repository edits and long-context refactors. Gemini 3.5 Flash is the right routing target for MCP-heavy agent loops, parallel sub-agent fan-out, and cheap intermediate planning steps. The high-leverage move is a hybrid stack, not a switch.

### How do I call Gemini 3.5 Flash from a Python script?

Install the `google-genai` SDK, set `GEMINI_API_KEY`, and call `client.models.generate_content` with model `gemini-3.5-flash`. Set `thinking_level` explicitly via `ThinkingConfig`. Drop `temperature`, `top_p`, and `top_k` from your config. For MCP, pass the session object into the `tools` list.
