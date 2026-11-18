# ALUNE — Project Technical Specification & Architecture Manual

**Project Name**: ALUNE  
**Industry**: Premium Sunglasses & Eyewear  
**Document Type**: Technical Implementation Specification & Production Manual  
**Version**: 1.0.0

---

## 1. Project Architecture & Stack

The frontend is built as a Single Page Application (SPA) using clean, modern JavaScript:

- **Core Framework**: React 19 + Vite 8
- **Language**: JavaScript (ES Modules, JSX, no TypeScript)
- **Styling**: Tailwind CSS v4 using CSS-first `@theme` design tokens in `src/theme.css` and `src/index.css`
- **Routing**: React Router DOM v7 (`BrowserRouter`, nested `PublicLayout` and `AdminLayout`)
- **State Management**: Zustand v5 with `persist` middleware for local browser wishlist
- **Internationalization**: `i18next` + `react-i18next` + `i18next-browser-languagedetector`
- **Icons**: `lucide-react`
- **Code Quality**: ESLint Flat Config (`eslint.config.js`)

---

## 2. Directory Structure

```text
src/
├── assets/                  # Core static dev assets
├── components/
│   ├── common/
│   │   └── LoadingScreen.jsx      # Animated SVG brand loading curtain
│   ├── navigation/
│   │   ├── Header.jsx             # Sticky glassmorphism header & drawer
│   │   ├── Footer.jsx             # Editorial dark Mediterranean footer
│   │   └── LanguageSelector.jsx   # Multi-language dropdown (FR, EN, AR)
│   └── products/
│       ├── ProductCard.jsx        # 4:5 aspect ratio card with Wishlist & WhatsApp actions
│       └── ProductGrid.jsx        # Responsive grid layout
├── data/
│   └── products.js                # Centralized product catalog schema
├── layouts/
│   ├── PublicLayout.jsx           # Storefront container with Header & Footer
│   └── AdminLayout.jsx            # Administrative panel layout with sidebar
├── locales/
│   ├── en/translation.json        # English string dictionary
│   ├── fr/translation.json        # French string dictionary
│   └── ar/translation.json        # Arabic string dictionary
├── pages/
│   ├── Home/HomePage.jsx          # Hero (S-1), Curated Grid, S-2 & S-3 Editorial Sections
│   ├── Shop/ShopPage.jsx          # Catalog browsing, filtering, and sorting
│   ├── Product/ProductDetailPage.jsx # Individual piece gallery, specifications, & WhatsApp concierge
│   ├── Favorites/FavoritesPage.jsx# Local wishlist manager with bulk WhatsApp inquiry
│   ├── About/AboutPage.jsx        # Maison pillars & craftsmanship manifesto
│   ├── Contact/ContactPage.jsx    # WhatsApp concierge contact card & inquiry form
│   ├── FAQ/FAQPage.jsx            # Interactive accordion FAQ
│   └── Admin/
│       ├── AdminLoginPage.jsx     # Visual authentication entry
│       ├── AdminDashboardPage.jsx # Operational KPI metrics & product summary
│       ├── AdminProductsPage.jsx  # Catalog inventory table & action trigger
│       ├── AdminCategoriesPage.jsx# Taxonomy breakdown
│       ├── AdminOrdersPage.jsx    # WhatsApp concierge inquiry tracking table
│       └── AdminSettingsPage.jsx  # Operational configuration view
├── store/
│   └── favoritesStore.js          # Zustand store persisting item IDs to localStorage
├── utils/
│   └── constants.js               # Central WhatsApp number & URL message generator
├── App.jsx                        # Application router & top-level scroll restoration
├── i18n.js                        # Locale detector, fallbackLng ('fr'), & RTL/LTR dynamic synchronizer
├── index.css                      # Global resets & typography logical defaults
├── theme.css                      # Tailwind CSS v4 CSS-first token definitions
└── main.jsx                       # Application bootstrap
```

---

## 3. Asset Locations & Usage Mapping

All supplied assets in `public/` are preserved and directly mapped without alterations:

