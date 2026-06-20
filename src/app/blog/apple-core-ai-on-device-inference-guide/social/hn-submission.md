# Hacker News Submission - Apple Core AI On-Device Inference

**Post date:** Day 1
**Best time:** 2:00 PM IST (morning PST window)

---

**Title:** Apple Core AI: Run open-weight models on-device on Apple Silicon

**URL:** https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide

---

**First Comment:**

Author here. Apple introduced Core AI at WWDC 2026 as the generative-AI successor to Core ML, and I spent a day with the docs and the conversion repos (coreai-torch, coreai-models, coreai-optimization) to see how it works in practice.

The part I found most useful: converting a PyTorch model is a tidy three-step pipeline (torch.export, decomposition table, TorchConverter), and the converted model plugs into the same LanguageModelSession API as Apple Foundation Models, with @Generable structured output. Pre-converted Qwen, Mistral, and SAM3 ship as Swift packages.

I tried to keep the writeup honest about the tradeoff: on-device is great for cost, privacy, offline, and latency on smaller models, but "free" is only free at the margin once you account for memory, battery, and the quantization work. Cloud still wins for frontier reasoning and large context. Feedback and corrections welcome, especially from anyone who has shipped a quantized model through this pipeline.
