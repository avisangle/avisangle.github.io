---
name: video-script
description: Generate a spoken script for a YouTube short/long. Drafts the full VO as one continuous paragraph first, then drops scene markers on natural beats. Defaults to short (60s, ~150-180 words); accepts --short or --long. Applies pronunciation overrides.
metadata:
  tags: video, pipeline, script
---

# When to use

After `/video-topic` produces a brief at `video/posts/<slug>/brief.md`. The user may pass `--short` (default) or `--long`.

# Preconditions

- `video/posts/<slug>/brief.md` exists.
- Slug is determinable from cwd or argument.

# Steps

## 1. Read the brief (and hook.md if present)

Parse hook, bullets, code, numbers from `video/posts/<slug>/brief.md`.

**Check for `posts/<slug>/hook.md`** (written by `/video-hook-options` if user ran it):

- **hook.md exists** → use the chosen hook **verbatim** as scene-1's spoken text. Do not re-write it. Build the rest of the script around that locked seed. The hook was already chosen from a menu of templated variants and is the user's deliberate pick.
- **hook.md absent** → generate the hook from scratch using the brief's hook line + News peg + style guidance below.

**Check for the `## News peg` section** in brief.md (always appended by `/video-topic` via `/video-news-peg`):

- **Strong peg present** → the hook (or the locked hook in hook.md) should lead with the change/correction the peg describes. Frame the episode as the correction, not as evergreen exposition. (E2 `install-claude-code` is the reference: the hook *"Most install guides for Claude Code are out of date. Use this."* leads with the npm-to-native-installer change rather than a generic install demo.)
- **No peg present** → the hook should lean on a contrarian or first-person angle instead. Don't fall back to YouTuber-explainer cadence ("You think X / actually Y"). See `feedback_video_voice_authentic.md` for what to avoid.
- **Section missing** (older briefs from before /video-news-peg existed) → run `/video-news-peg <slug>` now to populate it before drafting; do not draft from a brief without the peg check.

## 2. Draft the full VO as one continuous paragraph (do this FIRST)

**Critical:** write the entire spoken script as one paragraph before thinking about scenes. The reason this skill used to produce choppy audio is that it wrote scene-by-scene with separate word budgets, which fragments the voice — every scene boundary became a syntactic full stop, and the VO sounded like 5 disconnected claims.

Verified shorts (Fireship, AICodeKing, Theo, Claude Code Shorts playlist) write the VO as one continuous paragraph. The voice is one breath, one arc; scene cuts happen visually around the voice, not the other way around.

### Drafting rules

- Write ~150-180 words for `--short` (~60s at 150 wpm), ~1100-1300 words for `--long` (~8 min at 140-150 wpm).
- Read it out loud. If it doesn't flow as one breath, fix the prose, not the cuts.
- Use connective tissue between thoughts: `and`, `then`, `because`, `so`, em-dashes, comma-lists. Avoid 3+ back-to-back full stops.
- Set up before payoff. For a news-pegged topic, spend ~15-20s building tension before the playbook lands. Don't rush from hook to solution in 8s.
- Loop close: the last 2-3 seconds should callback to the hook (e.g., hook says "Here's how I catch mine" → outro says "Their evals will miss the next one too. Mine won't.").
- **Translate, don't paraphrase.** The brief comes from a developer blog and surfaces API names, snake_case identifiers, and spec terms. The script must translate to consumer language — not copy. For every noun in the brief, ask *"what does this DO?"* and say that instead of the name. Examples: `rubric` → "checklist", `grader` → "second Claude", `user.define_outcome` event → "one line", `max_iterations` → "how many tries before it gives up", `LLM-as-judge` → "AI checking another AI". The blog has the spec; the video has the meaning. A viewer who hasn't read the blog must understand what changed and when they'd care.
- **Include a "who/when" line before the outro.** One sentence answering *"if I do X, this is for me."* Without it, viewers who don't recognize the feature name leave. E.g. *"if your AI builds reports, slides, or emails — anything where 'good enough' isn't, this is the upgrade."* This is the bridge between "what shipped" and "why I personally care".
- **Round decimals in spoken form.** `+10.1%` → "eleven percent". Keep precision only when precision IS the point (e.g. `99.9%` stays). File extensions translate too: `.pptx` → "PowerPoints", `.docx` → "Word docs" in the spoken text. The chart visual can still show `.pptx` / `10.1%` — the spoken layer is the accessibility layer, the visual layer can stay technical.

