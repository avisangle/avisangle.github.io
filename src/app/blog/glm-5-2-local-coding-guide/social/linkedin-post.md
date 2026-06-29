# LinkedIn Post - Run GLM-5.2 Locally for AI Coding

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py glm-5-2-local-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
For the first time, an MIT-licensed model you can run yourself is genuinely close to the frontier on coding.

GLM-5.2 from Z.ai topped the Artificial Analysis Intelligence Index as the #1 open-weight model the week it launched. That kicked off a wave of "can I finally replace Claude with a local model" threads. So I worked through what running it actually costs in hardware, not hype.

What I found after the research:

- It scores 51 on the index, behind only Claude Opus 4.8 (56) and GPT-5.5 (55), and beats GPT-5.5 on SWE-bench Pro (62.1).
- "Local" is heavier than it sounds. MoE saves compute, not memory, so all 744B weights sit in RAM at once: ~245GB for the 2-bit quant, 466 to 820GB for coding-grade Q4 to Q8.
- The 2-bit quant most guides recommend is the "can I run it at all" tier. Below Q4 it emits malformed tool calls and loops. Q4 is the real floor, Q8 the safe target.
- Local throughput is single-digit tokens per second on prosumer hardware versus 80 to 200 on a cloud API.

Here's the part that surprised me. The hosted GLM-5.2 API runs at about $1.40/$4.40 per 1M tokens, roughly one-sixth of GPT-5.5 or Opus. So unless you have a privacy, offline, or very-high-volume reason, the open model on someone else's hardware is often the saner middle ground than buying 256GB of RAM.

I wrote a full guide covering the hardware tiers, the quant table, exact llama.cpp commands, and how to wire it into Aider or Cline:

https://avinashsangle.com/blog/glm-5-2-local-coding-guide

Would you run a 744B model locally for daily coding, or is the cloud API the smarter trade for you?

#OpenSource #LocalLLM #AICoding #GLM #MachineLearning
