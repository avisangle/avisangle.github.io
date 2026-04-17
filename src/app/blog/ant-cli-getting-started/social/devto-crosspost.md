# Dev.to + Hashnode Cross-post - Getting Started with the ant CLI

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py ant-cli-getting-started --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py ant-cli-getting-started --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Getting Started with the ant CLI: Deploy Claude Agents
DESCRIPTION: Install the ant CLI, create your first managed agent, and deploy it in under 10 minutes. Hands-on tutorial with YAML configs and real CLI output.
TAGS: claudecode, ai, devops, tutorial
CANONICAL_URL: https://avinashsangle.com/blog/ant-cli-getting-started
COVER_IMAGE: https://avinashsangle.com/og-ant-cli-getting-started.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/ant-cli-getting-started).

The ant CLI is Anthropic's official command-line client for the Claude API, and it's the fastest way to create, configure, and manage cloud-hosted agents without writing application code. From install to a running managed agent in under 10 minutes.

## TL;DR

- The **ant CLI** is Anthropic's official Go-based CLI for the Claude API, launched April 2026. It manages agents, environments, and sessions from your terminal.
- Install on macOS with `brew install anthropics/tap/ant`. Linux and Go installs are also supported.
- Define agents as **YAML files**, check them into Git, and deploy through CI - full GitOps for your agent configs.
- Sessions cost **$0.08/hour** (billed to the millisecond) plus standard Claude token rates. Idle time is free.

## What Is the ant CLI?

