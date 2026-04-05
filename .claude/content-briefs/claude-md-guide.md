# Content Brief: CLAUDE.md Guide

**Researched:** 2026-04-05
**Status:** Ready for /write-blogpost

---

## Article Metadata

| Field | Value |
|-------|-------|
| **Title** | How I Write CLAUDE.md Files That Actually Work (2026) |
| **Slug** | `claude-md-guide` |
| **Meta Description** | Learn how to write effective CLAUDE.md files with real production examples. Avoid common mistakes and make Claude Code follow your project rules consistently. |
| **Character Count** | Title: 55 chars, Description: 153 chars |
| **Target Word Count** | 2800-3200 |
| **Read Time** | 12 min |
| **Category** | Claude Code |
| **Lucide Icon** | `FileText` |
| **Publish Date** | 2026-04-05 |

---

## Keyword Strategy

### Primary Keyword
`CLAUDE.md guide` (also targets: "how to write CLAUDE.md")

### Secondary Keywords
- CLAUDE.md best practices
- CLAUDE.md examples
- claude code project instructions
- CLAUDE.md template
- claude code memory file

### Long-Tail Queries
1. How to write a CLAUDE.md file for Claude Code
2. What should I put in my CLAUDE.md
3. Why does Claude Code ignore my CLAUDE.md
4. How long should CLAUDE.md be
5. CLAUDE.md vs AGENTS.md difference
6. Best CLAUDE.md structure for Next.js projects
7. How to organize CLAUDE.md for large projects
8. Common CLAUDE.md mistakes to avoid

### FAQ Candidates (for FAQPage schema)
1. What is a CLAUDE.md file and what does it do?
2. Where should I put my CLAUDE.md file?
3. How long should a CLAUDE.md file be?
4. Why does Claude Code sometimes ignore CLAUDE.md rules?
5. What is the difference between CLAUDE.md and AGENTS.md?
6. Should I use /init to generate my CLAUDE.md?
7. Can CLAUDE.md import other files?
8. How often should I update my CLAUDE.md?

---

## Competition Analysis Summary

| Competitor | Strength | Gap We Fill |
|-----------|----------|-------------|
| Builder.io (Vishwas Gopinath) | Well-structured how-to, high domain authority | No real production examples, no stack-specific depth |
| HumanLayer (Kyle) | Honest "Claude ignores rules" angle, leverage pyramid concept | No templates, no code examples, no stack guidance |
| TurboDocx (Nicolas Fry) | Uses own monorepo as reference, covers @imports | API-project only, no frontend/Next.js coverage |
| UX Planet (Nick Babich) | "10 sections" listicle, good SEO | Behind Medium paywall, generic advice |
| SkillsPlayground | Best breadth, has FAQ schema | No case studies, no before/after, no lifecycle |

**Competition Level:** MEDIUM — many articles exist, but none show real production CLAUDE.md with commentary explaining each decision.

**Our Differentiator:** We have a **real, battle-tested CLAUDE.md** in this exact repo (Next.js 16 + shadcn/ui + static export + SEO). We can show the actual file and explain WHY each rule exists. No other article does this with a live production codebase.

---

## Content Outline

### H2 Sections

#### 1. "What Is a CLAUDE.md File?" (id: what-is-claude-md)
- Direct answer: CLAUDE.md is a project-level instruction file that tells Claude Code how to work with your codebase — build commands, coding standards, architecture rules, and workflow preferences.
- Mention: 40.8% of developers using AI agents use Claude Code (JetBrains, 2026)
- Cover hierarchical loading: global → project root → .claude/ → subdirectories
- Reference: Official Anthropic docs on memory

#### 2. "The Anatomy of an Effective CLAUDE.md" (id: anatomy-effective-claude-md)
- The WHY/WHAT/HOW structure
- 5 essential sections every CLAUDE.md needs:
  1. Project overview (1-2 sentences)
  2. Build/test/lint commands
  3. Architecture rules and constraints
  4. File/folder conventions
  5. Common patterns and anti-patterns
- Code example: Show a minimal but effective CLAUDE.md skeleton
- Stat: Keeping CLAUDE.md under 60-80 lines improves instruction adherence (HumanLayer research)

#### 3. "My Production CLAUDE.md: A Line-by-Line Breakdown" (id: real-claude-md-example)
- **THIS IS THE KEY DIFFERENTIATOR** — show the actual CLAUDE.md from avinashsangle.com
- Walk through each section explaining:
  - Why this rule exists (the incident/mistake that prompted it)
  - How Claude Code uses this information
  - What would happen without this rule
- Include: Tech stack section, static export constraints, shadcn/ui "do not modify" rules, SEO requirements
- Code block: Full CLAUDE.md with annotations

#### 4. "CLAUDE.md for Next.js Projects: Stack-Specific Rules" (id: claude-md-nextjs)
- Next.js-specific rules that matter:
  - App Router conventions (page.tsx, layout.tsx, loading.tsx)
  - Static export constraints (no SSR, no API routes)
  - Image optimization settings
  - Metadata patterns
