import { AbsoluteFill, Sequence, Series, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { TitleCard } from "../scenes/TitleCard";
import { BulletReveal } from "../scenes/BulletReveal";
import { CodeBlock } from "../scenes/CodeBlock";
import { CostChart } from "../scenes/CostChart";
import { Outro } from "../scenes/Outro";
import { CaptionStrip } from "../scenes/CaptionStrip";
import { ThumbnailHold } from "../scenes/ThumbnailHold";
import { COLORS, SAFE_AREA_BOTTOM } from "../lib/theme";
import captionsData from "../../public/voiceover/ClaudeCodeCostTracking/captions.json";
import scenesData from "../../public/voiceover/ClaudeCodeCostTracking/scenes.json";

export type ClaudeCodeCostTrackingProps = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/ClaudeCodeCostTracking";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;

const SCENES = [
  { id: "scene-1-title", Component: TitleCard },
  { id: "scene-2-bullets", Component: BulletReveal },
  { id: "scene-3-code", Component: CodeBlock },
  { id: "scene-4-chart", Component: CostChart },
  { id: "scene-5-outro", Component: Outro },
] as const;

export const ClaudeCodeCostTracking: React.FC<ClaudeCodeCostTrackingProps> = ({
  sceneDurations,
  audioOffsetFrames,
  thumbnailSrc,
  thumbnailHoldFrames = 0,
}) => {
  const showThumbnailHold = thumbnailSrc && thumbnailHoldFrames > 0;
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {/* Thumbnail burn-in — full frame, above safe-area wrapper. */}
      {showThumbnailHold && (
        <Sequence durationInFrames={thumbnailHoldFrames} name="thumbnail-hold">
          <ThumbnailHold src={thumbnailSrc} />
        </Sequence>
      )}
      {/* Layer 1: scene canvas — bounded above the caption + Shorts UI safe zone. */}
      <Sequence from={showThumbnailHold ? thumbnailHoldFrames : 0} name="scenes">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: SAFE_AREA_BOTTOM,
          }}
        >
          <Series>
            {SCENES.map((s, i) => {
              const Scene = s.Component;
              return (
                <Series.Sequence
                  key={s.id}
                  durationInFrames={sceneDurations[i]}
                  name={s.id}
                >
                  <Scene />
                </Series.Sequence>
              );
            })}
          </Series>
        </div>
      </Sequence>
      {/* Layer 2: master VO + captions, both offset together so caption
          word-highlight stays in sync with audio. */}
      <Sequence from={audioOffsetFrames}>
        <Audio src={staticFile(MASTER_AUDIO)} />
        <CaptionStrip
          captions={captionsData as Caption[]}
          audioDurationSeconds={scenesData.audioDurationSeconds}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
