import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink, AppWindow, Cpu, ListChecks, Filter, Hash, ShieldCheck } from "lucide-react"

const PAGE_URL = "https://avinashsangle.com/projects/roundhand"
const OG_IMAGE = "https://avinashsangle.com/og-project-roundhand.png"
const DESCRIPTION =
  "Roundhand is a menu-bar dictation app for Apple silicon Macs. Speech is recognised on-device and the text is shaped for the app you type into. Free to download."

export const metadata: Metadata = {
  alternates: { canonical: PAGE_URL },
  // 38 chars: the layout template appends " | Avinash Sangle" (+17) -> 55 rendered.
  title: "Roundhand: On-Device Mac Dictation App",
  description: DESCRIPTION,
  keywords: [
    "Mac dictation app",
    "Roundhand",
    "on-device dictation",
    "dictation cleanup",
    "Parakeet CoreML",
    "Apple silicon dictation",
    "speech to text Mac",
    "offline dictation",
    "menu bar app",
  ],
  openGraph: {
    // No template suffix here, so this carries the fuller 55-65 char descriptive title.
    title: "Roundhand: On-Device Mac Dictation App That Writes for Each App",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Roundhand Mac dictation app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roundhand: On-Device Mac Dictation App",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
}

const faqs = [
  {
    q: "What is Roundhand?",
    a: "Roundhand is a menu-bar dictation app for Apple silicon Macs. You hold a key, talk, let go, and the text lands at your cursor. It writes for the app that has focus: a short message in Slack, a greeting and sign-off on separate lines in Mail, a list in Notes, one line with no trailing full stop in a terminal.",
  },
  {
    q: "Does Roundhand send my audio to the cloud?",
    a: "Speech is recognised on your Mac. Dictation audio is never uploaded or saved to disk. If you turn on optional cloud cleanup, the transcript text, never the audio, goes to the language model provider. In the default mode, after the one-time model download, dictation and cleanup run on your Mac, apart from update checks.",
  },
  {
    q: "Which Macs does Roundhand run on?",
    a: "Apple silicon Macs on macOS 14 or later. A Windows version is in development.",
  },
  {
    q: "Is Roundhand free?",
    a: "Download is free with no account needed, and dictation with the offline cleanup stays free with no time or word limit. Optional cloud cleanup is an extra, either on a managed plan or with your own API key.",
  },
  {
    q: "Is offline cleanup better than an LLM?",
    a: "On my own hand-checked everyday dictations, the offline rules did better than both cloud LLMs I tested, and the LLMs only came out ahead on edge cases. It is one person's speech and I have not published a benchmark, so treat it as a direction and test your own.",
  },
  {
    q: "Will Roundhand type into password fields?",
    a: "No. It will not read or type into password fields.",
  },
  {
    q: "Is Roundhand open source?",
    a: "No.",
  },
]

const softwareSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Roundhand",
  description:
    "Menu-bar dictation app for Apple silicon Macs. Speech is recognised on-device with NVIDIA Parakeet through CoreML, and the transcript is cleaned and shaped for the app that has focus.",
  url: "https://roundhand.dev",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Dictation, Speech to Text",
  operatingSystem: "macOS 14 or later (Apple silicon)",
  programmingLanguage: ["Swift"],
  author: { "@type": "Person", name: "Avinash Sangle", url: "https://avinashsangle.com" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://avinashsangle.com/projects" },
    { "@type": "ListItem", position: 3, name: "Roundhand", item: PAGE_URL },
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

export default function RoundhandPage() {
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
            { label: "Roundhand" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">MAC DICTATION APP</p>
            <h1 className="hero-title mb-6">Roundhand</h1>
            <p className="hero-description">
              A menu-bar dictation app for Apple silicon Macs. Hold a key, talk, let go, and the
              text lands at your cursor, written for the app that has focus.
            </p>

            <div className="flex flex-wrap gap-3 my-6">
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Apple Silicon</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">On-Device Recognition</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Free Download</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">No Account</Badge>
            </div>

            <div className="hero-cta flex flex-wrap gap-4">
              <Button asChild>
                <a href="https://roundhand.dev" target="_blank" rel="noopener noreferrer">
                  Download for Mac <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog/rules-vs-llm-dictation-cleanup">Read the Write-up</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="60-Second Demo" centered={true} />
          <div className="mx-auto w-full max-w-2xl">
            <div className="aspect-video overflow-hidden rounded-2xl border border-border">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/DUsTHgtK1wI"
                title="Roundhand 60-second demo: dictation landing in Slack, Mail and Notes"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Overview" centered={false} />
          <div className="grid-2">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Speech recognition gives you what you said, not what you meant. A raw transcript
                has filler words, restarted sentences and missing punctuation, and fixing that by
                hand erases most of the time you saved over typing.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Roundhand does two things between your voice and the text field. First,
                recognition: NVIDIA&apos;s Parakeet model turns audio into a transcript on your Mac,
                on the Neural Engine, through CoreML. Speech is recognised on your Mac. Dictation
                audio is never uploaded or saved to disk.
              </p>
              <p className="text-lg leading-relaxed">
                Second, cleanup: the transcript is cleaned and shaped for the destination app.
                That step is where I measured offline rules against two cloud LLMs, and the{" "}
                <Link href="/blog/rules-vs-llm-dictation-cleanup" className="project-link">
                  write-up
                </Link>{" "}
                covers what I found.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>At a Glance</CardTitle>
                <CardDescription>What you need to run it</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Apple silicon Mac on macOS 14 or later</p>
                <p>Free download, no account needed</p>
                <p>Dictation and offline cleanup are free, with no time or word limit</p>
                <p>Windows version in development</p>
                <p>
                  <a href="https://roundhand.dev/pricing" className="project-link">
                    Pricing for optional cloud cleanup
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Key Features" centered={true} />
          <div className="grid-3">
            <Card>
              <CardHeader>
                <AppWindow className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Writes for the Focused App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A short message in Slack, a greeting and a sign-off on their own lines in Mail,
                  a list in Notes, one line with no trailing full stop in a terminal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cpu className="h-8 w-8 text-accent mb-2" />
                <CardTitle>On-Device Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Parakeet TDT 0.6B v3 runs on the Neural Engine through CoreML. After the one-time
                  model download, the default mode runs on your Mac, apart from update checks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ListChecks className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Offline Rules Cleanup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deterministic rules drop fillers, keep the version you meant when you restart a
                  sentence, and fix capitals and punctuation. No network, no cost per use, and the
                  same input always gives the same output.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Filter className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Gated Cloud Cleanup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cloud cleanup is optional. A word-count gate skips the model for transcripts under
                  6 words by default, because in my sample about a third of the calls returned what
                  the rules had already produced.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Hash className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Spoken Ticket Keys</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A narrow rule turns &quot;or twenty one&quot; into &quot;or-21&quot;, so ticket
                  keys survive dictation into a commit message. A bare number in ordinary prose is
                  left alone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ShieldCheck className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Password Fields Are Off Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Roundhand will not read or type into password fields.
                </p>
              </CardContent>
            </Card>
          </div>
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
          </div>
        </div>
      </section>

      {/* Notes & Credits */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Notes & Credits" centered={false} />
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Source</h3>
                  <p className="text-muted-foreground mb-4">
                    Roundhand is closed source and the repository is private. The app is a free
                    download, and the main design decision is written up in the{" "}
                    <Link href="/blog/rules-vs-llm-dictation-cleanup" className="project-link">
                      rules vs LLM post
                    </Link>
                    .
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Author:</strong> Avinash Sangle<br />
                    <strong>Website:</strong> roundhand.dev<br />
                    <strong>Year:</strong> 2026
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Built With</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Swift: the app and its cleanup pipeline</li>
                    <li>• NVIDIA Parakeet TDT 0.6B v3: speech recognition</li>
                    <li>• CoreML and the Neural Engine: on-device inference</li>
                    <li>• Built with Claude Code: AI-assisted development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <h2 className="text-3xl font-bold mb-4">Try Roundhand for a Day</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hold a key, say a sentence with an &quot;um&quot; and a &quot;scratch that&quot; in it,
            and see what lands.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://roundhand.dev" target="_blank" rel="noopener noreferrer">
                Download for Mac <ExternalLink className="ml-2 h-4 w-4" />
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
