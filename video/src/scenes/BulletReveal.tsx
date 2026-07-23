import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type BulletItem =
  | { kind: "slash"; text: string }
  | { kind: "numbered"; index: string; text: string }
  | { kind: "filepath"; muted: string; accent: string };

export type BulletRevealProps = {
  header?: { line1: string; line2: string; line2Color?: string };
  items?: BulletItem[];
  itemStartDelaySeconds?: number;
  itemStaggerSeconds?: number;
};

const DEFAULT_HEADER: NonNullable<BulletRevealProps["header"]> = {
  line1: "It's already",
  line2: "tracked.",
  line2Color: COLORS.accent,
};

const DEFAULT_ITEMS: BulletItem[] = [
  { kind: "slash", text: "cost" },
  { kind: "slash", text: "stats" },
  { kind: "slash", text: "usage" },
  {
    kind: "filepath",
    muted: "~/.claude/projects/",
    accent: "*.jsonl",
  },
];

const SlashChip: React.FC<{ text: string; delay: number }> = ({
  text,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - delay;

  const opacity = interpolate(local, [0, 0.5 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(local, [0, 0.5 * fps], [0.7, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tx = interpolate(local, [0, 0.5 * fps], [-60, 0], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${tx}px) scale(${scale})`,
        transformOrigin: "left center",
        fontFamily: FONTS.mono,
        fontWeight: 600,
        fontSize: 130,
        lineHeight: 1.1,
        padding: "20px 44px",
        background: COLORS.bgRaised,
        borderRadius: 28,
        border: `2px solid ${COLORS.codeBorder}`,
        alignSelf: "flex-start",
      }}
    >
      <span style={{ color: COLORS.accent }}>/</span>
      <span style={{ color: COLORS.textPrimary }}>{text}</span>
    </div>
  );
};

const NumberedChip: React.FC<{
  index: string;
  text: string;
  delay: number;
}> = ({ index, text, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - delay;

  const opacity = interpolate(local, [0, 0.5 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(local, [0, 0.5 * fps], [0.85, 1], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tx = interpolate(local, [0, 0.5 * fps], [-50, 0], {
    easing: Easing.bezier(...EASING.pop),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${tx}px) scale(${scale})`,
        transformOrigin: "left center",
        display: "flex",
        alignItems: "center",
        gap: 32,
        padding: "26px 40px",
        background: COLORS.bgRaised,
        borderRadius: 24,
        border: `2px solid ${COLORS.codeBorder}`,
        alignSelf: "stretch",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontWeight: 600,
          fontSize: 56,
          color: COLORS.accent,
          minWidth: 70,
        }}
      >
        {index}
      </span>
      <span
        style={{
          fontFamily: FONTS.sans,
          fontWeight: 700,
          fontSize: 52,
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

const FilePath: React.FC<{
  muted: string;
  accent: string;
  delay: number;
}> = ({ muted, accent, delay }) => {
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
        fontFamily: FONTS.mono,
        fontSize: 44,
        color: COLORS.cyan,
        padding: "28px 36px",
        background: COLORS.bgRaised,
        borderRadius: 20,
        border: `2px solid ${COLORS.codeBorder}`,
        whiteSpace: "nowrap",
        alignSelf: "stretch",
        overflow: "hidden",
      }}
    >
      <span style={{ color: COLORS.textMuted }}>{muted}</span>
      <span style={{ color: COLORS.cyan }}>{accent}</span>
    </div>
  );
};

export const BulletReveal: React.FC<BulletRevealProps> = ({
  header = DEFAULT_HEADER,
  items = DEFAULT_ITEMS,
  itemStartDelaySeconds = 3.0,
  itemStaggerSeconds = 1.5,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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

  const inlineItems = items.filter((it) => it.kind !== "filepath");
  const trailingFilepath = items.find((it) => it.kind === "filepath") as
    | Extract<BulletItem, { kind: "filepath" }>
    | undefined;

  return (
    <AbsoluteFill
      style={{
        padding: "140px 80px 100px",
        gap: 48,
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
        }}
      >
        {header.line1}
        <br />
        <span style={{ color: header.line2Color ?? COLORS.accent }}>
          {header.line2}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          alignItems: "flex-start",
          alignSelf: "stretch",
        }}
      >
        {inlineItems.map((item, i) => {
          const delay =
            (itemStartDelaySeconds + i * itemStaggerSeconds) * fps;
          if (item.kind === "slash") {
            return <SlashChip key={i} text={item.text} delay={delay} />;
          }
          return (
            <NumberedChip
              key={i}
              index={item.index}
              text={item.text}
              delay={delay}
            />
          );
        })}
      </div>

      <div style={{ flex: 1 }} />
      {trailingFilepath && (
        <FilePath
          muted={trailingFilepath.muted}
          accent={trailingFilepath.accent}
          delay={
            (itemStartDelaySeconds +
              inlineItems.length * itemStaggerSeconds +
              0.5) *
            fps
          }
        />
      )}
    </AbsoluteFill>
  );
};
