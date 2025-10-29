# Protekt Auto Design Guidelines

## Design Approach

**Reference-Based Luxury Automotive Experience**

Drawing inspiration from premium automotive brands (Porsche, BMW configurators), luxury service providers (Net-a-Porter, Mr Porter), and award-winning agency sites (Active Theory, Locomotive). This approach emphasizes:
- Precision and technical excellence
- Immersive visual storytelling
- Sophisticated micro-interactions
- Premium, refined aesthetic that reflects high-end automotive detailing

## Typography System

**Bold Condensed Approach** - Aggressive Premium Automotive Feel

Inspired by high-performance automotive branding (similar to Instagram's "WHAT WE DO" graphic style), this typography system emphasizes:
- Maximum visual impact with bold, condensed letterforms
- Uppercase headings for commanding presence
- Clean, condensed body text for premium readability

**Font Stack:**
- **Display/Headings:** Bebas Neue - Ultra-bold, highly condensed display font for maximum impact
- **Body Text:** Barlow Condensed - Bold condensed sans-serif for clean, professional readability
- All headings are uppercase by default with tight letter-spacing (0.02em)

**Hierarchy Structure:**
- Hero Headlines (H1): 60-80px desktop (text-5xl to text-7xl), 36-48px mobile - Ultra-bold, uppercase, commanding
- Section Headers (H2): 48-60px desktop (text-4xl to text-6xl), 32-40px mobile - Bold, uppercase, authoritative  
- Subsection Titles (H3): 36-48px desktop (text-3xl to text-5xl), 24-32px mobile - Bold, uppercase, impactful
- Service Titles: 24-32px, weight 700-800, uppercase for consistency
- Body Copy: 16-18px, weight 500-600 (Barlow Condensed), generous line-height (1.6-1.8)
- Small Print/Captions: 12-14px, weight 400-500

**Typography Rules:**
- All headings use font-display (Bebas Neue) and are automatically uppercase
- Body text uses font-sans (Barlow Condensed) with medium-bold weights (500-700)
- Letter-spacing: Tight on headings (0.02em), normal on body
- Line-height: Tight on headings (1.1-1.2), generous on body (1.6-1.8)

## Layout & Spacing System

**Core Spacing Units:** Tailwind units of 2, 4, 8, 12, 16, 20, 24, 32
- Component internal spacing: p-4, p-6, p-8
- Section vertical rhythm: py-16, py-20, py-24, py-32 (desktop), py-12, py-16 (mobile)
- Content containers: max-w-7xl for full sections, max-w-6xl for content-focused areas
- Grid gaps: gap-4, gap-6, gap-8 depending on content density

**Layout Patterns:**
- Homepage: Full-width sections alternating between contained and edge-to-edge content
- Service Pages: Asymmetric hero layouts (60/40 splits), staggered content blocks
- Package Pages: Card-based grids with hover-lift effects

## Component Library

### Navigation
- Fixed header with backdrop blur effect on scroll
- Minimal navigation: Logo left, key service links center, CTA button (phone/book) right
- Mobile: Full-screen overlay menu with staggered fade-in animation for links
- Secondary sticky nav for service pages with section anchors

### Hero Sections

**Homepage Hero:**
- Full-viewport height (100vh) with cinematic video background (muted autoplay)
- Centered headline with subtitle overlay
- Dual CTA buttons with glass-morphism effect (blurred background)
- Scroll indicator animation at bottom
- Image overlay gradient for readability

**Service Page Heroes:**
- 70vh height with high-quality automotive detail photography
- Split layout: 60% image, 40% content block with semi-transparent backdrop
- Breadcrumb navigation integrated
- Quick stats or key benefits as floating cards

### Service Cards (Homepage)
- 3-column grid (desktop), 1-column stack (mobile)
- Each card: Large image (aspect-ratio 4:3), service title, brief description, "Learn More" link
- Hover state: Subtle scale transform (1.02), overlay opacity shift, image zoom effect
- Minimum card height for visual balance

### Pricing Cards
- Tiered presentation (e.g., Ceramic Professional → Graphene Professional → Full Packages)
- Each card contains:
  - Package name as header
  - Large price display
  - Bullet-point feature list with checkmark icons
  - Guarantee badge (e.g., "7-year guarantee")
  - Primary CTA button at bottom
- Recommended package: Elevated card with subtle shadow/border treatment
- Grid: 2-column for comparison pages, single column mobile

### Before/After Comparison Slider
- Interactive slider component for paint correction results
- Draggable divider with circular handle
- Labels "Before" and "After" positioned at image corners
- Full-width on mobile, 80% container width on desktop

### Process Timeline (Paint Correction Page)
- Vertical timeline on mobile, horizontal on desktop
- Each stage as a card with:
  - Stage number badge
  - Title and description
  - Icon representing the process
  - Estimated time indicator
- Connected with subtle line/path graphic

### Package Comparison Tool
- Interactive table or card comparison layout
- Sticky header row with package names
- Feature rows with checkmarks/crosses
- Highlight differences between tiers
- "Select Package" CTA for each column

### Contact Section
- Split 50/50: Form left, map/info right (desktop), stacked (mobile)
- Form inputs: Floating labels, subtle borders, focus states with underline accent
- Map: Embedded Google Maps with custom marker
- Business hours, phone, email displayed as formatted list with icons
- Instagram feed integration: 3-4 recent posts in grid

### Footer
- Multi-column layout: Services list, Quick Links, Contact Info, Social Media
- Newsletter signup with inline form
- Business credentials/certifications as badge images
- Copyright and legal links at bottom

## Animations & Interactions

**Scroll-Triggered Animations:**
- Fade-up reveals for content sections (staggered for grouped elements)
- Image parallax: Background images move slower than foreground content
- Number counters for statistics (animate from 0 to final value on viewport entry)
- Progress bars for package features fill on scroll

**Micro-Interactions:**
- Button hover: Slight scale (1.05), shadow depth increase
- Card hover: Lift effect with shadow, subtle rotation (-2deg)
- Image hover: Slow zoom (1.1x over 0.4s)
- Form focus: Input border glow, label color shift
- Magnetic cursor effect for CTAs (desktop only)

**Page Transitions:**
- Smooth fade transitions between pages
- Hero image scale-in on page load
- Text split animations for main headlines (words appear sequentially)

**Performance Considerations:**
- Use CSS transforms (translate, scale) over position changes
- Implement intersection observer for scroll triggers
- Lazy load images below fold
- Optimize video compression for hero backgrounds
- Maximum 3-4 concurrent animations per viewport

## Images

**Hero Images (Required):**
- Homepage: Full-width cinematic video or high-res image of luxury car with fresh coating (wet/glossy look), shot in premium garage setting
- Service Pages: Close-up detail shots showing coating application, paint texture, or finished results
- All hero images should showcase actual work/vehicles with professional photography quality

**Supporting Images:**
- Service cards: Square crop (1:1) showing specific service (ceramic coating application, paint correction before/after, tinted window)
- Process/timeline: Step-by-step photography or icons
- Gallery sections: Varied aspect ratios in masonry layout (Instagram feed style)
- Team/workshop: Environmental shots showing professional workspace

**Image Treatment:**
- Use subtle overlay gradients on hero images for text legibility
- Apply consistent filters for brand cohesion (slight desaturation + contrast boost for premium feel)
- Implement lazy loading for all images except above-fold hero
- Provide 2x retina assets where possible

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids, condensed spacing)
- Desktop: > 1024px (full multi-column layouts, expanded spacing)

**Mobile Optimizations:**
- Hamburger menu with full-screen overlay
- Touch-optimized button sizes (min 44px touch targets)
- Simplified hero sections (remove parallax, reduce height to 60vh)
- Stack all multi-column layouts
- Reduce animation complexity (disable parallax, use simpler fades)
- Compress video quality for mobile bandwidth

## Accessibility

- Minimum text contrast ratio 4.5:1 for body, 3:1 for large text
- Focus indicators visible on all interactive elements (2px outline)
- Keyboard navigation support for all interactive components
- Alt text for all images describing content/function
- Form labels programmatically associated with inputs
- Skip navigation link for keyboard users
- Reduced motion preference: Disable animations when requested

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Image formats: WebP with JPEG fallback
- Critical CSS inlined, deferred non-critical styles
- Font loading strategy: Font-display swap with fallback system fonts