The ant CLI shipped alongside [Claude Managed Agents](https://avinashsangle.com/blog/claude-managed-agents) on April 8, 2026, and it's built specifically for developers who want to create, configure, and run cloud-hosted agents without writing wrapper code. The [GitHub repo](https://github.com/anthropics/anthropic-cli) already has over 300 stars in its first ten days.

It follows a resource-based command structure: `ant [resource] <command> [flags...]`. Think of it like `kubectl` for Claude agents. You can pipe YAML into it, extract fields with GJSON transforms, and chain commands in shell scripts. If you've worked with any modern infrastructure CLI, the patterns will feel familiar.

One thing to clarify early: the ant CLI and Claude Code solve different problems. Claude Code is your interactive coding assistant in the terminal - you talk to it, it writes code, and you pay through a subscription. The ant CLI is a programmatic API client for managing hosted agent infrastructure. You authenticate with an API key, and you're billed at standard API rates. I use both daily, and they complement each other well. Claude Code even understands how to shell out to `ant` natively.

## How to Install the ant CLI

There are three installation paths depending on your platform. If you're on macOS, Homebrew is the fastest route.

### macOS (Homebrew)

```bash
# Install from Anthropic's tap
brew install anthropics/tap/ant

# Clear the macOS quarantine flag (required)
xattr -d com.apple.quarantine "$(brew --prefix)/bin/ant"

# Verify
ant --version
```

That quarantine step trips people up. macOS flags unsigned binaries downloaded by Homebrew, and without clearing it you'll get a "cannot be opened because the developer cannot be verified" error. It's a one-time thing.

### Linux / WSL (curl)

```bash
VERSION=1.2.1
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m | sed -e 's/x86_64/amd64/' -e 's/aarch64/arm64/')

curl -fsSL \
  "https://github.com/anthropics/anthropic-cli/releases/download/v${VERSION}/ant_${VERSION}_${OS}_${ARCH}.tar.gz" \
  | sudo tar -xz -C /usr/local/bin ant
```

### From Source (Go 1.22+)

```bash
go install github.com/anthropics/anthropic-cli/cmd/ant@latest
export PATH="$PATH:$(go env GOPATH)/bin"
```

### Set Your API Key

Once installed, set your Anthropic API key. The CLI reads it from the `ANTHROPIC_API_KEY` environment variable:

```bash
export ANTHROPIC_API_KEY="sk-ant-your-key-here"
```

You can generate an API key from the [Anthropic Console](https://console.anthropic.com/settings/keys). I keep mine in a `.env` file that my shell sources on startup, but any secret management approach works.

### Shell Completions

The ant CLI supports completions for bash, zsh, fish, and PowerShell. For zsh (the default macOS shell):

```bash
# Generate zsh completions
ant completion zsh > ~/.zfunc/_ant

# Add to your .zshrc if not already there
echo 'fpath=(~/.zfunc $fpath)' >> ~/.zshrc
echo 'autoload -Uz compinit && compinit' >> ~/.zshrc
```

Tab completion saves a lot of time when working with the `beta:` namespaced commands, which can get long.

## Core Concepts - Agents, Environments, and Sessions

Before you create anything, it helps to understand how the four core pieces fit together.

**Agent** - A versioned configuration defining the model, system prompt, tools, and MCP server connections. Think of it as a blueprint. Each update creates a new version, so you can roll back if needed.

**Environment** - A container template specifying pre-installed packages (pip, npm) and networking rules. Create it once, reference it by ID. Multiple sessions can share one environment config, but each gets its own isolated container.

**Session** - A running instance that pairs an agent with an environment. It has its own container, filesystem, and conversation history. Sessions are where the actual work happens.

**Events** - The communication protocol. You send user events (messages, interrupts, tool confirmations) and receive agent events (messages, tool calls, thinking). Everything is event-based and streamable.

The flow works like this: you create an agent (the what), create an environment (the where), start a session linking them together, and then communicate through events. Anthropic handles the container orchestration, tool execution, and conversation state. According to the [official docs](https://platform.claude.com/docs/en/managed-agents/overview), sessions cost $0.08 per session-hour billed to the millisecond, and idle time doesn't count.

## Creating Your First Agent with the ant CLI

Let's build a simple code review agent. I'll walk through each step so you can see exactly what the CLI does at each stage. All managed agent commands sit under the `beta:` prefix since the feature is still in beta.

### Step 1: Create the Agent

```bash
ant beta:agents create \
  --name "Code Reviewer" \
  --model claude-sonnet-4-6 \
  --system "You are a senior code reviewer. Read the code carefully, check for bugs, security issues, and style problems. Be specific about line numbers and provide fix suggestions." \
  --tool '{"type": "agent_toolset_20260401"}'
```

The response comes back as JSON with the agent ID and version. I like to extract just the ID for scripting:

```bash
# Extract the agent ID
AGENT_ID=$(ant beta:agents create \
  --name "Code Reviewer" \
  --model claude-sonnet-4-6 \
  --system "You are a senior code reviewer." \
  --tool '{"type": "agent_toolset_20260401"}' \
  --transform id --format raw)

echo "Created agent: $AGENT_ID"
```

The `--transform` flag uses GJSON syntax to pluck a specific field from the response, and `--format raw` strips the quotes. This is one of the CLI's best features for scripting.

### Step 2: Create an Environment

```bash
ENV_ID=$(ant beta:environments create \
  --name "python-dev" \
  --pip-packages '["pytest", "ruff", "mypy"]' \
  --networking unrestricted \
  --transform id --format raw)

echo "Created environment: $ENV_ID"
```

Environments define what's pre-installed in the container. I'm giving this one Python linting tools since it's a code review agent. The `unrestricted` networking flag lets the agent fetch external resources if needed.

### Step 3: Start a Session

```bash
SESSION_ID=$(ant beta:sessions create \
  --agent-id "$AGENT_ID" \
  --environment-id "$ENV_ID" \
  --transform id --format raw)

echo "Started session: $SESSION_ID"
```

### Step 4: Send a Message and Stream the Response

```bash
# Send a review request
ant beta:sessions:events send \
  --session-id "$SESSION_ID" \
  --type user.message \
  --content-type text \
  --content-text "Review this Python function for bugs:

def divide(a, b):
    return a / b
"

# Stream the agent's response in real-time
ant beta:sessions stream --session-id "$SESSION_ID"
```

The `stream` command opens a real-time SSE connection to the session. You'll see the agent's thinking, tool calls (it might run the code through ruff), and its final review - all printed to your terminal as they happen.

> **Tip:** Want to explore the response interactively? Replace `--format raw` with `--format explore` on any command to open the TUI explorer. It lets you navigate nested JSON with arrow keys - really useful when debugging agent responses.

## YAML Version Control for Agents

This is the ant CLI's best feature, and the one I haven't seen anyone write about yet. Instead of passing flags inline, you can define agents and environments as YAML files, check them into Git, and deploy through your CI pipeline.

```yaml
# code-reviewer.agent.yaml
name: Code Reviewer
model: claude-sonnet-4-6
system: |
  You are a senior code reviewer. Read the code carefully,
  check for bugs, security issues, and style problems.
  Be specific about line numbers and provide fix suggestions.
tools:
  - type: agent_toolset_20260401
    configs:
      - name: web_fetch
        enabled: false
```

```yaml
# code-reviewer.environment.yaml
name: python-dev
pip_packages:
  - pytest
  - ruff
  - mypy
networking: unrestricted
```

Now you can create the agent directly from the file:

```bash
# Create from YAML
ant beta:agents create < code-reviewer.agent.yaml

# Update an existing agent (version is required for safety)
ant beta:agents update \
  --agent-id "$AGENT_ID" \
  --version 1 \
  < code-reviewer.agent.yaml
```

The versioning requirement matters. When you update an agent, you must pass the current version number. If someone else updated it since you last pulled, the command fails rather than silently overwriting. It's optimistic concurrency control - the same pattern you'd find in Kubernetes or Terraform.

This YAML approach is where the ant CLI really shines for teams. Your agent configs live in the same repo as your application code, go through pull request review, and deploy through the same pipeline. I wrote more about the broader Managed Agents architecture in my [Managed Agents vs Agent SDK comparison](https://avinashsangle.com/blog/claude-managed-agents), but the YAML workflow is what makes the CLI my preferred interface.

> According to the [official CLI docs](https://platform.claude.com/docs/en/api/sdks/cli), Anthropic designed the YAML workflow specifically for GitOps-style agent management. If you're already doing infrastructure as code, this slots right in.

## ant CLI vs curl vs SDK - Why Use the CLI?

You can hit the Managed Agents API three ways: raw HTTP with curl, a language SDK (Python, TypeScript, Go, etc.), or the ant CLI. Each has its place.

| Feature | curl | ant CLI | Python SDK |
|---------|------|---------|------------|
| Setup time | None | 2 minutes | 5 minutes |
| JSON body authoring | Manual | Typed flags / YAML | Typed objects |
| Auto-pagination | Manual | Built-in | Built-in |
| File references | Manual base64 | `@path` syntax | File objects |
| Response filtering | Pipe to jq | `--transform` | Code |
| Shell scripting | Verbose | Ergonomic | Requires Python |
| CI/CD fit | OK | Excellent | Good |
| Best for | Quick tests | Ops / automation | App integration |

The ant CLI sits in a sweet spot. It's faster than writing curl commands by hand (no JSON body construction, no header management), and lighter than pulling in a full SDK when you just want to script some agent operations. For anything that lives in a shell script or CI workflow, it's the right tool.

If you're building an application that embeds agent interactions - a web app, a Slack bot, a data pipeline - use the SDK. The ant CLI is for the operational layer: provisioning agents, rotating credentials, monitoring sessions, deploying config changes.

## Scripting and Automation Patterns

Here are a few patterns I've found useful when automating agent workflows with the ant CLI.

### Extract IDs from Create Commands

```bash
#!/bin/bash
set -euo pipefail

# Create agent and capture the ID
AGENT_ID=$(ant beta:agents create \
  < agents/reviewer.agent.yaml \
  --transform id --format raw)

# Create environment and capture the ID
ENV_ID=$(ant beta:environments create \
  < agents/reviewer.environment.yaml \
  --transform id --format raw)

echo "Agent: $AGENT_ID"
echo "Environment: $ENV_ID"

# Store for later use
echo "AGENT_ID=$AGENT_ID" >> .env.agents
echo "ENV_ID=$ENV_ID" >> .env.agents
```

### GitHub Actions Deployment

```yaml
name: Deploy Agents
on:
  push:
    branches: [main]
    paths: ['agents/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install ant CLI
        run: |
          curl -fsSL \
            "https://github.com/anthropics/anthropic-cli/releases/download/v1.2.1/ant_1.2.1_linux_amd64.tar.gz" \
            | sudo tar -xz -C /usr/local/bin ant

      - name: Update agent config
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          ant beta:agents update \
            --agent-id "${{ vars.AGENT_ID }}" \
            --version "${{ vars.AGENT_VERSION }}" \
            < agents/reviewer.agent.yaml
```

### List All Agents and Environments

```bash
# List agents in a readable table
ant beta:agents list --format yaml

# List environments with just names and IDs
ant beta:environments list --transform "data.#.{id,name}" --format yaml

# Check session status
ant beta:sessions retrieve \
  --session-id "$SESSION_ID" \
  --transform status --format raw
```

The `--transform` flag accepts full GJSON path syntax. You can filter arrays, project specific fields, and even do conditional extraction. It's much cleaner than piping to `jq` for simple extractions, though for complex transformations I still reach for jq.

## What Tools Can Managed Agents Use?

When you include `{"type": "agent_toolset_20260401"}` in your agent config, it gets access to a standard set of tools: bash, read, write, edit, glob, grep, and web_fetch. All are enabled by default.

You can selectively disable tools you don't want the agent to have. For a read-only code review agent, you might disable write and edit:

```yaml
# readonly-reviewer.agent.yaml
name: Read-Only Reviewer
model: claude-sonnet-4-6
system: Review code without modifying it.
tools:
  - type: agent_toolset_20260401
    configs:
      - name: write
        enabled: false
      - name: edit
        enabled: false
      - name: web_fetch
        enabled: false
```

Or flip the default and whitelist only what you need:

```yaml
tools:
  - type: agent_toolset_20260401
    default_config:
      enabled: false
    configs:
      - name: bash
        enabled: true
      - name: read
        enabled: true
```

Agents can also connect to external MCP servers for tools beyond the built-in set. If you've built a custom MCP server, a managed agent can use it by adding an `mcp_servers` block to the agent config.

## Frequently Asked Questions

### What is the ant CLI from Anthropic?

The ant CLI is Anthropic's official command-line client for the Claude API. Written in Go, it provides a resource-based command structure for managing agents, environments, and sessions. It supports typed flags, YAML input, auto-pagination, and multiple output formats including an interactive TUI explorer.

### How do I install the ant CLI on macOS?

Install via Homebrew: run `brew install anthropics/tap/ant`, then clear the macOS quarantine flag with `xattr -d com.apple.quarantine "$(brew --prefix)/bin/ant"`. Set your `ANTHROPIC_API_KEY` environment variable and verify with `ant --version`.

### What is the difference between the ant CLI and Claude Code?

Claude Code is an interactive agentic coding assistant that runs in your terminal and uses a subscription. The ant CLI is a programmatic API client for managing Managed Agents resources, uses an API key, and is built for scripting and CI/CD automation. They're complementary - Claude Code can even shell out to `ant` commands.

### How much does it cost to run a managed agent session?

Sessions cost $0.08 per session-hour, billed to the millisecond. Idle time is free. You also pay standard Claude API token rates on top. A typical 1-hour coding session with Opus costs roughly $0.70 total including both tokens and session runtime.

### Can I version control agents with the ant CLI?

Yes. Define agents as YAML files (e.g. `reviewer.agent.yaml`), check them into Git, and deploy via CI. Use `ant beta:agents create` to create from YAML and `ant beta:agents update` with the version flag to push updates. This gives you full GitOps for agent configurations.

### Can managed agents connect to MCP servers?

Yes. Agents support remote MCP server connections via the `--mcp-server` flag. You specify the server URL and name, then add an `mcp_toolset` tool entry referencing that server. This lets agents use tools from GitHub, Slack, or custom MCP servers you've built.

### How do I use the ant CLI in CI/CD pipelines?

Define agents and environments as YAML files in your repo. In CI, use `ant beta:agents create < agent.yaml` to provision and `ant beta:agents update` to deploy changes. The `--transform` flag extracts IDs for scripting, and `--format` controls output parsing.

### What tools are available to managed agents?

The `agent_toolset_20260401` built-in toolset includes bash, read, write, edit, glob, grep, and web_fetch. You can enable or disable individual tools, or disable all by default and whitelist specific ones. Agents can also connect to external MCP servers for custom tool integrations.

---

**Read the full tutorial** with interactive code examples and component-based layout on the original post: [Getting Started with the ant CLI on avinashsangle.com](https://avinashsangle.com/blog/ant-cli-getting-started).
