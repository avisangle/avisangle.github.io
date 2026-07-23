import {
  AbsoluteFill,
  Sequence,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Audio } from "@remotion/media";
import type { Caption } from "@remotion/captions";
import { ChapterCard } from "../scenes/ChapterCard";
import { ComparisonSplit } from "../scenes/ComparisonSplit";
import { DemoBlock } from "../scenes/DemoBlock";
import { NewsPegHeadline } from "../scenes/NewsPegHeadline";
import { Outro } from "../scenes/Outro";
import { QuoteCard } from "../scenes/QuoteCard";
import { RecapCard } from "../scenes/RecapCard";
import { CaptionStrip } from "../scenes/CaptionStrip";
import { ThumbnailHold } from "../scenes/ThumbnailHold";
import { COLORS, LONG_SAFE_AREA_BOTTOM } from "../lib/theme";
import type { VideoFormat } from "../Root";
import scenesData from "../../public/voiceover/RegressionProofLongForm/scenes.json";

export type RegressionProofLongFormProps = {
  format?: VideoFormat;
  sceneDurations: number[];
  audioOffsetFrames: number;
  hideCaptions?: boolean;
  thumbnailSrc?: string;
  thumbnailHoldFrames?: number;
};

const VO_BASE = "voiceover/RegressionProofLongForm";
const MASTER_AUDIO = `${VO_BASE}/master.mp3`;
const IS_STUB = (scenesData as { stub?: boolean }).stub === true;

// ---- Scene 1: NewsPegHeadline ---------------------------------------------

const newsPegProps = {
  source: "anthropic.com/news",
  headline: "Claude Code 2.1 — patched four agentic regressions",
  date: "2026-04-29",
  tagPill: { label: "Breaking", color: COLORS.red },
};

// ---- Chapter cards --------------------------------------------------------

const chapter1Props = {
  index: "01",
  title: "What broke",
  subtitle: "Seven weeks of silent regressions before anyone noticed.",
};

const chapter2Props = {
  index: "02",
  title: "The catch",
  subtitle: "Why their evals never fired.",
  accentColor: COLORS.red,
};

const chapter3Props = {
  index: "03",
  title: "The fix",
  subtitle: "Three lines of config that catch every future one.",
  accentColor: COLORS.green,
};

// ---- Scene 3: DemoBlock placeholder (terminal recording goes here) --------

const demoProps = {
  topLabel: "Live",
  caption:
    "50× quota burn — same prompt, two CLI versions, side by side.",
};

// ---- Scene 5: ComparisonSplit ---------------------------------------------

const compareProps = {
  header: "Their evals vs your config",
  left: {
    label: "Their evals",
    body: "Caught zero of four regressions in pre-release",
    color: COLORS.red,
    badge: "0 / 4",
  },
  right: {
    label: "Your config",
    body: "Replays five golden prompts every session",
    color: COLORS.green,
    badge: "5 / 5",
  },
  verdict: { text: "your config wins", color: COLORS.green },
};

// ---- Scene 7: QuoteCard ---------------------------------------------------

const quoteProps = {
  quote: "Anthropic will ship the next regression. Your config doesn't have to.",
  attribution: "— the whole point of this video",
  source: "regression-proofing claude code workflows",
};

// ---- Scene 8: RecapCard ---------------------------------------------------

const recapProps = {
  heading: "The recap",
  bullets: [
    "Pin the CLI to a verified release",
    "Lock the version line in npmrc",
    "Replay golden prompts on every session",
  ],
  takeaway: "Three lines of config — Anthropic's regressions stop at your terminal.",
};

// ---- Scene 9: Outro -------------------------------------------------------

const outroProps = {
  bigNumber: "3",
  bigNumberSize: 380,
  bigNumberColor: COLORS.cyan,
  subhead: "lines",
  caption: "pin · lock · test",
  url: "avinashsangle.com",
  ctaLabel: "link in description",
};

// ---- Scene registry -------------------------------------------------------

const SCENES = [
  { id: "scene-1-news-peg", render: () => <NewsPegHeadline {...newsPegProps} /> },
  { id: "scene-2-chapter-1", render: () => <ChapterCard {...chapter1Props} /> },
  { id: "scene-3-demo", render: () => <DemoBlock {...demoProps} /> },
  { id: "scene-4-chapter-2", render: () => <ChapterCard {...chapter2Props} /> },
  { id: "scene-5-compare", render: () => <ComparisonSplit {...compareProps} /> },
  { id: "scene-6-chapter-3", render: () => <ChapterCard {...chapter3Props} /> },
  { id: "scene-7-quote", render: () => <QuoteCard {...quoteProps} /> },
  { id: "scene-8-recap", render: () => <RecapCard {...recapProps} /> },
  { id: "scene-9-outro", render: () => <Outro {...outroProps} /> },
] as const;

export const RegressionProofLongForm: React.FC<
  RegressionProofLongFormProps
> = ({
  sceneDurations,
  audioOffsetFrames,
  hideCaptions = false,
  thumbnailSrc,
  thumbnailHoldFrames = 0,
}) => {
  const { width, height } = useVideoConfig();
  // Long-form has its own narrower bottom safe area (no Shorts UI overlay).
  // Detect from canvas aspect — short-form passes through to the full
  // SAFE_AREA_BOTTOM via the legacy comps; this comp only runs at 16:9.
  const isLong = width > height;
  const safeBottom = isLong ? LONG_SAFE_AREA_BOTTOM : LONG_SAFE_AREA_BOTTOM;
  const showThumbnailHold = thumbnailSrc && thumbnailHoldFrames > 0;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      {showThumbnailHold && (
        <Sequence durationInFrames={thumbnailHoldFrames} name="thumbnail-hold">
          <ThumbnailHold src={thumbnailSrc} />
        </Sequence>
      )}
      <Sequence
        from={showThumbnailHold ? thumbnailHoldFrames : 0}
        name="scenes"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: safeBottom,
          }}
        >
          <Series>
            {SCENES.map((s, i) => (
              <Series.Sequence
                key={s.id}
                durationInFrames={sceneDurations[i]}
                name={s.id}
              >
                {s.render()}
              </Series.Sequence>
            ))}
          </Series>
        </div>
      </Sequence>
      {!IS_STUB && (
        <Sequence from={audioOffsetFrames}>
          <Audio src={staticFile(MASTER_AUDIO)} />
          {!hideCaptions && (
            <CaptionStrip
              captions={[] as Caption[]}
              audioDurationSeconds={
                (scenesData as { audioDurationSeconds: number })
                  .audioDurationSeconds
              }
            />
          )}
        </Sequence>
      )}
    </AbsoluteFill>
  );
};
