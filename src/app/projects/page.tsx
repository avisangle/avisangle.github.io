import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import { TechBadge } from "@/components/ui/tech-badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { getAllProjects, getCategories, getTechnologies } from "@/data/projects"
import { ProjectsClient } from "./projects-client"

export const metadata: Metadata = {
  title: "All Projects | Avinash Sangle Portfolio",
  description:
    "Browse all projects by Avinash Sangle including AI automation, DevOps tools, cloud infrastructure, and MCP servers. Filter by category, technology, or search.",
  keywords: [
    "portfolio projects",
    "AI automation",
    "DevOps",
    "MCP servers",
    "cloud infrastructure",
    "software engineering",
    "Python projects",
    "Go projects",
    "JavaScript projects",
  ],
  openGraph: {
    title: "All Projects | Avinash Sangle",
    description: "Browse all projects including AI automation, DevOps tools, and cloud infrastructure",
    url: "https://avinashsangle.com/projects",
    type: "website",
  },
}

export default function AllProjectsPage() {
  const projects = getAllProjects()
  const categories = getCategories()
  const technologies = getTechnologies()

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "All Projects" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <SectionHeader
            title="All Projects"
            subtitle="Browse through my complete portfolio of AI automation, DevOps tools, cloud infrastructure, and MCP servers"
            centered
          />
        </div>
      </section>

      {/* Projects Grid with Client-side Filtering */}
      <section className="section section-alt">
        <div className="container-project">
          <ProjectsClient 
            projects={projects} 
            categories={categories}
            technologies={technologies}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container-project text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm available for consulting, custom development, and AI automation projects.
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}