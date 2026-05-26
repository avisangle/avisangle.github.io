# Dev.to + Hashnode Cross-post - Qwen Code CLI: Getting Started Guide

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py qwen-code-getting-started --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py qwen-code-getting-started --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Qwen Code CLI: Getting Started Guide for AI Coding 2026
DESCRIPTION: Install Qwen Code CLI, fix authentication after the OAuth shutdown, and compare it to Claude Code with real 2026 workflows and config tips.
TAGS: qwen, claudecode, ai, devops
CANONICAL_URL: https://avinashsangle.com/blog/qwen-code-getting-started
COVER_IMAGE: https://avinashsangle.com/og-qwen-code-getting-started.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/qwen-code-getting-started).

Qwen Code is an open-source terminal AI agent from QwenLM (Alibaba), built around the Qwen3-Coder model with a 256K context window. This guide installs it, fixes the post-OAuth authentication mess, and shows where it actually beats Claude Code in my 2026 workflow.

## TL;DR

- **Qwen Code** is an open-source terminal AI agent from QwenLM (Alibaba), built on Qwen3-Coder. It is a fork-evolved sibling of Gemini CLI with its own model-tuned prompts.
- Install with `npm install -g @qwen-code/qwen-code`. Node.js 20 or higher is the only prerequisite.
- The **OAuth free tier was discontinued on 2026-04-15**. You now need an API key from Alibaba Cloud Model Studio, an OpenAI-compatible provider, or a self-hosted endpoint.
- Native context is 256K, extendable to ~1M with YaRN. Use `-p` for non-interactive CI runs.

## What Is Qwen Code CLI?

Qwen Code is an open-source command-line AI agent maintained by QwenLM, Alibaba's model team. It lives in your terminal, reads your codebase, edits files, runs shell commands, and ships features end to end. The [QwenLM/qwen-code GitHub repo](https://github.com/QwenLM/qwen-code) is Apache-2.0 licensed and built around the Qwen3-Coder family of models.

Architecturally it started as a fork of Gemini CLI and kept the same interactive TUI shape, but the prompts and function-calling protocols are tuned for Qwen3-Coder. If you have used Claude Code or Gemini CLI before, the muscle memory transfers. `/help`, `@file.ts` references, slash commands, and a session-based memory model all work the way you expect.

The headline numbers worth knowing: 256K native context, ~1M with YaRN extrapolation, and a steady climb on GitHub through Q1 2026. For a non-Western model CLI that is a strong adoption signal, and it is the main reason I added it to my rotation alongside the ant CLI and Antigravity CLI.

## How to Install Qwen Code

The fastest path is npm. You need Node.js 20 or higher; older versions silently fail with module resolution errors that look unrelated. I learned that one the hard way on a Debian server still on Node 18.

### macOS and Linux (npm)

```bash
# Confirm Node.js >= 20
node --version

# Install Qwen Code globally
npm install -g @qwen-code/qwen-code

# Verify
qwen --version
# qwen-code 0.4.x
```

### macOS and Linux (official install script)

If you do not want to manage Node yourself, the official curl script bundles Node and the CLI together:

```bash
bash -c "$(curl -fsSL https://qwen-code-assets.oss-cn-hangzhou.aliyuncs.com/installation/install-qwen.sh)"
```

### Windows

On Windows, run the official .bat installer from an Administrator PowerShell or cmd window:

```powershell
curl -fsSL -o %TEMP%\install-qwen.bat https://qwen-code-assets.oss-cn-hangzhou.aliyuncs.com/installation/install-qwen.bat && %TEMP%\install-qwen.bat
```

WSL2 with Ubuntu 22.04 also works and is what I use on my Windows box. The npm path inside WSL is usually less painful than the native Windows installer.

## Authenticating After the OAuth Shutdown

Here is the part most existing 2026 guides still get wrong. The original Qwen OAuth free tier - the one where you ran `qwen` and a browser opened to log in with your Alibaba account - **was discontinued on 2026-04-15**. If you try to follow a guide from February or March, you will hit a 401 on first prompt and assume the install is broken. It is not.

You now need an API key. Three paths work today, in order of how often I reach for them.

### Path 1 - Alibaba Cloud Model Studio (DashScope)

