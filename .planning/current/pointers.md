# Key File Pointers

**Last Updated**: 2025-12-11

## By Task Type

### Understanding Overall Structure
- Entry Point (Vite): `client/src/main.tsx`
- App Component: `client/src/App.tsx`
- Routes: `client/src/App.tsx` (wouter Switch)
- Root Layout: TBD (`src/app/layout.tsx` after migration)
- Global Config: `vite.config.ts` (will become `next.config.js`)
- Package Info: `package.json`

### Working with Pages
- Home: `client/src/pages/Home.tsx`
- Service pages: `client/src/pages/[ServiceName].tsx`
- Blog: `client/src/pages/Blog.tsx`, `client/src/pages/BlogPost.tsx`
- 404: `client/src/pages/not-found.tsx`

### Working with Components
- Navigation: `client/src/components/Navigation.tsx`
- Footer: `client/src/components/Footer.tsx`
- Hero: `client/src/components/Hero.tsx`
- Contact Form: `client/src/components/ContactSection.tsx`
- Quote Calculator: `client/src/components/QuoteCalculator.tsx`

### Working with Forms
- Contact: `client/src/components/ContactSection.tsx`
- Quote: `client/src/components/QuoteCalculator.tsx`
- Note: Both currently use `alert()` - backend deferred

### Working with Assets
- Images: `attached_assets/`
- Logo: `attached_assets/Protekt Logo_1761708306237.webp`
- Generated images: `attached_assets/generated_images/`

### Working with Styling
- Tailwind Config: `tailwind.config.ts`
- PostCSS: `postcss.config.js`
- Component styles: Inline Tailwind classes

### Working with API
- Express Routes: `server/routes.ts`
- Express Server: `server/index.ts`
- Database Storage: `server/storage.ts` (if exists)
- Schema: `shared/schema.ts`

### Deployment
- Replit Config: `.replit`
- Vercel Config: TBD (`vercel.json` after setup)
- Env Template: TBD (`.env.example`)

## High-Impact Files
Files that affect many parts of the site:

| File | Impact |
|------|--------|
| App.tsx | All routing, global providers |
| Navigation.tsx | All pages (header) |
| Footer.tsx | All pages (footer) |
| globals.css | All styling |
| tailwind.config.ts | All Tailwind classes |
| layout.tsx (after migration) | Root layout for all pages |

## After Migration - New Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home
│   ├── globals.css         # Global styles
│   ├── new-car-protection/
│   │   └── page.tsx
│   ├── paint-correction/
│   │   └── page.tsx
│   ├── window-tinting/
│   │   └── page.tsx
│   ├── stonechip-protection/
│   │   └── page.tsx
│   ├── motorcycle-protection/
│   │   └── page.tsx
│   ├── packages/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/
│   │       └── page.tsx    # Blog post
│   ├── api/                # API routes (Phase B)
│   │   └── contact/
│   │       └── route.ts
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── TrustTicker.tsx
│   │   └── StickyPhoneButton.tsx
│   ├── ui/                 # shadcn/ui
│   └── [feature components]
├── lib/
│   ├── utils.ts
│   └── email/              # Phase B
│       └── sendgrid.ts
└── public/
    └── images/
```
