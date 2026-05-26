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
5. Sort by score; present top 4 to user via AskUserQuestion. Default
   selection = top 2.
6. Write the chosen subs into `reddit-post.md` with matched flair from
   `flairs`. If `flair_lookup_needed: true`, the model must run
   `python scripts/list_reddit_flairs.py <sub>` and pick a real ID before
   posting.

## Posting hygiene (applies to all subs)

- Value-first body. Link at the very end.
- One self-link per week per sub max. If POSTED.md in the last 7 days already
  has the same sub, ask the user before adding it again.
- No emoji, no marketing language, no "check out my post" openers.
- Cross-posting the same body to >2 subs in the same hour reads as spam to
  Reddit anti-spam. Stagger by ≥30 min or split bodies.

---

## Candidates

### r/ClaudeAI
- members: ~200k
- triggers: claude, claude code, anthropic, sonnet, opus, haiku, claude.md, settings.json, slash command, hook, mcp, subagent, managed agent, agent sdk, ant cli, ultrareview
- bonus_triggers: claude code, claude managed agents, anthropic
- avoid: (none — broad audience)
- flairs: Discussion, Comparison, Tutorial, Coding, News
- flair_lookup_needed: true
- notes: Always strong fit when Claude is the primary subject. Less strong when Claude is only a side comparison.

### r/GeminiAI
- members: ~40k
- triggers: gemini, google ai, antigravity, agy, gemini cli, bard, vertex ai, google deepmind
- bonus_triggers: gemini 3, gemini 3.5 flash, antigravity cli, gemini pro
- avoid: (none)
- flairs: Discussion, News, Tutorial, Help
- flair_lookup_needed: true
- notes: Direct match for Gemini-focused launches. Skip if Gemini is only mentioned in passing.

### r/OpenAI
- members: ~2M
- triggers: openai, gpt, gpt-5, gpt-4, codex, chatgpt, dall-e, daybreak, o1, o3, o4
- bonus_triggers: codex, openai codex, gpt-5
- avoid: (none)
- flairs: Discussion, News, Article, Question
- flair_lookup_needed: true
- notes: Huge audience but strict on self-promo. Lead with technical detail, never with a marketing angle.

### r/ChatGPTCoding
- members: ~250k
- triggers: claude code, codex cli, cursor, copilot, github copilot, gemini cli, antigravity, aider, cline, agentic coding, ai coding, ai pair programming
- bonus_triggers: claude code vs, gpt vs claude, model comparison, agentic coding
- avoid: (none)
- flairs: Discussion, Question, Resources, Project Showcase
- flair_lookup_needed: true
- notes: Best fit for cross-vendor agentic coding comparisons. Very active. Tolerates self-links if value is upfront.

### r/LocalLLaMA
- members: ~500k
- triggers: local, open weights, llama, ollama, gguf, quant, mistral, qwen, deepseek, vllm, sglang, gemma, exllama
- bonus_triggers: local model, open source model, on-device
- avoid: closed-source-only content with no local angle
- flairs: Discussion, News, Resources, Tutorial
- flair_lookup_needed: true
- notes: Excellent benchmark audience but actively hostile to closed-model marketing. Only post if the article has a local/open-weights angle OR a deep technical benchmark that respects the sub's standards.

### r/LLMDevs
- members: ~80k
- triggers: llm, sdk, api, prompt engineering, benchmark, token, embedding, rag, fine-tuning, function calling, structured output
- bonus_triggers: llm benchmark, routing, agent framework, sdk migration
- avoid: pure consumer/end-user posts
- flairs: Discussion, Tutorial, Resources
- flair_lookup_needed: true
- notes: Strong developer audience. Good fallback when an article is technically dense but not vendor-tribal.

### r/AI_Agents
- members: ~70k
- triggers: agent, autonomous, multi-step, agent loop, tool calling, langgraph, crewai, autogen, agent harness, agent grader, outcomes, orchestration
- bonus_triggers: agent framework, managed agent, agent sdk, multi-agent
- avoid: posts that are only tangentially agent-related
- flairs: Discussion, Tutorial, Help, Showcase
- flair_lookup_needed: true
- notes: Engages when the article is specifically about building/comparing agent systems. Skip when "agent" is just a buzzword in the post.

### r/mcp
- members: ~15k
- triggers: mcp, model context protocol, mcp server, mcp client, tool calls, mcp resources, mcp prompts, code execution mcp, jenkins mcp
- bonus_triggers: mcp server, mcp atlas, mcp tool, mcp code execution
- avoid: (none)
- flairs: Discussion, Tutorial, Showcase
- flair_lookup_needed: true
- notes: Small but laser-focused. Perfect fit for MCP-specific deep dives.

