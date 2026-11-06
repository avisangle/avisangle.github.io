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

const SLUG = "deepseek-super-agent-setup-guide"
const POST_URL = `https://avinashsangle.com/blog/${SLUG}`
const OG_IMAGE = `https://avinashsangle.com/og-${SLUG}.png`
const HEADLINE = "How to Set Up DeepSeek Super-Agent (dsh-superagent) Safely"
const DESCRIPTION =
  "Set up DeepSeek Super-Agent (dsh-superagent) step by step: agent GitHub account, gh wrapper, observe mode, and the permission gap other guides miss."
const PUBLISHED = "2026-11-07"
const REPO = "https://github.com/deepseek-ai/dsh-superagent-prototype"
const COMMIT = "8c32a9d"

export const metadata: Metadata = {
  // 39 chars: the layout template adds 17, so the rendered title is 56
  title: "DeepSeek Super-Agent Setup Guide (2026)",
  description: DESCRIPTION,
  keywords: [
    "deepseek super agent setup",
    "dsh-superagent",
    "deepseek super agent",
    "deepseek super agent security",
    "deepseek harness",
    "deepseek super agent vs claude code",
    "how to install dsh-superagent",
    "deepseek super agent github account",
    "deepseek super agent observe mode",
    "proactive coding agent",
    "deepseek super agent public repo",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: HEADLINE,
    description: DESCRIPTION,
    url: POST_URL,
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-11-07T00:00:00.000Z",
    modifiedTime: "2026-11-07T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: HEADLINE }],
  },
  twitter: {
    card: "summary_large_image",
    title: HEADLINE,
    description: DESCRIPTION,
    creator: "@avi_sangle",
    images: [OG_IMAGE],
  },
  alternates: { canonical: POST_URL },
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

const faqs = [
  {
    q: "What is DeepSeek Super-Agent (dsh-superagent)?",
    a: "It's an MIT-licensed research prototype from DeepSeek's Harness team, released October 31, 2026. It runs as a background service for one GitHub repository, turns requests from allowed people into Tickets, and works each Ticket in its own DeepSeek Harness session, usually ending in a pull request. DeepSeek says it is not an official product.",
  },
  {
    q: "Is DeepSeek Super-Agent safe to run on my machine?",
    a: "Not as installed by default. Every session it starts has danger-full-access set in code, runs shell commands without approval as your OS user, and can read your home directory. DeepSeek's own docs say the wrappers are not a security boundary. Run it under a dedicated OS user or in a VM holding only the agent's credentials.",
  },
  {
    q: "Can I use DeepSeek Super-Agent on a public GitHub repository?",
    a: "You can, but I wouldn't start there. The allowed list only gates new work. Once the agent opens a pull request, any human GitHub user who comments on it reaches the working session, and a comment can resume an ended Ticket. On a public repo that means strangers can put text in front of a full-access agent.",
  },
  {
    q: "Why does DeepSeek Super-Agent need a separate GitHub account?",
    a: "It reads requests from that account's GitHub notifications, which a GitHub App doesn't have, so it must be a normal user account. Everything it writes, comments, branches and pull requests, appears under that name. Using your own account would make its work look like yours and give it your credentials.",
  },
  {
    q: "Does DeepSeek Super-Agent need Feishu?",
    a: "No. Feishu, ByteDance's workplace chat app, is an optional second Source. The setup guide recommends GitHub only unless your team already works in Feishu. With GitHub alone, people ask for work by mentioning the agent account in an issue or pull request comment, and it replies in the same thread.",
  },
  {
    q: "What does observe mode do in dsh-superagent?",
    a: "Observe is the default accept mode for proactive work. The agent still assesses messages nobody addressed to it, but a positive assessment is only recorded as \"would accept\" and nothing starts. Explicit requests from allowed people work in every mode. Switch to auto only after you've read what it would have done.",
  },
  {
    q: "How is DeepSeek Super-Agent different from Claude Code's GitHub integration?",
    a: "Claude Code Action runs in a GitHub Actions workflow and only responds to users with write access unless you opt into allowed_non_write_users. dsh-superagent runs as a service on your own machine, polls notifications every minute, works with any model DeepSeek Harness supports, and lets follow-up comments from anyone reach a running Ticket.",
  },
  {
    q: "Why doesn't DeepSeek Super-Agent respond to my mention?",
    a: "Check three things: your login is on the GitHub Source's allowed list, the Source is switched on, and processing isn't paused. Then check how you mentioned it. A mention added by editing an existing issue body is not received. Post a new comment instead and wait for the next one-minute poll.",
  },
]

const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: HEADLINE,
  description: DESCRIPTION,
  image: OG_IMAGE,
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
    knowsAbout: ["Claude Code", "AI Automation", "Model Context Protocol", "DevOps", "Generative AI"],
  },
  publisher: { "@type": "Person", name: "Avinash Sangle", url: "https://avinashsangle.com" },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
  keywords:
    "DeepSeek Super-Agent, dsh-superagent, DeepSeek Harness, proactive coding agent, AI agent security, Claude Code GitHub Actions",
  articleSection: "AI Development",
  wordCount: 3000,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
    { "@type": "ListItem", position: 3, name: "DeepSeek Super-Agent Setup Guide", item: POST_URL },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to set up DeepSeek Super-Agent (dsh-superagent)",
  description:
    "Create the agent's GitHub account, install DeepSeek Harness and the dsh-superagent bundle, configure it, and start it in observe mode.",
  totalTime: "PT1H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Create the agent GitHub account and gh wrapper",
      text: "Create a dedicated GitHub user with write access to the repository, then sign it in through a gh wrapper that uses its own GH_CONFIG_DIR.",
      url: `${POST_URL}#install`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Install DeepSeek Harness and the bundle",
      text: "Install @deepseek-ai/dsh@0.2.1-rc.3, clone the repository, run pnpm install and pnpm build, create the superagent profile and add the bundle as a plugin.",
      url: `${POST_URL}#install`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Write the machine configuration",
      text: "Copy examples/profile.cordis.patch.yml into ~/.dsh/profiles/superagent/ and set an absolute stateDir.",
      url: `${POST_URL}#install`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Start the service",
      text: "Run scripts/dsh-superagent start, then scripts/dsh-superagent status, and open the panel on 127.0.0.1:3082.",
      url: `${POST_URL}#configure`,
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Configure Sources, Policy and Execution",
      text: "Set the repository and agent CLI, add yourself to the allowed list, keep accept mode on observe, and set a prepare command that adds a git worktree per Ticket.",
      url: `${POST_URL}#configure`,
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Send a test request",
      text: "From an allowed account, comment @<agent login> followed by a request on an issue. A Ticket appears within about a minute.",
      url: `${POST_URL}#configure`,
    },
  ],
})

