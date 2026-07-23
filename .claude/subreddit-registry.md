# Subreddit Registry for avinashsangle.com

Used by `/promote-blogpost` to rank candidate subreddits dynamically based on
article topic signals. Edit freely as the site's scope expands or as new subs
prove themselves (or burn out).

## How `/promote-blogpost` uses this file

1. Extract article signals from `src/app/blog/<slug>/page.tsx`: title,
   description, `keywords` array, H2 headings, code-block languages, mentioned
   product/model names.
2. Score each candidate below by case-insensitive substring hits against
   `triggers` (1 point) and `bonus_triggers` (2 points).
3. Apply `penalty` if any term in `avoid` matches.
4. Drop any candidate scoring 0 or where `requires_all` is unmet.
5. **Annotate each surviving candidate with its `posting_friendliness`** (see
   legend below). This is independent of topical fit and captures whether an
   API self-post will actually stay up.
6. Sort by score; present top 4 to user via AskUserQuestion. **Prefer
   medium/high friendliness in the default selection.** Include a `low`
   friendliness sub only when its topical fit is clearly the strongest, and when
   you do, warn the user that the API call will likely succeed but the post may
   be silently auto-removed (AutoMod / mod queue). Default selection = top 2.
7. Write the chosen subs into `reddit-post.md` with matched flair from
   `flairs`. If `flair_lookup_needed: true`, the model must run
   `python scripts/list_reddit_flairs.py <subreddit>` and pick a real ID before
   posting.

## posting_friendliness legend

Reddit has no per-sub "auto-post" switch. The API accepts a post to almost any
sub (returns success), but what happens *after* varies. This field encodes the
practical risk that an API self-post gets auto-removed:

- **high** - lenient mods, little/no self-promo AutoMod, niche or dev-focused.
  API self-posts reliably stay up. Safest for automated posting.
- **medium** - some friction: required flair, self-promo rules, or moderate
  AutoMod. Posts usually stay up if value is upfront and a link sits at the end.
- **low** - strict moderation, aggressive self-promo/karma/account-age filters,
  or manual approval queue. The API call returns `200` but the post often lands
  in spam/mod queue invisibly. Only post genuine technical content, and tell the
  user removal is likely.

Bigger + stricter generally means lower friendliness. Niche dev/security subs
under ~150k are usually the safest automated targets.

## Posting hygiene (applies to all subs)

- Value-first body. Link at the very end.
- One self-link per week per sub max. If POSTED.md in the last 7 days already
  has the same sub, ask the user before adding it again.
- No emoji, no marketing language, no "check out my post" openers.
- Cross-posting the SAME body to >2 subs in the same hour reads as spam to
  Reddit anti-spam. Stagger by >=30 min or split bodies (per-sub tailored
  bodies, as the generator already does, count as split).
- Prefer 2-3 medium/high friendliness subs over one large low-friendliness sub.

---

## Candidates

### r/ClaudeAI
- members: ~200k
- triggers: claude, claude code, anthropic, sonnet, opus, haiku, claude.md, settings.json, slash command, hook, mcp, subagent, managed agent, agent sdk, ant cli, ultrareview
- bonus_triggers: claude code, claude managed agents, anthropic
- avoid: (none — broad audience)
- flairs: Discussion, Comparison, Tutorial, Coding, News
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Always strong fit when Claude is the primary subject. Less strong when Claude is only a side comparison.

### r/GeminiAI
- members: ~40k
- triggers: gemini, google ai, antigravity, agy, gemini cli, bard, vertex ai, google deepmind
- bonus_triggers: gemini 3, gemini 3.5 flash, antigravity cli, gemini pro
- avoid: (none)
- flairs: Discussion, News, Tutorial, Help
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Direct match for Gemini-focused launches. Skip if Gemini is only mentioned in passing.

### r/OpenAI
- members: ~2M
- triggers: openai, gpt, gpt-5, gpt-4, codex, chatgpt, dall-e, daybreak, o1, o3, o4
- bonus_triggers: codex, openai codex, gpt-5
- avoid: (none)
- flairs: Discussion, News, Article, Question
- flair_lookup_needed: true
- posting_friendliness: low
- notes: Huge audience but strict on self-promo - posts from blogs are frequently auto-removed. Lead with technical detail, never with a marketing angle. Warn user about removal risk.

