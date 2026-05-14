# Hacker News Submission - OpenAI Codex Security GitHub Setup Guide

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough

**URL:** https://avinashsangle.com/blog/codex-security-github-setup

---

**First Comment:**

Author here. OpenAI relaunched Codex Security on May 11 as the front end of its Daybreak cybersecurity stack. Same day, Google disclosed the first confirmed AI-generated zero-day used in the wild. I spent the week setting up Codex Security on real repos and writing down what the official docs leave out.

The piece covers: prerequisites and the GitHub App scopes, the click-path through chatgpt.com/codex/security/scans, picking a history window, editing the auto-generated threat model with a worked Django example, triaging Recommended vs All Findings, and shipping PR patches.

The non-obvious part is the threat-model edit. Backfill produces an auto-generated model and most teams treat it as cosmetic. It's actually the highest-leverage knob in the product - on a Django repo, a focused edit cut Recommended Findings from 30 down to 12 with sharper prioritization.

I also include the benchmark numbers (74% TPR vs Semgrep 20% and Snyk 28% on a 162K-line test corpus, per Agent Finder), a side-by-side with Claude Code Security Review, and the runtime gaps where DAST still matters (CORS, broken auth at runtime, business logic across microservices). Feedback welcome, especially from anyone running it in production already.
