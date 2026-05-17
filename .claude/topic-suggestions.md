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

---

## 2026-04-27: Regression-Proofing Your Claude Code Workflows

**Suggested slug:** `regression-proofing-claude-code-workflows`
**Status:** pending research

### Why this topic, why now

On April 23, 2026, Anthropic published an engineering postmortem confirming that three separate harness-level changes - a reasoning effort downgrade, a thinking-cache clearing bug, and a system prompt verbosity cap - compounded over seven weeks (March 4 to April 20) to make Claude Code feel noticeably worse for thousands of users. The model itself never changed; the wrapper around it broke. Every article covering this event (12+ across DEV Community, SmartScope, VentureBeat, Simon Willison, DevToolPicks, and others) explains WHAT happened. Not a single one shows developers HOW to protect their own workflows from the next upstream change. The practitioner guide - covering version pinning, explicit effort configuration, regression-detecting hooks, and fixture-based workflow testing - does not exist yet. Developers searching "how to pin Claude Code version" or "Claude Code regression protection" land on Anthropic's docs or the news articles, with no actionable third-party tutorial.

### Search demand evidence

- [An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem) - Anthropic engineering blog, published April 23, 2026. The official postmortem confirming three confounding changes.
- [An update on recent Claude Code quality reports - Hacker News](https://news.ycombinator.com/item?id=47878905) - Active HN discussion thread (posted April 26, 2026), driving fresh traffic to the topic.
- [Anthropic shipped three regressions in a month and their evals didn't catch one of them](https://machinelearningatscale.substack.com/p/anthropic-shipped-three-regressions) - Substack deep-dive, April 2026. Calls out that "the company with one of the most invested eval infrastructure shipped three intelligence regressions back to back."
- [Claude Code v2.1.119/v2.1.120 Survival Checklist: eight regressions filed 2026-04-24](https://gist.github.com/yurukusa/a866b4cd2976486156a00c190c39cef6) - Community-maintained rollback guide on GitHub Gist. Shows real developer demand for version pinning and rollback instructions.
- [Feature Request: Auto-rollback alert for critical bugs + Better version management](https://github.com/anthropics/claude-code/issues/22106) - Open issue on the official repo requesting better version management. Direct signal that developers want this tooling.
- [The Claude Code Nerf: An Invisible, Unilateral Downgrade at the Runtime Layer](https://yage.ai/share/claude-code-runtime-regression-en-20260407.html) - Blog post from April 7 documenting the quality drop before Anthropic acknowledged it.

### Competition check

Searching "Claude Code version pinning regression protection tutorial" and "how to protect Claude Code workflow from quality drops" returns only Anthropic's own docs (model-config page, advanced setup page) and the 12+ news/analysis articles about the postmortem. The closest practitioner-adjacent piece is a Substack post from coworkoperator.com arguing developers should "stop asking if Claude got worse" and instead build resilient workflows - but it's an opinion essay, not a step-by-step guide. Individual effort-level configuration guides exist (MindStudio, BSWEN, SitePoint), but none frame the problem as regression defense or combine version pinning, effort locks, hooks, and fixture testing into one guide. Wide-open gap for a hands-on DevOps-flavored tutorial.

### Suggested next step

`/research-topic "regression-proofing-claude-code-workflows"` to produce the full content brief with keyword strategy, FAQ candidates, and article outline.

---

## 2026-05-03: Running claude ultrareview in CI/CD Pipelines

**Suggested slug:** `ultrareview-ci-cd-pipelines`
**Status:** pending research

### Why this topic, why now

On April 28, 2026, Claude Code v2.1.120 quietly shipped `claude ultrareview [target]` - a non-interactive CLI subcommand that runs the multi-agent ultrareview from CI scripts and pipelines. It prints findings to stdout (with `--json` for structured output) and exits 0 on success or 1 on failure. This is significant because every existing ultrareview article (8+ published since the April 16 launch) explicitly states that ultrareview is interactive-only and cannot run in automated pipelines. That limitation just disappeared, and nobody has written about it yet. The timing is sharpened by GitHub's April 27 announcement that Copilot code review will start consuming GitHub Actions minutes on June 1, 2026, pushing teams to evaluate CI code review alternatives before the billing change hits.

### Search demand evidence

- [GitHub Copilot code review will start consuming GitHub Actions minutes - Hacker News](https://news.ycombinator.com/item?id=47932028) - HN discussion thread from April 27, 2026. Developers debating the cost implications and looking at alternatives as Copilot review starts billing Actions minutes on June 1.
- [GitHub Copilot code review will start consuming GitHub Actions minutes on June 1, 2026](https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026/) - Official GitHub Changelog, April 27, 2026.
- [Claude Code CLI 2.1.120 changelog](https://x.com/ClaudeCodeLog/status/2047882231343878309) - @ClaudeCodeLog tweet confirming the `claude ultrareview [target]` subcommand addition.
- [Claude Code Ultrareview vs CodeRabbit vs Greptile](https://medium.com/@richardhightower/claude-code-ultrareview-vs-coderabbit-vs-greptile-94737b30ec1f) - Rick Hightower, Medium, April 2026. Comparison post showing active developer interest in choosing between AI code review tools, but focused entirely on interactive use.
- [Claude Code Ultra Review: I Watched It Hunt Bugs](https://www.mejba.me/blog/claude-code-ultra-review-tested) - Mejba Ahmed, April 2026. Practitioner write-up of the interactive /ultrareview - no mention of CI integration.

### Competition check

Searching "claude ultrareview CI pipeline" and "claude ultrareview github actions" returns zero practitioner guides. The 8+ existing ultrareview articles (claudedirectory.org, tech2geek.net, wmedia.es, buildthisnow.com, pasqualepillitteri.it, plus Medium posts by Joe Njenga and Rick Hightower) all cover the interactive `/ultrareview` slash command exclusively. Several explicitly state that CI integration is not supported - a claim that is now outdated since v2.1.120. The official Claude Code docs mention `claude ultrareview` in the CLI reference page but provide no GitHub Actions workflow example, no cost modeling for pipeline budgets, and no comparison with the separate managed Code Review product (Team/Enterprise only, $15-25/review). The gap is a step-by-step guide for wiring `claude ultrareview --json` into a GitHub Actions or GitLab CI workflow with proper exit code handling, cost controls, and output parsing.

### Suggested next step

`/research-topic "ultrareview-ci-cd-pipelines"` to produce the full content brief with keyword strategy, FAQ candidates, and article outline.

---

## 2026-05-08: Claude Managed Agents Outcomes - Auto-Grading Your AI Agent's Work

**Suggested slug:** `claude-managed-agents-outcomes`
**Status:** pending research

### Why this topic, why now

Anthropic launched the Outcomes feature for Claude Managed Agents in public beta at the Code with Claude SF developer conference on May 6, 2026. Outcomes let you write a scoring rubric, then a separate grader model evaluates your agent's output against it in its own context window - feeding gaps back to the agent for another iteration. This is the first built-in, rubric-driven quality gate for autonomous agents that doesn't rely on human review. It dropped the same week an 851-upvote Reddit thread about an AI agent deleting a production database reignited the "how do we trust agent output" conversation, and zero third-party practitioner guides exist yet.

### Search demand evidence

- [An AI Agent Deleted Our Production Database](https://gist.github.com/heiba-wk/990804e51dc01b1b8804d1bad25ca01a) - 851 upvotes, 1,027 comments (r/artificial, posted April 26, 2026). Surfaced via "10 Trending Reddit Posts About AI Agents (May 2026)" aggregation.
- [How Are You Guys Monitoring Your Multi-Agent Workflows?](https://dev.to/lura_cardena_7de06f82aacd/ai-agents-on-reddit-late-april-to-early-may-2026-ten-threads-about-cost-reliability-and-real-4f20) - Active thread (r/AutoGenAI, posted April 22, 2026). Surfaced via DEV Community roundup of trending agent threads.
- [Higher usage limits for Claude and a compute deal with SpaceX](https://news.ycombinator.com/item?id=48037986) - Hacker News front page (posted May 6, 2026). Peak community attention on Anthropic during Code with Claude week.
- [New in Claude Managed Agents: dreaming, outcomes, and multiagent orchestration](https://claude.com/blog/new-in-claude-managed-agents) - Official Anthropic launch blog post, May 6, 2026.
- [Codex /goal and Claude Managed Outcomes: The New Control Loops](https://www.developersdigest.tech/blog/codex-goal-vs-claude-managed-outcomes-practical-differences) - Developers Digest comparison showing active developer interest in evaluating outcome-based agent evaluation across platforms.
- [Define outcomes - Claude API Docs](https://platform.claude.com/docs/en/managed-agents/define-outcomes) - Official reference docs confirming Outcomes is in public beta with rubric-based grading, per-criterion feedback, and configurable iteration limits.

### Competition check

Searching "Claude Managed Agents outcomes tutorial" and "how to auto-evaluate AI agent output quality" returns only Anthropic's official docs, the Claude launch blog post, one broad 30-minute Managed Agents quickstart (cozypet.github.io) that touches outcomes in passing, and the Developers Digest comparison with Codex /goal. No focused practitioner guide exists covering: how to write effective rubrics for different agent tasks, tuning iteration limits vs. cost, interpreting grader feedback loops, or comparing the cost of automated outcome evaluation against manual human review. The existing blog's Managed Agents post covers platform choice (Managed Agents vs Agent SDK) - this would target the next question: "I chose Managed Agents, now how do I ensure my agent's output is actually correct?"

### Suggested next step

`/research-topic "claude-managed-agents-outcomes"` to produce the full content brief with Context7-validated facts, keyword strategy, and outline.

---

## 2026-05-13: OpenAI Codex Security - Setting Up AI Vulnerability Scanning for Your GitHub Repos

**Suggested slug:** `codex-security-github-setup`
**Status:** pending research

### Why this topic, why now

On May 11, 2026, OpenAI launched Daybreak, a cybersecurity initiative that repositions Codex Security (originally shipped March 2026) from a developer coding tool into an AI-powered vulnerability detection platform. The same day, Google's Threat Intelligence Group disclosed the first confirmed case of an AI-generated zero-day exploit used in the wild - attackers used an AI model to discover and weaponize a 2FA bypass for a planned mass exploitation campaign. These two events landed within hours of each other and are driving massive developer interest in AI-powered defensive scanning. Codex Security connects to GitHub repos, builds codebase-specific threat models, validates findings in sandboxed environments (reporting a 74% true positive rate vs Semgrep's 20% in DryRun Security testing), and proposes patches as pull requests. The blog already ranks for the Claude Code security review angle. A Codex Security practitioner guide creates cross-vendor coverage and a security scanning content cluster.

### Search demand evidence

- [OpenAI Launches Daybreak for AI-Powered Vulnerability Detection and Patch Validation](https://thehackernews.com/2026/05/openai-launches-daybreak-for-ai-powered.html) - The Hacker News, published May 11, 2026. Daybreak combines GPT-5.5 models and Codex Security with partners including Akamai, Cisco, Cloudflare, CrowdStrike, Fortinet, Oracle, Palo Alto Networks, and Zscaler.
- [Google says it likely thwarted effort by hacker group to use AI for 'mass exploitation event'](https://www.cnbc.com/2026/05/11/google-thwarts-effort-hacker-group-use-ai-mass-exploitation-event.html) - CNBC, published May 11, 2026. First confirmed AI-built zero-day, directly driving developer demand for AI-powered defensive tools.
- [OpenAI's Daybreak Challenges Anthropic in AI Cybersecurity Race](https://devops.com/openais-daybreak-challenges-anthropic-in-ai-cybersecurity-race/) - DevOps.com, May 12, 2026. Positions Codex Security directly against Claude Code Security Review and Claude Mythos.
- [Top 10 AI SAST Tools for 2026](https://www.dryrun.security/blog/top-ai-sast-tools-2026) - DryRun Security, 2026. Industry comparison noting Codex Security found three critical vulnerabilities that neither Semgrep nor Snyk flagged, with sandbox-based validation reducing noise by roughly 70%.
- [Setup - Codex Security | OpenAI Developers](https://developers.openai.com/codex/security/setup) - Official setup docs exist, but zero third-party walkthrough covers the full workflow.
- [Codex Security Review 2026: OpenAI's AppSec Agent](https://agent-finder.co/reviews/codex-security) - Agent Finder overview review, not a setup tutorial.

### Competition check

Searching "Codex Security setup guide" and "OpenAI Codex Security tutorial GitHub" returns only OpenAI's official developer docs, an Agent Finder feature review, and a Shawn Kanungo summary post. News coverage is heavy (MacRumors, eWeek, MarkTechPost, Infosecurity Magazine, Help Net Security, CSO Online, TechBriefly) but every article describes Daybreak's capabilities without walking through the actual setup. No third-party post covers the practitioner workflow: connecting repos, editing the auto-generated threat model to match your architecture, triaging validated vs unvalidated findings, creating PRs from proposed patches, or comparing the developer experience against the Claude Code Security Review GitHub Action that the blog already covers. The closest competitor content is TrueFoundry's "Best AI Code Security Tools for Enterprise" comparison, which is a feature matrix and not a hands-on guide. Wide-open gap for the first step-by-step tutorial that a developer can follow after reading the Daybreak headlines.

### Suggested next step

`/research-topic "codex-security-github-setup"` to produce the full content brief with keyword strategy, FAQ candidates, and article outline.

---

## 2026-05-15: npm Supply Chain Defense for AI Coding Agents - Lessons from the TanStack Worm

**Suggested slug:** `npm-supply-chain-defense-ai-coding-agents`
**Status:** pending research

### Why this topic, why now

On May 11, 2026, the Mini Shai-Hulud worm published 84 malicious versions across 42 @tanstack/* npm packages in under six minutes, then spread to 170+ packages including Mistral AI's SDK on both npm and PyPI. OpenAI confirmed on May 14 that two employee devices were compromised, forcing certificate rotation and a mandatory macOS app update by June 12. This is the third major npm supply chain incident in 10 weeks (axios on March 31, SAP packages in April, now TanStack) and the first to carry valid SLSA Build Level 3 provenance attestations, meaning package signing alone didn't protect anyone. AI coding agents like Claude Code, Codex, and Cursor run `npm install` autonomously and inherit every dependency their workflows touch. Multiple security vendors (CSO Online, Oligo Security, grith.ai) have published articles explaining WHY AI coding agents are at risk, but zero practitioner guides show HOW to configure your package manager, lockfile strategy, and Claude Code hooks to block compromised packages before they execute.

### Search demand evidence

- [Postmortem: TanStack NPM supply-chain compromise](https://news.ycombinator.com/item?id=48100706) - Hacker News front page discussion (posted May 14, 2026). Multiple HN threads covering the incident including [item 48100388](https://news.ycombinator.com/item?id=48100388) and [item 48105634](https://news.ycombinator.com/item?id=48105634).
- [Our response to the TanStack npm supply chain attack](https://openai.com/index/our-response-to-the-tanstack-npm-supply-chain-attack/) - Official OpenAI disclosure confirming employee device compromise and listing specific hardening steps including `minimumReleaseAge` deployment.
- [OpenAI caught in TanStack npm supply chain chaos after employee devices compromised](https://www.theregister.com/security/2026/05/15/openai-caught-in-tanstack-npm-supply-chain-chaos-after-employee-devices-compromised/5241019) - The Register, published May 15, 2026. Coverage is still actively expanding.
- [Supply-chain attacks take aim at your AI coding agents](https://www.csoonline.com/article/4167465/supply-chain-attacks-take-aim-at-your-ai-coding-agents.html) - CSO Online, May 2026. Names Claude Code, GitHub Copilot, and Cursor as attack surfaces but provides no configuration steps.
- [NPM Supply Chain Attacks: Hidden Risks for AI Agents](https://www.oligo.security/blog/the-hidden-risks-of-the-npm-supply-chain-attacks-ai-agents) - Oligo Security blog. Risk analysis, not a defense tutorial.
- [Malicious npm Packages Backdoor Claude Code Sessions](https://safedep.io/malicious-npm-packages-claude-code-hooks/) - SafeDep threat alert showing attackers already targeting Claude Code's SessionStart hooks specifically.
- [security: enforce minimum package release age to prevent zero-day supply chain attacks](https://github.com/mikiwiik/instructions-only-claude-coding/issues/530) - GitHub issue on a Claude Code instructions repo requesting minimumReleaseAge enforcement, showing direct developer demand for this guidance.

### Competition check

Searching "npm supply chain defense AI coding agents tutorial" and "protect Claude Code npm install supply chain attack" returns only the CSO Online and Oligo Security risk-analysis articles, the SafeDep threat alert, and generic npm hardening guides (Coinspect, ArmorCode, Mondoo, pnpm docs). The DEV Community's "Lessons from the Spring 2026 OSS Incidents" post covers npm/pnpm/GitHub Actions hardening generically but never mentions AI coding agents. The grith.ai post on the axios attack is from March and predates the TanStack incident. No one has written the practitioner playbook showing the specific `.npmrc` / `bunfig.toml` / `pnpm` settings for `minimumReleaseAge`, the Claude Code hooks to audit `npm install` commands before execution, the `--ignore-scripts` flags to block lifecycle script attacks, or the lockfile verification steps that would have caught the TanStack worm. The blog already covers prompt injection defense (`hardening-ai-agents-cicd-prompt-injection`) and AI-powered vulnerability scanning (`claude-code-security-review-github-actions`, `codex-security-github-setup`) - this fills the missing third pillar: dependency supply chain defense.

### Suggested next step

`/research-topic "npm-supply-chain-defense-ai-coding-agents"` to produce the full content brief with keyword strategy, FAQ candidates, and article outline.
