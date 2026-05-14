import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough",
  description:
    "How to set up OpenAI Codex Security on GitHub: connect a repo, edit the threat model, triage validated findings, and ship fixes as PRs.",
  keywords: [
    "openai codex security github setup",
    "codex security tutorial",
    "codex security setup guide",
    "openai daybreak codex security",
    "codex security threat model",
    "codex security false positives",
    "codex security vs semgrep",
    "codex security vs claude code",
    "ai vulnerability scanning github",
    "ai sast openai",
    "codex security pricing",
    "openai codex security review",
    "codex security pull request patches",
    "codex security validation sandbox",
    "devsecops openai codex",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough",
    description:
      "How to set up OpenAI Codex Security on GitHub: connect a repo, edit the threat model, triage validated findings, and ship fixes as PRs.",
    url: "https://avinashsangle.com/blog/codex-security-github-setup",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-05-14T00:00:00.000Z",
    modifiedTime: "2026-05-14T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-codex-security-github-setup.png",
        width: 1200,
        height: 630,
        alt: "OpenAI Codex Security GitHub Setup Guide - 2026 Walkthrough",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough",
    description:
      "How to set up OpenAI Codex Security on GitHub: connect a repo, edit the threat model, triage validated findings, and ship fixes as PRs.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-codex-security-github-setup.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/codex-security-github-setup",
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

// Static JSON-LD schemas built at compile time from trusted, hardcoded values.
// Same dangerouslySetInnerHTML pattern used across every blog post on this site.
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough",
  description:
    "How to set up OpenAI Codex Security on GitHub: connect a repo, edit the threat model, triage validated findings, and ship fixes as PRs.",
  image: "https://avinashsangle.com/og-codex-security-github-setup.png",
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
      "OpenAI Codex",
      "Codex Security",
      "AI Application Security",
      "DevSecOps",
      "Claude Code",
      "AI Automation",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/codex-security-github-setup",
  },
  keywords:
    "openai codex security, codex security setup, daybreak, ai vulnerability scanning, codex security threat model, codex security vs semgrep, devsecops, github security",
  articleSection: "AI Security",
  wordCount: 2900,
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
      name: "OpenAI Codex Security GitHub Setup Guide",
      item: "https://avinashsangle.com/blog/codex-security-github-setup",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is OpenAI Codex Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OpenAI Codex Security is an AI application security agent that connects to GitHub repositories, scans commits against a repo-specific threat model, validates likely vulnerabilities in a sandbox, and opens patches as pull requests. It lives at chatgpt.com/codex/security and is the practitioner front end of OpenAI's Daybreak cybersecurity stack.",
      },
    },
    {
      "@type": "Question",
      name: "How do I connect a GitHub repo to Codex Security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open chatgpt.com/codex/security/scans/new, choose the GitHub organization, repository, branch, and the matching Codex environment, then pick a history window and click Create. The repo must already be available in Codex Cloud with an environment set up, and the GitHub App needs pull-request write and contents read scopes.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Codex Security cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Independent reviews price Codex Security around two cents per 1,000 lines of code scanned. A 100,000-line repo runs roughly two dollars per full scan, and a twenty-repo workspace with daily scans averaging 50,000 lines tracks near six hundred dollars per month. Access is currently gated through ChatGPT Business, Enterprise, or Edu plans.",
      },
    },
    {
      "@type": "Question",
      name: "How does Codex Security reduce false positives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each candidate finding gets pushed into an isolated sandbox where the agent attempts to exploit it. If the exploit fails because input validation or a WAF rule catches it upstream, the finding is downgraded or dropped. Coupled with the editable threat model, OpenAI reports false positives down more than fifty percent and noise reduction near eighty-four percent versus traditional SAST.",
      },
    },
    {
      "@type": "Question",
      name: "What languages does Codex Security support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Independent reviews show the deepest analysis on Python, JavaScript, TypeScript, Go, and Java. Ruby, PHP, and Kotlin are noted as roadmap gaps as of March 2026. If your stack centers on a supported language, results are strong. On unsupported languages, treat Codex Security as advisory only and lean harder on Semgrep or CodeQL.",
      },
    },
    {
      "@type": "Question",
      name: "Can Codex Security replace Semgrep or Snyk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It complements them. Codex Security excels at semantic reasoning and sandbox-validated impact analysis. Semgrep remains the fast deterministic gate that costs nothing per scan, and Snyk owns dependency CVE coverage with the largest vulnerability database. A layered pipeline with all three catches more than any single tool, per the 2026 sanj.dev comparison.",
      },
    },
    {
      "@type": "Question",
      name: "How is Codex Security different from Daybreak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daybreak is OpenAI's broader cybersecurity initiative launched May 11, 2026, bundling GPT-5.5-Cyber, a Trusted Access tier, and integrations with Akamai, Cisco, Cloudflare, CrowdStrike, Fortinet, Oracle, Palo Alto Networks, and Zscaler. Codex Security is the practitioner-facing scanner inside Daybreak. You set up Codex Security to use Daybreak capabilities on your repos.",
      },
    },
    {
      "@type": "Question",
      name: "What does Codex Security miss that DAST still catches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Codex Security is code-level, so it misses runtime issues: CORS misconfig, debug flags in production, TLS settings, missing security headers, and broken authorization checks that only fail under real authenticated traffic. OWASP API number one is at runtime. Pair Codex Security with a DAST tool like StackHawk or ZAP in CI to cover the gap.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up OpenAI Codex Security on GitHub",
  description:
    "Step-by-step guide to connecting a GitHub repository to OpenAI Codex Security, configuring a Codex environment, running the first scan, and editing the threat model.",
  totalTime: "PT30M",
  tool: [
    { "@type": "HowToTool", name: "GitHub repository" },
    { "@type": "HowToTool", name: "ChatGPT Business, Enterprise, or Edu workspace" },
    { "@type": "HowToTool", name: "Codex Cloud environment" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "GitHub OAuth or GitHub App install" },
    { "@type": "HowToSupply", name: "Codex Security access enabled by workspace admin" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Confirm Codex Security access",
      text: "Verify your ChatGPT workspace has Codex Security enabled. If it is gated, ask your admin or account team to flip the toggle.",
      url: "https://avinashsangle.com/blog/codex-security-github-setup#prerequisites",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Create a Codex environment",
      text: "Open chatgpt.com/codex/settings/environments. Create a Codex environment that matches the GitHub repo you plan to scan.",
      url: "https://avinashsangle.com/blog/codex-security-github-setup#prerequisites",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Start a new security scan",
      text: "Go to chatgpt.com/codex/security/scans/new. Pick the organization, repository, branch, environment, and history window, then click Create.",
      url: "https://avinashsangle.com/blog/codex-security-github-setup#how-to-set-up",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Edit the auto-generated threat model",
      text: "When the backfill produces findings, open the scan and click Edit on the threat model. Document entry points, trust boundaries, sensitive data paths, and review priorities.",
      url: "https://avinashsangle.com/blog/codex-security-github-setup#threat-model",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Triage findings and ship patches",
      text: "Open the Findings view, start with Recommended Findings, review each card, and use Generate Patch to open a pull request against the scanned branch.",
      url: "https://avinashsangle.com/blog/codex-security-github-setup#triage",
    },
  ],
})

