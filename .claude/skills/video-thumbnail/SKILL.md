---
name: video-thumbnail
description: Render a high-resolution still frame from the composition for use as the YouTube thumbnail. Note that YouTube restricts API thumbnail uploads — must be uploaded manually from mobile.
metadata:
  tags: video, pipeline, thumbnail, youtube
---

# When to use

After `/video-vo` completes. Before or in parallel with `/video-render`.

# Preconditions

- Composition is wired and renders correctly
- `video/posts/<slug>/` directory exists

# Steps

## 1. Pick a hero frame

Suggest a frame that captures the most punchy visual moment of the video. Common choices:

- **Title scene punchline** — when the accent-colored line is fully revealed (typically frame 60-90 for short)
- **Code reveal** — when the env var or one-liner is fully typed and the highlight is pulsing
- **Chart payoff** — when both bars are grown and the ↓50% callout has popped in
- **Outro** — big number ("7", "5x", etc.) fully scaled

Default: **title scene** at the moment the punchline is fully readable. Picks up viewers scrolling who only see the thumbnail.

## 2. Render at full resolution

For short-form (1080×1920):

```bash
mkdir -p video/public/thumbnails && cd video && npx remotion still <Slug> public/thumbnails/<slug>.png --frame=<N> --props='{"thumbnailHoldFrames":0,"hideCaptions":true}'
```

For long-form (1920×1080), the same command works — the composition's `format: "long"` prop drives canvas size via `calculateMetadata`. No need to pass dimensions on the command line.

For long-form, also pass `format: "long"` in the `--props` override so calculateMetadata sees it BEFORE deciding canvas size:

```bash
# Long-form
npx remotion still <Slug> public/thumbnails/<slug>.png --frame=<N> --props='{"format":"long","thumbnailHoldFrames":0,"hideCaptions":true}'
```

`public/thumbnails/` rather than `out/<slug>/` because Remotion's `staticFile()` only reads from `public/`, and `/video-render` burns this PNG into the first frames of the MP4 (so the YT mobile Studio frame picker can snap to it without a separate file upload).

The `--props` override does two things (three for long-form):

- `thumbnailHoldFrames: 0` skips the burn-in for the render of this still itself — otherwise the still would be a self-referential render of an empty thumbnail.
- `hideCaptions: true` skips the runtime CaptionStrip overlay. This step runs *after* `/video-vo`, so `IS_STUB` is false and the CaptionStrip is active by default — it would bleed mid-sentence VO text across the bottom of an otherwise clean thumbnail. All compositions accept this prop.
- `format: "long"` (long-form only) — picks the 1920×1080 canvas.

**Important:** no `--scale` flag. Full resolution (1080×1920 for short, 1920×1080 for long) needed for YouTube to use it crisply.

**Format detection:** read `youtube.json` for the `format` field — if `"long"`, render at 16:9 with `format: "long"` in the props override; otherwise default to short.

## 3. Show the user

User reviews. If they want a different frame, iterate.

## 4. Optional: text/badge overlay

For better CTR, you may want a contrasting text overlay (e.g., "$20 → $10" or "in 60s"). Two ways:

- **Programmatic:** create a `Thumbnail` composition variant with text overlay, render that as the still.
- **Manual:** import the PNG into a graphics tool. Fine but breaks programmatic reproducibility.

For v1, the bare-frame approach works for tech audiences. Don't over-engineer this.

## 5. The thumbnail will be burned into the video

`/video-render` reads `public/thumbnails/<slug>.png` and burns it as the first 0.5s of the rendered MP4 (controlled by `THUMBNAIL_HOLD_FRAMES` in `lib/theme.ts`). After upload, the YouTube mobile Studio app's frame picker can scrub to that opening frame and use it as the thumbnail — no laptop→mobile image transfer needed.

If the user has phone-verified their channel and wants to upload the PNG directly from desktop instead, the file is still at `public/thumbnails/<slug>.png` for manual upload.

## 6. Suggest next

> Thumbnail saved to `video/public/thumbnails/<slug>.png`. Will be burned into the first 0.5s of the rendered MP4. Next: `/video-render`.

# Output contract

| Path | What it contains |
|---|---|
| `video/public/thumbnails/<slug>.png` | Full-res thumbnail for manual upload to YouTube |
