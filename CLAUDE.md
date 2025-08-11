# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the wadoyuniko AI education platform project - a comprehensive system for delivering AI development courses and seminars in Japanese called "バイブコーディング" (Vibe Coding). The project is actively under development with a Next.js frontend, Supabase backend, and shadcn/ui components.

## Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: Zustand
- **Theme**: next-themes with dark/light mode support

### Backend
- **Runtime**: Node.js  
- **Database**: PostgreSQL with Supabase
- **Authentication**: Supabase Auth (@supabase/ssr for SSR support)
- **API**: Next.js API routes with server actions

### UI Components
- **Library**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Notifications**: Sonner toasts

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server  
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

## Project Architecture

### Directory Structure
```
/
├── app/                   # Next.js App Router
│   ├── layout.tsx        # Root layout with theme provider
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global Tailwind styles
│   └── dashboard/        # Dashboard pages
├── components/           # React components
│   ├── ui/              # shadcn/ui components (Button, Card, etc.)
│   └── theme-provider.tsx # Theme context provider
├── lib/                 # Utilities and configurations
│   ├── utils.ts         # cn() utility and helpers
│   └── supabase/        # Supabase client/server configurations
├── types/               # TypeScript type definitions
├── docs/                # Business and project documentation
│   ├── product/         # Product specifications
│   ├── task/            # Task management
│   └── kpi-dashboard/   # KPI tracking documentation
├── team/                # Team-specific documentation and assets
│   ├── present/         # Presentation materials
│   ├── Live/            # Live streaming guides
│   └── x/               # Social media strategies
└── orggen/              # AI organization configuration
    └── project.yaml     # Multi-agent system configuration
```

### Key Architecture Patterns

- **App Router**: Uses Next.js 15 app directory structure
- **Server Components**: Default server-side rendering with client components where needed
- **Component Composition**: Radix UI primitives composed into reusable shadcn/ui components
- **Type Safety**: Strict TypeScript with path mapping (@/* aliases)
- **Styling**: Tailwind with CSS variables for theming
- **Authentication**: Supabase Auth with SSR support

## Testing Configuration

### Jest Setup
- **Framework**: Jest with jsdom environment for component testing
- **Config**: `jest.config.js` with Next.js integration
- **Setup**: `jest.setup.js` for test environment configuration
- **Coverage Thresholds**: 
  - Functions: 80%
  - Lines: 80% 
  - Statements: 80%
  - Branches: 70%
- **Testing Libraries**: @testing-library/react, @testing-library/jest-dom, @testing-library/user-event

### Running Tests
```bash
npm run test           # Run all tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run with coverage report
```

## Environment Setup

### Required Environment Variables
```bash
# Supabase (required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI API Keys (server-side only)
CLAUDE_API_KEY=your_claude_api_key
OPENAI_API_KEY=your_openai_api_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_here
ENCRYPTION_KEY=your_encryption_key_here
```

Copy `.env.local.example` to `.env.local` and fill in your values.

## Code Conventions

### Component Structure
- Use shadcn/ui components from `@/components/ui`
- Apply Tailwind classes with `cn()` utility from `@/lib/utils`
- Follow Radix UI patterns for accessibility
- Use forwardRef for component composition

### Import Patterns
```typescript
// Absolute imports using @ alias
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { createClient } from '@/lib/supabase/client'
```

### Styling Conventions
- Use Tailwind CSS classes
- Leverage CSS variables for theming
- Support both light and dark modes
- Use `next-themes` for theme switching

## AI Organization System

The project implements a sophisticated multi-agent AI organization with defined roles and communication protocols. Key documentation is in:

- `orggen/project.yaml`: Master organization configuration
- `docs/`: Extensive business and project documentation
- `team/`: Team-specific assets and strategies

### AI Agent Roles
- **CEO**: Strategic vision and decision-making
- **CTO**: Technical architecture and leadership  
- **Engineering Manager**: Development team coordination
- **Security Officer**: Security policies and incident response
- **QA Lead**: Quality assurance and testing strategies
- **DevOps Engineer**: Infrastructure and deployment
- **Product Manager**: Product strategy and requirements

## Business Context

- **Company**: wadoyuniko (和道ユニコ)
- **Product**: バイブコーディング (Vibe Coding) - AI development courses
- **Target Audience**: Programming beginners wanting to monetize AI skills
- **Language**: Japanese for user-facing content, English for code/technical docs
- **Mission**: Democratize AI development education in Japan

## Development Workflow

### Adding shadcn/ui Components
```bash
npx shadcn-ui@latest add [component-name]
```
Components are automatically configured to use the `@/` alias structure.

### Supabase Integration
- Client-side: Use `createClient()` from `@/lib/supabase/client`  
- Server-side: Use appropriate server client from `@/lib/supabase/server`
- SSR support with `@supabase/ssr` package

### Next.js Configuration
- Server actions enabled with 2MB body size limit
- Image optimization for localhost and supabase.co domains  
- React strict mode and SWC minification enabled

## Important Notes for Claude Code

- Project is actively in development with working Next.js setup
- Use TypeScript strictly - all files should be .ts/.tsx
- Follow the established shadcn/ui + Tailwind patterns
- Maintain test coverage above 80% (configured in jest.config.js)
- All user-facing content should be in Japanese
- Code, comments, and technical documentation should be in English
- Use the multi-agent system defined in orggen/ for complex decisions

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
- Use established patterns from existing components

### Deployment Configuration
- Next.js app configured for Vercel deployment
- Environment variables must be set in production
- Server actions enabled with proper validation
- Image optimization configured for Supabase domains

**Last Updated**: 2025-01-11
**Next Review**: 2025-02-11