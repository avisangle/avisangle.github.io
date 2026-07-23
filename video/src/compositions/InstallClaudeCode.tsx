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
import { CodeBlock } from "../scenes/CodeBlock";
import { Outro } from "../scenes/Outro";
import { CaptionStrip } from "../scenes/CaptionStrip";
import { ThumbnailHold } from "../scenes/ThumbnailHold";
import { COLORS, FONTS, SAFE_AREA_BOTTOM } from "../lib/theme";
import captionsData from "../../public/voiceover/InstallClaudeCode/captions.json";
import scenesData from "../../public/voiceover/InstallClaudeCode/scenes.json";

export type InstallClaudeCodeProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/InstallClaudeCode";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

// ---- Scene 1: title (catalog scene) ----------------------------------------

const titleProps = {
  lines: [
    { text: "Most install guides", color: COLORS.textMuted, size: 80, weight: 500 },
    { text: "are out of date.", color: COLORS.textPrimary, size: 110, weight: 700 },
    { text: "Use this.", color: COLORS.cyan, size: 230, weight: 800 },
  ],
  underlineWidthPercent: 35,
};

// ---- Scene 2: install (catalog scene) --------------------------------------

const codeProps = {
  topCaption: { text: "One ", accentText: "line.", accentColor: COLORS.cyan },
  lines: [
    [
      { text: "curl ", color: COLORS.textPrimary },
      { text: "-fsSL", color: COLORS.cyan },
      { text: " ", color: COLORS.textPrimary },
      { text: "https://claude.ai/install.sh", color: COLORS.green },
      { text: " | ", color: COLORS.textMuted },
      { text: "bash", color: COLORS.textPrimary },
    ],
  ],
  bottomCaption: {
    text: "no npm. no ",
    accentText: "Node.",
    accentColor: COLORS.accent,
  },
  fontSize: 28,
  typewriterSeconds: 4.0,
};

// ---- Scene 5: outro (catalog scene) ----------------------------------------

const outroProps = {
  bigNumber: "1",
  bigNumberSize: 480,
  bigNumberColor: COLORS.cyan,
  subhead: "line",
  caption: "no npm. no Node. auto-updates.",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

// ---- Scene 3: auth flow (composition-inline one-off) -----------------------
//
// Three "step cards" pop in left-to-right: terminal running `claude` →
// browser with sign-in button → check mark with payoff. Stagger via spring().

const StepCard: React.FC<{
  appear: number;
  width: number;
  height: number;
  children: React.ReactNode;
}> = ({ appear, width, height, children }) => {
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
        width,
        height,
        opacity: progress,
        transform: `scale(${0.85 + progress * 0.15})`,
        background: COLORS.bgRaised,
        border: `3px solid ${COLORS.codeBorder}`,
        borderRadius: 22,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

const Arrow: React.FC<{ appear: number }> = ({ appear }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [appear, appear + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        opacity,
        fontSize: 60,
        color: COLORS.textMuted,
        fontWeight: 800,
        fontFamily: FONTS.sans,
      }}
    >
      →
    </div>
  );
};

const AuthFlow: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONTS.sans,
        padding: "100px 40px",
        gap: 60,
      }}
    >
      <div
        style={{
          fontSize: 70,
          color: COLORS.textMuted,
          fontWeight: 500,
          marginBottom: 30,
        }}
      >
        Type{" "}
        <span style={{ color: COLORS.cyan, fontFamily: FONTS.mono, fontWeight: 600 }}>
          claude
        </span>
        .
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 30,
        }}
      >
        {/* Step 1: Terminal */}
        <StepCard appear={0} width={260} height={200}>
          <div
            style={{
              height: 28,
              background: COLORS.codeBg,
              borderBottom: `2px solid ${COLORS.codeBorder}`,
              display: "flex",
              alignItems: "center",
              paddingLeft: 14,
              gap: 8,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 5, background: "#ff5f56" }} />
            <div style={{ width: 10, height: 10, borderRadius: 5, background: "#ffbd2e" }} />
            <div style={{ width: 10, height: 10, borderRadius: 5, background: "#27c93f" }} />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0 24px",
              fontFamily: FONTS.mono,
              fontSize: 38,
              color: COLORS.cyan,
              fontWeight: 600,
            }}
          >
            <span style={{ color: COLORS.textMuted, marginRight: 12 }}>$</span>
            claude
          </div>
        </StepCard>

        <Arrow appear={45} />

        {/* Step 2: Browser */}
        <StepCard appear={60} width={260} height={200}>
          <div
            style={{
              height: 32,
              background: COLORS.codeBg,
              borderBottom: `2px solid ${COLORS.codeBorder}`,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              gap: 6,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: 4, background: COLORS.textDim }} />
            <div style={{ width: 8, height: 8, borderRadius: 4, background: COLORS.textDim }} />
            <div
              style={{
                flex: 1,
                marginLeft: 12,
                height: 14,
                borderRadius: 7,
                background: COLORS.bg,
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
            }}
          >
            <div
              style={{
                background: COLORS.cyan,
                color: COLORS.bg,
                padding: "14px 24px",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: 26,
              }}
            >
              Sign in
            </div>
          </div>
        </StepCard>

        <Arrow appear={105} />

        {/* Step 3: Check */}
        <StepCard appear={120} width={260} height={200}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: 42,
                background: COLORS.green,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: COLORS.bg,
                fontSize: 56,
                fontWeight: 900,
              }}
            >
              ✓
            </div>
            <div
              style={{
                fontSize: 26,
                color: COLORS.textPrimary,
                fontWeight: 700,
              }}
            >
              you're in
            </div>
          </div>
        </StepCard>
      </div>

      <div
        style={{
          marginTop: 60,
          fontSize: 44,
          color: COLORS.textPrimary,
          fontWeight: 700,
          textAlign: "center",
          maxWidth: 920,
        }}
      >
        Pro, Team, or Console — no{" "}
        <span style={{ color: COLORS.accent, fontFamily: FONTS.mono }}>API</span> keys.
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene 4: installer comparison (composition-inline one-off) ------------
//
// Top: 3 small comparison cards (npm / brew / native), only "native" highlighted.
// Middle: large "auto-updates in the background." headline.
// Bottom: small mono caveat about Windows + Git.

