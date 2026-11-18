# ALUNE — Design System & UI/UX Architecture Specification

**Brand**: ALUNE  
**Industry**: Premium Sunglasses & Eyewear  
**Document Version**: 1.0.0 (Production Blueprint)

---

## 1. Brand Identity & Design Philosophy

ALUNE is a high-end luxury sunglasses house blending timeless Mediterranean sophistication with contemporary minimalism. The aesthetic bridges two primary design references:

1. **Editorial Restraint & Balance**:
   - Generous whitespace, refined margins, and strict visual silence allowing products to breathe.
   - Structured typographic hierarchy with stark contrast between grand display headlines and measured body text.
   - Subtle neutral borders, flat surfaces, and the avoidance of harsh shadows or artificial skeuomorphism.
2. **Product-Centric Commercial Clarity**:
   - Immediate focus on the silhouette, acetate textures, and tint of each sunglass frame.
   - Standardized 4:5 editorial and 1:1 square aspect ratios.
   - Direct, low-friction interactions (immediate WhatsApp concierge ordering, persistent local wishlist).

---

## 2. Color Palette & Token Definitions

The color system is rooted in deep Mediterranean teal, soft sun-washed ivory, and understated warm gold accenting drawn directly from the ALUNE emblem.

| Token Name | HEX Value | CSS Variable | Semantic Usage |
|---|---|---|---|
| **Primary** | `#14333A` | `--color-primary` | Main brand identity, primary buttons, major headings, dark footer |
| **Primary Hover** | `#1C424A` | `--color-primary-hover` | Button hovers, active navigational states |
| **Gold Accent** | `#B2A77E` | `--color-gold` | Fine badge borders, monogram accent, luxury highlights |
| **Background** | `#F7F5F0` | `--color-background` | Dominant warm ivory page background |
| **White / Surface** | `#FFFFFF` | `--color-surface` | Product cards, modals, clean flat containers |
| **Soft Surface** | `#EEECE7` | `--color-surface-secondary` | Image backgrounds, secondary banners, input fills |
| **Main Text** | `#212121` | `--color-text` | Primary body copy, descriptions, navigation labels |
| **Muted Text** | `#757575` | `--color-muted` | Secondary meta info, breadcrumbs, placeholder text |
| **Border** | `#DEDCD5` | `--color-border` | Subtle dividers, hair-line card borders |
| **Focus Ring** | `#426B70` | `--color-focus` | Accessible keyboard navigation indicator |
| **Error / Alert** | `#B42318` | `--color-error` | Validation feedback, out-of-stock or alert banners |

*Rules*:
- No saturated reds, bright blues, or random gradients.
- Gold (`#B2A77E`) is strictly an accent (stroke, badge, micro-detail) and never dominates full backgrounds.

---

## 3. Typography System

### 3.1 Typefaces
- **Latin (English & French)**: `League Spartan`, sans-serif (Weights: 300, 400, 500, 600, 700).
- **Arabic**: `Tajawal`, sans-serif (Weights: 300, 400, 500, 700).

### 3.2 Typographic Hierarchy & Scale

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| **Display / Hero** | `64px (4rem)` | `38px (2.375rem)` | 500 / 600 | 1.05 | `-0.02em` (Latin only) |
| **Page Title (H1)** | `48px (3rem)` | `32px (2rem)` | 500 / 600 | 1.15 | `-0.015em` (Latin only) |
| **Section Heading (H2)**| `36px (2.25rem)` | `26px (1.625rem)`| 500 / 600 | 1.2 | `-0.01em` (Latin only) |
| **Feature Heading (H3)**| `24px (1.5rem)` | `20px (1.25rem)` | 500 | 1.3 | `normal` |
| **Product Title** | `20px (1.25rem)` | `18px (1.125rem)` | 500 / 600 | 1.3 | `normal` |
| **Body Large** | `18px (1.125rem)` | `16px (1rem)` | 400 | 1.5 | `normal` |
| **Body Default** | `16px (1rem)` | `15px (0.9375rem)`| 400 | 1.5 | `normal` |
| **Small / Meta** | `14px (0.875rem)`| `13px (0.8125rem)`| 400 | 1.5 | `normal` |
| **Caption / Badge** | `12px (0.75rem)` | `11px (0.6875rem)`| 500 | 1.4 | `0.04em` (Uppercase) |
| **Button Label** | `14px (0.875rem)`| `14px (0.875rem)`| 600 | 1.4 | `0.02em` |
| **Navigation Link** | `14px (0.875rem)`| `15px (0.9375rem)`| 500 | 1.4 | `0.03em` |

*Arabic Rule*: Never apply negative letter-spacing to Arabic text (`letter-spacing: normal`). Ensure line-height in Arabic is at least `1.5` for all headings to avoid diacritic clipping.

---

## 4. Spacing, Layout & Responsive Grid

### 4.1 Spacing Scale Foundation (4px Base)
- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px
- `space-5`: 20px
- `space-6`: 24px
- `space-8`: 32px
- `space-10`: 40px
- `space-12`: 48px
- `space-16`: 64px
- `space-20`: 80px
- `space-24`: 96px
- `space-32`: 128px

