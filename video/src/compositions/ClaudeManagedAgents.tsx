import { AbsoluteFill, Sequence, Series, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { TitleCard } from "../scenes/TitleCard";
import { BulletReveal } from "../scenes/BulletReveal";
import { CodeBlock } from "../scenes/CodeBlock";
import { CostChart } from "../scenes/CostChart";
import { Outro } from "../scenes/Outro";
import { CaptionStrip } from "../scenes/CaptionStrip";
import { ThumbnailHold } from "../scenes/ThumbnailHold";
import { COLORS, SAFE_AREA_BOTTOM } from "../lib/theme";
import captionsData from "../../public/voiceover/ClaudeManagedAgents/captions.json";
import scenesData from "../../public/voiceover/ClaudeManagedAgents/scenes.json";

export type ClaudeManagedAgentsProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  // Burn the thumbnail PNG as the first frames of the video so the YT mobile
  // Studio frame picker can snap to it. Set thumbnailHoldFrames=0 to skip
  // (e.g. when rendering review stills before thumbnail.png exists).
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/ClaudeManagedAgents";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

const titleProps = {
  lines: [
    { text: "Anthropic just shipped", color: COLORS.textMuted, size: 80, weight: 500 },
    { text: "Managed Agents.", color: COLORS.textPrimary, size: 130, weight: 700 },
    { text: "$0.08/hr —", color: COLORS.accent, size: 130, weight: 800 },
    { text: "worth it?", color: COLORS.cyan, size: 130, weight: 800 },
  ],
  underlineWidthPercent: 50,
};

const bulletProps = {
  header: {
    line1: "Hosted runtime.",
    line2: "Sandboxed.",
    line2Color: COLORS.cyan,
  },
  items: [
    { kind: "numbered" as const, index: "01", text: "Infra handled — retries, scaling, sandbox" },
    { kind: "numbered" as const, index: "02", text: "$0.08 per session-hour + API rates" },
    { kind: "numbered" as const, index: "03", text: "Built for multi-hour workflows" },
  ],
  itemStartDelaySeconds: 1.6,
  itemStaggerSeconds: 1.4,
};

const codeProps = {
  topCaption: { text: "One ", accentText: "API call.", accentColor: COLORS.accent },
  lines: [
    [
      { text: "client.", color: COLORS.textPrimary },
      { text: "beta", color: COLORS.cyan },
      { text: ".messages.create(", color: COLORS.textPrimary },
    ],
    [
      { text: "  betas=[", color: COLORS.textPrimary },
      { text: '"managed-agents-2026-04-01"', color: COLORS.green },
      { text: "],", color: COLORS.textPrimary },
    ],
    [
      { text: "  messages=[…],", color: COLORS.textMuted },
    ],
    [
      { text: ")", color: COLORS.textPrimary },
    ],
  ],
  bottomCaption: {
    text: "Anthropic ",
    accentText: "runs it.",
    accentColor: COLORS.green,
  },
  fontSize: 40,
  typewriterSeconds: 4.0,
};

const chartProps = {
  header: {
    line1: "3-hour task.",
    line2: "Pay or build?",
    line2Color: COLORS.cyan,
  },
  bars: [
    {
      label: "Managed runtime",
      value: 0.2,
      prefix: "$",
      decimals: 2,
      color: COLORS.accent,
      maxHeight: 540,
      overlay: "+ API rates",
    },
    {
      label: "Agent SDK runtime",
      value: 0,
      prefix: "$",
      decimals: 0,
      color: COLORS.cyan,
      maxHeight: 40,
      overlay: "+ host it yourself",
    },
  ] as [
    {
      label: string;
      value: number;
      prefix: string;
      decimals: number;
      color: string;
      maxHeight: number;
      overlay: string;
    },
    {
      label: string;
      value: number;
      prefix: string;
      decimals: number;
      color: string;
      maxHeight: number;
      overlay: string;
    },
  ],
  callout: { text: "speed vs control", color: COLORS.green },
};

const outroProps = {
  bigNumber: "$0.08",
  bigNumberSize: 220,
  bigNumberColor: COLORS.accent,
  subhead: "an hour",
  caption: "vs Agent SDK — full breakdown",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

const SCENES = [
  { id: "scene-1-title", render: () => <TitleCard {...titleProps} /> },
  { id: "scene-2-bullets", render: () => <BulletReveal {...bulletProps} /> },
  { id: "scene-3-code", render: () => <CodeBlock {...codeProps} /> },
  { id: "scene-4-chart", render: () => <CostChart {...chartProps} /> },
  { id: "scene-5-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const ClaudeManagedAgents: React.FC<ClaudeManagedAgentsProps> = ({
  sceneDurations,
  audioOffsetFrames,
  hideCaptions = false,
  thumbnailSrc,
  thumbnailHoldFrames = 0,
}) => {
  const showThumbnailHold = thumbnailSrc && thumbnailHoldFrames > 0;
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {/* Thumbnail burn-in — full frame, above safe-area wrapper. */}
      {showThumbnailHold && (
        <Sequence durationInFrames={thumbnailHoldFrames} name="thumbnail-hold">
          <ThumbnailHold src={thumbnailSrc} />
        </Sequence>
      )}
      {/* Scene canvas — bounded above the caption + Shorts UI safe zone. */}
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
