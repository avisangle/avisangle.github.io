# Video Script — Install Claude Code in 1 Line — npm Is Now the Slow Way

**Format:** short
**Voice:** Brian (default; configurable via .env)
**Target spoken duration:** ~55s
**Series:** Claude Code Shorts (Episode 2)
**Blog post:** n/a — standalone

## [scene-1: title] — 5s
> Most install guides for Claude Code are out of date. Use this.

## [scene-2: install] — 15s
> One line. Mac, Linux, WSL — all the same. Pipe curl into bash. Claude Code installs in about thirty seconds. No npm. No Node required.

## [scene-3: auth] — 15s
> Now type claude. Browser opens. Sign in with your Anthropic account — Pro, Team, or Console — and that's it. No API keys to wrangle. You're in.

## [scene-4: payoff] — 15s
> The native installer auto-updates in the background. That's the real upgrade over npm. One command, zero deps. Heads up — Windows users still need Git for Windows first.

## [scene-5: outro] — 10s
> That's the new install. Most tutorials are still teaching the old one. Full series — link in description.

---

## Notes for /video-scenes

| Scene | Existing scene to reuse | Notes |
|---|---|---|
| 1 | `TitleCard` | Three stacked lines: "Most install guides" (muted) / "are out of date." (white, large) / "Use this." (cyan, oversized). Underline draws under "Use this." |
| 2 | `CodeBlock` | Top caption: "One line." (cyan accent on "line"). Code: `curl -fsSL https://claude.ai/install.sh | bash`. Bottom caption: "no npm. no Node required." (accent on "no Node"). Single-line variant; `fontSize: 36` to fit URL. |
| 3 | New layout — composition-inline | 3-step horizontal row: terminal showing `claude` typing → browser frame with "Sign in with Anthropic" button → checkmark with "you're in." Stagger spring-in from left to right. Per CATALOG decision tree: one-off, inline in `compositions/InstallClaudeCode.tsx`. |
| 4 | New layout — composition-inline | Comparison row: 3 small cards labeled "npm" / "brew" / "native installer". First two with a manual-upgrade icon (muted), third with an auto-rotate icon (cyan, highlighted). Below: large text "auto-updates in the background." Bottom-corner mono caveat: "Windows: install Git for Windows first." |
| 5 | `Outro` | `bigNumber: "1"`, `bigNumberSize: 480`, `bigNumberColor: COLORS.cyan`, `subhead: "line"`, `caption: "no npm. no Node. auto-updates."`, `url: "avinashsangle.com"`. |

## Pronunciation overrides applied (this run)

Added to `src/lib/pronunciation.ts`:
- `npm` → `N P M`
- `WSL` → `W S L`

Existing rules in play: `API` → `A P I`. (URL `https://claude.ai/install.sh` is **not** spoken — visual only — so no rule needed for it.)

Caption display merges added to **both** `src/scenes/CaptionStrip.tsx` and `scripts/lib/srt.ts`:
- `["N", "P", "M"]` → `npm`
- `["W", "S", "L"]` → `WSL`

## Style applied

- Mid-thought opener ("Most install guides are out of date. Use this.") — no "You think X / actually Y" structure
- News peg up front (npm is the old way)
- Specific proper noun in first 5s (Claude Code, npm)
- No parallel-sentence anaphora — broke the temptation in scene 4 (single comparison sentence + caveat)
- Outro is observation + soft CTA, not a slogan
- No spoken brand URL — "link in description" is the close (per standing rule)

## Word count

| Scene | Words | Budget |
|---|---|---|
| 1 | 11 | ~12 ✓ |
| 2 | 26 | ~30 ✓ |
| 3 | 28 | ~30 ✓ |
| 4 | 28 | ~30 ✓ |
| 5 | 17 | ~15 ✓ (slightly over, fine) |
| **Total** | **110** | ~130 (under, gives breathing room) |
