# Codebase Analysis

**Last Updated**: 2025-12-11
**Analyzed By**: webdev:port

## Structure Overview
- **Framework**: Vite + Express (TypeScript)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: Wouter (client-side SPA)
- **Database**: Drizzle ORM + Neon (PostgreSQL serverless)
- **Platform**: Replit-configured

## File Counts
| Type | Count | Location |
|------|-------|----------|
| Pages | 11 | client/src/pages/ |
| Components | 25 | client/src/components/ |
| UI Components | 44 | client/src/components/ui/ |
| API Routes | 5 | server/routes.ts |
| Hooks | 2 | client/src/hooks/ |

## Total LOC
- Pages: ~2,000
- Components: ~6,000
- UI Components: ~3,000
- **Total**: ~11,000

## Pages Inventory

| Page | Path | Route | LOC (est) |
|------|------|-------|-----------|
| Home | pages/Home.tsx | / | ~300 |
| NewCarProtection | pages/NewCarProtection.tsx | /new-car-protection | ~250 |
| PaintCorrection | pages/PaintCorrection.tsx | /paint-correction | ~250 |
| WindowTinting | pages/WindowTinting.tsx | /window-tinting | ~250 |
| StonechipProtection | pages/StonechipProtection.tsx | /stonechip-protection | ~250 |
| MotorcycleProtection | pages/MotorcycleProtection.tsx | /motorcycle-protection | ~250 |
| Packages | pages/Packages.tsx | /packages | ~200 |
| Gallery | pages/Gallery.tsx | /gallery | ~150 |
| Blog | pages/Blog.tsx | /blog | ~150 |
| BlogPost | pages/BlogPost.tsx | /blog/:slug | ~200 |
| NotFound | pages/not-found.tsx | * | ~50 |

## Components Inventory

### Layout Components
- Navigation.tsx - Header with mobile menu
- Footer.tsx - Site footer
- TrustTicker.tsx - Scrolling trust badges
- StickyPhoneButton.tsx - Fixed CTA button

### Hero & Content
- Hero.tsx - Page hero sections
- AnimatedLogo.tsx - Logo animation
- TypewriterText.tsx - Typing animation

### Service Components
- ServiceCard.tsx - Service display card
- PricingCard.tsx - Pricing display
- ProcessTimeline.tsx - Step-by-step process
- RelatedServices.tsx - Related service links

### Interactive Components
- ContactSection.tsx - Contact form (placeholder backend)
- QuoteCalculator.tsx - Price calculator (placeholder backend)
- BeforeAfterSlider.tsx - Image comparison
- SavingsCalculator.tsx - Cost savings calc
- TintComparison.tsx - Tint level comparison

### Trust & Social Proof
- Testimonials.tsx - Customer reviews
- GoogleReviewSummary.tsx - Google reviews display
- TrustBadges.tsx - Certification badges

### SEO
- SEO.tsx - Meta tags (React Helmet style)
- StructuredData.tsx - JSON-LD schema

### Other
- FAQ.tsx - Accordion FAQ
- FeaturedArticles.tsx - Blog preview
- UrgencyBanner.tsx - Promotional banner
- WelcomeVideo.tsx - Video embed

## Dependencies

### Keep (Next.js compatible)
- @radix-ui/* (shadcn/ui)
- @tanstack/react-query
- framer-motion
- lucide-react
- react-icons
- tailwind-merge
- class-variance-authority
- embla-carousel-react
- recharts
- zod

### Remove (Vite-specific)
- @replit/vite-plugin-*
- @vitejs/plugin-react
- vite

### Add (Next.js)
- next
- @next/font (optional)

### Review (may need adjustment)
- wouter → next/link
- react-helmet → next metadata
- drizzle-orm (keep if using API routes)

## Assets

Location: `attached_assets/`
Count: 89 files

Types:
- .png: 70+ images
- .webp: 10+ optimized images
- .jpeg: 5+ photos
- .md: 2 content files

Note: Images have timestamp suffixes (e.g., `image_1764292789936.png`)
Recommend: Rename to semantic names during migration

## API Routes (Express)

| Method | Path | Purpose |
|--------|------|---------|
| GET | /api/posts | List all blog posts |
| GET | /api/posts/:slug | Get single post |
| POST | /api/posts | Create post |
| PATCH | /api/posts/:slug | Update post |
| DELETE | /api/posts/:slug | Delete post |

Note: Blog API uses Drizzle + Neon. Consider:
- Keep as Next.js API routes (if blog is dynamic)
- Convert to static generation (if blog is static content)

## Environment Variables

Currently used:
- DATABASE_URL (Neon PostgreSQL)

Need to add for services:
- SENDGRID_API_KEY
- TURNSTILE_SECRET_KEY
- NEXT_PUBLIC_TURNSTILE_SITE_KEY