const toc = [
  ["what-is-it", "What is DeepSeek Super-Agent, and what did the headlines get wrong?"],
  ["requirements", "What do you need before installing dsh-superagent?"],
  ["install", "How to install DeepSeek Super-Agent"],
  ["configure", "How to configure and start it"],
  ["permission-gap", "Who can reach the agent once it's working?"],
  ["safer-setup", "A safer DeepSeek Super-Agent setup"],
  ["vs-claude-code", "DeepSeek Super-Agent vs Claude Code GitHub Actions"],
  ["faq", "FAQ"],
]

type Row = string[]

function DataTable({ head, rows }: { head: string[]; rows: Row[] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border">
            {head.map((h) => (
              <th key={h} className="py-3 pr-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-border">
              {r.map((cell, i) => (
                <td
                  key={i}
                  className={i === 0 ? "py-3 pr-4 font-semibold text-foreground" : "py-3 pr-4"}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const probeCode = `node -v; pnpm -v; git --version; tmux -V; python3 --version
gh --version | head -1; dsh --version
gh api user --jq .login     # your own login, for the allowed list`

const ghAgentCode = `mkdir -p ~/.local/bin
cat > ~/.local/bin/gh-agent <<'EOF'
#!/bin/sh
GH_CONFIG_DIR="$HOME/.config/gh-agent" exec gh "$@"
EOF
chmod +x ~/.local/bin/gh-agent

gh-agent auth login            # sign in as the AGENT account, not yours
gh-agent api user --jq .login  # must print the agent's login`

const installCode = `npm install -g @deepseek-ai/dsh@0.2.1-rc.3
git clone https://github.com/deepseek-ai/dsh-superagent-prototype.git dsh-superagent && cd dsh-superagent
pnpm install && pnpm build
dsh superagent --from-default-profile web --dump-config > /dev/null
dsh plugin --profile superagent add "link:$PWD"`

const cordisCode = `- id: webserver
  config:
    host: 127.0.0.1
    port: 3082
- id: dsh-superagent
  config:
    stateDir: /home/me/.dsh/state/superagent   # absolute path`

const startCode = `scripts/dsh-superagent start
scripts/dsh-superagent status
echo $?   # 0 ok, 1 down (restart may help), 2 a part errors, 3 waiting for setup`

const prepareCode = `git -C /home/me/src/widgets fetch --no-tags \\
  "https://github.com/$DSH_SUPERAGENT_GITHUB_REPOSITORY.git" \\
  "\${DSH_SUPERAGENT_GITHUB_PR_HEAD:-HEAD}:refs/dsh-superagent/$DSH_SUPERAGENT_TICKET" &&
git -C /home/me/src/widgets worktree add -b "agent/$DSH_SUPERAGENT_NAME" \\
  "$DSH_SUPERAGENT_DIR" "refs/dsh-superagent/$DSH_SUPERAGENT_TICKET"`

const apiCode = `api=http://127.0.0.1:3082/orchestrator/api
h='x-orchestrator-request: 1'

# Every save needs the block's current revision
rev=$(curl -s -H "$h" $api/settings | jq '.sources[] | select(.id == "github") | .revision')

curl -s -X PUT -H "$h" -H 'content-type: application/json' $api/settings/source:github \\
  -d "{\\"value\\": {\\"enabled\\": true, \\"config\\": {\\"repository\\": \\"acme/widgets\\", \\"cli\\": \\"$HOME/.local/bin/gh-agent\\"}}, \\"revision\\": $rev}"`

const intakeCode = `for (const ticketId of thread.subscriptions) {
  const ticket = this.repo.tickets.get(ticketId)
  // Only a person's message on a non-context thread resumes an ended ticket; bots and CI do not ...
  const followed = !!thread.context?.includes(ticketId)
  const resumes = trigger.human && ticket?.ended?.by !== 'human' && !followed
  if (!ticket || (!liveTicket(ticket) && !resumes)) continue
  reached.set(ticketId, { ticket, context: ... })
}`

const sessionsCode = `// src/app/sessions.ts:152
ctx.permissionPresets.set(result.agent.session, 'danger-full-access')`

const linuxUserCode = `# Linux: a separate user that holds only the agent's credentials
sudo useradd --create-home --shell /bin/bash dsh-agent
sudo -iu dsh-agent
# ...then run every install and gh-agent step above as this user`

export default function DeepseekSuperAgentSetupGuidePage() {
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
            { label: "DeepSeek Super-Agent Setup Guide" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{HEADLINE}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            DeepSeek&apos;s new coding agent sits on your machine, watches a GitHub repo and opens
            pull requests when someone asks. The install is five commands. The part every other
            guide skips is who gets to talk to it after it starts working.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> November 7, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 12 min read
            </span>
            <span>-</span>
            <span>Last updated: {PUBLISHED}</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["DeepSeek", "dsh-superagent", "Coding Agents", "AI Security", "GitHub"].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Direct answer + TL;DR */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            DeepSeek Super-Agent setup takes a dedicated GitHub account for the agent, a separate
            DeepSeek Harness profile, and five install commands. After that you configure it in a
            local panel. Get one setting right before anything else: the allowed list controls who
            can start work, but anyone who comments on the agent&apos;s pull request reaches it.
          </p>

          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="ListChecks" size="sm" />
                TL;DR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list text-lg leading-relaxed">
                <li>
                  dsh-superagent is an MIT research prototype for one github.com repository. It acts
                  on @mentions from an allowed list and records proactive work in observe mode
                  instead of doing it.
                </li>
                <li>
                  You need Node 22.19+, pnpm, git 2.32+, tmux, Python 3.8+, gh 2.48+, DeepSeek
                  Harness 0.2.1-rc.3, a model provider and a second GitHub user account.
                </li>
                <li>
                  Every session runs with <code>danger-full-access</code>, hard-coded. Follow-up
                  comments from any GitHub user reach a working Ticket and can resume an ended one.
                </li>
                <li>
                  Start on a private repo, under a separate OS user, with only yourself on the
                  allowed list and auto-merge off.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="List" size="sm" />
                Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                {toc.map(([id, label]) => (
                  <li key={id}>
                    <Link href={`#${id}`} className="text-accent hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </nav>

        {/* Section 1 */}
        <section id="what-is-it" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Bot" size="md" />
            What is DeepSeek Super-Agent, and what did the headlines get wrong?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            DeepSeek Super-Agent, published as{" "}
            <a href={REPO} className="project-link">
              dsh-superagent-prototype
            </a>
            , is a coding agent that runs as a service next to one GitHub repository instead of in
            your terminal. It&apos;s a plugin bundle for DeepSeek Harness (DSH), the company&apos;s
            open-source agent runtime. When an allowed person mentions the agent&apos;s GitHub
            account, it opens a Ticket, works on it in its own session and directory, and answers in
            the same thread, usually with a pull request. A local web panel shows what needs a
            person.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The design splits work between a main session that judges incoming messages (the
            router, called Eval in the docs) and one worker session per Ticket (the Executor). The
            flow in <code>docs/001-domain.md</code> is Source, Trigger, Thread, Eval, Ticket, then
            Assignment to an Executor. You don&apos;t need the vocabulary to install it, but you do
            need it to read the panel.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            It got attention fast. The repo had 20,210 stars and 2,350 forks by November 7, seven
            days after the first commit, according to GitHub&apos;s API.{" "}
            <a
              href="https://www.bloomberg.com/news/articles/2026-11-01/deepseek-drops-enhanced-coding-agent-with-aim-to-rival-anthropic"
              className="project-link"
            >
              Bloomberg
            </a>{" "}
            framed it as DeepSeek&apos;s challenge to Claude Code, and{" "}
            <a
              href="https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent"
              className="project-link"
            >
              The Next Web
            </a>{" "}
            led with an agent that reads team chats and acts without being asked.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            That second framing is wrong for the code you can download. Out of the box it acts only
            when someone on its allowed list addresses it. Work nobody asked for needs a rule your
            team writes, and even then the default accept mode, <code>observe</code>, only records
            what the agent would have done. The README is also blunt about status: &quot;Research
            prototype for reference only, not an official DeepSeek product,&quot; with much of the
            engineering &quot;done by coding agents.&quot; It differs from DeepSeek&apos;s internal
            version.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One note on how I wrote this. I cloned commit <code>{COMMIT}</code> and read the 2,091
            lines of docs plus the parts of the roughly 15,200 lines of TypeScript that decide who
            reaches the agent. I haven&apos;t run a Ticket end to end yet; that needs a model
            provider key and a second GitHub account I haven&apos;t set up. Where I quote code or
            docs, I give the file. Where I describe behaviour, it comes from those files and not
            from a test run.
          </p>
        </section>

        {/* Section 2 */}
        <section id="requirements" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="PackageCheck" size="md" />
            What do you need before installing dsh-superagent?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            You need a Unix machine with the usual Node tooling, a GitHub repository on github.com,
            a DeepSeek Harness install with a working model, and a second GitHub user account for
            the agent. The full list from <code>SETUP.md</code> and{" "}
            <code>docs/006-deployment.md</code>:
          </p>

          <ul className="skill-list text-lg leading-relaxed mb-6">
            <li>Node.js 22.19+ or 24+, pnpm, git 2.32+, tmux and Python 3.8+</li>
            <li>GitHub CLI 2.48 or later</li>
            <li>
              DeepSeek Harness within the <code>engines.dsh</code> range in{" "}
              <code>package.json</code>, which is <code>^0.2.1-alpha.2</code>; the docs pin the
              public <code>0.2.1-rc.3</code>
            </li>
            <li>A model provider configured in DSH (it uses the profile&apos;s default model)</li>
            <li>A repository on github.com. GitHub Enterprise Server isn&apos;t supported</li>
            <li>git-lfs, if your repository uses LFS</li>
            <li>A dedicated GitHub user account with write access to the repository</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            The setup guide starts with a probe. Run it and fix anything missing before you go on:
          </p>

          <CodeBlock language="bash" filename="terminal" code={probeCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Why a user account and not a GitHub App? The agent finds requests by reading its
            account&apos;s notifications, and Apps don&apos;t get notifications. The deployment doc
            says so directly. It also means everything the agent writes appears under that
            account&apos;s name, which is what you want: its work should look like its work.
          </p>
        </section>

        {/* Section 3 */}
        <section id="install" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Download" size="md" />
            How to install DeepSeek Super-Agent
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Install in three steps: give the agent account its own GitHub CLI, install DSH plus the
            bundle, then write one config file. If you&apos;re going to follow my advice later and
            use a separate OS user, switch to that user now and do all of this as them.
          </p>

          <h3 className="text-2xl font-semibold mb-4">1. A GitHub CLI that only knows the agent</h3>

          <p className="text-lg leading-relaxed mb-6">
            The wrapper points <code>gh</code> at a separate config directory, so the agent&apos;s
            login never mixes with yours. The service later puts a shim named <code>gh</code> first
            on the workers&apos; PATH that calls this wrapper.
          </p>

          <CodeBlock language="bash" filename="terminal" code={ghAgentCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Accept the repository invitation while signed in as the agent account in a browser.
            Setup checks push access later and refuses to start without it.
          </p>

          <h3 className="text-2xl font-semibold mb-4">2. DSH and the bundle</h3>

          <CodeBlock language="bash" filename="terminal" code={installCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            The fourth command creates <code>~/.dsh/profiles/superagent</code> from the DSH Web
            template. It&apos;s a separate profile on purpose: the plugin changes process-wide{" "}
            <code>PATH</code> and git settings, and it needs to restart without closing the sessions
            you work in. Run that command once. On an existing profile it replaces the profile and
            deletes its <code>cordis.patch.yml</code>, so never use it for upgrades.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. Machine configuration</h3>

          <p className="text-lg leading-relaxed mb-6">
            Copy <code>examples/profile.cordis.patch.yml</code> to{" "}
            <code>~/.dsh/profiles/superagent/cordis.patch.yml</code> and fill in the state
            directory. It holds the SQLite database, the command shims, the agent&apos;s git
            config and, by default, every Ticket&apos;s working directory. It can&apos;t be changed
            later from the panel.
          </p>

          <CodeBlock language="yaml" filename="~/.dsh/profiles/superagent/cordis.patch.yml" code={cordisCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            There&apos;s also an assisted route. The README suggests asking your coding agent to
            &quot;Read SETUP.md in this repository and set up dsh-superagent with me.&quot; SETUP.md
            is written for an agent: nine questions, one per message, then a single plan to confirm
            before anything runs. It never asks for a secret in chat. If you use Claude Code or
            Codex daily, that&apos;s a reasonable way to do it, and it&apos;s a nice example of
            setup docs written for agents first.
          </p>
        </section>

        {/* Section 4 */}
        <section id="configure" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="SlidersHorizontal" size="md" />
            How to configure and start it
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Start the service, open the panel at <code>127.0.0.1:3082</code>, choose Superagent in
            the sidebar, and fill in four cards in order: Sources, Policy, Execution, Prompts. Until
            the allowed list has at least one login, no request can become a Ticket.
          </p>

          <CodeBlock language="bash" filename="terminal" code={startCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            The start script runs <code>dsh --profile superagent</code> inside a tmux session named{" "}
            <code>dsh-superagent</code> and waits up to a minute. The exit codes matter for
            automation, because a restart only fixes code 1:
          </p>

          <DataTable
            head={["Exit code", "Meaning", "Does a restart help?"]}
            rows={[
              ["0", "Running normally", "Not needed"],
              ["1", "Not running, running twice, not answering, or a runtime error", "Maybe"],
              ["2", "Running, but a Source or allowed-list sync reports an error", "No"],
              ["3", "Running and waiting for setup (the output says what's missing)", "No"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-4">Then the cards:</p>

          <ol className="list-decimal pl-6 space-y-3 mb-6 text-lg leading-relaxed">
            <li>
              Sources. Set the repository as <code>owner/name</code> and the agent CLI as an
              absolute path, such as <code>/home/me/.local/bin/gh-agent</code>. Leave the four
              observe switches (all new issues, PRs, comments, CI) off.
            </li>
            <li>
              Policy. Add your own GitHub login under the GitHub Source&apos;s allowed list. Leave
              accept mode on <code>observe</code>.
            </li>
            <li>
              Execution. Set a prepare command that gives each Ticket its own git worktree, and list
              any personal CLIs (one signed in as you, for example) as blocked commands.
            </li>
            <li>
              Prompts. Set the commit author and the auto-merge condition. I&apos;d delete the
              auto-merge paragraph for now so people merge everything.
            </li>
          </ol>

          <p className="text-lg leading-relaxed mb-6">
            The prepare command from the deployment doc fetches the right ref and adds a worktree on
            an <code>agent/</code> branch. Swap in the path to your own clone:
          </p>

          <CodeBlock language="bash" filename="Execution → prepare command" code={prepareCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Everything in the panel goes through a local HTTP API, which is handy if you&apos;d
            rather script it. Requests need the <code>x-orchestrator-request: 1</code> header and
            the block&apos;s current revision, and a save that changes an account can restart the
            service:
          </p>

          <CodeBlock language="bash" filename="terminal" code={apiCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            To test, comment <code>@your-agent-login fix the typo in README</code> on an issue from
            your allowed account. The GitHub Source polls once a minute by default, so a Ticket
            should show up on the overview within about that long. If nothing happens, check that
            you posted a new comment. A mention added by editing an existing issue body isn&apos;t
            received, which is the first thing most people will trip over.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One last operational detail: the docs recommend an hourly health check scheduled from
            your normal DSH profile, not from the superagent profile, so it still runs when the
            service is down. It calls <code>status</code> and restarts only on exit code 1, using{" "}
            <code>--respect-stop</code> so a deliberate stop stays stopped.
          </p>
        </section>

        {/* Section 5 */}
        <section id="permission-gap" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldAlert" size="md" />
            Who can reach the agent once it&apos;s working?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The allowed list decides who can start a Ticket. It doesn&apos;t decide who can talk to
            one. Once a Ticket exists, every message on the threads it&apos;s subscribed to reaches
            its Executor, from anyone. A human&apos;s comment can also wake a Ticket that already
            ended. Most of what I&apos;d change about the default setup follows from that.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The docs say it plainly. <code>docs/001-domain.md</code> describes a Subscription as
            delivering a matching Trigger &quot;to every live subscribed Ticket, with no check of who
            sent it.&quot; <code>docs/002-authorization.md</code> adds that a person&apos;s message
            on one of a Ticket&apos;s own threads &quot;can resume the same work without a new Eval
            or Decision, regardless of who sent it.&quot; The agent&apos;s pull request is one of
            those threads, and the subscription survives after the PR merges or closes.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The code matches. This is the loop in <code>src/core/intake.ts</code> that decides which
            Tickets a new message reaches:
          </p>

          <CodeBlock language="typescript" filename="src/core/intake.ts (excerpt)" code={intakeCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            The only conditions are that the sender is human, nobody stopped the Ticket by hand, and
            the thread isn&apos;t one the Executor follows just for context. The allowed list
            doesn&apos;t appear. On GitHub, &quot;human&quot; means any login that isn&apos;t a bot
            and isn&apos;t the agent itself (<code>src/sources/github-trigger.ts</code>).
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Now put that next to what the Executor can do. Every session the bundle creates gets
            this, in code, with no setting to change it:
          </p>

          <CodeBlock language="typescript" filename="src/app/sessions.ts" code={sessionsCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            The deployment doc spells out what that means: workers run commands without approval as
            your OS user, &quot;can execute programs by path and read the operator&apos;s home
            directory.&quot; Blocked commands are shims matched by name, and{" "}
            <code>docs/003-execution.md</code> says the wrappers &quot;establish defaults, not a
            security boundary.&quot;
          </p>

          <p className="text-lg leading-relaxed mb-6">
            So on a public repository, a stranger can comment on the agent&apos;s pull request and
            that text lands in a full-access session on your machine. The design&apos;s answer is
            the Mandate: the Executor is told the scope it was granted and should hand back anything
            outside it. That&apos;s an instruction to a model, and models follow injected
            instructions some of the time.{" "}
            <a
              href="https://matrix.tencent.com/en/2026/08/20/deepseek-harness-agent-injection-risk"
              className="project-link"
            >
              Tencent&apos;s Zhuque Lab
            </a>{" "}
            measured this on DeepSeek Harness itself in August 2026: across 14,560 real runs, 5.6%
            of injection attempts fully succeeded, 16.6% for the fake-completion technique, and 25.5%
            for hidden-Unicode text delivered in files. That study predates this bundle and used{" "}
            <code>deepseek-v4-flash</code>, so treat it as a base rate, not a measurement of
            dsh-superagent.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            To be fair to DeepSeek, the host does real work to shrink the blast radius. Setup strips
            environment variables whose names contain KEY, PASSWORD, SECRET or TOKEN, removes{" "}
            <code>GH_TOKEN</code> and <code>GITHUB_TOKEN</code>, replaces your global git config
            with one that only knows the agent&apos;s credentials, and fails any Ticket whose clone
            adds its own credentials. The agent never enables auto-merge as itself, and the default
            auto-merge rule needs approvals and fewer than 200 changed lines. None of that stops a
            shell command from reading <code>~/.ssh</code>. I covered how that kind of chain plays
            out in{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
              hardening AI agents in CI/CD against prompt injection
            </Link>
            .
          </p>
        </section>

        {/* Section 6 */}
        <section id="safer-setup" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldCheck" size="md" />
            A safer DeepSeek Super-Agent setup
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Isolate the process first, then narrow who can reach it. DeepSeek&apos;s own advice is
            &quot;for isolation, use a dedicated OS account containing only the agent&apos;s
            credentials,&quot; and that&apos;s the step I&apos;d never skip. Here&apos;s the order
            I&apos;d set it up in:
          </p>

          <ol className="list-decimal pl-6 space-y-3 mb-6 text-lg leading-relaxed">
            <li>
              Run it as a separate OS user, or in a VM, that holds nothing but the agent&apos;s
              GitHub login and model key. Not your laptop account.
            </li>
            <li>
              Point it at a private repository first. Outsiders can&apos;t comment there, which
              closes the gap above for now.
            </li>
            <li>Keep the allowed list to yourself until you&apos;ve read a week of its work.</li>
            <li>
              Leave accept mode on <code>observe</code> and read the &quot;would accept&quot;
              decisions before you consider <code>auto</code>.
            </li>
            <li>Turn auto-merge off. People merge.</li>
            <li>
              Add your personal CLIs to blocked commands anyway. A path still bypasses them, but
              they stop the accidental case.
            </li>
            <li>
              Back up <code>&lt;stateDir&gt;/orchestrator.sqlite</code> before each upgrade. A
              migrated database won&apos;t open in an older version.
            </li>
          </ol>

          <CodeBlock language="bash" filename="terminal" code={linuxUserCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            On macOS, create a standard user in System Settings and log in to it, or run the whole
            thing in a Linux VM. Don&apos;t give that user&apos;s terminal Full Disk Access; I wrote
            about why in{" "}
            <Link href="/blog/macos-full-disk-access-ai-coding-agents" className="project-link">
              the macOS Full Disk Access post
            </Link>
            . For more on choosing a boundary, the{" "}
            <Link href="/blog/sandbox-ai-agents-hugging-face-breach" className="project-link">
              agent sandboxing guide
            </Link>{" "}
            compares containers, VMs and OS-level sandboxes.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you must run it on a public repo, accept that every pull request it opens is a place
            where outsiders can talk to it. Stop finished Tickets from the panel rather than letting
            them end on their own. A Ticket a person stopped &quot;receives nothing&quot; afterwards,
            per the intake code above, so a stray comment can&apos;t revive it.
          </p>
        </section>

        {/* Section 7 */}
        <section id="vs-claude-code" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompare" size="md" />
            DeepSeek Super-Agent vs Claude Code GitHub Actions
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            They solve the same request, &quot;mention the bot on an issue and get a PR,&quot; from
            opposite ends. Claude Code Action runs per event in a GitHub Actions workflow and only
            listens to people with write access. dsh-superagent is a long-running service on a
            machine you own, with its own memory of Tickets and its own idea of who may ask.
          </p>

          <DataTable
            head={["", "dsh-superagent", "Claude Code Action"]}
            rows={[
              ["Where it runs", "A service on your machine, in tmux", "A GitHub Actions runner, per event"],
              ["How it hears requests", "Polls the agent account's notifications (1 min default)", "Workflow triggers on GitHub events"],
              ["Who can start work", "Logins on the allowed list", "Users with write access"],
              ["Outsiders' follow-ups", "Reach a live Ticket; can resume an ended one", "Ignored unless you set allowed_non_write_users"],
              ["Command approval", "None: danger-full-access, hard-coded", "Limited by the tools you allow in the workflow"],
              ["Models", "Any provider DeepSeek Harness supports", "Claude"],
              ["Chat source", "Feishu (optional)", "None built in"],
              ["Status", "Research prototype, v0.1.0", "Maintained Anthropic GitHub Action"],
            ]}
          />

          <p className="text-lg leading-relaxed mb-6">
            The row that matters is outsiders&apos; follow-ups. Anthropic&apos;s{" "}
            <a
              href="https://github.com/anthropics/claude-code-action/blob/main/docs/security.md"
              className="project-link"
            >
              security doc for the action
            </a>{" "}
            checks write access on issue, pull request, comment and review events, and calls the
            opt-out <code>allowed_non_write_users</code> &quot;a significant security risk.&quot;
            When you do opt out, it scrubs secrets from subprocess environments and tells you to use
            the short-lived <code>GITHUB_TOKEN</code>. dsh-superagent gives outsiders that reach on
            any Ticket&apos;s threads without being asked.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            On speed, the only head-to-head I found is one{" "}
            <a
              href="https://pub.towardsai.net/i-raced-deepseeks-new-agent-against-claude-code-37-seconds-vs-73-02d9ce10c4e9"
              className="project-link"
            >
              Towards AI write-up
            </a>{" "}
            that raced both on a small two-bug repo: 37 seconds for Claude Code, 73 for
            Super-Agent, with the same four-line fix. The author put most of the gap down to the
            one-minute poll. One repo, one person, so I wouldn&apos;t read much into it.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Where dsh-superagent is more interesting is the model choice and the persistent Ticket
            model. If you already route Claude Code through cheaper models, as I described in the{" "}
            <Link href="/blog/deepseek-v4-flash-agentic-coding-guide" className="project-link">
              DeepSeek V4 Flash guide
            </Link>{" "}
            and the{" "}
            <Link href="/blog/deepseek-v4-1-flash-multimodal-coding-guide" className="project-link">
              V4.1 Flash follow-up
            </Link>
            , a self-hosted agent that keeps context across a whole issue thread is worth trying. On a
            private repo, under its own user, with you on the allowed list.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="MessageCircleQuestion" size="md" />
            FAQ
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i + 1}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Closing CTA */}
        <section id="more-reading" className="mb-8">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="BookOpen" size="sm" />
                Keep going
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-4">
                For GitHub-native agents with tighter defaults, see{" "}
                <Link href="/blog/claude-code-security-review-github-actions" className="project-link">
                  Claude Code security review in GitHub Actions
                </Link>{" "}
                and{" "}
                <Link href="/blog/codex-security-github-setup" className="project-link">
                  the Codex Security GitHub setup
                </Link>
                . For isolating any agent that runs commands, start with{" "}
                <Link href="/blog/sandbox-ai-agents-hugging-face-breach" className="project-link">
                  the sandboxing guide
                </Link>
                . Everything else is on the{" "}
                <Link href="/blog" className="project-link">
                  blog index
                </Link>
                .
              </p>
              <p className="text-muted-foreground">
                Sources:{" "}
                <a href={REPO} className="project-link">
                  dsh-superagent-prototype (commit {COMMIT})
                </a>
                ,{" "}
                <a href={`${REPO}/blob/main/docs/006-deployment.md`} className="project-link">
                  006 Deployment
                </a>
                ,{" "}
                <a href={`${REPO}/blob/main/docs/002-authorization.md`} className="project-link">
                  002 Authorization
                </a>
                ,{" "}
                <a
                  href="https://matrix.tencent.com/en/2026/08/20/deepseek-harness-agent-injection-risk"
                  className="project-link"
                >
                  Tencent Zhuque Lab
                </a>
                ,{" "}
                <a
                  href="https://github.com/anthropics/claude-code-action/blob/main/docs/security.md"
                  className="project-link"
                >
                  claude-code-action security
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <RelatedPosts slug={SLUG} />
      <PostNavigation slug={SLUG} />
    </>
  )
}
