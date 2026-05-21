# Content Brief: Gemini CLI to Antigravity CLI Migration Guide

**Slug:** `gemini-cli-to-antigravity-cli-guide`
**Status:** ready to write
**Research date:** 2026-05-21

---

## Phase 1 — Topic Validation

### Search demand

- **Hard news peg (May 19, 2026):** At I/O 2026 Google announced that Gemini CLI and Gemini Code Assist IDE extensions will stop serving requests on June 18, 2026 for free-tier users, Google AI Pro, and Google AI Ultra subscribers. Replacement is Antigravity CLI, a Go binary distributed as part of Antigravity 2.0. Coverage: [Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), [TechCrunch](https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/), [TechRadar](https://www.techradar.com/pro/google-is-making-gemini-cli-users-switch-to-its-new-antigravity-2-0-so-what-will-it-mean-for-you), [Virtualization Review](https://virtualizationreview.com/articles/2026/05/19/google-moves-gemini-cli-into-antigravity-cli-as-agent-platform-expands.aspx).
- **Backlash thread (May 19-20, 2026):** [GitHub Discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274) collected 143 thumbs-down vs 4 cheers within 24 hours. Top complaints: closed-source successor, weekly free-tier quota that empties in 4-5 requests with a 166-hour reset, dropped configuration knobs (temperature, top_k, system instructions), missing UX polish. Lead PM Dmitry Lyalin posted timeline + feature list; no response to specific concerns.
- **Hacker News signals:** [Gemini CLI will stop working from June 18, 2026](https://news.ycombinator.com/item?id=48196867) (front page, 50+ points). [Google Antigravity 2.0](https://news.ycombinator.com/item?id=48196838) launch thread, same day. [Ask HN: Antigravity 2.0 installer breaks existing Antigravity IDEs](https://news.ycombinator.com/item?id=48199074) (May 19-20).
- **Press follow-up (May 20, 2026):** [The Register — "Bye-bye, Gemini CLI; Google nudges devs toward Antigravity"](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605) frames the move as closed-source replacement of an Apache 2.0 project.
- **Active search queries:** "gemini cli to antigravity cli migration", "gemini cli shutdown date", "antigravity cli alternatives", "antigravity cli rate limits", "agy install command", "is antigravity cli open source", "should I switch from gemini cli to claude code", "antigravity migrate --from-gemini-cli".

### Competition analysis (top results)

1. **[Google Developers Blog — official announcement](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)** — marketing tone. Timeline + feature carryover list. No install commands, no decision framework, no alternatives.
2. **[Migrating from Gemini CLI — antigravity.google/docs](https://www.antigravity.google/docs/gcli-migration)** — sparse at the time of writing (May 21, 2026). Will fill in over the coming weeks per Google's own promise of "video walkthroughs."
3. **[agentpedia.codes — Gemini CLI → Antigravity CLI Migration Guide](https://agentpedia.codes/blog/gemini-cli-to-antigravity-cli-migration)** — strongest mechanical guide: 7 steps, config field-mapping tables (e.g., MCP `url` → `serverUrl`), `.gemini/skills/` → `.agents/skills/`. No decision framework, no rate-limit math, no alternatives analysis.
4. **[aimadetools.com — Complete Guide (June 18 Deadline)](https://www.aimadetools.com/blog/migrate-gemini-cli-to-antigravity-cli/)** — mechanical, overlapping with agentpedia. Heavier on screenshots.
5. **[DEV Community / Medium — Getting Started with Antigravity CLI](https://dev.to/gde/getting-started-with-antigravity-cli-183g)** — fresh-install posts. Don't address Gemini CLI users explicitly.
6. **[DataCamp — Claude Code vs Antigravity](https://www.datacamp.com/blog/claude-code-vs-antigravity)** and **[XDA — One month with Claude Code, Antigravity, Codex](https://www.xda-developers.com/used-claude-code-google-antigravity-codex-for-month-have-clear-winner/)** — comparison content. Don't speak to the migration deadline.
7. **News coverage** ([TechCrunch](https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/), [TechRadar](https://www.techradar.com/pro/google-is-making-gemini-cli-users-switch-to-its-new-antigravity-2-0-so-what-will-it-mean-for-you), [The Register](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605)) — what happened, not what to do.

**Gap we fill:** No post combines (a) the mechanical migration cheatsheet (commands, config paths, MCP field renames, what doesn't carry over), (b) the practitioner decision framework (migrate vs switch to Claude Code / Codex CLI vs stay on paid Gemini API vs use OpenGravity), (c) honest rate-limit math grounded in developer reports (Gemini CLI 1,000 free requests/day vs Antigravity CLI free-tier weekly cap that empties in 4-5 requests), (d) the closed-source vs Apache 2.0 angle with Avinash's recommendation on what that means for teams who care about portability, (e) a 30-day countdown framing tied to the June 18, 2026 deadline.

### AI citation potential

**Very high, time-boxed window.** Search demand for "what to do about Gemini CLI shutting down" is concentrated between now (May 21) and the June 18 deadline. Developers asking ChatGPT, Claude, Perplexity, and Gemini "should I migrate to Antigravity CLI or switch to Claude Code?" currently hit a wall — Google's marketing blog and two mechanical guides. A practitioner decision piece with the rate-limit math and side-by-side alternatives is highly citable for the next 30-45 days, then sticky as the canonical "what happened in May 2026" reference. Adding HN/GitHub discussion sentiment as primary source citations increases pickup odds further.

### Freshness opportunity

- May 19 announcement → June 18 deadline → 30-day window where every developer who used the free Gemini CLI needs to decide. Article should label itself **"Updated for the June 18, 2026 deadline"** prominently to signal currency.
- Antigravity CLI is brand new (binary `agy`, Go-based, OAuth flow). Most training data predates it. Authoritative content here lands before search results consolidate.
- Cross-vendor moment: Claude Code Opus 4.6 (77.2% SWE-bench) and Codex CLI sandbox model both compete for ex-Gemini-CLI users. The piece can pre-empt the comparison shopping.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`gemini cli to antigravity cli migration`

### Secondary keywords
- `gemini cli shutdown june 18 2026`
- `antigravity cli getting started`
- `antigravity cli vs claude code`
- `gemini cli alternatives`
- `agy install command`
- `is antigravity cli open source`

### Long-tail queries
1. how to migrate from gemini cli to antigravity cli
2. when does gemini cli stop working
3. antigravity cli rate limits free tier
4. how to install antigravity cli on mac and linux
5. does gemini cli still work after june 18 2026
6. antigravity cli vs claude code vs codex cli for terminal coding
7. should I switch to claude code instead of antigravity cli
8. how to import gemini cli plugins into antigravity cli
9. .gemini/skills vs .agents/skills directory migration
10. antigravity cli enterprise license exception

### FAQ candidates (mirror real search queries)
1. When does Gemini CLI stop working?
2. Who is affected by the June 18, 2026 Gemini CLI shutdown?
3. Is Antigravity CLI open source?
4. How do I install Antigravity CLI?
5. How do I migrate my Gemini CLI plugins, skills, and MCP servers to Antigravity CLI?
6. Does GEMINI.md still work in Antigravity CLI?
7. What are Antigravity CLI's free-tier rate limits?
8. Should I migrate to Antigravity CLI or switch to Claude Code?
9. Can I keep using Gemini CLI after June 18 with a paid API key?
10. What Gemini CLI features don't carry over to Antigravity CLI?

---

## Phase 3 — Content Brief

### Article metadata
- **Title:** `Gemini CLI to Antigravity CLI: Migration Guide & Alternatives` (61 chars)
- **Slug:** `gemini-cli-to-antigravity-cli-guide`
- **Meta description:** `Gemini CLI stops on June 18, 2026. Step-by-step migration to Antigravity CLI, rate-limit math, and when to switch to Claude Code or Codex instead.` (148 chars)
- **Target word count:** 2,800 words
- **Estimated read time:** 11 min
- **Category:** AI Development / Developer Tools
- **Lucide icon:** `ArrowRightLeft` (signals migration / switch; distinct from `Terminal` used on Ant CLI getting started and `ShieldAlert` used on security posts)
- **Publish date:** 2026-05-21
- **Tags:** Gemini CLI, Antigravity CLI, AI Coding Agents, Claude Code, Codex CLI, Developer Tools, Migration

### Direct answer (first 40-60 words)

Gemini CLI stops serving free, Google AI Pro, and Google AI Ultra users on June 18, 2026. The replacement is Antigravity CLI, a closed-source Go binary called `agy` that ships with Antigravity 2.0. You have thirty days to migrate, swap to Claude Code or Codex CLI, or stay on paid Gemini API keys.

### TL;DR bullets

- **Deadline:** June 18, 2026, for free-tier, Google AI Pro, and Google AI Ultra users. Gemini Code Assist Standard/Enterprise licenses keep working.
- **Antigravity CLI** (`agy`) is Go-based, OAuth-authenticated, and currently **not open source** — a sharp break from Gemini CLI's Apache 2.0 codebase.
- **Migration cheat:** `agy plugin import gemini` brings extensions over; skills move from `.gemini/skills/` to `.agents/skills/`; `GEMINI.md` and `AGENTS.md` both work unchanged; MCP configs move from `settings.json` into `mcp_config.json` with `url` renamed to `serverUrl`.
- **Free-tier shock:** Developers report 4-5 chat turns drain the weekly cap, with a 166-hour reset. Gemini CLI's old free tier was up to 1,000 requests/day.
- **Real alternatives:** Claude Code (Opus 4.6, 77.2% SWE-bench Verified, 1M context), Codex CLI (sandboxed PR-by-PR workflow), paid Gemini API via Gemini Code Assist Standard, or the community BYOK clone OpenGravity.

### Content outline

#### H2: What's changing for Gemini CLI users on June 18, 2026

- Direct answer: Gemini CLI and the Gemini Code Assist IDE extensions stop serving requests for free, Google AI Pro, and Google AI Ultra accounts on June 18, 2026. Antigravity CLI takes its place across Antigravity 2.0.
- Affected tiers (sourced verbatim from [Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)):
  - Free users of Gemini Code Assist for individuals — cut off.
  - Google AI Pro ($19.99/mo) — cut off from Gemini CLI access; gets new Antigravity Pro rate limits ([Google blog](https://blog.google/feed/new-antigravity-rate-limits-pro-ultra-subsribers/)).
  - Google AI Ultra ($249.99/mo) — cut off from Gemini CLI; gets Antigravity Ultra tier with no weekly cap.
  - Gemini Code Assist Standard / Enterprise — unchanged. Gemini CLI still works for these licenses.
  - Gemini Code Assist for GitHub (paid via GCP) — unchanged for now; new installs disabled June 18.
- Stat to cite: 143 thumbs-down vs 4 cheers on [GitHub Discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274) within 24 hours of the announcement (paraphrase, not direct quote).

#### H2: Why this matters: open-source to closed-source, in 30 days

- Gemini CLI shipped under Apache 2.0 with public contributions. Antigravity CLI is a closed-source Go binary; the source is not on GitHub at time of writing ([Issue #27304](https://github.com/google-gemini/gemini-cli/issues/27304); [The Register, May 20, 2026](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605)).
- Contributor sentiment in [GitHub Discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274): volunteer labor concern, dropped knobs (temperature, top_k, system instructions), forced timeline.
- Quote-paraphrase pattern (NOT direct quote, to stay safe): one top reply argued that open-source contributions are being absorbed into a proprietary product that now favors enterprise customers ([Discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274)).
- Practitioner framing: if your reason for picking Gemini CLI was Apache 2.0 portability or local forking, Antigravity CLI does not preserve that. That is a real decision input, not a complaint to wave away.

#### H2: Who can keep using Gemini CLI after June 18, 2026

- The enterprise carveout in one paragraph. Source: [Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/).
- Three paths that keep Gemini CLI working:
  1. **Gemini Code Assist Standard / Enterprise** license (per-seat, sold through Google Cloud).
  2. **Paid Gemini API key** wired through Vertex AI or AI Studio (you self-host the CLI wrapper).
  3. **Gemini Code Assist for GitHub** on existing paid GCP orgs (until Google announces a separate sunset).
- Practitioner tip: if your team relies on Gemini CLI inside an internal tool, switching to the **paid Gemini API + the open-source CLI fork** is often cheaper than Antigravity Ultra and keeps you on Apache 2.0 tooling.

#### H2: How to install Antigravity CLI (`agy`)

- Direct answer: one curl command for macOS/Linux, one PowerShell command for Windows. Binary lands at `~/.local/bin/agy` and you may need to add it to your `PATH`. Source: [Using AGY CLI](https://www.antigravity.google/docs/cli-using), [Medium getting-started post](https://xbill999.medium.com/getting-started-with-antigravity-cli-26c5da90951f).

```bash
# macOS / Linux
curl -fsSL https://antigravity.google/cli/install.sh | bash

# Windows PowerShell
irm https://antigravity.google/cli/install.ps1 | iex

# Windows CMD
curl -fsSL https://antigravity.google/cli/install.cmd -o install.cmd && install.cmd && del install.cmd
```

- Add to PATH if needed:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
```

- First run opens a browser for OAuth. SSH-mode auth is supported via printed URL — practical for remote dev boxes.
- This is the section that earns HowTo schema (each step gets `@type: HowToStep`).

#### H2: How to migrate from Gemini CLI to Antigravity CLI

A 7-step mechanical migration. Source for the field mappings: [agentpedia.codes guide](https://agentpedia.codes/blog/gemini-cli-to-antigravity-cli-migration) (cite, then add Avinash's commentary).

1. **Install `agy`** (above). Don't uninstall `gemini` yet — keep both during the transition.
2. **Authenticate** with the same Google account: `agy` (no args) opens the browser. On SSH, follow the printed URL.
3. **Import Gemini CLI plugins:** `agy plugin import gemini` scans `~/.gemini/extensions/` and registers each as an Antigravity plugin. Plugins that depend on Node.js-only APIs warn during import.
4. **Move skills:** copy `.gemini/skills/` to `.agents/skills/` per workspace. Global skills under `~/.config/gemini/skills/` auto-load from the new path.
5. **Migrate MCP configs:** Gemini CLI stored these inline in `settings.json`. Antigravity CLI expects a separate `mcp_config.json`. The field `url` is renamed to `serverUrl`. Example before/after JSON snippet (small, no secrets).
6. **Keep your context file as-is:** both `GEMINI.md` and `AGENTS.md` are read without modification. No rename required.
7. **Validate hooks** by running a representative workflow. Stop-hooks, pre-tool-call hooks, and JSON-based event hooks fire the same way; if anything was custom-themed, those theme components are dropped silently.

What is NOT carried over:
- **Custom themes** embedded in extensions.
- **Terminal-level `gemini skills` CLI command** — `agy` does not expose an equivalent. Skill management is inside the agent now via `/skills`.
- **Per-call temperature, top_k, system instruction overrides** as exposed in Gemini CLI flags. Antigravity CLI hides them. ([Discussion #27274 complaint thread](https://github.com/google-gemini/gemini-cli/discussions/27274).)

#### H2: Antigravity CLI rate limits and pricing: what to expect

- Free tier reality, sourced from [Discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274) and [XDA Developers](https://www.xda-developers.com/tried-googles-antigravity-limitation-made-close-it-good/): developers report hitting the weekly cap within 4-5 chat turns, with reset windows around 166 hours. Gemini CLI's free tier permitted up to 1,000 requests/day. The drop is large — quantify it.
- **Google AI Pro ($19.99/mo):** rate limits refresh every 5 hours with a weekly cap; 1,000 included credits/month at $0.01 each. Source: [Antigravity pricing](https://antigravity.google/pricing), [vibecoding.app summary](https://vibecoding.app/blog/google-antigravity-pricing-2026).
- **Google AI Ultra ($249.99/mo):** no weekly cap; 25,000 included credits/month. Bulk credits at $199/20,000.
- Practitioner table to include:

| Tier | Monthly cost | Weekly cap | Refresh | Best for |
|------|-------------|-----------|---------|----------|
| Free | $0 | Yes (tight) | ~5h then cap | Curious devs only |
| AI Pro | $19.99 | Yes | 5h then cap | Solo devs, side projects |
| AI Ultra | $249.99 | No | 5h | Daily heavy use, agent swarms |
| GCAA Standard | varies | Per seat | n/a | Teams keeping Gemini CLI |

- Honest closing: "AI Pro" branding implies room to work; in practice the weekly cap on premium models bites under sustained agent workloads.

#### H2: Antigravity CLI vs Claude Code vs Codex CLI: pick by workload

- Cross-link to existing blog post on Claude Code adoption patterns and to the Ant CLI getting-started post.
- Comparison frame (sources: [DataCamp](https://www.datacamp.com/blog/claude-code-vs-antigravity), [XDA's one-month review](https://www.xda-developers.com/used-claude-code-google-antigravity-codex-for-month-have-clear-winner/), [Lushbinary 2026 roundup](https://lushbinary.com/blog/ai-coding-agents-comparison-cursor-windsurf-claude-copilot-kiro-2026/)):

| Dimension | Antigravity CLI | Claude Code | Codex CLI |
|-----------|----------------|-------------|-----------|
| Model | Gemini 3.1 Pro (+ Claude Opus/Sonnet 4.6, GPT-OSS 120B via Antigravity) | Claude Opus 4.6, 1M context | GPT-5.5 family |
| SWE-bench Verified | mid-70s (Gemini 3.1 Pro) | 77.2% (Opus 4.6) | competitive |
| Distribution | Closed-source Go binary | Closed-source TS/Node binary | Closed-source binary + sandbox |
| Workflow | Multi-agent, async background tasks | Terminal-native, scriptable | Sandboxed PR-per-task |
| Free tier | Tight weekly cap | None (API or Claude Pro/Max) | None (API or ChatGPT Plus) |
| Best for | Devs already in Google's ecosystem | Composable scripted workflows, MCP-heavy stacks | PR-style async coding tasks |

- Decision rules (Avinash's recommendation):
  - Already paying for Google AI Pro/Ultra for other reasons → migrate to Antigravity CLI, eat the rate-limit shock.
  - Need long-context refactors, MCP servers, hooks, scripted CI agents → switch to Claude Code.
  - Want PR-per-task, sandboxed execution, light terminal footprint → Codex CLI.
  - Apache 2.0 portability is non-negotiable → stay on paid Gemini API with Gemini CLI's last open-source build (it remains under Apache 2.0; the upstream binary is what loses access to Google's first-party endpoints).
  - Want to experiment without Google's rate limits → look at [OpenGravity](https://github.com/ab-613/OpenGravity), a BYOK community clone of the Antigravity UI.

#### H2: A decision flowchart for your team

A short numbered list, written as if reading a flowchart, ending with a clear recommendation per branch. Mirror the decision rules above. The goal is for a reader to land on the page, scroll once, and know which path is theirs.

#### H2: What to do this week (30-day countdown)

Concrete checklist that fits on a single screen.

1. **This week:** decide migration vs switch vs stay (use the flowchart).
2. **Next 7 days:** install `agy` in parallel with `gemini`. Don't uninstall.
3. **Next 14 days:** run `agy plugin import gemini` on each workspace. Diff `.agents/` vs `.gemini/` and re-run failing skills.
4. **Days 15-25:** validate hooks and MCP servers end-to-end. File migration bugs against the [official discussion thread](https://github.com/google-gemini/gemini-cli/discussions/27274).
5. **Days 25-30:** archive any custom themes you depended on; document what got dropped.
6. **Day 30 (June 18):** Gemini CLI free/Pro/Ultra requests stop. Don't be the team that finds out at 9:01 AM.

#### H2: FAQ

(10 Q&As, 40-60 words each — see FAQ candidates above.)

### Unique angle

1. **Decision framework, not just migration steps.** Every competing post tells you how to run `agy plugin import gemini`. None tell you whether you should. This piece does both, with rate-limit math and side-by-side numbers.
2. **Rate-limit shock, quantified.** Gemini CLI's 1,000 free requests/day → Antigravity CLI free tier that exhausts in 4-5 turns. Calling this out with cited developer reports is the most useful thing a working engineer can read this month.
3. **Open-source vs closed-source angle, fairly framed.** Acknowledges the legitimate complaint without becoming a rant. Names a real alternative (paid Gemini API + Apache 2.0 fork) for teams who care.
4. **Four real alternatives, not just "or use something else."** Claude Code, Codex CLI, paid Gemini API, and OpenGravity each get a one-line decision rule.
5. **30-day countdown checklist.** No competitor lays out the week-by-week plan against the June 18 deadline. This is the part that gets bookmarked.
6. **Cross-vendor tone from Avinash.** The blog already covers Claude Code, Codex Security, Ant CLI, and managed agents. The piece reads as a practitioner who uses several tools, not as anti-Google reaction copy.

### Internal linking opportunities

- [Ant CLI Getting Started](https://avinashsangle.com/blog/ant-cli-getting-started) — sister post on a comparable agent CLI; pairs naturally with the "alternatives" section.
- [OpenAI Codex Security GitHub Setup Guide](https://avinashsangle.com/blog/codex-security-github-setup) — Codex ecosystem context for the "Codex CLI" alternative column.
- [Claude Managed Agents Outcomes](https://avinashsangle.com/blog/claude-managed-agents-outcomes) — proof point for Claude Code-style multi-agent workflows.
- [Claude Code Cost Tracking](https://avinashsangle.com/blog/claude-code-cost-tracking) — bridges the rate-limit and cost section to the broader cost-discipline narrative.
- [Hardening AI Agents in CI/CD Against Prompt Injection](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection) — adjacent for teams worried about migrating prompt-injection-sensitive workflows.
- [Regression-Proofing Claude Code Workflows](https://avinashsangle.com/blog/regression-proofing-claude-code-workflows) — pairs with the "validate before June 18" checklist.

### Future cluster

- "Antigravity CLI rate limits: a week of real usage on the AI Pro tier"
- "Migrating Gemini CLI MCP servers to Antigravity CLI: a worked example"
- "Claude Code vs Antigravity CLI head-to-head: one repo, one prompt, two results"
- "Self-hosting Gemini CLI on a paid API key after June 18, 2026"
- "OpenGravity vs Antigravity CLI: when a BYOK community clone is the right answer"

### Authoritative external links

- [An important update: Transitioning Gemini CLI to Antigravity CLI — Google Developers Blog, May 19 2026](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
- [Migrating from Gemini CLI — Antigravity docs](https://www.antigravity.google/docs/gcli-migration)
- [Using AGY CLI — Antigravity docs](https://www.antigravity.google/docs/cli-using)
- [Antigravity pricing](https://antigravity.google/pricing)
- [Google AI Pro and Ultra rate limits update — Google blog](https://blog.google/feed/new-antigravity-rate-limits-pro-ultra-subsribers/)
- [GitHub Discussion #27274 — community reaction](https://github.com/google-gemini/gemini-cli/discussions/27274)
- [Issue #27304 — Antigravity CLI is it open source?](https://github.com/google-gemini/gemini-cli/issues/27304)
- [Bye-bye, Gemini CLI — The Register, May 20 2026](https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605)
- [Google launches Antigravity 2.0 — TechCrunch, May 19 2026](https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/)
- [Google is making Gemini CLI users switch — TechRadar](https://www.techradar.com/pro/google-is-making-gemini-cli-users-switch-to-its-new-antigravity-2-0-so-what-will-it-mean-for-you)
- [I/O 2026 developer highlights — Google blog](https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/)
- [Gemini CLI → Antigravity CLI Migration Guide — agentpedia.codes](https://agentpedia.codes/blog/gemini-cli-to-antigravity-cli-migration)
- [Claude Code vs Antigravity — DataCamp](https://www.datacamp.com/blog/claude-code-vs-antigravity)
- [One month with Claude Code, Antigravity, and Codex — XDA Developers](https://www.xda-developers.com/used-claude-code-google-antigravity-codex-for-month-have-clear-winner/)
- [Tried Antigravity for a week, limitation made me close it — XDA Developers](https://www.xda-developers.com/tried-googles-antigravity-limitation-made-close-it-good/)
- [Show HN: OpenGravity — Hacker News](https://news.ycombinator.com/item?id=48100192)
- [Hacker News: Gemini CLI will stop working from June 18, 2026](https://news.ycombinator.com/item?id=48196867)

---

## Ready to Write?
Run: `/write-blogpost gemini-cli-to-antigravity-cli-guide`
