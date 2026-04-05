# Architectural Decisions

## 2026-04-05

### Two-command blog pipeline (research-topic + write-blogpost)
- **Decision:** Split blog creation into two custom commands instead of one
- **Reasoning:** Research and writing are independent tasks; separation allows reviewing the brief before committing to writing, enables different agents/sessions for each phase, and content briefs persist for reference
- **Content briefs stored at:** `.claude/content-briefs/[slug].md`
- **Guidelines centralized at:** `.claude/blog-guidelines.md` (both commands reference this)
- **GEO/AEO strategy:** FAQ schema (3.2x AI Overview lift), direct-answer-first structure, stats every 150-200 words, HowTo schema for tutorials

## 2026-01-24

### Remove theme-compare page from production
- **Decision:** Completely delete theme-compare page from codebase (Option 2)
- **Reasoning:** Internal development tool not needed in production
- **Alternative:** Keep in codebase but exclude from build (Option 1 - rejected)
- **Impact:** Cleaner codebase, no accidental exposure of dev tools
- **Implementation:** Deleted `src/app/theme-compare/page.tsx`, removed from sitemap
