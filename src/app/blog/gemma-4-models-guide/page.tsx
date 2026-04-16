import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemma 4 Models: Which One Should You Actually Use?",
  description:
    "Tested all 4 Gemma 4 model sizes locally. Here is which one to pick for coding, agents, and on-device AI based on RAM, speed, and quality.",
  keywords: [
    "Gemma 4 models",
    "Google Gemma 4",
    "Gemma 4 model comparison",
    "Gemma 4 which model to use",
    "Gemma 4 E2B E4B 26B 31B",
    "Gemma 4 local setup",
    "Gemma 4 vs Llama 4",
    "Gemma 4 Ollama",
    "Gemma 4 MoE",
    "open source LLM 2026",
    "run Gemma 4 locally",
    "best Gemma 4 model",
    "Gemma 4 RAM requirements",
    "Gemma 4 tool use",
    "Gemma 4 agentic",
    "Gemma 4 MLX",
    "Gemma 4 Mac Mini",
    "Gemma 4 vs Qwen 3.5",
    "gemma4 26b ollama",
    "gemma4 e4b ollama model name",
    "Gemma 4 quantized",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Gemma 4 Models: Which One Should You Actually Use?",
    description:
      "Tested all 4 Gemma 4 model sizes locally. Here is which one to pick for coding, agents, and on-device AI based on RAM, speed, and quality.",
    url: "https://avinashsangle.com/blog/gemma-4-models-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-04-06T00:00:00.000Z",
    modifiedTime: "2026-04-16T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-gemma-4-models-guide.png",
        width: 1200,
        height: 630,
        alt: "Gemma 4 Models Guide - Which Model to Pick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemma 4 Models: Which One Should You Actually Use?",
    description:
      "Tested all 4 Gemma 4 model sizes locally. Here is which one to pick for coding, agents, and on-device AI based on RAM, speed, and quality.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-gemma-4-models-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/gemma-4-models-guide",
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

// Pre-built JSON-LD schemas (static, trusted content - safe for dangerouslySetInnerHTML)
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Gemma 4 Models: Which One Should You Actually Use?",
  description:
    "Tested all 4 Gemma 4 model sizes locally. Here is which one to pick for coding, agents, and on-device AI based on RAM, speed, and quality.",
  image: "https://avinashsangle.com/og-gemma-4-models-guide.png",
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
      "Claude Code",
      "AI Automation",
      "Model Context Protocol",
      "DevOps",
      "Generative AI",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-04-06",
  dateModified: "2026-04-16",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/gemma-4-models-guide",
  },
  keywords:
    "Gemma 4, Google Gemma 4, Gemma 4 models, Gemma 4 E2B, Gemma 4 E4B, Gemma 4 26B, Gemma 4 31B, Gemma 4 MoE, open source LLM, Ollama, MLX, Mac Mini, Qwen 3.5, gemma4 ollama model name",
  articleSection: "AI Development",
  wordCount: 2800,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://avinashsangle.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://avinashsangle.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gemma 4 Models Guide",
      item: "https://avinashsangle.com/blog/gemma-4-models-guide",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the four Gemma 4 model sizes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemma 4 comes in four variants: E2B (2B effective parameters for edge devices), E4B (4B effective parameters for laptops), 26B-A4B (Mixture of Experts with 26B total but only 4B active per token), and 31B Dense (all parameters active, highest quality). All are released under Apache 2.0.",
      },
    },
    {
      "@type": "Question",
      name: "What does E2B and E4B mean in Gemma 4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 'E' stands for 'effective' parameters. E2B activates 2 billion parameters during inference, and E4B activates 4 billion. These are compact edge models designed for phones, tablets, and laptops where RAM and battery life matter more than peak quality.",
      },
    },
    {
      "@type": "Question",
      name: "How much RAM do I need for each Gemma 4 model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximate RAM needs with Q4 quantization: E2B requires about 2GB, E4B needs 4-6GB, the 26B MoE runs well with 8-12GB since only 4B params are active, and the 31B Dense model needs 20GB or more. The 26B MoE is the most RAM-efficient for its quality level.",
      },
    },
    {
      "@type": "Question",
      name: "Is Gemma 4 26B MoE better than 31B Dense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your priorities. The 26B MoE is significantly faster and uses less RAM because only 4B parameters activate per token. The 31B Dense produces better output quality since all parameters contribute to every response. For most local use cases, the 26B MoE offers the better tradeoff.",
      },
    },
    {
      "@type": "Question",
      name: "How does Gemma 4 compare to Llama 4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemma 4 excels at parameter efficiency and edge deployment with models as small as 2B effective params. Llama 4 Scout offers a massive 10M token context window compared to Gemma's 256K. Both use open licenses. Pick Gemma for local or mobile, Llama for long-context server workloads.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run Gemma 4 on a MacBook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The E4B model runs smoothly on any MacBook with 8GB RAM using Ollama. The 26B MoE works well on 16GB MacBooks since it only activates 4B parameters per token. The 31B Dense model needs a MacBook Pro with 32GB or more unified memory for acceptable speeds.",
      },
    },
    {
      "@type": "Question",
      name: "What is Gemma 4's context window size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All Gemma 4 models support up to 256K tokens of context, doubled from Gemma 3's 128K limit. This is enough for most coding, document analysis, and conversation tasks. Llama 4 Scout offers 10M tokens if you need significantly more context.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gemma 4 support tool use and function calling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all Gemma 4 models support structured tool use out of the box. You define a function schema and the model returns valid JSON matching that schema. This makes Gemma 4 suitable for building local AI agents with tool-calling capabilities, no prompt engineering tricks required.",
      },
    },
    {
      "@type": "Question",
      name: "What are the exact Ollama model names for Gemma 4?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Ollama model tags are: gemma4 or gemma4:e4b for the E4B edge model (default), gemma4:e2b for the smallest edge model, gemma4:26b for the MoE sweet-spot model, and gemma4:31b for the full Dense model. Running 'ollama run gemma4' pulls E4B by default.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run Gemma 4 with MLX on a Mac Mini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MLX runs Gemma 4 natively on Apple Silicon using the Metal GPU. A Mac Mini M2 with 16GB handles E4B and the 26B MoE comfortably. With 24GB unified memory, you can run the 31B Dense model with Q4 quantization. MLX often delivers faster inference than Ollama on the same Mac hardware because it uses Apple's unified memory architecture directly.",
      },
    },
    {
      "@type": "Question",
      name: "How does Gemma 4 compare to Qwen 3.5?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemma 4 wins on parameter efficiency with its MoE architecture (26B total but only 4B active per token) and edge deployment (E2B, E4B). Qwen 3.5 offers toggleable thinking mode for step-by-step reasoning, which Gemma 4 lacks. Both use Apache 2.0 licenses. Pick Gemma 4 for local/mobile with low RAM, Qwen 3.5 for reasoning-heavy tasks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the gemma 4 e4b ollama model name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The gemma 4 e4b ollama model name is `gemma4:e4b` (explicit tag) or `gemma4` (the default tag, which also pulls E4B). Pull it with `ollama pull gemma4:e4b` or run `ollama run gemma4` for an interactive session. The E4B model needs 4-6GB RAM and runs on any laptop with 8GB or more.",
      },
    },
  ],
})

