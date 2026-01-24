# Architectural Decisions

## 2026-01-24

### Remove theme-compare page from production
- **Decision:** Completely delete theme-compare page from codebase (Option 2)
- **Reasoning:** Internal development tool not needed in production
- **Alternative:** Keep in codebase but exclude from build (Option 1 - rejected)
- **Impact:** Cleaner codebase, no accidental exposure of dev tools
- **Implementation:** Deleted `src/app/theme-compare/page.tsx`, removed from sitemap
