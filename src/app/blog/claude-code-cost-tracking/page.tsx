import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Claude Code Cost Tracking: Monitor and Cut Your Spending",
  description:
    "Track Claude Code costs with built-in commands, local JSONL logs, and tools like ccusage. Plus 7 practical tips to cut your token spending by 50% or more.",
  keywords: [
    "claude code cost tracking",
    "claude code pricing",
    "claude code token usage",
    "claude code reduce costs",
    "claude code budget limit",
    "claude code /cost command",
    "ccusage",
    "claude code spending",
    "claude code optimization",
    "claude code API cost",
    "claude code Max plan",
    "claude code JSONL usage",
    "claude code cost per day",
    "claude code token optimization",
    "claude code session cost",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "Claude Code Cost Tracking: Monitor and Cut Your Spending",
    description:
      "Track Claude Code costs with built-in commands, local JSONL logs, and tools like ccusage. Plus 7 practical tips to cut your token spending by 50% or more.",
    url: "https://avinashsangle.com/blog/claude-code-cost-tracking",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-04-16T00:00:00.000Z",
    modifiedTime: "2026-04-16T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-claude-code-cost-tracking.png",
        width: 1200,
        height: 630,
        alt: "Claude Code Cost Tracking - Monitor and Reduce Spending",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Cost Tracking: Monitor and Cut Your Spending",
    description:
      "Track Claude Code costs with built-in commands, local JSONL logs, and tools like ccusage. Plus 7 practical tips to cut your token spending by 50% or more.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-claude-code-cost-tracking.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/claude-code-cost-tracking",
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

export default function ClaudeCodeCostTrackingPage() {
  return (
    <>
      {/* TechArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Claude Code Cost Tracking: Monitor and Cut Your Spending",
            description:
              "Track Claude Code costs with built-in commands, local JSONL logs, and tools like ccusage. Plus 7 practical tips to cut your token spending by 50% or more.",
            image: "https://avinashsangle.com/og-claude-code-cost-tracking.png",
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
            datePublished: "2026-04-16",
            dateModified: "2026-04-16",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://avinashsangle.com/blog/claude-code-cost-tracking",
            },
            keywords:
              "claude code cost tracking, claude code pricing, claude code token usage, ccusage, claude code budget limit, claude code reduce costs",
            articleSection: "Claude Code",
            wordCount: 3000,
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
                name: "Claude Code Cost Tracking",
                item: "https://avinashsangle.com/blog/claude-code-cost-tracking",
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
                name: "How do I check my Claude Code costs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use /cost in any session for API spend totals including token counts and dollar estimates. Subscribers should use /stats for a usage dashboard with heatmaps and model breakdowns, or /usage to check rate limit status. You can also configure the status line to show costs continuously.",
                },
              },
              {
                "@type": "Question",
                name: "Where does Claude Code store usage data locally?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Claude Code writes one JSONL file per session to ~/.claude/projects/ with full token counts for every API call. It also writes periodic snapshots to ~/.claude/statusline.jsonl containing cumulative cost and rate-limit usage percentages. Third-party tools like ccusage read these files to generate reports.",
                },
              },
              {
                "@type": "Question",
                name: "What is ccusage and how do I use it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ccusage is an open-source CLI tool with 4,800+ GitHub stars that analyzes Claude Code usage from local JSONL files. Run npx ccusage for a daily report, npx ccusage monthly for monthly totals, or npx ccusage session to see costs per conversation. It works offline with cached pricing data.",
                },
              },
              {
                "@type": "Question",
                name: "How much does Claude Code cost per day on average?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Anthropic reports the average Claude Code API cost is about $6 per developer per day, with 90% of users spending under $12 per day. Enterprise deployments average $150 to $250 per developer per month. Heavy sessions with Opus and extended thinking can spike to $20 or more in a single day.",
                },
              },
              {
                "@type": "Question",
                name: "How do I set a budget limit for Claude Code API usage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use the --max-budget-usd flag in print mode to cap spending per command. For example: claude -p --max-budget-usd 5.00 \"your prompt\". For team-wide limits, set workspace rate limits in the Claude Console. You can also use --max-turns to indirectly limit costs by capping the number of agentic turns.",
                },
              },
              {
                "@type": "Question",
                name: "Is Claude Code Max plan worth it vs API pricing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If your API equivalent spend exceeds $100 per month, the Max 5x plan at $100/month saves money. If you consistently spend over $200 per month on API calls, the Max 20x tier is the better deal. For sporadic usage under $50 per month, pay-per-token API pricing costs less overall.",
                },
              },
              {
                "@type": "Question",
                name: "How does prompt caching reduce Claude Code costs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Claude Code automatically caches repeated content like system prompts and CLAUDE.md files. Cached tokens cost 90% less than fresh input tokens. The cache has a 5-minute TTL, so keeping sessions under 5 minutes apart maximizes savings. You can track cache hit rates in the local JSONL logs.",
                },
              },
              {
                "@type": "Question",
                name: "What is the /stats command in Claude Code?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The /stats command opens a usage dashboard showing a heatmap of your activity, total session count, token totals by model, and usage streaks. It is designed for Pro and Max subscribers. API users should use /cost instead, which shows dollar-denominated spend for the current session.",
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
            { label: "Claude Code Cost Tracking" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div>
            <p className="text-accent font-semibold mb-4">CLAUDE CODE</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Claude Code Cost Tracking: Monitor and Cut Your Spending
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              The complete guide to tracking what you spend in Claude Code - from built-in
              commands and hidden JSONL logs to third-party dashboards and budget controls.
              Plus practical tips that cut my token costs by half.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Calendar" size="sm" /> April 16, 2026
              </span>
              <span>-</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Clock" size="sm" /> 12 min read
              </span>
              <span>-</span>
              <span className="flex items-center gap-1">
                <CategoryIcon icon="Tag" size="sm" /> Claude Code, Cost Optimization, Developer Tools
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-alt py-8">
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
                  <Link href="#actual-cost" className="text-accent hover:underline">
                    How Much Does Claude Code Actually Cost?
                  </Link>
                </li>
                <li>
                  <Link href="#built-in-commands" className="text-accent hover:underline">
                    Built-In Cost Tracking Commands You Should Know
                  </Link>
                </li>
                <li>
                  <Link href="#hidden-jsonl" className="text-accent hover:underline">
                    Where Claude Code Stores Your Usage Data
                  </Link>
                </li>
                <li>
                  <Link href="#third-party-tools" className="text-accent hover:underline">
                    Third-Party Tools for Claude Code Usage Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#budget-limits" className="text-accent hover:underline">
                    How to Set a Budget Limit for Claude Code
                  </Link>
                </li>
                <li>
                  <Link href="#cut-costs" className="text-accent hover:underline">
                    7 Ways to Cut Claude Code Costs by 50%
                  </Link>
                </li>
                <li>
                  <Link href="#api-vs-subscription" className="text-accent hover:underline">
                    Claude Code API vs Subscription: Which Costs Less?
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

      {/* Intro + Direct Answer */}
      <section id="actual-cost" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">How Much Does Claude Code Actually Cost?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Claude Code costs about $6 per developer per day on average, according to
            Anthropic&apos;s own data. But that number hides a wide range. Some days I
            spend under $2. Other days - usually when I&apos;m doing a heavy refactoring
            session with Opus - it spikes past $20. The problem isn&apos;t the cost itself.
            It&apos;s that most developers have no idea what they&apos;re actually spending.
          </p>

          {/* TL;DR Card */}
          <Card className="card-accent-left mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Zap" size="sm" /> TL;DR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li>
                  <strong>Track costs with built-in commands:</strong> <code>/cost</code> for API users, <code>/stats</code> for
                  subscribers, <code>/usage</code> for rate limit status
                </li>
                <li>
                  <strong>Find your hidden usage data:</strong> Claude Code logs every session
                  to <code>~/.claude/projects/</code> as JSONL files with full token counts
                </li>
                <li>
                  <strong>Use third-party tools for real visibility:</strong> ccusage (4.8k GitHub stars)
                  gives you daily, monthly, and per-session cost reports
                </li>
                <li>
                  <strong>Cut costs by 50% with 7 practical changes:</strong> default to Sonnet, cap thinking
                  tokens, clear context between tasks, and write specific prompts
                </li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            The pricing structure itself is straightforward. Claude Code Pro runs $20 per month
            (or $17 annually). The Max plan comes in two tiers: $100/month for 5x the Pro usage
            allowance, and $200/month for 20x. If you&apos;re on the API, you pay per token -
            Sonnet 4.6 at $3/$15 per million input/output tokens, and Opus 4.6 at $15/$75.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Across enterprise deployments, the average lands between $150 and $250 per developer
            per month, according to Anthropic&apos;s published benchmarks. Ninety percent of
            users stay under $12 per day. But that top 10% can burn through tokens fast,
            especially with extended thinking enabled and Opus as the default model.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            The real issue? Tracking is scattered across multiple surfaces. Subscription users
            can&apos;t see dollar costs in the Console. API users get billing data but not
            per-session breakdowns. And everyone has local JSONL files sitting on their
            machine that most people don&apos;t even know exist. This guide covers every
            tracking method available - built-in, hidden, and third-party.
          </p>
        </div>
      </section>

      {/* Built-In Commands */}
      <section id="built-in-commands" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Built-In Cost Tracking Commands You Should Know</h2>
          <p className="text-lg leading-relaxed mb-6">
            Claude Code ships with three commands for checking usage. Which one you
            should use depends on whether you&apos;re paying through the API or a
            subscription plan. I run <code>/cost</code> at the end of every session to
            build intuition about what different task types actually cost.
          </p>

          <h3 className="text-2xl font-bold mb-4">/cost - Session API Spend</h3>
          <p className="text-lg leading-relaxed mb-4">
            The <code>/cost</code> command shows your current session&apos;s token usage and
            estimated dollar cost. It&apos;s designed for API users. If you&apos;re on
            a subscription plan, it&apos;ll remind you that cost data isn&apos;t relevant
            for billing purposes. But it still shows token counts, which is useful for
            understanding your consumption patterns.
          </p>

          <CodeBlock
            language="text"
            filename="claude /cost output"
            code={`Total cost:            $0.55
Total duration (API):  6m 19.7s
Total duration (wall): 6h 33m 10.2s
Total code changes:    127 lines added, 43 lines removed`}
          />

          <h3 className="text-2xl font-bold mt-8 mb-4">/stats - Subscriber Usage Dashboard</h3>
          <p className="text-lg leading-relaxed mb-4">
            If you&apos;re on Pro or Max, <code>/stats</code> is your go-to. It opens
            a dashboard with a usage heatmap, session counts, token totals broken down
            by model, and activity streaks. It doesn&apos;t show dollar costs (since
            you&apos;re on a flat-rate plan), but it shows you exactly how much of your
            allowance you&apos;re burning through.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">/usage - Rate Limit Status</h3>
          <p className="text-lg leading-relaxed mb-4">
            The <code>/usage</code> command shows your plan limits and current rate limit
            status. This is the command to check when Claude Code starts feeling slow or
            when you suspect you&apos;re hitting throttling. It shows both your 5-hour
            and 1-week usage windows.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Status Line Configuration</h3>
          <p className="text-lg leading-relaxed mb-4">
            Instead of running commands manually, you can configure Claude Code&apos;s
            status line to show cost information continuously. This keeps token usage
            visible at all times without interrupting your workflow.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Show cost in the status line (API users)
claude config set status_line.show_cost true

# Show token count in the status line
claude config set status_line.show_tokens true`}
          />

          <Card className="card-accent-left mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Info" size="sm" /> When to Use Which Command
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="skill-list">
                <li><strong>API users:</strong> Use <code>/cost</code> for dollar amounts and <code>/usage</code> for rate limits</li>
                <li><strong>Pro/Max subscribers:</strong> Use <code>/stats</code> for usage patterns and <code>/usage</code> for rate limit status</li>
                <li><strong>Everyone:</strong> Configure the status line for passive monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hidden JSONL Files */}
      <section id="hidden-jsonl" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Where Claude Code Stores Your Usage Data</h2>
          <p className="text-lg leading-relaxed mb-6">
            Here&apos;s something most Claude Code users don&apos;t know: every session
            gets logged to your local filesystem as JSONL files. These files contain
            detailed token counts for every API call - input tokens, output tokens,
            cache creation tokens, cache read tokens, and the model used. This is the
            same data that third-party tools read to build their dashboards.
          </p>

          <h3 className="text-2xl font-bold mb-4">Session Logs</h3>
          <p className="text-lg leading-relaxed mb-4">
            Claude Code writes one JSONL file per session to <code>~/.claude/projects/</code>.
            Each line in the file represents a single API call with complete token
            metadata. If you&apos;re on a subscription plan, these local logs are the
            only way to get granular cost data since the Console doesn&apos;t expose it.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Find your session logs
ls ~/.claude/projects/

# Look at the most recent session
ls -lt ~/.claude/projects/ | head -5

# Count tokens in a session with jq
cat ~/.claude/projects/<session-file>.jsonl | \\
  jq -s '[.[].message.usage // empty] |
    { total_input: (map(.input_tokens) | add),
      total_output: (map(.output_tokens) | add),
      cache_read: (map(.cache_read_input_tokens // 0) | add),
      cache_creation: (map(.cache_creation_input_tokens // 0) | add) }'`}
          />

          <h3 className="text-2xl font-bold mt-8 mb-4">Status Line Snapshots</h3>
          <p className="text-lg leading-relaxed mb-4">
            There&apos;s a second file most people miss: <code>~/.claude/statusline.jsonl</code>.
            This contains periodic snapshots from Claude Code&apos;s status line,
            including the server-reported cumulative cost and your 5-hour and 1-week
            rate-limit usage percentages. This data isn&apos;t available anywhere else.
            Not in the Console, not through the API. Only in this local file.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# View recent status line snapshots
tail -5 ~/.claude/statusline.jsonl | jq .

# Extract cost progression over time
cat ~/.claude/statusline.jsonl | \\
  jq -r '[.timestamp, .cost_usd] | @csv'`}
          />

          <p className="text-lg leading-relaxed mt-6 mb-6">
            I check these files about once a week. The status line snapshots are
            particularly useful because they show how your rate-limit usage
            percentage changes throughout the day. If you&apos;re regularly hitting
            80%+ of your 5-hour window, that&apos;s a sign you might need the
            Max plan or need to adjust your workflow.
          </p>
        </div>
      </section>

      {/* Third-Party Tools */}
      <section id="third-party-tools" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Third-Party Tools for Claude Code Usage Analytics</h2>
          <p className="text-lg leading-relaxed mb-6">
            The built-in commands give you a snapshot. For real visibility into trends
            over time, per-project breakdowns, and cost forecasting, you need something
            more. The open-source community has built several solid tools that parse
            those local JSONL files. I&apos;ve tested four of them.
          </p>

          <h3 className="text-2xl font-bold mb-4">ccusage - The Most Popular Option</h3>
          <p className="text-lg leading-relaxed mb-4">
            With 4,800+ GitHub stars, ccusage is the tool most developers reach for.
            It&apos;s a CLI that reads your local JSONL files and produces clean
            tables with daily, monthly, or per-session cost breakdowns. It tracks
            cache tokens separately, supports billing window analysis, and works
            entirely offline with cached pricing data.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Install and run - no setup needed
npx ccusage              # Daily report (default)
npx ccusage daily        # Detailed daily breakdown
npx ccusage monthly      # Monthly aggregated totals
npx ccusage session      # Cost per conversation session
npx ccusage blocks       # 5-hour billing window analysis

# Filter by project
npx ccusage --instances  # Group usage by project`}
          />

          <h3 className="text-2xl font-bold mt-8 mb-4">claude-usage - Local Web Dashboard</h3>
          <p className="text-lg leading-relaxed mb-4">
            If you prefer a visual dashboard over CLI tables, claude-usage is worth
            a look. It reads the same local log files but renders them as charts
            with cost estimates, session timelines, and model breakdowns. Pro and
            Max subscribers get a progress bar showing how much of their allowance
            they&apos;ve used.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Claude-Code-Usage-Monitor - Real-Time Alerts</h3>
          <p className="text-lg leading-relaxed mb-4">
            This tool takes a different approach. Instead of historical reports, it
            gives you a real-time chart of token consumption with predictions about
            when you&apos;ll hit your limits. If you&apos;re on a Max plan and want
            early warnings before you get throttled, this is the one to try.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">ccost - Per-Request Granularity</h3>
          <p className="text-lg leading-relaxed mb-4">
            For the most granular view, ccost analyzes per-request JSONL logs with
            detailed token counts and computes costs using LiteLLM pricing data.
            I use this when I want to understand exactly which requests in a session
            were the most expensive. Usually it&apos;s the ones with large context
            windows or extended thinking enabled.
          </p>

          {/* Comparison Table */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="BarChart3" size="sm" /> Tool Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Tool</th>
                      <th className="text-left py-3 px-4 font-semibold">Interface</th>
                      <th className="text-left py-3 px-4 font-semibold">Best For</th>
                      <th className="text-left py-3 px-4 font-semibold">GitHub Stars</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">ccusage</td>
                      <td className="py-3 px-4">CLI</td>
                      <td className="py-3 px-4">Daily/monthly reports, billing windows</td>
                      <td className="py-3 px-4">4,800+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">claude-usage</td>
                      <td className="py-3 px-4">Web dashboard</td>
                      <td className="py-3 px-4">Visual charts, subscriber progress bars</td>
                      <td className="py-3 px-4">1,200+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Usage-Monitor</td>
                      <td className="py-3 px-4">CLI (real-time)</td>
                      <td className="py-3 px-4">Limit predictions, early warnings</td>
                      <td className="py-3 px-4">500+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">ccost</td>
                      <td className="py-3 px-4">CLI</td>
                      <td className="py-3 px-4">Per-request cost analysis</td>
                      <td className="py-3 px-4">200+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Budget Limits */}
      <section id="budget-limits" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">How to Set a Budget Limit for Claude Code</h2>
          <p className="text-lg leading-relaxed mb-6">
            Tracking is half the problem. The other half is making sure you don&apos;t
            overshoot. Claude Code offers several ways to cap spending, depending on
            whether you&apos;re an individual developer or managing a team.
          </p>

          <h3 className="text-2xl font-bold mb-4">Per-Command Budget Cap</h3>
          <p className="text-lg leading-relaxed mb-4">
            The <code>--max-budget-usd</code> flag caps the maximum dollar amount for
            a single print-mode command. This is useful in CI/CD pipelines or
            automated scripts where a runaway agent could burn through tokens
            unexpectedly. I set this on every automated Claude Code call in my
            build pipelines.
          </p>

          <CodeBlock
            language="bash"
            filename="terminal"
            code={`# Cap a single command at $5
claude -p --max-budget-usd 5.00 "Refactor the auth module"

# Combine with max-turns for double protection
claude -p --max-budget-usd 10.00 --max-turns 5 "Fix failing tests in src/"`}
          />

          <h3 className="text-2xl font-bold mt-8 mb-4">Workspace Rate Limits for Teams</h3>
          <p className="text-lg leading-relaxed mb-4">
            When you first authenticate Claude Code with a Claude Console account, it
            automatically creates a workspace called &quot;Claude Code.&quot; You can set
            rate limits on this workspace through the Console&apos;s Limits page. This
            caps Claude Code&apos;s share of your API allocation, preventing it from
            starving other production workloads.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Agent SDK Cost Tracking</h3>
          <p className="text-lg leading-relaxed mb-4">
            If you&apos;re building on the{" "}
            <Link href="/blog/claude-managed-agents" className="text-accent hover:underline">
              Claude Agent SDK
            </Link>, every result message includes a <code>total_cost_usd</code> field.
            You can aggregate this across multiple calls to track cumulative spend
            programmatically.
          </p>

          <CodeBlock
            language="typescript"
            filename="cost-tracking.ts"
            code={`import { query } from "@anthropic-ai/claude-agent-sdk";

let totalSpend = 0;

const prompts = [
  "Read the files in src/ and summarize the architecture",
  "List all exported functions in src/auth.ts"
];

for (const prompt of prompts) {
  for await (const message of query({ prompt })) {
    if (message.type === "result") {
      totalSpend += message.total_cost_usd;
      console.log(\`This call: $\${message.total_cost_usd}\`);
    }
  }
}

console.log(\`Total spend: $\${totalSpend.toFixed(4)}\`);`}
          />
        </div>
      </section>

      {/* 7 Ways to Cut Costs */}
      <section id="cut-costs" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">7 Ways to Cut Claude Code Costs by 50%</h2>
          <p className="text-lg leading-relaxed mb-6">
            After tracking my spending for a few weeks, I identified the patterns
            that were burning through tokens fastest. These seven changes brought my
            daily average from about $12 down to $5-6. None of them require
            sacrificing output quality.
          </p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge>1</Badge> Default to Sonnet, Switch to Opus Only When Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Sonnet 4.6 costs $3/$15 per million input/output tokens. Opus 4.6 costs
                  $15/$75. That&apos;s 5x more expensive. For the majority of coding tasks,
                  Sonnet produces results that are just as good. I only switch to Opus
                  for complex architectural decisions, tricky debugging sessions, or tasks
                  where first-pass accuracy really matters.
                </p>
                <CodeBlock
                  language="bash"
                  filename="terminal"
                  code={`# Switch models on the fly
/model sonnet    # For everyday tasks
/model opus      # For complex reasoning only`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge>2</Badge> Set MAX_THINKING_TOKENS to 10,000
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Extended thinking is the single biggest cost lever in Claude Code.
                  Uncapped thinking tokens can generate tens of thousands of tokens
                  per request. Setting a limit of 10,000 still gives Claude enough
                  room to reason through problems while preventing runaway costs.
                  For simpler tasks, you can drop this further or disable thinking entirely.
                </p>
                <CodeBlock
                  language="bash"
                  filename="terminal"
                  code={`# Set thinking token limit
export MAX_THINKING_TOKENS=10000

# Or lower the effort level for simple tasks
/effort low       # Significant token savings
/effort medium    # Balance of cost and quality`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge>3</Badge> Use /clear Between Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Stale context is a silent cost multiplier. Every message you send
                  includes the full conversation history as input tokens. If you&apos;ve
                  been working on auth code for an hour and then switch to fixing CSS,
                  all that auth context is still being sent with every request. Run{" "}
                  <code>/clear</code> when you switch to unrelated work. Use{" "}
                  <code>/rename</code> first if you want to come back to the session later
                  with <code>/resume</code>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge>4</Badge> Use /compact When Context Grows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you&apos;re mid-task and can&apos;t clear the session, use{" "}
                  <code>/compact</code> to summarize the conversation history. This
                  reduces the token count while preserving the important context.
                  Claude Code also does this automatically when approaching the context
                  limit, but running it manually at the right time gives you more control.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge>5</Badge> Write Specific Prompts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Vague prompts are expensive. &quot;Make this better&quot; forces Claude
                  to spend tokens figuring out what you want. &quot;Extract the hardcoded
                  strings in src/auth.js into constants&quot; gets the job done in one pass.
                  The more specific your prompt, the fewer tokens wasted on clarification
                  or wrong approaches.
                </p>
                <p>
                  I write my prompts the same way I&apos;d write a{" "}
                  <Link href="/blog/claude-md-guide" className="text-accent hover:underline">CLAUDE.md instruction</Link>
                  : specific file paths, specific outcomes, specific constraints.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge>6</Badge> Use Plan Mode Before Expensive Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Press Shift+Tab twice to enter plan mode before starting a big task.
                  This makes Claude outline its approach before writing any code. It
                  costs a few hundred tokens for the plan but can save thousands by
                  preventing costly rework. I use this before any refactoring that
                  touches more than three files.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge>7</Badge> Break Work Into Scoped Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  One session for everything is the most expensive way to use Claude
                  Code. Context accumulates, cache misses increase, and irrelevant
                  history gets sent with every request. Instead, work in task-scoped
                  sessions: one for fixing the login bug, another for adding the new
                  API endpoint, a third for writing tests. Each fresh session starts
                  with a clean context window.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API vs Subscription */}
      <section id="api-vs-subscription" className="section">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Claude Code API vs Subscription: Which Costs Less?</h2>
          <p className="text-lg leading-relaxed mb-6">
            This depends entirely on how much you use Claude Code. I&apos;ve run the
            numbers for three usage profiles, and the breakeven points are clear.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CategoryIcon icon="Calculator" size="sm" /> Cost Comparison by Usage Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Usage Profile</th>
                      <th className="text-left py-3 px-4 font-semibold">API Cost/Month</th>
                      <th className="text-left py-3 px-4 font-semibold">Best Plan</th>
                      <th className="text-left py-3 px-4 font-semibold">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Light (1-2 hrs/day)</td>
                      <td className="py-3 px-4">$30-50/mo</td>
                      <td className="py-3 px-4">API or Pro ($20)</td>
                      <td className="py-3 px-4">Pay-per-use wins</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Moderate (3-5 hrs/day)</td>
                      <td className="py-3 px-4">$100-180/mo</td>
                      <td className="py-3 px-4">Max 5x ($100)</td>
                      <td className="py-3 px-4">Up to 44% savings</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Heavy (6+ hrs/day)</td>
                      <td className="py-3 px-4">$200-400/mo</td>
                      <td className="py-3 px-4">Max 20x ($200)</td>
                      <td className="py-3 px-4">Up to 50% savings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg leading-relaxed mb-6">
            The API makes more sense when you have sporadic usage or need fine-grained
            budget controls like <code>--max-budget-usd</code> on individual
            commands. It&apos;s also the only option if you need per-project cost
            allocation for billing clients. The subscription wins on predictability:
            you know exactly what you&apos;ll pay each month, and there&apos;s no risk of
            a bad session doubling your bill.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            My approach: I use the Max 5x plan for day-to-day work and keep an API key
            configured for automated scripts and CI pipelines where I want hard budget
            caps. That hybrid setup gives me the best of both - predictable costs
            for interactive work and strict controls for automated spending.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section section-alt">
        <div className="container-project">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="check-costs">
              <AccordionTrigger>How do I check my Claude Code costs?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Use <code>/cost</code> in any session for API spend totals including token
                  counts and dollar estimates. Subscribers should use <code>/stats</code> for
                  a usage dashboard with heatmaps and model breakdowns, or <code>/usage</code>
                  {" "}to check rate limit status. You can also configure the status line to show
                  costs continuously.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="local-data">
              <AccordionTrigger>Where does Claude Code store usage data locally?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Claude Code writes one JSONL file per session to <code>~/.claude/projects/</code>
                  {" "}with full token counts for every API call. It also writes periodic snapshots
                  to <code>~/.claude/statusline.jsonl</code> containing cumulative cost and
                  rate-limit usage percentages. Third-party tools like ccusage read these files
                  to generate cost reports.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ccusage">
              <AccordionTrigger>What is ccusage and how do I use it?</AccordionTrigger>
              <AccordionContent>
                <p>
                  ccusage is an open-source CLI tool with 4,800+ GitHub stars that analyzes
                  Claude Code usage from local JSONL files. Run <code>npx ccusage</code> for a
                  daily report, <code>npx ccusage monthly</code> for monthly totals, or{" "}
                  <code>npx ccusage session</code> to see costs per conversation. It works
                  offline with cached pricing data and tracks cache tokens separately.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost-per-day">
              <AccordionTrigger>How much does Claude Code cost per day on average?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Anthropic reports the average Claude Code API cost at about $6 per developer
                  per day, with 90% of users spending under $12 per day. Enterprise deployments
                  average $150 to $250 per developer per month. Heavy sessions with Opus and
                  extended thinking can spike past $20 in a single day.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="budget-limit">
              <AccordionTrigger>How do I set a budget limit for Claude Code API usage?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Use the <code>--max-budget-usd</code> flag in print mode to cap spending per
                  command. For example: <code>claude -p --max-budget-usd 5.00 &quot;your prompt&quot;</code>.
                  For team-wide limits, set workspace rate limits in the Claude Console. You can
                  also use <code>--max-turns</code> to indirectly limit costs by capping the number
                  of agentic turns.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="max-vs-api">
              <AccordionTrigger>Is Claude Code Max plan worth it vs API pricing?</AccordionTrigger>
              <AccordionContent>
                <p>
                  If your API equivalent spend exceeds $100 per month, the Max 5x plan at
                  $100/month saves money. If you consistently spend over $200 per month on
                  API calls, the Max 20x tier is the better deal. For sporadic usage under
                  $50 per month, pay-per-token API pricing usually costs less overall.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prompt-caching">
              <AccordionTrigger>How does prompt caching reduce Claude Code costs?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Claude Code automatically caches repeated content like system prompts and
                  CLAUDE.md files. Cached tokens cost 90% less than fresh input tokens. The
                  cache has a 5-minute TTL, so keeping sessions under 5 minutes apart maximizes
                  savings. You can track cache hit rates in the local JSONL session logs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stats-command">
              <AccordionTrigger>What is the /stats command in Claude Code?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The <code>/stats</code> command opens a usage dashboard showing a heatmap of
                  your activity, total session count, token totals by model, and usage streaks.
                  It&apos;s designed for Pro and Max subscribers. API users should use{" "}
                  <code>/cost</code> instead, which shows dollar-denominated spend for the
                  current session.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="section">
        <div className="container-project">
          <SectionHeader
            title="Related Articles"
            subtitle="More guides on getting the most out of Claude Code"
            centered
          />
          <div className="grid-2 mt-8">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="FileText" size="lg" animation="pulse" />
                <CardTitle>How I Write CLAUDE.md Files That Actually Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A well-structured CLAUDE.md reduces wasted tokens by giving Claude the
                  right context upfront. Real examples from my Next.js projects.
                </p>
                <Link href="/blog/claude-md-guide" className="project-link">
                  Read Article
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Bot" size="lg" animation="pulse" />
                <CardTitle>Claude Managed Agents vs Agent SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Agent subqueries can consume 60% of your costs. Understand the pricing
                  differences between Managed Agents and the Agent SDK.
                </p>
                <Link href="/blog/claude-managed-agents" className="project-link">
                  Read Article
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
