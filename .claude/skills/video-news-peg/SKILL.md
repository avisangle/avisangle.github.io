---
name: video-news-peg
description: Check Anthropic + Claude Code release notes and recent news for a peg that could anchor a video episode. Outputs a "News peg" section appended to the topic brief if a recent (≤30 days) release/announcement is relevant. Always invoked by /video-topic before /video-script; can also be called standalone for slate planning.
metadata:
  tags: video, pipeline, research, news
---

# Why this exists

Per the post-E1 channel research synthesized in `feedback_video_voice_authentic.md`: news-pegged Claude Code shorts outperform evergreen ones. Top performers (AICodeKing, Theo, Fireship, IndyDevDan) all peg episodes to a release ("Claude Code 2.1", "leaked source", "agent teams"). The release IS the hook. Evergreen tutorials win only when they smuggle in a contrarian angle.

E2 (`install-claude-code`) was the first episode to use a news peg — the npm-to-native-installer change. The hook lifted from the news directly. Without that peg, E2 would have been "here's how to install Claude Code" — a structurally weaker episode.

This skill makes that check repeatable.

# When to use

**Targeted mode** — `/video-news-peg <slug>`:
After `/video-topic` produces a brief at `video/posts/<slug>/brief.md`, **before** `/video-script`. The pipeline calls this automatically from `/video-topic` step 6 — no manual invocation needed in the normal flow. Manual invocation is for revisiting an existing brief weeks later.

**Standalone mode** — `/video-news-peg` (no args):
Slate planning. Surveys recent releases without needing a brief; outputs a dated digest with suggested slate matches. Useful when the user asks "what's worth covering this week?"

# Inputs

- Slug (optional). Without it, standalone mode.
- Reads `video/posts/<slug>/brief.md` in targeted mode (must exist).

# Sources (validated 2026-04-28)

In order of authority. Hit ALL three; cap at 5 fetches to stay light.

1. **https://code.claude.com/docs/en/whats-new** — Weekly feature digests with code snippets and exact version tags. Most actionable for episode pegging. Pattern `https://code.claude.com/docs/en/whats-new/YYYY-wNN` available for specific weeks if a digest looks relevant.
2. **https://code.claude.com/docs/en/changelog** — Granular CLI version history (e.g. v2.1.119 dated). Best for "X just shipped" pegs.
3. **https://www.anthropic.com/news** — Company-wide announcements and product launches. Broader Anthropic context (model releases, partnerships, big news).

**Do not bother with:**
- GitHub `anthropics/claude-code/releases` — no releases published
- `platform.claude.com/docs/en/release-notes*` — 404
- `https://www.anthropic.com/claude-code` — static product page
- Anthropic doesn't expose RSS, no machine-readable feeds.

# Steps

## 1. Detect mode

If a slug arg is passed, **targeted**. Otherwise, **standalone**.

In targeted mode, verify `video/posts/<slug>/brief.md` exists. If missing, fail with: *"Brief not found at video/posts/<slug>/brief.md — run /video-topic <slug> first."*

## 2. Fetch the news

Use the `Agent` tool (`subagent_type: claude-code-guide` if discussing Claude Code; `general-purpose` for broader Anthropic news). One agent call, focused prompt:

> "Fetch the last 30 days of releases/announcements from these three URLs: [list]. For each entry found in that window, return: date (YYYY-MM-DD), source URL, headline, 1-line summary. Aim for 5-15 entries total. Skip anything older than 30 days. Report under 400 words, structured as a markdown list."

Isolating the WebFetch chatter in an agent keeps the main conversation context clean.

## 3. (Targeted only) Filter for relevance to the brief

Read `brief.md`. Identify the topic area (install / hooks / MCP / subagents / cost / etc.) from the hook + key bullets.

For each release the agent returned, classify:

- **Strong peg:** the release directly affects the topic area (e.g., new install method → install episode; new hook event → hooks episode; MCP server addition → MCP episode).
- **Weak peg:** release is in adjacent space — interesting but not the spine of the script.
- **Not a peg:** unrelated.

Keep only **strong pegs**. If multiple strong pegs exist, pick the most recent.

## 4. (Targeted only) Append "News peg" section to brief.md

If a strong peg exists:

```markdown
## News peg

**Release:** [name + date]
**Source:** [URL]
**Why it pegs this topic:** [1-2 sentences naming the specific connection]
**How to use it in the script:** [1-2 sentences — usually "lead the hook with the change, frame the episode as the correction" or "open mid-action with the new behavior"]
```

If no strong peg:

```markdown
## News peg

*None found in the last 30 days. Frame the hook on a contrarian or first-person angle instead.*

(Releases checked but rejected as not directly relevant: [1-line list — keeps the audit trail])
```

The "no peg" note is **not failure** — it's deliberate documentation. `/video-script` reads this section and adapts the hook strategy.

## 5. (Standalone only) Write the dated digest

```bash
mkdir -p video/briefs/news-pegs
```

Write `video/briefs/news-pegs/YYYY-MM-DD.md`:

```markdown
# News pegs survey — YYYY-MM-DD

## Recent releases (last 30 days)

### [Release name] — YYYY-MM-DD
- **Source:** [URL]
- **Summary:** [1 line]
- **Suggested slate matches:** [list of slate episodes this could peg, e.g. "E2 install-claude-code", "E14 mcp-in-60-seconds"]

### [Release name 2] — ...
```

End with:

```markdown
## Strongest peg right now

**Release:** [name]
**Suggested next episode:** [topic]
**Why now:** [1-2 sentences on freshness + relevance]
```

## 6. Suggest next

Targeted:
> News peg appended to `video/posts/<slug>/brief.md`. Next: `/video-script --short` (or `--long`).

Standalone:
> News peg survey saved to `video/briefs/news-pegs/YYYY-MM-DD.md`. Use the "strongest peg" recommendation to pick the next `/video-topic`.

# Failure modes

- **All fetches fail (network).** Append `## News peg\n\n*Not checked — network errors.*` to brief.md and continue. Don't block the pipeline.
- **Brief not found in targeted mode.** Fail with the message in step 1 — don't invent a brief.
- **Agent returns nothing recent.** Treat as "no strong peg found" — append the "no peg" template, move on.

# Output contract

| Path | What it contains |
|---|---|
| `video/posts/<slug>/brief.md` (targeted) | "## News peg" section appended (either a strong peg or a "no peg found" note) |
| `video/briefs/news-pegs/YYYY-MM-DD.md` (standalone) | Dated digest of recent releases + slate-match suggestions + a "strongest peg right now" recommendation |

# Notes

- **Cache:** v1 has none. News changes daily; each call re-fetches. Acceptable cost given infrequent use (~once per episode).
- **Relevance is judgment, not regex.** A new install method is a strong peg for an install episode but a weak one for an MCP episode. Use the agent's summaries to make the call; don't keyword-match.
- **30-day window is the default.** A topic with strong evergreen value (e.g. "what is Claude Code") might peg something 60 days back if nothing fresher exists — but flag the staleness in the "News peg" section.
- **Standalone mode is for the user's slate planning.** It is NOT auto-invoked by anything — only the user runs it, e.g. before a batch episode-planning session.
