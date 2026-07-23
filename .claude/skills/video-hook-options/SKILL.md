---
name: video-hook-options
description: Generate 5-7 hook variants for a video brief in proven channel styles (AICodeKing, Fireship, IndyDevDan, Theo BREAKING, Greg numbered list, mid-action). User picks one; chosen hook saves to hook.md and becomes the locked seed for /video-script. Optional pre-script step.
metadata:
  tags: video, pipeline, hooks, script
---

# Why this exists

Picking the hook is the single highest-leverage decision in a 60-second short. Per the channel research synthesized in `feedback_video_voice_authentic.md`, the wrong hook style sinks even a strong topic — E1 (`what-is-claude-code`) shipped with a YouTuber-explainer hook and got "looks generic and promotional" feedback, even though the topic was strong. E2 (`install-claude-code`) was rewritten with a mid-action contrarian hook (verified shorts pattern) and reads structurally tighter.

This skill removes the "I wrote one hook from instinct" failure mode by presenting a menu of variants in proven styles. User picks the strongest; that becomes the locked seed for `/video-script` to build the rest of the script around.

# When to use

**Optional pre-script step.** Run between `/video-topic` (which produces `brief.md` with the news peg) and `/video-script` (which writes the spoken script). User invokes manually:

```
/video-hook-options <slug>
```

Not auto-invoked because the choice is the value — auto-running it would either pick for the user (defeats the point) or stall the pipeline waiting for input.

If the user skips this step, `/video-script` writes the hook from scratch (current default behavior). Both paths work.

# Inputs

- Slug (required). Reads `video/posts/<slug>/brief.md`.
- Brief MUST exist and SHOULD have the `## News peg` section appended by `/video-news-peg` — without the peg section, template E (BREAKING news-peg) is skipped.

# Hook templates (the 7 variants)

Each template is grounded in a verified channel pattern. When generating variants, apply the template's structure to the brief's topic + key bullets + (if present) news peg.

## A. AICodeKing-style superlative

**Template:** `[Subject] is the [superlative] [tool/feature] [Anthropic|company] [time-frame action verb]. [Why this matters in 1 sentence.]`

**Verified example:** *"This is the most incredible tool that Anthropic has ever released, and it is going to change the way you code forever."*

**When this works:** product launches, feature reveals, "first impression" videos. Fits long-form better than shorts but punchy in 60s if the topic warrants the heat.

## B. Fireship-style cold-open with digression

**Template:** `[Specific personal moment with concrete details]. [Twist or unexpected observation]. [Connect to topic in one sentence.]`

**Verified example pattern (Fireship Greek-yogurt opener):** *"earlier this week, the world may have changed forever. No, it's not because I finally figured out who was stealing all the water off the top of my Greek yogurt."*

**When this works:** any topic — universal. Best when there's a specific moment to anchor (an agent run, a debugging session, a deploy). Doesn't depend on news.

## C. IndyDevDan-style anti-hype contrarian

**Template:** `Stop [common pattern most devs do]. [What senior engineers / experienced users do instead].`

**Pattern-derived example:** *"Stop chatting with Claude Code in one window. Senior engineers use all six surfaces."*

**When this works:** topics where there's a clear "common but wrong" pattern to push against. Strongest for power-user features (hooks, subagents, plan mode, MCP).

## D. AICodeKing-style first-person + specific number

**Template:** `I [tested/measured/tried] [thing], and it [specific outcome with a concrete number].`

**Verified example:** *"I've been testing this new AI coding workflow, and it has absolutely tripled my output."*

**When this works:** topics with measurable outcomes — speed, cost, output, latency. Avoid for topics without a concrete number to anchor.

## E. Theo-style BREAKING / news-peg framing

**Template:** `[BREAKING|Just shipped|Just leaked|Just changed]: [news peg headline]. [What it means in one sentence.]`

