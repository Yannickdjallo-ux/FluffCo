# FluffCo — Hotel Pillow Landing Page

A single-product landing page for the FluffCo Hotel Pillow — 5-star hotel bedding quality at a mass-premium price. The page's only job is to sell one product to cold or paid traffic, without leaning on the discount mechanics the live store relies on.

Built with [Next.js](https://nextjs.org/), [ShadCN UI](https://ui.shadcn.com/), and [Tailwind CSS](https://tailwindcss.com/).

---

## The core decision

FluffCo's live site runs a discount-maximalist playbook — countdown timers, stacked bundle deals, "mystery discount" popups, strikethrough pricing, "only 2% left" urgency. Their 2026 brand strategy, however, points the opposite way: premium, wellness-led, "quality is felt, not announced."

This page is a deliberate expression of that 2026 strategy rather than a mirror of the current store. Where the two conflict, the page follows the brand deck — trading urgency-driven conversion for brand equity, margin, and a more premium read.

## Who it's for & the one job

**Buyer:** a quality-over-noise shopper who treats rest as part of wellness, not a luxury indulgence.

**The page has one job:** move a stranger from "who are you" to "add to cart" through a narrative arc (problem → promise → proof → comparison → social proof → risk reversal), with the buy action never more than a scroll or tap away.

## Key CRO / e-commerce decisions

- **Wellness-led, not luxury-led.** The wedge is "better sleep = better waking life," not the generic "feels like a hotel" line every competitor uses. Hotel quality becomes the proof; wellness is the promise.
- **Full-price premium, no discount theatre.** No countdowns, no strikethroughs, no "% off." Value is carried structurally — a two-tier fill ladder (good/better), a calm "Set of 2" bundle, and a comparison section that anchors price against $300 hotel pillows rather than a fake original price.
- **"Fitted" as a through-line.** The firmness-to-sleep-position system (Firm Fluff / Soft Fluff) appears in the buy module, the wellness section, the construction section, the comparison, and the reviews — so the differentiator feels authored across the whole page, not bolted on.
- **Editorial hero, price revealed after desire.** The hero is problem/solution + USPs with no price; the full buy module is its own section below. Ready buyers convert immediately via a sticky promo bar; cold traffic gets the story first.
- **Honesty guardrails.** The sleep specialist (Dr. Maya Ellison) is a clearly labelled fictional persona, not a real clinician; reviews are invented but plausible; the Trustpilot-style rating is styled, not a live integration. Claims are grounded in FluffCo's own brand book rather than invented.

## Page structure

Announcement bar → Hero → Press logos → Buy module → Wellness / sleep science → How it's made → Comparison → Reviews.

**Buy module model:** fill × firmness × size × quantity (two fills, two firmnesses, two sizes, single/set). One recurring CTA ("Shop the Hotel Pillow") scrolls to the buy module; "Choose your firmness" is a contextual exception in the wellness section; "Add to cart" is the single commit button.

## Design system

- **Beige** `#F4EDE5` — page ground
- **Blue** `#424680` — copy and primary actions
- **Coral** `#FF8080` — accents and selected states only (never a button fill with light text — fails WCAG AA contrast)
- **Maize** `#F2CE12` — accent on dark sections

Per-section color logic: light sections use navy as the action color and coral as accent; dark (navy) sections use beige as the action color and maize as accent.

**Type:** Recoleta (headlines), PP Pangram Sans (body).

---

## Getting started

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

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

## Tech stack

- **Next.js 16** (App Router)
- **ShadCN UI** (Radix-based components)
- **Tailwind CSS 4**
- **TypeScript**
- **Framer Motion** (press logo marquee)