export default function CodexSecurityGithubSetupPage() {
  return (
    <>
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
            { label: "OpenAI Codex Security GitHub Setup Guide" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Security</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            OpenAI Codex Security is a vulnerability-scanning agent that connects to
            your GitHub repos, builds a codebase-specific threat model, validates
            findings in a sandbox, and opens patches as pull requests. You set it up
            at <code>chatgpt.com/codex/security</code>, give it a repo and history
            window, then edit the auto-generated threat model so triage matches your
            architecture.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> May 14, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-05-14</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["OpenAI Codex", "Codex Security", "Daybreak", "AI SAST", "DevSecOps"].map(
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
                  <a href="#what-is-codex-security" className="project-link">
                    What Is OpenAI Codex Security?
                  </a>
                </li>
                <li>
                  <a href="#prerequisites" className="project-link">
                    Prerequisites for Connecting a GitHub Repo
                  </a>
                </li>
                <li>
                  <a href="#how-to-set-up" className="project-link">
                    How to Set Up Codex Security on GitHub
                  </a>
                </li>
                <li>
                  <a href="#threat-model" className="project-link">
                    Editing the Threat Model (the Step Most Posts Skip)
                  </a>
                </li>
                <li>
                  <a href="#triage" className="project-link">
                    Triaging Findings and Shipping Patches
                  </a>
                </li>
                <li>
                  <a href="#benchmarks" className="project-link">
                    Accuracy Benchmarks vs Semgrep and Snyk
                  </a>
                </li>
                <li>
                  <a href="#vs-claude" className="project-link">
                    Codex Security vs Claude Code Security Review
                  </a>
                </li>
                <li>
                  <a href="#cost-and-gaps" className="project-link">
                    Cost, Limits, and What Codex Security Misses
                  </a>
                </li>
                <li>
                  <a href="#troubleshooting" className="project-link">
                    Troubleshooting Common Failures
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
                Codex Security lives at <code>chatgpt.com/codex/security</code>. It is a
                SaaS scanner, not a GitHub Action. The <code>openai/codex-action</code> action
                is a separate product for the coding agent.
              </li>
              <li>
                Three-stage loop: identify (commit-by-commit pass against a threat model),
                validate (sandbox exploit attempt), remediate (PR patch).
              </li>
              <li>
                Independent testing reports 74% true positive rate on 31 findings versus
                Semgrep at 20% and Snyk at 28% on the same 162,000-line, four-language
                corpus.
              </li>
              <li>
                Editing the threat model is the highest-leverage step. Default findings
                without that edit drift toward generic priorities.
              </li>
              <li>
                Daybreak (May 11, 2026) makes Codex Security the front end of OpenAI&apos;s full
                cybersecurity stack with GPT-5.5-Cyber, a Trusted Access tier, and
                integrations with eight enterprise security vendors.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: What is Codex Security */}
        <section id="what-is-codex-security" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldAlert" size="md" />
            What Is OpenAI Codex Security?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Codex Security is OpenAI&apos;s AI application security agent. It connects
            to your GitHub repositories, scans them commit-by-commit against a
            codebase-specific threat model, validates likely findings in isolated
            sandboxes, and proposes patches as pull requests for human review. The
            product launched in private beta in March 2026 and graduated into the
            centerpiece of OpenAI&apos;s{" "}
            <a
              href="https://openai.com/daybreak/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Daybreak cybersecurity initiative
            </a>{" "}
            on May 11, 2026.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The three-stage workflow is the part worth keeping in mind: identification,
            validation, and remediation. Identification is the commit-level pass that
            generates candidate findings. Validation is the step that separates Codex
            Security from pattern-matching SAST tools: a sandbox spins up, the agent
            tries to exploit the candidate, and if the exploit fails because input
            validation, a WAF rule, or framework defaults catch it upstream, the
            finding gets dropped or downgraded. Remediation is the patch generation
            step, which lands as a normal GitHub pull request you can review and merge.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            There&apos;s a naming-collision worth clearing up before you start. Three
            different products carry the &quot;Codex&quot; brand and they are not
            interchangeable:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Product</th>
                  <th className="py-3 pr-4 font-semibold">What it is</th>
                  <th className="py-3 pr-4 font-semibold">Where it lives</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Codex Security</td>
                  <td className="py-3 pr-4">Vulnerability scanner with sandbox validation and PR patches</td>
                  <td className="py-3 pr-4"><code>chatgpt.com/codex/security</code></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Codex CLI</td>
                  <td className="py-3 pr-4">Local coding agent (think Claude Code equivalent)</td>
                  <td className="py-3 pr-4"><code>npm install -g @openai/codex</code></td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">openai/codex-action</td>
                  <td className="py-3 pr-4">GitHub Action for running the coding agent in CI</td>
                  <td className="py-3 pr-4"><code>github.com/openai/codex-action</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            This guide is about the first one. If you arrived expecting a YAML
            workflow, you want the action repo instead. There is no GitHub Action that
            runs Codex Security findings yet; the scanner is a hosted SaaS surface
            and the integration is the GitHub App that authorizes repository access.
          </p>

          <p className="text-lg leading-relaxed">
            OpenAI&apos;s own beta data is worth knowing as context. The agent scanned
            1.2 million commits across external repos during private beta and surfaced
            10,561 high-severity findings plus 792 critical ones, including heap-buffer
            overflows and auth bypasses in projects like OpenSSH and Chromium according
            to{" "}
            <a
              href="https://thehackernews.com/2026/03/openai-codex-security-scanned-12.html"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              The Hacker News coverage from March 2026
            </a>
            . Daybreak then folded Codex Security under a broader umbrella that
            includes GPT-5.5-Cyber, a Trusted Access tier, and enterprise integrations
            with Akamai, Cisco, Cloudflare, CrowdStrike, Fortinet, Oracle, Palo Alto
            Networks, and Zscaler.
          </p>
        </section>

        {/* Section 2: Prerequisites */}
        <section id="prerequisites" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ListChecks" size="md" />
            Prerequisites for Connecting a GitHub Repo
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Codex Security is gated access today. Before you spend time clicking
            through the UI, check four boxes. Missing any of them sends you back to an
            admin or your OpenAI account team, and there&apos;s no point starting the
            scan setup until they&apos;re all green.
          </p>

          <h3 className="text-xl font-semibold mb-4">1. Workspace with Codex Security enabled</h3>

          <p className="text-lg leading-relaxed mb-6">
            You need a ChatGPT Business, Enterprise, or Edu workspace with the Codex
            Security toggle on. Free, Plus, Pro, and Go accounts can use the Codex
            coding agent but not the security scanner. If you don&apos;t see{" "}
            <code>chatgpt.com/codex/security</code> in your workspace nav, that&apos;s
            the toggle: your account team turns it on after a short eligibility
            review. The{" "}
            <a
              href="https://help.openai.com/en/articles/20001107-codex-security"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Codex Security help center article
            </a>{" "}
            covers the request flow.
          </p>

          <h3 className="text-xl font-semibold mb-4">2. Repo available in Codex Cloud</h3>

          <p className="text-lg leading-relaxed mb-6">
            Codex Security scans repos that are reachable through Codex Cloud, the same
            workspace surface that powers the Codex Web coding agent. If you&apos;ve
            never used Codex on this repo before, install or re-install the OpenAI
            GitHub App against the organization that owns the repo, with these scopes
            at minimum:
          </p>

          <ul className="skill-list mb-6">
            <li><code>Contents: read</code> for the source scan</li>
            <li><code>Pull requests: write</code> so patches can open PRs</li>
            <li><code>Metadata: read</code> for the basic repo info</li>
            <li><code>Commit statuses: read</code> if you want findings tied to commit history</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">3. Codex environment for the repo</h3>

          <p className="text-lg leading-relaxed mb-6">
            Each repo Codex Security touches needs a matching Codex environment, which
            is where the sandbox validation step runs. Open{" "}
            <a
              href="https://chatgpt.com/codex/settings/environments"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              chatgpt.com/codex/settings/environments
            </a>{" "}
            and create one if the repo doesn&apos;t already have it. The environment
            controls the runtime, network policy, and any setup scripts the agent runs
            before exploring code.
          </p>

          <h3 className="text-xl font-semibold mb-4">4. Production branch identified</h3>

          <p className="text-lg leading-relaxed">
            Pick the branch you actually deploy from before you start. Most teams use{" "}
            <code>main</code> or <code>master</code>. You can scan multiple branches by
            creating multiple scans against the same repo, but the threat model is
            scoped per scan, so it pays to start with the production branch where
            findings have the most blast radius.
          </p>
        </section>

        {/* Section 3: How to Set Up */}
        <section id="how-to-set-up" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Wrench" size="md" />
            How to Set Up Codex Security on GitHub
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            With the prerequisites in place, the click-path is short. The slow part is
            the initial backfill, which on a midsize repo can take a few hours. Plan
            to fire this off and check back later rather than babysitting it.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 1: Start a new security scan</h3>

          <p className="text-lg leading-relaxed mb-6">
            Open{" "}
            <a
              href="https://chatgpt.com/codex/security/scans/new"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              chatgpt.com/codex/security/scans/new
            </a>
            . The form is short: organization, repository, branch, environment,
            history window. The official setup docs walk through the same flow in{" "}
            <a
              href="https://developers.openai.com/codex/security/setup"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              developers.openai.com/codex/security/setup
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 2: Pick the history window deliberately</h3>

          <p className="text-lg leading-relaxed mb-6">
            The history window controls how much git history Codex Security pulls in
            for the initial pass. It&apos;s the one knob in the form that meaningfully
            changes both backfill duration and finding quality. My defaults:
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>30 to 60 days</strong> for an app on active development. Backfill
              finishes in a few hours. You catch recent regressions without paying for
              context on stale code.
            </li>
            <li>
              <strong>6 to 12 months</strong> for mature production services where the
              attack surface accumulated slowly. Backfill takes overnight. You catch
              latent bugs that have been sitting around.
            </li>
            <li>
              <strong>Full history</strong> when you&apos;re onboarding a legacy
              codebase for the first time and need a baseline. Plan for several days.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Step 3: Click Create and let backfill run</h3>

          <p className="text-lg leading-relaxed mb-6">
            Once you click Create, Codex Security runs a commit-level security pass
            across the selected window. This is the long step. On my first scan
            against a 40,000-line Python repo with a 90-day window, backfill took
            about 3 hours. The scan stays available in{" "}
            <a
              href="https://chatgpt.com/codex/security/scans"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              chatgpt.com/codex/security/scans
            </a>{" "}
            with a status indicator while it works.
          </p>

          <h3 className="text-xl font-semibold mb-4">Step 4: Verify near-real-time scanning</h3>

          <p className="text-lg leading-relaxed">
            After backfill completes, push a small commit to the scanned branch. Codex
            Security should pick it up within minutes and run an incremental pass. If
            the incremental scan never fires, the GitHub App likely lost its webhook
            permissions, which is the most common silent failure I&apos;ve seen. Re-install
            the app against the org and the scan resumes.
          </p>
        </section>

        {/* Section 4: Threat Model */}
        <section id="threat-model" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="FileText" size="md" />
            Editing the Threat Model (the Step Most Posts Skip)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Backfill produces an initial threat model the agent auto-generates from the
            code. It captures what Codex Security thinks your application is, where
            attackers come in, and what matters. This is the highest-leverage knob in
            the entire product. Most public guides mention it exists; few show how to
            actually use it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            From{" "}
            <a
              href="https://chatgpt.com/codex/security/scans"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              chatgpt.com/codex/security/scans
            </a>
            , open the repo and click Edit. A markdown-style editor appears with the
            auto-generated model. Four sections matter: entry points and untrusted
            inputs, trust boundaries and authentication assumptions, sensitive data
            paths or privileged actions, and review priorities. The official{" "}
            <a
              href="https://developers.openai.com/codex/security/threat-model"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              threat-model docs
            </a>{" "}
            give an example that maps cleanly to most web apps:
          </p>

          <CodeBlock language="markdown" filename="threat-model.md" code={`# Application overview

Public API for account changes. Accepts JSON requests and file uploads.
Uses an internal auth service for identity checks and writes billing
changes through an internal service.

## Entry points and untrusted inputs

- POST /api/v1/account: JSON body, untrusted, requires session token
- POST /api/v1/uploads: multipart, untrusted, max 25 MB, jpeg/png/pdf
- Webhook: POST /hooks/stripe: signed payload, validated upstream

## Trust boundaries

- /api/* requires a valid session cookie verified against internal auth
- /internal/* binds to 127.0.0.1, no auth on purpose, ops-only
- All service-to-service calls go through service mesh with mTLS

## Sensitive data paths

- Billing writes route through services/billing.py:apply_change
- Token rotation in services/auth.py:rotate_session
- PII exports in handlers/exports.py guarded by role admin

## Review priorities

Focus review on auth checks in /api/*, upload parsing in /api/v1/uploads,
and service-to-service trust boundaries. Deprioritize /internal/* which
is bound to localhost and not exposed.`} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Edits change ranking on the next scan pass. Re-run the scan after a
            meaningful edit so the impact shows up in the Recommended Findings list.
            On a Django repo where the initial pass surfaced thirty generic findings,
            adding a focused threat model and re-running cut the Recommended list to
            twelve with much sharper prioritization.
          </p>

          <h3 className="text-xl font-semibold mb-4">A workflow tip that saves time</h3>

          <p className="text-lg leading-relaxed">
            Don&apos;t draft the threat model in the web editor. Paste the
            auto-generated version into Claude or ChatGPT, paste your repo&apos;s
            top-level structure alongside it, and iterate through conversation. You
            get a sharper model in five minutes than you would in twenty in the web
            UI. Then paste the polished result back. This is a pattern OpenAI&apos;s
            own team has recommended in conversations about Codex Security workflow.
          </p>
        </section>

        {/* Section 5: Triage */}
        <section id="triage" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ListFilter" size="md" />
            Triaging Findings and Shipping Patches
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Once findings appear, the workflow becomes a normal review loop. The
            Findings view at{" "}
            <a
              href="https://chatgpt.com/codex/security/findings"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              chatgpt.com/codex/security/findings
            </a>{" "}
            splits into two tabs.
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>Recommended Findings:</strong> the top 10 prioritized by impact
              and validation confidence. Start here every session.
            </li>
            <li>
              <strong>All Findings:</strong> the full sortable, filterable table.
              Filter by <em>Validated</em> first to skip unvalidated candidates.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Each finding card includes description, impact reasoning, code excerpt, and
            the sandbox validation evidence. The validation block is the one piece
            that distinguishes Codex Security from a generic LLM scanner. When the
            agent says &quot;exploit succeeded in sandbox,&quot; it ran the actual
            payload, not a guess. When it says &quot;exploit failed because input
            validation caught it,&quot; the finding gets dropped or downgraded
            automatically.
          </p>

          <h3 className="text-xl font-semibold mb-4">From finding to merged PR</h3>

          <p className="text-lg leading-relaxed mb-6">
            Each finding has a Generate Patch action that opens a pull request against
            the scanned branch. The PR includes the proposed fix, a short rationale,
            and a back-link to the finding. Independent testing reports a high merge
            rate: an{" "}
            <a
              href="https://agent-finder.co/reviews/codex-security"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Agent Finder review
            </a>{" "}
            tracked 18 of 23 proposed fixes merged without modification, with the
            remaining 5 needing only minor adjustments to match project conventions.
          </p>

          <p className="text-lg leading-relaxed">
            Treat the patches as a strong first draft rather than green-light merges.
            Run your normal review, CI, and lint gates. The model has no awareness of
            your downstream consumers or release process, so a patch that looks
            isolated in the finding card may break a contract somewhere else. The
            mitigation is the same as for any external contributor PR: read it, run
            tests, ask questions before clicking merge.
          </p>
        </section>

        {/* Section 6: Benchmarks */}
        <section id="benchmarks" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="BarChart3" size="md" />
            Accuracy Benchmarks vs Semgrep and Snyk
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The most-cited comparison comes from an independent 2026 test on 162,000
            lines across four production repos (Python Django, TypeScript React, Go
            microservice, Java Spring Boot). The numbers are the headline reason
            practitioners are paying attention to Codex Security at all:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Tool</th>
                  <th className="py-3 pr-4 font-semibold">Findings reported</th>
                  <th className="py-3 pr-4 font-semibold">Confirmed real</th>
                  <th className="py-3 pr-4 font-semibold">True positive rate</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Codex Security</td>
                  <td className="py-3 pr-4">31</td>
                  <td className="py-3 pr-4">23</td>
                  <td className="py-3 pr-4"><strong>74%</strong></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Snyk</td>
                  <td className="py-3 pr-4">89</td>
                  <td className="py-3 pr-4">25</td>
                  <td className="py-3 pr-4">28%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Semgrep</td>
                  <td className="py-3 pr-4">147</td>
                  <td className="py-3 pr-4">29</td>
                  <td className="py-3 pr-4">20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Source:{" "}
            <a
              href="https://agent-finder.co/reviews/codex-security"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Agent Finder, Codex Security Review 2026
            </a>
            . OpenAI&apos;s own beta data tells a similar story from the other
            direction: false positives down more than 50% across all repositories, and
            noise reduction roughly 84% versus traditional SAST tools per the{" "}
            <a
              href="https://www.stackhawk.com/blog/codex-security/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              StackHawk analysis
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two honest caveats. First, these are vendor-friendly comparisons run on
            corpora where contextual reasoning has an inherent advantage over pattern
            matching. Real-world results depend heavily on whether the threat model is
            actually edited and whether the codebase is in a supported language.
            Second, Semgrep&apos;s 20% TPR doesn&apos;t mean Semgrep is useless. It
            means Semgrep over-fires by default, which is a different problem with a
            different solution (tighter rule sets, custom YAML).
          </p>

          <p className="text-lg leading-relaxed">
            The right takeaway: Codex Security raises the signal-to-noise ratio of a
            scan, and the sandbox-validation step is what gets it there. Where it
            doesn&apos;t fit, the older tools still earn their seat in the pipeline.
          </p>
        </section>

        {/* Section 7: vs Claude Code Security Review */}
        <section id="vs-claude" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Codex Security vs Claude Code Security Review
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Both products ship as official vendor tooling. The deployment models are
            different enough that picking the wrong one wastes a week of setup.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Dimension</th>
                  <th className="py-3 pr-4 font-semibold">Codex Security</th>
                  <th className="py-3 pr-4 font-semibold">Claude Code Security Review</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Shape</td>
                  <td className="py-3 pr-4">Hosted SaaS dashboard</td>
                  <td className="py-3 pr-4">GitHub Action you install</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Scope</td>
                  <td className="py-3 pr-4">Whole repo + history, continuous</td>
                  <td className="py-3 pr-4">Per-PR diff only</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Validation</td>
                  <td className="py-3 pr-4">Sandbox exploit attempt</td>
                  <td className="py-3 pr-4">Self-verification sub-task</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Output</td>
                  <td className="py-3 pr-4">Ranked findings + auto-PR patches</td>
                  <td className="py-3 pr-4">Inline PR comments</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Billing</td>
                  <td className="py-3 pr-4">~$0.02 per 1,000 LOC scanned</td>
                  <td className="py-3 pr-4">Tokens against your Anthropic API key</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Access</td>
                  <td className="py-3 pr-4">ChatGPT Business/Enterprise/Edu (gated)</td>
                  <td className="py-3 pr-4">Anyone with a Claude API key</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Pick by workload. If you want continuous repo-wide audit with
            sandbox-validated findings ranked by impact, Codex Security fits. If you
            want per-PR advisory commentary with transparent cost-per-PR math, the
            Claude action fits. I wrote a full setup walkthrough for the Anthropic
            side that pairs with this one:{" "}
            <Link
              href="/blog/claude-code-security-review-github-actions"
              className="project-link"
            >
              Claude Code Security Review GitHub Action: 2026 Setup Guide
            </Link>
            .
          </p>

          <p className="text-lg leading-relaxed">
            In practice, layering both on the same repo is more useful than picking a
            winner. Codex Security does the continuous background audit. The Claude
            action runs at PR time as an advisory commenter. Underneath them both,
            Semgrep stays as the deterministic blocking gate that costs nothing per
            scan. The point is layered coverage, not benchmark wars between vendors.
          </p>
        </section>

        {/* Section 8: Cost & gaps */}
        <section id="cost-and-gaps" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="DollarSign" size="md" />
            Cost, Limits, and What Codex Security Misses
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Independent reviews price Codex Security at roughly $0.02 per 1,000 lines
            of code scanned. A 100,000-line repo runs about $2 per full scan. Twenty
            repos averaging 50,000 lines each, scanned daily, work out to around $600
            per month per the{" "}
            <a
              href="https://agent-finder.co/reviews/codex-security"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Agent Finder review
            </a>
            . These numbers are directional. OpenAI is still iterating on pricing and
            access is gated through ChatGPT Business, Enterprise, or Edu plans, so
            your contract may look different.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            For broader cost-control patterns that apply across AI coding tools, I
            wrote a separate guide on{" "}
            <Link href="/blog/claude-code-cost-tracking" className="project-link">
              Claude Code cost tracking
            </Link>
            . The same approach works for any token-billed or LOC-billed scanner.
          </p>

          <h3 className="text-xl font-semibold mb-4">Language coverage</h3>

          <p className="text-lg leading-relaxed mb-6">
            Deepest analysis on Python, JavaScript, TypeScript, Go, and Java. Ruby,
            PHP, and Kotlin are roadmap gaps as of the March 2026 reviews I pulled
            from. If your stack lives outside the supported set, treat Codex Security
            as advisory only and lean harder on Semgrep with custom rules or CodeQL
            for that language.
          </p>

          <h3 className="text-xl font-semibold mb-4">Runtime gaps where DAST still matters</h3>

          <p className="text-lg leading-relaxed mb-6">
            Codex Security is a code-level scanner. It cannot see four categories of
            issue that only manifest at runtime, called out by{" "}
            <a
              href="https://www.stackhawk.com/blog/codex-security/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              StackHawk&apos;s analysis
            </a>
            :
          </p>

          <ul className="skill-list mb-6">
            <li>
              <strong>Deployment misconfiguration:</strong> CORS policies, debug mode
              left on in production, TLS settings, missing security headers.
            </li>
            <li>
              <strong>Broken authorization at runtime:</strong> OWASP API number one.
              Requires real authenticated requests across user identities.
            </li>
            <li>
              <strong>Business logic flaws across microservices:</strong> order
              manipulation, workflow bypass, privilege escalation chains that emerge
              from how services compose at runtime.
            </li>
            <li>
              <strong>Infrastructure-dependent issues:</strong> rate limits,
              auto-scaling behavior, secrets management at the orchestrator layer.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            For those, you still want a DAST tool running against the deployed
            application in CI: StackHawk, ZAP, Burp Suite Enterprise. The combination
            of Codex Security at code level and DAST at runtime closes more of the
            attack surface than either alone.
          </p>

          <h3 className="text-xl font-semibold mb-4">False positive flags during normal work</h3>

          <p className="text-lg leading-relaxed">
            One real friction point: multiple{" "}
            <a
              href="https://github.com/openai/codex/issues?q=is%3Aissue%20false%20positive%20cybersecurity"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub issues against openai/codex
            </a>{" "}
            report cyber-safety flags firing on ordinary development work, including
            simple version-comparison scripts, document management, and benign Kaggle
            ONNX Runtime competition code. The triage rate isn&apos;t zero. If your
            team builds tools that look adjacent to security or networking, budget
            time to clear false flags or appeal them through the{" "}
            <a
              href="https://developers.openai.com/codex/concepts/cyber-safety"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              cyber-safety review process
            </a>
            .
          </p>
        </section>

        {/* Section 9: Troubleshooting */}
        <section id="troubleshooting" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertTriangle" size="md" />
            Troubleshooting Common Failures
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Five issues show up often enough that they&apos;re worth calling out
            before you hit them.
          </p>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Clock" size="sm" />
                  Scan stuck in backfill for over 24 hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Narrow the history window to 90 days and recreate the scan. Long
                  windows on large repos can stall when commits hit the agent&apos;s
                  context limits. Once a focused backfill completes, you can clone
                  the scan and extend the window incrementally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="FileQuestion" size="sm" />
                  Findings feel generic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Edit the threat model. Generic findings are a threat-model problem,
                  not a model problem. After a substantive edit, re-run the scan and
                  the Recommended Findings list reshuffles to match the priorities you
                  documented.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="GitMerge" size="sm" />
                  PR patches conflict with project style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Add a <code>STYLEGUIDE.md</code> reference into the repo&apos;s
                  Codex environment setup so patch generation picks up your
                  conventions on the next pass. The agent reads environment context
                  before drafting fixes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="ShieldAlert" size="sm" />
                  Cyber-safety flag on benign code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Known friction, multiple GitHub reports. File against{" "}
                  <a
                    href="https://github.com/openai/codex/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    openai/codex
                  </a>{" "}
                  with a reproduction. The OpenAI team triages these and the false
                  positive rate has been trending down release over release.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon icon="Plug" size="sm" />
                  Repo not appearing in Codex Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The GitHub App needs reinstall scoped to that org or repo. Check
                  Settings, Integrations, GitHub and confirm the OpenAI app has the
                  required scopes. Re-installing usually fixes scan discovery within
                  a minute or two.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is">
              <AccordionTrigger>What is OpenAI Codex Security?</AccordionTrigger>
              <AccordionContent>
                <p>
                  OpenAI Codex Security is an AI application security agent that
                  connects to GitHub repositories, scans commits against a
                  repo-specific threat model, validates likely vulnerabilities in a
                  sandbox, and opens patches as pull requests. It lives at{" "}
                  <code>chatgpt.com/codex/security</code> and is the practitioner
                  front end of OpenAI&apos;s Daybreak cybersecurity stack.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="connect-repo">
              <AccordionTrigger>How do I connect a GitHub repo to Codex Security?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Open <code>chatgpt.com/codex/security/scans/new</code>, choose the
                  GitHub organization, repository, branch, and the matching Codex
                  environment, then pick a history window and click Create. The repo
                  must already be available in Codex Cloud with an environment set up,
                  and the GitHub App needs pull-request write and contents read scopes.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger>How much does Codex Security cost?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Independent reviews price Codex Security around two cents per 1,000
                  lines of code scanned. A 100,000-line repo runs roughly two dollars
                  per full scan, and a twenty-repo workspace with daily scans averaging
                  50,000 lines tracks near six hundred dollars per month. Access is
                  currently gated through ChatGPT Business, Enterprise, or Edu plans.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="false-positives">
              <AccordionTrigger>How does Codex Security reduce false positives?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Each candidate finding gets pushed into an isolated sandbox where the
                  agent attempts to exploit it. If the exploit fails because input
                  validation or a WAF rule catches it upstream, the finding is
                  downgraded or dropped. Coupled with the editable threat model,
                  OpenAI reports false positives down more than fifty percent and
                  noise reduction near eighty-four percent versus traditional SAST.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="languages">
              <AccordionTrigger>What languages does Codex Security support?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Independent reviews show the deepest analysis on Python, JavaScript,
                  TypeScript, Go, and Java. Ruby, PHP, and Kotlin are noted as
                  roadmap gaps as of March 2026. If your stack centers on a
                  supported language, results are strong. On unsupported languages,
                  treat Codex Security as advisory only and lean harder on Semgrep
                  or CodeQL.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vs-semgrep">
              <AccordionTrigger>Can Codex Security replace Semgrep or Snyk?</AccordionTrigger>
              <AccordionContent>
                <p>
                  No. It complements them. Codex Security excels at semantic reasoning
                  and sandbox-validated impact analysis. Semgrep remains the fast
                  deterministic gate that costs nothing per scan, and Snyk owns
                  dependency CVE coverage with the largest vulnerability database. A
                  layered pipeline with all three catches more than any single tool,
                  per the 2026 sanj.dev comparison.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vs-daybreak">
              <AccordionTrigger>How is Codex Security different from Daybreak?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Daybreak is OpenAI&apos;s broader cybersecurity initiative launched
                  May 11, 2026, bundling GPT-5.5-Cyber, a Trusted Access tier, and
                  integrations with Akamai, Cisco, Cloudflare, CrowdStrike, Fortinet,
                  Oracle, Palo Alto Networks, and Zscaler. Codex Security is the
                  practitioner-facing scanner inside Daybreak. You set up Codex
                  Security to use Daybreak capabilities on your repos.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dast-gap">
              <AccordionTrigger>What does Codex Security miss that DAST still catches?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Codex Security is code-level, so it misses runtime issues: CORS
                  misconfig, debug flags in production, TLS settings, missing security
                  headers, and broken authorization checks that only fail under real
                  authenticated traffic. OWASP API number one is at runtime. Pair
                  Codex Security with a DAST tool like StackHawk or ZAP in CI to
                  cover the gap.
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
                <CategoryIcon icon="ShieldCheck" size="md" />
                <CardTitle>Claude Code Security Review GitHub Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Anthropic counterpart. Workflow YAML, false-positive tuning,
                  token cost math, and a layered pipeline with Semgrep and Snyk.
                </p>
                <Link
                  href="/blog/claude-code-security-review-github-actions"
                  className="project-link"
                >
                  Read the guide
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldAlert" size="md" />
                <CardTitle>Harden Claude Code GitHub Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Defend Claude Code workflows against the April 2026 Comment and
                  Control CVE. Tool allowlists, OIDC via Bedrock, script caps, and
                  egress blocks.
                </p>
                <Link
                  href="/blog/hardening-ai-agents-cicd-prompt-injection"
                  className="project-link"
                >
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
