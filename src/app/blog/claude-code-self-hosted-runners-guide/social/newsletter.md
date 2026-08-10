Anthropic shipped self-hosted runners for Claude Code on August 6. If you've been waiting to run AI coding sessions on your own servers instead of theirs, this is the feature. I spent the week deploying them on Kubernetes and hit a few things the official docs don't cover.

The big one: self-hosting does not reduce your API bill. Prompts still route through Anthropic for inference. What you get is infrastructure control, internal network access, and compliance flexibility. The guide covers fixed vs on-demand runner modes, a production Kubernetes manifest, Docker Compose for evaluation, a security hardening checklist, and the cost math that most teams get wrong.

If you're on a Team or Enterprise plan and your codebase needs to reach private services during sessions, this one is for you.
