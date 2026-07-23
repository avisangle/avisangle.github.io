import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { PostNavigation } from "@/components/post-navigation"

export const metadata: Metadata = {
  title: "Stop HalluSquatting in AI Coding Agents",
  description:
    "HalluSquatting turns AI hallucinations into malware delivery. How to harden Claude Code with sandboxing, hooks, and lockfile policy to block it.",
  keywords: [
    "hallusquatting",
    "hallusquatting defense",
    "ai coding agent hallucinated package defense",
    "slopsquatting prevention",
    "slopsquatting",
    "claude code sandbox security",
    "verify package before install ai agent",
    "ai agent supply chain security",
    "hallucinated npm package",
    "agentic botnet",
    "pretooluse hook",
    "claude code hooks security",
    "npm ignore-scripts",
    "agent skills security",
    "package hallucination attack",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "How to Defend AI Coding Agents Against HalluSquatting Attacks",
    description:
      "HalluSquatting turns AI hallucinations into malware delivery. How to harden Claude Code with sandboxing, hooks, and lockfile policy to block it.",
    url: "https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-07-15T00:00:00.000Z",
    modifiedTime: "2026-07-15T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-hallusquatting-defense-ai-coding-agents.png",
        width: 1200,
        height: 630,
        alt: "Defending AI Coding Agents Against HalluSquatting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Defend AI Coding Agents Against HalluSquatting Attacks",
    description:
      "HalluSquatting turns AI hallucinations into malware delivery. How to harden Claude Code with sandboxing, hooks, and lockfile policy to block it.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-hallusquatting-defense-ai-coding-agents.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents",
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

export default function HalluSquattingDefenseBlogPage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "How to Defend AI Coding Agents Against HalluSquatting Attacks",
            description:
              "HalluSquatting turns AI hallucinations into malware delivery. How to harden Claude Code with sandboxing, hooks, and lockfile policy to block it.",
            image: "https://avinashsangle.com/og-hallusquatting-defense-ai-coding-agents.png",
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
            datePublished: "2026-07-15",
            dateModified: "2026-07-15",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents",
            },
            keywords:
              "hallusquatting, slopsquatting, ai coding agent hallucinated package defense, claude code sandbox security, ai agent supply chain security, pretooluse hook, agent skills security",
            articleSection: "AI Security",
            wordCount: 3700,
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "HalluSquatting Defense for AI Coding Agents",
                item: "https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents",
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is HalluSquatting and how is it different from slopsquatting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HalluSquatting is slopsquatting made targeted and repeatable. Slopsquatting registers whatever names models happen to invent. HalluSquatting computes the model's hallucination distribution for a chosen trending resource, pre-registers the top result, and hosts an adversarial prompt there. The arXiv paper reports end-to-end remote code execution in 20-65% of runs.",
                },
              },
              {
                "@type": "Question",
                name: "Is Claude Code vulnerable to HalluSquatting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Claude Code was not one of the nine applications tested in the paper. The models were, and the results split sharply: claude-4.5-opus searched before fetching in 73% of runs and hallucinated 0% of the time, while claude-4.5-sonnet searched in only 31% and hit 100% hallucination when it skipped. That is a tendency, not a guarantee.",
                },
              },
              {
                "@type": "Question",
                name: "Do lockfiles protect against hallucinated packages?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mostly no. A lockfile pins dependencies you already track, and npm ci refuses to re-resolve them. But a hallucinated package is a brand-new dependency the agent is adding for the first time, so there is no lockfile entry to protect it. The attack lands before the lockfile has any say.",
                },
              },
              {
                "@type": "Question",
                name: "Does npm's min-release-age cooldown stop this attack?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rarely. Cooldowns assume the malicious version was published recently, which holds for compromised-maintainer attacks. A hallusquatter registers the name early and waits for models to catch up. By the time an agent fetches it, the package is months old and clears any three-day cooldown without trouble.",
                },
              },
              {
                "@type": "Question",
                name: "How do I make an AI agent verify a package exists before installing it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use a PreToolUse hook rather than a CLAUDE.md rule. The hook parses the Bash command, checks the name against the registry with npm view or the PyPI JSON API, and exits 2 to block on a 404. Hooks run outside the model loop, so an injected prompt cannot argue with them.",
                },
              },
              {
                "@type": "Question",
                name: "Can a permission prompt stop a hallucinated package install?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not reliably. The paper found no assistant refused execution based on payload content, even for a variant carrying explicit AI-targeting markers. A prompt shows you a plausible package name that looks like something you meant to install. Approval fatigue does the rest. Prompts are a speed bump, not a control.",
                },
              },
              {
                "@type": "Question",
                name: "Are Claude Code Agent Skills safe to install from GitHub?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Treat them as executable code, not documentation. Aikido traced react-codeshift to 47 LLM-generated skills committed without review in October 2025. The hallucinated name reached 237 GitHub repositories through forks and copy-paste before anyone claimed it on npm. Grep any skill you install for install and clone commands.",
                },
              },
              {
                "@type": "Question",
                name: "Does sandboxing stop HalluSquatting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It contains the damage rather than preventing the fetch. Claude Code's sandbox uses bubblewrap on Linux and seatbelt on macOS to restrict filesystem and network access for Bash and its child processes. A postinstall script that cannot reach the attacker's domain cannot stage a botnet. It does not restrict WebFetch.",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "HalluSquatting Defense for AI Coding Agents" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div>
            <p className="text-accent font-semibold mb-4">AI SECURITY</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              How to Defend AI Coding Agents Against HalluSquatting Attacks
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              HalluSquatting works because your agent guesses a package name and an attacker already
              registered the guess. Lockfiles and install cooldowns will not save you, because both
              assume the dependency is already tracked. The fix is to block the fetch before it
              happens: force search-before-fetch, verify names with a hook, and sandbox egress.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Calendar" size="sm" /> July 15, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Clock" size="sm" /> 12 min read
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Tag" size="sm" /> AI Security, Claude Code, Supply Chain
              </span>
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
                <li>
                  <strong>The attack:</strong> attackers compute which names an LLM predictably
                  invents for a trending tool, register those names first, and host a malicious
                  prompt there. Researchers measured a{" "}
                  <strong>92.4% hallucination rate for repositories published in 2025</strong> and
                  end-to-end remote code execution in 20-65% of runs.
                </li>
                <li>
                  <strong>Your existing defenses miss it:</strong> lockfiles protect dependencies you
                  already have, and cooldowns assume the bad version is new. A hallusquatter registers
                  early and waits. The attack is won at resolution time, upstream of both.
                </li>
                <li>
                  <strong>What actually works:</strong> search-before-fetch, a{" "}
                  <code>PreToolUse</code> hook that checks the registry and exits 2 on a 404,{" "}
                  <code>ignore-scripts=true</code>, and an OS-level sandbox so a bad fetch cannot
                  reach the network.
                </li>
                <li>
                  <strong>Claude Code was not one of the nine tested apps</strong>, despite how the
                  news read. The models were: <code>claude-4.5-opus</code> searched first in 73% of
                  runs and hallucinated 0%, while <code>claude-4.5-sonnet</code> searched in 31% and
                  hit 100% when it skipped. That is a habit, not a control.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section py-8">
        <div className="container-project">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="List" size="sm" /> Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2">
                <li>
                  <Link href="#what-is-hallusquatting" className="text-accent hover:underline">
                    What HalluSquatting Actually Is
                  </Link>
                </li>
                <li>
                  <Link href="#newer-tools" className="text-accent hover:underline">
                    The Newer the Tool, the More Likely Your Agent Invents Its Name
                  </Link>
                </li>
                <li>
                  <Link href="#why-defenses-fail" className="text-accent hover:underline">
                    Why Lockfiles and Install Cooldowns Do Not Stop This
                  </Link>
                </li>
                <li>
                  <Link href="#search-before-fetch" className="text-accent hover:underline">
                    Force Search Before Fetch
                  </Link>
                </li>
                <li>
                  <Link href="#verify-hook" className="text-accent hover:underline">
                    Verify the Package Exists With a PreToolUse Hook
                  </Link>
                </li>
                <li>
                  <Link href="#sandbox" className="text-accent hover:underline">
                    Sandbox the Agent So a Bad Fetch Cannot Phone Home
                  </Link>
                </li>
                <li>
                  <Link href="#install-path" className="text-accent hover:underline">
                    Lock Down the Install Path Itself
                  </Link>
                </li>
                <li>
                  <Link href="#agent-skills" className="text-accent hover:underline">
                    Treat Agent Skills as Executable Code
                  </Link>
                </li>
                <li>
                  <Link href="#limits" className="text-accent hover:underline">
                    What This Still Cannot Fix
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-accent hover:underline">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 1 */}
      <section id="what-is-hallusquatting" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What HalluSquatting Actually Is</h2>
          <p className="text-lg leading-relaxed mb-6">
            HalluSquatting is a supply chain attack that targets your agent&apos;s guesses instead of
            your typos. It was named in{" "}
            <Link
              href="https://arxiv.org/abs/2607.07433"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              &quot;Beware of Agentic Botnets&quot;
            </Link>
            , published on July 8, 2026 by researchers from Tel Aviv University, the Technion, and
            Intuit. The recipe is three steps: identify a trending resource, compute the LLM&apos;s
            probability distribution over the names it hallucinates for that resource, then
            pre-register the highest-probability fakes and host an adversarial prompt on them.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Then the attacker waits. When you ask your assistant to clone that trending repo or
            install that trending skill, it reaches for the name it invented, finds the
            attacker&apos;s payload sitting there, and pulls the poisoned content into its own
            context. From there it is indirect prompt injection, and the paper measured{" "}
            <strong>end-to-end remote code execution in 20-65% of runs</strong> across the coding
            assistants tested.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The distinction from slopsquatting matters. Slopsquatting, coined by Seth Larson in 2025,
            is opportunistic: register whatever nonsense models happen to emit and hope someone
            installs it. HalluSquatting is targeted and transferable. The adversarial trigger makes
            models hallucinate a name the attacker <em>chose</em>, and it works across vendors. That
            turns a random accident into a repeatable delivery mechanism.
          </p>
          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="AlertTriangle" size="sm" /> The part that makes it scale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The attacker needs exactly two capabilities: the ability to see what is trending, and
                the ability to register a public name. No access to your repository, your CI, or your
                prompts. They publish a name and wait for your agent to walk into it, which is why the
                paper classes it as an <em>untargeted</em> promptware attack. There is nothing to
                detect on your side until it fires.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2 */}
      <section id="newer-tools" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            The Newer the Tool, the More Likely Your Agent Invents Its Name
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            This is the finding that reframed the whole thing for me, and almost none of the news
            coverage mentioned it. Repositories published in 2025 carry a{" "}
            <strong>92.4% mean hallucination rate</strong> across the six LLMs tested. Repositories
            from before 2019 sit at <strong>0.9%</strong>.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Read those two numbers together and the security intuition inverts. Recency and
            hallucination are the same axis: a training cutoff means the model has read plenty about
            tools that existed for years and nearly nothing about the one that trended last week. So
            the resource you are <em>most</em> likely to ask an agent to fetch is the one it is{" "}
            <em>least</em> able to name correctly.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Which is precisely where the attacker sets up. They are not squatting stable, well-known
            package names, because the model already knows those. They squat this week&apos;s trending
            tool, where hallucination is close to a coin flip in their favour. The skill numbers are
            worse than the repo numbers: 90.7% of skill-installation trials (127 of 140) resolved to a
            slug an attacker could have registered, rising to{" "}
            <strong>100% for skills with non-English display names</strong>. So &quot;just ask the
            agent for the popular one&quot; is the worst available heuristic. It aims your agent at
            the part of the name space where it is guessing hardest.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="why-defenses-fail" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Why Lockfiles and Install Cooldowns Do Not Stop This
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Every npm hardening guide published in 2026 tells you the same things: commit your
            lockfile, run <code>npm ci</code>, turn on a cooldown so you never install a version
            published five minutes ago. That advice is good. It is also aimed at a different attack,
            and against HalluSquatting most of it does nothing.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The reason is structural. Every control in that list operates <em>after</em> a dependency
            has been resolved and recorded. HalluSquatting wins during resolution, when your agent
            decides what name to reach for in the first place. By the time your lockfile has an
            opinion, the decision has already been made.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold">Defense</th>
                  <th className="py-3 pr-4 font-semibold">What it assumes</th>
                  <th className="py-3 font-semibold">Why HalluSquatting walks past it</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">
                    <code>npm ci</code> / lockfile
                  </td>
                  <td className="py-3 pr-4">The dependency is already tracked</td>
                  <td className="py-3">
                    The agent is <em>adding</em> a brand-new one. There is no entry to check against.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">
                    <code>min-release-age</code>
                  </td>
                  <td className="py-3 pr-4">The malicious version was published recently</td>
                  <td className="py-3">
                    The attacker registered months ago and waited. It clears the cooldown.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">Typosquat scanners</td>
                  <td className="py-3 pr-4">The name is a near-miss of a real package</td>
                  <td className="py-3">
                    <code>react-codeshift</code> is a plausible hybrid of two real packages, not a
                    typo of either.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">SBOM</td>
                  <td className="py-3 pr-4">You audit what you shipped</td>
                  <td className="py-3">
                    Tells you after the <code>postinstall</code> script already ran.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Permission prompt</td>
                  <td className="py-3 pr-4">A human will recognise a wrong name</td>
                  <td className="py-3">
                    The name looks perfectly reasonable. That is the entire point of the attack.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            I want to be fair to these controls. Cooldowns and lockfiles are genuinely effective
            against compromised-maintainer attacks, where a legitimate package suddenly ships a
            malicious version. Keep them. Just do not mistake them for coverage here, because the
            threat model is inverted: there is no legitimate package to compromise, only a name your
            model invented. (Worth disambiguating one word: when I{" "}
            <Link
              href="/blog/regression-proofing-claude-code-workflows#pin-cli"
              className="text-accent hover:underline"
            >
              pin the Claude Code CLI
            </Link>{" "}
            to a known-good version, that is a reliability control. This post is about integrity.
            Same verb, unrelated problems.)
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="search-before-fetch" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Force Search Before Fetch</h2>
          <p className="text-lg leading-relaxed mb-6">
            The paper&apos;s headline mitigation is almost embarrassingly simple: make the assistant
            look the thing up before it goes and gets it. A real search grounds the agent in what
            exists, and the numbers behind it are not subtle. Cursor CLI, when it searched before
            cloning, got the right slug 93.4% of the time. When it skipped the search,{" "}
            <strong>99.1% of its outcomes were hallucinated</strong>.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Now the part the news cycle got wrong, and it cuts both ways.{" "}
            <strong>Claude Code was not one of the nine applications tested.</strong> The nine were
            Cursor IDE, Cursor CLI, Gemini CLI, Windsurf, GitHub Copilot Chat, Cline, and three
            personal assistants (OpenClaw, ZeroClaw, NanoClaw). Headlines saying &quot;nine AI coding
            assistants compromised&quot; are stretching it: three of them are not coding assistants at
            all.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            What the researchers did test is the underlying models, and that result is the most useful
            thing in the paper for anyone running Claude Code. <code>claude-4.5-opus</code> searched
            before fetching in 73% of runs and hallucinated <strong>0% of the time</strong>. Its
            sibling <code>claude-4.5-sonnet</code> searched in only 31% of runs, and when it skipped
            the search it hallucinated <strong>100% of the time</strong>.
          </p>
          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Info" size="sm" /> Do not read that as a Claude victory lap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Two models from the same vendor, three weeks apart in capability, and a 100-point
                spread in outcome. The thing protecting Opus is a <em>habit</em>, not a control. It
                searches most of the time. Most of the time is not a security boundary, and the 27% of
                runs where it did not search are exactly the runs an attacker is playing for.
              </p>
            </CardContent>
          </Card>
          <p className="text-lg leading-relaxed mb-6">
            You can nudge the habit by telling the agent to search first, and it helps. It is not
            enough. The paper is blunt that prompt framing has no safe configuration:{" "}
            <em>every prompt category tested had at least one model that hallucinated above 50%</em>.
            A <code>CLAUDE.md</code> rule is advisory text that the model weighs against everything
            else in its context, which is a bad property for a control whose whole job is to survive
            an injected prompt. I have{" "}
            <Link href="/blog/claude-md-guide" className="text-accent hover:underline">
              argued this before about CLAUDE.md
            </Link>
            : if a rule genuinely must hold, it belongs in a hook, not a markdown file. This is the
            clearest example I have found of that principle.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="verify-hook" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Verify the Package Exists With a PreToolUse Hook
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            A <code>PreToolUse</code> hook is the enforcement version of &quot;search before you
            fetch.&quot; It runs after Claude builds the tool parameters and before the command
            executes, it costs zero tokens, and it does not care what the model believes. An injected
            prompt can talk Claude out of a markdown rule. It cannot talk a shell script out of
            returning exit code 2. Wire it to the <code>Bash</code> tool:
          </p>
          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/verify-package.sh"
          }
        ]
      }
    ]
  }
}`}
          />
          <p className="text-lg leading-relaxed mt-6 mb-6">
            The hook receives the tool call as JSON on stdin. It pulls out the command, extracts any
            package or repo names, checks each one against the real registry, and blocks on a 404.
            Exit code 2 blocks the action and feeds stderr back to Claude as the reason, so the model
            learns why it was stopped and can correct itself.
          </p>
          <CodeBlock
            language="bash"
            filename="~/.claude/hooks/verify-package.sh"
            code={`#!/usr/bin/env bash
