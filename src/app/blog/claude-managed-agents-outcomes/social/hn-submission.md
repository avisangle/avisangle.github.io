# Hacker News Submission - Claude Managed Agents Outcomes

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Claude Managed Agents Outcomes: Auto-Grading Agent Work with Rubrics

**URL:** https://avinashsangle.com/blog/claude-managed-agents-outcomes

---

**First Comment:**

Author here. Anthropic shipped Outcomes for Claude Managed Agents on May 6 - one event attaches a rubric to a session, and a separate grader (fresh context, same model and tools as the writer) re-runs the writer until the artifact passes or `max_iterations` is hit.

What surprised me after a few days of running it: the rubric does almost all of the work. Vague criteria produce a grader that approves everything; explicit gradeable criteria catch real problems. The default failure mode isn't bugs in the loop, it's writers gaming wording in the rubric.

The article covers the API surface (`user.define_outcome`, the five `span.outcome_evaluation_end.result` states), rubric anti-patterns from the cookbook, a `max_iterations` tuning rule, the cost math against the $0.08-per-session-hour clock, and a comparison with standalone LLM-as-judge tools and Codex `/goal`. Feedback welcome.
