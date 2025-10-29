# Protekt Auto - Premium Car Detailing & Protection

## Overview

Protekt Auto is a luxury automotive detailing and protection service website built for a Sydney-based business specializing in ceramic coatings, paint correction, window tinting, and paint protection film (PPF) services. The application showcases premium automotive services with a sophisticated, high-end design approach inspired by luxury automotive brands like Porsche and BMW.

The project is a full-stack React application with Express backend, featuring a modern component-based architecture focused on creating an immersive visual experience for potential customers exploring premium car protection services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library (New York style variant) for consistent, customizable UI components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming supporting light/dark modes

**Design Philosophy**
- Premium, luxury automotive aesthetic drawing from high-end configurators
- Typography system using Space Grotesk (display) and Inter (body) fonts
- Sophisticated micro-interactions with elevation effects (hover-elevate, active-elevate-2)
- Mobile-first responsive design with breakpoint-specific layouts

**Page Structure**
- Home page with hero sections and service cards
- Dedicated service pages (Ceramic Coating, Paint Correction, Window Tinting, PPF, Motorcycle Protection)
- Package comparison page with pricing tiers
- Reusable components for heroes, pricing cards, process timelines, before/after sliders

**Key Features**
- Interactive before/after image slider for showcasing paint correction results
- Savings calculator for window tinting ROI demonstration
- Quote calculator for custom service packages
- Film comparison tools for tinting options
- Contact forms with validation using React Hook Form and Zod

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- TypeScript throughout for type safety
- Development and production build scripts using tsx and esbuild

**Code Organization**
- Minimal backend implementation with placeholder routes in `server/routes.ts`
- Storage abstraction interface (IStorage) with in-memory implementation (MemStorage)
- Shared schema definitions between client and server in `shared/schema.ts`

**Development Experience**
- Custom Vite middleware integration for seamless dev server experience
- Request logging middleware for API debugging
- Hot module replacement in development

### Data Architecture

**Database Setup**
- Drizzle ORM for type-safe database operations
- PostgreSQL as the target database (configured via Neon serverless driver)
- Schema-first approach with Drizzle migrations
- Currently includes basic user schema as a starting point

**Data Models**
- Users table with UUID primary keys, username, and password fields
- Zod schemas for runtime validation of insert operations
- Type inference from Drizzle schemas for TypeScript support

**Important Note**: The database is configured for PostgreSQL through Drizzle, but database functionality is not yet fully implemented. The application currently uses in-memory storage (MemStorage class) for any data operations.

### Styling System

**Tailwind Configuration**
- Custom border radius values (lg: 9px, md: 6px, sm: 3px)
- Extensive color system using HSL with CSS variables for dynamic theming
- Custom elevation utilities (hover-elevate, active-elevate-2) for interactive states
- Responsive spacing scale based on Tailwind's default units (2, 4, 8, 12, 16, 20, 24, 32)

**Design Tokens**
- Primary, secondary, muted, accent, and destructive color variants
- Each color variant includes DEFAULT, foreground, and border tokens
- Card and popover specific color overrides
- Automatic border computation for opaque buttons

**Component Styling Patterns**
- Card components with subtle shadows and borders
- Buttons with variant-based styling (default, destructive, outline, secondary, ghost)
- Form inputs with consistent height (h-9) matching button heights
- Hover and active states using CSS variable-based elevation overlays

## External Dependencies

### UI & Interaction Libraries
- **Radix UI**: Comprehensive collection of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, tabs, toast, tooltip, etc.)
- **embla-carousel-react**: Touch-friendly carousel component
- **cmdk**: Command menu interface component
- **lucide-react**: Icon library for consistent iconography
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod validation

### Data & State Management
- **@tanstack/react-query**: Server state synchronization and caching
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-zod**: Integration for generating Zod schemas from Drizzle schemas
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon

### Styling & Utilities
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: For creating variant-based component APIs
- **clsx** & **tailwind-merge**: Utility for conditional classNames
- **date-fns**: Date manipulation and formatting

### Development Tools
- **Replit-specific plugins**: Runtime error modal, cartographer, dev banner for Replit environment
- **TypeScript**: Type safety across the entire stack
- **PostCSS** & **Autoprefixer**: CSS processing pipeline

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store for Express (currently unused but configured)
- **express-session**: Session middleware (prepared for future authentication)

### Asset Management
- Images stored in `attached_assets` directory with Vite alias for imports
- Generated AI images for service pages and hero sections
- Logo assets in WebP format for performance