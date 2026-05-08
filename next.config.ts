import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment configuration

  async redirects() {
    return [
      // ========================================
      // Redirect old blog subdomain to main domain
      // ========================================
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'blog.avinashsangle.com',
          },
        ],
        destination: 'https://avinashsangle.com/blog/:path*',
        permanent: true, // 301 redirect
      },

      // ========================================
      // Redirect www to non-www
      // ========================================
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.avinashsangle.com',
          },
        ],
        destination: 'https://avinashsangle.com/:path*',
        permanent: true,
      },

      // ========================================
      // Specific old URL redirects (from GSC 404s)
      // ========================================

      // Old blog index
      {
        source: '/blog.html',
        destination: '/blog',
        permanent: true,
      },

      // Old blog posts
      {
        source: '/blog-method-crm-mcp.html',
        destination: '/blog/method-crm-mcp',
        permanent: true,
      },

      // Old project pages
      {
        source: '/project-calculator-server.html',
        destination: '/projects/calculator-server',
        permanent: true,
      },
      {
        source: '/project-wp-mcp.html',
        destination: '/projects/wp-mcp',
        permanent: true,
      },
      {
        source: '/project-twitter-oauth.html',
        destination: '/projects/twitter-oauth',
        permanent: true,
      },

      // Old Jekyll *project page* URLs - send to the current project page.
      {
        source: '/project-make-twitter-oauth.html',
        destination: '/projects/twitter-oauth',
        permanent: true,
      },
      {
        source: '/project-make-twitter-oauth',
        destination: '/projects/twitter-oauth',
        permanent: true,
      },
      // Historical inbound traffic to /make-twitter-oauth came from the broken
      // GitHub Pages redirect chain (avisangle.github.io/make-twitter-oauth/
      // used to inherit the apex CNAME and bounce here). User intent on those
      // clicks is the live demo, so route them to it directly.
      {
        source: '/make-twitter-oauth',
        destination: 'https://avisangle.github.io/make-twitter-oauth/',
        permanent: true,
      },
      {
        source: '/make-twitter-oauth/:path*',
        destination: 'https://avisangle.github.io/make-twitter-oauth/:path*',
        permanent: true,
      },
      {
        source: '/project-jenkins-mcp.html',
        destination: '/projects/jenkins-mcp',
        permanent: true,
      },
      {
        source: '/project-method-crm-mcp.html',
        destination: '/projects/method-crm-mcp',
        permanent: true,
      },
      {
        source: '/project-jenkins-chatbot.html',
        destination: '/projects/jenkins-chatbot',
        permanent: true,
      },
      {
        source: '/project-aws-ec2-agent.html',
        destination: '/projects/aws-ec2-agent',
        permanent: true,
      },
      {
        source: '/project-social-media-auto-poster.html',
        destination: '/projects/social-media-auto-poster',
        permanent: true,
      },
      {
        source: '/project-reddit-agent.html',
        destination: '/projects/reddit-agent',
        permanent: true,
      },

      // ========================================
      // Generic pattern redirects (catch-all)
      // ========================================

      // Redirect any remaining project-*.html to /projects/*
      {
        source: '/project-:slug.html',
        destination: '/projects/:slug',
        permanent: true,
      },

      // Redirect any remaining blog-*.html to /blog/*
      {
        source: '/blog-:slug.html',
        destination: '/blog/:slug',
        permanent: true,
      },

      // Redirect any other .html extensions to clean URLs
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