**Pattern-derived example (from Theo's Claude Code source leak):** *"BREAKING: Claude Code source leaked. Here's what we actually learned."*

**Skip condition:** if `brief.md`'s `## News peg` section is empty or says "None found in the last 30 days", skip generating this variant. Mark in the menu as `[skipped — no news peg]`.

**When this works:** anytime there's a fresh release within ~30 days. Highest CTR variant when news is real.

## F. Greg-Isenberg-style numbered list

**Template:** `[N] [things] you [should/shouldn't/need to] know about [topic].`

**Pattern-derived example:** *"6 places to use Claude Code, ranked by how often you'd actually need them."*

**When this works:** survey topics, comparison topics, "rank these" topics. Predictable structure → high retention. Avoid for single-feature deep-dives.

## G. Mid-action open (verified Claude Code Shorts playlist pattern)

**Template:** `[Quick one|Heads up|Hey] — [direct claim or instruction]. [Concrete supporting noun.]`

OR the alternate verified pattern (from "32 Agents" short):

`Let's [action]. [Subject] is [factual descriptor].`

**Verified example:** *"Let's browse the repo, OMC is a TypeScript project that runs as a claude code plugin."*

**When this works:** anything. Most universally applicable; loses surprise but gains casualness. The default fallback if A-F don't fit cleanly.

# Long-form hook variants (`--long`, 15-30s)

When the user invokes `/video-hook-options <slug> --long`, generate from THIS set instead of A-G above. Long-form hooks are 15-30s with an explicit value contract (what the viewer will know by the end), not 5s punchlines.

## L1. News-peg cold open + value contract (Theo BREAKING for long-form)

**Template:** `[Headline as cold open — paraphrase the news peg]. [What it means in one sentence]. [Value contract: "by the end of this video, you'll know X"].`

**When this works:** any video with a real news peg in the last 30 days. Highest CTR on long-form when the peg is real. Skip if `## News peg` is empty.

## L2. Before/after demo open (build-narrative)

**Template:** `[Show the working result — DemoBlock]. [One-line stake: "this took N hours and saved me N more"]. [Value contract: "I'll show you exactly how I built it"].`

**When this works:** any topic where you can demonstrate a working artifact (an agent, a script, a config) in the first 15s. Single highest-retention pattern for tech long-form per 2026 research.

## L3. Specific outcome promise (Fireship-long)

**Template:** `[Specific personal moment / claim]. [Value contract: "by the end of these 8 minutes, you'll be able to X"]. [Why this matters in one sentence].`

**When this works:** topics with measurable outcomes — speed, cost, output, latency. Replaces D in long-form with a longer setup window.

## L4. Contrarian / anti-hype frame (IndyDevDan-long)

**Template:** `[Most people think X / are doing X]. [Counter-claim with specific evidence]. [Value contract: "I'll show you what works instead"].`

**When this works:** topics where there's a clear "common but wrong" pattern. Strongest for power-user features and tooling deep-dives.

## L5. Numbered promise (Greg Isenberg-long)

**Template:** `[N] [things] you [should/shouldn't] [verb] about [topic]. [Quick stake: why now]. [Value contract: "I tested all N — here's what actually works"].`

**When this works:** survey topics, comparison topics, "rank these" topics. Predictable structure → high session retention. Avoid for single-feature deep-dives.

# Steps

## 1. Read the brief and detect format

Open `video/posts/<slug>/brief.md`. Parse:
- Topic / hook line
- Key bullets
- Numbers to animate (for templates D and F)
- `## News peg` section (for template E inclusion/skip)
- **Format suggested** (line near the top of brief.md) — drives which template set to use.

**Format detection:** check args first (`--long` / `--short`), then `Format suggested` in brief.md, then default to short.
- `--short` (default) → use templates A-G (5s punch hooks).
- `--long` → use templates L1-L5 (15-30s value-contract hooks).

If brief doesn't exist, fail with: *"Brief not found at video/posts/<slug>/brief.md — run /video-topic <slug> first."*

If the News peg section is missing entirely (older briefs), recommend running `/video-news-peg <slug>` first to populate it. User can override if they explicitly want to skip news pegs for this episode.

## 2. Generate one variant per template

**For `--short` (default):** for each of A-G, write a single hook line that:
- Applies the template structure to this specific brief
- Stays under ~14 words (5-second audio at ~150 wpm)
- Names a proper noun (Claude Code, npm, MCP, etc.) in the first 5 sec where natural
- Avoids the anti-patterns from `/video-style-lint` (no parallel anaphora, no slogan, no spoken brand URL)

If template E is skipped (no news peg), generate 6 variants instead of 7.

**For `--long`:** for each of L1-L5, write a 15-30s hook (3-4 sentences) that:
- Opens with the template's required structural element (cold open / before-after / claim / contrarian / numbered).
- Includes an explicit value contract — the literal "by the end of this video, you'll know X" sentence (or a tighter rewrite of it).
- Names the proper noun in the first 5s.
- L1 (news-peg) is skipped if `## News peg` is empty — fall back to 4 long-form variants.

## 3. Present the menu

Format:

```
Hook options for [topic]
slug: <slug>
news peg: <yes — peg headline | no — skipped template E>

A. AICodeKing — superlative
   "[generated hook A]"

B. Fireship — cold-open digression
   "[generated hook B]"

C. IndyDevDan — anti-hype contrarian
   "[generated hook C]"

D. AICodeKing — first-person + number
   "[generated hook D]"

E. Theo — BREAKING news-peg
   "[generated hook E]"  OR  [skipped — no news peg]

F. Greg Isenberg — numbered list
   "[generated hook F]"

G. Mid-action open (verified shorts pattern)
   "[generated hook G]"

Pick A-G, ask for variations on a specific letter, or write your own.
```

## 4. Capture the user's choice

Three branches:

- **Letter pick (e.g. "C")** → save that hook to `posts/<slug>/hook.md` (template below); confirm; suggest next.
- **Variations on a letter (e.g. "more like B but specific to Mac")** → regenerate that template with the additional constraint; show 2-3 variants; loop back to capture choice.
- **Custom hook (e.g. "use this: ...")** → save the user's text verbatim to hook.md; suggest next.

## 5. Save hook.md

Write `video/posts/<slug>/hook.md`:

```markdown
# Locked Hook — <slug>

**Chosen:** [letter chosen | "custom"]
**Style:** [name of style — e.g. "Fireship cold-open digression"]
**Date:** YYYY-MM-DD

## Hook (verbatim — use as scene-1 spoken text)

> [the chosen hook line]

## All variants generated (for reference)

A. [hook A]
B. [hook B]
...

## Notes

[Any user clarifications, "more like X" iterations, or rationale captured during the session.]
```

## 6. Suggest next

> Hook locked at `video/posts/<slug>/hook.md`. `/video-script --short` (or `--long`) will read this file and use the hook verbatim as scene-1.

# Failure modes

- **Brief missing** → fail clearly with the message in step 1, don't proceed.
- **News peg section missing** → warn, offer to run `/video-news-peg <slug>` first; user can override and run hook-options without the peg section (template E auto-skips).
- **All 7 generated hooks feel weak** → rare but possible; user says so, skill responds with: "Want to revise the brief first? A weak hook menu usually traces to a brief without a strong angle." Loop back to `/video-topic refine`.

# Output contract

| Path | What it contains |
|---|---|
| `video/posts/<slug>/hook.md` | Locked hook + chosen style + all variants for reference + any session notes |

# Notes

- **Templates plateau.** They produce solid B+ hooks reliably; they don't generate the once-in-a-batch A+ moment. If a template-driven hook ever feels obviously off, prefer custom over template.
- **The 7 templates are a starting set, not gospel.** As we learn from YT Studio analytics, add (or retire) templates grounded in real performance data. Don't add a template based on one creator's one viral video — wait for pattern-level evidence.
- **Reading hook.md in `/video-script`:** `/video-script` step 1 should check for `posts/<slug>/hook.md`. If present, use its hook verbatim as scene-1's spoken text and build the rest of the script around it. If absent, generate a hook from scratch (existing behavior).
