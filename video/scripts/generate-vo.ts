/**
 * Generate a single master VO MP3 via ElevenLabs (v3 + with-timestamps),
 * then derive per-scene boundaries from the character-level alignment data.
 *
 * Why single-pass:
 *  - Continuous prosody across scenes (no "disconnected" feel between cuts)
 *  - Inter-scene pauses are real audio silence, not awkward stitching
 *  - Boundaries are exact (no per-clip clipping, no leading-word truncation)
 *
 * Run: npm run vo
 *
 * Env (loaded from video/.env):
 *   ELEVENLABS_API_KEY    — required
 *   ELEVENLABS_VOICE_ID   — defaults to Brian
 *   ELEVENLABS_MODEL_ID   — defaults to eleven_v3
 */

import { config as loadEnv } from "dotenv";
import { execFile } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { promisify } from "node:util";
import type { Caption } from "@remotion/captions";
import { applyPronunciation } from "../src/lib/pronunciation";
import { buildSrt } from "./lib/srt";

const execFileAsync = promisify(execFile);

// `npm run vo` invokes tsx from the package root, so cwd === video/.
loadEnv();

const COMPOSITION_ID = "Gemini35Flash";

// Inter-scene separators. Default is an ellipsis pause; the bridge
// variant is a single space so the voice flows continuously across the
// cut. Scenes opt into the bridge by setting `bridge: true` (the flag
// applies to the separator BEFORE that scene).
const SCENE_SEP_DEFAULT = " ... ";
const SCENE_SEP_BRIDGE = " ";

// Number of frames to delay audio start so the visuals breathe a moment
// before the first word lands. 15 frames at 30fps = 500ms.
const AUDIO_OFFSET_FRAMES = 15;

const FPS = 30;

type Scene = {
  id: string;
  text: string;
  bridge?: boolean;
};

const SCENES: ReadonlyArray<Scene> = [
  {
    id: "scene-1-title",
    text:
      "Three reasons to route your next agent task to Gemini 3.5 Flash, not Claude.",
  },
  {
    id: "scene-2-price",
    text:
      "One — price. A dollar fifty per million tokens in, nine out — roughly a third of what an Opus agent loop costs you today.",
  },
  {
    id: "scene-3-benchmark",
    text:
      "Two — it's genuinely good at the agent part. On the benchmark that measures calling tools and chaining them together, Flash scored about eighty-four percent, past Claude's own Opus 4.7 — and Google only shipped it eight days ago.",
  },
  {
    id: "scene-4-routing",
    text:
      "Three — you don't have to switch everything. If your agent spends most of its time calling tools and planning, not editing files, that's the work to move: send it to Flash, and keep the actual repo edits on Claude Code.",
  },
  {
    id: "scene-5-trap",
    text:
      "But there's a trap. Flash defaults to thinking hard on every call, so a script you copied from the docs quietly burns thirty to fifty percent more on a long loop. Turn that down to low, and you get the price you were promised.",
  },
  {
    id: "scene-6-outro",
    text:
      "Three reasons to move the work — one setting that decides if it's actually cheaper.",
  },
];

const apiKey = process.env.ELEVENLABS_API_KEY;
const voiceId = process.env.ELEVENLABS_VOICE_ID ?? "nPczCjzI2devNBz1zQrb";
const modelId = process.env.ELEVENLABS_MODEL_ID ?? "eleven_v3";

if (!apiKey) {
  console.error("ELEVENLABS_API_KEY is not set in video/.env");
  process.exit(1);
}

const VOICE_SETTINGS = {
  stability: 0.75,
  similarity_boost: 0.75,
  style: 0.0,
  use_speaker_boost: true,
};

const outDir = join(process.cwd(), "public", "voiceover", COMPOSITION_ID);
mkdirSync(outDir, { recursive: true });

// Apply pronunciation substitutions BEFORE joining so the boundary
// char indices we compute match what ElevenLabs actually receives.
const processedScenes = SCENES.map((s) => ({
  id: s.id,
  text: applyPronunciation(s.text),
  originalText: s.text,
  bridge: s.bridge ?? false,
}));

// Build fullScript scene-by-scene with per-transition separators so
// bridged scenes flow continuously and non-bridged scenes get the
// ellipsis pause. precedingSeparator[i] is what comes BEFORE scene i;
// it's empty for scene 0.
const sceneStartChars: number[] = [];
const precedingSeparator: string[] = [];
let fullScript = "";
processedScenes.forEach((s, i) => {
  const sep = i === 0 ? "" : s.bridge ? SCENE_SEP_BRIDGE : SCENE_SEP_DEFAULT;
  precedingSeparator.push(sep);
  fullScript += sep;
  sceneStartChars.push(fullScript.length);
  fullScript += s.text;
});

console.log(
  `Generating master VO for "${COMPOSITION_ID}"\n` +
    `  voice=${voiceId} model=${modelId}\n` +
    `  total chars=${fullScript.length}\n`,
);

