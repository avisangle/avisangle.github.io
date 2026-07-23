import {
  AbsoluteFill,
  Sequence,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { Audio } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { TitleCard } from "../scenes/TitleCard";
import { BulletReveal } from "../scenes/BulletReveal";
import { Outro } from "../scenes/Outro";
import { CaptionStrip } from "../scenes/CaptionStrip";
import { ThumbnailHold } from "../scenes/ThumbnailHold";
import { COLORS, FONTS, SAFE_AREA_BOTTOM } from "../lib/theme";
import captionsData from "../../public/voiceover/WhatIsClaudeCode/captions.json";
import scenesData from "../../public/voiceover/WhatIsClaudeCode/scenes.json";

export type WhatIsClaudeCodeProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/WhatIsClaudeCode";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

// ---- Scene 1: title (catalog scene) ----------------------------------------

const titleProps = {
  lines: [
    { text: "You think it's", color: COLORS.textMuted, size: 80, weight: 500 },
    { text: "a terminal.", color: COLORS.textPrimary, size: 130, weight: 700 },
    { text: "It's 6.", color: COLORS.cyan, size: 230, weight: 800 },
  ],
  underlineWidthPercent: 35,
};

// ---- Scene 2: 6-surface list (catalog scene, numbered variant) -------------

const bulletProps = {
  header: {
    line1: "Six surfaces.",
    line2: "Same engine.",
    line2Color: COLORS.cyan,
  },
  items: [
    { kind: "numbered" as const, index: "01", text: "Terminal" },
    { kind: "numbered" as const, index: "02", text: "Desktop app" },
    { kind: "numbered" as const, index: "03", text: "VS Code" },
    { kind: "numbered" as const, index: "04", text: "JetBrains" },
    { kind: "numbered" as const, index: "05", text: "Web — claude.ai/code" },
    { kind: "numbered" as const, index: "06", text: "Mobile — Remote Control" },
  ],
  itemStartDelaySeconds: 0.6,
  itemStaggerSeconds: 0.85,
};

// ---- Scene 5: outro (catalog scene) ----------------------------------------

const outroProps = {
  bigNumber: "6",
  bigNumberSize: 480,
  bigNumberColor: COLORS.cyan,
  subhead: "surfaces",
  caption: "one Claude. one conversation.",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

// ---- Scene 3: shared-context (composition-inline one-off) ------------------
//
// Three device silhouettes appear, then three "Same X." payoff lines fade
// through underneath. Kept inline per CATALOG decision tree — single-use beat.

const SyncDeviceFrame: React.FC<{
  width: number;
  height: number;
  borderRadius: number;
  hasTitleBar?: boolean;
}> = ({ width, height, borderRadius, hasTitleBar }) => (
  <div
    style={{
      width,
      height,
      borderRadius,
      border: `4px solid ${COLORS.textMuted}`,
      background: COLORS.bgRaised,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    {hasTitleBar && (
      <div
        style={{
          height: 22,
          background: COLORS.textDim,
          flexShrink: 0,
        }}
      />
    )}
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "20px 18px",
        gap: 10,
      }}
    >
      <div
        style={{
          alignSelf: "flex-end",
          width: "70%",
          height: 22,
          borderRadius: 11,
          background: COLORS.cyan,
          opacity: 0.85,
        }}
      />
      <div
        style={{
          alignSelf: "flex-start",
          width: "55%",
          height: 14,
          borderRadius: 7,
          background: COLORS.textMuted,
          opacity: 0.5,
        }}
      />
      <div
        style={{
          alignSelf: "flex-start",
          width: "40%",
          height: 14,
          borderRadius: 7,
          background: COLORS.textMuted,
          opacity: 0.5,
        }}
      />
    </div>
  </div>
);

const ScreenSyncBeat: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Devices spring in over the first ~30 frames.
  const deviceProgress = spring({
    frame,
    fps,
    config: { damping: 200, mass: 1 },
    durationInFrames: 30,
  });

  // Three payoff lines, each visible for ~5s, crossfading.
  const payoffLines = [
    { text: "Same conversation.", appear: 30, disappear: 180 },
    { text: "Same tools.", appear: 180, disappear: 300 },
    { text: "Same memory.", appear: 300, disappear: 450 },
  ];

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "120px 80px",
        fontFamily: FONTS.sans,
      }}
    >
      <div
        style={{
          fontSize: 64,
          color: COLORS.textMuted,
          fontWeight: 500,
          marginBottom: 8,
        }}
      >
        Every surface.
      </div>
      <div
        style={{
          fontSize: 120,
          color: COLORS.cyan,
          fontWeight: 800,
          marginBottom: 80,
          letterSpacing: -3,
          whiteSpace: "nowrap",
        }}
      >
        Same Claude.
      </div>

      <div
        style={{
          display: "flex",
          gap: 56,
          alignItems: "center",
          opacity: deviceProgress,
          transform: `translateY(${interpolate(deviceProgress, [0, 1], [40, 0])}px)`,
          marginBottom: 100,
        }}
      >
        <SyncDeviceFrame width={320} height={240} borderRadius={18} />
        <SyncDeviceFrame width={150} height={300} borderRadius={26} />
        <SyncDeviceFrame
          width={320}
          height={240}
          borderRadius={18}
          hasTitleBar
        />
      </div>

      <div
        style={{
          height: 200,
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {payoffLines.map((l, i) => {
          const opacity = interpolate(
            frame,
            [l.appear, l.appear + 12, l.disappear - 12, l.disappear],
            [0, 1, 1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const y = interpolate(frame, [l.appear, l.appear + 18], [30, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                fontSize: 100,
                fontWeight: 800,
                color: COLORS.textPrimary,
                opacity,
                transform: `translateY(${y}px)`,
                letterSpacing: -2,
                whiteSpace: "nowrap",
              }}
            >
              {l.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene 4: 2x2 use-case grid (composition-inline one-off) ---------------

const UseCaseGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cards: Array<{
    question: string;
    answer: string;
    appear: number;
    color: string;
  }> = [
    { question: "Deep work?", answer: "Terminal", appear: 0, color: COLORS.accent },
    { question: "Code review?", answer: "IDE", appear: 25, color: COLORS.cyan },
    { question: "Long agent run?", answer: "Phone", appear: 55, color: COLORS.cyan },
    { question: "No laptop?", answer: "Web", appear: 85, color: COLORS.accent },
  ];

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONTS.sans,
        padding: 60,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 36,
          width: "100%",
          maxWidth: 920,
        }}
      >
        {cards.map((c, i) => {
          const progress = spring({
            frame: frame - c.appear,
            fps,
            config: { damping: 14, stiffness: 180, mass: 0.6 },
            durationInFrames: 30,
          });
          return (
            <div
              key={i}
              style={{
                background: COLORS.bgRaised,
                borderRadius: 32,
                padding: "44px 36px",
                border: `2px solid ${COLORS.codeBorder}`,
                opacity: progress,
                transform: `scale(${0.85 + progress * 0.15})`,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                minHeight: 240,
              }}
            >
              <div
                style={{
                  fontSize: 42,
                  color: COLORS.textMuted,
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                {c.question}
              </div>
              <div
                style={{
                  fontSize: 84,
                  color: c.color,
                  fontWeight: 800,
                  letterSpacing: -2,
                  lineHeight: 1,
                }}
              >
                {c.answer}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene registry --------------------------------------------------------

const SCENES = [
  { id: "scene-1-title", render: () => <TitleCard {...titleProps} /> },
  { id: "scene-2-bullets", render: () => <BulletReveal {...bulletProps} /> },
  { id: "scene-3-claim", render: () => <ScreenSyncBeat /> },
  { id: "scene-4-use-cases", render: () => <UseCaseGrid /> },
  { id: "scene-5-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const WhatIsClaudeCode: React.FC<WhatIsClaudeCodeProps> = ({
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
      <Sequence
        from={showThumbnailHold ? thumbnailHoldFrames : 0}
        name="scenes"
      >
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
