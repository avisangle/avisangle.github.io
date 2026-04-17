import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Getting Started with the ant CLI: Deploy Claude Agents",
  description:
    "Install the ant CLI, create your first managed agent, and deploy it in under 10 minutes. Hands-on tutorial with YAML configs and real CLI output.",
  keywords: [
    "ant CLI",
    "ant CLI tutorial",
    "Anthropic ant CLI",
    "ant CLI getting started",
    "ant CLI install",
    "ant CLI managed agents",
    "Anthropic CLI",
    "Claude managed agents CLI",
    "ant CLI commands",
    "ant CLI YAML",
    "ant CLI agent create",
    "ant CLI vs Claude Code",
    "ant CLI session streaming",
    "anthropic-cli",
    "deploy Claude agent",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Getting Started with the ant CLI: Deploy Claude Agents",
    description:
      "Install the ant CLI, create your first managed agent, and deploy it in under 10 minutes. Hands-on tutorial with YAML configs and real CLI output.",
    url: "https://avinashsangle.com/blog/ant-cli-getting-started",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-04-18T00:00:00.000Z",
    modifiedTime: "2026-04-18T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-ant-cli-getting-started.png",
        width: 1200,
        height: 630,
        alt: "Getting Started with the ant CLI - Deploy Claude Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Started with the ant CLI: Deploy Claude Agents",
    description:
      "Install the ant CLI, create your first managed agent, and deploy it in under 10 minutes. Hands-on tutorial with YAML configs and real CLI output.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-ant-cli-getting-started.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/ant-cli-getting-started",
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
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Getting Started with the ant CLI: Deploy Claude Agents",
  description:
    "Install the ant CLI, create your first managed agent, and deploy it in under 10 minutes. Hands-on tutorial with YAML configs and real CLI output.",
  image: "https://avinashsangle.com/og-ant-cli-getting-started.png",
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
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/ant-cli-getting-started",
  },
  keywords:
    "ant CLI, Anthropic CLI, ant CLI tutorial, managed agents, Claude managed agents, ant CLI install, ant CLI YAML, deploy Claude agent",
  articleSection: "Claude Code",
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
      name: "Getting Started with the ant CLI",
      item: "https://avinashsangle.com/blog/ant-cli-getting-started",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ant CLI from Anthropic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ant CLI is Anthropic's official command-line client for the Claude API. Written in Go, it provides a resource-based command structure for managing agents, environments, and sessions. It supports typed flags, YAML input, auto-pagination, and multiple output formats including an interactive TUI explorer.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install the ant CLI on macOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install via Homebrew: run 'brew install anthropics/tap/ant', then clear the macOS quarantine flag with 'xattr -d com.apple.quarantine $(brew --prefix)/bin/ant'. Set your ANTHROPIC_API_KEY environment variable and verify with 'ant --version'.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the ant CLI and Claude Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Code is an interactive agentic coding assistant that runs in your terminal and uses a subscription. The ant CLI is a programmatic API client for managing Managed Agents resources, uses an API key, and is built for scripting and CI/CD automation. They're complementary tools.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to run a managed agent session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed agent sessions cost $0.08 per session-hour, billed to the millisecond. Idle time is free. You also pay standard Claude API token rates. A typical 1-hour coding session with Opus costs roughly $0.70 total including tokens and runtime.",
      },
    },
    {
      "@type": "Question",
      name: "Can I version control agents with the ant CLI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Define agents as YAML files (e.g. summarizer.agent.yaml), check them into Git, and deploy via CI. Use 'ant beta:agents create' to create from YAML and 'ant beta:agents update' with the version flag to push updates. This gives you full GitOps for agent configurations.",
      },
    },
    {
      "@type": "Question",
      name: "Can managed agents connect to MCP servers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Agents support remote MCP server connections via the --mcp-server flag. You specify the server URL and name, then add a mcp_toolset tool entry referencing that server. This lets agents use external tools like GitHub, Slack, or custom MCP servers you've built.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use the ant CLI in CI/CD pipelines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Define agents and environments as YAML files in your repo. In CI, use 'ant beta:agents create < agent.yaml' to provision and 'ant beta:agents update --agent-id ID --version N < agent.yaml' to deploy changes. The --transform flag extracts IDs for scripting, and --format controls output parsing.",
      },
    },
    {
      "@type": "Question",
      name: "What tools are available to managed agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The agent_toolset_20260401 built-in toolset includes bash, read, write, edit, glob, grep, and web_fetch. You can enable or disable individual tools, or disable all and whitelist specific ones. Agents can also use MCP toolsets for external service integrations.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Deploy a Claude Agent with the ant CLI",
  description:
    "Step-by-step guide to installing the ant CLI, creating a managed agent, setting up an environment, and running your first session.",
  totalTime: "PT10M",
  tool: [
    { "@type": "HowToTool", name: "Terminal / Command Line" },
    { "@type": "HowToTool", name: "ant CLI (Anthropic CLI)" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Anthropic API key" },
    { "@type": "HowToSupply", name: "macOS, Linux, or WSL" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Install the ant CLI",
      text: "Install via Homebrew (macOS), curl (Linux), or Go. Run 'brew install anthropics/tap/ant' on macOS.",
      url: "https://avinashsangle.com/blog/ant-cli-getting-started#how-to-install-the-ant-cli",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Create an agent configuration",
      text: "Use 'ant beta:agents create' with flags or a YAML file to define your agent's model, system prompt, and tools.",
      url: "https://avinashsangle.com/blog/ant-cli-getting-started#creating-your-first-agent",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Set up an environment",
      text: "Create a container environment with 'ant beta:environments create' specifying packages and networking.",
      url: "https://avinashsangle.com/blog/ant-cli-getting-started#creating-your-first-agent",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Start a session and interact",
      text: "Start a session with 'ant beta:sessions create', send messages with 'ant beta:sessions:events send', and stream output with 'ant beta:sessions stream'.",
      url: "https://avinashsangle.com/blog/ant-cli-getting-started#creating-your-first-agent",
    },
  ],
})

