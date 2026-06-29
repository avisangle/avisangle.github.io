# Dev.to + Hashnode Cross-post - Run GLM-5.2 Locally for AI Coding

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py glm-5-2-local-coding-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py glm-5-2-local-coding-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: How to Run GLM-5.2 Locally for AI Coding (2026 Guide)
DESCRIPTION: GLM-5.2 is the top open-weight coding model of 2026. Run it locally with llama.cpp and Unsloth quants - the hardware, the right quant, and when to use cloud.
TAGS: opensource, ai, llm, coding
CANONICAL_URL: https://avinashsangle.com/blog/glm-5-2-local-coding-guide
COVER_IMAGE: https://avinashsangle.com/og-glm-5-2-local-coding-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/glm-5-2-local-coding-guide).

GLM-5.2 is Z.ai's open-weight Mixture-of-Experts model (744B total params, MIT license) and the current top open-weight model on the Artificial Analysis Intelligence Index. You can run it locally for coding, but it needs roughly 245GB of memory at 2-bit and degrades below Q4. Here is how to size, run, and wire it in.

## TL;DR

- GLM-5.2 is the **#1 open-weight model** on the Artificial Analysis Intelligence Index (score 51, up 11 points from GLM-5.1), behind only Claude Opus 4.8 (56) and GPT-5.5 (55).
- Local minimum is **~245GB RAM+VRAM** for Unsloth's 2-bit quant. A 256GB Mac Studio runs it. Serious coding at Q4 to Q8 needs a multi-GPU or high-RAM server (466GB to 820GB).
- Run it with **llama.cpp or LM Studio** (not Ollama locally - that tag is cloud-only), then connect Aider, Cline, or Continue over an OpenAI-compatible endpoint.
- Honest verdict: great for cost-sensitive, private, or offline work; cloud frontier models still win on interactive speed and hard multi-file reasoning.

## What Is GLM-5.2 and Why Developers Care

GLM-5.2 is an open-weight large language model from Z.ai (Zhipu AI), a Chinese lab. It shipped to Coding Plan subscribers on June 13, 2026, and the open weights dropped three days later on Hugging Face and ModelScope. It is a sparse Mixture-of-Experts model with **744B total parameters and about 40B active per token**, a **1,000,000-token context window**, and up to 128K output tokens. The license is MIT, so you can use and deploy it commercially without restriction.

