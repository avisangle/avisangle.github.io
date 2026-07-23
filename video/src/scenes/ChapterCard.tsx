import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type ChapterCardProps = {
  index?: string;
  title?: string;
  subtitle?: string;
  accentColor?: string;
};

const DEFAULT_PROPS: Required<Omit<ChapterCardProps, "subtitle">> & {
  subtitle?: string;
} = {
  index: "01",
  title: "The setup",
  subtitle: undefined,
  accentColor: COLORS.accent,
};

export const ChapterCard: React.FC<ChapterCardProps> = ({
  index = DEFAULT_PROPS.index,
  title = DEFAULT_PROPS.title,
  subtitle,
  accentColor = DEFAULT_PROPS.accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const indexOpacity = interpolate(frame, [0, 0.4 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const indexScale = interpolate(frame, [0, 0.5 * fps], [0.85, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Accent bar wipes left-to-right after the index lands.
  const barWidth = interpolate(frame, [0.4 * fps, 1.0 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.smooth),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [0.7 * fps, 1.2 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0.7 * fps, 1.2 * fps], [30, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subOpacity = interpolate(frame, [1.0 * fps, 1.5 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 120px",
        gap: 32,
      }}
    >
      <div
        style={{
          opacity: indexOpacity,
          transform: `scale(${indexScale})`,
          transformOrigin: "left center",
          fontFamily: FONTS.mono,
          fontWeight: 600,
          fontSize: 96,
          color: accentColor,
          letterSpacing: -2,
          lineHeight: 1,
        }}
      >
        {index}
      </div>
      <div
        style={{
          height: 10,
          width: `${barWidth * 25}%`,
          background: accentColor,
          borderRadius: 999,
        }}
      />
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: FONTS.sans,
          fontWeight: 800,
          fontSize: 140,
          color: COLORS.textPrimary,
          lineHeight: 1.05,
          letterSpacing: -2,
          maxWidth: "85%",
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            opacity: subOpacity,
            fontFamily: FONTS.sans,
            fontWeight: 500,
            fontSize: 52,
            color: COLORS.textMuted,
            maxWidth: "75%",
            lineHeight: 1.3,
          }}
        >
          {subtitle}
        </div>
      )}
    </AbsoluteFill>
  );
};
