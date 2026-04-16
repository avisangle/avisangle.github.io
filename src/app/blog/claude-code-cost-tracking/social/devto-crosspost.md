# Dev.to + Hashnode Cross-post - Claude Code Cost Tracking

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py claude-code-cost-tracking --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py claude-code-cost-tracking --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Claude Code Cost Tracking: Monitor and Cut Your Spending
DESCRIPTION: Track Claude Code costs with built-in commands, local JSONL logs, and tools like ccusage. Plus 7 practical tips to cut your token spending by 50% or more.
TAGS: claudecode, ai, devops, productivity
CANONICAL_URL: https://avinashsangle.com/blog/claude-code-cost-tracking
COVER_IMAGE: https://avinashsangle.com/og-claude-code-cost-tracking.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/claude-code-cost-tracking).

## How Much Does Claude Code Actually Cost?

The pricing structure is straightforward. Claude Code Pro runs $20 per month (or $17 annually). The Max plan comes in two tiers: $100/month for 5x the Pro usage allowance, and $200/month for 20x. If you are on the API, you pay per token - Sonnet 4.6 at $3/$15 per million input/output tokens, and Opus 4.6 at $15/$75.

Across enterprise deployments, the average lands between $150 and $250 per developer per month, according to Anthropic's published benchmarks. Ninety percent of users stay under $12 per day. But that top 10% can burn through tokens fast, especially with extended thinking enabled and Opus as the default model.

The real issue? Tracking is scattered. Subscription users can't see dollar costs in the Console. API users get billing data but not per-session breakdowns. And everyone has local JSONL files sitting on their machine that most people don't even know exist.

## TL;DR

- **Track costs with built-in commands:** `/cost` for API users, `/stats` for subscribers, `/usage` for rate limit status
- **Find your hidden usage data:** Claude Code logs every session to `~/.claude/projects/` as JSONL files with full token counts
- **Use third-party tools for real visibility:** ccusage (4.8k GitHub stars) gives you daily, monthly, and per-session cost reports
- **Cut costs by 50% with 7 practical changes:** default to Sonnet, cap thinking tokens, clear context between tasks, and write specific prompts

## Built-In Cost Tracking Commands You Should Know

Claude Code ships with three commands for checking usage. Which one you should use depends on whether you are paying through the API or a subscription plan.

### /cost - Session API Spend

The `/cost` command shows your current session's token usage and estimated dollar cost. Designed for API users. Subscription users still see token counts, which is useful for understanding consumption patterns.

```
Total cost:            $0.55
Total duration (API):  6m 19.7s
Total duration (wall): 6h 33m 10.2s
Total code changes:    127 lines added, 43 lines removed
```

### /stats - Subscriber Usage Dashboard

If you are on Pro or Max, `/stats` opens a dashboard with a usage heatmap, session counts, token totals by model, and activity streaks. No dollar costs (flat-rate plan), but you see exactly how much of your allowance you are burning.

### /usage - Rate Limit Status

Shows your plan limits and current rate limit status. Check this when Claude Code feels slow or you suspect throttling. Shows both 5-hour and 1-week usage windows.

### Status Line Configuration

```bash
# Show cost in the status line (API users)
claude config set status_line.show_cost true

# Show token count in the status line
claude config set status_line.show_tokens true
```

**When to use which:**
- **API users:** Use `/cost` for dollar amounts and `/usage` for rate limits
- **Pro/Max subscribers:** Use `/stats` for usage patterns and `/usage` for rate limits
- **Everyone:** Configure the status line for passive monitoring

## Where Claude Code Stores Your Usage Data

Every session gets logged to your local filesystem as JSONL files. These contain detailed token counts for every API call - input tokens, output tokens, cache creation tokens, cache read tokens, and the model used. This is the same data third-party tools read to build their dashboards.

### Session Logs

Claude Code writes one JSONL file per session to `~/.claude/projects/`. If you are on a subscription plan, these local logs are the only way to get granular cost data since the Console doesn't expose it.

```bash
# Find your session logs
ls ~/.claude/projects/

# Look at the most recent session
ls -lt ~/.claude/projects/ | head -5

# Count tokens in a session with jq
cat ~/.claude/projects/<session-file>.jsonl | \
  jq -s '[.[].message.usage // empty] |
    { total_input: (map(.input_tokens) | add),
      total_output: (map(.output_tokens) | add),
      cache_read: (map(.cache_read_input_tokens // 0) | add),
      cache_creation: (map(.cache_creation_input_tokens // 0) | add) }'
```

