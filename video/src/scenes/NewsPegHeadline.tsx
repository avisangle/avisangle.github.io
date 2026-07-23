import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type NewsPegHeadlineProps = {
  source?: string;
  headline?: string;
  date?: string;
  tagPill?: { label: string; color?: string };
};

export const NewsPegHeadline: React.FC<NewsPegHeadlineProps> = ({
  source = "anthropic.com/news",
  headline = "Claude Code 2.1 — patched four agentic regressions",
  date,
  tagPill = { label: "Breaking", color: COLORS.red },
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pill pulses in first — sets the "this just happened" tone.
  const pillOpacity = interpolate(frame, [0, 0.3 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pillScale = interpolate(frame, [0, 0.4 * fps], [0.7, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Subtle pulse on the pill so it doesn't sit dead.
  const pulse = interpolate(
    frame,
    [0.4 * fps, 0.7 * fps, 1.0 * fps],
    [1, 1.06, 1],
    {
      easing: Easing.bezier(...EASING.smooth),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const headlineOpacity = interpolate(frame, [0.3 * fps, 0.9 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [0.3 * fps, 0.9 * fps], [40, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sourceOpacity = interpolate(frame, [0.8 * fps, 1.2 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pillColor = tagPill.color ?? COLORS.red;

  return (
    <AbsoluteFill
      style={{
        padding: "120px 100px 100px",
        justifyContent: "center",
        gap: 56,
      }}
    >
      <div
        style={{
          opacity: pillOpacity,
          transform: `scale(${pillScale * pulse})`,
          transformOrigin: "left center",
          alignSelf: "flex-start",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "16px 32px",
          background: pillColor,
          borderRadius: 999,
          fontFamily: FONTS.mono,
          fontWeight: 600,
          fontSize: 36,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#fff",
        }}
      >
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: "#fff",
            boxShadow: `0 0 16px #fff`,
          }}
        />
        {tagPill.label}
      </div>

      <div
        style={{
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
          fontFamily: FONTS.sans,
          fontWeight: 800,
          fontSize: 104,
          color: COLORS.textPrimary,
          lineHeight: 1.05,
          letterSpacing: -1.5,
          maxWidth: "95%",
        }}
      >
        {headline}
      </div>

      <div
        style={{
          opacity: sourceOpacity,
          display: "flex",
          alignItems: "center",
          gap: 24,
          fontFamily: FONTS.mono,
          fontSize: 32,
          color: COLORS.textMuted,
        }}
      >
        <span>{source}</span>
        {date && (
          <>
            <span style={{ color: COLORS.textDim }}>·</span>
            <span>{date}</span>
          </>
        )}
      </div>
    </AbsoluteFill>
  );
};
