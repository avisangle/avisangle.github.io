import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type RecapCardProps = {
  heading?: string;
  bullets?: string[];
  takeaway?: string;
  bulletStartDelaySeconds?: number;
  bulletStaggerSeconds?: number;
};

const DEFAULT_BULLETS: string[] = [
  "Pin the version",
  "Lock the config",
  "Replay golden prompts",
];

const Bullet: React.FC<{ text: string; delay: number; index: number }> = ({
  text,
  delay,
  index,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - delay;

  const opacity = interpolate(local, [0, 0.5 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tx = interpolate(local, [0, 0.5 * fps], [-40, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${tx}px)`,
        display: "flex",
        alignItems: "center",
        gap: 36,
        fontFamily: FONTS.sans,
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontWeight: 600,
          fontSize: 56,
          color: COLORS.accent,
          minWidth: 72,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        style={{
          fontWeight: 700,
          fontSize: 64,
          color: COLORS.textPrimary,
          lineHeight: 1.15,
          letterSpacing: -0.5,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export const RecapCard: React.FC<RecapCardProps> = ({
  heading = "The recap",
  bullets = DEFAULT_BULLETS,
  takeaway,
  bulletStartDelaySeconds = 1.0,
  bulletStaggerSeconds = 0.9,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headingY = interpolate(frame, [0, 0.5 * fps], [30, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const takeawayDelay =
    (bulletStartDelaySeconds + bullets.length * bulletStaggerSeconds + 0.4) *
    fps;
  const takeawayOpacity = interpolate(
    frame,
    [takeawayDelay, takeawayDelay + 0.5 * fps],
    [0, 1],
    {
      easing: Easing.bezier(...EASING.pop),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        padding: "120px 120px 100px",
        gap: 60,
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          opacity: headingOpacity,
          transform: `translateY(${headingY}px)`,
          fontFamily: FONTS.sans,
          fontWeight: 800,
          fontSize: 100,
          color: COLORS.textPrimary,
          letterSpacing: -1.5,
          lineHeight: 1.05,
        }}
      >
        {heading}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {bullets.map((b, i) => (
          <Bullet
            key={i}
            text={b}
            index={i}
            delay={(bulletStartDelaySeconds + i * bulletStaggerSeconds) * fps}
          />
        ))}
      </div>

      {takeaway && (
        <>
          <div style={{ flex: 1 }} />
          <div
            style={{
              opacity: takeawayOpacity,
              fontFamily: FONTS.sans,
              fontWeight: 700,
              fontSize: 56,
              color: COLORS.accent,
              lineHeight: 1.2,
              maxWidth: "85%",
            }}
          >
            {takeaway}
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
