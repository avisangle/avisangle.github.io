# Content Brief: Qwen Code Getting Started

**Status:** Ready to write
**Last researched:** 2026-05-26

---

## Phase 1 — Topic Validation

### Search demand
- Active interest: multiple "getting started" / "install guide" posts in 2026 (DataCamp, Medium, a2a-mcp, F22 Labs, MyDeveloperPlanet Feb 2026).
- Reddit threads and HN comparisons surface Qwen Code as the "open-source alternative" in the Claude Code / Gemini CLI / Codex CLI lineup.
- People also ask: "Is Qwen Code free?", "Qwen Code vs Claude Code", "How to install Qwen Code on Mac/Windows", "What model does Qwen Code use?", "Qwen Code authentication after OAuth free tier ended".

### Competition (top results)
1. **GitHub QwenLM/qwen-code README** — authoritative but skinny, install + auth only.
2. **qwenlm.github.io/qwen-code-docs Quickstart** — official, dry, no opinion.
3. **DataCamp tutorial** — solid walkthrough but generic, no comparison data.
4. **Medium / a2a-mcp install posts** — thin, mostly a copy of the README.
5. **MyDeveloperPlanet (Feb 2026)** — practitioner write-up, but pre-dates the 2026-04-15 OAuth free tier shutdown.

