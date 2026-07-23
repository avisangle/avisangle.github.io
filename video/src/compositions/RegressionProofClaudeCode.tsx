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
import captionsData from "../../public/voiceover/RegressionProofClaudeCode/captions.json";
import scenesData from "../../public/voiceover/RegressionProofClaudeCode/scenes.json";

export type RegressionProofClaudeCodeProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/RegressionProofClaudeCode";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

// ---- Scene 1: title (catalog scene) ----------------------------------------

const titleProps = {
  lines: [
    {
      text: "today: v2.1.121",
      color: COLORS.textMuted,
      size: 80,
      weight: 500,
    },
    {
      text: "four regression fixes.",
      color: COLORS.textPrimary,
      size: 110,
      weight: 700,
    },
    {
      text: "evals missed all four.",
      color: COLORS.cyan,
      size: 165,
      weight: 800,
    },
  ],
  underlineWidthPercent: 60,
};

// ---- Scene 3: code — the pin (catalog scene) -------------------------------

const codeProps = {
  topCaption: { text: "the ", accentText: "pin.", accentColor: COLORS.cyan },
  lines: [
    [
      { text: "npm ", color: COLORS.textPrimary },
      { text: "uninstall", color: COLORS.cyan },
      { text: " -g @anthropic-ai/claude-code", color: COLORS.textPrimary },
    ],
    [
      { text: "npm ", color: COLORS.textPrimary },
      { text: "install", color: COLORS.cyan },
      { text: " -g @anthropic-ai/claude-code", color: COLORS.textPrimary },
      { text: "@2.1.117", color: COLORS.green },
    ],
    [{ text: " ", color: COLORS.textPrimary }],
    [{ text: "# ~/.npmrc", color: COLORS.textMuted }],
    [
      { text: "@anthropic-ai/claude-code:", color: COLORS.textPrimary },
      { text: "version", color: COLORS.cyan },
      { text: "=", color: COLORS.textMuted },
      { text: "2.1.117", color: COLORS.green },
    ],
  ],
  bottomCaption: {
    text: "future updates ",
    accentText: "can't touch you.",
    accentColor: COLORS.accent,
  },
  fontSize: 28,
  typewriterSeconds: 4.5,
};

// ---- Scene 5: outro (catalog scene) ----------------------------------------

const outroProps = {
  bigNumber: "3",
  bigNumberSize: 480,
  bigNumberColor: COLORS.cyan,
  subhead: "lines",
  caption: "pin · lock · test",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

// ---- Scene 2: stat stack (composition-inline one-off) ----------------------
//
// Three large stats stagger in vertically. Below: a single caption tying
// the stats to the playbook setup.

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
          fontSize: 130,
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
          bigText="7 weeks"
          bigColor={COLORS.red}
          label="of silent regressions"
        />
        <StatRow
          appear={30}
          bigText="8 bugs"
          bigColor={COLORS.accent}
          label="filed in 24 hours"
        />
        <StatRow
          appear={60}
          bigText="50× burn"
          bigColor={COLORS.cyan}
          label="quota vs baseline"
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
        the only reason mine didn't break:{" "}
        <span style={{ color: COLORS.cyan, fontWeight: 800 }}>
          three lines of config
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene 4: settings + stop hook (composition-inline one-off) ------------
//
// Top half: settings.json with effortLevel + availableModels highlighted.
// Bottom half (slides up mid-scene): Python stop hook snippet.
// Voice flows continuously across the visual transition between the two.

const CodePanel: React.FC<{
  appear: number;
  filename: string;
  filenameColor: string;
  children: React.ReactNode;
}> = ({ appear, filename, filenameColor, children }) => {
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
        transform: `translateY(${interpolate(progress, [0, 1], [40, 0])}px)`,
        background: COLORS.codeBg,
        border: `2px solid ${COLORS.codeBorder}`,
        borderRadius: 18,
        overflow: "hidden",
        width: "100%",
        maxWidth: 920,
      }}
    >
      <div
        style={{
          height: 38,
          background: COLORS.bgRaised,
          borderBottom: `2px solid ${COLORS.codeBorder}`,
          display: "flex",
          alignItems: "center",
          paddingLeft: 18,
          fontFamily: FONTS.mono,
          fontSize: 22,
          color: filenameColor,
          fontWeight: 600,
        }}
      >
        {filename}
      </div>
      <div
        style={{
          padding: "20px 26px",
          fontFamily: FONTS.mono,
          fontSize: 26,
          lineHeight: 1.5,
          color: COLORS.textPrimary,
          whiteSpace: "pre",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const SettingsAndHook: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: FONTS.sans,
        padding: "80px 60px",
        gap: 40,
      }}
    >
      <CodePanel
        appear={0}
        filename="settings.json"
        filenameColor={COLORS.cyan}
      >
        <div>{"{"}</div>
        <div>
          {"  "}
          <span style={{ color: COLORS.cyan }}>"effortLevel"</span>
          <span style={{ color: COLORS.textMuted }}>: </span>
          <span style={{ color: COLORS.green }}>"medium"</span>
          <span style={{ color: COLORS.textMuted }}>,</span>
        </div>
        <div>
          {"  "}
          <span style={{ color: COLORS.cyan }}>"availableModels"</span>
          <span style={{ color: COLORS.textMuted }}>: [</span>
        </div>
        <div>
          {"    "}
          <span style={{ color: COLORS.green }}>"claude-opus-4-7"</span>
        </div>
        <div>
          {"  "}
          <span style={{ color: COLORS.textMuted }}>]</span>
        </div>
        <div>{"}"}</div>
      </CodePanel>

      <CodePanel
        appear={150}
        filename=".claude/hooks/stop.py"
        filenameColor={COLORS.accent}
      >
        <div>
          <span style={{ color: COLORS.textMuted }}>
            # replay golden prompts
          </span>
        </div>
        <div>
          <span style={{ color: COLORS.purple }}>for</span>
          <span> prompt </span>
          <span style={{ color: COLORS.purple }}>in</span>
          <span> golden_prompts:</span>
        </div>
        <div>
          {"    "}
          <span style={{ color: COLORS.purple }}>assert</span>
          <span> run(prompt) </span>
          <span style={{ color: COLORS.textMuted }}>==</span>
          <span> expected[prompt]</span>
        </div>
      </CodePanel>
    </AbsoluteFill>
  );
};

// ---- Scene registry --------------------------------------------------------

const SCENES = [
  { id: "scene-1-title", render: () => <TitleCard {...titleProps} /> },
  { id: "scene-2-stats", render: () => <StatStack /> },
  { id: "scene-3-code", render: () => <CodeBlock {...codeProps} /> },
  { id: "scene-4-settings-hook", render: () => <SettingsAndHook /> },
  { id: "scene-5-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const RegressionProofClaudeCode: React.FC<
  RegressionProofClaudeCodeProps
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
