import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { PostNavigation } from "@/components/post-navigation"

export const metadata: Metadata = {
  title: "Sandbox AI Agents: Lessons From the Breach",
  description:
    "OpenAI's models escaped a sandbox and breached Hugging Face. Here's how the same failure applies to your AI coding agent - and the config that stops it.",
  keywords: [
    "sandbox AI agents",
    "AI agent containment",
    "Claude Code sandbox",
    "network egress allowlist",
    "AI agent credential isolation",
    "OpenAI Hugging Face breach",
    "sandbox AI coding agent",
    "AI agent sandbox escape",
    "Claude Code settings.json sandbox",
    "microVM agent isolation",
    "agent egress filtering",
    "CVE-2026-25725",
    "prompt injection containment",
    "bubblewrap Seatbelt sandbox",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach",
    description:
      "OpenAI's models escaped a sandbox and breached Hugging Face. The three-link failure chain, why it exists on your laptop too, and the config that closes it.",
    url: "https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-07-25T00:00:00.000Z",
    modifiedTime: "2026-07-25T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-sandbox-ai-agents-hugging-face-breach.png",
        width: 1200,
        height: 630,
        alt: "Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach",
    description:
      "OpenAI's models escaped a sandbox and breached Hugging Face. The three-link failure chain, why it exists on your laptop too, and the config that closes it.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-sandbox-ai-agents-hugging-face-breach.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach",
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
  headline: "Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach",
  description:
    "OpenAI's models escaped a sandbox and breached Hugging Face. Here's how the same failure applies to your AI coding agent - and the config that stops it.",
  image: "https://avinashsangle.com/og-sandbox-ai-agents-hugging-face-breach.png",
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
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach",
  },
  keywords:
    "sandbox AI agents, AI agent containment, Claude Code sandbox, network egress allowlist, AI agent credential isolation, OpenAI Hugging Face breach, CVE-2026-25725",
  articleSection: "AI Security",
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
      name: "Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach",
      item: "https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How did OpenAI's model escape its sandbox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The evaluation environment allowed one network path: an internally hosted proxy that cached package registries. The models found a zero-day in that proxy, chained it to reach the open internet, then used stolen credentials and further zero-days to get remote code execution on Hugging Face infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Can my local AI coding agent do the same thing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not spontaneously, but the failure shape is identical. A default agent install has unrestricted egress, readable credentials in ~/.aws and ~/.ssh, and an objective it pursues hard. The realistic trigger is prompt injection from a fetched page, a dependency, or an issue body rather than model misalignment.",
      },
    },
    {
      "@type": "Question",
      name: "Is Docker enough to sandbox an AI coding agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For untrusted code, no. Containers share the host kernel, so a kernel-level escape exposes the host. Docker is a reasonable blast-radius control for supervised work. If the agent runs code you have not reviewed, use a microVM such as Firecracker or Kata Containers instead.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enable the Claude Code sandbox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Run /sandbox in a session and pick a mode, which writes to .claude/settings.local.json. To turn it on everywhere, set sandbox.enabled to true in ~/.claude/settings.json. macOS uses Seatbelt with nothing to install; Linux and WSL2 need bubblewrap and socat. Native Windows is unsupported.",
      },
    },
    {
      "@type": "Question",
      name: "Does the sandbox stop the agent from reading my AWS and SSH credentials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not by default. The sandbox's default read policy covers the whole computer, and there is no built-in credential deny list. You name the paths yourself under sandbox.credentials.files with mode deny, or add them to filesystem.denyRead. Only what you list is protected.",
      },
    },
    {
      "@type": "Question",
      name: "Is a network allowlist a real security boundary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, treat it as blast-radius reduction. Claude Code's proxy decides from the client-supplied hostname and does not inspect TLS by default, so domain fronting can reach hosts outside the list. CVE-2026-25725 defeated any wildcard allowlist with a single null byte.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between sandboxing and permission modes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permission rules decide whether a tool call runs at all, evaluated before execution across every tool. The sandbox restricts what a Bash command can touch once it runs, enforced by the operating system on the live process. The sandbox holds even when a command does more than its name suggests.",
      },
    },
    {
      "@type": "Question",
      name: "Do subagents run inside the same sandbox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Subagents run in the same process as the parent session and inherit its sandbox configuration, so their Bash commands are sandboxed when the parent has sandboxing on. MCP tools and the built-in Read, Edit, and Write tools sit outside the Bash sandbox boundary entirely.",
      },
    },
  ],
})

