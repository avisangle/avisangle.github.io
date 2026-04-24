# Twitter/X Long-form Post - Harden Claude Code GitHub Actions

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py hardening-ai-agents-cicd-prompt-injection --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Anthropic's own docs: "The action is not designed to be hardened against prompt injection."

Then in April 2026, a single crafted PR title stole ANTHROPIC_API_KEY and GITHUB_TOKEN out of Claude Code, Gemini CLI, and GitHub Copilot Agent.

CVSS 9.4 Critical. Here's the actual fix:

THE ATTACK

Researcher Aonan Guan published "Comment and Control" on April 15. Three attacks, one shape:

- Claude Code: PR title breaks the prompt, agent runs whoami + env dump
- Gemini CLI: fake "Trusted Content Section" in a comment exposes API key
- Copilot Agent: hidden HTML comment runs ps auxeww, commits base64 tokens to the PR branch

Anthropic's patch: --disallowed-tools 'Bash(ps:*)'. The researcher's response: "Blocklisting is whack-a-mole."

WHY BLOCKLISTS FAIL

Blocking ps doesn't stop:
- cat /proc/self/environ
- printenv
- env | base64
- /etc/*release reads

THE HARDENED WORKFLOW

Six changes that matter:

1. permissions: read-all at the workflow level. Elevate per job.
2. claude_args with --allowedTools allowlist. Review agent gets Read, Grep, Bash(gh pr view:*). Nothing more.
3. CLAUDE_CODE_SCRIPT_CAPS to cap runaway tool loops.
4. include_comments_by_actor filters the crafted PR-title vector.
5. OIDC to AWS Bedrock. No static ANTHROPIC_API_KEY in secrets.
6. harden-runner in BLOCK mode (not audit) with an egress allowlist.

WHAT IT ACTUALLY COSTS

The before/after diff is 35 lines. That's the cost of hardening.

Compare to rotating an exfiltrated ANTHROPIC_API_KEY and auditing every downstream service it touches. Bargain.

WHAT IT WON'T FIX

Prompt injection is "context the agent is designed to process." No YAML changes that. File contents in the diff can still steer the agent. Keep humans in the loop for merges.

Full write-up with the assembled workflow, tool allowlists for 6 agent roles, OIDC/Bedrock walkthrough, and the threat model:

https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection

Follow @avi_sangle for more Claude Code deep-dives.
