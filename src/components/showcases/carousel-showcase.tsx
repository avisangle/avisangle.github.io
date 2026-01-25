"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { CategoryIcon } from "@/components/icons/category-icon"
import { TechBadge } from "@/components/ui/tech-badge"
import { ExternalLink, Star } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

// Mock project data for carousel examples
const mockProjects = [
  {
    id: 1,
    title: "AI Chatbot Platform",
    description: "Conversational AI platform with natural language processing capabilities",
    badge: "AI Integration",
    icon: "Bot" as const,
    technologies: ["Python", "AI", "NLP"],
  },
  {
    id: 2,
    title: "Cloud Infrastructure Manager",
    description: "Deploy and manage cloud resources across multiple providers",
    badge: "Cloud Automation",
    icon: "Cloud" as const,
    technologies: ["AWS", "Terraform", "Go"],
  },
  {
    id: 3,
    title: "DevOps Pipeline Tool",
    description: "Automated CI/CD pipeline with intelligent testing and deployment",
    badge: "DevOps",
    icon: "Wrench" as const,
    technologies: ["Jenkins", "Docker", "K8s"],
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "Real-time analytics and visualization for business intelligence",
    badge: "Data Analytics",
    icon: "Database" as const,
    technologies: ["Python", "PostgreSQL", "React"],
  },
  {
    id: 5,
    title: "Mobile App Builder",
    description: "No-code platform for building mobile applications quickly",
    badge: "Mobile Development",
    icon: "Smartphone" as const,
    technologies: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    title: "Security Scanner",
    description: "Automated security vulnerability scanning and reporting",
    badge: "Security",
    icon: "Lock" as const,
    technologies: ["Go", "Security", "API"],
  },
]

export function CarouselShowcase() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Carousel</h2>
        <p className="text-muted-foreground text-lg">
          A responsive carousel/slider component with keyboard navigation, touch support, and multiple configuration options.
        </p>
      </div>

      {/* Example 1: Basic Project Cards Carousel (Homepage Style) */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Featured Projects Carousel</h3>
          <p className="text-muted-foreground">
            This mimics the homepage featured projects section with 3 cards on desktop, 2 on tablet, 1 on mobile.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {mockProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="card-hover h-full flex flex-col">
                  <CardHeader>
                    <CategoryIcon icon={project.icon} size="xl" animation="pulse" variant="square" />
                    <Badge variant="secondary" className="w-fit mb-2">
                      {project.badge}
                    </Badge>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="tech-stack">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} tech={tech} className="badge-primary-outline" />
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-4">
                    <Badge variant="outline" asChild>
                      <Link href="#">Learn More →</Link>
                    </Badge>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Slide {current} of {count} • Swipe on mobile, use arrows on desktop
          </p>
        </div>
      </div>

      {/* Example 2: Simple Cards with Dots Indicator */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2">With Progress Indicator</h3>
          <p className="text-muted-foreground">
            Shows current slide position with dot indicators.
          </p>
        </div>
        
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-sm mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="text-2xl font-semibold">Slide {index + 1}</h4>
                      <p className="text-sm text-muted-foreground">
                        This is slide content {index + 1}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="text-center py-2">
          <div className="flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === current - 1 ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Example 3: Single Item Full Width */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Single Item Full Width</h3>
          <p className="text-muted-foreground">
            One item per view with center alignment - great for testimonials or featured content.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-2xl mx-auto"
        >
          <CarouselContent>
            {mockProjects.slice(0, 3).map((project) => (
              <CarouselItem key={project.id}>
                <Card className="border-2">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <CategoryIcon icon={project.icon} size="xl" animation="pulse" variant="circle" />
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center gap-2 flex-wrap">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button>
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Example 4: Multiple Items Scrolling */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Multiple Items Per View</h3>
          <p className="text-muted-foreground">
            Shows 4 items on desktop, 3 on tablet, 2 on mobile with smooth scrolling.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {Array.from({ length: 12 }).map((_, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">{index + 1}</div>
                      <p className="text-xs text-muted-foreground">Item {index + 1}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>

      {/* Example 5: No Loop (Bounded) */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Bounded Carousel (No Loop)</h3>
          <p className="text-muted-foreground">
            Buttons disable at the boundaries - notice the previous button is disabled at the start.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {mockProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CategoryIcon icon={project.icon} size="lg" animation="pulse" />
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Try navigating to the edges - buttons will disable
          </p>
        </div>
      </div>

      {/* Example 6: Vertical Carousel */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Vertical Orientation</h3>
          <p className="text-muted-foreground">
            Carousel can also scroll vertically. Useful for timelines or stacked content.
          </p>
        </div>
        
        <Carousel
          orientation="vertical"
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm mx-auto"
        >
          <CarouselContent className="-mt-4 h-[400px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-4">
                <Card>
                  <CardContent className="flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">Step {index + 1}</div>
                      <p className="text-sm text-muted-foreground">
                        Vertical carousel item {index + 1}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Usage Notes */}
      <div className="mt-12 p-6 bg-muted/50 rounded-lg space-y-4">
        <h3 className="text-xl font-semibold">Usage Notes</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
            <span><strong>Keyboard:</strong> Use arrow keys to navigate when focused</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
            <span><strong>Touch:</strong> Swipe left/right on mobile and tablet devices</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
            <span><strong>Responsive:</strong> Automatically adjusts items per view based on screen size</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
            <span><strong>Loop:</strong> Can be configured to loop infinitely or stop at boundaries</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
            <span><strong>Accessibility:</strong> Proper ARIA labels and keyboard navigation support</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