# Blocks installs and clones of names that do not resolve on the registry.
set -uo pipefail

INPUT=$(cat)
CMD=$(printf '%s' "$INPUT" | jq -r '.tool_input.command // empty')
LOG="$HOME/.claude/fetch-audit.log"

record() { printf '%s\\t%s\\t%s\\t%s\\n' "$(date -u +%FT%TZ)" "$2" "$1" "$CMD" >> "$LOG"; }

deny() {
  record DENY "$1"
  echo "Blocked: '$1' does not resolve. Search for the real name before fetching it." >&2
  exit 2   # 2 = block the tool call, stderr goes back to Claude
}

# npm / npx / pnpm / bun
for pkg in $(printf '%s' "$CMD" \\
  | grep -oE '\\b(npm i|npm install|npx|bunx|pnpm add) +[@a-zA-Z0-9/._-]+' \\
  | awk '{print $NF}'); do
  npm view "$pkg" version >/dev/null 2>&1 && record ALLOW "$pkg" || deny "$pkg"
done

# pip
for pkg in $(printf '%s' "$CMD" \\
  | grep -oE '\\bpip3? install +[a-zA-Z0-9._-]+' \\
  | awk '{print $NF}'); do
  curl -sf -o /dev/null "https://pypi.org/pypi/$pkg/json" && record ALLOW "$pkg" || deny "$pkg"
