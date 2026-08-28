# Content Brief: Claude Code Routines

## Topic Validation

### Search Demand: HIGH (and rising fast)
- Feature announced April 14, 2026, so "Claude Code Routines" went from zero search volume to a flurry of press coverage in 48 hours.
- Already ranking queries: "claude code routines", "how to create claude code routine", "claude code routines vs github actions", "claude code routines api trigger", "claude code schedule command".
- News coverage in the first 48 hours: [9to5Mac](https://9to5mac.com/2026/04/14/anthropic-adds-repeatable-routines-feature-to-claude-code-heres-how-it-works/), [SiliconANGLE](https://siliconangle.com/2026/04/14/anthropics-claude-code-gets-automated-routines-desktop-makeover/), [VentureBeat](https://venturebeat.com/orchestration/we-tested-anthropics-redesigned-claude-code-desktop-app-and-routines-heres-what-enterprises-should-know), [The New Stack](https://thenewstack.io/claude-code-can-now-do-your-job-overnight/), [The Register](https://www.theregister.com/2026/04/14/claude_code_routines/).
- Active Hacker News thread: ["Claude Code Routines"](https://news.ycombinator.com/item?id=47768133) with commenters raising concrete questions (token rotation, debugging, webhook caps, lock-in concerns) that aren't well answered by existing coverage.
- Signals from Anthropic's own [blog post](https://claude.com/blog/introducing-routines-in-claude-code) and [docs page](https://code.claude.com/docs/en/routines) confirm this is a flagship feature, not a minor release.

### Competition Analysis
| Competitor | Angle | Gap |
|---|---|---|
| [Official Anthropic announcement](https://claude.com/blog/introducing-routines-in-claude-code) | Marketing launch post | No copy-paste routines, no failure modes, no cost math |
| [Official docs page](https://code.claude.com/docs/en/routines) | Reference material | Dense reference, no opinionated workflow, no comparison with alternatives |
| [9to5Mac](https://9to5mac.com/2026/04/14/anthropic-adds-repeatable-routines-feature-to-claude-code-heres-how-it-works/) | News explainer | Surface-level, aimed at general readers |
| [VentureBeat](https://venturebeat.com/orchestration/we-tested-anthropics-redesigned-claude-code-desktop-app-and-routines-heres-what-enterprises-should-know) | Enterprise review | High-level, no implementation detail |
| [The Register](https://www.theregister.com/2026/04/14/claude_code_routines/) | Skeptical take ("mildly clever cron jobs") | Argumentative, zero tutorial value |
| [pasqualepillitteri.it guide](https://pasqualepillitteri.it/en/news/851/claude-code-routines-cloud-automation-guide) | Intro guide | Rephrases the docs, no original routines |
| [claudefa.st](https://claudefa.st/blog/guide/development/routines-guide) | Feature overview | Lists what routines are, not how to build a good one |
| [DEV Community post by onsen](https://dev.to/onsen/claude-code-routines-automate-dev-workflows-4ijn) | Short intro | Under 1,000 words, no real-world prompts |

**Key gap:** Every existing article explains *what routines are*. No one has published a hands-on guide with five ready-to-steal routine configurations, a side-by-side decision table for Routines vs GitHub Actions vs `/loop` vs Desktop scheduled tasks, a walkthrough of the API trigger with a real external system (Sentry, PagerDuty, a deploy hook), or the gotchas a user only finds after running a routine for a week (token rotation, webhook hourly caps, `claude/` branch-prefix rule, connector blast radius, daily run limits by plan).

### AI Citation Potential: HIGH
- "How do Claude Code Routines work?" and "How do I trigger a Claude Code routine from an alert?" are the kind of zero-click queries Perplexity, ChatGPT, and Google AI Overviews will surface for the next 6-12 months.
- No consolidated practitioner source exists yet, so the first thorough FAQ-rich post wins the citation slot.
- Anthropic's own docs are dense reference, which AI answer engines prefer to summarize rather than quote, favoring a well-structured secondary source.

### Freshness Opportunity: VERY STRONG
- Feature is 2 days old as of brief creation (2026-04-16).
- Still in research preview; behavior is under `experimental-cc-routine-2026-04-01` beta header, meaning the docs will shift and a living, opinionated guide has lasting value.
- Existing coverage was written from a press briefing, not from actually running routines in anger.

---

## Keyword Strategy

### Primary Keyword
**claude code routines**

### Secondary Keywords
- claude code schedule command
- claude code routines api trigger
- claude code routines vs github actions
- claude code cloud automation
- claude code /schedule

### Long-Tail Queries
1. how to create a claude code routine
2. claude code routines api endpoint example
3. claude code routines daily limit pro max
4. claude code routines vs github actions which to use
5. claude code routines github trigger pr review
6. claude code routines webhook from sentry
7. how to pause a claude code routine
8. claude code routines token rotation

### FAQ Candidates (for FAQ schema)
1. What are Claude Code Routines?
2. How do I create a Claude Code routine from the CLI?
3. How do I trigger a Claude Code routine from an external system?
4. What is the difference between Claude Code Routines and GitHub Actions?
5. How many routines can I run per day on Pro, Max, Team, and Enterprise plans?
6. Can a routine push to my main branch?
7. What happens when a routine hits its daily cap?
8. How do I rotate or revoke a routine's API token?
9. Do routines share context with my interactive Claude Code sessions?
10. Are routines available on the Claude Code CLI or only the web?

---

## Article Metadata

- **Suggested title:** "Claude Code Routines: Hands-On Guide with 5 Real Examples" (58 chars)
- **Alternate title:** "Claude Code Routines: How to Automate Dev Work in the Cloud" (60 chars)
- **Suggested slug:** `claude-code-routines`
- **Meta description:** "Claude Code Routines run prompts on a schedule, API call, or GitHub event. Here are 5 working routines, the limits, and when to use Actions instead." (152 chars)
- **Target word count:** 2800-3400
- **Estimated read time:** 12-14 minutes
- **Category:** Claude Code
- **Suggested Lucide icon:** Repeat, Timer, or Workflow

---

## Content Outline

### H2: What Claude Code Routines Actually Are (intro + direct answer)
- Direct answer in first 40-60 words: A routine is a saved Claude Code config (prompt, repo, connectors) that runs on Anthropic's cloud on a schedule, an API call, or a GitHub event. Laptop can be closed. Research preview since April 14, 2026.
- Stat: Available on Pro (5 runs/day), Max (15/day), Team and Enterprise (25/day) per [Anthropic's announcement](https://claude.com/blog/introducing-routines-in-claude-code).
- One-sentence framing: this replaces the "I left Claude Code running overnight on my laptop" pattern with a managed equivalent.

### TL;DR (3-4 bullets)
- Routines run Claude Code sessions in Anthropic's cloud. No local machine required.
- Three trigger types: schedule, HTTP POST with bearer token, or GitHub event (PR/release).
- Use Routines for interpretive work (review, triage); keep GitHub Actions for deterministic CI.
- Daily run caps are tight on Pro (5); Team/Enterprise get 25. Budget accordingly.

### H2: How to Create a Routine in 60 Seconds (from CLI and web)
- `/schedule` in an active CLI session, with example: `/schedule daily PR review at 9am`.
- Web flow at `claude.ai/code/routines`: name, prompt, repos, environment, trigger.
- Why the prompt must be self-contained (no clarification loop during an unattended run).
- Model selector is part of the prompt box; pick Sonnet for volume, Opus for judgment.
- Code block: example full prompt for a backlog-grooming routine.

### H2: The Three Trigger Types, When to Pick Each
- **Schedule**: hourly/daily/weekdays/weekly presets; cron via `/schedule update`; minimum interval 1 hour.
- **API**: per-routine URL, bearer token shown once, POST with `{"text": "..."}` payload. Requires `anthropic-beta: experimental-cc-routine-2026-04-01` header.
- **GitHub event**: pull_request and release categories with filters (author, title, labels, fork, draft, branch). Filters use equals/contains/regex operators.
- Decision matrix: "I want X to trigger Y" -> pick trigger type.
- Note: one routine can attach all three triggers.

### H2: 5 Routines I'd Ship Tomorrow (copy-paste examples)
Each example: scenario, trigger config, full prompt, expected output, gotchas.
1. **Nightly backlog triage** - schedule trigger, Linear connector, labels new issues and posts a Slack summary.
2. **Security-focused PR review** - GitHub trigger on `pull_request.opened` filtered to `from fork = true`, runs an OWASP checklist.
3. **Sentry alert autopsy** - API trigger called by Sentry webhook, pulls stack trace, correlates with recent commits, opens a draft PR.
4. **Docs drift sweeper** - weekly schedule trigger, scans merged PRs, opens docs update PRs against a `/docs` repo.
5. **Release note generator** - GitHub trigger on `release.created`, drafts a changelog and posts to the release description.

### H2: Routines vs GitHub Actions vs /loop vs Desktop Scheduled Tasks
- Direct answer paragraph: Actions for deterministic CI, Routines for judgment work, `/loop` for in-session polling, Desktop scheduled tasks for local filesystem work.
- Comparison table with columns: Runs where, Needs laptop, Agentic, Deterministic, Supports connectors, Best for.
- Quote from [The Register's skeptical take](https://www.theregister.com/2026/04/14/claude_code_routines/) and my counter: the "cron jobs with judgment" framing is actually the entire point.
- When Routines are wrong: anything a bash script can do reliably.

### H2: Usage Limits, Daily Caps, and Cost Math
- Pro: 5 runs/day. Max: 15. Team/Enterprise: 25.
- Runs count against normal subscription usage plus the daily routine cap.
- "Extra usage" overage billing for Team/Enterprise when caps hit.
- Real cost example: a PR review routine at ~15K input + 2K output tokens per run on Sonnet. Multiply by PR volume to sanity-check.
- Link internally to [Claude Code Cost Tracking post](/blog/claude-code-cost-tracking) for the broader cost picture.

### H2: The Gotchas Nobody Warns You About
- **Branch-push restriction**: by default only `claude/`-prefixed branches; toggle per repo to unlock.
- **Token is shown once**: if you miss the copy button, you regenerate and update every downstream system.
- **Webhook hourly caps** on GitHub triggers during preview; bursty repos drop events.
- **Connector blast radius**: all connected MCPs are enabled by default. Prune them before hitting Create.
- **No shared context with interactive sessions**: each run is fresh; if you want state, write it to the repo or an external store.
- **"Runs as you"**: commits and connector actions carry your GitHub/Slack/Linear identity.
- **Research preview caveat**: `experimental-cc-routine-2026-04-01` beta header, breaking changes ship behind new dated headers.

### H2: Operating Routines in Production (team practices)
- One routine per outcome. Don't build a "do everything at 9am" mega-routine.
- Version the prompt in a repo-tracked file and keep the routine prompt short: "Run the instructions in `ops/routines/backlog-triage.md`."
- Test the prompt interactively before scheduling it.
- Use `Run now` to smoke test before trusting the schedule.
- Log each run outcome somewhere durable (the session URL disappears into the list).
- Pause schedules during incident windows.

### H2: FAQ Section (Accordion component, 8-10 Q&As)
Use the FAQ candidates from keyword strategy. 40-60 words per answer. Must include the plan-limit numbers, the API header requirement, the `claude/` branch rule, and the "runs as you" identity note.

---

## Unique Angle

**What makes this article different:**
1. **Five copy-paste routine examples** with full prompts, not one generic "PR review" hand-wave. Competitors mention use cases; this brief delivers them.
2. **Decision table** covering Routines vs GitHub Actions vs `/loop` vs Desktop scheduled tasks. No existing post puts these side by side.
3. **Gotchas section** sourced from careful reading of the docs plus the [Hacker News thread concerns](https://news.ycombinator.com/item?id=47768133) - token rotation, webhook caps, branch-push rules, connector blast radius. This is where competitors are silent.
4. **Cost math** tied to the existing [Claude Code Cost Tracking post](/blog/claude-code-cost-tracking). A reader can estimate monthly spend before shipping.
5. **Operator's perspective** - not "what's new" but "how do I run this without it biting me in week two".

**Original data Avinash can bring:**
- Personal routine configs from automations actually running on avinashsangle.com or Method CRM MCP work.
- Before/after: a task that used to require "laptop open all night" vs the same task as a routine.
- Cost numbers from a week of running the example routines.
- Screenshot-ready walkthrough of the web creation form.

---

## Internal Linking Opportunities

### Link TO from this article:
- `/blog/claude-md-guide` - "Your routine's prompt is a miniature CLAUDE.md; same rules apply."
- `/blog/claude-managed-agents` - "Routines are Anthropic-managed execution; managed agents are Anthropic-managed orchestration. Pick the right surface."
- `/blog/claude-code-cost-tracking` - "Routines draw from the same subscription budget. Track them the same way."
- `/projects/method-crm-mcp` - "Example: a Method CRM triage routine."

### Link FROM other articles to this one:
- Any future post on Claude Code hooks, CI integration, or team workflows should reference this.
- The managed-agents post should cross-link once published.

### Future content cluster:
- "Claude Code GitHub Actions vs Routines: When to Pick Which"
- "Building a Cost-Capped Claude Code Routine for PR Review"
- "On-call Triage with Claude Code Routines and Sentry"

---

## Sources to Reference
- [Introducing routines in Claude Code (Anthropic blog)](https://claude.com/blog/introducing-routines-in-claude-code)
- [Automate work with routines (official docs)](https://code.claude.com/docs/en/routines)
- [Trigger a routine via API (Claude Platform docs)](https://platform.claude.com/docs/en/api/claude-code/routines-fire)
- [Hacker News thread on Routines](https://news.ycombinator.com/item?id=47768133)
- [VentureBeat hands-on review](https://venturebeat.com/orchestration/we-tested-anthropics-redesigned-claude-code-desktop-app-and-routines-heres-what-enterprises-should-know)
- [The New Stack: "Claude Code can now do your job overnight"](https://thenewstack.io/claude-code-can-now-do-your-job-overnight/)
- [The Register skeptical take](https://www.theregister.com/2026/04/14/claude_code_routines/)
- [Claude Code changelog v2.1.101 (where `/schedule` related scaffolding landed)](https://github.com/anthropics/claude-code/releases)

---

## Ready to Write?
Run: `/write-blogpost claude-code-routines`
