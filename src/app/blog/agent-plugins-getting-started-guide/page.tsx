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
  title: "Agent Plugins 1.0: Build Your First Plugin",
  description:
    "Agent Plugins 1.0 packages skills and MCP servers into one portable folder. Build a working plugin, then ship the same repo to Claude Code and Copilot.",
  keywords: [
    "agent plugins",
    "agent plugins 1.0",
    "build an agent plugin",
    "plugin.json agent plugins",
    "claude code agent plugins",
    "mcp.json plugin",
    "agent plugins tutorial",
    "agent skills",
    "portable agent plugin",
    "agent plugins vs claude code plugins",
    "package an MCP server",
    "agent plugins spec",
    "copilot agent plugins",
    "agent plugins security",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Agent Plugins 1.0: Build One Plugin for Claude Code and Copilot",
    description:
      "Agent Plugins 1.0 packages skills and MCP servers into one portable folder. Build a working plugin, then ship the same repo to Claude Code and Copilot.",
    url: "https://avinashsangle.com/blog/agent-plugins-getting-started-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-08-20T00:00:00.000Z",
    modifiedTime: "2026-08-20T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-agent-plugins-getting-started-guide.png",
        width: 1200,
        height: 630,
        alt: "Agent Plugins 1.0 - Build One Plugin for Claude Code and Copilot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Plugins 1.0: Build One Plugin for Claude Code and Copilot",
    description:
      "Agent Plugins 1.0 packages skills and MCP servers into one portable folder. Build a working plugin, then ship it to Claude Code and Copilot.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-agent-plugins-getting-started-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/agent-plugins-getting-started-guide",
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
  headline: "Agent Plugins 1.0: Build One Plugin for Claude Code and Copilot",
  description:
    "Agent Plugins 1.0 packages skills and MCP servers into one portable folder. Build a working plugin, then ship the same repo to Claude Code and Copilot.",
  image: "https://avinashsangle.com/og-agent-plugins-getting-started-guide.png",
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
      "Agent Plugins",
      "DevOps",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-08-20",
  dateModified: "2026-08-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/agent-plugins-getting-started-guide",
  },
  keywords:
    "agent plugins, agent plugins 1.0, plugin.json, mcp.json, agent skills, Claude Code plugins, MCP server packaging",
  articleSection: "AI Development",
  wordCount: 2900,
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
      name: "Agent Plugins 1.0: Build One Plugin for Claude Code and Copilot",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Claude Code support Agent Plugins 1.0?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not as of August 20, 2026. Anthropic is on neither the Technical Steering Committee nor the launch client list, and the Claude Code plugins reference never mentions the standard. Claude Code reads its own manifest at .claude-plugin/plugin.json and ignores a root plugin.json.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an Agent Plugin and a Claude Code plugin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The wrapper differs, the payload does not. Agent Plugins put plugin.json at the root and MCP config in mcp.json. Claude Code uses .claude-plugin/plugin.json and .mcp.json. Both read skills from skills/<name>/SKILL.md, so skills port unchanged.",
      },
    },
    {
      "@type": "Question",
      name: "Where does plugin.json go in an Agent Plugin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At the plugin root, and nowhere else. Version 1.0 defines no alternative manifest paths. The file needs a $schema field set to the exact 1.0.0 schema URL and a name field; every other field is optional metadata.",
      },
    },
    {
      "@type": "Question",
      name: "Can one repository work as both an Agent Plugin and a Claude Code plugin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Add the root plugin.json and mcp.json next to the existing .claude-plugin/plugin.json and .mcp.json, and share one skills/ directory. Claude Code v2.1.237 validates that layout without complaint, since each client ignores the manifest it does not recognise.",
      },
    },
    {
      "@type": "Question",
      name: "Do hooks, slash commands, and subagents port between agent clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Commands, hooks, agents, rules, and LSP servers are all outside version 1 because their formats have not converged. Clients may keep them in reverse-DNS directories such as com.github.copilot/, but no other client is required to read those.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add an MCP server to an Agent Plugin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create mcp.json at the plugin root with its own $schema URL and an mcpServers object. Each entry needs an explicit type of stdio, streamable-http, or sse. Omitting type fails schema validation, which is the most common porting mistake.",
      },
    },
    {
      "@type": "Question",
      name: "Is PLUGIN_ROOT the same as CLAUDE_PLUGIN_ROOT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They point at the same place with different names. Agent Plugins inject PLUGIN_ROOT and PLUGIN_DATA; Claude Code injects CLAUDE_PLUGIN_ROOT, CLAUDE_PLUGIN_DATA, and CLAUDE_PROJECT_DIR. A dual-format repo carries both spellings, which is the one real duplication cost.",
      },
    },
    {
      "@type": "Question",
      name: "How should an Agent Plugin handle API keys and secrets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never inside the package. The spec forbids embedding credentials in headers, since headers are visible package data, and version 1 defines no OAuth configuration or portable credential references. Reference an environment variable the user sets outside the plugin instead.",
      },
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Build an Agent Plugin That Works in Claude Code and Copilot",
  description:
    "Package an MCP server and an Agent Skill into a single folder that satisfies both the Agent Plugins 1.0 specification and Claude Code's native plugin format.",
  totalTime: "PT20M",
  tool: [
    { "@type": "HowToTool", name: "Claude Code CLI v2.1.237 or later" },
    { "@type": "HowToTool", name: "An existing MCP server" },
  ],
  supply: [{ "@type": "HowToSupply", name: "The Agent Plugins 1.0.0 JSON schemas" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Create the plugin manifest",
      text: "Add plugin.json at the plugin root with the exact 1.0.0 $schema URL and a lowercase name. The schema is closed, so no extra top-level fields.",
      url: "https://avinashsangle.com/blog/agent-plugins-getting-started-guide#build",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Write the skill",
      text: "Create skills/<skill-name>/SKILL.md with name and description frontmatter. Only immediate children of skills/ are discovered, so do not nest.",
      url: "https://avinashsangle.com/blog/agent-plugins-getting-started-guide#build",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Declare the MCP server",
      text: "Add mcp.json at the root with its own $schema, an explicit transport type, and ${PLUGIN_ROOT} or ${PLUGIN_DATA} placeholders in args, env, and cwd.",
      url: "https://avinashsangle.com/blog/agent-plugins-getting-started-guide#mcp-json",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add the Claude Code manifest alongside it",
      text: "Keep .claude-plugin/plugin.json and .mcp.json in the same tree, using the CLAUDE_PLUGIN_ROOT spelling, and share the skills directory between both formats.",
      url: "https://avinashsangle.com/blog/agent-plugins-getting-started-guide#dual-format",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Validate before publishing",
      text: "Check both manifests against the published JSON schemas, then run claude plugin validate . from the marketplace directory to confirm the Claude Code half.",
      url: "https://avinashsangle.com/blog/agent-plugins-getting-started-guide#validate",
    },
  ],
})

export default function AgentPluginsGettingStartedGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: techArticleSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToSchema }} />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Agent Plugins 1.0" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Agent Plugins 1.0: Build One Plugin for Claude Code and Copilot
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            An Agent Plugin is a folder with <code>plugin.json</code> at its root
            that bundles Agent Skills and{" "}
            <Link href="/blog/mcp-code-execution-pattern" className="project-link">
              MCP servers
            </Link>{" "}
            so one package installs into several agent clients. Version 1.0.0
            shipped on August 6, 2026. Claude Code is not one of those clients,
            which is the part worth planning around.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> August 20, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-08-20</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              "Agent Plugins",
              "Agent Skills",
              "MCP",
              "Claude Code",
              "GitHub Copilot",
              "Developer Tools",
            ].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
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
                  <a href="#what-is-an-agent-plugin" className="project-link">
                    What Is an Agent Plugin, and What Does It Package?
                  </a>
                </li>
                <li>
                  <a href="#build" className="project-link">
                    How to Build an Agent Plugin in Ten Minutes
                  </a>
                </li>
                <li>
                  <a href="#mcp-json" className="project-link">
                    The mcp.json Rules That Break Plugins Quietly
                  </a>
                </li>
                <li>
                  <a href="#claude-code" className="project-link">
                    Does Claude Code Support Agent Plugins 1.0?
                  </a>
                </li>
                <li>
                  <a href="#dual-format" className="project-link">
                    Shipping One Repo to Both Formats
                  </a>
                </li>
                <li>
                  <a href="#validate" className="project-link">
                    Validating and Installing the Plugin
                  </a>
                </li>
                <li>
                  <a href="#security" className="project-link">
                    The Security Model Nobody Reads Before Installing
                  </a>
                </li>
                <li>
                  <a href="#out-of-scope" className="project-link">
                    What Version 1 Deliberately Leaves Out
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
        <Card className="card-accent-left mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="Zap" size="sm" />
              TL;DR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                <strong>Three files, one folder:</strong> <code>plugin.json</code>{" "}
                at the root, skills under <code>skills/&lt;name&gt;/SKILL.md</code>,
                MCP servers in <code>mcp.json</code>. Six clients read that layout
                today: ChatGPT, Codex, Cursor, GitHub Copilot, Kiro, and VS Code.
              </li>
              <li>
                <strong>Anthropic sat this one out.</strong> The company that wrote
                Agent Skills and MCP is on neither the steering committee nor the
                client list, and Claude Code still reads{" "}
                <code>.claude-plugin/plugin.json</code>.
              </li>
              <li>
                <strong>One repo can carry both manifests.</strong> I built the dual
                layout and ran <code>claude plugin validate</code> on it under Claude
                Code v2.1.237. It passes, because each client ignores the other
                format.
              </li>
              <li>
                <strong>The schemas are stricter than the prose.</strong> Both
                manifests set <code>additionalProperties: false</code>, and an MCP
                entry without an explicit <code>type</code> fails validation, which
                is exactly what a copy-paste from <code>.mcp.json</code> gives you.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="what-is-an-agent-plugin" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Package" size="md" />
            What Is an Agent Plugin, and What Does It Package?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            An Agent Plugin packages exactly two things: Agent Skills and MCP server
            configuration. That is the entire portable surface. The{" "}
            <a
              href="https://agent-plugins.org/specification"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              1.0.0 specification
            </a>{" "}
            was published on August 6, 2026 by a Technical Steering Committee drawn
            from Amazon, Cursor, Microsoft, OpenAI, and Vercel, with Google joining
            as a Core Maintainer the same day. On August 12 GitHub made it generally
            available across VS Code, Copilot CLI, the Copilot SDK, and the Copilot
            app on all Copilot plans.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The problem it solves is narrow and real. A skill and an MCP server both
            work fine on their own, and then you ship them to a second client and
            maintain two forks of the same thing. MCP standardised the wire protocol
            in 2024 and Agent Skills standardised the instruction file, but nothing
            standardised the box they travel in. Agent Plugins is the box.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The manifest is deliberately boring. Only ten top-level fields are
            permitted: <code>$schema</code>, <code>name</code>, <code>version</code>,{" "}
            <code>description</code>, <code>author</code>, <code>homepage</code>,{" "}
            <code>repository</code>, <code>license</code>, <code>keywords</code>, and{" "}
            <code>extensions</code>. Of those, only the first two are required.{" "}
            <code>$schema</code> must be the exact 1.0.0 URL, not a version range and
            not a redirect.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Skill discovery has one rule that catches people. Clients look at the
            immediate children of <code>skills/</code> for a file named exactly{" "}
            <code>SKILL.md</code>, and the spec says clients{" "}
            <strong>must not</strong> search deeper. If you organise skills into
            categories, every skill below the second level disappears with no error.
            The plugin still loads. The skills just are not there.
          </p>
        </section>

        {/* Section 2 */}
        <section id="build" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Hammer" size="md" />
            How to Build an Agent Plugin in Ten Minutes
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            I built this one around a real payload rather than a hello-world: the{" "}
            <Link href="/projects/jenkins-mcp" className="project-link">
              Jenkins MCP server
            </Link>{" "}
            plus a skill that tells the agent when to reach for it. That pairing is
            the argument for the format. An MCP server gives the agent tools; it does
            not tell the agent that build failures should be diagnosed from the first
            failing stage rather than the last log line. The skill carries the
            workflow, the server carries the capability, and until now there was no
            way to ship them as one thing.
          </p>

          <CodeBlock
            language="text"
            filename="jenkins-ops/ (Agent Plugins 1.0 layout)"
            code={`jenkins-ops/
├── plugin.json                              # required, root only
├── mcp.json                                 # optional, root only
├── skills/
│   └── trigger-jenkins-build/
│       └── SKILL.md                         # discovered; one level deep
└── server/
    └── index.js                             # the MCP server itself`}
          />

          <p className="text-lg leading-relaxed mb-6">
            The manifest is four lines of substance. Note the <code>name</code>{" "}
            pattern: lowercase alphanumerics with hyphens and periods, no consecutive
            separators, and it has to start and end on an alphanumeric character. I
            fed <code>Jenkins--Ops</code> to the published schema to check, and it
            fails on both counts at once.
          </p>

          <CodeBlock
            language="json"
            filename="jenkins-ops/plugin.json"
            code={`{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
  "name": "jenkins-ops",
  "version": "0.1.0",
  "description": "Jenkins MCP server plus a skill that teaches the agent when to use it",
  "author": { "name": "Avinash Sangle", "url": "https://avinashsangle.com" },
  "license": "MIT",
  "keywords": ["jenkins", "ci", "mcp"]
}`}
          />

          <p className="text-lg leading-relaxed mb-6">
            The skill is a plain Markdown file with frontmatter. This is the piece
            that already ports everywhere, because it is governed by the Agent Skills
            specification rather than by the plugin standard. The same file works in
            Claude Code today with no changes, which is worth knowing before you
            rewrite anything.
          </p>

          <CodeBlock
            language="markdown"
            filename="jenkins-ops/skills/trigger-jenkins-build/SKILL.md"
            code={`---
name: trigger-jenkins-build
description: Trigger a Jenkins job and follow its console output. Use when asked to run a build, rerun a failed pipeline, or check why a job is red.
---

# Trigger a Jenkins build

1. Resolve the job name with the \`list_jobs\` tool before guessing a path.
2. Trigger with \`build_job\`, passing parameters as a flat object.
3. Poll \`get_build_status\` until it leaves BUILDING, then fetch the console log tail.
4. On failure, report the first failing stage, not the last log line.`}
          />

          <p className="text-lg leading-relaxed mb-6">
            That is a valid plugin. It will load skills in any of the six launch
            clients. The MCP half is where the rules get sharp.
          </p>
        </section>

        {/* Section 3 */}
        <section id="mcp-json" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Network" size="md" />
            The mcp.json Rules That Break Plugins Quietly
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <code>mcp.json</code> lives at the plugin root, carries its own{" "}
            <code>$schema</code> URL, and wraps everything in an{" "}
            <code>mcpServers</code> object. Three transports are defined:{" "}
            <code>stdio</code>, <code>streamable-http</code>, and <code>sse</code>,
            the last already marked deprecated and optional for clients to support.
            If you are still on the old HTTP+SSE transport, my{" "}
            <Link href="/blog/mcp-stateless-spec-migration-guide" className="project-link">
              stateless MCP migration guide
            </Link>{" "}
            covers moving off it.
          </p>

          <CodeBlock
            language="json"
            filename="jenkins-ops/mcp.json"
            code={`{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json",
  "mcpServers": {
    "jenkins": {
      "type": "stdio",
      "command": "node",
      "args": ["\${PLUGIN_ROOT}/server/index.js"],
      "env": { "JENKINS_CACHE_DIR": "\${PLUGIN_DATA}/cache" }
    }
  }
}`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Four rules decide whether that file works, and I checked each of them
            against the published schemas rather than the prose.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>The type field is mandatory.</strong> Claude Code&apos;s{" "}
            <code>.mcp.json</code> lets you omit it for stdio servers, so the obvious
            migration move is to copy the block across. I tried it. The schema
            rejects the entry outright, because every server variant lists{" "}
            <code>type</code> in its required array and the parent is a{" "}
            <code>oneOf</code>. The error names none of that, it just says the object
            is not valid under any of the given schemas.
          </p>

          <CodeBlock
            language="text"
            filename="validation output (jsonschema, Draft 2020-12)"
            code={`## bad-no-type.json: INVALID
   path: ['mcpServers', 'jenkins'] | {'command': 'node', 'args': [...]} is not valid under any of the given schemas

## bad-cwd.json: INVALID
   path: ['mcpServers', 'jenkins'] | {'type': 'stdio', 'command': 'node', 'cwd': 'server'} is not valid under any of the given schemas

## bad-name.json: INVALID
   path: ['name'] | 'Jenkins--Ops' does not match '^(?!.*(?:--|\\.\\.))[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$'`}
          />

          <p className="text-lg leading-relaxed mb-6">
            <strong>The command is a token, not a shell string.</strong> It gets no
            placeholder expansion at all, which rules out{" "}
            <code>&quot;command&quot;: &quot;$&#123;PLUGIN_ROOT&#125;/bin/server&quot;</code>.
            Expansion applies only to <code>args</code> elements, <code>env</code>{" "}
            values, and <code>cwd</code>, and it runs exactly once: text introduced by
            a replacement is never rescanned, so a placeholder that arrives inside a
            substituted value stays literal.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Relative paths need the ./ prefix.</strong> A bare{" "}
            <code>&quot;cwd&quot;: &quot;server&quot;</code> fails the schema pattern.
            It has to be <code>./server</code>, <code>$&#123;PLUGIN_ROOT&#125;</code>,
            or <code>$&#123;PLUGIN_DATA&#125;</code>, and after expansion the result
            still has to sit inside the corresponding root.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>PLUGIN_ROOT is read-only, PLUGIN_DATA is where you write.</strong>{" "}
            Clients inject both, and the schema forbids you from defining either name
            in your own <code>env</code> block. <code>PLUGIN_ROOT</code> is the
            installed package, which gets replaced wholesale on update.{" "}
            <code>PLUGIN_DATA</code> is a client-managed directory that survives
            updates. Caches, downloaded dependencies, and generated files belong in
            the second one, and I have watched a plugin lose its cache on every
            upgrade because it wrote to the first.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Path containment is enforced after symlink resolution, and the failure
            modes are graded rather than uniform. A bad path in{" "}
            <code>plugin.json</code> rejects the whole plugin. A bad skill path skips
            that one skill. A bad <code>command</code> or <code>cwd</code>{" "}
            invalidates only that server entry. So if two of your three servers load
            and the third does not, the containment rules are the first place to
            look.
          </p>
        </section>

        {/* Section 4 */}
        <section id="claude-code" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            Does Claude Code Support Agent Plugins 1.0?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            No, and there is no announced plan to. As of August 20, 2026 Anthropic
            appears on neither the steering committee nor the launch client list, and
            the{" "}
            <a
              href="https://code.claude.com/docs/en/plugins-reference"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Claude Code plugins reference
            </a>{" "}
            does not mention the standard anywhere. The company that authored both
            halves of the cargo is absent from the standard that packages it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The practical gap is smaller than that sounds. Here is what actually
            differs, with both columns taken from vendor documentation rather than
            announcements.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4">Component</th>
                  <th className="py-3 pr-4">Agent Plugins 1.0</th>
                  <th className="py-3">Claude Code</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Manifest</td>
                  <td className="py-3 pr-4">
                    <code>plugin.json</code> at root, required
                  </td>
                  <td className="py-3">
                    <code>.claude-plugin/plugin.json</code>, optional
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Skills</td>
                  <td className="py-3 pr-4">
                    <code>skills/&lt;name&gt;/SKILL.md</code>
                  </td>
                  <td className="py-3">
                    <code>skills/&lt;name&gt;/SKILL.md</code>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">MCP config</td>
                  <td className="py-3 pr-4">
                    <code>mcp.json</code>, <code>type</code> required
                  </td>
                  <td className="py-3">
                    <code>.mcp.json</code> or inline <code>mcpServers</code>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">Path variables</td>
                  <td className="py-3 pr-4">
                    <code>PLUGIN_ROOT</code>, <code>PLUGIN_DATA</code>
                  </td>
                  <td className="py-3">
                    <code>CLAUDE_PLUGIN_ROOT</code>, <code>CLAUDE_PLUGIN_DATA</code>,{" "}
                    <code>CLAUDE_PROJECT_DIR</code>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground">
                    Hooks, commands, subagents, LSP
                  </td>
                  <td className="py-3 pr-4">outside version 1</td>
                  <td className="py-3">native, documented</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground">Distribution</td>
                  <td className="py-3 pr-4">out of scope, client-defined</td>
                  <td className="py-3">
                    <code>.claude-plugin/marketplace.json</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            One row in that table matters more than the rest. Skills are byte
            identical on both sides. That is the shared Agent Skills specification
            doing the work, not the plugin standard, and it means the expensive part
            of your plugin, the written workflow, already ports. What does not port
            is the wrapper and the client-specific extras.
          </p>
        </section>

        {/* Section 5 */}
        <section id="dual-format" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Layers" size="md" />
            Shipping One Repo to Both Formats
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The migration guide in the{" "}
            <a
              href="https://github.com/agentplugins/agent-plugins-example"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              official example repository
            </a>{" "}
            recommends an additive approach: add the new manifest, remove nothing.
            That advice extends further than the repo spells out. Since each client
            reads the manifest it knows and ignores the other, a single tree can
            satisfy both formats at once.
          </p>

          <CodeBlock
            language="text"
            filename="jenkins-ops/ (dual-format layout)"
            code={`jenkins-ops/
├── plugin.json                  # Agent Plugins 1.0 reads this
├── mcp.json                     #   ... and this  (\${PLUGIN_ROOT})
├── .claude-plugin/
│   └── plugin.json              # Claude Code reads this
├── .mcp.json                    #   ... and this  (\${CLAUDE_PLUGIN_ROOT})
├── skills/
│   └── trigger-jenkins-build/
│       └── SKILL.md             # shared, unchanged, by both
└── server/
    └── index.js`}
          />

          <p className="text-lg leading-relaxed mb-6">
            The duplication is smaller than it looks. Two manifests, but the second
            one is metadata you have already written. Two MCP files, and here the
            only substantive difference is the placeholder spelling:{" "}
            <code>$&#123;PLUGIN_ROOT&#125;</code> in one file,{" "}
            <code>$&#123;CLAUDE_PLUGIN_ROOT&#125;</code> in the other. The skills
            directory is shared outright.
          </p>

          <CodeBlock
            language="json"
            filename="jenkins-ops/.mcp.json (Claude Code half)"
            code={`{
  "mcpServers": {
    "jenkins": {
      "command": "node",
      "args": ["\${CLAUDE_PLUGIN_ROOT}/server/index.js"],
      "env": { "JENKINS_CACHE_DIR": "\${CLAUDE_PLUGIN_DATA}/cache" }
    }
  }
}`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Two files that differ by a prefix will drift, so generate one from the
            other rather than maintaining both by hand. Fifteen lines of Python in a
            pre-commit hook is enough, and it keeps the portable file as the source
            of truth.
          </p>

          <CodeBlock
            language="python"
            filename="scripts/sync_claude_mcp.py"
            code={`#!/usr/bin/env python3
"""Generate .mcp.json (Claude Code) from mcp.json (Agent Plugins 1.0)."""
import json
from pathlib import Path

src = json.loads(Path("mcp.json").read_text())
out = {"mcpServers": {}}

for name, server in src["mcpServers"].items():
    # Claude Code infers stdio and uses its own placeholder names.
    entry = {k: v for k, v in server.items() if k != "type"}
    blob = json.dumps(entry).replace("\${PLUGIN_ROOT}", "\${CLAUDE_PLUGIN_ROOT}")
    blob = blob.replace("\${PLUGIN_DATA}", "\${CLAUDE_PLUGIN_DATA}")
    out["mcpServers"][name] = json.loads(blob)

Path(".mcp.json").write_text(json.dumps(out, indent=2) + "\\n")`}
          />

          <p className="text-lg leading-relaxed mb-6">
            One caution I could not resolve from my own machine. The{" "}
            <a
              href="https://code.visualstudio.com/docs/agent-customization/agent-plugins"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              VS Code documentation
            </a>{" "}
            says plugin MCP servers load from <code>mcp.json</code> in the Agent
            Plugins format <em>or</em> from <code>.mcp.json</code> in the Copilot and
            Claude formats. A dual-format tree contains both. I have no Copilot
            surface here to test whether that registers the same server twice, so
            treat it as an open question: install into VS Code, check your server
            list for duplicates, and drop the <code>.mcp.json</code> from the
            published artifact if they appear.
          </p>
        </section>

        {/* Section 6 */}
        <section id="validate" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="CircleCheck" size="md" />
            Validating and Installing the Plugin
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Both Agent Plugins schemas are published as fetchable JSON Schema
            documents, so CI validation needs no vendor tooling. This is the check I
            run before publishing anything.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`curl -sO https://agent-plugins.org/schemas/1.0.0/plugin.schema.json
curl -sO https://agent-plugins.org/schemas/1.0.0/mcp.schema.json

uvx --with jsonschema python - <<'PY'
import json
from jsonschema import Draft202012Validator

for doc, schema in [("plugin.json", "plugin.schema.json"),
                    ("mcp.json", "mcp.schema.json")]:
    errs = list(Draft202012Validator(json.load(open(schema))).iter_errors(json.load(open(doc))))
    print(f"{doc}: {'VALID' if not errs else 'INVALID'}")
    for e in errs:
        print("  ", list(e.path), e.message)
PY`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Run that and you find something the specification prose does not prepare
            you for. The written spec says unknown top-level fields must be reported
            and ignored without invalidating the plugin. The published schema sets{" "}
            <code>additionalProperties: false</code> on both manifests. Those
            describe different things, client load behaviour versus author-side
            validation, but the practical effect is that a leftover Claude Code field
            such as <code>hooks</code> passes silently at runtime and hard-fails in
            CI.
          </p>

          <CodeBlock
            language="text"
            filename="validation output"
            code={`## plugin.json:  VALID
## mcp.json:     VALID
## bad-extra-field.json: INVALID
   path: [] | Additional properties are not allowed ('hooks' was unexpected)`}
          />

          <p className="text-lg leading-relaxed mb-6">
            For the Claude Code half, the CLI ships its own validator. Claude Code
            plugins are distributed through a marketplace catalogue rather than
            installed from a bare directory, so the test harness is a small local
            marketplace pointing at the plugin folder.
          </p>

          <CodeBlock
            language="json"
            filename="my-marketplace/.claude-plugin/marketplace.json"
            code={`{
  "name": "avinash-plugins",
  "owner": { "name": "Avinash Sangle" },
  "plugins": [
    {
      "name": "jenkins-ops",
      "source": "./plugins/jenkins-ops",
      "description": "Jenkins MCP server plus a build-triggering skill"
    }
  ]
}`}
          />

          <CodeBlock
            language="bash"
            filename="terminal (Claude Code v2.1.237)"
            code={`$ claude plugin validate .
Validating marketplace manifest: .../my-marketplace/.claude-plugin/marketplace.json

⚠ Found 1 warning:
  ❯ description: No marketplace description provided.

✔ Validation passed with warnings

$ claude plugin validate ./plugins/jenkins-ops
Validating plugin manifest: .../plugins/jenkins-ops/.claude-plugin/plugin.json

✔ Validation passed

# install it locally to test
$ claude plugin marketplace add ./my-marketplace
$ claude plugin install jenkins-ops@avinash-plugins`}
          />

          <p className="text-lg leading-relaxed mb-6">
            That run is the answer to whether the dual layout is safe. The validator
            read <code>.claude-plugin/plugin.json</code>, ignored the root{" "}
            <code>plugin.json</code> and <code>mcp.json</code> sitting beside it, and
            passed. On the Copilot side, VS Code installs from a marketplace, from a
            Git URL through <em>Chat: Install Plugin From Source</em>, or by picking
            up whatever Copilot CLI already put in{" "}
            <code>~/.copilot/installed-plugins/</code>.
          </p>
        </section>

        {/* Section 7 */}
        <section id="security" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldAlert" size="md" />
            The Security Model Nobody Reads Before Installing
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            One sentence in the VS Code documentation deserves more attention than it
            gets: &quot;Plugin MCP servers are implicitly trusted when you install the
            plugin.&quot; There is no per-server trust prompt. Trust is granted once,
            at the marketplace level, on your first install from a new source, and
            every server in every plugin from that source inherits it. VS Code&apos;s
            own docs follow up with the warning that plugins can include hooks and MCP
            servers that run code on your machine.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Put that next to what a plugin is, a folder of executable configuration
            fetched from a Git host, and you have a supply chain with a single trust
            decision at the front of it. The failure modes are the ones I wrote about
            in{" "}
            <Link href="/blog/hallusquatting-defense-ai-coding-agents" className="project-link">
              HalluSquatting defense
            </Link>{" "}
            and{" "}
            <Link href="/blog/litellm-mcp-exploit-response-guide" className="project-link">
              the LiteLLM MCP exploit
            </Link>
            : a plausible name, a marketplace nobody audits, and code that runs with
            your credentials.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The spec closes one door and leaves another open. Headers are visible
            package data, so plugins must not embed credentials in them, full stop.
            But version 1 defines no OAuth configuration and no portable
            credential-reference field, which means every plugin that talks to an
            authenticated service has an out-of-band secret story. Reference an
            environment variable the user sets themselves; never ship a value.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            For teams, GitHub exposes plugin governance through{" "}
            <code>managed-settings.json</code> with <code>enabledPlugins</code>,{" "}
            <code>extraKnownMarketplaces</code>, and{" "}
            <code>strictKnownMarketplaces</code>. Set the strict flag before anyone
            installs anything, not after.
          </p>
        </section>

        {/* Section 8 */}
        <section id="out-of-scope" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="CircleSlash" size="md" />
            What Version 1 Deliberately Leaves Out
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The exclusion list is long and worth reading before you plan a migration:
            commands, hooks, agents, rules, LSP servers, OAuth configuration,
            portable credential references, archive formats such as{" "}
            <code>.zip</code> and <code>.tar.gz</code>, registry-fetched bundles,
            alternative manifest paths, and inline component configuration inside{" "}
            <code>plugin.json</code>. The stated reason is that those formats have
            not converged across clients. The stated reason is also accurate, which
            does not make the omission less annoying, because hooks and slash commands
            are a large part of why people build plugins at all.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The escape hatch is reverse-DNS namespacing. Client-specific behaviour is
            legal inside a top-level directory named for the vendor, such as{" "}
            <code>com.github.copilot/</code>, and inside the <code>extensions</code>{" "}
            object in the manifest. Nothing requires another client to read those, and
            nothing stops a vendor from putting its most useful features there. VS
            Code already documents ignoring other vendors&apos; extension data, and it
            parses hook <code>matcher</code> values and then ignores them, so hooks
            fire on every matching event.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            So calibrate the expectation. This is a packaging standard, not a
            portability guarantee. Your skills and your MCP configuration travel.
            Your workflow, meaning the hooks, the slash commands, and the subagents I
            rely on in{" "}
            <Link href="/blog/claude-code-dynamic-workflows-guide" className="project-link">
              dynamic Claude Code workflows
            </Link>
            , stays exactly where you built it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Should you migrate today? If you publish skills or MCP servers for other
            people, yes, and the cost is one extra manifest. If you are a Claude Code
            user with a private plugin, add the second manifest whenever you next
            touch the repo and get on with your work. Version 1.1.0 is already a
            working draft in the specification repository, so the surface will move
            again before the end of the year.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="MessageCircleQuestion" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Does Claude Code support Agent Plugins 1.0?</AccordionTrigger>
              <AccordionContent>
                Not as of August 20, 2026. Anthropic is on neither the Technical
                Steering Committee nor the launch client list, and the Claude Code
                plugins reference never mentions the standard. Claude Code reads its
                own manifest at <code>.claude-plugin/plugin.json</code> and ignores a
                root <code>plugin.json</code>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the difference between an Agent Plugin and a Claude Code plugin?
              </AccordionTrigger>
              <AccordionContent>
                The wrapper differs, the payload does not. Agent Plugins put{" "}
                <code>plugin.json</code> at the root and MCP config in{" "}
                <code>mcp.json</code>. Claude Code uses{" "}
                <code>.claude-plugin/plugin.json</code> and <code>.mcp.json</code>.
                Both read skills from <code>skills/&lt;name&gt;/SKILL.md</code>, so
                skills port unchanged.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Where does plugin.json go in an Agent Plugin?</AccordionTrigger>
              <AccordionContent>
                At the plugin root, and nowhere else. Version 1.0 defines no
                alternative manifest paths. The file needs a <code>$schema</code>{" "}
                field set to the exact 1.0.0 schema URL and a <code>name</code> field;
                every other field is optional metadata.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can one repository work as both an Agent Plugin and a Claude Code plugin?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Add the root <code>plugin.json</code> and <code>mcp.json</code>{" "}
                next to the existing <code>.claude-plugin/plugin.json</code> and{" "}
                <code>.mcp.json</code>, and share one <code>skills/</code> directory.
                Claude Code v2.1.237 validates that layout without complaint, since
                each client ignores the manifest it does not recognise.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do hooks, slash commands, and subagents port between agent clients?
              </AccordionTrigger>
              <AccordionContent>
                No. Commands, hooks, agents, rules, and LSP servers are all outside
                version 1 because their formats have not converged. Clients may keep
                them in reverse-DNS directories such as{" "}
                <code>com.github.copilot/</code>, but no other client is required to
                read those.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How do I add an MCP server to an Agent Plugin?</AccordionTrigger>
              <AccordionContent>
                Create <code>mcp.json</code> at the plugin root with its own{" "}
                <code>$schema</code> URL and an <code>mcpServers</code> object. Each
                entry needs an explicit <code>type</code> of <code>stdio</code>,{" "}
                <code>streamable-http</code>, or <code>sse</code>. Omitting{" "}
                <code>type</code> fails schema validation, which is the most common
                porting mistake.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Is PLUGIN_ROOT the same as CLAUDE_PLUGIN_ROOT?</AccordionTrigger>
              <AccordionContent>
                They point at the same place with different names. Agent Plugins
                inject <code>PLUGIN_ROOT</code> and <code>PLUGIN_DATA</code>; Claude
                Code injects <code>CLAUDE_PLUGIN_ROOT</code>,{" "}
                <code>CLAUDE_PLUGIN_DATA</code>, and <code>CLAUDE_PROJECT_DIR</code>.
                A dual-format repo carries both spellings, which is the one real
                duplication cost.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                How should an Agent Plugin handle API keys and secrets?
              </AccordionTrigger>
              <AccordionContent>
                Never inside the package. The spec forbids embedding credentials in
                headers, since headers are visible package data, and version 1 defines
                no OAuth configuration or portable credential references. Reference an
                environment variable the user sets outside the plugin instead.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Closing CTA */}
        <Card className="card-accent-left">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="ArrowRight" size="sm" />
              Related Reading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                <Link href="/blog/mcp-stateless-spec-migration-guide" className="project-link">
                  MCP Goes Stateless
                </Link>{" "}
                - if your server still uses HTTP+SSE, fix that before you package it,
                because the transport is deprecated in the plugin schema too.
              </li>
              <li>
                <Link href="/blog/mcp-code-execution-pattern" className="project-link">
                  MCP Code Execution Pattern
                </Link>{" "}
                - bundling servers into plugins makes them easier to install and just
                as expensive in context. This is the counterweight.
              </li>
              <li>
                <Link href="/blog/claude-md-guide" className="project-link">
                  How I Write CLAUDE.md Files That Actually Work
                </Link>{" "}
                - deciding what belongs in a skill and what belongs in project
                instructions.
              </li>
              <li>
                <Link href="/projects/jenkins-mcp" className="project-link">
                  Jenkins MCP Server
                </Link>{" "}
                - the server I packaged for this walkthrough, with the tool surface it
                exposes.
              </li>
              <li>
                <Link href="/blog/hallusquatting-defense-ai-coding-agents" className="project-link">
                  Defending Against HalluSquatting
                </Link>{" "}
                - the attack that plugin marketplaces with implicit trust make easier.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <RelatedPosts slug="agent-plugins-getting-started-guide" />
      <PostNavigation slug="agent-plugins-getting-started-guide" />
    </>
  )
}