**Gap:** Nobody has covered the post-OAuth-shutdown reality (what auth options actually work in May 2026, real cost when you can't free-ride OAuth) plus a side-by-side practitioner comparison with Claude Code and Gemini CLI workflows.

### AI citation potential — HIGH
- "How do I install Qwen Code?" / "Qwen Code vs Claude Code" are exactly the queries LLMs route to citation. Authoritative-but-thin official docs leave room for a richer write-up.
- Avinash already has parallel posts (ant-cli, gemini-cli, gemini-3-5-flash) — adding Qwen Code completes the CLI cluster and reinforces topical authority.

### Freshness opportunity
- OAuth free tier ended **2026-04-15** — most existing guides still tell readers to "log in with browser". That advice is now wrong. Definitive freshness win.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`qwen code cli` (also `qwen code getting started`)

### Secondary keywords
- qwen code install
- qwen code vs claude code
- qwen3-coder cli
- qwen code authentication
- qwen code setup mac

### Long-tail queries
- How to install Qwen Code CLI on macOS
- Is Qwen Code free to use in 2026
- How to authenticate Qwen Code after OAuth free tier ended
- Qwen Code vs Claude Code which is better for coding
- How to configure Qwen Code with OpenAI-compatible API
- What model does Qwen Code use by default
- How to use Qwen Code in CI/CD non-interactive mode
- Qwen Code 1M context window how to enable

### FAQ candidates
1. What is Qwen Code CLI?
2. Is Qwen Code free in 2026?
3. How do I install Qwen Code on macOS / Linux / Windows?
4. How do I authenticate Qwen Code after the OAuth free tier ended?
5. Can Qwen Code use OpenAI-compatible providers?
6. How is Qwen Code different from Claude Code?
7. What is the context window of Qwen Code?
8. Can I run Qwen Code in non-interactive mode for CI/CD?

---

## Phase 3 — Content Brief

### Article Metadata
- **Title:** `Qwen Code CLI: Getting Started Guide for AI Coding 2026` (56 chars)
- **Slug:** `qwen-code-getting-started`
- **Meta description:** `Install Qwen Code CLI, fix authentication after the OAuth shutdown, and compare it to Claude Code with real 2026 workflows and config tips.` (140 chars)
- **Target word count:** 2400–2800
- **Estimated read time:** 10–11 min
- **Category:** AI Development / Developer Tools
- **Lucide icon:** `Terminal` (matches the CLI cluster)
- **Last updated:** 2026-05-26

### Content Outline

**H2: What Is Qwen Code CLI?**
- Direct-answer paragraph (40-60 words): open-source terminal AI agent by QwenLM (Alibaba), built around Qwen3-Coder, 256K native context (1M via YaRN extrapolation).
- Where it sits in the 2026 CLI landscape (Claude Code, Gemini CLI being sunset → Antigravity, Codex CLI, Qwen Code).
- Source: [QwenLM/qwen-code GitHub](https://github.com/QwenLM/qwen-code), [qwen.ai/qwencode](https://qwen.ai/qwencode).

**H2: How to Install Qwen Code on macOS, Linux, and Windows**
- Prereq: Node.js 20+.
- Recommended: `npm install -g @qwen-code/qwen-code` then `qwen --version`.
- Alternative: official curl install script for macOS/Linux; .bat installer for Windows admin shell.
- Code block per platform.

**H2: Authenticating Qwen Code After the OAuth Free Tier Shutdown**
- Direct answer: OAuth free login was discontinued **2026-04-15**. You now need an API key.
- Three paths: (a) Alibaba Cloud Model Studio (DashScope) API key — primary path. (b) Any OpenAI-compatible endpoint (Together, OpenRouter, self-hosted vLLM). (c) Self-host Qwen3-Coder locally with Ollama/vLLM and point Qwen Code at it.
- Walk through `~/.qwen/settings.json` config block with `apiKey`, `baseUrl`, `model`.

**H2: First Run — Launching `qwen` in Your Project**
- `cd` into repo → `qwen` → interactive UI.
- `/help`, `@file.ts` references, slash commands.
- Concrete example: ask it to summarize a repo, then refactor a function — show the prompt and what came back (Avinash's own run).

**H2: Configuring Models and Context Window**
- Default model behavior.
- How to set a different Qwen3-Coder variant in settings.json.
- 256K → 1M context via YaRN: when it's worth it, when it hurts latency/cost.

**H2: Using Qwen Code in CI/CD (Non-Interactive Mode)**
- `-p` flag for headless / scripted runs.
- Example GitHub Action snippet (mirrors the pattern from Avinash's hardening-ai-agents-cicd post).
- Cross-link to [hardening-ai-agents-cicd-prompt-injection](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection).

**H2: Qwen Code vs Claude Code vs Gemini CLI (Practitioner Comparison)**
- Comparison table: pricing, context window, default model, OSS vs closed, CI/CD support, MCP support.
- Honest verdict: when to reach for each. Qwen Code wins on cost-control + self-host, Claude Code wins on reasoning depth, Gemini CLI is being deprecated (Antigravity replaces it on **2026-06-18**).
- Cross-link to [gemini-cli-to-antigravity-cli-guide](https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide) and [ant-cli-getting-started](https://avinashsangle.com/blog/ant-cli-getting-started).

**H2: Common Errors and Fixes**
- `command not found: qwen` → Node 20+ + PATH check.
- `401 Unauthorized` → OAuth removed, swap to API key.
- `model not found` → settings.json `model` field mismatch.
- Rate limit / quota errors from DashScope.

**H2: When NOT to Use Qwen Code**
- Pure Anthropic-shop workflows where MCP and Claude-trained subagents matter.
- Strict on-prem with no Alibaba Cloud egress and no GPU for self-host.

**H2: FAQ** (Accordion, 8 Q&As from candidates above, 40-60 words each)

### Unique Angle
- **Post-OAuth-shutdown reality check** — every competing 2026 guide still says "log in with browser". Avinash's piece is the first that walks through what changed on 2026-04-15 and exactly how to authenticate now.
- **Side-by-side comparison with Claude Code and Gemini CLI/Antigravity** — Avinash already runs all three; only-practitioner POV.
- **CI/CD recipe** — connects to the hardening-ai-agents post; nobody else is writing about Qwen Code in pipelines yet.

### Internal Linking
**Existing posts to link to:**
- `/blog/ant-cli-getting-started`
- `/blog/gemini-cli-to-antigravity-cli-guide`
- `/blog/gemini-3-5-flash-agentic-coding-guide`
- `/blog/claude-managed-agents`
- `/blog/hardening-ai-agents-cicd-prompt-injection`
- `/blog/codex-security-github-setup`

**Future cluster candidates:**
- `qwen-code-mcp-integration`
- `qwen-code-self-host-vllm`
- `qwen-code-vs-claude-code-deep-dive`

### External Authority Links
- https://github.com/QwenLM/qwen-code
- https://qwenlm.github.io/qwen-code-docs/en/users/quickstart/
- https://qwen.ai/qwencode
- https://www.alibabacloud.com/help/en/model-studio/qwen-code-coding-plan

---

## Ready to Write?
Run: `/write-blogpost qwen-code-getting-started`