### Long-form additions (`--long` only)

- **Hook 15-30s with explicit value contract.** First two sentences must answer "what will I know by the end?" Specific outcome, not vibes.
- **Mid-video re-hook at 50-60% runtime.** A "but here's the catch" beat — a tradeoff, a counter-example, a "spoke too soon" reversal. Without this, retention drops past minute 4.
- **Recap at the end** before the outro CTA. 3 bullets, no more. Use the `RecapCard` scene type.
- **5-7 chapters total.** Each 60-120s of spoken content. Chapter titles 25-40 chars. The chapter list goes into `chapters.json` (step 6).
- **Pace target: 140-150 wpm.** Slower than the 160-180 of shorts — the audience needs time to absorb each beat at this length.
- **No intro >5s.** Cut "hi guys, welcome back" entirely. Hook is the intro.

### Style — what to do AND what to avoid

Do:
- Conversational, not written prose
- Active voice, contractions everywhere, fragments OK
- Specific nouns and concrete numbers (`50x quota burn`, `8 bugs in 24h`) — not abstract benefits
- Front-load the hook in the first 3 seconds
- Mid-thought continuity — clauses spill across visual cuts

Avoid (per `feedback_video_voice_authentic.md`):
- Filler ("let's talk about", "in this video", "today we're going to")
- One claim per sentence with full stops between them — that's the v1 pattern that produced choppy audio
- Slogan close (three-word imperative list)
- Parallel anaphora (3+ sentences ending the same way)
- Spoken brand URL (always "link in the description", never "avinashsangle.com")
- **API identifiers in spoken text** — snake_case (`user.define_outcome`, `max_iterations`), dot.notation API symbols, ALL_CAPS constants, file extensions read as letters. These belong in the blog. The video says what they DO. Allow-list: `API`, `CLI`, `MCP`, `IDE`, `SDK`, `PR`, `CI`, `JSON`, `YAML` and other brand-level acronyms — anything else gets translated.

## 3. Pick a scene shape (visuals only — voice is already drafted)

Now segment the visual track. Match topic type:

**Short-form (`--short`, 5 scenes ~12s each):**

| Topic type | Scene shape |
|---|---|
| Pain → solution (default for blog posts) | title → bullets → code → chart → outro |
| Architecture explainer | title → diagram → walkthrough → comparison → outro |
| Tutorial / how-to | title → step-1 → step-2 → step-3 → result → outro |
| Take-down / opinion | title → claim → counter-evidence → conclusion → outro |
| Comparison | title → A → B → verdict → outro |

**Long-form (`--long`, 5-7 chapters spread across 8-10 min):**

Use `[chapter-N: title] — ~Ns` markers between major sections. Each chapter contains one or more scenes. The `ChapterCard` scene type renders the chapter header.

| Topic type | Chapter shape |
|---|---|
| News-peg explainer | hook (NewsPegHeadline) → context → demo (DemoBlock) → tradeoffs (QuoteCard + recap of catch) → recap (RecapCard) → outro |
| Build-narrative ("I built X with Y") | hook (working result demo) → why now → how it works (CodeBlock + DemoBlock) → tradeoffs → recap → outro |
| Comparison deep-dive | hook (verdict spoiler) → contender A (DemoBlock) → contender B (DemoBlock) → side-by-side (ComparisonSplit) → recap → outro |
| Tutorial deep-dive | hook (end result) → setup → step 1 (DemoBlock) → step 2 (DemoBlock) → step 3 (DemoBlock) → recap → outro |
| Contrarian / anti-hype | hook (claim) → what everyone does (DemoBlock) → why it fails → what to do instead (DemoBlock) → tradeoffs → recap → outro |

Every long-form video must include at least one `DemoBlock` (the tool actually running) — without it retention drops past the 8-min mid-roll-ad gate.

If a scene type doesn't exist yet in `video/src/scenes/`, note it. Either propose a custom scene component (handled in `/video-scenes`) or pick the closest existing type.

### Drop scene markers on natural beats

Once the scene shape is chosen, slice the continuous VO at natural beats — em-dashes, commas, "and"-bridges, sentence boundaries that align with where the visual needs to change. **Do not** rewrite sentences to fit scenes; if a scene's content needs the voice to span a cut, mark the transition as a bridge.

### The bridge convention (for voice that spans a cut)

