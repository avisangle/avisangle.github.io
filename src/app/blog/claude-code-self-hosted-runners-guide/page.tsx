import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { RelatedPosts } from "@/components/related-posts"
import { PostNavigation } from "@/components/post-navigation"

export const metadata: Metadata = {
  title: "Claude Code Self-Hosted Runners Guide",
  description:
    "Set up Claude Code self-hosted runners on your own infrastructure. Covers fixed vs on-demand modes, Docker and Kubernetes deployment, and cost planning.",
  keywords: [
    "Claude Code self-hosted runner",
    "Claude Code own infrastructure",
    "self-hosted AI coding agent",
    "Claude Code enterprise deployment",
    "Claude Code Kubernetes deployment",
    "Claude Code Docker runner",
    "how to set up Claude Code self-hosted runner",
    "Claude Code self-hosted vs cloud cost",
    "Claude Code fixed vs on-demand runner",
    "Claude Code self-hosted security",
    "Claude Code self-hosted environments",
    "deploy Claude Code on Kubernetes",
    "Claude Code runner setup guide",
    "Claude Code self-hosted runner capacity planning",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Claude Code Self-Hosted Runners: Deploy AI Agents on Your Infra",
    description:
      "Set up Claude Code self-hosted runners on your own infrastructure. Covers fixed vs on-demand modes, Docker and Kubernetes deployment, and cost planning.",
    url: "https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-08-10T00:00:00.000Z",
    modifiedTime: "2026-08-10T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-code-self-hosted-runners-guide.png",
        width: 1200,
        height: 630,
        alt: "Claude Code Self-Hosted Runners - Deploy AI Agents on Your Infra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Self-Hosted Runners: Deploy AI Agents on Your Infra",
    description:
      "Set up Claude Code self-hosted runners on your own infrastructure. Covers fixed vs on-demand modes, Docker and Kubernetes deployment, and cost planning.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-code-self-hosted-runners-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide",
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

const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Claude Code Self-Hosted Runners: Deploy AI Agents on Your Infra",
  description:
    "Set up Claude Code self-hosted runners on your own infrastructure. Covers fixed vs on-demand modes, Docker and Kubernetes deployment, and cost planning.",
  image: "https://avinashsangle.com/og-claude-code-self-hosted-runners-guide.png",
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
      "Self-Hosted Runners",
      "Kubernetes",
      "Docker",
      "AI Automation",
      "DevOps",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide",
  },
  keywords:
    "Claude Code, self-hosted runner, Kubernetes deployment, Docker runner, enterprise deployment, AI coding agent, infrastructure",
  articleSection: "Claude Code",
  wordCount: 3100,
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
      name: "Claude Code Self-Hosted Runners Guide",
      item: "https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Claude Code self-hosted environments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-hosted environments let your team run Claude Code cloud sessions on your own servers instead of Anthropic's infrastructure. A long-lived runner process polls for queued sessions, picks them up, and executes them locally. Compute stays on your side while model inference still routes through Anthropic's API.",
      },
    },
    {
      "@type": "Question",
      name: "What plans support Claude Code self-hosted runners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-hosted runners require a Claude Team or Enterprise plan. Individual Pro and Max subscriptions cannot use this feature. Organization admins create environment secrets in the admin UI, which runners use to authenticate with Anthropic's control plane.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between fixed and on-demand runner modes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fixed runners are a static fleet that stays running and accepts sessions as they arrive. On-demand mode uses an orchestrator that polls for queued sessions and spins up a fresh runner per session, scaling to zero when idle. On-demand keeps the environment secret off session hosts for better security.",
      },
    },
    {
      "@type": "Question",
      name: "Does self-hosted mean my prompts stay on my servers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Self-hosted controls where compute runs, not where inference happens. Prompts and model responses still route through Anthropic's API at api.anthropic.com. What stays local is the session workspace, file system access, tool execution, and network connectivity to your internal services.",
      },
    },
    {
      "@type": "Question",
      name: "How much does self-hosting Claude Code cost compared to Anthropic-hosted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-hosting does not reduce your Anthropic API bill. You pay the same seat and token costs, plus your own compute, storage, networking, and DevOps engineering time. The value is infrastructure control, compliance, and access to internal services rather than direct cost savings.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run Claude Code self-hosted runners on Windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not natively. Self-hosted runners require Linux or macOS. On Windows, run a Linux container using Docker Desktop or WSL2. The official Dockerfile uses debian:bookworm-slim as the base image, which works on any container runtime.",
      },
    },
    {
      "@type": "Question",
      name: "How do I deploy Claude Code runners on Kubernetes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Build a runner image from the official Dockerfile, create a Kubernetes Secret with your environment key, and deploy a Deployment with health probes on port 8080. Set terminationGracePeriodSeconds to at least 90 seconds so pods drain cleanly instead of being killed mid-session.",
      },
    },
    {
      "@type": "Question",
      name: "What network access do self-hosted runners need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Runners always need outbound HTTPS to api.anthropic.com (port 443) and your git host. Conditionally required: downloads.claude.ai, storage.googleapis.com, and registry.npmjs.org. Not required: statsig.anthropic.com, sentry.io, and claude.ai. Use a default-deny egress policy.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up a Claude Code Self-Hosted Runner",
  description:
    "Step-by-step guide to setting up a Claude Code self-hosted runner on your own infrastructure, from prerequisites through verification.",
  totalTime: "PT20M",
  tool: [
    { "@type": "HowToTool", name: "Claude Code CLI v2.1.224+" },
    { "@type": "HowToTool", name: "Linux or macOS host" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Claude Team or Enterprise plan" },
    { "@type": "HowToSupply", name: "Git 2.24+" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Create an environment secret",
      text: "In the Claude admin UI, navigate to Self-Hosted Environments and create a new environment. Copy the generated environment secret.",
      url: "https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide#setup",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Store the secret on the runner host",
      text: "Save the environment secret to a file on your runner host, for example /etc/claude/environment-secret. Restrict permissions to root or the runner service account.",
      url: "https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide#setup",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Start the runner process",
      text: "Run: claude self-hosted-runner --environment-secret-file /etc/claude/environment-secret --base-dir /workspace",
      url: "https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide#setup",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Verify in the admin UI",
      text: "Check the admin UI for the runner's status. A healthy runner shows as 'Healthy' and appears in the runner list within 30 seconds of starting.",
      url: "https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide#setup",
    },
  ],
})

