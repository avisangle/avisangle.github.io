/**
 * Centralized Projects Data Structure
 * 
 * This file serves as the single source of truth for all portfolio projects.
 * To add a new project: Add an entry to the projects array below.
 * To feature a project on homepage: Set featured: true
 * To reorder: Change the order number
 */

export type ProjectStatus = 'active' | 'archived' | 'in-progress' | 'maintenance'

export type IconName = 
  | 'Smartphone' 
  | 'Bot' 
  | 'MessageSquare' 
  | 'Cloud' 
  | 'Lock' 
  | 'Building2'
  | 'Calculator'
  | 'Code'
  | 'Wrench'
  | 'Database'
  | 'Settings'

export interface Project {
  id: string
  title: string
  description: string
  shortDescription?: string
  
  // Categorization
  category: string
  badge: string
  tags: string[]
  
  // Display
  icon: IconName
  technologies: string[]
  
  // Links
  route: string
  githubUrl?: string
  liveUrl?: string
  blogUrl?: string
  youtubeUrl?: string
  
  // Management
  featured: boolean
  status: ProjectStatus
  date: string // ISO format: 'YYYY-MM-DD'
  order: number
  
  // Optional metadata
  client?: string
  year?: number
}

export const projects: Project[] = [
  {
    id: 'social-media-auto-poster',
    title: 'Social Media Auto-Poster',
    description: 'AI-powered social media management platform with automated posting and multi-platform support.',
    shortDescription: 'AI-powered social media management platform with automated posting and multi-platform support.',
    category: 'Production SaaS',
    badge: 'Production SaaS',
    icon: 'Smartphone',
    technologies: ['React', 'Supabase', 'AI', 'OAuth'],
    tags: ['AI', 'SaaS', 'Social Media', 'Automation', 'React'],
    route: '/projects/social-media-auto-poster',
    liveUrl: 'https://social.avinashsangle.com',
    featured: true,
    status: 'active',
    date: '2024-12-15',
    order: 1,
    year: 2024
  },
  {
    id: 'jenkins-mcp',
    title: 'Jenkins MCP Server',
    description: 'Enable AI agents to interact with Jenkins through Model Context Protocol for automated DevOps workflows.',
    shortDescription: 'Enable AI agents to interact with Jenkins through Model Context Protocol for automated DevOps workflows.',
    category: 'AI Integration',
    badge: 'AI Integration',
    icon: 'Bot',
    technologies: ['Python', 'MCP', 'Jenkins'],
    tags: ['AI', 'MCP', 'Jenkins', 'DevOps', 'Python', 'Automation'],
    route: '/projects/jenkins-mcp',
    featured: true,
    status: 'active',
    date: '2024-11-20',
    order: 2,
    year: 2024
  },
  {
    id: 'jenkins-chatbot',
    title: 'Jenkins Chatbot Plugin',
    description: 'AI-powered conversational interface for Jenkins build management via natural language commands.',
    shortDescription: 'AI-powered conversational interface for Jenkins build management via natural language commands.',
    category: 'ChatOps',
    badge: 'ChatOps',
    icon: 'MessageSquare',
    technologies: ['Python', 'AI', 'Jenkins'],
    tags: ['AI', 'ChatOps', 'Jenkins', 'NLP', 'Python', 'Chatbot'],
    route: '/projects/jenkins-chatbot',
    featured: false,
    status: 'active',
    date: '2024-11-10',
    order: 3,
    year: 2024
  },
  {
    id: 'aws-ec2-agent',
    title: 'AWS EC2 with AI Agent',
    description: 'Deploy cloud infrastructure via natural language with intelligent self-healing automation.',
    shortDescription: 'Deploy cloud infrastructure via natural language with intelligent self-healing automation.',
    category: 'Cloud Automation',
    badge: 'Cloud Automation',
    icon: 'Cloud',
    technologies: ['AWS', 'AI', 'Cloud'],
    tags: ['AWS', 'Cloud', 'AI', 'Infrastructure', 'Automation', 'EC2'],
    route: '/projects/aws-ec2-agent',
    youtubeUrl: 'https://youtu.be/E6QqJJAZzlE',
    featured: true,
    status: 'active',
    date: '2024-10-25',
    order: 4,
    year: 2024
  },
  {
    id: 'twitter-oauth',
    title: 'Twitter OAuth Wizard',
    description: 'Streamlined OAuth 2.0 setup wizard for Make.com with PKCE security and automatic scenario generation.',
    shortDescription: 'Streamlined OAuth 2.0 setup wizard for Make.com with PKCE security and automatic scenario generation.',
    category: 'OAuth Automation',
    badge: 'OAuth Automation',
    icon: 'Lock',
    technologies: ['JavaScript', 'OAuth', 'Make.com'],
    tags: ['OAuth', 'JavaScript', 'Make.com', 'Twitter', 'Security', 'Integration'],
    route: '/projects/twitter-oauth',
    liveUrl: 'https://avisangle.github.io/make-twitter-oauth/',
    featured: true,
    status: 'active',
    date: '2024-09-15',
    order: 5,
    year: 2024
  },
  {
    id: 'method-crm-mcp',
    title: 'Method CRM MCP Server',
    description: 'Production-ready MCP server for Method CRM API integration with 20 comprehensive tools for LLM interactions.',
    shortDescription: 'Production-ready MCP server for Method CRM API integration with 20 comprehensive tools for LLM interactions.',
    category: 'CRM Integration',
    badge: 'CRM Integration',
    icon: 'Building2',
    technologies: ['Python', 'MCP', 'Method CRM'],
    tags: ['MCP', 'CRM', 'Python', 'API', 'Integration', 'Method CRM'],
    route: '/projects/method-crm-mcp',
    featured: true,
    status: 'active',
    date: '2024-08-20',
    order: 6,
    year: 2024
  },
  {
    id: 'calculator-server',
    title: 'Calculator Server',
    description: 'High-performance Go-based MCP server providing comprehensive mathematical computation capabilities for AI agents.',
    shortDescription: 'High-performance Go-based MCP server providing comprehensive mathematical computation capabilities for AI agents.',
    category: 'MCP Server',
    badge: 'AI Integration',
    icon: 'Calculator',
    technologies: ['Go', 'MCP', 'Mathematical APIs'],
    tags: ['MCP', 'Go', 'Mathematics', 'Microservices', 'AI Tools'],
    route: '/projects/calculator-server',
    githubUrl: 'https://github.com/avisangle/calculator-server',
    featured: true,
    status: 'active',
    date: '2024-07-15',
    order: 7,
    year: 2024
  },
  {
    id: 'wp-mcp',
    title: 'WP Coding with MCP',
    description: 'WordPress development enhanced with AI-assisted debugging and code analysis using Model Context Protocol.',
    shortDescription: 'WordPress development enhanced with AI-assisted debugging and code analysis using Model Context Protocol.',
    category: 'WordPress Development',
    badge: 'AI Integration',
    icon: 'Code',
    technologies: ['WordPress', 'PHP', 'MCP', 'AI'],
    tags: ['WordPress', 'PHP', 'MCP', 'AI', 'Development', 'Debugging'],
    route: '/projects/wp-mcp',
    featured: true,
    status: 'active',
    date: '2024-06-10',
    order: 8,
    year: 2024
  }
]

