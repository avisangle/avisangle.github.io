---
name: video-vo
description: Generate voiceover via ElevenLabs single-pass with timestamps, polish with audio-polish.py, save scenes.json and captions.json.
metadata:
  tags: video, pipeline, voiceover, elevenlabs, audio
---

# When to use

After `/video-scenes` is wired and visuals look right.

# Preconditions

- `video/posts/<slug>/script.md` exists
- `ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID`, `ELEVENLABS_MODEL_ID` set in `video/.env`
- Composition references master audio at `public/voiceover/<CompId>/master.mp3`
- Python tool installed: `video/scripts/python/audio-polish/` (run `uv sync` once)

# Steps

## 1. Update generator config

Open `video/scripts/generate-vo.ts`. Update:
- `COMPOSITION_ID` to the current composition id
- `SCENES` array — id + text + (optional) `bridge: true` per scene (must match script.md)

The script reads pronunciation overrides from `video/src/lib/pronunciation.ts`.

### `bridge: true` — continuous voice across a scene cut

Use when `script.md` shows a sentence carrying across two scenes (em-dash at the prior scene's tail, lowercase continuation in the next scene). Example:

```ts
const SCENES: ReadonlyArray<Scene> = [
  {
    id: "scene-1-setup",
    text: "...burned quotas fifty times faster than baseline —",
  },
  {
    id: "scene-2-stats",
    text: "seven weeks of silent regressions, eight bugs filed in a day...",
    bridge: true, // joins to scene-1 with a single space, NOT " ... "
  },
  // ...
];
```

**Default behavior (no `bridge` field):** scenes are joined with `" ... "` (ellipsis), which ElevenLabs reads as a pause. This is what every scene gets unless you explicitly opt into a bridge.

**With `bridge: true`:** the separator BEFORE that scene becomes a single space, so the voice flows continuously. Use this only when the script intends one sentence to span two visual cuts.

Convention: only the prior scene's text should end with `—`. The bridged scene starts in lowercase, no leading em-dash. The script.md format from `/video-script` follows this convention; copy verbatim into the `text` field.

`scenes.json` records `precedingSeparator` per scene for debuggability — check there if the audio doesn't sound continuous when you expected it to.

## 2. Run

```bash
cd video && npm run vo
```

Produces:
- `master.raw.mp3` — raw from ElevenLabs
- `master.mp3` — polished (LUFS norm + compression + limiter)
- `scenes.json` — per-scene boundaries from char-level alignment
- `captions.json` — word-level Caption[]
- `captions.srt` — readable cues (5-7 words / 2-3s each, with display substitutions for acronyms) — uploaded as the YT subtitle track by `/video-publish` for accessibility + search indexing

Edited captions.json by hand and need a fresh SRT? Run `npm run captions:srt -- <CompositionId>` to regenerate without re-running TTS.

## 3. Verify outputs

Check:
- All four files exist at `video/public/voiceover/<CompId>/`
- LUFS in console output: should land between -16 and -19 LUFS
- `scenes.json` total `audioDurationSeconds` makes sense for the script
- `captions.json` has tokens (~100+ for a 60s short)
- `scenes.json` `precedingSeparator` matches expectation: `" ... "` for normal cuts, `" "` for bridged scenes. Listen to the master.mp3 around bridge boundaries — the voice should flow without an audible pause.

## 4. Skip polish (optional)

```bash
cd video && AUDIO_POLISH=false npm run vo
```

Sets `master.mp3` to a copy of `master.raw.mp3`. Useful for A/B testing.

## 5. Iterate on pronunciation

If the spoken output mispronounces tech terms:
- Add an entry to `video/src/lib/pronunciation.ts` (alias substitution for v3)
- Optionally add a reverse mapping in `video/src/scenes/CaptionStrip.tsx` `DISPLAY_SUBSTITUTIONS` so the caption shows the original term while the audio uses the phonetic version
- Re-run `npm run vo`

## 6. Suggest next

> VO generated and polished. Next: `/video-thumbnail` then `/video-render`.

# Cost

ElevenLabs charges per character. Each generation re-spends. Brief edits are cheap; regenerating the full script is moderate. Cache strategy: only re-run if script.md actually changed.

# Long-form considerations (`--long`)

A single long-form script (~1100-1300 words, ~7000-8000 chars) fits well inside ElevenLabs single-pass quotas — the same `npm run vo` flow works, no chunking needed.

Things that change at long-form length:
- **More scene cuts** (often 12-20 vs 5 for shorts). The bridge separator (`bridge: true`) becomes more important — without it, the audio gets a 0.4s ellipsis pause between every cut, which compounds tedious over 8 minutes. Bridge any cut that doesn't carry a visual reset.
- **LUFS targets** are unchanged (-16 to -19 LUFS); the polish step works regardless of duration.
- **scenes.json grows** linearly — the composition's `calculateMetadata` handles it.
- **Don't skip pronunciation review.** A mispronounced acronym in a 60s short is a small bug; in an 8-min video the audience hears the same wrong pronunciation 4-6 times.

# Output contract

| Path | What it contains |
|---|---|
| `video/public/voiceover/<CompId>/master.mp3` | Polished VO (referenced by composition) |
| `video/public/voiceover/<CompId>/master.raw.mp3` | Raw ElevenLabs output (kept for fallback / debugging) |
| `video/public/voiceover/<CompId>/scenes.json` | Per-scene durations and boundaries |
| `video/public/voiceover/<CompId>/captions.json` | Word-level Caption[] |
