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

Status: Pending

### Pages to Port
- [ ] Home (`/`) - app/page.tsx
- [ ] New Car Protection (`/new-car-protection`) - app/new-car-protection/page.tsx
- [ ] Paint Correction (`/paint-correction`) - app/paint-correction/page.tsx
- [ ] Window Tinting (`/window-tinting`) - app/window-tinting/page.tsx
- [ ] Stonechip Protection (`/stonechip-protection`) - app/stonechip-protection/page.tsx
- [ ] Motorcycle Protection (`/motorcycle-protection`) - app/motorcycle-protection/page.tsx
- [ ] Packages (`/packages`) - app/packages/page.tsx
- [ ] Gallery (`/gallery`) - app/gallery/page.tsx
- [ ] Blog index (`/blog`) - app/blog/page.tsx
- [ ] Blog post (`/blog/[slug]`) - app/blog/[slug]/page.tsx
- [ ] Not Found - app/not-found.tsx

### Components to Port
- [ ] Hero.tsx
- [ ] AnimatedLogo.tsx
- [ ] BeforeAfterSlider.tsx
- [ ] ContactSection.tsx (UI only, backend deferred)
- [ ] FAQ.tsx
- [ ] FeaturedArticles.tsx
- [ ] GoogleReviewSummary.tsx
- [ ] PricingCard.tsx
- [ ] ProcessTimeline.tsx
- [ ] QuoteCalculator.tsx (UI only, backend deferred)
- [ ] RelatedServices.tsx
- [ ] SavingsCalculator.tsx
- [ ] ServiceCard.tsx
- [ ] SEO.tsx (convert to Next.js metadata)
- [ ] StructuredData.tsx (convert to Next.js JSON-LD)
- [ ] Testimonials.tsx
- [ ] TintComparison.tsx
- [ ] TrustBadges.tsx
- [ ] TypewriterText.tsx
- [ ] UrgencyBanner.tsx
- [ ] WelcomeVideo.tsx

### SSR Best Practices (CRITICAL)
- [ ] Keep pages as SERVER components by default
- [ ] Only add `'use client'` to interactive PARTS, not whole pages
- [ ] Pass icon NAMES (strings) in data, map to components in client code
- [ ] Export `generateMetadata` or `metadata` for SEO on every page
- [ ] Use `<Image>` from next/image, not `<img>`
- [ ] Use `<Link>` from next/link, not `<a>` for internal links
- [ ] Use `<a href="tel:">` for phone links, not onClick handlers

### Migration Notes
- Replace `useLocation` with `usePathname`
- Split pages: server wrapper (metadata, JSON-LD) + client component (interactive)
- Wouter `Link` → Next.js `Link`
- Phone/email: Use `<a href="tel:...">` not `onClick`

---

## Phase 5: Assets

Status: Pending

- [ ] Create `public/images/` structure
- [ ] Copy images from `attached_assets/` (~89 images)
- [ ] Rename images with cleaner names
- [ ] Update image references to `/images/...`
- [ ] Add favicon to `public/`
- [ ] Configure robots.txt

---

## Phase 6: SEO

Status: Pending

- [ ] Add metadata to all pages
- [ ] Configure Open Graph
- [ ] Add JSON-LD schema (LocalBusiness, Service)
- [ ] Configure sitemap generation
- [ ] Ensure canonical URLs

---

## Phase 7: Services (Frontend Code Only)

Status: Pending

Note: These are DEFERRED to Phase B (backend.md). This phase only includes frontend preparation.

- [ ] Prepare ContactSection for future API integration
- [ ] Prepare QuoteCalculator for future API integration
- [ ] Create .env.example with placeholder variables

---

## Phase 8: Testing

Status: Pending

### Mobile-First Verification
- [ ] Header: Logo + Hamburger + CTA visible at 375px
- [ ] Hero: Content readable, natural height
- [ ] Navigation: Hamburger works, menu opens/closes
- [ ] CTAs: All buttons visible on mobile
- [ ] Touch targets: ≥44px
- [ ] No horizontal scroll

### Visual Testing
| Page | Mobile (375px) | Tablet (768px) | Desktop (1024px) |
|------|----------------|----------------|------------------|
| Home | [ ] | [ ] | [ ] |
| New Car Protection | [ ] | [ ] | [ ] |
| Paint Correction | [ ] | [ ] | [ ] |
| Window Tinting | [ ] | [ ] | [ ] |
| Stonechip Protection | [ ] | [ ] | [ ] |
| Motorcycle Protection | [ ] | [ ] | [ ] |
| Packages | [ ] | [ ] | [ ] |
| Gallery | [ ] | [ ] | [ ] |
| Blog | [ ] | [ ] | [ ] |
| 404 | [ ] | [ ] | [ ] |

### Functional Testing
- [ ] All navigation links work
- [ ] Forms show correct UI (submission deferred)
- [ ] Interactive features work
- [ ] Mobile menu works
- [ ] 404 page displays

### Build Testing
- [ ] `npm run build` completes
- [ ] All pages listed as static
- [ ] No TypeScript errors

---

## Phase 9: Replit Setup

Status: Pending

- [ ] Configure dual-platform next.config.js
- [ ] Update package.json scripts (port 5000)
- [ ] Create .replit configuration
- [ ] Test on Replit sandbox
- [ ] Connect to GitHub

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
