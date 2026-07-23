---
name: video-style-lint
description: Lint a video script.md against verified anti-patterns from the channel research (YouTuber-explainer hooks, parallel anaphora, slogan closes, spoken brand URL, Q/A grids). Advisory output with line citations + suggested rewrites. Auto-invoked from /video-script step 7 (confirmation); also runnable standalone.
metadata:
  tags: video, pipeline, lint, style
---

# Why this exists

The post-E1 channel research (`feedback_video_voice_authentic.md`) catalogued 4 anti-patterns that consistently underperform on YouTube Shorts in this niche. E1 (`what-is-claude-code`) shipped with 3 of them and got "looks generic and promotional" feedback from the user. E2 (`install-claude-code`) was rewritten to avoid all 4 — the structural difference was the entire post-shipping diagnosis we did.

This skill makes that diagnosis run **before** ship, not after. Pre-flight check before `/video-vo` spends ElevenLabs credits.

# When to use

**Auto-invoked** — `/video-script` step 7 calls this skill via the Skill tool before showing the script for user confirmation. Findings appear inline in the confirmation block; user decides whether to fix or ship.

**Standalone** — `/video-style-lint <slug>` can be run any time against an existing script. Useful for revisiting older scripts before re-recording.

# Inputs

- Slug (required). Reads `video/posts/<slug>/script.md`.
- Fail with a clear message if the script doesn't exist.

# Anti-patterns to detect

For each pattern: a detection rule, the why, and a suggested rewrite. Apply to the spoken text only (everything between scene markers, ignoring `## Notes for /video-scenes` and other meta sections).

## 1. YouTuber-explainer hook structure

**Detection:** scene-1's spoken text starts with one of these structural openers (case-insensitive, in the first ~80 chars):

- `you think...` → `actually...` / `it actually...` / `but actually...`
- `what if I told you...`
- `here's the thing...`
- `imagine if...` / `imagine you...`
- `let me tell you...`
- `did you know...`
- `today we're going to...` / `today I'll show you...`
- `in this video...`

**Why it fails:** Verified shorts in this niche open mid-action / mid-thought / with a contrarian claim — never with a setup. AICodeKing, Claude Code Shorts playlist entries all skip the preamble.

**Suggested rewrite:** "Open with a specific moment, news peg, or contrarian claim. Drop the setup. See `feedback_video_voice_authentic.md` for examples and `/video-hook-options <slug>` for templated alternatives."

## 2. Parallel-sentence anaphora (3+ sentences ending the same way)

**Detection:** within any single scene, find 3+ consecutive sentences ending in the same word OR ending with the same 2-word phrase. Examples that should fire:

- "Same conversation. Same tools. Same memory."
- "It's fast. It's powerful. It's free."
- "No npm. No Node. No deps."

Note: 2 parallel sentences are fine (rhythm). Only 3+ count as anaphora.

**Why it fails:** Reads as marketing copy / brand deck — never appears in verified shorts. A single comparison sentence delivers the same idea without the corporate cadence.

**Suggested rewrite:** "Consolidate to one or two sentences, or vary the ending. E.g. 'No npm. No Node required.' instead of three parallel 'No X' lines."

## 3. Spoken brand URL

**Detection:** any occurrence of `avinashsangle.com` (case-insensitive) in any spoken-text scene block.

**Why it fails:** Standing user rule (see `feedback_voice_no_brand_url.md`). The brand mark stays as a visual element only; spoken brand URLs feel promotional and break the conversational tone. Viewers tap the description link, never type long URLs.

**Suggested rewrite:** "Replace with 'link in the description' or a near variant. The URL still appears as a visual brand pill in the Outro scene."

## 4. Slogan-only outro

**Detection:** the final scene (typically `[scene-5: outro]` or `[scene-N: outro]`) consists ONLY of imperative + abstract claims, with no observation/punchline before the CTA. Heuristic:

- Starts with an imperative verb ("Pick", "Try", "Use", "Choose", "Go") OR
- Two+ short abstract claims back-to-back ("Same X. Same Y.") with no concrete callback to the body of the script

Plus the absence of either:
- A concrete observation pointing back to the body of the script ("most tutorials are still teaching the old one")
- A punchline / deflating moment ("they vibe coded it")

**Why it fails:** Verified shorts close with observation or punchline + soft CTA. A slogan-only outro signals "ad", not "video".

**Suggested rewrite:** "Open the outro with a concrete observation or punchline that callbacks to the body. Then the CTA. E.g. 'That's the new install. Most tutorials are still teaching the old one. Full series — link in description.'"

