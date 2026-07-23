import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

const jakarta = loadJakarta("normal", {
  weights: ["500", "700", "800"],
  subsets: ["latin"],
});
const mono = loadMono("normal", {
  weights: ["400", "600"],
  subsets: ["latin"],
});

export const FONTS = {
  sans: jakarta.fontFamily,
  mono: mono.fontFamily,
} as const;

export const FPS = 30;

// Short-form (Shorts) canvas. Vertical 9:16, 30fps.
export const SHORT_WIDTH = 1080;
export const SHORT_HEIGHT = 1920;

// Long-form (standard YouTube) canvas. Horizontal 16:9, 30fps.
export const LONG_WIDTH = 1920;
export const LONG_HEIGHT = 1080;

// Safe-area pixels reserved at the bottom of the 1080×1920 frame for
// (1) the captions strip and (2) the YouTube Shorts UI overlay. Scene
// content must not enter this zone — compositions wrap their Series in
// a container that bounds the scene canvas to (frameHeight - SAFE_AREA_BOTTOM).
export const SAFE_AREA_BOTTOM = 400;

// Long-form has no Shorts UI overlay; only need clearance for captions.
export const LONG_SAFE_AREA_BOTTOM = 160;

// Frames at the start of the video that hold the thumbnail PNG full-frame.
// Lets the YouTube mobile Studio frame picker snap to the thumbnail design
// without a separate file upload. 15 frames @ 30fps = 0.5s.
export const THUMBNAIL_HOLD_FRAMES = 15;

// Long-form holds the thumbnail longer (2s) so the YouTube watch-page
// pre-roll preview lands on the designed thumbnail frame.
export const LONG_THUMBNAIL_HOLD_FRAMES = 60;

export const COLORS = {
  bg: "#0a0a0a",
  bgRaised: "#161616",
  textPrimary: "#f5f5f5",
  textMuted: "#737373",
  textDim: "#404040",
  accent: "#f97316",
  accentSoft: "#fb923c",
  cyan: "#22d3ee",
  green: "#22c55e",
  yellow: "#facc15",
  purple: "#c084fc",
  red: "#ef4444",
  codeBg: "#0d0d0d",
  codeBorder: "#262626",
} as const;

export const EASING = {
  enter: [0.16, 1, 0.3, 1] as const,
  smooth: [0.45, 0, 0.55, 1] as const,
  pop: [0.34, 1.56, 0.64, 1] as const,
  exit: [0.64, 0, 0.78, 0] as const,
};