When a sentence carries across a scene boundary:
- Place a single em-dash (`—`) at the END of the prior scene's text only
- The next scene starts with the continuation word in lowercase, NO leading em-dash
- Tag the next scene with `bridge: true` (e.g., `### [scene-2: stats] — ~10s ` + `` `bridge: true` `` annotation)

Example:
```
### [scene-1: setup] — ~18s
> ... burned quotas fifty times faster than baseline —

### [scene-2: stats] — ~10s `bridge: true`
> seven weeks of silent regressions, eight bugs filed in a day...
```

This tells `/video-vo` to skip the `SCENE_SEP` between bridged scenes (see "Generator note" below) so the audio flows continuously where the script reads continuously.

### Generator note

`video/scripts/generate-vo.ts` honors `bridge: true` natively — bridged transitions use a single space, non-bridged use `" ... "`. No further patch needed.

### Word-count budgets (per scene, after segmenting)

These are guidelines, not budgets. The TOTAL is what matters; the per-scene count just helps balance visuals.

| Format | Total | Hook/Title | Mid scenes (each) | Recap | Outro |
|---|---|---|---|---|---|
| short (60s, length-flex up to ~70s) | ~150-180 words | 15-25 | 20-40 | — | 15-25 |
| long (8-10 min) | ~1100-1300 words | 60-120 (incl. 15-30s value contract) | 150-250 per scene; ~200 per chapter | ~80 | ~50 |

Length over 60s on short-form is fine when the topic warrants the setup — a strong news peg or compounding-context hook benefits from a longer build. For `--long`, do not go below 1100 words — anything shorter implies the topic should have stayed a short.

## 4. Apply pronunciation overrides

Check spoken text against `video/src/lib/pronunciation.ts`. Add new entries for any tech terms that ElevenLabs would mispronounce (acronyms, file extensions, snake_case identifiers, code keywords).

