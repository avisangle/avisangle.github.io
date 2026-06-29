# Twitter/X Long-form Post - Run GLM-5.2 Locally for AI Coding

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py glm-5-2-local-coding-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
GLM-5.2 just became the #1 open-weight model on the Artificial Analysis Intelligence Index.

It's MIT-licensed and you can run it yourself. So I dug into what that actually takes for coding.

THE MODEL

Z.ai's GLM-5.2: a 744B-param Mixture-of-Experts model, ~40B active per token, 1M-token context.

Index score 51, behind only Claude Opus 4.8 (56) and GPT-5.5 (55). On SWE-bench Pro it hits 62.1 and beats GPT-5.5. For an open model you can host, that gap is small.

THE CATCH WITH "LOCAL"

MoE saves compute, not memory. All 744B weights have to sit in RAM+VRAM at once.

- 2-bit quant: ~245GB (fits a 256GB Mac Studio)
- Q4 to Q8 for real coding: 466GB to 820GB (multi-GPU or high-RAM server)

There's no trick that runs this in 64GB.

THE QUANT TRUTH NOBODY PRINTS

Unsloth's 2-bit is "can I run it at all," not "good for coding." Below Q4 it starts emitting malformed tool calls and looping.

Q4_K_XL is the realistic floor. Q8 if you have the memory.

SPEED

Bandwidth decides decode speed, not FLOPs:
- ~1 tok/s CPU-only
- ~6 tok/s dual RTX 3090 + offload
- 80-200 tok/s on a cloud API

Local feels slow for tight edit loops.

HOW TO WIRE IT IN

llama.cpp or LM Studio (Ollama only ships a cloud tag). Serve an OpenAI-compatible endpoint, then point Aider or Cline at localhost:8080/v1 with a dummy key.

THE HONEST VERDICT

Run it locally for privacy, offline, or high-volume batch work. For everything else, the hosted GLM-5.2 API at ~$1.40/$4.40 per 1M tokens is often the saner call - an open model on someone else's hardware, ~1/6th the price of Opus.

Full guide: hardware tiers, quant table, exact commands, agent setup.

https://avinashsangle.com/blog/glm-5-2-local-coding-guide

Follow @avi_sangle for more AI coding deep-dives.
