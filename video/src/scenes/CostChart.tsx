import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type ChartBar = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  color: string;
  maxHeight: number;
  overlay?: string;
};

export type CostChartProps = {
  header?: { line1: string; line2: string; line2Color?: string };
  bars?: [ChartBar, ChartBar];
  callout?: { text: string; color?: string };
  // "bars-first" (default): bars grow at 1.5-8s, callout pops at 9-10s.
  //   Use when the VO names specifics first and the overall lands last.
  // "callout-first": callout pops at 0.8-1.8s, bars grow at 4-9s.
  //   Use when the VO leads with the headline overall, then breaks it down.
  revealOrder?: "bars-first" | "callout-first";
};

const DEFAULT_HEADER: NonNullable<CostChartProps["header"]> = {
  line1: "Three tweaks.",
  line2: "Half the bill.",
  line2Color: COLORS.cyan,
};

const DEFAULT_BARS: [ChartBar, ChartBar] = [
  {
    label: "Heavy session",
    value: 20,
    suffix: "+",
    color: COLORS.accent,
    maxHeight: 700,
  },
  {
    label: "After 3 tweaks",
    value: 10,
    color: COLORS.cyan,
    maxHeight: 350,
  },
];

const DEFAULT_CALLOUT: NonNullable<CostChartProps["callout"]> = {
  text: "↓ 50%",
  color: COLORS.green,
};

const formatValue = (
  v: number,
  prefix: string,
  suffix: string,
  decimals: number,
) => `${prefix}${v.toFixed(decimals)}${suffix}`;

const BarColumn: React.FC<{
  bar: ChartBar;
  growth: number;
}> = ({ bar, growth }) => {
  const value = bar.value * growth;
  const decimals = bar.decimals ?? 0;
  const prefix = bar.prefix ?? "$";
  const suffix = bar.suffix ?? "";
  const heightPx = Math.max(growth * bar.maxHeight, growth > 0 ? 6 : 0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 28,
        flex: 1,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 92,
          fontWeight: 600,
          color: bar.color,
          opacity: growth > 0 ? 1 : 0,
          letterSpacing: -2,
          textAlign: "center",
        }}
      >
        {formatValue(value, prefix, suffix, decimals)}
      </div>
      <div
        style={{
          width: 280,
          height: heightPx,
          background: bar.color,
          borderRadius: "24px 24px 0 0",
          alignSelf: "flex-end",
          position: "relative",
          minHeight: 4,
        }}
      >
        {bar.overlay && growth > 0.4 && (
          <div
            style={{
              position: "absolute",
              top: -56,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: FONTS.sans,
              fontSize: 32,
              fontWeight: 700,
              color: bar.color,
              whiteSpace: "nowrap",
              letterSpacing: -0.5,
            }}
          >
            {bar.overlay}
          </div>
        )}
      </div>
      <div
        style={{
          fontFamily: FONTS.sans,
          fontSize: 36,
          fontWeight: 600,
          color: COLORS.textMuted,
          textAlign: "center",
          opacity: growth > 0.1 ? 1 : 0,
          maxWidth: 320,
          lineHeight: 1.2,
        }}
      >
        {bar.label}
      </div>
    </div>
  );
};

export const CostChart: React.FC<CostChartProps> = ({
  header = DEFAULT_HEADER,
  bars = DEFAULT_BARS,
  callout = DEFAULT_CALLOUT,
  revealOrder = "bars-first",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const calloutFirst = revealOrder === "callout-first";
  const timing = calloutFirst
    ? { bar1: [4, 6.5] as const, bar2: [6.5, 9] as const, callout: [0.8, 1.8] as const }
    : { bar1: [1.5, 4] as const, bar2: [5, 8] as const, callout: [9, 10] as const };

  const headerOpacity = interpolate(frame, [0, 0.6 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headerY = interpolate(frame, [0, 0.6 * fps], [30, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const beforeGrowth = interpolate(
    frame,
    [timing.bar1[0] * fps, timing.bar1[1] * fps],
    [0, 1],
    {
      easing: Easing.bezier(...EASING.enter),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const afterGrowth = interpolate(
    frame,
    [timing.bar2[0] * fps, timing.bar2[1] * fps],
    [0, 1],
    {
      easing: Easing.bezier(...EASING.enter),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const calloutOpacity = interpolate(
    frame,
    [timing.callout[0] * fps, timing.callout[1] * fps],
    [0, 1],
    {
      easing: Easing.bezier(...EASING.pop),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const calloutScale = interpolate(
    frame,
    [timing.callout[0] * fps, timing.callout[1] * fps],
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
        padding: "120px 60px 100px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          opacity: headerOpacity,
          transform: `translateY(${headerY}px)`,
          fontFamily: FONTS.sans,
          fontWeight: 700,
          fontSize: 84,
          color: COLORS.textPrimary,
          lineHeight: 1.1,
          letterSpacing: -1,
          textAlign: "center",
        }}
      >
        {header.line1}
        <br />
        <span style={{ color: header.line2Color ?? COLORS.cyan }}>
          {header.line2}
        </span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          paddingTop: 80,
          paddingBottom: 60,
        }}
      >
        <BarColumn bar={bars[0]} growth={beforeGrowth} />
        <BarColumn bar={bars[1]} growth={afterGrowth} />
      </div>

      <div
        style={{
          opacity: calloutOpacity,
          transform: `scale(${calloutScale})`,
          fontFamily: FONTS.sans,
          fontSize: 120,
          fontWeight: 800,
          color: callout.color ?? COLORS.green,
          textAlign: "center",
          letterSpacing: -2,
        }}
      >
        {callout.text}
      </div>
    </AbsoluteFill>
  );
};
