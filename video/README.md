# Blog Video Pipeline

Programmatic 9:16 explainer videos to augment blog posts at avinashsangle.com.
Built with Remotion, voiced over, rendered to MP4 for YouTube Shorts.

## Stack

- Remotion 4.0.451 (React-based programmatic video)
- `@remotion/google-fonts` — Plus Jakarta Sans + IBM Plex Mono (matches blog brand)
- 9:16 1080×1920 @ 30fps for YouTube Shorts

## Structure

```
video/
├── src/
│   ├── compositions/                  # one per blog post
│   │   └── ClaudeCodeCostTracking.tsx
│   ├── scenes/                        # reusable scene templates
│   │   ├── TitleCard.tsx
│   │   ├── BulletReveal.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── CostChart.tsx
│   │   └── Outro.tsx
│   ├── lib/theme.ts                   # colors, easing, fonts, fps
│   └── Root.tsx                       # composition registry
├── posts/                             # per-post script + assets
│   └── claude-code-cost-tracking/
│       ├── script.md                  # spoken script with [scene-N] markers
│       ├── vo/                        # ElevenLabs MP3s or recorded VO (gitignored)
│       └── assets/                    # custom images per post
└── public/                            # static files referenced by staticFile()
```

## Commands

```bash
npm install
npm run dev                                          # Remotion Studio (preview) at http://localhost:3000
npm run still -- ClaudeCodeCostTracking --frame=30   # render single frame for thumbnail check
npm run render -- ClaudeCodeCostTracking out.mp4     # render full 60s MP4
```

## Current pilot: ClaudeCodeCostTracking

60s 9:16 Short for [`/blog/claude-code-cost-tracking`](../src/app/blog/claude-code-cost-tracking/).

Timeline:
1. **TitleCard** (5s) — hook ("you don't know what you're spending")
2. **BulletReveal** (15s) — `/cost`, `/stats`, `/usage` commands + log path
3. **CodeBlock** (12s) — `export MAX_THINKING_TOKENS=10000` typewriter
4. **CostChart** (16s) — before/after bars, ↓50% callout
5. **Outro** (12s) — "7 tactics" + brand URL + "link in description"

## Visual reference

Aiming for the intersection of:
- **Aarthificial** — code-driven, smooth springs, one focal element at a time
- **ByteByteGo** — color-blocked clarity, deliberate sequencing
- **3Blue1Brown** — smooth pacing, morphing values

## V0 limitations (intentional)

- **Hardcoded scene durations.** Next iteration adds `calculateMetadata` reading per-scene VO MP3 durations from `public/voiceover/<comp-id>/<scene>.mp3`. See the Remotion `voiceover` rule.
- **No burned-in captions yet.** YouTube auto-captions for now; revisit after VO is wired.
- **Hand-styled syntax highlighting** in CodeBlock — fine for one env var. Swap to Shiki when scene shows multi-line code.
- **No background music** — add ducked music bed once VO is locked.

## Cross-referencing the blog

Once published to YouTube:
1. Embed YouTube video near top of `src/app/blog/claude-code-cost-tracking/page.tsx` (use a lite-yt-embed component for performance).
2. Add `VideoObject` JSON-LD schema on the blog page linking the YouTube URL.
3. YouTube description: link to canonical blog URL `https://avinashsangle.com/blog/claude-code-cost-tracking`.
4. Outro scene shows `avinashsangle.com` for brand reinforcement (people don't type long URLs from a Short).

## License note

Remotion is BUSL — free for personal use and companies under $1M ARR. Personal blog falls under that.
