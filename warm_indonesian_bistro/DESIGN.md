---
name: Warm Indonesian Bistro
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#504440'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#827470'
  outline-variant: '#d3c3be'
  surface-tint: '#74584e'
  primary: '#090100'
  on-primary: '#ffffff'
  primary-container: '#2c1810'
  on-primary-container: '#9e7e73'
  inverse-primary: '#e3bfb2'
  secondary: '#97472e'
  on-secondary: '#ffffff'
  secondary-container: '#fe997a'
  on-secondary-container: '#772f18'
  tertiary: '#000401'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f2115'
  on-tertiary-container: '#768a7a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#e3bfb2'
  on-primary-fixed: '#2a170f'
  on-primary-fixed-variant: '#5a4137'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59f'
  on-secondary-fixed: '#3a0a00'
  on-secondary-fixed-variant: '#793019'
  tertiary-fixed: '#d3e8d5'
  tertiary-fixed-dim: '#b7ccb9'
  on-tertiary-fixed: '#0e1f13'
  on-tertiary-fixed-variant: '#394b3d'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display:
    fontFamily: Newsreader
    fontSize: 3.5rem
    fontWeight: '500'
    lineHeight: 4rem
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.25rem
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
  headline-sm:
    fontFamily: Newsreader
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the warmth, hospitality, and aromatic calm of an Indonesian specialty cafe and bistro. It balances artisanal craft with effortless digital convenience. The visual direction merges **warm modernism** and **tactile hospitality**: soft-cornered paper textures, warm ambient tones, deep espresso anchors, and delicate botanical cues.

### Personality & Demographics
- **Atmosphere:** Sunlit veranda morning transitions smoothly into an intimate, jazz-lit evening gathering space.
- **Target Audience:** Urban professionals seeking remote work sanctuaries, coffee enthusiasts, brunch-goers, and diners looking for refined Indonesian-Western fusion fare.
- **Emotional Response:** Welcoming, comforting, grounded, and leisurely yet efficient when ordering, booking tables, or paying.

## Colors

The palette is rooted in the cafe experience: roasted beans, unglazed terracotta pottery, steamed oat milk, and lush native greenery.

- **Primary (`#2C1810` - Deep Espresso):** Anchors headlines, primary text, prominent order CTAs, and structural accents. Provides deep contrast against warm pale backdrops.
- **Secondary (`#C86D51` - Warm Terracotta):** Used for interactive triggers, highlighted ingredients, cart tallies, and active navigation indicators. A lighter caramel tint (`#E07A5F`) serves as an active hover and focus state.
- **Tertiary (`#4A5D4E` - Botanical Sage):** Reserved for dietary tags (vegan, halal, organic), origin notes (Sumatra, Toraja), reservation availability states, and subtle badge highlights.
- **Neutral (`#FAF7F2` - Steamed Cream):** The base canvas. Paired with `#F4EFEA` (Warm Foam) for nested container tiers, cards, and input fields, avoiding pure sterile whites.

## Typography

Typography establishes an editorial bistro feel while preserving absolute legibility on mobile ordering screens.

- **Editorial Headings (`Newsreader`):** Used for dish names, landing hero statements, storytelling copy, and section titles. Rendered in medium weights with tight letter-spacing to exude literary cafe culture.
- **Interface & Operational Text (`Plus Jakarta Sans`):** Warm, geometric-humanist grotesque used for menu descriptions, prices, customization options, ingredient callouts, and checkout tables.
- **Numbers & Prices:** Always set in `Plus Jakarta Sans` with tabular figures where columns align (e.g., cart summaries and receipts) for immediate optical clarity.

## Layout & Spacing

A 12-column responsive fluid grid structured with generous, breathable margins that mimic print menus.

- **Desktop (>= 1024px):** 12 columns with `2rem` margins and `1.5rem` gutters. Content containers max out at `1200px` to maintain comfortable eye scanning.
- **Tablet (768px - 1023px):** 8 columns with `1.5rem` margins and `1rem` gutters. Splits menu listings into 2 balanced columns.
- **Mobile (< 768px):** 4 columns with `1rem` margins and `1rem` gutters. Horizontal swipe carousels for quick menu categories; single-column stacks for checkout steps and food item configuration sheets.
- **Spacing Rhythm:** Based on an 8pt step system (`0.25rem` through `2.5rem`), ensuring tactile button heights (min 48px touch targets) and distinct separations between food courses and checkout line items.

