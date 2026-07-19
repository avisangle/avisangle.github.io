import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock } from "@/components/ui/code-block"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryIcon } from "@/components/icons/category-icon"
import Link from "next/link"

export const metadata: Metadata = {
  title: "GPT-5.6 Programmatic Tool Calling Guide",
  description:
    "GPT-5.6 can write JavaScript to orchestrate your tools in a V8 sandbox. How programmatic tool calling works, when to use it, and the real token savings.",
  keywords: [
    "GPT-5.6 programmatic tool calling",
    "code mode Responses API",
    "programmatic vs direct tool calling",
    "GPT-5.6 tool orchestration",
    "allowed_callers OpenAI",
    "programmatic_tool_calling tool",
    "V8 runtime tool calling",
    "OpenAI Responses API code mode",
    "GPT-5.6 token efficiency",
    "OpenAI tool calling JavaScript",
    "GPT-5.6 Sol tool calling",
    "MCP code execution vs programmatic tool calling",
    "OpenAI agent tools guide",
    "reduce tokens tool calling",
  ],
  authors: [{ name: "Avinash Sangle", url: "https://avinashsangle.com" }],
  creator: "Avinash Sangle",
  publisher: "Avinash Sangle",
  openGraph: {
    title: "GPT-5.6 Programmatic Tool Calling: A Hands-On Developer Guide",
    description:
      "The model writes JavaScript that orchestrates your tools in a V8 sandbox. How code mode works in the Responses API, when to use it, and the real token savings.",
    url: "https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide",
    siteName: "Avinash Sangle",
    type: "article",
    publishedTime: "2026-07-19T00:00:00.000Z",
    modifiedTime: "2026-07-19T00:00:00.000Z",
    authors: ["Avinash Sangle"],
    images: [
      {
        url: "https://avinashsangle.com/og-gpt-5-6-programmatic-tool-calling-guide.png",
        width: 1200,
        height: 630,
        alt: "GPT-5.6 Programmatic Tool Calling: A Hands-On Developer Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT-5.6 Programmatic Tool Calling: A Hands-On Developer Guide",
    description:
      "The model writes JavaScript to orchestrate your tools in a V8 sandbox. How code mode works, when to use it, and the honest token math.",
    creator: "@avi_sangle",
    images: ["https://avinashsangle.com/og-gpt-5-6-programmatic-tool-calling-guide.png"],
  },
  alternates: {
    canonical: "https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const techArticleSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "GPT-5.6 Programmatic Tool Calling: A Hands-On Developer Guide",
  description:
    "GPT-5.6 can write JavaScript to orchestrate your tools in a V8 sandbox. How programmatic tool calling works, when to use it, and the real token savings.",
  image: "https://avinashsangle.com/og-gpt-5-6-programmatic-tool-calling-guide.png",
  author: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
    jobTitle: "Claude Code & AI Automation Expert",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/avinashsangle",
      "https://x.com/avi_sangle",
      "https://github.com/avisangle",
    ],
    knowsAbout: [
      "Claude Code",
      "AI Automation",
      "Model Context Protocol",
      "DevOps",
      "Generative AI",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Avinash Sangle",
    url: "https://avinashsangle.com",
  },
  datePublished: "2026-07-19",
  dateModified: "2026-07-19",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide",
  },
  keywords:
    "GPT-5.6 programmatic tool calling, code mode Responses API, programmatic vs direct tool calling, allowed_callers, V8 runtime tool calling, OpenAI token efficiency",
  articleSection: "AI Development",
  wordCount: 2600,
})

const breadcrumbSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://avinashsangle.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://avinashsangle.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "GPT-5.6 Programmatic Tool Calling Guide",
      item: "https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide",
    },
  ],
})

const howToSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Enable GPT-5.6 Programmatic Tool Calling",
  description:
    "Enable programmatic tool calling in the OpenAI Responses API so GPT-5.6 writes JavaScript that orchestrates your tools in an isolated V8 runtime.",
  totalTime: "PT20M",
  tool: [
    { "@type": "HowToTool", name: "OpenAI Python SDK" },
    { "@type": "HowToTool", name: "GPT-5.6 (Sol, Terra, or Luna)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Add the programmatic_tool_calling tool",
      text: "Include { type: 'programmatic_tool_calling' } in the tools array of your Responses API request.",
      url: "https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide#getting-started",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Opt tools in with allowed_callers",
      text: "Set allowed_callers to ['programmatic'] on read-only tools you want a program to call, or ['direct', 'programmatic'] for both paths.",
      url: "https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide#getting-started",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Handle the three item types",
      text: "Parse the program, program-issued function_call, and program_output items in response.output.",
      url: "https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide#how-it-works",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Preserve caller on continuation",
      text: "Return each function result with its caller copied unmodified so the runtime resumes the correct program.",
      url: "https://avinashsangle.com/blog/gpt-5-6-programmatic-tool-calling-guide#how-it-works",
    },
  ],
})

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is GPT-5.6 programmatic tool calling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Programmatic tool calling lets GPT-5.6 write JavaScript that coordinates the tools in a Responses API request. The program runs in an isolated V8 runtime, can loop and call tools in parallel, and returns only a compact result to the model instead of every intermediate tool output.",
      },
    },
    {
      "@type": "Question",
      name: "How is programmatic tool calling different from direct tool calling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Direct tool calling makes one function call per model round trip, and every result piles back into context. Programmatic tool calling has the model write one program that composes many calls in a sandbox, so only the final result returns. Use direct calls for semantic, adaptive, or approval-sensitive steps.",
      },
    },
    {
      "@type": "Question",
      name: "How much does programmatic tool calling reduce token usage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OpenAI reports named-customer reductions of 38% to 63.5%, and one workload matched quality while using 24% fewer output tokens and finishing 28% faster. The docs are explicit that the effect depends on the task, so measure against a direct-calling baseline rather than assuming universal savings.",
      },
    },
    {
      "@type": "Question",
      name: "When should I not use programmatic tool calling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skip it for single tool calls, adaptive searches that need the model's judgment between steps, and approval-sensitive or side-effecting actions. Those belong in direct tool calls where the model sees each result and you keep an explicit approval boundary. Programmatic mode fits bounded, deterministic, tool-heavy work.",
      },
    },
    {
      "@type": "Question",
      name: "What can and can't the V8 runtime do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The runtime supports JavaScript with top-level await, loops, conditionals, and parallel tool calls. It has no Node.js, no package installation, no network access, no general filesystem, no subprocesses, no console, and no persistent state between runs. Programs return output through text() or image().",
      },
    },
    {
      "@type": "Question",
      name: "How do I control which tools a program can call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set allowed_callers on each tool. Omitting it or using ['direct'] keeps a tool direct-only, ['programmatic'] lets only generated code call it, and ['direct', 'programmatic'] allows both. Expose read-only tools to programs first and keep side-effecting tools direct-only as a blast-radius control.",
      },
    },
    {
      "@type": "Question",
      name: "Is programmatic tool calling the same as Anthropic's code execution with MCP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is the same core idea, now shipped as a first-class API primitive. Anthropic's code execution with MCP and Cloudflare's Code Mode both let a model write code that composes tools in a sandbox. OpenAI's version adds a documented Responses API contract with program items and a resumption fingerprint.",
      },
    },
    {
      "@type": "Question",
      name: "Does programmatic tool calling work with MCP servers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Function, custom, MCP, apply_patch, shell, and code_interpreter tools all support allowed_callers: ['programmatic']. That means an MCP tool can be invoked from inside a generated program the same way a plain function is, so existing MCP servers benefit without a rewrite.",
      },
    },
  ],
})

