import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink, Gauge, ListOrdered, Layers, ShieldCheck, Hourglass, FileText } from "lucide-react"

const PAGE_URL = "https://avinashsangle.com/projects/lead-scoring-agent"
const OG_IMAGE = "https://avinashsangle.com/og-project-lead-scoring-agent.png"
const GITHUB_URL = "https://github.com/avisangle/lead-scoring-agent"
const NPM_URL = "https://www.npmjs.com/package/lead-scoring-agent"
const DESCRIPTION =
  "Lead Scoring Agent is a free, open-source Twenty CRM app. It scores every person and opportunity 0 to 100 with a short reason, so reps work top leads first."

export const metadata: Metadata = {
  alternates: { canonical: PAGE_URL },
  // 40 chars: the layout template appends " | Avinash Sangle" (+17) -> 57 rendered.
  title: "AI Lead Scoring Agent for Twenty CRM App",
  description: DESCRIPTION,
  keywords: [
    "Twenty CRM lead scoring",
    "Twenty CRM app",
    "AI lead scoring",
    "lead scoring agent",
    "open source lead scoring",
    "Twenty CRM AI agent",
    "Twenty CRM integration",
    "Twenty CRM marketplace app",
    "CRM lead prioritization",
    "opportunity scoring",
    "Twenty SDK",
    "self-hosted CRM",
  ],
  openGraph: {
    // No template suffix here, so this carries the fuller 55-65 char descriptive title.
    title: "Lead Scoring Agent for Twenty CRM: Free Open-Source AI Scoring",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Lead Scoring Agent, an AI lead scoring app for Twenty CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Scoring Agent for Twenty CRM",
    description: DESCRIPTION,
    creator: "@AvinashSangle",
    images: [OG_IMAGE],
  },
}

const faqs = [
  {
    q: "What is the Lead Scoring Agent for Twenty CRM?",
    a: "It is a free, open-source app for Twenty CRM that gives every person and opportunity a score from 0 to 100 and a one-to-three sentence reason. Four fields (score, summary, scored-at time and status) are added to both objects, along with a People by Lead Score view and an Opportunities by Lead Score view that list the highest scores first.",
  },
  {
    q: "How does the app decide a lead's score?",
    a: "It sends one prompt per record to your workspace's default AI model. The model judges fit (seniority, job title, company), intent (deal stage, amount, recent activity) and how complete the record is. It uses only what is in the record and does not look anything up on the web. A sparse record gets a more conservative score.",
  },
  {
    q: "When does a record get scored?",
    a: "A new or edited record is scored within seconds. People are re-scored when their job title, company or email changes, and opportunities when the amount, stage or close date changes. Imports and records that existed before install are queued and scored at 20 per object per minute.",
  },
  {
    q: "Does it cost anything to run?",
    a: "The app is free under the MIT license. Each scored record uses one AI call, billed to your workspace's Twenty AI credits on Cloud or to your own AI provider on a self-hosted server. Records with nothing to judge are marked Skipped and use no credits. If credits run out, records wait in the queue and are scored once credits return.",
  },
  {
    q: "What data leaves my Twenty workspace?",
    a: "Only the scoring prompt, sent through Twenty's AI service to your default model. For a person that is name, job title, primary email, LinkedIn URL and the company's name, domain and city. For an opportunity it is name, amount, stage, close date and the company's name and domain. Both also send the event names of the 10 most recent timeline entries, never their content. Email bodies, notes and attachments are not sent.",
  },
  {
    q: "What permissions does the app need?",
    a: "It can read People, Companies, Opportunities and timeline activity, update People and Opportunities, and use AI. It cannot delete anything. The app holds no API keys and calls no other service.",
  },
  {
    q: "How do I install it?",
    a: "You need a Twenty server version 2.49 or later. In Twenty, open Settings, Applications, Marketplace, find Lead Scoring Agent and click Install (turn on Show unlisted apps if it is hidden). From a terminal, use the Twenty CLI: log in with npx twenty@latest auth login, then run npx twenty@latest app install with the app's universal identifier. There is nothing to configure beyond having a default AI model set.",
  },
  {
    q: "Is it an official Twenty product?",
    a: "No. It is an independent app I wrote against the public Twenty SDK and published to npm. Twenty is a trademark of its owners and this project is not affiliated with or endorsed by them.",
  },
]

const softwareSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lead Scoring Agent for Twenty CRM",
  alternateName: "lead-scoring-agent",
  description:
    "Free, open-source Twenty CRM app that scores every person and opportunity from 0 to 100 with a short reason, using the workspace's default AI model.",
  url: PAGE_URL,
  downloadUrl: NPM_URL,
  codeRepository: GITHUB_URL,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CRM, Lead Scoring",
  operatingSystem: "Twenty CRM server 2.49 or later",
  programmingLanguage: "TypeScript",
  softwareVersion: "0.4.0",
  license: "https://opensource.org/license/mit",
  isAccessibleForFree: true,
  author: { "@type": "Person", name: "Avinash Sangle", url: "https://avinashsangle.com" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://avinashsangle.com/projects" },
    { "@type": "ListItem", position: 3, name: "Lead Scoring Agent", item: PAGE_URL },
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

export default function LeadScoringAgentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: softwareSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "Lead Scoring Agent" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">AI LEAD SCORING FOR TWENTY CRM</p>
            <h1 className="hero-title mb-6">Lead Scoring Agent for Twenty CRM</h1>
            <p className="hero-description">
              A free, open-source Twenty app that scores every person and opportunity from 0 to
              100 and says why in a sentence or two. Open the view sorted by score and work the
              best leads first.
            </p>

            <div className="flex flex-wrap gap-3 my-6">
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Twenty CRM App</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">MIT License</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Cloud and Self-Hosted</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Nothing to Configure</Badge>
            </div>

            <div className="hero-cta flex flex-wrap gap-4">
              <Button asChild>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={NPM_URL} target="_blank" rel="noopener noreferrer">
                  npm Package <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#projects">Back to Projects</Link>
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
                Twenty has no built-in way to tell a rep which new lead deserves a call first. New
                people and opportunities arrive as flat rows, and the rep works them in the order
                they landed or opens each one to guess. That gets slower as volume grows, and the
                hot lead waits behind the cold ones.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The Lead Scoring Agent adds four fields to People and Opportunities: the score, a
                short reason, when it was scored and a status. Two ready-made views, People by Lead
                Score and Opportunities by Lead Score, list the highest scores at the top. The
                reason sits next to the number so a rep can judge whether to trust it.
              </p>
              <p className="text-lg leading-relaxed">
                I built it because the Twenty SDK documentation uses lead scoring as its example
                agent but ships nothing you can install. The code is on{" "}
                <a href={GITHUB_URL} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>{" "}
                and the package is on{" "}
                <a href={NPM_URL} className="project-link" target="_blank" rel="noopener noreferrer">
                  npm
                </a>
                .
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>At a Glance</CardTitle>
                <CardDescription>What you need to run it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Twenty server 2.49 or later, Cloud or self-hosted</p>
                <p>A default AI model set in Settings, AI</p>
                <p>Free and MIT licensed</p>
                <p>One AI call per scored record, billed to your Twenty AI credits or your own provider</p>
                <p>Records with nothing to judge are skipped and cost nothing</p>
                <div className="tech-stack pt-2">
                  <Badge variant="outline" className="badge-primary-outline">TypeScript</Badge>
                  <Badge variant="outline" className="badge-primary-outline">Twenty SDK</Badge>
                  <Badge variant="outline" className="badge-primary-outline">Vitest</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="How It Works" centered={true} />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <Gauge className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Scored in Seconds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A lead created by hand or through the API is scored inline, so the number is there
                  by the time the rep looks. An edit that changes what matters triggers a re-score:
                  job title, company or email for a person, and amount, stage or close date for a
                  deal.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Layers className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Imports Go Through a Queue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A CSV import of thousands of rows would otherwise fire thousands of AI calls at
                  once. Imported records are marked queued instead, and a one-minute job scores 20
                  per object per run. Records that existed before install are queued the same way.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Hourglass className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Credits Run Out Gracefully</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If the workspace is out of AI credits, records stay queued and are scored when
                  credits return, instead of failing. A genuine error marks the record failed with
                  the reason in the summary field, and the status page can re-queue it.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <ListOrdered className="h-8 w-8 text-accent mb-2" />
                <CardTitle>What the Score Weighs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fit (seniority, title, company), intent (stage, amount, recent activity) and how
                  complete the record is. The agent is told to use only the data it was given and to
                  score conservatively when key fields are missing.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <FileText className="h-8 w-8 text-accent mb-2" />
                <CardTitle>A Status Page in the Sidebar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Lead Scoring Agent page shows how many People and Opportunities are scored,
                  queued, skipped or failed, with a button to queue anything not yet scored.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <ShieldCheck className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Least-Privilege Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The app reads People, Companies, Opportunities and timeline activity, and updates
                  only People and Opportunities. It has no delete permission, holds no API keys and
                  calls no outside service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Install" centered={false} />
          <div className="grid-2">
            <Card>
              <CardHeader>
                <CardTitle>From the Twenty UI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Open Settings, Applications, Marketplace, find Lead Scoring Agent and click
                  Install. If it is not listed, open the filter and turn on Show unlisted apps.
                </p>
                <p>
                  Make sure the workspace has a default AI model under Settings, AI. Nothing else
                  needs configuring.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>From the Twenty CLI</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`npx twenty@latest auth login --url https://<your-workspace>.twenty.com

npx twenty@latest app install \\
  --universal-identifier 94f2e86e-62e5-4695-b4e8-50059cd7db30`}
                  language="bash"
                  className="mb-4"
                />
                <p className="text-muted-foreground">
                  Self-hosted servers pick up npm-published apps with the catalog sync. See the{" "}
                  <a href={`${GITHUB_URL}#readme`} className="project-link" target="_blank" rel="noopener noreferrer">
                    README
                  </a>{" "}
                  for the full details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design notes */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Design Decisions" centered={false} />
          <div className="grid-2">
            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>Spot Imports From the Record, Not by Counting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  My first plan was to count how many records were created in the last few seconds
                  and call it a bulk import above some threshold. It adds a query to every event and
                  misjudges small imports. Every Twenty record carries a created-by source, and
                  importing sets it to IMPORT, so the handler routes on that field instead.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>One AI Call per Record</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Structured agent output has to be a flat schema, so several records cannot share
                  one call. Cost is roughly one call per scorable record however you trigger it. The
                  queue limits how fast calls happen, and the skip rule and the field-scoped
                  triggers limit how many.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>The Agent Never Re-Triggers Itself</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Update triggers watch business fields only. The score, summary, time and status
                  fields are not on the list, so writing a result cannot start another scoring run.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>Test Against Real Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Two bugs only showed up on a real workspace: existing records were never scored
                  because events only fire for new data, and recent activity was silently missing
                  after Twenty renamed a timeline field. Both are fixed and covered by tests, and
                  the changelog lists them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Privacy" centered={false} />
          <Card>
            <CardContent className="pt-6 space-y-3 text-muted-foreground">
              <p>
                The only thing that leaves your workspace is the scoring prompt, sent through
                Twenty&apos;s AI service to your default model. For a person that is name, job
                title, primary email, LinkedIn URL and the company&apos;s name, domain and city. For
                an opportunity it is name, amount, stage, close date and the company&apos;s name and
                domain. Both also send the event names of the 10 most recent timeline entries, such
                as noteLinked, and never their content.
              </p>
              <p>
                Email bodies, notes and attachments are not sent. The score, summary, time and
                status live on the record in your workspace, and the app keeps no other copy.
                Uninstalling removes the four fields and their values.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Frequently Asked Questions" centered={true} />
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i + 1}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Related Projects" centered={false} />
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  CRM Integration
                </Badge>
                <CardTitle>Method CRM MCP Server</CardTitle>
                <CardDescription>
                  Production-ready MCP server with 20 tools for Method CRM
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/method-crm-mcp" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Automation
                </Badge>
                <CardTitle>Trending Repo Scout</CardTitle>
                <CardDescription>
                  AI-scored GitHub trending digest with a live trend dashboard
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/trending-repo-scout" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

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
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Notes" centered={false} />
          <Card>
            <CardContent className="pt-6 space-y-3 text-muted-foreground">
              <p>
                Lead Scoring Agent is an independent project. Twenty is a trademark of its owners,
                and this app is not affiliated with or endorsed by them.
              </p>
              <p>
                Bug reports and questions go to the{" "}
                <a href={`${GITHUB_URL}/issues`} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub issue tracker
                </a>
                . If you want this set up or adapted for your own Twenty workspace,{" "}
                <Link href="/#contact" className="project-link">get in touch</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <h2 className="section-title">Try It on Your Workspace</h2>
          <p className="section-subtitle mx-auto mb-8">
            Install the app, let it score your existing records, then open People by Lead Score
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
