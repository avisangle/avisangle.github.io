# LinkedIn Post - Harden Claude Code GitHub Actions

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py hardening-ai-agents-cicd-prompt-injection --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Anthropic's own security docs say it plainly: "The action is not designed to be hardened against prompt injection."

In April 2026, security researcher Aonan Guan proved it. A single crafted PR title was enough to steal ANTHROPIC_API_KEY and GITHUB_TOKEN out of Claude Code running in GitHub Actions. Anthropic rated it CVSS 9.4 Critical. The same attack shape hit Gemini CLI and GitHub Copilot Agent too.

After going through the disclosure, the vendor fixes, and Anthropic's own security.md, I wrote the practitioner guide nobody has published yet - the assembled hardened workflow.

What actually moves the needle:

- Allowlist tools with --allowedTools. Anthropic's fix added --disallowed-tools 'Bash(ps:*)' but blocklists are whack-a-mole. A review agent gets Read, Grep, Bash(gh pr view:*). Nothing more.
- Scope GITHUB_TOKEN to read-only. permissions: read-all at the workflow level, elevated only per job.
- Move secrets to OIDC via AWS Bedrock or Vertex AI. No static ANTHROPIC_API_KEY in GitHub secrets means nothing to leak and nothing to rotate.
- Cap script invocations with CLAUDE_CODE_SCRIPT_CAPS so an injected prompt can't loop.
- harden-runner in block mode (not audit) with an egress allowlist. If an injection escapes every other control, the shell still can't POST to attacker.com.

The before/after diff is 35 lines. That's the cost of hardening a workflow. Compared to rotating an exfiltrated key and auditing every downstream service, it's a bargain.

What it won't fix: prompt injection at its core is "context the agent is designed to process." No YAML change fixes that. Keep humans in the loop for merges and secrets-bearing jobs.

Full write-up with the workflow, six starter tool allowlists, OIDC walkthrough, and residual risk:

https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection

If you're running Claude Code, Gemini CLI, or Copilot Agent in GitHub Actions today, what's the first control you'd ship?

#ClaudeCode #DevSecOps #PromptInjection #GitHubActions #AIEngineering
