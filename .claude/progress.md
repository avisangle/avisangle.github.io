# Progress Log

## 2026-05-26

### Published Blog Post: /blog/qwen-code-getting-started
- Title: "Qwen Code CLI: Getting Started Guide for AI Coding 2026" (56 chars)
- Unique angle: post-2026-04-15 OAuth-shutdown reality (every competing guide still says "log in with browser"); three API-key paths (DashScope, OpenAI-compatible, self-host vLLM); side-by-side vs Claude Code + sunset Gemini CLI; non-interactive `qwen -p` GitHub Actions PR-summary recipe
- Schemas: TechArticle, BreadcrumbList, FAQPage (8 Q&As), HowTo (4 steps)
- Updated blog index (featured + first card), sitemap.ts, public/llms.txt
- Internal links: ant-cli-getting-started, gemini-cli-to-antigravity-cli-guide, gemini-3-5-flash-agentic-coding-guide, hardening-ai-agents-cicd-prompt-injection
- Build: pending verification
- Followup: run /promote-blogpost qwen-code-getting-started

## 2026-05-25

### Published Blog Post: /blog/gemini-3-5-flash-agentic-coding-guide
- Title: "Gemini 3.5 Flash for Agentic Coding: A Claude Coder's Guide" (59 chars)
- News peg: Google I/O 2026 May 19 announcement; Gemini 3.5 Flash GA on launch day; first Flash-tier model to beat the prior Pro tier on agent benchmarks (76.2% Terminal-Bench 2.1, 83.6% MCP Atlas)
- Unique angle: written for Claude Code users deciding when to route subtasks to Flash (not a Gemini-native guide); cost-per-task truth (Simon Willison's $1,552 vs $892 number; NxCode's 9x eval cost; GitHub Copilot 14x multiplier) + the thinking_level: medium silent-default trap explained with a before/after Python diff + a six-row routing matrix + three concrete routing mechanisms (OpenRouter, custom MCP server, Antigravity CLI) + a working 40-line Python MCP agent
- Schemas: TechArticle, BreadcrumbList, FAQPage (10 Q&As), HowTo (5-step MCP agent build)
- Updated blog index (featured + first card), sitemap.ts, public/llms.txt
- Internal links: gemini-cli-to-antigravity-cli-guide, claude-code-cost-tracking, mcp-code-execution-pattern, claude-managed-agents-outcomes, ant-cli-getting-started, gemma-4-models-guide, claude-md-guide
- Build: pending verification
- Followup: run /promote-blogpost gemini-3-5-flash-agentic-coding-guide; track GSC for "gemini 3.5 flash vs claude code", "gemini 3.5 flash thinking_level", and "gemini 3.5 flash mcp agent" queries

## 2026-05-21

