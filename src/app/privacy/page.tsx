import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How avinashsangle.com handles your data: analytics, cookies, and contact-form details, plus your privacy rights and how to get in touch.",
  alternates: {
    canonical: "https://avinashsangle.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Avinash Sangle",
    description:
      "How avinashsangle.com handles your data: analytics, cookies, and contact-form details, plus your privacy rights.",
    url: "https://avinashsangle.com/privacy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const LAST_UPDATED = "May 26, 2026"

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  )
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-compact">
        <div className="container-project">
          <div className="hero-content">
            <h1 className="hero-title">Privacy Policy</h1>
            <p className="hero-subtitle">
              What data this site collects, why, and the choices you have
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-project max-w-3xl space-y-10 leading-relaxed text-muted-foreground">
          <p>
            This site (<strong>avinashsangle.com</strong>) is the personal portfolio of
            Avinash Sangle. I keep data collection to a minimum and never sell your
            personal information. This page explains exactly what is collected, why, and
            how you can control it.
          </p>

          <div className="space-y-4">
            <h2 className="section-title text-left">Information I collect</h2>

            <h3 className="text-lg font-semibold text-foreground">Analytics</h3>
            <p>
              I use two analytics tools to understand which pages are useful and where
              visitors come from:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Google Analytics 4</strong> — collects aggregated usage data such
                as pages viewed, time on page, referring site, approximate location
                (country/region, derived from your IP, which Google does not store),
                device type, browser, and operating system. It uses cookies. It is{" "}
                <strong>off by default</strong> and only activates if you select
                &ldquo;Accept&rdquo; on the cookie banner (Google Consent Mode v2).
              </li>
              <li>
                <strong>Vercel Web Analytics</strong> — a privacy-friendly,{" "}
                <strong>cookieless</strong> tool that counts page views and aggregate
                metrics (referrer, country, device/browser type) without cookies,
                cross-site tracking, or storing personal identifiers.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground">Contact form</h3>
            <p>
              If you use the contact form on the home page, the{" "}
              <strong>name, email address, subject, and message</strong> you enter are
              sent through Web3Forms to my email inbox so I can reply. This information is
              used only to respond to you.
            </p>

            <h3 className="text-lg font-semibold text-foreground">Server logs</h3>
            <p>
              The site is hosted on Vercel. Vercel&rsquo;s infrastructure may process
              standard request data (such as IP address and browser user-agent)
              transiently to serve pages and protect against abuse.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="section-title text-left">Cookies &amp; consent</h2>
            <p>
              The only cookies this site sets are Google Analytics cookies, and{" "}
              <strong>only after you accept them</strong>. There are no advertising
              cookies. Your choice is saved in your browser&rsquo;s local storage; if you
              decline, no analytics cookies are set. To change your decision, clear this
              site&rsquo;s data in your browser and the consent banner will appear again.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="section-title text-left">Third-party services</h2>
            <p>Data is processed by the following providers under their own privacy policies:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <ExternalLink href="https://policies.google.com/privacy">
                  Google (Analytics)
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://vercel.com/legal/privacy-policy">
                  Vercel (hosting &amp; analytics)
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://web3forms.com/privacy">
                  Web3Forms (contact-form delivery)
                </ExternalLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="section-title text-left">Data retention</h2>
            <p>
              Analytics data is retained according to Google Analytics and Vercel default
              retention settings. Messages you send via the contact form are kept only as
              long as needed to correspond with you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="section-title text-left">Your rights</h2>
            <p>
              Depending on where you live (for example, under the EU GDPR or India&rsquo;s
              DPDP Act), you may have the right to access, correct, or delete the personal
              data I hold about you, and to withdraw analytics consent at any time. To
              exercise any of these, email me at the address below.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="section-title text-left">Changes to this policy</h2>
            <p>
              I may update this policy as the site evolves. The &ldquo;Last updated&rdquo;
              date at the top reflects the most recent change.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="section-title text-left">Contact</h2>
            <p>
              Questions about this policy or your data? Email{" "}
              <a
                href="mailto:aavi.sangle@gmail.com"
                className="text-accent underline underline-offset-4 hover:opacity-80"
              >
                aavi.sangle@gmail.com
              </a>{" "}
              or use the{" "}
              <Link
                href="/#contact"
                className="text-accent underline underline-offset-4 hover:opacity-80"
              >
                contact form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