### Status Line Snapshots

Second file most people miss: `~/.claude/statusline.jsonl`. Contains periodic snapshots with server-reported cumulative cost and your 5-hour and 1-week rate-limit usage percentages. This data is only in this local file.

```bash
# View recent status line snapshots
tail -5 ~/.claude/statusline.jsonl | jq .

# Extract cost progression over time
cat ~/.claude/statusline.jsonl | \
  jq -r '[.timestamp, .cost_usd] | @csv'
```

## Third-Party Tools for Claude Code Usage Analytics

The built-in commands give a snapshot. For real visibility into trends, per-project breakdowns, and forecasting, you need more.

### ccusage - The Most Popular Option

4,800+ GitHub stars. CLI that reads your local JSONL files and produces clean tables with daily, monthly, or per-session cost breakdowns. Tracks cache tokens separately, supports billing window analysis, works offline with cached pricing data.

```bash
# Install and run - no setup needed
npx ccusage              # Daily report (default)
npx ccusage daily        # Detailed daily breakdown
npx ccusage monthly      # Monthly aggregated totals
npx ccusage session      # Cost per conversation session
npx ccusage blocks       # 5-hour billing window analysis

# Filter by project
npx ccusage --instances  # Group usage by project
```

### claude-usage - Local Web Dashboard

Reads the same local log files but renders them as charts with cost estimates, session timelines, and model breakdowns. Pro and Max subscribers get a progress bar for their allowance.

### Claude-Code-Usage-Monitor - Real-Time Alerts

Real-time chart of token consumption with predictions about when you will hit your limits. Good for Max plan users who want early warnings before getting throttled.

### ccost - Per-Request Granularity

Analyzes per-request JSONL logs with detailed token counts using LiteLLM pricing data. Use when you want to know exactly which requests were the most expensive.

| Tool | Interface | Best For | GitHub Stars |
|------|-----------|----------|--------------|
| ccusage | CLI | Daily/monthly reports, billing windows | 4,800+ |
| claude-usage | Web dashboard | Visual charts, subscriber progress | 1,200+ |
| Usage-Monitor | CLI (real-time) | Limit predictions, early warnings | 500+ |
| ccost | CLI | Per-request cost analysis | 200+ |

## How to Set a Budget Limit for Claude Code

### Per-Command Budget Cap

The `--max-budget-usd` flag caps the maximum dollar amount for a single print-mode command. Useful in CI/CD pipelines or automated scripts where a runaway agent could burn through tokens.

```bash
# Cap a single command at $5
claude -p --max-budget-usd 5.00 "Refactor the auth module"

# Combine with max-turns for double protection
claude -p --max-budget-usd 10.00 --max-turns 5 "Fix failing tests in src/"
```

### Workspace Rate Limits for Teams

Claude Code creates a workspace called "Claude Code" when you first authenticate with Console. Set rate limits on this workspace in the Console's Limits page to cap Claude Code's share of your API allocation.

### Agent SDK Cost Tracking

If you are building on the Claude Agent SDK, every result message includes a `total_cost_usd` field.

```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";

let totalSpend = 0;

const prompts = [
  "Read the files in src/ and summarize the architecture",
  "List all exported functions in src/auth.ts"
];

for (const prompt of prompts) {
  for await (const message of query({ prompt })) {
    if (message.type === "result") {
      totalSpend += message.total_cost_usd;
      console.log(`This call: $${message.total_cost_usd}`);
    }
  }
}

console.log(`Total spend: $${totalSpend.toFixed(4)}`);
```

## 7 Ways to Cut Claude Code Costs by 50%

After tracking my spending for a few weeks, I identified the patterns that were burning tokens fastest. These seven changes brought my daily average from ~$12 down to $5-6, with zero quality loss.

### 1. Default to Sonnet, Switch to Opus Only When Needed

Sonnet 4.6 costs $3/$15 per million input/output tokens. Opus 4.6 costs $15/$75. That's 5x more expensive. For most coding tasks, Sonnet produces results that are just as good.

```bash
# Switch models on the fly
/model sonnet    # For everyday tasks
/model opus      # For complex reasoning only
```

### 2. Set MAX_THINKING_TOKENS to 10,000

Extended thinking is the single biggest cost lever. Uncapped thinking tokens can generate tens of thousands of tokens per request. A 10,000 limit still gives Claude enough room to reason.

