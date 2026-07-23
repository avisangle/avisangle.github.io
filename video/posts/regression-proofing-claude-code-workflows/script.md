# Video Script — Regression-Proof Claude Code: Pin, Lock, Test

**Format:** short
**Voice:** Brian (default; configurable via .env)
**Target spoken duration:** ~50s
**Series:** Claude Code Shorts
**Blog post:** https://avinashsangle.com/blog/regression-proofing-claude-code-workflows

## [scene-1: title] — 8s
> This morning Anthropic patched four Claude Code regressions. Their evals never caught a single one. Here's how I catch mine.

## [scene-2: bullets] — 12s
> Three moves. Pin the CLI to the last good release. Two settings to lock — the effort level and a model allowlist. A stop hook that replays golden prompts every session.

## [scene-3: code] — 11s
> The pin is two commands. Uninstall global, reinstall the last good release, then drop one line into npmrc. Future updates can't touch you until you say so.

## [scene-4: chart] — 11s
> Seven weeks of silent regressions. Quotas burning fifty times faster than baseline. Eight bugs filed in twenty-four hours. Rollback takes under five minutes once you've got the playbook.

## [scene-5: outro] — 7s
> Anthropic will ship the next regression. Your config doesn't have to. Link in the description for the full breakdown.

---

## Notes for /video-scenes

| Scene | Existing scene to reuse | Notes |
|---|---|---|
| 1 | `TitleCard` | Three stacked lines: "This morning, four regressions." (muted) / "Anthropic's evals missed all four." (white, large) / "Here's how I catch mine." (cyan, oversized). |
| 2 | `BulletReveal` | Three bullets, stagger spring-in: "1. Pin the CLI version", "2. Lock effortLevel + availableModels in settings.json", "3. Stop hook replays golden prompts". Mono accent on `effortLevel`, `availableModels`, `settings.json`. |
| 3 | `CodeBlock` | Top caption: "The pin." (cyan accent on "pin"). Code block (bash):<br>`npm uninstall -g @anthropic-ai/claude-code`<br>`npm install -g @anthropic-ai/claude-code@2.1.117`<br><br>`# ~/.npmrc`<br>`@anthropic-ai/claude-code:version=2.1.117`<br>Bottom caption: "locked until you say so." (accent on "locked"). |
| 4 | New layout — composition-inline | Stat-stack composition: 4 large numbers stagger in vertically — "7 weeks" / "50x quota burn" / "8 bugs in 24h" / "5 min rollback". Right column: tiny captions for context. Per CATALOG decision tree: one-off, inline in `compositions/RegressionProofClaudeCode.tsx`. (`CostChart` doesn't fit — these aren't a cost time-series.) |
| 5 | `Outro` | `bigNumber: "3"`, `bigNumberSize: 480`, `bigNumberColor: COLORS.cyan`, `subhead: "moves"`, `caption: "pin. lock. test."`, `url: "avinashsangle.com"`. |

## Pronunciation overrides applied (this run)

Added to `src/lib/pronunciation.ts`:
- `npmrc` → `N P M R C`

Existing rules in play: `npm` → `N P M`. (`v2.1.117` and `settings.json` are visual-only — not in spoken text.)

Caption display merge (when `/video-vo` runs) needed in `src/scenes/CaptionStrip.tsx` and `scripts/lib/srt.ts`:
- `["N", "P", "M", "R", "C"]` → `npmrc`

## Style applied

- News peg in scene-1 ("This morning Anthropic patched four…") — frames the episode as the correction, not evergreen exposition
- Specific proper nouns in first 5s (Anthropic, Claude Code)
- No parallel anaphora — scene-2 mixes structures (imperative → noun phrase → noun phrase) instead of three back-to-back imperatives
- Concrete numbers in scene-4 (50x, 8 bugs, 24h, 5 min) — not abstract benefits
- Outro is observational ("Anthropic will ship the next regression. Your config doesn't have to.") — not a slogan close
- No spoken brand URL — "link in description" is the close (per standing rule)

## Word count

| Scene | Words | Budget |
|---|---|---|
| 1 | 20 | ~12 (locked from hook.md, slightly over) |
| 2 | 30 | ~30 ✓ |
| 3 | 26 | ~30 ✓ |
| 4 | 28 | ~30 ✓ |
| 5 | 18 | ~15 (slightly over, fine) |
| **Total** | **122** | ~130 (under, gives breathing room) |
