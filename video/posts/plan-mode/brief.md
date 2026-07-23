# Topic Brief — Plan Mode (Claude Code Shorts E5/E3, Anti-Hype angle)

**Source:** custom topic (no blog post)
**Format suggested:** short (60s)
**Slug:** plan-mode
**Series:** Claude Code Shorts (next episode after E2)
**Series role:** Anti-hype contrarian episode — fits IndyDevDan-style "feature senior engineers miss" template that the channel research validated as a winning pattern.

## Hook

Most devs hit Enter on every Claude Code prompt. Shift+Tab twice gives you the feature they're missing — Plan mode.

## Key bullets

- Plan mode is the 3rd of 4 permission modes (Default → Auto-accept → **Plan** → Auto)
- Enter via Shift+Tab cycle OR `/plan` slash command
- Restricts Claude to read-only ops; produces a markdown plan file
- You approve / iterate / refine the plan before any execution
- Best for: multi-file refactors, ambiguous tasks, unfamiliar codebases, prod systems

## Demoable code

The scene-2 contrast (OAuth refactor without/with Plan mode) — visual concept for `/video-scenes`:

**Without Plan mode (left side or first beat):**
```
> Refactor auth to use OAuth
[Claude edits 5 files immediately]
[tests fail — wrong dependency order]
```

**With Plan mode (right side or second beat):**
```
> [Shift+Tab twice]
> Refactor auth to use OAuth
[Plan: oauth-refactor-plan.md created]
  1. Add OAuth provider package
  2. Update session schema
  3. Migrate endpoints
  4. Write tests
> "Do step 3 before step 2"
[Plan updated → executed in correct order]
```

The keybinding `Shift+Tab` and the visual of the plan file appearing are the two strongest visual beats.

## Numbers to animate

- **2** — Shift+Tab presses to land on Plan mode (the muscle memory hook)
- **3rd** — of 4 permission modes (positions Plan in the cycle)
- **0** — file edits before approval (the safety guarantee)
- **v2.1.111** — recent change: plan files now named after the prompt (was random words). Possible peg.

The hero number for the Outro is **`2`** (two presses), with subhead "presses" or "shift-tabs" — captures the muscle-memory the episode is teaching.

## Canonical URL

n/a — custom topic, no blog post

## SEO seed (refined later by /video-script)

- **Working title options (≤70 chars):**
  - A: `Plan Mode: The Claude Code Feature Most Devs Miss` (49 chars) — **IndyDevDan-style "feature senior engineers miss" pattern**
  - B: `Stop Hitting Enter — Shift+Tab Twice for Plan Mode` (50 chars) — mid-action / contrarian
  - C: `Claude Code Plan Mode: Approve Before Execute` (45 chars) — practical
  - **Recommended:** A — directly mirrors the verified-winning IndyDevDan title pattern

- **Tags:**
  claude code, claude code plan mode, plan mode, claude code shift tab, claude code permission modes, claude code refactor, claude code workflow, anthropic claude, ai coding agent, claude code 2026, claude code shorts, claude code tutorial

- **Category:** Science & Technology (categoryId: 28)

## Source citations (for fact-check during /video-script)

- Permissions / Plan mode behavior: https://code.claude.com/docs/en/how-claude-code-works.md
- Recent Plan mode changes: https://code.claude.com/docs/en/changelog.md (v2.1.81, v2.1.92, v2.1.105, v2.1.111)

## Visual concept (for /video-scenes)

| Scene | Visual |
|---|---|
| 1 — title | TitleCard: "Stop hitting Enter." (muted) / "Shift+Tab twice." (white, mono accent on the keys) / "Plan mode." (cyan, oversized) |
| 2 — contrast | Composition-inline split or sequential: top half "Without Plan mode" (red error indicators) / bottom half "With Plan mode" (green plan file appearing). 5-6s per side. |
| 3 — how to enter | CodeBlock or visual showing 3 paths: `Shift+Tab` × 2 keybinding (animated key presses) + slash command `/plan` typed out. Plus the plan file output: `oauth-refactor-plan.md` with steps animating in. |
| 4 — when to use it | BulletReveal numbered (4 chips): Multi-file refactor / Ambiguous task / Unfamiliar codebase / Production safety. |
| 5 — outro | Big "2", subhead "presses", caption "approve before execute. fewer wrong turns.", brand pill, link CTA. |

## Style notes carried forward

- Hook leads with contrarian "most devs miss it" angle (IndyDevDan template)
- No "You think X / actually Y" structure
- No spoken brand URL — "link in description" only
- No parallel-sentence anaphora in outro
- Open mid-action ("Most devs hit Enter…" puts the viewer in the scene immediately)

## Series notes

E3 in publish order (after E1 + E2). `youtube.json` should use `playlistIds: ["PLlhPzoo-csPCtJxCl4CxrSdcbCR6E8mra"]` per project memory.

## News peg

**Release:** Claude Code v2.1.111 — Plan files now named after the prompt (was random words). Plus v2.1.105 fixed `/plan` and `/plan open` to act correctly on existing plans, v2.1.92 fixed auto mode overriding plan mode, v2.1.81 hides "clear context" option by default on plan accept. Cluster of plan-mode-specific fixes in recent versions.
**Source:** https://code.claude.com/docs/en/changelog.md
**Why it pegs this topic:** The cluster of recent plan-mode fixes/improvements signals Anthropic is actively investing in Plan mode UX — reinforces the episode's "feature worth using" thesis. v2.1.111 specifically (named plan files) means the demo can show `oauth-refactor-plan.md` instead of `random-words-plan.md`, which makes the visual feel current.
**How to use it in the script:** Don't lead the hook with the version — the contrarian "feature most devs miss" angle is stronger as a hook. But mention "now plans are named after your prompt" as a small trust signal in scene 3 (how to enter / what it produces). Keeps the episode feeling current without burying the lede.

*Note: brief was authored in the same session that created `/video-news-peg`, so the skill couldn't be auto-invoked via the Skill tool. This News peg section was populated manually using data from the topic-verification research agent. In future sessions `/video-topic` step 7 will auto-invoke `/video-news-peg <slug>` as designed.*
