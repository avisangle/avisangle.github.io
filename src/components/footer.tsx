import Link from "next/link"
import { Github, Linkedin, Youtube, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/avisangle",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/avinashsangle/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AIAgentOps",
    icon: Youtube,
  },
  {
    name: "Email",
    href: "mailto:aavi.sangle@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-wrapper">
      <div className="container mx-auto px-4 py-8">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Avinash Sangle</h3>
            <p className="footer-tagline">Building intelligent automation solutions</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                className="social-link"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <Separator className="my-6" />
        <div className="footer-bottom">
          <p>&copy; {currentYear} Avinash Sangle. Made with ❤️ and code.</p>
        </div>
      </div>
    </footer>
  )
}
