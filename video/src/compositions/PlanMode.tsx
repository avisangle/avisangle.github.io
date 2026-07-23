import {
  AbsoluteFill,
  Sequence,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { Audio } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { TitleCard } from "../scenes/TitleCard";
import { BulletReveal } from "../scenes/BulletReveal";
import { Outro } from "../scenes/Outro";
import { CaptionStrip } from "../scenes/CaptionStrip";
import { ThumbnailHold } from "../scenes/ThumbnailHold";
import { COLORS, EASING, FONTS, SAFE_AREA_BOTTOM } from "../lib/theme";
import captionsData from "../../public/voiceover/PlanMode/captions.json";
import scenesData from "../../public/voiceover/PlanMode/scenes.json";

export type PlanModeProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/PlanMode";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

// ---- Scene 1: title (catalog scene) ----------------------------------------

const titleProps = {
  lines: [
    { text: "Stop hitting Enter.", color: COLORS.textMuted, size: 76, weight: 500 },
    { text: "Shift+Tab twice.", color: COLORS.textPrimary, size: 110, weight: 700 },
    { text: "Plan mode.", color: COLORS.cyan, size: 150, weight: 800 },
  ],
  underlineWidthPercent: 40,
};

// ---- Scene 4: use cases (catalog scene — BulletReveal numbered) ------------

const bulletProps = {
  header: {
    line1: "Best for",
    line2: "this work.",
    line2Color: COLORS.cyan,
  },
  items: [
    { kind: "numbered" as const, index: "01", text: "Multi-file refactors" },
    { kind: "numbered" as const, index: "02", text: "Ambiguous prompts" },
    { kind: "numbered" as const, index: "03", text: "Unfamiliar codebases" },
    { kind: "numbered" as const, index: "04", text: "Production work" },
  ],
  itemStartDelaySeconds: 1.6,
  itemStaggerSeconds: 1.8,
};

// ---- Scene 5: outro (catalog scene) ----------------------------------------

const outroProps = {
  bigNumber: "2",
  bigNumberSize: 480,
  bigNumberColor: COLORS.cyan,
  subhead: "keystrokes",
  caption: "approve before execute. fewer wrong turns.",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

// ---- Scene 2: default vs plan contrast (composition-inline one-off) --------
//
// Top half (red): "Default mode" — three filename rows pop in fast, last one
// flashes red with an error icon. Bottom half (cyan): "Plan mode" — a plan
// file card materialises with checklist items, indicating "you approve first".

const FileEditRow: React.FC<{
  appear: number;
  filename: string;
  isError?: boolean;
}> = ({ appear, filename, isError = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - appear,
    fps,
    config: { damping: 14, stiffness: 200, mass: 0.5 },
    durationInFrames: 20,
  });
  const errorPulse = interpolate(
    frame,
    [appear + 12, appear + 22, appear + 32],
    [0, 1, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return (
    <div
      style={{
        opacity: progress,
        transform: `translateX(${interpolate(progress, [0, 1], [-30, 0])}px)`,
        display: "flex",
        alignItems: "center",
        gap: 18,
        background: COLORS.bgRaised,
        border: `2px solid ${isError ? COLORS.red : COLORS.codeBorder}`,
        borderRadius: 14,
        padding: "14px 22px",
        fontFamily: FONTS.mono,
        fontSize: 32,
        color: isError ? COLORS.red : COLORS.textPrimary,
        fontWeight: 600,
      }}
    >
      <span style={{ color: COLORS.textDim, fontSize: 28 }}>edit</span>
      <span style={{ flex: 1 }}>{filename}</span>
      {isError && (
        <span style={{ opacity: errorPulse, fontSize: 36, fontWeight: 800 }}>
          ✕
        </span>
      )}
    </div>
  );
};

const PlanCardLine: React.FC<{
  appear: number;
  index: string;
  text: string;
}> = ({ appear, index, text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - appear,
    fps,
    config: { damping: 16, stiffness: 180, mass: 0.5 },
    durationInFrames: 22,
  });
  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [16, 0])}px)`,
        display: "flex",
        alignItems: "center",
        gap: 16,
        fontFamily: FONTS.mono,
        fontSize: 28,
        color: COLORS.textPrimary,
        fontWeight: 500,
        lineHeight: 1.3,
      }}
    >
      <span style={{ color: COLORS.cyan, fontWeight: 700, minWidth: 40 }}>
        {index}
      </span>
      <span>{text}</span>
    </div>
  );
};

const ContrastScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const topLabelOpacity = interpolate(frame, [0, 0.4 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bottomLabelOpacity = interpolate(
    frame,
    [3.6 * fps, 4.0 * fps],
    [0, 1],
    {
      easing: Easing.bezier(...EASING.enter),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const dividerOpacity = interpolate(frame, [3.0 * fps, 3.6 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: FONTS.sans,
        padding: "70px 60px 30px",
      }}
    >
      {/* TOP: Default mode */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 18,
          paddingBottom: 28,
        }}
      >
        <div
          style={{
            opacity: topLabelOpacity,
            fontSize: 48,
            fontWeight: 800,
            color: COLORS.red,
            letterSpacing: -1,
          }}
        >
          Default mode
        </div>
        <FileEditRow appear={20} filename="auth.ts" />
        <FileEditRow appear={45} filename="session.ts" />
        <FileEditRow appear={70} filename="middleware.ts" isError />
        <div
          style={{
            opacity: interpolate(frame, [2.6 * fps, 3.0 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            marginTop: 8,
            fontSize: 30,
            color: COLORS.red,
            fontWeight: 700,
          }}
        >
          tests fail
        </div>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          opacity: dividerOpacity,
          height: 2,
          background: COLORS.codeBorder,
          margin: "12px 0",
        }}
      />

      {/* BOTTOM: Plan mode */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingTop: 28,
        }}
      >
        <div
          style={{
            opacity: bottomLabelOpacity,
            fontSize: 48,
            fontWeight: 800,
            color: COLORS.cyan,
            letterSpacing: -1,
          }}
        >
          Plan mode
        </div>
        <div
          style={{
            opacity: interpolate(frame, [4.2 * fps, 4.7 * fps], [0, 1], {
              easing: Easing.bezier(...EASING.enter),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `translateY(${interpolate(
              frame,
              [4.2 * fps, 4.7 * fps],
              [20, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            )}px)`,
            background: COLORS.bgRaised,
            border: `2px solid ${COLORS.cyan}`,
            borderRadius: 16,
            padding: "20px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 28,
              color: COLORS.cyan,
              fontWeight: 700,
              borderBottom: `1px solid ${COLORS.codeBorder}`,
              paddingBottom: 12,
              marginBottom: 4,
            }}
          >
            auth-refactor-plan.md
          </div>
          <PlanCardLine appear={155} index="1." text="Update auth.ts schema" />
          <PlanCardLine
            appear={180}
            index="2."
            text="Migrate middleware first"
          />
          <PlanCardLine appear={205} index="3." text="Then session handlers" />
        </div>
        <div
          style={{
            opacity: interpolate(frame, [8.0 * fps, 8.5 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            marginTop: "auto",
            alignSelf: "center",
            fontSize: 32,
            color: COLORS.green,
            fontWeight: 700,
          }}
        >
          ✓ you catch the order issue first
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene 3: how-to (composition-inline one-off) --------------------------
//
// Top: 4 mode pills horizontal (auto-accept / default / ask / plan).
// A highlighter "Shift+Tab" key chip taps twice; the active pill cycles and
// lands on "plan". A small "or /plan" line follows.
// Bottom: a plan file mock (filename + 3 checklist lines) materialises.

const ModePill: React.FC<{
  label: string;
  isActive: boolean;
}> = ({ label, isActive }) => {
  return (
    <div
      style={{
        padding: "14px 22px",
        borderRadius: 999,
        border: `2px solid ${isActive ? COLORS.cyan : COLORS.codeBorder}`,
        background: isActive ? COLORS.bgRaised : "transparent",
        fontFamily: FONTS.mono,
        fontSize: 26,
        fontWeight: 600,
        color: isActive ? COLORS.cyan : COLORS.textMuted,
      }}
    >
      {label}
    </div>
  );
};

const KeyChip: React.FC<{ tapFrame: number }> = ({ tapFrame }) => {
  const frame = useCurrentFrame();
  const press = interpolate(
    frame,
    [tapFrame - 4, tapFrame, tapFrame + 8],
    [1, 0.85, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const glow = interpolate(
    frame,
    [tapFrame - 4, tapFrame, tapFrame + 12],
    [0, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return (
    <div
      style={{
        transform: `scale(${press})`,
        background: COLORS.bgRaised,
        border: `2px solid ${COLORS.codeBorder}`,
        borderRadius: 14,
        padding: "16px 26px",
        fontFamily: FONTS.mono,
        fontSize: 30,
        fontWeight: 700,
        color: COLORS.textPrimary,
        boxShadow: `0 0 ${glow * 30}px ${COLORS.cyan}`,
      }}
    >
      Shift + Tab
    </div>
  );
};

const HowToScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active pill index cycles default(1) → ask(2) on first tap, ask(2) → plan(3) on second
  const tap1 = 1.0 * fps;
  const tap2 = 2.2 * fps;
  let activeIdx = 1;
  if (frame >= tap1) activeIdx = 2;
  if (frame >= tap2) activeIdx = 3;

  const modes = ["auto-accept", "default", "ask", "plan"];

  const orPlanOpacity = interpolate(frame, [3.6 * fps, 4.2 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const planFileScale = spring({
    frame: frame - 5.0 * fps,
    fps,
    config: { damping: 16, stiffness: 160, mass: 0.6 },
    durationInFrames: 26,
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: FONTS.sans,
        padding: "80px 50px 30px",
        gap: 24,
      }}
    >
      {/* Mode pills row */}
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {modes.map((label, i) => (
          <ModePill key={label} label={label} isActive={i === activeIdx} />
        ))}
      </div>

      {/* Key chip taps */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 12,
          height: 80,
          alignItems: "center",
        }}
      >
        <KeyChip tapFrame={tap1} />
      </div>

      {/* Or /plan */}
      <div
        style={{
          opacity: orPlanOpacity,
          textAlign: "center",
          fontSize: 32,
          color: COLORS.textMuted,
          fontWeight: 500,
        }}
      >
        or{" "}
        <span style={{ color: COLORS.accent, fontFamily: FONTS.mono, fontWeight: 700 }}>
          /plan
        </span>
      </div>

      {/* Plan file appearing */}
      <div
        style={{
          opacity: planFileScale,
          transform: `scale(${0.9 + planFileScale * 0.1})`,
          marginTop: 20,
          background: COLORS.bgRaised,
          border: `2px solid ${COLORS.cyan}`,
          borderRadius: 18,
          padding: "22px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderBottom: `1px solid ${COLORS.codeBorder}`,
            paddingBottom: 14,
          }}
        >
          <span style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: 24 }}>
            file
          </span>
          <span
            style={{
              color: COLORS.cyan,
              fontFamily: FONTS.mono,
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            oauth-refactor-plan.md
          </span>
        </div>
        <PlanCardLine
          appear={6.0 * fps}
          index="1."
          text="Map current auth surface"
        />
        <PlanCardLine
          appear={6.5 * fps}
          index="2."
          text="Swap token store"
        />
        <PlanCardLine
          appear={7.0 * fps}
          index="3."
          text="Update callers + tests"
        />
      </div>

      {/* Read / edit / approve indicator */}
      <div
        style={{
          opacity: interpolate(frame, [8.2 * fps, 8.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          marginTop: "auto",
          alignSelf: "center",
          display: "flex",
          gap: 18,
          fontSize: 28,
          fontFamily: FONTS.sans,
          fontWeight: 700,
          color: COLORS.textMuted,
        }}
      >
        <span>read</span>
        <span style={{ color: COLORS.textDim }}>›</span>
        <span>edit</span>
        <span style={{ color: COLORS.textDim }}>›</span>
        <span style={{ color: COLORS.green }}>approve</span>
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene registry --------------------------------------------------------

const SCENES = [
  { id: "scene-1-title", render: () => <TitleCard {...titleProps} /> },
  { id: "scene-2-contrast", render: () => <ContrastScene /> },
  { id: "scene-3-howto", render: () => <HowToScene /> },
  { id: "scene-4-when", render: () => <BulletReveal {...bulletProps} /> },
  { id: "scene-5-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const PlanMode: React.FC<PlanModeProps> = ({
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
