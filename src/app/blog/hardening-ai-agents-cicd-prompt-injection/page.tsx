import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Harden Claude Code GitHub Actions: Prompt Injection Defense",
  description:
    "How to harden Claude Code and AI agents in GitHub Actions against the Comment and Control prompt injection attack: allowlists, OIDC, and script caps.",
  keywords: [
    "harden claude code github actions prompt injection",
    "claude code github actions security",
    "prompt injection github actions",
    "comment and control vulnerability",
    "claude-code-action allowed tools",
    "ai agent prompt injection defense",
    "github actions ai agent least privilege",
    "anthropic claude code hardening",
    "claude code action security",
    "prompt injection ci cd",
    "github copilot agent prompt injection",
    "gemini cli prompt injection",
    "oidc claude code anthropic api key",
    "harden-runner claude code",
    "devsecops ai agents",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Harden Claude Code GitHub Actions: Prompt Injection Defense",
    description:
      "How to harden Claude Code and AI agents in GitHub Actions against the Comment and Control prompt injection attack: allowlists, OIDC, and script caps.",
    url: "https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-04-25T00:00:00.000Z",
    modifiedTime: "2026-04-25T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-hardening-ai-agents-cicd-prompt-injection.png",
        width: 1200,
        height: 630,
        alt: "Harden Claude Code GitHub Actions against prompt injection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harden Claude Code GitHub Actions: Prompt Injection Defense",
    description:
      "Defend Claude Code, Gemini CLI, and Copilot Agent in GitHub Actions against the Comment and Control CVE. Allowlists, OIDC, script caps, and a hardened workflow.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-hardening-ai-agents-cicd-prompt-injection.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection",
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

// Static JSON-LD schemas built at compile time (trusted content, same pattern
// used across every blog post on this site).
const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Harden Claude Code GitHub Actions: Prompt Injection Defense",
  description:
    "How to harden Claude Code and AI agents in GitHub Actions against the Comment and Control prompt injection attack: allowlists, OIDC, and script caps.",
  image: "https://avinashsangle.com/og-hardening-ai-agents-cicd-prompt-injection.png",
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
  datePublished: "2026-04-25",
  dateModified: "2026-04-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection",
  },
  keywords:
    "harden claude code github actions, prompt injection defense, comment and control vulnerability, ai agent least privilege, oidc claude code, claude-code-action security",
  articleSection: "DevSecOps",
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
      name: "Harden Claude Code GitHub Actions Against Prompt Injection",
      item: "https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Comment and Control prompt injection attack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comment and Control is a cross-vendor prompt injection disclosed April 15, 2026 by Aonan Guan. A crafted PR title, issue body, or hidden HTML comment steers Claude Code, Gemini CLI, and GitHub Copilot Agent into leaking secrets. Anthropic rated the Claude Code case CVSS 9.4 Critical.",
      },
    },
    {
      "@type": "Question",
      name: "Is Claude Code's GitHub Action hardened against prompt injection by default?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Anthropic's own security docs state the action is not designed to be hardened against prompt injection. Default sanitization strips HTML comments and invisible characters, but content in the diff can still steer the agent. Hardening is the implementation team's responsibility.",
      },
    },
    {
      "@type": "Question",
      name: "How do I restrict which tools Claude Code can run in CI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pass claude_args with an --allowedTools allowlist, for example 'Read,Grep,Bash(gh pr view:*)'. Allowlist only the tools the job actually needs. Blocklists like --disallowed-tools Bash(ps:*) are bypassable. A review agent should never see Bash(*) or arbitrary shell.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use OIDC instead of storing ANTHROPIC_API_KEY in GitHub secrets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Route Claude through AWS Bedrock or Google Vertex AI and authenticate GitHub Actions via OIDC with role assumption. The workflow gets short-lived credentials per run instead of a static ANTHROPIC_API_KEY. Blast radius is bounded by IAM policy, and there is no key to rotate.",
      },
    },
    {
      "@type": "Question",
      name: "Why is pull_request_target dangerous for AI code review agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "pull_request_target and issue_comment run in the base branch context with repo secrets available, even for fork PRs. A prompt injection in a fork PR title can exfiltrate ANTHROPIC_API_KEY or GITHUB_TOKEN. Use the plain pull_request trigger unless you have hardened the job with approval gates.",
      },
    },
    {
      "@type": "Question",
      name: "What does CLAUDE_CODE_SCRIPT_CAPS do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CLAUDE_CODE_SCRIPT_CAPS is an environment variable that caps how many times a scripted tool can be invoked per run. Setting CLAUDE_CODE_SCRIPT_CAPS to a JSON object like {\"edit-issue-labels.sh\": 2} stops an injected prompt from triggering runaway loops. It complements CLAUDE_CODE_SUBPROCESS_ENV_SCRUB, which is on by default since April 2026.",
      },
    },
    {
      "@type": "Question",
      name: "How do I allowlist network egress for a Claude Code workflow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add step-security/harden-runner@v2 with egress-policy set to block and an allowed-endpoints list covering api.anthropic.com:443, github.com:443, and your package registries. Default audit mode only logs connections. Block mode stops an injected shell from reaching attacker-controlled domains even if other controls fail.",
      },
    },
    {
      "@type": "Question",
      name: "Does allowed_bots '*' put my repo at risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes on public repos. The wildcard lets any external GitHub App trigger the action, which widens the attack surface. Use an explicit list such as allowed_bots: 'dependabot,renovate'. Combine with include_comments_by_actor to restrict which human accounts can trigger the agent.",
      },
    },
  ],
})

