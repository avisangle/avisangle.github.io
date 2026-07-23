# Video Script v2 — Regression-Proof Claude Code: Pin, Lock, Test

**Format:** short (length-flex, ~63s)
**Voice:** Brian (default; configurable via .env)
**Target spoken duration:** ~63s
**Series:** Claude Code Shorts
**Blog post:** https://avinashsangle.com/blog/regression-proofing-claude-code-workflows

---

## Full VO (continuous — write/read this first, scene-mark second)

> This morning, Anthropic shipped v2.1.121 — four regression fixes for Claude Code in one release. Their evals didn't catch any of it. They didn't catch the batch before that either, or the wrapper bug from March that burned quotas fifty times faster than baseline — seven weeks of silent regressions, eight bugs filed in a day, and the only reason mine didn't break was three lines of config. Pin the CLI — uninstall global, reinstall the last verified release, lock the version line in npmrc so future updates can't touch you. Then settings.json — set the effort level and a model allowlist, because that's where Anthropic's silent defaults sneak in. And a Python stop hook that replays five golden prompts every session, with expected outputs committed to the repo. It's your CI, for a CLI that doesn't ship one. Anthropic will ship the next regression. Your config doesn't have to. Link in the description for the full breakdown.

**157 words / ~63s at 150 wpm.** Read aloud once before scene-marking — if it doesn't flow as one breath, fix the prose, not the cuts.

---

## Scene-marked (cuts on natural beats — voice carries across)

### [scene-1: title + setup] — ~18s
> This morning, Anthropic shipped v2.1.121 — four regression fixes for Claude Code in one release. Their evals didn't catch any of it. They didn't catch the batch before that either, or the wrapper bug from March that burned quotas fifty times faster than baseline —

*Bridge mark (em-dash) lives ONLY at the prior scene's tail — never duplicated at the next scene's head. ElevenLabs treats em-dash as a pause; doubling it would create two pauses.*

### [scene-2: stat stack] — ~10s `bridge: true`
> seven weeks of silent regressions, eight bugs filed in a day, and the only reason mine didn't break was three lines of config.

*Starts in lowercase as a continuation of scene-1's sentence. `bridge: true` tells `/video-vo` to skip the SCENE_SEP `" ... "` for this transition (see "Generator change required" below).*

### [scene-3: code — the pin] — ~9s
> Pin the CLI — uninstall global, reinstall the last verified release, lock the version line in npmrc so future updates can't touch you.

*Voice is still inside the same train of thought ("three lines of config" → "Pin the CLI…"). Cut at the period before "Pin" is a sentence boundary, not a scene boundary in the voice's head.*

### [scene-4: settings.json + stop hook] — ~16s
> Then settings.json — set the effort level and a model allowlist, because that's where Anthropic's silent defaults sneak in. And a Python stop hook that replays five golden prompts every session, with expected outputs committed to the repo. It's your CI, for a CLI that doesn't ship one.

*Two visual beats inside one continuous voiceover: the camera pans from settings.json (lines 4-5) to the stop hook script (lines 6-7) without the voice pausing.*

### [scene-5: outro] — ~8s
> Anthropic will ship the next regression. Your config doesn't have to. Link in the description for the full breakdown.

*Outro is the only place the voice rests — the cadence is short on purpose; it's the loop-close.*

---

## What changed from v1

| Change | v1 | v2 |
|---|---|---|
| Drafting order | scene-by-scene with word budgets | full paragraph first, scene-mark after |
| Sentences spanning cuts | 0 | 2 (scene-1→2 em-dash, scene-3→4 sentence-flow) |
| Word count | 122 / ~50s | 157 / ~63s |
| Connective tissue | full stops between scenes | em-dashes, "Then", "And", because-clauses |
| Setup before payoff | 1 sentence (hook) | 4 sentences (hook + 3-fact escalation) builds tension |
| Scene-2 cadence | 4 stat-led sentences in a row | 1 sentence with a comma-list of stats — less staccato |

The hook is **same content** but voice now spends 18s setting up the problem before the solution lands at scene-3. v1 jumped from hook to playbook in 8s; v2 lets the threat compound before the fix arrives.

