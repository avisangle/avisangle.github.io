import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to Method CRM MCP Server | AI-Powered CRM Integration",
  description:
    "Learn how to set up, configure, and use the Method CRM MCP Server to enable AI assistants to interact with your CRM data. Comprehensive guide with examples.",
  keywords: [
    "Method CRM MCP Server tutorial",
    "CRM AI integration",
    "Model Context Protocol guide",
    "Claude Desktop CRM",
    "Method CRM automation",
    "MCP server setup",
    "AI CRM assistant",
    "Method API integration",
  ],
  openGraph: {
    title: "Complete Guide to Method CRM MCP Server | AI-Powered CRM Integration",
    description:
      "Learn how to enable AI assistants to interact with Method CRM using the Model Context Protocol.",
    url: "https://avinashsangle.com/blog/method-crm-mcp",
    type: "article",
  },
}

export default function MethodCRMMCPBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "Complete Guide to Method CRM MCP Server: AI-Powered CRM Integration",
            description:
              "Learn how to set up, configure, and use the Method CRM MCP Server to enable AI assistants to interact with your CRM data.",
            author: {
              "@type": "Person",
              name: "Avinash Sangle",
              url: "https://avinashsangle.com",
            },
            datePublished: "2025-01-15",
            dateModified: "2025-01-15",
            mainEntityOfPage: "https://avinashsangle.com/blog/method-crm-mcp",
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="container-project pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Method CRM MCP Server Guide" },
          ]}
        />
      </div>

      {/* Article Header */}
      <section className="section">
        <div className="container-project">
          <div className="container-content">
            <p className="text-accent font-semibold mb-4">AI & AUTOMATION</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Complete Guide to Method CRM MCP Server: Enable AI to Manage Your CRM
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Learn how to set up, configure, and use the Method CRM MCP Server to enable AI
              assistants like Claude to interact with your CRM data through natural language
              commands.
            </p>
            <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-8">
              <span>📅 January 15, 2025</span>
              <span>•</span>
              <span>⏱️ 12 min read</span>
              <span>•</span>
              <span>🏷️ MCP, CRM, AI Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-alt py-8">
        <div className="container-project">
          <div className="container-content">
            <Card>
              <CardHeader>
                <CardTitle>📑 Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal ml-6 space-y-2">
                  <li>
                    <Link href="#introduction" className="text-accent hover:underline">
                      What is Method CRM MCP Server?
                    </Link>
                  </li>
                  <li>
                    <Link href="#prerequisites" className="text-accent hover:underline">
                      Prerequisites
                    </Link>
                  </li>
                  <li>
                    <Link href="#installation" className="text-accent hover:underline">
                      Installation & Setup
                    </Link>
                  </li>
                  <li>
                    <Link href="#claude-desktop" className="text-accent hover:underline">
                      Claude Desktop Configuration
                    </Link>
                  </li>
                  <li>
                    <Link href="#features" className="text-accent hover:underline">
                      Features & Available Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="#usage-examples" className="text-accent hover:underline">
                      Usage Examples
                    </Link>
                  </li>
                  <li>
                    <Link href="#best-practices" className="text-accent hover:underline">
                      Best Practices
                    </Link>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="section">
        <div className="container-project">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-6">What is Method CRM MCP Server?</h2>
            <p className="text-lg leading-relaxed mb-6">
              The <strong>Method CRM MCP Server</strong> is a production-ready implementation of the
              Model Context Protocol (MCP) that enables AI assistants like Claude to interact with
              your Method CRM data. Instead of manually navigating the CRM interface, you can use
              natural language commands to query customers, create records, manage files, and
              automate workflows.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Method CRM</strong> is a popular CRM platform especially favored by QuickBooks
              users for its deep integration and customization capabilities. By connecting it to AI
              through MCP, you unlock powerful automation possibilities.
            </p>

            <Card className="card-accent-left">
              <CardHeader>
                <CardTitle>💡 What You Can Do</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Query customers, contacts, and opportunities using natural language</li>
                  <li>Create and update CRM records through conversation</li>
                  <li>Upload and manage files attached to records</li>
                  <li>Set up automated event routines</li>
                  <li>Manage API keys and user permissions</li>
                  <li>Generate reports and insights from your CRM data</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section id="prerequisites" className="section section-alt">
        <div className="container-project">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
            <p className="text-lg leading-relaxed mb-6">
              Before getting started, ensure you have the following:
            </p>

            <div className="grid-2 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>🔧 System Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>Python 3.10 or higher</li>
                    <li>pip package manager</li>
                    <li>Git (for cloning)</li>
                    <li>Claude Desktop app (optional)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>🔑 Method CRM Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>Active Method CRM account</li>
                    <li>API access enabled</li>
                    <li>API key with appropriate permissions</li>
                    <li>Admin access (for API key creation)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-bold mb-4">Getting Your Method CRM API Key</h3>
            <ol className="list-decimal ml-6 space-y-2 text-lg">
              <li>
                Log into your Method CRM account at{" "}
                <Link
                  href="https://www.method.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  method.me
                </Link>
              </li>
              <li>
                Navigate to <strong>Customize → API Keys</strong>
              </li>
              <li>
                Click <strong>Create New API Key</strong>
              </li>
              <li>Set permissions based on your needs (Read, Write, or Full Access)</li>
              <li>Copy and securely store your API key</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="section">
        <div className="container-project">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-6">Installation & Setup</h2>

            <h3 className="text-xl font-bold mb-4">Step 1: Clone the Repository</h3>
            <CodeBlock
              code={`git clone https://github.com/avisangle/method-crm-mcp.git
cd method-crm-mcp`}
              language="bash"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">Step 2: Create Virtual Environment</h3>
            <CodeBlock
              code={`# Create virtual environment
python -m venv venv

# Activate on macOS/Linux
source venv/bin/activate

# Activate on Windows
.\\venv\\Scripts\\activate`}
              language="bash"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">Step 3: Install Dependencies</h3>
            <CodeBlock
              code="pip install -r requirements.txt"
              language="bash"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">Step 4: Configure Environment Variables</h3>
            <CodeBlock
              code={`# Set environment variable
export METHOD_API_KEY="your_api_key_here"`}
              language="bash"
              className="mb-6"
            />

            <h3 className="text-xl font-bold mb-4">Step 5: Test the Installation</h3>
            <CodeBlock
              code={`# Run the server
python -m method_crm_mcp`}
              language="bash"
              className="mb-6"
            />
          </div>
        </div>
      </section>

      {/* Claude Desktop Configuration */}
      <section id="claude-desktop" className="section section-alt">
        <div className="container-project">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-6">Claude Desktop Configuration</h2>
            <p className="text-lg leading-relaxed mb-6">
              To use the Method CRM MCP Server with Claude Desktop, add the server configuration to
              your Claude settings file.
            </p>

            <h3 className="text-xl font-bold mb-4">Add MCP Server Configuration</h3>
            <p className="mb-4">
              Add the following to your <code>claude_desktop_config.json</code>:
            </p>
            <CodeBlock
              code={`{
  "mcpServers": {
    "method-crm": {
      "command": "python",
      "args": ["-m", "method_crm_mcp"],
      "cwd": "/path/to/method-crm-mcp",
      "env": {
        "METHOD_API_KEY": "your_api_key_here"
      }
    }
  }
}`}
              language="json"
              filename="claude_desktop_config.json"
              className="mb-6"
            />

            <p className="text-lg leading-relaxed">
              After saving the configuration, completely quit and restart Claude Desktop. The Method
              CRM tools should now appear in Claude&apos;s tool list.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container-project">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-6">Features & Available Tools</h2>
            <p className="text-lg leading-relaxed mb-8">
              The Method CRM MCP Server provides <strong>20 comprehensive tools</strong> organized
              into 5 categories.
            </p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-accent">📊 Table Operations (5 tools)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>
                    <code>method_tables_query</code> - Query tables with filtering and pagination
                  </li>
                  <li>
                    <code>method_tables_get</code> - Retrieve a specific record by ID
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
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-accent">📁 File Management (6 tools)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
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
                    <code>method_files_get_url</code> - Get direct download URLs
                  </li>
                  <li>
                    <code>method_files_update_link</code> - Update file-record associations
                  </li>
                  <li>
                    <code>method_files_delete</code> - Delete files
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-accent">⚡ Event Automation (4 tools)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-accent">🔑 API Key Management (4 tools)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>
                    <code>method_apikeys_create</code> - Create new API keys
                  </li>
                  <li>
                    <code>method_apikeys_list</code> - List all API keys
                  </li>
                  <li>
                    <code>method_apikeys_update</code> - Modify key permissions
                  </li>
                  <li>
                    <code>method_apikeys_delete</code> - Revoke API keys
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section id="usage-examples" className="section section-alt">
        <div className="container-project">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-6">Usage Examples</h2>
            <p className="text-lg leading-relaxed mb-8">
              Once configured, you can interact with Method CRM using natural language:
            </p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>📋 Querying Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">Example prompts:</p>
                <ul className="list-disc ml-6 space-y-1 mb-4">
                  <li>&quot;Show me all customers from California&quot;</li>
                  <li>&quot;Find contacts who haven&apos;t been contacted in 30 days&quot;</li>
                  <li>&quot;List the top 10 customers by revenue&quot;</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>➕ Creating Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">Example prompts:</p>
                <ul className="list-disc ml-6 space-y-1 mb-4">
                  <li>
                    &quot;Create a new contact: John Smith, john@example.com, Acme Corp&quot;
                  </li>
                  <li>
                    &quot;Add a new opportunity worth $50,000 for the ABC Company deal&quot;
                  </li>
                  <li>&quot;Log an activity: Called John Smith about the proposal&quot;</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📎 File Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">Example prompts:</p>
                <ul className="list-disc ml-6 space-y-1 mb-4">
                  <li>
                    &quot;Upload this proposal PDF to the Acme Corp customer record&quot;
                  </li>
                  <li>&quot;Show me all files attached to customer ID 12345&quot;</li>
                  <li>&quot;Download the latest invoice for ABC Company&quot;</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="section">
        <div className="container-project">
          <div className="container-content">
            <h2 className="text-3xl font-bold mb-6">Best Practices</h2>

            <div className="grid-2 mb-8">
              <Card className="card-accent-left">
                <CardHeader>
                  <CardTitle>🔒 Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>Never hardcode API keys in code</li>
                    <li>Use environment variables for all secrets</li>
                    <li>Create dedicated API keys with minimal permissions</li>
                    <li>Rotate API keys regularly</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-accent-left">
                <CardHeader>
                  <CardTitle>⚡ Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="skill-list">
                    <li>Use OData filters to limit result sets</li>
                    <li>Implement pagination for large queries</li>
                    <li>Batch operations when possible</li>
                    <li>Cache frequently accessed data</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle>🚀 Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  The Method CRM MCP Server opens up powerful possibilities for AI-assisted CRM
                  management. Start with simple queries, then gradually explore more advanced
                  features.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button asChild>
                    <Link
                      href="https://github.com/avisangle/method-crm-mcp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/projects/method-crm-mcp">Project Details →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section section-alt">
        <div className="container-project">
          <SectionHeader title="Related Articles" centered />
          <div className="grid-3">
            <Card className="card-hover">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  AI Integration
                </Badge>
                <CardTitle>Jenkins MCP Server</CardTitle>
                <CardDescription>
                  Enable AI agents to interact with Jenkins CI/CD infrastructure.
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
                  ChatOps
                </Badge>
                <CardTitle>Jenkins Chatbot Plugin</CardTitle>
                <CardDescription>AI-powered conversational interface for Jenkins.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/projects/jenkins-chatbot" className="project-link">
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
          </div>
        </div>
      </section>
    </>
  )
}