For Eleven v3, use **alias substitution** (not phoneme tags — v3 doesn't support them).

## 5. Format with markers

Save to `video/posts/<slug>/script.md` with **two sections**: the full continuous VO (for reference + read-aloud check) and the scene-marked version (for `/video-scenes` and `/video-vo`).

```markdown
# Video Script — <Title>

**Format:** short | long
**Voice:** Brian (default; configurable via .env)
**Target spoken duration:** ~60s | ~8min
**Blog post:** <canonical URL>

---

## Full VO (continuous — read aloud as one breath)

> <full ~150-180 word paragraph, no scene markers>

**<word count> words / ~<seconds>s at 150 wpm.**

---

## Scene-marked (cuts on natural beats — voice carries across)

### [scene-1: title] — ~Ns
> <opening segment, may end in em-dash if bridging to scene-2>

### [scene-2: <type>] — ~Ns `bridge: true` (if continuing from scene-1)
> <continuation — lowercase start if bridged, no leading em-dash>

### [scene-3: <type>] — ~Ns
> <next segment>

...
```

The two-section format is intentional: the full VO is the source of truth (recorded as one breath); the scene-marked split is the visual map.

## 6. Generate YouTube metadata (and chapters.json for long-form)

Once the script is locked, draft `video/posts/<slug>/youtube.json` so `/video-publish` has zero hand-editing later. Schema:

```json
{
  "format": "short",
  "title": "≤70 chars, hook-driven, ends with a number/question/payoff",
  "description": "Multi-paragraph. Open with the spoken hook expanded to 2-3 sentences. Mid: the key facts/numbers. End: blog CTA (if any) + hashtag block.",
  "tags": ["8-15 tags, total ≤500 chars, mix exact-match + adjacent topics"],
  "categoryId": "28",
  "privacy": "private",
  "selfDeclaredMadeForKids": false,
  "embeddable": true,
  "blogUrl": "https://avinashsangle.com/blog/<slug>",
  "playlistIds": ["PLxxxxxxxxxxxxx"],
  "playlistTitle": "Claude Code Shorts"
}
```

The `format` field is `"short"` or `"long"` — read by `/video-publish` to pick the watch-URL shape and by `/video-promote` to adjust draft tone. Default `"short"` if omitted (so legacy `youtube.json` files keep working).

**For `--long` only**: also write `video/posts/<slug>/chapters.json` with one entry per chapter, computed from the chapter durations:

```json
[
  { "start": "0:00", "title": "The setup" },
  { "start": "1:12", "title": "What everyone does" },
  { "start": "2:48", "title": "The catch" },
  { "start": "4:30", "title": "What to do instead" },
  { "start": "6:55", "title": "Recap" }
]
```

`/video-publish` reads this and prepends the timestamp block to the YouTube description. YouTube requires the first chapter to be `0:00` and minimum chapter length 10s, so verify before writing.

Sources:
- **Title** — derived from the script's hook line. Tighten to ≤70 chars (Bing prefers under 70). Avoid clickbait — keep the literal claim from the script.
- **Description** — open with the script's hook expanded into prose, mid section = the key claims/numbers from each scene, last section = a hashtag block. **Blog mode** (brief.md has a canonical URL): add a `🔗 https://avinashsangle.com/blog/<slug>` "Full breakdown" CTA before the hashtags. **Standalone mode** (custom topic, no blog post): omit the CTA — link the channel handle or skip entirely.
- **Tags** — pull from brief.md keywords + scene-specific terms. Lower-case. Multi-word tags allowed.
- **`blogUrl`** — set to the canonical blog URL in blog mode, omit the field entirely in standalone mode (it's an optional field, used by `/video-blog-embed` and `/video-promote` to know whether a blog post exists).
- **`playlistIds`** / **`playlistTitle`** — both optional. Include only if the brief indicates a series (e.g., "Claude Code Shorts" episode). Prefer `playlistIds` (precise) when the user already knows the playlist ID — get it via `npm run yt:playlists`. Use `playlistTitle` for first-episode bootstrap; the upload script will create the playlist on first publish, matching the video's privacy. Omit both fields for one-off videos. If both are set, `playlistIds` wins.

`categoryId: "28"` (Science & Technology) is the default. Always start `privacy: "private"`. User flips to public manually after review.

## 7. Run `/video-style-lint <slug>` (auto-invoke)

Before showing the script for confirmation, invoke the `video-style-lint` skill via the Skill tool with the slug as args. It reads `script.md` and reports any anti-patterns (YouTuber-explainer hook, parallel anaphora, slogan close, spoken brand URL, Q/A grid) with line citations + suggested rewrites.

The lint result is **advisory** — never blocks the pipeline. Show it to the user as a section in step 8's confirmation block. The user decides whether to fix issues, ship anyway, or stop.

If `/video-style-lint` fails (script missing, etc.), report the failure inline and continue — do not block on this step.

## 8. Confirm with user

Show:
1. The full script.md content
2. The youtube.json content
3. The `/video-style-lint` report from step 7

Ask if any line should be punched up. Iterate on copy if requested. If lint flagged issues and the user wants to fix them, edit script.md, re-run lint, then re-confirm.

## 9. Suggest next

> Script saved to `video/posts/<slug>/script.md`. YouTube metadata saved to `video/posts/<slug>/youtube.json`. Next: `/video-scenes`.

# Output contract

| Path | What it contains |
|---|---|
| `video/posts/<slug>/script.md` | Two-section script: full continuous VO + scene-marked cuts. Input to `/video-scenes` and `/video-vo`. |
| `video/posts/<slug>/youtube.json` | YT title/description/tags/category/privacy/format — read by `youtube-upload.ts` at `/video-publish` time |
| `video/posts/<slug>/chapters.json` | **Long-form only.** Chapter timestamp list — read by `/video-publish` to inject into the YouTube description. |

# YouTube Shorts standards (the bar this skill aims for)

| Standard | What it means |
|---|---|
| 3-second hook | First 3s answer "why watch?" — contrarian claim, news peg, or cold open. No setup phrases. |
| 150-180 words for ~60s | At 150 wpm. Length-flex up to ~70s when the setup justifies it. Under 130 = under-using the slot. |
| One core idea | One takeaway per short. Multi-step playbooks count as one if framed as one move. |
| Mid-thought continuity | Voice spans cuts. Visuals change ~3x per spoken sentence; the voice rarely pauses at scene boundaries. |
| Loop close | Last 2-3s callback to the hook so the algorithm catches re-watches. |
| Active voice + specific nouns | Contractions, fragments OK. Strong verbs, concrete numbers (`50x`, `8 bugs`), proper nouns in first 5s. |
| No filler | Drop "hi guys", "in this video", "today we're going to". |

The drafting flow in step 2 (full VO first, scene-mark second) is what produces audio that hits these standards. Writing scene-by-scene with separate budgets — the v1 pattern this skill used to follow — fragments the voice and misses the mid-thought-continuity bar.
