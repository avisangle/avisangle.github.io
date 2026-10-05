# Content Brief: macOS Full Disk Access and AI Coding Agents

**Researched:** 2026-10-06 | **Verdict:** GO, with a hard constraint on claims (see "Fact discipline")

## Fact discipline (read first)

Apple's own post (developer.apple.com/news/?id=p6zjojqw, 2026-10-02) says only this: Apple "will introduce additional controls" so users can grant Full Disk Access (FDA) "only with very explicit user action," because AI agents make the risk "grow substantially." Apple gave **no date, no macOS version, no mechanism**. MacRumors, TechCrunch and Help Net Security all state this explicitly. macOS 27 (released 2026-09-14) does not contain the controls.

One search snippet claimed "macOS Sequoia 15.2 beta", a "December 1, 2026 deadline" and "FDA prompts disabled until updates are approved". No primary source supports any of it and it conflicts with Apple's post. **Do not repeat it.** The post must say plainly what is unknown, and frame the rest as "what is true today, and what to do before Apple ships details."

Apple's developer guidance (verified): review whether your use of FDA is necessary, expect stricter prompts, limit scope, tell users why you need it.

## Phase 1 findings

**Search demand.** Strong news spike, thin evergreen demand so far. Four outlets covered it 2026-10-02 to 10-05 (MacRumors, TechCrunch, The Hacker News, Help Net Security) plus Notebookcheck, tech-ish, Gotechtor. HN is focused on agent security this week (Kroah-Hartman "Security in the LLM Age", 336 pts). Named context: Meta Muse, OpenAI Dots, a ChatGPT macOS flaw patched 2026-09-25.

**Competition.** All news rewrites of Apple's statement. Two practitioner-ish pieces: a Medium post (dkwebsolutions) and Gadget Hacks "what to check now". Both returned 403 to fetch, so depth is unverified; Gadget Hacks and the search summaries carry unsourced specifics. Nobody found covering: how Claude Code, Codex, Cursor and Gemini CLI actually inherit FDA, how to audit it, how the Claude Code sandbox relates to it. Gap is real. Competition level: low for the practitioner angle, high for the news angle (do not write a news rewrite).

**AI citation potential.** Medium-high short term (queries like "does Claude Code need full disk access" will be asked), durable if the post is a how-to that stays valid after Apple ships details. Original-experience advantage: audit output from Avinash's own Mac.

**Freshness.** Claude Code sandbox docs (code.claude.com/docs/en/sandboxing, fetched 2026-10-06) verified:
- Sandbox is **off by default**; enable with `/sandbox` or `sandbox.enabled: true`.
- macOS uses the built-in Seatbelt framework; Linux/WSL2 use bubblewrap + socat. Built on open source `@anthropic-ai/sandbox-runtime`.
- Default writes: working dir, per-user temp dir, added dirs. Default reads: **most of the machine, including `~/.ssh` and `~/.aws/credentials`**.
- Tune with `sandbox.filesystem.allowWrite / denyWrite / denyRead / allowRead`; narrower path wins on overlap. Example: `"denyRead": ["~/"], "allowRead": ["."]` in project settings.
- Sandbox covers shell commands only. Read/Edit/Write/WebFetch tools, hooks, local MCP servers, LSP servers and helper commands run **outside** it. A `denyRead` entry does not stop the Read tool.
- `!` shell-mode commands, `excludedCommands`, and unsandboxed retries also run outside.
- `sandbox.credentials` entries protect `~/.aws`, `~/.ssh` and secret env vars.

Context7 MCP was unauthenticated this session, so docs were fetched directly from code.claude.com. Re-check Codex, Cursor and Gemini CLI docs before the write step.

**Bing first-party demand.** Script ran; 25 queries in 120 days, none relevant (nearest: "how to write claude.md"). Site has no observed demand for this topic yet. FAQ candidates below are from autocomplete-style phrasing, not observed Bing data.

**Existing coverage on the site.** No post mentions Full Disk Access. Related posts to link: sandbox-ai-agents-hugging-face-breach, hardening-ai-agents-cicd-prompt-injection, hallusquatting-defense-ai-coding-agents, claude-code-security-review-github-actions, persistent-memory-ai-coding-agents. No cannibalization risk.

## Phase 2: Keyword map

- **Primary:** macOS Full Disk Access
- **Secondary:** AI coding agents macOS, Claude Code Full Disk Access, terminal Full Disk Access, Claude Code sandbox macOS, TCC permissions
- **Long-tail:**
  - does Claude Code need Full Disk Access
  - should I give Terminal Full Disk Access
  - how to check which apps have Full Disk Access on Mac
  - how to revoke Full Disk Access from Terminal
  - what files can Claude Code read on a Mac
  - how to sandbox Claude Code on macOS
  - what is Apple changing about Full Disk Access
  - does the Claude Code sandbox work without Full Disk Access
- **FAQ candidates (none from observed Bing data):**
  1. What is Apple changing about macOS Full Disk Access?
  2. When will Apple's Full Disk Access change ship? (Answer: Apple has not said.)
  3. Does Claude Code need Full Disk Access?
  4. Why does an agent inherit Terminal's Full Disk Access?
  5. How do I see which apps have Full Disk Access?
  6. How do I revoke Full Disk Access from my terminal?
  7. Does the Claude Code sandbox limit what an agent can read?
  8. Which Claude Code tools run outside the sandbox?
  9. Do Codex, Cursor and Gemini CLI need Full Disk Access?
  10. Will Apple's change break my agent workflow?

