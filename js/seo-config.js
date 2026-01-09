// ========================================
// SEO CONFIGURATION
// Centralized SEO data for all pages
// ========================================

const SEO_CONFIG = {
    // Base URL
    baseUrl: 'https://avinashsangle.com',

    // Site-wide info
    siteName: 'Avinash Sangle - Portfolio',
    author: 'Avinash Sangle',
    email: 'aavi.sangle@gmail.com',

    // Social profiles
    social: {
        github: 'https://github.com/avisangle',
        linkedin: 'https://www.linkedin.com/in/avinashsangle/',
        youtube: 'https://www.youtube.com/@AIAgentOps',
        email: 'mailto:aavi.sangle@gmail.com'
    },

    // Pages configuration
    pages: {
        home: {
            title: 'Avinash Sangle | AI Automation & DevOps Engineer | Cloud Architect',
            description: 'Software Engineer specializing in AI automation, DevOps, and cloud technologies. Building intelligent solutions with Model Context Protocol, Jenkins, AWS, and conversational AI.',
            keywords: 'AI automation engineer, DevOps specialist, cloud architect, Model Context Protocol, Jenkins automation, CI/CD pipelines, conversational AI, chatbots, Python developer, Go programming, AWS solutions architect, Azure cloud, infrastructure as code, machine learning engineer, software engineer',
            image: '/assets/og-home.jpg'
        },

        socialMediaAutoPoster: {
            title: 'Social Media Auto-Poster | AI-Powered Social Media Management SaaS | Avinash Sangle',
            description: 'AI-powered social media management platform with automated posting, multi-platform support, and intelligent content generation. Built with React, Supabase, and AI APIs.',
            keywords: 'social media automation, AI content generation, auto-posting, social media scheduler, multi-platform posting, Supabase, React, OAuth integration, social media management, content marketing automation',
            image: '/assets/og-social-media.jpg'
        },

        jenkinsMcp: {
            title: 'Jenkins MCP Server | AI Integration for Jenkins CI/CD | Model Context Protocol | Avinash Sangle',
            description: 'Enable AI agents to interact with Jenkins through Model Context Protocol for automated DevOps workflows. Query jobs, trigger builds, and access logs programmatically.',
            keywords: 'Jenkins automation, Model Context Protocol, MCP server, AI DevOps, Jenkins AI integration, CI/CD automation, conversational DevOps, LLM integration, Python Jenkins, DevOps tools',
            image: '/assets/og-jenkins-mcp.jpg'
        },

        jenkinsChatbot: {
            title: 'Jenkins Chatbot Plugin | Conversational AI for CI/CD | Natural Language DevOps | Avinash Sangle',
            description: 'AI-powered conversational interface for Jenkins to manage builds and deployments via natural language commands. Secure integration with Jenkins RBAC.',
            keywords: 'Jenkins chatbot, conversational AI, ChatOps, natural language processing, AI-powered DevOps, Jenkins plugin, build automation, deployment automation, Python chatbot, CI/CD chatbot',
            image: '/assets/og-jenkins-chatbot.jpg'
        },

        calculatorServer: {
            title: 'Calculator Server | Go-based MCP Server for Mathematical Computations | Avinash Sangle',
            description: 'High-performance Go-based MCP server providing comprehensive mathematical computation capabilities for AI agents and applications.',
            keywords: 'MCP server, Go programming, mathematical computation, Model Context Protocol, Golang server, AI tools, computation API, microservices, Go development, mathematical API',
            image: '/assets/og-calculator.jpg'
        },

        wpMcp: {
            title: 'WordPress Development with AI | MCP-Enhanced WordPress Coding | Avinash Sangle',
            description: 'WordPress development services enhanced with AI-assisted debugging and code analysis using Model Context Protocol. Custom themes, plugins, and optimization.',
            keywords: 'WordPress development, AI-assisted coding, WordPress debugging, MCP WordPress, custom theme development, plugin development, PHP development, WordPress optimization, AI code analysis, WordPress consultant',
            image: '/assets/og-wp.jpg'
        },

        awsEc2Agent: {
            title: 'AWS EC2 Deployment with AI Agent | Cloud Infrastructure Automation | Avinash Sangle',
            description: 'Deploy cloud infrastructure via natural language with intelligent self-healing automation. Multi-cloud support for AWS, GCP, and Azure.',
            keywords: 'AWS automation, EC2 deployment, AI agent, cloud infrastructure, infrastructure as code, multi-cloud, AWS DevOps, self-healing infrastructure, natural language cloud, GCP, Azure, cloud automation',
            image: '/assets/og-aws.jpg'
        },

        twitterOauth: {
            title: 'Twitter OAuth Setup Wizard for Make.com | OAuth 2.0 Automation | PKCE Security | Avinash Sangle',
            description: 'Streamlined OAuth 2.0 setup wizard for Make.com with PKCE security. Auto-generate ready-to-import scenarios in under 2 minutes.',
            keywords: 'Twitter OAuth, Make.com integration, OAuth 2.0, PKCE authentication, Twitter API, automation wizard, no-code integration, scenario generation, JavaScript OAuth, Make.com automation',
            image: '/assets/og-twitter.jpg'
        },

        blog: {
            title: 'Blog | AI, DevOps & Cloud Technologies Insights | Avinash Sangle',
            description: 'Insights and tutorials on AI automation, DevOps practices, and cloud technologies. Learn about Model Context Protocol, Jenkins automation, and more.',
            keywords: 'DevOps blog, AI automation tutorials, cloud architecture articles, Jenkins tips, MCP guides, technical blog, software engineering blog, AI development',
            image: '/assets/og-blog.jpg'
        }
    }
};

// Generate JSON-LD structured data
function generatePersonSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Avinash Sangle",
        "jobTitle": "Software Engineer",
        "url": SEO_CONFIG.baseUrl,
        "email": SEO_CONFIG.email,
        "sameAs": [
            SEO_CONFIG.social.github,
            SEO_CONFIG.social.linkedin,
            SEO_CONFIG.social.youtube
        ],
        "knowsAbout": [
            "AI Automation",
            "DevOps",
            "Cloud Architecture",
            "Model Context Protocol",
            "Jenkins",
            "Python Programming",
            "Go Programming"
        ]
    };
}

function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SEO_CONFIG.siteName,
        "url": SEO_CONFIG.baseUrl,
        "author": {
            "@type": "Person",
            "name": SEO_CONFIG.author
        }
    };
}

function generateSoftwareApplicationSchema(project) {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": project.name,
        "description": project.description,
        "applicationCategory": "DeveloperApplication",
        "author": {
            "@type": "Person",
            "name": SEO_CONFIG.author
        },
        "url": project.url
    };
}

// Export for use in HTML pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SEO_CONFIG, generatePersonSchema, generateWebSiteSchema, generateSoftwareApplicationSchema };
}
