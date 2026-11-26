# Content Brief: Claude Ship Setup Guide

**Research date:** 2026-11-26
**Bing demand data:** unavailable (script not configured in this environment)

---

## Phase 1: Topic Validation

### Search Demand

Claude Ship launched November 23, 2026 - just 3 days ago. Coverage is heavy from news outlets (TechCrunch, The Register, SiliconANGLE, Digital Trends, MarkTechPost, Unite.AI) but practitioner-level guides are absent. The product bundles three agents (Code Review GA, PR Steward beta, Claude Approvals beta) with a new `/ship` command in Claude Code.

Related search demand signals:
- "Claude code review setup" already ranks with Anthropic's support page, DataCamp tutorial, and Medium posts
- "AI code review CI/CD" has strong DEV Community coverage (5+ posts in 2026)
- "AI PR approval automation" is nascent - only Augment Code and one Cortex write-up cover the approval angle
- Harvard study on coding agents shifting bottleneck to code review hit HN on Nov 18 (124 points)
- "Claude Ship" as a search term is brand new with zero practitioner guides

### Competition Analysis

**Top results for "Claude Ship":**
1. TechCrunch news article (Nov 23) - news coverage, no setup instructions
2. The Register (Nov 24) - news coverage, approval policy framing
3. SiliconANGLE (Nov 23) - news coverage, pipeline automation angle
4. eesel.ai explainer - quick overview with pricing
5. DEV Community posts - rewritten press releases, no original content

**Top results for "Claude code review setup":**
1. Anthropic support page (official, detailed setup) - covers Code Review only, not Ship bundle
2. DataCamp tutorial - covers local /code-review and GitHub setup
3. Medium (mrkivan820) - setup walkthrough
4. alexcloudstar.com - GitHub Actions PR review guide
5. agentkit.best - optimization guide

**Gap:** No result covers Claude Ship end-to-end. The official docs are split across 6+ pages (claude-ship, ship-command, approvals-policy, approvals-setup, pr-steward-setup, code-review-setup). Nobody has synthesized these into a single practitioner guide with the policy file format, rollout strategy, and cost management in one place.

### AI Citation Potential

HIGH. This is exactly the kind of topic people ask AI about:
- "How do I set up Claude Ship?"
- "What is Claude Approvals?"
- "How do I write an approvals.yml policy?"
- Claude's own docs are authoritative but fragmented - a consolidated guide with real examples would be highly citable
- No existing authoritative consolidated guide to displace

### Freshness Opportunity

MAXIMUM. Product launched 3 days ago. Zero practitioner guides exist. First-mover advantage is wide open. Official docs are live but scattered. The blog's existing Claude Code content cluster creates topical authority.

---

## Phase 2: Keyword Strategy

### Primary Keyword
**"Claude Ship setup"** (3 words - new product, incoming search volume)

### Secondary Keywords
- Claude Ship guide
- Claude Code review setup
- Claude Approvals policy
- PR Steward setup
- approvals.yml configuration

### Long-tail Queries
1. How to set up Claude Ship for GitHub
2. Claude Ship /ship command guide
3. How to write Claude Approvals policy file
4. Claude Ship PR Steward configuration
5. Claude Ship pricing and cost management
6. Claude Approvals observe mode vs enforce
7. Claude Ship branch protection integration
8. Claude Ship vs GitHub Copilot code review