### r/ChatGPTCoding
- members: ~250k
- triggers: claude code, codex cli, cursor, copilot, github copilot, gemini cli, antigravity, aider, cline, agentic coding, ai coding, ai pair programming
- bonus_triggers: claude code vs, gpt vs claude, model comparison, agentic coding
- avoid: (none)
- flairs: Discussion, Question, Resources, Project Showcase
- flair_lookup_needed: true
- requires_user_flair: true   # account-level user flair must be set on the sub before posting; sub returns POST_GUIDANCE_VALIDATION_FAILED otherwise. Set once at https://www.reddit.com/r/ChatGPTCoding/ sidebar.
- posting_friendliness: medium
- notes: Best fit for cross-vendor agentic coding comparisons. Very active. Tolerates self-links if value is upfront. First-time posters from u/avisangle: set user flair before running the post script.

### r/LocalLLaMA
- members: ~500k
- triggers: local, open weights, llama, ollama, gguf, quant, mistral, qwen, deepseek, vllm, sglang, gemma, exllama
- bonus_triggers: local model, open source model, on-device
- avoid: closed-source-only content with no local angle
- flairs: Discussion, News, Resources, Tutorial
- flair_lookup_needed: true
- posting_friendliness: medium
- notes: Excellent benchmark audience but actively hostile to closed-model marketing. Only post if the article has a local/open-weights angle OR a deep technical benchmark that respects the sub's standards.

### r/LLMDevs
- members: ~80k
- triggers: llm, sdk, api, prompt engineering, benchmark, token, embedding, rag, fine-tuning, function calling, structured output, gateway, litellm
- bonus_triggers: llm benchmark, routing, agent framework, sdk migration, llm gateway
- avoid: pure consumer/end-user posts
- flairs: Discussion, Tutorial, Resources
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Strong developer audience. Good fallback when an article is technically dense but not vendor-tribal. Reliable automated target.

### r/AI_Agents
- members: ~70k
- triggers: agent, autonomous, multi-step, agent loop, tool calling, langgraph, crewai, autogen, agent harness, agent grader, outcomes, orchestration, mcp
- bonus_triggers: agent framework, managed agent, agent sdk, multi-agent
- avoid: posts that are only tangentially agent-related
- flairs: Discussion, Tutorial, Help, Showcase
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Engages when the article is specifically about building/comparing agent systems. Skip when "agent" is just a buzzword in the post.

### r/mcp
- members: ~15k
- triggers: mcp, model context protocol, mcp server, mcp client, tool calls, mcp resources, mcp prompts, code execution mcp, jenkins mcp
- bonus_triggers: mcp server, mcp atlas, mcp tool, mcp code execution
- avoid: (none)
- flairs: Discussion, Tutorial, Showcase
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Small but laser-focused. Perfect fit for MCP-specific deep dives. Very safe automated target.

### r/devops
- members: ~300k
- triggers: ci, cd, ci/cd, pipeline, jenkins, github actions, gitlab, kubernetes, terraform, ansible, prometheus, devsecops, observability, deploy, infrastructure
- bonus_triggers: github actions, ci/cd pipeline, devsecops, jenkins
- avoid: pure model/LLM posts with no ops angle
- flairs: Discussion, Tutorial, Article, Help
- flair_lookup_needed: true
- posting_friendliness: medium
- notes: Allows AI-in-DevOps content if framed around the ops problem, not the model.

### r/githubactions
- members: ~3k
- triggers: github actions, gha, workflow, actions yaml, runner, oauth token, workflow_dispatch
- bonus_triggers: github actions, gha workflow
- avoid: (none)
- flairs: (none - flat sub)
- flair_lookup_needed: false
- posting_friendliness: high
- notes: Tiny but on-topic for GHA-specific tutorials. Low traffic but engaged.

### r/cybersecurity
- members: ~1M
- triggers: security, vulnerability, cve, sast, dast, threat model, owasp, secret scanning, supply chain, code review, prompt injection
- bonus_triggers: ai security, devsecops, prompt injection, supply chain attack
- avoid: marketing-heavy posts, vendor pitches
- flairs: News, Discussion, Tutorial, Research
- flair_lookup_needed: true
- posting_friendliness: low
- notes: Strict moderation, aggressive self-promo AutoMod - blog links are frequently auto-filtered even with good content. Lead with the threat model or vulnerability detail, never with a tool name. Warn user about removal risk; prefer r/devsecops + r/netsec for the same topic.

