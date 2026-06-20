# Content Brief: Apple Core AI On-Device Inference Guide

**Slug:** `apple-core-ai-on-device-inference-guide`
**Researched:** 2026-06-20
**Status:** ready to write
**Effort/competition:** LOW competition, HIGH freshness window (framework <2 weeks old)

---

## Phase 1 — Topic Validation Summary

### Verdict: WRITE IT (act fast — freshness window)

Apple shipped **Core AI** at WWDC 2026 (June 8-9, 2026) as a brand-new on-device inference framework — the developer-facing successor to Core ML, purpose-built for generative/LLM workloads on Apple Silicon. Developer betas and open-source repos shipped immediately. The framework is ~2 weeks old at time of research, so the definitive practitioner guide slot is wide open.

### Search demand evidence
- HN front-page thread (June 9, 2026) on Core AI
- Apple Newsroom + official `developer.apple.com/core-ai/` with WWDC sessions 324/325/326
- Multiple recap posts (Appcircle, InvideLabs, aimadetools, ChatForest, runaihome, LetsDataScience)
- Confirmed open repos: `apple/coreai-torch`, `apple/coreai-models`, `apple/coreai-optimization`

### Competition analysis (thin — the opportunity)
- **Apple's own** WWDC session pages + docs (reference material, not a tutorial)
- **Appcircle blog** — high-level explainer, not a hands-on walkthrough
- **runaihome.com** — home-lab preview angle, not a dev conversion guide
- **GAP:** No practitioner guide walks an AI engineer through the PyTorch→Core AI conversion pipeline, model selection, Swift integration, quantization, AND the cost/performance tradeoff vs cloud inference. That's our article.

### AI citation potential: HIGH
New framework + engineers asking AI engines "how do I run X on-device with Core AI" → low existing authoritative content to displace. Primary-source advantage if we publish accurate, code-level steps with verified API names.

### Freshness opportunity: VERY HIGH
Framework is brand new. No outdated incumbents to fight — just be first and accurate.

### First-party (Bing/ChatGPT) demand: NONE direct, adjacent only
The site's observed Bing queries (25 total, 120 days) are entirely Claude Code / Anthropic focused (`how to write claude.md`, `ant cli`, cost-tracking queries). **No** Apple / on-device / inference queries from this site's current audience. The only adjacent signal is inference-**cost** demand:
- "is it possible to extract the cost of a session from claude?" (pos 4.0) — observed
- "how to monitor token usage cost in claude web" (pos 6.0) — observed
- "how to check the cost of claude code for this month" (pos 4.0) — observed

**Implication:** This is a *new-audience acquisition / trend* play, not a query we already rank for. Lead the angle with the **cost** bridge (zero token cost) to connect to the audience we DO have. Honest note: this won't convert existing Bing demand on day one; it's a bet on the freshness window + AI citations.

---

## Phase 2 — Keyword Strategy

### Primary keyword
`Apple Core AI` (on-device inference)

### Secondary keywords
- on-device AI inference
- Core AI framework
- PyTorch to Core AI conversion
- Apple Silicon LLM inference
- zero-cost on-device inference

### Long-tail queries
- how to run open-weight models on Apple Silicon
- Apple Core AI vs Core ML
- convert PyTorch model to Core AI
- run Qwen / Mistral on-device with Core AI
- Apple Core AI getting started guide
- Core AI Swift API tutorial
- on-device inference vs cloud cost comparison
- Apple Core AI quantization (coreai-optimization)

### FAQ candidates (8-10)
Marked `[Bing]` = observed first-party demand; `[PAA]` = autocomplete/People-Also-Ask/synthesized.
1. What is Apple Core AI and how is it different from Core ML? `[PAA]`
2. Does Core AI cost anything to run? `[Bing-adjacent]` (ties to observed inference-cost demand)
3. Which open-weight models does Core AI support out of the box? `[PAA]`
4. How do I convert a PyTorch model to Core AI? `[PAA]`
5. What hardware and OS does Core AI require? `[PAA]`
6. Is on-device inference faster than cloud inference? `[PAA]`
7. Can I run Qwen or Mistral on iPhone with Core AI? `[PAA]`
8. How does Core AI compare to running models through a cloud API like Claude? `[Bing-adjacent]` (cost bridge)
9. Does Core AI work with the Foundation Models framework? `[PAA]`
10. When should I NOT use on-device inference? `[PAA]`

