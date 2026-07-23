---
name: video-topic
description: Start the blog→video pipeline. Accepts a blog slug or a free-form topic; produces a content brief and asks go/refine/no-go for custom topics. Always the first step.
metadata:
  tags: video, pipeline, topic, brief, research
---

# When to use

The user wants to create a YouTube video from a blog post or a fresh topic. This is always the first step in the video pipeline.

# Inputs

User provides one of:
- **Blog slug** that matches `src/app/blog/<slug>/page.tsx`
- **Free-form topic** (anything else, triggers research path)

# Steps

## 1. Detect input type

Check if `src/app/blog/<input>/page.tsx` exists.
- Yes → **blog mode** (extract directly, skip research)
- No → **research mode** (custom topic)

## 2. Determine slug

For blog mode: reuse the existing slug.
For custom mode: slugify the topic (lowercase, kebab-case, strip articles/stop words).

## 3. Extract content (blog mode)

Use the Explore agent on `src/app/blog/<slug>/page.tsx`. Extract:

- **Hook** — one-sentence pain or surprise from the intro
- **3-5 key bullets** — spoken-form sentences (≤10 words each)
- **Demoable code** — the most visually compelling 5-10 line snippet, with language
- **Numbers** — concrete dollar amounts, percentages, counts that animate well
- **Canonical URL** (`https://avinashsangle.com/blog/<slug>`)
- **Title and description** from the page's `metadata` export

Cap the extraction agent at ~300 words.

## 4. Research (custom mode)

Invoke the `/research-topic` skill if available; otherwise WebSearch the topic for:
- Search demand
- Existing coverage / gaps
- AI citation potential
- Visual / demo potential

Apply a video-suitability filter:
- Has a 5-second hook?
- Demoable code or visuals exist?
- Concrete numbers worth animating?

If no clear answer, recommend `no-go` with reasoning.

## 5. Suggest format

Default: `--short` (60s, 9:16, ~150-180 words).

Recommend `--long` (8-10 min, 16:9, ~1100-1300 words, 5-7 chapters) when **any** of these holds:
- Multi-step tutorial that won't compress to 60s without losing the demo.
- Strong news peg + real before/after to demonstrate (the build-narrative pattern).
- Comparison of 2+ tools/approaches that need side-by-side runtime, not slides.
- Authority play — depth/credibility on a topic where shorts feel shallow.

If the user is unsure, recommend short — long-form takes ~3-4× longer to produce and renders 30-60 min vs 3-8 min.

## 6. Write the brief

Save to `video/posts/<slug>/brief.md`:

```markdown
# Topic Brief — <Title>

**Source:** <blog URL or "custom topic">
**Format suggested:** short | long
**Slug:** <slug>

## Hook
<one sentence>

## Key bullets
- <bullet 1>
- ...

## Demoable code
```<lang>
<code>
```

## Numbers to animate
- <stat 1>
- ...

## Canonical URL
<URL or "n/a — custom topic, blog post may follow">

## SEO seed (refined later by /video-script)
- Working title: <draft>
- Tags: <comma list>
```

## 7. Run `/video-news-peg <slug>` to append the news peg

After the brief is written, invoke the `video-news-peg` skill via the Skill tool with the slug as args. It fetches the last 30 days of Anthropic + Claude Code releases, picks the strongest peg for the topic (or notes "no peg found"), and appends a `## News peg` section to `brief.md`.

This is automatic — the user doesn't need to chain it. Per the post-E1 channel research, news-pegged shorts outperform evergreen ones; this step makes the check repeatable. Skip only if the user explicitly says `--no-peg`.

If `/video-news-peg` fails (network, missing brief, etc.), it self-documents in the brief and the pipeline continues — do not block on this step.

## 8. Confirm (custom topic only)

For custom topics, present the brief (including the News peg section) and ask **go / refine / no-go**.
- Refine → user clarifies, regenerate
- No-go → stop, suggest alternate angles

For blog topics, no confirmation needed — the user already validated the topic when they wrote the post.

## 9. Suggest next command

End the response with:

> Brief saved to `video/posts/<slug>/brief.md` (with News peg).
>
> **Optional next:** `/video-hook-options <slug>` to generate 7 hook variants in proven channel styles and pick one before locking the script.
>
> **Then:** `/video-script --short` (or `--long`). It auto-honors `hook.md` if present; otherwise generates a hook from scratch.

# Output contract

| Path | What it contains |
|---|---|
| `video/posts/<slug>/brief.md` | Topic brief — input to `/video-script`. Includes a `## News peg` section appended by `/video-news-peg`. |
