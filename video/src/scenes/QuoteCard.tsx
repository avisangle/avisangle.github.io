import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type QuoteCardProps = {
  quote?: string;
  attribution?: string;
  source?: string;
  accentColor?: string;
};

export const QuoteCard: React.FC<QuoteCardProps> = ({
  quote = "Your config doesn't have to break.",
  attribution = "— the whole point of this video",
  source,
  accentColor = COLORS.accent,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const markOpacity = interpolate(frame, [0, 0.4 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const markScale = interpolate(frame, [0, 0.5 * fps], [0.7, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [0.4 * fps, 1.0 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const quoteY = interpolate(frame, [0.4 * fps, 1.0 * fps], [30, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const attribOpacity = interpolate(frame, [0.9 * fps, 1.4 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "0 140px",
        gap: 40,
      }}
    >
      <div
        style={{
          opacity: markOpacity,
          transform: `scale(${markScale})`,
          fontFamily: FONTS.sans,
          fontWeight: 800,
          fontSize: 200,
          color: accentColor,
          lineHeight: 0.6,
          alignSelf: "flex-start",
        }}
      >
        “
      </div>
      <div
        style={{
          opacity: quoteOpacity,
          transform: `translateY(${quoteY}px)`,
          fontFamily: FONTS.sans,
          fontWeight: 700,
          fontSize: 88,
          color: COLORS.textPrimary,
          lineHeight: 1.2,
          letterSpacing: -1,
          textAlign: "center",
          maxWidth: "92%",
        }}
      >
        {quote}
      </div>
      <div
        style={{
          opacity: attribOpacity,
          fontFamily: FONTS.sans,
          fontWeight: 500,
          fontSize: 44,
          color: COLORS.textMuted,
          textAlign: "center",
          marginTop: 16,
        }}
      >
        {attribution}
      </div>
      {source && (
        <div
          style={{
            opacity: attribOpacity,
            fontFamily: FONTS.mono,
            fontSize: 28,
            color: COLORS.textDim,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {source}
        </div>
      )}
    </AbsoluteFill>
  );
};