// Helper Functions

/**
 * Get all featured projects sorted by order
 */
export function getFeaturedProjects(): Project[] {
  return projects
    .filter(project => project.featured)
    .sort((a, b) => a.order - b.order)
}

/**
 * Get all projects sorted by order
 */
export function getAllProjects(): Project[] {
  return projects.sort((a, b) => a.order - b.order)
}

/**
 * Get project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  return projects
    .filter(project => project.category === category)
    .sort((a, b) => a.order - b.order)
}

/**
 * Get projects by status
 */
export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects
    .filter(project => project.status === status)
    .sort((a, b) => a.order - b.order)
}

/**
 * Get projects by technology
 */
export function getProjectsByTechnology(tech: string): Project[] {
  return projects
    .filter(project => 
      project.technologies.some(t => 
        t.toLowerCase().includes(tech.toLowerCase())
      )
    )
    .sort((a, b) => a.order - b.order)
}

/**
 * Search projects by query (searches title, description, and tags)
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase()
  return projects
    .filter(project => 
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
    .sort((a, b) => a.order - b.order)
}

/**
 * Get unique categories from all projects
 */
export function getCategories(): string[] {
  return Array.from(new Set(projects.map(p => p.category)))
}

/**
 * Get unique technologies from all projects
 */
export function getTechnologies(): string[] {
  const allTechs = projects.flatMap(p => p.technologies)
  return Array.from(new Set(allTechs))
}