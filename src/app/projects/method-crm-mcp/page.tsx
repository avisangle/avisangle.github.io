import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Method CRM MCP Server | Production-Ready CRM Integration",
  description:
    "Production-ready Model Context Protocol server for Method CRM API integration. 20 comprehensive tools enabling LLMs to interact with Method CRM data.",
  keywords: [
    "Method CRM",
    "MCP server",
    "CRM integration",
    "API integration",
    "Model Context Protocol",
    "Python MCP",
    "CRM automation",
    "LLM integration",
    "QuickBooks integration",
    "business automation",
  ],
  openGraph: {
    title: "Method CRM MCP Server | Production-Ready CRM Integration",
    description: "Production-ready MCP server with 20 tools for Method CRM integration",
    url: "https://avinashsangle.com/projects/method-crm-mcp",
    type: "article",
  },
}

export default function MethodCRMMCPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Method CRM MCP Server",
            description:
              "Production-ready MCP server for Method CRM API integration with 20 comprehensive tools",
            applicationCategory: "DeveloperApplication",
            programmingLanguage: "Python",
            author: { "@type": "Person", name: "Avinash Sangle" },
            url: "https://github.com/avisangle/method-crm-mcp",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/#projects" },
            { label: "Method CRM MCP Server" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-project">
          <div className="hero-content">
            <p className="text-accent font-semibold mb-4">PRODUCTION-READY CRM INTEGRATION</p>
            <h1 className="hero-title mb-6">Method CRM MCP Server</h1>
            <p className="hero-description">
              Production-ready Model Context Protocol server for Method CRM API integration with 20
              comprehensive tools
            </p>
            <div className="hero-cta">
              <Button variant="outline" asChild>
                <Link href="/#projects">← Back to Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Project Overview" centered={false} />
          <div className="grid-2">
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Method CRM MCP Server is a production-ready Model Context Protocol (MCP) server that
                enables LLMs to interact with Method CRM data through well-designed tools. This server
                provides comprehensive access to Method CRM&apos;s functionality including tables,
                files, users, events, and API key management.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Built with enterprise-grade features like API key authentication, automatic rate
                limiting, retry logic, and full type safety through Pydantic validation.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="tech-stack mb-6">
                  <Badge variant="outline" className="badge-primary-outline">Python</Badge>
                  <Badge variant="outline" className="badge-primary-outline">MCP</Badge>
                  <Badge variant="outline" className="badge-primary-outline">Pydantic</Badge>
                  <Badge variant="outline" className="badge-primary-outline">Method CRM API</Badge>
                </div>
                <CardTitle className="mb-6">Key Features</CardTitle>
                <ul className="skill-list">
                  <li>20 comprehensive tools</li>
                  <li>Production-ready authentication</li>
                  <li>Dual transport support</li>
                  <li>Rate limiting & retry logic</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Quick Start" centered={false} />
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block mb-6">
                <code>{`# Clone the repository
git clone https://github.com/avisangle/method-crm-mcp.git
cd method-crm-mcp

# Install dependencies
pip install -r requirements.txt

# Set environment variables
export METHOD_API_KEY="your_api_key_here"

# Run the server
python -m method_crm_mcp`}</code>
              </pre>
              <p className="text-muted-foreground">
                For detailed configuration options and advanced setup, see the{" "}
                <Link
                  href="https://github.com/avisangle/method-crm-mcp#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  README on GitHub
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What It Does */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="What It Does" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="BarChart" size="lg" animation="pulse" />
                <CardTitle>Table Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive CRUD operations for Method CRM tables. Query, create, update, and
                  delete records with OData filtering and pagination support.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Folder" size="lg" animation="pulse" />
                <CardTitle>File Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload, download, and manage files linked to CRM records. Supports invoices,
                  documents, and attachments with automatic base64 encoding.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Zap" size="lg" animation="pulse" />
                <CardTitle>Event Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create automated routines triggered by CRM events. Send emails, update records,
                  or execute custom actions on record creation or updates.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Key" size="lg" animation="pulse" />
                <CardTitle>API Key Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create and manage API keys with granular permissions. Support for read/write
                  access control and key lifecycle management.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Users" size="lg" animation="pulse" />
                <CardTitle>User Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Retrieve authenticated user information and account details for audit trails and
                  permissions management.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Lock" size="lg" animation="pulse" />
                <CardTitle>Type Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full Pydantic validation for all inputs and outputs. Actionable error messages
                  with clear suggestions for resolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Why It Matters" centered={false} />
          <div className="grid-2">
            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🚀 Production-Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enterprise-grade features including authentication, rate limiting, retry logic,
                  and comprehensive error handling make it deployment-ready.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>🤖 LLM Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enables AI assistants to interact with Method CRM, allowing natural language CRM
                  operations and intelligent automation.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>⚡ Dual Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supports both stdio (local) and streamable HTTP (remote) transports, enabling
                  flexible deployment options for any environment.
                </p>
              </CardContent>
            </Card>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>📈 Comprehensive Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  20 tools covering all major Method CRM operations - from customer management to
                  file uploads to event automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Highlights */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Implementation Highlights" centered={false} />

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>🏗️ Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid-2">
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">API Integration</h4>
                  <p className="text-muted-foreground">
                    Full Method CRM API coverage with OData query support, pagination, and
                    filtering. Handles complex operations like customer creation and inventory
                    management.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Authentication</h4>
                  <p className="text-muted-foreground">
                    API key authentication fully implemented with OAuth2 placeholders. Secure
                    credential management through environment variables.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Rate Limiting</h4>
                  <p className="text-muted-foreground">
                    Automatic handling of API rate limits with exponential backoff and retry
                    logic. Prevents quota exhaustion and ensures reliable operations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">Type Safety</h4>
                  <p className="text-muted-foreground">
                    Pydantic models for all tool inputs and outputs. Comprehensive validation with
                    actionable error messages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>✨ Available Tools (20 Total)</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="text-accent font-semibold mb-2">Table Operations (5 tools)</h4>
              <ul className="skill-list mb-6">
                <li>
                  <code>method_tables_query</code> - Query tables with OData filtering
                </li>
                <li>
                  <code>method_tables_get</code> - Get specific record by ID
                </li>
                <li>
                  <code>method_tables_create</code> - Create new records
                </li>
                <li>
                  <code>method_tables_update</code> - Update existing records
                </li>
                <li>
                  <code>method_tables_delete</code> - Delete records
                </li>
              </ul>

              <h4 className="text-accent font-semibold mb-2">File Management (6 tools)</h4>
              <ul className="skill-list mb-6">
                <li>
                  <code>method_files_upload</code> - Upload files with base64 encoding
                </li>
                <li>
                  <code>method_files_list</code> - List files with optional filtering
                </li>
                <li>
                  <code>method_files_download</code> - Download file content
                </li>
                <li>
                  <code>method_files_get_url</code> - Get direct file URLs
                </li>
                <li>
                  <code>method_files_update_link</code> - Update file-record links
                </li>
                <li>
                  <code>method_files_delete</code> - Delete files
                </li>
              </ul>

              <h4 className="text-accent font-semibold mb-2">Event Automation (4 tools)</h4>
              <ul className="skill-list mb-6">
                <li>
                  <code>method_events_create_routine</code> - Create automated routines
                </li>
                <li>
                  <code>method_events_list_routines</code> - List all routines
                </li>
                <li>
                  <code>method_events_get_routine</code> - Get routine details
                </li>
                <li>
                  <code>method_events_delete_routine</code> - Delete routines
                </li>
              </ul>

              <h4 className="text-accent font-semibold mb-2">API Key Management (4 tools)</h4>
              <ul className="skill-list">
                <li>
                  <code>method_apikeys_create</code> - Create new API keys
                </li>
                <li>
                  <code>method_apikeys_list</code> - List all API keys
                </li>
                <li>
                  <code>method_apikeys_update</code> - Update key permissions
                </li>
                <li>
                  <code>method_apikeys_delete</code> - Revoke API keys
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section">
        <div className="container-project">
          <SectionHeader title="Related Projects" centered={false} />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>
                  MCP server enabling AI agents to interact with Jenkins programmatically.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/jenkins-mcp" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  MCP Server
                </Badge>
                <CardTitle>Calculator Server</CardTitle>
                <CardDescription>Go-based MCP server for mathematical computations.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/calculator-server" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Cloud Automation
                </Badge>
                <CardTitle>AWS EC2 with AI Agent</CardTitle>
                <CardDescription>Natural language cloud infrastructure deployment.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/aws-ec2-agent" className="project-link">
                  Learn More →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container-project text-center">
          <h2 className="section-title">Explore the Code</h2>
          <p className="section-subtitle mx-auto mb-8">
            Check out the GitHub repository for implementation details, installation guide, and
            comprehensive documentation
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link
                href="https://github.com/avisangle/method-crm-mcp"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
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
