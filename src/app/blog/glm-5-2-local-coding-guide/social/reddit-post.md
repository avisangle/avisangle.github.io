# Reddit Posts - Run GLM-5.2 Locally for AI Coding

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py glm-5-2-local-coding-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: LocalLLaMA
TITLE: What running GLM-5.2 locally for coding actually costs in hardware and quant quality
FLAIR: Tutorial
---BODY---
GLM-5.2 topping the Artificial Analysis index as the #1 open-weight model set off the usual "can I finally drop the cloud" threads, so I worked through the real numbers for running it as a coding model.

**The memory reality first.** It's a 744B-param MoE with ~40B active. The MoE part saves compute, not memory, so all 744B weights have to sit in RAM+VRAM at once plus KV cache. That puts the floor around:

- **2-bit (UD-IQ2_M, ~239GB):** fits a 256GB Mac Studio, or a 24GB GPU + 256GB system RAM with offload.
- **Q4 to Q8 (466-820GB):** multi-GPU server or a high-RAM EPYC/Threadripper box.

**On quant quality for coding specifically.** Unsloth's dynamic 2-bit is impressive for its size, but the "mostly lossless" claims are KL-divergence based and don't fully carry to agentic work. The pushback I kept seeing (and agree with): below Q4 you start getting malformed tool calls, loops, and rookie mistakes. **Q4_K_XL is the realistic coding floor, Q8 is the safe target.** Don't read the FP16/FP8 benchmark scores and expect them at 2-bit.

**Speed tracks bandwidth, not FLOPs.** Reported numbers ranged from ~1 tok/s CPU-only to ~6 tok/s on dual 3090s with offload, vs 80-200 tok/s on a hosted endpoint. A Mac's unified memory bandwidth beats some "AI" mini-PCs here.

**Benchmarks for context:** index score 51 (behind Opus 4.8 at 56 and GPT-5.5 at 55), SWE-bench Pro 62.1 which actually beats GPT-5.5. One real weakness is verbosity, ~42K tokens/task vs ~10K for GPT-5.5-high, which hurts local speed too.

Full writeup with the quant size table, exact llama.cpp build/run commands, and the OpenAI-compatible endpoint setup for Aider/Cline: https://avinashsangle.com/blog/glm-5-2-local-coding-guide

Happy to compare notes if anyone's running it at Q4+ on real hardware - curious what tok/s you're getting.
---POST---
SUBREDDIT: ollama
TITLE: Heads up: GLM-5.2 on Ollama is cloud-only right now, here's the local path that works
FLAIR: Resources
---BODY---
If you went looking for GLM-5.2 to run locally with Ollama, you'll hit a wall: as of late June the only official tag is `glm-5.2:cloud`, which routes to a hosted endpoint rather than running on your machine. There's no local quantized tag yet.

That's worth knowing because GLM-5.2 is currently the **#1 open-weight model** on the Artificial Analysis index (MIT licensed, 744B-param MoE), so a lot of people are trying to pull it locally and getting confused.

**The local path that does work today** is Unsloth's GGUF quants through llama.cpp or LM Studio:

- Download a quant that fits your memory (2-bit is ~239GB and fits a 256GB Mac; Q4 ~467GB is the floor I'd use for coding).
- One important gotcha: this is MoE, so the saving is compute, not memory. All 744B weights still have to fit in RAM+VRAM at once.
- Run `llama-server` (or `llama serve`) to expose an OpenAI-compatible endpoint at `localhost:8080/v1`, then point your coding tool at it with a dummy API key.

So you can absolutely run it locally, just not via `ollama run` for now. If you only want the model behind an OpenAI-compatible API for a coding agent, the llama.cpp server gets you there in a few commands.

I wrote up the full setup (quant sizes, hardware tiers, sampling settings, Aider/Cline wiring): https://avinashsangle.com/blog/glm-5-2-local-coding-guide

Has anyone seen a local Ollama tag land for it yet? Happy to update if that's changed.
