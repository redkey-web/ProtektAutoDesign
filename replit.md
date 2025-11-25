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
- Premium, luxury automotive aesthetic drawing from high-end configurators and Awwwards.com winners
- Typography system using Bebas Neue (headings) and Barlow Condensed (body) fonts for aggressive premium automotive feel
- Brand colors: Teal/cyan accent (#00BCD4), dark/black backgrounds
- Premium glass-morphism effects: CTA buttons with 100% transparent backgrounds on hover with backdrop blur and neon outlines
- Navigation transparency: 80% transparent (bg-black/20) when scrolled with backdrop blur
- Sophisticated micro-interactions with elevation effects (hover-elevate, active-elevate-2)
- Mobile-first responsive design with breakpoint-specific layouts

**Page Structure**
- Home page with hero sections and service cards
- Dedicated service pages (Ceramic Coating, Paint Correction, Window Tinting, PPF, Motorcycle Protection)
- Package comparison page with pricing tiers
- Gallery page showcasing work portfolio with filter system and lightbox viewer
- Reusable components for heroes, pricing cards, process timelines, before/after sliders

**Key Features**
- Vimeo hero background video (autoplay, muted) with negative margins to crop letterbox bars
- YouTube welcome section video with custom play button overlay
- Interactive before/after image slider for showcasing paint correction results
- Premium glass-morphism hover effects on all CTA buttons (100% transparent with backdrop blur)
- Navigation with 80% transparency (bg-black/20) when scrolled, items go 100% transparent on hover
- Fully clickable service tiles (entire card wrapped in Link component)
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
- Premium glass-morphism hover effects using `hover:!bg-transparent hover:backdrop-blur-md` with `!important` overrides to achieve 100% transparent backgrounds
- Navigation items use `hover:!bg-transparent` to override shadcn Button defaults
- Form inputs with consistent height (h-9) matching button heights
- Hover and active states using CSS variable-based elevation overlays

**Design Implementation Notes**
- `!important` is used strategically to override shadcn Button component defaults for premium glass-morphism effects
- Hero video uses negative margins (`-mt-[120px] -mb-[120px]`) to crop Vimeo letterbox bars
- Transparency notation: `bg-black/20` = 20% opacity = 80% transparent
- Header enlarged logo uses negative margins (`-my-2`) for visual prominence
- HTML/body have explicit `margin: 0; padding: 0` to eliminate spacing issues

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

## Recent Changes (November 2024)

### SEO & Conversion Optimization Implementation

**SEO Infrastructure**
- Created `SEO.tsx` component with dynamic meta tags (title, description, keywords, Open Graph, canonical URLs)
- Implemented unique page titles and descriptions for all 7 pages targeting distinct keywords to prevent cannibalization
  - Homepage: "vehicle paint protection Sydney"
  - Ceramic Coating: "ceramic coating Sydney" + "graphene coating Sydney"
  - Paint Correction: "paint correction Sydney" + "cut and polish Sydney"
  - PPF: "paint protection film Sydney" + "stone chip protection"
  - Window Tinting: "window tinting Sydney" + "ceramic window tint"
  - Motorcycle: "motorcycle ceramic coating Sydney"
  - Packages: "car protection packages Sydney"
- Added `StructuredData.tsx` component with AutomotiveBusiness schema including location (24 George Street, Clyde NSW 2142), hours, services, and ratings

**Conversion Optimization Components**
- `TrustBadges.tsx` - Displays trust signals on homepage hero (4.9 Google rating, 10+ years, 1000+ customers, certified applicators)
- `Testimonials.tsx` - Social proof section with 4 customer reviews and aggregate Google rating
- `UrgencyBanner.tsx` - Scarcity/deadline messaging deployed to all service pages with contextual urgency messages
- `RelatedServices.tsx` - Internal linking component on service pages with SEO-friendly anchor text for cross-linking

**Enhanced Hero Component**
- Added dual CTA support: primary action button + phone CTA with clickable phone number (02) 8606 2842
- Phone CTA deployed across all pages (homepage and 6 service pages) for consistent conversion opportunities
- New props: `showPhoneCta`, `showTrustBadges` for flexible configuration

**Page Updates**
- All pages now include SEO metadata, phone CTAs, and urgency messaging for consistent conversion optimization
- Homepage: added TrustBadges and Testimonials sections
- Service pages: added UrgencyBanner and RelatedServices for internal linking
- Comprehensive FAQ sections maintained on all pages

**Business Information**
- Location: 24 George Street, Clyde, NSW 2142
- Phone: (02) 8606 2842
- Hours: Mon-Fri 8am-5pm, Sat 8am-2pm

### Gallery Page Implementation (November 2024)

**Gallery Features**
- Created dedicated `/gallery` route with filterable image gallery
- 20 professional photos showcasing services and team at work
- Category filter system: All, Team at Work, Ceramic Coating, Paint Correction, Window Tinting, PPF, Motorcycle, Full Packages
- Lightbox modal for full-size image viewing with overlay captions
- Responsive grid layout with hover effects and smooth transitions
- SEO optimized with unique meta tags for gallery page

**Ceramic Coating Page Gallery (November 2024)**
- Added dedicated gallery section featuring 9 ceramic coating showcase images
- Features: Blue Subaru machine polishing, Red car Rupes polish, Red Kia Stinger under heat lamps, Blue Mazda CX-5, Mercedes-Benz AMG, Silver Mitsubishi Pajero, Black Minivan, BMW M3, professional application process
- Responsive 3-column grid with hover effects and image scaling
- Gradient overlays with vehicle details appearing on hover
- All 9 images also added to main Gallery page with proper categorization (6 as "Ceramic Coating", 3 as "Team at Work")

**PPF Page Gallery (November 2024)**
- Added dedicated gallery section featuring 11 professional PPF installation images
- Features: Blue car hood wet installation, Mercedes wheel detail, heat-forming process, Ford Mustang on lift, squeegee technique, white Porsche application, Porsche GT3, installation closeups, BMW workshop, VW Golf R, Honda S2000
- Responsive 3-column grid with hover effects and image scaling
- Gradient overlays with installation details appearing on hover
- All 11 images also added to main Gallery page with proper categorization (7 as "PPF", 4 as "Team at Work")

**Window Tinting Page Enhancement**
- Added professional team work photo showing window tint application process
- Window tinting gallery section with 5 professional images (RAM TRX, Tesla Model 3, workshop action shot, Toyota Camry views)
- Implemented two-column layout: Additional Benefits section + team work image
- Image features gradient overlay with caption: "Expert Precision Application - Our certified technicians ensure flawless results"
- All 5 window tinting images also added to main Gallery page
- Improved visual storytelling demonstrating professional service quality

**Paint Correction Page Gallery (November 2024)**
- Added dedicated gallery section featuring 10 premium vehicle images
- Supercars: White Lamborghini Huracan, Green Mercedes-AMG GT R, Red Ferrari 488, Black Lamborghini Gallardo, Red Porsche GT2 RS, White Subaru WRX STI
- Motorcycles: Black Ducati 900, Orange Harley-Davidson
- Additional: Precision taillight detail work, Silver Mitsubishi Pajero
- Responsive 3-column grid with hover effects and gradient overlays
- All 10 images also added to main Gallery page with proper categorization (7 as "Paint Correction", 2 as "Motorcycle", 1 as "Full Packages")

**Navigation Enhancement**
- Header logo fade-in effect on homepage only (invisible at top, gradually appears while scrolling past hero, fully visible at hero bottom)
- Logo always visible on all other pages for consistent branding
- Gallery added to main navigation menu for easy access