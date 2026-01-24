# Project Management Guide

## Overview

This portfolio uses a centralized data structure for managing all projects. This guide explains how to add, update, and manage projects effectively.

## Project Data Structure

All project data is stored in `src/data/projects.ts`. This file is the **single source of truth** for all projects displayed on the website.

## Adding a New Project

### Step 1: Create the Project Page

First, create your project page under `src/app/projects/`:

```
src/app/projects/your-project-name/page.tsx
```

### Step 2: Add Project to Data File

Open `src/data/projects.ts` and add your project to the `projects` array:

```typescript
{
  id: 'your-project-name',                    // Must match folder name
  title: 'Your Project Title',
  description: 'Full description for project cards',
  shortDescription: 'Optional shorter version',
  
  // Categorization
  category: 'Project Category',               // e.g., "AI Integration"
  badge: 'Badge Text',                        // Displayed on card
  tags: ['tag1', 'tag2', 'tag3'],            // For search/filtering
  
  // Display
  icon: 'IconName',                           // See available icons below
  technologies: ['Tech1', 'Tech2'],           // Displayed as badges
  
  // Links
  route: '/projects/your-project-name',       // Internal route
  githubUrl: 'https://github.com/...',       // Optional
  liveUrl: 'https://...',                     // Optional
  blogUrl: 'https://blog...',                 // Optional
  youtubeUrl: 'https://youtube...',           // Optional
  
  // Management
  featured: true,                             // Show on homepage
  status: 'active',                           // active | archived | in-progress | maintenance
  date: '2024-12-15',                         // ISO format YYYY-MM-DD
  order: 10,                                  // Display order (lower = earlier)
  
  // Optional
  client: 'Client Name',                      // Optional
  year: 2024                                  // Optional
}
```

### Step 3: Verify

- Run `npm run dev` to test locally
- Check homepage to see if featured projects appear
- Verify all links work correctly

## Available Icons

The following icons are available (from lucide-react):

- `Smartphone` - Mobile/App projects
- `Bot` - AI/ML projects
- `MessageSquare` - Chat/Communication
- `Cloud` - Cloud infrastructure
- `Lock` - Security/OAuth
- `Building2` - CRM/Business tools
- `Calculator` - Math/Calculation tools
- `Code` - General development
- `Wrench` - DevOps/Tools
- `Database` - Data/Storage
- `Settings` - Configuration/Settings

To add more icons, update the `IconName` type in `src/data/projects.ts`.

## Managing Featured Projects

### Show on Homepage
Set `featured: true` in the project data.

### Hide from Homepage
Set `featured: false` in the project data.

### Best Practices
- Keep 6-9 featured projects on homepage
- Feature your most important/recent work
- Update featured status as new projects launch

## Project Status Values

- **active** - Currently maintained/available
- **archived** - No longer maintained but available
- **in-progress** - Under development
- **maintenance** - Active but in maintenance mode

## Reordering Projects

Projects are displayed by their `order` number (ascending).

To reorder:
1. Update the `order` values in `src/data/projects.ts`
2. Lower numbers appear first
3. Featured projects on homepage follow this order

Example:
```typescript
order: 1  // Appears first
order: 2  // Appears second
order: 3  // Appears third
```

## Helper Functions

The following functions are available from `src/data/projects.ts`:

### Get Featured Projects
```typescript
import { getFeaturedProjects } from '@/data/projects'
const featured = getFeaturedProjects()
```

### Get All Projects
```typescript
import { getAllProjects } from '@/data/projects'
const all = getAllProjects()
```

### Get Project by ID
```typescript
import { getProjectById } from '@/data/projects'
const project = getProjectById('calculator-server')
```

### Get Projects by Category
```typescript
import { getProjectsByCategory } from '@/data/projects'
const aiProjects = getProjectsByCategory('AI Integration')
```

### Get Projects by Status
```typescript
import { getProjectsByStatus } from '@/data/projects'
const active = getProjectsByStatus('active')
```

### Search Projects
```typescript
import { searchProjects } from '@/data/projects'
const results = searchProjects('jenkins')
```

## Scaling to 50+ Projects

### Current Setup
- ✅ Centralized data structure
- ✅ Featured/non-featured filtering
- ✅ Status tracking
- ✅ Date tracking
- ✅ Helper functions ready

### Implemented Features

#### 1. All Projects Page (`/projects`)
✅ **IMPLEMENTED** - A comprehensive projects listing page with:
- ✅ Pagination (12 projects per page)
- ✅ Category filters
- ✅ Technology filters
- ✅ Status filters
- ✅ Search bar (searches title, description, tags, technologies)
- ✅ Sort options (newest/oldest, A-Z, Z-A, default order)
- ✅ Active filter badges with individual clear buttons
- ✅ "Clear All" filters button
- ✅ Results count display
- ✅ Smart pagination with ellipsis for many pages
- ✅ Responsive design
- ✅ Empty state with clear filters option

**Access:** Navigate to `/projects` or click "View All Projects" button on homepage

### Future Enhancements (When Needed)

#### 2. Add Category Pages
Create dynamic routes like:
- `/projects/ai-integration`
- `/projects/devops`
- `/projects/cloud`

#### 3. Add Search Functionality
Use the built-in `searchProjects()` function to implement search.

#### 4. Consider CMS Integration
For 100+ projects, consider moving to:
- Headless CMS (Contentful, Strapi)
- Database (PostgreSQL with Prisma)
- File-based CMS (MDX)

## File Structure

```
src/
├── data/
│   └── projects.ts          # Central project data
├── app/
│   ├── page.tsx             # Homepage (featured projects)
│   └── projects/
│       ├── page.tsx         # All projects page (future)
│       ├── project-1/
│       │   └── page.tsx
│       └── project-2/
│           └── page.tsx
```

## Common Tasks

### Add New Project
1. Create project page in `src/app/projects/your-project/page.tsx`
2. Add entry to `projects` array in `src/data/projects.ts`
3. Set appropriate `featured`, `status`, `date`, `order` values

### Feature a Project
Change `featured: false` to `featured: true` in projects.ts

### Unfeature a Project
Change `featured: true` to `featured: false` in projects.ts

### Archive a Project
Change `status: 'active'` to `status: 'archived'` in projects.ts

### Reorder Projects
Update `order` numbers in projects.ts (lower numbers appear first)

## TypeScript Benefits

The centralized structure provides:
- ✅ Type safety for all project data
- ✅ Autocomplete in your IDE
- ✅ Compile-time error checking
- ✅ Consistent data structure
- ✅ Easy refactoring

## Questions?

If you need to:
- Add new icon types
- Change data structure
- Add new fields
- Implement advanced features

Simply update `src/data/projects.ts` and the TypeScript compiler will guide you through necessary changes across the codebase.