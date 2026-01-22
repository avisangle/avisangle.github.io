import type { Metadata } from "next"
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
        url: "https://avinashsangle.com/assets/og-home.jpg",
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
    images: ["https://avinashsangle.com/assets/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </body>
    </html>
  )
}
