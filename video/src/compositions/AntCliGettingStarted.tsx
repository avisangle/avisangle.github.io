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
import { CodeBlock } from "../scenes/CodeBlock";
import { Outro } from "../scenes/Outro";
import { CaptionStrip } from "../scenes/CaptionStrip";
import { ThumbnailHold } from "../scenes/ThumbnailHold";
import { COLORS, FONTS, SAFE_AREA_BOTTOM } from "../lib/theme";
import captionsData from "../../public/voiceover/AntCliGettingStarted/captions.json";
import scenesData from "../../public/voiceover/AntCliGettingStarted/scenes.json";

export type AntCliGettingStartedProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/AntCliGettingStarted";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

// ---- Scene 1: title (catalog scene) ----------------------------------------

const titleProps = {
  lines: [
    {
      text: "Anthropic's ant CLI",
      color: COLORS.textMuted,
      size: 80,
      weight: 500,
    },
    {
      text: "dropped a month ago.",
      color: COLORS.textPrimary,
      size: 110,
      weight: 700,
    },
    {
      text: "still haven't tried it.",
      color: COLORS.cyan,
      size: 150,
      weight: 800,
    },
  ],
  underlineWidthPercent: 60,
};

// ---- Scene 2: bullets — context (catalog scene) ----------------------------

const bulletProps = {
  header: {
    line1: "Managed agents,",
    line2: "kubectl-style.",
    line2Color: COLORS.cyan,
  },
  items: [
    {
      kind: "numbered" as const,
      index: "01",
      text: "300+ stars in the first 10 days",
    },
    {
      kind: "numbered" as const,
      index: "02",
      text: "kubectl-style resource model",
    },
    {
      kind: "numbered" as const,
      index: "03",
      text: "brew install + YAML config",
    },
  ],
  itemStartDelaySeconds: 1.6,
  itemStaggerSeconds: 1.4,
};

// ---- Scene 3: code — the create command (catalog scene) --------------------

const codeProps = {
  topCaption: { text: "One ", accentText: "line.", accentColor: COLORS.cyan },
  lines: [
    [
      { text: "ant ", color: COLORS.textPrimary },
      { text: "beta:agents", color: COLORS.cyan },
      { text: " create \\", color: COLORS.textPrimary },
    ],
    [
      { text: "  --name ", color: COLORS.textPrimary },
      { text: '"Code Reviewer"', color: COLORS.green },
      { text: " \\", color: COLORS.textPrimary },
    ],
    [
      { text: "  --model ", color: COLORS.textPrimary },
      { text: "claude-sonnet-4-6", color: COLORS.green },
      { text: " \\", color: COLORS.textPrimary },
    ],
    [
      { text: "  --system ", color: COLORS.textPrimary },
      { text: '"…senior reviewer…"', color: COLORS.green },
      { text: " \\", color: COLORS.textPrimary },
    ],
    [
      { text: "  --tool ", color: COLORS.textPrimary },
      { text: "'{type:agent_toolset}'", color: COLORS.green },
    ],
  ],
  bottomCaption: {
    text: "no ",
    accentText: "app code.",
    accentColor: COLORS.accent,
  },
  fontSize: 30,
  typewriterSeconds: 4.5,
};

// ---- Scene 5: outro (catalog scene) ----------------------------------------

const outroProps = {
  bigNumber: "10",
  bigNumberSize: 480,
  bigNumberColor: COLORS.cyan,
  subhead: "minutes",
  caption: "brew · YAML · deploy",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

// ---- Scene 4: pricing stat stack (composition-inline one-off) --------------
//
// Three large stat rows stagger in vertically, each a $/time anchor for the
// $0.08/hr managed-agents pricing line. Below: a small caption tying MCP
// extension to the pricing story.

const StatRow: React.FC<{
  appear: number;
  bigText: string;
  bigColor: string;
  label: string;
}> = ({ appear, bigText, bigColor, label }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - appear,
    fps,
    config: { damping: 14, stiffness: 180, mass: 0.6 },
    durationInFrames: 30,
  });
  return (
    <div
      style={{
        opacity: progress,
        transform: `translateX(${interpolate(progress, [0, 1], [-40, 0])}px)`,
        display: "flex",
        alignItems: "baseline",
        gap: 28,
        width: "100%",
      }}
    >
      <div
        style={{
          fontSize: 110,
          fontWeight: 800,
          color: bigColor,
          fontFamily: FONTS.sans,
          letterSpacing: -3,
          lineHeight: 1,
          minWidth: 380,
        }}
      >
        {bigText}
      </div>
      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: COLORS.textMuted,
          fontFamily: FONTS.sans,
          letterSpacing: -0.5,
        }}
      >
        {label}
      </div>
    </div>
  );
};

const StatStack: React.FC = () => {
  const frame = useCurrentFrame();
  const captionOpacity = interpolate(frame, [120, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONTS.sans,
        padding: "100px 60px",
        gap: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 36,
          width: "100%",
          maxWidth: 940,
        }}
      >
        <StatRow
          appear={0}
          bigText="$0.08"
          bigColor={COLORS.accent}
          label="per session-hour"
        />
        <StatRow
          appear={30}
          bigText="~$0.70"
          bigColor={COLORS.cyan}
          label="typical 1-hour Opus session"
        />
        <StatRow
          appear={60}
          bigText="ms"
          bigColor={COLORS.green}
          label="billed to the millisecond"
        />
      </div>

      <div
        style={{
          opacity: captionOpacity,
          marginTop: 60,
          fontSize: 38,
          fontWeight: 600,
          color: COLORS.textPrimary,
          textAlign: "center",
          maxWidth: 860,
          lineHeight: 1.2,
        }}
      >
        MCP servers plug in for{" "}
        <span style={{ color: COLORS.cyan, fontWeight: 800 }}>
          custom tools
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene registry --------------------------------------------------------

const SCENES = [
  { id: "scene-1-title", render: () => <TitleCard {...titleProps} /> },
  { id: "scene-2-bullets", render: () => <BulletReveal {...bulletProps} /> },
  { id: "scene-3-code", render: () => <CodeBlock {...codeProps} /> },
  { id: "scene-4-chart", render: () => <StatStack /> },
  { id: "scene-5-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const AntCliGettingStarted: React.FC<AntCliGettingStartedProps> = ({
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
              audioDurationSeconds={
                (scenesData as { audioDurationSeconds: number })
                  .audioDurationSeconds
              }
            />
          )}
        </Sequence>
      )}
    </AbsoluteFill>
  );
};
