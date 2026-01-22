# Creating a New Project Page

This guide provides step-by-step instructions for creating a new project page that follows the site's SEO/AEO standards.

## Quick Start

1. Copy `project-template.html` to `project-{your-project-slug}.html`
2. Replace all `{{PLACEHOLDER}}` values
3. Add to `index.html` projects grid
4. Add to `sitemap.xml`

---

## Required Elements

### Head Section

#### 0. Favicon Links (Required)
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

#### 1. Meta Tags (Required)
```html
<title>{Project Name} | {Tagline} | Avinash Sangle</title>
<meta name="description" content="{150 char max description}">
<meta name="keywords" content="{10 comma-separated keywords}">
<link rel="canonical" href="https://avinashsangle.com/project-{slug}.html">
```

#### 2. Open Graph Tags (Required)
```html
<meta property="og:title" content="{Project Name} | {Tagline}">
<meta property="og:description" content="{Short description}">
<meta property="og:image" content="https://avinashsangle.com/assets/og-{slug}.jpg">
<meta property="og:url" content="https://avinashsangle.com/project-{slug}.html">
<meta property="og:type" content="article">
```

#### 3. Twitter Card Tags (Required)
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{Project Name}">
<meta name="twitter:description" content="{Short description}">
```

#### 4. JSON-LD Schemas (Required - 3 total)

**SoftwareApplication Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "{Project Name}",
  "description": "{Full description}",
  "applicationCategory": "DeveloperApplication",
  "programmingLanguage": "{Primary Language}",
  "author": {"@type": "Person", "name": "Avinash Sangle"},
  "url": "{GitHub or Demo URL}"
}
```

**BreadcrumbList Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://avinashsangle.com"},
    {"@type": "ListItem", "position": 2, "name": "Projects", "item": "https://avinashsangle.com/index.html#projects"},
    {"@type": "ListItem", "position": 3, "name": "{Project Name}", "item": "https://avinashsangle.com/project-{slug}.html"}
  ]
}
```

**FAQPage Schema (minimum 2 questions):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{Question 1}",
      "acceptedAnswer": {"@type": "Answer", "text": "{Answer 1}"}
    },
    {
      "@type": "Question",
      "name": "{Question 2}",
      "acceptedAnswer": {"@type": "Answer", "text": "{Answer 2}"}
    }
  ]
}
```

---

## Post-Creation Checklist

- [ ] All placeholders replaced
- [ ] SoftwareApplication schema added
- [ ] BreadcrumbList schema added
- [ ] FAQPage schema with 2+ Q&As
- [ ] Open Graph tags set
- [ ] Twitter Card tags set
- [ ] Added to `index.html` projects grid
- [ ] Added to `sitemap.xml`
- [ ] OG image created (optional but recommended)

---

## FAQ Content Tips

Good FAQ questions for AEO:
- "What is {Project Name}?"
- "How do I install/use {Project Name}?"
- "What technologies does {Project Name} use?"
- "Is {Project Name} free/open source?"
- "What problems does {Project Name} solve?"
