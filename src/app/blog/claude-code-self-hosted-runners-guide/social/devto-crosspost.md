# Dev.to + Hashnode Cross-post - Claude Code Self-Hosted Runners Guide

**Post date:** Day 2
**Best time:** 3:00 PM IST
**Post via:**
- Dev.to: `python scripts/post_to_devto.py claude-code-self-hosted-runners-guide --dry-run`
- Hashnode: `python scripts/post_to_hashnode.py claude-code-self-hosted-runners-guide --dry-run`

Everything below the `---BODY---` marker is the article body. Header fields above
are parsed by both posting scripts.

TITLE: Claude Code Self-Hosted Runners: Deploy AI Agents on Your Infra
DESCRIPTION: Set up Claude Code self-hosted runners on your infrastructure with Kubernetes and Docker. Covers fixed vs on-demand modes, security hardening, and cost planning.
TAGS: claudecode, kubernetes, docker, devops
CANONICAL_URL: https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide
COVER_IMAGE: https://avinashsangle.com/og-claude-code-self-hosted-runners-guide.png
PUBLISHED: false

---BODY---
> This article was originally published on [avinashsangle.com](https://avinashsangle.com/blog/claude-code-self-hosted-runners-guide).

Claude Code self-hosted runners let your team run cloud sessions on your own servers instead of Anthropic's infrastructure. Shipped on August 6, 2026 with Claude Code v2.1.224 for Team and Enterprise plans, they work like GitHub Actions self-hosted runners. Your compute handles the session while prompts still route through Anthropic's API for model inference.

### TL;DR

- Self-hosted runners give you infrastructure control, internal network access, and compliance flexibility - but prompts still route through Anthropic for inference
- Two modes: fixed (static fleet, simpler ops) vs on-demand (scales to zero, better security isolation)
- Kubernetes deploys need `terminationGracePeriodSeconds: 90` and replicas >= expected concurrent users
- Self-hosting adds compute costs on top of your Anthropic bill - it does not reduce API spend

## What Are Claude Code Self-Hosted Environments?

Self-hosted environments are long-lived runner processes that run on machines you own. Each runner polls Anthropic's control plane for queued sessions, picks one up, clones the repository, and executes the session locally. When the session ends, the runner releases its lock and polls again. The model itself - the actual inference - still runs on Anthropic's servers. Your infrastructure handles everything else: file I/O, tool execution, git operations, and network calls.

Anthropic [announced self-hosted environments](https://claude.com/blog/run-claude-code-sessions-on-your-own-compute) on August 6, 2026. The feature requires Claude Code v2.1.224 or later and a Team or Enterprise plan. Three independent open-source projects - AgentOS, Kodama, and Lite-Harness - had already tried to solve self-hosting before Anthropic shipped an official solution, proving the demand was real.

The timing wasn't coincidental. Microsoft cancelled 5,000 Claude Code licenses after per-engineer costs hit $500-$2,000 per month, according to [Enterprise DNA](https://enterprisedna.co/resources/news/microsoft-claude-code-enterprise-budget-overrun-2026/). Self-hosting doesn't fix the API cost problem (more on that later), but it gives large teams the infrastructure control and visibility they need to stay on the platform.

## When Should You Self-Host Claude Code Runners?

Most teams shouldn't. Anthropic says so themselves: *"Most teams are better served by Anthropic-hosted environments."* Self-hosting adds operational complexity that only pays off in specific situations. I've found four cases where it makes sense.

**Network access to internal services.** If your codebase needs to reach private APIs, internal databases, or services behind a VPN during sessions, self-hosted runners sit inside your network perimeter. No need to expose internal endpoints publicly or set up complex tunneling. This is the strongest reason to self-host.

**Compliance and data residency.** Regulated industries - finance, healthcare, government contractors - often require that compute handling source code runs in specific jurisdictions or on audited infrastructure. Self-hosting gives you control over where the runner process executes and what logs are retained, even though prompts still leave your network for inference.

**Custom toolchains.** Some projects need specific compilers, SDKs, or system libraries pre-installed. With self-hosted runners, you bake your toolchain into the container image. No waiting for Anthropic to support your stack.

**Infrastructure-layer cost visibility.** When you run the compute, you see exactly what each session costs in terms of CPU, memory, and storage. For teams running hundreds of concurrent sessions, this granularity matters for capacity planning and chargeback.

Skip self-hosting if you're a small team (under 20 engineers), have no compliance requirements, or lack dedicated DevOps capacity to maintain the runner fleet. The operational overhead isn't justified by the flexibility.

## How to Set Up Your First Self-Hosted Runner

The setup has four steps: create an environment secret, store it on your host, start the runner, and verify it's healthy. I'll walk through each one. You'll need a Linux or macOS host with Claude Code v2.1.224+, Git 2.24+, and outbound HTTPS access to `api.anthropic.com`.

### Step 1: Create an environment secret

An organization admin creates the secret in the [Claude admin UI](https://code.claude.com/docs/en/self-hosted-environments-quickstart) under Self-Hosted Environments. Each environment gets a unique secret that authenticates runners against Anthropic's control plane. Copy it immediately - you won't see it again.

### Step 2: Store the secret on the runner host

```bash
# Store the secret securely
sudo mkdir -p /etc/claude
echo "your-environment-secret" | sudo tee /etc/claude/environment-secret > /dev/null
sudo chmod 600 /etc/claude/environment-secret
```

### Step 3: Start the runner

You can use the guided setup wizard or start directly with the CLI. The guided path is easier for the first time.

```bash
# Guided setup (interactive)
claude self-hosted-runner setup

# Or start directly
claude self-hosted-runner \
  --environment-secret-file /etc/claude/environment-secret \
  --base-dir /workspace
```

The `--base-dir` flag sets where session workspaces get created. Each session gets its own subdirectory under this path. Make sure the runner process has write access.

### Step 4: Verify in the admin UI

Within 30 seconds of starting, your runner should appear in the admin UI with a "Healthy" status. Route a test session to it by selecting the self-hosted environment when starting a new Claude Code session on the web.

## Fixed vs On-Demand Runner Modes

Self-hosted runners support two operating modes. Your choice affects scaling behavior, security posture, and operational complexity.

### Fixed mode

A static fleet of runner processes stays running continuously. Anthropic's control plane distributes sessions across available runners. This is simpler to operate - you deploy a Deployment or systemd service and it just runs. The trade-off is that idle runners still consume resources and each runner holds the environment secret.

### On-demand mode

An orchestrator process polls for queued sessions. When one arrives, the orchestrator spins up a fresh runner for that session and tears it down when it finishes. The fleet scales to zero when idle, and the environment secret stays on the orchestrator host, not on the machines that run sessions. This is better security isolation at the cost of more complex infrastructure.

```bash
# Start an on-demand orchestrator
claude self-hosted-runner orchestrator \
  --environment-secret-file /etc/claude/environment-secret \
  --runner-command "docker run --rm runner-image"
```

### Capacity planning

The `--capacity N` flag controls how many concurrent sessions a single runner handles. I recommend `--capacity 1` for production. Each runner locks to one user at a time, so your minimum replicas must equal your expected concurrent users. If 15 engineers run sessions during peak hours, you need at least 15 runners.

| Dimension | Fixed | On-Demand |
|---|---|---|
| Scaling | Static fleet | Scale to zero |
| Secret exposure | On every runner | Orchestrator only |
| Startup latency | None (pre-running) | Container spin-up time |
| Ops complexity | Lower | Higher |
| Best for | Predictable workloads | Variable/bursty usage |

## How to Deploy Claude Code Runners on Kubernetes

For production fleets, Kubernetes is the natural choice. You need three pieces: a Dockerfile for the runner image, a Secret for the environment key, and a Deployment manifest. Here's what I use, adapted from the [official deploy-to-production docs](https://code.claude.com/docs/en/self-hosted-environments-deploy).

### Dockerfile

```dockerfile
FROM debian:bookworm-slim

ARG CLAUDE_CODE_VERSION=2.1.224

RUN apt-get update && apt-get install -y \
    curl git ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install Claude Code binary
RUN curl -fsSL https://downloads.claude.ai/cli/claude-code-${CLAUDE_CODE_VERSION}-linux-x64 \
    -o /usr/local/bin/claude && chmod +x /usr/local/bin/claude

# Git config for sessions
RUN git config --system credential.helper store

RUN useradd -m -s /bin/bash runner
USER runner
WORKDIR /workspace

ENTRYPOINT ["claude", "self-hosted-runner"]
```

### Kubernetes manifests

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: claude-runners
---
apiVersion: v1
kind: Secret
metadata:
  name: claude-env-secret
  namespace: claude-runners
type: Opaque
stringData:
  environment-secret: "your-environment-secret-here"
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: claude-runner
  namespace: claude-runners
spec:
  replicas: 5  # >= expected concurrent users
  selector:
    matchLabels:
      app: claude-runner
  template:
    metadata:
      labels:
        app: claude-runner
    spec:
      terminationGracePeriodSeconds: 90
      containers:
        - name: runner
          image: your-registry/claude-runner:latest
          args:
            - "--environment-secret-file"
            - "/secrets/environment-secret"
            - "--base-dir"
            - "/workspace"
            - "--capacity"
            - "1"
          ports:
            - containerPort: 8080
          livenessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 30
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 10
          volumeMounts:
            - name: secret-vol
              mountPath: /secrets
              readOnly: true
            - name: workspace
              mountPath: /workspace
      volumes:
        - name: secret-vol
          secret:
            secretName: claude-env-secret
        - name: workspace
          emptyDir: {}
```

The critical detail here is `terminationGracePeriodSeconds: 90`. Kubernetes defaults to 30 seconds, which kills pods mid-session during a rolling update. At 90 seconds, the runner has time to finish the current session and drain gracefully. I've seen teams lose work because they missed this setting.

### Docker Compose for evaluation

If you want to test self-hosted runners before committing to a Kubernetes fleet, Docker Compose works fine for evaluation. Keep in mind that Docker restart reuses the writable layer, so it's not recommended for production where you want ephemeral per-session isolation.

```yaml
services:
  claude-runner:
    build:
      context: .
      args:
        CLAUDE_CODE_VERSION: "2.1.224"
    command:
      - "--environment-secret-file"
      - "/run/secrets/env_secret"
      - "--base-dir"
      - "/workspace"
      - "--capacity"
      - "1"
    secrets:
      - env_secret
    restart: unless-stopped
    stop_grace_period: 90s
    ports:
      - "8080:8080"

secrets:
  env_secret:
    file: ./environment-secret.txt
```

## Security Hardening Checklist for Self-Hosted Runners

When sessions run on your infrastructure, security is your responsibility. The [official hardening guide](https://code.claude.com/docs/en/self-hosted-environments-deploy) covers the controls. Here's the checklist I follow, informed by my experience with [CI/CD prompt injection defense](https://avinashsangle.com/blog/hardening-ai-agents-cicd-prompt-injection) and [Claude Code security review](https://avinashsangle.com/blog/claude-code-security-review-github-actions).

**Ephemeral per-session containers.** Set `--capacity 1` and destroy the container after each session. No state leaks between users.

**No broad credentials in the image.** Don't bake AWS keys, GitHub tokens, or database passwords into the runner image. Mint per-session tokens from wrapper scripts instead.

**Default-deny network egress.** Allow only what's required: `api.anthropic.com:443`, your git host (port 443 or 22), and conditionally `downloads.claude.ai`, `storage.googleapis.com`, `registry.npmjs.org`. Block everything else at your network boundary. In particular, block `169.254.169.254` to prevent sessions from reaching cloud metadata endpoints.

**Confine repo settings.** Use `--confine-repo-settings enforce` to block `.claude/settings.json` directives that reach outside the workspace. Without this flag, a checked-in settings file could expand the runner's blast radius.

**Use the Anthropic git proxy.** The `--use-anthropic-git-proxy` flag routes git operations through Anthropic's proxy so you don't have to bake git credentials into runner images. This is the simplest way to handle repository access securely.

**Per-runner filesystem isolation.** Each runner should have its own workspace directory. Don't share `--base-dir` across multiple runner processes.

Endpoints you don't need to allow, despite what older checklists may say: `statsig.anthropic.com`, `*.sentry.io`, and `claude.ai`. Those are for telemetry and the web interface, not the runner protocol.

For a deeper treatment of agent security controls, see my posts on [sandbox containment after the Hugging Face breach](https://avinashsangle.com/blog/sandbox-ai-agents-hugging-face-breach) and [hallusquatting defense](https://avinashsangle.com/blog/hallusquatting-defense-ai-coding-agents).

## Self-Hosted vs Anthropic-Hosted Cost Comparison

This is where most people get it wrong. Self-hosting does **not** reduce your Anthropic API costs. Inference still routes through Anthropic's servers, so you pay the same per-token rates regardless of where the runner executes. What changes is who pays for the compute, storage, and networking that surround the inference calls.

| Cost item | Anthropic-hosted | Self-hosted |
|---|---|---|
| Seat cost (Team/Enterprise) | Included | Same |
| Token/API usage | Included | Same |
| Compute (CPU/memory) | Included | You pay |
| Storage | Included | You pay |
| Networking/egress | Included | You pay |
| DevOps engineering time | None | You pay |

According to a [Markaicode cost analysis](https://markaicode.com/pricing/claude-code-self-hosted-vs-cloud-api-cost-analysis/), a mid-size team might spend $1,500/month on Anthropic-hosted sessions versus $750 in Anthropic costs plus $400-800 in infrastructure when self-hosting. The total can come out similar or even higher once you factor in the engineering time to maintain the fleet.

Self-hosting saves money in narrow cases: large teams where owning the infrastructure reduces compliance audit costs, or teams with massive repositories where pre-warmed checkouts on persistent runners cut clone times from minutes to seconds. For detailed token-level cost tracking strategies, see my [Claude Code cost tracking guide](https://avinashsangle.com/blog/claude-code-cost-tracking).

## Troubleshooting Common Self-Hosted Runner Issues

Start with the built-in diagnostics. The `doctor` subcommand checks connectivity, secret validity, and system requirements in one pass.

```bash
claude self-hosted-runner doctor
```

**Runner doesn't appear in the admin UI.** Check three things: outbound HTTPS to `api.anthropic.com`, the environment secret file exists and is readable, and the host clock is within five minutes of UTC. Clock skew is the sneakiest - NTP drift on a VM can silently prevent registration.

**Sessions stay queued.** Usually means all runners are locked to active users. Each runner handles one user at a time (with `--capacity 1`), so if you have 10 runners and 12 engineers trying to start sessions, two will queue. Add more replicas. Also check that runners aren't locked to accounts from a previous session that didn't terminate cleanly.

**Sessions fail after pickup.** The runner picked up the session but couldn't execute it. Common causes: missing git credentials (the runner can't clone the repo), missing build tools in the image, or incorrect permissions on the `--base-dir` directory. Check the runner logs for the specific error.

**Sessions are slow to start.** Repository cloning dominates startup time, especially for large monorepos. Use pre-warmed checkouts with `--lock-to-account` to keep a clone cached on the runner. This skips the clone step for subsequent sessions from the same user working on the same repo.

**Pods killed during rolling updates.** If Kubernetes kills your pods mid-session during a deploy, you forgot `terminationGracePeriodSeconds: 90`. The default 30 seconds isn't enough time for the runner to finish the current session, drain, and shut down cleanly.

## Frequently Asked Questions

### What are Claude Code self-hosted environments?

Self-hosted environments let your team run Claude Code cloud sessions on your own servers instead of Anthropic's infrastructure. A long-lived runner process polls for queued sessions, picks them up, and executes them locally. Compute stays on your side while model inference still routes through Anthropic's API.

### What plans support Claude Code self-hosted runners?

Self-hosted runners require a Claude Team or Enterprise plan. Individual Pro and Max subscriptions cannot use this feature. Organization admins create environment secrets in the admin UI, which runners use to authenticate with Anthropic's control plane.

### What is the difference between fixed and on-demand runner modes?

Fixed runners are a static fleet that stays running and accepts sessions as they arrive. On-demand mode uses an orchestrator that polls for queued sessions and spins up a fresh runner per session, scaling to zero when idle. On-demand keeps the environment secret off session hosts for better security.

### Does self-hosted mean my prompts stay on my servers?

No. Self-hosted controls where compute runs, not where inference happens. Prompts and model responses still route through Anthropic's API at api.anthropic.com. What stays local is the session workspace, file system access, tool execution, and network connectivity to your internal services.

### How much does self-hosting Claude Code cost compared to Anthropic-hosted?

Self-hosting does not reduce your Anthropic API bill. You pay the same seat and token costs, plus your own compute, storage, networking, and DevOps engineering time. The value is infrastructure control, compliance, and access to internal services rather than direct cost savings.

### Can I run Claude Code self-hosted runners on Windows?

Not natively. Self-hosted runners require Linux or macOS. On Windows, run a Linux container using Docker Desktop or WSL2. The official Dockerfile uses debian:bookworm-slim as the base image, which works on any container runtime.

### How do I deploy Claude Code runners on Kubernetes?

Build a runner image from the official Dockerfile, create a Kubernetes Secret with your environment key, and deploy a Deployment with health probes on port 8080. Set terminationGracePeriodSeconds to at least 90 seconds so pods drain cleanly instead of being killed mid-session.

### What network access do self-hosted runners need?

Runners always need outbound HTTPS to api.anthropic.com (port 443) and your git host. Conditionally required: downloads.claude.ai, storage.googleapis.com, and registry.npmjs.org. Not required: statsig.anthropic.com, sentry.io, and claude.ai. Use a default-deny egress policy.