const ComparisonCard: React.FC<{
  appear: number;
  label: string;
  note: string;
  highlighted: boolean;
}> = ({ appear, label, note, highlighted }) => {
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
        transform: `scale(${0.85 + progress * 0.15})`,
        flex: 1,
        background: highlighted ? COLORS.bgRaised : "transparent",
        border: `2px solid ${
          highlighted ? COLORS.cyan : COLORS.codeBorder
        }`,
        borderRadius: 20,
        padding: "28px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 50,
          color: highlighted ? COLORS.cyan : COLORS.textMuted,
          fontWeight: 800,
          fontFamily: FONTS.mono,
          letterSpacing: -1,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 26,
          color: highlighted ? COLORS.textPrimary : COLORS.textDim,
          fontWeight: 600,
        }}
      >
        {note}
      </div>
    </div>
  );
};

const InstallerComparison: React.FC = () => {
  const frame = useCurrentFrame();
  const headlineProgress = spring({
    frame: frame - 120,
    fps: 30,
    config: { damping: 14, stiffness: 180, mass: 0.6 },
    durationInFrames: 30,
  });
  const caveatOpacity = interpolate(frame, [240, 260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontFamily: FONTS.sans,
        padding: "100px 60px 40px",
        gap: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 24,
          width: "100%",
          maxWidth: 920,
        }}
      >
        <ComparisonCard appear={0} label="npm" note="manual upgrade" highlighted={false} />
        <ComparisonCard appear={30} label="brew" note="manual upgrade" highlighted={false} />
        <ComparisonCard appear={60} label="native" note="auto-updates" highlighted />
      </div>

      <div
        style={{
          opacity: headlineProgress,
          transform: `translateY(${interpolate(headlineProgress, [0, 1], [30, 0])}px)`,
          fontSize: 88,
          fontWeight: 800,
          color: COLORS.textPrimary,
          textAlign: "center",
          letterSpacing: -2,
          lineHeight: 1.05,
          maxWidth: 960,
        }}
      >
        Auto-updates in the{" "}
        <span style={{ color: COLORS.cyan }}>background.</span>
      </div>

      <div
        style={{
          opacity: caveatOpacity,
          marginTop: "auto",
          background: COLORS.bgRaised,
          border: `2px solid ${COLORS.codeBorder}`,
          borderRadius: 16,
          padding: "16px 24px",
          fontFamily: FONTS.mono,
          fontSize: 28,
          color: COLORS.textMuted,
          alignSelf: "center",
        }}
      >
        <span style={{ color: COLORS.accent }}># Windows: </span>
        install Git for Windows first
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene registry --------------------------------------------------------

const SCENES = [
  { id: "scene-1-title", render: () => <TitleCard {...titleProps} /> },
  { id: "scene-2-install", render: () => <CodeBlock {...codeProps} /> },
  { id: "scene-3-auth", render: () => <AuthFlow /> },
  { id: "scene-4-payoff", render: () => <InstallerComparison /> },
  { id: "scene-5-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const InstallClaudeCode: React.FC<InstallClaudeCodeProps> = ({
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