### 4.2 Page Containers & Max-Widths
- **Max Content Container**: `1440px` (`max-w-[1440px] mx-auto`)
- **Wide Container**: `1320px`
- **Standard Text / Prose Container**: `840px`

### 4.3 Page Margins & Section Gaps
- **Desktop (>= 1024px)**:
  - Page Horizontal Padding: `48px` to `64px` (`px-8 lg:px-16`)
  - Section Vertical Spacing: `96px` (`py-24`)
- **Tablet (640px - 1023px)**:
  - Page Horizontal Padding: `32px` (`px-6 sm:px-8`)
  - Section Vertical Spacing: `72px` (`py-16`)
- **Mobile (< 640px)**:
  - Page Horizontal Padding: `20px` (`px-5`)
  - Section Vertical Spacing: `56px` (`py-12`)

### 4.4 Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1440px

---

## 5. Border Radius & Elevation Rules

### 5.1 Radius Tokens
- `xs`: `4px` (Small tags, badges)
- `sm`: `8px` (Inputs, textareas)
- `md`: `12px` (Product cards, small panels)
- `lg`: `16px` (Secondary modals, editorial cards)
- `xl`: `22px` (Promotional hero modules)
- `pill`: `9999px` (Primary buttons, filter chips)
- `full`: `50%` (Circular icon buttons, avatar badges)

### 5.2 Shadows & Elevation
- Primary preference is **border-contrast and surface juxtaposition** rather than drop shadows.
- Subdued Card Hover Shadow: `0 10px 25px -5px rgba(20, 51, 58, 0.05), 0 8px 10px -6px rgba(20, 51, 58, 0.03)`
- Dropdown & Popover: `0 12px 30px -4px rgba(20, 51, 58, 0.08)`
- All borders use `--color-border` (`#DEDCD5`) at `1px solid`.

---

## 6. Component Specifications

### 6.1 Header & Navigation
- **Height**: `80px` desktop (`h-20`), `68px` mobile.
- **Position**: Sticky with backdrop-blur (`bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#DEDCD5]/60`).
- **Brand Wordmark**: Centered or inline SVG `ALUNE-header.svg` with height `28px` to `32px`.
- **Nav Actions**: Wishlist Counter (Lucide `Heart`), Language Selector dropdown (`FR / EN / AR`), Mobile Hamburger (`Menu`).

### 6.2 Button Variants
1. **Primary**:
   - Background: `--color-primary` (`#14333A`), Text: `#F7F5F0`, Border: None.
   - Shape: Pill (`rounded-full`), Height: `48px`, Padding: `px-8`.
   - Hover: `--color-primary-hover` (`#1C424A`), scale `1.01`.
2. **Secondary / Outline**:
   - Background: Transparent, Text: `--color-primary`, Border: `1px solid #14333A`.
   - Shape: Pill, Height: `48px`, Padding: `px-8`.
   - Hover: Background `#14333A`, Text `#F7F5F0`.
3. **Ghost / Link**:
   - Transparent, Text: `--color-primary`, Underline on hover.
4. **WhatsApp Direct Action**:
   - Background: `#14333A` with gold border accent or soft contrast hover; directly pre-fills concierge request for the product.

### 6.3 Product Card
- **Surface**: White (`#FFFFFF`) with `1px solid #DEDCD5` border and `rounded-xl` (`16px`).
- **Aspect Ratio**: Standardized `4:5` product framing with image center-fitted (`object-contain p-6 bg-[#EEECE7]/40`).
- **Wishlist Toggle**: Top-right corner circular button (`w-10 h-10 rounded-full bg-white/90 text-[#14333A]`).
- **Details Area**: Product code/title, category descriptor, and transparent inquiry action.

### 6.4 Editorial Image Sections
- Using provided photography from `public/Sections-IMG/`:
  - `S-1.jpeg`: Editorial campaign showcase (Split 50/50 hero layout).
  - `S-2.jpg`: Craftsmanship & silhouette detail (Full-width banner with overlay card).
  - `S-3.jpeg`: Lifestyle & Mediterranean ambiance (Editorial offset framing).

---

## 7. RTL (Right-to-Left) Localization Architecture

- HTML `dir="rtl"` and `lang="ar"` are dynamically set by `src/i18n.js`.
- All CSS utilizes **CSS Logical Properties**:
  - `margin-inline-start` / `margin-inline-end` (Tailwind: `ms-*`, `me-*`)
  - `padding-inline-start` / `padding-inline-end` (Tailwind: `ps-*`, `pe-*`)
  - `inset-inline-start` / `inset-inline-end` (Tailwind: `start-*`, `end-*`)
  - `border-inline-*`
- Directional icons (arrows, chevrons) apply `rtl:rotate-180`.
- Text alignment defaults to `text-start`.

---

## 8. Loading & Transition Standards

- Logo loading screen: Fade-in centered `ALUNE-loading-logo.svg` over `#F7F5F0` background.
- Respects `@media (prefers-reduced-motion: reduce)`.
- UI Transitions: Standard `200ms cubic-bezier(0.16, 1, 0.3, 1)` for hover, transform, and opacity changes.
