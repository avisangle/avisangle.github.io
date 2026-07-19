# Dev.to + Hashnode Cross-post - Kimi K3 for Agentic Coding

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py kimi-k3-agentic-coding-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py kimi-k3-agentic-coding-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Kimi K3 for Agentic Coding: Claude Code + CLI Setup Guide
DESCRIPTION: Run Kimi K3 for agentic coding: drop it into Claude Code with one env block, set up the Kimi Code CLI, plus pricing, benchmarks, and an honest verdict.
TAGS: ai, claude, opensource, coding
CANONICAL_URL: https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide
COVER_IMAGE: https://avinashsangle.com/og-kimi-k3-agentic-coding-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide).

Kimi K3 is Moonshot AI's 2.8-trillion-parameter open-weight model, launched July 16, 2026. You can use it for agentic coding two ways: drop it into Claude Code by pointing one environment variable at Moonshot's endpoint, or run Moonshot's own Kimi Code CLI. It ranked #1 on Frontend Code Arena at roughly a third of Claude's token price.

## TL;DR

- **What it is:** Kimi K3 (launched July 16, 2026) is Moonshot AI's 2.8T-parameter open-weight MoE model with a 1M context and native vision. It debuted #3 on Artificial Analysis and #1 on Frontend Code Arena.
- **Two ways to use it agentically:** route Claude Code to it with one `ANTHROPIC_BASE_URL` change, or install Moonshot's native Kimi Code CLI. It also works in Cline and Roo via the OpenAI-compatible endpoint.
- **Pricing edge:** $3/$15 per 1M tokens, dropping to $0.30/M on cached input. On cache-heavy agent loops that lands near a third of Claude's token price.
- **The tradeoff:** K3 runs at max reasoning effort by default, so it's slow and verbose. Per-task latency can climb even at a lower per-token rate.
- **My take:** use K3 as a cost lever inside Claude Code for bulk and long-horizon work; keep Claude for latency-sensitive interactive loops. A hybrid stack beats a switch.

## What Is Kimi K3? The 60-Second Version

