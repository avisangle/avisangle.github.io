import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeader } from "@/components/section-header"
import { ArrowRight, ExternalLink, Sparkles, Bot, Cloud, Wrench, Database, Code, Brain, Settings, Mail } from "lucide-react"
import Link from "next/link"
import { CategoryIcon } from "@/components/icons/category-icon"
import { TechBadge } from "@/components/ui/tech-badge"
import { getFeaturedProjects } from "@/data/projects"

export default function Home() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Avinash Sangle",
            jobTitle: "AI & Automation Engineer",
            description:
              "Software Engineer specializing in AI automation, DevOps, and cloud technologies. Building intelligent solutions with Model Context Protocol, Jenkins, AWS, and conversational AI.",
            url: "https://avinashsangle.com",
            email: "aavi.sangle@gmail.com",
            sameAs: [
              "https://github.com/avisangle",
              "https://www.linkedin.com/in/avinashsangle/",
              "https://www.youtube.com/@AIAgentOps",
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
                name: "What is the Model Context Protocol (MCP)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Model Context Protocol (MCP) is an open standard that enables AI assistants to connect with external data sources and tools. It allows LLMs to securely interact with APIs, databases, and services through a standardized interface.",
                },
              },
              {
                "@type": "Question",
                name: "What services does Avinash Sangle offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Avinash specializes in AI automation, DevOps consulting, cloud architecture, and MCP server development. Services include building AI-powered tools, CI/CD pipeline optimization, and intelligent automation solutions.",
                },
              },
              {
                "@type": "Question",
                name: "How can AI agents automate DevOps workflows?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI agents can automate DevOps workflows by integrating with tools like Jenkins through MCP servers, enabling natural language commands for builds, deployments, and infrastructure management.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="container-project">
          <div className="hero-content">
            <div className="hero-greeting fade-in-up stagger-1 flex items-center justify-center gap-3">
              <span>Hi, I&apos;m Avinash Sangle</span>
              <Sparkles className="w-7 h-7 text-accent float-animation" />
            </div>
            <h1 className="hero-title fade-in-up stagger-2">
              Software Engineer specializing in
              <br />
              <span className="text-accent">AI Integration & DevOps Automation</span>
            </h1>
            <p className="hero-subtitle fade-in-up stagger-3">
              Building intelligent solutions that bridge AI and DevOps
            </p>
            <p className="hero-description fade-in-up stagger-4">
              I&apos;m passionate about building intelligent solutions that bridge the gap between
              artificial intelligence and traditional software engineering practices. Currently
              exploring the intersection of AI and DevOps, building tools that make complex
              operations more accessible through conversational interfaces and intelligent
              automation.
            </p>
            <div className="hero-cta fade-in-up stagger-5">
              <Button size="lg" asChild>
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container-project">
          <SectionHeader
            title="About Avinash - AI & Automation Engineer"
            subtitle="Passionate about building efficient, scalable, and user-focused AI-powered solutions"
          />
          <div className="grid-2">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CategoryIcon icon="Bot" size="md" animation="hover-rotate" variant="circle" />
                  AI Agents & Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building AI-powered automation and conversational interfaces using Model Context
                  Protocol (MCP). Creating intelligent tools that make complex operations accessible
                  through natural language.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CategoryIcon icon="Cloud" size="md" animation="hover-rotate" variant="circle" />
                  Cloud Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expertise in scalable cloud architecture, containerization, and microservices
                  design. Certified in Microsoft Azure and Oracle Cloud Infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CategoryIcon icon="Wrench" size="md" animation="hover-rotate" variant="circle" />
                  DevOps & CI/CD
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  CI/CD pipelines, Infrastructure as Code, and process automation. Specializing in
                  Jenkins automation and integration with AI agents for intelligent DevOps
                  workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CategoryIcon icon="Database" size="md" animation="hover-rotate" variant="circle" />
                  Database & Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Database design and optimization, query performance tuning, and data modeling.
                  Experience with SQL and NoSQL solutions for scalable applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container-project">
          <SectionHeader
            title="Featured Projects"
            subtitle="Innovative solutions in AI automation, DevOps, cloud infrastructure, and CRM integration"
          />
          <div className="grid-3">
            {getFeaturedProjects().map((project) => (
              <Card key={project.id} className="card-hover">
                <CardHeader>
                  <CategoryIcon icon={project.icon} size="xl" animation="pulse" variant="square" />
                  <Badge variant="secondary" className="w-fit mb-2">
                    {project.badge}
                  </Badge>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="tech-stack">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} className="badge-primary-outline" />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Badge variant="outline" asChild>
                    <Link href={project.route}>Learn More →</Link>
                  </Badge>
                  {project.liveUrl && (
                    <Badge variant="default" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Badge>
                  )}
                  {project.youtubeUrl && !project.liveUrl && (
                    <Badge variant="default" asChild>
                      <Link href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                View All Projects →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container-project">
          <SectionHeader
            title="Skills & Expertise"
            subtitle="Technical capabilities across multiple domains"
          />
          <div className="grid-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CategoryIcon icon="Code" size="sm" animation="hover-rotate" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Python</li>
                  <li>Java</li>
                  <li>Go</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>SQL</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CategoryIcon icon="Brain" size="sm" animation="hover-rotate" />
                  AI/ML
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Generative AI & LLMs</li>
                  <li>Model Context Protocol</li>
                  <li>RAG Chatbots</li>
                  <li>Natural Language Processing</li>
                  <li>AI Integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CategoryIcon icon="Cloud" size="sm" animation="hover-rotate" />
                  Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Microsoft Azure</li>
                  <li>Oracle Cloud (OCI)</li>
                  <li>AWS</li>
                  <li>GCP</li>
                  <li>Cloud Architecture</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CategoryIcon icon="Settings" size="sm" animation="hover-rotate" />
                  DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Jenkins</li>
                  <li>CI/CD Pipelines</li>
                  <li>Infrastructure as Code</li>
                  <li>Automation</li>
                  <li>Containerization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section">
        <div className="container-project">
          <SectionHeader
            title="Technical Blog & Case Studies"
            subtitle="Deep dives into AI automation, DevOps practices, and cloud architecture"
          />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Building2" size="lg" animation="pulse" />
                <CardTitle>Method CRM MCP Server Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete guide to setting up and using the Method CRM MCP Server for AI-powered
                  CRM integration.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://blog.avinashsangle.com/method-crm-mcp"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Wrench" size="lg" animation="pulse" />
                <CardTitle>Jenkins + AI Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Case study on integrating conversational AI with Jenkins for intelligent DevOps
                  workflows.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/projects/jenkins-chatbot" className="project-link">
                  Read Case Study →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Cloud" size="lg" animation="pulse" />
                <CardTitle>Cloud Infrastructure with AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  How to deploy and manage cloud resources using natural language commands and AI
                  agents.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/projects/aws-ec2-agent" className="project-link">
                  Read Case Study →
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="https://blog.avinashsangle.com" target="_blank" rel="noopener noreferrer">
                View All Articles →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-alt">
        <div className="container-project">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common questions about AI automation, MCP, and my services"
            centered
          />
          <div className="container-content">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What is the Model Context Protocol (MCP)?</AccordionTrigger>
                <AccordionContent>
                  The Model Context Protocol (MCP) is an open standard that enables AI assistants
                  to connect with external data sources and tools. It allows LLMs to securely
                  interact with APIs, databases, and services through a standardized interface.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                <AccordionContent>
                  I specialize in AI automation, DevOps consulting, cloud architecture, and MCP
                  server development. Services include building AI-powered tools, CI/CD pipeline
                  optimization, and intelligent automation solutions for startups and enterprises.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>How can AI agents automate DevOps workflows?</AccordionTrigger>
                <AccordionContent>
                  AI agents can automate DevOps workflows by integrating with tools like Jenkins
                  through MCP servers, enabling natural language commands for builds, deployments,
                  and infrastructure management. This reduces manual intervention and speeds up
                  release cycles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>Do you work with startups?</AccordionTrigger>
                <AccordionContent>
                  Yes! I enjoy working with startups and established companies alike. Whether you
                  need help building an AI-powered product, optimizing your DevOps pipeline, or
                  developing custom MCP integrations, I&apos;m happy to discuss your project.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-project">
          <SectionHeader
            title="Let's Connect!"
            subtitle="Feel free to reach out for collaborations, opportunities, or just a friendly chat"
          />
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <Button size="lg" asChild>
              <Link href="mailto:aavi.sangle@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Me
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/avisangle" target="_blank" rel="noopener noreferrer">
                GitHub Profile
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
