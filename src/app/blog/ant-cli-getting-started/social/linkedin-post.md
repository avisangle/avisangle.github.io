# LinkedIn Post - Getting Started with the ant CLI

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py ant-cli-getting-started --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Anthropic shipped the ant CLI on April 8 alongside Claude Managed Agents. It's a Go binary for creating, configuring, and running cloud-hosted agents from your terminal - no wrapper code needed.

I wrote what I believe is the first dedicated tutorial for it. Here's what stood out:

- The CLI uses a resource-based command structure (think kubectl for Claude agents). YAML in, JSON/YAML/pretty out.
- You can define agents as YAML files, check them into Git, and deploy through CI. Full GitOps for agent configs.
- Updates require passing the current version number - optimistic concurrency, same as Kubernetes. No silent overwrites.
- Sessions cost $0.08/hour billed to the millisecond. Idle time is free.
- The --transform flag uses GJSON syntax to extract fields from responses, which is much cleaner than piping to jq in scripts.

One important distinction: the ant CLI is NOT Claude Code. Claude Code is your interactive coding assistant (subscription-based). The ant CLI is a programmatic API client for managing hosted agent infrastructure (API key-based). They complement each other - Claude Code can even shell out to ant commands.

The tutorial walks through installation, creating your first agent, YAML version control, CI/CD deployment with GitHub Actions, and scripting patterns with real commands and output.

https://avinashsangle.com/blog/ant-cli-getting-started

Have you tried running managed agents through the CLI yet, or are you using the SDK?

#ClaudeCode #AntCLI #ManagedAgents #Anthropic #AIEngineering