---

## YouTube Shorts standards check

| Standard | v1 | v2 |
|---|---|---|
| Hook in first 3 sec answers "why watch?" | ✅ | ✅ |
| ~150-180 words for ~60s (130-180 wpm) | ⚠️ 122 words / under | ✅ 157 words |
| One core idea | ✅ | ✅ |
| Mid-thought continuity (voice spans cuts) | ❌ scene = sentence | ✅ scene-1→2 mid-clause |
| Loop close (callback to hook in last 2-3s) | ⚠️ observational only | ⚠️ observational only — neither version closes the loop |
| Active voice + contractions | ✅ | ✅ |
| No filler ("hi guys", "in this video") | ✅ | ✅ |
| Specific nouns + numbers | ✅ | ✅ (more of them — added "wrapper bug from March", "fifty times faster") |
| Rule of one (one takeaway) | ✅ | ✅ (the playbook is one move bundled as three) |

**Gap both versions still share:** the loop close. A stronger outro would callback to the hook directly — e.g., "Their evals will miss the next one too. Mine won't." That's a v3 thing if we want to chase it.

---

## Notes for /video-scenes

| Scene | Existing scene to reuse | Notes |
|---|---|---|
| 1 | `TitleCard` | Three stacked lines that animate as voice escalates: "v2.1.121 — 4 fixes" (cyan, oversized, lands on first em-dash) / "their evals missed all of them" (white, lands on "didn't catch any") / "and the batch before that" (muted, lands on "they didn't catch the batch before that either"). Title holds longer than v1 (~18s vs ~5s). |
| 2 | New layout — composition-inline | Stat-stack: 3 large numbers stagger in horizontally — "7 weeks", "8 bugs / 24h", "50x quota burn". Below: small caption "the only reason mine didn't break was 3 lines of config". Per CATALOG decision tree: one-off, inline in `compositions/RegressionProofClaudeCode.tsx`. |
| 3 | `CodeBlock` | Top caption: "the pin." (cyan accent on "pin"). Code (bash):<br>`npm uninstall -g @anthropic-ai/claude-code`<br>`npm install -g @anthropic-ai/claude-code@2.1.117`<br><br>`# ~/.npmrc`<br>`@anthropic-ai/claude-code:version=2.1.117`<br>Bottom caption: "future updates can't touch you." (accent on "can't"). |
| 4 | New layout — composition-inline | Two-up split: left half is `settings.json` with `effortLevel` and `availableModels` highlighted; right half (slides in mid-scene) shows a Python stop hook snippet. Camera pan effect — voice doesn't pause when the right side appears. |
| 5 | `Outro` | `bigNumber: "3"`, `bigNumberSize: 480`, `bigNumberColor: COLORS.cyan`, `subhead: "lines"`, `caption: "pin · lock · test"`, `url: "avinashsangle.com"`. |

## Generator change required (before VO record)

`video/scripts/generate-vo.ts` line 41 sets `SCENE_SEP = " ... "` and line 109 joins all scenes with it. Ellipsis is read by ElevenLabs as a pause — which defeats v2's continuous-voice intent.

**Fix:** make the separator per-scene. Add a `bridge?: boolean` field to the `Scene` type. When the next scene has `bridge: true`, join with a single space instead of `" ... "`. One-line patch — flagged for the next time `/video-vo` runs against a v2-style script.

Until that lands, scene-1→scene-2 will still have the ellipsis pause in audio even though the script reads as one sentence.

## Pronunciation overrides applied

Same as v1: `npmrc` → `N P M R C` (already added to `src/lib/pronunciation.ts`).

## Style applied

- News peg in first 3 seconds (✓)
- Em-dash bridge between scenes 1 and 2 — voice carries the same sentence across the cut (new in v2)
- Sentence flow between scenes 3 and 4 — "lock the version line in npmrc..." → "Then settings.json..." reads as one train of thought (new in v2)
- No parallel anaphora — the three moves use varied openings ("Pin the CLI", "Then settings.json", "And a Python stop hook") connected by transitional words
- Outro is observational, not a slogan close
- No spoken brand URL
