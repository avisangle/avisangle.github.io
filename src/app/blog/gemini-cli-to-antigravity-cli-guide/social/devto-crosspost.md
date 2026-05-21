# Dev.to + Hashnode Cross-post - Gemini CLI to Antigravity CLI Migration Guide

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py gemini-cli-to-antigravity-cli-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py gemini-cli-to-antigravity-cli-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Gemini CLI to Antigravity CLI: Migration Guide & Alternatives
DESCRIPTION: Gemini CLI stops on June 18, 2026. Step-by-step migration to Antigravity CLI, rate-limit math, and when to switch to Claude Code or Codex instead.
TAGS: ai, devtools, productivity, devops
CANONICAL_URL: https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide
COVER_IMAGE: https://avinashsangle.com/og-gemini-cli-to-antigravity-cli-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide).

Gemini CLI stops serving free, Google AI Pro, and Google AI Ultra users on **June 18, 2026**. The replacement is **Antigravity CLI**, a closed-source Go binary called `agy` that ships with Antigravity 2.0. You have thirty days to migrate, swap to Claude Code or Codex CLI, or stay on paid Gemini API keys.

## TL;DR

- **Deadline:** June 18, 2026 for free-tier, Google AI Pro, and Google AI Ultra users. Gemini Code Assist Standard and Enterprise licenses keep working.
- **Antigravity CLI** (`agy`) is a Go-based, OAuth-authenticated binary. It is not open source - a sharp break from Gemini CLI's Apache 2.0 codebase.
- **Migration cheat:** `agy plugin import gemini` brings extensions over. Skills move from `.gemini/skills/` to `.agents/skills/`. `GEMINI.md` and `AGENTS.md` both work unchanged. MCP configs move into `mcp_config.json` with `url` renamed to `serverUrl`.
- **Free-tier shock:** developers report the weekly cap empties in 4-5 turns with a 166-hour reset. Gemini CLI's old free tier allowed up to 1,000 requests per day.
- **Real alternatives:** Claude Code with Opus 4.6 (77.2% SWE-bench Verified, 1M context), Codex CLI with sandboxed PR-per-task, paid Gemini API on a Standard license, or the community BYOK clone OpenGravity.

## What's Changing for Gemini CLI Users on June 18, 2026

On May 19, 2026 at Google I/O, Google announced that Gemini CLI and the Gemini Code Assist IDE extensions will stop serving requests for free, Google AI Pro, and Google AI Ultra accounts on June 18, 2026. Antigravity CLI takes its place across the Antigravity 2.0 platform. The official notice lives on the [Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), and the community reaction is unfolding in real time on [GitHub Discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274).

Here is the affected matrix in one read.

| Tier | Status on June 18, 2026 | What you should do |
|------|-------------------------|--------------------|
| Free (Gemini Code Assist for individuals) | Cut off | Migrate to Antigravity CLI or switch tool entirely |
| Google AI Pro ($19.99/mo) | Cut off from Gemini CLI | Antigravity Pro tier auto-applies; check new rate limits |
| Google AI Ultra ($249.99/mo) | Cut off from Gemini CLI | Antigravity Ultra tier auto-applies; no weekly cap |
| Gemini Code Assist Standard / Enterprise | Unchanged | Gemini CLI keeps working; Antigravity CLI is optional |
| Gemini Code Assist for GitHub (paid via GCP) | Existing installs unchanged; new installs blocked | Plan a migration path before the next renewal cycle |

The community response landed fast. Within 24 hours of the May 19 announcement, the official transition thread on GitHub collected roughly 143 thumbs-down reactions versus 4 cheers. The top concerns surface again later in this guide: closed-source successor, tight free-tier rate limits, dropped configuration knobs, and a 30-day deadline that many developers feel is too short for internal tooling rewrites.

## Why This Matters: Open-Source to Closed-Source in 30 Days