done

# git clone / GitHub slugs
for repo in $(printf '%s' "$CMD" \\
  | grep -oE 'github\\.com[:/][A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+' \\
  | sed -E 's#github\\.com[:/]##; s#\\.git$##'); do
  gh repo view "$repo" >/dev/null 2>&1 && record ALLOW "$repo" || deny "$repo"
done

exit 0   # 0 = no decision, normal permission flow applies`}
          />
          <p className="text-lg leading-relaxed mt-6 mb-6">
            If you prefer structured output over exit codes, return a JSON decision on stdout instead.
            This is the form to use when you want the denial reason surfaced cleanly rather than as
            raw stderr:
          </p>
          <CodeBlock
            language="json"
            filename="hook stdout (structured form)"
            code={`{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Package 'react-codeshift' does not exist on npm"
  }
}`}
          />
          <p className="text-lg leading-relaxed mt-6 mb-6">
            Notice the hook also writes every decision to <code>~/.claude/fetch-audit.log</code>. That
            log is the only forensic trail you will have. Grep it for installs of packages that never
            made it into <code>package.json</code>, clones nobody asked for, and repeated denials
            against the same name. That last pattern is what an active campaign looks like.
          </p>
          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="AlertTriangle" size="sm" /> Existence is not safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Be clear about what this hook buys you. It proves the name resolves. It does not prove
                the package is benign, and a squatted package <em>does</em> resolve, because the
                attacker registered it. This closes the hallucination gap, not the malice gap, which
                is why it composes with the sandbox below instead of replacing it. Treat the regex
                parsing as a starting point too: shell commands are not a regular language, and a
                determined agent will find a phrasing your pattern misses.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 6 */}
      <section id="sandbox" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">
            Sandbox the Agent So a Bad Fetch Cannot Phone Home
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The hook stops the fetch you can predict. The sandbox handles the one you cannot. Claude
            Code&apos;s sandboxing uses OS-level primitives, bubblewrap on Linux and seatbelt on
            macOS, so it covers the Bash tool <em>and every child process it spawns</em>. That last
            part matters here, because a <code>postinstall</code> script is exactly such a child
            process.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            There are two boundaries and you need both.{" "}
            <Link
              href="https://www.anthropic.com/engineering/claude-code-sandboxing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Anthropic&apos;s argument
            </Link>{" "}
            for the pairing is the clearest statement of it: without network isolation a compromised
            agent exfiltrates your files, and without filesystem isolation it escapes and reaches the
            network anyway. Half a sandbox is not a sandbox.
          </p>
          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true,
    "filesystem": {
      "allowWrite": ["/tmp/build"],
      "denyRead": ["~/.aws/credentials", "~/.ssh"]
    },
    "network": {
      "allowedDomains": ["github.com", "*.npmjs.org", "pypi.org"],
      "deniedDomains": ["uploads.github.com"],
      "allowLocalBinding": true
    }
  }
}`}
          />
          <p className="text-lg leading-relaxed mt-6 mb-6">
            Map that back to the attack. Suppose everything upstream fails: the model hallucinates the
            name, the attacker registered it, the hook&apos;s regex missed the phrasing, and the
            install runs. The payload executes inside a process that can write to{" "}
            <code>/tmp/build</code> and talk to three domains. It cannot read your AWS credentials or
            reach the attacker&apos;s command-and-control host. A botnet node that cannot call home is
            not a botnet node.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The friction argument is better than the security argument, honestly. Anthropic reports
            that <strong>sandboxing reduced permission prompts by 84%</strong> in internal usage,
            because inside a bounded environment there is far less to ask about. Approval fatigue is
            the failure mode this whole attack class depends on. An engineer clicking through their
            fortieth prompt of the morning is not reading the package name, so fewer and more
            meaningful prompts is itself a control.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Two caveats before you rely on it. Sandboxing is still a research preview, so treat it as
            defense in depth. And the network rules apply to sandboxed Bash commands,{" "}
            <strong>not to the WebFetch tool</strong>, which follows its own permission rules. Same
            execution-boundary problem I hit in the{" "}
            <Link
              href="/blog/litellm-mcp-exploit-response-guide"
              className="text-accent hover:underline"
            >
              LiteLLM CVE writeup
            </Link>
            , where an endpoint spawned a subprocess with no sandbox and no allowlist. The principle
            keeps recurring because it keeps getting skipped.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section id="install-path" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Lock Down the Install Path Itself</h2>
          <p className="text-lg leading-relaxed mb-6">
            One <code>.npmrc</code> setting does most of the work here, and it is not the one the
            2026 hardening posts lead with.
          </p>
          <CodeBlock
            language="ini"
            filename=".npmrc"
            code={`# The one that matters for this attack.
