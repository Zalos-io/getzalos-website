# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React.js/Next.js landing page template built with TypeScript and Tailwind CSS. The project uses Next.js for static site generation and follows a data-driven approach where all content is managed through a centralized JSON configuration file.

## Development Commands

- **Start development server**: `pnpm dev` (runs on http://localhost:3000)
- **Build for production**: `pnpm build`
- **Start production server**: `pnpm start`
- **Build with bundle analysis**: `pnpm build-stats` (sets ANALYZE=true)
- **Export static files**: `pnpm export`
- **Full production build**: `pnpm build-prod` (clean + build + export)
- **Clean build artifacts**: `pnpm clean`
- **Lint code**: `pnpm lint`
- **Type checking**: `pnpm build-types`

## Architecture

### Technology Stack
- **Next.js 12** - React framework with SSG capabilities
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework with JIT mode
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling navigation

### Core Structure
- **Single-page application** with smooth scrolling between sections
- **Data-driven content** managed through `src/config/index.json`
- **Component-based architecture** with TypeScript interfaces
- **Static assets** stored in `public/assets/` directory

### Key Files and Directories
- `src/pages/index.tsx` - Main page component that orchestrates all sections
- `src/config/index.json` - Central configuration file containing all website content
- `src/components/` - Individual section components (Header, MainHero, Product, Features, etc.)
- `src/hooks/` - Custom React hooks (useCanvas, useResponsiveSize)
- `src/utils/` - Utility functions and app configuration
- `src/lib/` - Third-party integrations (Google Analytics, Google Ads)
- `public/assets/images/` - Image assets referenced in config.json

### Component Architecture
All components are built with TypeScript and follow these patterns:
- Receive configuration data from `src/config/index.json`
- Use Tailwind CSS for styling with custom color palette
- Implement lazy loading with `LazyShow` wrapper component
- Support responsive design with custom hooks

### Data Flow
1. `src/pages/index.tsx` imports configuration from `src/config/index.json`
2. Each section component receives relevant data as props
3. Components render content using TypeScript interfaces for type safety
4. Custom Canvas components provide animated visual elements between sections

## Content Management

### Updating Website Content
All website content is managed through `src/config/index.json`, including:
- Company information and branding
- Navigation menu items
- Main hero section (title, description, CTAs)
- Product showcase items
- Features list with icons
- Pricing tiers
- About sections and social media links

### Customizing Theme
- **Colors**: Update the color palette in `tailwind.config.js`
- **Typography**: Modify font sizes in the Tailwind config
- **Animations**: Custom keyframes and animations are defined in Tailwind config

### Adding Images
Place new images in `public/assets/images/` and reference them in `src/config/index.json` with paths like `/assets/images/filename.jpg`.

## Build Configuration

- **Next.js config**: `next.config.js` includes bundle analyzer and trailing slash settings
- **TypeScript**: `tsconfig.json` configured for Next.js with strict type checking
- **Tailwind**: Uses JIT mode with purging enabled for optimal bundle size
- **ESLint**: Configured with Airbnb TypeScript rules and Prettier integration
- **Husky + lint-staged**: Pre-commit hooks for code quality

## Deployment

The project is optimized for:
- **Vercel** (recommended - native Next.js support)
- **Netlify** (configuration in `netlify.toml`)
- **Manual deployment** to any static hosting service

Use `pnpm build-prod` to create an optimized static export in the `out/` directory.