# Progress Log

## 2026-04-18

### Published Blog Post: Getting Started with the ant CLI
- Published "Getting Started with the ant CLI: Deploy Claude Agents" at /blog/ant-cli-getting-started
- ~2800 words, 12 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage, HowTo
- Covers: install, core concepts, first agent walkthrough, YAML version control, CLI vs curl vs SDK, scripting patterns
- Updated blog index (featured + grid card), sitemap, llms.txt
- First dedicated ant CLI tutorial on the internet - zero competition

## 2026-04-16

### Content Brief: Claude Code Cost Tracking
- Completed topic research for "claude-code-cost-tracking"
- Search demand: HIGH - active Reddit discussions, 4.8k+ star third-party tools
- Competition: moderate - no single guide covers full tracking + optimization stack
- Saved content brief to `.claude/content-briefs/claude-code-cost-tracking.md`

### Published Blog Post: Claude Code Cost Tracking
- Published "Claude Code Cost Tracking: Monitor and Cut Your Spending" at /blog/claude-code-cost-tracking
- ~3000 words, 12 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage
- Updated blog index (featured + grid card), sitemap, llms.txt
- Build passes clean

### GSC Ranking Review (Baseline Run)
- Run date: 2026-04-16
- Period: 2026-04-06 to 2026-04-13 (last 7 days)
- Snapshot saved: .claude/gsc-snapshots/2026-04-16.json
- Key findings:
  - 16 clicks / 2,283 impressions / 0.7% CTR / avg position 10.0 across the site
  - /blog/claude-managed-agents is the top earner (14 clicks, position 6.1, 802 impressions)
  - /blog/gemma-4-models-guide has massive opportunity: 1,284 impressions at position 11.3 but 0 clicks (just off page 1)
  - Claude Mythos Preview sits at position 10.8 - one nudge from page 1
  - No prior snapshot available - this is the baseline for future trend analysis

### New Custom Command: /review-gsc-ranking
- `/review-gsc-ranking [days]` - fetches GSC data via `scripts/search_console_report.py --json`, compares against a prior local snapshot, flags pages/queries with ranking drops, identifies page-2 opportunities
- Snapshot-based trend analysis: saves to `.claude/gsc-snapshots/YYYY-MM-DD.json`, compares against most recent snapshot >=7 days old
- First run establishes baseline (no comparison possible). Subsequent runs show trends.
- Auto-prunes snapshots older than 90 days
- Gitignored `.claude/gsc-snapshots/` (local time-series, not repo content)
- Suggested cadence: weekly via `/loop 7d /review-gsc-ranking` or manual Monday morning run

### Remote Triggers Scheduled
- `broken-link-checker` (trig_01VicjtAw1vn4ThQPgEdWzDd) - daily 10 PM IST, scans blog posts for broken external links, opens PR with fixes
- `trending-topic-scout` (trig_012X4h3xgiVVg4ZFLvRu2X3N) - Fridays 6 PM IST, detects trending topics and appends to `.claude/topic-suggestions.md`, points to `/research-topic` as next step (not a full brief)
- Both use claude-opus-4-6 in Default environment
- Manage at https://claude.ai/code/scheduled

### New Custom Commands: /promote-blogpost + /post-blogpost
- `/promote-blogpost <slug>` - drafts social media posts in `src/app/blog/<slug>/social/` for 6 platforms (Twitter, LinkedIn, Reddit, Dev.to, Hashnode, HN)
- `/post-blogpost <slug> <platform>` - validates draft, shows preview, gets explicit confirmation, then posts via existing `post_to_*.py` scripts
- Safety: dry-run validation, explicit y/N confirmation before public posting, POSTED.md audit log
- Dev.to/Hashnode drafts default to PUBLISHED: false (creates draft on platform for manual publish)
- Updated `/write-blogpost` with Phase 6 to suggest `/promote-blogpost <slug>` after publishing
- Designed for staggered posting (Day 0/1/2) via separate invocations rather than same-day blast

## 2026-04-05

### Blog Content Pipeline Setup
- Created `.claude/blog-guidelines.md` — comprehensive rules for GEO/AEO-optimized blog posts
- Created `/research-topic` custom command — researches and validates blog topics, produces content briefs
- Created `/write-blogpost` custom command — writes full blog posts following guidelines, handles all integration
- Created `.claude/content-briefs/` directory for research output storage
- Published blog post: "How I Write CLAUDE.md Files That Actually Work (2026)" at /blog/claude-md-guide
- Created public/llms.txt for AI crawler optimization (ChatGPT, Claude, Perplexity)
- Based on Neil Patel's latest AI SEO research: brand citations > backlinks, FAQ schema = 3.2x AI Overview visibility
- Created `.claude/content-pipeline.md` — 10-post strategic pipeline with publishing schedule, cross-linking strategy, and competitor gap analysis

## 2026-01-24

### Sitemap & SEO Fixes
- Fixed sitemap.xml routes to match Next.js structure
- Updated all routes: `.html` extensions removed
- `/blog.html` → `/blog`
- `/blog-method-crm-mcp.html` → `/blog/method-crm-mcp`
- `/project-*.html` → `/projects/*`
- Removed theme-compare page from codebase
- Cleaned up robots.txt (removed old template reference)
- Updated all sitemap dates to 2026-01-24
- **Commits:** 09567bd, 0171660

### Sitemap Deployment Fix
- Moved sitemap.xml and robots.txt to public/ folder
- Next.js serves static files from public/ folder
- Files now accessible at root URL after build
- **Commit:** 3e88a83
