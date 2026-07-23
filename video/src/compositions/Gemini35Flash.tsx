import { AbsoluteFill, Sequence, Series, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { TitleCard } from "../scenes/TitleCard";
import { CostChart, ChartBar } from "../scenes/CostChart";
import { ComparisonSplit } from "../scenes/ComparisonSplit";
import { CodeBlock } from "../scenes/CodeBlock";
import { Outro } from "../scenes/Outro";
import { CaptionStrip } from "../scenes/CaptionStrip";
import { ThumbnailHold } from "../scenes/ThumbnailHold";
import { COLORS, SAFE_AREA_BOTTOM } from "../lib/theme";
import captionsData from "../../public/voiceover/Gemini35Flash/captions.json";
import scenesData from "../../public/voiceover/Gemini35Flash/scenes.json";

export type Gemini35FlashProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/Gemini35Flash";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

// scene-1 — hook (numbered-list framing). Last line drives underline color.
const titleProps = {
  lines: [
    { text: "3 reasons to route", color: COLORS.textMuted, size: 64, weight: 500 },
    { text: "your next agent task", color: COLORS.textPrimary, size: 72, weight: 700 },
    { text: "to Gemini 3.5 Flash", color: COLORS.accent, size: 90, weight: 800 },
    { text: "not Claude", color: COLORS.red, size: 70, weight: 700 },
  ],
  underlineWidthPercent: 50,
};

// scene-2 — reason 1: price. Relative cost vs an Opus loop; real Flash prices in the overlay.
const priceProps = {
  header: {
    line1: "Reason 1 —",
    line2: "a third of the cost.",
    line2Color: COLORS.accent,
  },
  bars: [
    {
      label: "Opus loop",
      value: 3,
      prefix: "",
      suffix: "×",
      decimals: 0,
      color: COLORS.red,
      maxHeight: 540,
    },
    {
      label: "Gemini Flash",
      value: 1,
      prefix: "",
      suffix: "×",
      decimals: 0,
      color: COLORS.green,
      maxHeight: 180,
      overlay: "$1.50 in · $9 out",
    },
  ] satisfies [ChartBar, ChartBar],
  callout: { text: "⅓ the price", color: COLORS.accent },
  revealOrder: "bars-first" as const,
};

// scene-3 — reason 2: agent benchmark. Flash beats Claude's own Opus 4.7 on tool calling.
const benchmarkProps = {
  header: {
    line1: "Reason 2 —",
    line2: "better at tool calling.",
    line2Color: COLORS.accent,
  },
  bars: [
    {
      label: "Opus 4.7",
      value: 79.1,
      prefix: "",
      suffix: "%",
      decimals: 1,
      color: COLORS.purple,
      maxHeight: 470,
    },
    {
      label: "Gemini Flash",
      value: 83.6,
      prefix: "",
      suffix: "%",
      decimals: 1,
      color: COLORS.green,
      maxHeight: 540,
    },
  ] satisfies [ChartBar, ChartBar],
  callout: { text: "beats Opus 4.7", color: COLORS.green },
  revealOrder: "bars-first" as const,
};

// scene-4 — reason 3: route, don't switch. Split the work between the two tools.
const routingProps = {
  header: "Reason 3 — route, don't switch",
  left: {
    label: "→ Gemini Flash",
    body: "Tool-heavy planning & research",
    color: COLORS.cyan,
    badge: "MOVE",
  },
  right: {
    label: "→ Claude Code",
    body: "The actual repo edits",
    color: COLORS.accent,
    badge: "KEEP",
  },
  verdict: { text: "route between them", color: COLORS.green },
};

// scene-5 — the trap: Flash defaults to high reasoning; turn it down or pay 30–50% more.
const trapProps = {
  topCaption: {
    text: "One setting. ",
    accentText: "Huge bill.",
    accentColor: COLORS.red,
  },
  lines: [
    [{ text: "# default is high — turn it down", color: COLORS.textMuted }],
    [
      { text: "ThinkingConfig", color: COLORS.textPrimary },
      { text: "(", color: COLORS.textMuted },
    ],
    [
      { text: "    thinking_level=", color: COLORS.cyan },
      { text: '"low"', color: COLORS.green },
      { text: ",", color: COLORS.textMuted },
    ],
    [{ text: ")", color: COLORS.textMuted }],
  ],
  bottomCaption: {
    text: "Set it low. ",
    accentText: "Save 30–50%.",
    accentColor: COLORS.green,
  },
  fontSize: 38,
  typewriterSeconds: 4.0,
};

// scene-6 — outro. Loop close: three reasons, one setting.
const outroProps = {
  bigNumber: "3",
  bigNumberSize: 360,
  bigNumberColor: COLORS.accent,
  subhead: "reasons",
  caption: "one setting decides the price",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

const SCENES = [
  { id: "scene-1-title", render: () => <TitleCard {...titleProps} /> },
  { id: "scene-2-price", render: () => <CostChart {...priceProps} /> },
  { id: "scene-3-benchmark", render: () => <CostChart {...benchmarkProps} /> },
  { id: "scene-4-routing", render: () => <ComparisonSplit {...routingProps} /> },
  { id: "scene-5-trap", render: () => <CodeBlock {...trapProps} /> },
  { id: "scene-6-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const Gemini35Flash: React.FC<Gemini35FlashProps> = ({
  sceneDurations,
  audioOffsetFrames,
  hideCaptions = false,
  thumbnailSrc,
  thumbnailHoldFrames = 0,
}) => {
  const showThumbnailHold = thumbnailSrc && thumbnailHoldFrames > 0;
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {showThumbnailHold && (
        <Sequence durationInFrames={thumbnailHoldFrames} name="thumbnail-hold">
          <ThumbnailHold src={thumbnailSrc} />
        </Sequence>
      )}
      <Sequence from={showThumbnailHold ? thumbnailHoldFrames : 0} name="scenes">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: SAFE_AREA_BOTTOM,
          }}
        >
          <Series>
            {SCENES.map((s, i) => (
              <Series.Sequence
                key={s.id}
                durationInFrames={sceneDurations[i]}
                name={s.id}
              >
                {s.render()}
              </Series.Sequence>
            ))}
          </Series>
        </div>
      </Sequence>
      {!IS_STUB && (
        <Sequence from={audioOffsetFrames}>
          <Audio src={staticFile(MASTER_AUDIO)} />
          {!hideCaptions && (
            <CaptionStrip
              captions={captionsData as Caption[]}
              audioDurationSeconds={scenesData.audioDurationSeconds}
            />
          )}
        </Sequence>
      )}
    </AbsoluteFill>
  );
};
