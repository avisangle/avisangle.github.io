# LinkedIn Post - Claude Code Cost Tracking

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py claude-code-cost-tracking --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
I was spending $12/day on Claude Code without really knowing where it was going.

After a few weeks of tracking, I cut that to $5-6/day with zero loss in output quality. The surprise? Claude Code already tracks everything you need. Most people just don't know the commands or where the data lives.

Here's what I found:

- /cost shows API session spend, /stats shows subscriber usage, /usage shows rate limits. Three different commands for three different plan types
- Every session writes to ~/.claude/projects/ as JSONL files with full token counts. This data has been on your machine the whole time
- ccusage (4,800+ GitHub stars) reads those JSONL files and gives you daily, monthly, and per-session cost reports. One npx command, no signup
- Thinking tokens are the single biggest cost lever. Setting MAX_THINKING_TOKENS=10000 alone drops spending significantly
- Sonnet at $3/$15 handles most coding tasks just as well as Opus at $15/$75. Switching by default was the biggest single change

The tracking gap matters because subscription users can't see dollar costs in the Console, and API users get billing data but no per-session breakdowns. You end up flying blind on a tool you might spend $150-250 per developer per month on, according to Anthropic's benchmarks.

I wrote a full guide covering every tracking method (built-in, hidden, third-party) plus 7 practical changes that cut my costs in half.

https://avinashsangle.com/blog/claude-code-cost-tracking

What's your monthly Claude Code spend and how are you tracking it?

#ClaudeCode #AIEngineering #DevTools #DeveloperProductivity #Anthropic