# Kills preinstall/install/postinstall/prepare, the cheapest RCE in the ecosystem.
ignore-scripts=true

# Defense in depth against *other* supply chain attacks. Near-useless here:
# a patient hallusquatter registered the name months ago and it clears the cooldown.
min-release-age=3`}
          />
          <p className="text-lg leading-relaxed mt-6 mb-6">
            <code>ignore-scripts=true</code> earns its place because lifecycle scripts run
            automatically with your full user privileges the moment a package lands. It is the
            lowest-friction execution path in the ecosystem, and turning it off means a squatted
            package that does get installed sits there inertly instead of running. It will break a
            handful of packages with legitimate native build steps, and you will allowlist those
            individually. That trade has been worth it in every repo where I have made it.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            For the blunt backstop, a deny rule forces every ad-hoc fetch-and-execute through a human.
            Rules evaluate in the order deny, then ask, then allow, so a deny always wins:
          </p>
          <CodeBlock
            language="json"
            filename="~/.claude/settings.json"
            code={`{
  "permissions": {
    "deny": [
      "Bash(npx *)",
      "Bash(bunx *)"
    ]
  }
}`}
          />
          <p className="text-lg leading-relaxed mt-6 mb-6">
            This is deliberately annoying, and that is the point. <code>npx</code> is fetch-and-execute
            in a single breath with no lockfile step anywhere in the middle, which is why{" "}
            <code>react-codeshift</code> spread as an <code>npx</code> invocation rather than a
            dependency. If you want the tool-permission layer above this one, I covered allowlisting in
            depth in{" "}
            <Link
              href="/blog/hardening-ai-agents-cicd-prompt-injection#allowlist-tools"
              className="text-accent hover:underline"
            >
              hardening AI agents in CI/CD
            </Link>
            . That post answers which tools the agent may run. This one answers which names it may
            resolve, which turns out to be a different question with a different answer.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section id="agent-skills" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Treat Agent Skills as Executable Code</h2>
          <p className="text-lg leading-relaxed mb-6">
            The best evidence that this attack is not theoretical is a package that nobody attacked
            with. The timeline, from{" "}
            <Link
              href="https://www.aikido.dev/blog/agent-skills-spreading-hallucinated-npx-commands"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Aikido&apos;s writeup
            </Link>
            : on October 17, 2025, a single commit added{" "}
            <strong>47 LLM-generated Agent Skills</strong> across 14 plugins to a popular agents
            repository, with no apparent human review. Two of them,{" "}
            <code>react-modernization</code> and <code>dependency-upgrade</code>, told agents to run{" "}
            <code>npx react-codeshift</code>. That package never existed. An LLM had fused{" "}
            <code>jscodeshift</code> (Facebook) and <code>react-codemod</code> (the React team) into a
            plausible hybrid that sounds more real than either parent.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Then it spread, entirely by copy-paste. Around 100 direct forks. One user replicated it
            into 30+ of their own repositories. Someone translated it into Japanese. Someone swapped{" "}
            <code>npx</code> for <code>bunx</code>. Nobody in that chain ran{" "}
            <code>npm view react-codeshift</code>. By the time Aikido claimed the name on January 14,
            2026, <strong>237 GitHub repositories</strong> were instructing agents to install it.
          </p>
          <Card className="card-accent-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Activity" size="sm" /> The telemetry is the scary part
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                After claiming it, Aikido saw <strong>1-4 downloads every single day</strong>. A normal
                phantom package spikes to 60-100 downloads on day one as scanners sweep it, then
                flatlines at zero forever. A persistent daily trickle means something is still
                executing that instruction, months later, on real machines. Whoever registered that
                name owned a slow, permanent drip of remote code execution across hundreds of
                projects. It happened to be a security researcher. It did not have to be.
              </p>
            </CardContent>
          </Card>
          <p className="text-lg leading-relaxed mb-6">
            The lesson I took from this is that a skill file is a shell script wearing a{" "}
            <code>.md</code> extension. It reads like documentation, it reviews like documentation, and
            it executes like code. So audit your own. I ran this across my skills directory and every
            vendored agent config in the repo:
          </p>
          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Find every fetch-and-execute instruction hiding in your agent config
grep -rnE '(npx|bunx|npm i(nstall)?|pip3? install|git clone) ' \\
  skills/ .claude/ ~/.claude/ 2>/dev/null

# Then confirm each name actually resolves before you trust it
npm view react-codeshift version   # npm ERR! 404 Not Found  <- this is the tell`}
          />
          <p className="text-lg leading-relaxed mt-6 mb-6">
            Mine came back clean, which I attribute to luck rather than discipline: I write my skills
            by hand and I have never bulk-generated 47 of them. That is exactly the practice that
            failed here, and it is a popular one.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            One angle I have not seen raised anywhere. If you give your agent{" "}
            <Link
              href="/blog/persistent-memory-ai-coding-agents"
              className="text-accent hover:underline"
            >
              persistent memory
            </Link>
            , a hallucinated name that lands in the memory store stops being a one-off. It gets
            recalled and re-executed across sessions, and the wrong name becomes a durable fact your
            agent believes about your project. Grep your memory files with the same command.
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section id="limits" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">What This Still Cannot Fix</h2>
          <p className="text-lg leading-relaxed mb-6">
            Everything above is a compensating control. None of it addresses the root cause, and the
            paper is unsparing about how thin the model-side guardrails turned out to be. The finding
            that should worry you most:{" "}
            <strong>
              &quot;No assistant refused execution based on payload content, even for the crude variant
              with explicit AI-targeting markers.&quot;
            </strong>{" "}
            The researchers left obvious fingerprints on the payload, the kind of thing a content
            filter exists to catch, and not one of the nine applications balked.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The mechanism behind that explains the shape of this entire post:{" "}
            <em>
              once the agent operates on attacker-controlled files, it applies the same trust as to
              legitimate project code
            </em>
            . There is no trust boundary after the fetch. The agent has no category for &quot;code I
            pulled from a stranger.&quot; Which is why every control here lives <em>before</em> the
            fetch: afterwards, there is nothing left to enforce. The authors are equally unimpressed
            by confirmation prompts, and they are right. Many agents execute with no confirmation at
            all, and a human staring at a plausible package name is theatre with a latency cost.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The real fixes are upstream and out of your hands. Model providers enforcing
            search-before-fetch rather than leaving it to chance. Applications making verification
            non-optional instead of a behaviour that shows up 31% of the time. Registries doing
            defensive registration of high-probability hallucinations, the same move that already works
            against typosquatting. Until those land, everything in this post is you covering for a gap
            you did not create.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The residual risks, stated plainly: verification proves existence, not intent. The sandbox
            still permits egress to allowed domains, and <code>github.com</code> is on your allowlist.
            A squatted name that reaches a committed skill file outlives the session that created it.
            And if a scanner is your last line, remember that AI code review is advisory input rather
            than a merge gate, a case I made in{" "}
            <Link
              href="/blog/claude-code-security-review-github-actions#security-considerations"
              className="text-accent hover:underline"
            >
              the security review action guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Checklist */}
      <section className="section section-alt">
        <div className="container-project">
          <Card className="card-accent-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="ListChecks" size="sm" /> The HalluSquatting defense checklist
              </CardTitle>
              <CardDescription>Ordered by impact. The first four do most of the work.</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
                <li>
                  Install the <code>PreToolUse</code> verification hook. It is the only control that
                  stops the fetch itself.
                </li>
                <li>
                  Set <code>ignore-scripts=true</code> in <code>.npmrc</code>.
                </li>
                <li>
                  Enable the sandbox with both a filesystem and a network allowlist. Half a sandbox is
                  not a sandbox.
                </li>
                <li>
                  Grep <code>skills/</code>, <code>.claude/</code>, and your memory store for{" "}
                  <code>npx</code>, install, and clone commands. Verify every name resolves.
                </li>
                <li>
                  Deny <code>Bash(npx *)</code> so fetch-and-execute needs a human.
                </li>
                <li>Log every hook decision and grep it for repeated denials on the same name.</li>
                <li>
                  Tell the agent to search before it fetches. Advisory, but it moves the odds.
                </li>
                <li>
                  Commit the lockfile and run <code>npm ci</code>. It does not help here, but it helps
                  elsewhere.
                </li>
                <li>
                  Be most suspicious of the newest tools. That is where hallucination hits 92.4%.
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    What is HalluSquatting and how is it different from slopsquatting?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      HalluSquatting is slopsquatting made targeted and repeatable. Slopsquatting
                      registers whatever names models happen to invent. HalluSquatting computes the
                      model&apos;s hallucination distribution for a chosen trending resource,
                      pre-registers the top result, and hosts an adversarial prompt there. The arXiv
                      paper reports end-to-end remote code execution in 20-65% of runs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    Is Claude Code vulnerable to HalluSquatting?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Claude Code was not one of the nine applications tested in the paper. The models
                      were, and the results split sharply: <code>claude-4.5-opus</code> searched before
                      fetching in 73% of runs and hallucinated 0% of the time, while{" "}
                      <code>claude-4.5-sonnet</code> searched in only 31% and hit 100% hallucination
                      when it skipped. That is a tendency, not a guarantee.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    Do lockfiles protect against hallucinated packages?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Mostly no. A lockfile pins dependencies you already track, and <code>npm ci</code>{" "}
                      refuses to re-resolve them. But a hallucinated package is a brand-new dependency
                      the agent is adding for the first time, so there is no lockfile entry to protect
                      it. The attack lands before the lockfile has any say.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    Does npm&apos;s min-release-age cooldown stop this attack?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Rarely. Cooldowns assume the malicious version was published recently, which
                      holds for compromised-maintainer attacks. A hallusquatter registers the name
                      early and waits for models to catch up. By the time an agent fetches it, the
                      package is months old and clears any three-day cooldown without trouble.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I make an AI agent verify a package exists before installing it?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Use a <code>PreToolUse</code> hook rather than a CLAUDE.md rule. The hook parses
                      the Bash command, checks the name against the registry with <code>npm view</code>{" "}
                      or the PyPI JSON API, and exits 2 to block on a 404. Hooks run outside the model
                      loop, so an injected prompt cannot argue with them.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can a permission prompt stop a hallucinated package install?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Not reliably. The paper found no assistant refused execution based on payload
                      content, even for a variant carrying explicit AI-targeting markers. A prompt
                      shows you a plausible package name that looks like something you meant to
                      install. Approval fatigue does the rest. Prompts are a speed bump, not a control.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-semibold">
                    Are Claude Code Agent Skills safe to install from GitHub?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Treat them as executable code, not documentation. Aikido traced{" "}
                      <code>react-codeshift</code> to 47 LLM-generated skills committed without review
                      in October 2025. The hallucinated name reached 237 GitHub repositories through
                      forks and copy-paste before anyone claimed it on npm. Grep any skill you install
                      for install and clone commands.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-semibold">
                    Does sandboxing stop HalluSquatting?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      It contains the damage rather than preventing the fetch. Claude Code&apos;s
                      sandbox uses bubblewrap on Linux and seatbelt on macOS to restrict filesystem and
                      network access for Bash and its child processes. A <code>postinstall</code>{" "}
                      script that cannot reach the attacker&apos;s domain cannot stage a botnet. It
                      does not restrict WebFetch.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-project">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="ShieldCheck" size="sm" /> Start with the hook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                If you do one thing after reading this, drop the verification hook into{" "}
                <code>~/.claude/hooks/</code> and point your settings at it. It takes five minutes, it
                costs nothing per run, and it is the only control here that stops the fetch rather than
                cleaning up after it. Then go read the paper, because the numbers are worse than the
                headlines made them sound.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild>
                  <Link
                    href="https://arxiv.org/abs/2607.07433"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the arXiv Paper <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://www.anthropic.com/engineering/claude-code-sandboxing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Claude Code Sandboxing <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Related Articles" centered />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  DevSecOps
                </Badge>
                <CardTitle>Harden AI Agents in CI/CD</CardTitle>
                <CardDescription>
                  The tool-permission layer above this one: which tools your agent may run.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  href="/blog/hardening-ai-agents-cicd-prompt-injection"
                  className="project-link"
                >
                  Read Article →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Security
                </Badge>
                <CardTitle>LiteLLM CVE-2026-42271</CardTitle>
                <CardDescription>
                  The same execution-boundary mistake: a subprocess with no sandbox, no allowlist.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/blog/litellm-mcp-exploit-response-guide" className="project-link">
                  Read Article →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  MCP Server
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>
                  A production MCP server for Jenkins CI/CD, built with the same paranoia.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/jenkins-mcp" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <PostNavigation slug="hallusquatting-defense-ai-coding-agents" />
    </>
  )
}