## Elevation & Depth

Visual depth is achieved through **tonal layering and warm ambient diffusion**, mimicking physical stationery and ceramic dishes arranged on a tabletop.

- **Base Layer:** `#FAF7F2` (Steamed Cream canvas).
- **Surface Layer (Cards, Modals, Menus):** `#FFFFFF` or `#F4EFEA`, elevated primarily by a hairline warm-tinted border (`1px solid rgba(44, 24, 16, 0.08)`).
- **Ambient Elevation (Sticky Order Trays & Floating Modals):** Low-opacity, warm espresso-tinted shadows:
  - *Resting Card:* `0 2px 8px -2px rgba(44, 24, 16, 0.06)`
  - *Hovered Card / Active Order Widget:* `0 8px 24px -4px rgba(44, 24, 16, 0.10)`
  - *Bottom Sheets & Reservation Drawer:* `0 -4px 32px 0 rgba(44, 24, 16, 0.12)`
- No harsh black dropshadows; shadows strictly utilize the primary espresso tone tinted to minimal opacity.

## Shapes

The interface embraces organic, comfortable curves that echo rounded ceramic cups, pastry plates, and cafe furniture.

- Standard cards, input blocks, and notification alerts employ `rounded` corners (`0.5rem`).
- Large containers, hero food photography cards, dialogs, and checkout drawers use `rounded-lg` (`1rem`) and `rounded-xl` (`1.5rem`).
- Interactive pills (dietary chips, quantity counters, and status badges) utilize fully rounded caps (`9999px`) to create an inviting, tactile rhythm.

## Components

### Buttons
- **Primary (Order / Confirm):** Background `#2C1810`, text `#FAF7F2`, `rounded-md` (0.5rem) or full pill for quick add. On hover, transitions to terracotta `#C86D51`.
- **Secondary / Action:** Outlined with `1.5px solid #2C1810`, transparent background, text `#2C1810`. Hover fills with `rgba(200, 109, 81, 0.08)`.
- **Ghost:** Warm text `#C86D51`, no background or border, used for secondary dismissal and "View Details".

### Chips & Tags
- **Dietary Badges:** Light sage background (`rgba(74, 93, 78, 0.12)`), text `#4A5D4E`, uppercase `label-sm`, full pill curve.
- **Menu Filter Chips:** Background `#F4EFEA`, border `1px solid rgba(44, 24, 16, 0.08)`, text `#2C1810`. Selected state toggles to `#2C1810` background with `#FAF7F2` text.

### Cards (Menu Items & Bistro Specials)
- Surface `#FFFFFF`, border `1px solid rgba(44, 24, 16, 0.06)`, `rounded-lg`.
- Top image container cropped to 4:3 with soft inner shadow. Price tags aligned to top right or bottom trailing edge in bold `Plus Jakarta Sans`.

### Form Fields & Inputs
- Background `#F4EFEA`, border `1px solid rgba(44, 24, 16, 0.15)`, focus ring `2px solid #C86D51` with no offset. Floating or inset labels in `label-sm`.

### Checkboxes & Radio Buttons
- Rounded `0.25rem` for checkboxes, circular for radios. Inactive border `1.5px solid rgba(44, 24, 16, 0.3)`. Active fill `#C86D51` with clean off-white mark.

### Cafe-Specific Widgets
- **Table Reservation Selector:** Segmented time slots arranged as pill buttons. Selected slots highlighted in deep espresso `#2C1810`; unavailable slots rendered with muted opacity (`0.4`) and crossed diagonal styling.
- **Floating Mobile Order Bar:** Sticky bottom sheet dock with blurred backdrop (`rgba(250, 247, 242, 0.85)`), displaying item count, subtotal, and an instantaneous "Review Order" primary button.