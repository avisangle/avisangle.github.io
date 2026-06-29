# Hacker News Submission - Run GLM-5.2 Locally for AI Coding

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Running GLM-5.2 locally for coding: hardware, quants, and when cloud wins

**URL:** https://avinashsangle.com/blog/glm-5-2-local-coding-guide

---

**First Comment:**

Author here. With GLM-5.2 landing as the top open-weight model on the Artificial Analysis index, I wanted to pin down what running it locally for coding actually requires, beyond the quant table everyone reposts.

The thing that surprised me most: MoE saves compute, not memory, so all 744B weights sit in RAM at once (roughly 245GB at 2-bit, up to 820GB at Q8). And the 2-bit quant most guides point to is noticeably degraded for agentic coding - below Q4 you get malformed tool calls and loops. The honest conclusion is that unless you have a privacy, offline, or high-volume reason, the hosted API at ~$1.40/$4.40 per 1M tokens is often the saner trade than buying the hardware. Curious what tok/s others are getting at Q4+ on real rigs. Feedback welcome.
