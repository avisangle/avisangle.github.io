---
name: video-scenes
description: Build the Remotion composition file and customize scene props from the script. Generates composition file, customizes per-scene content (code, bullets, chart values), renders 5 stills for visual review.
metadata:
  tags: video, pipeline, scenes, remotion
---

# When to use

After `/video-script` produces `script.md`. Wires up the Remotion composition for a specific topic.

# Preconditions

- `video/posts/<slug>/script.md` exists with `[scene-N: type]` markers
- Brand theme in `video/src/lib/theme.ts` is correct
- Existing scene templates in `video/src/scenes/` (TitleCard, BulletReveal, CodeBlock, CostChart, Outro, CaptionStrip)

# Core principle: reuse before extending

**Default to reusing existing scenes with new props.** Editing files in `video/src/scenes/` is rare and deliberate. The library is documented in `video/src/scenes/CATALOG.md` — this is the source of truth for what exists, what variants each scene has, and what props they accept.

For each beat in the script, walk the catalog's **Decision tree** top-down. Pick the first match:

1. **Existing scene + existing variant via props alone?** → use it. All work happens in `compositions/<Slug>.tsx`. No `scenes/*.tsx` edits.
2. **New variant of an existing scene?** → add it inside the existing file (e.g., a new `BulletItem.kind`).
3. **Genuinely new visual primitive?** → new scene file. Bar is high: it must be reusable across ≥2 future videos. One-offs go inline in the composition.
4. **All-video change (theme, caption look)?** → edit `lib/theme.ts` or `CaptionStrip.tsx`.

If you find yourself reaching for option 2 or 3, pause and ask the user before doing it.

# Steps

## 1. Read the catalog

Open `video/src/scenes/CATALOG.md` and skim every scene + variant. This is non-negotiable — without it you cannot make the reuse-vs-new call correctly.

## 2. Parse the script

Read script.md. For each `[scene-N: type]` marker note:
- Scene id (`scene-N-<type>`)
- Spoken text
- The visual beat in plain language ("show three tactics as a numbered list", "show before/after bars")

## 3. Map each beat to the catalog

For every beat, decide which catalog entry it maps to and *which variant*. Produce a table for the user before writing any code:

| Scene # | Beat | Component | Variant | Reuse / new variant / new scene |
|---|---|---|---|---|

If everything is "Reuse", continue. If anything is "new variant" or "new scene", show the user the table and confirm before extending the library.

## 4. Generate the composition file

Use `video/src/compositions/ClaudeCodeCostTracking.tsx` as the template. Create `video/src/compositions/<Slug>.tsx`:

- `Series` with one `Series.Sequence` per scene, each rendering the chosen scene component with topic-specific props.
- Master `<Audio>` inside `Sequence` offset by `audioOffsetFrames`.
- `CaptionStrip` overlay reading `captions.json` + `audioDurationSeconds`.
- Reference `public/voiceover/<CompId>/master.mp3` and `captions.json`.

**All per-video content lives here in props** — strings, code lines, chart values, colors, durations. Never bake content into a scene file.

## 5. Extend the library only if step 3 said so

If a beat needs a new variant or new scene, do it now in a small focused edit:

- **New variant of existing scene** — add the discriminator value or new prop, keep all existing variants working with their current props (backward-compatible). Update the scene's section in `CATALOG.md`: add the variant under **Variants** with a one-line description and a "First used in" tag.
- **New scene file** — add it to `video/src/scenes/<Name>.tsx`. Add a new top-level section to `CATALOG.md` with purpose, props table, variants, and "First used in".

If you skipped this step, do not touch `scenes/*.tsx`.

## 6. Register composition in Root.tsx

Add a new `<Composition>` entry in `video/src/Root.tsx`. For short-form:

```tsx
<Composition
  id="<Slug>"
  component={<Slug>}
  durationInFrames={1800}  // placeholder, calculateMetadata overrides
  fps={FPS}
  width={1080}
  height={1920}
  defaultProps={{...}}
  calculateMetadata={buildCalcMetadata<<Slug>Props>(scenesData)}
/>
```

For **long-form** (`format: "long"` in props), use 1920×1080 and pass `format: "long"` in defaultProps. The `calculateMetadata` reads `format` and overrides width/height/thumbnail-hold automatically — you do not need to hardcode 1920/1080 on the `<Composition>` element (it'll be overridden), but pass the right values in defaultProps for Studio preview to look right:

```tsx
<Composition
  id="<Slug>"
  component={<Slug>}
  durationInFrames={1800}
  fps={FPS}
  width={1920}
  height={1080}
  defaultProps={{
    format: "long",
    sceneDurations: [...],
    audioOffsetFrames: 0,
    thumbnailSrc: "thumbnails/<slug>.png",
  } satisfies <Slug>Props}
  calculateMetadata={buildCalcMetadata<<Slug>Props>(scenesData)}
/>
```

The composition's Props type must extend `{ format?: VideoFormat; ... }` (import `VideoFormat` from `../Root`) so calculateMetadata can read it.

For every long-form composition, the catalog requires at least one `DemoBlock` scene. Without it the video misses the retention bar past the 8-min mid-roll-ad gate.

## 7. Render visual checks

For short-form (1080×1920):

```bash
mkdir -p video/out/<slug> && cd video && npx remotion still <Slug> out/<slug>/frame-90.png --frame=90 --scale=0.5 --props='{"thumbnailHoldFrames":0}'
```

For long-form (1920×1080), the same command works — the composition's `format: "long"` prop drives the canvas size via `calculateMetadata`. Render one still per chapter (typically 5-7 stills, not 5).

Render stills, one per scene/chapter at a representative frame, all into `out/<slug>/` so render artifacts for this video stay grouped (alongside the eventual MP4 burned-in thumbnail at render time). The `--props` override skips the thumbnail burn-in for the still — it doesn't exist yet at this stage and would shift frame numbers. Show the user.

## 8. Confirm

User reviews. Iterate on visuals if requested. Don't move on if anything looks broken (text overflow, missing elements, color clash).

## 9. Update CATALOG.md if anything was added

Final checkpoint before handoff. If step 5 ran:

- New scene → top-level section added with purpose + props + variants + "First used in"
- New variant → Variants list of that scene updated, "First used in" tag updated
- All-video change → entry added to **Global changes log**

If step 5 did not run, skip — but state explicitly: *"No catalog updates — reused existing scenes."* This makes the reuse-vs-extend decision visible in every run.

## 10. Suggest next

> Composition wired and visually verified. Next: `/video-vo`.

# Output contract

| Path | What it contains |
|---|---|
| `video/src/compositions/<Slug>.tsx` | The Remotion composition (always) |
| `video/src/Root.tsx` | Updated with new composition registration (always) |
| `video/src/scenes/*.tsx` | **Only if** step 5 ran — new variant or new scene |
| `video/src/scenes/CATALOG.md` | **Only if** step 5 ran — variants or scenes added |
| `video/out/<slug>/frame-*.png` | Visual verification stills (always) |
