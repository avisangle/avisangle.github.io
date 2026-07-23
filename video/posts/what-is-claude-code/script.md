# Video Script — Claude Code Isn't Just a Terminal — It's 6 Surfaces

**Format:** short
**Voice:** Brian (default; configurable via .env)
**Target spoken duration:** ~60s
**Series:** Claude Code Shorts (Episode 1 — playlist-bootstrap)
**Blog post:** n/a — standalone

## [scene-1: title] — 5s
> You think Claude Code lives in your terminal. It actually runs in six places.

## [scene-2: bullets] — 15s
> Six surfaces. Same engine. Your terminal. Your desktop app. VS Code. JetBrains. The web at claude.ai/code. And your phone — through Remote Control in the Claude mobile app.

## [scene-3: claim] — 15s
> Every surface hits the same Claude. Same conversation. Same tools. Same memory. Start a long agent run on your laptop, walk away, watch it from your phone on the train. Resume in your IDE.

## [scene-4: use-cases] — 10s
> Deep work? Terminal. Code review? Your IDE. Long-running agent? Your phone. No laptop nearby? Open the web app and keep going.

## [scene-5: outro] — 15s
> Pick the surface. Same Claude. Same context. Full series at avinashsangle.com — link in description.

---

## Notes for /video-scenes

| Scene | Existing scene to reuse | Notes |
|---|---|---|
| 1 | `TitleCard` | Two stacked lines: "It's not just" / "a terminal." Accent on "a terminal." Final beat reveals **"6 surfaces"** as a third oversized line. |
| 2 | `BulletReveal` (numbered variant) | 6 chips: Terminal · Desktop · VS Code · JetBrains · Web (claude.ai/code) · Mobile (Remote Control). Stagger 1.0s instead of 1.5s to fit 15s. Drop the trailing filepath card. |
| 3 | New layout — composition-inline | "Same Claude" thesis card + a 3-device row (laptop → phone → IDE) with a single chat bubble passing between them. Per CATALOG decision tree: one-off, inline in `compositions/WhatIsClaudeCode.tsx`, do not promote to a scene. |
| 4 | New layout — composition-inline | 2x2 grid of mini-cards: surface ↔ job. Same "one-off, inline" rationale. |
| 5 | `Outro` | `bigNumber: "6"`, `bigNumberSize: 360`, `subhead: "surfaces"`, `caption: "one Claude. one conversation."`, `url: "avinashsangle.com"`. |

## Pronunciation overrides applied

Added to `src/lib/pronunciation.ts` in this run:
- `IDE` → `I D E` (and plural `IDEs`)
- `claude.ai/code` → `claude dot A I slash code`
- `VS Code` → `V S Code`

Existing rules in play: none triggered by this script.

## Word count

| Scene | Words | Budget |
|---|---|---|
| 1 | 12 | ~12 ✓ |
| 2 | 30 | 30-40 ✓ |
| 3 | 38 | 30-40 ✓ |
| 4 | 22 | ~25 ✓ |
| 5 | 17 | ~15 ✓ |
| **Total** | **119** | ~130 (just under, gives VO breathing room) |
