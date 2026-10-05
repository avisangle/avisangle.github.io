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

const SLUG = "macos-full-disk-access-ai-coding-agents"
const POST_URL = `https://avinashsangle.com/blog/${SLUG}`
const OG_IMAGE = `https://avinashsangle.com/og-${SLUG}.png`
const HEADLINE = "Apple's Full Disk Access Change: Audit Your AI Coding Agent"
const DESCRIPTION =
  "Apple is tightening macOS Full Disk Access over AI agents. See how Claude Code inherits it from your terminal, how to audit it, and how to shrink it."
const PUBLISHED = "2026-10-06"

export const metadata: Metadata = {
  // 40 chars: the layout template adds 17, so the rendered title is 57
  title: "macOS Full Disk Access for Coding Agents",
  description: DESCRIPTION,
  keywords: [
    "macOS Full Disk Access",
    "Full Disk Access AI agents",
    "Claude Code Full Disk Access",
    "does Claude Code need Full Disk Access",
    "Terminal Full Disk Access",
    "AI coding agents macOS",
    "Claude Code sandbox macOS",
    "TCC permissions",
    "revoke Full Disk Access Terminal",
    "Apple Full Disk Access change",
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
    publishedTime: "2026-10-06T00:00:00.000Z",
    modifiedTime: "2026-10-06T00:00:00.000Z",
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
    q: "What is Apple changing about macOS Full Disk Access?",
    a: "On October 2, 2026 Apple said it will add controls so a user can grant Full Disk Access only through very explicit action, citing the growing autonomy of AI agents. Apple has not published a date, a macOS version, or a description of how the new controls will look.",
  },
  {
    q: "Does Claude Code need Full Disk Access?",
    a: "No. Claude Code needs nothing special to read and edit your projects. It runs as a child of your terminal, so it gets whatever the terminal has been granted. If your terminal has Full Disk Access, every command Claude runs there can read Mail, Messages and Safari data too.",
  },
  {
    q: "Should I give Terminal Full Disk Access?",
    a: "Only if a specific tool you run needs it, and not as a default. Granting it to your terminal hands that access to every program started there, including AI agents. A separate terminal app used only for tasks that need protected data keeps the grant away from your agent sessions.",
  },
  {
    q: "How do I check which apps have Full Disk Access on a Mac?",
    a: "Open System Settings, then Privacy & Security, then Full Disk Access. The list shows every app with a toggle. Apps you installed years ago and no longer use often still appear there. Turn off anything you don't recognise or no longer need, then relaunch the apps you kept.",
  },
  {
    q: "How do I revoke Full Disk Access from my terminal?",
    a: "Switch the terminal off in System Settings under Privacy & Security, Full Disk Access, then quit and reopen it. From the command line, tccutil reset SystemPolicyAllFiles followed by the app's bundle identifier clears the grant, and the next protected read will prompt again.",
  },
  {
    q: "Does the Claude Code sandbox limit what an agent can read?",
    a: "Only for shell commands, and only when you turn it on. Anthropic's docs say the sandbox is off by default and, once enabled, still lets commands read most of the machine, including ~/.ssh. You restrict reads with sandbox.filesystem.denyRead and allowRead, or credentials entries for secrets.",
  },
  {
    q: "Which Claude Code tools run outside the sandbox?",
    a: "The built-in Read, Edit, Write, WebFetch and WebSearch tools follow permission rules instead. Hooks, local MCP servers, LSP servers and helper commands also run outside it, as do commands you type after the ! prefix and anything in excludedCommands. A denyRead entry does not stop the Read tool.",
  },
  {
    q: "Will Apple's Full Disk Access change break my agent workflow?",
    a: "Nobody outside Apple can say yet, because no mechanism or date has been published. Apple's developer note only warns of stricter prompts. A workflow that never needed Full Disk Access should be unaffected. One that relies on it for a terminal should expect an extra confirmation step.",
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
    "macOS Full Disk Access, Claude Code, AI coding agents, Terminal Full Disk Access, Claude Code sandbox, TCC",
  articleSection: "Claude Code",
  wordCount: 2100,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://avinashsangle.com/blog" },
    { "@type": "ListItem", position: 3, name: "macOS Full Disk Access for Coding Agents", item: POST_URL },
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
  name: "How to audit and shrink an AI coding agent's file access on macOS",
  description:
    "Check which apps hold Full Disk Access, remove it from your terminal, and limit what Claude Code shell commands can read.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "List apps with Full Disk Access",
      text: "Open System Settings, Privacy & Security, Full Disk Access and note every app that is switched on.",
      url: `${POST_URL}#audit-checklist`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Remove Full Disk Access from your terminal",
      text: "Switch the terminal off, or run tccutil reset SystemPolicyAllFiles with its bundle identifier, then relaunch it.",
      url: `${POST_URL}#audit-checklist`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Enable the Claude Code sandbox",
      text: "Run /sandbox in a session or set sandbox.enabled to true in settings.json.",
      url: `${POST_URL}#shrink-access`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Deny reads outside the project",
      text: "Set sandbox.filesystem.denyRead to [\"~/\"] and allowRead to [\".\"] in the project's .claude/settings.json.",
      url: `${POST_URL}#shrink-access`,
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Protect credentials",
      text: "Add sandbox.credentials entries in deny mode for ~/.ssh, ~/.aws/credentials and secret environment variables.",
      url: `${POST_URL}#shrink-access`,
    },
  ],
})

