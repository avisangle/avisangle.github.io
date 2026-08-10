# Reddit Posts - Claude Code Self-Hosted Runners Guide

**Post date:** Day 1
**Best time:** 2:00 PM IST
**Post via:** `python scripts/post_to_reddit.py claude-code-self-hosted-runners-guide --dry-run`

Each post is separated by a `---POST---` line. Each block must include
`SUBREDDIT:` and `TITLE:` lines followed by `---BODY---` and then the body.

---POST---
SUBREDDIT: ClaudeAI
TITLE: Self-hosted runners shipped in v2.1.224 - here's what the docs skip about Kubernetes deployment and cost
FLAIR: Coding

---BODY---
Self-hosted environments went live on August 6 with Claude Code v2.1.224. I've been running them on Kubernetes this week and wrote up the deployment details, including the things that aren't in the official quickstart.

**What self-hosted actually means:** Your infrastructure handles the session (file I/O, tool execution, git, network calls). Prompts still route through Anthropic's API. Self-hosting gives you infrastructure control, not inference isolation, and it does not reduce your API bill.

**Two modes - fixed vs on-demand.** Fixed is a static fleet, simpler to operate, but idle runners still consume resources and each holds the environment secret. On-demand uses an orchestrator that spins up a fresh runner per session and tears it down after. Scales to zero. The secret stays on the orchestrator only. Better security but more complex infra.

**The Kubernetes detail that burns people:** `terminationGracePeriodSeconds` must be 90. The K8s default is 30 seconds, which kills pods mid-session during rolling updates. Health probes go on port 8080. Minimum replicas = expected concurrent users (each runner locks to one user at a time with `--capacity 1`).

**Security hardening checklist I follow:**
- Ephemeral per-session containers
- Default-deny egress (allow api.anthropic.com:443, git host, conditionally downloads.claude.ai)
- Block 169.254.169.254 (cloud metadata)
- `--confine-repo-settings enforce` to prevent checked-in settings from expanding blast radius
- `--use-anthropic-git-proxy` so you don't bake git creds into runner images

**Cost:** A Markaicode analysis found mid-size teams spend roughly $1,500/month Anthropic-hosted vs $750 API + $400-800 infra self-hosted. Total is similar or higher once you add DevOps time.

**When it makes sense:** internal network access during sessions, data residency requirements, custom toolchains, or infrastructure-layer cost visibility. Most teams under 20 engineers are better off with Anthropic-hosted.

Full guide with Kubernetes manifests, Docker Compose for eval, and troubleshooting: https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide

Happy to answer questions about the deployment.

---POST---
SUBREDDIT: selfhosted
TITLE: Running Claude Code AI agents on your own infrastructure - Kubernetes and Docker deployment guide
FLAIR: Self Promotion

---BODY---
Anthropic shipped self-hosted runners for Claude Code on August 6. It works like GitHub Actions self-hosted runners: a long-lived process on your machine polls for queued sessions, picks one up, clones the repo, and runs it locally. Model inference still happens on Anthropic's servers, but compute, file I/O, and network access are local.

**Why self-host.** The main draw is network access. If your codebase needs to hit private APIs, internal databases, or services behind a VPN during AI coding sessions, self-hosted runners sit inside your perimeter. No need to tunnel or expose endpoints.

**Requires:** Team or Enterprise plan, Linux or macOS, Claude Code v2.1.224+, outbound HTTPS to api.anthropic.com.

**Two modes:**
- **Fixed:** static fleet of runners, simpler ops. Good for predictable workloads.
- **On-demand:** an orchestrator spins up a fresh container per session and tears it down after. Scales to zero when idle. The environment secret stays on the orchestrator, not on session hosts.

**Docker Compose for evaluation** works fine for testing. For production, I use Kubernetes with a custom Dockerfile (debian:bookworm-slim base), a K8s Secret for the env key, and a Deployment. Critical settings: `terminationGracePeriodSeconds: 90` (default 30 kills pods mid-session during rolling updates), health probes on port 8080, replicas >= concurrent users.

**Security notes:** use ephemeral per-session containers, default-deny egress, block cloud metadata at 169.254.169.254, and use `--confine-repo-settings enforce` to prevent repo config from expanding the runner's permissions.

**Cost note:** self-hosting adds infra costs on top of Anthropic's seat/token pricing. It doesn't reduce the API bill - inference still routes through their servers. The value is infrastructure control and compliance, not savings.

Full guide with manifests, a security hardening checklist, and troubleshooting: https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide

Happy to answer questions about the setup.
