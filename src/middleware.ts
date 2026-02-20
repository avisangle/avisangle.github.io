import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Only process .html requests
  if (!url.pathname.endsWith('.html')) {
    return NextResponse.next()
  }

  // Define all .html to clean URL redirects
  const redirectMap: Record<string, string> = {
    // Blog redirects
    '/blog.html': '/blog',
    '/blog-method-crm-mcp.html': '/blog/method-crm-mcp',

    // Project redirects (specific)
    '/project-calculator-server.html': '/projects/calculator-server',
    '/project-wp-mcp.html': '/projects/wp-mcp',
    '/project-twitter-oauth.html': '/projects/twitter-oauth',
    '/project-jenkins-mcp.html': '/projects/jenkins-mcp',
    '/project-method-crm-mcp.html': '/projects/method-crm-mcp',
    '/project-jenkins-chatbot.html': '/projects/jenkins-chatbot',
    '/project-aws-ec2-agent.html': '/projects/aws-ec2-agent',
    '/project-social-media-auto-poster.html': '/projects/social-media-auto-poster',
    '/project-reddit-agent.html': '/projects/reddit-agent',
  }

  // Check for exact match redirect
  const exactRedirect = redirectMap[url.pathname]
  if (exactRedirect) {
    url.pathname = exactRedirect
    return NextResponse.redirect(url, 308) // 308 Permanent Redirect
  }

  // Pattern-based redirects for any remaining .html files
  const pathname = url.pathname

  // Handle project-*.html → /projects/*
  if (pathname.startsWith('/project-') && pathname.endsWith('.html')) {
    const slug = pathname.slice('/project-'.length, -'.html'.length)
    url.pathname = `/projects/${slug}`
    return NextResponse.redirect(url, 308)
  }

  // Handle blog-*.html → /blog/*
  if (pathname.startsWith('/blog-') && pathname.endsWith('.html')) {
    const slug = pathname.slice('/blog-'.length, -'.html'.length)
    url.pathname = `/blog/${slug}`
    return NextResponse.redirect(url, 308)
  }

  // Generic .html removal for any other .html files
  if (pathname.endsWith('.html')) {
    url.pathname = pathname.slice(0, -'.html'.length)
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

// Configure matcher to only run on .html paths (performance optimization)
export const config = {
  matcher: [
    '/:path*.html',
  ],
}
