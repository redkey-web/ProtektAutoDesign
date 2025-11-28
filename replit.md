# Protekt Auto - Premium Car Detailing & Protection

## Overview
Protekt Auto is a luxury automotive detailing and protection service website for a Sydney-based business. It specializes in ceramic coatings, paint correction, window tinting, and paint protection film (PPF). The project is a full-stack React application with an Express backend, designed to provide an immersive visual experience mirroring the sophistication of luxury automotive brands.

## Recent Changes (November 28, 2025)
**Content & Pricing Updates**:
- Home Page: Updated hero tagline to "Sydney's #1 Paint Protection & Car Care Specialists" and description to "The best ceramic coatings & paint protection films in Sydney"
- Business Hours: Monday-Friday 8:00am-4:30pm, Saturday 8:30am-11:00am (appointment only for pick ups, drop offs & quotes), Sunday Closed
- Window Tinting: New pricing ($350/$650/$890), Solar Energy Rejection specs (42%/65%/71%), 78% glare reduction, Lifetime film & labour warranties
- PPF Page: 6 packages (Wear & Tear $550, Standard Front $1,750, Complete Front $2,600, Track Pack $3,500, Full Sides $3,800, Full Wraps $6,800) with pricing disclaimers
- Ceramic Coating: Added pricing note about vehicle size affecting quotes
- Testimonials: Updated with 4 real Google reviews (John Tran, liftytim, Hieu Nguyen, Peter Lynden) with yellow Google-style stars, time stamps, and clickable Google Reviews badge

## Previous Changes (November 25, 2025)
**Trust & Social Proof Integration**: Added TrustBadges and Testimonials components to all service pages (New Car Protection, Paint Correction, Window Tinting, Stonechip Protection, Motorcycle Protection, Packages). TrustBadges display 4 credibility indicators (4.9/5 Google Rating, 10+ Years Experience, 1000+ Happy Customers, Certified Applicators) positioned after hero sections. Testimonials showcase 4 customer reviews with 5-star ratings and aggregate Google rating (4.9 based on 150+ reviews) positioned before FAQ sections.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Framework & Build System:** React 18 with TypeScript, Vite for development and optimized builds, Wouter for routing, and TanStack Query for server state management.
**UI Component System:** Radix UI for accessible foundations, shadcn/ui (New York style) for customizable components, and Tailwind CSS with custom design tokens for styling.
**Design Philosophy:** Premium, luxury automotive aesthetic using Bebas Neue and Barlow Condensed fonts, Teal/cyan accents, dark backgrounds, glass-morphism effects, sophisticated micro-interactions, and mobile-first responsive design.
**Page Structure:** Includes Home, dedicated service pages (Ceramic Coating, Paint Correction, Window Tinting, PPF, Motorcycle Protection), Package comparison, and a Gallery page. Features reusable components for heroes, pricing, process timelines, trust badges, and testimonials.
**Key Features:** Vimeo hero background video, YouTube welcome video, interactive before/after image slider, glass-morphism hover effects on CTAs, transparent navigation, fully clickable service tiles, savings and quote calculators, film comparison tools, trust badges with social proof metrics, customer testimonials with Google reviews integration, and contact forms with validation.

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