### r/devsecops
- members: ~30k
- triggers: devsecops, sast, dast, sca, supply chain security, secure ci, secret scanning, security scanning, sbom
- bonus_triggers: devsecops, ai code review, codex security, ai security
- avoid: (none)
- flairs: Discussion, Tools, Article
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Smaller, more focused than r/cybersecurity. Good fit for AI-in-security-pipeline articles. Reliable automated target.

### r/netsec
- members: ~700k
- triggers: cve, rce, exploit, vulnerability, security research, disclosure, poc, command injection, auth bypass, privilege escalation
- bonus_triggers: exploit chain, rce, cve, technical writeup, vulnerability disclosure
- avoid: tool reviews, getting-started guides, marketing, anything not original research
- flairs: (none - link-curated sub)
- flair_lookup_needed: false
- posting_friendliness: low
- notes: Premier security-research sub but heavily mod-curated and link-only - they remove blogspam, vendor content, and how-to guides on sight. Only post genuine technical exploit/vulnerability analysis. The API will accept the post; mods may remove it within minutes. Warn the user. Great fit for a CVE chain writeup, poor for a "how to fix" runbook.

### r/selfhosted
- members: ~400k
- triggers: self-host, docker compose, homelab, vps, proxmox, nginx, traefik, caddy, local server, oss
- bonus_triggers: self-hosted, docker compose, mcp server self-host
- avoid: cloud-only content
- flairs: Need Help, Self Promotion, Software Dev, News, Guide, Product Announcement
- flair_lookup_needed: true
- posting_friendliness: medium
- notes: Use "Self Promotion" or "Guide" flair when posting own work. Only if the article walks through self-hosting something. Large but tolerant when correctly flaired.

### r/homelab
- members: ~800k
- triggers: homelab, self-host, docker, proxmox, vps, home server, nginx, reverse proxy, truenas, unraid, mini pc
- bonus_triggers: homelab, self-hosted gateway, reverse proxy
- avoid: enterprise-only / cloud-only content with no home angle
- flairs: Discussion, Help, Tutorial, LabPorn, News
- flair_lookup_needed: true
- posting_friendliness: medium
- notes: Overlaps with r/selfhosted but more hardware/infra leaning. Good for self-hosted gateway, Docker, and reverse-proxy hardening articles. Frame around the home/lab setup, not the product.

### r/docker
- members: ~250k
- triggers: docker, dockerfile, docker compose, container, image, registry, compose, containerd, oci
- bonus_triggers: docker compose, container hardening, dockerfile, read-only filesystem
- avoid: posts with no container angle
- flairs: (varies - check before posting)
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Good fit when the article has a real Docker/compose/container-hardening section. Dev audience, tolerant of technical self-links.

### r/MLOps
- members: ~80k
- triggers: mlops, model serving, inference, gateway, llm gateway, deployment, model registry, monitoring, vllm, observability, litellm, model proxy
- bonus_triggers: llm gateway, model serving, inference, litellm, ai infrastructure
- avoid: pure end-user/consumer posts
- flairs: Discussion, Tools, Question
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Strong fit for LLM infrastructure, gateways, serving, and model-routing articles. Practitioner audience, lenient mods. Reliable automated target.

### r/opensource
- members: ~300k
- triggers: open source, oss, foss, mit license, apache license, github, self-host, free software, community project
- bonus_triggers: open source, foss, oss security, supply chain
- avoid: closed-source/proprietary-only content
- flairs: Discussion, Promotional, Tech Support
- flair_lookup_needed: true
- posting_friendliness: medium
- notes: Use "Promotional" flair for own work. Good for articles about OSS tooling, OSS security incidents, or self-hostable projects. Moderate AutoMod.

### r/ollama
- members: ~50k
- triggers: ollama, local model, gguf, local llm, self-host model, modelfile, llama.cpp
- bonus_triggers: ollama, local llm, self-hosted model
- avoid: cloud-only / closed-model content
- flairs: (varies)
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Niche local-LLM runtime sub. Only post if the article has an Ollama or local-model angle. Friendly to technical self-links.

