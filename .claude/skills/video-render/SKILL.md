---
name: video-render
description: Final MP4 render of the composition with audio + captions. Lints first, then runs npx remotion render.
metadata:
  tags: video, pipeline, render
---

# When to use

After `/video-vo` and `/video-thumbnail` are done. Last step before publishing.

# Preconditions

- Composition is wired and registered in Root.tsx
- `master.mp3` exists at the path the composition references
- `captions.json` exists (if captions are part of the composition)
- `npm run lint` passes

# Steps

## 1. Lint

```bash
cd video && npm run lint
```

Catches type errors and unused imports before the slower render. If it fails, fix and retry — don't render with broken types.

## 2. Render

```bash
mkdir -p video/out/<slug> && cd video && npx remotion render <Slug> out/<slug>/<slug>.mp4
```

Output goes into the per-video subfolder so renders, frames, and the thumbnail stay grouped (no flat `out/` pile). The composition burns `public/thumbnails/<slug>.png` as the opening of the MP4 — 0.5s for shorts (`THUMBNAIL_HOLD_FRAMES=15`), 2s for long-form (`LONG_THUMBNAIL_HOLD_FRAMES=60`). Fail-fast if the PNG is missing — run `/video-thumbnail` first.

**Render time:**
- Short (60s, 1080×1920): 3-8 minutes
- Long-form (8-10 min, 1920×1080): 30-60 minutes. Add `--concurrency=4` (or higher on a beefy machine) to parallelize frame rendering.

```bash
# Long-form with concurrency
mkdir -p video/out/<slug> && cd video && npx remotion render <Slug> out/<slug>/<slug>.mp4 --concurrency=4
```

The command output shows progress. The render goes through two phases:
- Frame rendering (`Rendered N/M`)
- Encoding to MP4 (`Encoded N/M`)

## 3. Verify

Confirm:
- `video/out/<slug>/<slug>.mp4` exists
- Size is non-trivial (~3-5 MB for a 60s short, larger for long-form)
- File opens and plays correctly (`open video/out/<slug>/<slug>.mp4` on macOS)

## 4. Suggest next

> Final render at `video/out/<slug>/<slug>.mp4`. Next: `/video-publish`.

# If render fails

Common causes:
- Composition references a missing static file (master.mp3, captions.json) → run `/video-vo`
- Webpack build error → re-run `npm run lint` to see TS error
- Memory error on long-form → render at lower scale first to verify, then full

# Output contract

| Path | What it contains |
|---|---|
| `video/out/<slug>/<slug>.mp4` | Final video for upload |