```bash
# Set thinking token limit
export MAX_THINKING_TOKENS=10000

# Or lower the effort level for simple tasks
/effort low       # Significant token savings
/effort medium    # Balance of cost and quality
```

### 3. Use /clear Between Tasks

Stale context is a silent cost multiplier. Every message includes the full conversation history as input tokens. Run `/clear` when you switch to unrelated work. Use `/rename` first if you want to come back to the session later with `/resume`.

### 4. Use /compact When Context Grows

If you are mid-task and can't clear, use `/compact` to summarize the conversation history. Reduces token count while preserving important context.

### 5. Write Specific Prompts

Vague prompts are expensive. "Make this better" forces Claude to spend tokens figuring out what you want. "Extract the hardcoded strings in src/auth.js into constants" gets the job done in one pass.

### 6. Use Plan Mode Before Expensive Operations

Press Shift+Tab twice to enter plan mode before starting a big task. Claude outlines its approach before writing code. Costs a few hundred tokens for the plan but saves thousands by preventing costly rework.

### 7. Break Work Into Scoped Sessions

One session for everything is the most expensive way to use Claude Code. Context accumulates, cache misses increase, and irrelevant history gets sent with every request. Work in task-scoped sessions: one for fixing the login bug, another for adding the new API endpoint, a third for writing tests.

## Claude Code API vs Subscription: Which Costs Less?

| Usage Profile | API Cost/Month | Best Plan | Savings |
|---------------|---------------|-----------|---------|
| Light (1-2 hrs/day) | $30-50/mo | API or Pro ($20) | Pay-per-use wins |
| Moderate (3-5 hrs/day) | $100-180/mo | Max 5x ($100) | Up to 44% savings |
| Heavy (6+ hrs/day) | $200-400/mo | Max 20x ($200) | Up to 50% savings |

The API makes more sense with sporadic usage or when you need fine-grained budget controls like `--max-budget-usd`. It's also the only option for per-project cost allocation when billing clients. The subscription wins on predictability.

My approach: Max 5x plan for day-to-day, API key configured for automated scripts and CI pipelines where I want hard budget caps. Hybrid setup gives predictable costs for interactive work and strict controls for automation.

## Frequently Asked Questions

### How do I check my Claude Code costs?

Use `/cost` in any session for API spend totals with token counts and dollar estimates. Subscribers should use `/stats` for a usage dashboard with heatmaps and model breakdowns, or `/usage` for rate limit status. You can also configure the status line to show costs continuously.

### Where does Claude Code store usage data locally?

Claude Code writes one JSONL file per session to `~/.claude/projects/` with full token counts for every API call. It also writes periodic snapshots to `~/.claude/statusline.jsonl` containing cumulative cost and rate-limit usage percentages. Third-party tools like ccusage read these files.

### What is ccusage and how do I use it?

ccusage is an open-source CLI tool with 4,800+ GitHub stars that analyzes Claude Code usage from local JSONL files. Run `npx ccusage` for a daily report, `npx ccusage monthly` for monthly totals, or `npx ccusage session` to see costs per conversation. Works offline with cached pricing data.

### How much does Claude Code cost per day on average?

Anthropic reports the average at about $6 per developer per day, with 90% of users under $12 per day. Enterprise deployments average $150 to $250 per developer per month. Heavy Opus sessions with extended thinking can spike past $20 in a single day.

### How do I set a budget limit for Claude Code API usage?

Use `--max-budget-usd` in print mode to cap spending per command: `claude -p --max-budget-usd 5.00 "your prompt"`. For team-wide limits, set workspace rate limits in the Claude Console. You can also use `--max-turns` to indirectly limit costs.

### Is Claude Code Max plan worth it vs API pricing?

If your API equivalent spend exceeds $100/month, the Max 5x plan at $100/month saves money. If you spend over $200/month on API, Max 20x is the better deal. For sporadic usage under $50/month, pay-per-token API pricing usually costs less overall.

### How does prompt caching reduce Claude Code costs?

Claude Code automatically caches repeated content like system prompts and CLAUDE.md files. Cached tokens cost 90% less than fresh input tokens. The cache has a 5-minute TTL, so keeping sessions under 5 minutes apart maximizes savings. Track cache hit rates in local JSONL logs.

---

**Read the full version** (with extra examples and updates) on the original post: [Claude Code Cost Tracking on avinashsangle.com](https://avinashsangle.com/blog/claude-code-cost-tracking).
