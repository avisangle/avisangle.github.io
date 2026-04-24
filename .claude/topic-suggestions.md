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

---

## 2026-04-24: Hardening AI Coding Agents in CI/CD Against Prompt Injection

**Suggested slug:** `hardening-ai-agents-cicd-prompt-injection`
**Status:** pending research

### Why this topic, why now

On April 15, 2026, security researcher Aonan Guan (with Johns Hopkins University collaborators) published "Comment and Control" - a cross-vendor prompt injection attack that steals CI/CD secrets from Claude Code Security Review, Google Gemini CLI Action, and GitHub Copilot Agent through nothing more than a crafted PR title or issue comment. Anthropic rated it CVSS 9.4 Critical. All three vendors patched quietly, but the underlying architectural problem (untrusted GitHub input flowing into agents that hold production secrets and unrestricted tool access) affects every team running AI agents in GitHub Actions. The existing coverage is entirely news reporting. No one has written the practitioner's hardening guide: specific YAML changes, `--allowed-tools` allowlisting, OIDC token migration, `CLAUDE_CODE_SCRIPT_CAPS` limits, and before/after workflow comparisons. This is a different article from the existing `claude-code-security-review-github-actions` setup guide - that post teaches you to install the tool, this one teaches you to defend it (and similar tools) from attack.

### Search demand evidence

- [Comment and Control: Prompt Injection to Credential Theft in Claude Code, Gemini CLI, and GitHub Copilot Agent](https://oddguan.com/blog/comment-and-control-prompt-injection-credential-theft-claude-code-gemini-cli-github-copilot/) - Original researcher disclosure, April 15, 2026
- [Anthropic, Google, Microsoft paid AI bug bounties - quietly](https://www.theregister.com/2026/04/15/claude_gemini_copilot_agents_hijacked/) - The Register, April 15, 2026
- [Three AI coding agents leaked secrets through a single prompt injection](https://venturebeat.com/security/ai-agent-runtime-security-system-card-audit-comment-and-control-2026) - VentureBeat, April 2026
- [Claude Code, Gemini CLI, GitHub Copilot Agents Vulnerable to Prompt Injection via Comments](https://www.securityweek.com/claude-code-gemini-cli-github-copilot-agents-vulnerable-to-prompt-injection-via-comments/) - SecurityWeek, April 2026
- [Claude Code, Gemini CLI, and GitHub Copilot Vulnerable to Prompt Injection via GitHub Comments](https://cybersecuritynews.com/prompt-injection-via-github-comments/) - CybersecurityNews, April 2026
- [claude-code-action security.md](https://github.com/anthropics/claude-code-action/blob/main/docs/security.md) - Anthropic's own reference doc listing hardening flags (`--allowed-tools`, `CLAUDE_CODE_SCRIPT_CAPS`, OIDC)

### Competition check

Searching "hardening Claude Code GitHub Actions prompt injection" and "securing AI agents CI/CD prompt injection defense" returns only news articles (SecurityWeek, VentureBeat, The Register, CybersecurityNews, GBHackers) and Anthropic's reference `security.md` in the claude-code-action repo. Zero third-party practitioner guides exist. The news articles describe the attack but don't walk through the fix. Anthropic's security.md is a reference doc, not a tutorial. No one has written the "here's the exact YAML diff to lock down your workflow" post that a DevOps engineer would search for after reading the headlines.

### Suggested next step

`/research-topic "hardening-ai-agents-cicd-prompt-injection"` to produce the full content brief with keyword strategy, FAQ candidates, and article outline.
