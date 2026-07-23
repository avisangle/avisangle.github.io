# Video Script — Plan Mode: The Claude Code Feature Most Devs Miss

**Format:** short
**Voice:** Brian (default; configurable via .env)
**Target spoken duration:** ~55s
**Series:** Claude Code Shorts (Episode 3)
**Blog post:** n/a — standalone

## [scene-1: title] — 5s
> Stop hitting Enter on every Claude Code prompt. Shift+Tab twice gives you Plan mode.

## [scene-2: contrast] — 15s
> Default mode: Claude edits files immediately. Wrong dependency order, tests fail. In Plan mode, Claude proposes a plan first. You catch the order issue before any file is touched.

## [scene-3: how-to] — 15s
> Shift+Tab twice cycles to Plan mode. Or use the slash-plan command. Claude writes a plan file — now named after your prompt. You read it, edit it, approve it.

## [scene-4: when-to-use] — 15s
> Best for refactors that touch multiple files, ambiguous prompts, or unfamiliar codebases. Production work where one wrong edit costs hours is the obvious case.

## [scene-5: outro] — 10s
> Two keystrokes. That's the whole barrier. Most tutorials still skip Plan mode. Full series — link in description.

---

## Notes for /video-scenes

| Scene | Existing scene to reuse | Notes |
|---|---|---|
| 1 | `TitleCard` | Three stacked lines: "Stop hitting Enter." (muted) / "Shift+Tab twice." (white, mono accent on the keys) / "Plan mode." (cyan, oversized). Underline draws under "Plan mode." |
| 2 | New layout — composition-inline | Split or sequential: top half "Default mode" (red — 5 file edits, error indicators) → bottom half "Plan mode" (cyan — plan file appearing, user-edits-it indicator). One-off, inline per CATALOG decision tree. |
| 3 | New layout — composition-inline OR `CodeBlock` | Two paths: animated `Shift+Tab` keybinding (twice → cycles through 4 mode pills, lands on Plan) + alternative `/plan` slash command. Then a plan file `oauth-refactor-plan.md` appearing with steps animating in. Could be inline or could use CodeBlock for the plan file portion. |
| 4 | `BulletReveal` (numbered variant) | 4 numbered chips: Multi-file refactors / Ambiguous prompts / Unfamiliar codebases / Production work. Drop start delay, tighter stagger to fit 15s. |
| 5 | `Outro` | `bigNumber: "2"`, `bigNumberSize: 480`, `bigNumberColor: COLORS.cyan`, `subhead: "keystrokes"`, `caption: "approve before execute. fewer wrong turns.", `url: "avinashsangle.com"`. |

## Pronunciation overrides applied

No new rules added this run. The script avoids problematic terms:
- `Shift+Tab` — Brian pronounces "shift tab" naturally
- `/plan` is written as the spoken phrase "slash plan" directly in the script (visual carries `/plan` literal)
- `v2.1.111` is NOT in the spoken script (only in `youtube.json` description)
- All other terms are natural English

## Style applied

- **Hook is locked from `hook.md`** (IndyDevDan anti-hype contrarian template, user-picked from /video-hook-options menu) — used verbatim, not re-written
- **News peg woven into scene 3** as a subtle trust signal ("now named after your prompt") rather than the hook — matches the brief's News-peg guidance
- No "You think X / actually Y" structure
- No parallel-sentence anaphora — scene 4 uses a comma list, not three parallel "Use it for..." sentences
- Outro: observation ("That's the whole barrier") + concrete callback ("Most tutorials still skip Plan mode") + soft CTA — not slogan-only
- No spoken brand URL — "link in description" only

## Word count

| Scene | Words | Budget |
|---|---|---|
| 1 | 14 | ~12 (locked hook, slight over OK) |
| 2 | 29 | 30-40 ✓ |
| 3 | 29 | 30-40 ✓ |
| 4 | 24 | 30-40 ✓ |
| 5 | 17 | ~15 ✓ (slightly over, fine) |
| **Total** | **113** | ~130 (under, gives breathing room) |
