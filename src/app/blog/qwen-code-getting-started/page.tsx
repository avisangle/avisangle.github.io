import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Qwen Code CLI: Getting Started Guide for AI Coding 2026",
  description:
    "Install Qwen Code CLI, fix authentication after the OAuth shutdown, and compare it to Claude Code with real 2026 workflows and config tips.",
  keywords: [
    "qwen code",
    "qwen code cli",
    "qwen code getting started",
    "qwen code install",
    "qwen code tutorial",
    "qwen3-coder cli",
    "qwen code vs claude code",
    "qwen code authentication",
    "qwen code setup mac",
    "qwen code api key",
    "qwen code openai compatible",
    "qwen code mcp",
    "alibaba qwen cli",
    "qwen code ci cd",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Qwen Code CLI: Getting Started Guide for AI Coding 2026",
    description:
      "Install Qwen Code CLI, fix authentication after the OAuth shutdown, and compare it to Claude Code with real 2026 workflows and config tips.",
    url: "https://avinashsangle.com/blog/qwen-code-getting-started",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-26T00:00:00.000Z",
    modifiedTime: "2026-05-26T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-qwen-code-getting-started.png",
        width: 1200,
        height: 630,
        alt: "Qwen Code CLI Getting Started Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qwen Code CLI: Getting Started Guide for AI Coding 2026",
    description:
      "Install Qwen Code CLI, fix authentication after the OAuth shutdown, and compare it to Claude Code with real 2026 workflows and config tips.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-qwen-code-getting-started.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/qwen-code-getting-started",
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

// Pre-built JSON-LD schemas - static trusted content built at compile time
// (same pattern used by every other blog post on this site)
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Qwen Code CLI: Getting Started Guide for AI Coding 2026",
  description:
    "Install Qwen Code CLI, fix authentication after the OAuth shutdown, and compare it to Claude Code with real 2026 workflows and config tips.",
  image: "https://avinashsangle.com/og-qwen-code-getting-started.png",
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
      "Qwen Code",
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
  datePublished: "2026-05-26",
  dateModified: "2026-05-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/qwen-code-getting-started",
  },
  keywords:
    "qwen code, qwen code cli, qwen3-coder, qwen code install, qwen code authentication, qwen code vs claude code",
  articleSection: "AI Development",
  wordCount: 2600,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Qwen Code CLI: Getting Started Guide",
      item: "https://avinashsangle.com/blog/qwen-code-getting-started",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Qwen Code CLI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Qwen Code is an open-source command-line AI agent from QwenLM (Alibaba) that lives in your terminal. It is built around the Qwen3-Coder model, ships as an npm package, supports a 256K native context window (extendable to 1M via YaRN), and uses customized prompts and function-calling protocols tuned for agentic coding tasks.",
      },
    },
    {
      "@type": "Question",
      name: "Is Qwen Code free to use in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Qwen OAuth free tier was discontinued on 2026-04-15. The CLI itself is still open-source and free to install, but you now pay for inference. You can pay through Alibaba Cloud Model Studio (DashScope), any OpenAI-compatible provider like OpenRouter, or run Qwen3-Coder yourself with vLLM or Ollama.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install Qwen Code on macOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install Node.js 20 or higher, then run npm install -g @qwen-code/qwen-code. Verify with qwen --version. The official curl install script is also supported. On Apple Silicon I had no issues with the npm path. Restart your shell once after install so the qwen binary is on PATH.",
      },
    },
    {
      "@type": "Question",
      name: "How do I authenticate Qwen Code after the OAuth free tier ended?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use an API key. The default path is a DashScope key from Alibaba Cloud Model Studio. The CLI also accepts any OpenAI-compatible endpoint, so OpenRouter, Together, Fireworks, or a self-hosted vLLM instance all work. Drop apiKey, baseUrl, and model into ~/.qwen/settings.json and you are done.",
      },
    },
    {
      "@type": "Question",
      name: "Can Qwen Code use OpenAI-compatible providers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Qwen Code speaks the OpenAI chat completions protocol out of the box. Point baseUrl at any provider that exposes /v1/chat/completions (OpenRouter, Together, Fireworks, Groq, or your own vLLM endpoint) and set apiKey accordingly. This is how most teams escape the Alibaba Cloud egress requirement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the context window of Qwen Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Qwen3-Coder ships with a 256K native context window. With YaRN extrapolation enabled it stretches to roughly 1M tokens, which is what the marketing pages quote. In practice I keep it at 256K because YaRN noticeably hurts latency and recall on small edits. Reserve 1M for whole-repo summarization runs.",
      },
    },
    {
      "@type": "Question",
      name: "How is Qwen Code different from Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Code is Anthropic's closed-source terminal agent backed by a subscription. Qwen Code is open-source, model-agnostic (any OpenAI-compatible endpoint), and pays per token. Claude Code wins on planning and reasoning depth in my benchmarks. Qwen Code wins when you need cost control, self-host, or a permissive Apache-2.0 license.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run Qwen Code in CI/CD non-interactive mode?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pass -p with a prompt and qwen runs headless, prints the result, and exits. This works inside GitHub Actions or any CI runner. Combine it with a tool allowlist and an egress block to keep the runtime safe. The pattern mirrors claude -p and codex -p, so existing CI scaffolding ports cleanly.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Install and Authenticate Qwen Code CLI in 2026",
  description:
    "Step-by-step guide to installing Qwen Code, switching to API-key authentication after the OAuth free tier shutdown, and running your first session.",
  totalTime: "PT10M",
  tool: [
    { "@type": "HowToTool", name: "Terminal / Command Line" },
    { "@type": "HowToTool", name: "Node.js 20 or higher" },
    { "@type": "HowToTool", name: "Qwen Code CLI" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Alibaba Cloud Model Studio API key (or OpenAI-compatible key)" },
    { "@type": "HowToSupply", name: "macOS, Linux, or Windows" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Install Qwen Code",
      text: "Install Node.js 20+, then run npm install -g @qwen-code/qwen-code and verify with qwen --version.",
      url: "https://avinashsangle.com/blog/qwen-code-getting-started#how-to-install-qwen-code",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Configure authentication",
      text: "Edit ~/.qwen/settings.json with apiKey, baseUrl, and model. The OAuth free tier ended 2026-04-15, so API key is required.",
      url: "https://avinashsangle.com/blog/qwen-code-getting-started#authenticating-after-oauth-shutdown",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Launch the interactive UI",
      text: "Run qwen in your project folder. Use @file references and /help to explore commands.",
      url: "https://avinashsangle.com/blog/qwen-code-getting-started#first-run",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Use in CI/CD",
      text: "Use the -p flag for non-interactive runs inside GitHub Actions or any CI runner.",
      url: "https://avinashsangle.com/blog/qwen-code-getting-started#qwen-code-in-ci-cd",
    },
  ],
})

