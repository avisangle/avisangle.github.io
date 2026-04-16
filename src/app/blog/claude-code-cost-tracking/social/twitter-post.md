# Twitter/X Long-form Post - Claude Code Cost Tracking

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py claude-code-cost-tracking --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
My Claude Code spending hit $12/day before I started tracking it. Now I'm at $5-6/day with zero loss in output quality.

The tracking commands and tools are there. Most people just don't know about them.

Here's everything I learned:

THE BUILT-IN COMMANDS

- /cost shows session spend for API users
- /stats shows usage dashboard for subscribers
- /usage shows rate limit status
- Status line config puts real-time cost in your terminal

Each one targets a different plan type. API users get dollar amounts. Subscribers get usage percentages. Both groups need to know these exist.

THE HIDDEN DATA

Claude Code writes every session to ~/.claude/projects/ as JSONL files. Full token counts, model used, timestamps. Sitting on your machine, most people never look at it.

THIRD-PARTY TOOLS WORTH INSTALLING

- ccusage (4,800+ GitHub stars) - daily/monthly/per-session reports
- claude-usage - local web dashboard
- Claude-Code-Usage-Monitor - real-time alerts
- ccost - per-request granularity

Run `npx ccusage` once and you'll see your spending patterns immediately.

THE 7 CHANGES THAT CUT MY COSTS 50%

1. Default to Sonnet ($3/$15). Only use Opus ($15/$75) when you actually need it
2. Cap thinking tokens: export MAX_THINKING_TOKENS=10000
3. Run /clear between unrelated tasks
4. Run /compact when context grows
5. Write specific prompts with file paths, not vague asks
6. Use plan mode (Shift+Tab twice) before big refactors
7. Break work into scoped sessions

THE API VS SUBSCRIPTION BREAKEVEN

- Under $50/month usage -> API pay-per-token is cheapest
- $100+ month -> Max 5x plan ($100/mo)
- $200+ month -> Max 20x plan ($200/mo)

Full breakdown with code examples, ccusage commands, and the JSONL file format:

https://avinashsangle.com/blog/claude-code-cost-tracking

Follow @avi_sangle for more Claude Code deep-dives.
