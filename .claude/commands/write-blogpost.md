---
description: Write and publish a blog post on avinashsangle.com following GEO/AEO best practices. Use after /research-topic has produced a content brief.
arguments:
  - name: slug
    description: The URL slug for the blog post (e.g., "claude-code-hooks-guide"). If a content brief exists at .claude/content-briefs/[slug].md, it will be used.
    required: true
---

You are a technical writer creating a blog post for avinashsangle.com. You write as Avinash Sangle — a DevOps and AI automation engineer with hands-on experience.

**Read these files first (in order):**
1. `.claude/blog-guidelines.md` — mandatory rules for all blog posts
2. `.claude/content-briefs/$ARGUMENTS.md` — content brief (if it exists)
3. `src/app/blog/clawdbot-guide/page.tsx` — reference for page structure and styling patterns (read first 200 lines for template)
4. `src/app/blog/page.tsx` — blog index (you will update this)
5. `src/app/sitemap.ts` — sitemap (you will update this)

---

## Phase 1 — Pre-Flight Checks

1. **Verify the slug doesn't already exist**: Check `src/app/blog/` for an existing folder with this slug
2. **Load the content brief**: Read `.claude/content-briefs/$ARGUMENTS.md` if available. If not, ask the user for topic details or suggest running `/research-topic` first
3. **Fetch latest docs**: Use Context7 MCP to get current Claude Code documentation relevant to the topic — never rely on training data for CLI flags, features, or API details
4. **Check current date**: Use today's date for all datePublished/dateModified fields

---

## Phase 2 — Write the Article

Create `src/app/blog/$ARGUMENTS/page.tsx` following the blog guidelines exactly.

### Content Requirements

1. **Opening paragraph** (40-60 words): Directly answer the article's central question. This is what AI models extract as a citation.

2. **TL;DR section**: 3-4 bullet point takeaways in a Card with accent border.

3. **Body sections** (5-8 H2 sections):
   - Each H2 should be a searchable question or descriptive phrase
   - Each H2 must have an `id` attribute for table of contents anchoring
   - Start each section with a direct answer paragraph
   - Include code examples with `<CodeBlock>` component (with filename and language)
   - Add statistics with sources every 150-200 words
   - Link to official docs and primary sources

4. **FAQ section** (5-8 Q&As):
   - Use Accordion component for display
   - Questions must mirror real search queries
   - Answers: 40-60 words each, direct and factual
   - These ALSO go in the FAQPage JSON-LD schema

5. **Closing CTA**: Link to related projects, GitHub, or other blog posts.

### Writing Style Rules
- First person, practitioner voice: "I use...", "In my experience..."
- Include real commands, real output, real file paths
- No marketing fluff — every paragraph should teach something
- No emojis — use Lucide icons via CategoryIcon
- Use semantic HTML: proper heading hierarchy, lists, code blocks
- Break up walls of text with Cards, code blocks, and lists

### Code Examples
- Use the CodeBlock component: `<CodeBlock language="bash" filename="terminal">{code}</CodeBlock>`
- Show real commands with realistic output
- Include CLAUDE.md examples, hook configurations, etc. as appropriate
- All code must be accurate and tested against current documentation

---

## Phase 3 — SEO Implementation

### Metadata (in this order)
1. Write the `Metadata` export following the exact pattern in blog-guidelines.md
2. Write TechArticle JSON-LD schema
3. Write BreadcrumbList JSON-LD schema
4. Write FAQPage JSON-LD schema
5. If the article is a tutorial, add HowTo JSON-LD schema

### Character Limits (STRICT)
- Title: 55-65 characters
- Description: 130-160 characters
- FAQ answers: 40-60 words each

### Keyword Placement
- Primary keyword in: title, description, H1, first paragraph, at least one H2, URL slug
- Secondary keywords in: other H2s, body paragraphs, FAQ questions

---

## Phase 4 — Integration (MANDATORY)

After the article page is complete, update these files:

### 1. Blog Index Page (`src/app/blog/page.tsx`)

**Update Featured Article** — always replace the featured article with the newest post. Update the icon, category label, title, description, date, read time, and href to point to the new article.

**Add to "All Articles" grid** — add a new Card matching the existing pattern:
```tsx
<Card className="card-hover">
  <CardHeader>
    <CategoryIcon icon="[Icon]" size="lg" animation="pulse" />
    <CardTitle>[Article Title]</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground mb-4">[Short description]</p>
    <div className="flex gap-4 items-center flex-wrap text-muted-foreground text-sm mb-4">
      <span className="flex items-center gap-1"><CategoryIcon icon="Calendar" size="sm" /> [Date]</span>
      <span>-</span>
      <span>[X] min read</span>
    </div>
    <Link href="/blog/[slug]" className="project-link">Read Article</Link>
  </CardContent>
</Card>
```

**Update Blog JSON-LD** — add new BlogPosting entry to the blogPost array.

### 2. Sitemap (`src/app/sitemap.ts`)

Add to the `blogPosts` array:
```typescript
{ slug: '$ARGUMENTS', lastModified: 'YYYY-MM-DD' },
```

### 3. llms.txt (`public/llms.txt`)

Add the new blog post entry to the Blog Posts section. If the file doesn't exist yet, create it following the format in `.claude/blog-guidelines.md`.

### 4. Progress Log

Update `.claude/progress.md` with:
```
- [Date] Published blog post: "[Title]" at /blog/$ARGUMENTS
```

---

## Phase 5 — Verify

1. Run `npm run build` to confirm static export succeeds
2. Fix any TypeScript or build errors
3. Report the final article stats: word count, read time, number of FAQ items, schemas included

---

## Quality Checklist (verify before completing)

- [ ] Title is 55-65 characters
- [ ] Description is 130-160 characters
- [ ] Article has 2000-3500 words
- [ ] First paragraph directly answers the article's question (40-60 words)
- [ ] TL;DR section present with 3-4 bullet points
- [ ] 5-8 H2 sections with id attributes
- [ ] FAQ section with 5-8 Q&As (40-60 words each)
- [ ] TechArticle JSON-LD schema present
- [ ] BreadcrumbList JSON-LD schema present
- [ ] FAQPage JSON-LD schema present
- [ ] All code examples use CodeBlock component
- [ ] No emojis used — Lucide icons only
- [ ] Statistics cited with sources
- [ ] Links to official docs and primary sources
- [ ] Blog index page updated with new card
- [ ] Sitemap updated with new entry
- [ ] `public/llms.txt` updated with new post entry
- [ ] `npm run build` passes
- [ ] No shadcn/ui component files modified
