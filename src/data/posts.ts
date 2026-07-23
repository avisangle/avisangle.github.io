/**
 * Centralized Blog Posts Data Structure
 *
 * This file serves as the single source of truth for all blog posts.
 * It backs related-post linking, topic hub pages, and the RSS feed.
 *
 * To add a new post: Add an entry to the posts array below (newest first).
 * `slug` MUST match the directory name under src/app/blog/.
 * `datePublished` MUST match the `lastModified` value in src/app/sitemap.ts.
 */

export type TopicId =
  | 'mcp'
  | 'claude-code'
  | 'coding-agents'
  | 'agent-platforms'
  | 'ai-security'
  | 'ci-cd'
  | 'local-inference'

/** Lucide icon names used by topic hubs - must be valid `CategoryIcon` icons. */
export type TopicIconName =
  | 'Network'
  | 'Terminal'
  | 'Bot'
  | 'Boxes'
  | 'ShieldCheck'
  | 'GitPullRequestArrow'
  | 'Cpu'

export interface Topic {
  id: TopicId
  label: string
  description: string
  icon: TopicIconName
}

export interface Post {
  slug: string
  title: string
  description: string
  datePublished: string // ISO format: 'YYYY-MM-DD'
  topics: TopicId[]
  readTime?: string
}

export const topics: Topic[] = [
  {
    id: 'mcp',
    label: 'Model Context Protocol',
    description:
      'Model Context Protocol connects AI agents to your tools and data. These guides cover the stateless 2026 spec, the code execution pattern, and MCP servers.',
    icon: 'Network',
  },
  {
    id: 'claude-code',
    label: 'Claude Code',
    description:
      "Claude Code is Anthropic's terminal coding agent. These guides cover CLAUDE.md files, model routing, hooks, cost tracking, and keeping workflows stable.",
    icon: 'Terminal',
  },
  {
    id: 'coding-agents',
    label: 'Coding Agents & Model CLIs',
    description:
      'Coding agents are LLMs that read, write, and run code from your terminal. These guides compare Kimi K3, GLM-5.2, Gemini, GPT-5.6, and Qwen, plus their CLIs.',
    icon: 'Bot',
  },
  {
    id: 'agent-platforms',
    label: 'Agent Platforms',
    description:
      'Agent platforms host, run, and grade AI agents for you. These guides cover Claude Managed Agents, the ant CLI, Claude Tag in Slack, and self-hosted bots.',
    icon: 'Boxes',
  },
  {
    id: 'ai-security',
    label: 'AI Agent Security',
    description:
      'AI agents add new attack surface: prompt injection, hallucinated packages, and gateway CVEs. These guides cover each attack and the defenses that hold.',
    icon: 'ShieldCheck',
  },
  {
    id: 'ci-cd',
    label: 'AI in CI/CD',
    description:
      'Running AI agents in CI/CD needs non-interactive auth, cost caps, and least privilege. These guides cover GitHub Actions, AI code review, and version pinning.',
    icon: 'GitPullRequestArrow',
  },
  {
    id: 'local-inference',
    label: 'Local & On-Device Inference',
    description:
      'Local inference runs open-weight models on hardware you own at zero token cost. These guides cover GLM-5.2, Gemma 4, Apple Core AI, and the RAM you need.',
    icon: 'Cpu',
  },
]

