# Dev.to + Hashnode Cross-post - Apple Core AI On-Device Inference

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py apple-core-ai-on-device-inference-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py apple-core-ai-on-device-inference-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Apple Core AI: Run Open-Weight Models On-Device for Free
DESCRIPTION: A practitioner's guide to Apple Core AI: convert PyTorch models, run Qwen and Mistral on Apple Silicon, and cut inference costs to zero on-device.
TAGS: apple, ai, machinelearning, swift
CANONICAL_URL: https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide
COVER_IMAGE: https://avinashsangle.com/og-apple-core-ai-on-device-inference-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide).

Apple Core AI is a Swift framework, announced at WWDC 2026, for running AI models entirely on-device on Apple Silicon. Zero server dependencies, zero token cost. It replaces Core ML for generative work, ships pre-converted open-weight models like Qwen and Mistral, and includes a PyTorch pipeline for your own models.

## TL;DR

- **What it is:** Core AI is Apple's on-device inference framework, announced at WWDC 2026 (June 8 to 9). It is the generative-AI successor to Core ML, with a memory-safe Swift API and ahead-of-time compilation for Apple Silicon.
- **Why it matters:** inference runs locally, so there is zero token cost and zero server dependency. Data never leaves the device. That is a real cost lever for high-volume or privacy-sensitive workloads.
- **Models:** Apple ships pre-converted Qwen, Mistral, and SAM3 as Swift packages in `apple/coreai-models`, plus a PyTorch conversion pipeline (`coreai-torch`) for custom models.
- **The honest tradeoff:** on-device wins on cost, privacy, offline, and latency for smaller models. A cloud API like Claude still wins on frontier quality and huge context. Pick per workload, not per hype cycle.

## What Is Apple Core AI? (Core AI vs Core ML)

**Apple Core AI** is a framework for loading and running AI models directly on Apple Silicon, introduced at WWDC 2026 on June 8 to 9, 2026 ([Apple Newsroom](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/)). Where Core ML was Apple's general machine-learning runtime, Core AI is purpose-built for generative workloads: large language models, image segmentation, and the kinds of models that need a token loop and managed state rather than a single forward pass.