(async () => {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey!,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        text: fullScript,
        model_id: modelId,
        voice_settings: VOICE_SETTINGS,
      }),
    },
  );

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`ElevenLabs API ${response.status}: ${errBody}`);
  }

  const data = (await response.json()) as {
    audio_base64: string;
    alignment: {
      characters: string[];
      character_start_times_seconds: number[];
      character_end_times_seconds: number[];
    };
  };

  // Save raw audio first; polish writes the final master.mp3 the
  // composition references.
  const audioBuffer = Buffer.from(data.audio_base64, "base64");
  const rawPath = join(outDir, "master.raw.mp3");
  const masterPath = join(outDir, "master.mp3");
  mkdirSync(dirname(rawPath), { recursive: true });
  writeFileSync(rawPath, audioBuffer);
  console.log(
    `✓ master.raw.mp3 — ${(audioBuffer.length / 1024).toFixed(1)} KB`,
  );

  // Audio polish (LUFS normalize + compression + limiter). Skippable via
  // AUDIO_POLISH=false in env. Falls back to a copy on any failure so the
  // composition's master.mp3 always exists.
  const polishEnabled = process.env.AUDIO_POLISH !== "false";
  if (polishEnabled) {
    try {
      console.log("\nPolishing audio (uv run audio-polish.py)...");
      const polishCwd = join(
        process.cwd(),
        "scripts",
        "python",
        "audio-polish",
      );
      const { stdout } = await execFileAsync(
        "uv",
        ["run", "audio-polish.py", rawPath, masterPath],
        { cwd: polishCwd },
      );
      // Indent the polish output for readability.
      stdout
        .trim()
        .split("\n")
        .forEach((line) => console.log("  " + line));
    } catch (err) {
      console.error("Audio polish failed; falling back to raw audio.");
      console.error(err);
      copyFileSync(rawPath, masterPath);
    }
  } else {
    console.log("AUDIO_POLISH=false → using raw audio");
    copyFileSync(rawPath, masterPath);
  }
  if (!existsSync(masterPath)) {
    throw new Error(`master.mp3 was not produced at ${masterPath}`);
  }

  const charStarts = data.alignment.character_start_times_seconds;
  const charEnds = data.alignment.character_end_times_seconds;
  const audioEndSeconds = Math.max(...charEnds);

  // Compute scene start times from alignment
  const sceneStartTimes = sceneStartChars.map(
    (charIdx) => charStarts[charIdx] ?? 0,
  );

  // Per-scene durations: scene N spans from its own start to the next
  // scene's start (or audio end for the last scene). Inter-scene silence
  // belongs to the previous scene's tail.
  const sceneDurationsSec = sceneStartTimes.map((start, i) => {
    const end =
      i < sceneStartTimes.length - 1
        ? sceneStartTimes[i + 1]
        : audioEndSeconds;
    return end - start;
  });

  const scenesMeta = processedScenes.map((s, i) => ({
    id: s.id,
    text: s.originalText,
    spokenText: s.text,
    startSeconds: sceneStartTimes[i],
    durationSeconds: sceneDurationsSec[i],
    bridge: s.bridge,
    precedingSeparator: precedingSeparator[i],
  }));

  scenesMeta.forEach((s) => {
    console.log(
      `  ${s.id} — start=${s.startSeconds.toFixed(2)}s dur=${s.durationSeconds.toFixed(2)}s`,
    );
  });

  // Convert ElevenLabs char-level alignment to word-level Caption[].
  // Per skill convention, each token's text is prefixed with a leading space.
  const captions: Caption[] = [];
  {
    const chars = data.alignment.characters;
    const starts = data.alignment.character_start_times_seconds;
    const ends = data.alignment.character_end_times_seconds;
    let wStart = -1;
    let wText = "";
    const flush = (endIdx: number) => {
      if (wText && wStart >= 0) {
        captions.push({
          text: " " + wText,
          startMs: Math.round(starts[wStart] * 1000),
          endMs: Math.round(ends[endIdx] * 1000),
          timestampMs: null,
          confidence: null,
        });
      }
      wStart = -1;
      wText = "";
    };
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];
      if (ch === " " || ch === "\n" || ch === "\t") {
        flush(i - 1);
      } else {
        if (wStart === -1) wStart = i;
        wText += ch;
      }
    }
    flush(chars.length - 1);
  }
  const captionsPath = join(outDir, "captions.json");
  writeFileSync(captionsPath, JSON.stringify(captions, null, 2));
  console.log(`✓ captions.json — ${captions.length} word tokens`);

  const { srt, cueCount } = buildSrt(captions);
  const srtPath = join(outDir, "captions.srt");
  writeFileSync(srtPath, srt);
  console.log(`✓ captions.srt — ${cueCount} cues`);

  const json = {
    compositionId: COMPOSITION_ID,
    voiceId,
    modelId,
    voiceSettings: VOICE_SETTINGS,
    masterFile: "master.mp3",
    fps: FPS,
    audioOffsetFrames: AUDIO_OFFSET_FRAMES,
    sceneSeparators: { default: SCENE_SEP_DEFAULT, bridge: SCENE_SEP_BRIDGE },
    audioDurationSeconds: audioEndSeconds,
    scenes: scenesMeta,
  };

  const jsonPath = join(outDir, "scenes.json");
  writeFileSync(jsonPath, JSON.stringify(json, null, 2));

  console.log(
    `\nWrote ${jsonPath}\n` +
      `Audio length: ${audioEndSeconds.toFixed(2)}s\n` +
      `Audio offset: ${AUDIO_OFFSET_FRAMES} frames (${(AUDIO_OFFSET_FRAMES / FPS).toFixed(3)}s)`,
  );
})().catch((err) => {
  console.error("Generation failed:", err);
  process.exit(1);
});