Kimi K3 is a 2.8-trillion-parameter Mixture-of-Experts model from Moonshot AI, released July 16, 2026. It activates 16 of 896 experts per token, uses KDA hybrid linear attention, has native vision, and handles up to a 1M-token context. Moonshot calls it the largest open-weight model ever announced, and the full weights are scheduled for July 27, 2026 per the [official Kimi K3 tech blog](https://www.kimi.com/blog/kimi-k3).

On the benchmark board it landed hard. Kimi K3 debuted at #3 on the [Artificial Analysis leaderboard](https://venturebeat.com/technology/chinas-moonshot-ai-releases-kimi-k3-the-largest-open-source-model-ever-rivaling-top-u-s-systems), behind Claude Fable 5 and GPT-5, and took #1 on Frontend Code Arena with 1679 points, ahead of both Fable 5 and GPT-5.6 Sol per [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3). Across six coding benchmarks it placed top-three every time, leading SWE Marathon and Program Bench and trailing GPT-5.6 Sol on Terminal Bench 2.1 by half a point.

Why this matters for a Claude Code user: an open-weight model that competes at the frontier, at a third of the token price, changes your routing math. You don't throw away your stack. You ask which subtasks now belong on a cheaper model. Alongside K3, Moonshot shipped the open-source Kimi Code CLI, a direct competitor to Claude Code and Gemini CLI, and pushed two updates (v0.25.0 and v0.26.0) on launch day.

## How to Use Kimi K3 in Claude Code

The fastest way to try Kimi K3 for agentic coding is to keep the Claude Code CLI you already use and repoint it at Moonshot's Anthropic-compatible endpoint. Moonshot exposes an `/anthropic` base path specifically so Claude Code works without a wrapper. Set four environment variables and you're done. The official steps live on the [Kimi API platform docs](https://platform.kimi.ai/docs/guide/claude-code-kimi).

```bash
# Point Claude Code at Moonshot's Anthropic-compatible endpoint
export ANTHROPIC_BASE_URL="https://api.moonshot.ai/anthropic"
export ANTHROPIC_AUTH_TOKEN="YOUR_MOONSHOT_API_KEY"

# Route every model tier Claude Code asks for to Kimi K3
export ANTHROPIC_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_OPUS_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_SONNET_MODEL="kimi-k3"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="kimi-k3"
```

The Haiku override is the one most guides skip. Claude Code uses a small, fast model for background jobs like title generation and file summaries. If you leave `ANTHROPIC_DEFAULT_HAIKU_MODEL` unset, those calls still try to reach the real Anthropic endpoint and fail without an Anthropic key. Pointing it at `kimi-k3` keeps the whole session on Moonshot.

One conflict to clear before you launch. If you previously set `ANTHROPIC_API_KEY`, remove it. When both `ANTHROPIC_API_KEY` and `ANTHROPIC_AUTH_TOKEN` are present, Claude Code can pick the wrong credential and you'll get auth errors that look like a bad key.

```bash
unset ANTHROPIC_API_KEY   # avoid a credential conflict
claude                    # launch Claude Code
# then inside the session:
/status                   # base URL should show moonshot, model should show kimi-k3
```

Run `/status` and confirm the base URL points at moonshot and the model reads `kimi-k3`. Send a quick `hi` to confirm the round trip. Kimi K3 thinks by default, so the first response may take longer than you're used to with Claude - that's the max-effort reasoning, not a hung request.

## Setting Up the Kimi Code CLI

If you'd rather run Moonshot's native agent, Kimi Code CLI is the open-source terminal tool that ships alongside K3. It reads and edits code, runs shell commands, searches files, fetches web pages, and picks its next step from the feedback it gets - the same agentic loop you know from Claude Code. The official install script needs no pre-installed Node. The source lives on the [MoonshotAI/kimi-code GitHub repo](https://github.com/MoonshotAI/kimi-code).

```bash
# Recommended: official install script, no Node required
curl -fsSL https://install.kimi.com/cli | bash

# Alternative: global npm install
npm install -g kimi

kimi --version   # verify the install
```

On Windows, install Git for Windows first. Kimi Code CLI uses the bundled Git Bash as its shell environment, so a first launch without it will fail. Once installed, the first-run flow is two commands inside the tool.

```bash
/login   # choose Kimi Code OAuth or a Moonshot Open Platform API key
/init    # scan the project and generate AGENTS.md
```

That `AGENTS.md` file is the part Claude Code users will recognize instantly: it's the direct analog of CLAUDE.md. The `/init` command scans your project structure and writes build steps, code conventions, and background context so the agent understands the repo before it touches anything.

Kimi Code CLI also speaks the Agent Client Protocol, so ACP-capable editors like Zed and JetBrains can drive a session over stdio. Log in once, point the editor at the `kimi acp` subcommand, and you get IDE integration without a second login. It advertises a 256K context window and 180 to 260 tokens per second output.

## Kimi K3 with Cline, Roo Code, and Other Agents

Kimi K3 launched API-first through Moonshot's OpenAI-compatible endpoint, which means any OpenAI-shaped client connects with two settings: the base URL and the model id. Cline, Roo Code, and Codex-style tools all work this way. Moonshot explicitly positions K3 for programming-agent scenarios including Codex, Claude Code, Cline, and RooCode.

```bash
# Base URL for any OpenAI-shaped tool (Cline, Roo Code, Continue, Aider)
Base URL:  https://api.moonshot.ai/v1
API key:   YOUR_MOONSHOT_API_KEY
Model:     kimi-k3
```

In Cline or Roo Code, choose the OpenAI Compatible provider, paste the base URL and key, and type `kimi-k3` as the model. The same endpoint powers the Anthropic path for Claude Code (`/anthropic`) and the OpenAI path for everything else (`/v1`), so you can run K3 across your whole toolchain on a single Moonshot key.

## Kimi K3 Pricing vs Claude: The Real Math

Kimi K3 is $3 per 1M cache-miss input tokens, $0.30 per 1M cached input tokens, and $15 per 1M output tokens. Unlike the consumer app, the API price is flat at any context length, and web search calls bill separately at $0.004 each. The headline comparison: that's the same output price as Claude Sonnet-tier models but a much cheaper cached-input rate, per [eesel's pricing breakdown](https://www.eesel.ai/blog/kimi-k3-pricing).

| Model | Input ($/1M) | Output ($/1M) | Cached input ($/1M) |
|-------|--------------|---------------|---------------------|
| Kimi K3 | $3.00 | $15.00 | $0.30 |
| Claude Sonnet 5 | $3.00 | $15.00 | $0.30 |
| Claude Opus 4.8 | $5.00 | $25.00 | $0.50 |

The cached rate is where K3 gets interesting for agent work. Long agent loops re-send a large, stable context on every turn - the system prompt, the file tree, the conversation so far. Once that context is cached, most of your input bills at $0.30/M instead of $3/M. A turn with 100K cached tokens and only 2K of new input, plus a normal output, works out to roughly $0.08, about 77% cheaper than the same turn uncached, per [Morph's K3 vs Claude analysis](https://www.morphllm.com/kimi-k3-vs-claude).

The honest caveat: K3 is slow and verbose and runs only at max reasoning effort, so it emits more output tokens per task and takes longer. Cheaper per token does not always mean cheaper per finished task. Measure a few real tasks on your own workload before you assume the savings.

## Is Kimi K3 Better Than Claude for Coding?

On specific benchmarks, K3 wins. On overall usability today, Claude still leads. Pick by task, not by headline. K3 took #1 on Frontend Code Arena, led SWE Marathon and Program Bench, and scored 67.5 on SWE-bench with its own KimiCode harness. Claude Fable 5 holds the top of the overall Artificial Analysis index, and Claude Code is faster with a more mature tool harness.

| Task type | Better pick | Reason |
|-----------|-------------|--------|
| Frontend / UI code generation | Kimi K3 | #1 Frontend Code Arena (1679), ahead of Fable 5 |
| Long-horizon, cache-heavy agent loops | Kimi K3 | $0.30/M cached input, roughly a third of Claude's cost |
| Interactive, latency-sensitive edits | Claude Code | K3 runs max-effort by default; slower per turn |
| Overall reasoning breadth | Claude Fable 5 / GPT-5 | K3 debuted #3 on the overall Artificial Analysis index |
| Self-hosting / open weights | Kimi K3 | Weights release July 27; Claude is closed |

There is one credibility wrinkle worth naming. In at least one reported conversation, K3 identified itself as Anthropic's Claude, which [WCCFTech read as a sign of distilled training origins](https://wccftech.com/chinas-kimi-k3-identifies-itself-as-anthropics-claude-in-at-least-one-conversation-betraying-its-distilled-origins/). It doesn't change coding performance, but if provenance matters for your use case, factor it in. My practical stance: I keep Claude Code as the default editor for interactive work and route bulk, frontend-heavy, or long-running jobs to K3 where the cost and Arena score earn their place.

## Can You Run Kimi K3 Locally?

Not on a desktop, and not on a single high-end GPU. At 2.8 trillion parameters, the weight-only 4-bit planning floor is near 1.4TB before you add any runtime overhead or long-context KV cache. Moonshot recommends serving K3 on supernodes with at least 64 accelerators, so realistic self-hosting means a multi-GPU server or a heavily quantized build on datacenter-class hardware, per the [Glows.ai hardware guide](https://glows.ai/article/run_kimi_k3_hardware_cost_guide_en).

The open weights land July 27, 2026. Because KDA hybrid linear attention breaks conventional prefix caching, Moonshot contributed a vLLM implementation to be released alongside the weights, so serving frameworks will support K3 from day one. Until then, K3 is API and consumer-app only. If your goal is genuinely local, laptop-class inference, a smaller open-weight model is the honest answer.

## Limitations and Gotchas

The honest list before you swap an existing agent over to K3.

- **Slow and verbose by default.** K3 runs at max reasoning effort. Expect longer first-token latency and more output tokens than a comparable Claude call.
- **Weights aren't out yet.** Open weights are scheduled for July 27, 2026. Before that, self-hosting isn't an option and you depend on Moonshot's API uptime.
- **No desktop self-hosting.** The 2.8T parameter count puts local inference on multi-GPU servers only, roughly a 1.4TB 4-bit floor.
- **Clear the Haiku override.** In Claude Code, an unset `ANTHROPIC_DEFAULT_HAIKU_MODEL` means background jobs try to reach Anthropic and fail. Point every tier at `kimi-k3`.
- **Remove ANTHROPIC_API_KEY.** A leftover `ANTHROPIC_API_KEY` conflicts with `ANTHROPIC_AUTH_TOKEN` and produces confusing auth errors.
- **Identity slip.** K3 has been observed calling itself Claude, a distillation smell worth knowing if provenance matters to you.
- **Web search bills separately.** Search calls cost $0.004 each on top of token pricing, so a search-heavy agent adds a line item the token math misses.

## Frequently Asked Questions

### What is Kimi K3 and when was it released?

Kimi K3 is Moonshot AI's 2.8-trillion-parameter open-weight Mixture-of-Experts model, launched July 16, 2026. It uses 896 experts with 16 active per token, KDA hybrid linear attention, native vision, and a 1M-token context. Full open weights are scheduled for July 27, 2026.

### How do I use Kimi K3 inside Claude Code?

Set `ANTHROPIC_BASE_URL` to `https://api.moonshot.ai/anthropic`, put your Moonshot key in `ANTHROPIC_AUTH_TOKEN`, and set `ANTHROPIC_MODEL` plus the Opus, Sonnet, and Haiku default overrides to `kimi-k3`. Remove any existing `ANTHROPIC_API_KEY` to avoid a conflict, then run `/status` to confirm the base URL and model.

### Is Kimi K3 better than Claude for coding?

On some benchmarks, yes. Kimi K3 ranked #1 on Frontend Code Arena and led SWE Marathon and Program Bench. Claude Fable 5 still leads the overall Artificial Analysis index and is faster with a more mature harness. K3 is a strong cost lever, not a wholesale replacement.

### How much does the Kimi K3 API cost?

Kimi K3 costs $3 per 1M cache-miss input tokens, $0.30 per 1M cached input tokens, and $15 per 1M output tokens, flat at any context length. Web search calls bill separately at $0.004 each. On cache-heavy agent loops the effective input cost drops close to $0.30/M.

### What is Kimi Code CLI and how is it different from Claude Code?

Kimi Code CLI is Moonshot's open-source terminal agent, the counterpart to Claude Code and Gemini CLI. It reads and edits code, runs shell commands, and manages subagents and background tasks. Its `/init` command generates an `AGENTS.md` file, the equivalent of Claude Code's `CLAUDE.md` project context file.

### Can I run Kimi K3 locally?

Not on a desktop. At 2.8 trillion parameters the 4-bit weight floor is roughly 1.4TB before KV cache, and Moonshot recommends serving it on supernodes with at least 64 accelerators. Realistic self-hosting means a quantized multi-GPU server, not a laptop, once weights land July 27.

### Does Kimi K3 work with Cline and Roo Code?

Yes. K3 launched API-first through Moonshot's OpenAI-compatible endpoint at `https://api.moonshot.ai/v1` with model id `kimi-k3`. Any OpenAI-shaped client, including Cline, Roo Code, and Codex-style tools, connects by pointing its base URL and API key at that endpoint and selecting the model.

### Is Kimi K3's cheaper price worth the slower speed?

For long-horizon, cache-heavy agent work where most input is cached at $0.30/M, the savings are real, roughly a third of Claude's token price. For interactive, latency-sensitive loops, K3 runs at max reasoning effort and is slow and verbose, so per-task time can climb even at a lower per-token rate.
