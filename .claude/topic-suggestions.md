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

## 2026-04-22: Agent Skills Supply Chain Security - What Claude Code Developers Need to Know

**Suggested slug:** `agent-skills-supply-chain-security`
**Status:** pending research

### Why this topic, why now

Three academic papers dropped in April 2026 alone documenting specific attack vectors against the agent skills ecosystem: DDIPE payload execution via poisoned documentation ([2604.03081](https://arxiv.org/abs/2604.03081)), model-in-skill backdoors ([2604.09378](https://arxiv.org/abs/2604.09378)), and a benchmark of weaponized skills ([2604.15415](https://arxiv.org/abs/2604.15415)). Meanwhile, Snyk's ToxicSkills audit found 36% of skills across registries contain security flaws, and the OWASP launched a dedicated Agentic Skills Top 10 project in March. On April 16, GitHub shipped `gh skill publish` with built-in security features (immutable releases, secret scanning) - a direct response to the supply chain problem. Claude Code users are installing skills faster than ever (90,000+ on skills.sh), but practitioner guidance on vetting skills for Claude Code specifically is thin.

### Search demand evidence

- [Agent Skills - Open Security Database](https://news.ycombinator.com/item?id=47402118) - Hacker News front page, active security-focused discussion (posted April 2026)
- [RCE in Your Test Suite: How AI Agent Skills Bypass Every Skill Security Scanner](https://news.ycombinator.com/item?id=47337062) - Hacker News thread showing even scanners can be bypassed (posted April 2026)
- [Show HN: Scanning 277 AI agent skills for security issues](https://news.ycombinator.com/item?id=47234428) - active Show HN thread on skill scanning (posted March-April 2026)
- [Snyk ToxicSkills: Prompt Injection in 36%, 1,467 Malicious Payloads](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/) - major security research report (published February 2026)
- [Supply-Chain Poisoning Attacks Against LLM Coding Agent Skill Ecosystems](https://arxiv.org/abs/2604.03081) - academic paper documenting the DDIPE attack vector (published April 2026)
- [OWASP Agentic Skills Top 10](https://owasp.org/www-project-agentic-skills-top-10/) - new OWASP project launched from Oslo summit (March 2026)

### Competition check

The closest direct competitor is a Repello AI blog post ("Claude Code Skill Security: How to Audit Any Skill Before You Run It") that focuses on manual auditing and promotes their SkillCheck scanner. OpenClaw-focused articles from reco.ai, sangfor.com, and cyberdesserts cover the ClawHub registry crisis but don't address the Claude Code skill installation workflow. OWASP guides target the broader agentic applications space, not skills specifically. No existing article ties together the academic attack research, real-world incidents, the OWASP framework, `gh skill` security features, AND practical Claude Code permission configuration into a single practitioner guide.

### Suggested next step

`/research-topic "agent-skills-supply-chain-security"` to produce the full content brief with keyword strategy, FAQ candidates, and article outline.
