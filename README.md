# FluffCo — Hotel Pillow Landing Page

A Next.js marketing site for the FluffCo Hotel Pillow. Built with [ShadCN UI](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/).

---

## Getting started

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Page sections (top to bottom)

| Section | File |
|---------|------|
| Promo bar | `src/components/app-header.tsx` |
| Hero | `src/components/hero-section.tsx` |
| Press logos | `src/components/testimonial-bar.tsx` |
| Product / buying module | `src/components/buying-module/` |
| Wellness | `src/components/wellness-section.tsx` |
| How it's made | `src/components/how-its-made-section.tsx` |
| Comparison | `src/components/comparison-section.tsx` |
| Reviews | `src/components/reviews-section.tsx` |

---

## Where to edit copy

| What | File |
|------|------|
| Product options, pricing, and descriptions | `src/lib/product-config.ts` |
| Hero headline and feature bullets | `src/components/hero-section.tsx` |
| Wellness section and expert quote | `src/components/wellness-section.tsx` |
| How it's made cards | `src/components/how-its-made-section.tsx` |
| Comparison table bullets | `src/components/comparison-section.tsx` |
| Customer reviews | `src/components/reviews-section.tsx` |
| Promo bar message | `src/components/app-header.tsx` |
| Shipping and trial labels | `src/components/buying-module/trust-row.tsx` |
| Page title and SEO description | `src/app/layout.tsx` |
| Product gallery image alt text | `src/lib/product-gallery-config.ts` |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, and SEO metadata
│   ├── page.tsx            # Landing page — assembles all sections
│   └── globals.css         # Brand colours, typography, and theme tokens
│
├── components/
│   ├── buying-module/      # Product gallery, options, pricing, add to cart
│   ├── hero-section.tsx
│   ├── wellness-section.tsx
│   ├── how-its-made-section.tsx
│   ├── comparison-section.tsx
│   ├── reviews-section.tsx
│   ├── testimonial-bar.tsx
│   ├── app-header.tsx      # Sticky promo bar
│   └── ui/                 # ShadCN primitives (buttons, cards, etc.)
│
└── lib/
    ├── product-config.ts   # Fill, size, firmness, quantity, and pricing
    ├── product-gallery-config.ts
    ├── cart-context.tsx
    └── fonts.ts
```

---

## Styling

Brand colours, fonts, and spacing live in `src/app/globals.css`. Section components use Tailwind utility classes with FluffCo design tokens (e.g. `text-fluff-400`, `bg-beige-50`).

To change a global primitive (all buttons, all cards), edit the matching file in `src/components/ui/`.

---

## Tech stack

- **Next.js 16** (App Router)
- **ShadCN UI** (Radix-based components)
- **Tailwind CSS 4**
- **TypeScript**
- **Framer Motion** (press logo marquee)