const toc = [
  ["what-is-apple-changing", "What is Apple changing about Full Disk Access?"],
  ["does-claude-code-need-fda", "Does Claude Code need Full Disk Access?"],
  ["what-i-saw", "What I saw on my own Mac"],
  ["what-agents-read", "What can an agent read without Full Disk Access?"],
  ["shrink-access", "How do I shrink an agent's access on macOS?"],
  ["what-will-break", "What will Apple's change break?"],
  ["audit-checklist", "A 15-minute audit checklist"],
  ["faq", "FAQ"],
]

const bashAudit = `# 1. What can this shell read? (run from the terminal you launch agents in)
ls ~/Library/Messages
ls ~/Library/Safari
ls ~/Library/Mail

# 2. Can it read the TCC database that stores the grants?
sqlite3 "$HOME/Library/Application Support/com.apple.TCC/TCC.db" \\
  "select client from access where service='kTCCServiceSystemPolicyAllFiles';"`

const bashOutput = `$ ls ~/Library/Messages
ls: /Users/avinashsangle/Library/Messages: Operation not permitted
$ ls ~/Library/Safari
ls: /Users/avinashsangle/Library/Safari: Operation not permitted
$ ls ~/Library/Mail
ls: /Users/avinashsangle/Library/Mail: Operation not permitted
$ ls ~/.ssh
agent  config  github-app-key.pem`

const tccutilCode = `# Clear the Full Disk Access grant for one app, by bundle identifier
tccutil reset SystemPolicyAllFiles com.googlecode.iterm2

# Find a bundle identifier
osascript -e 'id of app "iTerm"'`

const sandboxJson = `{
  "sandbox": {
    "enabled": true,
    "filesystem": {
      "denyRead": ["~/"],
      "allowRead": ["."]
    },
    "credentials": {
      "files": [
        { "path": "~/.aws/credentials", "mode": "deny" },
        { "path": "~/.ssh", "mode": "deny" }
      ],
      "envVars": [
        { "name": "GITHUB_TOKEN", "mode": "deny" }
      ]
    }
  }
}`