### r/devops
- members: ~300k
- triggers: ci, cd, ci/cd, pipeline, jenkins, github actions, gitlab, kubernetes, terraform, ansible, prometheus, devsecops, observability, deploy, infrastructure
- bonus_triggers: github actions, ci/cd pipeline, devsecops, jenkins
- avoid: pure model/LLM posts with no ops angle
- flairs: Discussion, Tutorial, Article, Help
- flair_lookup_needed: true
- notes: Allows AI-in-DevOps content if framed around the ops problem, not the model.

### r/githubactions
- members: ~3k
- triggers: github actions, gha, workflow, actions yaml, runner, oauth token, workflow_dispatch
- bonus_triggers: github actions, gha workflow
- avoid: (none)
- flairs: (none - flat sub)
- flair_lookup_needed: false
- notes: Tiny but on-topic for GHA-specific tutorials. Low traffic but engaged.

### r/cybersecurity
- members: ~1M
- triggers: security, vulnerability, cve, sast, dast, threat model, owasp, secret scanning, supply chain, code review, prompt injection
- bonus_triggers: ai security, devsecops, prompt injection, supply chain attack
- avoid: marketing-heavy posts, vendor pitches
- flairs: News, Discussion, Tutorial, Research
- flair_lookup_needed: true
- notes: Strict moderation. Lead with the threat model or vulnerability detail, never with a tool name.

### r/devsecops
- members: ~30k
- triggers: devsecops, sast, dast, sca, supply chain security, secure ci, secret scanning, security scanning, sbom
- bonus_triggers: devsecops, ai code review, codex security
- avoid: (none)
- flairs: Discussion, Tools, Article
- flair_lookup_needed: true
- notes: Smaller, more focused than r/cybersecurity. Good fit for AI-in-security-pipeline articles.

### r/selfhosted
- members: ~400k
- triggers: self-host, docker compose, homelab, vps, proxmox, nginx, traefik, caddy, local server, oss
- bonus_triggers: self-hosted, docker compose, mcp server self-host
- avoid: cloud-only content
- flairs: Need Help, Self Promotion, Software Dev, News
- flair_lookup_needed: true
- notes: Use "Self Promotion" flair only when posting own work. Only if the article walks through self-hosting something.

### r/LangChain
- members: ~50k
- triggers: langchain, langgraph, langsmith, langflow, vector store, rag pipeline, llm framework
- bonus_triggers: langgraph, langchain agent
- avoid: posts with no framework discussion
- flairs: Discussion, Tutorial, Help
- flair_lookup_needed: true
- notes: Only if the article uses LangChain or compares against it.

### r/programming
- members: ~6M
- triggers: (use rarely - high bar)
- bonus_triggers: deep technical writeup, post-mortem, novel pattern
- avoid: tool reviews, comparisons, vendor content, anything that smells like marketing
- flairs: (none)
- flair_lookup_needed: false
- notes: Strict mods. Only post when the article has standalone engineering value beyond AI tooling.
- requires_all: ["deep dive", "code", "engineering"]   # placeholder - bias toward skip

---

## Topic → recommended pairs (sanity check, not authoritative)

The scoring algorithm above is the source of truth. This table is for the LLM
to sanity-check itself: if the algorithm's top pick disagrees with this table,
flag the surprise to the user before writing the draft.

| Article theme                              | Likely top pair                        |
|--------------------------------------------|----------------------------------------|
| Claude Code feature / settings / workflow  | r/ClaudeAI + r/ChatGPTCoding           |
| Claude Managed Agents / Agent SDK / ant CLI| r/ClaudeAI + r/AI_Agents               |
| Gemini model launch / migration            | r/GeminiAI + r/ChatGPTCoding           |
| OpenAI Codex / GPT feature                 | r/OpenAI + r/ChatGPTCoding             |
| MCP server / MCP pattern                   | r/mcp + r/ClaudeAI                     |
| CI/CD + AI (ultrareview, code review)      | r/devops + r/ClaudeAI                  |
| AI security tooling (codex security, etc.) | r/devsecops + r/cybersecurity          |
| Cost tracking / pricing analysis           | r/ChatGPTCoding + r/ClaudeAI           |
| Cross-vendor benchmark / routing           | r/ChatGPTCoding + r/LLMDevs (or r/GeminiAI if Gemini-led) |
| Self-hosted MCP / docker / homelab         | r/selfhosted + r/mcp                   |

---

## Backlog / candidates to evaluate later

Subreddits worth testing for future articles but not yet in the active list:

- r/aipromptprogramming (~250k) - prompt-heavy content
- r/AItoolsCatalog - tool roundups
- r/coding (~500k) - generic dev, lower signal
- r/Anthropic - mostly news, no flairs
- r/agi - off-topic for technical posts
- r/PromptEngineering - prompt-focused tutorials

Move into the active list above only after a test post earns engagement.
