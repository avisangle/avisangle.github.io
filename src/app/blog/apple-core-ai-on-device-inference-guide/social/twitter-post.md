# Twitter/X Long-form Post - Apple Core AI On-Device Inference

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py apple-core-ai-on-device-inference-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Apple shipped Core AI at WWDC 2026. It runs open-weight models like Qwen and Mistral entirely on Apple Silicon. Zero token cost. Zero server dependency.

I spent a day with the docs and the conversion repos. Here's what actually matters.

WHAT IT IS

Core AI is the generative-AI successor to Core ML. A memory-safe Swift API for running LLMs on-device across CPU, GPU, and Neural Engine, with ahead-of-time compilation and inference-memory control. iPhone, iPad, Mac, Vision Pro.

THE COST ANGLE

Inference runs locally, so the marginal cost of one more request is roughly the electricity to run the Neural Engine for a few hundred ms. No per-token bill. Data never leaves the device. For high-volume or privacy-sensitive features, that changes the math.

The catch nobody mentions: "free" is only free at the margin. You pay up front in device memory, battery, and the work to convert and quantize a model so it fits.

MODELS YOU GET FOR FREE

Apple ships pre-converted Qwen, Mistral, and SAM3 as Swift packages in apple/coreai-models. Add a package, call it.

CONVERTING YOUR OWN (PyTorch)

Three steps with coreai-torch:
1. torch.export.export(model, args=...)
2. ep.run_decompositions(get_decomp_table())
3. TorchConverter().add_exported_program(ep).to_coreai()

then .optimize() to specialize for Apple Silicon.

THE NICE SURPRISE

A converted model plugs into the same LanguageModelSession API as Apple Foundation Models. Same session.respond, same streaming, same @Generable structured output. You choose which model runs underneath.

WHEN NOT TO USE IT

On-device wins on cost, privacy, offline, and latency for smaller models. A cloud model like Claude still wins on frontier reasoning and huge context. The pragmatic pattern is hybrid: cheap private cases on-device, hard cases in the cloud.

Full guide with the conversion pipeline, Swift code, and quantization notes:

https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide

Follow @avi_sangle for more on-device + AI tooling deep-dives.