Gemini CLI shipped under Apache 2.0 with an open contributor model. You could fork it, audit it, run it against a paid API key on your own terms, and submit pull requests upstream. Antigravity CLI does not preserve that pattern. The binary is closed source at launch and the source repo has not been opened on GitHub. [Issue #27304](https://github.com/google-gemini/gemini-cli/issues/27304) on the gemini-cli repo asks the question directly. Google has not committed to publishing it.

The Register framed the move plainly in its [May 20, 2026 piece](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605): open-source Gemini CLI is being replaced by a closed-source successor in 30 days. That headline reflects what a meaningful chunk of the contributor community is feeling. In Discussion #27274, one of the most-upvoted concerns is that volunteer work on the Apache 2.0 codebase now flows into a proprietary product whose free tier is far thinner than what it replaces.

That is a real decision input, not a complaint to wave away. If your reason for picking Gemini CLI was Apache 2.0 portability, local forking, or vendor-neutral plumbing inside a regulated environment, Antigravity CLI does not give you back those properties. Two paths preserve them: stay on a paid Gemini API key with the open-source Gemini CLI fork, or switch tool.

## Who Can Keep Using Gemini CLI After June 18, 2026

The enterprise carveout is the short answer. Per the [official transition post](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), three paths keep Gemini CLI serving requests after the deadline.

1. **Gemini Code Assist Standard or Enterprise.** Per-seat license sold through Google Cloud. The CLI and the IDE extensions both keep working. This is the path most large teams already use.
2. **Paid Gemini API key.** Issue a key through [AI Studio](https://aistudio.google.com/) or Vertex AI and wire it into the open-source Gemini CLI binary. The first-party free endpoints stop, but the Apache 2.0 toolchain and your existing skills, hooks, and MCP configs do not need to change.
3. **Gemini Code Assist for GitHub via GCP.** Existing paid installs keep working on June 18. New installs on GitHub orgs are blocked on that date.

One practitioner note. If your internal tooling depends on Gemini CLI inside CI/CD or an LLM gateway, the paid-API-key path is often cheaper than upgrading every dev seat to Antigravity Ultra. You also keep the open-source surface, which matters for audit and reproducibility.

## How to Install Antigravity CLI (`agy`)

Antigravity CLI installs through a single platform-specific script. The binary is named `agy` and lands at `~/.local/bin/agy` on macOS and Linux.

### macOS and Linux

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

### Windows PowerShell

```powershell
irm https://antigravity.google/cli/install.ps1 | iex
```

### Windows CMD

```bash
curl -fsSL https://antigravity.google/cli/install.cmd -o install.cmd && install.cmd && del install.cmd
```

### Add to PATH

On macOS and Linux, the installer drops the binary into `~/.local/bin/`. If that directory is not on your `PATH`, add it:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
```

### First Run and OAuth

Run `agy` with no arguments. The CLI opens your default browser and walks you through Google OAuth. Sign in with the same account you used for Gemini CLI so plugin imports pick up the right workspace. On a remote SSH box, `agy` detects the session and prints an authorization URL you open locally - this is a small UX improvement over Gemini CLI's old flow.

## How to Migrate from Gemini CLI to Antigravity CLI

This is a seven-step migration. Plan for 30-60 minutes on a workspace with custom skills, hooks, and MCP servers.

### Step 1 - Install agy without uninstalling gemini

Keep both binaries during the transition. You will want to run a workflow through Gemini CLI and again through Antigravity CLI to confirm parity before cutting over.

### Step 2 - Authenticate

Sign in with the same Google account as your old Gemini CLI install.

### Step 3 - Import Gemini CLI plugins

```bash
agy plugin import gemini
```

The command scans `~/.gemini/extensions/` and registers each entry as an Antigravity plugin. Extensions that depend on Node.js-only APIs trigger a warning during import - you will need the plugin author to ship an Antigravity-compatible build.

### Step 4 - Move workspace skills

```bash
# Per workspace
cp -r .gemini/skills/ .agents/skills/

# Confirm Antigravity finds them
agy skills list
```

Global skills under `~/.config/gemini/skills/` auto-load from the new path. Workspace-local skills are the ones you need to copy by hand.

### Step 5 - Migrate MCP server configs

Gemini CLI stored MCP configs inline inside `settings.json`. Antigravity CLI expects a separate `mcp_config.json`, and the `url` field on each server is renamed to `serverUrl`.

Before (`.gemini/settings.json`):

```json
{
  "mcpServers": {
    "github": {
      "url": "https://mcp.github.com",
      "auth": "oauth"
    }
  }
}
```

After (`.agents/mcp_config.json`):

```json
{
  "servers": {
    "github": {
      "serverUrl": "https://mcp.github.com",
      "auth": "oauth"
    }
  }
}
```

### Step 6 - Keep your context file unchanged

Both `GEMINI.md` and `AGENTS.md` are read by Antigravity CLI without modification. No rename, no reformat. If your team already standardized on `AGENTS.md` for cross-tool portability with Claude Code, you are already done with this step.

### Step 7 - Validate hooks end-to-end

Pre-tool-call hooks, stop hooks, and JSON event hooks fire the same way under Antigravity CLI. Custom themes embedded in extensions are dropped silently during plugin import - if any of your hooks depended on theme metadata, that link breaks. Run a representative workflow before you trust the migration.

### What does NOT carry over

- **Custom themes** embedded inside extensions are dropped on import. Re-author them as Antigravity plugins if you need them back.
- **Terminal-level `gemini skills` command.** Antigravity CLI does not expose an equivalent. Skill management moved inside the agent via `/skills`.
- **Per-call temperature, top_k, and system instruction overrides.** Gemini CLI flags for these are gone. Multiple comments on Discussion #27274 flag this as a workflow regression for fine-tuned prompts.

## Antigravity CLI Rate Limits and Pricing: What to Expect

The free-tier rate limit is the headline. Developers on Discussion #27274 report hitting the weekly cap within 4-5 chat turns, with reset windows around 166 hours. Gemini CLI's old free tier allowed up to 1,000 requests per day. The drop is steep, and it is the single largest behavior change for individual developers.

| Tier | Monthly cost | Weekly cap | Refresh | Best for |
|------|--------------|-----------|---------|----------|
| Free | $0 | Yes (tight) | ~5h to cap | Curious devs only |
| Google AI Pro | $19.99 | Yes | 5h then cap | Solo devs, side projects |
| Google AI Ultra | $249.99 | No | 5h refresh | Heavy daily use, agent swarms |
| Gemini Code Assist Standard | Per seat | n/a | n/a | Teams keeping Gemini CLI |

Pricing detail per the [Antigravity pricing page](https://antigravity.google/pricing): Pro includes 1,000 credits per month, Ultra includes 25,000 credits per month, credits cost $0.01 each, and bulk packs run $199 per 20,000. The single biggest functional difference between Pro and Ultra is the weekly cap. Ultra has none. Pro has one, and the cap on premium models bites under sustained agent workloads (multi-file refactors, long context loops, background subagents).

The honest read: "AI Pro" branding implies room to work, but Pro's weekly cap on premium models is the wall most paying developers will hit by midweek. If your workload depends on heavy terminal use, budget Ultra or eat the Pro overage at $0.01 per credit.

## Antigravity CLI vs Claude Code vs Codex CLI: Pick by Workload

Three terminal-first agent CLIs now compete for the developer who used to type `gemini`. The right answer is workload-specific.

| Dimension | Antigravity CLI | Claude Code | Codex CLI |
|-----------|-----------------|-------------|-----------|
| Default model | Gemini 3.1 Pro (+ Claude Opus/Sonnet 4.6, GPT-OSS 120B) | Claude Opus 4.6, 1M context | GPT-5.5 family |
| SWE-bench Verified | mid-70s (Gemini 3.1 Pro) | 77.2% (Opus 4.6) | Competitive |
| Source model | Closed-source Go binary | Closed-source TypeScript binary | Closed-source binary + sandbox |
| Workflow | Multi-agent, async background | Terminal-native, scriptable | Sandboxed PR per task |
| Free tier | Tight weekly cap | None (API or Pro/Max) | None (API or ChatGPT Plus) |
| Best for | Devs in Google's ecosystem | MCP-heavy, scripted CI agents | PR-per-task, sandboxed runs |

### Decision rules I follow

- Already paying for Google AI Pro or Ultra for other reasons - migrate to Antigravity CLI and absorb the rate-limit shock.
- Need long-context refactors, MCP servers, hooks, and scripted CI agents - switch to Claude Code. The 1M context window plus Opus 4.6 is the strongest fit for terminal-first agentic coding.
- Want sandboxed PR-per-task with light terminal footprint - use Codex CLI.
- Apache 2.0 portability is non-negotiable - keep Gemini CLI on a paid Gemini API key issued through AI Studio or Vertex AI. You lose the free first-party endpoints, not the toolchain.
- Want to play without Google's rate limits at all - look at [OpenGravity](https://github.com/ab-613/OpenGravity), a community BYOK clone of the Antigravity UI. It is alpha, GPL-3.0, and does not pretend to match Antigravity CLI on capability - but it does sidestep the weekly cap.

## A 30-Day Countdown Plan to June 18

One screen. Print it, pin it, or paste it into your team's wiki.

1. **This week (May 21-27):** decide migrate vs switch vs stay using the decision rules above. Make the call as a team, not per developer.
2. **Next 7 days (May 28-June 3):** install `agy` in parallel with `gemini` on every workstation. Nobody uninstalls anything yet.
3. **Next 14 days (June 4-10):** run `agy plugin import gemini` on each workspace. Diff `.agents/` against `.gemini/` and re-run failing skills. File migration bugs on Discussion #27274 while the thread is still active.
4. **Days 15-25 (June 11-15):** validate hooks and MCP servers end-to-end. Run a real workflow under `agy` and compare output to a Gemini CLI run.
5. **Days 25-30 (June 16-17):** archive any custom themes you depended on. Document what got dropped. Update your team's internal runbooks.
6. **Day 30 (June 18):** Gemini CLI free, Pro, and Ultra requests stop. You should already be on `agy` or your chosen alternative. Do not be the team that finds out at 9:01 AM.

## Frequently Asked Questions

### When does Gemini CLI stop working?

Gemini CLI and the Gemini Code Assist IDE extensions stop serving requests for free users, Google AI Pro, and Google AI Ultra subscribers on June 18, 2026. Organizations on Gemini Code Assist Standard or Enterprise licenses keep their existing access. New installs on GitHub orgs are also blocked on that date.

### Who is affected by the June 18, 2026 Gemini CLI shutdown?

Three groups: free-tier users of Gemini Code Assist for individuals, Google AI Pro subscribers at $19.99/mo, and Google AI Ultra subscribers at $249.99/mo. Enterprise customers on Standard or Enterprise licenses, and Gemini Code Assist for GitHub paid through Google Cloud, keep working without change.

### Is Antigravity CLI open source?

No. Antigravity CLI ships as a closed-source Go binary called agy. Gemini CLI was Apache 2.0 with public contributions. The community filed Issue #27304 on the gemini-cli repo asking for source release, and Google has not committed to publishing it.

### How do I install Antigravity CLI?

On macOS and Linux, run `curl -fsSL https://antigravity.google/cli/install.sh | bash`. On Windows PowerShell, run `irm https://antigravity.google/cli/install.ps1 | iex`. The binary lands at `~/.local/bin/agy`. Add that path to your shell profile if it is not already on your PATH, then run `agy` to start the OAuth login flow.

### How do I migrate my Gemini CLI plugins, skills, and MCP servers?

Run `agy plugin import gemini` to bring extensions over. Move workspace skills from `.gemini/skills/` to `.agents/skills/`. Migrate MCP configs from inline `settings.json` into a separate `mcp_config.json` and rename the `url` field to `serverUrl`. `GEMINI.md` and `AGENTS.md` both work in Antigravity CLI with no rename required.

### Does GEMINI.md still work in Antigravity CLI?

Yes. Antigravity CLI reads both `GEMINI.md` and `AGENTS.md` without modification. You do not need to rename, move, or reformat your existing project context file.

### What are Antigravity CLI's free-tier rate limits?

The free tier uses a weekly quota that refreshes every five hours up to a hard weekly cap. Developers in GitHub Discussion #27274 report exhausting the cap in 4-5 chat turns, with a 166-hour reset window. Gemini CLI's old free tier allowed up to 1,000 requests per day, so the drop is steep.

### Should I migrate to Antigravity CLI or switch to Claude Code?

If you already pay for Google AI Pro or Ultra, migrate and absorb the rate-limit shock. If you need long-context refactors, scripted CI agents, MCP-heavy workflows, or terminal composability, switch to Claude Code with Opus 4.6. The 1M context window and 77.2% SWE-bench Verified score make it the strongest alternative for terminal-first coding.

### Can I keep using Gemini CLI after June 18 with a paid API key?

Yes. The open-source Gemini CLI binary keeps working if you point it at a paid Gemini API key issued through AI Studio or Vertex AI, or if your team holds a Gemini Code Assist Standard or Enterprise license. You lose Google's first-party free endpoints but keep the Apache 2.0 toolchain.

### What Gemini CLI features don't carry over to Antigravity CLI?

Custom themes embedded in extensions are dropped silently during plugin import. The terminal-level `gemini skills` command has no equivalent in agy; skills are managed inside the agent via `/skills` only. Several Gemini CLI flags for temperature, top_k, and system instruction overrides are not exposed in the new CLI surface.

---

Read the full guide on [avinashsangle.com](https://avinashsangle.com/blog/gemini-cli-to-antigravity-cli-guide).