## Phase 3: Content brief

### Metadata
- **Slug:** `macos-full-disk-access-ai-coding-agents`
- **metadata.title (40 chars, rendered 57):** `macOS Full Disk Access for Coding Agents`
- **OG/Twitter/H1 (61 chars):** `Apple's Full Disk Access Change: Audit Your AI Coding Agent`
- **Description (~150):** `Apple is tightening macOS Full Disk Access over AI agents. See how Claude Code inherits it from your terminal, how to audit it, and how to shrink it.`
- **Word count:** 2200-2600 | **Read time:** ~10 min
- **Category:** Claude Code (security) | **Icon:** `ShieldCheck`
- **Date to use:** 2026-10-06 (verify against publish day)

### Outline

1. **What is Apple changing about macOS Full Disk Access?** First 40-60 words: Apple announced on 2026-10-02 that it will add controls so FDA needs "very explicit user action", citing AI agents. No date, version or mechanism yet. Quote Apple, link the developer post and MacRumors/TechCrunch. State what is unknown.
2. **TL;DR** (3-4 bullets).
3. **Does Claude Code need Full Disk Access?** Direct answer: no, but it inherits whatever the launching terminal has. Explain the mechanism (macOS attributes permission to the responsible app, child processes of Terminal/iTerm/Ghostty/VS Code get its grants). Same applies to Codex CLI, Gemini CLI, Aider. Cursor and VS Code integrated terminals inherit the editor's grants. **Verify this on a real Mac before writing**; show a before/after test (read `~/Library/Messages` with and without FDA).
4. **How do I check which apps have Full Disk Access?** System Settings > Privacy & Security > Full Disk Access. CLI route: `tccutil reset SystemPolicyAllFiles <bundle-id>` to revoke. Reading the TCC database needs FDA itself; confirm exact paths and service name (`kTCCServiceSystemPolicyAllFiles`) on-machine and show real output from Avinash's Mac.
5. **What can an agent read without Full Disk Access?** Honest map: even without FDA, an agent as your user reads all of `~`, `~/.ssh`, `~/.aws`, `.env` files. FDA adds Mail, Messages, Safari data and other protected stores. Point: FDA is the loudest permission but not the only exposure. Claude Code's default sandbox read policy covers "most of the machine" including `~/.ssh`.
6. **How do I shrink an agent's access on macOS?** Numbered steps with real config:
   - Remove FDA from the terminal; use a dedicated terminal profile/app for agents.
   - `/sandbox` + `sandbox.enabled: true` (off by default; Seatbelt on macOS).
   - Project `settings.json`: `denyRead: ["~/"], allowRead: ["."]`; `credentials` entries for `~/.ssh`, `~/.aws`.
   - Limits to state clearly: Read/Edit/Write tools, hooks, MCP servers run outside the sandbox; `!` commands and `excludedCommands` too. Mention container/VM option from the sandbox-environments docs.
7. **What will Apple's change break?** Speculation fenced off and labelled. Only implication supported by sources: more prompts, backup apps feel it (tech-ish). Do not invent dates or enforcement.
8. **Audit checklist** (numbered, copy-paste). Candidate for HowTo schema.
9. **FAQ** (Accordion, 6-8 Q&As, 40-60 words each, FAQPage schema).

### Unique angle
Practitioner audit, not news. Run the audit on Avinash's own Mac and report what actually had FDA, what an agent could read before and after, and what the Claude Code sandbox did and did not block (including that the Read tool bypasses `denyRead`). Open with the one-sentence unknown-timeline disclosure so the post stays accurate when Apple ships specifics. Plan a short update when Apple publishes details.

### Internal links
sandbox-ai-agents-hugging-face-breach, hardening-ai-agents-cicd-prompt-injection, hallusquatting-defense-ai-coding-agents, claude-code-security-review-github-actions, claude-md-guide (settings). Future cluster: "Sandbox Codex CLI on macOS", "Claude Code managed settings for teams" (docs cover `allowManagedReadPathsOnly`).

### Sources
- https://developer.apple.com/news/?id=p6zjojqw
- https://www.macrumors.com/2026/10/02/apple-announces-macos-full-disk-access-changes/
- https://techcrunch.com/2026/10/02/apple-says-its-tightening-macos-full-disk-access-controls-due-to-new-risks-from-ai-agents/
- https://www.helpnetsecurity.com/2026/10/05/macos-full-disk-access-updates/
- https://code.claude.com/docs/en/sandboxing
- https://github.com/anthropics/sandbox-runtime

### Risks
- Time-sensitive: publish within about a week or the news peg fades. Syndicate to dev.to 2-3 weeks later per existing practice.
- Apple may publish specifics and date the post; commit to an update.
- No primary-source stats yet; GEO "statistic every 150-200 words" must use verified numbers only (HN points, dates, doc defaults), not invented ones.

## Ready to Write?
Run: /write-blogpost macos-full-disk-access-ai-coding-agents
