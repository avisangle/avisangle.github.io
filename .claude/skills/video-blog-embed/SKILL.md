---
name: video-blog-embed
description: Embed the YouTube video into the source blog post and add VideoObject JSON-LD schema. Takes the YouTube video ID as the argument.
metadata:
  tags: video, pipeline, blog, embed, seo, jsonld
---

# When to use

After `/video-publish`, once you have a YouTube video ID — **only in blog mode**. Wires the cross-reference between the published video and its source blog post.

**When to skip**: If the video is **standalone** (no source blog post), this skill does not apply. Stop and tell the user the video has no blog post to embed into. The next pipeline step is `/video-promote <id>` instead.

Quick check: open `video/posts/<slug>/youtube.json`. If `blogUrl` is missing, this is a standalone video — skip.

# Inputs

User provides: YouTube video ID (e.g., `N9tRvJJYKPk`).

# Preconditions

- Source blog page exists at `src/app/blog/<slug>/page.tsx`
- Slug is derivable from current pipeline context (most recent `video/posts/<slug>/`)
- VO `scenes.json` has `audioDurationSeconds` (used to compute ISO 8601 duration in schema)

# Steps

## 1. Determine slug and metadata

From `video/posts/<slug>/`:
- `brief.md` for canonical URL and title
- `scenes.json` for total duration

## 2. Add YouTube embed component

Add a YouTube embed near the top of the blog page — after the breadcrumb / section header, before the article body. Use a lazy iframe so it doesn't hurt LCP.

For 9:16 Shorts use a fixed-width vertical container. For 16:9 long-form use `aspect-video`:

```tsx
{/* Short (9:16) */}
<div className="mx-auto my-8 w-full max-w-md">
  <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-border">
    <iframe
      className="h-full w-full"
      src="https://www.youtube.com/embed/<VIDEO_ID>"
      title="<Video title>"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>
```

```tsx
{/* Long (16:9) */}
<div className="mx-auto my-8 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-border">
  <iframe
    className="h-full w-full"
    src="https://www.youtube.com/embed/<VIDEO_ID>"
    title="<Video title>"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

`loading="lazy"` defers iframe load until it scrolls into view.

## 3. Add VideoObject JSON-LD schema

Follow the existing JSON-LD pattern used elsewhere in this codebase (see `src/app/blog/*/page.tsx` for `TechArticle` and `BreadcrumbList` examples — render via the same `<script type="application/ld+json">` mechanism).

The schema body to inject:

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "<Video title>",
  "description": "<short blurb, 150-200 chars>",
  "thumbnailUrl": ["https://i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg"],
  "uploadDate": "<YYYY-MM-DD>",
  "duration": "PT<seconds>S",
  "contentUrl": "https://www.youtube.com/watch?v=<VIDEO_ID>",
  "embedUrl": "https://www.youtube.com/embed/<VIDEO_ID>",
  "publisher": {
    "@type": "Person",
    "name": "Avinash Sangle",
    "url": "https://avinashsangle.com"
  }
}
```

ISO 8601 duration:
- < 60s: `PT<N>S` (e.g., `PT45S`)
- ≥ 60s: `PT<M>M<S>S` (e.g., `PT8M30S`)

Round audio duration up to nearest second.

## 4. Update the sitemap

Update `src/app/sitemap.ts` (which generates `/sitemap.xml`) for the blog post entry:
- Bump the post's `lastModified` to today's date (YYYY-MM-DD)

There is no `public/sitemap.xml`; it was removed in July 2026 because it silently went
stale behind the `sitemap.ts` route. Do not recreate it.

## 5. Verify

```bash
npm run lint    # quick check on the Next.js project
# or
npm run build   # full check including page render
```

Open the page locally (`npm run dev`) and confirm:
- Embed iframe renders
- Page LCP isn't regressed (lazy load handles this)
- View page source: JSON-LD VideoObject block is present

## 6. Suggest commit (don't run without approval)

Propose:

```
feat: embed YouTube video + VideoObject schema for <slug>
```

Wait for user approval before `git add` / `git commit`.

## 7. End of pipeline

> Blog cross-reference wired. Pipeline complete.
>
> Final manual step: flip the YouTube video Private → Public when ready (Studio link from `/video-publish`).
>
> Want me to `/schedule` an agent to check the video's first-week metrics (views, retention, click-through)?

# Output contract

| Path | Change |
|---|---|
| `src/app/blog/<slug>/page.tsx` | YouTube embed + VideoObject JSON-LD added |
| `src/app/sitemap.ts` | `lastModified` updated for the blog entry |
