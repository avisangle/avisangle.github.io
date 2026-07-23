import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type CodeToken = { text: string; color: string };

export type CodeBlockProps = {
  topCaption?: { text: string; accentText?: string; accentColor?: string };
  /**
   * Code displayed in the block. Each inner array is one line of tokens.
   * For a single-line snippet, pass `[[token, token, ...]]`.
   */
  lines?: CodeToken[][];
  bottomCaption?: {
    text: string;
    accentText?: string;
    accentColor?: string;
  };
  fontSize?: number;
  typewriterSeconds?: number;
};

const DEFAULT_LINES: CodeToken[][] = [
  [
    { text: "export", color: COLORS.purple },
    { text: " ", color: COLORS.textPrimary },
    { text: "MAX_THINKING_TOKENS", color: COLORS.textPrimary },
    { text: "=", color: COLORS.textMuted },
    { text: "10000", color: COLORS.yellow },
  ],
];

const DEFAULT_TOP: NonNullable<CodeBlockProps["topCaption"]> = {
  text: "The biggest lever",
  accentText: "?",
  accentColor: COLORS.accent,
};

const DEFAULT_BOTTOM: NonNullable<CodeBlockProps["bottomCaption"]> = {
  text: "Cuts your bill ",
  accentText: "~50%",
  accentColor: COLORS.green,
};

const Cursor: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const visible = Math.floor(frame / (0.4 * fps)) % 2 === 0;
  return (
    <span
      style={{ opacity: visible ? 1 : 0, color: COLORS.accent, marginLeft: 4 }}
    >
      ▍
    </span>
  );
};

const VisibleCode: React.FC<{
  lines: CodeToken[][];
  charsToShow: number;
  isTyping: boolean;
  fontSize: number;
}> = ({ lines, charsToShow, isTyping, fontSize }) => {
  let remaining = charsToShow;
  const out: React.ReactNode[] = [];
  let placedCursor = false;

  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    const lineKids: React.ReactNode[] = [];
    let lineConsumedAny = false;
    for (let ti = 0; ti < line.length; ti++) {
      if (remaining <= 0) break;
      const t = line[ti];
      const show = Math.min(remaining, t.text.length);
      remaining -= show;
      if (show > 0) lineConsumedAny = true;
      lineKids.push(
        <span key={ti} style={{ color: t.color }}>
          {t.text.slice(0, show)}
        </span>,
      );
    }

    // Cursor anchored to the last visible line while typing.
    const isLastVisibleLine =
      lineConsumedAny &&
      (remaining <= 0 || li === lines.length - 1) &&
      !placedCursor;

    if (lineConsumedAny || (li === 0 && lines.length > 1)) {
      out.push(
        <div
          key={li}
          style={{
            fontFamily: FONTS.mono,
            fontSize,
            fontWeight: 600,
            letterSpacing: -1,
            whiteSpace: "pre",
            lineHeight: 1.4,
          }}
        >
          {lineKids}
          {isLastVisibleLine && isTyping && <Cursor />}
        </div>,
      );
      if (isLastVisibleLine && isTyping) placedCursor = true;
    }

    if (remaining <= 0) break;
  }
  return <>{out}</>;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  topCaption = DEFAULT_TOP,
  lines = DEFAULT_LINES,
  bottomCaption = DEFAULT_BOTTOM,
  fontSize = 44,
  typewriterSeconds = 3.0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fullLength = lines.reduce(
    (n, line) => n + line.reduce((m, t) => m + t.text.length, 0),
    0,
  );

  const captionTopOpacity = interpolate(frame, [0, 0.6 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const captionTopY = interpolate(frame, [0, 0.6 * fps], [30, 0], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const boxProgress = interpolate(frame, [1.0 * fps, 1.8 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.smooth),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const typeStart = 1.8 * fps;
  const typeEnd = typeStart + typewriterSeconds * fps;
  const typewriterChars = interpolate(
    frame,
    [typeStart, typeEnd],
    [0, fullLength],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const visibleChars = Math.floor(typewriterChars);
  const isTyping = frame >= typeStart && frame <= typeEnd;

  const pulseStart = typeEnd;
  const pulseMid = pulseStart + 0.5 * fps;
  const pulseEnd = pulseStart + 1.0 * fps;
  const highlightPulse = interpolate(
    frame,
    [pulseStart, pulseMid, pulseEnd],
    [0, 1, 0],
    {
      easing: Easing.bezier(...EASING.smooth),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const bottomStart = pulseEnd + 0.2 * fps;
  const bottomMid = bottomStart + 1.0 * fps;
  const captionBottomOpacity = interpolate(
    frame,
    [bottomStart, bottomMid],
    [0, 1],
    {
      easing: Easing.bezier(...EASING.pop),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const captionBottomScale = interpolate(
    frame,
    [bottomStart, bottomMid],
    [0.85, 1],
    {
      easing: Easing.bezier(...EASING.pop),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        padding: "0 60px",
        justifyContent: "center",
        gap: 80,
      }}
    >
      <div
        style={{
          opacity: captionTopOpacity,
          transform: `translateY(${captionTopY}px)`,
          fontFamily: FONTS.sans,
          fontSize: 84,
          fontWeight: 700,
          color: COLORS.textPrimary,
          textAlign: "center",
          letterSpacing: -1,
        }}
      >
        {topCaption.text}
        {topCaption.accentText && (
          <span
            style={{ color: topCaption.accentColor ?? COLORS.accent }}
          >
            {topCaption.accentText}
          </span>
        )}
      </div>

      <div
        style={{
          opacity: boxProgress,
          transform: `scaleY(${0.6 + 0.4 * boxProgress})`,
          background: COLORS.codeBg,
          borderRadius: 24,
          border: `2px solid ${COLORS.codeBorder}`,
          padding: "56px 40px",
          boxShadow: `0 0 0 ${highlightPulse * 8}px rgba(249, 115, 22, ${highlightPulse * 0.35})`,
          overflow: "hidden",
        }}
      >
        <VisibleCode
          lines={lines}
          charsToShow={visibleChars}
          isTyping={isTyping}
          fontSize={fontSize}
        />
      </div>

      <div
        style={{
          opacity: captionBottomOpacity,
          transform: `scale(${captionBottomScale})`,
          fontFamily: FONTS.sans,
          fontSize: 88,
          fontWeight: 800,
          color: COLORS.cyan,
          textAlign: "center",
          letterSpacing: -1,
        }}
      >
        {bottomCaption.text}
        {bottomCaption.accentText && (
          <span
            style={{ color: bottomCaption.accentColor ?? COLORS.green }}
          >
            {bottomCaption.accentText}
          </span>
        )}
      </div>
    </AbsoluteFill>
  );
};