The reason it matters is simple: it became the most capable open-weight model on the Artificial Analysis Intelligence Index the week it launched, the first time an openly licensed model has felt close to the frontier for agentic coding. Nathan Lambert called it the [first open-weight model that feels right in coding harnesses as a general agent](https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open). That claim is what triggered the wave of ["can I finally replace Claude with a local model"](https://news.ycombinator.com/item?id=48542100) threads on Hacker News in June 2026.

Cost is the other half of the story. The hosted GLM-5.2 API runs at roughly **$1.40 per 1M input and $4.40 per 1M output tokens**, about one-sixth the price of GPT-5.5 ($5/$30) or Claude Opus 4.8 ($5/$25), according to [Artificial Analysis](https://artificialanalysis.ai/models/glm-5-2). When the API is already that cheap, the case for running it locally comes down to privacy, offline use, and very high volume rather than raw savings.

| Spec | GLM-5.2 |
|---|---|
| Architecture | Sparse MoE, 744B total / ~40B active |
| Context window | 1,000,000 tokens in / 128K out |
| License | MIT |
| Weights released | BF16 and FP8, June 16, 2026 |
| Hosted API price | ~$1.40 / $4.40 per 1M tokens |

## How Good Is GLM-5.2 at Coding?

GLM-5.2 scores **51 on the Artificial Analysis Intelligence Index v4.1**, ranking first of 93 open-weight models. That is an 11-point jump from GLM-5.1 (which scored 40), not the 41-point figure that circulated in early coverage. It sits just behind the two leading proprietary models on the same index: Claude Opus 4.8 at 56 and GPT-5.5 at 55, per [Artificial Analysis](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index).

On coding specifically, the official figure Z.ai emphasizes is **SWE-bench Pro 62.1**, which beats both GLM-5.1 (58.4) and GPT-5.5 (58.6). It scores 74.4% on FrontierSWE, a near-tie with Claude Opus, and jumps to 81.0 on Terminal-Bench 2.1 (up from 62 in GLM-5.1) though it still trails Opus (85) and GPT-5.5 (84) there. Secondary aggregators report a SWE-bench Verified score around 77.8%, but I would treat that as approximate until you confirm it against the model card.

| Benchmark | GLM-5.2 | GPT-5.5 | Claude Opus 4.8 |
|---|---|---|---|
| AA Intelligence Index | 51 | 55 | 56 |
| SWE-bench Pro | 62.1 | 58.6 | - |
| FrontierSWE (long-horizon) | 74.4% | 72.6% | 75.1% |
| Terminal-Bench 2.1 | 81.0 | 84.0 | 85.0 |

There is one real weakness worth knowing before you commit hardware to it: GLM-5.2 is verbose. Community measurements put it around **42K tokens per task** versus roughly 10K for GPT-5.5-high, about 4x more output, and Artificial Analysis flags it as outside the optimal efficiency quadrant. That verbosity hurts twice over - it slows down local inference where you are bandwidth-bound, and it eats into the cost advantage on the hosted API. The honest summary from one Hacker News thread was that GLM-5.2 feels [about six months behind the frontier labs, very similar to where Opus was in January](https://news.ycombinator.com/item?id=48587383). For an MIT-licensed model you can run yourself, that gap is remarkably small.

## What Hardware Do You Need to Run GLM-5.2 Locally?

The first thing to internalize is that **MoE saves compute, not memory**. Even though only ~40B parameters activate per token, all 744B weights must sit in RAM or VRAM at once, plus headroom for the KV cache (which is large at long context). Offloading inactive experts to system RAM saves on compute throughput, not on the total memory footprint. There is no trick that lets you run this model in 64GB.

**Realistic minimum (2-bit, ~245GB):** A 256GB unified-memory Mac Studio (M3 or M4 Ultra) fits the 2-bit quant directly and, thanks to high memory bandwidth, outpaces several "AI" mini-PCs. The other path is a single 24GB GPU (RTX 3090/4090/A6000) plus 256GB of system RAM with MoE offloading, where the active experts stay in VRAM and the rest page from RAM.

**Comfortable coding (Q4 to Q8, 466-820GB):** For coding-grade quality you want Q4 to Q8, which means a multi-GPU server (think several RTX 6000 Pro Blackwell cards) or a high-RAM EPYC/Threadripper workstation with 512GB to 1TB of DDR5. Memory bandwidth is the bottleneck here, not core count, so fast RAM and wide memory channels matter more than raw GPU FLOPs.

Throughput is sobering. Real-world numbers people posted on [the Hacker News "how to run locally" thread](https://news.ycombinator.com/item?id=48636377) range from about 1 token per second on a CPU-only 12-core box to roughly 6 tokens per second on dual RTX 3090s with offload. Cloud endpoints serve 80 to 200 tokens per second. A useful rule of thumb from that thread: decode speed tracks `active_weights_GB / memory_bandwidth`, which is why a Mac's ~615 GB/s unified memory beats a DGX Spark's ~274 GB/s despite the marketing.

## Which GLM-5.2 Quantization Should You Use?

The local story for GLM-5.2 is dominated by [Unsloth's Dynamic GGUF quantizations](https://huggingface.co/unsloth/GLM-5.2-GGUF). Their dynamic method upcasts attention and critical MLP layers to 8-bit or 16-bit while dropping less important layers to 1-bit or 2-bit, which keeps quality higher than a uniform quant at the same size. The full range runs from a 217GB 1-bit build up to the 1.51TB BF16 original.

| Quant | Disk size | Notes |
|---|---|---|
| UD-IQ1_S (1-bit) | 217GB | ~76% top-1, smallest runnable |
| UD-IQ2_M (2-bit) | 239GB | ~82% top-1, fits a 256GB Mac |
| UD-Q4_K_XL (4-bit) | 467GB | "mostly lossless", coding floor |
| UD-Q5_K_XL (5-bit) | 562GB | "mostly lossless" |
| Q8_0 (8-bit) | 801GB | near full precision, safe target |
| BF16 (full) | 1.51TB | datacenter only |

Here is the part most quant tables skip. Unsloth's "mostly lossless" claims are measured by KL divergence, which does not always translate to agentic coding. On the same Hacker News thread, practitioners pushed back hard: one said the **ideal range for coding is at least Q8**, another reported that "when Q4 is claimed lossless I end up needing Q5 or Q6" for real long-context work, and a third estimated roughly 3% accuracy loss at 4-bit and more than 17% at 2-bit. Heavily quantized models are more likely to make rookie mistakes, emit malformed tool calls, and get stuck in loops - exactly the failure modes that wreck an agentic run.

My practical recommendation: treat **2-bit as "can I run it at all"**, use **Q4_K_XL as the realistic floor for serious coding**, and target **Q8 if you have the memory**. And do not mix the FP16/FP8 benchmark numbers above with what you will actually get at 2-bit or 4-bit; the published scores were not run on heavy quants.

## How to Run GLM-5.2 Locally (Step by Step)

The primary local path is llama.cpp with an Unsloth GGUF. On a Mac, LM Studio wraps the same engine in a GUI and is the easiest on-ramp. Below is the llama.cpp route, which gives you the most control and the OpenAI-compatible server you need for coding agents.

### Step 1: Build llama.cpp

```bash
# Build with CUDA (use -DGGML_METAL=ON on Apple Silicon instead)
git clone https://github.com/ggml-org/llama.cpp
cmake llama.cpp -B llama.cpp/build \
  -DBUILD_SHARED_LIBS=OFF -DGGML_CUDA=ON
cmake --build llama.cpp/build --config Release -j \
  --clean-first --target llama-cli llama-server
```

### Step 2: Download a quant that fits your memory

```bash
# 2-bit (~239GB) - fits a 256GB Mac Studio
hf download unsloth/GLM-5.2-GGUF \
  --local-dir unsloth/GLM-5.2-GGUF \
  --include "*UD-IQ2_M*"

# Prefer Q4_K_XL (~467GB) if you have the memory for coding work
# --include "*UD-Q4_K_XL*"
```

### Step 3: Run it with Unsloth's recommended sampling

Z.ai and Unsloth recommend temperature 1.0, top_p 0.95, and min_p 0.01. For long-context coding sessions, quantize the KV cache to stretch how far the 1M window goes before you run out of memory.

```bash
./llama.cpp/build/bin/llama-cli \
  --model unsloth/GLM-5.2-GGUF/UD-IQ2_M/GLM-5.2-UD-IQ2_M-00001-of-00006.gguf \
  --temp 1.0 --top-p 0.95 --min-p 0.01 \
  --cache-type-k q4_1 --cache-type-v q4_1 \
  --chat-template-kwargs '{"reasoning_effort":"max"}'
```

**Runtime options at a glance:** Ollama only ships a `glm-5.2:cloud` tag right now, so it is not a local path. vLLM serves the FP8 weights but targets 8x H200-class datacenter hardware. For consumer and prosumer rigs, llama.cpp and LM Studio are the two that actually work.

## Connecting GLM-5.2 to Your Coding Agent

The trick to using any local model with coding tools is the **OpenAI-compatible endpoint**. Start llama-server (or use Unsloth's one-line `llama serve`) and you get an API at `http://localhost:8080/v1` that most agents can talk to with a dummy key.

```bash
# Option A: Unsloth one-liner (auto-downloads + serves a web UI)
llama serve -hf unsloth/GLM-5.2-GGUF:UD-Q4_K_M

# Option B: explicit server with a fixed context window
./llama.cpp/build/bin/llama-server \
  --model unsloth/GLM-5.2-GGUF/UD-Q4_K_M/GLM-5.2-UD-Q4_K_M-00001-of-00010.gguf \
  --alias "GLM-5.2" --host 0.0.0.0 --port 8080 --ctx-size 32768
```

### Aider

Aider talks to any OpenAI-compatible endpoint. Point it at your local server with two environment variables and a model alias:

```bash
export OPENAI_API_BASE=http://127.0.0.1:8080/v1
export OPENAI_API_KEY=local
aider --model openai/GLM-5.2 --no-show-model-warnings
```

### Cline and Continue

In Cline or Continue, choose the **OpenAI Compatible** provider, set the base URL to `http://localhost:8080/v1`, and enter any non-empty API key. This is the standard pattern for local models; it is not documented specifically for GLM-5.2, so expect to confirm the model name your server reports. Z.ai and community write-ups also report first-day support across Claude Code, OpenCode, Roo Code, and Goose, though I would treat those as vendor claims until you have wired one up yourself.

If you are coming from a hosted setup, my [Claude Code cost-tracking guide](https://avinashsangle.com/blog/claude-code-cost-tracking) is a useful companion - the local-versus-cloud decision is ultimately a cost and latency tradeoff, and it helps to measure what you are actually spending today before you invest in 256GB of RAM.

## Should You Actually Run GLM-5.2 Locally?

Run GLM-5.2 locally when you have a real reason that the cloud cannot satisfy: a privacy or compliance requirement that data never leaves your machines, genuinely offline work, very high-volume batch agentic jobs where per-token cost dominates, or you already own a 256GB-plus Mac or a multi-GPU server that would otherwise sit idle. In those cases an MIT-licensed model this capable is a genuine option that did not exist a year ago.

Stay on the cloud when you want interactive speed (single-digit tokens per second is painful for tight edit loops), when the task involves hard multi-file reasoning where the frontier models still have an edge, or when you simply do not have the memory. And here is the part that surprises people: the hosted GLM-5.2 API at $1.40/$4.40 is often the saner middle ground - an open model running on someone else's hardware, far cheaper than GPT-5.5 or Opus, with none of the memory headache. Remember the verbosity tax too: at around 42K tokens per task, GLM-5.2 spends tokens freely, which erodes both local speed and any API savings.

If you are evaluating open-weight options more broadly, it is worth comparing GLM-5.2 against the other models I have covered: [Qwen Code](https://avinashsangle.com/blog/qwen-code-getting-started) for a terminal-native open coding agent, [Gemma 4](https://avinashsangle.com/blog/gemma-4-models-guide) for genuinely laptop-sized local models, and [Apple Core AI](https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide) for on-device inference on Apple Silicon. GLM-5.2 is the heavyweight of that group: the most capable, and by far the most demanding to host.

## Frequently Asked Questions

### What is GLM-5.2 and who made it?

GLM-5.2 is an open-weight large language model from Z.ai (Zhipu AI), released in June 2026 under an MIT license. It uses a Mixture-of-Experts design with 744B total parameters and about 40B active per token, a 1M-token context window, and ranks first among open-weight models on the Artificial Analysis Intelligence Index.

### What hardware do I need to run GLM-5.2 locally?

The realistic minimum is about 245GB of combined RAM and VRAM for Unsloth's 2-bit quant. A 256GB unified-memory Mac Studio runs it directly. For serious coding at Q4 to Q8 you need 466GB to 820GB, which means a multi-GPU server or a high-RAM EPYC or Threadripper workstation.

### Which GLM-5.2 quantization should I use for coding?

The 2-bit quant (UD-IQ2_M, around 239GB) is the can-I-run-it-at-all tier and is noticeably degraded for agentic coding. For real coding work, Q4_K_XL is the practical floor and Q8 is the safe target. Practitioners report that heavy quants below Q4 emit malformed tool calls and get stuck in loops.

### Can GLM-5.2 replace Claude Code or Codex for daily coding?

For cost-sensitive, offline, or batch agentic work, yes. GLM-5.2 beats GPT-5.5 on SWE-bench Pro and near-ties Claude Opus on FrontierSWE. But frontier cloud models still win on interactive speed and complex multi-file reasoning, and local throughput on prosumer hardware is single-digit tokens per second.

### How fast is GLM-5.2 running locally?

Speed depends on memory bandwidth, not raw compute. Community reports range from about 1 token per second on a CPU-only machine to around 6 tokens per second on dual RTX 3090s with MoE offload. Cloud APIs deliver 80 to 200 tokens per second, so local runs feel slow for interactive coding.

### Is GLM-5.2 really open source? What license?

GLM-5.2 ships under an MIT license, confirmed by Artificial Analysis and multiple independent sources. The weights (BF16 and FP8) are published on Hugging Face and ModelScope. MIT means you can use, modify, and deploy it commercially without the usage restrictions some other open-weight licenses impose.

### Can I run GLM-5.2 with Ollama?

Not locally yet. As of late June 2026, the only official Ollama tag is glm-5.2:cloud, which routes to a hosted endpoint rather than running on your machine. To run GLM-5.2 locally, use llama.cpp or LM Studio with Unsloth's GGUF quantizations instead.

### How does GLM-5.2 compare to Claude Opus and GPT-5.5 on coding?

On the Artificial Analysis Intelligence Index, GLM-5.2 scores 51 versus Claude Opus 4.8 at 56 and GPT-5.5 at 55. On coding, it leads GPT-5.5 on SWE-bench Pro (62.1) but trails both on Terminal-Bench 2.1. It is the strongest open-weight option, roughly six months behind the frontier labs.

### How do I connect a local GLM-5.2 to Aider or Cline?

Start an OpenAI-compatible server with llama-server, which exposes an endpoint at localhost:8080/v1. Point your agent at that base URL with a dummy API key. For Aider, set OPENAI_API_BASE and OPENAI_API_KEY, then run aider with the openai/GLM-5.2 model. Cline and Continue use the same OpenAI-compatible provider pattern.

### Is running GLM-5.2 locally cheaper than a cloud API?

Only at high volume and if you already own the hardware. The hosted GLM-5.2 API costs about $1.40 per 1M input and $4.40 per 1M output tokens, roughly one-sixth of GPT-5.5 or Claude Opus. GLM-5.2 is also verbose (around 42K tokens per task), which eats into both local speed and any API savings.
