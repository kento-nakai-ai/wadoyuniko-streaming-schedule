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
- **Static Site**: Images unoptimized, no server-side features
- **Purpose**: Marketing pages, streaming schedules, launch support

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

### Static Site Export Configuration
- **Build Output**: Static files in `out/` directory
- **Images**: Unoptimized (no Next.js Image optimization)
- **Routing**: Trailing slashes enabled for better static hosting
- **Base Path**: Configurable for GitHub Pages deployment

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

- **Static Site Generation**: All pages pre-rendered at build time
- **Component-First**: shadcn/ui components with Tailwind styling
- **Mobile-Responsive**: Design-first for multi-device launch promotion  
- **Type Safety**: Strict TypeScript with path mapping (@/* aliases)
- **Launch-Focused**: Optimized for marketing pages and streaming schedules

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

### For Static Site Development
```bash
# Optional for development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# No server-side environment variables needed for static export
```

### Production Deployment
- Static files exported to `out/` directory
- No environment variables required for runtime
- GitHub Pages compatible

## Code Conventions

### Component Structure
- Use shadcn/ui components from `@/components/ui`
- Apply Tailwind classes with `cn()` utility from `@/lib/utils`
- Follow Radix UI patterns for accessibility
- Static-first: No server-side database calls or authentication

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
- `team/present/`: Marketing materials and bonus content
- `team/Live/`: Streaming guides and YouTube strategy
- `team/x/`: Social media launch campaigns

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
Components automatically configured for static export.

### Deployment Configuration
- **Development**: Standard Next.js with server features enabled
- **Production**: Supports both static export and server deployment
- **Vercel**: Optimized for Vercel deployment with server actions
- **Images**: Configured for localhost and Supabase domains

## Important Notes for Claude Code

- **Project Type**: Business launch support site, not full platform
- **Timeline**: Critical launch milestones approaching (August 2025)
- **Focus**: Marketing pages, streaming schedules, launch documentation
- **Language**: Japanese for user-facing content, English for code
- **Deployment**: Static site export for GitHub Pages or similar
- **Documentation**: Extensive launch strategy docs in `docs/` and `team/`

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

**Last Updated**: 2025-01-11 (Launch Project Context)
**Next Review**: Post-launch (September 2025)