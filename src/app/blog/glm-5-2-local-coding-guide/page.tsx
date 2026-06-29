import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Run GLM-5.2 Locally: AI Coding Guide",
  description:
    "GLM-5.2 is the top open-weight coding model of 2026. Run it locally with llama.cpp and Unsloth quants - the hardware, the right quant, and when to use cloud.",
  keywords: [
    "run GLM-5.2 locally",
    "GLM-5.2",
    "GLM-5.2 local setup",
    "GLM-5.2 hardware requirements",
    "GLM-5.2 quantization",
    "GLM-5.2 vs Claude",
    "GLM-5.2 SWE-bench",
    "open-weight coding model",
    "local AI coding model",
    "Unsloth GLM-5.2 GGUF",
    "GLM-5.2 llama.cpp",
    "GLM-5.2 Ollama",
    "GLM-5.2 Aider",
    "Z.ai GLM-5.2",
    "local LLM coding",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "How to Run GLM-5.2 Locally for AI Coding (2026 Guide)",
    description:
      "GLM-5.2 is the leading open-weight model of 2026. Pick the right quant, size your hardware, wire it into your coding agent, and know when cloud still wins.",
    url: "https://avinashsangle.com/blog/glm-5-2-local-coding-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-06-29T00:00:00.000Z",
    modifiedTime: "2026-06-29T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-glm-5-2-local-coding-guide.png",
        width: 1200,
        height: 630,
        alt: "Run GLM-5.2 Locally for AI Coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run GLM-5.2 Locally for AI Coding (2026 Guide)",
    description:
      "GLM-5.2 is the leading open-weight model of 2026. Pick the right quant, size your hardware, wire it into your coding agent, and know when cloud still wins.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-glm-5-2-local-coding-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/glm-5-2-local-coding-guide",
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

export default function Glm52LocalCodingGuidePage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "How to Run GLM-5.2 Locally for AI Coding (2026 Guide)",
            description:
              "GLM-5.2 is the top open-weight coding model of 2026. Run it locally with llama.cpp and Unsloth quants - the hardware, the right quant, and when to use cloud.",
            image: "https://avinashsangle.com/og-glm-5-2-local-coding-guide.png",
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
              knowsAbout: ["Claude Code", "AI Automation", "Open-Weight Models", "Local LLM Inference", "DevOps"],
            },
            publisher: {
              "@type": "Person",
              name: "Avinash Sangle",
              url: "https://avinashsangle.com",
            },
            datePublished: "2026-06-29",
            dateModified: "2026-06-29",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/glm-5-2-local-coding-guide",
            },
            keywords:
              "run GLM-5.2 locally, GLM-5.2 quantization, GLM-5.2 hardware requirements, open-weight coding model, GLM-5.2 vs Claude, Unsloth GGUF, llama.cpp",
            articleSection: "AI Development",
            wordCount: 2800,
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
                name: "Run GLM-5.2 Locally for AI Coding",
                item: "https://avinashsangle.com/blog/glm-5-2-local-coding-guide",
              },
            ],
          }),
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Run GLM-5.2 Locally for Coding",
            description:
              "Run the open-weight GLM-5.2 model locally with llama.cpp and Unsloth GGUF quantizations, then connect it to a coding agent over an OpenAI-compatible endpoint.",
            tool: [
              { "@type": "HowToTool", name: "llama.cpp" },
              { "@type": "HowToTool", name: "Hugging Face CLI" },
            ],
            supply: [
              { "@type": "HowToSupply", name: "256GB+ unified memory Mac or high-RAM multi-GPU server" },
              { "@type": "HowToSupply", name: "Unsloth GLM-5.2 GGUF quantization" },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Build llama.cpp",
                text: "Clone llama.cpp and build with CUDA (or Metal on Mac) support.",
                url: "https://avinashsangle.com/blog/glm-5-2-local-coding-guide#run-locally",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Download a quantization",
                text: "Use the Hugging Face CLI to download an Unsloth GLM-5.2 GGUF quant that fits your memory.",
                url: "https://avinashsangle.com/blog/glm-5-2-local-coding-guide#run-locally",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Start an OpenAI-compatible server",
                text: "Run llama-server to expose an OpenAI-compatible endpoint at localhost:8080/v1.",
                url: "https://avinashsangle.com/blog/glm-5-2-local-coding-guide#coding-agents",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Connect a coding agent",
                text: "Point Aider, Cline, or Continue at the local endpoint with a dummy API key.",
                url: "https://avinashsangle.com/blog/glm-5-2-local-coding-guide#coding-agents",
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GLM-5.2 and who made it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GLM-5.2 is an open-weight large language model from Z.ai (Zhipu AI), released in June 2026 under an MIT license. It uses a Mixture-of-Experts design with 744B total parameters and about 40B active per token, a 1M-token context window, and ranks first among open-weight models on the Artificial Analysis Intelligence Index.",
                },
              },
              {
                "@type": "Question",
                name: "What hardware do I need to run GLM-5.2 locally?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The realistic minimum is about 245GB of combined RAM and VRAM for Unsloth's 2-bit quant. A 256GB unified-memory Mac Studio runs it directly. For serious coding at Q4 to Q8 you need 466GB to 820GB, which means a multi-GPU server or a high-RAM EPYC or Threadripper workstation.",
                },
              },
              {
                "@type": "Question",
                name: "Which GLM-5.2 quantization should I use for coding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 2-bit quant (UD-IQ2_M, around 239GB) is the can-I-run-it-at-all tier and is noticeably degraded for agentic coding. For real coding work, Q4_K_XL is the practical floor and Q8 is the safe target. Practitioners report that heavy quants below Q4 emit malformed tool calls and get stuck in loops.",
                },
              },
              {
                "@type": "Question",
                name: "Can GLM-5.2 replace Claude Code or Codex for daily coding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For cost-sensitive, offline, or batch agentic work, yes. GLM-5.2 beats GPT-5.5 on SWE-bench Pro and near-ties Claude Opus on FrontierSWE. But frontier cloud models still win on interactive speed and complex multi-file reasoning, and local throughput on prosumer hardware is single-digit tokens per second.",
                },
              },
              {
                "@type": "Question",
                name: "How fast is GLM-5.2 running locally?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Speed depends on memory bandwidth, not raw compute. Community reports range from about 1 token per second on a CPU-only machine to around 6 tokens per second on dual RTX 3090s with MoE offload. Cloud APIs deliver 80 to 200 tokens per second, so local runs feel slow for interactive coding.",
                },
              },
              {
                "@type": "Question",
                name: "Is GLM-5.2 really open source? What license?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GLM-5.2 ships under an MIT license, confirmed by Artificial Analysis and multiple independent sources. The weights (BF16 and FP8) are published on Hugging Face and ModelScope. MIT means you can use, modify, and deploy it commercially without the usage restrictions some other open-weight licenses impose.",
                },
              },
              {
                "@type": "Question",
                name: "Can I run GLM-5.2 with Ollama?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not locally yet. As of late June 2026, the only official Ollama tag is glm-5.2:cloud, which routes to a hosted endpoint rather than running on your machine. To run GLM-5.2 locally, use llama.cpp or LM Studio with Unsloth's GGUF quantizations instead.",
                },
              },
              {
                "@type": "Question",
                name: "How does GLM-5.2 compare to Claude Opus and GPT-5.5 on coding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "On the Artificial Analysis Intelligence Index, GLM-5.2 scores 51 versus Claude Opus 4.8 at 56 and GPT-5.5 at 55. On coding, it leads GPT-5.5 on SWE-bench Pro (62.1) but trails both on Terminal-Bench 2.1. It is the strongest open-weight option, roughly six months behind the frontier labs.",
                },
              },
              {
                "@type": "Question",
                name: "How do I connect a local GLM-5.2 to Aider or Cline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start an OpenAI-compatible server with llama-server, which exposes an endpoint at localhost:8080/v1. Point your agent at that base URL with a dummy API key. For Aider, set OPENAI_API_BASE and OPENAI_API_KEY, then run aider with the openai/GLM-5.2 model. Cline and Continue use the same OpenAI-compatible provider pattern.",
                },
              },
              {
                "@type": "Question",
                name: "Is running GLM-5.2 locally cheaper than a cloud API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Only at high volume and if you already own the hardware. The hosted GLM-5.2 API costs about $1.40 per 1M input and $4.40 per 1M output tokens, roughly one-sixth of GPT-5.5 or Claude Opus. GLM-5.2 is also verbose (around 42K tokens per task), which eats into both local speed and any API savings.",
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
            { label: "Run GLM-5.2 Locally" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div>
            <p className="text-accent font-semibold mb-4">AI DEVELOPMENT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              How to Run GLM-5.2 Locally for AI Coding (2026 Guide)
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              GLM-5.2 is Z.ai&apos;s open-weight Mixture-of-Experts model (744B total params, MIT
              license) and the current top open-weight model on the Artificial Analysis Intelligence
              Index. You can run it locally for coding, but it needs roughly 245GB of memory at 2-bit
              and degrades below Q4. Here is how to size, run, and wire it in.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Calendar" size="sm" /> June 29, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Clock" size="sm" /> 12 min read
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Tag" size="sm" /> AI, Open Source, Local LLM
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">GLM-5.2</Badge>
              <Badge variant="secondary">Open Weight</Badge>
              <Badge variant="secondary">llama.cpp</Badge>
              <Badge variant="secondary">Unsloth</Badge>
              <Badge variant="secondary">Local AI</Badge>
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
                  GLM-5.2 is the <strong>#1 open-weight model</strong> on the Artificial Analysis
                  Intelligence Index (score 51, up 11 points from GLM-5.1), behind only Claude Opus
                  4.8 (56) and GPT-5.5 (55).
                </li>
                <li>
                  Local minimum is <strong>~245GB RAM+VRAM</strong> for Unsloth&apos;s 2-bit quant. A
                  256GB Mac Studio runs it. Serious coding at Q4 to Q8 needs a multi-GPU or high-RAM
                  server (466GB to 820GB).
                </li>
                <li>
                  Run it with <strong>llama.cpp or LM Studio</strong> (not Ollama locally - that tag
                  is cloud-only), then connect Aider, Cline, or Continue over an OpenAI-compatible
                  endpoint.
                </li>
                <li>
                  Honest verdict: great for cost-sensitive, private, or offline work; cloud frontier
                  models still win on interactive speed and hard multi-file reasoning.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="container-project">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="List" size="sm" /> Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                <li><Link href="#what-is-glm-52" className="text-accent hover:underline">What Is GLM-5.2 and Why Developers Care</Link></li>
                <li><Link href="#benchmarks" className="text-accent hover:underline">How Good Is GLM-5.2 at Coding?</Link></li>
                <li><Link href="#hardware" className="text-accent hover:underline">What Hardware Do You Need to Run GLM-5.2 Locally?</Link></li>
                <li><Link href="#quantization" className="text-accent hover:underline">Which GLM-5.2 Quantization Should You Use?</Link></li>
                <li><Link href="#run-locally" className="text-accent hover:underline">How to Run GLM-5.2 Locally (Step by Step)</Link></li>
                <li><Link href="#coding-agents" className="text-accent hover:underline">Connecting GLM-5.2 to Your Coding Agent</Link></li>
                <li><Link href="#verdict" className="text-accent hover:underline">Should You Actually Run GLM-5.2 Locally?</Link></li>
                <li><Link href="#faq" className="text-accent hover:underline">Frequently Asked Questions</Link></li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: What Is GLM-5.2 */}
      <section id="what-is-glm-52" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What Is GLM-5.2 and Why Developers Care</h2>

          <p className="text-lg leading-relaxed mb-6">
            GLM-5.2 is an open-weight large language model from Z.ai (Zhipu AI), a Chinese lab.
            It shipped to Coding Plan subscribers on June 13, 2026, and the open weights dropped three
            days later on Hugging Face and ModelScope. It is a sparse Mixture-of-Experts model with
            <strong> 744B total parameters and about 40B active per token</strong>, a
            <strong> 1,000,000-token context window</strong>, and up to 128K output tokens. The
            license is MIT, so you can use and deploy it commercially without restriction.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The reason it matters is simple: it became the most capable open-weight model on the
            Artificial Analysis Intelligence Index the week it launched, the first time an openly
            licensed model has felt close to the frontier for agentic coding. Nathan Lambert called
            it the {""}
            <Link href="https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              first open-weight model that feels right in coding harnesses as a general agent
            </Link>. That claim is what triggered the wave of {""}
            <Link href="https://news.ycombinator.com/item?id=48542100" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              &quot;can I finally replace Claude with a local model&quot;
            </Link> threads on Hacker News in June 2026.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Cost is the other half of the story. The hosted GLM-5.2 API runs at roughly
            <strong> $1.40 per 1M input and $4.40 per 1M output tokens</strong>, about one-sixth the
            price of GPT-5.5 ($5/$30) or Claude Opus 4.8 ($5/$25), according to {""}
            <Link href="https://artificialanalysis.ai/models/glm-5-2" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Artificial Analysis
            </Link>. When the API is already that cheap, the case for running it locally comes down to
            privacy, offline use, and very high volume rather than raw savings - a point I keep
            coming back to in the verdict section.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Spec</th>
                      <th className="text-left py-3 font-semibold">GLM-5.2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Architecture</td>
                      <td className="py-3">Sparse MoE, 744B total / ~40B active</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Context window</td>
                      <td className="py-3">1,000,000 tokens in / 128K out</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">License</td>
                      <td className="py-3">MIT</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Weights released</td>
                      <td className="py-3">BF16 and FP8, June 16, 2026</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Hosted API price</td>
                      <td className="py-3">~$1.40 / $4.40 per 1M tokens</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: Benchmarks */}
      <section id="benchmarks" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">How Good Is GLM-5.2 at Coding?</h2>

          <p className="text-lg leading-relaxed mb-6">
            GLM-5.2 scores <strong>51 on the Artificial Analysis Intelligence Index v4.1</strong>,
            ranking first of 93 open-weight models. That is an 11-point jump from GLM-5.1 (which
            scored 40), not the 41-point figure that circulated in early coverage. It sits just behind
            the two leading proprietary models on the same index: Claude Opus 4.8 at 56 and GPT-5.5
            at 55, per {""}
            <Link href="https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Artificial Analysis
            </Link>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            On coding specifically, the official figure Z.ai emphasizes is
            <strong> SWE-bench Pro 62.1</strong>, which beats both GLM-5.1 (58.4) and GPT-5.5 (58.6).
            It scores 74.4% on FrontierSWE, a near-tie with Claude Opus, and jumps to 81.0 on
            Terminal-Bench 2.1 (up from 62 in GLM-5.1) though it still trails Opus (85) and GPT-5.5
            (84) there. Secondary aggregators report a SWE-bench Verified score around 77.8%, but I
            would treat that as approximate until you confirm it against the model card.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Benchmark</th>
                      <th className="text-left py-3 pr-4 font-semibold">GLM-5.2</th>
                      <th className="text-left py-3 pr-4 font-semibold">GPT-5.5</th>
                      <th className="text-left py-3 font-semibold">Claude Opus 4.8</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">AA Intelligence Index</td>
                      <td className="py-3 pr-4">51</td>
                      <td className="py-3 pr-4">55</td>
                      <td className="py-3">56</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">SWE-bench Pro</td>
                      <td className="py-3 pr-4">62.1</td>
                      <td className="py-3 pr-4">58.6</td>
                      <td className="py-3">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">FrontierSWE (long-horizon)</td>
                      <td className="py-3 pr-4">74.4%</td>
                      <td className="py-3 pr-4">72.6%</td>
                      <td className="py-3">75.1%</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Terminal-Bench 2.1</td>
                      <td className="py-3 pr-4">81.0</td>
                      <td className="py-3 pr-4">84.0</td>
                      <td className="py-3">85.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            There is one real weakness worth knowing before you commit hardware to it: GLM-5.2 is
            verbose. Community measurements put it around <strong>42K tokens per task</strong> versus
            roughly 10K for GPT-5.5-high, about 4x more output, and Artificial Analysis flags it as
            outside the optimal efficiency quadrant. That verbosity hurts twice over - it slows down
            local inference where you are bandwidth-bound, and it eats into the cost advantage on the
            hosted API. The honest summary from one Hacker News thread was that GLM-5.2 feels {""}
            <Link href="https://news.ycombinator.com/item?id=48587383" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              about six months behind the frontier labs, very similar to where Opus was in January
            </Link>. For an MIT-licensed model you can run yourself, that gap is remarkably small.
          </p>
        </div>
      </section>

      {/* Section: Hardware */}
      <section id="hardware" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What Hardware Do You Need to Run GLM-5.2 Locally?</h2>

          <p className="text-lg leading-relaxed mb-6">
            The first thing to internalize is that <strong>MoE saves compute, not memory</strong>.
            Even though only ~40B parameters activate per token, all 744B weights must sit in RAM or
            VRAM at once, plus headroom for the KV cache (which is large at long context). Offloading
            inactive experts to system RAM saves on compute throughput, not on the total memory
            footprint. There is no trick that lets you run this model in 64GB.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Laptop" size="sm" /> Realistic Minimum (2-bit, ~245GB)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A 256GB unified-memory Mac Studio (M3 or M4 Ultra) fits the 2-bit quant directly and,
                  thanks to high memory bandwidth, outpaces several &quot;AI&quot; mini-PCs. The other
                  path is a single 24GB GPU (RTX 3090/4090/A6000) plus 256GB of system RAM with MoE
                  offloading, where the active experts stay in VRAM and the rest page from RAM.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Memory:</strong> ~245GB | <strong>Best for:</strong> running it at all
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Server" size="sm" /> Comfortable Coding (Q4 to Q8, 466-820GB)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  For coding-grade quality you want Q4 to Q8, which means a multi-GPU server (think
                  several RTX 6000 Pro Blackwell cards) or a high-RAM EPYC/Threadripper workstation
                  with 512GB to 1TB of DDR5. Memory bandwidth is the bottleneck here, not core count,
                  so fast RAM and wide memory channels matter more than raw GPU FLOPs.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Memory:</strong> 466-820GB | <strong>Best for:</strong> serious agentic work
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Throughput is sobering. Real-world numbers people posted on {""}
            <Link href="https://news.ycombinator.com/item?id=48636377" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              the Hacker News &quot;how to run locally&quot; thread
            </Link> range from about 1 token per second on a CPU-only 12-core box to roughly 6 tokens
            per second on dual RTX 3090s with offload. Cloud endpoints serve 80 to 200 tokens per
            second. A useful rule of thumb from that thread: decode speed tracks
            <code className="bg-muted px-1 py-0.5 rounded text-sm"> active_weights_GB / memory_bandwidth</code>,
            which is why a Mac&apos;s ~615 GB/s unified memory beats a DGX Spark&apos;s ~274 GB/s
            despite the marketing.
          </p>
        </div>
      </section>

      {/* Section: Quantization */}
      <section id="quantization" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Which GLM-5.2 Quantization Should You Use?</h2>

          <p className="text-lg leading-relaxed mb-6">
            The local story for GLM-5.2 is dominated by {""}
            <Link href="https://huggingface.co/unsloth/GLM-5.2-GGUF" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Unsloth&apos;s Dynamic GGUF quantizations
            </Link>. Their dynamic method upcasts attention and critical MLP layers to 8-bit or 16-bit
            while dropping less important layers to 1-bit or 2-bit, which keeps quality higher than a
            uniform quant at the same size. The full range runs from a 217GB 1-bit build up to the
            1.51TB BF16 original.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Quant</th>
                      <th className="text-left py-3 pr-4 font-semibold">Disk size</th>
                      <th className="text-left py-3 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">UD-IQ1_S (1-bit)</td>
                      <td className="py-3 pr-4">217GB</td>
                      <td className="py-3">~76% top-1, smallest runnable</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">UD-IQ2_M (2-bit)</td>
                      <td className="py-3 pr-4">239GB</td>
                      <td className="py-3">~82% top-1, fits a 256GB Mac</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">UD-Q4_K_XL (4-bit)</td>
                      <td className="py-3 pr-4">467GB</td>
                      <td className="py-3">&quot;mostly lossless&quot;, coding floor</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">UD-Q5_K_XL (5-bit)</td>
                      <td className="py-3 pr-4">562GB</td>
                      <td className="py-3">&quot;mostly lossless&quot;</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Q8_0 (8-bit)</td>
                      <td className="py-3 pr-4">801GB</td>
                      <td className="py-3">near full precision, safe target</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">BF16 (full)</td>
                      <td className="py-3 pr-4">1.51TB</td>
                      <td className="py-3">datacenter only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            Here is the part most quant tables skip. Unsloth&apos;s &quot;mostly lossless&quot; claims
            are measured by KL divergence, which does not always translate to agentic coding. On the
            same Hacker News thread, practitioners pushed back hard: one said the
            <strong> ideal range for coding is at least Q8</strong>, another reported that
            &quot;when Q4 is claimed lossless I end up needing Q5 or Q6&quot; for real long-context
            work, and a third estimated roughly 3% accuracy loss at 4-bit and more than 17% at 2-bit.
            Heavily quantized models are more likely to make rookie mistakes, emit malformed tool
            calls, and get stuck in loops - exactly the failure modes that wreck an agentic run.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            My practical recommendation: treat <strong>2-bit as &quot;can I run it at all&quot;</strong>,
            use <strong>Q4_K_XL as the realistic floor for serious coding</strong>, and target
            <strong> Q8 if you have the memory</strong>. And do not mix the FP16/FP8 benchmark numbers
            above with what you will actually get at 2-bit or 4-bit; the published scores were not run
            on heavy quants.
          </p>
        </div>
      </section>

      {/* Section: Run Locally */}
      <section id="run-locally" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">How to Run GLM-5.2 Locally (Step by Step)</h2>

          <p className="text-lg leading-relaxed mb-6">
            The primary local path is llama.cpp with an Unsloth GGUF. On a Mac, LM Studio wraps the
            same engine in a GUI and is the easiest on-ramp. Below is the llama.cpp route, which gives
            you the most control and the OpenAI-compatible server you need for coding agents.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Step 1: Build llama.cpp</h3>
          <CodeBlock language="bash" filename="terminal" code={`# Build with CUDA (use -DGGML_METAL=ON on Apple Silicon instead)
git clone https://github.com/ggml-org/llama.cpp
cmake llama.cpp -B llama.cpp/build \\
  -DBUILD_SHARED_LIBS=OFF -DGGML_CUDA=ON
cmake --build llama.cpp/build --config Release -j \\
  --clean-first --target llama-cli llama-server`} />

          <h3 className="text-2xl font-bold mb-4 mt-8">Step 2: Download a quant that fits your memory</h3>
          <CodeBlock language="bash" filename="terminal" code={`# 2-bit (~239GB) - fits a 256GB Mac Studio
hf download unsloth/GLM-5.2-GGUF \\
  --local-dir unsloth/GLM-5.2-GGUF \\
  --include "*UD-IQ2_M*"

# Prefer Q4_K_XL (~467GB) if you have the memory for coding work
# --include "*UD-Q4_K_XL*"`} />

          <h3 className="text-2xl font-bold mb-4 mt-8">Step 3: Run it with Unsloth&apos;s recommended sampling</h3>
          <p className="text-lg leading-relaxed mb-6">
            Z.ai and Unsloth recommend temperature 1.0, top_p 0.95, and min_p 0.01. For long-context
            coding sessions, quantize the KV cache to stretch how far the 1M window goes before you
            run out of memory.
          </p>
          <CodeBlock language="bash" filename="terminal" code={`./llama.cpp/build/bin/llama-cli \\
  --model unsloth/GLM-5.2-GGUF/UD-IQ2_M/GLM-5.2-UD-IQ2_M-00001-of-00006.gguf \\
  --temp 1.0 --top-p 0.95 --min-p 0.01 \\
  --cache-type-k q4_1 --cache-type-v q4_1 \\
  --chat-template-kwargs '{"reasoning_effort":"max"}'`} />

          <Card className="mb-6 mt-6">
            <CardContent className="pt-6">
              <p className="mb-0">
                <strong>Runtime options at a glance:</strong> Ollama only ships a
                <code className="bg-muted px-1 py-0.5 rounded text-sm"> glm-5.2:cloud</code> tag right
                now, so it is not a local path. vLLM serves the FP8 weights but targets 8x H200-class
                datacenter hardware. For consumer and prosumer rigs, llama.cpp and LM Studio are the
                two that actually work.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: Coding Agents */}
      <section id="coding-agents" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Connecting GLM-5.2 to Your Coding Agent</h2>

          <p className="text-lg leading-relaxed mb-6">
            The trick to using any local model with coding tools is the
            <strong> OpenAI-compatible endpoint</strong>. Start llama-server (or use Unsloth&apos;s
            one-line <code className="bg-muted px-1 py-0.5 rounded text-sm">llama serve</code>) and you
            get an API at <code className="bg-muted px-1 py-0.5 rounded text-sm">http://localhost:8080/v1</code>
            {""} that most agents can talk to with a dummy key.
          </p>

          <CodeBlock language="bash" filename="terminal" code={`# Option A: Unsloth one-liner (auto-downloads + serves a web UI)
llama serve -hf unsloth/GLM-5.2-GGUF:UD-Q4_K_M

# Option B: explicit server with a fixed context window
./llama.cpp/build/bin/llama-server \\
  --model unsloth/GLM-5.2-GGUF/UD-Q4_K_M/GLM-5.2-UD-Q4_K_M-00001-of-00010.gguf \\
  --alias "GLM-5.2" --host 0.0.0.0 --port 8080 --ctx-size 32768`} />

          <h3 className="text-2xl font-bold mb-4 mt-8">Aider</h3>
          <p className="text-lg leading-relaxed mb-6">
            Aider talks to any OpenAI-compatible endpoint. Point it at your local server with two
            environment variables and a model alias:
          </p>
          <CodeBlock language="bash" filename="terminal" code={`export OPENAI_API_BASE=http://127.0.0.1:8080/v1
export OPENAI_API_KEY=local
aider --model openai/GLM-5.2 --no-show-model-warnings`} />

          <h3 className="text-2xl font-bold mb-4 mt-8">Cline and Continue</h3>
          <p className="text-lg leading-relaxed mb-6">
            In Cline or Continue, choose the <strong>OpenAI Compatible</strong> provider, set the base
            URL to <code className="bg-muted px-1 py-0.5 rounded text-sm">http://localhost:8080/v1</code>,
            and enter any non-empty API key. This is the standard pattern for local models; it is not
            documented specifically for GLM-5.2, so expect to confirm the model name your server
            reports. Z.ai and community write-ups also report first-day support across Claude Code,
            OpenCode, Roo Code, and Goose, though I would treat those as vendor claims until you have
            wired one up yourself.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you are coming from a hosted setup, my {""}
            <Link href="/blog/claude-code-cost-tracking" className="text-accent hover:underline">
              Claude Code cost-tracking guide
            </Link> is a useful companion - the local-versus-cloud decision is ultimately a cost and
            latency tradeoff, and it helps to measure what you are actually spending today before you
            invest in 256GB of RAM.
          </p>
        </div>
      </section>

      {/* Section: Verdict */}
      <section id="verdict" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Should You Actually Run GLM-5.2 Locally?</h2>

          <p className="text-lg leading-relaxed mb-6">
            Run GLM-5.2 locally when you have a real reason that the cloud cannot satisfy: a privacy
            or compliance requirement that data never leaves your machines, genuinely offline work,
            very high-volume batch agentic jobs where per-token cost dominates, or you already own a
            256GB-plus Mac or a multi-GPU server that would otherwise sit idle. In those cases an
            MIT-licensed model this capable is a genuine option that did not exist a year ago.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Stay on the cloud when you want interactive speed (single-digit tokens per second is
            painful for tight edit loops), when the task involves hard multi-file reasoning where the
            frontier models still have an edge, or when you simply do not have the memory. And here is
            the part that surprises people: the hosted GLM-5.2 API at $1.40/$4.40 is often the saner
            middle ground - an open model running on someone else&apos;s hardware, far cheaper than
            GPT-5.5 or Opus, with none of the memory headache. Remember the verbosity tax too: at
            around 42K tokens per task, GLM-5.2 spends tokens freely, which erodes both local speed
            and any API savings.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you are evaluating open-weight options more broadly, it is worth comparing GLM-5.2
            against the other models I have covered: {""}
            <Link href="/blog/qwen-code-getting-started" className="text-accent hover:underline">
              Qwen Code
            </Link> for a terminal-native open coding agent, {""}
            <Link href="/blog/gemma-4-models-guide" className="text-accent hover:underline">
              Gemma 4
            </Link> for genuinely laptop-sized local models, and {""}
            <Link href="/blog/apple-core-ai-on-device-inference-guide" className="text-accent hover:underline">
              Apple Core AI
            </Link> for on-device inference on Apple Silicon. GLM-5.2 is the heavyweight of that group:
            the most capable, and by far the most demanding to host.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>What is GLM-5.2 and who made it?</AccordionTrigger>
              <AccordionContent>
                <p>
                  GLM-5.2 is an open-weight large language model from Z.ai (Zhipu AI), released in June
                  2026 under an MIT license. It uses a Mixture-of-Experts design with 744B total
                  parameters and about 40B active per token, a 1M-token context window, and ranks first
                  among open-weight models on the Artificial Analysis Intelligence Index.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>What hardware do I need to run GLM-5.2 locally?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The realistic minimum is about 245GB of combined RAM and VRAM for Unsloth&apos;s 2-bit
                  quant. A 256GB unified-memory Mac Studio runs it directly. For serious coding at Q4 to
                  Q8 you need 466GB to 820GB, which means a multi-GPU server or a high-RAM EPYC or
                  Threadripper workstation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>Which GLM-5.2 quantization should I use for coding?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The 2-bit quant (UD-IQ2_M, around 239GB) is the can-I-run-it-at-all tier and is
                  noticeably degraded for agentic coding. For real coding work, Q4_K_XL is the practical
                  floor and Q8 is the safe target. Practitioners report that heavy quants below Q4 emit
                  malformed tool calls and get stuck in loops.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>Can GLM-5.2 replace Claude Code or Codex for daily coding?</AccordionTrigger>
              <AccordionContent>
                <p>
                  For cost-sensitive, offline, or batch agentic work, yes. GLM-5.2 beats GPT-5.5 on
                  SWE-bench Pro and near-ties Claude Opus on FrontierSWE. But frontier cloud models still
                  win on interactive speed and complex multi-file reasoning, and local throughput on
                  prosumer hardware is single-digit tokens per second.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>How fast is GLM-5.2 running locally?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Speed depends on memory bandwidth, not raw compute. Community reports range from about
                  1 token per second on a CPU-only machine to around 6 tokens per second on dual RTX
                  3090s with MoE offload. Cloud APIs deliver 80 to 200 tokens per second, so local runs
                  feel slow for interactive coding.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>Is GLM-5.2 really open source? What license?</AccordionTrigger>
              <AccordionContent>
                <p>
                  GLM-5.2 ships under an MIT license, confirmed by Artificial Analysis and multiple
                  independent sources. The weights (BF16 and FP8) are published on Hugging Face and
                  ModelScope. MIT means you can use, modify, and deploy it commercially without the usage
                  restrictions some other open-weight licenses impose.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7">
              <AccordionTrigger>Can I run GLM-5.2 with Ollama?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Not locally yet. As of late June 2026, the only official Ollama tag is glm-5.2:cloud,
                  which routes to a hosted endpoint rather than running on your machine. To run GLM-5.2
                  locally, use llama.cpp or LM Studio with Unsloth&apos;s GGUF quantizations instead.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8">
              <AccordionTrigger>How does GLM-5.2 compare to Claude Opus and GPT-5.5 on coding?</AccordionTrigger>
              <AccordionContent>
                <p>
                  On the Artificial Analysis Intelligence Index, GLM-5.2 scores 51 versus Claude Opus
                  4.8 at 56 and GPT-5.5 at 55. On coding, it leads GPT-5.5 on SWE-bench Pro (62.1) but
                  trails both on Terminal-Bench 2.1. It is the strongest open-weight option, roughly six
                  months behind the frontier labs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9">
              <AccordionTrigger>How do I connect a local GLM-5.2 to Aider or Cline?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Start an OpenAI-compatible server with llama-server, which exposes an endpoint at
                  localhost:8080/v1. Point your agent at that base URL with a dummy API key. For Aider,
                  set OPENAI_API_BASE and OPENAI_API_KEY, then run aider with the openai/GLM-5.2 model.
                  Cline and Continue use the same OpenAI-compatible provider pattern.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-10">
              <AccordionTrigger>Is running GLM-5.2 locally cheaper than a cloud API?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Only at high volume and if you already own the hardware. The hosted GLM-5.2 API costs
                  about $1.40 per 1M input and $4.40 per 1M output tokens, roughly one-sixth of GPT-5.5
                  or Claude Opus. GLM-5.2 is also verbose (around 42K tokens per task), which eats into
                  both local speed and any API savings.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="container-project text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started with GLM-5.2</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Grab an Unsloth GGUF that fits your memory, serve it with llama.cpp, and point your coding
            agent at the local endpoint. If your hardware is not there yet, the hosted GLM-5.2 API is a
            cheap way to test the model before you commit to running it yourself.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="https://huggingface.co/unsloth/GLM-5.2-GGUF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              <CategoryIcon icon="ExternalLink" size="sm" /> GLM-5.2 GGUF on Hugging Face
            </Link>
            <Link
              href="/blog/qwen-code-getting-started"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors"
            >
              <CategoryIcon icon="Code" size="sm" /> Compare with Qwen Code
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
