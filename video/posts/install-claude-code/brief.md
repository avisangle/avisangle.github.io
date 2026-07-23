# Topic Brief — Install Claude Code in 30 Seconds (npm Is the Old Way)

**Source:** custom topic (no blog post)
**Format suggested:** short (60s)
**Slug:** install-claude-code
**Series:** Claude Code Shorts (Episode 2)
**Series role:** first episode after E1 bootstrap. `youtube.json` should set `playlistIds: ["PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra"]` (precise, no resolve-or-create round-trip).

## News peg (the actual hook)

The canonical Claude Code install path **changed** in early 2026: from `npm install -g @anthropic-ai/claude-code` to a native `curl | bash` installer that auto-updates in the background and has zero Node dependency. Most installation tutorials still teach the npm path. **This episode is the correction.**

This is the kind of release-pegged angle the channel research validated as a winning pattern. It's also more honest than a pure speed demo — "30 seconds" is only true if Node is pre-installed; the real win is "one line, no deps, auto-updates."

## Hook (verified-shorts style)

> "Most install guides for Claude Code are out of date. There's a one-line installer now. No npm. No Node. Auto-updates."

(First-person specific variant if Avinash prefers that framing: *"I just realized I've been installing Claude Code wrong for months. There's a one-line installer now…"*)

## Key bullets

- The native installer replaced npm as canonical
- One line, works on Mac / Linux / WSL identically
- Zero Node dependency (npm path needed Node 18+)
- Auto-updates in background (npm/brew/winget don't)
- Windows native users still need Git for Windows pre-installed (caveat card)
- After install, just type `claude` — opens browser for OAuth, you're in

## Demoable code

The 3 commands the demo will animate:

```bash
# 1. Install (Mac / Linux / WSL)
curl -fsSL https://claude.ai/install.sh | bash

# 2. Start (auth flow opens browser)
claude

# 3. Verify (optional)
claude --version
```

Windows variant (small caveat card, not main flow):

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Visual concept (for /video-scenes):**
- **Scene 1 (5s) — title:** Hook line, mid-thought open.
- **Scene 2 (15s) — install command:** Big terminal animating the `curl` command typing in. Maybe a fake progress bar at the end. CodeBlock scene fits this exactly.
- **Scene 3 (10s) — auth flow:** Visual of "browser opens → click Sign in → done." Could be a stylized 3-step row of icons (terminal → browser → checkmark) — composition-inline like E1's UseCaseGrid.
- **Scene 4 (15s) — payoff:** Terminal showing `claude` welcome screen + the win-condition. Cap with the "no npm. no Node. auto-updates." callout — three short fragments to mirror the hook structure.
- **Scene 5 (15s) — outro + caveat card:** Big number ("1 line"), Windows-Git caveat in small mono text, soft "link in description" close.

## Numbers to animate

- **1** — line of install
- **0** — Node dependencies (or "No Node")
- **30 sec** — install time (with caveat: assumes Node already installed if comparing to npm)
- **3** — commands total to be coding (install / start / done)

The hero number for the Outro is **`1`** (one line), with subhead "line install" — captures the whole story.

## Canonical URL

n/a — custom topic, no blog post

## SEO seed (refined later by /video-script)

- **Working title options (≤70 chars):**
  - A: `Install Claude Code in 1 Line — npm Is Now the Slow Way` (54 chars)
  - B: `Claude Code's New Installer Replaces npm — 30 Seconds Flat` (57 chars)
  - C: `Stop Installing Claude Code With npm` (37 chars — terse, contrarian)
  - D: `Install Claude Code in 30 Seconds (No npm Needed)` (49 chars — keeps "30 seconds" anchor)
  - **Recommended:** A — combines the speed claim, the news peg, and the contrarian framing. All three are validated patterns.

- **Tags:**
  claude code, install claude code, claude code setup, claude code installer, claude code curl, claude code native installer, claude code 2026, claude code mac, claude code windows, claude code linux, anthropic claude, ai coding agent, claude code shorts

- **Category:** Science & Technology (categoryId: 28)

## Source citations (for fact-check during /video-script)

- Setup paths + system reqs: https://code.claude.com/docs/en/setup.md
- First-run quickstart: https://code.claude.com/docs/en/quickstart.md
- Auth flow + credential storage: https://code.claude.com/docs/en/authentication.md

## Style notes carried forward from E1

- Drop "You think X / actually Y" hook structure (failed to land in E1)
- No parallel-sentence anaphora in the outro
- No spoken brand URL — "link in description" only (per standing rule)
- Open mid-action / mid-thought, not with a setup
- Outro should be observation or punchline + soft CTA, not a slogan

## Series notes

E2 is the first episode using `playlistIds` directly (E1 used `playlistTitle` to bootstrap the playlist; that returned ID `PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra` which is now stable for E2+).
