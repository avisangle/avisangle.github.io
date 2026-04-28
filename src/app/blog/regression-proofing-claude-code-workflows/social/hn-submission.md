# Hacker News Submission - Regression-Proof Claude Code Workflows

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Regression-proofing Claude Code after Anthropic's April 23 postmortem

**URL:** https://avinashsangle.com/blog/regression-proofing-claude-code-workflows

---

**First Comment:**

Author here. Anthropic's April 23 postmortem confirmed three confounding wrapper changes silently degraded Claude Code over seven weeks. Their own evals missed all three. The recommended mitigation was a usage-limit reset; no flags, no version-pinning advice.

The next day, v2.1.119 and v2.1.120 shipped within 24 hours and the community filed eight more bugs against them, including a silent Opus-4.7-to-1M-context swap that changed both pricing and cache behaviour. The community gist that documents the rollback to v2.1.117 is the closest thing to a survival guide. There was no end-to-end practitioner playbook combining version pinning, effort-level locking, model allowlists (the new modelOverrides map for Bedrock and Vertex), a Stop-hook canary against fixture prompts, and a rollback runbook. So I wrote one. Feedback welcome, especially on the Stop-hook fixture-suite design and the Bedrock pinning trade-offs.
