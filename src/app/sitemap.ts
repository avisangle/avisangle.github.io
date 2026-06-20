import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avinashsangle.com'
  const currentDate = new Date().toISOString()

  // Blog posts with metadata
  const blogPosts = [
    {
      slug: 'apple-core-ai-on-device-inference-guide',
      lastModified: '2026-06-20',
    },
    {
      slug: 'litellm-mcp-exploit-response-guide',
      lastModified: '2026-06-16',
    },
    {
      slug: 'claude-code-fable-5-model-routing',
      lastModified: '2026-06-11',
    },
    {
      slug: 'claude-code-dynamic-workflows-guide',
      lastModified: '2026-05-30',
    },
    {
      slug: 'persistent-memory-ai-coding-agents',
      lastModified: '2026-05-29',
    },
    {
      slug: 'qwen-code-getting-started',
      lastModified: '2026-05-26',
    },
    {
      slug: 'gemini-3-5-flash-agentic-coding-guide',
      lastModified: '2026-05-27',
    },
    {
      slug: 'gemini-cli-to-antigravity-cli-guide',
      lastModified: '2026-05-21',
    },
    {
      slug: 'codex-security-github-setup',
      lastModified: '2026-05-14',
    },
    {
      slug: 'claude-managed-agents-outcomes',
      lastModified: '2026-05-12',
    },
    {
      slug: 'ultrareview-ci-cd-pipelines',
      lastModified: '2026-05-03',
    },
    {
      slug: 'mcp-code-execution-pattern',
      lastModified: '2026-05-03',
    },
    {
      slug: 'regression-proofing-claude-code-workflows',
      lastModified: '2026-04-28',
    },
    {
      slug: 'hardening-ai-agents-cicd-prompt-injection',
      lastModified: '2026-04-25',
    },
    {
      slug: 'claude-code-security-review-github-actions',
      lastModified: '2026-04-22',
    },
    {
      slug: 'ant-cli-getting-started',
      lastModified: '2026-04-18',
    },
    {
      slug: 'claude-code-cost-tracking',
      lastModified: '2026-04-16',
    },
    {
      slug: 'claude-managed-agents',
      lastModified: '2026-05-17',
    },
    {
      slug: 'claude-mythos-preview',
      lastModified: '2026-04-09',
    },
    {
      slug: 'gemma-4-models-guide',
      lastModified: '2026-04-16',
    },
    {
      slug: 'claude-md-guide',
      lastModified: '2026-04-05',
    },
    {
      slug: 'method-crm-mcp',
      lastModified: '2026-01-24',
    },
    {
      slug: 'clawdbot-guide',
      lastModified: '2026-04-16',
    },
  ]

  // Project slugs with metadata
  const projects = [
    { slug: 'reddit-agent', lastModified: '2026-01-30' },
    { slug: 'social-media-auto-poster', lastModified: '2026-01-24' },
    { slug: 'jenkins-mcp', lastModified: '2026-05-17' },
    { slug: 'jenkins-chatbot', lastModified: '2026-01-24' },
    { slug: 'calculator-server', lastModified: '2026-01-24' },
    { slug: 'wp-mcp', lastModified: '2026-01-24' },
    { slug: 'aws-ec2-agent', lastModified: '2026-01-24' },
    { slug: 'twitter-oauth', lastModified: '2026-01-24' },
    { slug: 'method-crm-mcp', lastModified: '2026-01-24' },
  ]

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Blog posts
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Projects index
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Project pages
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: project.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Showcase page
    {
      url: `${baseUrl}/showcase`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
