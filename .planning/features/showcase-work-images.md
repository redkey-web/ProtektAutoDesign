# Enhanced Work Image Showcase

**Created**: 2026-01-06
**Updated**: 2026-01-07
**Type**: enhancement
**Status**: Complete

## Summary

Redesign service pages to make work images more prominent and visually impactful. Currently, galleries are at the bottom of pages with small thumbnails. This enhancement will move work imagery up in the hierarchy, use larger formats, and integrate images more naturally throughout each page.

## Scope

- **Impact**: Medium-High
- **Files**: ~8 files (6 service pages + 1-2 new components)
- **Images Available**: 59 images across categories (PPF, motorcycle, cars, workshop)

## Analysis

### Current State
- Gallery section at bottom of pages (low prominence)
- Small thumbnails (h-64 / 256px height)
- Info only on hover (hidden by default)
- Before/After slider exists but could be more impactful
- Images not integrated into content sections

### Proposed Changes
1. **Hero-adjacent showcase** - Large featured work section right after hero
2. **Larger image formats** - Full-width or near-full-width displays
3. **Masonry/bento grid** - More dynamic visual layout
4. **Integrated images** - Images alongside content, not just in galleries
5. **Process photos** - Show workshop/application process

## Phases

### Phase 1: Create Showcase Components
- [x] Create `FeaturedWorkShowcase` component (large hero-style images)
- [x] Create `BentoImageGrid` component (masonry-style mixed sizes)
- [~] Create `ProcessGallery` component (workshop/application shots) - Deferred, BentoImageGrid covers this use case

### Phase 2: Service Page Image Mapping
- [x] Map available images to each service:
  - Paint Correction: lamborghini, ferrari, porsche, amg, etc.
  - PPF: ppf-*.png images (12 available)
  - Motorcycle: moto-*.png images (8 available)
  - Ceramic Coating: coating-application, ceramic-after, etc.
  - Window Tinting: window-tint-team, etc.
  - Packages: ram-showroom, tesla, workshop-action

### Phase 3: Page Restructuring
- [x] Paint Correction page - add FeaturedWork after hero
- [x] PPF/Stonechip page - add FeaturedWork after hero
- [x] Motorcycle page - add FeaturedWork after hero
- [x] Ceramic Coating page - add FeaturedWork after hero
- [x] Window Tinting page - add FeaturedWork after hero
- [x] Packages page - integrate more imagery

### Phase 4: Polish & Optimization
- [x] Add smooth animations/transitions (hover effects on images)
- [x] Ensure responsive at all breakpoints
- [x] Optimize image loading (priority, lazy)
- [x] Test visual hierarchy flow

## Component Designs

### FeaturedWorkShowcase
```
┌─────────────────────────────────────────┐
│  [Large Hero Image - Full Width]         │
│                                          │
│  Title overlay at bottom                 │
└─────────────────────────────────────────┘
┌─────────────┬─────────────┬─────────────┐
│ [Image 2]   │ [Image 3]   │ [Image 4]   │
│ Medium      │ Medium      │ Medium      │
└─────────────┴─────────────┴─────────────┘
```

### BentoImageGrid
```
┌─────────────────────┬─────────────┐
│                     │ [Small 1]   │
│    [Large 1]        ├─────────────┤
│                     │ [Small 2]   │
├─────────────┬───────┴─────────────┤
│ [Medium 1]  │      [Medium 2]     │
└─────────────┴─────────────────────┘
```

## Image Assignments

### Paint Correction
- Featured: white-lamborghini-huracan, green-amg-gtr
- Grid: red-ferrari-488, black-lamborghini-gallardo, red-porsche-gt2rs, white-subaru-sti
- Process: blue-subaru-polish, red-car-roof-polish

### PPF / Stonechip
- Featured: ppf-porsche-gt3, ppf-white-porsche
- Grid: ppf-blue-mustang, ppf-blue-hood, ppf-bmw-workshop, ppf-blue-golf-r
- Process: ppf-squeegee, ppf-red-car-heatgun, ppf-closeup

### Motorcycle
- Featured: moto-ducati-side, moto-harley-burgundy
- Grid: moto-white-honda, moto-ducati-rear, orange-harley, black-ducati-900
- Process: moto-workshop, moto-ppf-standard

### Ceramic Coating
- Featured: ceramic-after, coating-application
- Grid: white-lamborghini, blue-amg, blue-bmw-m3, tesla-white

### Window Tinting
- Featured: window-tint-team, camry-side
- Grid: camry-rear, black-minivan, silver-pajero

## Dependencies

- Next.js Image component (already in use)
- Tailwind CSS grid/flexbox
- Framer Motion (optional, for animations)

## Notes

- Keep page load performance in mind - use priority for above-fold images
- Consider lightbox for full-size viewing
- Maintain consistent aspect ratios within grids
- Ensure alt text is descriptive for SEO