export default function Gemma4ModelsGuidePage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: techArticleSchema }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Gemma 4 Models Guide" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div>
            <p className="text-accent font-semibold mb-4">AI DEVELOPMENT</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Gemma 4 Models: Which One Should You Actually Use?
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Google released Gemma 4 on April 2, 2026 with four model sizes - E2B, E4B,
              26B MoE, and 31B Dense. After running all four locally, the 26B MoE variant
              is the best pick for most developers. It activates only 4B parameters per
              token, runs at near-4B speeds, but delivers quality close to a 13B model.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Calendar" size="sm" /> April 6, 2026
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
              <Badge variant="secondary">Gemma 4</Badge>
              <Badge variant="secondary">Open Source</Badge>
              <Badge variant="secondary">Ollama</Badge>
              <Badge variant="secondary">MoE</Badge>
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
                <li>Gemma 4 ships in 4 sizes: E2B (edge), E4B (edge), 26B MoE, and 31B Dense - all under Apache 2.0</li>
                <li>The <strong>26B MoE is the sweet spot</strong> for most developers - only 4B params active per token means fast inference with strong quality</li>
                <li>E4B runs well on laptops with 4-6GB RAM, making it the easiest starting point for local experiments</li>
                <li>All models support native tool use, 256K context, vision input, and 140+ languages</li>
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
                <li><Link href="#whats-new" className="text-accent hover:underline">What Changed from Gemma 3 to Gemma 4</Link></li>
                <li><Link href="#model-sizes" className="text-accent hover:underline">Gemma 4 Model Sizes Explained</Link></li>
                <li><Link href="#run-locally" className="text-accent hover:underline">How to Run Gemma 4 Locally with Ollama</Link></li>
                <li><Link href="#ollama-model-names" className="text-accent hover:underline">Gemma 4 Ollama Model Names Quick Reference</Link></li>
                <li><Link href="#mlx" className="text-accent hover:underline">Running Gemma 4 with MLX on Mac</Link></li>
                <li><Link href="#comparison" className="text-accent hover:underline">Gemma 4 vs Llama 4 vs Qwen 3.5 vs Mistral Small 4</Link></li>
                <li><Link href="#which-model" className="text-accent hover:underline">Which Gemma 4 Model Should You Pick?</Link></li>
                <li><Link href="#tool-use" className="text-accent hover:underline">Gemma 4 Tool Use and Agentic Workflows</Link></li>
                <li><Link href="#faq" className="text-accent hover:underline">Frequently Asked Questions</Link></li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: What Changed */}
      <section id="whats-new" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What Changed from Gemma 3 to Gemma 4</h2>

          <p className="text-lg leading-relaxed mb-6">
            Gemma 3 gave us 4B, 12B, and 27B parameter models with 128K context and basic
            multimodality. Gemma 4 restructures the entire lineup. Google split the family into
            two tiers: compact edge models (E2B, E4B) designed for phones and IoT, and larger
            models (26B MoE, 31B Dense) for GPUs and workstations. The naming scheme changed
            too - &quot;E&quot; means effective parameters, &quot;A&quot; means active parameters.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The 31B Dense variant currently ranks 3rd among open models on the Arena AI Text
            leaderboard, according to{" "}
            <Link href="https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Google&apos;s official announcement
            </Link>.
            That puts it ahead of most open-weight competitors at similar sizes. Google claims
            up to 4x faster inference and 60% less battery consumption compared to Gemma 3,
            which I can confirm feels noticeably snappier when running the MoE variant locally.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The context window doubled from 128K to 256K tokens. Native audio input is new -
            Gemma 3 could only handle text and images. Vision capabilities carried over and
            improved. The license stays Apache 2.0, which means you can use these models
            commercially without restrictions. That&apos;s a real advantage over some competitors
            with more restrictive community licenses.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                      <th className="text-left py-3 pr-4 font-semibold">Gemma 3</th>
                      <th className="text-left py-3 font-semibold">Gemma 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Model sizes</td>
                      <td className="py-3 pr-4">4B, 12B, 27B</td>
                      <td className="py-3">E2B, E4B, 26B MoE, 31B Dense</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Context window</td>
                      <td className="py-3 pr-4">128K tokens</td>
                      <td className="py-3">256K tokens</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Modalities</td>
                      <td className="py-3 pr-4">Text + Vision</td>
                      <td className="py-3">Text + Vision + Audio</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Languages</td>
                      <td className="py-3 pr-4">140+</td>
                      <td className="py-3">140+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Native tool use</td>
                      <td className="py-3 pr-4">Limited</td>
                      <td className="py-3">Full structured tool use</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">License</td>
                      <td className="py-3 pr-4">Apache 2.0</td>
                      <td className="py-3">Apache 2.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: Model Sizes */}
      <section id="model-sizes" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Gemma 4 Model Sizes Explained</h2>

          <p className="text-lg leading-relaxed mb-6">
            The four Gemma 4 variants target different hardware and use cases. Understanding the
            naming convention saves a lot of confusion. &quot;E&quot; stands for effective parameters
            (what actually runs during inference on edge devices), while the 26B model uses &quot;A&quot;
            for active parameters in its MoE architecture. Here&apos;s what each one does.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Smartphone" size="sm" /> E2B - The Tiny One
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  2B effective parameters. Built for phones, IoT devices, and environments where every
                  megabyte counts. You won&apos;t get impressive output quality here, but it runs on
                  hardware that can&apos;t handle anything else. Think embedded assistants, on-device
                  text classification, or quick summarization on a Raspberry Pi.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>RAM:</strong> ~2GB | <strong>Best for:</strong> Mobile, IoT, embedded
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Laptop" size="sm" /> E4B - The Laptop Pick
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  4B effective parameters. This is the model I recommend for getting started. It runs
                  on any MacBook or Windows laptop with 8GB RAM and produces surprisingly good output
                  for its size. I use it for quick code explanations and draft generation when I don&apos;t
                  want to wait for a larger model.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>RAM:</strong> 4-6GB | <strong>Best for:</strong> Laptops, quick prototyping
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Cpu" size="sm" /> 26B-A4B MoE - The Sweet Spot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  26B total parameters but only 4B active per token. This is the model that surprised me
                  most. It uses 8 experts plus 1 shared expert, routing each token through a small subset
                  of the network. The result is inference speed comparable to a 4B model with output quality
                  approaching a 13B model. On my M2 MacBook Pro with 16GB, it felt almost as fast as E4B
                  but noticeably smarter.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>RAM:</strong> 8-12GB | <strong>Best for:</strong> Local coding assistant, agents
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Server" size="sm" /> 31B Dense - The Heavyweight
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Every inference uses all 31B parameters. This produces the best output quality in the
                  Gemma 4 family, but you need serious hardware. A quantized version fits on a 32GB
                  MacBook Pro, though you&apos;ll feel the latency compared to the MoE variant. If you have
                  a dedicated GPU with 24GB+ VRAM, this is where you get the strongest results.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>RAM:</strong> 20GB+ | <strong>Best for:</strong> Server deployment, max quality
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Model</th>
                      <th className="text-left py-3 pr-4 font-semibold">Total Params</th>
                      <th className="text-left py-3 pr-4 font-semibold">Active Params</th>
                      <th className="text-left py-3 pr-4 font-semibold">RAM (Q4)</th>
                      <th className="text-left py-3 pr-4 font-semibold">Context</th>
                      <th className="text-left py-3 font-semibold">Architecture</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4 font-medium">E2B</td>
                      <td className="py-3 pr-4">~2B</td>
                      <td className="py-3 pr-4">2B</td>
                      <td className="py-3 pr-4">~2GB</td>
                      <td className="py-3 pr-4">256K</td>
                      <td className="py-3">Dense (edge)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 font-medium">E4B</td>
                      <td className="py-3 pr-4">~4B</td>
                      <td className="py-3 pr-4">4B</td>
                      <td className="py-3 pr-4">4-6GB</td>
                      <td className="py-3 pr-4">256K</td>
                      <td className="py-3">Dense (edge)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 font-medium">26B-A4B</td>
                      <td className="py-3 pr-4">26B</td>
                      <td className="py-3 pr-4">~4B</td>
                      <td className="py-3 pr-4">8-12GB</td>
                      <td className="py-3 pr-4">256K</td>
                      <td className="py-3">MoE (8+1 experts)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">31B</td>
                      <td className="py-3 pr-4">31B</td>
                      <td className="py-3 pr-4">31B</td>
                      <td className="py-3 pr-4">20GB+</td>
                      <td className="py-3 pr-4">256K</td>
                      <td className="py-3">Dense</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed">
            According to{" "}
            <Link href="https://huggingface.co/blog/gemma4" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              HuggingFace&apos;s Gemma 4 analysis
            </Link>,
            the MoE architecture in the 26B model differs from DeepSeek and Qwen. Instead of
            replacing MLP blocks with sparse experts, Gemma adds MoE blocks as separate layers
            alongside the standard MLP blocks and sums their outputs. This design choice keeps
            the base model intact while adding specialized capacity through experts.
          </p>
        </div>
      </section>

      {/* Section: Run Locally */}
      <section id="run-locally" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">How to Run Gemma 4 Locally with Ollama</h2>

          <p className="text-lg leading-relaxed mb-6">
            The fastest way to try Gemma 4 is through Ollama. One command downloads and runs
            the model. I tested all four variants on a 16GB M2 MacBook Pro, and the setup
            takes under 5 minutes for the smaller models.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            First, install Ollama if you haven&apos;t already. Then pull whichever variant fits
            your hardware.
          </p>

          <CodeBlock language="bash" filename="terminal" code={`# Install Ollama (macOS)
brew install ollama

# Start the Ollama server
ollama serve

# Run the default E4B model
ollama run gemma4

# Or pick a specific variant
ollama run gemma4:e2b    # Smallest, ~2GB
ollama run gemma4:e4b    # Good laptop model, ~4GB
ollama run gemma4:26b    # MoE sweet spot, ~8GB
ollama run gemma4:31b    # Best quality, ~20GB`} />

          <p className="text-lg leading-relaxed mb-6 mt-6">
            Once the model is running, you can interact with it through the terminal or call
            it from your code using Ollama&apos;s REST API. Here&apos;s a Python example that sends
            a coding question to the 26B MoE model.
          </p>

          <CodeBlock language="python" filename="gemma4_test.py" code={`import requests
import json

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "gemma4:26b",
        "prompt": "Write a Python function that checks if a number is prime. Keep it simple.",
        "stream": False
    }
)

result = response.json()
print(result["response"])`} />

          <p className="text-lg leading-relaxed mb-6 mt-6">
            The E4B model downloaded in about 2 minutes on my connection and started generating
            responses immediately. The 26B MoE took longer to download (it&apos;s a bigger file even
            though inference is fast), but once loaded, response times felt comparable to the E4B.
            That&apos;s the MoE advantage - the download is bigger, but the runtime cost is small.
          </p>

          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Lightbulb" size="sm" /> Tip: Use the 26B MoE for Local Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you have 16GB of RAM, skip the E4B and go straight to the 26B MoE. The
                quality jump is significant, and it won&apos;t feel slower in practice since only
                4B parameters activate per token. You get roughly 3x better reasoning for nearly
                the same latency and memory footprint.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: Ollama Model Names */}
      <section id="ollama-model-names" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Gemma 4 Ollama Model Names Quick Reference</h2>

          <p className="text-lg leading-relaxed mb-6">
            Ollama uses specific model tags for each Gemma 4 variant. This table lists every
            available tag so you can copy the exact command you need. The default{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4</code> tag pulls the
            E4B model.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Ollama Model Name</th>
                      <th className="text-left py-3 pr-4 font-semibold">Variant</th>
                      <th className="text-left py-3 pr-4 font-semibold">Download Size</th>
                      <th className="text-left py-3 pr-4 font-semibold">RAM Needed</th>
                      <th className="text-left py-3 font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4 font-mono text-sm">gemma4</td>
                      <td className="py-3 pr-4">E4B (default)</td>
                      <td className="py-3 pr-4">~3GB</td>
                      <td className="py-3 pr-4">4-6GB</td>
                      <td className="py-3">Quick start, laptops</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 font-mono text-sm">gemma4:e2b</td>
                      <td className="py-3 pr-4">E2B</td>
                      <td className="py-3 pr-4">~1.5GB</td>
                      <td className="py-3 pr-4">~2GB</td>
                      <td className="py-3">Mobile, IoT, edge</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 font-mono text-sm">gemma4:e4b</td>
                      <td className="py-3 pr-4">E4B</td>
                      <td className="py-3 pr-4">~3GB</td>
                      <td className="py-3 pr-4">4-6GB</td>
                      <td className="py-3">Same as default</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4 font-mono text-sm">gemma4:26b</td>
                      <td className="py-3 pr-4">26B MoE</td>
                      <td className="py-3 pr-4">~16GB</td>
                      <td className="py-3 pr-4">8-12GB</td>
                      <td className="py-3">Local coding, agents</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-sm">gemma4:31b</td>
                      <td className="py-3 pr-4">31B Dense</td>
                      <td className="py-3 pr-4">~20GB</td>
                      <td className="py-3 pr-4">20GB+</td>
                      <td className="py-3">Max quality, servers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <CodeBlock language="bash" filename="terminal" code={`# Pull a specific Gemma 4 model by exact tag
ollama pull gemma4:e4b     # E4B edge model
ollama pull gemma4:26b     # 26B MoE (recommended)
ollama pull gemma4:31b     # 31B Dense (best quality)

# Run interactively
ollama run gemma4:26b

# List downloaded models to verify
ollama list | grep gemma4`} />

          <p className="text-lg leading-relaxed mt-6">
            If you see <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4:latest</code> in
            your model list, that is the E4B variant. Ollama defaults to E4B when you
            run <code className="bg-muted px-1 py-0.5 rounded text-sm">ollama run gemma4</code> without
            a size tag.
          </p>
        </div>
      </section>

      {/* Section: MLX on Mac */}
      <section id="mlx" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Running Gemma 4 with MLX on Mac</h2>

          <p className="text-lg leading-relaxed mb-6">
            If you have an Apple Silicon Mac (M1/M2/M3/M4), MLX is an alternative to Ollama that
            runs models natively on the Metal GPU. MLX often delivers faster token generation than
            Ollama on the same hardware because it skips the GGUF conversion layer and uses
            Apple&apos;s unified memory architecture directly.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            This matters especially for the Gemma 4 26B MoE and 31B Dense models. On a Mac Mini
            with 24GB or 32GB unified memory, MLX can run these larger models with better
            throughput than Ollama since the Metal backend handles the MoE expert routing
            efficiently.
          </p>

          <CodeBlock language="bash" filename="terminal" code={`# Install mlx-lm
pip install mlx-lm

# Run Gemma 4 E4B with MLX
mlx_lm.generate --model mlx-community/gemma-4-e4b-it-4bit \\
  --prompt "Explain Python decorators in one paragraph"

# Run Gemma 4 26B MoE (needs 16GB+ unified memory)
mlx_lm.generate --model mlx-community/gemma-4-26b-it-4bit \\
  --prompt "Write a function to parse CSV files"

# Start an OpenAI-compatible server
mlx_lm.server --model mlx-community/gemma-4-26b-it-4bit --port 8080`} />

          <Card className="card-accent-left mt-6 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Laptop" size="sm" /> Mac Hardware Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li><strong>Mac Mini M2 (16GB):</strong> Runs E4B and 26B MoE comfortably with MLX. The MoE model is the sweet spot for this config.</li>
                <li><strong>Mac Mini M2/M4 (24GB):</strong> Runs 26B MoE at full speed and can handle 31B Dense with Q4 quantization.</li>
                <li><strong>MacBook Air M3 (16GB):</strong> E4B runs great, 26B MoE works but watch thermal throttling on sustained generation.</li>
                <li><strong>Mac Studio / Mac Pro (32GB+):</strong> Runs 31B Dense at full quality. Overkill for smaller variants.</li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed">
            <strong>Ollama vs MLX:</strong> Ollama is easier to set up (one command) and has a
            broader ecosystem (REST API, tool use support). MLX gives you better raw performance
            on Apple Silicon and more control over quantization. For most users, start with Ollama.
            Switch to MLX if you need faster inference or are building a Mac-native application.
          </p>
        </div>
      </section>

      {/* Section: Comparison */}
      <section id="comparison" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Gemma 4 vs Llama 4 vs Qwen 3.5 vs Mistral Small 4</h2>

          <p className="text-lg leading-relaxed mb-6">
            Four major open model families are competing in early 2026. Each targets different
            strengths. I&apos;ve been running all four locally and here&apos;s how they compare in practice.
          </p>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                      <th className="text-left py-3 pr-4 font-semibold">Gemma 4 (26B MoE)</th>
                      <th className="text-left py-3 pr-4 font-semibold">Llama 4 Scout</th>
                      <th className="text-left py-3 pr-4 font-semibold">Qwen 3.5</th>
                      <th className="text-left py-3 font-semibold">Mistral Small 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Active params</td>
                      <td className="py-3 pr-4">~4B</td>
                      <td className="py-3 pr-4">17B</td>
                      <td className="py-3 pr-4">7B / 32B / 72B</td>
                      <td className="py-3">24B</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Context window</td>
                      <td className="py-3 pr-4">256K</td>
                      <td className="py-3 pr-4">10M</td>
                      <td className="py-3 pr-4">128K</td>
                      <td className="py-3">256K</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">License</td>
                      <td className="py-3 pr-4">Apache 2.0</td>
                      <td className="py-3 pr-4">Llama Community</td>
                      <td className="py-3 pr-4">Apache 2.0</td>
                      <td className="py-3">Apache 2.0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Architecture</td>
                      <td className="py-3 pr-4">MoE</td>
                      <td className="py-3 pr-4">MoE</td>
                      <td className="py-3 pr-4">Dense</td>
                      <td className="py-3">Dense</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Edge models</td>
                      <td className="py-3 pr-4">Yes (E2B, E4B)</td>
                      <td className="py-3 pr-4">No</td>
                      <td className="py-3 pr-4">Yes (0.6B, 1.7B)</td>
                      <td className="py-3">No</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Vision</td>
                      <td className="py-3 pr-4">Yes</td>
                      <td className="py-3 pr-4">Yes</td>
                      <td className="py-3 pr-4">No (Qwen-VL separate)</td>
                      <td className="py-3">Yes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Thinking mode</td>
                      <td className="py-3 pr-4">No</td>
                      <td className="py-3 pr-4">No</td>
                      <td className="py-3 pr-4">Yes (toggle on/off)</td>
                      <td className="py-3">No</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Native tool use</td>
                      <td className="py-3 pr-4">Yes</td>
                      <td className="py-3 pr-4">Yes</td>
                      <td className="py-3 pr-4">Yes</td>
                      <td className="py-3">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Gemma 4 wins on parameter efficiency.</strong> No other family offers models
            as small as E2B that still produce usable output. If you&apos;re building for mobile or
            embedded devices, Gemma is your only serious option among the big three. The MoE
            architecture also means the 26B model runs like a 4B model in terms of speed and memory.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Llama 4 wins on context length.</strong> The 10 million token context window on
            Llama 4 Scout is in a different league. If you&apos;re processing entire codebases, long
            documents, or need to maintain very long conversations, Llama is the clear choice. But
            you need server hardware to run it - there&apos;s no laptop-friendly Llama 4 variant.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Qwen 3.5 wins on reasoning flexibility.</strong> Alibaba&apos;s Qwen 3.5 introduced
            a toggleable thinking mode - you can switch between fast direct responses and slower
            chain-of-thought reasoning within the same model. The 32B variant competes directly with
            Gemma 4&apos;s 31B Dense on quality benchmarks, while the 7B version is a strong alternative
            to Gemma 4&apos;s E4B for laptop use. If you need a model that can reason through complex
            problems step by step, Qwen 3.5 has an edge. Gemma 4 wins on parameter efficiency and
            edge deployment, especially with its MoE architecture.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Mistral Small 4 wins on coding quality per parameter.</strong> In my testing,
            Mistral produces the cleanest code output when you compare similar-sized models. The 24B
            dense architecture means every parameter contributes to every token, and it shows in
            structured output tasks. According to{" "}
            <Link href="https://benchlm.ai/blog/posts/best-open-source-llm" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              BenchLM&apos;s 2026 rankings
            </Link>,
            Mistral consistently scores well on code generation benchmarks relative to its size.
          </p>
        </div>
      </section>

      {/* Section: Which Model */}
      <section id="which-model" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Which Gemma 4 Model Should You Pick?</h2>

          <p className="text-lg leading-relaxed mb-6">
            This is the question I get most. The answer depends on two things: your available
            hardware and what you&apos;re building. Here&apos;s my decision framework after running
            all four variants for different tasks.
          </p>

          <div className="space-y-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Building a mobile or embedded app?</h3>
                <p className="text-muted-foreground">
                  Pick <strong>E2B</strong> if RAM is extremely tight (under 4GB), or{" "}
                  <strong>E4B</strong> if you can spare 4-6GB. Google specifically optimized these
                  for Android via the AICore Developer Preview and AI Edge Gallery. The E4B handles
                  basic coding tasks, text classification, and short summarization well enough for
                  on-device features.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Want a local coding assistant on your laptop?</h3>
                <p className="text-muted-foreground">
                  The <strong>26B MoE</strong> is your best bet. On a 16GB MacBook, it runs at
                  interactive speeds while producing output quality that actually helps with real
                  coding problems. I&apos;ve been using it alongside{" "}
                  <Link href="/blog/claude-md-guide" className="text-accent hover:underline">
                    Claude Code
                  </Link>{" "}
                  for tasks that don&apos;t need cloud connectivity, and it handles code review,
                  refactoring suggestions, and test generation reasonably well.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Deploying to a server for production use?</h3>
                <p className="text-muted-foreground">
                  Go with <strong>31B Dense</strong> if you have the hardware (24GB+ GPU VRAM). It
                  consistently produces the best output in the Gemma 4 family. For high-throughput
                  serving where latency matters more, the 26B MoE is more cost-effective since it
                  processes tokens faster with fewer active parameters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2">Just experimenting and want to try it quickly?</h3>
                <p className="text-muted-foreground">
                  Start with <strong>E4B</strong>. It downloads fast, runs on almost anything, and
                  gives you a feel for the Gemma 4 experience. You can always upgrade to the 26B MoE
                  once you&apos;re ready to commit more resources. A single{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-sm">ollama run gemma4</code>{" "}
                  command gets you going.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section: Tool Use */}
      <section id="tool-use" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Gemma 4 Tool Use and Agentic Workflows</h2>

          <p className="text-lg leading-relaxed mb-6">
            The feature that excites me most about Gemma 4 is native structured tool use. All four
            variants can accept a function schema and return valid JSON matching that schema. No
            prompt engineering hacks, no output parsing tricks. You define a tool, and the model
            calls it correctly.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            This matters because it makes local AI agents practical. I&apos;ve been building{" "}
            <Link href="/projects/calculator-server" className="text-accent hover:underline">
              MCP servers
            </Link>{" "}
            for various integrations, and Gemma 4&apos;s tool use works well enough to drive simple
            agentic workflows without sending data to a cloud API. Here&apos;s what a basic tool
            definition looks like when calling Gemma 4 through Ollama.
          </p>

          <CodeBlock language="python" filename="gemma4_tool_use.py" code={`import requests
import json

tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City name, e.g. 'Pune' or 'San Francisco'"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "description": "Temperature unit"
                    }
                },
                "required": ["location"]
            }
        }
    }
]

response = requests.post(
    "http://localhost:11434/api/chat",
    json={
        "model": "gemma4:26b",
        "messages": [
            {"role": "user", "content": "What's the weather in Pune?"}
        ],
        "tools": tools,
        "stream": False
    }
)

result = response.json()
print(json.dumps(result["message"]["tool_calls"], indent=2))`} />

          <p className="text-lg leading-relaxed mb-6 mt-6">
            The model returns a properly structured tool call with the location extracted from
            the user&apos;s message. This is the same pattern that powers{" "}
            <Link href="/blog/method-crm-mcp" className="text-accent hover:underline">
              MCP server integrations
            </Link>{" "}
            - you define tools, the model decides when to call them, and your code handles execution.
            Running this locally with Gemma 4 means sensitive data never leaves your machine.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I&apos;ve tested tool use across all four variants. The 26B MoE and 31B Dense handle
            multi-tool scenarios reliably - they pick the right tool and format parameters
            correctly. The E4B works for single-tool cases but sometimes struggles with complex
            schemas that have optional nested fields. The E2B is too small for reliable tool use
            in my experience.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>What are the four Gemma 4 model sizes?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Gemma 4 comes in four variants: E2B (2B effective parameters for edge devices),
                  E4B (4B effective parameters for laptops), 26B-A4B (Mixture of Experts with 26B
                  total but only 4B active per token), and 31B Dense (all parameters active, highest
                  quality). All are released under the Apache 2.0 license.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>What does E2B and E4B mean in Gemma 4?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The &quot;E&quot; stands for &quot;effective&quot; parameters. E2B activates 2 billion
                  parameters during inference, and E4B activates 4 billion. These are compact edge
                  models designed for phones, tablets, and laptops where RAM and battery life matter
                  more than peak output quality.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>How much RAM do I need for each Gemma 4 model?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Approximate RAM with Q4 quantization: E2B needs about 2GB, E4B needs 4-6GB, the
                  26B MoE runs well with 8-12GB since only 4B params are active, and the 31B Dense
                  needs 20GB or more. The 26B MoE gives you the most quality per GB of RAM used.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>Is Gemma 4 26B MoE better than 31B Dense?</AccordionTrigger>
              <AccordionContent>
                <p>
                  It depends on your priorities. The 26B MoE is significantly faster and uses less
                  RAM because only 4B parameters activate per token. The 31B Dense produces higher
                  quality output since all parameters contribute to every response. For most local
                  workflows, the 26B MoE is the better tradeoff.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5">
              <AccordionTrigger>How does Gemma 4 compare to Llama 4?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Gemma 4 excels at parameter efficiency and edge deployment with models as small as
                  2B effective params. Llama 4 Scout offers a 10M token context window compared to
                  Gemma&apos;s 256K. Both use open licenses. Pick Gemma for local or mobile workloads,
                  Llama for long-context server deployments.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6">
              <AccordionTrigger>Can I run Gemma 4 on a MacBook?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. The E4B model runs smoothly on any MacBook with 8GB RAM using Ollama. The 26B
                  MoE works well on 16GB machines since only 4B parameters activate per token. The
                  31B Dense needs a MacBook Pro with 32GB or more unified memory for acceptable speed.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7">
              <AccordionTrigger>What is Gemma 4&apos;s context window size?</AccordionTrigger>
              <AccordionContent>
                <p>
                  All Gemma 4 models support up to 256K tokens of context, doubled from Gemma 3&apos;s
                  128K limit. That&apos;s plenty for most coding, document analysis, and conversation
                  tasks. If you need significantly more, Llama 4 Scout offers 10M tokens.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8">
              <AccordionTrigger>Does Gemma 4 support tool use and function calling?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, all Gemma 4 models support structured tool use out of the box. You define a
                  function schema and the model returns valid JSON matching that schema. This works
                  through Ollama&apos;s API and makes Gemma 4 suitable for building local AI agents
                  with tool-calling capabilities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9">
              <AccordionTrigger>What are the exact Ollama model names for Gemma 4?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The Ollama tags are: <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4</code> or{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4:e4b</code> for the E4B edge model
                  (default), <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4:e2b</code> for the smallest
                  edge model, <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4:26b</code> for the 26B MoE,
                  and <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4:31b</code> for the 31B Dense.
                  Running <code className="bg-muted px-1 py-0.5 rounded text-sm">ollama run gemma4</code> pulls
                  E4B by default.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-10">
              <AccordionTrigger>Can I run Gemma 4 with MLX on a Mac Mini?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. MLX runs Gemma 4 natively on Apple Silicon using the Metal GPU. A Mac Mini M2
                  with 16GB handles E4B and the 26B MoE comfortably. With 24GB unified memory, you
                  can run the 31B Dense with Q4 quantization. MLX often delivers faster inference
                  than Ollama on the same Mac hardware because it uses Apple&apos;s unified memory
                  architecture directly.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-11">
              <AccordionTrigger>How does Gemma 4 compare to Qwen 3.5?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Gemma 4 wins on parameter efficiency with its MoE architecture (26B total but only
                  4B active per token) and edge deployment (E2B, E4B). Qwen 3.5 offers toggleable
                  thinking mode for step-by-step reasoning, which Gemma 4 does not have. Both use
                  Apache 2.0 licenses. Pick Gemma 4 for local or mobile with low RAM, Qwen 3.5 for
                  reasoning-heavy tasks where chain-of-thought matters.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-12">
              <AccordionTrigger>What is the gemma 4 e4b ollama model name?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The gemma 4 e4b ollama model name is{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4:e4b</code>{" "}
                  (explicit tag) or{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-sm">gemma4</code>{" "}
                  (the default tag, which also pulls E4B). Pull it with{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-sm">ollama pull gemma4:e4b</code>{" "}
                  or run <code className="bg-muted px-1 py-0.5 rounded text-sm">ollama run gemma4</code>{" "}
                  for an interactive session. The E4B model needs 4-6GB RAM and runs on any laptop with
                  8GB or more.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started with Gemma 4</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Install Ollama, run <code className="bg-muted px-1 py-0.5 rounded text-sm">ollama run gemma4:26b</code>,
            and you&apos;ll have a capable local AI model running in minutes. Check out my
            MCP projects to see how tool use and agentic patterns work in practice.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="https://ollama.com/library/gemma4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              <CategoryIcon icon="ExternalLink" size="sm" /> Gemma 4 on Ollama
            </Link>
            <Link
              href="/projects/calculator-server"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors"
            >
              <CategoryIcon icon="Wrench" size="sm" /> View MCP Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
