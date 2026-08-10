# Twitter/X Long-form Post - Claude Code Self-Hosted Runners Guide

**Post date:** Day 0 (Publish day)
**Best time:** 6:30 PM IST
**Format:** Single long-form tweet (Basic tier, up to 25,000 chars)
**Post via:** `python scripts/post_to_twitter.py claude-code-self-hosted-runners-guide --dry-run`

Everything below the `---BODY---` marker is the actual tweet content.

---BODY---
Claude Code v2.1.224 shipped self-hosted runners on August 6. I spent the week deploying them on Kubernetes and wrote up everything the official docs skip.

THE SETUP

Four steps: create an environment secret in the admin UI, store it on the host, start the runner process, verify it registers. Requires a Team or Enterprise plan, Linux or macOS, and outbound HTTPS to api.anthropic.com.

Key command:

claude self-hosted-runner \
  --environment-secret-file /etc/claude/environment-secret \
  --base-dir /workspace

WHAT SELF-HOSTED ACTUALLY MEANS

This trips people up. Self-hosted controls where compute runs, not where inference happens. Your prompts and model responses still route through Anthropic's API. What stays local: the session workspace, file system access, tool execution, and network connectivity to internal services.

So no, self-hosting does not reduce your API bill.

FIXED VS ON-DEMAND MODES

Fixed: a static fleet of runners stays running. Simpler ops, but idle runners still consume resources and each one holds the environment secret.

On-demand: an orchestrator polls for queued sessions, spins up a fresh runner per session, tears it down after. Scales to zero, and the secret stays on the orchestrator only. Better security, more complex infra.

For capacity: use --capacity 1 in production. Each runner locks to one user at a time. 15 engineers during peak = minimum 15 runners.

KUBERNETES DEPLOYMENT

Three pieces: a Dockerfile (debian:bookworm-slim base), a Kubernetes Secret for the env key, and a Deployment manifest.

The detail that burns people: terminationGracePeriodSeconds must be 90, not the default 30. Without it, rolling updates kill pods mid-session and your engineers lose work.

Health probes go on port 8080. Replicas >= concurrent users. Each subagent in a dynamic workflow consumes a runner slot, so scale accordingly.

SECURITY HARDENING

Six controls I follow for production runners:

1. Ephemeral per-session containers (--capacity 1, destroy after each session)
2. No broad credentials in the image (mint per-session tokens instead)
3. Default-deny network egress (allow only api.anthropic.com:443, your git host, and conditionally downloads.claude.ai)
4. Block 169.254.169.254 to prevent cloud metadata endpoint access
5. --confine-repo-settings enforce to block .claude/settings.json from expanding runner blast radius
6. --use-anthropic-git-proxy so you don't bake git creds into runner images

Endpoints you don't need to allow: statsig.anthropic.com, sentry.io, claude.ai.

COST REALITY

Self-hosting doesn't save money for most teams. You pay the same Anthropic seat and token costs, plus your own compute, storage, networking, and DevOps time.

A Markaicode analysis found that a mid-size team might spend $1,500/month Anthropic-hosted vs $750 in API costs plus $400-800 in infrastructure self-hosted. Total comes out similar or higher once you add engineering time.

It saves money in narrow cases: large teams where owning infra reduces compliance audit costs, or massive repos where pre-warmed checkouts on persistent runners cut clone times from minutes to seconds.

WHO SHOULD SELF-HOST

Four cases where it makes sense:

- Need to reach private APIs, internal DBs, or VPN services during sessions
- Compliance/data residency requires compute in specific jurisdictions
- Custom toolchains (specific compilers, SDKs baked into the image)
- Infrastructure-layer cost visibility for capacity planning

Skip it if you're under 20 engineers, have no compliance requirements, or lack dedicated DevOps capacity.

Full guide with Kubernetes manifests, Docker Compose for evaluation, and a troubleshooting section:

https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide

Follow @avi_sangle for more Claude Code infrastructure content.