export const posts: Post[] = [
  {
    slug: 'mcp-stateless-spec-migration-guide',
    title: 'MCP Goes Stateless: Migrating Your Servers to the 2026 Spec',
    description:
      'The 2026-07-28 spec removes the initialize handshake and Mcp-Session-Id header. A maintainer’s migration guide with before/after request diffs, the new routing headers, the Extensions framework, deprecations, and OAuth 2.1 hardening.',
    datePublished: '2026-07-23',
    topics: ['mcp', 'ai-security'],
    readTime: '12 min read',
  },
  {
    slug: 'gpt-5-6-programmatic-tool-calling-guide',
    title: 'GPT-5.6 Programmatic Tool Calling: A Hands-On Developer Guide',
    description:
      'Code mode lets GPT-5.6 write JavaScript that composes your tools in an isolated V8 runtime. How it works in the Responses API, programmatic vs direct calling, real token savings, and how it maps to the MCP code execution pattern.',
    datePublished: '2026-07-19',
    topics: ['coding-agents', 'mcp'],
    readTime: '11 min read',
  },
  {
    slug: 'kimi-k3-agentic-coding-guide',
    title: 'Kimi K3 for Agentic Coding: Claude Code + CLI Setup Guide',
    description:
      'Moonshot’s 2.8T open-weight model runs for agentic coding two ways: routed into Claude Code via one env block, or the native Kimi Code CLI. Pricing, benchmarks, local-run reality, and an honest hybrid verdict.',
    datePublished: '2026-07-19',
    topics: ['coding-agents', 'claude-code', 'local-inference'],
    readTime: '11 min read',
  },
  {
    slug: 'hallusquatting-defense-ai-coding-agents',
    title: 'How to Defend AI Coding Agents Against HalluSquatting Attacks',
    description:
      'HalluSquatting turns predictable AI hallucinations into malware delivery. Why lockfiles and cooldowns do not stop it, plus the PreToolUse hook, sandbox config, and .npmrc settings that do.',
    datePublished: '2026-07-15',
    topics: ['ai-security', 'claude-code'],
    readTime: '12 min read',
  },
  {
    slug: 'gpt-5-6-sol-ultra-cooperative-subagents',
    title: 'GPT-5.6 Sol Ultra Mode: How Cooperative Subagents Actually Work',
    description:
      'Sol Ultra puts subagent orchestration inside the model. What cooperative subagents are, GPT-5.6 pricing and Codex availability, the METR cheating flag, and how it compares to Claude Code dynamic workflows.',
    datePublished: '2026-07-09',
    topics: ['coding-agents', 'claude-code'],
    readTime: '11 min read',
  },
  {
    slug: 'glm-5-2-local-coding-guide',
    title: 'How to Run GLM-5.2 Locally for AI Coding (2026 Guide)',
    description:
      'GLM-5.2 is 2026’s top open-weight coding model. Run it with llama.cpp and Unsloth quants - the hardware you need, the right quant for coding, and when a cloud API still makes more sense.',
    datePublished: '2026-06-29',
    topics: ['local-inference', 'coding-agents'],
    readTime: '12 min read',
  },
  {
    slug: 'claude-tag-engineering-teams-guide',
    title: 'Claude Tag for Engineering Teams: A Practical Setup Guide',
    description:
      'Claude Tag is Anthropic’s persistent AI teammate in Slack. Wire it into engineering: connect MCP servers, scope channel access, use ambient mode safely, and control token costs.',
    datePublished: '2026-06-25',
    topics: ['agent-platforms', 'mcp'],
    readTime: '11 min read',
  },
  {
    slug: 'apple-core-ai-on-device-inference-guide',
    title: 'Apple Core AI: Run Open-Weight Models On-Device for Free',
    description:
      'Apple Core AI runs open-weight models like Qwen and Mistral on Apple Silicon with zero token cost. Convert PyTorch with coreai-torch, load via the Swift API, and quantize for mobile.',
    datePublished: '2026-06-20',
    topics: ['local-inference', 'coding-agents'],
    readTime: '12 min read',
  },
  {
    slug: 'litellm-mcp-exploit-response-guide',
    title: 'LiteLLM CVE-2026-42271: Patch, Rotate, and Harden the RCE',
    description:
      'CVE-2026-42271 chains with the Starlette BadHost bypass (CVE-2026-48710) for unauthenticated RCE on the AI gateway. Detect exposure, upgrade to 1.83.7, rotate every key, and harden the MCP test endpoints.',
    datePublished: '2026-06-16',
    topics: ['ai-security', 'mcp'],
    readTime: '11 min read',
  },
  {
    slug: 'claude-code-fable-5-model-routing',
    title: 'Claude Code Fable 5: Model Routing, Fallbacks, Cost Control',
    description:
      'Fable 5 launched at 2x Opus 4.8’s price alongside the new fallbackModel setting. Chain configuration, the safety classifier that reroutes sessions to Opus 4.8, and a task routing table for all three models.',
    datePublished: '2026-06-11',
    topics: ['claude-code', 'coding-agents'],
    readTime: '12 min read',
  },
  {
    slug: 'claude-code-dynamic-workflows-guide',
    title: 'Claude Code Dynamic Workflows: When They’re Worth the Cost',
    description:
      'Dynamic workflows fan a task across up to 1,000 subagents. Which tasks justify the cost, how to bound the agent count, what ultracode costs, and when a single session still wins.',
    datePublished: '2026-05-30',
    topics: ['claude-code', 'coding-agents'],
    readTime: '11 min read',
  },
  {
    slug: 'persistent-memory-ai-coding-agents',
    title: 'Persistent Memory for AI Coding Agents Beyond CLAUDE.md',
    description:
      'Three tiers of persistent memory in 2026: CLAUDE.md, MCP servers (agentmemory, claude-mem), and Anthropic’s Memory tool plus Dreaming. Benchmarks and a decision matrix.',
    datePublished: '2026-05-29',
    topics: ['claude-code', 'mcp'],
    readTime: '12 min read',
  },
  {
    slug: 'gemini-3-5-flash-agentic-coding-guide',
    title: 'Gemini 3.5 Flash for Agentic Coding: A Claude Coder’s Guide',
    description:
      'Gemini 3.5 Flash beats Gemini 3.1 Pro on agent benchmarks at $1.50/$9 per 1M tokens. When to route tasks from Claude Code, the thinking_level trap, and a 40-line MCP agent.',
    datePublished: '2026-05-27',
    topics: ['coding-agents', 'claude-code', 'mcp'],
    readTime: '12 min read',
  },
  {
    slug: 'qwen-code-getting-started',
    title: 'Qwen Code CLI: Getting Started Guide for AI Coding 2026',
    description:
      'Install Qwen Code, fix the post-OAuth authentication mess, and see where Alibaba’s open-source terminal agent actually beats Claude Code. CI/CD recipe + 1M-context reality check.',
    datePublished: '2026-05-26',
    topics: ['coding-agents', 'ci-cd'],
    readTime: '11 min read',
  },
  {
    slug: 'gemini-cli-to-antigravity-cli-guide',
    title: 'Gemini CLI to Antigravity CLI: Migration Guide & Alternatives',
    description:
      'Gemini CLI stops on June 18, 2026. Step-by-step migration to the new agy binary, free-tier rate-limit math, and when to switch to Claude Code or Codex CLI instead.',
    datePublished: '2026-05-21',
    topics: ['coding-agents', 'claude-code'],
    readTime: '11 min read',
  },
  {
    slug: 'claude-managed-agents',
    title: 'Claude Managed Agents vs Agent SDK: Which to Use?',
    description:
      'Practical decision framework for Claude Managed Agents vs the Agent SDK. Pricing breakdown with worked examples, MCP integration notes, and when to pick each option for your workload.',
    datePublished: '2026-05-17',
    topics: ['agent-platforms', 'mcp'],
    readTime: '12 min read',
  },
  {
    slug: 'codex-security-github-setup',
    title: 'OpenAI Codex Security GitHub Setup Guide: 2026 Walkthrough',
    description:
      'Set up OpenAI Codex Security on GitHub end-to-end: connect a repo, edit the threat model, triage validated findings, ship patches as PRs. 74% TPR vs Semgrep 20% and Snyk 28% in independent testing.',
    datePublished: '2026-05-14',
    topics: ['ai-security', 'ci-cd'],
    readTime: '12 min read',
  },
  {
    slug: 'claude-managed-agents-outcomes',
    title: 'Claude Managed Agents Outcomes: Auto-Grading Agent Work',
    description:
      'Outcomes hands the agent a rubric, a separate grader checks every draft, and the loop iterates until the artifact passes. Rubric anti-patterns, the five result states, max_iterations tuning, and the cost math.',
    datePublished: '2026-05-12',
    topics: ['agent-platforms', 'coding-agents'],
    readTime: '13 min read',
  },
  {
    slug: 'ultrareview-ci-cd-pipelines',
    title: 'Running claude ultrareview in CI/CD: GitHub Actions Guide',
    description:
      'Claude Code 2.1.120 added claude ultrareview as a non-interactive CLI subcommand. The OAuth token gotcha, a copy-pasteable GitHub Actions workflow, --json parsing with jq, and a cost control playbook.',
    datePublished: '2026-05-03',
    topics: ['ci-cd', 'claude-code'],
    readTime: '12 min read',
  },
  {
    slug: 'mcp-code-execution-pattern',
    title: 'MCP Code Execution Pattern: A Hands-On Claude Code Guide',
    description:
      'Three MCP servers can eat 72% of a 200K context window. The code execution pattern compares against dynamic toolsets and Tool Search, with a working Python build and Claude Code v2.1.121 alwaysLoad config.',
    datePublished: '2026-05-03',
    topics: ['mcp', 'claude-code'],
    readTime: '12 min read',
  },
  {
    slug: 'regression-proofing-claude-code-workflows',
    title: 'Regression-Proof Claude Code Workflows: Pin, Lock, Test',
    description:
      'After Anthropic’s April 2026 postmortem revealed three Claude Code regressions, here is the practitioner playbook: pin the CLI, lock effort, allowlist models, add a regression-detecting stop hook, keep fixtures.',
    datePublished: '2026-04-28',
    topics: ['claude-code', 'ci-cd'],
    readTime: '12 min read',
  },
  {
    slug: 'hardening-ai-agents-cicd-prompt-injection',
    title: 'Harden Claude Code GitHub Actions: Prompt Injection Defense',
    description:
      'Defend Claude Code workflows against the April 2026 Comment and Control CVE. Tool allowlists, OIDC via Bedrock, script caps, egress blocks, and a before/after hardened workflow.',
    datePublished: '2026-04-25',
    topics: ['ai-security', 'ci-cd', 'claude-code'],
    readTime: '12 min read',
  },
  {
    slug: 'claude-code-security-review-github-actions',
    title: 'Claude Code Security Review GitHub Action: 2026 Setup Guide',
    description:
      'Workflow YAML, false positive tuning, token cost math, and a layered pipeline with Semgrep and Snyk for Anthropic’s official security review action.',
    datePublished: '2026-04-22',
    topics: ['ai-security', 'ci-cd', 'claude-code'],
    readTime: '11 min read',
  },
  {
    slug: 'ant-cli-getting-started',
    title: 'Getting Started with the ant CLI: Deploy Claude Agents',
    description:
      'Install the ant CLI, create your first managed agent, and deploy it in under 10 minutes. YAML version control, scripting patterns, and CI/CD.',
    datePublished: '2026-04-18',
    topics: ['agent-platforms', 'coding-agents', 'ci-cd'],
    readTime: '12 min read',
  },
  {
    slug: 'claude-code-cost-tracking',
    title: 'Claude Code Cost Tracking: Monitor and Cut Your Spending',
    description:
      'Track what you spend in Claude Code with built-in commands, hidden JSONL logs, and tools like ccusage. Plus 7 tips to cut token costs by 50%.',
    datePublished: '2026-04-16',
    topics: ['claude-code', 'coding-agents'],
    readTime: '12 min read',
  },
  {
    slug: 'gemma-4-models-guide',
    title: 'Gemma 4 Models: Which One Should You Actually Use?',
    description:
      'Tested all 4 Gemma 4 model sizes locally. Includes RAM requirements, Ollama setup, comparison with Llama 4 and Mistral, and a practical guide to picking the right variant.',
    datePublished: '2026-04-16',
    topics: ['local-inference', 'coding-agents'],
    readTime: '12 min read',
  },
  {
    slug: 'clawdbot-guide',
    title: 'Complete Guide to Clawdbot: Your Personal AI Assistant',
    description:
      'Set up your own personal AI assistant that works on WhatsApp, Telegram, Discord, and more. Self-hosted with persistent memory and proactive notifications.',
    datePublished: '2026-04-16',
    topics: ['agent-platforms', 'mcp', 'local-inference'],
    readTime: '12 min read',
  },
  {
    slug: 'claude-mythos-preview',
    title: 'Claude Mythos: What It Means for Devs Who Can’t Use It',
    description:
      'Anthropic locked Claude Mythos to 12 Project Glasswing partners. What the benchmarks, pricing, and restricted access mean for everyday developers, plus what to do while waiting for public release.',
    datePublished: '2026-04-09',
    topics: ['coding-agents', 'ai-security'],
    readTime: '11 min read',
  },
  {
    slug: 'claude-md-guide',
    title: 'How I Write CLAUDE.md Files That Actually Work',
    description:
      'Real production CLAUDE.md examples from my Next.js site. Learn the anatomy of an effective file, 7 common mistakes, and when to use hooks vs CLAUDE.md vs custom commands.',
    datePublished: '2026-04-05',
    topics: ['claude-code', 'coding-agents'],
    readTime: '12 min read',
  },
  {
    slug: 'method-crm-mcp',
    title: 'Complete Guide to Method CRM MCP Server',
    description:
      'Learn how to set up and use the Method CRM MCP Server to enable AI assistants like Claude to interact with your CRM data through natural language.',
    datePublished: '2026-01-24',
    topics: ['mcp', 'agent-platforms'],
    readTime: '12 min read',
  },
]

// Helper Functions

/**
 * Get a single post by its slug
 */
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

/**
 * Get all posts for a topic, newest first
 */
export function getPostsByTopic(topicId: TopicId): Post[] {
  return posts.filter((post) => post.topics.includes(topicId))
}

/**
 * Get related posts ranked by shared-topic overlap, tie-broken by recency.
 * Never returns the post itself.
 */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const source = getPostBySlug(slug)
  if (!source) return []

  const sharedTopicCount = (post: Post) =>
    post.topics.filter((topic) => source.topics.includes(topic)).length

  return posts
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const overlapDiff = sharedTopicCount(b) - sharedTopicCount(a)
      if (overlapDiff !== 0) return overlapDiff
      return b.datePublished.localeCompare(a.datePublished)
    })
    .slice(0, limit)
}

/**
 * Get a topic by its id
 */
export function getTopicById(id: TopicId): Topic | undefined {
  return topics.find((topic) => topic.id === id)
}
