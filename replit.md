# Protekt Auto - Premium Car Detailing & Protection

## Overview
Protekt Auto is a luxury automotive detailing and protection service website for a Sydney-based business. It specializes in ceramic coatings, paint correction, window tinting, and paint protection film (PPF). The project is a full-stack React application with an Express backend, designed to provide an immersive visual experience mirroring the sophistication of luxury automotive brands.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Framework & Build System:** React 18 with TypeScript, Vite for development and optimized builds, Wouter for routing, and TanStack Query for server state management.
**UI Component System:** Radix UI for accessible foundations, shadcn/ui (New York style) for customizable components, and Tailwind CSS with custom design tokens for styling.
**Design Philosophy:** Premium, luxury automotive aesthetic using Bebas Neue and Barlow Condensed fonts, Teal/cyan accents, dark backgrounds, glass-morphism effects, sophisticated micro-interactions, and mobile-first responsive design.
**Page Structure:** Includes Home, dedicated service pages (Ceramic Coating, Paint Correction, Window Tinting, PPF, Motorcycle Protection), Package comparison, and a Gallery page. Features reusable components for heroes, pricing, and process timelines.
**Key Features:** Vimeo hero background video, YouTube welcome video, interactive before/after image slider, glass-morphism hover effects on CTAs, transparent navigation, fully clickable service tiles, savings and quote calculators, film comparison tools, and contact forms with validation.

### Backend Architecture
**Server Framework:** Express.js with TypeScript for API routing.
**Code Organization:** Minimal backend with placeholder routes, an `IStorage` interface with in-memory implementation (`MemStorage`), and shared schema definitions using `shared/schema.ts`.
**Development Experience:** Vite middleware integration, request logging, and hot module replacement.

### Data Architecture
**Database Setup:** Drizzle ORM for type-safe operations with PostgreSQL (via Neon serverless driver) as the target. A schema-first approach with Drizzle migrations is used.
**Data Models:** Currently includes a basic user schema with UUIDs, username, and password, validated by Zod schemas.
**Important Note:** The database is configured but not fully implemented; the application uses in-memory storage for data operations.

### Styling System
**Tailwind Configuration:** Custom border radii, extensive HSL-based color system with CSS variables, custom elevation utilities, and a responsive spacing scale.
**Design Tokens:** Primary, secondary, muted, accent, and destructive color variants with foreground and border tokens.
**Component Styling Patterns:** Card components with shadows, variant-based buttons, premium glass-morphism effects using `!important` for overrides, consistent form input heights, and CSS variable-based elevation for hover/active states.
**Design Implementation Notes:** Strategic use of `!important` for overrides, negative margins for hero video letterbox cropping, and explicit `margin: 0; padding: 0` for layout control.

## External Dependencies

### UI & Interaction Libraries
- **Radix UI**: Accessible component primitives.
- **embla-carousel-react**: Touch-friendly carousel.
- **cmdk**: Command menu interface.
- **lucide-react**: Icon library.
- **react-hook-form**: Form state management.
- **@hookform/resolvers**: Integration with Zod validation.

### Data & State Management
- **@tanstack/react-query**: Server state synchronization.
- **drizzle-orm**: Type-safe ORM.
- **drizzle-zod**: Zod schema generation from Drizzle.
- **@neondatabase/serverless**: Serverless PostgreSQL driver.

### Styling & Utilities
- **tailwindcss**: Utility-first CSS framework.
- **class-variance-authority**: Variant-based component APIs.
- **clsx** & **tailwind-merge**: Conditional class utilities.
- **date-fns**: Date manipulation.

### Development Tools
- **Replit-specific plugins**: Runtime error modal, cartographer, dev banner.
- **TypeScript**: Type safety.
- **PostCSS** & **Autoprefixer**: CSS processing.

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store (prepared).
- **express-session**: Session middleware (prepared).

### Asset Management
- Images in `attached_assets` with Vite alias.
- AI-generated images for services and heroes.
- WebP logo assets.