---

## Phase 3 — Content Brief

### Article Metadata
- **Title (55-65 chars):** `Apple Core AI: Run Open-Weight Models On-Device Free` (52) — alt: `Apple Core AI Guide: Zero-Cost On-Device Inference` (50)
- **Slug:** `apple-core-ai-on-device-inference-guide`
- **Meta description (130-160):** `A practitioner's guide to Apple Core AI: convert PyTorch models, run Qwen and Mistral on Apple Silicon, and cut inference costs to zero on-device.` (146)
- **Target word count:** 2,600-3,000
- **Estimated read time:** ~11-12 min
- **Category:** AI Development
- **Lucide icon:** `Cpu` (alt: `Smartphone` or `Zap`)

### Content Outline

**Intro + direct answer (40-60 words):** Apple Core AI is a Swift framework, announced at WWDC 2026, for running AI models entirely on-device on Apple Silicon — zero server dependencies, zero token cost. It replaces Core ML for generative workloads, ships curated open-weight models (Qwen, Mistral, SAM3), and includes a PyTorch conversion pipeline for custom models.

**TL;DR (3-4 bullets):** what Core AI is · zero token cost vs cloud · supported models + PyTorch pipeline · when it does / doesn't beat cloud.

#### H2: What Is Apple Core AI? (Core AI vs Core ML)
- Successor to Core ML, purpose-built for generative/LLM workloads; memory-safe Swift API.
- Runs across CPU/GPU/Neural Engine with AOT compilation, zero-copy data paths, stateful execution, inference-memory control.
- Platforms: iPhone, iPad, Mac, Vision Pro — all Apple Silicon.
- Source: developer.apple.com/core-ai, WWDC session 324 "Meet Core AI".

#### H2: Why On-Device Inference Now? (The Zero-Token-Cost Argument)
- The cost bridge — data never leaves device, no per-token billing, no cloud latency. Tie to inference-cost economics readers already track.
- Reference the cost-pressure context (engineers tracking per-engineer LLM bills) without overclaiming.
- Honest tradeoff framing: on-device wins for privacy, offline, high-volume cheap workloads; cloud still wins for frontier-model quality + huge context.
- **Internal link:** `claude-code-cost-tracking`.

#### H2: Which Open-Weight Models Core AI Ships (Qwen, Mistral, SAM3)
- `apple/coreai-models` — Swift packages, pre-converted + optimized; includes Qwen, Mistral, SAM3, + "Generative AI Skills".
- How to pull a model as a Swift package dependency.
- **Internal links:** `gemma-4-models-guide`, `qwen-code-getting-started` (open-weight cluster).

#### H2: How to Convert a PyTorch Model to Core AI (coreai-torch)
- The three-step pipeline (VERIFIED API names):
  1. `torch.export.export(model, args=(...))`
  2. `ep.run_decompositions(get_decomp_table())`
  3. `TorchConverter().add_exported_program(ep).to_coreai()` → `.optimize()`
- Include the quickstart snippet (below) verbatim — verified from `apple.github.io/coreai-torch`.
- Workflow-selection table: ExportedProgram vs nn.Module vs externalized modules (`add_pytorch_module`, `externalize_modules=[...]`).
- Custom ops: `register_torch_lowering()`, `TorchMetalKernel` (Metal 4 GPU kernels), composite ops (RoPE, RMSNorm, SDPA, attention).
- Note: exact macOS/Python/Xcode version reqs NOT published on the overview pages — flag as "check Quickstart/Installing guide" rather than inventing a number.