The official default. Generate a key at the [Model Studio Qwen Code coding plan](https://www.alibabacloud.com/help/en/model-studio/qwen-code-coding-plan) page, then drop it into `~/.qwen/settings.json`:

```json
{
  "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "baseUrl": "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
  "model": "qwen3-coder-plus"
}
```

### Path 2 - OpenAI-Compatible Provider (OpenRouter, Together, Fireworks)

If your team cannot egress to Alibaba Cloud, point Qwen Code at any provider that hosts a Qwen3-Coder variant on an OpenAI-compatible endpoint. OpenRouter is the easiest because it brokers across multiple backends and you pay one bill:

```json
{
  "apiKey": "sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxx",
  "baseUrl": "https://openrouter.ai/api/v1",
  "model": "qwen/qwen3-coder"
}
```

### Path 3 - Self-Hosted vLLM or Ollama

Qwen3-Coder weights are open. If you have a GPU with enough VRAM (the 7B variant runs comfortably on a single 24GB card; the flagship Mixture-of-Experts build needs serious hardware), serve it with vLLM and point Qwen Code at localhost:

```json
{
  "apiKey": "not-needed",
  "baseUrl": "http://localhost:8000/v1",
  "model": "Qwen/Qwen3-Coder-7B-Instruct"
}
```

The CLI does not care that the key is fake; it just needs the header present. This is the cheapest long-term setup if you already run inference hardware.

## First Run - Launching qwen in Your Project

`cd` into a repo and type `qwen`. The interactive TUI opens, shows the working directory, and waits for a prompt. There is no project setup step. The CLI picks up your settings from `~/.qwen/settings.json` and starts a session.

```bash
cd ~/code/my-next-app
qwen

# Inside the TUI:
> Summarize the architecture of @src/app and flag any dead code.
```

A few keystrokes I use every session:

- `/help` - list all slash commands
- `/clear` - reset the conversation but keep settings loaded
- `@path/to/file` - inline a file into your prompt
- `/quit` - exit cleanly (Ctrl+C also works)

On my first real task - asking it to refactor a 380-line Next.js route handler into smaller server actions - Qwen3-Coder Plus produced a working diff in about 22 seconds end to end. Latency is the number I care about most for interactive use, and that is competitive with Claude Sonnet 4.6.

## Configuring Models and the 1M Context Window

The `model` field in `settings.json` is the main lever. Qwen3-Coder ships in a few sizes, and your provider decides which IDs are available. Common ones in mid-2026:

- `qwen3-coder-plus` - DashScope flagship hosted variant, what I default to
- `qwen3-coder-flash` - faster, cheaper, smaller, good for routine edits
- `qwen/qwen3-coder` - OpenRouter alias for the open weights
- `Qwen/Qwen3-Coder-7B-Instruct` - the size people self-host most often

About the 1M context claim. Qwen3-Coder is trained at 256K. YaRN positional extrapolation can stretch it to roughly 1M tokens, and that is the number Alibaba quotes. I have measured this in practice and recall starts dropping somewhere past 400K tokens, which matches what other practitioners are seeing. Keep the YaRN flag off for normal coding work; only flip it on for tasks like full-repo summarization where you need to dump a few hundred files into a single prompt.

## Qwen Code in CI/CD (Non-Interactive Mode)

The `-p` flag is what makes Qwen Code useful in pipelines. Pass a prompt, the CLI runs it once, prints the result, and exits. No TUI, no readline, no surprises. Here is the minimal GitHub Actions workflow I use for automated PR descriptions:

```yaml
name: Qwen PR Summary

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  summarize:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - run: npm install -g @qwen-code/qwen-code

      - name: Generate PR summary
        env:
          QWEN_API_KEY: ${{ secrets.QWEN_API_KEY }}
        run: |
          mkdir -p ~/.qwen
          cat > ~/.qwen/settings.json <<EOF
          {
            "apiKey": "$QWEN_API_KEY",
            "baseUrl": "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
            "model": "qwen3-coder-flash"
          }
          EOF
          git diff origin/${{ github.base_ref }}...HEAD \
            | qwen -p "Summarize this diff for a PR description. Use bullet points." \
            > summary.md

      - name: Post summary as comment
        uses: marocchino/sticky-pull-request-comment@v2
        with:
          path: summary.md
```

If you are running this on a public repo, harden the workflow first. The same defenses (tool allowlists, egress blocks, script caps) apply to Qwen Code because the failure mode (an injected comment hijacks the agent) is identical to Claude Code or Codex.

## Qwen Code vs Claude Code vs Gemini CLI

I run all three. They are not interchangeable. Here is the honest breakdown after about six weeks of using Qwen Code as my secondary CLI.

| Dimension | Qwen Code | Claude Code | Gemini CLI |
|---|---|---|---|
| License | Apache-2.0 | Proprietary | Apache-2.0 (deprecating) |
| Pricing model | Pay-per-token, BYO key | Subscription ($20+/mo) | Free tier ends 2026-06-18 |
| Default model | Qwen3-Coder-Plus | Sonnet 4.6 | Gemini 2.5 Pro |
| Context | 256K (~1M YaRN) | 200K (1M beta) | 1M |
| Self-host option | Yes (weights open) | No | No |
| MCP support | Yes (settings.json) | Yes (first-class) | Yes |
| CI/CD non-interactive | `qwen -p` | `claude -p` | `gemini -p` |

**Verdict.** Claude Code still wins on multi-step reasoning, plan-then-execute workflows, and complex refactors. Qwen Code wins when (a) the open-weights license matters, (b) you need cost control on high-volume runs, or (c) you have on-prem GPUs sitting idle. Gemini CLI is being sunset on 2026-06-18.

## Common Errors and Fixes

**`command not found: qwen`** - Node.js below 20 or npm global bin not on PATH. Check with `node --version` and add `$(npm root -g)/../bin` to PATH.

**`401 Unauthorized` on first prompt** - You are still relying on OAuth. That free tier ended 2026-04-15. Switch to an API key in `~/.qwen/settings.json`.

**`model not found`** - The `model` field in settings.json does not match what your provider exposes. List available IDs on the provider dashboard and copy the exact string.

**Slow responses past 400K tokens** - YaRN extrapolation is on. Either trim context with more focused `@file` references or accept the latency for the whole-repo run you actually need.

## Frequently Asked Questions

### What is Qwen Code CLI?

Qwen Code is an open-source command-line AI agent from QwenLM (Alibaba) that lives in your terminal. It is built around the Qwen3-Coder model, ships as an npm package, supports a 256K native context window (extendable to 1M via YaRN), and uses customized prompts and function-calling protocols tuned for agentic coding tasks.

### Is Qwen Code free to use in 2026?

The Qwen OAuth free tier was discontinued on 2026-04-15. The CLI itself is still open-source and free to install, but you now pay for inference. You can pay through Alibaba Cloud Model Studio (DashScope), any OpenAI-compatible provider like OpenRouter, or run Qwen3-Coder yourself with vLLM or Ollama.

### How do I install Qwen Code on macOS?

Install Node.js 20 or higher, then run `npm install -g @qwen-code/qwen-code`. Verify with `qwen --version`. The official curl install script is also supported. On Apple Silicon I had no issues with the npm path. Restart your shell once after install so the qwen binary is on PATH.

### How do I authenticate Qwen Code after the OAuth free tier ended?

Use an API key. The default path is a DashScope key from Alibaba Cloud Model Studio. The CLI also accepts any OpenAI-compatible endpoint, so OpenRouter, Together, Fireworks, or a self-hosted vLLM instance all work. Drop `apiKey`, `baseUrl`, and `model` into `~/.qwen/settings.json` and you are done.

### Can Qwen Code use OpenAI-compatible providers?

Yes. Qwen Code speaks the OpenAI chat completions protocol out of the box. Point `baseUrl` at any provider that exposes `/v1/chat/completions` (OpenRouter, Together, Fireworks, Groq, or your own vLLM endpoint) and set `apiKey` accordingly. This is how most teams escape the Alibaba Cloud egress requirement.

### What is the context window of Qwen Code?

Qwen3-Coder ships with a 256K native context window. With YaRN extrapolation enabled it stretches to roughly 1M tokens, which is what the marketing pages quote. In practice I keep it at 256K because YaRN noticeably hurts latency and recall on small edits. Reserve 1M for whole-repo summarization runs.

### How is Qwen Code different from Claude Code?

Claude Code is Anthropic's closed-source terminal agent backed by a subscription. Qwen Code is open-source, model-agnostic (any OpenAI-compatible endpoint), and pays per token. Claude Code wins on planning and reasoning depth in my benchmarks. Qwen Code wins when you need cost control, self-host, or a permissive Apache-2.0 license.

### Can I run Qwen Code in CI/CD non-interactive mode?

Yes. Pass `-p` with a prompt and qwen runs headless, prints the result, and exits. This works inside GitHub Actions or any CI runner. Combine it with a tool allowlist and an egress block to keep the runtime safe. The pattern mirrors `claude -p` and `codex -p`, so existing CI scaffolding ports cleanly.

---

Originally published at [avinashsangle.com](https://avinashsangle.com/blog/qwen-code-getting-started).