export default function Gpt56ProgrammaticToolCallingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: techArticleSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: howToSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

      <div className="container-project py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "GPT-5.6 Programmatic Tool Calling Guide" },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          <Badge className="mb-4">AI Development</Badge>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            GPT-5.6 Programmatic Tool Calling: A Hands-On Developer Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            GPT-5.6 programmatic tool calling lets the model write JavaScript
            that orchestrates your tools inside an isolated V8 runtime, instead
            of making one tool call per model round trip. It suits bounded,
            tool-heavy work like filtering, deduping, and fan-out, where the
            model shouldn&apos;t re-read every intermediate result. Here is how
            it works and when to reach for it.
          </p>
          <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Calendar" size="sm" /> July 19, 2026
            </span>
            <span>-</span>
            <span className="flex items-center gap-1">
              <CategoryIcon icon="Clock" size="sm" /> 11 min read
            </span>
            <span>-</span>
            <span>Last updated: 2026-07-19</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {["GPT-5.6", "Responses API", "Code Mode", "Tool Calling", "Agent Architecture"].map(
              (tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </header>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CategoryIcon icon="List" size="sm" />
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <nav>
              <ol className="space-y-2">
                <li><a href="#what-is-it" className="project-link">What Is GPT-5.6 Programmatic Tool Calling?</a></li>
                <li><a href="#how-it-works" className="project-link">How Code Mode Works in the Responses API</a></li>
                <li><a href="#v8-runtime" className="project-link">What the V8 Runtime Can and Can&apos;t Do</a></li>
                <li><a href="#when-to-use" className="project-link">Programmatic vs Direct Tool Calling</a></li>
                <li><a href="#token-savings" className="project-link">The Real Token Savings (and the Honest Caveat)</a></li>
                <li><a href="#same-pattern" className="project-link">It&apos;s the Same Pattern as Code Execution with MCP</a></li>
                <li><a href="#getting-started" className="project-link">Getting Started: A Minimal Setup</a></li>
                <li><a href="#faq" className="project-link">Frequently Asked Questions</a></li>
              </ol>
            </nav>
          </CardContent>
        </Card>

        {/* TL;DR */}
        <Card className="card-accent-left mb-12">
          <CardHeader>
            <CardTitle>TL;DR</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="skill-list">
              <li>
                The model writes a short JavaScript program that loops, filters,
                and aggregates over your tools. Only the compact result returns
                to context, not every intermediate tool output.
              </li>
              <li>
                Enable it with the <code>programmatic_tool_calling</code> tool
                plus <code>allowed_callers</code> per tool. Programs run in a
                fresh V8 with top-level await but no network, filesystem, npm, or
                console.
              </li>
              <li>
                OpenAI reports named-customer token reductions of 38% to 63.5%;
                one case matched quality with 24% fewer output tokens and 28%
                faster. Gains depend on the task, so measure.
              </li>
              <li>
                It&apos;s OpenAI productizing the same code-mode idea Anthropic
                shipped as code execution with MCP and Cloudflare shipped as Code
                Mode. Same pattern, now a first-class API primitive.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <section id="what-is-it" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Braces" size="md" />
            What Is GPT-5.6 Programmatic Tool Calling?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Programmatic tool calling lets GPT-5.6 write and run JavaScript that
            coordinates the tools in a Responses API request. Instead of the
            model emitting one function call, waiting for the result, then
            emitting the next, it writes a small program that composes loops,
            conditionals, and parallel calls over your tools. OpenAI introduced
            it with the{" "}
            <a href="https://openai.com/index/gpt-5-6/" target="_blank" rel="noopener noreferrer" className="project-link">GPT-5.6 model family</a>{" "}
            (Sol, Terra, and Luna) on July 9, 2026, and it ships through the
            Responses API as a hosted tool.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The problem it solves is context growth. In classic function calling,
            tool result A goes back into the model, then tool result B, then C.
            Late iterations re-process everything the early ones produced. Run a
            lookup over a dozen items and you pay for the growing transcript on
            every turn. Programmatic tool calling moves that fan-out into a
            sandbox: the program calls all twelve tools, filters the results, and
            hands back a compact summary the model never had to read
            line-by-line.
          </p>

          <p className="text-lg leading-relaxed">
            OpenAI&apos;s own framing calls this &quot;code mode.&quot; Nikunj
            Handa, who works on the API, put it plainly on launch day:
            programmatic tool calling &quot;is here for OpenAI models via the
            Responses API,&quot; with &quot;significant gains in token efficiency
            (lower cost and latency)&quot; because it runs in in-memory V8s and
            is ZDR-compatible with no additional container cost. The key word is
            <em> bounded</em>. This is for tool-heavy workflows that don&apos;t
            need fresh model judgment between each step.
          </p>
        </section>

        {/* Section 2 */}
        <section id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Workflow" size="md" />
            How Code Mode Works in the Responses API
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            You turn it on by adding two things to your request: the hosted{" "}
            <code>programmatic_tool_calling</code> tool, and an{" "}
            <code>allowed_callers</code> setting on each tool you want a program
            to reach. Here is a minimal request in the Python SDK, giving GPT-5.6
            a flight-status tool that only a program can call.
          </p>

          <CodeBlock
            language="python"
            filename="request.py"
            code={`from openai import OpenAI

client = OpenAI()

response = client.responses.create(
    model="gpt-5.6",
    input="For these 12 flight numbers, look up each status and tell me which are delayed.",
    tools=[
        # Hosted tool that lets the model write and run a program
        {"type": "programmatic_tool_calling"},
        {
            "type": "function",
            "name": "get_flight_status",
            "description": "Look up the current status of a single flight by number.",
            "parameters": {
                "type": "object",
                "properties": {"flight_number": {"type": "string"}},
                "required": ["flight_number"],
            },
            # Only a generated program may call this, not a direct tool call
            "allowed_callers": ["programmatic"],
        },
    ],
)`}
          />

          <p className="text-lg leading-relaxed mb-6">
            Given that request, GPT-5.6 doesn&apos;t emit twelve function calls.
            It writes one program. The generated JavaScript runs in the hosted
            runtime, fans the calls out in parallel, filters, and returns only
            what matters. A realistic version of what the model writes looks like
            this.
          </p>

          <CodeBlock
            language="javascript"
            filename="model-written-program.js"
            code={`// The model writes this. It runs in an isolated V8 runtime.
const flights = ["AA100", "UA202", "DL303", "WN404", "B6505", "AS606",
                 "NK707", "F9808", "HA909", "G4010", "SY111", "MX212"];

// Parallel fan-out: one round trip's worth of orchestration, not twelve
const results = await Promise.all(
  flights.map((flight_number) => get_flight_status({ flight_number }))
);

const delayed = results
  .filter((r) => r.status === "delayed")
  .map((r) => r.flight_number);

// Return a compact result, not all twelve raw payloads
text(JSON.stringify({ delayed_count: delayed.length, delayed }));`}
          />

          <p className="text-lg leading-relaxed mb-6">
            On the wire, <code>response.output</code> now carries three item
            types you need to handle. A <code>program</code> item holds the
            generated code, a <code>call_id</code>, and an opaque{" "}
            <code>fingerprint</code> used to resume the run. Each{" "}
            <code>function_call</code> the program issues carries a{" "}
            <code>caller</code> field whose <code>caller_id</code> matches the
            program&apos;s <code>call_id</code>. When the program finishes, a{" "}
            <code>program_output</code> item returns with a <code>status</code>{" "}
            and a JSON <code>result</code> string.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The one integration detail that trips people up is continuation. When
            you return a tool result, you must copy the original{" "}
            <code>caller</code> back <em>unmodified</em> so the runtime can resume
            the correct program. Drop it or rewrite it and the run can&apos;t
            continue.
          </p>

          <CodeBlock
            language="python"
            filename="continuation.py"
            code={`# Execute the program-issued call in YOUR backend, then return the result
# with its caller preserved so the runtime resumes the right program.
followup = client.responses.create(
    model="gpt-5.6",
    previous_response_id=response.id,
    input=[
        {
            "type": "function_call_output",
            "call_id": "call_1",
            "caller": {"caller_id": "prog_abc123"},  # copy back untouched
            "output": '{"flight_number": "AA100", "status": "delayed"}',
        }
    ],
)`}
          />

          <p className="text-lg leading-relaxed">
            Field shapes are new and worth confirming against the primary source
            before you ship. OpenAI&apos;s{" "}
            <a href="https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling" target="_blank" rel="noopener noreferrer" className="project-link">Programmatic Tool Calling guide</a>{" "}
            is the canonical reference for the request and continuation contract.
          </p>
        </section>

        {/* Section 3 */}
        <section id="v8-runtime" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Box" size="md" />
            What the V8 Runtime Can and Can&apos;t Do
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            OpenAI runs each generated program in a fresh, isolated V8 runtime.
            That isolation is the whole reason the feature is safe to offer, and
            it is also why the runtime is deliberately spartan. The program can
            do computation and call your opted-in tools. It cannot touch the
            outside world by any other path.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CategoryIcon icon="Check" size="sm" />
                  Supported
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>JavaScript with top-level <code>await</code></li>
                  <li>Loops, conditionals, and normal control flow</li>
                  <li>Parallel tool calls via <code>Promise.all</code></li>
                  <li>Passing results between calls in memory</li>
                  <li>Returning output via <code>text()</code> or <code>image()</code></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CategoryIcon icon="X" size="sm" />
                  Not Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="skill-list">
                  <li>Node.js APIs or package installation</li>
                  <li>Direct network access (fetch, sockets)</li>
                  <li>A general-purpose filesystem</li>
                  <li>Subprocesses or a shell</li>
                  <li>A <code>console</code>, or state that persists between runs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg leading-relaxed">
            The absence of persistent state matters for how you design programs.
            Each execution starts clean, so anything the model needs across
            program boundaries has to flow through tool results or the final
            output. This is a feature, not a limitation: a stateless, network-free
            sandbox is what makes the runtime ZDR-compatible and cheap to spin up,
            since there is no container to provision per call.
          </p>
        </section>

        {/* Section 4 */}
        <section id="when-to-use" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="GitCompareArrows" size="md" />
            Programmatic vs Direct Tool Calling: When to Use Which
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Programmatic tool calling is not a replacement for direct tool
            calling. It&apos;s a second mode you reach for when the shape of the
            work fits. The rule of thumb: if the control flow is predictable and
            the steps are deterministic, let a program run them. If a step needs
            the model&apos;s judgment, an approval, or a citation, keep it a
            direct call.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Use programmatic when...</th>
                  <th className="py-3 pr-4 font-semibold">Use direct when...</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Many related calls with predictable control flow</td>
                  <td className="py-3 pr-4">A single tool call answers the question</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Results need filtering, dedupe, aggregation, or validation</td>
                  <td className="py-3 pr-4">An adaptive search needs the model&apos;s judgment mid-loop</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Arguments are derivable from earlier results</td>
                  <td className="py-3 pr-4">The action has side effects or needs an approval</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Fan-out over tens or hundreds of items</td>
                  <td className="py-3 pr-4">You need to preserve citations or a final validation step</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed">
            There is a governance angle worth calling out. Because{" "}
            <code>allowed_callers</code> is per tool, it doubles as a blast-radius
            control. Expose read-only tools to programs first with{" "}
            <code>[&quot;programmatic&quot;]</code>, and keep anything that writes
            data, spends money, or triggers a side effect as{" "}
            <code>[&quot;direct&quot;]</code> only, so the model has to surface
            that action explicitly rather than burying it inside generated code. I
            treat this the same way I treat any{" "}
            <Link href="/blog/hardening-ai-agents-cicd-prompt-injection" className="project-link">agent running in an automated pipeline</Link>
            : the model gets to read freely and act narrowly.
          </p>
        </section>

        {/* Section 5 */}
        <section id="token-savings" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Gauge" size="md" />
            The Real Token Savings (and the Honest Caveat)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            The headline reason to use code mode is efficiency, and the numbers
            OpenAI published are real but bounded. On the model itself, Sam Altman
            said GPT-5.6 is roughly{" "}
            <a href="https://news.ycombinator.com/item?id=48846407" target="_blank" rel="noopener noreferrer" className="project-link">54% more token-efficient on agentic coding</a>{" "}
            than its predecessor. That is a model-level gain, separate from code
            mode, but it stacks with it.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-semibold">Metric</th>
                  <th className="py-3 pr-4 font-semibold">Reported result</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Named-customer token reductions</td>
                  <td className="py-3 pr-4">38% to 63.5%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Output tokens on one measured workload</td>
                  <td className="py-3 pr-4">24% fewer, at matched quality</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Task completion time on that workload</td>
                  <td className="py-3 pr-4">28% faster</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Container cost for the runtime</td>
                  <td className="py-3 pr-4">None (in-memory V8, ZDR-compatible)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed">
            Now the caveat, straight from OpenAI&apos;s docs: programmatic tool
            calling &quot;can reduce the amount of intermediate tool output added
            to model context, but the effect depends on the task and tool
            responses.&quot; For a single lookup, direct calling is simpler and
            just as cheap. The gains show up on fan-out and heavy filtering. Don&apos;t
            assume a universal win. Measure token use, latency, tool-call count,
            and correctness against a direct-calling baseline before you make it
            the default for a workflow.
          </p>
        </section>

        {/* Section 6 */}
        <section id="same-pattern" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Boxes" size="md" />
            It&apos;s the Same Pattern as Code Execution with MCP
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            If this feels familiar, that&apos;s because it is. Programmatic tool
            calling is OpenAI productizing an idea that was already circulating
            under the name &quot;code mode.&quot; Anthropic described it in their{" "}
            <a href="https://www.anthropic.com/engineering/code-execution-with-mcp" target="_blank" rel="noopener noreferrer" className="project-link">code execution with MCP</a>{" "}
            writeup, and Cloudflare shipped it as Code Mode for MCP. All three
            share the same shape: present tools as a callable API, give the model
            a sandbox, and let it write the glue code instead of calling tools one
            at a time.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I walked through building this pattern by hand in{" "}
            <Link href="/blog/mcp-code-execution-pattern" className="project-link">the MCP code execution pattern guide</Link>,
            where you wire up a <code>search</code> and <code>execute</code> pair
            and bring your own sandbox (Firecracker, a Deno isolate, or Cloudflare
            Workers). The catch there was that production code mode needs real
            isolation infrastructure, which is why most working examples came from
            companies that already had it.
          </p>

          <p className="text-lg leading-relaxed">
            What OpenAI genuinely adds is that you no longer assemble any of it.
            The sandbox, the resumption contract, and the tool-eligibility model
            are a native Responses API primitive. You don&apos;t provision a
            runner or manage isolation; you flip <code>allowed_callers</code> on a
            tool. It&apos;s worth separating this from GPT-5.6&apos;s other agent
            feature, Sol&apos;s <code>ultra</code> mode, which spawns{" "}
            <Link href="/blog/gpt-5-6-sol-ultra-cooperative-subagents" className="project-link">cooperative subagents inside the model</Link>.
            That&apos;s model-internal orchestration you can&apos;t inspect;
            programmatic tool calling is orchestration you can read, because the
            program comes back in the response.
          </p>
        </section>

        {/* Section 7 */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="Terminal" size="md" />
            Getting Started: A Minimal Setup
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            You can adopt programmatic tool calling incrementally without
            rewriting your existing tools. The setup is five steps, and the whole
            thing is opt-in per tool, so you can start with a single read-only
            function and watch what the model does before widening access.
          </p>

          <ol className="list-decimal ml-6 space-y-3 text-lg leading-relaxed mb-6">
            <li>
              Add <code>{`{ "type": "programmatic_tool_calling" }`}</code> to the
              <code> tools</code> array of your Responses API request.
            </li>
            <li>
              Opt a tool in with{" "}
              <code>allowed_callers: [&quot;programmatic&quot;]</code> for
              program-only, or <code>[&quot;direct&quot;, &quot;programmatic&quot;]</code>{" "}
              for both paths. Start with read-only tools.
            </li>
            <li>
              Handle the three item types in <code>response.output</code>:{" "}
              <code>program</code>, program-issued <code>function_call</code>, and{" "}
              <code>program_output</code>.
            </li>
            <li>
              On continuation, return each function result with its{" "}
              <code>caller</code> copied back unmodified so the runtime resumes
              the right program.
            </li>
            <li>
              Log the generated program and its inputs and outputs for
              observability, subject to your data policy, then compare token use
              against your direct-calling baseline.
            </li>
          </ol>

          <p className="text-lg leading-relaxed">
            One nice property: MCP tools are eligible too. Function, custom, MCP,
            <code> apply_patch</code>, shell, and <code>code_interpreter</code>{" "}
            tools all accept <code>allowed_callers: [&quot;programmatic&quot;]</code>,
            so an existing MCP server can be driven from inside a generated program
            with no server-side change. That is the cleanest on-ramp if you already
            run MCP servers today.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CategoryIcon icon="HelpCircle" size="md" />
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-it">
              <AccordionTrigger>What is GPT-5.6 programmatic tool calling?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Programmatic tool calling lets GPT-5.6 write JavaScript that
                  coordinates the tools in a Responses API request. The program
                  runs in an isolated V8 runtime, can loop and call tools in
                  parallel, and returns only a compact result to the model
                  instead of every intermediate tool output.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vs-direct">
              <AccordionTrigger>How is programmatic tool calling different from direct tool calling?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Direct tool calling makes one function call per model round
                  trip, and every result piles back into context. Programmatic
                  tool calling has the model write one program that composes many
                  calls in a sandbox, so only the final result returns. Use direct
                  calls for semantic, adaptive, or approval-sensitive steps.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="savings">
              <AccordionTrigger>How much does programmatic tool calling reduce token usage?</AccordionTrigger>
              <AccordionContent>
                <p>
                  OpenAI reports named-customer reductions of 38% to 63.5%, and
                  one workload matched quality while using 24% fewer output tokens
                  and finishing 28% faster. The docs are explicit that the effect
                  depends on the task, so measure against a direct-calling
                  baseline rather than assuming universal savings.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="when-not">
              <AccordionTrigger>When should I not use programmatic tool calling?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Skip it for single tool calls, adaptive searches that need the
                  model&apos;s judgment between steps, and approval-sensitive or
                  side-effecting actions. Those belong in direct tool calls where
                  the model sees each result and you keep an explicit approval
                  boundary. Programmatic mode fits bounded, deterministic,
                  tool-heavy work.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="v8">
              <AccordionTrigger>What can and can&apos;t the V8 runtime do?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The runtime supports JavaScript with top-level await, loops,
                  conditionals, and parallel tool calls. It has no Node.js, no
                  package installation, no network access, no general filesystem,
                  no subprocesses, no console, and no persistent state between
                  runs. Programs return output through <code>text()</code> or{" "}
                  <code>image()</code>.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="allowed-callers">
              <AccordionTrigger>How do I control which tools a program can call?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Set <code>allowed_callers</code> on each tool. Omitting it or
                  using <code>[&quot;direct&quot;]</code> keeps a tool direct-only,{" "}
                  <code>[&quot;programmatic&quot;]</code> lets only generated code
                  call it, and <code>[&quot;direct&quot;, &quot;programmatic&quot;]</code>{" "}
                  allows both. Expose read-only tools to programs first and keep
                  side-effecting tools direct-only as a blast-radius control.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vs-mcp">
              <AccordionTrigger>Is programmatic tool calling the same as Anthropic&apos;s code execution with MCP?</AccordionTrigger>
              <AccordionContent>
                <p>
                  It is the same core idea, now shipped as a first-class API
                  primitive. Anthropic&apos;s code execution with MCP and
                  Cloudflare&apos;s Code Mode both let a model write code that
                  composes tools in a sandbox. OpenAI&apos;s version adds a
                  documented Responses API contract with program items and a
                  resumption fingerprint.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mcp-support">
              <AccordionTrigger>Does programmatic tool calling work with MCP servers?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes. Function, custom, MCP, <code>apply_patch</code>, shell, and{" "}
                  <code>code_interpreter</code> tools all support{" "}
                  <code>allowed_callers: [&quot;programmatic&quot;]</code>. That
                  means an MCP tool can be invoked from inside a generated program
                  the same way a plain function is, so existing MCP servers
                  benefit without a rewrite.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Boxes" size="md" />
                <CardTitle>MCP Code Execution Pattern: A Hands-On Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The build-it-yourself version of code mode. Wire up{" "}
                  <code>search</code> and <code>execute</code>, bring your own
                  sandbox, and see why isolation is the hard part.
                </p>
                <Link href="/blog/mcp-code-execution-pattern" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CategoryIcon icon="Users" size="md" />
                <CardTitle>GPT-5.6 Sol Ultra Cooperative Subagents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The other GPT-5.6 agent feature. Model-internal orchestration
                  you can&apos;t inspect, contrasted with the readable programs of
                  code mode.
                </p>
                <Link href="/blog/gpt-5-6-sol-ultra-cooperative-subagents" className="project-link">
                  Read the guide
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
