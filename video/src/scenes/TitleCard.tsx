import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type TitleLine = {
  text: string;
  color: string;
  size: number;
  weight: number;
};

export type TitleCardProps = {
  lines?: TitleLine[];
  underlineWidthPercent?: number;
};

const DEFAULT_LINES: TitleLine[] = [
  { text: "You don't know", color: COLORS.textMuted, size: 88, weight: 500 },
  {
    text: "what you're spending",
    color: COLORS.textPrimary,
    size: 120,
    weight: 700,
  },
  { text: "on Claude Code.", color: COLORS.accent, size: 140, weight: 800 },
];

const Line: React.FC<{
  children: React.ReactNode;
  delay: number;
  size: number;
  color: string;
  weight: number;
}> = ({ children, delay, size, color, weight }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - delay;

  const opacity = interpolate(local, [0, 0.5 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ty = interpolate(local, [0, 0.5 * fps], [40, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${ty}px)`,
        fontFamily: FONTS.sans,
        fontWeight: weight,
        fontSize: size,
        color,
        lineHeight: 1.05,
        letterSpacing: -1,
      }}
    >
      {children}
    </div>
  );
};

export const TitleCard: React.FC<TitleCardProps> = ({
  lines = DEFAULT_LINES,
  underlineWidthPercent = 55,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const underlineWidth = interpolate(
    frame,
    [1.6 * fps, 2.4 * fps],
    [0, 1],
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
        alignItems: "flex-start",
        padding: "0 80px",
        gap: 24,
      }}
    >
      {lines.map((line, i) => (
        <Line
          key={i}
          delay={i * 0.4 * fps}
          size={line.size}
          color={line.color}
          weight={line.weight}
        >
          {line.text}
        </Line>
      ))}
      <div
        style={{
          marginTop: 16,
          height: 14,
          width: `${underlineWidth * underlineWidthPercent}%`,
          background: lines[lines.length - 1]?.color ?? COLORS.accent,
          borderRadius: 999,
        }}
      />
    </AbsoluteFill>
  );
};