```python
import torch
from coreai_torch import TorchConverter, get_decomp_table

model = MyModel().eval()
ep = torch.export.export(model, args=(torch.randn(1, 10),))
ep = ep.run_decompositions(get_decomp_table())
coreai_program = TorchConverter().add_exported_program(ep).to_coreai()
coreai_program.optimize()
```

#### H2: Loading and Running a Model with the Swift API
- Conceptual Swift integration: load model, run inference, manage inference memory. (Cite the docs path `documentation/coreai/integrating-on-device-ai-models-in-your-app-with-core-ai` — do NOT fabricate full Swift code; show structure and link to Apple's sample.)
- Relationship to Foundation Models framework (Language Model protocol) — third-party models can conform. Mark as "per WWDC session" since the overview page didn't confirm; verify in session 326 before asserting.

#### H2: Shrinking Models for Mobile (coreai-optimization)
- `apple/coreai-optimization` — quantization + palettization with minimal accuracy loss.
- Why this matters for iPhone/iPad memory budgets.

#### H2: Debugging and Profiling Core AI Models
- Xcode integration: inspect Core AI graphs, profile, validate artifacts.
- Core AI Debugger (dedicated macOS app).

#### H2: When On-Device Beats Cloud (and When It Doesn't)
- Decision matrix: privacy-sensitive / offline / high-volume-cheap / latency-critical → on-device. Frontier quality / massive context / no Apple hardware → cloud.
- Honest practitioner take. **Internal link:** `gemini-3-5-flash-agentic-coding-guide` (cloud model context) and/or `persistent-memory-ai-coding-agents`.

#### H2: FAQ (Accordion — use the 8-10 candidates above)

### Unique Angle
- **First practitioner conversion walkthrough** — verified `coreai-torch` API names and the exact 3-step pipeline, not a keynote recap.
- **Cost-economics lens** — frames Core AI through the inference-cost question the site's audience already asks (observed Bing demand), bridging Claude Code readers to a new framework.
- **Honest tradeoff matrix** — most coverage is breathless launch hype; we give the "when NOT to use it" section.
- Avinash's original angle: practitioner who tracks inference cost across providers (cost-tracking post) evaluating on-device as a real cost lever.

### Internal Linking Opportunities
**Existing posts (verified to exist):**
- `claude-code-cost-tracking` — cost bridge (primary)
- `gemma-4-models-guide` — open-weight model cluster
- `qwen-code-getting-started` — Qwen on-device tie-in
- `gemini-3-5-flash-agentic-coding-guide` — cloud-model contrast
- `persistent-memory-ai-coding-agents` — adjacent AI-tooling

**Future cluster candidates:**
- "Running Qwen on iPhone with Core AI: hands-on" (deeper Swift sample)
- "Core AI quantization deep-dive (coreai-optimization)"
- "On-device vs cloud inference: real cost benchmark"

### Authority sources to cite
- https://developer.apple.com/core-ai/ (official)
- https://apple.github.io/coreai-torch/main/ + https://github.com/apple/coreai-torch
- https://github.com/apple/coreai-models
- https://github.com/apple/coreai-optimization
- https://developer.apple.com/videos/play/wwdc2026/324/ (Meet Core AI)
- https://developer.apple.com/videos/play/wwdc2026/326/ (Integrate on-device models)
- https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/

### Accuracy guardrails for the writer
- DO NOT invent macOS/Python/Xcode version numbers — overview pages don't state them; point to the Quickstart.
- VERIFY the Foundation Models / Language Model protocol relationship against WWDC session 326 before asserting it as fact.
- Keep the Swift code conceptual unless you confirm exact API signatures from Apple's sample code; the PyTorch snippet IS verified and safe to ship.
- Don't overstate "zero cost" — hardware is the cost; phrase as "zero token / server cost."

---

## Ready to Write?
Run: /write-blogpost apple-core-ai-on-device-inference-guide
