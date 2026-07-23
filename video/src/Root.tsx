import "./index.css";
import { CalculateMetadataFunction, Composition } from "remotion";
import {
  ClaudeCodeCostTracking,
  ClaudeCodeCostTrackingProps,
} from "./compositions/ClaudeCodeCostTracking";
import {
  ClaudeManagedAgents,
  ClaudeManagedAgentsProps,
} from "./compositions/ClaudeManagedAgents";
import {
  ClaudeManagedAgentsOutcomes,
  ClaudeManagedAgentsOutcomesProps,
} from "./compositions/ClaudeManagedAgentsOutcomes";
import {
  WhatIsClaudeCode,
  WhatIsClaudeCodeProps,
} from "./compositions/WhatIsClaudeCode";
import {
  InstallClaudeCode,
  InstallClaudeCodeProps,
} from "./compositions/InstallClaudeCode";
import { PlanMode, PlanModeProps } from "./compositions/PlanMode";
import {
  RegressionProofClaudeCode,
  RegressionProofClaudeCodeProps,
} from "./compositions/RegressionProofClaudeCode";
import {
  RegressionProofLongForm,
  RegressionProofLongFormProps,
} from "./compositions/RegressionProofLongForm";
import {
  AntCliGettingStarted,
  AntCliGettingStartedProps,
} from "./compositions/AntCliGettingStarted";
import { Gemini35Flash, Gemini35FlashProps } from "./compositions/Gemini35Flash";
import {
  FPS,
  LONG_HEIGHT,
  LONG_THUMBNAIL_HOLD_FRAMES,
  LONG_WIDTH,
  SHORT_HEIGHT,
  SHORT_WIDTH,
  THUMBNAIL_HOLD_FRAMES,
} from "./lib/theme";
import costTrackingScenes from "../public/voiceover/ClaudeCodeCostTracking/scenes.json";
import managedAgentsScenes from "../public/voiceover/ClaudeManagedAgents/scenes.json";
import managedAgentsOutcomesScenes from "../public/voiceover/ClaudeManagedAgentsOutcomes/scenes.json";
import whatIsClaudeCodeScenes from "../public/voiceover/WhatIsClaudeCode/scenes.json";
import installClaudeCodeScenes from "../public/voiceover/InstallClaudeCode/scenes.json";
import planModeScenes from "../public/voiceover/PlanMode/scenes.json";
import regressionProofScenes from "../public/voiceover/RegressionProofClaudeCode/scenes.json";
import regressionProofLongFormScenes from "../public/voiceover/RegressionProofLongForm/scenes.json";
import antCliGettingStartedScenes from "../public/voiceover/AntCliGettingStarted/scenes.json";
import gemini35FlashScenes from "../public/voiceover/Gemini35Flash/scenes.json";

// Legacy export — kept so existing compositions that import { WIDTH, HEIGHT }
// from "../Root" (if any) continue to resolve to the Shorts canvas.
const WIDTH = SHORT_WIDTH;
const HEIGHT = SHORT_HEIGHT;

// Extra visual hold after the last word so the final phoneme isn't clipped
// at the composition cut. 18 frames at 30fps = 600ms.
const TAIL_PADDING_FRAMES = 18;

export type VideoFormat = "short" | "long";

type SceneEntry = { id: string; durationSeconds: number };
type ScenesFile = {
  audioOffsetFrames: number;
  audioDurationSeconds: number;
  scenes: SceneEntry[];
};

type CalcMetadataPropsBase = {
  sceneDurations: number[];
  audioOffsetFrames: number;
  thumbnailHoldFrames?: number;
  format?: VideoFormat;
};