The framework exposes a modern, memory-safe Swift API and runs across the CPU, GPU, and Neural Engine together. According to the [official Core AI documentation](https://developer.apple.com/core-ai/), models are automatically specialized for the hardware they run on, with ahead-of-time compilation for instant load times, zero-copy data paths, stateful execution, and fine-grained control over inference memory. It targets iPhone, iPad, Mac, and Apple Vision Pro, all Apple Silicon.

The mental model that helped me: Core ML answered "how do I run a model on Apple hardware?" Core AI answers "how do I run a chatty, stateful, memory-hungry generative model on Apple hardware without melting the battery?" Apple's "Meet Core AI" session (WWDC session 324) frames it as the foundation layer; the curated models and PyTorch tooling sit on top.

> **Quick distinction:** Core ML still exists and is fine for classic vision and tabular ML. Reach for Core AI when the model is generative, needs streaming output, or carries a KV-cache style state between tokens.

## Why On-Device Inference Now? The Zero-Token-Cost Case

The single biggest reason to care about Core AI is cost. On-device inference has zero token cost and zero server dependency, because the model runs locally and the data never leaves the device ([Apple Developer](https://developer.apple.com/core-ai/)). For anyone who has watched a per-token cloud bill climb across a fleet of engineers, that line lands hard.

I track inference economics closely, and the pattern is always the same: a feature that looks cheap at one request quietly becomes expensive at a million. When I wrote about [tracking Claude Code costs](https://avinashsangle.com/blog/claude-code-cost-tracking), the lesson was that the bill is dominated by volume, not by any single clever prompt. On-device inference changes that equation entirely. Once the model is on the device, the marginal cost of one more request is roughly the electricity to run the Neural Engine for a few hundred milliseconds.

Cost is not the only win. Privacy is built in, since nothing is sent to a server. Latency drops because there is no network round trip. And the feature keeps working on a plane or in a tunnel. The catch, which most launch coverage skips, is that "free" is only free at the margin. You pay up front in device memory, battery, and the engineering time to convert and quantize a model so it fits. The hardware is the cost; the requests are free.

## Which Open-Weight Models Core AI Ships

Apple ships a curated set of pre-converted, pre-optimized models as Swift packages in the [apple/coreai-models](https://github.com/apple/coreai-models) repository. The launch set includes popular open-weight families: Qwen and Mistral for text generation, and SAM3 for image segmentation, with more from the research community. You do not have to convert anything to get started; you add a package and call it.

Because the models arrive as Swift packages, adding one looks like any other dependency. In Xcode you add the package URL, or in a `Package.swift` you declare it directly:

```swift
// Add a pre-converted Core AI model as a package dependency
dependencies: [
    .package(
        url: "https://github.com/apple/coreai-models",
        from: "1.0.0"
    )
]

// Then add the specific model product to your target, e.g. a Qwen text model
// or the SAM3 segmenter, per the package's product list.
```

If you already follow open-weight releases, this list will feel familiar. I covered the [Gemma 4 model family](https://avinashsangle.com/blog/gemma-4-models-guide) and [getting started with Qwen Code](https://avinashsangle.com/blog/qwen-code-getting-started) earlier this year. The interesting shift is that the same weights you have been running on a workstation GPU now have a sanctioned path onto a phone in your pocket.

## How to Convert a PyTorch Model to Core AI

To run your own model, use the [coreai-torch](https://github.com/apple/coreai-torch) extensions, which bridge PyTorch and Core AI. The conversion is a three-step pipeline: export the graph, run decompositions, then convert and optimize. Here is the quickstart from [Apple's coreai-torch docs](https://apple.github.io/coreai-torch/main/):

```python
import torch
from coreai_torch import TorchConverter, get_decomp_table

# 1. Export the PyTorch graph with torch.export
model = MyModel().eval()
ep = torch.export.export(model, args=(torch.randn(1, 10),))

# 2. Lower composite ATen ops using Core AI's decomposition table
ep = ep.run_decompositions(get_decomp_table())

# 3. Convert to a Core AI program, then specialize for Apple Silicon
coreai_program = TorchConverter().add_exported_program(ep).to_coreai()
coreai_program.optimize()
```

The three calls map cleanly to three jobs. `torch.export.export` captures a clean computation graph. `get_decomp_table()` breaks high-level composite operators down into primitives Core AI understands. And `TorchConverter().add_exported_program(ep).to_coreai()` produces the Core AI program, which `.optimize()` then specializes for the target hardware.

Which entry point you use depends on what you are starting from. The docs list a small decision table worth internalizing:

- Already have a decomposed `ExportedProgram`? Use `add_exported_program(ep)`.
- Have a plain `nn.Module`? Use `add_exported_program()` or `add_pytorch_module()`.
- Need to keep submodules separate? Use `add_pytorch_module(..., externalize_modules=[...])`.

For custom or unsupported operators, coreai-torch gives you `register_torch_lowering()` to register a lowering and `TorchMetalKernel` to author an inline Metal GPU kernel. There is also a composite-ops library covering the building blocks of modern transformers: RoPE, RMSNorm, SDPA, and attention. One honest caveat: Apple does not list exact macOS, Python, or Xcode minimums on the overview pages, so check the Installing and Quickstart guides for the current toolchain before you start.

## Loading and Running a Model with the Swift API

Once a model is converted or pulled from the package registry, running it is a few lines of Swift. The nice surprise is that Core AI models plug into the same `LanguageModelSession` API that Apple Foundation Models uses. In the "Integrate on-device AI models" session (WWDC session 326), Apple shows you import `FoundationModels` and get the same session, the same streaming, and the same structured output, while choosing exactly which model runs underneath.

```swift
import FoundationModels
import CoreAILanguageModels

// Load a converted or pre-packaged model from disk
let model = try await CoreAILanguageModel(resourcesAt: qwenModelURL)

// Drive it with the familiar Foundation Models session API
let session = LanguageModelSession(model: model)
let response = try await session.respond(to: "Summarize this changelog in 3 bullets.")
print(response.content)
```

Structured output works the same way it does with Apple Foundation Models. Annotate a type with `@Generable` and ask the session to generate it, and you get back a typed value instead of a string you have to parse:

```swift
@Generable
struct VocabCard {
    let word: String
    let meaning: String
    let exampleSentence: String
}

let response = try await session.respond(
    to: "Create a vocab card for the word 'flower'",
    generating: VocabCard.self
)
let card: VocabCard = response.content
```

Vision models follow the same shape with a different entry type. SAM3, for example, loads through an `ImageSegmenter` and returns segment masks for a prompt. The takeaway is that on-device generative AI now uses one consistent session model across text and vision, so the API surface you learn for one model transfers to the next. For deeper code, Apple's sample "Integrating on-device AI models in your app with Core AI" is the canonical reference.

## Shrinking Models for Mobile with coreai-optimization

A model that runs comfortably on an M-series Mac will not always fit an iPhone's memory budget. That is what [apple/coreai-optimization](https://github.com/apple/coreai-optimization) is for. It provides quantization and palettization that compress a model with minimal accuracy loss, which is the difference between a 7B model being a nice demo and being something you can actually ship in an app.

Quantization lowers the numeric precision of weights, for example from 16-bit floats down to 4-bit integers, which cuts memory and speeds up the Neural Engine. Palettization goes further by mapping weights to a small shared lookup table. Both trade a little accuracy for a lot of footprint, and the right setting depends on your model and how sensitive your task is to small errors. In practice I treat it as a tuning loop: quantize, measure output quality on a held-out set, and back off if the quality drop is unacceptable. The cost lever from earlier only pays off if the model fits the device, and this is the tool that makes it fit.

## Debugging and Profiling Core AI Models

On-device inference is harder to debug than a cloud call because the model is a compiled artifact, not a service you can curl. Core AI addresses this with Xcode integration that lets you inspect the Core AI graph, profile performance across CPU, GPU, and Neural Engine, and validate that the converted artifact matches what you expect. There is also a dedicated Core AI Debugger app on macOS for deeper visibility into model behavior.

My advice from doing this kind of work: profile before you optimize. It is easy to assume a model is slow because of one big layer when the real cost is a memory copy or an op that fell back to the CPU. The graph inspector tells you where execution actually lands, and that is usually where the wins are. This mirrors a habit I lean on with [AI coding agents](https://avinashsangle.com/blog/persistent-memory-ai-coding-agents): measure the real behavior before trusting your mental model of it.

## When On-Device Beats Cloud (and When It Does Not)

On-device inference is not a replacement for cloud APIs; it is a different tool with a different sweet spot. Reach for Core AI when the workload is privacy-sensitive, needs to run offline, runs at high volume where per-token cost dominates, or is latency-critical and a network round trip would hurt. A small classifier or a summarizer that fires on every keystroke is a perfect on-device candidate.

Stay on the cloud when you need frontier-model quality, a very large context window, or the strongest reasoning available, and when your users may not be on Apple hardware at all. A flagship model like Claude or a large [Gemini variant](https://avinashsangle.com/blog/gemini-3-5-flash-agentic-coding-guide) still outclasses anything you will quantize onto a phone today. The pragmatic pattern is a hybrid: handle the common, cheap, private cases on-device and escalate the hard ones to a cloud model.

- **On-device (Core AI):** privacy-sensitive data, offline use, high-volume cheap calls, latency-critical UI, no per-token bill.
- **Cloud (Claude, Gemini, etc.):** frontier reasoning, huge context, cross-platform reach, models too large to fit a device.

## Frequently Asked Questions

### What is Apple Core AI and how is it different from Core ML?

Apple Core AI is a Swift framework announced at WWDC 2026 for running generative AI models entirely on-device on Apple Silicon. Unlike Core ML, which targets general machine learning, Core AI is purpose-built for large language models with ahead-of-time compilation, stateful execution, and inference-memory control.

### Does Apple Core AI cost anything to run?

Core AI has zero token cost and zero server dependencies because inference runs locally on Apple Silicon. You pay nothing per request and no data leaves the device. The only real cost is the hardware itself, so budget against device memory and battery rather than a per-token API bill.

### Which open-weight models does Core AI support out of the box?

Apple ships a curated set of pre-converted models as Swift packages in the `apple/coreai-models` repository, including Qwen, Mistral, and SAM3 for image segmentation. You can add them as package dependencies, or convert your own PyTorch models with the coreai-torch extensions.

### How do I convert a PyTorch model to Core AI?

Use the coreai-torch extensions in three steps: export with `torch.export.export`, run decompositions with `get_decomp_table()`, then convert with `TorchConverter().add_exported_program(ep).to_coreai()`. Call `optimize()` to specialize it for Apple Silicon.

### What hardware and OS does Apple Core AI require?

Core AI runs on Apple Silicon across iPhone, iPad, Mac, and Apple Vision Pro, using the CPU, GPU, and Neural Engine together. Apple has not published exact minimum OS or Xcode versions on the overview pages, so check the coreai-torch Quickstart for current toolchain requirements before you start.

### Can I run Qwen or Mistral on iPhone with Core AI?

Yes. Pull a pre-converted Qwen or Mistral package from apple/coreai-models, load it with `CoreAILanguageModel`, and run it through a `LanguageModelSession`. For iPhone memory budgets, apply quantization from coreai-optimization to shrink the model with minimal accuracy loss.

### How does Core AI compare to a cloud API like Claude?

Core AI wins on cost, privacy, offline use, and latency for smaller models. A cloud API like Claude still wins on frontier-model quality and very large context windows. Use on-device for high-volume, privacy-sensitive, or offline workloads, and cloud for tasks that need the strongest reasoning.

### Does Core AI work with the Foundation Models framework?

Yes. A Core AI model loaded as a `CoreAILanguageModel` plugs into the same `LanguageModelSession` API used by Apple Foundation Models, including streaming and `@Generable` structured output. You get the Foundation Models ergonomics while choosing which model runs underneath.

---

*Originally published at [avinashsangle.com](https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide). I write about Claude Code, on-device AI, and DevOps automation. Follow me on [X/Twitter](https://x.com/avi_sangle).*
