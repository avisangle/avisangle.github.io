# Hacker News Submission - Claude Code Dynamic Workflows: When They're Worth the Cost

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Claude Code dynamic workflows: when they're worth the token cost

**URL:** https://avinashsangle.com/blog/claude-code-dynamic-workflows-guide

---

**First Comment:**

Author here. Anthropic shipped dynamic workflows in Claude Code on May 28 with Opus 4.8. Most of the launch coverage explains what the feature is, so I focused on the two questions I had after using it: what does it cost, and when is a workflow actually better than a single session.

The short version: there's no fixed token rate. Each subagent pays its own context overhead, so a large fan-out (a run is capped at 1,000 agents, 16 concurrent) can move your bill by an order of magnitude. The post includes a rough cost model and a worked example where a 40-file audit lands near 5-7x the tokens of the same task in one session.

The honest takeaway is that it's worth it only when a task genuinely exceeds one context window: codebase-wide audits, large migrations, cross-checked research. For everything else a normal session is cheaper. Feedback welcome, especially from anyone who's run one on a large real codebase.