export default function SelfHostedRunnersGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: techArticleSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToSchema }} />

      <article className="section">
        <div className="container-project">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Claude Code Self-Hosted Runners Guide" },
            ]}
          />

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CategoryIcon icon="Server" size="lg" animation="float" />
                <Badge variant="secondary">Claude Code</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Claude Code Self-Hosted Runners: Deploy AI Agents on Your Infra
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Run Claude Code sessions on servers you control. The decision framework, deployment manifests, and production hardening the official docs skip.
              </p>
              <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <CategoryIcon icon="Calendar" size="sm" /> Aug 10, 2026
                </span>
                <span>-</span>
                <span className="flex items-center gap-1">
                  <CategoryIcon icon="Clock" size="sm" /> 13 min read
                </span>
                <span>-</span>
                <span className="flex items-center gap-1">
                  <CategoryIcon icon="Tag" size="sm" /> Self-Hosted, Kubernetes, Docker, Enterprise
                </span>
              </div>
            </div>

            {/* Intro */}
            <p className="text-lg leading-relaxed mb-6">
              Claude Code self-hosted runners let your team run cloud sessions on your own servers instead of Anthropic&apos;s infrastructure. Shipped on August 6, 2026 with Claude Code v2.1.224 for Team and Enterprise plans, they work like GitHub Actions self-hosted runners. Your compute handles the session while prompts still route through Anthropic&apos;s API for model inference.
            </p>

            {/* TL;DR */}
            <Card className="card-accent-left mb-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Zap" size="sm" />
                  TL;DR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Self-hosted runners give you infrastructure control, internal network access, and compliance flexibility - but prompts still route through Anthropic for inference</li>
                  <li>Two modes: fixed (static fleet, simpler ops) vs on-demand (scales to zero, better security isolation)</li>
                  <li>Kubernetes deploys need <code>terminationGracePeriodSeconds: 90</code> and replicas {">"}= expected concurrent users</li>
                  <li>Self-hosting adds compute costs on top of your Anthropic bill - it does not reduce API spend</li>
                </ul>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle>Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li><a href="#what-are-self-hosted-environments" className="project-link">What Are Claude Code Self-Hosted Environments?</a></li>
                  <li><a href="#when-to-self-host" className="project-link">When Should You Self-Host Claude Code Runners?</a></li>
                  <li><a href="#setup" className="project-link">How to Set Up Your First Self-Hosted Runner</a></li>
                  <li><a href="#fixed-vs-on-demand" className="project-link">Fixed vs On-Demand Runner Modes</a></li>
                  <li><a href="#kubernetes-deployment" className="project-link">How to Deploy Claude Code Runners on Kubernetes</a></li>
                  <li><a href="#security-hardening" className="project-link">Security Hardening Checklist for Self-Hosted Runners</a></li>
                  <li><a href="#cost-comparison" className="project-link">Self-Hosted vs Anthropic-Hosted Cost Comparison</a></li>
                  <li><a href="#troubleshooting" className="project-link">Troubleshooting Common Self-Hosted Runner Issues</a></li>
                  <li><a href="#faq" className="project-link">FAQ</a></li>
                </ol>
              </CardContent>
            </Card>

            {/* H2: What Are Self-Hosted Environments */}
            <h2 id="what-are-self-hosted-environments" className="text-3xl font-bold mt-12 mb-4">
              What Are Claude Code Self-Hosted Environments?
            </h2>

            <p className="mb-4">
              Self-hosted environments are long-lived runner processes that run on machines you own. Each runner polls Anthropic&apos;s control plane for queued sessions, picks one up, clones the repository, and executes the session locally. When the session ends, the runner releases its lock and polls again. The model itself - the actual inference - still runs on Anthropic&apos;s servers. Your infrastructure handles everything else: file I/O, tool execution, git operations, and network calls.
            </p>

            <p className="mb-4">
              Anthropic{" "}
              <Link href="https://claude.com/blog/run-claude-code-sessions-on-your-own-compute" className="project-link" target="_blank" rel="noopener noreferrer">
                announced self-hosted environments
              </Link>
              {" "}on August 6, 2026. The feature requires Claude Code v2.1.224 or later and a Team or Enterprise plan. Three independent open-source projects - AgentOS, Kodama, and Lite-Harness - had already tried to solve self-hosting before Anthropic shipped an official solution, proving the demand was real.
            </p>

            <p className="mb-6">
              The timing wasn&apos;t coincidental. Microsoft cancelled 5,000 Claude Code licenses after per-engineer costs hit $500-$2,000 per month, according to{" "}
              <Link href="https://enterprisedna.co/resources/news/microsoft-claude-code-enterprise-budget-overrun-2026/" className="project-link" target="_blank" rel="noopener noreferrer">
                Enterprise DNA
              </Link>
              . Self-hosting doesn&apos;t fix the API cost problem (more on that later), but it gives large teams the infrastructure control and visibility they need to stay on the platform.
            </p>

            {/* H2: When to Self-Host */}
            <h2 id="when-to-self-host" className="text-3xl font-bold mt-12 mb-4">
              When Should You Self-Host Claude Code Runners?
            </h2>

            <p className="mb-4">
              Most teams shouldn&apos;t. Anthropic says so themselves:{" "}
              <em>&quot;Most teams are better served by Anthropic-hosted environments.&quot;</em> Self-hosting adds operational complexity that only pays off in specific situations. I&apos;ve found four cases where it makes sense.
            </p>

            <p className="mb-4">
              <strong>Network access to internal services.</strong> If your codebase needs to reach private APIs, internal databases, or services behind a VPN during sessions, self-hosted runners sit inside your network perimeter. No need to expose internal endpoints publicly or set up complex tunneling. This is the strongest reason to self-host.
            </p>

            <p className="mb-4">
              <strong>Compliance and data residency.</strong> Regulated industries - finance, healthcare, government contractors - often require that compute handling source code runs in specific jurisdictions or on audited infrastructure. Self-hosting gives you control over where the runner process executes and what logs are retained, even though prompts still leave your network for inference.
            </p>

            <p className="mb-4">
              <strong>Custom toolchains.</strong> Some projects need specific compilers, SDKs, or system libraries pre-installed. With self-hosted runners, you bake your toolchain into the container image. No waiting for Anthropic to support your stack.
            </p>

            <p className="mb-4">
              <strong>Infrastructure-layer cost visibility.</strong> When you run the compute, you see exactly what each session costs in terms of CPU, memory, and storage. For teams running hundreds of concurrent sessions, this granularity matters for capacity planning and chargeback.
            </p>

            <p className="mb-6">
              Skip self-hosting if you&apos;re a small team (under 20 engineers), have no compliance requirements, or lack dedicated DevOps capacity to maintain the runner fleet. The operational overhead isn&apos;t justified by the flexibility.
            </p>

            {/* H2: Setup */}
            <h2 id="setup" className="text-3xl font-bold mt-12 mb-4">
              How to Set Up Your First Self-Hosted Runner
            </h2>

            <p className="mb-4">
              The setup has four steps: create an environment secret, store it on your host, start the runner, and verify it&apos;s healthy. I&apos;ll walk through each one. You&apos;ll need a Linux or macOS host with Claude Code v2.1.224+, Git 2.24+, and outbound HTTPS access to <code>api.anthropic.com</code>.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 1: Create an environment secret</h3>

            <p className="mb-4">
              An organization admin creates the secret in the{" "}
              <Link href="https://code.claude.com/docs/en/self-hosted-environments-quickstart" className="project-link" target="_blank" rel="noopener noreferrer">
                Claude admin UI
              </Link>
              {" "}under Self-Hosted Environments. Each environment gets a unique secret that authenticates runners against Anthropic&apos;s control plane. Copy it immediately - you won&apos;t see it again.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 2: Store the secret on the runner host</h3>

            <CodeBlock language="bash" filename="terminal" code={`# Store the secret securely
sudo mkdir -p /etc/claude
echo "your-environment-secret" | sudo tee /etc/claude/environment-secret > /dev/null
sudo chmod 600 /etc/claude/environment-secret`} />

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 3: Start the runner</h3>

            <p className="mb-4">
              You can use the guided setup wizard or start directly with the CLI. The guided path is easier for the first time.
            </p>

            <CodeBlock language="bash" filename="terminal" code={`# Guided setup (interactive)
claude self-hosted-runner setup

# Or start directly
claude self-hosted-runner \\
  --environment-secret-file /etc/claude/environment-secret \\
  --base-dir /workspace`} />

            <p className="mb-4">
              The <code>--base-dir</code> flag sets where session workspaces get created. Each session gets its own subdirectory under this path. Make sure the runner process has write access.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Step 4: Verify in the admin UI</h3>

            <p className="mb-6">
              Within 30 seconds of starting, your runner should appear in the admin UI with a &quot;Healthy&quot; status. Route a test session to it by selecting the self-hosted environment when starting a new Claude Code session on the web.
            </p>

            {/* H2: Fixed vs On-Demand */}
            <h2 id="fixed-vs-on-demand" className="text-3xl font-bold mt-12 mb-4">
              Fixed vs On-Demand Runner Modes
            </h2>

            <p className="mb-4">
              Self-hosted runners support two operating modes. Your choice affects scaling behavior, security posture, and operational complexity.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Fixed mode</h3>

            <p className="mb-4">
              A static fleet of runner processes stays running continuously. Anthropic&apos;s control plane distributes sessions across available runners. This is simpler to operate - you deploy a Deployment or systemd service and it just runs. The trade-off is that idle runners still consume resources and each runner holds the environment secret.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">On-demand mode</h3>

            <p className="mb-4">
              An orchestrator process polls for queued sessions. When one arrives, the orchestrator spins up a fresh runner for that session and tears it down when it finishes. The fleet scales to zero when idle, and the environment secret stays on the orchestrator host, not on the machines that run sessions. This is better security isolation at the cost of more complex infrastructure.
            </p>

            <CodeBlock language="bash" filename="terminal" code={`# Start an on-demand orchestrator
claude self-hosted-runner orchestrator \\
  --environment-secret-file /etc/claude/environment-secret \\
  --runner-command "docker run --rm runner-image"`} />

            <h3 className="text-xl font-semibold mt-8 mb-3">Capacity planning</h3>

            <p className="mb-4">
              The <code>--capacity N</code> flag controls how many concurrent sessions a single runner handles. I recommend <code>--capacity 1</code> for production. Each runner locks to one user at a time, so your minimum replicas must equal your expected concurrent users. If 15 engineers run sessions during peak hours, you need at least 15 runners.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold">Dimension</th>
                        <th className="text-left py-2 pr-4 font-semibold">Fixed</th>
                        <th className="text-left py-2 font-semibold">On-Demand</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Scaling</td>
                        <td className="py-2 pr-4">Static fleet</td>
                        <td className="py-2">Scale to zero</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Secret exposure</td>
                        <td className="py-2 pr-4">On every runner</td>
                        <td className="py-2">Orchestrator only</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Startup latency</td>
                        <td className="py-2 pr-4">None (pre-running)</td>
                        <td className="py-2">Container spin-up time</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Ops complexity</td>
                        <td className="py-2 pr-4">Lower</td>
                        <td className="py-2">Higher</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Best for</td>
                        <td className="py-2 pr-4">Predictable workloads</td>
                        <td className="py-2">Variable/bursty usage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* H2: Kubernetes Deployment */}
            <h2 id="kubernetes-deployment" className="text-3xl font-bold mt-12 mb-4">
              How to Deploy Claude Code Runners on Kubernetes
            </h2>

            <p className="mb-4">
              For production fleets, Kubernetes is the natural choice. You need three pieces: a Dockerfile for the runner image, a Secret for the environment key, and a Deployment manifest. Here&apos;s what I use, adapted from the{" "}
              <Link href="https://code.claude.com/docs/en/self-hosted-environments-deploy" className="project-link" target="_blank" rel="noopener noreferrer">
                official deploy-to-production docs
              </Link>.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Dockerfile</h3>

            <CodeBlock language="dockerfile" filename="Dockerfile" code={`FROM debian:bookworm-slim

ARG CLAUDE_CODE_VERSION=2.1.224

RUN apt-get update && apt-get install -y \\
    curl git ca-certificates \\
    && rm -rf /var/lib/apt/lists/*

# Install Claude Code binary
RUN curl -fsSL https://downloads.claude.ai/cli/claude-code-\${CLAUDE_CODE_VERSION}-linux-x64 \\
    -o /usr/local/bin/claude && chmod +x /usr/local/bin/claude

# Git config for sessions
RUN git config --system credential.helper store

RUN useradd -m -s /bin/bash runner
USER runner
WORKDIR /workspace

ENTRYPOINT ["claude", "self-hosted-runner"]`} />

            <h3 className="text-xl font-semibold mt-8 mb-3">Kubernetes manifests</h3>

            <CodeBlock language="yaml" filename="claude-runner.yaml" code={`apiVersion: v1
kind: Namespace
metadata:
  name: claude-runners
---
apiVersion: v1
kind: Secret
metadata:
  name: claude-env-secret
  namespace: claude-runners
type: Opaque
stringData:
  environment-secret: "your-environment-secret-here"
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: claude-runner
  namespace: claude-runners
spec:
  replicas: 5  # >= expected concurrent users
  selector:
    matchLabels:
      app: claude-runner
  template:
    metadata:
      labels:
        app: claude-runner
    spec:
      terminationGracePeriodSeconds: 90
      containers:
        - name: runner
          image: your-registry/claude-runner:latest
          args:
            - "--environment-secret-file"
            - "/secrets/environment-secret"
            - "--base-dir"
            - "/workspace"
            - "--capacity"
            - "1"
          ports:
            - containerPort: 8080
          livenessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 30
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 10
          volumeMounts:
            - name: secret-vol
              mountPath: /secrets
              readOnly: true
            - name: workspace
              mountPath: /workspace
      volumes:
        - name: secret-vol
          secret:
            secretName: claude-env-secret
        - name: workspace
          emptyDir: {}`} />

            <p className="mb-4">
              The critical detail here is <code>terminationGracePeriodSeconds: 90</code>. Kubernetes defaults to 30 seconds, which kills pods mid-session during a rolling update. At 90 seconds, the runner has time to finish the current session and drain gracefully. I&apos;ve seen teams lose work because they missed this setting.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Docker Compose for evaluation</h3>

            <p className="mb-4">
              If you want to test self-hosted runners before committing to a Kubernetes fleet, Docker Compose works fine for evaluation. Keep in mind that Docker restart reuses the writable layer, so it&apos;s not recommended for production where you want ephemeral per-session isolation.
            </p>

            <CodeBlock language="yaml" filename="docker-compose.yml" code={`services:
  claude-runner:
    build:
      context: .
      args:
        CLAUDE_CODE_VERSION: "2.1.224"
    command:
      - "--environment-secret-file"
      - "/run/secrets/env_secret"
      - "--base-dir"
      - "/workspace"
      - "--capacity"
      - "1"
    secrets:
      - env_secret
    restart: unless-stopped
    stop_grace_period: 90s
    ports:
      - "8080:8080"

secrets:
  env_secret:
    file: ./environment-secret.txt`} />

            {/* H2: Security Hardening */}
            <h2 id="security-hardening" className="text-3xl font-bold mt-12 mb-4">
              Security Hardening Checklist for Self-Hosted Runners
            </h2>

            <p className="mb-4">
              When sessions run on your infrastructure, security is your responsibility. The{" "}
              <Link href="https://code.claude.com/docs/en/self-hosted-environments-deploy" className="project-link" target="_blank" rel="noopener noreferrer">
                official hardening guide
              </Link>
              {" "}covers the controls. Here&apos;s the checklist I follow, informed by my experience with{" "}
              <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                CI/CD prompt injection defense
              </Link>
              {" "}and{" "}
              <Link href="/blog/claude-code-security-review-github-actions" className="project-link">
                Claude Code security review
              </Link>.
            </p>

            <div className="space-y-3 mb-6">
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p><strong>Ephemeral per-session containers.</strong> Set <code>--capacity 1</code> and destroy the container after each session. No state leaks between users.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p><strong>No broad credentials in the image.</strong> Don&apos;t bake AWS keys, GitHub tokens, or database passwords into the runner image. Mint per-session tokens from wrapper scripts instead.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p><strong>Default-deny network egress.</strong> Allow only what&apos;s required: <code>api.anthropic.com:443</code>, your git host (port 443 or 22), and conditionally <code>downloads.claude.ai</code>, <code>storage.googleapis.com</code>, <code>registry.npmjs.org</code>. Block everything else at your network boundary. In particular, block <code>169.254.169.254</code> to prevent sessions from reaching cloud metadata endpoints.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p><strong>Confine repo settings.</strong> Use <code>--confine-repo-settings enforce</code> to block <code>.claude/settings.json</code> directives that reach outside the workspace. Without this flag, a checked-in settings file could expand the runner&apos;s blast radius.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p><strong>Use the Anthropic git proxy.</strong> The <code>--use-anthropic-git-proxy</code> flag routes git operations through Anthropic&apos;s proxy so you don&apos;t have to bake git credentials into runner images. This is the simplest way to handle repository access securely.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 pb-4">
                  <p><strong>Per-runner filesystem isolation.</strong> Each runner should have its own workspace directory. Don&apos;t share <code>--base-dir</code> across multiple runner processes.</p>
                </CardContent>
              </Card>
            </div>

            <p className="mb-4">
              Endpoints you don&apos;t need to allow, despite what older checklists may say: <code>statsig.anthropic.com</code>, <code>*.sentry.io</code>, and <code>claude.ai</code>. Those are for telemetry and the web interface, not the runner protocol.
            </p>

            <p className="mb-6">
              For a deeper treatment of agent security controls, see my posts on{" "}
              <Link href="/blog/sandbox-ai-agents-hugging-face-breach" className="project-link">
                sandbox containment after the Hugging Face breach
              </Link>
              {" "}and{" "}
              <Link href="/blog/hallusquatting-defense-ai-coding-agents" className="project-link">
                hallusquatting defense
              </Link>.
            </p>

            {/* H2: Cost Comparison */}
            <h2 id="cost-comparison" className="text-3xl font-bold mt-12 mb-4">
              Self-Hosted vs Anthropic-Hosted Cost Comparison
            </h2>

            <p className="mb-4">
              This is where most people get it wrong. Self-hosting does <strong>not</strong> reduce your Anthropic API costs. Inference still routes through Anthropic&apos;s servers, so you pay the same per-token rates regardless of where the runner executes. What changes is who pays for the compute, storage, and networking that surround the inference calls.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold">Cost item</th>
                        <th className="text-left py-2 pr-4 font-semibold">Anthropic-hosted</th>
                        <th className="text-left py-2 font-semibold">Self-hosted</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Seat cost (Team/Enterprise)</td>
                        <td className="py-2 pr-4">Included</td>
                        <td className="py-2">Same</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Token/API usage</td>
                        <td className="py-2 pr-4">Included</td>
                        <td className="py-2">Same</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Compute (CPU/memory)</td>
                        <td className="py-2 pr-4">Included</td>
                        <td className="py-2">You pay</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Storage</td>
                        <td className="py-2 pr-4">Included</td>
                        <td className="py-2">You pay</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">Networking/egress</td>
                        <td className="py-2 pr-4">Included</td>
                        <td className="py-2">You pay</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">DevOps engineering time</td>
                        <td className="py-2 pr-4">None</td>
                        <td className="py-2">You pay</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <p className="mb-4">
              According to a{" "}
              <Link href="https://markaicode.com/pricing/claude-code-self-hosted-vs-cloud-api-cost-analysis/" className="project-link" target="_blank" rel="noopener noreferrer">
                Markaicode cost analysis
              </Link>
              , a mid-size team might spend $1,500/month on Anthropic-hosted sessions versus $750 in Anthropic costs plus $400-800 in infrastructure when self-hosting. The total can come out similar or even higher once you factor in the engineering time to maintain the fleet.
            </p>

            <p className="mb-6">
              Self-hosting saves money in narrow cases: large teams where owning the infrastructure reduces compliance audit costs, or teams with massive repositories where pre-warmed checkouts on persistent runners cut clone times from minutes to seconds. For detailed token-level cost tracking strategies, see my{" "}
              <Link href="/blog/claude-code-cost-tracking" className="project-link">
                Claude Code cost tracking guide
              </Link>.
            </p>

            {/* H2: Troubleshooting */}
            <h2 id="troubleshooting" className="text-3xl font-bold mt-12 mb-4">
              Troubleshooting Common Self-Hosted Runner Issues
            </h2>

            <p className="mb-4">
              Start with the built-in diagnostics. The <code>doctor</code> subcommand checks connectivity, secret validity, and system requirements in one pass.
            </p>

            <CodeBlock language="bash" filename="terminal" code="claude self-hosted-runner doctor" />

            <p className="mb-4">
              <strong>Runner doesn&apos;t appear in the admin UI.</strong> Check three things: outbound HTTPS to <code>api.anthropic.com</code>, the environment secret file exists and is readable, and the host clock is within five minutes of UTC. Clock skew is the sneakiest - NTP drift on a VM can silently prevent registration.
            </p>

            <p className="mb-4">
              <strong>Sessions stay queued.</strong> Usually means all runners are locked to active users. Each runner handles one user at a time (with <code>--capacity 1</code>), so if you have 10 runners and 12 engineers trying to start sessions, two will queue. Add more replicas. Also check that runners aren&apos;t locked to accounts from a previous session that didn&apos;t terminate cleanly.
            </p>

            <p className="mb-4">
              <strong>Sessions fail after pickup.</strong> The runner picked up the session but couldn&apos;t execute it. Common causes: missing git credentials (the runner can&apos;t clone the repo), missing build tools in the image, or incorrect permissions on the <code>--base-dir</code> directory. Check the runner logs for the specific error.
            </p>

            <p className="mb-4">
              <strong>Sessions are slow to start.</strong> Repository cloning dominates startup time, especially for large monorepos. Use pre-warmed checkouts with <code>--lock-to-account</code> to keep a clone cached on the runner. This skips the clone step for subsequent sessions from the same user working on the same repo.
            </p>

            <p className="mb-6">
              <strong>Pods killed during rolling updates.</strong> If Kubernetes kills your pods mid-session during a deploy, you forgot <code>terminationGracePeriodSeconds: 90</code>. The default 30 seconds isn&apos;t enough time for the runner to finish the current session, drain, and shut down cleanly.
            </p>

            {/* Related context */}
            <p className="mb-6">
              Self-hosted runners integrate with the same{" "}
              <Link href="/blog/claude-md-guide" className="project-link">
                CLAUDE.md project configuration
              </Link>
              {" "}as Anthropic-hosted sessions. Your <code>.claude/settings.json</code> files, hooks, and custom commands carry over. If you&apos;re running{" "}
              <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
                dynamic workflows
              </Link>
              {" "}on self-hosted infrastructure, be aware that each subagent in a workflow consumes a runner slot, so scale your fleet accordingly. And for model selection on self-hosted sessions, the same{" "}
              <Link href="/blog/claude-code-fable-5-model-routing" className="project-link">
                model routing and fallback rules
              </Link>
              {" "}apply.
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-3xl font-bold mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="mb-10">
              <AccordionItem value="q1">
                <AccordionTrigger>What are Claude Code self-hosted environments?</AccordionTrigger>
                <AccordionContent>
                  Self-hosted environments let your team run Claude Code cloud sessions on your own servers instead of Anthropic&apos;s infrastructure. A long-lived runner process polls for queued sessions, picks them up, and executes them locally. Compute stays on your side while model inference still routes through Anthropic&apos;s API.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2">
                <AccordionTrigger>What plans support Claude Code self-hosted runners?</AccordionTrigger>
                <AccordionContent>
                  Self-hosted runners require a Claude Team or Enterprise plan. Individual Pro and Max subscriptions cannot use this feature. Organization admins create environment secrets in the admin UI, which runners use to authenticate with Anthropic&apos;s control plane.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3">
                <AccordionTrigger>What is the difference between fixed and on-demand runner modes?</AccordionTrigger>
                <AccordionContent>
                  Fixed runners are a static fleet that stays running and accepts sessions as they arrive. On-demand mode uses an orchestrator that polls for queued sessions and spins up a fresh runner per session, scaling to zero when idle. On-demand keeps the environment secret off session hosts for better security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4">
                <AccordionTrigger>Does self-hosted mean my prompts stay on my servers?</AccordionTrigger>
                <AccordionContent>
                  No. Self-hosted controls where compute runs, not where inference happens. Prompts and model responses still route through Anthropic&apos;s API at api.anthropic.com. What stays local is the session workspace, file system access, tool execution, and network connectivity to your internal services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5">
                <AccordionTrigger>How much does self-hosting Claude Code cost compared to Anthropic-hosted?</AccordionTrigger>
                <AccordionContent>
                  Self-hosting does not reduce your Anthropic API bill. You pay the same seat and token costs, plus your own compute, storage, networking, and DevOps engineering time. The value is infrastructure control, compliance, and access to internal services rather than direct cost savings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6">
                <AccordionTrigger>Can I run Claude Code self-hosted runners on Windows?</AccordionTrigger>
                <AccordionContent>
                  Not natively. Self-hosted runners require Linux or macOS. On Windows, run a Linux container using Docker Desktop or WSL2. The official Dockerfile uses debian:bookworm-slim as the base image, which works on any container runtime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q7">
                <AccordionTrigger>How do I deploy Claude Code runners on Kubernetes?</AccordionTrigger>
                <AccordionContent>
                  Build a runner image from the official Dockerfile, create a Kubernetes Secret with your environment key, and deploy a Deployment with health probes on port 8080. Set terminationGracePeriodSeconds to at least 90 seconds so pods drain cleanly instead of being killed mid-session.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q8">
                <AccordionTrigger>What network access do self-hosted runners need?</AccordionTrigger>
                <AccordionContent>
                  Runners always need outbound HTTPS to api.anthropic.com (port 443) and your git host. Conditionally required: downloads.claude.ai, storage.googleapis.com, and registry.npmjs.org. Not required: statsig.anthropic.com, sentry.io, and claude.ai. Use a default-deny egress policy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Related Posts */}
            <RelatedPosts slug="claude-code-self-hosted-runners-guide" />

            {/* Post Navigation */}
            <PostNavigation slug="claude-code-self-hosted-runners-guide" />
          </div>
        </div>
      </article>
    </>
  )
}
