# Reddit Posts - Getting Started with the ant CLI

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py ant-cli-getting-started --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: I wrote the first dedicated ant CLI tutorial - here's what I learned
FLAIR: Tutorial
---BODY---
The ant CLI shipped alongside Managed Agents on April 8 but there's no tutorial for it anywhere. Every existing article covers Managed Agents as a concept and mentions the CLI in passing with 1-2 commands. So I wrote a hands-on walkthrough.

Here's the quick summary of what the CLI actually does:

**It's kubectl for Claude agents.** Resource-based commands: `ant [resource] <command> [flags...]`. You create agents, environments, and sessions from your terminal.

**It's NOT Claude Code.** Claude Code is your interactive coding assistant (subscription). The ant CLI is a programmatic API client for hosted agent infra (API key). They're complementary - Claude Code can shell out to `ant` natively.

**The best feature nobody's writing about: YAML version control.** You can define agents as `.agent.yaml` files, check them into Git, and deploy through CI. Updates require passing the current version number (optimistic concurrency, same as K8s). This is the killer workflow for teams.

**Install on macOS:**
```
brew install anthropics/tap/ant
xattr -d com.apple.quarantine "$(brew --prefix)/bin/ant"
```

That quarantine step trips people up - macOS blocks the binary without it.

**Pricing:** $0.08/session-hour billed to the millisecond. Idle time is free. A 1-hour Opus session runs about $0.70 total.

**Scripting is clean.** The `--transform` flag uses GJSON syntax to extract fields from responses, and `--format raw` strips quotes. Much better than piping everything to jq.

Full tutorial with 15 code examples, GitHub Actions deployment, and tool configuration: https://avinashsangle.com/blog/ant-cli-getting-started

Happy to answer questions if you're evaluating the CLI for your workflow.
---POST---
SUBREDDIT: devops
TITLE: Using Anthropic's ant CLI for GitOps-style agent management (YAML configs, CI/CD deployment)
FLAIR: Discussion
---BODY---
Anthropic released the ant CLI - a Go binary for managing their cloud-hosted Claude agents. The interesting part from a DevOps perspective is the YAML version control workflow.

**The pattern:**
- Define agents as `.agent.yaml` files (model, system prompt, tools, MCP connections)
- Define environments as `.environment.yaml` files (pip/npm packages, networking rules)
- Check both into Git
- Deploy through CI with `ant beta:agents create < agent.yaml`

**Updates use optimistic concurrency:**
```
ant beta:agents update \
  --agent-id "$AGENT_ID" \
  --version 1 \
  < code-reviewer.agent.yaml
```

If someone else updated the agent since your last pull, the command fails rather than silently overwriting. Same pattern as Kubernetes resource versions.

**GitHub Actions integration** is straightforward - install the binary from GitHub releases, set `ANTHROPIC_API_KEY` as a secret, and run the update commands on push to `agents/**` paths.

**The CLI itself** follows familiar patterns: resource-based commands (`ant [resource] <command> [flags]`), YAML/JSON/pretty output formats, auto-pagination, and a `--transform` flag with GJSON syntax for field extraction in scripts.

**Pricing context:** $0.08/session-hour for the agent runtime (billed to ms, idle is free) plus standard Claude API token rates.

I wrote a hands-on tutorial covering install, first agent creation, the YAML workflow, and scripting patterns: https://avinashsangle.com/blog/ant-cli-getting-started

Curious if anyone else has started managing agent configs as code.
