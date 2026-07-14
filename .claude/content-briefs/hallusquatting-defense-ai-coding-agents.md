# Content Brief: Defending AI Coding Agents Against HalluSquatting

**Slug:** `hallusquatting-defense-ai-coding-agents`
**Status:** ready to write
**Research date:** 2026-07-15
**Source:** PR #49 (merged, commit `ecf2a58`)

---

## Phase 1 — Topic Validation

### Search demand

- **News peg (July 8, 2026):** Spira, Cohen, Feldman, Bitton, Wool, and Nassi (Tel Aviv University / Technion / Intuit) published ["Beware of Agentic Botnets: Scalable Untargeted Promptware Attacks via Universal and Transferable Adversarial HalluSquatting"](https://arxiv.org/abs/2607.07433) (arXiv:2607.07433). 15+ outlets covered it within a week: The Hacker News, SecurityWeek, Tom's Hardware, DevOps.com, SC Media, gbhackers, SoCRadar, Forbes Tech Council.
- **Established parent term:** "slopsquatting" (coined by Seth Larson, PSF security developer-in-residence, ~April 2025) carries the durable search volume. Snyk, Trend Micro, Mend, Aikido, Cloudsmith, and DZone all rank for it.
- **Live incident driving intent:** Aikido's `react-codeshift` disclosure (Jan 2026) — a hallucinated npm package already referenced by 237 GitHub repos before anyone claimed it.
- **Reader intent visible in coverage:** "how to protect AI coding agent from hallucinated packages", "does Claude Code verify packages", "slopsquatting mitigation", "AI agent supply chain security".

### First-party Bing demand — HONEST FINDING

Ran `python3 scripts/bing_report.py --type queries --days 120 --json`. **The script works but there is no venv in this project** (`venv/bin/activate` missing; system `python3` has `requests` but not `google`, so `search_console_report.py` is unavailable). Worth fixing separately.

**Result: zero usable demand signal for this topic.** Only 25 queries in 120 days, and exactly one security-adjacent hit ("jenkins mcp server for ai agents", 1 impression, unrelated). The site's entire observed Bing demand is `claude.md` (~30 imp) and `ant cli` (~90 imp) clusters.

**Implication:** no FAQ candidate below can be marked as observed first-party demand. All are derived from People-Also-Ask and news coverage. **Do not pretend otherwise in the post.** This is a net-new topic area for the site with no existing Bing footprint to build on.

### Competition analysis (top results)

1. **The arXiv paper** — the authoritative primary source. Dense academic PDF. Nobody reads it; everybody cites secondhand summaries of it.
2. **The Hacker News / SecurityWeek / Tom's Hardware / DevOps.com / SC Media** — pure news recaps. What the attack is. Zero configuration guidance.
3. **[Snyk, "Slopsquatting mitigation strategies"](https://snyk.io/articles/slopsquatting-mitigation-strategies/)** — the closest thing to a defense guide, and it's the clearest gap. Verified by fetch: seven high-level bullets (SBOMs, approved registries, signature verification, staging environments, periodic audits). **No config files, no commands, no CI setup, and explicitly nothing on AI agent permission modes, sandboxing, hooks, or tool-call auditing.**
4. **Trend Micro / Mend / Cloudsmith** — explainer + product pitch. Registry-side framing (scan your packages), not agent-side (configure your agent).
5. **[Aikido, "Agent Skills Are Spreading Hallucinated npx Commands"](https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands)** — excellent primary reporting, but it's an incident writeup ending in "verify package names", not a hardening guide.

**Gap we fill:** every published piece explains WHAT the attack is. Not one tells a developer WHICH SETTINGS TO CHANGE. There is no practitioner defense guide for the agent side of this attack class, and specifically none for Claude Code.

### AI citation potential

**High, with a caveat.** The question "how do I stop my AI agent installing hallucinated packages?" is exactly what developers ask ChatGPT/Claude/Perplexity, and the answer space is currently news recaps + one thin Snyk listicle. A post with copy-pasteable config is directly citable and faces almost no competition on the defense intent.

**Caveat:** "HalluSquatting" is 7 days old. It may not survive as the canonical term — "slopsquatting" already owns the concept. **Do not bet the post on the new term.** Rank for the durable intent (hallucinated packages / AI agent supply chain) and use HalluSquatting as the news hook. The keyword strategy below reflects this.

### Freshness opportunity

- The paper is 7 days old. No defense guide exists yet in any form.
- Claude Code's `/sandbox` (bubblewrap/seatbelt, network proxy) is a 2026 research preview that no slopsquatting article accounts for.
- npm 11.x `min-release-age` and pnpm's `minimumReleaseAge` post-date most slopsquatting content — and, as the unique angle below argues, they do **not** work here.
- Verified current via Context7 (`/websites/code_claude`): permissions allow/ask/deny syntax, evaluation order (deny → ask → allow), PreToolUse hook decision control.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`ai coding agent hallucinated package defense`

Deliberately NOT "hallusquatting defense" alone — see the caveat above. The term appears in the title and H1 for the news hook, but the post ranks on the durable intent.

### Secondary keywords
- `slopsquatting prevention`
- `claude code sandbox security`
- `verify package before install ai agent`
- `ai agent supply chain security`
- `hallusquatting`

### Long-tail queries
1. how to stop AI coding agent installing fake packages
2. does Claude Code verify packages exist before installing
3. what is hallusquatting attack
4. slopsquatting how to prevent
5. claude code pretooluse hook block npm install
6. how to sandbox Claude Code network access
7. npm ignore-scripts min-release-age .npmrc security
8. are AI agent skills safe to install

### FAQ candidates

**None are marked as observed Bing demand — the site has zero security query footprint (see Phase 1).** All derived from People-Also-Ask and news coverage.

1. What is HalluSquatting and how is it different from slopsquatting?
2. Is Claude Code vulnerable to HalluSquatting?
3. Do lockfiles protect against hallucinated packages?
4. Does npm's `min-release-age` cooldown stop this attack?
5. How do I make an AI agent verify a package exists before installing it?
6. Can a permission prompt stop a hallucinated package install?
7. Which AI coding assistants were tested in the HalluSquatting paper?
8. Are Claude Code Agent Skills safe to install from GitHub?
9. Does sandboxing stop HalluSquatting?
10. How do I audit what my AI agent actually downloaded?

---

## Phase 3 — Content Brief

### Article metadata

- **Title (`metadata.title`):** `Stop HalluSquatting in AI Coding Agents` (39 chars; +17 suffix = 56 rendered) ✓
- **Fuller title (OG / Twitter / H1):** `How to Defend AI Coding Agents Against HalluSquatting Attacks` (61 chars) ✓
- **Slug:** `hallusquatting-defense-ai-coding-agents`
- **Meta description:** `HalluSquatting turns AI hallucinations into malware delivery. How to harden Claude Code with sandboxing, hooks, and lockfile policy to block it.` (144 chars) ✓
- **Target word count:** 2,800 - 3,200 words
- **Estimated read time:** 12 min
- **Category / `articleSection`:** `AI Security` (matches `litellm-mcp-exploit-response-guide` + `codex-security-github-setup`; deliberately NOT `DevSecOps`, which is the hardening post's lane)
- **Lucide icon:** `PackageSearch`
- **Publish date:** 2026-07-15
- **Tags:** AI Security, Claude Code, Supply Chain, HalluSquatting, DevSecOps

### Unique angle

Three original contributions nobody else has published:

1. **"Your existing supply-chain playbook does not stop this."** The strongest and most defensible insight, and it is genuinely counterintuitive. Every 2026 npm-hardening guide recommends cooldowns (`min-release-age`) and lockfiles. Both largely **fail** against HalluSquatting, for reasons no published article states:
   - **Cooldowns assume the malicious version was published recently.** A hallusquatter registers the name early and *waits* for the model to catch up. By the time an agent fetches it, the package is months old and sails through a 3-day cooldown.
   - **Lockfiles only protect dependencies you already have.** The agent is *adding a new dependency that was never in the lockfile*. `npm ci` is a no-op against a package the agent is introducing for the first time.
   - This reframes the whole defense: the attack happens at **resolution time**, upstream of every control the industry currently recommends.

2. **A `PreToolUse` hook that verifies existence before the fetch happens.** Deterministic, runs outside the agentic loop, costs zero tokens, can't be talked out of it by an injected prompt. Nobody has published one for this attack. This is the buildable artifact and the thing that gets shared.

3. **The Claude Code accuracy correction.** Every outlet says "nine AI coding assistants were compromised." **Claude Code was not among them** — the nine were Cursor IDE, Cursor CLI, Gemini CLI, Windsurf, GitHub Copilot Chat, Cline, OpenClaw, ZeroClaw, NanoClaw. What the paper *did* test is Claude models, and the result is the most useful finding in the paper for this audience: **`claude-4.5-opus` searched before fetching in 73% of runs and hallucinated 0% of the time; `claude-4.5-sonnet` searched in only 31% of runs and hit 100% hallucination when it skipped.** Search-before-fetch is the entire ballgame, and it's a *behavioral* property you can influence. This is a first-party correction of the news cycle, and it's honest in both directions (it's not a Claude Code victory lap — the same paper shows the behavior is inconsistent and model-dependent).

**Avinash's real experience to bring:** he maintains a `skills/` directory and has published MCP servers (`jenkins-mcp`, `calculator-server`, `wp-mcp`, `method-crm-mcp`). The react-codeshift incident spread through exactly this artifact class — LLM-generated Agent Skills committed without review. A "here's what I audit in my own skills and servers" beat is credible and unavailable to any competitor.

### Opening (first 40-60 words must answer the title)

> HalluSquatting works because your AI agent guesses a package name, and an attacker already registered the guess. Lockfiles and install cooldowns will not save you - both assume the dependency is already tracked. The fix is to block the fetch before it happens: force search-before-fetch, verify names with a `PreToolUse` hook, and sandbox network egress.

### Content outline

#### H2: What HalluSquatting Actually Is (and Why Slopsquatting Isn't the Same Thing)

- Three-step attack: (1) identify trending resources, (2) compute the LLM's hallucination distribution over their names, (3) pre-register the highest-probability fakes and host adversarial prompts there. Then wait.
- The distinction that matters: slopsquatting is opportunistic (register whatever models happen to invent). HalluSquatting is *targeted and transferable* — a universal adversarial trigger makes models hallucinate a chosen name on demand, then chains with indirect prompt injection to reach RCE.
- Attacker needs only two capabilities: ability to see what's trending, ability to register a public name. **No access to your repo, your CI, or any injection channel.** That's what makes it untargeted and scalable.
- **Stat:** end-to-end RCE succeeded in 20-65% of runs across coding assistants.
- Cite: [arXiv:2607.07433](https://arxiv.org/abs/2607.07433), [The Hacker News](https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html).

#### H2: The Newer the Tool, the More Likely Your Agent Invents Its Name

- **The single best stat in the paper, and almost nobody reported it:** repositories published in 2025 carry a **92.4% mean hallucination rate** across six LLMs. Pre-2019 repositories: **0.9%**.
- Why this inverts normal security intuition: the resources you're *most* likely to ask an agent to fetch (this week's trending tool) are the ones it's *least* able to name correctly. Training cutoffs mean recency and hallucination are the same axis.
- Practical consequence: "just ask the agent for the popular one" is the *worst* possible heuristic. Attackers target trending resources precisely because that's where hallucination is near-certain.
- **Stat:** skill installation resolved to squattable slugs in 90.7% of trials (127/140); 100% for non-English skill names.

#### H2: Why Lockfiles and Install Cooldowns Don't Stop This

**The pull-quote section. This is the argument the post exists to make.**

- Table: `Defense → What it assumes → Why HalluSquatting walks past it`
  - `npm ci` / lockfile → dependency already tracked → agent is *adding* a brand-new one
  - `min-release-age=3` / pnpm `minimumReleaseAge` → malicious version published recently → attacker registered months ago and waited
  - Typosquatting scanners → name is a near-miss of a real package → `react-codeshift` is a *plausible hybrid* of `jscodeshift` + `react-codemod`, not a typo of either
  - SBOM → you audit what you shipped → tells you *after* the postinstall already ran
  - Permission prompt → human reads the name and recognizes it → the name looks *perfectly reasonable*; that's the whole point
- Land the reframe: every one of these is a **post-resolution** control. The attack is won or lost at **resolution time**.
- Honest note: none of these are useless (they stop Shai-Hulud-class attacks well). They're just aimed at a different threat. Link `/blog/regression-proofing-claude-code-workflows#pin-cli` to disambiguate the *reliability* sense of "pin" from the *integrity* sense used here.
- Cite: [pnpm supply-chain docs](https://pnpm.io/supply-chain-security), [Snyk](https://snyk.io/articles/slopsquatting-mitigation-strategies/) (as the representative of the conventional playbook).

#### H2: Force Search Before Fetch (the Only Fix That Addresses the Root Cause)

- The paper's headline mitigation, and the numbers are stark:
  - Cursor CLI **with** search before cloning: 93.4% correct. **Without**: 99.1% hallucinated.
  - `claude-4.5-opus`: searches in 73% of runs → **0% hallucination**.
  - `claude-4.5-sonnet`: searches in only 31% → **100% hallucination** when it skips.
- **The correction:** Claude Code was not one of the nine tested applications (list them). But the model behavior above is the mechanism that matters, and it is not guaranteed — it's a tendency, not a control.
- What you can actually do: instruct search-before-fetch explicitly, and note honestly that a `CLAUDE.md` rule is advisory. Per the paper, prompt framing helps but "every prompt category has at least one model that hallucinates above 50%." **No safe prompt exists.** That's the bridge to the next section: if instruction isn't enforcement, use a hook.
- Link `/blog/claude-md-guide` §6 (CLAUDE.md vs Hooks vs Custom Commands) — that post already argues rules like this belong in a hook, not a markdown file. Use it to justify the escalation.

#### H2: Verify the Package Exists With a PreToolUse Hook

**The original artifact. The section that gets screenshotted.**

- Why a hook and not a prompt: hooks are deterministic, run outside the agentic loop, consume zero tokens, and execute regardless of what the model believes. An injected prompt can talk Claude out of a `CLAUDE.md` rule; it cannot talk a shell script out of `exit 2`.
- Ship a real script: match `Bash`, parse `.tool_input.command` with `jq`, extract package/repo names from `npm install`/`npx`/`pip install`/`git clone`, check the registry (`npm view <pkg>`, `curl -s https://pypi.org/pypi/<pkg>/json`, `gh repo view`), and `exit 2` with a stderr reason on 404.
- Show both output styles: exit-code 2 + stderr (simple), and the JSON `hookSpecificOutput` with `permissionDecision: "deny"` + `permissionDecisionReason` (structured).
- Wire it up in `settings.json` under `hooks.PreToolUse` with `matcher: "Bash"`.
- Call out the failure mode honestly: **existence is not safety.** The hook proves the name resolves, not that the package is benign — an attacker's squatted package *does* exist. It closes the hallucination gap, not the malice gap. That's why it composes with sandboxing rather than replacing it.
- Source: Context7 `/websites/code_claude` — hooks reference, PreToolUse decision control.

#### H2: Sandbox the Agent So a Bad Fetch Can't Phone Home

**The site's biggest open lane — `sandbox` appears in four posts but is taught in none.**

- `/sandbox` in Claude Code (research preview, 2026): OS-level enforcement via **Linux bubblewrap / macOS seatbelt**, covering the Bash tool and every child process it spawns.
- Two boundaries, and both are required: **filesystem** (Claude only touches approved directories) and **network** (egress via Unix domain socket → proxy enforcing a domain allowlist, prompting on new domains).
- Anthropic's argument, worth quoting: without network isolation a compromised agent exfiltrates; without filesystem isolation it escapes and reaches the network anyway. Neither half works alone.
- **Stat:** sandboxing cut permission prompts by **84%** in Anthropic's internal usage — the security-vs-friction framing that makes this an easy sell. Fewer prompts also means less approval fatigue, which is the failure mode the attack depends on.
- Map it back to the attack: even if the agent resolves and fetches the squatted package, a postinstall script that can't reach `attacker.com` can't stage a botnet.
- Link `/blog/litellm-mcp-exploit-response-guide` — the site's existing home for the execution-boundary argument ("No sandbox, no allowlist"). This post is where that principle finally gets an implementation.
- Cite: [Anthropic sandboxing](https://www.anthropic.com/engineering/claude-code-sandboxing).

#### H2: Lock Down the Install Path Itself

- `.npmrc`: `ignore-scripts=true` (kills `preinstall`/`install`/`postinstall`/`prepare` — the lowest-friction execution path in the whole ecosystem) and `min-release-age=3` (npm 11.x).
- **Be honest, per the section above:** `ignore-scripts` is the one that actually earns its place here; `min-release-age` is defense-in-depth against *other* supply-chain attacks and is near-useless against a patient hallusquatter. Say so plainly rather than padding the checklist.
- Commit the lockfile; `npm ci` in CI (fails on mismatch, never rewrites). Again: protects the deps you have, not the one the agent is about to invent.
- Deny rules as the blunt backstop: `"deny": ["Bash(npx *)"]` forces every ad-hoc fetch-and-execute through a human. Note evaluation order is **deny → ask → allow** (Context7-verified), so a deny rule always wins.
- Cite: [pnpm](https://pnpm.io/supply-chain-security), [nodejs-security.com](https://www.nodejs-security.com/blog/hardening-your-npm-pnpm-config-for-shai-hulud).

#### H2: Treat Agent Skills as Executable Code

**The most concrete story available, and the one closest to this audience's daily practice.**

- The full `react-codeshift` timeline:
  - **Oct 17, 2025** — commit `65e5cb0` in `wshobson/agents` adds **47 LLM-generated Agent Skills** across 14 plugins, with no apparent human review. Two (`react-modernization`, `dependency-upgrade`) tell agents to run `npx react-codeshift`.
  - The name never existed. An LLM fused `jscodeshift` (Facebook) + `react-codemod` (React team) into a plausible hybrid.
  - It spread by copy-paste: ~100 direct forks, one user replicated it into 30+ of their own repos, someone translated it to Japanese, someone swapped `npx` for `bunx`. Nobody verified.
  - **Jan 14, 2026** — Aikido's Charlie Eriksen claims the package. **237 GitHub repositories** were already referencing it.
  - Telemetry: **1-4 downloads daily**, indefinitely. Normal phantom packages spike to 60-100 on day one then flatline at zero. A persistent trickle means *live agents are still executing it right now*.
- The lesson: a skill file is not documentation, it's a shell script with a `.md` extension. It was pure luck that a researcher registered that name first.
- The practical beat: `grep` your own `skills/`, `.claude/`, and any vendored agent config for `npx`, `npm install`, `pip install`, `git clone`, and verify every name resolves. Avinash runs this on his own `skills/` directory — report what turns up (honestly, including "nothing", if nothing does).
- Tie to `/blog/persistent-memory-ai-coding-agents`: an original beat nobody has written — a hallucinated name that lands in a memory store *persists across sessions*, turning a one-off hallucination into a durable, re-executed instruction.
- Cite: [Aikido](https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands).

#### H2: Audit What Your Agent Actually Fetched

- Uncontested ground on this site. The only existing hook-mechanics reference is `/blog/regression-proofing-claude-code-workflows` §6 (Stop hook) — link it for the pattern.
- Log every `PreToolUse` decision to a file: timestamp, command, resolved name, verdict. Cheap, and it's the only forensic trail you'll have.
- What to grep for after the fact: unexpected `npx`, installs of packages absent from `package.json`, `git clone` of repos nobody chose, and network egress to domains outside the sandbox allowlist.
- Frame honestly: this is detection, not prevention. It tells you what happened; it doesn't stop it. Ship it anyway — the react-codeshift trickle proves agents keep executing bad instructions for *months* before anyone notices.

#### H2: What This Still Can't Fix

**Mandatory honesty section — matches the pattern in `hardening-ai-agents-cicd-prompt-injection` §9 and is the main reason those posts get cited.**

- The paper's blunt finding: **"No assistant refused execution based on payload content"** — not even for a crude variant carrying explicit AI-targeting markers. Content-based guardrails did not work.
- Worse: **"once the agent operates on attacker-controlled files, it applies the same trust as to legitimate project code."** Trust boundaries collapse the moment the fetch succeeds. That's why every control in this post lives *before* the fetch.
- The authors are explicit that user confirmation prompts are of limited value — many agents (Cline, Gemini CLI) execute with no confirmation at all, and a human staring at a plausible package name is not a control.
- The real fixes are upstream and out of your hands: model providers enforcing search-before-fetch, applications making verification non-optional, and registries doing defensive registration of high-probability hallucinations (GitHub, npm, ClawHub). Everything in this post is compensating control until then.
- Residual risk worth stating: verification proves existence, not intent; sandbox allowlists still permit egress to *allowed* domains; and a squatted name that gets into a memory store or a committed skill file outlives the session.

#### H2: The HalluSquatting Defense Checklist

- 10-12 items, ordered by leverage, formatted for mobile + clean AI-answer extraction.
- Rough order: enable `/sandbox` → install the verify hook → `ignore-scripts=true` → deny `Bash(npx *)` → audit `skills/` for unverified fetch commands → log tool calls → commit lockfile + `npm ci` → instruct search-before-fetch → review memory stores for stale names.

### Required FAQ section

Use the 10 FAQ candidates from Phase 2, 40-60 words each. Each answer must cite a specific number, flag, or source URL. Highest-value ones to get exactly right:

- **"Is Claude Code vulnerable?"** — Answer honestly: it wasn't among the nine tested; the underlying models show the search-before-fetch behavior that prevents it (Opus 4.5: 0%); but that's a tendency, not a guarantee, and Sonnet 4.5 hit 100% when it skipped search. No victory lap.
- **"Do lockfiles protect against this?"** — Mostly no, and explain why in one sentence (new dependency, not a tracked one). This is the post's thesis compressed to 50 words, and it's the answer most likely to get pulled into an AI Overview.

### Code examples to include

1. `.claude/settings.json` — `hooks.PreToolUse` wiring with `matcher: "Bash"`.
2. `verify-package.sh` — the full hook: `jq` parse → extract name → registry check → `exit 2`. **The centerpiece.**
3. JSON `hookSpecificOutput` deny variant with `permissionDecision` + `permissionDecisionReason`.
4. `.npmrc` — `ignore-scripts=true`, `min-release-age=3`.
5. `settings.json` deny rules — `Bash(npx *)`, with a note on deny → ask → allow ordering.
6. `/sandbox` enable + the filesystem/domain allowlist shape.
7. One-liner to audit a skills directory for unverified fetch commands.

### Authoritative sources to cite

- arXiv paper: https://arxiv.org/abs/2607.07433 (HTML: https://arxiv.org/html/2607.07433v1)
- Anthropic sandboxing: https://www.anthropic.com/engineering/claude-code-sandboxing
- Claude Code permissions: https://code.claude.com/docs/en/permissions
- Claude Code hooks: https://code.claude.com/docs/en/hooks
- Aikido react-codeshift: https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands
- The Hacker News: https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html
- SecurityWeek: https://www.securityweek.com/hallusquatting-turns-ai-hallucinations-into-botnet-delivery-mechanism/
- Tom's Hardware: https://www.tomshardware.com/tech-industry/cyber-security/hallusquatting-is-the-latest-agentic-ai-exploit-where-models-dream-up-potentially-malicious-urls-in-tool-calls-attack-exploits-a-fundamental-weakness-in-every-available-model
- Snyk (the conventional playbook we push back on): https://snyk.io/articles/slopsquatting-mitigation-strategies/
- pnpm supply-chain security: https://pnpm.io/supply-chain-security

### Internal linking opportunities

Verified against the live tree — all slugs confirmed to exist.

1. **`/blog/hardening-ai-agents-cicd-prompt-injection#allowlist-tools`** — **mandatory disambiguation link.** That post owns `--allowedTools` (taught with glob semantics + a six-role matrix). **Do not re-teach it.** Frame: that post asks *which tools may the agent run* (inbound/instruction-time); this one asks *which names may the agent resolve and fetch* (outbound/resolution-time). Different axis, same threat family.
2. **`/blog/litellm-mcp-exploit-response-guide`** — closest thematic sibling; the site's existing execution-boundary argument. Link from the sandboxing section.
3. **`/blog/regression-proofing-claude-code-workflows#pin-cli`** — disambiguate the two senses of "pin"; §6 Stop hook is the existing hook-mechanics reference for the auditing section.
4. **`/blog/claude-md-guide`** §6 — where a "verify before install" rule belongs (and why it's a hook, not markdown).
5. **`/blog/claude-code-security-review-github-actions#security-considerations`** — the "will a scanner catch this?" answer.
6. **`/blog/persistent-memory-ai-coding-agents`** — poisoned memory persists a hallucinated name across sessions.
7. **`/blog/mcp-code-execution-pattern`** §7 — agent-executes-generated-code is exactly where a hallucinated import lands.
8. **`/projects/reddit-agent`** — the only project with an explicit human-in-the-loop approval gate; concrete precedent for gating install actions.

### Future content cluster

- "Auditing an MCP server before you install it"
- "A PreToolUse hook library for Claude Code"
- "Sandboxing Claude Code: bubblewrap, seatbelt, and what still escapes"
- "Are Agent Skills the next supply chain surface?"

### Reverse-link follow-ups (do after publishing)

Add outbound links to this post from: `hardening-ai-agents-cicd-prompt-injection` §9 (already mentions pinning MCP servers from tutorials), `mcp-code-execution-pattern` §7, `litellm-mcp-exploit-response-guide` §6.

---

## Writer's notes / accuracy guardrails

- **Do not write "Claude Code was compromised."** It was not tested. Nine apps were: Cursor IDE v2.4.22, Cursor CLI v2.4.22/v2.2.20, Gemini CLI v0.24.5/v0.25.0, Windsurf v1.13.5, GitHub Copilot Chat v0.36.2, Cline v3.66.0, OpenClaw, ZeroClaw v0.6.8, NanoClaw v1.2.52.
- The PR #49 body said "237 code projects" — the accurate figure is **237 GitHub repositories** referencing the package.
- The PR body said the paper tested "nine AI coding assistants including Cursor, GitHub Copilot, Gemini CLI, and Cline" — accurate, but three of the nine (OpenClaw/ZeroClaw/NanoClaw) are personal assistants, not coding assistants. Don't over-claim.
- `/sandbox` is a **research preview** as of 2026 — say so.
- Style: no em dashes, no banned words (comprehensive, leverage, robust, delve, seamless, unlock, harness, streamline). First-person practitioner voice. Vary sentence length. Don't over-list — the "why defenses fail" section is an argument, so write it as prose with one table, not as bullets.

---

## Ready to Write?
Run: `/write-blogpost hallusquatting-defense-ai-coding-agents`