### r/vibecoding
- members: ~80k
- triggers: vibe coding, ai coding, cursor, claude code, copilot, agentic coding, ai pair programming, windsurf, bolt, lovable
- bonus_triggers: ai coding, claude code, agentic coding, vibe coding
- avoid: non-coding AI content
- flairs: Discussion, Showcase, Question
- flair_lookup_needed: true
- posting_friendliness: high
- notes: Fast-growing AI-coding sub. Good secondary target for Claude Code / AI-coding-agent articles alongside r/ChatGPTCoding. Lenient mods.

### r/LangChain
- members: ~50k
- triggers: langchain, langgraph, langsmith, langflow, vector store, rag pipeline, llm framework
- bonus_triggers: langgraph, langchain agent
- avoid: posts with no framework discussion
- flairs: Discussion, Tutorial, Help
- flair_lookup_needed: true
- posting_friendliness: medium
- notes: Only if the article uses LangChain or compares against it.

### r/programming
- members: ~6M
- triggers: (use rarely - high bar)
- bonus_triggers: deep technical writeup, post-mortem, novel pattern
- avoid: tool reviews, comparisons, vendor content, anything that smells like marketing
- flairs: (none)
- flair_lookup_needed: false
- posting_friendliness: low
- notes: Strict mods, heavy auto-removal of anything promotional. Only post when the article has standalone engineering value beyond AI tooling.
- requires_all: ["deep dive", "code", "engineering"]   # placeholder - bias toward skip

---

## Topic -> recommended pairs (sanity check, not authoritative)

The scoring algorithm above is the source of truth. This table is for the LLM
to sanity-check itself: if the algorithm's top pick disagrees with this table,
flag the surprise to the user before writing the draft. Pairs below favor
medium/high `posting_friendliness`.

| Article theme                              | Likely top pair                        |
|--------------------------------------------|----------------------------------------|
| Claude Code feature / settings / workflow  | r/ClaudeAI + r/ChatGPTCoding           |
| Claude Managed Agents / Agent SDK / ant CLI| r/ClaudeAI + r/AI_Agents               |
| Gemini model launch / migration            | r/GeminiAI + r/ChatGPTCoding           |
| OpenAI Codex / GPT feature                 | r/ChatGPTCoding + r/LLMDevs (r/OpenAI only if you accept removal risk) |
| MCP server / MCP pattern                   | r/mcp + r/AI_Agents                    |
| CI/CD + AI (ultrareview, code review)      | r/devops + r/ClaudeAI                  |
| AI security tooling / AI gateway CVE / RCE | r/devsecops + r/mcp (add r/netsec only for an original exploit writeup, with removal warning) |
| LLM infra / model gateway / serving / routing | r/MLOps + r/LLMDevs                  |
| Docker / container / self-host hardening   | r/docker + r/selfhosted (or r/homelab) |
| Cost tracking / pricing analysis           | r/ChatGPTCoding + r/ClaudeAI           |
| Cross-vendor benchmark / routing           | r/ChatGPTCoding + r/LLMDevs (or r/GeminiAI if Gemini-led) |
| Self-hosted MCP / docker / homelab         | r/selfhosted + r/mcp (or r/homelab)    |
| AI coding agents (Cursor, Copilot, etc.)   | r/ChatGPTCoding + r/vibecoding         |
| Local / open-weights models                | r/LocalLLaMA + r/ollama                |

---

## Backlog / candidates to evaluate later

Subreddits worth testing for future articles but not yet in the active list:

- r/aipromptprogramming (~250k) - prompt-heavy content
- r/PromptEngineering (~200k) - prompt-focused tutorials
- r/AItoolsCatalog - tool roundups
- r/coding (~500k) - generic dev, lower signal
- r/Anthropic - mostly news, no flairs
- r/artificial (~1M) - general AI news, medium-low friendliness
- r/ArtificialIntelligence (~1M) - general AI, strict-ish
- r/ChatGPTPro (~500k) - AI tools / productivity, medium friendliness
- r/kubernetes (~300k) - only for k8s-specific ops content
- r/sysadmin (~1M) - large, ops-general, medium-low friendliness
- r/AskNetsec (~500k) - questions only, not for self-posts
- r/blueteamsec - security defenders, niche/curated
- agi - off-topic for technical posts

Move into the active list above only after a test post earns engagement.
