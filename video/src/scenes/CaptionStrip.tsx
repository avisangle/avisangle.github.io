import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { createTikTokStyleCaptions } from "@remotion/captions";
import type { Caption, TikTokPage } from "@remotion/captions";
import { useMemo } from "react";
import {
  COLORS,
  FONTS,
  LONG_SAFE_AREA_BOTTOM,
  SAFE_AREA_BOTTOM,
} from "../lib/theme";

// Token grouping window. Higher = more words per page. At Brian's ~160wpm,
// 1500ms produces readable 4-5 word pages without single-word flashes.
const SWITCH_MS = 1500;

// Caption font sizes by format. Long-form is 16:9 — captions sit lower-third
// and read at a smaller size since the frame is wider but shorter.
const SHORT_FONT_SIZE = 64;
const LONG_FONT_SIZE = 52;

// Tokens to drop from captions entirely (e.g. inter-scene separator dots,
// stray em/en-dashes that ElevenLabs returns as their own alignment tokens).
const PUNCTUATION_ONLY = /^[\s.…—–]+$/;

// Map sequences of spoken tokens back to their original display form.
// ElevenLabs alignment gives us timings for what was SPOKEN, but for
// readability captions should show the original tech terms.
const DISPLAY_SUBSTITUTIONS: ReadonlyArray<readonly [string[], string]> = [
  // Longer / more specific sequences first as a safety habit. The matcher
  // breaks on first match per starting position; with sequences anchored on
  // different first tokens (claude / V / I / etc.) order rarely matters here.
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

function preprocessCaptions(raw: Caption[]): Caption[] {
  // 1. Drop punctuation-only tokens
  const filtered = raw.filter((c) => !PUNCTUATION_ONLY.test(c.text));

  // 2. Merge spoken sequences back to display form
  const out: Caption[] = [];
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
        out.push({
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
      out.push(filtered[i]);
      i++;
    }
  }
  return out;
}

const CaptionPage: React.FC<{ page: TikTokPage }> = ({ page }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const localTimeMs = (frame / fps) * 1000;
  const absoluteTimeMs = page.startMs + localTimeMs;
  // Format is derived from canvas aspect ratio so existing compositions
  // (which don't pass a format prop into CaptionStrip) keep current behavior.
  const isLong = width > height;
  const paddingBottom = isLong ? LONG_SAFE_AREA_BOTTOM : SAFE_AREA_BOTTOM;
  const fontSize = isLong ? LONG_FONT_SIZE : SHORT_FONT_SIZE;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          maxWidth: "92%",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.sans,
            fontWeight: 800,
            fontSize,
            letterSpacing: -0.5,
            whiteSpace: "pre-wrap",
            lineHeight: 1.15,
            // Strong outline + soft drop shadow keeps the caption legible on
            // any underlying scene without a solid background that occludes.
            textShadow:
              "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, " +
              "0 3px 0 #000, 0 -3px 0 #000, 3px 0 0 #000, -3px 0 0 #000, " +
              "0 0 24px rgba(0,0,0,0.95), 0 6px 16px rgba(0,0,0,0.85)",
          }}
        >
          {page.tokens.map((token, i) => {
            const isActive =
              token.fromMs <= absoluteTimeMs && token.toMs > absoluteTimeMs;
            return (
              <span
                key={i}
                style={{
                  color: isActive ? COLORS.accent : COLORS.textPrimary,
                }}
              >
                {token.text}
              </span>
            );
          })}
        </span>
      </div>
    </AbsoluteFill>
  );
};

export type CaptionStripProps = {
  captions: Caption[];
  audioDurationSeconds: number;
};

export const CaptionStrip: React.FC<CaptionStripProps> = ({
  captions: rawCaptions,
  audioDurationSeconds,
}) => {
  const { fps } = useVideoConfig();

  const captions = useMemo(() => preprocessCaptions(rawCaptions), [
    rawCaptions,
  ]);

  const { pages } = useMemo(
    () =>
      createTikTokStyleCaptions({
        captions,
        combineTokensWithinMilliseconds: SWITCH_MS,
      }),
    [captions],
  );

  return (
    <AbsoluteFill>
      {pages.map((page, index) => {
        const nextPage = pages[index + 1] ?? null;
        const startFrame = (page.startMs / 1000) * fps;
        const endFrame = nextPage
          ? (nextPage.startMs / 1000) * fps
          : audioDurationSeconds * fps;
        const durationInFrames = Math.max(1, endFrame - startFrame);

        return (
          <Sequence
            key={index}
            from={startFrame}
            durationInFrames={durationInFrames}
          >
            <CaptionPage page={page} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