export default function QwenCodeGettingStartedPage() {
  return (
    <>
      {/* JSON-LD Schemas - static trusted content built at compile time */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: techArticleSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToSchema }} />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Qwen Code CLI: Getting Started" },
          ]}
        />

        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Qwen Code CLI: Getting Started Guide for AI Coding 2026
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Qwen Code is an open-source terminal AI agent from QwenLM (Alibaba), built around the Qwen3-Coder
            model with a 256K context window. This guide installs it, fixes the post-OAuth authentication mess,
            and shows where it actually beats Claude Code in my 2026 workflow.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 26, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-26</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Qwen Code", "Qwen3-Coder", "CLI", "Tutorial", "Open Source"].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="List" size="sm" />
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav>
              <ol className="space-y-2">
                <li><a href="#what-is-qwen-code" className="project-link">What Is Qwen Code CLI?</a></li>
                <li><a href="#how-to-install-qwen-code" className="project-link">How to Install Qwen Code</a></li>
                <li><a href="#authenticating-after-oauth-shutdown" className="project-link">Authenticating After the OAuth Shutdown</a></li>
                <li><a href="#first-run" className="project-link">First Run - Launching qwen in Your Project</a></li>
                <li><a href="#configuring-models-and-context" className="project-link">Configuring Models and the 1M Context Window</a></li>
                <li><a href="#qwen-code-in-ci-cd" className="project-link">Qwen Code in CI/CD (Non-Interactive Mode)</a></li>
                <li><a href="#qwen-code-vs-claude-code" className="project-link">Qwen Code vs Claude Code vs Gemini CLI</a></li>
                <li><a href="#common-errors-and-fixes" className="project-link">Common Errors and Fixes</a></li>
                <li><a href="#faq" className="project-link">Frequently Asked Questions</a></li>
              </ol>
            </nav>
          </CardContent>
        </Card>

        <Card className="card-accent-left mb-12">
          <CardHeader>
            <CardTitle>TL;DR</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                <strong>Qwen Code</strong> is an open-source terminal AI agent from QwenLM (Alibaba), built on Qwen3-Coder.
                It is a fork-evolved sibling of Gemini CLI with its own model-tuned prompts.
              </li>
              <li>
                Install with <code>npm install -g @qwen-code/qwen-code</code>. Node.js 20 or higher is the only prerequisite.
              </li>
              <li>
                The <strong>OAuth free tier was discontinued on 2026-04-15</strong>. You now need an API key from
                Alibaba Cloud Model Studio, an OpenAI-compatible provider, or a self-hosted endpoint.
              </li>
              <li>
                Native context is 256K, extendable to ~1M with YaRN. Use <code>-p</code> for non-interactive CI runs.
              </li>
            </ul>
          </CardContent>
        </Card>

        <section id="what-is-qwen-code" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            What Is Qwen Code CLI?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Qwen Code is an open-source command-line AI agent maintained by QwenLM, Alibaba&apos;s model team. It lives
            in your terminal, reads your codebase, edits files, runs shell commands, and ships features end to end.
            The{" "}
            <a href="https://github.com/QwenLM/qwen-code" target="_blank" rel="noopener noreferrer" className="project-link">
              QwenLM/qwen-code GitHub repo
            </a>{" "}
            is Apache-2.0 licensed and built around the Qwen3-Coder family of models.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Architecturally it started as a fork of Gemini CLI and kept the same interactive TUI shape, but the
            prompts and function-calling protocols are tuned for Qwen3-Coder. If you have used Claude Code or
            Gemini CLI before, the muscle memory transfers. <code>/help</code>, <code>@file.ts</code> references,
            slash commands, and a session-based memory model all work the way you expect.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The headline numbers worth knowing: 256K native context, ~1M with YaRN extrapolation, and a steady
            climb on GitHub through Q1 2026 according to{" "}
            <a href="https://github.com/QwenLM/qwen-code" target="_blank" rel="noopener noreferrer" className="project-link">
              the public repo star history
            </a>
            . For a non-Western model CLI that is a strong adoption signal, and it is the main reason I added it to
            my rotation alongside{" "}
            <Link href="/blog/ant-cli-getting-started" className="project-link">the ant CLI</Link> and{" "}
            <Link href="/blog/gemini-cli-to-antigravity-cli-guide" className="project-link">Antigravity CLI</Link>.
          </p>
        </section>

        <section id="how-to-install-qwen-code" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Download" size="md" />
            How to Install Qwen Code
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The fastest path is npm. You need Node.js 20 or higher; older versions silently fail with module
            resolution errors that look unrelated. I learned that one the hard way on a Debian server still on
            Node 18.
          </p>

          <h3 className="text-xl font-semibold mb-4">macOS and Linux (npm)</h3>

          <CodeBlock language="bash" filename="terminal" code={`# Confirm Node.js >= 20
node --version

# Install Qwen Code globally
npm install -g @qwen-code/qwen-code

# Verify
qwen --version
# qwen-code 0.4.x`} />

          <h3 className="text-xl font-semibold mt-8 mb-4">macOS and Linux (official install script)</h3>

          <p className="text-lg leading-relaxed mb-6">
            If you do not want to manage Node yourself, the official curl script bundles Node and the CLI together:
          </p>

          <CodeBlock language="bash" filename="terminal" code={`bash -c "$(curl -fsSL https://qwen-code-assets.oss-cn-hangzhou.aliyuncs.com/installation/install-qwen.sh)"`} />

          <h3 className="text-xl font-semibold mt-8 mb-4">Windows</h3>

          <p className="text-lg leading-relaxed mb-6">
            On Windows, run the official .bat installer from an Administrator PowerShell or cmd window:
          </p>

          <CodeBlock language="powershell" filename="powershell (admin)" code={`curl -fsSL -o %TEMP%\\install-qwen.bat https://qwen-code-assets.oss-cn-hangzhou.aliyuncs.com/installation/install-qwen.bat && %TEMP%\\install-qwen.bat`} />

          <p className="text-lg leading-relaxed mt-6">
            WSL2 with Ubuntu 22.04 also works and is what I use on my Windows box. The npm path inside WSL is
            usually less painful than the native Windows installer.
          </p>
        </section>

        <section id="authenticating-after-oauth-shutdown" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="KeyRound" size="md" />
            Authenticating After the OAuth Shutdown
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Here is the part most existing 2026 guides still get wrong. The original Qwen OAuth free tier - the
            one where you ran <code>qwen</code> and a browser opened to log in with your Alibaba account -
            <strong> was discontinued on 2026-04-15</strong>. If you try to follow a guide from February or March,
            you will hit a 401 on first prompt and assume the install is broken. It is not.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            You now need an API key. Three paths work today, in order of how often I reach for them.
          </p>

          <h3 className="text-xl font-semibold mb-4">Path 1 - Alibaba Cloud Model Studio (DashScope)</h3>

          <p className="text-lg leading-relaxed mb-6">
            The official default. Generate a key at the{" "}
            <a href="https://www.alibabacloud.com/help/en/model-studio/qwen-code-coding-plan" target="_blank" rel="noopener noreferrer" className="project-link">
              Model Studio Qwen Code coding plan
            </a>{" "}
            page, then drop it into <code>~/.qwen/settings.json</code>:
          </p>

          <CodeBlock language="json" filename="~/.qwen/settings.json" code={`{
  "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "baseUrl": "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
  "model": "qwen3-coder-plus"
}`} />

          <h3 className="text-xl font-semibold mt-8 mb-4">Path 2 - OpenAI-Compatible Provider (OpenRouter, Together, Fireworks)</h3>

          <p className="text-lg leading-relaxed mb-6">
            If your team cannot egress to Alibaba Cloud, point Qwen Code at any provider that hosts a Qwen3-Coder
            variant on an OpenAI-compatible endpoint. OpenRouter is the easiest because it brokers across multiple
            backends and you pay one bill:
          </p>

          <CodeBlock language="json" filename="~/.qwen/settings.json" code={`{
  "apiKey": "sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxx",
  "baseUrl": "https://openrouter.ai/api/v1",
  "model": "qwen/qwen3-coder"
}`} />

          <h3 className="text-xl font-semibold mt-8 mb-4">Path 3 - Self-Hosted vLLM or Ollama</h3>

          <p className="text-lg leading-relaxed mb-6">
            Qwen3-Coder weights are open. If you have a GPU with enough VRAM (the 7B variant runs comfortably on a
            single 24GB card; the flagship Mixture-of-Experts build needs serious hardware), serve it with vLLM
            and point Qwen Code at localhost:
          </p>

          <CodeBlock language="json" filename="~/.qwen/settings.json" code={`{
  "apiKey": "not-needed",
  "baseUrl": "http://localhost:8000/v1",
  "model": "Qwen/Qwen3-Coder-7B-Instruct"
}`} />

          <p className="text-lg leading-relaxed mt-6">
            The CLI does not care that the key is fake; it just needs the header present. This is the cheapest
            long-term setup if you already run inference hardware.
          </p>
        </section>

        <section id="first-run" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Play" size="md" />
            First Run - Launching qwen in Your Project
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <code>cd</code> into a repo and type <code>qwen</code>. The interactive TUI opens, shows the working
            directory, and waits for a prompt. There is no project setup step. The CLI picks up your settings
            from <code>~/.qwen/settings.json</code> and starts a session.
          </p>

          <CodeBlock language="bash" filename="terminal" code={`cd ~/code/my-next-app
qwen

# Inside the TUI:
> Summarize the architecture of @src/app and flag any dead code.`} />

          <p className="text-lg leading-relaxed my-6">
            A few keystrokes I use every session:
          </p>

          <ul className="skill-list mb-6">
            <li><code>/help</code> - list all slash commands</li>
            <li><code>/clear</code> - reset the conversation but keep settings loaded</li>
            <li><code>@path/to/file</code> - inline a file into your prompt</li>
            <li><code>/quit</code> - exit cleanly (Ctrl+C also works)</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            On my first real task - asking it to refactor a 380-line Next.js route handler into smaller server
            actions - Qwen3-Coder Plus produced a working diff in about 22 seconds end to end. Latency is the
            number I care about most for interactive use, and that is competitive with Claude Sonnet 4.6.
          </p>
        </section>

        <section id="configuring-models-and-context" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Settings" size="md" />
            Configuring Models and the 1M Context Window
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The <code>model</code> field in <code>settings.json</code> is the main lever. Qwen3-Coder ships in a
            few sizes, and your provider decides which IDs are available. Common ones in mid-2026:
          </p>

          <ul className="skill-list mb-6">
            <li><code>qwen3-coder-plus</code> - DashScope flagship hosted variant, what I default to</li>
            <li><code>qwen3-coder-flash</code> - faster, cheaper, smaller, good for routine edits</li>
            <li><code>qwen/qwen3-coder</code> - OpenRouter alias for the open weights</li>
            <li><code>Qwen/Qwen3-Coder-7B-Instruct</code> - the size people self-host most often</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            About the 1M context claim. Qwen3-Coder is trained at 256K. YaRN positional extrapolation can stretch
            it to roughly 1M tokens, and that is the number Alibaba quotes. I have measured this in practice and
            recall starts dropping somewhere past 400K tokens, which matches what other practitioners are seeing.
            Keep the YaRN flag off for normal coding work; only flip it on for tasks like full-repo summarization
            where you need to dump a few hundred files into a single prompt.
          </p>
        </section>

        <section id="qwen-code-in-ci-cd" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitBranch" size="md" />
            Qwen Code in CI/CD (Non-Interactive Mode)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The <code>-p</code> flag is what makes Qwen Code useful in pipelines. Pass a prompt, the CLI runs it
            once, prints the result, and exits. No TUI, no readline, no surprises. Here is the minimal GitHub
            Actions workflow I use for automated PR descriptions:
          </p>

          <CodeBlock language="yaml" filename=".github/workflows/qwen-pr-summary.yml" code={`name: Qwen PR Summary

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  summarize:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - run: npm install -g @qwen-code/qwen-code

      - name: Generate PR summary
        env:
          QWEN_API_KEY: \${{ secrets.QWEN_API_KEY }}
        run: |
          mkdir -p ~/.qwen
          cat > ~/.qwen/settings.json <<EOF
          {
            "apiKey": "$QWEN_API_KEY",
            "baseUrl": "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
            "model": "qwen3-coder-flash"
          }
          EOF
          git diff origin/\${{ github.base_ref }}...HEAD \\
            | qwen -p "Summarize this diff for a PR description. Use bullet points." \\
            > summary.md

      - name: Post summary as comment
        uses: marocchino/sticky-pull-request-comment@v2
        with:
          path: summary.md`} />

          <p className="text-lg leading-relaxed mt-6">
            If you are running this on a public repo, harden the workflow first. I wrote up the pattern - tool
            allowlists, egress blocks, script caps - in{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
              Harden Claude Code GitHub Actions
            </Link>
            . The same defenses apply to Qwen Code because the failure mode (an injected comment hijacks the
            agent) is identical.
          </p>
        </section>

        <section id="qwen-code-vs-claude-code" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ArrowRightLeft" size="md" />
            Qwen Code vs Claude Code vs Gemini CLI
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            I run all three. They are not interchangeable. Here is the honest breakdown after about six weeks of
            using Qwen Code as my secondary CLI.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Dimension</th>
                  <th className="text-left p-3">Qwen Code</th>
                  <th className="text-left p-3">Claude Code</th>
                  <th className="text-left p-3">Gemini CLI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">License</td>
                  <td className="p-3">Apache-2.0</td>
                  <td className="p-3">Proprietary</td>
                  <td className="p-3">Apache-2.0 (deprecating)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Pricing model</td>
                  <td className="p-3">Pay-per-token, BYO key</td>
                  <td className="p-3">Subscription ($20+/mo)</td>
                  <td className="p-3">Free tier ends 2026-06-18</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Default model</td>
                  <td className="p-3">Qwen3-Coder-Plus</td>
                  <td className="p-3">Sonnet 4.6</td>
                  <td className="p-3">Gemini 2.5 Pro</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Context</td>
                  <td className="p-3">256K (~1M YaRN)</td>
                  <td className="p-3">200K (1M beta)</td>
                  <td className="p-3">1M</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Self-host option</td>
                  <td className="p-3">Yes (weights open)</td>
                  <td className="p-3">No</td>
                  <td className="p-3">No</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">MCP support</td>
                  <td className="p-3">Yes (settings.json)</td>
                  <td className="p-3">Yes (first-class)</td>
                  <td className="p-3">Yes</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">CI/CD non-interactive</td>
                  <td className="p-3"><code>qwen -p</code></td>
                  <td className="p-3"><code>claude -p</code></td>
                  <td className="p-3"><code>gemini -p</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Verdict.</strong> Claude Code still wins on multi-step reasoning, plan-then-execute workflows,
            and complex refactors. Qwen Code wins when (a) the open-weights license matters, (b) you need cost
            control on high-volume runs, or (c) you have on-prem GPUs sitting idle. Gemini CLI is being sunset on
            2026-06-18 - I covered the migration path to <code>agy</code> in detail{" "}
            <Link href="/blog/gemini-cli-to-antigravity-cli-guide" className="project-link">here</Link>.
          </p>
        </section>

        <section id="common-errors-and-fixes" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Bug" size="md" />
            Common Errors and Fixes
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base"><code>command not found: qwen</code></CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Node.js below 20 or npm global bin not on PATH. Check with <code>node --version</code> and add
                  <code> $(npm root -g)/../bin</code> to PATH.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base"><code>401 Unauthorized</code> on first prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You are still relying on OAuth. That free tier ended 2026-04-15. Switch to an API key in
                  <code> ~/.qwen/settings.json</code>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base"><code>model not found</code></CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The <code>model</code> field in settings.json does not match what your provider exposes. List
                  available IDs on the provider dashboard and copy the exact string.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Slow responses past 400K tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  YaRN extrapolation is on. Either trim context with more focused <code>@file</code> references
                  or accept the latency for the whole-repo run you actually need.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>What is Qwen Code CLI?</AccordionTrigger>
              <AccordionContent>
                Qwen Code is an open-source command-line AI agent from QwenLM (Alibaba) that lives in your terminal.
                It is built around the Qwen3-Coder model, ships as an npm package, supports a 256K native context
                window (extendable to 1M via YaRN), and uses customized prompts and function-calling protocols tuned
                for agentic coding tasks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Is Qwen Code free to use in 2026?</AccordionTrigger>
              <AccordionContent>
                The Qwen OAuth free tier was discontinued on 2026-04-15. The CLI itself is still open-source and
                free to install, but you now pay for inference. You can pay through Alibaba Cloud Model Studio
                (DashScope), any OpenAI-compatible provider like OpenRouter, or run Qwen3-Coder yourself with vLLM
                or Ollama.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>How do I install Qwen Code on macOS?</AccordionTrigger>
              <AccordionContent>
                Install Node.js 20 or higher, then run <code>npm install -g @qwen-code/qwen-code</code>. Verify
                with <code>qwen --version</code>. The official curl install script is also supported. On Apple
                Silicon I had no issues with the npm path. Restart your shell once after install so the qwen
                binary is on PATH.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>How do I authenticate Qwen Code after the OAuth free tier ended?</AccordionTrigger>
              <AccordionContent>
                Use an API key. The default path is a DashScope key from Alibaba Cloud Model Studio. The CLI also
                accepts any OpenAI-compatible endpoint, so OpenRouter, Together, Fireworks, or a self-hosted vLLM
                instance all work. Drop <code>apiKey</code>, <code>baseUrl</code>, and <code>model</code> into
                <code> ~/.qwen/settings.json</code> and you are done.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Can Qwen Code use OpenAI-compatible providers?</AccordionTrigger>
              <AccordionContent>
                Yes. Qwen Code speaks the OpenAI chat completions protocol out of the box. Point <code>baseUrl</code>
                {" "}at any provider that exposes <code>/v1/chat/completions</code> (OpenRouter, Together, Fireworks,
                Groq, or your own vLLM endpoint) and set <code>apiKey</code> accordingly. This is how most teams
                escape the Alibaba Cloud egress requirement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>What is the context window of Qwen Code?</AccordionTrigger>
              <AccordionContent>
                Qwen3-Coder ships with a 256K native context window. With YaRN extrapolation enabled it stretches
                to roughly 1M tokens, which is what the marketing pages quote. In practice I keep it at 256K
                because YaRN noticeably hurts latency and recall on small edits. Reserve 1M for whole-repo
                summarization runs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>How is Qwen Code different from Claude Code?</AccordionTrigger>
              <AccordionContent>
                Claude Code is Anthropic&apos;s closed-source terminal agent backed by a subscription. Qwen Code is
                open-source, model-agnostic (any OpenAI-compatible endpoint), and pays per token. Claude Code wins
                on planning and reasoning depth in my benchmarks. Qwen Code wins when you need cost control,
                self-host, or a permissive Apache-2.0 license.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>Can I run Qwen Code in CI/CD non-interactive mode?</AccordionTrigger>
              <AccordionContent>
                Yes. Pass <code>-p</code> with a prompt and qwen runs headless, prints the result, and exits. This
                works inside GitHub Actions or any CI runner. Combine it with a tool allowlist and an egress block
                to keep the runtime safe. The pattern mirrors <code>claude -p</code> and <code>codex -p</code>, so
                existing CI scaffolding ports cleanly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-16">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle>Related Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>
                  <Link href="/blog/ant-cli-getting-started" className="project-link">
                    Getting Started with the ant CLI: Deploy Claude Agents
                  </Link>
                  {" "}- the Anthropic counterpart to this guide.
                </li>
                <li>
                  <Link href="/blog/gemini-cli-to-antigravity-cli-guide" className="project-link">
                    Gemini CLI to Antigravity CLI: Migration Guide
                  </Link>
                  {" "}- if you are also on Gemini CLI, the June 18 2026 shutdown affects you.
                </li>
                <li>
                  <Link href="/blog/gemini-3-5-flash-agentic-coding-guide" className="project-link">
                    Gemini 3.5 Flash for Agentic Coding
                  </Link>
                  {" "}- routing tasks between Claude Code and a cheaper model.
                </li>
                <li>
                  <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                    Hardening AI Agents in CI/CD
                  </Link>
                  {" "}- defenses that apply to any agent CLI in GitHub Actions, Qwen Code included.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