## 5. Q/A formulaic grid (3+ Q/A pairs in a row)

**Detection:** within a single scene, 3+ consecutive sentences where the first sentence ends with `?` and the next sentence is ≤3 words and ends with `.`. Examples that fire:

- "Deep work? Terminal. Code review? IDE. Long agent run? Phone."

**Why it fails:** Reads as a brand deck / decision matrix. Two Q/A pairs are punchy; 3+ become formulaic.

**Suggested rewrite:** "Mix in a non-Q/A structure for at least one beat. E.g. 'Deep work? Terminal. For code review, your IDE. Long agent run — your phone.'"

## 6. API identifiers in spoken text

**Detection:** spoken text contains any of:

- `snake_case` identifiers — regex `\b[a-z]+_[a-z_]+\b`
- `dot.notation` API symbols where the right side is snake_case or camelCase — regex `\b[a-z]+\.[a-z][a-zA-Z_]*\b` (exclude brand domains like `claude.ai`, `code.claude.com`, `avinashsangle.com`)
- `ALL_CAPS` constants ≥3 chars — regex `\b[A-Z][A-Z_]{2,}\b`

**Allow-list** (NOT violations — brand/protocol acronyms listeners already know):
`API`, `CLI`, `MCP`, `IDE`, `SDK`, `PR`, `CI`, `CD`, `URL`, `HTTP`, `HTTPS`, `JSON`, `JSONL`, `YAML`, `TOML`, `XML`, `HTML`, `CSS`, `JS`, `TS`, `OS`, `AI`, `LLM`, `GPU`, `CPU`, `RAM`, `WSL`, `NPM`, `IDEs`, `PRs`, `LLMs`, `VS`.

**Why it fails:** API names, snake_case identifiers, and spec constants belong in the blog post — the video says what they DO, not what they're called. The `claude-managed-agents-outcomes` script first draft had `user.define_outcome` and `max_iterations` in the spoken text and read as developer-only; the rewrite swapped them for "one line" and "how many tries before it gives up" and immediately became accessible to non-engineers. This is the single most common drift when `/video-script` lifts nouns from a technical brief instead of translating them.

**Suggested rewrite:** "Replace each match with the plain-language phrase the blog uses in prose, not the spec. Ask 'what does this DO?' and say that. The chart/code visual can still show the identifier — accessibility lives in the spoken layer."

# Long-form anti-patterns (`--long` only)

These checks fire only when the script's frontmatter has `Format: long` (or the youtube.json has `format: "long"`). For shorts, these checks are skipped — the structures they require don't fit a 60s slot.

## L1. Missing value contract in hook

**Detection:** scene-1's spoken text does NOT contain any of: "by the end", "you'll [know|see|understand|learn|be able to]", "I'll show you", "in the next [N|few] minutes". Within the first ~80 words (~30s).

**Why it fails:** 2026 retention research — long-form videos that deliver an explicit value claim within the first 30s retain ~52% vs ~44% for those that don't. Without the contract, viewers don't commit to staying.

**Suggested rewrite:** "Add a single sentence in the hook: 'By the end of this video, you'll [specific outcome].' Make it concrete — what they'll know or be able to do, not vibes."

## L2. Missing mid-video re-hook

**Detection:** between scenes 3 and 5 (or roughly the middle 50-60% of chapters), no occurrence of any of: "but here's", "the catch", "the problem is", "what they don't tell you", "but actually", "now this is where", "but wait".

**Why it fails:** Retention drops past minute 4 without a pattern interrupt. The "but here's the catch" beat is the single most consistent retention pattern across IndyDevDan, Theo, Fireship long-form.

**Suggested rewrite:** "Add a tradeoff / counter-example / 'spoke too soon' beat at ~50-60% runtime. Doesn't have to be a literal 'catch' — just a pattern interrupt that repays the value contract from the hook."

## L3. Intro >5s

**Detection:** scene-1's first 5 seconds (~12 words at 150 wpm) contain "welcome", "hey guys", "what's up", "before we [start|begin|jump in]", or "today we're going to". Strict heuristic — anything that delays the hook.

**Why it fails:** Viewers leave in the first 5s if they don't see why they should stay. Logo animations, channel intros, and "hey guys" all cost retention with zero upside.

**Suggested rewrite:** "Cut entirely. Open with the news peg / claim / before-after demo. The hook is the intro."

