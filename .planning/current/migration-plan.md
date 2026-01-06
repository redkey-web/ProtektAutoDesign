---
type: migration-plan
status: active
project: ProtektAutoDesign
created: 2025-12-11
updated: 2025-12-11
source_framework: Vite + Express
target_framework: Next.js 14
---

# Migration Plan: ProtektAutoDesign

## Project Info

- **Source Path**: /Users/redkey/Documents/NEXUS/RED-KEY/websites/ProtektAutoDesign
- **Source Framework**: Vite + Express (TypeScript, Replit-configured)
- **Target**: Next.js 14 (App Router) + Vercel
- **Estimated Total**: ~3.5 hours

## Codebase Summary

| Category | Count | Notes |
|----------|-------|-------|
| Pages | 11 | Home, services, packages, gallery, blog |
| Components | 25 | Custom + 44 shadcn/ui |
| API Routes | 5 | Blog CRUD (Express) |
| Total LOC | ~11,000 | Approximate |

## Services

Existing: None
Adding: SendGrid (email), Turnstile (spam protection)

---

## Phase 0: Detection & Decisions - COMPLETE

### Placeholders Found
| Feature | Location | What's Missing | Decision |
|---------|----------|----------------|----------|
| Contact form | ContactSection.tsx:16-21 | API route, email sending | Defer to Phase B |
| Quote calculator | QuoteCalculator.tsx:228-235 | Submission backend | Defer to Phase B |

### Decision Summary

**Frontend Phase (A) will include:**
- [x] All pages and components
- [x] Placeholders (UI only): Contact form, Quote calculator
- [x] Novel patterns: None detected

**Backend Phase (B) deferred:**
- [ ] SendGrid email integration
- [ ] Turnstile spam protection
- [ ] Contact form API route
- [ ] Quote request API route (optional)

**Infrastructure Phase (C) deferred:**
- [ ] DNS configuration
- [ ] Domain verification
- [ ] Environment variables in Vercel

---

## Phase 1: Analysis - COMPLETE

- [x] Scan codebase structure
- [x] Count pages and components
- [x] Identify dependencies
- [x] Detect existing services
- [x] Calculate time estimate

---

## Phase 2: Project Setup

Status: COMPLETE

- [x] Initialize Next.js (`npm install next`)
- [x] Configure TypeScript (`tsconfig.json`)
- [x] Set up path aliases (`@/*`)
- [x] Create `src/app/` directory structure
- [x] Configure Tailwind CSS for app directory
- [x] Create root layout.tsx
- [x] Verify: `npm run build` - SUCCESS

---

## Phase 3: Core Infrastructure

Status: COMPLETE

- [x] Port global styles to `src/app/globals.css`
- [x] Port Navigation component (replace wouter with next/link)
- [x] Port Footer component
- [x] Port TrustTicker component
- [x] Port StickyPhoneButton component
- [x] Copy shadcn/ui components to `src/components/ui/`
- [x] Create `src/lib/utils.ts`
- [x] Verify: `npm run dev`

---

## Phase 4: Page Migration

Status: COMPLETE

### Pages to Port
- [x] Home (`/`) - app/page.tsx
- [x] New Car Protection (`/new-car-protection`) - app/new-car-protection/page.tsx
- [x] Paint Correction (`/paint-correction`) - app/paint-correction/page.tsx
- [x] Window Tinting (`/window-tinting`) - app/window-tinting/page.tsx
- [x] Stonechip Protection (`/stonechip-protection`) - app/stonechip-protection/page.tsx
- [x] Motorcycle Protection (`/motorcycle-protection`) - app/motorcycle-protection/page.tsx
- [x] Packages (`/packages`) - app/packages/page.tsx
- [x] Gallery (`/gallery`) - app/gallery/page.tsx
- [x] Blog index (`/blog`) - app/blog/page.tsx
- [x] Blog post (`/blog/[slug]`) - app/blog/[slug]/page.tsx
- [x] Not Found - app/not-found.tsx

### Components to Port
- [x] Hero.tsx
- [x] AnimatedLogo.tsx (not needed - simplified logo in navigation)
- [x] BeforeAfterSlider.tsx
- [x] ContactSection.tsx (UI only, backend deferred)
- [x] FAQ.tsx
- [x] FeaturedArticles.tsx
- [x] GoogleReviewSummary.tsx
- [x] PricingCard.tsx
- [x] ProcessTimeline.tsx
- [x] QuoteCalculator.tsx (UI only, backend deferred)
- [x] RelatedServices.tsx
- [x] SavingsCalculator.tsx (integrated into pages)
- [x] ServiceCard.tsx
- [x] SEO.tsx (converted to Next.js metadata)
- [x] StructuredData.tsx (converted to Next.js JSON-LD)
- [x] Testimonials.tsx
- [x] TintComparison.tsx
- [x] TrustBadges.tsx
- [x] TypewriterText.tsx (simplified - static text used)
- [x] UrgencyBanner.tsx
- [x] WelcomeVideo.tsx

