import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsentBanner } from "@/components/consent-banner"

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

// Google Analytics 4 Measurement ID. Replace with the ID from your GA4 web
// data stream (Admin → Data Streams → Web). It's a public value, safe to commit.
const GA_MEASUREMENT_ID: string = "G-89KDVPLEKW"
const enableAnalytics =
  process.env.NODE_ENV === "production" && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"

export const metadata: Metadata = {
  title: {
    default: "Avinash Sangle | AI Automation & DevOps Engineer",
    template: "%s | Avinash Sangle",
  },
  description:
    "Software Engineer specializing in AI automation, DevOps, and cloud technologies. Building intelligent solutions with Model Context Protocol, Jenkins, AWS, and conversational AI.",
  keywords: [
    "AI automation engineer",
    "DevOps specialist",
    "cloud architect",
    "Model Context Protocol",
    "Jenkins automation",
    "CI/CD pipelines",
    "conversational AI",
    "Python developer",
    "Go programming",
    "AWS solutions architect",
  ],
  authors: [{ name: "Avinash Sangle" }],
  creator: "Avinash Sangle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avinashsangle.com",
    siteName: "Avinash Sangle - Portfolio",
    title: "Avinash Sangle | AI Automation & DevOps Engineer",
    description:
      "Building intelligent automation solutions with AI, DevOps, and cloud technologies",
    images: [
      {
        url: "https://avinashsangle.com/og-home.png",
        width: 1200,
        height: 630,
        alt: "Avinash Sangle Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Sangle | AI Automation & DevOps Engineer",
    description:
      "Building intelligent automation solutions with AI, DevOps, and cloud technologies",
    images: ["https://avinashsangle.com/og-home.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://avinashsangle.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${ibmPlexMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        {/* OmniAgent Universal Shim */}
        <Script id="omniagent-config" strategy="beforeInteractive">
          {`window.OMNIAGENT_CONFIG = {
            registryUrl: 'https://omniagent-registry.aavi-sangle.workers.dev',
            timeout: 3000,
            debug: true
          };`}
        </Script>
        <Script
          src="https://omniagent-shim.pages.dev/omniagent-shim.min.js"
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 */}
        {enableAnalytics && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              // Consent Mode v2: deny storage by default until the visitor opts in.
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}
        {enableAnalytics && <ConsentBanner />}
        {/* Vercel Web Analytics (cookieless) */}
        <Analytics />
      </body>
    </html>
  )
}
