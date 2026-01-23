import * as LucideIcons from 'lucide-react'

// Icon mapping using Lucide React icons
// Provides consistent, well-designed icons across the portfolio
export const techIconMap: Record<string, any> = {
  // Languages
  'Python': LucideIcons.FileCode2,
  'JavaScript': LucideIcons.FileJson,
  'Java': LucideIcons.Coffee,
  'Go': LucideIcons.Boxes,
  'PHP': LucideIcons.FileCode,
  'SQL': LucideIcons.Database,

  // Frameworks & Libraries
  'React': LucideIcons.Atom,
  'Node.js': LucideIcons.Hexagon,
  'Next.js': LucideIcons.Triangle,

  // Cloud Providers
  'AWS': LucideIcons.Cloud,
  'Azure': LucideIcons.CloudCog,
  'GCP': LucideIcons.CloudUpload,
  'Oracle': LucideIcons.Server,
  'Oracle Cloud': LucideIcons.Server,
  'OCI': LucideIcons.Server,
  'Cloud': LucideIcons.Cloud,

  // DevOps & Tools
  'Jenkins': LucideIcons.Hammer,
  'Docker': LucideIcons.Container,
  'Kubernetes': LucideIcons.Network,
  'Git': LucideIcons.GitBranch,

  // Databases & Backend
  'Supabase': LucideIcons.Database,
  'PostgreSQL': LucideIcons.Database,
  'MySQL': LucideIcons.Database,
  'MongoDB': LucideIcons.Database,

  // Integration & Services
  'Stripe': LucideIcons.CreditCard,
  'Vercel': LucideIcons.Triangle,
  'WordPress': LucideIcons.FileText,

  // Social Platforms
  'Twitter': LucideIcons.Twitter,
  'LinkedIn': LucideIcons.Linkedin,
  'Reddit': LucideIcons.MessageCircle,
  'Facebook': LucideIcons.Facebook,
  'Instagram': LucideIcons.Instagram,

  // Fallbacks
  'MCP': LucideIcons.Network,
  'AI': LucideIcons.Brain,
  'AI APIs': LucideIcons.Brain,
  'OAuth': LucideIcons.Lock,
  'Method CRM': LucideIcons.Database,
  'AI Integration': LucideIcons.Bot,
  'Containerization': LucideIcons.Container,
  'CI/CD': LucideIcons.Workflow,
  'Make.com': LucideIcons.Workflow,
}

export const getTechIcon = (techName: string) => {
  return techIconMap[techName] || LucideIcons.Box
}
