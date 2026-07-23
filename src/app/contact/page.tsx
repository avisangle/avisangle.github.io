import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import { ContactForm } from "@/components/contact-form"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const metadata: Metadata = {
  // 40 chars: the layout template appends " | Avinash Sangle" (+17) -> 57 rendered
  title: "Contact Avinash Sangle — Start a Project",
  description:
    "Contact Avinash Sangle about AI agents, MCP integrations, or DevOps automation. Send a message through the form or email directly — replies in 24-48 hours.",
  keywords: [
    "contact Avinash Sangle",
    "hire AI engineer",
    "AI automation consultant contact",
    "MCP integration developer",
    "DevOps automation consultant",
  ],
  authors: [{ name: "Avinash Sangle" }],
  alternates: {
    canonical: "https://avinashsangle.com/contact",
  },
  openGraph: {
    title: "Contact Avinash Sangle — AI Automation & DevOps Engineer",
    description:
      "Get in touch about AI agents, MCP integrations, and workflow automation. Send a message or reach out on GitHub, LinkedIn, or email.",
    url: "https://avinashsangle.com/contact",
    type: "website",
    images: [{ url: "https://avinashsangle.com/og-home.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Avinash Sangle — AI Automation & DevOps Engineer",
    description:
      "Get in touch about AI agents, MCP integrations, and workflow automation. Send a message or reach out on GitHub, LinkedIn, or email.",
    images: ["https://avinashsangle.com/og-home.png"],
  },
}

const channels = [
  {
    icon: "Mail" as const,
    label: "Email",
    value: "aavi.sangle@gmail.com",
    href: "mailto:aavi.sangle@gmail.com",
    external: false,
  },
  {
    icon: "Github" as const,
    label: "GitHub",
    value: "github.com/avisangle",
    href: "https://github.com/avisangle",
    external: true,
  },
  {
    icon: "Linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/avinashsangle",
    href: "https://www.linkedin.com/in/avinashsangle/",
    external: true,
  },
  {
    icon: "Youtube" as const,
    label: "YouTube",
    value: "@AIAgentOps",
    href: "https://www.youtube.com/@AIAgentOps",
    external: true,
  },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Avinash Sangle",
            description:
              "Contact page for Avinash Sangle — AI automation and DevOps engineer. Reach out about AI agents, MCP integrations, and workflow automation projects.",
            url: "https://avinashsangle.com/contact",
            mainEntity: {
              "@type": "Person",
              name: "Avinash Sangle",
              jobTitle: "AI & Automation Engineer",
              url: "https://avinashsangle.com/about",
              image: "https://avinashsangle.com/og-home.png",
              email: "aavi.sangle@gmail.com",
              sameAs: [
                "https://github.com/avisangle",
                "https://www.linkedin.com/in/avinashsangle/",
                "https://www.youtube.com/@AIAgentOps",
                "https://x.com/avi_sangle",
              ],
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://avinashsangle.com" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://avinashsangle.com/contact" },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div>

      {/* Hero — answer-first */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">CONTACT</p>
            <h1 className="hero-title mb-6">
              Contact Avinash Sangle — AI Automation & DevOps Engineer
            </h1>
            <p className="hero-description">
              Reach out about AI agents, Model Context Protocol (MCP) integrations, workflow
              automation, and DevOps or cloud projects — as well as job opportunities, general
              questions, and feedback. Send a message with a few lines about your problem and
              you&apos;ll get a reply within 24&ndash;48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader
            title="Send a message"
            subtitle="The fastest way to start a conversation — it lands straight in my inbox."
          />
          <ContactForm />
        </div>
      </section>

      {/* Direct channels */}
      <section className="section">
        <div className="container-project">
          <SectionHeader
            title="Other ways to reach me"
            subtitle="Prefer email or a direct message? These all work."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                className="group"
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Card className="h-full transition-colors hover:border-accent">
                  <CardContent className="flex items-center gap-4 pt-6">
                    <CategoryIcon icon={channel.icon} size="md" variant="circle" />
                    <div className="min-w-0">
                      <p className="text-accent text-sm font-semibold">{channel.label}</p>
                      <p className="font-semibold break-all">{channel.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <p className="section-subtitle mx-auto mt-8 text-center">
            Curious what I work on first? Read{" "}
            <Link
              href="/about"
              className="text-accent underline underline-offset-4 hover:opacity-80"
            >
              about Avinash
            </Link>{" "}
            or see the{" "}
            <Link
              href="/services"
              className="text-accent underline underline-offset-4 hover:opacity-80"
            >
              consulting services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <div className="section-alt">
        <NewsletterSignup />
      </div>
    </>
  )
}
