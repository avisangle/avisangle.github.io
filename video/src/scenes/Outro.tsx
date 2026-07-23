import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type OutroProps = {
  bigNumber?: string;
  bigNumberSize?: number;
  bigNumberColor?: string;
  subhead?: string;
  caption?: string;
  url?: string;
  ctaLabel?: string;
};

export const Outro: React.FC<OutroProps> = ({
  bigNumber = "7",
  bigNumberSize = 360,
  bigNumberColor = COLORS.accent,
  subhead = "tactics",
  caption = "full breakdown on the blog",
  url = "avinashsangle.com",
  ctaLabel = "link in description",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const numOpacity = interpolate(frame, [0, 0.7 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const numScale = interpolate(frame, [0, 0.7 * fps], [0.5, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subheadOpacity = interpolate(frame, [1.0 * fps, 1.6 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subheadY = interpolate(frame, [1.0 * fps, 1.6 * fps], [30, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const urlOpacity = interpolate(frame, [2.2 * fps, 3.2 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const urlY = interpolate(frame, [2.2 * fps, 3.2 * fps], [50, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const arrowBob = interpolate(
    frame,
    [3.3 * fps, 3.7 * fps, 4.1 * fps, 4.5 * fps, 4.9 * fps],
    [0, -16, 0, -16, 0],
    {
      easing: Easing.bezier(...EASING.smooth),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0 60px",
        gap: 24,
      }}
    >
      <div
        style={{
          opacity: numOpacity,
          transform: `scale(${numScale})`,
          fontFamily: FONTS.sans,
          fontSize: bigNumberSize,
          fontWeight: 800,
          color: bigNumberColor,
          lineHeight: 0.9,
          letterSpacing: -8,
          textAlign: "center",
        }}
      >
        {bigNumber}
      </div>
      <div
        style={{
          opacity: subheadOpacity,
          transform: `translateY(${subheadY}px)`,
          fontFamily: FONTS.sans,
          fontSize: 84,
          fontWeight: 700,
          color: COLORS.textPrimary,
          textAlign: "center",
          letterSpacing: -1,
          marginTop: 8,
        }}
      >
        {subhead}
      </div>
      <div
        style={{
          opacity: subheadOpacity,
          fontFamily: FONTS.sans,
          fontSize: 48,
          fontWeight: 500,
          color: COLORS.textMuted,
          textAlign: "center",
          marginTop: 8,
        }}
      >
        {caption}
      </div>

      <div
        style={{
          opacity: urlOpacity,
          transform: `translateY(${urlY}px)`,
          marginTop: 80,
          padding: "32px 56px",
          background: COLORS.bgRaised,
          border: `2px solid ${COLORS.codeBorder}`,
          borderRadius: 999,
          fontFamily: FONTS.mono,
          fontSize: 56,
          color: COLORS.cyan,
          fontWeight: 600,
        }}
      >
        {url}
      </div>

      <div
        style={{
          marginTop: 64,
          transform: `translateY(${arrowBob}px)`,
          fontFamily: FONTS.sans,
          fontSize: 88,
          fontWeight: 800,
          color: COLORS.accent,
        }}
      >
        ↓
      </div>
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 36,
          fontWeight: 600,
          color: COLORS.textMuted,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        {ctaLabel}
      </div>
    </AbsoluteFill>
  );
};
