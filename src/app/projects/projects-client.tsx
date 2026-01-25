"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CategoryIcon } from "@/components/icons/category-icon"
import { TechBadge } from "@/components/ui/tech-badge"
import { Search, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/data/projects"

interface ProjectsClientProps {
  projects: Project[]
  categories: string[]
  technologies: string[]
}

const ITEMS_PER_PAGE = 6

export function ProjectsClient({ projects, categories, technologies }: ProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [technologyFilter, setTechnologyFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("date-desc")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = [...projects]

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((project) => project.category === categoryFilter)
    }

    // Technology filter
    if (technologyFilter !== "all") {
      filtered = filtered.filter((project) =>
        project.technologies.some((tech) => tech.toLowerCase() === technologyFilter.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((project) => project.status === statusFilter)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "title-asc":
          return a.title.localeCompare(b.title)
        case "title-desc":
          return b.title.localeCompare(a.title)
        case "order":
        default:
          return a.order - b.order
      }
    })

    return filtered
  }, [projects, searchQuery, categoryFilter, technologyFilter, statusFilter, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProjects = filteredProjects.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchQuery, categoryFilter, technologyFilter, statusFilter, sortBy])

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setCategoryFilter("all")
    setTechnologyFilter("all")
    setStatusFilter("all")
    setSortBy("date-desc")
    setCurrentPage(1)
  }

  const hasActiveFilters =
    searchQuery || categoryFilter !== "all" || technologyFilter !== "all" || statusFilter !== "all"

  return (
    <div>
      {/* Filters and Search */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search projects by name, technology, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Technology Filter */}
          <Select value={technologyFilter} onValueChange={setTechnologyFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Technologies" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Technologies</SelectItem>
              {technologies.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort By */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Newest First</SelectItem>
              <SelectItem value="date-asc">Oldest First</SelectItem>
              <SelectItem value="title-asc">Title (A-Z)</SelectItem>
              <SelectItem value="title-desc">Title (Z-A)</SelectItem>
              <SelectItem value="order">Default Order</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchQuery}
                <button onClick={() => setSearchQuery("")} className="ml-1 hover:text-destructive">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {categoryFilter !== "all" && (
              <Badge variant="secondary" className="gap-1">
                Category: {categoryFilter}
                <button onClick={() => setCategoryFilter("all")} className="ml-1 hover:text-destructive">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {technologyFilter !== "all" && (
              <Badge variant="secondary" className="gap-1">
                Tech: {technologyFilter}
                <button onClick={() => setTechnologyFilter("all")} className="ml-1 hover:text-destructive">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {statusFilter !== "all" && (
              <Badge variant="secondary" className="gap-1">
                Status: {statusFilter}
                <button onClick={() => setStatusFilter("all")} className="ml-1 hover:text-destructive">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear All
            </Button>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {currentProjects.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, filteredProjects.length)} of{" "}
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Projects Grid */}
      {currentProjects.length > 0 ? (
        <div className="grid-3 mb-8">
          {currentProjects.map((project) => (
            <Card key={project.id} className="card-hover flex flex-col">
              <CardHeader>
                <CategoryIcon icon={project.icon} size="xl" animation="pulse" variant="square" />
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="w-fit">
                    {project.badge}
                  </Badge>
                  {project.status !== "active" && (
                    <Badge variant="outline" className="w-fit text-xs">
                      {project.status}
                    </Badge>
                  )}
                </div>
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
                  <Link href={project.route}>Learn More →</Link>
                </Badge>
                {project.liveUrl && (
                  <Badge variant="default" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </Badge>
                )}
                {project.youtubeUrl && !project.liveUrl && (
                  <Badge variant="default" asChild>
                    <Link href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      Watch Demo <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </Badge>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">No projects found matching your criteria.</p>
          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage =
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)

              if (!showPage) {
                // Show ellipsis
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  )
                }
                return null
              }

              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="min-w-[40px]"
                >
                  {page}
                </Button>
              )
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  )
}