import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Apple Core AI: On-Device LLM Inference",
  description:
    "A practitioner's guide to Apple Core AI: convert PyTorch models, run Qwen and Mistral on Apple Silicon, and cut inference costs to zero on-device.",
  keywords: [
    "Apple Core AI",
    "Core AI framework",
    "on-device AI inference",
    "Apple Silicon LLM inference",
    "PyTorch to Core AI conversion",
    "coreai-torch",
    "Core AI vs Core ML",
    "run Qwen on Apple Silicon",
    "run Mistral on-device",
    "zero-cost on-device inference",
    "Core AI Swift API",
    "Foundation Models framework",
    "coreai-models",
    "coreai-optimization",
    "WWDC 2026 Core AI",
    "on-device vs cloud inference",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Apple Core AI: Run Open-Weight Models On-Device for Free",
    description:
      "A practitioner's guide to Apple Core AI: convert PyTorch models, run Qwen and Mistral on Apple Silicon, and cut inference costs to zero on-device.",
    url: "https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-06-20T00:00:00.000Z",
    modifiedTime: "2026-06-20T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-apple-core-ai-on-device-inference-guide.png",
        width: 1200,
        height: 630,
        alt: "Apple Core AI On-Device Inference Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple Core AI: Run Open-Weight Models On-Device for Free",
    description:
      "A practitioner's guide to Apple Core AI: convert PyTorch models, run Qwen and Mistral on Apple Silicon, and cut inference costs to zero.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-apple-core-ai-on-device-inference-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function AppleCoreAiOnDeviceInferenceGuidePage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Apple Core AI: Run Open-Weight Models On-Device for Free",
            description:
              "A practitioner's guide to Apple Core AI: convert PyTorch models, run Qwen and Mistral on Apple Silicon, and cut inference costs to zero on-device.",
            image: "https://avinashsangle.com/og-apple-core-ai-on-device-inference-guide.png",
            author: {
              "@type": "Person",
              name: "Avinash Sangle",
              url: "https://avinashsangle.com",
              jobTitle: "Claude Code & AI Automation Expert",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/in/avinashsangle",
                "https://x.com/avi_sangle",
                "https://github.com/avisangle",
              ],
              knowsAbout: [
                "Apple Core AI",
                "On-Device Inference",
                "AI Automation",
                "Model Context Protocol",
                "Generative AI",
              ],
            },
            publisher: {
              "@type": "Person",
              name: "Avinash Sangle",
              url: "https://avinashsangle.com",
            },
            datePublished: "2026-06-20",
            dateModified: "2026-06-20",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide",
            },
            keywords:
              "Apple Core AI, on-device inference, Core AI framework, PyTorch to Core AI, Apple Silicon LLM, coreai-torch, Qwen, Mistral",
            articleSection: "AI Development",
            wordCount: 2700,
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Apple Core AI On-Device Inference Guide",
                item: "https://avinashsangle.com/blog/apple-core-ai-on-device-inference-guide",
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Apple Core AI and how is it different from Core ML?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apple Core AI is a Swift framework announced at WWDC 2026 for running generative AI models entirely on-device on Apple Silicon. Unlike Core ML, which targets general machine learning, Core AI is purpose-built for large language models with ahead-of-time compilation, stateful execution, and inference-memory control.",
                },
              },
              {
                "@type": "Question",
                name: "Does Apple Core AI cost anything to run?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Core AI has zero token cost and zero server dependencies because inference runs locally on Apple Silicon. You pay nothing per request and no data leaves the device. The only real cost is the hardware itself, so budget against device memory and battery rather than a per-token API bill.",
                },
              },
              {
                "@type": "Question",
                name: "Which open-weight models does Core AI support out of the box?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apple ships a curated set of pre-converted models as Swift packages in the apple/coreai-models repository, including Qwen, Mistral, and SAM3 for image segmentation. You can add them as package dependencies, or convert your own PyTorch models with the coreai-torch extensions.",
                },
              },
              {
                "@type": "Question",
                name: "How do I convert a PyTorch model to Core AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use the coreai-torch extensions in three steps: export the model with torch.export.export, run decompositions with get_decomp_table, then convert with TorchConverter().add_exported_program(ep).to_coreai(). Call optimize() on the result to specialize it for Apple Silicon before saving.",
                },
              },
              {
                "@type": "Question",
                name: "What hardware and OS does Apple Core AI require?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Core AI runs on Apple Silicon across iPhone, iPad, Mac, and Apple Vision Pro. It uses the CPU, GPU, and Neural Engine together. Apple has not published exact minimum OS or Xcode versions on the overview pages, so check the coreai-torch Quickstart for current toolchain requirements before you start.",
                },
              },
              {
                "@type": "Question",
                name: "Can I run Qwen or Mistral on iPhone with Core AI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Pull a pre-converted Qwen or Mistral package from apple/coreai-models, load it with CoreAILanguageModel, and run it through a LanguageModelSession. For iPhone memory budgets, apply quantization from coreai-optimization to shrink the model with minimal accuracy loss.",
                },
              },
              {
                "@type": "Question",
                name: "How does Core AI compare to a cloud API like Claude?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Core AI wins on cost, privacy, offline use, and latency for smaller models. A cloud API like Claude still wins on frontier-model quality and very large context windows. Use on-device for high-volume, privacy-sensitive, or offline workloads, and cloud for tasks that need the strongest reasoning.",
                },
              },
              {
                "@type": "Question",
                name: "Does Core AI work with the Foundation Models framework?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A Core AI model loaded as a CoreAILanguageModel plugs into the same LanguageModelSession API used by Apple Foundation Models, including streaming and @Generable structured output. You get the Foundation Models ergonomics while choosing exactly which model runs underneath.",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Apple Core AI On-Device Inference Guide" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div>
            <p className="text-accent font-semibold mb-4">AI DEVELOPMENT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Apple Core AI: Run Open-Weight Models On-Device for Free
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Apple Core AI is a Swift framework, announced at WWDC 2026, for running AI models
              entirely on-device on Apple Silicon. Zero server dependencies, zero token cost. It
              replaces Core ML for generative work, ships pre-converted open-weight models like Qwen
              and Mistral, and includes a PyTorch pipeline for your own models.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Calendar" size="sm" /> June 20, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Clock" size="sm" /> 12 min read
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Tag" size="sm" /> Apple Core AI, On-Device, Inference
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="section-alt py-8">
        <div className="container-project">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Zap" size="sm" /> TL;DR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>
                  <strong>What it is:</strong> Core AI is Apple&apos;s on-device inference framework,
                  announced at WWDC 2026 (June 8 to 9). It is the generative-AI successor to Core ML,
                  with a memory-safe Swift API and ahead-of-time compilation for Apple Silicon.
                </li>
                <li>
                  <strong>Why it matters:</strong> inference runs locally, so there is zero token
                  cost and zero server dependency. Data never leaves the device. That is a real cost
                  lever for high-volume or privacy-sensitive workloads.
                </li>
                <li>
                  <strong>Models:</strong> Apple ships pre-converted Qwen, Mistral, and SAM3 as Swift
                  packages in <code className="bg-muted px-1 rounded">apple/coreai-models</code>, plus
                  a PyTorch conversion pipeline (<code className="bg-muted px-1 rounded">coreai-torch</code>)
                  for custom models.
                </li>
                <li>
                  <strong>The honest tradeoff:</strong> on-device wins on cost, privacy, offline, and
                  latency for smaller models. A cloud API like Claude still wins on frontier quality
                  and huge context. Pick per workload, not per hype cycle.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section py-8">
        <div className="container-project">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="List" size="sm" /> Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                <li>
                  <Link href="#what-is" className="text-accent hover:underline">
                    What Is Apple Core AI? (Core AI vs Core ML)
                  </Link>
                </li>
                <li>
                  <Link href="#why-on-device" className="text-accent hover:underline">
                    Why On-Device Inference Now? The Zero-Token-Cost Case
                  </Link>
                </li>
                <li>
                  <Link href="#models" className="text-accent hover:underline">
                    Which Open-Weight Models Core AI Ships
                  </Link>
                </li>
                <li>
                  <Link href="#convert" className="text-accent hover:underline">
                    How to Convert a PyTorch Model to Core AI
                  </Link>
                </li>
                <li>
                  <Link href="#swift" className="text-accent hover:underline">
                    Loading and Running a Model with the Swift API
                  </Link>
                </li>
                <li>
                  <Link href="#optimize" className="text-accent hover:underline">
                    Shrinking Models for Mobile with coreai-optimization
                  </Link>
                </li>
                <li>
                  <Link href="#debug" className="text-accent hover:underline">
                    Debugging and Profiling Core AI Models
                  </Link>
                </li>
                <li>
                  <Link href="#when-cloud" className="text-accent hover:underline">
                    When On-Device Beats Cloud (and When It Does Not)
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-accent hover:underline">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 1 */}
      <section id="what-is" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What Is Apple Core AI? (Core AI vs Core ML)</h2>
          <p className="text-lg leading-relaxed mb-6">
            <strong>Apple Core AI</strong> is a framework for loading and running AI models directly
            on Apple Silicon, introduced at WWDC 2026 on June 8 to 9, 2026 (
            <Link
              href="https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Apple Newsroom
            </Link>
            ). Where Core ML was Apple&apos;s general machine-learning runtime, Core AI is purpose-built
            for generative workloads: large language models, image segmentation, and the kinds of
            models that need a token loop and managed state rather than a single forward pass.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The framework exposes a modern, memory-safe Swift API and runs across the CPU, GPU, and
            Neural Engine together. According to the{" "}
            <Link
              href="https://developer.apple.com/core-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              official Core AI documentation
            </Link>
            , models are automatically specialized for the hardware they run on, with ahead-of-time
            compilation for instant load times, zero-copy data paths, stateful execution, and
            fine-grained control over inference memory. It targets iPhone, iPad, Mac, and Apple
            Vision Pro, all Apple Silicon.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The mental model that helped me: Core ML answered &quot;how do I run a model on Apple
            hardware?&quot; Core AI answers &quot;how do I run a chatty, stateful, memory-hungry
            generative model on Apple hardware without melting the battery?&quot; Apple&apos;s &quot;Meet
            Core AI&quot; session (WWDC session 324) frames it as the foundation layer; the curated
            models and PyTorch tooling sit on top.
          </p>
          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <p className="leading-relaxed">
                <strong>Quick distinction:</strong> Core ML still exists and is fine for classic
                vision and tabular ML. Reach for Core AI when the model is generative, needs
                streaming output, or carries a KV-cache style state between tokens.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2 */}
      <section id="why-on-device" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Why On-Device Inference Now? The Zero-Token-Cost Case
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The single biggest reason to care about Core AI is cost. On-device inference has zero
            token cost and zero server dependency, because the model runs locally and the data never
            leaves the device (
            <Link
              href="https://developer.apple.com/core-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Apple Developer
            </Link>
            ). For anyone who has watched a per-token cloud bill climb across a fleet of engineers,
            that line lands hard.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I track inference economics closely, and the pattern is always the same: a feature that
            looks cheap at one request quietly becomes expensive at a million. When I wrote about{" "}
            <Link href="/blog/claude-code-cost-tracking" className="text-accent hover:underline">
              tracking Claude Code costs
            </Link>
            , the lesson was that the bill is dominated by volume, not by any single clever prompt.
            On-device inference changes that equation entirely. Once the model is on the device, the
            marginal cost of one more request is roughly the electricity to run the Neural Engine for
            a few hundred milliseconds.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Cost is not the only win. Privacy is built in, since nothing is sent to a server. Latency
            drops because there is no network round trip. And the feature keeps working on a plane or
            in a tunnel. The catch, which most launch coverage skips, is that &quot;free&quot; is only
            free at the margin. You pay up front in device memory, battery, and the engineering time
            to convert and quantize a model so it fits. The hardware is the cost; the requests are
            free.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="models" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Which Open-Weight Models Core AI Ships</h2>
          <p className="text-lg leading-relaxed mb-6">
            Apple ships a curated set of pre-converted, pre-optimized models as Swift packages in the{" "}
            <Link
              href="https://github.com/apple/coreai-models"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              apple/coreai-models
            </Link>{" "}
            repository. The launch set includes popular open-weight families: Qwen and Mistral for
            text generation, and SAM3 for image segmentation, with more from the research community.
            You do not have to convert anything to get started; you add a package and call it.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Because the models arrive as Swift packages, adding one looks like any other dependency.
            In Xcode you add the package URL, or in a{" "}
            <code className="bg-muted px-1 rounded">Package.swift</code> you declare it directly:
          </p>
          <CodeBlock
            language="swift"
            filename="Package.swift"
            code={`// Add a pre-converted Core AI model as a package dependency
dependencies: [
    .package(
        url: "https://github.com/apple/coreai-models",
        from: "1.0.0"
    )
]

// Then add the specific model product to your target, e.g. a Qwen text model
// or the SAM3 segmenter, per the package's product list.`}
          />
          <p className="text-lg leading-relaxed mb-6">
            If you already follow open-weight releases, this list will feel familiar. I covered the{" "}
            <Link href="/blog/gemma-4-models-guide" className="text-accent hover:underline">
              Gemma 4 model family
            </Link>{" "}
            and{" "}
            <Link href="/blog/qwen-code-getting-started" className="text-accent hover:underline">
              getting started with Qwen Code
            </Link>{" "}
            earlier this year. The interesting shift is that the same weights you have been running on
            a workstation GPU now have a sanctioned path onto a phone in your pocket.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="convert" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">How to Convert a PyTorch Model to Core AI</h2>
          <p className="text-lg leading-relaxed mb-6">
            To run your own model, use the{" "}
            <Link
              href="https://github.com/apple/coreai-torch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              coreai-torch
            </Link>{" "}
            extensions, which bridge PyTorch and Core AI. The conversion is a three-step pipeline:
            export the graph, run decompositions, then convert and optimize. Here is the quickstart
            from{" "}
            <Link
              href="https://apple.github.io/coreai-torch/main/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Apple&apos;s coreai-torch docs
            </Link>
            :
          </p>
          <CodeBlock
            language="python"
            filename="convert.py"
            code={`import torch
from coreai_torch import TorchConverter, get_decomp_table

# 1. Export the PyTorch graph with torch.export
model = MyModel().eval()
ep = torch.export.export(model, args=(torch.randn(1, 10),))

# 2. Lower composite ATen ops using Core AI's decomposition table
ep = ep.run_decompositions(get_decomp_table())

# 3. Convert to a Core AI program, then specialize for Apple Silicon
coreai_program = TorchConverter().add_exported_program(ep).to_coreai()
coreai_program.optimize()`}
          />
          <p className="text-lg leading-relaxed mb-6">
            The three calls map cleanly to three jobs.{" "}
            <code className="bg-muted px-1 rounded">torch.export.export</code> captures a clean
            computation graph.{" "}
            <code className="bg-muted px-1 rounded">get_decomp_table()</code> breaks high-level
            composite operators down into primitives Core AI understands. And{" "}
            <code className="bg-muted px-1 rounded">
              TorchConverter().add_exported_program(ep).to_coreai()
            </code>{" "}
            produces the Core AI program, which{" "}
            <code className="bg-muted px-1 rounded">.optimize()</code> then specializes for the
            target hardware.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Which entry point you use depends on what you are starting from. The docs list a small
            decision table worth internalizing:
          </p>
          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <ul className="skill-list">
                <li>
                  Already have a decomposed{" "}
                  <code className="bg-muted px-1 rounded">ExportedProgram</code>? Use{" "}
                  <code className="bg-muted px-1 rounded">add_exported_program(ep)</code>.
                </li>
                <li>
                  Have a plain <code className="bg-muted px-1 rounded">nn.Module</code>? Use{" "}
                  <code className="bg-muted px-1 rounded">add_exported_program()</code> or{" "}
                  <code className="bg-muted px-1 rounded">add_pytorch_module()</code>.
                </li>
                <li>
                  Need to keep submodules separate? Use{" "}
                  <code className="bg-muted px-1 rounded">
                    add_pytorch_module(..., externalize_modules=[...])
                  </code>
                  .
                </li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-lg leading-relaxed mb-6">
            For custom or unsupported operators, coreai-torch gives you{" "}
            <code className="bg-muted px-1 rounded">register_torch_lowering()</code> to register a
            lowering and <code className="bg-muted px-1 rounded">TorchMetalKernel</code> to author an
            inline Metal GPU kernel. There is also a composite-ops library covering the building
            blocks of modern transformers: RoPE, RMSNorm, SDPA, and attention. One honest caveat:
            Apple does not list exact macOS, Python, or Xcode minimums on the overview pages, so
            check the Installing and Quickstart guides for the current toolchain before you start.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="swift" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Loading and Running a Model with the Swift API
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Once a model is converted or pulled from the package registry, running it is a few lines
            of Swift. The nice surprise is that Core AI models plug into the same{" "}
            <code className="bg-muted px-1 rounded">LanguageModelSession</code> API that Apple
            Foundation Models uses. In the &quot;Integrate on-device AI models&quot; session (WWDC
            session 326), Apple shows you import{" "}
            <code className="bg-muted px-1 rounded">FoundationModels</code> and get the same session,
            the same streaming, and the same structured output, while choosing exactly which model
            runs underneath.
          </p>
          <CodeBlock
            language="swift"
            filename="Inference.swift"
            code={`import FoundationModels
import CoreAILanguageModels

// Load a converted or pre-packaged model from disk
let model = try await CoreAILanguageModel(resourcesAt: qwenModelURL)

// Drive it with the familiar Foundation Models session API
let session = LanguageModelSession(model: model)
let response = try await session.respond(to: "Summarize this changelog in 3 bullets.")
print(response.content)`}
          />
          <p className="text-lg leading-relaxed mb-6">
            Structured output works the same way it does with Apple Foundation Models. Annotate a
            type with <code className="bg-muted px-1 rounded">@Generable</code> and ask the session to
            generate it, and you get back a typed value instead of a string you have to parse:
          </p>
          <CodeBlock
            language="swift"
            filename="Structured.swift"
            code={`@Generable
struct VocabCard {
    let word: String
    let meaning: String
    let exampleSentence: String
}

let response = try await session.respond(
    to: "Create a vocab card for the word 'flower'",
    generating: VocabCard.self
)
let card: VocabCard = response.content`}
          />
          <p className="text-lg leading-relaxed mb-6">
            Vision models follow the same shape with a different entry type. SAM3, for example, loads
            through an <code className="bg-muted px-1 rounded">ImageSegmenter</code> and returns
            segment masks for a prompt. The takeaway is that on-device generative AI now uses one
            consistent session model across text and vision, so the API surface you learn for one
            model transfers to the next. For deeper code, Apple&apos;s sample &quot;Integrating
            on-device AI models in your app with Core AI&quot; is the canonical reference.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="optimize" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Shrinking Models for Mobile with coreai-optimization
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            A model that runs comfortably on an M-series Mac will not always fit an iPhone&apos;s
            memory budget. That is what{" "}
            <Link
              href="https://github.com/apple/coreai-optimization"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              apple/coreai-optimization
            </Link>{" "}
            is for. It provides quantization and palettization that compress a model with minimal
            accuracy loss, which is the difference between a 7B model being a nice demo and being
            something you can actually ship in an app.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Quantization lowers the numeric precision of weights, for example from 16-bit floats down
            to 4-bit integers, which cuts memory and speeds up the Neural Engine. Palettization goes
            further by mapping weights to a small shared lookup table. Both trade a little accuracy
            for a lot of footprint, and the right setting depends on your model and how sensitive
            your task is to small errors. In practice I treat it as a tuning loop: quantize, measure
            output quality on a held-out set, and back off if the quality drop is unacceptable. The
            cost lever from earlier only pays off if the model fits the device, and this is the tool
            that makes it fit.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section id="debug" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Debugging and Profiling Core AI Models</h2>
          <p className="text-lg leading-relaxed mb-6">
            On-device inference is harder to debug than a cloud call because the model is a compiled
            artifact, not a service you can curl. Core AI addresses this with Xcode integration that
            lets you inspect the Core AI graph, profile performance across CPU, GPU, and Neural
            Engine, and validate that the converted artifact matches what you expect. There is also a
            dedicated Core AI Debugger app on macOS for deeper visibility into model behavior.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            My advice from doing this kind of work: profile before you optimize. It is easy to assume
            a model is slow because of one big layer when the real cost is a memory copy or an op
            that fell back to the CPU. The graph inspector tells you where execution actually lands,
            and that is usually where the wins are. This mirrors a habit I lean on with{" "}
            <Link href="/blog/persistent-memory-ai-coding-agents" className="text-accent hover:underline">
              AI coding agents
            </Link>
            : measure the real behavior before trusting your mental model of it.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section id="when-cloud" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            When On-Device Beats Cloud (and When It Does Not)
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            On-device inference is not a replacement for cloud APIs; it is a different tool with a
            different sweet spot. Reach for Core AI when the workload is privacy-sensitive, needs to
            run offline, runs at high volume where per-token cost dominates, or is latency-critical
            and a network round trip would hurt. A small classifier or a summarizer that fires on
            every keystroke is a perfect on-device candidate.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Stay on the cloud when you need frontier-model quality, a very large context window, or
            the strongest reasoning available, and when your users may not be on Apple hardware at
            all. A flagship model like Claude or a large{" "}
            <Link href="/blog/gemini-3-5-flash-agentic-coding-guide" className="text-accent hover:underline">
              Gemini variant
            </Link>{" "}
            still outclasses anything you will quantize onto a phone today. The pragmatic pattern is a
            hybrid: handle the common, cheap, private cases on-device and escalate the hard ones to a
            cloud model.
          </p>
          <Card className="card-accent-left mb-6">
            <CardContent className="pt-6">
              <p className="leading-relaxed mb-3">
                <strong>On-device (Core AI):</strong> privacy-sensitive data, offline use,
                high-volume cheap calls, latency-critical UI, no per-token bill.
              </p>
              <p className="leading-relaxed">
                <strong>Cloud (Claude, Gemini, etc.):</strong> frontier reasoning, huge context,
                cross-platform reach, models too large to fit a device.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container-project">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CategoryIcon icon="HelpCircle" size="sm" /> Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    What is Apple Core AI and how is it different from Core ML?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Apple Core AI is a Swift framework announced at WWDC 2026 for running generative
                      AI models entirely on-device on Apple Silicon. Unlike Core ML, which targets
                      general machine learning, Core AI is purpose-built for large language models
                      with ahead-of-time compilation, stateful execution, and inference-memory
                      control.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    Does Apple Core AI cost anything to run?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Core AI has zero token cost and zero server dependencies because inference runs
                      locally on Apple Silicon. You pay nothing per request and no data leaves the
                      device. The only real cost is the hardware itself, so budget against device
                      memory and battery rather than a per-token API bill.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    Which open-weight models does Core AI support out of the box?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Apple ships a curated set of pre-converted models as Swift packages in the{" "}
                      <code className="bg-muted px-1 rounded">apple/coreai-models</code> repository,
                      including Qwen, Mistral, and SAM3 for image segmentation. You can add them as
                      package dependencies, or convert your own PyTorch models with the coreai-torch
                      extensions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I convert a PyTorch model to Core AI?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Use the coreai-torch extensions in three steps: export with{" "}
                      <code className="bg-muted px-1 rounded">torch.export.export</code>, run
                      decompositions with{" "}
                      <code className="bg-muted px-1 rounded">get_decomp_table()</code>, then convert
                      with{" "}
                      <code className="bg-muted px-1 rounded">
                        TorchConverter().add_exported_program(ep).to_coreai()
                      </code>
                      . Call <code className="bg-muted px-1 rounded">optimize()</code> to specialize
                      it for Apple Silicon.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    What hardware and OS does Apple Core AI require?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Core AI runs on Apple Silicon across iPhone, iPad, Mac, and Apple Vision Pro,
                      using the CPU, GPU, and Neural Engine together. Apple has not published exact
                      minimum OS or Xcode versions on the overview pages, so check the coreai-torch
                      Quickstart for current toolchain requirements before you start.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I run Qwen or Mistral on iPhone with Core AI?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes. Pull a pre-converted Qwen or Mistral package from apple/coreai-models, load
                      it with <code className="bg-muted px-1 rounded">CoreAILanguageModel</code>, and
                      run it through a{" "}
                      <code className="bg-muted px-1 rounded">LanguageModelSession</code>. For iPhone
                      memory budgets, apply quantization from coreai-optimization to shrink the model
                      with minimal accuracy loss.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-semibold">
                    How does Core AI compare to a cloud API like Claude?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Core AI wins on cost, privacy, offline use, and latency for smaller models. A
                      cloud API like Claude still wins on frontier-model quality and very large
                      context windows. Use on-device for high-volume, privacy-sensitive, or offline
                      workloads, and cloud for tasks that need the strongest reasoning.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-semibold">
                    Does Core AI work with the Foundation Models framework?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes. A Core AI model loaded as a{" "}
                      <code className="bg-muted px-1 rounded">CoreAILanguageModel</code> plugs into the
                      same <code className="bg-muted px-1 rounded">LanguageModelSession</code> API used
                      by Apple Foundation Models, including streaming and{" "}
                      <code className="bg-muted px-1 rounded">@Generable</code> structured output. You
                      get the Foundation Models ergonomics while choosing which model runs underneath.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-project">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Cpu" size="sm" /> Try it on your own model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                Pick a small open-weight model you already know, run it through the coreai-torch
                three-step pipeline, quantize it with coreai-optimization, and load it in a throwaway
                Swift app. You will learn more from one end-to-end conversion than from any keynote
                recap. Start with Apple&apos;s official docs and the coreai-torch quickstart.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild>
                  <Link
                    href="https://developer.apple.com/core-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Core AI Docs <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://github.com/apple/coreai-torch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    coreai-torch on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Related Articles" centered />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Open-Weight Models
                </Badge>
                <CardTitle>Gemma 4 Models Guide</CardTitle>
                <CardDescription>
                  A practitioner&apos;s look at the Gemma 4 family, the kind of open weights you can
                  now convert for on-device use.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/blog/gemma-4-models-guide" className="project-link">
                  Read Article →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Cost Control
                </Badge>
                <CardTitle>Tracking Claude Code Costs</CardTitle>
                <CardDescription>
                  Why inference bills are driven by volume, and the case for moving cheap workloads
                  on-device.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/blog/claude-code-cost-tracking" className="project-link">
                  Read Article →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Open-Weight Models
                </Badge>
                <CardTitle>Getting Started with Qwen Code</CardTitle>
                <CardDescription>
                  Qwen is one of the models Core AI ships pre-converted. Here is how to work with it
                  day to day.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/blog/qwen-code-getting-started" className="project-link">
                  Read Article →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