### FAQ Candidates
1. What is Claude Ship and what are its three components? (high search likelihood)
2. How much does Claude Ship cost per PR review? (pricing is the #1 question for any new product)
3. How do I write a Claude Approvals policy file? (the approvals.yml format is the most technical, least documented piece)
4. What is the difference between /ship and /steward commands? (common confusion point)
5. Can Claude Ship approve PRs without human review? (trust/safety concern)
6. What review levels does Claude Ship support? (Quick, Standard, Deep - plus effort levels for /ship)
7. How does PR Steward handle failing CI checks? (the auto-fix angle is the unique selling point)
8. Is Claude Ship available for GitLab or Bitbucket? (GitHub only - important limitation)
9. What is Claude Approvals observe mode? (rollout strategy question)
10. How do I set spend limits for Claude Ship? (cost control is critical for teams)

---

## Phase 3: Content Brief

### Article Metadata

- **metadata.title (38-43 chars):** `Claude Ship: Setup, Review, and Approval` (41 chars; rendered: 58 chars with suffix)
- **OG/Twitter/H1 title (55-65 chars):** `Claude Ship Guide: Set Up AI-Powered PR Review and Approval` (60 chars)
- **Suggested slug:** `claude-ship-setup-guide`
- **Meta description (130-160 chars):** `Set up Claude Ship for automated PR review, CI fixes, and policy-based approvals. Covers /ship, PR Steward, Claude Approvals, and approvals.yml config.` (152 chars)
- **Target word count:** 2800-3200
- **Estimated read time:** 12-13 min
- **Category:** Claude Code
- **Suggested Lucide icon:** `Ship` or `GitPullRequestArrow`

### Content Outline

#### H2: What Is Claude Ship?
- Define the three-agent bundle: Code Review (GA), PR Steward (beta), Claude Approvals (beta)
- Explain what each does in one sentence: review finds bugs, steward fixes what's broken, approvals gates what ships
- Availability: Team and Enterprise plans, GitHub only, not for ZDR/HIPAA/CMK orgs
- Anthropic-reported metrics: merged PRs doubled Jun-Sep, reverted PRs down 40%+ on their own Claude Code team
- **Source:** https://claude.com/resources/articles/introducing-claude-ship

#### H2: How to Set Up Code Review on GitHub
- Prerequisites: Claude org Owner + GitHub org Owner + write access to repos
- Step-by-step: Organization settings > Claude Ship > Configure > Install GitHub App > Select repos
- Trigger options: Once after PR creation, After every push, Manual (@claude review)
- Review levels: Quick (lightest), Standard (default), Deep (most thorough)
- Verification: open test PR, check for "Claude Code Review" check run
- REVIEW.md: add team rules at repo root; CLAUDE.md at any directory level
- **Code block:** example REVIEW.md with team conventions
- **Source:** https://code.claude.com/docs/en/code-review-setup

#### H2: How to Configure PR Steward
- What it does: fixes failing CI, merge conflicts, review feedback. Does NOT approve or merge.
- Setup: Organization settings > Claude Ship > add repo > toggle Steward switch
- Options: Manual (@claude steward), On, On (including drafts), Off
- Spend cap: monthly limit in Usage > Services > PR Steward, plus per-repo cap
- Interaction: comments on PR with what it changed and how to undo
- Steer it: "@claude [instruction]" or "@claude stop"
- **Source:** https://code.claude.com/docs/en/pr-steward-setup

#### H2: How to Write a Claude Approvals Policy File
- File location: `.claude/approvals.yml` on the default branch (.yaml also accepted)
- Schema: version (1), rules (required), mode (observe/enforce), nested, run
- Rule structure: purpose, paths (glob patterns), verdict (claude + seats), if/override conditions
- Verdict options: claude approves/comments/blocks, seats 0-16
- Conditions: pr/files_changed, pr/diff_lines, claude/code_review, etc.
- **Code block:** full example approvals.yml with documentation rules, sensitive code rules, and overrides
- Limits: 448 KiB per file, 512 rules, 2000 changed files per PR
- **Source:** https://code.claude.com/docs/en/approvals-policy

#### H2: Setting Up Claude Approvals (Observe to Enforce)
- Step 1: Install Claude GitHub App and link to org
- Step 2: Merge approvals.yml to default branch (Claude validates it)
- Step 3: Open test PR - check title shows "(observe mode)"
- Step 4: Remove `mode: observe`, merge, comment `@claude approvals rerun` on open PRs
- Step 5: Require the check in GitHub rulesets (app ID 1236702)
- Step 6: Test with a file change under .claude/
- Branch protection: add ruleset requiring 1+ approval, dismiss stale approvals
- **Source:** https://code.claude.com/docs/en/approvals-setup

#### H2: Using /ship and /steward from the CLI
- /ship: commits, pushes, opens PR, runs review, starts watch for feedback and CI fixes
- Prerequisites: Claude Code v2.1.330+, GitHub CLI 2.63+
- Arguments: effort level (low/medium/high/xhigh/max), PR number, +botname, stop
- Example: `/ship low 41 +my-lint-bot`
- /steward: starts a watch on your existing open PR (no review)
- /ship stop: end the watch. Check with /tasks
- Turning off: managed settings or CLAUDE_CODE_DISABLE_SHIP=1
- **Source:** https://code.claude.com/docs/en/ship-command

#### H2: Claude Ship Pricing and Cost Management
- Token-based billing through usage credits
- Code Review: $15-25 average per review (scales with PR size/complexity)
- Trigger cost impact: once-per-PR vs every-push vs manual
- PR Steward: monthly limit + per-repo cap; stops when cap hit
- Approvals: no base charge; classifiers billed per token; policies can have budget keys
- /ship: counted as regular Claude Code usage
- Enterprise offer: $10,000 credits, claim by Jan 15, 2027
- Where to set limits: Organization settings > Usage > Services
- **Source:** https://support.claude.com/en/articles/14233555, https://code.claude.com/docs/en/code-review-setup

#### H2: Recommended Rollout Strategy
- Phase 1: Enable Code Review on one repo (Standard level, after-every-push trigger)
- Phase 2: Run /ship on a few personal PRs to test the workflow
- Phase 3: Add PR Steward on Manual (@claude steward) for a sprint
- Phase 4: Deploy approvals.yml in observe mode for 2 weeks
- Phase 5: Enforce Claude Approvals and require the check in branch protection
- Monitoring: weekly cost chart in analytics dashboard (claude.ai/analytics/code-review)
- When to roll back: if reverted PRs increase or team trust drops

#### H2: FAQ (8-10 questions)
See FAQ Candidates above. Each answer 40-60 words.

### Unique Angle

**First consolidated practitioner guide for Claude Ship.** The official docs are split across 6+ pages. No third-party guide synthesizes the full setup path from `/ship` in the CLI through the approvals.yml policy format to branch protection enforcement. This post:
- Provides a copy-paste approvals.yml example with documentation vs sensitive-code rules
- Covers the full rollout path from observe mode to enforcement
- Includes cost management strategies (the pricing details are buried in multiple doc pages)
- Gives an honest take on when Claude Approvals makes sense vs when to keep human-only review

### Internal Linking Opportunities

**Existing posts to link TO:**
- `/blog/claude-code-security-review-github-actions` - security-focused review (complementary, not overlapping)
- `/blog/ultrareview-ci-cd-pipelines` - local ultrareview in CI/CD
- `/blog/regression-proofing-claude-code-workflows` - quality assurance in Claude Code workflows
- `/blog/claude-md-guide` - CLAUDE.md configuration (which Code Review reads)
- `/blog/claude-code-cost-tracking` - cost tracking (complementary to Ship billing)
- `/blog/hardening-ai-agents-cicd-prompt-injection` - security hardening for agent workflows
- `/blog/claude-tag-engineering-teams-guide` - Claude Tag (mentioned in Ship blog as opening PRs)

**Future content this enables:**
- "Claude Ship vs GitHub Copilot Code Review" comparison post
- "REVIEW.md Best Practices" deep-dive
- "Claude Approvals Policy Recipes" collection
- "Measuring AI Code Review ROI" metrics post

### Key Sources

| Source | URL | Use |
|--------|-----|-----|
| Anthropic blog post | https://claude.com/resources/articles/introducing-claude-ship | Official announcement, metrics |
| Claude Ship docs | https://code.claude.com/docs/en/claude-ship | Product overview |
| /ship command | https://code.claude.com/docs/en/ship-command | CLI usage |
| Approvals policy | https://code.claude.com/docs/en/approvals-policy | Policy schema |
| Approvals setup | https://code.claude.com/docs/en/approvals-setup | Setup steps |
| PR Steward setup | https://code.claude.com/docs/en/pr-steward-setup | Steward config |
| Code Review setup | https://code.claude.com/docs/en/code-review-setup | Review setup |
| Code Review support | https://support.claude.com/en/articles/14233555 | Pricing, troubleshooting |
| Anthropic internal metrics | https://claude.dev/blog/solving-code-review-at-anthropic/ | Merged PRs doubled |

---

## Ready to Write?
Run: `/write-blogpost claude-ship-setup-guide`