export default function HardeningAIAgentsPage() {
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

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Harden Claude Code GitHub Actions Against Prompt Injection" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">DevSecOps</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Harden Claude Code GitHub Actions: Prompt Injection Defense
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Claude Code&apos;s GitHub Action is not hardened against prompt injection by
            default. Anthropic says so in their own docs. To defend a workflow against the
            April 2026 Comment and Control CVE (CVSS 9.4), allowlist tools with
            <code> --allowedTools</code>, scope <code>GITHUB_TOKEN</code> to read-only,
            cap script invocations, filter comments by actor, and move API keys to OIDC.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> April 25, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-04-25</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Claude Code", "GitHub Actions", "Security", "Prompt Injection", "DevSecOps"].map(
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
                  <a href="#comment-and-control" className="project-link">
                    What Comment and Control Actually Exploits
                  </a>
                </li>
                <li>
                  <a href="#threat-model" className="project-link">
                    The Threat Model for AI Agents in CI/CD
                  </a>
                </li>
                <li>
                  <a href="#allowlist-tools" className="project-link">
                    Allowlist Tools, Never Blocklist
                  </a>
                </li>
                <li>
                  <a href="#github-token-scope" className="project-link">
                    Scope GITHUB_TOKEN to Read-Only
                  </a>
                </li>
                <li>
                  <a href="#oidc-secrets" className="project-link">
                    Move Secrets to OIDC via Bedrock or Vertex AI
                  </a>
                </li>
                <li>
                  <a href="#caps-and-filters" className="project-link">
                    Cap Script Invocations and Filter Triggers
                  </a>
                </li>
                <li>
                  <a href="#egress-allowlist" className="project-link">
                    Add a Network Egress Allowlist with Harden-Runner
                  </a>
                </li>
                <li>
                  <a href="#hardened-workflow" className="project-link">
                    The Before/After Hardened Workflow
                  </a>
                </li>
                <li>
                  <a href="#residual-risk" className="project-link">
                    What Hardening Still Can&apos;t Fix
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
                The April 2026 Comment and Control CVE (CVSS 9.4) leaked
                <code> ANTHROPIC_API_KEY</code>, <code>GITHUB_TOKEN</code>, and Copilot tokens
                from Claude Code, Gemini CLI, and GitHub Copilot Agent via nothing more than a
                PR title or hidden HTML comment.
              </li>
              <li>
                Anthropic&apos;s fix added <code>--disallowed-tools Bash(ps:*)</code>. Blocklists
                are whack-a-mole. Allowlist tools with <code>--allowedTools</code> instead.
              </li>
              <li>
                Scope <code>GITHUB_TOKEN</code> to read-only, move secrets to OIDC via Bedrock or
                Vertex AI, cap script invocations with <code>CLAUDE_CODE_SCRIPT_CAPS</code>, and
                filter who can trigger the agent.
              </li>
              <li>
                Layer on <code>harden-runner</code> in block mode with an egress allowlist so an
                injected shell can&apos;t phone home even if upstream controls fail.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1: Comment and Control */}
        <section id="comment-and-control" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertTriangle" size="md" />
            What Comment and Control Actually Exploits
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            On April 15, 2026, security researcher Aonan Guan (with Johns Hopkins
            collaborators) published{" "}
            <a
              href="https://oddguan.com/blog/comment-and-control-prompt-injection-credential-theft-claude-code-gemini-cli-github-copilot/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Comment and Control
            </a>
            , a cross-vendor prompt injection that hijacks three different AI coding agents
            running in GitHub Actions. One attack shape, three vendors: Anthropic Claude
            Code (rated CVSS 9.4 Critical), Google Gemini CLI, and GitHub Copilot Agent.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The attack is embarrassingly simple. For Claude Code, the researcher opened a
            PR with a title that broke the agent&apos;s prompt context and steered it into
            running <code>whoami</code> plus a base64 dump of the environment. For Gemini
            CLI, an injected <em>Trusted Content Section</em> inside an issue comment
            overrode safety instructions and exposed the API key. For Copilot Agent, a
            hidden HTML comment carrying <code>ps auxeww | base64 -w0</code> got parsed by
            the agent (invisible in GitHub&apos;s rendered view) and dumped the entire
            environment, including <code>GITHUB_TOKEN</code>,
            <code> GITHUB_COPILOT_API_TOKEN</code>, and
            <code> GITHUB_PERSONAL_ACCESS_TOKEN</code>, into a committed file.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            According to{" "}
            <a
              href="https://www.theregister.com/2026/04/15/claude_gemini_copilot_agents_hijacked/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              The Register (April 15, 2026)
            </a>
            , all three vendors patched quietly. Anthropic&apos;s fix, commit
            <code> 25e460e</code>, added <code>--disallowed-tools &apos;Bash(ps:*)&apos;</code>.
            Google and GitHub paid bug bounties of $1,337 and $500 respectively.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Here is the part most news coverage buried. Anthropic&apos;s own
            <code>{" "}claude-code-action</code>{" "}
            <a
              href="https://github.com/anthropics/claude-code-action/blob/main/docs/security.md"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              security.md
            </a>{" "}
            states plainly: <em>&quot;The action is not designed to be hardened against
            prompt injection.&quot;</em> That line is easy to miss if you copy a YAML
            snippet from a tutorial and ship it. The rest of this post is what you do
            anyway.
          </p>
        </section>

        {/* Section 2: Threat Model */}
        <section id="threat-model" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Target" size="md" />
            The Threat Model for AI Agents in CI/CD
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Before touching YAML, map the attack surface. An AI agent in GitHub Actions has
            three kinds of untrusted input and three kinds of valuable output. Any path
            from an untrusted input to an output is an exploit primitive.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Untrusted input</th>
                  <th className="py-3 pr-4 font-semibold">Default agent capability</th>
                  <th className="py-3 pr-4 font-semibold">Hardening control</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">PR title / body</td>
                  <td className="py-3 pr-4">Read + Bash + write comment</td>
                  <td className="py-3 pr-4"><code>--allowedTools</code> allowlist, actor filter</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Issue body / comment</td>
                  <td className="py-3 pr-4">Same as above</td>
                  <td className="py-3 pr-4"><code>include_comments_by_actor</code></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">File contents in diff</td>
                  <td className="py-3 pr-4">Read + Bash + Edit</td>
                  <td className="py-3 pr-4">Tool allowlist, <code>CLAUDE_CODE_SCRIPT_CAPS</code></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Hidden HTML comment</td>
                  <td className="py-3 pr-4">Parsed by the agent</td>
                  <td className="py-3 pr-4">Built-in sanitization + review raw content</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">MCP server output</td>
                  <td className="py-3 pr-4">Widens tool set at runtime</td>
                  <td className="py-3 pr-4">Audit MCP server list, pin versions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The valuable outputs are the ones the attacker wants: repository secrets
            (<code>ANTHROPIC_API_KEY</code>, third-party tokens), the
            <code> GITHUB_TOKEN</code> (which can create branches, push commits, and
            comment when scoped wide), and network egress (so the shell can exfiltrate
            whatever it grabs). Every control below targets at least one of those three.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One more framing to keep in mind. Prompt injection is not a bug you can patch
            out. As the Comment and Control author puts it, injected text is just{" "}
            <em>context the agent is designed to process</em>. Hardening means reducing
            what the agent can <em>do</em> with a hostile context, not pretending it will
            never receive one.
          </p>
        </section>

        {/* Section 3: Allowlist Tools */}
        <section id="allowlist-tools" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldCheck" size="md" />
            Allowlist Tools, Never Blocklist
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Anthropic&apos;s April fix for Comment and Control (commit <code>25e460e</code>)
            added a single line: <code>--disallowed-tools &apos;Bash(ps:*)&apos;</code>.
            That stops <code>ps auxeww</code>. It doesn&apos;t stop
            <code> cat /proc/self/environ</code>, <code>printenv</code>,
            <code> env | base64</code>, or reading <code>/etc/*release</code>. The
            researcher&apos;s own line is the right one to internalise:{" "}
            <em>&quot;Blocklisting is whack-a-mole.&quot;</em>
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Flip the default. Pass <code>claude_args</code> with an explicit tool allowlist
            scoped to the job&apos;s real work. A review agent reads and greps. A
            triage agent reads GitHub metadata. A test-runner runs one test command.
            Nothing more.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml"
            code={`# Review agent - reads code, reads PR, never writes bash
- uses: anthropics/claude-code-action@main
  with:
    anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
    claude_args: '--allowedTools "Read,Grep,Glob,Bash(gh pr view:*),Bash(gh pr diff:*)"'`}
          />

          <p className="text-lg leading-relaxed my-6">
            For agents that must edit code, scope shell execution to the specific commands
            you expect. <code>Bash(npm test:*)</code> is dramatically safer than
            <code> Bash(*)</code>. The wildcard after the colon is the glob for arguments;
            the command name in front of the colon is anchored.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml"
            code={`# PR-fix agent - scoped shell
claude_args: >
  --allowedTools "Read,Edit,Write,
    Bash(npm test:*),
    Bash(npm run lint:*),
    Bash(git add:*),Bash(git commit:*),Bash(git push:*)"`}
          />

          <p className="text-lg leading-relaxed mb-6">
            A starter set that covers six common agent roles:
          </p>

          <div className="grid gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Review agent</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <code>Read, Grep, Glob, Bash(gh pr view:*), Bash(gh pr diff:*)</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Triage / labeler</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <code>Read, Bash(gh issue view:*), Bash(gh issue edit:*)</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Test runner</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <code>Read, Bash(npm test:*), Bash(pytest:*)</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Doc writer</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <code>Read, Edit, Write, Bash(git add:*), Bash(git commit:*)</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Release notes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <code>Read, Bash(git log:*), Bash(gh release create:*)</code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">PR-fix agent</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <code>Read, Edit, Write, Bash(npm test:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*)</code>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg leading-relaxed">
            If your agent&apos;s allowlist grows past ten tools, that is a signal the job
            is doing too much. Split it.
          </p>
        </section>

        {/* Section 4: GITHUB_TOKEN */}
        <section id="github-token-scope" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Key" size="md" />
            Scope GITHUB_TOKEN to Read-Only
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The Copilot Agent leak in Comment and Control committed a base64 dump of the
            environment to the attacker&apos;s branch. <code>GITHUB_TOKEN</code> was in that
            dump with write scope, because Copilot Agent assumed the default repo
            permission set. That default is the problem.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Set the workflow-level <code>permissions</code> block to <code>read-all</code>
            by default, then elevate only the jobs that actually need to write. Per the{" "}
            <a
              href="https://docs.github.com/en/actions/reference/security/secure-use"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub secure-use reference
            </a>
            , every token scope you don&apos;t explicitly need is a token scope you&apos;ve
            handed to the attacker.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml"
            code={`name: Claude Review

# Default every job to read-only. Override only where needed.
permissions: read-all

on:
  pull_request:

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: read   # The agent reads PR metadata only
      contents: read        # No writes to the repo
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2
      - uses: anthropics/claude-code-action@main
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          claude_args: '--allowedTools "Read,Grep,Bash(gh pr view:*)"'`}
          />

          <p className="text-lg leading-relaxed my-6">
            A separate job gets write access <em>only</em> when the agent needs to comment
            or push. Even then, <code>pull-requests: write</code> is enough.
            <code> contents: write</code> and <code>pull-requests: admin</code> are almost
            never justified in an AI-driven workflow.
          </p>
        </section>

        {/* Section 5: OIDC */}
        <section id="oidc-secrets" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Lock" size="md" />
            Move Secrets to OIDC via Bedrock or Vertex AI
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Any secret that sits in GitHub Actions is a secret your agent can leak. If you
            store <code>ANTHROPIC_API_KEY</code> directly, a successful prompt injection
            reads it through <code>printenv</code> (or equivalent) and you&apos;re burning a
            rotation cycle. OIDC removes the static key entirely.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The pattern: GitHub Actions presents an OIDC token, AWS IAM (or Google Cloud)
            trusts that token for a specific repo/branch/job, and the action assumes a
            short-lived role. Claude is reached through Amazon Bedrock or Google Vertex AI,
            both of which have first-class Claude support. Per a{" "}
            <a
              href="https://eastondev.com/blog/en/posts/dev/20260418-github-actions-secrets/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              BetterLink walkthrough (April 2026)
            </a>
            , OIDC eliminates the rotation schedule entirely because credentials are minted
            per run.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml"
            code={`permissions:
  id-token: write   # Required for OIDC
  contents: read

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2

      # Assume a short-lived role via OIDC. No static AWS keys.
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/claude-code-review
          aws-region: us-east-1

      - uses: anthropics/claude-code-action@main
        with:
          use_bedrock: true
          model: anthropic.claude-sonnet-4-6
          claude_args: '--allowedTools "Read,Grep,Bash(gh pr view:*)"'`}
          />

          <p className="text-lg leading-relaxed my-6">
            The IAM role&apos;s trust policy should pin the repository and branch so no
            other workflow (or fork) can assume it. Bedrock&apos;s Claude availability lags
            Anthropic direct by a few weeks, which is the main trade-off. Vertex AI is
            similar for Google Cloud shops.
          </p>

          <p className="text-lg leading-relaxed">
            If OIDC is too much lift for a small repo, the minimum viable alternative is a
            dedicated API key with usage caps set in the{" "}
            <a
              href="https://console.anthropic.com/settings/keys"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Anthropic Console
            </a>
            . A compromised workflow still burns the cap, not your whole org&apos;s spend.
          </p>
        </section>

        {/* Section 6: Caps and Filters */}
        <section id="caps-and-filters" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Filter" size="md" />
            Cap Script Invocations and Filter Triggers
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Two defenses that most tutorials skip. Both are short YAML changes with large
            blast-radius reductions.
          </p>

          <h3 className="text-xl font-semibold mb-4">CLAUDE_CODE_SCRIPT_CAPS</h3>

          <p className="text-lg leading-relaxed mb-6">
            An injected prompt loves loops. <em>&quot;Run this script ten times,&quot;</em>
            <em> &quot;keep labeling until you get through every issue.&quot;</em> The{" "}
            <code>CLAUDE_CODE_SCRIPT_CAPS</code> environment variable caps how many times
            any scripted tool can be invoked per run. Set it for every script the agent can
            trigger.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml"
            code={`env:
  # Default-on since April 2026. Verify older workflows.
  CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: 1

  # Hard stop on runaway tool calls.
  CLAUDE_CODE_SCRIPT_CAPS: '{"edit-issue-labels.sh": 2, "dangerous-script.sh": 1}'`}
          />

          <p className="text-lg leading-relaxed my-6">
            <code>CLAUDE_CODE_SUBPROCESS_ENV_SCRUB</code> has been default-on since the
            April release. Don&apos;t unset it. A separate landmine: setting{" "}
            <code>ACTIONS_STEP_DEBUG: true</code> (often done for debugging) auto-enables{" "}
            <code>show_full_output</code>, which prints full tool outputs including
            secrets. Audit your repo secrets and variables for this flag before you ship.
          </p>

          <h3 className="text-xl font-semibold mb-4">Filter who can trigger the agent</h3>

          <p className="text-lg leading-relaxed mb-6">
            Content filters fight yesterday&apos;s attack. Actor filters don&apos;t.
            <code> include_comments_by_actor</code> takes a list of trusted usernames.
            <code> exclude_comments_by_actor</code> blocks specific bots. Both are enforced
            before Claude ever reads the comment body.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml"
            code={`- uses: anthropics/claude-code-action@main
  with:
    # Only maintainers can trigger the agent via comment.
    include_comments_by_actor: 'avisangle,core-maintainer-2'

    # Bot PRs are fine but don't auto-invoke the agent.
    exclude_comments_by_actor: 'dependabot[bot],renovate[bot]'

    # Explicit bot allowlist beats wildcards.
    # NEVER use allowed_bots: '*' on a public repo.
    allowed_bots: 'dependabot,renovate'`}
          />

          <p className="text-lg leading-relaxed my-6">
            One more rule: avoid <code>pull_request_target</code> and
            <code> issue_comment</code> triggers unless you have approval gates in front of
            them. Both run in the base branch context with repo secrets available, which is
            exactly what a hostile fork PR needs. Plain <code>pull_request</code> runs in
            the fork&apos;s context with <code>GITHUB_TOKEN</code> downgraded to read-only
            by default.
          </p>
        </section>

        {/* Section 7: Egress Allowlist */}
        <section id="egress-allowlist" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Network" size="md" />
            Add a Network Egress Allowlist with Harden-Runner
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Every control so far reduces what the agent can do. This one reduces where the
            agent can phone home even if everything else fails.{" "}
            <a
              href="https://github.com/step-security/harden-runner"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Step Security&apos;s harden-runner
            </a>
            {" "}monitors and blocks outbound traffic from the GitHub runner.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Most tutorials show it in <code>audit</code> mode, which only logs.
            That&apos;s useful for discovery, but it doesn&apos;t stop exfiltration.{" "}
            <a
              href="https://www.stepsecurity.io/blog/anthropics-claude-code-action-security-how-to-secure-claude-code-in-github-actions-with-harden-runner"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              StepSecurity&apos;s own guide
            </a>{" "}
            admits the default config leaves Claude Code with unrestricted network access
            to <code>api.anthropic.com</code>, <code>registry.npmjs.org</code>,
            <code> github.com</code>, and <code>pypi.org</code>. Switch to block mode and
            pin the exact endpoints you expect.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml"
            code={`- uses: step-security/harden-runner@v2
  with:
    egress-policy: block
    allowed-endpoints: >
      api.anthropic.com:443
      github.com:443
      objects.githubusercontent.com:443
      registry.npmjs.org:443
      pypi.org:443
      files.pythonhosted.org:443

- uses: actions/checkout@v4
  with:
    fetch-depth: 2

- uses: anthropics/claude-code-action@main
  with:
    anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}`}
          />

          <p className="text-lg leading-relaxed my-6">
            The audit-first workflow is: run harden-runner in <code>audit</code> mode for a
            week, collect the domains Claude actually hits (check the Step Security
            insights tab), then lock the list and flip to <code>block</code>. If an
            injection ever escapes the tool allowlist, it still can&apos;t POST to
            <code> attacker.com</code>.
          </p>

          <p className="text-lg leading-relaxed">
            One gotcha: if you use Bedrock, swap <code>api.anthropic.com:443</code> for the
            Bedrock endpoint (for example,
            <code> bedrock-runtime.us-east-1.amazonaws.com:443</code>). Vertex AI uses{" "}
            <code>*.googleapis.com:443</code>. Narrow the list based on which path you
            chose in the OIDC section.
          </p>
        </section>

        {/* Section 8: Before / After Workflow */}
        <section id="hardened-workflow" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            The Before/After Hardened Workflow
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Here is the default workflow most tutorials publish. It will run. It is also
            the shape that Comment and Control hit.
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml (before)"
            code={`name: Claude

on:
  issue_comment:
    types: [created]
  pull_request:
    types: [opened, synchronize]

jobs:
  claude:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anthropics/claude-code-action@main
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}`}
          />

          <p className="text-lg leading-relaxed my-6">
            And the hardened version with every control from this article applied:
          </p>

          <CodeBlock
            language="yaml"
            filename=".github/workflows/claude.yml (after)"
            code={`name: Claude

# Read-only by default. Elevate per job.
permissions: read-all

on:
  pull_request:        # Avoid pull_request_target; fork context runs read-only
  issues:
    types: [opened]    # No issue_comment; it runs in base context

env:
  # Default-on, but be explicit.
  CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: 1
  # Hard stop on runaway tool loops.
  CLAUDE_CODE_SCRIPT_CAPS: '{"edit-issue-labels.sh": 2}'

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write   # Write only to post the review comment
      contents: read
      id-token: write        # For OIDC to AWS Bedrock

    steps:
      # 1. Block network egress to anything not on the allowlist.
      - uses: step-security/harden-runner@v2
        with:
          egress-policy: block
          allowed-endpoints: >
            bedrock-runtime.us-east-1.amazonaws.com:443
            github.com:443
            objects.githubusercontent.com:443
            registry.npmjs.org:443

      # 2. Checkout with enough history for the diff, nothing more.
      - uses: actions/checkout@v4
        with:
          ref: \${{ github.event.pull_request.head.sha || github.sha }}
          fetch-depth: 2

      # 3. OIDC to Bedrock. No static ANTHROPIC_API_KEY in secrets.
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::123456789012:role/claude-code-review
          aws-region: us-east-1

      # 4. Allowlisted tools, explicit bot list, signed commits.
      - uses: anthropics/claude-code-action@main
        with:
          use_bedrock: true
          model: anthropic.claude-sonnet-4-6
          use_commit_signing: true
          allowed_bots: 'dependabot,renovate'
          include_comments_by_actor: 'avisangle'
          claude_args: >
            --allowedTools "Read,Grep,Glob,
              Bash(gh pr view:*),
              Bash(gh pr diff:*)"`}
          />

          <p className="text-lg leading-relaxed my-6">
            Each change maps to an attack primitive. <code>permissions: read-all</code>
            {" "}neutralises the Copilot-style <code>GITHUB_TOKEN</code> exfiltration.
            <code> egress-policy: block</code> stops the shell from POSTing anywhere.
            OIDC removes the static key. <code>--allowedTools</code> narrows what an
            injected prompt can make the agent do. <code>CLAUDE_CODE_SCRIPT_CAPS</code>
            {" "}kills loops. <code>include_comments_by_actor</code> blocks the crafted
            PR-title vector from unknown accounts. <code>use_commit_signing: true</code>
            {" "}gives you a forensic trail if anything slips through.
          </p>

          <p className="text-lg leading-relaxed">
            The before/after diff is 35 lines. That is the cost of hardening a workflow.
            Compared to rotating an exfiltrated <code>ANTHROPIC_API_KEY</code> and auditing
            every downstream service it touches, it is a bargain.
          </p>
        </section>

        {/* Section 9: Residual risk */}
        <section id="residual-risk" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertCircle" size="md" />
            What Hardening Still Can&apos;t Fix
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Honesty section. Even a fully hardened workflow has residual risk. Prompt
            injection at its core is <em>context the agent is designed to process</em>,
            and no amount of YAML changes that.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Three residual risks to plan for. First, file contents in the diff can still
            steer the agent. Your allowlist stops <em>most</em> exfiltration paths, but a
            clever prompt could still coax the agent into producing a review comment that
            tells you a real vulnerability is benign. Keep humans in the loop for merge
            decisions.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Second, MCP servers added at runtime widen the blast radius. If your CLAUDE.md
            or workflow pulls in an MCP server from a tutorial, audit the server&apos;s
            source and pin the version. The Register reported in April 2026 that{" "}
            <a
              href="https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              up to 200,000 MCP servers
            </a>{" "}
            were at risk from a design flaw around the same time as Comment and Control.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Third, model behaviour drifts. A Sonnet 4.6 agent and a Sonnet 4.7 agent are
            not the same system. Test your workflow&apos;s safety posture whenever you bump
            the model. An allowlist you can trust on one model version is a starting point,
            not a finish line, on the next.
          </p>

          <p className="text-lg leading-relaxed">
            The practical ceiling on AI-in-CI safety is a human approval gate before the
            agent writes code, merges a PR, or touches a secrets-bearing job. Anthropic
            ships the required-approval-for-external-contributors switch for exactly this
            reason. If you want more, see the companion{" "}
            <Link
              href="/blog/claude-code-security-review-github-actions"
              className="project-link"
            >
              Claude Code Security Review setup guide
            </Link>
            {" "}for the install-side of this same story, or the{" "}
            <Link href="/blog/claude-md-guide" className="project-link">
              CLAUDE.md guide
            </Link>
            {" "}for how to threat-model the other prompt surface in your repo.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-comment-and-control">
              <AccordionTrigger>
                What is the Comment and Control prompt injection attack?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Comment and Control is a cross-vendor prompt injection disclosed April 15,
                  2026 by Aonan Guan. A crafted PR title, issue body, or hidden HTML comment
                  steers Claude Code, Gemini CLI, and GitHub Copilot Agent into leaking
                  secrets. Anthropic rated the Claude Code case CVSS 9.4 Critical.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hardened-by-default">
              <AccordionTrigger>
                Is Claude Code&apos;s GitHub Action hardened against prompt injection by default?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No. Anthropic&apos;s own security docs state the action is not designed to
                  be hardened against prompt injection. Default sanitization strips HTML
                  comments and invisible characters, but content in the diff can still steer
                  the agent. Hardening is the implementation team&apos;s responsibility.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="restrict-tools">
              <AccordionTrigger>
                How do I restrict which tools Claude Code can run in CI?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Pass <code>claude_args</code> with an <code>--allowedTools</code>
                  {" "}allowlist, for example{" "}
                  <code>&apos;Read,Grep,Bash(gh pr view:*)&apos;</code>. Allowlist only the
                  tools the job actually needs. Blocklists like{" "}
                  <code>--disallowed-tools Bash(ps:*)</code> are bypassable. A review
                  agent should never see <code>Bash(*)</code> or arbitrary shell.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="oidc">
              <AccordionTrigger>
                Can I use OIDC instead of storing ANTHROPIC_API_KEY in GitHub secrets?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Route Claude through AWS Bedrock or Google Vertex AI and authenticate
                  GitHub Actions via OIDC with role assumption. The workflow gets
                  short-lived credentials per run instead of a static{" "}
                  <code>ANTHROPIC_API_KEY</code>. Blast radius is bounded by IAM policy,
                  and there is no key to rotate.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pull-request-target">
              <AccordionTrigger>
                Why is pull_request_target dangerous for AI code review agents?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  <code>pull_request_target</code> and <code>issue_comment</code> run in
                  the base branch context with repo secrets available, even for fork PRs. A
                  prompt injection in a fork PR title can exfiltrate{" "}
                  <code>ANTHROPIC_API_KEY</code> or <code>GITHUB_TOKEN</code>. Use the
                  plain <code>pull_request</code> trigger unless you have hardened the job
                  with approval gates.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="script-caps">
              <AccordionTrigger>What does CLAUDE_CODE_SCRIPT_CAPS do?</AccordionTrigger>
              <AccordionContent>
                <p>
                  <code>CLAUDE_CODE_SCRIPT_CAPS</code> is an environment variable that caps
                  how many times a scripted tool can be invoked per run. Setting it to a
                  JSON object like <code>{`{"edit-issue-labels.sh": 2}`}</code> stops an
                  injected prompt from triggering runaway loops. It complements{" "}
                  <code>CLAUDE_CODE_SUBPROCESS_ENV_SCRUB</code>, which is on by default
                  since April 2026.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="egress-allowlist">
              <AccordionTrigger>
                How do I allowlist network egress for a Claude Code workflow?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Add <code>step-security/harden-runner@v2</code> with{" "}
                  <code>egress-policy</code> set to <code>block</code> and an{" "}
                  <code>allowed-endpoints</code> list covering{" "}
                  <code>api.anthropic.com:443</code>, <code>github.com:443</code>, and
                  your package registries. Default audit mode only logs connections. Block
                  mode stops an injected shell from reaching attacker-controlled domains
                  even if other controls fail.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="allowed-bots">
              <AccordionTrigger>
                Does allowed_bots &apos;*&apos; put my repo at risk?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes on public repos. The wildcard lets any external GitHub App trigger
                  the action, which widens the attack surface. Use an explicit list such
                  as <code>allowed_bots: &apos;dependabot,renovate&apos;</code>. Combine
                  with <code>include_comments_by_actor</code> to restrict which human
                  accounts can trigger the agent.
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
                <CardTitle>Claude Code Security Review GitHub Action: Setup Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The install-side companion to this hardening post. Workflow YAML, token
                  cost math, false-positive filtering, and the layered pipeline with
                  Semgrep and Snyk.
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
                <CategoryIcon icon="FileText" size="md" />
                <CardTitle>How I Write CLAUDE.md Files That Actually Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  CLAUDE.md is the other prompt surface in your repo. Learn how to write
                  one that scopes the agent, avoids secret leakage, and plays well with
                  allowlisted tool sets.
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