export default function MacosFullDiskAccessAiCodingAgentsPage() {
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
            { label: "macOS Full Disk Access for Coding Agents" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">Claude Code</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{HEADLINE}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            On October 2, 2026 Apple said it will make macOS Full Disk Access harder to grant,
            because of AI agents. It gave no date and no mechanism. Here is what is known, what
            an agent like Claude Code actually inherits from your terminal today, and how to
            shrink that.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> October 6, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 10 min read
            </span>
            <span>-</span>
            <span>Last updated: {PUBLISHED}</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["Full Disk Access", "Claude Code", "macOS Security", "Sandbox", "AI Agents"].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Direct answer + TL;DR */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Apple will require very explicit user action before an app gets macOS Full Disk
            Access, and it named AI agents as the reason. Claude Code doesn&apos;t request the
            permission itself. It inherits whatever your terminal holds. Check that grant, remove
            it if you don&apos;t need it, and turn on the Claude Code sandbox.
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
                  Apple announced the change on 2026-10-02 and has not said when it ships, in which
                  macOS version, or what the new prompt looks like.
                </li>
                <li>
                  Agents run as child processes of your terminal, so a terminal with Full Disk
                  Access gives every agent session that access.
                </li>
                <li>
                  Without Full Disk Access an agent still reads your whole home folder, including
                  SSH keys. The Claude Code sandbox is off by default.
                </li>
                <li>
                  The fix is a 15-minute audit: revoke the grant, enable the sandbox, and deny
                  reads outside the project.
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
        <section id="what-is-apple-changing" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Apple" size="md" />
            What is Apple changing about Full Disk Access?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Apple posted a short note on its developer news page on October 2, 2026. The core
            sentence: &quot;Going forward, we will introduce additional controls to ensure that
            users who genuinely wish to grant an app this extraordinary level of access can only
            do so with very explicit user action.&quot; Apple says some developers use Full Disk
            Access in ways that expose files, mail, messages and browsing history without the
            user&apos;s full understanding, and that as AI agents grow more capable and autonomous,
            the risk &quot;will grow substantially.&quot;{" "}
            <a href="https://developer.apple.com/news/?id=p6zjojqw" className="project-link">
              Apple&apos;s note
            </a>{" "}
            is the primary source. MacRumors, TechCrunch and Help Net Security all covered it
            within three days.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            What the note leaves out matters more than what it says. There is no release date, no
            macOS version, and no description of what an &quot;explicit action&quot; will be. Help
            Net Security says plainly that the company hasn&apos;t detailed how the controls will
            work. Some articles you&apos;ll find online quote a specific beta build or a December
            deadline. I couldn&apos;t trace those to Apple, and they conflict with Apple&apos;s own
            wording, so I&apos;m not repeating them. If Apple publishes specifics, I&apos;ll update
            this post and the date at the top.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Apple&apos;s guidance to developers is also short: review whether you need the
            permission, expect stricter prompts, limit scope, and tell users why you&apos;re
            asking. That is advice for app makers. As someone who runs coding agents, the useful
            question is different: what does my machine already let an agent do?
          </p>
        </section>

        {/* Section 2 */}
        <section id="does-claude-code-need-fda" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            Does Claude Code need Full Disk Access?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            No. Claude Code reads and writes your project folders without it. But it doesn&apos;t
            need to ask, because of how macOS attributes permissions. When you start Claude Code
            from iTerm2, Ghostty or the VS Code terminal, the shell and everything it launches
            run as children of that app. macOS checks protected reads against the app at the top
            of that chain. If the terminal holds Full Disk Access, so does every command in it,
            and no prompt appears for the agent because the agent was never the one asked.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The same holds for Codex CLI, Gemini CLI, Aider, or a script you wrote last year. The
            agent is a convenient way to run commands, and it adds no permissions of its own. That
            also means the grant most people made once, to make a backup tool or a file search
            work, quietly became a grant to every agent they now run.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Editors work the same way. Cursor and VS Code run agents in an integrated terminal that
            belongs to the editor process, so the editor&apos;s grants apply. I haven&apos;t tested
            every editor, so check the specific app you use rather than assuming.
          </p>
        </section>

        {/* Section 3 */}
        <section id="what-i-saw" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="FlaskConical" size="md" />
            What I saw on my own Mac
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            I ran a few reads from the shell Claude Code uses on my machine, which I launch from
            iTerm2. The Mac is on macOS 26.6.2. I haven&apos;t given iTerm2 Full Disk Access, and
            the output shows it.
          </p>

          <CodeBlock language="bash" filename="terminal" code={bashAudit} />
          <CodeBlock language="bash" filename="output" code={bashOutput} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Three protected folders refused me. The TCC database that records the grants also
            refused to open, because reading it needs Full Disk Access itself. My ~/.ssh folder
            listed without complaint. That last line is the one to look at. Full Disk Access
            wasn&apos;t what protected my SSH keys, and its absence didn&apos;t stop me reading them.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One limit on this test: I haven&apos;t run the same commands with the grant switched
            on. Turning Full Disk Access on to prove a point would mean granting an agent session
            exactly what this post warns about. The with-grant behaviour here is what Apple and the
            press describe, and not something I measured.
          </p>
        </section>

        {/* Section 4 */}
        <section id="what-agents-read" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="FolderSearch" size="md" />
            What can an agent read without Full Disk Access?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Most of your home folder. macOS protects a short list of locations: Mail, Messages,
            Safari data, and a few others. Everything else you own is readable by any process you
            start, including <code>~/.ssh</code>, <code>~/.aws</code>, <code>.env</code> files in
            every project, and your shell history. Full Disk Access widens that list to cover the
            protected locations as well.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            So Full Disk Access is the loudest permission, and not the only one worth worrying
            about. Anthropic&apos;s sandbox documentation describes the default read policy for
            sandboxed commands as &quot;most of the machine, including credential files such as
            ~/.ssh and ~/.aws/credentials.&quot; That&apos;s with the sandbox on. With it off, which
            is the default, there is no filesystem boundary around shell commands at all. A
            prompt-injected instruction to cat a key file and send it somewhere has to get past
            your permission prompts and nothing else.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I wrote about how that kind of failure chains together in{" "}
            <Link href="/blog/sandbox-ai-agents-hugging-face-breach" className="project-link">
              the Hugging Face breach post
            </Link>
            , and about the injection side in{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
              hardening agents in CI/CD
            </Link>
            . Full Disk Access is one more door on the same house.
          </p>
        </section>

        {/* Section 5 */}
        <section id="shrink-access" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ShieldCheck" size="md" />
            How do I shrink an agent&apos;s access on macOS?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Do two things: remove Full Disk Access from the terminal you run agents in, and turn on
            the Claude Code sandbox with reads limited to the project. They cover different
            layers. The first is a macOS permission. The second is a boundary the operating system
            enforces around shell commands.
          </p>

          <p className="text-lg leading-relaxed mb-4">First, the grant itself:</p>

          <ol className="list-decimal pl-6 space-y-3 mb-6 text-lg leading-relaxed">
            <li>
              Open System Settings, then Privacy &amp; Security, then Full Disk Access. Switch off
              your terminal and any editor you launch agents from.
            </li>
            <li>
              Quit and reopen the app. The old grant stays in force for a running process, so a
              session you left open still has it.
            </li>
            <li>
              If you do need Full Disk Access for something, give it to a separate app you
              don&apos;t run agents in.
            </li>
          </ol>

          <CodeBlock language="bash" filename="terminal" code={tccutilCode} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            I haven&apos;t run the <code>tccutil</code> line against a real grant, because it would
            have revoked mine. I did confirm the command exists and rejects an unknown bundle
            identifier. It resets the grant for one app, and the next protected read prompts
            again.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Second, the Claude Code sandbox. It is built into Claude Code, uses macOS&apos;s
            Seatbelt framework, and is off until you run <code>/sandbox</code> or set{" "}
            <code>sandbox.enabled</code>. This config, from Anthropic&apos;s{" "}
            <a href="https://code.claude.com/docs/en/sandboxing" className="project-link">
              sandboxing docs
            </a>
            , blocks reads of the home folder except the project, and denies the usual credential
            locations:
          </p>

          <CodeBlock language="json" filename=".claude/settings.json" code={sandboxJson} />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            Put it in the project&apos;s <code>.claude/settings.json</code>. The <code>.</code> in{" "}
            <code>allowRead</code> resolves to the project root there. In{" "}
            <code>~/.claude/settings.json</code> it would resolve to <code>~/.claude</code> and
            your project files would be blocked.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Know where the boundary stops. The sandbox wraps shell commands. Claude&apos;s own Read,
            Edit and Write tools follow permission rules, and a <code>denyRead</code> entry
            doesn&apos;t stop the Read tool. Hooks, local MCP servers and LSP servers run outside it
            with your full access. Commands you type after the <code>!</code> prefix, anything in{" "}
            <code>excludedCommands</code>, and unsandboxed retries Claude asks for also run outside
            it. If you need one boundary around everything, run the whole Claude Code process in a
            container or VM. Anthropic&apos;s{" "}
            <a href="https://code.claude.com/docs/en/sandbox-environments" className="project-link">
              sandbox environments
            </a>{" "}
            page compares the options.
          </p>
        </section>

        {/* Section 6 */}
        <section id="what-will-break" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="TriangleAlert" size="md" />
            What will Apple&apos;s change break?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Nobody knows yet, and I&apos;d rather say that than guess. The one concrete signal is
            that coverage of the announcement expects backup tools to feel it, since they are the
            legitimate users of the permission. Apple&apos;s own developer note says to expect
            stricter prompts.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Here&apos;s how I&apos;m reasoning about it. If your agent workflow works without Full
            Disk Access today, as mine does, an extra confirmation step costs you nothing. If you
            granted it to a terminal years ago and forgot, you&apos;ll probably meet the new prompt
            the first time something needs it, and you can decide then. The people with real work to
            do are the ones whose tooling reads Mail or Messages data on purpose. I&apos;ll update
            this section when Apple publishes the details.
          </p>
        </section>

        {/* Section 7 */}
        <section id="audit-checklist" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="ClipboardCheck" size="md" />
            A 15-minute audit checklist
          </h2>

          <ol className="list-decimal pl-6 space-y-3 mb-6 text-lg leading-relaxed">
            <li>
              Open Full Disk Access in System Settings and write down every app that is on. Remove
              the ones you don&apos;t use.
            </li>
            <li>
              Check your terminal and your editor specifically. Switch them off, relaunch, and run
              your normal agent workflow to see if anything breaks.
            </li>
            <li>
              Run the three <code>ls ~/Library/...</code> commands above from the terminal you use
              for agents. &quot;Operation not permitted&quot; is the result you want.
            </li>
            <li>
              Run <code>/sandbox</code> in Claude Code and enable it, or set{" "}
              <code>sandbox.enabled</code> in settings.
            </li>
            <li>
              Add <code>denyRead</code> for <code>~/</code> with <code>allowRead</code> for the
              project, plus <code>credentials</code> entries for <code>~/.ssh</code>,{" "}
              <code>~/.aws/credentials</code> and any token in your environment.
            </li>
            <li>
              Add the paths your builds really need, such as a package cache, and test a normal
              build. Fix what breaks by allowing a path, not by switching the sandbox off.
            </li>
          </ol>

          <p className="text-lg leading-relaxed mb-6">
            Step six is where people give up, so do it last and do it narrowly. A sandbox that
            you disabled because one cache directory was blocked protects nothing.
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
                For the failure chain that makes a sandbox worth having, read{" "}
                <Link href="/blog/sandbox-ai-agents-hugging-face-breach" className="project-link">
                  Sandbox AI Agents: Lessons From the OpenAI Hugging Face Breach
                </Link>
                . For the CI side,{" "}
                <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">
                  Hardening AI Agents in CI/CD Against Prompt Injection
                </Link>
                . More posts are on the{" "}
                <Link href="/blog" className="project-link">
                  blog index
                </Link>
                .
              </p>
              <p className="text-muted-foreground">
                Sources:{" "}
                <a href="https://developer.apple.com/news/?id=p6zjojqw" className="project-link">
                  Apple Developer
                </a>
                ,{" "}
                <a
                  href="https://www.macrumors.com/2026/10/02/apple-announces-macos-full-disk-access-changes/"
                  className="project-link"
                >
                  MacRumors
                </a>
                ,{" "}
                <a
                  href="https://techcrunch.com/2026/10/02/apple-says-its-tightening-macos-full-disk-access-controls-due-to-new-risks-from-ai-agents/"
                  className="project-link"
                >
                  TechCrunch
                </a>
                ,{" "}
                <a href="https://www.helpnetsecurity.com/2026/10/05/macos-full-disk-access-updates/" className="project-link">
                  Help Net Security
                </a>
                ,{" "}
                <a href="https://code.claude.com/docs/en/sandboxing" className="project-link">
                  Claude Code sandboxing docs
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
