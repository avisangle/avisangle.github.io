# Hacker News Submission - Stop HalluSquatting in AI Coding Agents

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Lockfiles don't stop HalluSquatting: defending AI coding agents

(63 chars, under the 80 limit)

**URL:** https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents

---

**First Comment:**

Author here. I went looking for a defense guide after the "Beware of Agentic Botnets" paper (arXiv:2607.07433) landed on July 8, and every piece I found explained the attack without saying which settings to change. Writing it up, the thing that surprised me was that the usual supply chain advice mostly doesn't apply: lockfiles protect dependencies you already track, but the agent is adding a new one, and install cooldowns assume the malicious version is recent when a hallusquatter registers early and waits.

Two details worth knowing if you skip the article. The paper's 92.4% hallucination rate for 2025-era repos versus 0.9% for pre-2019 ones means recency and hallucination are the same axis, so the tooling you most want is the tooling your agent is least able to name. And contrary to the headlines, Claude Code wasn't among the nine apps tested; the models were, and Opus 4.5 hit 0% hallucination by searching before fetching in 73% of runs while Sonnet 4.5 hit 100% in the runs where it skipped. That's a habit, not a control.

Interested in whether anyone has a better answer than a PreToolUse-style hook, since verification only proves a name resolves and a squatted package resolves fine.
