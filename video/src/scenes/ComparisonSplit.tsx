import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type ComparisonSide = {
  label: string;
  body: string;
  color?: string;
  badge?: string;
};

export type ComparisonSplitProps = {
  header?: string;
  left?: ComparisonSide;
  right?: ComparisonSide;
  verdict?: { text: string; color?: string };
};

const DEFAULT_LEFT: ComparisonSide = {
  label: "Before",
  body: "Eight bugs slipped through",
  color: COLORS.red,
};
const DEFAULT_RIGHT: ComparisonSide = {
  label: "After",
  body: "Zero hit production",
  color: COLORS.green,
};

const SideCard: React.FC<{
  side: ComparisonSide;
  delay: number;
  from: "left" | "right";
}> = ({ side, delay, from }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - delay;

  const opacity = interpolate(local, [0, 0.5 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tx = interpolate(local, [0, 0.6 * fps], [from === "left" ? -80 : 80, 0], {
    easing: Easing.bezier(...EASING.smooth),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const accent = side.color ?? COLORS.accent;

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${tx}px)`,
        flex: 1,
        background: COLORS.bgRaised,
        border: `2px solid ${COLORS.codeBorder}`,
        borderRadius: 28,
        padding: "56px 48px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 8,
          background: accent,
        }}
      />
      <div
        style={{
          fontFamily: FONTS.mono,
          fontWeight: 600,
          fontSize: 28,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: accent,
        }}
      >
        {side.label}
      </div>
      <div
        style={{
          fontFamily: FONTS.sans,
          fontWeight: 700,
          fontSize: 56,
          color: COLORS.textPrimary,
          lineHeight: 1.2,
          letterSpacing: -0.5,
        }}
      >
        {side.body}
      </div>
      {side.badge && (
        <div
          style={{
            alignSelf: "flex-start",
            marginTop: "auto",
            fontFamily: FONTS.mono,
            fontSize: 32,
            color: accent,
            padding: "10px 20px",
            border: `2px solid ${accent}`,
            borderRadius: 999,
          }}
        >
          {side.badge}
        </div>
      )}
    </div>
  );
};

export const ComparisonSplit: React.FC<ComparisonSplitProps> = ({
  header,
  left = DEFAULT_LEFT,
  right = DEFAULT_RIGHT,
  verdict,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const verdictDelay = 1.6 * fps;
  const verdictOpacity = interpolate(
    frame,
    [verdictDelay, verdictDelay + 0.5 * fps],
    [0, 1],
    {
      easing: Easing.bezier(...EASING.pop),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const verdictScale = interpolate(
    frame,
    [verdictDelay, verdictDelay + 0.5 * fps],
    [0.7, 1],
    {
      easing: Easing.bezier(...EASING.pop),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        padding: "100px 100px 80px",
        gap: 48,
      }}
    >
      {header && (
        <div
          style={{
            opacity: headerOpacity,
            fontFamily: FONTS.sans,
            fontWeight: 800,
            fontSize: 84,
            color: COLORS.textPrimary,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          {header}
        </div>
      )}
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 32,
          alignItems: "stretch",
        }}
      >
        <SideCard side={left} delay={0.3 * fps} from="left" />
        <SideCard side={right} delay={0.9 * fps} from="right" />
      </div>
      {verdict && (
        <div
          style={{
            opacity: verdictOpacity,
            transform: `scale(${verdictScale})`,
            alignSelf: "center",
            fontFamily: FONTS.sans,
            fontWeight: 800,
            fontSize: 64,
            color: verdict.color ?? COLORS.accent,
            padding: "20px 48px",
            border: `4px solid ${verdict.color ?? COLORS.accent}`,
            borderRadius: 999,
            letterSpacing: -0.5,
          }}
        >
          {verdict.text}
        </div>
      )}
    </AbsoluteFill>
  );
};