const buildCalcMetadata = <P extends CalcMetadataPropsBase>(
  scenesData: ScenesFile,
): CalculateMetadataFunction<P> => {
  return ({ props }) => {
    const format: VideoFormat = props.format ?? "short";
    const defaultHold =
      format === "long" ? LONG_THUMBNAIL_HOLD_FRAMES : THUMBNAIL_HOLD_FRAMES;
    const baseAudioOffset = scenesData.audioOffsetFrames ?? 0;
    const holdFrames = props.thumbnailHoldFrames ?? defaultHold;
    const lastIdx = scenesData.scenes.length - 1;
    const sceneDurations = scenesData.scenes.map((s, i) => {
      const audioFrames = Math.ceil(s.durationSeconds * FPS);
      let dur = audioFrames;
      if (i === 0) dur += baseAudioOffset;
      if (i === lastIdx) dur += TAIL_PADDING_FRAMES;
      return dur;
    });
    const sceneSum = sceneDurations.reduce((sum, d) => sum + d, 0);
    const total = holdFrames + sceneSum;
    const audioOffsetFrames = holdFrames + baseAudioOffset;
    const width = format === "long" ? LONG_WIDTH : SHORT_WIDTH;
    const height = format === "long" ? LONG_HEIGHT : SHORT_HEIGHT;
    return {
      durationInFrames: total,
      width,
      height,
      props: {
        ...props,
        format,
        sceneDurations,
        audioOffsetFrames,
        thumbnailHoldFrames: holdFrames,
      } as P,
    };
  };
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ClaudeCodeCostTracking"
        component={ClaudeCodeCostTracking}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [120, 420, 270, 390, 240],
            audioOffsetFrames: 3,
            thumbnailSrc: "thumbnails/claude-code-cost-tracking.png",
          } satisfies ClaudeCodeCostTrackingProps
        }
        calculateMetadata={buildCalcMetadata<ClaudeCodeCostTrackingProps>(
          costTrackingScenes,
        )}
      />
      <Composition
        id="ClaudeManagedAgents"
        component={ClaudeManagedAgents}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [165, 450, 360, 480, 378],
            audioOffsetFrames: 15,
            thumbnailSrc: "thumbnails/claude-managed-agents.png",
          } satisfies ClaudeManagedAgentsProps
        }
        calculateMetadata={buildCalcMetadata<ClaudeManagedAgentsProps>(
          managedAgentsScenes,
        )}
      />
      <Composition
        id="ClaudeManagedAgentsOutcomes"
        component={ClaudeManagedAgentsOutcomes}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [181, 236, 374, 315, 392, 57],
            audioOffsetFrames: 0,
            thumbnailSrc: "thumbnails/claude-managed-agents-outcomes.png",
          } satisfies ClaudeManagedAgentsOutcomesProps
        }
        calculateMetadata={buildCalcMetadata<ClaudeManagedAgentsOutcomesProps>(
          managedAgentsOutcomesScenes,
        )}
      />
      <Composition
        id="WhatIsClaudeCode"
        component={WhatIsClaudeCode}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [150, 450, 450, 300, 450],
            audioOffsetFrames: 0,
            thumbnailSrc: "thumbnails/what-is-claude-code.png",
          } satisfies WhatIsClaudeCodeProps
        }
        calculateMetadata={buildCalcMetadata<WhatIsClaudeCodeProps>(
          whatIsClaudeCodeScenes,
        )}
      />
      <Composition
        id="InstallClaudeCode"
        component={InstallClaudeCode}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [150, 450, 450, 450, 300],
            audioOffsetFrames: 0,
            thumbnailSrc: "thumbnails/install-claude-code.png",
          } satisfies InstallClaudeCodeProps
        }
        calculateMetadata={buildCalcMetadata<InstallClaudeCodeProps>(
          installClaudeCodeScenes,
        )}
      />
      <Composition
        id="PlanMode"
        component={PlanMode}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [150, 450, 450, 450, 300],
            audioOffsetFrames: 0,
            thumbnailSrc: "thumbnails/plan-mode.png",
          } satisfies PlanModeProps
        }
        calculateMetadata={buildCalcMetadata<PlanModeProps>(planModeScenes)}
      />
      <Composition
        id="RegressionProofClaudeCode"
        component={RegressionProofClaudeCode}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [540, 300, 330, 480, 300],
            audioOffsetFrames: 0,
          } satisfies RegressionProofClaudeCodeProps
        }
        calculateMetadata={buildCalcMetadata<RegressionProofClaudeCodeProps>(
          regressionProofScenes,
        )}
      />
      <Composition
        id="RegressionProofLongForm"
        component={RegressionProofLongForm}
        durationInFrames={11100}
        fps={FPS}
        width={LONG_WIDTH}
        height={LONG_HEIGHT}
        defaultProps={
          {
            format: "long",
            sceneDurations: [900, 180, 2700, 180, 2100, 180, 1800, 1800, 1200],
            audioOffsetFrames: 0,
            thumbnailSrc: "thumbnails/regression-proof-long-form.png",
          } satisfies RegressionProofLongFormProps
        }
        calculateMetadata={buildCalcMetadata<RegressionProofLongFormProps>(
          regressionProofLongFormScenes,
        )}
      />
      <Composition
        id="AntCliGettingStarted"
        component={AntCliGettingStarted}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [180, 480, 480, 420, 240],
            audioOffsetFrames: 0,
          } satisfies AntCliGettingStartedProps
        }
        calculateMetadata={buildCalcMetadata<AntCliGettingStartedProps>(
          antCliGettingStartedScenes,
        )}
      />
      <Composition
        id="Gemini35Flash"
        component={Gemini35Flash}
        durationInFrames={1800}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={
          {
            sceneDurations: [180, 390, 420, 480, 420, 180],
            audioOffsetFrames: 0,
          } satisfies Gemini35FlashProps
        }
        calculateMetadata={buildCalcMetadata<Gemini35FlashProps>(
          gemini35FlashScenes,
        )}
      />
    </>
  );
};
