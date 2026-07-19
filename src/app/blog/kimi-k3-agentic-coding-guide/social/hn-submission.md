# Hacker News Submission - Kimi K3 for Agentic Coding

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Kimi K3 for agentic coding: Claude Code drop-in, pricing, local-run reality

**URL:** https://avinashsangle.com/blog/kimi-k3-agentic-coding-guide

---

**First Comment:**

Author here. Moonshot released Kimi K3 (2.8T open-weight MoE) on July 16, and most coverage is benchmark tables or news reactions, so I wrote the practitioner side. The most useful finding: Claude Code speaks any Anthropic-compatible endpoint, so you can route it at Moonshot with one env block and run K3 without a wrapper. The two setup traps I hit were the unset Haiku model override (background calls fail) and a leftover ANTHROPIC_API_KEY conflicting with the auth token.

The honest catch is that K3 runs at max reasoning effort by default, so it's slow and verbose, and the $0.30/M cached-input rate only pays off on long cache-heavy loops. You also can't self-host it on a desktop, the 2.8T weights need a multi-GPU server. Open weights land July 27. Feedback welcome, especially from anyone who's benchmarked it against Claude on real repo work.
