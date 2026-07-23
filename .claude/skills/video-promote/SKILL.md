---
name: video-promote
description: Generate social media drafts (Twitter, LinkedIn, Reddit) for a published YouTube video. Mirrors /promote-blogpost but for video content. Use after /video-publish.
metadata:
  tags: video, pipeline, social, promote
---

# When to use

After `/video-publish` returns a YouTube video ID and the video has been flipped to Public. Generates ready-to-post drafts for Twitter, LinkedIn, and Reddit that link the YouTube URL and (if present) the source blog post.

Works for both modes:
- **Blog mode** — drafts cross-link the YouTube video and the source blog post (drives traffic both ways)
- **Standalone mode** — drafts link the YouTube URL only; no blog references

# Inputs

User provides: YouTube video ID (e.g., `e0gETqkdl2E`).

Optional second argument: slug. If omitted, infer from current pipeline context (most recent `video/posts/<slug>/`).

# Preconditions

- Video is published (Private or Public both fine — if Private, the user typically waits to flip Public before posting)
- `video/posts/<slug>/youtube.json` exists with at least `title`, `description`
- `video/posts/<slug>/brief.md` and `script.md` exist (used to extract hook, key claims)

# Steps

## 1. Determine slug + load context

Resolve slug (argument or most recent posts dir). Load:
- `youtube.json` — title, description, tags, blogUrl (optional), `format` ("short" or "long")
- `brief.md` — hook, key bullets, numbers
- `script.md` — for any one-liner that translates well to social

YouTube URL by `format`:
- `"short"` (or omitted, legacy) → `https://www.youtube.com/shorts/<videoId>`
- `"long"` → `https://www.youtube.com/watch?v=<videoId>`

## 2. Generate platform drafts

Output into `video/posts/<slug>/social/`:
- `twitter-post.md`
- `linkedin-post.md`
- `reddit-post.md`

### Twitter

Constraints: ≤280 chars total (URL counts as 23 chars).

Structure:
```
<one-line hook from script — punchy, claim-driven>

▶️ <YouTube URL>

<if blogUrl: "Full breakdown 🔗 <blogUrl>">

#tag1 #tag2 #tag3
```

Pull 3 hashtags from youtube.json `tags`, formatted as `#PascalCase`. Avoid generic ones (#AI alone) — combine with topic-specific (#ClaudeCode, #AnthropicAPI).

### LinkedIn

Longer-form, no hard limit but keep under ~1300 chars for "see more" cutoff.

Structure:
```
<2-line hook expanded from the script's opening>

In this <60-second | 8-minute> breakdown:
- <bullet 1 from brief>
- <bullet 2>
- <bullet 3>

<the key insight or payoff line — usually the script's strongest claim>

Watch: <YouTube URL>
<if blogUrl: "Full breakdown: <blogUrl>">

<5-7 hashtags, mix of topic + adjacent>
```

Use `60-second` for short, `8-minute` (or actual duration) for long. For long-form, expand bullets to 4-6 (you have a longer video to summarize) and add one extra "what surprised me" line before the watch link.

Tone: professional but not corporate. First-person ("I just shipped...", "Here's what I learned..."). Avoid LinkedIn-cringe ("Excited to share", "Game-changing").

### Reddit

Pick the subreddit based on topic. Common matches:
- Claude / AI agents / LLM topics → `r/ClaudeAI`, `r/LocalLLaMA`, `r/AI_Agents`
- DevOps / CI/CD → `r/devops`
- General coding → `r/programming` (high bar — only if it's genuinely interesting)

Structure:
```
**Suggested subreddit:** r/<sub>
**Title:** <60-100 chars, describe the *content* not "I made a video about X". Reddit hates self-promotion vibe.>

---

<2-3 paragraph body that delivers the actual insight, not a teaser. End with: "Made a 60s breakdown if it helps: <YouTube URL>" or, if blogUrl exists, lead with blog and treat video as supplement.>
```

Reddit is the strictest on self-promotion. Default tone: share the *finding*, the video is incidental. If the topic doesn't have a 1-paragraph standalone insight, skip Reddit.

For long-form videos (`format: "long"`), the body can be 3-4 paragraphs (Reddit tolerates more depth when it's substantive). Lean harder on the actual insight; treat the video as a supplement for "if you want to see this in action".

## 3. Show the user

Display each draft in a code block with character counts. Note any flagged issues:
- Twitter draft over 280 chars
- LinkedIn over 1300 (gets truncated)
- Reddit body too short / too promotional

## 4. Save to disk

Write all three (or two, if Reddit was skipped) into `video/posts/<slug>/social/`.

## 5. Suggest next

> Drafts saved to `video/posts/<slug>/social/`. Review and edit. To post manually: copy the file content. (The `/post-blogpost` skill currently expects blog-folder paths, not video drafts — posting is manual for now; a `/post-video` automation is on the roadmap.)
>
> If `youtube.json` has a `blogUrl`, the existing `/promote-blogpost` skill drafts (in `src/app/blog/<slug>/social/`) and these video drafts can be combined when you post — share the video URL inside the existing blog draft instead of posting twice.

# Output contract

| Path | What it contains |
|---|---|
| `video/posts/<slug>/social/twitter-post.md` | Tweet draft, ≤280 chars |
| `video/posts/<slug>/social/linkedin-post.md` | LinkedIn post draft |
| `video/posts/<slug>/social/reddit-post.md` | Reddit submission draft (subreddit + title + body), or omitted if topic isn't reddit-friendly |

# Notes

- This skill **only generates drafts**. Posting is currently a manual copy-paste — automation (a `/post-video` skill) is Phase 2.
- For standalone videos (no `blogUrl`), the drafts naturally omit blog references and lean harder on the YT URL.
- Don't auto-post from this skill. Drafting is reversible; posting isn't.