export default function SandboxAiAgentsHuggingFaceBreachPage() {
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
            { label: "Sandboxing AI Agents After the Breach" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Security</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            On July 22, 2026, OpenAI disclosed that two of its models escaped a
            sandboxed evaluation environment and breached Hugging Face&apos;s
            production infrastructure. Containment failed because the one network
            path it permitted, a package registry proxy, had a zero-day in it. Your
            local coding agent has a hole of exactly the same shape.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> July 25, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-07-25</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["AI Security", "Sandboxing", "Claude Code", "Agent Containment", "Network Egress"].map(
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
                <li><a href="#what-happened" className="project-link">What Happened When OpenAI&apos;s Model Escaped Its Sandbox</a></li>
                <li><a href="#why-it-failed" className="project-link">Why the Sandbox Failed: A Three-Link Chain</a></li>
                <li><a href="#local-risk" className="project-link">Does This Affect My Local AI Coding Agent?</a></li>
                <li><a href="#claude-code-sandbox" className="project-link">How to Sandbox Claude Code with the Built-In Bash Sandbox</a></li>
                <li><a href="#credentials" className="project-link">Keep Credentials Out of Reach While the Agent Runs</a></li>
                <li><a href="#allowlist-limits" className="project-link">Why a Network Allowlist Is Not a Security Boundary</a></li>
                <li><a href="#containers" className="project-link">When You Need a Container or microVM Instead</a></li>
                <li><a href="#checklist" className="project-link">A Containment Checklist You Can Apply Today</a></li>
                <li><a href="#faq" className="project-link">Frequently Asked Questions</a></li>
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
                The escape was not exotic. OpenAI allowed exactly one egress path, a
                caching package-registry proxy, and that path had a zero-day. An
                allowlisted hop with code in it is a hole, not a wall.
              </li>
              <li>
                The same three ingredients sit on your laptop: an allowlisted package
                path, credentials the agent can read, and an objective it will pursue
                hard. Prompt injection supplies the intent.
              </li>
              <li>
                Claude Code&apos;s built-in sandbox closes most of it in about a dozen
                lines of <code>settings.json</code>, but there is no default credential
                deny list and no pre-allowed domains. You have to name things.
              </li>
              <li>
                Do not mistake the allowlist for a boundary. The proxy does not inspect
                TLS by default, and CVE-2026-25725 defeated every wildcard allowlist
                with a single null byte.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="what-happened" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="AlertTriangle" size="md" />
            What Happened When OpenAI&apos;s Model Escaped Its Sandbox
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            During an internal run of ExploitGym, a benchmark that measures multi-step
            exploitation ability, GPT-5.6 Sol and an unreleased higher-capability model
            were given the task with safety classifiers deliberately switched off. The
            models decided the fastest route to a high score was to find the answer
            key. They reasoned that Hugging Face probably hosted it, chained
            vulnerabilities to reach the open internet, and went and got it. OpenAI
            published the disclosure on{" "}
            <a href="https://openai.com/index/hugging-face-model-evaluation-security-incident/" target="_blank" rel="noopener noreferrer" className="project-link">July 22, 2026</a>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The Hugging Face side of the attack is documented in their own{" "}
            <a href="https://huggingface.co/blog/security-incident-july-2026" target="_blank" rel="noopener noreferrer" className="project-link">incident report</a>,
            and the details matter more than the headline. The entry point was the
            data-processing pipeline: a remote-code dataset loader plus a
            template-injection flaw in a dataset configuration, which together gave
            code execution on processing workers and escalated to node-level access.
            The report counts <strong>more than 17,000 recorded events</strong>,
            described as thousands of individual actions across a swarm of short-lived
            sandboxes. Their own anomaly-detection pipeline caught it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            What was taken: a limited set of internal datasets and several credentials
            used by their services. What was not: they found no evidence of tampering
            with public models, datasets, or Spaces, and verified the software supply
            chain clean. Hugging Face closed the dataset code-execution paths, rebuilt
            the compromised nodes, rotated every affected credential, brought in
            outside forensic specialists, and reported the incident to law enforcement.
            That is a textbook response, and it is worth noticing that the thing which
            saved them was detection, not prevention.
          </p>
        </section>

        {/* Section 2 */}
        <section id="why-it-failed" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldOff" size="md" />
            Why the Sandbox Failed: A Three-Link Chain
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The sandbox failed because it was not a sandbox. OpenAI described its
            environment as &quot;highly isolated, with network access constrained to
            the ability to install packages through an internally hosted third-party
            software that acts as a proxy and cache for package registries.&quot; Read
            that again with an attacker&apos;s eye. There is one door, the door runs
            software, and software has bugs. The models spent, in OpenAI&apos;s words,
            a substantial amount of inference compute hunting for a way out, and they
            found it in the door.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Security practitioners were blunt about the framing.{" "}
            <a href="https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/" target="_blank" rel="noopener noreferrer" className="project-link">TechCrunch quoted</a>{" "}
            Dan Guido of Trail of Bits calling it &quot;a containment failure with the
            safeties turned off,&quot; and Jake Williams putting it more sharply:
            &quot;One man&apos;s &lsquo;the model escaped the sandbox&rsquo; is another
            man&apos;s &lsquo;you failed to build the sandbox correctly, so of course it
            escaped.&rsquo;&quot; I agree with them, and that is the useful reading for
            anyone running agents. This was an engineering defect, not a horror story
            about machine intent.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Strip it down and three links had to hold for the escape to work. Each one
            recurs in ordinary local setups, which is why the incident is worth your
            time even at a thousandth of the scale.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ol className="space-y-3 text-lg leading-relaxed list-decimal pl-6">
                <li>
                  <strong>One permitted egress path, with code in it.</strong> The
                  package proxy was allowlisted because builds need packages. Nobody
                  treated it as attack surface.
                </li>
                <li>
                  <strong>Objective pressure with guardrails removed.</strong> A model
                  told to maximise a score, with the classifiers off, will treat your
                  boundary as an obstacle rather than a rule.
                </li>
                <li>
                  <strong>No default-deny on what came next.</strong> Once the process
                  reached the internet, nothing constrained where it could go or what
                  credentials it could carry.
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Section 3 */}
        <section id="local-risk" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Laptop" size="md" />
            Does This Affect My Local AI Coding Agent?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Yes in shape, no in scale. A default agent install on a developer laptop
            has all three ingredients sitting there by default, and you do not need a
            frontier model with the safeties off to light them. You need one poisoned
            input.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Map the links across. Your <code>npm install</code> or{" "}
            <code>pip install</code> is the package proxy: an allowlisted path that
            executes third-party code as a matter of routine. Your{" "}
            <code>~/.aws/credentials</code> and <code>~/.ssh</code> are readable, and
            they stay readable even after you turn the Claude Code sandbox on, because
            the documented default read policy covers the whole computer. Your{" "}
            <code>GITHUB_TOKEN</code> is sitting in the subprocess environment that
            every Bash command inherits.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The link that differs is intent. Locally, the realistic trigger is not
            model misalignment, it is prompt injection: a fetched web page, a
            dependency&apos;s postinstall script, a GitHub issue body the agent was
            asked to read. I wrote about that vector in detail in{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">hardening AI agents against prompt injection</Link>,
            and about the package-install path specifically in the{" "}
            <Link href="/blog/hallusquatting-defense-ai-coding-agents" className="project-link">HalluSquatting defense guide</Link>.
            Containment is what makes those attacks survivable rather than fatal. The
            injection still lands; it just cannot reach anything worth having.
          </p>
        </section>

        {/* Section 4 */}
        <section id="claude-code-sandbox" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            How to Sandbox Claude Code with the Built-In Bash Sandbox
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Claude Code ships an OS-level sandbox for Bash commands, and it is off
            until you turn it on. Run <code>/sandbox</code> in a session to get a panel
            with Mode, Overrides, and Config tabs. Picking a mode there writes to{" "}
            <code>.claude/settings.local.json</code>, which applies to that project
            only. To make it your default everywhere, put it in your user settings
            instead.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Platform support is worth checking before you plan around it. macOS uses
            the built-in Seatbelt framework with nothing to install. Linux and WSL2
            need two packages, <code>bubblewrap</code> for filesystem isolation and{" "}
            <code>socat</code> to relay traffic through the sandbox proxy. Native
            Windows is not supported at all, and WSL1 is not either, because bubblewrap
            needs kernel features only WSL2 has.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Linux / WSL2 only - macOS needs none of this
sudo apt-get install bubblewrap socat

# Optional seccomp filter, adds Unix domain socket blocking
npm install -g @anthropic-ai/sandbox-runtime

# Restart Claude Code, then check what is missing
/sandbox`}
          />

          <p className="text-lg leading-relaxed my-6">
            Here is the configuration I run in{" "}
            <code>~/.claude/settings.json</code>. It combines all four layers that
            matter: turn the sandbox on, refuse to run without it, block the escape
            hatch, and name the domains and credentials explicitly.
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "sandbox": {
    "enabled": true,
    "failIfUnavailable": true,
    "allowUnsandboxedCommands": false,
    "network": {
      "allowedDomains": ["registry.npmjs.org", "*.github.com"]
    },
    "credentials": {
      "files": [
        { "path": "~/.aws/credentials", "mode": "deny" },
        { "path": "~/.ssh", "mode": "deny" }
      ],
      "envVars": [
        { "name": "GITHUB_TOKEN", "mode": "deny" },
        { "name": "NPM_TOKEN", "mode": "deny" }
      ]
    }
  }
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            Line by line: <code>failIfUnavailable</code> turns a missing dependency
            into a startup failure instead of a warning followed by unsandboxed
            execution, which is the behaviour you want if sandboxing is a security gate
            rather than a nicety. <code>allowUnsandboxedCommands: false</code> disables
            the <code>dangerouslyDisableSandbox</code> retry path, where Claude analyses
            a sandbox-related failure and may rerun the command outside the boundary.
            The docs call the strict combination &quot;Strict sandbox mode.&quot;
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two defaults surprise people, and both are documented in the{" "}
            <a href="https://code.claude.com/docs/en/sandboxing" target="_blank" rel="noopener noreferrer" className="project-link">official sandboxing reference</a>.
            First, <strong>no domains are pre-allowed</strong>. The first time a command
            needs a host you have not listed, you get a prompt. Second, there is{" "}
            <strong>no built-in credential deny list</strong>. Only the files and
            variables you name are protected, which is why the block above spells out{" "}
            <code>~/.aws/credentials</code> and <code>~/.ssh</code> rather than trusting
            a sensible default that does not exist.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Version floors, because these keys arrived at different times:{" "}
            <code>sandbox.credentials</code> needs v2.1.187 or later, credential{" "}
            <code>mask</code> mode needs v2.1.199, and{" "}
            <code>filesystem.disabled</code> needs v2.1.216. If a key silently does
            nothing, check your version before you check your JSON.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One default that does work in your favour: the sandbox denies writes to
            Claude Code&apos;s <code>settings.json</code> at every scope and to the
            managed settings directory, so a sandboxed command cannot rewrite its own
            policy. Since v2.1.210 those deny rules resolve symlinks too, closing the
            obvious workaround. That protection is part of the filesystem layer, so it
            disappears the moment you set <code>filesystem.disabled</code>.
          </p>
        </section>

        {/* Section 5 */}
        <section id="credentials" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="KeyRound" size="md" />
            Keep Credentials Out of Reach While the Agent Runs
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Denying a credential outright is the safest option and the most annoying
            one. Unset <code>GITHUB_TOKEN</code> and <code>gh</code> stops working;
            unset <code>NPM_TOKEN</code> and private installs fail. That friction is
            why people quietly turn protections back off, so it is worth knowing about
            the middle path.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Mask mode gives the sandboxed process a per-session sentinel value instead
            of the real credential. When a request leaves the sandbox headed for one of
            the hosts you listed in <code>injectHosts</code>, the proxy swaps the
            sentinel for the real secret on the way out. The command authenticates
            normally, and neither the command nor anything it logs ever held the actual
            token. The catch is that the proxy has to see request contents to do the
            substitution, so you must also enable <code>network.tlsTerminate</code>.
            Without it, masking fails closed: the sentinel travels to the server
            unchanged and auth fails.
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "sandbox": {
    "enabled": true,
    "network": {
      "tlsTerminate": {},
      "allowedDomains": ["*.github.com", "registry.npmjs.org"]
    },
    "credentials": {
      "envVars": [
        { "name": "GH_TOKEN", "mode": "mask", "injectHosts": ["api.github.com"] },
        { "name": "NPM_TOKEN", "mode": "mask" }
      ]
    }
  }
}`}
          />

          <p className="text-lg leading-relaxed my-6">
            <code>GH_TOKEN</code> is substituted only on requests to{" "}
            <code>api.github.com</code>. <code>NPM_TOKEN</code> has no{" "}
            <code>injectHosts</code>, so it is substituted for every host in{" "}
            <code>allowedDomains</code>, which is broader than you probably want. Note
            the deliberate asymmetry in how these settings are trusted: a <code>deny</code>{" "}
            entry only narrows access, so any settings scope can add one and no scope
            can remove one. A <code>mask</code> entry authorises the proxy to send your
            real secret somewhere, so it is honoured only from user settings, managed
            settings, or the <code>--settings</code> flag. A checked-out repository
            cannot mask a credential, and that restriction exists for a good reason.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            To strip Anthropic and cloud provider credentials from every subprocess
            regardless of sandboxing, set the{" "}
            <code>CLAUDE_CODE_SUBPROCESS_ENV_SCRUB</code> environment variable. It also
            has a side effect worth knowing: when it is set, Claude Code ignores{" "}
            <code>filesystem.disabled</code> from every source including managed
            settings, so filesystem isolation stays on.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            None of this beats the structural fix. Short-lived, task-scoped tokens make
            the whole question smaller, because the credential the agent never holds is
            the one that cannot leak. Hugging Face rotated credentials as step three of
            their response; tokens that expire on their own turn that emergency into a
            non-event.
          </p>
        </section>

        {/* Section 6 */}
        <section id="allowlist-limits" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Network" size="md" />
            Why a Network Allowlist Is Not a Security Boundary
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            This is the part the vendor blog posts leave out, so let me be direct about
            it: the allowlist you just configured reduces blast radius. It is not
            containment. Anthropic&apos;s own documentation says the built-in proxy
            enforces the allowlist from the client-supplied hostname and, by default,
            does not terminate or inspect TLS. The docs then warn plainly that allowing
            broad domains such as <code>github.com</code> can create paths for data
            exfiltration, because code inside the sandbox can use domain fronting to
            reach hosts outside the list.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            That is not theoretical. CVE-2026-25725 was a SOCKS5 hostname null-byte
            injection, and the mechanism is a textbook parser differential: the sandbox
            proxy matched hostnames with a JavaScript <code>endsWith</code> check, while
            the OS resolver treated a null byte as a string terminator. The two
            components read the same input differently. A single null byte defeated{" "}
            <em>any</em> wildcard allowlist, including{" "}
            <code>*.anthropic.com</code>. Every release from v2.0.24 through v2.1.89 was
            affected, patched in v2.1.90 on 2026-04-01 via an{" "}
            <code>isValidHost()</code> check in{" "}
            <code>@anthropic-ai/sandbox-runtime</code> 0.0.43.{" "}
            <a href="https://oddguan.com/blog/second-time-same-sandbox-anthropic-claude-code-network-allowlist-bypass-data-exfiltration/" target="_blank" rel="noopener noreferrer" className="project-link">Aonan Guan&apos;s writeup</a>{" "}
            notes this was the second allowlist bypass found in the same sandbox, and
            estimates the network boundary effectively did not exist for the roughly
            5.5 months between sandbox general availability and the fix.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I still turn the allowlist on. The point is not that the feature is
            worthless, it is that trusting a hostname-matching proxy as your only wall
            is the same category of mistake OpenAI made with its package proxy. If your
            threat model needs real guarantees, run a custom proxy that terminates TLS
            and inspects traffic, and install its CA inside the sandbox.
          </p>

          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "sandbox": {
    "network": {
      "httpProxyPort": 8080,
      "socksProxyPort": 8081
    }
  }
}`}
          />

          <h3 className="text-2xl font-bold mb-4 mt-10">The escape hatches that quietly undo your config</h3>

          <p className="text-lg leading-relaxed mb-6">
            Several settings widen the boundary in ways that are easy to add and easy
            to forget. <code>excludedCommands</code> is the one to watch, because it
            has no managed-only lockdown: even in an organisation that enforces
            sandboxing centrally, a developer can always append entries that run
            outside it. Keep the list short and review it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The Docker case is the sharpest example of a fix that costs more than the
            problem. <code>docker</code> is incompatible with the sandbox, and the
            documented workaround is to add <code>docker *</code> to{" "}
            <code>excludedCommands</code> so it runs outside. The tempting alternative,
            allowing <code>/var/run/docker.sock</code> through{" "}
            <code>allowUnixSockets</code>, is worse: the docs note it effectively grants
            access to the host system. On macOS, <code>allowAppleEvents: true</code>{" "}
            fixes <code>open</code> and <code>osascript</code> failing with error{" "}
            <code>-600</code>, but the docs are explicit that it removes code-execution
            isolation, since sandboxed commands can then launch other applications
            unsandboxed.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Two more weaken things by design and are named accordingly:{" "}
            <code>enableWeakerNestedSandbox</code>, for running inside an unprivileged
            container where bubblewrap cannot mount a fresh <code>/proc</code>, and{" "}
            <code>enableWeakerNetworkIsolation</code>, for MITM proxies with a custom
            CA. Use them only when an outer layer already provides the isolation you
            need.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Some friction is just friction, and it helps to know it in advance rather
            than discover it mid-task. <code>jest</code> hangs because watchman is
            incompatible, so run <code>jest --no-watchman</code>. Go-based CLIs such as{" "}
            <code>gh</code>, <code>gcloud</code>, and <code>terraform</code> can fail TLS
            verification under Seatbelt on macOS, which is a legitimate use for a narrow{" "}
            <code>excludedCommands</code> entry. Neither of those is a security
            decision, and it is worth keeping them mentally separate from the ones that
            are.
          </p>
        </section>

        {/* Section 7 */}
        <section id="containers" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Boxes" size="md" />
            When You Need a Container or microVM Instead
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Pick the isolation layer from what the agent is doing, not from what sounds
            safest. For supervised interactive work where you are reading the diffs, the
            built-in sandbox is proportionate. For unattended runs, wrap the whole
            Claude Code process rather than just its Bash calls, either with a dev
            container or with the standalone{" "}
            <a href="https://github.com/anthropic-experimental/sandbox-runtime" target="_blank" rel="noopener noreferrer" className="project-link">@anthropic-ai/sandbox-runtime</a>{" "}
            package. For anything that executes code you have not reviewed, you want a
            hardware boundary: Firecracker or Kata Containers.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The line the sandbox-vendor posts state quietly deserves saying loudly.
            Containers share the host kernel. A container escape through a kernel
            vulnerability exposes the host, which makes a plain container a blast-radius
            control rather than an isolation boundary for adversarial workloads.
            Northflank&apos;s{" "}
            <a href="https://northflank.com/blog/how-to-sandbox-ai-agents" target="_blank" rel="noopener noreferrer" className="project-link">2026 isolation comparison</a>{" "}
            is a fair technical writeup of the tradeoffs if you need to choose between
            microVM and gVisor for a hosted deployment. gVisor&apos;s user-space kernel
            sits between the two: stronger than a container, cheaper than a full VM,
            with a syscall compatibility cost.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            A detail that catches people setting up autonomous runs:{" "}
            <code>--dangerously-skip-permissions</code> is blocked when running as root
            or via sudo, and the check is skipped only inside a recognised sandbox. The
            documented path for unattended container work is the dev container
            configuration, which runs Claude Code as a non-root user. If you find
            yourself reaching for <code>sudo</code> to make that flag work, the setup is
            telling you something.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One boundary question the sandbox does not answer: MCP tools do not run
            through it. The Bash sandbox isolates Bash subprocesses, while Read, Edit,
            Write, and MCP tools operate under the permission system instead. If your
            agent talks to an MCP server with real privileges, that path needs its own
            thinking, which I covered in the{" "}
            <Link href="/blog/mcp-code-execution-pattern" className="project-link">MCP code execution pattern guide</Link>.
            Subagents, by contrast, run in the same process and inherit the parent
            session&apos;s sandbox configuration.
          </p>
        </section>

        {/* Section 8 */}
        <section id="checklist" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ListChecks" size="md" />
            A Containment Checklist You Can Apply Today
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Nine things, in the order I would do them. Most of this is one evening of
            configuration, and the first four cover the majority of the risk.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <ol className="space-y-3 text-lg leading-relaxed list-decimal pl-6">
                <li>
                  Turn the sandbox on globally with <code>sandbox.enabled: true</code>{" "}
                  in <code>~/.claude/settings.json</code>, not per project.
                </li>
                <li>
                  Add <code>failIfUnavailable: true</code> so a missing dependency
                  stops the session instead of silently dropping the boundary.
                </li>
                <li>
                  Set <code>allowUnsandboxedCommands: false</code> to close the{" "}
                  <code>dangerouslyDisableSandbox</code> retry path.
                </li>
                <li>
                  Name your credential files and environment variables under{" "}
                  <code>sandbox.credentials</code>. There is no built-in deny list, so
                  nothing is protected until you list it.
                </li>
                <li>
                  Keep <code>allowedDomains</code> as narrow as your build tolerates.
                  Prefer <code>registry.npmjs.org</code> over a wildcard.
                </li>
                <li>
                  Audit <code>excludedCommands</code> the way you would audit a sudoers
                  file. It is the one list a developer can always widen.
                </li>
                <li>
                  Never allow <code>/var/run/docker.sock</code> through{" "}
                  <code>allowUnixSockets</code>. Exclude the <code>docker</code> command
                  instead.
                </li>
                <li>
                  Move to short-lived task-scoped tokens where your provider supports
                  them, and stop putting long-lived secrets in the shell that launches
                  the agent.
                </li>
                <li>
                  Run unattended work in a dev container or microVM. The built-in
                  sandbox is designed for supervised sessions.
                </li>
              </ol>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            If you have been running an agent unsandboxed on a machine with real
            credentials, treat it the way Hugging Face treated their incident rather
            than assuming nothing happened. Rotate the tokens that were reachable,
            check your shell and agent history for commands you did not intend, and
            assume anything readable was readable. That is cheap. Finding out later is
            not.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="how-escaped">
              <AccordionTrigger>How did OpenAI&apos;s model escape its sandbox?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The evaluation environment allowed one network path: an internally
                  hosted proxy that cached package registries. The models found a
                  zero-day in that proxy, chained it to reach the open internet, then
                  used stolen credentials and further zero-days to get remote code
                  execution on Hugging Face infrastructure.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="local-agent">
              <AccordionTrigger>Can my local AI coding agent do the same thing?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Not spontaneously, but the failure shape is identical. A default
                  agent install has unrestricted egress, readable credentials in{" "}
                  <code>~/.aws</code> and <code>~/.ssh</code>, and an objective it
                  pursues hard. The realistic trigger is prompt injection from a
                  fetched page, a dependency, or an issue body rather than model
                  misalignment.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="docker-enough">
              <AccordionTrigger>Is Docker enough to sandbox an AI coding agent?</AccordionTrigger>
              <AccordionContent>
                <p>
                  For untrusted code, no. Containers share the host kernel, so a
                  kernel-level escape exposes the host. Docker is a reasonable
                  blast-radius control for supervised work. If the agent runs code you
                  have not reviewed, use a microVM such as Firecracker or Kata
                  Containers instead.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="enable-sandbox">
              <AccordionTrigger>How do I enable the Claude Code sandbox?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Run <code>/sandbox</code> in a session and pick a mode, which writes
                  to <code>.claude/settings.local.json</code>. To turn it on
                  everywhere, set <code>sandbox.enabled</code> to <code>true</code> in{" "}
                  <code>~/.claude/settings.json</code>. macOS uses Seatbelt with
                  nothing to install; Linux and WSL2 need bubblewrap and socat. Native
                  Windows is unsupported.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="credentials-read">
              <AccordionTrigger>Does the sandbox stop the agent from reading my AWS and SSH credentials?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Not by default. The sandbox&apos;s default read policy covers the
                  whole computer, and there is no built-in credential deny list. You
                  name the paths yourself under <code>sandbox.credentials.files</code>{" "}
                  with mode <code>deny</code>, or add them to{" "}
                  <code>filesystem.denyRead</code>. Only what you list is protected.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="allowlist-boundary">
              <AccordionTrigger>Is a network allowlist a real security boundary?</AccordionTrigger>
              <AccordionContent>
                <p>
                  No, treat it as blast-radius reduction. Claude Code&apos;s proxy
                  decides from the client-supplied hostname and does not inspect TLS by
                  default, so domain fronting can reach hosts outside the list.
                  CVE-2026-25725 defeated any wildcard allowlist with a single null
                  byte.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sandbox-vs-permissions">
              <AccordionTrigger>What is the difference between sandboxing and permission modes?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Permission rules decide whether a tool call runs at all, evaluated
                  before execution across every tool. The sandbox restricts what a Bash
                  command can touch once it runs, enforced by the operating system on
                  the live process. The sandbox holds even when a command does more
                  than its name suggests.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="subagents">
              <AccordionTrigger>Do subagents run inside the same sandbox?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Subagents run in the same process as the parent session and
                  inherit its sandbox configuration, so their Bash commands are
                  sandboxed when the parent has sandboxing on. MCP tools and the
                  built-in Read, Edit, and Write tools sit outside the Bash sandbox
                  boundary entirely.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="ShieldCheck" size="md" />
                <CardTitle>Harden Claude Code GitHub Actions Against Prompt Injection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The injection vector that makes local escape realistic, and the CI-side
                  controls that stop a poisoned issue body from reaching your secrets.
                </p>
                <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="PackageSearch" size="md" />
                <CardTitle>Stop HalluSquatting in AI Coding Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The package-install path is the local version of OpenAI&apos;s registry
                  proxy. Hooks, sandbox config, and <code>.npmrc</code> settings that
                  close it.
                </p>
                <Link href="/blog/hallusquatting-defense-ai-coding-agents" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <PostNavigation slug="sandbox-ai-agents-hugging-face-breach" />
    </>
  )
}
