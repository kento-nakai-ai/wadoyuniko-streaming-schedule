# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **バイブコーディング (Vibe Coding) Launch Project** - a business launch campaign for an AI development education course targeting August 28-30, 2025. The repository serves as a support system for the launch with a Next.js static site for streaming schedules and marketing pages.

## Technology Stack

### Frontend & Deployment
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: Static site export (`output: 'export'`) configured for GitHub Pages
- **Theme**: next-themes with dark/light mode support

### UI Components
- **Library**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Notifications**: Sonner toasts

### Project Type
- **Dynamic Site**: Next.js with server actions and Supabase integration
- **Purpose**: Marketing pages, streaming schedules, launch support, content management

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build static site for deployment
npm run build

# Start production server (for testing build locally)
npm run start

# Run tests
npm run test
npm run test:watch     # Watch mode
npm run test:coverage  # With coverage

# Code quality
npm run lint          # ESLint with Next.js config
npm run format        # Prettier with Tailwind plugin
npm run type-check    # TypeScript checking without emit
```

### Server Actions & Dynamic Features
- **Server Actions**: Enabled with 2MB body size limit
- **Images**: Optimized for localhost and Supabase domains
- **Database**: Supabase integration for dynamic content
- **State Management**: Zustand for client-side state

## Project Architecture

### Directory Structure
```
/
├── app/                   # Next.js App Router
│   ├── layout.tsx        # Root layout with navigation
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global Tailwind styles
│   ├── dashboard/        # Dashboard pages
│   └── streaming-schedule/ # Launch streaming schedule page
├── components/           # React components
│   ├── ui/              # shadcn/ui components (Button, Card, etc.)
│   └── theme-provider.tsx # Theme context provider
├── lib/                 # Utilities and configurations
│   └── utils.ts         # cn() utility and helpers
├── docs/                # Launch project documentation
│   ├── product/         # Product specifications (Vibe Coding)
│   ├── project-management/ # Launch timeline and strategy
│   └── kpi-dashboard/   # Launch metrics tracking
└── team/                # Launch team assets
    ├── present/         # Marketing materials
    ├── Live/            # Streaming guides for launch
    └── x/               # Social media launch strategies
```

### Key Architecture Patterns

- **App Router**: Next.js 15 App Router with server components
- **Component-First**: shadcn/ui components with Tailwind styling
- **Database Integration**: Supabase for content management and data storage
- **Type Safety**: Strict TypeScript with path mapping (@/* aliases)
- **Marketing-Focused**: Content management system for educational materials and promotion

## Launch Context

### Business Goals
- **Launch Date**: August 28-30, 2025
- **Revenue Target**: 30 million yen
- **Student Target**: 100 enrollments
- **Pricing**: 300k yen (Vibe Coding), 500k yen (with Prompt Engineering)

### Critical Milestones
- **August 14**: Major collaboration announcement
- **August 21**: Launch post campaign begins
- **August 28-30**: 3-day seminar implementation

## Testing Configuration

### Jest Setup
- **Framework**: Jest with jsdom environment for component testing
- **Coverage Thresholds**: Functions: 80%, Lines: 80%, Statements: 80%, Branches: 70%
- **Testing Libraries**: @testing-library/react, @testing-library/jest-dom

### Running Single Tests
```bash
npm run test -- --testNamePattern="ComponentName"
npm run test -- components/ui/button.test.tsx
```

## Environment Setup

### For Development
```bash
# Required for Supabase integration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional for development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Production Deployment
- Vercel deployment with server-side features
- Environment variables for Supabase integration required
- Database migrations and seed data via Supabase dashboard

## Code Conventions

### Component Structure
- Use shadcn/ui components from `@/components/ui`
- Apply Tailwind classes with `cn()` utility from `@/lib/utils`
- Follow Radix UI patterns for accessibility
- Server components for data fetching, client components for interactivity
- Supabase client/server utilities in `@/lib/supabase/`

