# Scene Catalog

Single source of truth for every scene component in `video/src/scenes/`.

**Read this BEFORE writing or editing any scene.** When you add a new scene type, a new variant of an existing scene, or a meaningfully new prop, update this file in the same change.

The current rule of thumb: every video should reach for these first. New scene types are a last resort — see the decision tree at the bottom.

---

## TitleCard.tsx

Hero open. Stacked lines stagger in, then an accent underline draws underneath the last line.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `lines` | `TitleLine[]` | 3-line cost-tracking default | Each line: `{ text, color, size, weight }`. Ordering controls stagger. Last line color drives underline color. |
| `underlineWidthPercent` | `number` | `55` | Final width of the animated underline as a percentage of viewport width. |

**Variants**

- *Stacked stagger* (the only one today). 2-4 lines, ascending size+weight, accent on the last line.

**First used in:** `claude-code-cost-tracking`

---

## BulletReveal.tsx

Header + a vertical list of styled chips that pop in with a stagger. Optionally trails a wide filepath/snippet card at the bottom.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `header` | `{ line1, line2, line2Color? }` | "It's already / tracked." | Two-line headline. `line2` gets accent color. |
| `items` | `BulletItem[]` | 3 slash + 1 filepath | Chips render in order. `filepath` items are pulled out and rendered at the bottom regardless of position. |
| `itemStartDelaySeconds` | `number` | `3.0` | When the first chip appears. |
| `itemStaggerSeconds` | `number` | `1.5` | Gap between chips. |

**Variants** (the `BulletItem.kind` discriminator)

- `slash` — `{ kind: "slash", text }` → big mono `/keyword` chip. Use for terse keywords (commands, flags, tactics).
- `numbered` — `{ kind: "numbered", index, text }` → wide chip with accent index ("01") + sans label. Use for ordered lists, longer labels.
- `filepath` — `{ kind: "filepath", muted, accent }` → full-width mono path card with a muted prefix and an accent suffix. Use to point at a path/glob in the closing beat.

**First used in:** `claude-code-cost-tracking` (slash + filepath); `numbered` added for `claude-managed-agents`.

---

## CodeBlock.tsx

Caption above → code box scales in → typewriter renders code → orange highlight pulse → bottom payoff caption pops in.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `topCaption` | `{ text, accentText?, accentColor? }` | "The biggest lever?" | Sets up the question/setup. |
| `lines` | `CodeToken[][]` | one-line `MAX_THINKING_TOKENS` | Each inner array is one line; tokens inside a line render inline. Use for syntax color. |
| `bottomCaption` | `{ text, accentText?, accentColor? }` | "Cuts your bill ~50%" | The payoff. |
| `fontSize` | `number` | `44` | Drop to ~36 for tight multi-line code; raise to ~52 for one short line. |
| `typewriterSeconds` | `number` | `3.0` | Total time for the typewriter to finish, regardless of length. |

**Variants**

- *Single-line* (default).
- *Multi-line* — pass multiple inner arrays in `lines`. Cursor anchors to the last visible line during typing. First used in `claude-managed-agents`.

**First used in:** `claude-code-cost-tracking`

---

## CostChart.tsx

Header → two animated bars grow in sequence (before then after) → big payoff callout pops in. Bars carry their own labels and value formatting.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `header` | `{ line1, line2, line2Color? }` | "Three tweaks. / Half the bill." | Two-line headline. |
| `bars` | `[ChartBar, ChartBar]` | $20+ vs $10 | Always exactly two — left grows first, right grows second. |
| `callout` | `{ text, color? }` | "↓ 50%" | Big bottom text that pops after both bars settle. |
| `revealOrder` | `"bars-first" \| "callout-first"` | `"bars-first"` | Animation order. Use `"callout-first"` when the VO names the overall headline before the per-bar breakdown. |

`ChartBar` shape: `{ label, value, prefix?, suffix?, decimals?, color, maxHeight, overlay? }`

- `prefix` defaults to `"$"`. Set to `""` for non-dollar metrics.
- `decimals` defaults to `0`. Use `1` or `2` for fractional values (e.g., latency seconds).
- `overlay` renders a small label above the bar mid-grow. Use sparingly — it's for an annotation, not a second value.

**Variants**

- *Cost compare* — default usage; before vs after bill. `revealOrder: "bars-first"`.
- *Generic compare* — same component with `prefix=""` for non-cost metrics (latency, lines-of-code, count). First used in `claude-managed-agents` with decimals + overlay.
- *Callout-first* — `revealOrder: "callout-first"`. Callout pops at 0.8–1.8s, bars grow at 4–9s. Use when the VO leads with the overall headline number ("ten percent across the board") before naming the per-bar specifics. First used in `claude-managed-agents-outcomes`.

