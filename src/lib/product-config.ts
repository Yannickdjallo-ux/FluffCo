export type Fill = "down-feather" | "down-alternative"
export type Size = "standard" | "king"
export type Firmness = "firm" | "soft"
export type QuantityTier = "single" | "set-of-2" | "set-of-4"

export const PRODUCT_ID = "hotel-pillow" as const

const FILL_BASE_PRICE: Record<Fill, number> = {
  "down-feather": 109,
  "down-alternative": 69,
}

const SIZE_PREMIUM: Record<Size, number> = {
  standard: 0,
  king: 10,
}

export const PILLOW_COUNT: Record<QuantityTier, number> = {
  single: 1,
  "set-of-2": 2,
  "set-of-4": 4,
}

export const FILL_OPTIONS = [
  {
    id: "down-feather" as const,
    label: "Down Feather",
    description: "Real down fill · soft, lofty, and responsibly sourced",
    icon: "feather" as const,
  },
  {
    id: "down-alternative" as const,
    label: "Down Alternative",
    description: "Down-like feel · hypoallergenic and vegan-friendly",
    icon: "leaf" as const,
  },
] as const

export type FillIcon = (typeof FILL_OPTIONS)[number]["icon"]

export const SIZE_OPTIONS = [
  { id: "standard" as const, label: "Standard · 20 x 26" },
  { id: "king" as const, label: "King · 20 x 36" },
] as const

export const FIRMNESS_OPTIONS = [
  { id: "firm" as const, label: "Firm Fluff — best for side sleepers" },
  { id: "soft" as const, label: "Soft Fluff — best for back and stomach sleepers" },
] as const

export const QUANTITY_OPTIONS = [
  { id: "single" as const, label: "Single" },
  { id: "set-of-2" as const, label: "Set of 2" },
  { id: "set-of-4" as const, label: "Set of 4" },
] as const

export function getFillDisplayPrice(fill: Fill): number {
  return FILL_BASE_PRICE[fill]
}

export function getUnitPrice(fill: Fill, size: Size): number {
  return FILL_BASE_PRICE[fill] + SIZE_PREMIUM[size]
}

export function getBundleTotal(
  unitPrice: number,
  tier: QuantityTier
): number {
  switch (tier) {
    case "single":
      return unitPrice
    case "set-of-2":
      return unitPrice * 2 - 18
    case "set-of-4":
      return unitPrice * 4 - 76
  }
}

export function getCompareAtPrice(
  unitPrice: number,
  tier: QuantityTier
): number {
  return unitPrice * 2 * PILLOW_COUNT[tier]
}

export function formatPrice(amount: number): string {
  return `$${amount}`
}

export function formatBundlePriceLabel(
  unitPrice: number,
  tier: QuantityTier
): string {
  const total = getBundleTotal(unitPrice, tier)
  if (tier === "single") {
    return formatPrice(total)
  }
  const perPillow = total / PILLOW_COUNT[tier]
  return `${formatPrice(perPillow)} each`
}

export function getVariantKey(
  fill: Fill,
  size: Size,
  firmness: Firmness,
  quantityTier: QuantityTier
): string {
  return `${fill}:${size}:${firmness}:${quantityTier}`
}
