# Twitter/X Long-form Post - Getting Started with the ant CLI

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py ant-cli-getting-started --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Anthropic shipped a CLI for managing Claude agents and nobody's talking about it.

The ant CLI launched April 8 alongside Managed Agents. It's a Go binary that lets you create, configure, and run cloud-hosted agents from your terminal. No wrapper code needed.

I wrote the first dedicated tutorial for it. Here's the short version:

WHAT IT IS

Think kubectl for Claude agents. Resource-based commands, YAML input, GJSON transforms, auto-pagination. If you've used any modern infra CLI, you already know the patterns.

ant [resource] <command> [flags...]

It's NOT Claude Code. Claude Code is your interactive coding assistant (subscription). The ant CLI is a programmatic API client for hosted agents (API key). I use both daily.

INSTALL (macOS)

brew install anthropics/tap/ant
xattr -d com.apple.quarantine "$(brew --prefix)/bin/ant"

That quarantine step trips everyone up. macOS flags the binary and blocks it without this fix.

THE KILLER FEATURE: YAML VERSION CONTROL

Define agents as YAML files. Check them into Git. Deploy through CI.

ant beta:agents create < reviewer.agent.yaml

Updates require passing the current version number - optimistic concurrency control, same pattern as Kubernetes.

Nobody has written about this workflow yet. It's the CLI's best feature for teams.

PRICING

- $0.08/session-hour (billed to the millisecond)
- Standard Claude token rates on top
- Idle time is free
- ~$0.70 for a 1-hour Opus coding session

CLI VS CURL VS SDK

- curl: manual JSON bodies, manual pagination, pipe to jq
- ant CLI: typed flags, auto-pagination, --transform for filtering
- SDK: typed objects, full language integration

CLI wins for shell scripts and CI/CD. SDK wins for app integration.

SCRIPTING EXAMPLE

AGENT_ID=$(ant beta:agents create \
  < agents/reviewer.agent.yaml \
  --transform id --format raw)

That --transform flag with GJSON syntax is much cleaner than piping to jq for simple extractions.

Full tutorial with 15 code examples, GitHub Actions deployment, and tool configuration:

https://avinashsangle.com/blog/ant-cli-getting-started

Follow @avi_sangle for more Claude Code and managed agents content.
