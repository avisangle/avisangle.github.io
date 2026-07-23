import {
  AbsoluteFill,
  Easing,
  Img,
  Loop,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { COLORS, EASING, FONTS } from "../lib/theme";

export type DemoBlockProps = {
  src?: string;
  kind?: "video" | "image";
  topLabel?: string;
  caption?: string;
  loop?: boolean;
  muted?: boolean;
  /**
   * Number of frames to loop a video clip over. Required when `loop` is true
   * because Remotion's <Loop> needs an explicit child duration. Defaults to
   * the scene's full duration if not set, but providing the source clip's
   * actual frame count is better — it lets <Loop> know when to restart.
   */
  loopDurationInFrames?: number;
};

export const DemoBlock: React.FC<DemoBlockProps> = ({
  src,
  kind = "image",
  topLabel,
  caption,
  loop = true,
  muted = true,
  loopDurationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Frame fades + scales in from 92% so the cut to a demo doesn't feel like
  // a hard slam.
  const opacity = interpolate(frame, [0, 0.4 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, 0.5 * fps], [0.92, 1], {
    easing: Easing.bezier(...EASING.smooth),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const labelOpacity = interpolate(frame, [0.3 * fps, 0.8 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const captionOpacity = interpolate(frame, [0.6 * fps, 1.1 * fps], [0, 1], {
    easing: Easing.bezier(...EASING.enter),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const resolved = src ? staticFile(src) : null;

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          width: "92%",
          height: "82%",
          borderRadius: 24,
          overflow: "hidden",
          border: `2px solid ${COLORS.codeBorder}`,
          background: COLORS.codeBg,
          position: "relative",
          boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
        }}
      >
        {resolved && kind === "video" && (
          loop && loopDurationInFrames ? (
            <Loop durationInFrames={loopDurationInFrames}>
              <OffthreadVideo
                src={resolved}
                muted={muted}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Loop>
          ) : (
            <OffthreadVideo
              src={resolved}
              muted={muted}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )
        )}
        {resolved && kind === "image" && (
          <Img
            src={resolved}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        {!resolved && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONTS.mono,
              fontSize: 48,
              color: COLORS.textDim,
            }}
          >
            (demo source not set)
          </div>
        )}
      </div>

      {topLabel && (
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 80,
            opacity: labelOpacity,
            fontFamily: FONTS.mono,
            fontWeight: 600,
            fontSize: 28,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: COLORS.accent,
            padding: "10px 20px",
            border: `2px solid ${COLORS.accent}`,
            borderRadius: 999,
            background: "rgba(10,10,10,0.7)",
          }}
        >
          {topLabel}
        </div>
      )}

      {caption && (
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            opacity: captionOpacity,
            fontFamily: FONTS.sans,
            fontWeight: 700,
            fontSize: 44,
            color: COLORS.textPrimary,
            lineHeight: 1.2,
            textShadow: "0 2px 12px rgba(0,0,0,0.85)",
          }}
        >
          {caption}
        </div>
      )}
    </AbsoluteFill>
  );
};