### Published Blog Post: /blog/gemini-cli-to-antigravity-cli-guide
- Title: "Gemini CLI to Antigravity CLI: Migration Guide & Alternatives" (61 chars)
- News peg: Google I/O 2026 May 19 announcement; Gemini CLI free/Pro/Ultra cut off June 18, 2026; replacement is closed-source Antigravity CLI (`agy`, Go binary)
- Unique angle: combined mechanical migration + decision framework + rate-limit math (1,000/day to 4-5 turns/week per Discussion #27274) + four real alternatives (Claude Code, Codex CLI, paid Gemini API, OpenGravity) + 30-day countdown plan
- Schemas: TechArticle, BreadcrumbList, FAQPage (10 Q&As), HowTo (7-step migration)
- Updated blog index (featured + first card), sitemap.ts, public/llms.txt
- Build: pending verification
- Followup: run /promote-blogpost gemini-cli-to-antigravity-cli-guide; track GSC for "gemini cli shutdown" and "antigravity cli migration" queries

## 2026-05-17

### Refreshed Project Page: /projects/jenkins-mcp
- Goal: push "jenkins mcp server" (pos 14.7) toward page 1 - identified as a top page-2 opportunity in the 2026-05-16 GSC review
- Added a visible FAQ section with H2 "Jenkins MCP Server FAQ" and four Q&As (what is it, how does it work, Claude Code integration, open source/repo link) - puts the exact target phrase in semantically heavy positions and answers questions the Google SERP is already serving impressions for
- Imported the Accordion component for the FAQ block
- Bumped lastModified to 2026-05-17 in both src/app/sitemap.ts and public/sitemap.xml
- Build: clean
- Known gap: project page should also have BreadcrumbList + FAQPage JSON-LD schemas per .claude/CLAUDE.md standards, but a security hook flagged the JSON-LD injection pattern (project-standard pattern, used across all blog posts) - left out for now, can re-attempt later
- Followup: re-check this query's position in 14 days via /review-gsc-ranking

### Refreshed Blog Post: /blog/claude-managed-agents
- Refresh prompted by GSC review on 2026-05-16: post dropped from pos 2.2 (17 clicks) to gone-from-top-15 (3 clicks) on "claude managed agents vs claude agent sdk" despite stable rank around 6.5
- Diagnosed cause: competitor saturation (WaveSpeed, BSWEN, Momentic, Verdent, multiple Medium posts in April 2026) + topical fragmentation with newer claude-managed-agents-outcomes post
- Decision: refresh existing post rather than write a new one to avoid further cannibalization
- Changes: bumped dateModified to 2026-05-17 (OG + TechArticle + sitemap.ts + public/sitemap.xml); added "first 50 hours/day free" pricing detail to TL;DR and pricing section; rewrote FAQ #3 ("difference between Managed Agents and Agent SDK") with explicit pricing + hybrid framing to mirror the lost query; added two new FAQ entries ("When should I use Managed Agents instead of Agent SDK?" and "Can I migrate from Managed Agents to Agent SDK later?"); added "Going deeper" callout linking forward to claude-managed-agents-outcomes to signal parent/child rather than duplicate
- Brief saved at: .claude/content-briefs/claude-managed-agents-REFRESH.md
- Build: clean, no errors or warnings
- Followup: re-run /review-gsc-ranking in 14 days to verify position + click recovery on the target query

## 2026-05-16

### GSC Ranking Review
- Run date: 2026-05-16
- Period: last 28 days (2026-04-15 to 2026-05-13)
- Snapshot saved: .claude/gsc-snapshots/2026-05-16.json
- Key findings: Impressions up 65% (6.7k → 11.1k) but clicks down 4 (31 → 27). /blog/claude-managed-agents lost 14 clicks (17 → 3) despite stable position 6.5; suspected CTR collapse on the "vs claude agent sdk" query. /blog/gemma-4-models-guide and /blog/claude-code-security-review-github-actions both gaining impressions fast but converting poorly (CTR <0.2%).

## 2026-05-14

### Published Blog Post: OpenAI Codex Security GitHub Setup Guide
- Published "OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough" at /blog/codex-security-github-setup
- ~2,900 words, 12 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage, HowTo
- News hook: OpenAI Daybreak launch (May 11, 2026) + Google's first confirmed in-the-wild AI zero-day disclosed same day
- Cross-vendor pairing with the existing Claude Code Security Review post creates a deliberate content cluster
- Unique angles: naming-collision clarity (Codex Security vs Codex CLI vs codex-action), worked threat-model example, sandbox-validation benchmark (74% TPR vs Semgrep 20%, Snyk 28%), honest DAST gap coverage, $0.02-per-1K-LOC cost math
- Updated blog index (featured + grid card + JSON-LD), sitemap, llms.txt
- Brief: .claude/content-briefs/codex-security-github-setup.md
- Followup: `/promote-blogpost codex-security-github-setup`

## 2026-05-12

### Published Blog Post: Claude Managed Agents Outcomes
- Published "Claude Managed Agents Outcomes: Auto-Grading Agent Work" at /blog/claude-managed-agents-outcomes
- ~3,000 words, 13 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage
- News hook: Anthropic launched Outcomes (alongside dreaming + multiagent orchestration) on May 6, 2026 in public beta
- Covers: feature definition, grader flow + benchmark numbers (+10pp overall, +10.1% pptx, +8.4% docx), rubric anti-patterns and bootstrap trick, full Python code walkthrough (environment + writer agent + user.define_outcome event), five-state result table (satisfied, needs_revision, max_iterations_reached, failed, interrupted), stream-handling code, max_iterations tuning rule (same-failures-each-pass = rubric problem; converging-failures = raise cap), cost math (no per-outcome fee, iteration count drives bill against $0.08/session-hour), Outcomes vs LLM-as-judge category vs Codex /goal
- Unique angle: first practitioner guide that ties together the API surface, the result-state table, rubric anti-patterns, and the cost math. Existing coverage is split between Anthropic's reference docs, the cookbook recipe, and news posts that announce but don't explain
- Updated blog index (featured + grid card + JSON-LD), sitemap, llms.txt
- Brief: .claude/content-briefs/claude-managed-agents-outcomes.md
- Followup: `/promote-blogpost claude-managed-agents-outcomes`

## 2026-05-03

### Published Blog Post: Running claude ultrareview in CI/CD
- Published "Running claude ultrareview in CI/CD: GitHub Actions Guide" at /blog/ultrareview-ci-cd-pipelines
- ~3,000 words, 12 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage
- News hook: Claude Code 2.1.120 (April 28, 2026) added `claude ultrareview [target]` non-interactive subcommand. Plus April 27 GitHub Copilot Actions-minutes billing change taking effect June 1
- Covers: subcommand spec + flags + exit codes, Claude.ai OAuth token gotcha (ANTHROPIC_API_KEY rejected), minimum viable GitHub Actions workflow, jq-based PR comment poster, cost model + 5 frequency guards, comparison vs managed Code Review product, GitLab CI equivalent, June 1 Copilot billing context, 12-item hardening checklist
- Unique angle: first practitioner guide for the new CLI subcommand. Existing 8+ ultrareview articles all cover the interactive /ultrareview only and explicitly state CI integration is unsupported (now obsolete). Documents the OAuth-only auth surface that blocks most first attempts
- Original code: full GitHub Actions workflow YAML, jq comment poster bash script, GitLab CI equivalent, frequency-guard YAML
- Updated blog index (featured + grid card + JSON-LD), sitemap, llms.txt
- Followup: `/promote-blogpost ultrareview-ci-cd-pipelines`

## 2026-04-29

### GSC Ranking Review
- Run date: 2026-04-29
- Period: 2026-03-29 to 2026-04-26 (last 28 days)
- Snapshot saved: .claude/gsc-snapshots/2026-04-29.json
- Prior snapshot: 2026-04-18 (11 days old; Apr-28 was only 1 day old, below 7-day threshold)
- Key findings: 24-hour delta vs yesterday is essentially nil (clicks flat at 31, position flat at 9.6, +215 impressions). vs Apr-18 baseline: clicks +55%, impressions +137%, position improved 1.0pt. /projects/jenkins-chatbot now flagged AT RISK - position slipped Apr-18 13.2 → today 15.7 (+2.5 = trips skill threshold). /blog/claude-mythos-preview crossed onto page 1 (10.0 → 9.8). Page-2 opportunities unchanged from yesterday: gemma E4B query (pos 10.6) and jenkins-mcp queries (pos 17-20).

## 2026-04-28

### GSC Ranking Review
- Run date: 2026-04-28
- Period: 2026-03-28 to 2026-04-25 (last 28 days)
- Snapshot saved: .claude/gsc-snapshots/2026-04-28.json
- Prior snapshot: 2026-04-18 (10 days old)
- Key findings: Site clicks +55% (20 → 31), impressions +129% (2,860 → 6,550), avg position improved 1.0pt to 9.6. /blog/gemma-4-models-guide jumped from 1,590 → 3,909 impressions and pos 11.4 → 10.4 - still the biggest page-2 opportunity. 3 new posts now in top pages (security-review, ant-cli, cost-tracking). /blog/claude-managed-agents stable at 17c/pos 6.1. Trailing-slash duplicate on /blog/clawdbot-guide still present (pos 13.9 vs 22.2). No pages dropping.

### Published Blog Post: Regression-Proof Claude Code Workflows
- Published "Regression-Proof Claude Code Workflows: Pin, Lock, Test" at /blog/regression-proofing-claude-code-workflows
- ~3,000 words, 12 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage
- News hook: Anthropic April 23 postmortem (3 wrapper regressions over 7 weeks) + April 24 v2.1.119/v2.1.120 incident (8 community-filed regressions in 24h)
- Covers: postmortem recap, v2.1.119 incident, npm pinning + ~/.npmrc lock, effortLevel + CLAUDE_CODE_EFFORT_LEVEL precedence, availableModels + modelOverrides for Bedrock, Stop-hook canary with full Python script, 4-fixture suite, 5-step rollback runbook, residual risk
- Unique angle: assembled defense layers (CLI pin + effort lock + model allowlist + Stop hook + fixture suite + rollback) - nobody else combines all five
- Original code: 35-line check-regression.py Stop-hook canary
- Updated blog index (featured + grid card + JSON-LD), sitemap, llms.txt
- Followup: `/promote-blogpost regression-proofing-claude-code-workflows`

### Content Brief: Regression-Proofing Your Claude Code Workflows
- PR #20 (topic suggestion) merged on remote; pulled.
- Produced content brief at `.claude/content-briefs/regression-proofing-claude-code-workflows.md`
- News hook: Anthropic April 23 postmortem (3 wrapper regressions over 7 weeks: reasoning-effort downgrade, thinking-cache `clear_thinking_20251015` bug, system-prompt verbosity cap) + the v2.1.119/v2.1.120 incident (8 community-filed regressions in 24h)
- Verified flags via Context7/web fetch of `code.claude.com/docs/en/model-config`: `effortLevel`, `availableModels`, `modelOverrides`, `ANTHROPIC_DEFAULT_OPUS_MODEL`, `CLAUDE_CODE_EFFORT_LEVEL`, `CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING`
- Verified pin commands from yurukusa gist: `npm install -g @anthropic-ai/claude-code@2.1.117` + `~/.npmrc` lock
- Competition gap: zero practitioner posts combine version pinning + effort lock + allowlist + stop-hook + fixture suite. Closest competitor is a Substack opinion essay.
- Ready for `/write-blogpost regression-proofing-claude-code-workflows`

## 2026-04-25

### Published Blog Post: Harden Claude Code GitHub Actions Against Prompt Injection
- Published "Harden Claude Code GitHub Actions: Prompt Injection Defense" at /blog/hardening-ai-agents-cicd-prompt-injection
- ~2900 words, 12 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage
- Covers: Comment and Control CVE (CVSS 9.4) recap, threat model, allowlist-vs-blocklist, `GITHUB_TOKEN` scoping, OIDC via Bedrock/Vertex, `CLAUDE_CODE_SCRIPT_CAPS`, actor filters, harden-runner block mode, before/after hardened workflow, residual risk
- Unique angles: assembled hardened workflow nobody else has published; allowlist philosophy; OIDC migration walkthrough
- Updated blog index (featured + grid card), sitemap, llms.txt, progress
- Followup: `/promote-blogpost hardening-ai-agents-cicd-prompt-injection`

### Content Brief: Hardening AI Agents in CI/CD Against Prompt Injection
- Merged PR #19 (topic suggestion) and produced content brief at `.claude/content-briefs/hardening-ai-agents-cicd-prompt-injection.md`
- Angle: defensive companion to existing `/blog/claude-code-security-review-github-actions` (setup post)
- News hook: April 15 2026 "Comment and Control" cross-vendor prompt injection (CVSS 9.4) affecting Claude Code, Gemini CLI, GitHub Copilot Agent
- Competition is news recaps + one reference doc; gap is the assembled hardened workflow with allowlists, OIDC, `CLAUDE_CODE_SCRIPT_CAPS`, harden-runner block mode
- Verified current flags against Anthropic `claude-code-action/docs/security.md`

## 2026-04-24

### GSC Ranking Review
- Run date: 2026-04-24
- Period: 2026-03-24 to 2026-04-21 (last 28 days)
- Snapshot saved: .claude/gsc-snapshots/2026-04-24.json
- Prior snapshot: 2026-04-16 (8 days old, 7-day window - not directly click-comparable)
- Key findings: /blog/gemma-4-models-guide is the biggest page-2 opportunity (pos 10.5, 3,307 impressions, only 3 clicks). /blog/claude-managed-agents per-day click rate dropped sharply (~2/day to ~0.6/day at stable position 6.1 - launch buzz fading). Two new posts showing impressions: /blog/ant-cli-getting-started (239 imp, pos 7) and /blog/claude-code-cost-tracking (178 imp, pos 8.3, first click landed). clawdbot-guide trailing-slash duplicate still present (23.9 vs 14.3).

## 2026-04-22

### Published Blog Post: Claude Code Security Review GitHub Action
- Published "Claude Code Security Review GitHub Action: 2026 Setup Guide" at /blog/claude-code-security-review-github-actions
- ~2800 words, 11 min read, 8 FAQ items
- Schemas: TechArticle, BreadcrumbList, FAQPage, HowTo
- Covers: setup, all 9 action inputs, false-positive filtering file example, token cost math, Semgrep/Snyk/SonarQube comparison, prompt injection mitigations, troubleshooting
- Unique angles competitors don't cover: per-PR dollar math, concrete false-positive markdown file, layered pipeline YAML
- Updated blog index (featured + grid card), sitemap, llms.txt

## 2026-04-18

### GSC Ranking Review
- Run date: 2026-04-18
- Period: 2026-03-18 to 2026-04-15 (last 28 days)
- Snapshot saved: .claude/gsc-snapshots/2026-04-18.json
- Prior snapshot 2026-04-16 skipped (only 2 days old, below 7-day threshold)
- Key findings: Gemma 4 post has 1,590 impressions but 0.1% CTR at position 11.4 - biggest untapped lever. claude-managed-agents remains the top earner (16 clicks, position 6.1). clawdbot-guide appears twice (trailing-slash duplicate) - canonical issue to fix.

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
