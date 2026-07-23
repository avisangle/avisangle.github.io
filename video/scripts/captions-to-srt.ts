/**
 * Regenerate captions.srt from an existing captions.json without re-running
 * TTS. Useful for the initial migration to SRT or when the SRT generator
 * logic changes and existing videos need updated subtitle tracks.
 *
 * Run: npm run captions:srt -- <CompositionId>
 *      e.g. npm run captions:srt -- ClaudeManagedAgents
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Caption } from "@remotion/captions";
import { buildSrt } from "./lib/srt";

const compositionId = process.argv[2];
if (!compositionId) {
  console.error(
    "Usage: npm run captions:srt -- <CompositionId>\n" +
      "Example: npm run captions:srt -- ClaudeManagedAgents",
  );
  process.exit(1);
}

const dir = join(process.cwd(), "public", "voiceover", compositionId);
const captionsPath = join(dir, "captions.json");

if (!existsSync(captionsPath)) {
  console.error(`Not found: ${captionsPath}`);
  process.exit(1);
}

const captions = JSON.parse(readFileSync(captionsPath, "utf8")) as Caption[];
const { srt, cueCount } = buildSrt(captions);
const srtPath = join(dir, "captions.srt");
writeFileSync(srtPath, srt);
console.log(`✓ ${srtPath} — ${cueCount} cues`);
