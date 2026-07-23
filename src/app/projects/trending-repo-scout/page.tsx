import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink, CheckCircle, TrendingUp, Brain, DollarSign, History, Send, LayoutDashboard } from "lucide-react"

export const metadata: Metadata = {
  alternates: { canonical: "https://avinashsangle.com/projects/trending-repo-scout" },
  // 38-43 chars: the layout template appends " | Avinash Sangle" (+17) -> 56 rendered.
  title: "Trending Repo Scout - AI GitHub Scanner",
  description:
    "Serverless scout that scans GitHub trending daily, scores each repo with Claude on virality, buildability, and pay-readiness, then posts a ranked Slack digest.",
  keywords: [
    "github trending",
    "ai agent",
    "claude api",
    "github actions",
    "saas opportunity",
    "repo scoring",
    "slack digest",
    "cloudflare workers",
    "python automation",
    "serverless pipeline",
    "trend analysis",
    "claude haiku",
  ],
  openGraph: {
    // No template suffix here, so this carries the fuller 55-65 char descriptive title.
    title: "Trending Repo Scout - AI GitHub Trend Scanner and Scorer",
    description: "AI-scored GitHub trending digest: virality, buildability, and pay-readiness",
    url: "https://avinashsangle.com/projects/trending-repo-scout",
    type: "article",
    images: [
      {
        url: "https://avinashsangle.com/og-project-trending-repo-scout.png",
        width: 1200,
        height: 630,
        alt: "Trending Repo Scout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trending Repo Scout",
    description: "AI-scored GitHub trending digest, delivered to Slack every morning",
    images: ["https://avinashsangle.com/og-project-trending-repo-scout.png"],
  },
}

export default function TrendingRepoScoutPage() {
  return (
    <>
      {/* JSON-LD Schemas for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Trending Repo Scout",
            description:
              "Serverless pipeline that scans GitHub's trending pages, enriches each repo with metadata and open issues, scores it with Claude on virality, buildability, and pay-readiness, and posts a ranked shortlist to Slack",
            applicationCategory: "DeveloperApplication",
            applicationSubCategory: "AI Automation, Market Research",
            operatingSystem: "Linux, macOS, Windows",
            programmingLanguage: ["Python"],
            author: { "@type": "Person", name: "Avinash Sangle" },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />

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
                name: "Projects",
                item: "https://avinashsangle.com/projects",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Trending Repo Scout",
                item: "https://avinashsangle.com/projects/trending-repo-scout",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Trending Repo Scout?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trending Repo Scout is a serverless pipeline that reads GitHub's daily, weekly, and monthly trending pages, enriches each repo with its metadata, README, and top open issues, then asks Claude to score it on three axes: virality, buildability, and pay-readiness. Repos above a score threshold are ranked and posted to Slack as a digest, and every observation feeds a public trend dashboard.",
                },
              },
              {
                "@type": "Question",
                name: "What do the three scoring axes mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Virality asks whether stars gained this period represent sustained momentum or a one-day spike, judged against total stars, fork ratio, repo age, and the scout's own observation history. Buildability asks whether a solo developer or small team could realistically wrap the project as a product, weighing license, API surface, and stack. Pay-readiness looks for concrete evidence in issues and README that people are asking for hosting, auth, dashboards, or support. Pay-readiness carries the highest weight at 40 percent because it is the actual money signal.",
                },
              },
              {
                "@type": "Question",
                name: "Why is the architecture split between GitHub Actions and a Claude cloud routine?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The two halves need opposite things. Fetching needs open internet access, which the Claude cloud routine's sandbox does not have because its network egress is scoped to the repository. Scoring needs a language model, which would normally mean a metered API key. Splitting at the LLM boundary gives each half what it has: GitHub Actions fetches, enriches, and commits a candidates file, and the cloud routine reads that committed file, scores it under a Claude subscription, and posts to Slack. The handoff is a file in git, so no API key is needed anywhere in the scheduled path.",
                },
              },
              {
                "@type": "Question",
                name: "How does the scout tell real momentum from a one-day spike?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A single trending snapshot is stateless, so the scout keeps its own memory. Every fetch records each repo's total star count to a committed history file, from which it derives days on trending, consecutive trending streak, stars gained over 7 and 30 days, and whether the star trend is accelerating, steady, cooling, or new. The scoring rubric leans on those signals: a multi-day streak with accelerating stars is rewarded, while a huge one-day spike with no prior history is discounted as a likely flash.",
                },
              },
              {
                "@type": "Question",
                name: "How does it avoid surfacing the same repo every day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A repo that appears in a digest enters a 14-day cooldown and cannot be surfaced again until it expires. The cooldown log is committed back to the repository by the pipeline, so it survives between runs without a database. Trend history is recorded from the full trending list before the cooldown filter runs, so streaks stay accurate even for repos temporarily suppressed from the digest.",
                },
              },
              {
                "@type": "Question",
                name: "What does it cost to run?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Effectively nothing. The scheduled path runs on GitHub Actions free minutes and a Claude subscription with no metered API key. The dashboard is served as static assets from a Cloudflare Worker. The optional API-key path scores up to 25 repos per run with Claude Haiku at a few thousand input tokens each, which is well under one dollar per month for daily plus weekly runs.",
                },
              },
              {
                "@type": "Question",
                name: "What is the most fragile part of the pipeline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The trending scrape. GitHub publishes no official API for its trending pages, so the scout parses the public HTML. If GitHub redesigns that page, the parsing breaks. The selectors are isolated in a single module on purpose, so a redesign means fixing one file rather than the pipeline. Trending also returns only about the top 25 repos per period, so this is the most visible slice of GitHub rather than exhaustive coverage.",
                },
              },
              {
                "@type": "Question",
                name: "How fresh is the public dashboard?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Star counts and trend streaks are same-day. Scores update within about a minute of the scoring routine finishing, because that routine's push to the repository triggers a deploy workflow that publishes the rebuilt page to Cloudflare. This is event-driven rather than a fixed schedule, so no cron has to guess when scoring completes.",
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
            { label: "Projects", href: "/#projects" },
            { label: "Trending Repo Scout" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">AI OPPORTUNITY SCOUT</p>
            <h1 className="hero-title mb-6">Trending Repo Scout</h1>
            <p className="hero-description">
              Reads GitHub trending every morning, scores each repo with Claude on virality, buildability, and pay-readiness, and posts a ranked shortlist to Slack. No server, no API key, no database.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-3 my-6">
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Runs Daily</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Zero API Key</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">3-Axis AI Scoring</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Live Dashboard</Badge>
            </div>

            <div className="hero-cta flex flex-wrap gap-4">
              <Button asChild>
                <a href="https://trending-repo-scout.aavi-sangle.workers.dev" target="_blank" rel="noopener noreferrer">
                  View Live Dashboard <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#projects">← Back to Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Overview" centered={false} />
          <div className="grid-2">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                GitHub's trending page tells you what is popular. It does not tell you what is worth building on. Trending Repo Scout closes that gap: it pulls the trending list, enriches every candidate with its README and top open issues, and asks Claude the question a star count cannot answer — is anyone here asking to pay for a hosted version of this?
              </p>
              <p className="text-lg leading-relaxed">
                The result lands in Slack each morning as a ranked shortlist with the model's reasoning attached, and every observation feeds a public dashboard that tracks each repo's star trajectory over time. The whole thing runs on scheduled jobs and committed JSON files — there is no server to maintain and no database to pay for.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>What It Scores</CardTitle>
                <CardDescription>Three axes, weighted composite</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Virality <span className="text-muted-foreground font-normal">— 30%</span></p>
                    <p className="text-sm text-muted-foreground">Genuine momentum, or a one-day spike?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Buildability <span className="text-muted-foreground font-normal">— 30%</span></p>
                    <p className="text-sm text-muted-foreground">Could a small team realistically wrap this?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Pay-readiness <span className="text-muted-foreground font-normal">— 40%</span></p>
                    <p className="text-sm text-muted-foreground">Are people asking for hosting, auth, support — the money signal?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Key Features" centered={true} />
          <div className="grid-3">
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Skeptical AI Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Claude reads each repo's README and top 8 open issues, then scores virality, buildability, and pay-readiness 0-10 with cited reasoning and a concrete wrapper angle. The rubric explicitly tells it not to be impressed by star counts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <History className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Trend Memory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every fetch records total stars to a committed history file, deriving trending streaks and 7-day and 30-day growth. A snapshot cannot tell a flash from a climb; 14 days of observations can.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-accent mb-2" />
                <CardTitle>No API Key, No Server</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scoring runs inside a Claude cloud routine under a subscription rather than the metered Messages API. The scheduled path holds no LLM credentials at all — the handoff between halves is a JSON file in git.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Send className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Ranked Slack Digest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The composite score is computed in Python from fixed weights, not by the model, so ranking stays deterministic. Only repos above the threshold reach the digest — the rest are scored and silently dropped.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LayoutDashboard className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Public Trend Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A static page rendered from the history file: every tracked repo as a glowing light curve, sortable by AI score, with the axis breakdown and reasoning behind a click. Served from a Cloudflare Worker.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Cooldown & Dedupe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A repo that makes the digest is suppressed for 14 days, so a long-running trend does not spam the same shortlist daily. The cooldown log is committed back each run — state without a database.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Architecture" centered={false} />
          <p className="text-lg leading-relaxed mb-6 max-w-3xl">
            The interesting constraint here was not the AI — it was that the two halves of the pipeline need opposite things. Fetching needs open internet; the Claude cloud routine's sandbox does not have it, because its network egress is scoped to the repository. Scoring needs a language model; doing that with an API key means paying per token. Splitting the pipeline at the LLM boundary gives each half exactly what it already has, and the handoff is just a file in git.
          </p>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">GitHub Actions (open internet)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Scrapes the trending page for the daily, weekly, or monthly window</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Enriches each repo via the GitHub API: metadata, README, top issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Updates trend history and applies the cooldown filter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Commits the handoff file, then deploys the rebuilt dashboard</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Claude Cloud Routine (subscription)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Reads the committed candidates file — no network fetch required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Scores every candidate natively against the rubric — no API key</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ranks by weighted composite and posts the digest to Slack via MCP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Pushes the cooldown log back, which triggers a dashboard redeploy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Module Layout</h3>
                <CodeBlock language="text" code={`scout/fetch_trending.py   scrape github.com/trending (daily/weekly/monthly)
scout/enrich.py           GitHub API: repo metadata, README, top issues
scout/history.py          trend memory: streaks, 7d/30d growth, acceleration
scout/score.py            Claude API scoring (optional API-key path)
scout/notify_slack.py     format + post the ranked shortlist
prepare.py                fetch + enrich + cooldown filter -> candidates.<period>.json
publish.py                composite score + rank + Slack + cooldown log
build_dashboard.py        render the public star-trajectory dashboard`} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="How It Works" centered={false} />
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>One Morning Run, End to End</CardTitle>
                <CardDescription>Three periods run on staggered schedules: daily, weekly, and monthly</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">1</div>
                    <div>
                      <p className="font-semibold">Scrape Trending</p>
                      <p className="text-sm text-muted-foreground">Parses the public trending HTML for the period, pulling roughly 25 repos with their period star gain</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">2</div>
                    <div>
                      <p className="font-semibold">Record History</p>
                      <p className="text-sm text-muted-foreground">Logs total stars for the full list before filtering, so streaks stay accurate even for suppressed repos</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">3</div>
                    <div>
                      <p className="font-semibold">Enrich</p>
                      <p className="text-sm text-muted-foreground">Fetches license, topics, README excerpt, and the top 8 open issues by reactions — where pay-readiness signals actually live</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">4</div>
                    <div>
                      <p className="font-semibold">Filter & Hand Off</p>
                      <p className="text-sm text-muted-foreground">Drops repos still in cooldown, then commits a period-specific candidates file so daily, weekly, and monthly never collide</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">5</div>
                    <div>
                      <p className="font-semibold">Score</p>
                      <p className="text-sm text-muted-foreground">Claude reads each candidate with its trend context and returns three axis scores, reasoning, and a wrapper angle</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">6</div>
                    <div>
                      <p className="font-semibold">Rank & Publish</p>
                      <p className="text-sm text-muted-foreground">Python computes the weighted composite, drops anything below the threshold, and posts the top shortlist to Slack</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-semibold text-accent">7</div>
                    <div>
                      <p className="font-semibold">Persist & Deploy</p>
                      <p className="text-sm text-muted-foreground">Scores and cooldown log are committed back; that push triggers a Cloudflare deploy, so the live dashboard is fresh within a minute</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tuning */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Tuning" centered={false} />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Everything Worth Changing Lives in One File</CardTitle>
                <CardDescription>No code changes needed elsewhere</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock language="python" code={`WEIGHTS = {
    "viral": 0.3,
    "buildability": 0.3,
    "pay_readiness": 0.4,  # the actual money signal
}

MAX_REPOS_PER_FETCH = 25
TOP_ISSUES_PER_REPO = 8
MIN_SCORE_THRESHOLD = 4.0
DIGEST_SIZE = 8
COOLDOWN_DAYS = 14`} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Knobs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Digest too noisy?</span>
                    <Badge variant="secondary">MIN_SCORE_THRESHOLD</Badge>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Same repos repeating?</span>
                    <Badge variant="secondary">COOLDOWN_DAYS</Badge>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Care less about hype?</span>
                    <Badge variant="secondary">WEIGHTS</Badge>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Only want Python repos?</span>
                    <Badge variant="secondary">LANGUAGES</Badge>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Sharper reasoning?</span>
                    <Badge variant="secondary">CLAUDE_MODEL</Badge>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Retention is capped at 60 days and the trend window at 14, which keeps the committed history file small enough to live in git indefinitely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Dashboard */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="The Live Dashboard" centered={false} />
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    The dashboard is designed as a sky-survey log: each repo is a tracked celestial object, and its star history is a glowing light curve colored by momentum. It renders as a static page from the committed history file, so there is no backend and nothing to secure — only the built page is exposed.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Rows sort by AI score by default. Click a scored row to expand the axis breakdown, the model's reasoning, and the suggested wrapper angle.
                  </p>
                  <Button asChild>
                    <a href="https://trending-repo-scout.aavi-sangle.workers.dev" target="_blank" rel="noopener noreferrer">
                      Open the dashboard <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Freshness</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Stars and streaks: same-day</p>
                        <p className="text-sm text-muted-foreground">Rebuilt and deployed by the fetch job every run</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Scores: within about a minute</p>
                        <p className="text-sm text-muted-foreground">The scoring routine's push triggers a deploy workflow — event-driven, not a cron guessing when scoring finished</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Deploys are explicit</p>
                        <p className="text-sm text-muted-foreground">A wrangler step in the workflow, because the platform's own Git integration proved unreliable</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Frequently Asked Questions" centered={false} />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Trending Repo Scout?</AccordionTrigger>
              <AccordionContent>
                Trending Repo Scout is a serverless pipeline that reads GitHub's daily, weekly, and monthly trending pages, enriches each repo with its metadata, README, and top open issues, then asks Claude to score it on three axes: virality, buildability, and pay-readiness. Repos above a score threshold are ranked and posted to Slack as a digest, and every observation feeds a public trend dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What do the three scoring axes mean?</AccordionTrigger>
              <AccordionContent>
                Virality asks whether stars gained this period represent sustained momentum or a one-day spike, judged against total stars, fork ratio, repo age, and the scout's own observation history. Buildability asks whether a solo developer or small team could realistically wrap the project as a product, weighing license, API surface, and stack. Pay-readiness looks for concrete evidence in issues and README that people are asking for hosting, auth, dashboards, or support. Pay-readiness carries the highest weight at 40% because it is the actual money signal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Why is the architecture split between GitHub Actions and a Claude cloud routine?</AccordionTrigger>
              <AccordionContent>
                The two halves need opposite things. Fetching needs open internet access, which the Claude cloud routine's sandbox does not have because its network egress is scoped to the repository. Scoring needs a language model, which would normally mean a metered API key. Splitting at the LLM boundary gives each half what it has: GitHub Actions fetches, enriches, and commits a candidates file, and the cloud routine reads that committed file, scores it under a Claude subscription, and posts to Slack. The handoff is a file in git, so no API key is needed anywhere in the scheduled path.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How does the scout tell real momentum from a one-day spike?</AccordionTrigger>
              <AccordionContent>
                A single trending snapshot is stateless, so the scout keeps its own memory. Every fetch records each repo's total star count to a committed history file, from which it derives days on trending, consecutive trending streak, stars gained over 7 and 30 days, and whether the star trend is accelerating, steady, cooling, or new. The scoring rubric leans on those signals: a multi-day streak with accelerating stars is rewarded, while a huge one-day spike with no prior history is discounted as a likely flash.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How does it avoid surfacing the same repo every day?</AccordionTrigger>
              <AccordionContent>
                A repo that appears in a digest enters a 14-day cooldown and cannot be surfaced again until it expires. The cooldown log is committed back to the repository by the pipeline, so it survives between runs without a database. Trend history is recorded from the full trending list before the cooldown filter runs, so streaks stay accurate even for repos temporarily suppressed from the digest.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What does it cost to run?</AccordionTrigger>
              <AccordionContent>
                Effectively nothing. The scheduled path runs on GitHub Actions free minutes and a Claude subscription with no metered API key. The dashboard is served as static assets from a Cloudflare Worker. The optional API-key path scores up to 25 repos per run with Claude Haiku at a few thousand input tokens each, which is well under one dollar per month for daily plus weekly runs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What is the most fragile part of the pipeline?</AccordionTrigger>
              <AccordionContent>
                The trending scrape. GitHub publishes no official API for its trending pages, so the scout parses the public HTML. If GitHub redesigns that page, the parsing breaks. The selectors are isolated in a single module on purpose, so a redesign means fixing one file rather than the pipeline. Trending also returns only about the top 25 repos per period, so this is the most visible slice of GitHub rather than exhaustive coverage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>How fresh is the public dashboard?</AccordionTrigger>
              <AccordionContent>
                Star counts and trend streaks are same-day. Scores update within about a minute of the scoring routine finishing, because that routine's push to the repository triggers a deploy workflow that publishes the rebuilt page to Cloudflare. This is event-driven rather than a fixed schedule, so no cron has to guess when scoring completes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Related Projects" centered={false} />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Automation
                </Badge>
                <CardTitle>Reddit Comment Engagement Agent</CardTitle>
                <CardDescription>
                  Compliance-first Reddit engagement with AI quality scoring and human approval
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/reddit-agent" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Production SaaS
                </Badge>
                <CardTitle>Social Media Auto-Poster</CardTitle>
                <CardDescription>
                  AI-powered platform with automated posting and multi-platform support
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/social-media-auto-poster" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>
                  Enable AI agents to interact with Jenkins through Model Context Protocol
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

      {/* License & Credits */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Notes & Credits" centered={false} />
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Source</h3>
                  <p className="text-muted-foreground mb-4">
                    The source repository is private — this is a personal research tool rather than a distributable package. The dashboard it produces is public, and the architecture is documented above in full.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Author:</strong> Avinash Sangle<br />
                    <strong>Website:</strong> avinashsangle.com<br />
                    <strong>Year:</strong> 2026
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Built With</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Python — pipeline and scoring orchestration</li>
                    <li>• BeautifulSoup — trending page parsing</li>
                    <li>• GitHub Actions — scheduled fetch, enrich, and deploy</li>
                    <li>• Claude — three-axis repo scoring</li>
                    <li>• Slack — ranked digest delivery via MCP</li>
                    <li>• Cloudflare Workers — static dashboard hosting</li>
                    <li>• Built with Claude Code — AI-assisted development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-project text-center">
          <h2 className="text-3xl font-bold mb-4">See What's Trending Right Now</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The dashboard updates every morning with fresh star trajectories and AI scores for the repos worth watching.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://trending-repo-scout.aavi-sangle.workers.dev" target="_blank" rel="noopener noreferrer">
                View Live Dashboard <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#projects">← Back to Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
