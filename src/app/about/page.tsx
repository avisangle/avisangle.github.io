import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"

export const metadata: Metadata = {
  // 42 chars: the layout template appends " | Avinash Sangle" (+17) -> 59 rendered
  title: "About Avinash Sangle: AI & DevOps Engineer",
  description:
    "Avinash Sangle is a software engineer building AI agents, MCP integrations, and DevOps automation. His background, stack, selected work, and contact details.",
  keywords: [
    "Avinash Sangle",
    "about Avinash Sangle",
    "AI automation engineer",
    "DevOps engineer",
    "MCP developer",
    "AI agent developer",
  ],
  authors: [{ name: "Avinash Sangle" }],
  alternates: {
    canonical: "https://avinashsangle.com/about",
  },
  openGraph: {
    title: "About Avinash Sangle — AI Automation and DevOps Engineer",
    description:
      "Software engineer building AI agents, Model Context Protocol integrations, and DevOps automation that runs in production.",
    url: "https://avinashsangle.com/about",
    type: "profile",
    images: [{ url: "https://avinashsangle.com/og-home.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Avinash Sangle — AI Automation and DevOps Engineer",
    description:
      "Software engineer building AI agents, Model Context Protocol integrations, and DevOps automation that runs in production.",
    images: ["https://avinashsangle.com/og-home.png"],
  },
}

const focusAreas = [
  {
    icon: "Bot" as const,
    title: "AI agents & automation",
    description:
      "Building AI-powered automation and conversational interfaces using Model Context Protocol (MCP). Creating intelligent tools that make complex operations accessible through natural language.",
  },
  {
    icon: "Cloud" as const,
    title: "Cloud technologies",
    description:
      "Scalable cloud architecture, containerization, and microservices design. Certified in Microsoft Azure and Oracle Cloud Infrastructure.",
  },
  {
    icon: "Wrench" as const,
    title: "DevOps & CI/CD",
    description:
      "CI/CD pipelines, Infrastructure as Code, and process automation — with a focus on Jenkins automation and wiring AI agents into DevOps workflows.",
  },
  {
    icon: "Database" as const,
    title: "Database & backend",
    description:
      "Database design and optimization, query performance tuning, and data modeling. Experience with SQL and NoSQL solutions for scalable applications.",
  },
]

const skillGroups = [
  {
    icon: "Code" as const,
    title: "Languages",
    skills: ["Python", "Java", "Go", "JavaScript", "PHP", "SQL"],
  },
  {
    icon: "Brain" as const,
    title: "AI/ML",
    skills: [
      "Generative AI & LLMs",
      "Model Context Protocol",
      "RAG Chatbots",
      "Natural Language Processing",
      "AI Integration",
    ],
  },
  {
    icon: "Cloud" as const,
    title: "Cloud",
    skills: ["Microsoft Azure", "Oracle Cloud (OCI)", "AWS", "GCP", "Cloud Architecture"],
  },
  {
    icon: "Settings" as const,
    title: "DevOps",
    skills: [
      "Jenkins",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Automation",
      "Containerization",
    ],
  },
]

const selectedWork = [
  { title: "Jenkins MCP Server", href: "/projects/jenkins-mcp", tag: "MCP integration" },
  { title: "Method CRM MCP", href: "/projects/method-crm-mcp", tag: "MCP integration" },
  { title: "AWS EC2 Agent", href: "/projects/aws-ec2-agent", tag: "AI agent" },
  { title: "Social Media Auto-Poster", href: "/projects/social-media-auto-poster", tag: "Automation" },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Avinash Sangle",
            jobTitle: "AI & Automation Engineer",
            description:
              "Software engineer specializing in AI automation, DevOps, and cloud technologies. Builds custom AI agents, Model Context Protocol (MCP) integrations, and CI/CD automation.",
            url: "https://avinashsangle.com/about",
            image: "https://avinashsangle.com/og-home.png",
            email: "aavi.sangle@gmail.com",
            sameAs: [
              "https://github.com/avisangle",
              "https://www.linkedin.com/in/avinashsangle/",
              "https://www.youtube.com/@AIAgentOps",
              "https://x.com/avi_sangle",
            ],
            knowsAbout: [
              "AI Automation",
              "DevOps",
              "Cloud Architecture",
              "Model Context Protocol",
              "Jenkins",
              "Python Programming",
              "Go Programming",
              "MCP Server Development",
              "CI/CD Pipelines",
              "Generative AI",
            ],
            mainEntityOfPage: "https://avinashsangle.com/about",
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
              { "@type": "ListItem", position: 2, name: "About", item: "https://avinashsangle.com/about" },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      </div>

      {/* Hero — answer-first */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">ABOUT</p>
            <h1 className="hero-title mb-6">
              Avinash Sangle — AI Automation and DevOps Engineer, Pune India
            </h1>
            <p className="hero-description">
              Avinash Sangle is a software engineer who builds AI automation and DevOps systems.
              He designs custom AI agents, Model Context Protocol (MCP) integrations, and CI/CD
              automation that connect large language models to real tools like Jenkins, AWS, and
              CRMs. He is based in Pune, India, and works remotely with teams worldwide.
            </p>
            <div className="hero-cta">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What he works on */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader
            title="What Avinash works on"
            subtitle="Bridging artificial intelligence and traditional software engineering practices."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <Card key={area.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CategoryIcon
                      icon={area.icon}
                      size="md"
                      animation="hover-rotate"
                      variant="circle"
                    />
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & stack */}
      <section className="section">
        <div className="container-project">
          <SectionHeader
            title="Skills and stack"
            subtitle="Technical capabilities across languages, AI, cloud, and DevOps."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <Card key={group.title}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CategoryIcon icon={group.icon} size="sm" animation="hover-rotate" />
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
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
            subtitle="A few projects that show the kind of AI and automation Avinash builds."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {selectedWork.map((work) => (
              <Link key={work.href} href={work.href} className="group">
                <Card className="h-full transition-colors hover:border-accent">
                  <CardContent className="flex items-center justify-between gap-4 pt-6">
                    <div>
                      <p className="text-accent text-sm font-semibold">{work.tag}</p>
                      <p className="font-semibold">{work.title}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">All projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Consulting services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How to reach him */}
      <section className="section">
        <div className="container-project text-center">
          <h2 className="section-title">How to reach Avinash</h2>
          <p className="section-subtitle mx-auto mb-8">
            For collaborations, project inquiries, or a general question, use the{" "}
            <Link
              href="/contact"
              className="text-accent underline underline-offset-4 hover:opacity-80"
            >
              contact page
            </Link>{" "}
            or email{" "}
            <a
              href="mailto:aavi.sangle@gmail.com"
              className="text-accent underline underline-offset-4 hover:opacity-80"
            >
              aavi.sangle@gmail.com
            </a>
            . Replies usually go out within 24&ndash;48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Avinash <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/avisangle" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://www.linkedin.com/in/avinashsangle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
