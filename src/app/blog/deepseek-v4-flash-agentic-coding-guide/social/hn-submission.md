# Hacker News Submission - DeepSeek V4 Flash for Claude Code

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** DeepSeek V4 Flash 0731: what the benchmark table doesn't show

**URL:** https://avinashsangle.com/blog/deepseek-v4-flash-agentic-coding-guide

---

**First Comment:**

Author here. I wrote this after the 0731 threads, because most of the coverage reprinted DeepSeek's benchmark table without checking it. Two things stood out: the model is still absent from the public Terminal-Bench 2.1 leaderboard as of Aug 4, and DeepSeek ran its own evaluation setup, so the cross-vendor rows aren't like-for-like even though the model-against-itself deltas are solid.

The gains are real regardless. Same 284B architecture as the April preview, no new pretraining, and DeepSWE went 7.3 to 54.4 on identical weights.

The practical finding is the routing shape: it beats GPT-5.6 Terra on Terminal Bench and Toolathlon, then loses Agents' Last Exam 25.2 to 50.4. It executes well and plans poorly. DeepSeek's own recommended Claude Code config encodes the same conclusion, putting Pro in the Opus and Sonnet slots and Flash only in Haiku and subagents.

I have not run this against a production workload myself, so the article is explicit about what's measured versus what's reported. Corrections welcome, particularly from anyone who has done a same-harness comparison.
