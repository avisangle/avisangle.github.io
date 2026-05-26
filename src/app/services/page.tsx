import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Agents & Automation Consulting",
  description:
    "Hire Avinash Sangle to design and build custom AI agents, MCP integrations, and workflow automation — from prototype to production. Get a project quote.",
  keywords: [
    "AI automation consultant",
    "AI agent development",
    "hire AI engineer",
    "MCP integration services",
    "workflow automation consulting",
    "LLM integration",
    "AI consultant India",
  ],
  alternates: {
    canonical: "https://avinashsangle.com/services",
  },
  openGraph: {
    title: "AI Agents & Automation Consulting | Avinash Sangle",
    description:
      "Custom AI agents, MCP integrations, and workflow automation — from prototype to production.",
    url: "https://avinashsangle.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents & Automation Consulting | Avinash Sangle",
    description:
      "Custom AI agents, MCP integrations, and workflow automation — from prototype to production.",
  },
}

const offerings = [
  {
    icon: "Bot" as const,
    title: "Custom AI agents",
    description:
      "Autonomous agents that handle real work — research, operations, support, and content — wired into your tools and data.",
  },
  {
    icon: "Plug" as const,
    title: "LLM & MCP integrations",
    description:
      "Connect AI to the systems you already run — CRMs, CI/CD, internal APIs — using the Model Context Protocol so agents can act, not just chat.",
  },
  {
    icon: "Workflow" as const,
    title: "Workflow automation",
    description:
      "Replace repetitive, manual processes with reliable automation across APIs and services, with humans kept in the loop where it matters.",
  },
  {
    icon: "Rocket" as const,
    title: "Prototype to production",
    description:
      "Take a proof-of-concept to a deployed, monitored system that holds up under real usage — not a demo that breaks in week two.",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery call",
    description: "A short call to understand the problem, your stack, and what success looks like.",
  },
  {
    step: "02",
    title: "Scope & proposal",
    description: "A clear plan with deliverables, timeline, and a fixed project quote — no surprises.",
  },
  {
    step: "03",
    title: "Build & iterate",
    description: "I build in short cycles, sharing progress so we course-correct early.",
  },
  {
    step: "04",
    title: "Handoff & support",
    description: "Documented, deployed, and handed over — with support options if you want them.",
  },
]

const selectedWork = [
  { title: "Jenkins MCP Server", href: "/projects/jenkins-mcp", tag: "MCP integration" },
  { title: "Method CRM MCP", href: "/projects/method-crm-mcp", tag: "MCP integration" },
  { title: "AWS EC2 Agent", href: "/projects/aws-ec2-agent", tag: "AI agent" },
  { title: "Social Media Auto-Poster", href: "/projects/social-media-auto-poster", tag: "Automation" },
]

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "AI agents and automation work: custom agents, LLM and Model Context Protocol (MCP) integrations into existing systems, and workflow automation. If it involves wiring AI into real tools and getting it production-ready, it's a good fit.",
  },
  {
    q: "How do you charge?",
    a: "Projects are scoped and quoted up front based on the work involved — you get a fixed quote after the discovery call, so there are no open-ended hourly surprises. Reach out and we'll talk specifics.",
  },
  {
    q: "Do you work remotely / with teams in other time zones?",
    a: "Yes. I'm based in Pune, India and work remotely with teams worldwide, with overlap arranged around your hours.",
  },
  {
    q: "How do we get started?",
    a: "Send a message through the contact form with a few lines about your problem. I'll reply to set up a short discovery call, usually within 24–48 hours.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "AI Agents & Automation Consulting",
            name: "AI Agents & Automation Consulting",
            description:
              "Design and development of custom AI agents, MCP integrations, and workflow automation, from prototype to production.",
            provider: {
              "@type": "Person",
              name: "Avinash Sangle",
              url: "https://avinashsangle.com",
            },
            areaServed: "Worldwide",
            url: "https://avinashsangle.com/services",
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://avinashsangle.com/services" },
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
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">AI AGENTS & AUTOMATION CONSULTING</p>
            <h1 className="hero-title mb-6">Work with Me</h1>
            <p className="hero-description">
              I help teams turn AI from a demo into something that does real work — custom
              agents, MCP integrations, and automation built to run in production.
            </p>
            <div className="hero-cta">
              <Button size="lg" asChild>
                <Link href="/#contact">
                  Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#projects">See my work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What I help with */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader
            title="What I can help with"
            subtitle="Focused on one thing, done well: getting AI to act inside your systems."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((o) => (
              <Card key={o.title}>
                <CardHeader>
                  <CategoryIcon icon={o.icon} size="lg" variant="circle" className="mb-2 w-fit" />
                  <CardTitle>{o.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {o.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container-project">
          <SectionHeader
            title="How it works"
            subtitle="A simple, low-risk way to start — no long contracts before we know it's a fit."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <Card key={p.step}>
                <CardHeader>
                  <span className="text-accent font-mono text-2xl font-bold">{p.step}</span>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {p.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader
            title="Selected work"
            subtitle="A few projects that show the kind of AI and automation I build."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {selectedWork.map((w) => (
              <Link key={w.href} href={w.href} className="group">
                <Card className="h-full transition-colors hover:border-accent">
                  <CardContent className="flex items-center justify-between gap-4 pt-6">
                    <div>
                      <p className="text-accent text-sm font-semibold">{w.tag}</p>
                      <p className="font-semibold">{w.title}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-project">
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-subtitle mb-8">
            Quick answers on scope, pricing, and how an engagement works.
          </p>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i + 1}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>
                  <p>{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <h2 className="section-title">Have a project in mind?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Tell me what you&apos;re trying to build. I&apos;ll reply within 24–48 hours to set up
            a discovery call and a quote.
          </p>
          <Button size="lg" asChild>
            <Link href="/#contact">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
