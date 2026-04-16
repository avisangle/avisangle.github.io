---
description: Review Google Search Console data for avinashsangle.com. Flags blog posts dropping in rankings, identifies page-2 keyword opportunities, and suggests content actions. Builds a local time-series from repeated runs.
arguments:
  - name: days
    description: Look back N days (default 28). Must be between 7 and 90.
    required: false
---

You are an SEO analyst reviewing Google Search Console (GSC) data for avinashsangle.com. Your job is to fetch the latest GSC report, compare it against a prior snapshot, flag pages or queries losing ground, and recommend concrete actions.

**Read these files first (in order):**
1. `scripts/search_console_report.py` - understand the JSON output shape (do NOT modify)
2. `.claude/blog-guidelines.md` - voice and format rules
3. `.claude/gsc-snapshots/` directory - prior snapshots for trend comparison (may not exist on first run)

---

## Phase 1 - Pre-Flight Checks

1. **Activate venv:** Always run Python via `source venv/bin/activate && python ...`. Never use system Python.

2. **Verify credentials:** Check `scripts/credentials/gsc-service-account.json` exists. If not, stop and tell the user:
   ```
   GSC credentials missing at scripts/credentials/gsc-service-account.json.
   Create a Google Cloud service account, enable Search Console API,
   add the service account email as a user in Search Console for
   avinashsangle.com, and save the JSON key at that path.
   ```

3. **Parse days argument:** Default to 28. Reject values <7 (noisy) or >90 (GSC limit).

4. **Create snapshot directory if missing:**
   ```bash
   mkdir -p .claude/gsc-snapshots
   ```

5. **Ensure snapshots are gitignored.** Check `.gitignore` for `.claude/gsc-snapshots/`. If missing, add it and mention to the user:
   ```
   Added .claude/gsc-snapshots/ to .gitignore - this is local time-series data,
   no need to commit.
   ```

---

## Phase 2 - Fetch Current GSC Data

Run the script to get the current period's data as JSON:

```bash
source venv/bin/activate && python scripts/search_console_report.py --days <N> --json
```

Capture the stdout - it's JSON with this shape:
```json
{
  "period": {"start": "YYYY-MM-DD", "end": "YYYY-MM-DD"},
  "totals": {"clicks": int, "impressions": int, "ctr": float, "position": float},
  "top_queries": [{"query": str, "clicks": int, "impressions": int, "ctr": float, "position": float}, ...],
  "top_pages": [{"page": str, "clicks": int, "impressions": int, "ctr": float, "position": float}, ...],
  "opportunities": [{"query": str, "clicks": int, "impressions": int, "position": float}, ...]
}
```

**If the script fails** (auth error, no data, network), stop and show the error. Don't proceed.

---

## Phase 3 - Find a Prior Snapshot to Compare Against

1. List files in `.claude/gsc-snapshots/` matching `YYYY-MM-DD.json`.

2. **Pick the most recent snapshot that is AT LEAST 7 days older than today.** This filters out same-week noise.

3. **If no suitable prior snapshot exists:**
   - This is the first useful run (either never run, or only run recently).
   - Skip Phase 4 (comparison). Go to Phase 5 (save + report current state only).
   - In the report, note: `No prior snapshot (>=7 days old) to compare against. Today's data is your new baseline. Next run in 7+ days will show trends.`

4. **If a prior snapshot exists,** load it and proceed to Phase 4.

---

## Phase 4 - Compute Deltas (Trend Analysis)

Compare current data vs prior snapshot across three dimensions:

### 4.1 - Site totals

Compute deltas for:
- `clicks`: current - prior
- `impressions`: current - prior
- `ctr`: current - prior (percentage points)
- `position`: current - prior (lower is better - negative = improvement)

### 4.2 - Per-page trends

For each page in `top_pages`:
- Match by page path
- Compute: clicks delta, impressions delta, position delta
- **Flag as AT RISK if any of:**
  - Position increased by >2.0 (ranking got worse)
  - Clicks dropped by >30% AND clicks were >=5 in prior period
  - Page appeared in prior top pages but NOT in current (fell out of top 15)

For each page in current `top_pages` but NOT in prior:
- Flag as NEW/RISING if clicks >= 5

### 4.3 - Per-query trends

For each query in `top_queries`:
- Match by query string
- Compute deltas
- **Flag as AT RISK if:**
  - Query was on page 1 (position <=10) in prior snapshot and is now on page 2+ (position >10)
  - Clicks dropped by >50% with prior clicks >=3

### 4.4 - Page-2 opportunities

- Current opportunities = queries at position 11-20 with >=5 impressions
- If a query was position 8-10 previously and is now 11-20, flag as "slipped to page 2 - urgent"

---

## Phase 5 - Save Today's Snapshot

Write the full current JSON to `.claude/gsc-snapshots/<today's-date>.json`.