**First used in:** `claude-code-cost-tracking`

---

## Outro.tsx

Big number pops → subhead/caption fade up → URL pill fades up → bouncing arrow + "link in description" prompt.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `bigNumber` | `string` | `"7"` | The headline number ("7", "3", "5x"). String, not number — supports suffixes. |
| `bigNumberSize` | `number` | `360` | Adjust if the number has 2+ chars. |
| `bigNumberColor` | `string` | accent | |
| `subhead` | `string` | `"tactics"` | One word ideally. Sits under the number. |
| `caption` | `string` | "full breakdown on the blog" | One short sentence. |
| `url` | `string` | `"avinashsangle.com"` | Mono pill. Always brand domain. |
| `ctaLabel` | `string` | `"link in description"` | Uppercase tagline at the very bottom. |

**Variants**

- *Standard recap* (the only one today). Big number + word + URL.

**First used in:** `claude-code-cost-tracking`

---

## CaptionStrip.tsx

**Not a scene** — overlay layer rendered above all scenes by the composition. Burns TikTok-style word-highlighted captions from char-level VO alignment. Never invoked from a `Series.Sequence`.

The strip detects format from `useVideoConfig()` aspect ratio: when `width > height` (long-form 16:9) it switches to a smaller font and tighter bottom padding (`LONG_SAFE_AREA_BOTTOM`). Shorts (9:16) use the original 64px font and 400px safe area.

**Don't edit unless** changing the caption look-and-feel for *all* videos (font, position, size, outline, token-grouping window). Per-video display fixes (pronunciation aliases, acronyms) go in `DISPLAY_SUBSTITUTIONS` inside this file.

---

# Long-form scenes

These scenes are designed for the 1920×1080 long-form canvas (`format: "long"` in composition props). They also render fine on the 1080×1920 Shorts canvas, but their layouts (chapter labels, side-by-side splits, headline cards) only earn their keep at long-form pacing where chapters and recaps are part of the script structure.

## ChapterCard.tsx

Section header between long-form chapters. Big chapter index → accent bar wipe → chapter title → optional subtitle. Holds 2–3s.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `index` | `string` | `"01"` | Chapter number, mono-styled. Pad to 2 digits for visual rhythm. |
| `title` | `string` | `"The setup"` | The chapter name. Aim for 2–4 words, max 40 chars. |
| `subtitle` | `string?` | — | One short sentence under the title, optional. |
| `accentColor` | `string` | `COLORS.accent` | Override per-chapter to colour-code sections (e.g., red for "the catch"). |

**First used in:** `regression-proof-long-form` (planned)

---

## DemoBlock.tsx

Full-bleed terminal/IDE/screen recording surface. The retention workhorse — every long-form video should have at least one of these where the actual tool runs on screen.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `src` | `string?` | — | Path passed to `staticFile()`. e.g. `"demos/regression-cli-typing.mp4"`. |
| `kind` | `"video" \| "image"` | `"image"` | Use `"video"` for `.mp4`/`.webm` clips (rendered via `<OffthreadVideo>`); `"image"` for stills/GIFs. |
| `topLabel` | `string?` | — | Small mono pill in the top-left (e.g., `"LIVE"`, `"DEMO"`, `"BEFORE"`). |
| `caption` | `string?` | — | Bold single-line caption pinned to the bottom of the demo frame. |
| `loop` | `boolean` | `true` | Whether video clips loop. |
| `muted` | `boolean` | `true` | Always keep `true` — VO is the audio. |

If `src` isn't supplied, renders a placeholder so the composition still builds during scene-stub development.

**First used in:** `regression-proof-long-form` (planned)

---

## RecapCard.tsx

End-of-video recap. Heading → numbered bullets stagger in → optional takeaway pops at the end. Used as the penultimate scene before `Outro`.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `heading` | `string` | `"The recap"` | Section heading. |
| `bullets` | `string[]` | 3 cost-tracking defaults | 3 bullets recommended. 2 reads thin; 4+ feels like another list. Each bullet 2–6 words. |
| `takeaway` | `string?` | — | The "one thing to remember" line, accent-colored. Optional. |
| `bulletStartDelaySeconds` | `number` | `1.0` | When the first bullet appears. |
| `bulletStaggerSeconds` | `number` | `0.9` | Gap between bullets. |

**First used in:** `regression-proof-long-form` (planned)

---

## ComparisonSplit.tsx

Side-by-side A vs B card. Left card flies in first → right card flies in → optional verdict pill pops in the middle. Used for "before/after", "tool A vs tool B", "what they ship vs what you do".

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `header` | `string?` | — | Section heading above the split. Optional. |
| `left` | `ComparisonSide` | "Before" / red | The losing/old/wrong side. |
| `right` | `ComparisonSide` | "After" / green | The winning/new/right side. |
| `verdict` | `{ text, color? }?` | — | Pill shown beneath the cards (e.g., `"50× safer"`). Optional. |