- Code example: Next.js-specific CLAUDE.md section
- Reference: Next.js AI Agents guide from official docs
- Mention: only 1 public Gist exists for Next.js + CLAUDE.md — this fills a real gap

#### 5. "7 CLAUDE.md Mistakes That Waste Your Tokens" (id: claude-md-mistakes)
- Mistake 1: Using negation ("Do NOT use semicolons") — use positive instructions instead
- Mistake 2: Documenting what Claude already knows (wasting tokens on obvious conventions)
- Mistake 3: The "documentation dump" — pasting entire READMEs into CLAUDE.md
- Mistake 4: Conflicting rules (one section says X, another says not-X)
- Mistake 5: Not using @imports for large reference docs
- Mistake 6: Never pruning — rules accumulate but never get removed
- Mistake 7: Using /init without editing — the auto-generated file is a starting point, not the final version
- Before/after code examples for each mistake
- Stat: CLAUDE.md files consuming 30-40K tokens at session start are a common complaint on r/ClaudeAI

#### 6. "CLAUDE.md vs Hooks vs Custom Commands: When to Use What" (id: claude-md-vs-hooks)
- Decision framework:
  - **CLAUDE.md**: Preferences, conventions, context (soft rules)
  - **Hooks**: Hard requirements that MUST be enforced (linting, security, formatting)
  - **Custom Commands**: Repeatable workflows (/deploy, /research-topic, /write-blogpost)
  - **Skills**: Domain knowledge injection
- Table: Side-by-side comparison with examples
- Reference: Link to future blog posts on hooks and custom commands

#### 7. "How I Keep My CLAUDE.md Fresh" (id: keeping-claude-md-fresh)
- Add rules reactively: only when Claude makes the same mistake twice
- Audit quarterly: remove rules that no longer apply
- Use git blame to track when/why rules were added
- The "self-improving" pattern: tell Claude to suggest CLAUDE.md updates
- Stat: AI-cited content is 25.7% fresher on average (GEO research)

#### 8. FAQ Section (id: faq)
- 8 Q&As matching the FAQ candidates above
- Use Accordion component for display
- Mirror in FAQPage JSON-LD schema

---

## Unique Angle

1. **Real production file** — not a toy example but an actual CLAUDE.md powering a live site
2. **Stack-specific depth** — Next.js 16 + shadcn/ui + static export, the exact stack many devs use
3. **Anti-patterns with before/after** — nobody else does this systematically
4. **Decision framework** — CLAUDE.md vs hooks vs commands, a question everyone asks but nobody answers well
5. **Practitioner voice** — "I made this mistake, here's what happened, here's the fix"

---

## Internal Linking Opportunities

### Link TO (existing pages)
- `/projects/method-crm-mcp` — reference when discussing MCP-specific CLAUDE.md rules
- `/projects/jenkins-mcp` — another MCP example
- `/blog/clawdbot-guide` — cross-link as related AI content

### Link FROM (future pipeline posts)
- Post 2: Hooks Cookbook → will link back to "CLAUDE.md vs Hooks" section
- Post 5: Agentic Engineering → will reference this as the foundation
- Post 6: Custom Commands → will link to "CLAUDE.md vs Custom Commands" section
- Post 10: SEO Static Sites → will reference the Next.js CLAUDE.md example

---

## External Sources to Reference

- [Anthropic Official: CLAUDE.md Memory Docs](https://code.claude.com/docs/en/memory)
- [Anthropic: Claude Code Best Practices](https://code.claude.com/docs/en/best-practices)
- [JetBrains: AI Coding Tools Survey 2026](https://blog.jetbrains.com/research/2026/04/) — 40.8% agent usage stat
- [HumanLayer: Writing a good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md) — 60-80 line benchmark
- [Next.js: AI Agents Guide](https://nextjs.org/docs/app/guides/ai-agents) — official Next.js CLAUDE.md guidance
- [Anthropic: 2026 Agentic Coding Trends](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf) — industry stats

---

## Key Stats to Embed (every 150-200 words)

1. 40.8% of developers using AI agents use Claude Code (JetBrains, 2026)
2. Claude Code is the most loved AI coding tool at 46% satisfaction (JetBrains, 2026)
3. AI is projected to generate 60% of code by end of 2026 (Gartner, 2026)
4. Keeping CLAUDE.md under 60-80 lines improves instruction adherence (HumanLayer)
5. CLAUDE.md files over 200 lines can consume 30-40K tokens at session start (r/ClaudeAI community reports)
6. AI-referred search sessions grew 527% YoY in early 2025 (industry data)
7. FAQ schema pages are 3.2x more likely to appear in AI Overviews (Frase.io)

---

## Ready to Write?
Run: /write-blogpost claude-md-guide
