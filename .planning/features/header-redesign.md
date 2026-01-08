# Header Redesign

**Created**: 2026-01-08
**Type**: enhancement
**Status**: Complete

## Summary
Redesign the navigation header with cleaner styling: change CTA button text, simplify hover effects to underline only, uppercase menu items, reorder with DETAILING first, consolidate Motorcycle/Packages/Gallery into "More" dropdown, and increase font size.

## Scope
- **Impact**: Low
- **Files**: 1 (Navigation.tsx)
- **Components**: Navigation

## Changes Requested

1. **CTA Button**: "Book Now" → "Get a Quote"
2. **Hover Effects**: Remove sliding highlight background, keep only underline
3. **Text Case**: ALL CAPS for menu items
4. **Menu Order**: DETAILING first
5. **Dropdown**: Motorcycle, Packages, Gallery → "More" dropdown
6. **Font Size**: Increase menu text slightly (text-sm → text-base)
7. **Header Expand/Shrink**: Taller at top, shrinks on scroll
8. **Logo Alignment**: Within max-w-7xl container (not edge-to-edge)

## Phases

### Phase 1: Button & Text Changes
- [x] Change "Book Now" to "Get a Quote"
- [x] Make all nav labels uppercase
- [x] Move DETAILING to first position
- [x] Increase font size from text-sm to text-base

### Phase 2: Simplify Hover Effects
- [x] Remove sliding highlight background div
- [x] Remove hoveredIndex state and effects
- [x] Add underline-only hover effect

### Phase 3: Add "More" Dropdown
- [x] Create dropdown for Motorcycle, Packages, Gallery
- [x] Style dropdown to match site theme
- [x] Handle mobile menu (keep items separate)

### Phase 4: Testing
- [x] Test desktop navigation
- [x] Test mobile menu
- [x] Verify all links work

## Dependencies
- None (self-contained component change)

## Notes
- Keep mobile menu as flat list (no dropdown needed)
- Maintain accessibility for dropdown