1. **Logo System** (`public/ALUNE-LOGO/`):
   - `website-header/ALUNE-header.svg`: Used in `src/components/navigation/Header.jsx` and `AdminLoginPage.jsx`.
   - `website-footer/ALUNE-footer-light-background.svg`: Used in `src/components/navigation/Footer.jsx`.
   - `loading-screen/ALUNE-loading-logo.svg`: Used in `src/components/common/LoadingScreen.jsx`.
   - `monogram/ALUNE-monogram-white.svg`: Used as a hallmark stamp in the footer and empty state screens.
2. **Product Photography** (`public/Products/`):
   - `Prod1.jpg`: Standardized within 4:5 ratio containers in `ProductCard.jsx`, `ProductDetailPage.jsx`, and `ProductGrid.jsx`.
3. **Editorial Campaign Sections** (`public/Sections-IMG/`):
   - `S-1.jpeg`: Background visual for the Homepage Hero banner and the House of ALUNE campaign banner.
   - `S-2.jpg`: Editorial Craftsmanship & Savoir-Faire 50/50 showcase in `HomePage.jsx` and `AboutPage.jsx`.
   - `S-3.jpeg`: Lifestyle & Mediterranean Ambiance feature banner in `HomePage.jsx`.

---

## 4. Internationalization & RTL Synchronization

- **Supported Locales**:
  - French (`fr`): Default fallback language.
  - English (`en`): Secondary international language.
  - Arabic (`ar`): Right-to-left layout.
- **Language Detection Strategy**:
  - `i18next-browser-languagedetector` configured with `order: ['localStorage', 'navigator']`.
  - Manual choices persist in `localStorage['i18nextLng']`.
  - First-time visits use browser language, falling back to `fr` for unsupported locales.
- **Direction Handling**:
  - `i18n.on('languageChanged')` automatically sets `document.documentElement.lang` and `document.documentElement.dir = (lng === 'ar' ? 'rtl' : 'ltr')`.
  - Arabic typography applies `Tajawal` font with adjusted line heights.
  - Layout relies on CSS logical properties (`margin-inline`, `padding-inline`, `text-align: start`, `rtl:rotate-180`).
  - No language route prefixes (`/fr`, `/en`, `/ar`) are used.

---

## 5. WhatsApp Concierge Purchase Flow

ALUNE operates on a direct concierge acquisition model rather than automated ecommerce checkout:

- The central WhatsApp concierge telephone number is configured in:
  `src/utils/constants.js` -> `APP_CONFIG.whatsappNumber = '+212600000000'`.
- Helper function `generateWhatsAppLink({ productName, productId, productUrl })` compiles pre-formatted inquiry messages with reference IDs and deep links.
- The Wishlist page provides a bulk inquiry generator (`createBulkInquiryLink()`) that compiles all selected models into a single WhatsApp concierge inquiry.

---

## 6. Wishlist / Favorites Implementation

- Managed via **Zustand** with `persist` middleware in `src/store/favoritesStore.js`.
- Stored under key `alune_favorites` in `localStorage`.
- Stores only product IDs (`['ALN-001', 'ALN-003']`), ensuring zero payload bloat and high performance.
- Wishlist counter dynamically updates the header badge.

---

## 7. Admin Dashboard & Future Backend Integration

- Admin routes are situated under `/admin/*` (`/admin/login`, `/admin`, `/admin/products`, `/admin/categories`, `/admin/orders`, `/admin/settings`).
- **Limitation Note**: The current admin area is a structural frontend interface utilizing the local mock schema. It does not provide cryptographic authentication.
- **Laravel Backend Requirements**:
  1. Replace `src/data/products.js` with Axios calls to Laravel endpoints (`GET /api/v1/products`, `GET /api/v1/products/{slug}`).
  2. Implement Laravel Sanctum or JWT for `/admin/login` authentication.
  3. Wire the contact form in `src/pages/Contact/ContactPage.jsx` to `POST /api/v1/inquiries`.
  4. Connect order tracking in `src/pages/Admin/AdminOrdersPage.jsx` to database records of confirmed concierge leads.
