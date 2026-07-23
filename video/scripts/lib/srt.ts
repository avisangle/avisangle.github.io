/**
 * SRT subtitle generation from a word-level captions.json.
 *
 * Used by:
 *  - scripts/generate-vo.ts (writes captions.srt alongside captions.json)
 *  - scripts/captions-to-srt.ts (regenerate SRT without re-running TTS)
 */

import type { Caption } from "@remotion/captions";

const PUNCTUATION_ONLY = /^[\s.…—–]+$/;

// Map sequences of phonetically-spoken tokens back to their display form so
// the SRT track shows readable acronyms (matches CaptionStrip behavior).
// Keep this list in sync with src/scenes/CaptionStrip.tsx DISPLAY_SUBSTITUTIONS.
const DISPLAY_SUBSTITUTIONS: ReadonlyArray<readonly [string[], string]> = [
  [["claude", "dot", "A", "I", "slash", "code"], "claude.ai/code"],
  [["jay", "sun", "ell"], "JSONL"],
  [["kube", "control"], "kubectl"],
  [["V", "S", "Code"], "VS Code"],
  [["I", "D", "Es"], "IDEs"],
  [["I", "D", "E"], "IDE"],
  [["N", "P", "M"], "npm"],
  [["W", "S", "L"], "WSL"],
  [["M", "C", "P"], "MCP"],
  [["C", "L", "I"], "CLI"],
  [["A", "P", "I"], "API"],
  [["S", "D", "K"], "SDK"],
  [["yamel"], "YAML"],
];

// Trailing terminal punctuation we tolerate on the last token of a match
// (e.g. "Code." still matches "Code"). Preserved in the output display string.
const TRAILING_PUNCT = /[.,?!:;]+$/;

function fmtSrtTime(ms: number): string {
  const total = Math.max(0, Math.round(ms));
  const h = String(Math.floor(total / 3600000)).padStart(2, "0");
  const m = String(Math.floor((total % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((total % 60000) / 1000)).padStart(2, "0");
  const frac = String(total % 1000).padStart(3, "0");
  return `${h}:${m}:${s},${frac}`;
}

export function buildSrt(rawCaptions: Caption[]): {
  srt: string;
  cueCount: number;
} {
  // 1. Drop punctuation-only tokens, merge spoken sequences back to display form.
  const filtered = rawCaptions.filter((c) => !PUNCTUATION_ONLY.test(c.text));
  const tokens: Caption[] = [];
  let i = 0;
  while (i < filtered.length) {
    let merged = false;
    for (const [seq, display] of DISPLAY_SUBSTITUTIONS) {
      if (i + seq.length > filtered.length) continue;
      const matches = seq.every((w, j) => {
        const tok = filtered[i + j].text.trim();
        // Allow trailing punctuation on the last token only — middle tokens
        // must still match exactly to avoid accidental joins across phrases.
        const candidate =
          j === seq.length - 1 ? tok.replace(TRAILING_PUNCT, "") : tok;
        return candidate === w;
      });
      if (matches) {
        const lastTok = filtered[i + seq.length - 1].text.trim();
        const trailing = lastTok.match(TRAILING_PUNCT)?.[0] ?? "";
        tokens.push({
          text: " " + display + trailing,
          startMs: filtered[i].startMs,
          endMs: filtered[i + seq.length - 1].endMs,
          timestampMs: null,
          confidence: null,
        });
        i += seq.length;
        merged = true;
        break;
      }
    }
    if (!merged) {
      tokens.push(filtered[i]);
      i++;
    }
  }

  // 2. Group tokens into readable cues. Break on sentence-end, word count,
  // or duration cap. ~5-7 words / 2-3s reads well at typical short pacing.
  const MAX_WORDS = 7;
  const MAX_DURATION_MS = 3000;
  type Cue = { startMs: number; endMs: number; text: string };
  const cues: Cue[] = [];
  let curStart = -1;
  let curEnd = 0;
  let curWords: string[] = [];

  const flush = () => {
    if (curWords.length === 0) return;
    cues.push({
      startMs: curStart,
      endMs: curEnd,
      text: curWords.join("").trim(),
    });
    curStart = -1;
    curEnd = 0;
    curWords = [];
  };

  for (const t of tokens) {
    if (curStart === -1) curStart = t.startMs;
    curWords.push(t.text);
    curEnd = t.endMs;
    const trimmed = t.text.trim();
    const endsSentence = /[.!?]$/.test(trimmed);
    const tooManyWords = curWords.length >= MAX_WORDS;
    const tooLong = curEnd - curStart >= MAX_DURATION_MS;
    if (endsSentence || tooManyWords || tooLong) flush();
  }
  flush();

  const srt =
    cues
      .map(
        (c, idx) =>
          `${idx + 1}\n${fmtSrtTime(c.startMs)} --> ${fmtSrtTime(c.endMs)}\n${c.text}`,
      )
      .join("\n\n") + "\n";

  return { srt, cueCount: cues.length };
}
