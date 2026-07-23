# Video Script — Anthropic's ant CLI: 10 Minutes to a Live Claude Agent

**Format:** short
**Voice:** Brian (default; configurable via .env)
**Target spoken duration:** ~60s
**Blog post:** https://avinashsangle.com/blog/ant-cli-getting-started

---

## Full VO (continuous — read aloud as one breath)

> Anthropic's ant CLI dropped a month ago — and most devs still haven't tried it. Their command-line tool for managed agents — three hundred GitHub stars in ten days, and the whole thing reads like kubectl, but for Claude. Install with one brew command. Define an agent as a YAML file, check it into git like any other config. The full create command fits on one line: ant beta agents create, with a name, a model, a system prompt, and a tool block. That's a working code reviewer agent. No app code, no runtime to host, no scaling tickets. Pricing is the part most coverage skips — eight cents per session-hour, billed to the millisecond, so a typical one-hour Opus session lands around seventy cents end-to-end. MCP servers plug in if you need custom tools. Ten minutes from brew install to a deployed agent. Most devs still haven't tried it. Link in the description.

**151 words / ~60s at 150 wpm.**

---

## Scene-marked (cuts on natural beats — voice carries across)

### [scene-1: title] — ~6s
> Anthropic's ant CLI dropped a month ago — and most devs still haven't tried it.

### [scene-2: bullets] — ~16s
> Their command-line tool for managed agents — three hundred GitHub stars in ten days, and the whole thing reads like kubectl, but for Claude. Install with one brew command. Define an agent as a YAML file, check it into git like any other config —

### [scene-3: code] — ~16s `bridge: true`
> the full create command fits on one line: ant beta agents create, with a name, a model, a system prompt, and a tool block. That's a working code reviewer agent. No app code, no runtime to host, no scaling tickets —

### [scene-4: chart] — ~14s `bridge: true`
> pricing is the part most coverage skips — eight cents per session-hour, billed to the millisecond, so a typical one-hour Opus session lands around seventy cents end-to-end. MCP servers plug in if you need custom tools.

### [scene-5: outro] — ~8s
> Ten minutes from brew install to a deployed agent. Most devs still haven't tried it. Link in the description.

---

## Notes for /video-scenes

| Scene | Existing scene to reuse | Notes |
|---|---|---|
| 1 | `TitleCard` | Three stacked lines: "Anthropic's ant CLI" (muted) / "dropped a month ago." (white, large) / "Most devs still haven't tried it." (cyan, oversized). Underline draws under "still haven't". |
| 2 | `BulletReveal` | Three bullets, stagger spring-in: "300+ stars in 10 days", "kubectl-style resource model", "brew install + YAML config". Mono accent on `kubectl`, `brew`, `YAML`. |
| 3 | `CodeBlock` | Top caption: "One line." (cyan accent on "line"). Code block (bash):<br>`ant beta:agents create \`<br>`  --name "Code Reviewer" \`<br>`  --model claude-sonnet-4-6 \`<br>`  --system "..." \`<br>`  --tool '{"type": "agent_toolset_20260401"}'`<br>Bottom caption: "no app code." (accent on "no"). |
| 4 | New layout — composition-inline | Stat-stack: 3 large numbers stagger in vertically — "$0.08 / session-hour" / "~$0.70 / typical Opus hour" / "billed to the millisecond". Right-column small caption: "MCP plugs in for custom tools." Per CATALOG decision tree: one-off, inline in `compositions/AntCliGettingStarted.tsx`. (`CostChart` doesn't fit — these aren't a time-series.) |
| 5 | `Outro` | `bigNumber: "10"`, `bigNumberSize: 480`, `bigNumberColor: COLORS.cyan`, `subhead: "minutes"`, `caption: "brew. YAML. deploy."`, `url: "avinashsangle.com"`. |

## Pronunciation overrides applied (this run)

Added to `src/lib/pronunciation.ts`:
- `kubectl` → `kube control`
- `YAML` → `yamel`
- `macOS` → `mac O S`

Existing rules in play: `MCP` → `M C P`, `CLI` → `C L I`. (`ant beta:agents create` is spoken as "ant beta agents create" — the colon is silent in the source text — and `agent_toolset_20260401` is visual-only via the code block, not in spoken VO.)

Caption display merge (when `/video-vo` runs) needed in `src/scenes/CaptionStrip.tsx` and `scripts/lib/srt.ts`:
- single-token "yamel" → display as `YAML`
- single-token "kube control" pair → display as `kubectl`

## Style applied

- News peg in scene-1 (locked from `hook.md`) — soft peg framed as contrarian observation ("a month ago, most devs still haven't tried it")
- Specific proper nouns in first 5s (Anthropic, ant CLI)
- Concrete numbers throughout (300 stars, 10 days, $0.08, $0.70, 10 minutes) — no abstract benefits
- Bridges across scenes 2→3 and 3→4 keep the voice continuous over visual cuts
- Outro is observation + soft CTA, not a slogan; loop close ("Most devs still haven't tried it") echoes the hook
- No spoken brand URL — "link in the description" per standing rule

## Word count

| Scene | Words | Budget |
|---|---|---|
| 1 | 14 | 15-25 (locked from hook.md, slightly under) |
| 2 | 43 | 20-40 (slightly over — bridges into scene-3) |
| 3 | 41 | 20-40 (slightly over — bridges into scene-4) |
| 4 | 33 | 20-40 ✓ |
| 5 | 19 | 15-25 ✓ |
| **Total** | **150** | 150-180 ✓ |
