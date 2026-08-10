# LinkedIn Post - Claude Code Self-Hosted Runners Guide

**Post date:** Day 0 (Publish day)
**Best time:** 9:00 AM IST (weekday)
**Post via:** `python scripts/post_to_linkedin.py claude-code-self-hosted-runners-guide --dry-run`

Everything below the `---BODY---` marker is the actual post content.

---BODY---
Microsoft cancelled 5,000 Claude Code licenses after per-engineer costs hit $500-$2,000/month. Four days later, Anthropic shipped self-hosted runners in v2.1.224. I spent this week deploying them on Kubernetes.

Here's what the official docs don't tell you:

- Self-hosting does NOT reduce your API bill. Inference still routes through Anthropic. You pay the same tokens plus your own compute, storage, and DevOps time.
- Two modes: Fixed (static fleet, simpler ops) vs On-demand (scales to zero, secret stays on orchestrator only). Use on-demand for better security isolation.
- Set terminationGracePeriodSeconds to 90 in your K8s manifest. The default 30 kills pods mid-session during rolling updates. I've seen teams lose work from this.
- Capacity planning is 1:1. Each runner locks to one user, so your minimum replicas = expected concurrent engineers during peak hours.
- Block 169.254.169.254 in your egress policy. Sessions should never reach cloud metadata endpoints.

When it makes sense: teams that need internal network access during sessions, data residency requirements, or custom toolchains baked into the runner image. Skip it if you're under 20 engineers or lack dedicated DevOps capacity.

I wrote up the full deployment guide with Kubernetes manifests, Docker Compose for evaluation, a security hardening checklist, and a cost comparison:

https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide

What's your team's experience with self-hosted AI agent infrastructure? I'm curious whether the compliance benefits outweigh the operational overhead for most orgs.

#ClaudeCode #DevOps #Kubernetes #SelfHosted #AIInfrastructure