### Import Patterns
```typescript
// Absolute imports using @ alias
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

### Styling Conventions
- Use Tailwind CSS classes
- Leverage CSS variables for theming
- Support both light and dark modes with `next-themes`
- Mobile-first responsive design for launch promotion

## Launch Project Documentation

### Key Documentation Locations
- `docs/product/`: Vibe Coding course specifications
- `docs/project-management/`: Launch timeline and team strategy
- `team/present/bonuses/`: 33 educational bonus materials (295万円相当)
- `team/present/promotion/`: 10 promotional/marketing materials
- `team/Live/`: Streaming guides and YouTube strategy
- `team/x/`: Social media launch campaigns and X algorithm optimization
- `docs/sales-scripts/`: Complete sales training materials and scripts

### Content Management Architecture
The project contains extensive educational and promotional content:

#### Educational Content (33 bonuses)
- **Pre-distribution bonuses** (10): Free lead magnets in `team/present/bonuses/pre-distribution/`
- **Course purchase bonuses** (3): Premium bonuses in `team/present/bonuses/course-purchase/`  
- **Seminar limited bonuses** (11): Exclusive content in `team/present/bonuses/seminar-limited/`

#### Marketing Materials (10 promotional assets)
- **Lead generation**: Landing pages, webinars, startup kits in `team/present/promotion/lead-generation/`
- **Viral campaigns**: SNS templates, contests in `team/present/promotion/viral-campaigns/`
- **Partnerships**: Influencer collaboration, affiliate programs in `team/present/promotion/partnerships/`
- **Media kit**: Press releases, media assets in `team/present/promotion/media-kit/`

#### Content File Naming Convention
- Numbered prefixes (01-, 02-, etc.) indicate sequence/priority
- Category-based subdirectories for organization
- INDEX.md files provide comprehensive overviews

### Launch Team Structure
- **PM**: 中井健登 (Nakai Kento) - Project management and coordination
- **Content**: ゆき, ちょこ, こばやし ゆうた - Video and slide production  
- **Marketing**: わど, 中上裕三, Yui Mitsui - Seminar execution and sales
- **Partner**: ユニコーン社 - Content provision and Discord community

## Development Workflow

### Adding shadcn/ui Components
```bash
npx shadcn-ui@latest add [component-name]
```
Components automatically configured with proper imports and styling.

### Deployment Configuration
- **Development**: Standard Next.js with server features enabled
- **Production**: Vercel deployment with server actions enabled (static export removed)
- **Vercel**: Optimized for Vercel deployment with 2MB body size limit for server actions
- **Images**: Configured for localhost and Supabase domains

## Important Notes for Claude Code

- **Project Type**: Business launch support site, not full platform
- **Timeline**: Critical launch milestones approaching (August 2025)
- **Focus**: Educational content management, marketing automation, launch support
- **Language**: Japanese for user-facing content, English for code
- **Content Value**: 295万円 worth of educational materials, 2億円 promotional value
- **Deployment**: Vercel with Supabase integration for content management
- **Documentation**: Extensive educational and marketing content in `team/present/`

## Quality Standards

### Testing Requirements
- Minimum 80% test coverage (functions, lines, statements)
- 70% minimum branch coverage
- All new components must have tests
- Use Jest + Testing Library for component testing

### Code Review Process
- Run `npm run lint` and `npm run type-check` before committing
- Ensure tests pass with `npm run test`
- Follow TypeScript strict mode requirements
- Launch timeline sensitive - prioritize working features over perfect code

### Launch-Critical Features
- **Streaming Schedule**: Core functionality for marketing campaign
- **Mobile Responsiveness**: Essential for audience reach
- **Fast Loading**: Critical for user conversion during launch
- **Japanese Localization**: Required for target audience

**Last Updated**: 2025-01-12 (Major Content Expansion - 43 total assets created)
**Recent Additions**: 
- 33 educational bonus materials (team/present/bonuses/)
- 10 promotional marketing assets (team/present/promotion/)
- Comprehensive sales training materials (docs/sales-scripts/)
**Next Review**: Pre-launch (August 2025)