`ComparisonSide`: `{ label, body, color?, badge? }`. Color drives the accent strip and label tint; pick from semantic palette (red/green/cyan/yellow/purple).

**First used in:** `regression-proof-long-form` (planned)

---

## QuoteCard.tsx

Pull-quote with attribution. Big opening curly quote → quote body → attribution → optional source line. Use for citing tweets, release notes, or your own thesis line.

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `quote` | `string` | thesis line | The quote itself. Centered. Aim for ≤14 words for visual balance. |
| `attribution` | `string` | em-dash thesis | Who said it / where it's from. Centered, muted. |
| `source` | `string?` | — | Mono caps line under attribution (URL or "tweet, 2026-04-12"). |
| `accentColor` | `string` | `COLORS.accent` | The opening quote-mark color. |

**First used in:** `regression-proof-long-form` (planned)

---

## NewsPegHeadline.tsx

Theo BREAKING-style cold open. Pulsing tag pill → headline → source/date line. Use as scene-1 when the script anchors on a news peg (release note, CVE, pricing change).

**Props**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `source` | `string` | `"anthropic.com/news"` | Where the story comes from. Mono. |
| `headline` | `string` | release headline | Real headline text, ideally verbatim. ≤90 chars. |
| `date` | `string?` | — | ISO or human date alongside source. |
| `tagPill` | `{ label, color? }` | `{ label: "Breaking", color: COLORS.red }` | The pulsing pill. Override label for `"Update"`, `"CVE"`, `"Patch"`. |

**First used in:** `regression-proof-long-form` (planned)

---

# Long-form decision tree (`format: "long"`)

For 8–10 min long-form videos, walk top-down for each beat:

1. **Cold open / news peg?** → `NewsPegHeadline` if there's a real headline; otherwise `TitleCard` with a value-contract first line.
2. **Section header?** → `ChapterCard` with index + title between major chapters. Aim for 5–7 chapters total.
3. **Tool actually running?** → `DemoBlock` with `kind: "video"` for the screen recording. Don't simulate; record the real thing.
4. **Code or config?** → `CodeBlock` (existing).
5. **Numbers / before-after?** → `CostChart` for two-bar metrics, or `ComparisonSplit` for two side-by-side cards (qualitative).
6. **Citation / mid-video pull-quote?** → `QuoteCard`. One per video max; it's the "but here's the catch" beat.
7. **List of items?** → `BulletReveal` (existing) for build-out lists; `RecapCard` only at the end.
8. **End recap?** → `RecapCard` → `Outro` as the last two scenes. Always in this order.

**Rule:** every long-form video must include at least one `DemoBlock`. Without a real demo, retention drops below the 8-min mid-roll-ad gate.

---

# Decision tree: reuse vs. new variant vs. new scene

When `/video-scenes` plans a video, walk this top-down for each beat:

### 1. Can an existing scene + existing variant express it via props alone?
**→ Yes:** use it. Don't touch `scenes/*.tsx`. All work happens in `compositions/<Slug>.tsx`. Done.

This is the default and should cover ~80% of beats.

### 2. Is it a new *variant* of an existing scene? (same purpose, different visual flavor)
**→ Yes:** add a variant inside the existing file.

Conditions for "new variant":
- The visual primitive is the same (a list, a chart, a code box, a hero).
- A new discriminator value or a new prop unlocks the look (e.g., `BulletItem.kind = "numbered"`).
- It coexists with existing variants — old videos still render the same.

After adding, update the **Variants** section of that scene below and add a "First used in" tag.

### 3. Is it a genuinely new visual primitive?
**→ Yes:** create a new scene file.

Conditions for "new scene":
- No existing scene's purpose covers it (e.g., a flowchart, a screen recording, a pull-quote, a counter ticking up, a side-by-side comparison card grid, a Lottie character).
- Trying to add it as a variant would balloon an existing scene's prop surface or fight its layout.
- It's likely to be reused in 2+ future videos. (One-off? Inline it in the composition file instead.)

After creating, add a top-level section to this catalog with purpose + props + variants + "First used in."

### 4. Is the change to *all* videos? (theme, captions, fonts)
**→ Yes:** edit `lib/theme.ts` or `CaptionStrip.tsx`. Note the change at the bottom of this file under **Global changes**.

---

# Global changes log

Date-stamped log of changes that affect every existing video (theme, captions, fonts, build pipeline). Per-scene additions belong in the scene's own section above, not here.

- *(none yet — log new entries as `YYYY-MM-DD — what changed — why`)*
