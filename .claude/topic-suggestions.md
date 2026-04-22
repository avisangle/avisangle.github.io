# Topic Suggestions

Trending topic candidates surfaced by automated weekly scans. Each entry is a lightweight signal -- run `/research-topic` to produce the full content brief before writing.

---

## 2026-04-17: Getting Started with the ant CLI - Build Claude Agents from Your Terminal

**Suggested slug:** `ant-cli-getting-started`
**Status:** pending research

### Why this topic, why now

Anthropic launched the `ant` CLI on April 8, 2026 alongside Claude Managed Agents. It is the first official command-line client for the Claude API - replacing manual curl/JSON workflows with typed flags, YAML input, response filtering, and native Claude Code integration. Nine days after launch, there are zero third-party tutorial guides. Every search for "ant cli tutorial" returns results about Claude Code (the different tool) or generic Anthropic API guides. Being first to publish a practitioner guide creates a durable ranking advantage as search volume grows.

### Search demand evidence

- [Claude Managed Agents - Hacker News](https://news.ycombinator.com/item?id=47693047) - Active discussion thread from April 8, the same day ant CLI launched as part of the announcement. HN commenters discussed going from "zero to working agent in 45 minutes" and debated self-hosted vs managed approaches.
- [Anthropic Platform Release Notes - April 8, 2026](https://platform.claude.com/docs/en/release-notes/overview) - Official announcement: "We've launched the ant CLI, a command-line client for the Claude API that enables faster interaction with the Claude API, native integration with Claude Code, and versioning of API resources in YAML files."
- [feat(advisor): Anthropic Claude Code /advisor rollout - LiteLLM #25516](https://github.com/BerriAI/litellm/issues/25516) - Developer ecosystem already requesting ant CLI integration in proxy tools.
- [Add Anthropic Advisor Tool support - Roo Code #12094](https://github.com/RooCodeInc/Roo-Code/issues/12094) - Another tool adding ant CLI/API support, showing organic developer demand.
- [anthropics/anthropic-cli](https://github.com/anthropics/anthropic-cli) - Official GitHub repo; Go-based, installable via `go install`.

### Competition check

Searching "ant cli anthropic tutorial" and "ant cli getting started guide" returns only Anthropic's own docs (platform.claude.com/docs/en/api/sdks/cli) and the GitHub repo README. No third-party blog posts, no YouTube tutorials, no DEV Community guides. The closest results are Blake Crosley's Claude Code CLI guide and generic Anthropic API tutorials, neither of which cover the ant CLI. This is a wide-open gap for an official Anthropic developer tool.

### Suggested next step

`/research-topic "ant-cli-getting-started"` to produce the full content brief with keyword strategy, FAQ candidates, and article outline.

---

## 2026-04-20: Claude Code Security Review GitHub Action - Automated Vulnerability Scanning for Every PR

**Suggested slug:** `claude-code-security-review-github-actions`
**Status:** pending research

### Why this topic, why now

On April 16, 2026, The Register reported that a design flaw in Anthropic's Model Context Protocol puts up to 200,000 MCP servers at risk of complete takeover. The same week, The Hacker News covered an MCP vulnerability enabling remote code execution across 7,000+ publicly accessible servers. Security in AI agent workflows is now the dominant conversation on Hacker News and r/ClaudeAI. Meanwhile, Anthropic ships an official GitHub Action (`anthropics/claude-code-security-review`) that uses Claude to analyze code changes for security vulnerabilities on every PR - and almost nobody has written a proper practitioner guide for it. The timing is perfect: developers worried about AI supply chain security are actively looking for ways to harden their own code review pipelines.

### Search demand evidence

- [MCP 'design flaw' puts 200k servers at risk](https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/) - The Register, published April 16, 2026
- [Anthropic MCP Design Vulnerability Enables RCE, Threatening AI Supply Chain](https://thehackernews.com/2026/04/anthropic-mcp-design-vulnerability.html) - The Hacker News, April 2026
- [Show HN: Wombat, Unix-style rwxd permissions for MCP tool calls](https://news.ycombinator.com/item?id=47418076) - Hacker News front page, active discussion about securing MCP tool access
- [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review) - Official Anthropic GitHub Action repo, actively maintained
- [Automated security code reviews with Claude Code and GitHub Actions](https://derivai.substack.com/p/automated-security-code-reviews-claude-code-github-actions) - DerivAI (one of only two practitioner guides that exist)

### Competition check

Searching "claude code security review github action setup" returns the official repo README, a Gecko Security blog guide, and the DerivAI Substack post. That's it - two practitioner guides total. No tutorial covers the full workflow: installation, customization for team security policies, handling false positives, comparison with traditional SAST tools (Snyk, Semgrep, SonarQube), or integration into an existing CI/CD pipeline alongside linters and tests. The top AI SAST comparison posts (DryRun Security, sanj.dev) don't even mention this action. Wide gap for a hands-on DevOps guide.

### Suggested next step

`/research-topic "claude-code-security-review-github-actions"` to produce the full content brief with keyword strategy, FAQ candidates, and article outline.