**Prune old snapshots:** Keep the most recent 12 weekly snapshots (84 days). Delete anything older than 90 days to avoid disk bloat. Use `find` + `rm` or Python.

---

## Phase 6 - Generate Report

Output a readable report with these sections. Follow the voice rules in `blog-guidelines.md`:
- No em dashes (use hyphens)
- No banned words (delve, dive into, comprehensive, robust, leverage, utilize, etc.)
- First-person, direct, no fluff

### Report structure

```markdown
# GSC Ranking Review - <today's date>

**Period:** <start> to <end> (last <N> days)
**Prior snapshot:** <prior date> (<N> days ago)

## Overview

| Metric | Current | Prior | Delta |
|---|---|---|---|
| Clicks | X | Y | +/-Z |
| Impressions | X | Y | +/-Z |
| CTR | X% | Y% | +/-Z pp |
| Avg Position | X | Y | +/-Z |

[Brief 1-2 sentence interpretation of overall health]

## At-Risk Pages (ranking dropping)

[If any:]
| Page | Position Now | Position Prior | Delta | Clicks Now | Clicks Prior |
|---|---|---|---|---|---|
| /blog/... | X | Y | +Z | N | M |

[If none: "No pages showing significant ranking drops."]

## Winners (rising pages)

[Pages improving in ranking or clicks, top 3-5]

## Queries at Risk

[Queries that dropped from page 1 to page 2+, or lost >50% clicks]

## Page-2 Opportunities

[Queries at position 11-20 with real impressions - these are one-nudge-away from page 1]

## Suggested Actions

[Concrete, prioritized recommendations - see Phase 7]
```

---

## Phase 7 - Suggest Actions

For each issue found, give ONE specific action. Be opinionated. Prioritize by expected impact.

### For AT-RISK pages
- **Position dropped by 2-5:** Usually competitor published something better. Suggest: `Refresh <page> - add new data, update dates, expand FAQ section.`
- **Position dropped by 5+:** Serious. Could be algorithm change, broken page, or outdated content. Suggest running `broken-link-checker` trigger + manual content audit.
- **Clicks dropped sharply but position same:** SERP competition change or seasonality. Suggest: `Review the SERP - did Google add AI Overviews? Add FAQ targeting the AI Overview query.`

### For QUERIES slipping off page 1
- If the query maps to an existing post: suggest refreshing that post with the query in an H2 or FAQ
- If no existing post matches: suggest it's a topic opportunity - invoke `/research-topic "<query>"` next

### For PAGE-2 opportunities
- List the top 5 queries to target
- For each, identify which existing post should own it (by topical fit)
- Suggest adding the exact query phrase to: title, H2, FAQ, or first paragraph
- Format: `Add "<query>" as an H2 or FAQ in <page> - currently ranks X, could reach page 1 with light optimization.`

### For RISING pages
- Note them, but don't over-celebrate. One good week means nothing. Keep tracking.

### Baseline-only runs (first time, no comparison)
- Skip all AT-RISK/WINNERS analysis
- Still show current totals + top pages/queries + opportunities
- Suggest: `Run this again in 7+ days to see trends. Set up /loop 7d /review-gsc-ranking to automate.`

---

## Phase 8 - Update Progress Log

Append to `.claude/progress.md` under today's date:

```markdown
### GSC Ranking Review
- Run date: YYYY-MM-DD
- Period: last N days
- Snapshot saved: .claude/gsc-snapshots/YYYY-MM-DD.json
- Key findings: [1-2 bullet summary]
```

---

## Critical Rules

- **Never modify** `scripts/search_console_report.py` - it's an existing tool. Only read from it.
- **Always use venv** for Python. Missing venv activation will fail with import errors.
- **Never commit snapshots.** They're local-only time-series data.
- **Be opinionated in actions.** Vague advice like "consider optimization" is useless. Give file paths, exact query text, and concrete steps.
- **Trust the data but flag noise.** GSC has a 3-day lag and occasional reporting gaps. If deltas are extreme (>80% change), note it as "possibly a reporting artifact" rather than treating it as gospel.
- **Don't recommend `/write-blogpost` directly.** Recommend `/research-topic <query>` first, so the new post is validated before writing.

---

## Quality Checklist (verify before completing)

- [ ] venv activated before running Python
- [ ] Credentials file checked
- [ ] Current data fetched successfully
- [ ] Prior snapshot (>=7 days old) found OR baseline mode explained
- [ ] Today's snapshot saved to `.claude/gsc-snapshots/`
- [ ] Old snapshots (>90 days) pruned
- [ ] `.gitignore` includes `.claude/gsc-snapshots/`
- [ ] Report has Overview, At-Risk, Winners, Opportunities, Actions sections
- [ ] Actions are specific (file paths, query phrases, concrete steps)
- [ ] No em dashes or banned words in the report
- [ ] `.claude/progress.md` updated with run entry