### SSR Best Practices (CRITICAL)
- [x] Keep pages as SERVER components by default
- [x] Only add `'use client'` to interactive PARTS, not whole pages
- [x] Pass icon NAMES (strings) in data, map to components in client code
- [x] Export `generateMetadata` or `metadata` for SEO on every page
- [x] Use `<Image>` from next/image, not `<img>`
- [x] Use `<Link>` from next/link, not `<a>` for internal links
- [x] Use `<a href="tel:">` for phone links, not onClick handlers

### Migration Notes
- Replace `useLocation` with `usePathname`
- Split pages: server wrapper (metadata, JSON-LD) + client component (interactive)
- Wouter `Link` → Next.js `Link`
- Phone/email: Use `<a href="tel:...">` not `onClick`

---

## Phase 5: Assets

Status: COMPLETE

- [x] Create `public/images/` structure
- [x] Copy images from `attached_assets/` (59 images)
- [x] Rename images with cleaner names
- [x] Update image references to `/images/...`
- [x] Add favicon to `public/` (favicon.webp)
- [x] Configure robots.txt

---

## Phase 6: SEO

Status: COMPLETE

- [x] Add metadata to all pages
- [x] Configure Open Graph
- [x] Add JSON-LD schema (LocalBusiness, Service)
- [x] Configure sitemap generation (src/app/sitemap.ts)
- [x] Ensure canonical URLs (metadataBase + alternates)

---

## Phase 7: Services (Frontend Code Only)

Status: COMPLETE

Note: These are DEFERRED to Phase B (backend.md). This phase only includes frontend preparation.

- [x] Prepare ContactSection for future API integration (using alert, ready for API)
- [x] Prepare QuoteCalculator for future API integration (using alert, ready for API)
- [x] Create .env.example with placeholder variables

---

## Phase 8: Testing

Status: COMPLETE

### Mobile-First Verification
- [x] Header: Logo + Hamburger + CTA visible at 375px
- [x] Hero: Content readable, natural height
- [x] Navigation: Hamburger works, menu opens/closes
- [x] CTAs: All buttons visible on mobile
- [x] Touch targets: ≥44px
- [x] No horizontal scroll

### Visual Testing
| Page | Mobile (375px) | Tablet (768px) | Desktop (1024px) |
|------|----------------|----------------|------------------|
| Home | [x] | [x] | [x] |
| Paint Correction | [x] | [x] | [x] |

Note: Core responsive breakpoints verified on Home and service page. All pages use same layout components.

### Functional Testing
- [x] All navigation links work
- [x] Forms show correct UI (submission deferred)
- [x] Interactive features work
- [x] Mobile menu works
- [x] 404 page displays

### Build Testing
- [x] `npm run build` completes
- [x] All 16 pages listed as static
- [x] No TypeScript errors

### Issues Fixed During Testing
- Navigation z-index increased to z-[100] to stay above Vimeo iframe

---

## Phase 9: Replit Setup

Status: SKIPPED (per user request - deploying directly to Vercel)

- [~] Configure dual-platform next.config.js
- [~] Update package.json scripts (port 5000)
- [~] Create .replit configuration
- [~] Test on Replit sandbox
- [~] Connect to GitHub

---

## Phase 10: Vercel Deployment

Status: Pending

- [ ] Link Vercel project
- [ ] Deploy preview
- [ ] Test preview deployment
- [ ] Deploy production
- [ ] Verify production

Note: Environment variables for services will be set in Phase B/C after backend work.

---

## Phase 11: Cleanup

Status: Pending

- [ ] Move deprecated code to `_deprecated/`
- [ ] Update README.md
- [ ] Remove Vite dependencies from package.json
- [ ] Final build verification

---

## Issues Log

| Date | Issue | Status | Resolution |
|------|-------|--------|------------|
| | | | |

---

## Conversion Reference

| Vite | Next.js |
|------|---------|
| `import { Link } from 'wouter'` | `import Link from 'next/link'` |
| `useLocation()` | `usePathname()` from 'next/navigation' |
| `import.meta.env.VITE_*` | `process.env.NEXT_PUBLIC_*` |
| `<img src={imported}/>` | `<Image src="/images/..." width={} height={} />` |
| `@assets/...` | `/images/...` |

---

Last Updated: 2025-12-11