export default function AntCliGettingStartedPage() {
  return (
    <>
      {/* JSON-LD Schemas - static trusted content built at compile time */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: techArticleSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: howToSchema }}
      />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Getting Started with the ant CLI" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">Claude Code</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Getting Started with the ant CLI: Deploy Claude Agents
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            From install to a running managed agent in under 10 minutes. The ant CLI
            is Anthropic&apos;s Go-based command-line client for the Claude API, and
            it&apos;s the fastest way to create, configure, and manage cloud-hosted agents
            without writing application code.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> April 18, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-04-18</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["ant CLI", "Managed Agents", "Tutorial", "YAML", "CI/CD"].map(
              (tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </header>

        {/* Table of Contents */}
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
                <li>
                  <a href="#what-is-the-ant-cli" className="project-link">
                    What Is the ant CLI?
                  </a>
                </li>
                <li>
                  <a href="#how-to-install-the-ant-cli" className="project-link">
                    How to Install the ant CLI
                  </a>
                </li>
                <li>
                  <a href="#core-concepts" className="project-link">
                    Core Concepts - Agents, Environments, and Sessions
                  </a>
                </li>
                <li>
                  <a href="#creating-your-first-agent" className="project-link">
                    Creating Your First Agent with the ant CLI
                  </a>
                </li>
                <li>
                  <a href="#yaml-version-control" className="project-link">
                    YAML Version Control for Agents
                  </a>
                </li>
                <li>
                  <a href="#ant-cli-vs-curl-vs-sdk" className="project-link">
                    ant CLI vs curl vs SDK - Why Use the CLI?
                  </a>
                </li>
                <li>
                  <a href="#scripting-patterns" className="project-link">
                    Scripting and Automation Patterns
                  </a>
                </li>
                <li>
                  <a href="#faq" className="project-link">
                    Frequently Asked Questions
                  </a>
                </li>
              </ol>
            </nav>
          </CardContent>
        </Card>

        {/* TL;DR */}
        <Card className="card-accent-left mb-12">
          <CardHeader>
            <CardTitle>TL;DR</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                The <strong>ant CLI</strong> is Anthropic&apos;s official Go-based CLI for the Claude API,
                launched April 2026. It manages agents, environments, and sessions from your terminal.
              </li>
              <li>
                Install on macOS with <code>brew install anthropics/tap/ant</code>. Linux and Go installs
                are also supported.
              </li>
              <li>
                Define agents as <strong>YAML files</strong>, check them into Git, and deploy through CI -
                full GitOps for your agent configs.
              </li>
              <li>
                Sessions cost <strong>$0.08/hour</strong> (billed to the millisecond) plus standard Claude
                token rates. Idle time is free.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: What Is the ant CLI? */}
        <section id="what-is-the-ant-cli" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            What Is the ant CLI?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The ant CLI is Anthropic&apos;s official command-line client for the Claude API. It
            shipped alongside{" "}
            <Link href="/blog/claude-managed-agents" className="project-link">
              Claude Managed Agents
            </Link>{" "}
            on April 8, 2026, and it&apos;s built specifically for developers who want to
            create, configure, and run cloud-hosted agents without writing wrapper code.
            The{" "}
            <a
              href="https://github.com/anthropics/anthropic-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub repo
            </a>{" "}
            already has over 300 stars in its first ten days.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            It follows a resource-based command structure: <code>ant [resource] &lt;command&gt; [flags...]</code>.
            Think of it like <code>kubectl</code> for Claude agents. You can pipe YAML into it, extract
            fields with GJSON transforms, and chain commands in shell scripts. If you&apos;ve worked with
            any modern infrastructure CLI, the patterns will feel familiar.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One thing to clarify early: the ant CLI and Claude Code solve different problems. Claude Code
            is your interactive coding assistant in the terminal - you talk to it, it writes code,
            and you pay through a subscription. The ant CLI is a programmatic API client for managing
            hosted agent infrastructure. You authenticate with an API key, and you&apos;re billed at
            standard API rates. I use both daily, and they complement each other well. Claude Code
            even understands how to shell out to <code>ant</code> natively.
          </p>
        </section>

        {/* Section 2: How to Install */}
        <section id="how-to-install-the-ant-cli" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Download" size="md" />
            How to Install the ant CLI
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            There are three installation paths depending on your platform. I&apos;ll cover all
            of them, but if you&apos;re on macOS, Homebrew is the fastest route.
          </p>

          <h3 className="text-xl font-semibold mb-4">macOS (Homebrew)</h3>

          <CodeBlock language="bash" filename="terminal" code={`# Install from Anthropic's tap
brew install anthropics/tap/ant

# Clear the macOS quarantine flag (required)
xattr -d com.apple.quarantine "$(brew --prefix)/bin/ant"

# Verify
ant --version`} />

          <p className="text-lg leading-relaxed my-6">
            That quarantine step trips people up. macOS flags unsigned binaries downloaded by Homebrew,
            and without clearing it you&apos;ll get a &quot;cannot be opened because the developer cannot be
            verified&quot; error. It&apos;s a one-time thing.
          </p>

          <h3 className="text-xl font-semibold mb-4">Linux / WSL (curl)</h3>

          <CodeBlock language="bash" filename="terminal" code={`VERSION=1.2.1
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m | sed -e 's/x86_64/amd64/' -e 's/aarch64/arm64/')

curl -fsSL \\
  "https://github.com/anthropics/anthropic-cli/releases/download/v\${VERSION}/ant_\${VERSION}_\${OS}_\${ARCH}.tar.gz" \\
  | sudo tar -xz -C /usr/local/bin ant`} />

          <h3 className="text-xl font-semibold mb-4">From Source (Go 1.22+)</h3>

          <CodeBlock language="bash" filename="terminal" code={`go install github.com/anthropics/anthropic-cli/cmd/ant@latest
export PATH="$PATH:$(go env GOPATH)/bin"`} />

          <h3 className="text-xl font-semibold mb-4">Set Your API Key</h3>

          <p className="text-lg leading-relaxed mb-6">
            Once installed, set your Anthropic API key. The CLI reads it from the
            <code> ANTHROPIC_API_KEY</code> environment variable:
          </p>

          <CodeBlock language="bash" filename="~/.zshrc or ~/.bashrc" code={`export ANTHROPIC_API_KEY="sk-ant-your-key-here"`} />

          <p className="text-lg leading-relaxed mt-6">
            You can generate an API key from the{" "}
            <a
              href="https://console.anthropic.com/settings/keys"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Anthropic Console
            </a>
            . I keep mine in a <code>.env</code> file that my shell sources on startup, but
            any secret management approach works.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Shell Completions</h3>

          <p className="text-lg leading-relaxed mb-6">
            The ant CLI supports completions for bash, zsh, fish, and PowerShell. For zsh
            (the default macOS shell):
          </p>

          <CodeBlock language="bash" filename="terminal" code={`# Generate zsh completions
ant completion zsh > ~/.zfunc/_ant

# Add to your .zshrc if not already there
echo 'fpath=(~/.zfunc $fpath)' >> ~/.zshrc
echo 'autoload -Uz compinit && compinit' >> ~/.zshrc`} />

          <p className="text-lg leading-relaxed mt-6">
            Tab completion saves a lot of time when working with the <code>beta:</code> namespaced
            commands, which can get long.
          </p>
        </section>

        {/* Section 3: Core Concepts */}
        <section id="core-concepts" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Layers" size="md" />
            Core Concepts - Agents, Environments, and Sessions
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Before you create anything, it helps to understand how the four core pieces fit
            together. The mental model is straightforward once you see it.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Bot" size="sm" />
                  Agent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A versioned configuration defining the model, system prompt, tools, and MCP
                  server connections. Think of it as a blueprint. Each update creates a new
                  version, so you can roll back if needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Container" size="sm" />
                  Environment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A container template specifying pre-installed packages (pip, npm) and
                  networking rules. Create it once, reference it by ID. Multiple sessions can
                  share one environment config, but each gets its own isolated container.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Play" size="sm" />
                  Session
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A running instance that pairs an agent with an environment. It has its own
                  container, filesystem, and conversation history. Sessions are where the actual
                  work happens.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="MessageSquare" size="sm" />
                  Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The communication protocol. You send user events (messages, interrupts,
                  tool confirmations) and receive agent events (messages, tool calls,
                  thinking). Everything is event-based and streamable.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The flow works like this: you create an agent (the what), create an environment (the
            where), start a session linking them together, and then communicate through events.
            Anthropic handles the container orchestration, tool execution, and conversation state.
            According to the{" "}
            <a
              href="https://platform.claude.com/docs/en/managed-agents/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official docs
            </a>
            , sessions cost $0.08 per session-hour billed to the millisecond, and idle time
            doesn&apos;t count.
          </p>
        </section>

        {/* Section 4: Creating Your First Agent */}
        <section id="creating-your-first-agent" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Rocket" size="md" />
            Creating Your First Agent with the ant CLI
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Let&apos;s build a simple code review agent. I&apos;ll walk through each step so
            you can see exactly what the CLI does at each stage. All managed agent commands
            sit under the <code>beta:</code> prefix since the feature is still in beta.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 1: Create the Agent</h3>

          <CodeBlock language="bash" filename="terminal" code={`ant beta:agents create \\
  --name "Code Reviewer" \\
  --model claude-sonnet-4-6 \\
  --system "You are a senior code reviewer. Read the code carefully, check for bugs, security issues, and style problems. Be specific about line numbers and provide fix suggestions." \\
  --tool '{"type": "agent_toolset_20260401"}'`} />

          <p className="text-lg leading-relaxed my-6">
            The response comes back as JSON with the agent ID and version. I like to extract
            just the ID for scripting:
          </p>

          <CodeBlock language="bash" filename="terminal" code={`# Extract the agent ID
AGENT_ID=$(ant beta:agents create \\
  --name "Code Reviewer" \\
  --model claude-sonnet-4-6 \\
  --system "You are a senior code reviewer." \\
  --tool '{"type": "agent_toolset_20260401"}' \\
  --transform id --format raw)

echo "Created agent: $AGENT_ID"`} />

          <p className="text-lg leading-relaxed my-6">
            The <code>--transform</code> flag uses GJSON syntax to pluck a specific field from
            the response, and <code>--format raw</code> strips the quotes. This is one of the
            CLI&apos;s best features for scripting.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 2: Create an Environment</h3>

          <CodeBlock language="bash" filename="terminal" code={`ENV_ID=$(ant beta:environments create \\
  --name "python-dev" \\
  --pip-packages '["pytest", "ruff", "mypy"]' \\
  --networking unrestricted \\
  --transform id --format raw)

echo "Created environment: $ENV_ID"`} />

          <p className="text-lg leading-relaxed my-6">
            Environments define what&apos;s pre-installed in the container. I&apos;m giving this
            one Python linting tools since it&apos;s a code review agent. The <code>unrestricted</code> networking
            flag lets the agent fetch external resources if needed. You can also lock it down
            if you want a sandboxed environment.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 3: Start a Session</h3>

          <CodeBlock language="bash" filename="terminal" code={`SESSION_ID=$(ant beta:sessions create \\
  --agent-id "$AGENT_ID" \\
  --environment-id "$ENV_ID" \\
  --transform id --format raw)

echo "Started session: $SESSION_ID"`} />

          <h3 className="text-xl font-semibold mb-4">Step 4: Send a Message and Stream the Response</h3>

          <CodeBlock language="bash" filename="terminal" code={`# Send a review request
ant beta:sessions:events send \\
  --session-id "$SESSION_ID" \\
  --type user.message \\
  --content-type text \\
  --content-text "Review this Python function for bugs:

def divide(a, b):
    return a / b
"

# Stream the agent's response in real-time
ant beta:sessions stream --session-id "$SESSION_ID"`} />

          <p className="text-lg leading-relaxed mt-6">
            The <code>stream</code> command opens a real-time SSE connection to the session. You&apos;ll see
            the agent&apos;s thinking, tool calls (it might run the code through ruff), and its final
            review - all printed to your terminal as they happen.
          </p>

          <Card className="card-accent-left mt-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                <strong>Tip:</strong> Want to explore the response interactively? Replace <code>--format raw</code> with
                <code> --format explore</code> on any command to open the TUI explorer. It lets you
                navigate nested JSON with arrow keys - really useful when debugging agent responses.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 5: YAML Version Control */}
        <section id="yaml-version-control" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="FileCode" size="md" />
            YAML Version Control for Agents
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            This is the ant CLI&apos;s best feature, and the one I haven&apos;t seen anyone
            write about yet. Instead of passing flags inline, you can define agents and
            environments as YAML files, check them into Git, and deploy through your
            CI pipeline.
          </p>

          <CodeBlock language="yaml" filename="code-reviewer.agent.yaml" code={`name: Code Reviewer
model: claude-sonnet-4-6
system: |
  You are a senior code reviewer. Read the code carefully,
  check for bugs, security issues, and style problems.
  Be specific about line numbers and provide fix suggestions.
tools:
  - type: agent_toolset_20260401
    configs:
      - name: web_fetch
        enabled: false`} />

          <CodeBlock language="yaml" filename="code-reviewer.environment.yaml" code={`name: python-dev
pip_packages:
  - pytest
  - ruff
  - mypy
networking: unrestricted`} />

          <p className="text-lg leading-relaxed my-6">
            Now you can create the agent directly from the file:
          </p>

          <CodeBlock language="bash" filename="terminal" code={`# Create from YAML
ant beta:agents create < code-reviewer.agent.yaml

# Update an existing agent (version is required for safety)
ant beta:agents update \\
  --agent-id "$AGENT_ID" \\
  --version 1 \\
  < code-reviewer.agent.yaml`} />

          <p className="text-lg leading-relaxed my-6">
            The versioning requirement matters. When you update an agent, you must pass the
            current version number. If someone else updated it since you last pulled, the
            command fails rather than silently overwriting. It&apos;s optimistic concurrency
            control - the same pattern you&apos;d find in Kubernetes or Terraform.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            This YAML approach is where the ant CLI really shines for teams. Your agent
            configs live in the same repo as your application code, go through pull
            request review, and deploy through the same pipeline. I wrote more about the
            broader Managed Agents architecture in my{" "}
            <Link href="/blog/claude-managed-agents" className="project-link">
              Managed Agents vs Agent SDK comparison
            </Link>
            , but the YAML workflow is what makes the CLI my preferred interface.
          </p>

          <Card className="card-accent-left">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                <strong>Why this matters:</strong> According to the{" "}
                <a
                  href="https://platform.claude.com/docs/en/api/sdks/cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  official CLI docs
                </a>
                , Anthropic designed the YAML workflow specifically for GitOps-style agent
                management. If you&apos;re already doing infrastructure as code, this slots
                right in.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 6: ant CLI vs curl vs SDK */}
        <section id="ant-cli-vs-curl-vs-sdk" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            ant CLI vs curl vs SDK - Why Use the CLI?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            You can hit the Managed Agents API three ways: raw HTTP with curl, a language
            SDK (Python, TypeScript, Go, etc.), or the ant CLI. Each has its place.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Feature</th>
                  <th className="py-3 pr-4 font-semibold">curl</th>
                  <th className="py-3 pr-4 font-semibold">ant CLI</th>
                  <th className="py-3 pr-4 font-semibold">Python SDK</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Setup time</td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3 pr-4">2 minutes</td>
                  <td className="py-3 pr-4">5 minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">JSON body authoring</td>
                  <td className="py-3 pr-4">Manual</td>
                  <td className="py-3 pr-4">Typed flags / YAML</td>
                  <td className="py-3 pr-4">Typed objects</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Auto-pagination</td>
                  <td className="py-3 pr-4">Manual</td>
                  <td className="py-3 pr-4">Built-in</td>
                  <td className="py-3 pr-4">Built-in</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">File references</td>
                  <td className="py-3 pr-4">Manual base64</td>
                  <td className="py-3 pr-4"><code>@path</code> syntax</td>
                  <td className="py-3 pr-4">File objects</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Response filtering</td>
                  <td className="py-3 pr-4">Pipe to jq</td>
                  <td className="py-3 pr-4"><code>--transform</code></td>
                  <td className="py-3 pr-4">Code</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Shell scripting</td>
                  <td className="py-3 pr-4">Verbose</td>
                  <td className="py-3 pr-4">Ergonomic</td>
                  <td className="py-3 pr-4">Requires Python</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">CI/CD fit</td>
                  <td className="py-3 pr-4">OK</td>
                  <td className="py-3 pr-4">Excellent</td>
                  <td className="py-3 pr-4">Good</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Best for</td>
                  <td className="py-3 pr-4">Quick tests</td>
                  <td className="py-3 pr-4">Ops / automation</td>
                  <td className="py-3 pr-4">App integration</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The ant CLI sits in a sweet spot. It&apos;s faster than writing curl commands by
            hand (no JSON body construction, no header management), and lighter than pulling
            in a full SDK when you just want to script some agent operations. For anything
            that lives in a shell script or CI workflow, it&apos;s the right tool.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you&apos;re building an application that embeds agent interactions - a web app,
            a Slack bot, a data pipeline - use the SDK. The ant CLI is for the operational
            layer: provisioning agents, rotating credentials, monitoring sessions, deploying
            config changes.
          </p>
        </section>

        {/* Section 7: Scripting Patterns */}
        <section id="scripting-patterns" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Code" size="md" />
            Scripting and Automation Patterns
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Here are a few patterns I&apos;ve found useful when automating agent
            workflows with the ant CLI.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            Extract IDs from Create Commands
          </h3>

          <CodeBlock language="bash" filename="deploy-agent.sh" code={`#!/bin/bash
set -euo pipefail

# Create agent and capture the ID
AGENT_ID=$(ant beta:agents create \\
  < agents/reviewer.agent.yaml \\
  --transform id --format raw)

# Create environment and capture the ID
ENV_ID=$(ant beta:environments create \\
  < agents/reviewer.environment.yaml \\
  --transform id --format raw)

echo "Agent: $AGENT_ID"
echo "Environment: $ENV_ID"

# Store for later use
echo "AGENT_ID=$AGENT_ID" >> .env.agents
echo "ENV_ID=$ENV_ID" >> .env.agents`} />

          <h3 className="text-xl font-semibold mt-8 mb-4">
            GitHub Actions Deployment
          </h3>

          <CodeBlock language="yaml" filename=".github/workflows/deploy-agents.yml" code={`name: Deploy Agents
on:
  push:
    branches: [main]
    paths: ['agents/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install ant CLI
        run: |
          curl -fsSL \\
            "https://github.com/anthropics/anthropic-cli/releases/download/v1.2.1/ant_1.2.1_linux_amd64.tar.gz" \\
            | sudo tar -xz -C /usr/local/bin ant

      - name: Update agent config
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          ant beta:agents update \\
            --agent-id "\${{ vars.AGENT_ID }}" \\
            --version "\${{ vars.AGENT_VERSION }}" \\
            < agents/reviewer.agent.yaml`} />

          <h3 className="text-xl font-semibold mt-8 mb-4">
            List All Agents and Environments
          </h3>

          <CodeBlock language="bash" filename="terminal" code={`# List agents in a readable table
ant beta:agents list --format yaml

# List environments with just names and IDs
ant beta:environments list --transform "data.#.{id,name}" --format yaml

# Check session status
ant beta:sessions retrieve \\
  --session-id "$SESSION_ID" \\
  --transform status --format raw`} />

          <p className="text-lg leading-relaxed mt-6">
            The <code>--transform</code> flag accepts full GJSON path syntax. You can
            filter arrays, project specific fields, and even do conditional extraction.
            It&apos;s much cleaner than piping to <code>jq</code> for simple extractions,
            though for complex transformations I still reach for jq.
          </p>
        </section>

        {/* Section 8: Built-in Tools */}
        <section id="built-in-tools" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Wrench" size="md" />
            What Tools Can Managed Agents Use?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            When you include <code>{`{"type": "agent_toolset_20260401"}`}</code> in your agent
            config, it gets access to a standard set of tools: bash, read, write, edit, glob,
            grep, and web_fetch. All are enabled by default.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            You can selectively disable tools you don&apos;t want the agent to have. For a
            read-only code review agent, you might disable write and edit:
          </p>

          <CodeBlock language="yaml" filename="readonly-reviewer.agent.yaml" code={`name: Read-Only Reviewer
model: claude-sonnet-4-6
system: Review code without modifying it.
tools:
  - type: agent_toolset_20260401
    configs:
      - name: write
        enabled: false
      - name: edit
        enabled: false
      - name: web_fetch
        enabled: false`} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Or flip the default and whitelist only what you need:
          </p>

          <CodeBlock language="yaml" filename="minimal-agent.yaml" code={`tools:
  - type: agent_toolset_20260401
    default_config:
      enabled: false
    configs:
      - name: bash
        enabled: true
      - name: read
        enabled: true`} />

          <p className="text-lg leading-relaxed mt-6">
            Agents can also connect to external{" "}
            <Link href="/projects/method-crm-mcp" className="project-link">
              MCP servers
            </Link>{" "}
            for tools beyond the built-in set. If you&apos;ve built a custom MCP server (like
            the{" "}
            <Link href="/projects/jenkins-mcp" className="project-link">
              Jenkins MCP server
            </Link>{" "}
            I wrote about), a managed agent can use it by adding an <code>mcp_servers</code> block
            to the agent config.
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-ant-cli">
              <AccordionTrigger>What is the ant CLI from Anthropic?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The ant CLI is Anthropic&apos;s official command-line client for the Claude API.
                  Written in Go, it provides a resource-based command structure for managing
                  agents, environments, and sessions. It supports typed flags, YAML input,
                  auto-pagination, and multiple output formats including an interactive TUI explorer.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="install-macos">
              <AccordionTrigger>How do I install the ant CLI on macOS?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Install via Homebrew: run <code>brew install anthropics/tap/ant</code>, then
                  clear the macOS quarantine flag with <code>xattr -d com.apple.quarantine
                  &quot;$(brew --prefix)/bin/ant&quot;</code>. Set your <code>ANTHROPIC_API_KEY</code> environment
                  variable and verify with <code>ant --version</code>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ant-cli-vs-claude-code">
              <AccordionTrigger>What is the difference between the ant CLI and Claude Code?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Claude Code is an interactive agentic coding assistant that runs in your
                  terminal and uses a subscription. The ant CLI is a programmatic API client
                  for managing Managed Agents resources, uses an API key, and is built for
                  scripting and CI/CD automation. They&apos;re complementary - Claude Code
                  can even shell out to <code>ant</code> commands.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="session-cost">
              <AccordionTrigger>How much does it cost to run a managed agent session?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Sessions cost $0.08 per session-hour, billed to the millisecond. Idle time
                  is free. You also pay standard Claude API token rates on top. A typical
                  1-hour coding session with Opus costs roughly $0.70 total including both
                  tokens and session runtime.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="yaml-version-control">
              <AccordionTrigger>Can I version control agents with the ant CLI?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Define agents as YAML files (e.g. <code>reviewer.agent.yaml</code>),
                  check them into Git, and deploy via CI. Use <code>ant beta:agents create</code> to
                  create from YAML and <code>ant beta:agents update</code> with the version
                  flag to push updates. This gives you full GitOps for agent configurations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mcp-servers">
              <AccordionTrigger>Can managed agents connect to MCP servers?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Agents support remote MCP server connections via the <code>--mcp-server</code> flag.
                  You specify the server URL and name, then add an <code>mcp_toolset</code> tool
                  entry referencing that server. This lets agents use tools from GitHub, Slack,
                  or custom MCP servers you&apos;ve built.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ci-cd">
              <AccordionTrigger>How do I use the ant CLI in CI/CD pipelines?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Define agents and environments as YAML files in your repo. In CI,
                  use <code>ant beta:agents create &lt; agent.yaml</code> to provision
                  and <code>ant beta:agents update</code> to deploy changes. The <code>--transform</code> flag
                  extracts IDs for scripting, and <code>--format</code> controls output parsing.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="available-tools">
              <AccordionTrigger>What tools are available to managed agents?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The <code>agent_toolset_20260401</code> built-in toolset includes bash, read,
                  write, edit, glob, grep, and web_fetch. You can enable or disable individual
                  tools, or disable all by default and whitelist specific ones. Agents can also
                  connect to external MCP servers for custom tool integrations.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related Articles / CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Bot" size="md" />
                <CardTitle>Claude Managed Agents vs Agent SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Not sure whether to use Managed Agents or the Agent SDK? I wrote a
                  full comparison with pricing math and a decision flowchart.
                </p>
                <Link href="/blog/claude-managed-agents" className="project-link">
                  Read the comparison
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="FileText" size="md" />
                <CardTitle>How I Write CLAUDE.md Files That Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  CLAUDE.md patterns that managed agents can also benefit from. The
                  system prompt patterns translate directly.
                </p>
                <Link href="/blog/claude-md-guide" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
