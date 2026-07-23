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
import captionsData from "../../public/voiceover/ClaudeManagedAgentsOutcomes/captions.json";
import scenesData from "../../public/voiceover/ClaudeManagedAgentsOutcomes/scenes.json";

export type ClaudeManagedAgentsOutcomesProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/ClaudeManagedAgentsOutcomes";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

const titleProps = {
  lines: [
    { text: "My agent shipped a", color: COLORS.textMuted, size: 72, weight: 500 },
    { text: "busted .docx", color: COLORS.red, size: 130, weight: 800 },
    { text: "three times.", color: COLORS.textPrimary, size: 110, weight: 700 },
    { text: "Anthropic fixed that.", color: COLORS.accent, size: 96, weight: 700 },
  ],
  underlineWidthPercent: 55,
};

const bulletProps = {
  header: {
    line1: "Hand Claude a",
    line2: "checklist.",
    line2Color: COLORS.accent,
  },
  items: [
    { kind: "numbered" as const, index: "01", text: "Cover every section the brief asked for" },
    { kind: "numbered" as const, index: "02", text: "Hit the right tone and length" },
    { kind: "numbered" as const, index: "03", text: "No placeholders, no broken formatting" },
  ],
  itemStartDelaySeconds: 1.4,
  itemStaggerSeconds: 1.3,
};

const codeProps = {
  topCaption: {
    text: "Plain English. ",
    accentText: "No code.",
    accentColor: COLORS.green,
  },
  lines: [
    [
      { text: "# ", color: COLORS.textMuted },
      { text: "Done means:", color: COLORS.textPrimary },
    ],
    [
      { text: "- Title slide names the company", color: COLORS.textPrimary },
    ],
    [
      { text: "- Every section has a chart", color: COLORS.textPrimary },
    ],
    [
      { text: "- No \"Lorem ipsum\" anywhere", color: COLORS.textPrimary },
    ],
    [
      { text: "- Closing slide has next steps", color: COLORS.textPrimary },
    ],
  ],
  bottomCaption: {
    text: "A second Claude ",
    accentText: "grades each line.",
    accentColor: COLORS.accent,
  },
  fontSize: 38,
  typewriterSeconds: 4.5,
};

const chartProps = {
  header: {
    line1: "First-try lift",
    line2: "across the board.",
    line2Color: COLORS.accent,
  },
  bars: [
    {
      label: "PowerPoints",
      value: 11,
      prefix: "",
      suffix: "%",
      decimals: 0,
      color: COLORS.cyan,
      maxHeight: 540,
      overlay: ".pptx",
    },
    {
      label: "Word docs",
      value: 8,
      prefix: "",
      suffix: "%",
      decimals: 0,
      color: COLORS.green,
      maxHeight: 400,
      overlay: ".docx",
    },
  ] as [
    {
      label: string;
      value: number;
      prefix: string;
      suffix: string;
      decimals: number;
      color: string;
      maxHeight: number;
      overlay: string;
    },
    {
      label: string;
      value: number;
      prefix: string;
      suffix: string;
      decimals: number;
      color: string;
      maxHeight: number;
      overlay: string;
    },
  ],
  callout: { text: "+10% overall", color: COLORS.accent },
  revealOrder: "callout-first" as const,
};

const usecaseProps = {
  header: {
    line1: "If your AI builds…",
    line2: "this is the upgrade.",
    line2Color: COLORS.accent,
  },
  items: [
    { kind: "numbered" as const, index: "01", text: "Reports & briefs" },
    { kind: "numbered" as const, index: "02", text: "Slides & decks" },
    { kind: "numbered" as const, index: "03", text: "Emails — anywhere \"good enough\" isn't" },
  ],
  itemStartDelaySeconds: 1.2,
  itemStaggerSeconds: 1.6,
};

const outroProps = {
  bigNumber: "+10%",
  bigNumberSize: 300,
  bigNumberColor: COLORS.accent,
  subhead: "first-try lift",
  caption: "",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

const SCENES = [
  { id: "scene-1-title", render: () => <TitleCard {...titleProps} /> },
  { id: "scene-2-bullets", render: () => <BulletReveal {...bulletProps} /> },
  { id: "scene-3-rubric", render: () => <CodeBlock {...codeProps} /> },
  { id: "scene-4-chart", render: () => <CostChart {...chartProps} /> },
  { id: "scene-5-usecase", render: () => <BulletReveal {...usecaseProps} /> },
  { id: "scene-6-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const ClaudeManagedAgentsOutcomes: React.FC<
  ClaudeManagedAgentsOutcomesProps
> = ({
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