## L4. Chapter count out of band

**Detection:** count `[chapter-N: …]` markers in script.md. Fires if count is <5 or >7.

**Why it fails:** 2026 chapter research — fewer than 5 chapters reads as one long monologue (low session retention); more than 7 fragments the narrative and adds chapter cards that visually exhaust the viewer.

**Suggested rewrite:** "Re-segment to 5-7 chapters, 60-120s each. Combine adjacent thin chapters or split a long one in half."

## L5. Word-per-minute outside 130-160 band

**Detection:** total word count / target seconds (read from script frontmatter "Target spoken duration"). Fires if WPM <130 or >160.

**Why it fails:** Long-form audience needs 140-150 wpm to absorb each beat. The 160-180 wpm of shorts feels rushed at 8 minutes. Below 130 reads as filler.

**Suggested rewrite:** "Re-read the script aloud to a stopwatch. If too fast, cut filler clauses; if too slow, tighten by removing connecting tissue. Target ~145 wpm sustained."

# Steps

## 1. Read script.md

Open `video/posts/<slug>/script.md`. Identify all `[scene-N: type]` markers and the spoken-text blocks under each (between the marker and the next marker, before any `## Notes` section).

If the file doesn't exist, fail with: *"Script not found at video/posts/<slug>/script.md — run /video-script first."*

## 2. Apply each detection rule

For each anti-pattern (1-5), scan the spoken-text blocks:
- Note the scene marker and approximate line number where the issue is found
- Capture the verbatim offending text (truncate to ~60 chars in the report)
- Match against the suggested-rewrite template

## 3. Run positive checks

These are *passes* worth surfacing:

- ✅ **Outro CTA structure:** outro scene contains "link in description" or near variant ("link's in the description", "more in the description")
- ✅ **No spoken brand URL:** no `avinashsangle.com` anywhere
- ✅ **Hook names a proper noun in first 5 sec:** scene-1 contains "Claude Code" (or other capitalized product noun) within the first ~12 words
- ✅ **News peg honored:** if `brief.md` has a strong "## News peg" section, scene-1 references it directly (not just adjacent to it)

The "news peg honored" check requires reading `brief.md` too — only run if brief exists.

## 4. Format the report

```
Style lint — script.md (slug: <slug>)
─────────────────────────────────────────────────────

Verdict: <N> issues / <M> passed checks

ISSUES
─────────────────────────────────────────────────────
[scene-N: type] line K — <Anti-pattern name>
  Found:    "<verbatim offending text, truncated>"
  Why:      <one-line explanation>
  Suggest:  <rewrite suggestion>

[scene-M: type] lines J-L — <Anti-pattern name>
  ...

PASSED CHECKS
─────────────────────────────────────────────────────
✓ <positive check 1>
✓ <positive check 2>
...
```

If 0 issues, replace ISSUES section with: `✅ Style check passed — no anti-patterns detected.`

## 5. Hand off (auto-invocation context)

When called from `/video-script` step 7, return the report inline so the parent skill can show it to the user alongside the script. The user then decides: fix, ship, or stop. Findings are advisory — never block the pipeline.

When called standalone (`/video-style-lint <slug>`), print the report and end with:

> Found <N> issues. Edit `video/posts/<slug>/script.md` and re-run, or `/video-vo` to ship anyway.

# Failure modes

- **script.md not found** → fail with the message in step 1, don't proceed.
- **Edge cases in detection** (e.g., a deliberately repeated short phrase that's actually rhythmic, not anaphora) → flag advisory; user can override. Lint is regex+heuristic, not LLM judgment.
- **Brief missing for news-peg-honored check** → skip that one positive check, run the rest normally.

# Output contract

| Path | What it contains |
|---|---|
| (no files written) | Lint runs read-only against script.md; report is returned to caller / printed. |

# Notes

- **Advisory by design.** Lint never blocks `/video-vo`. The user can ship a script with flagged issues — sometimes a "violation" is intentional (e.g., a deliberately marketing-y outro for a launch video).
- **Heuristics, not LLM judgment.** Each rule is defined as a concrete regex/text-match. This makes the skill repeatable and predictable but it will miss subtle anti-patterns (e.g., promotional copy that doesn't trigger any specific regex). Lint is necessary, not sufficient.
- **Pattern list will evolve.** As more episodes ship and we learn from YT Studio analytics, add new detection rules grounded in real signal. Don't add patterns from intuition alone — every rule should trace back to either verified channel research or a documented user feedback memory.
