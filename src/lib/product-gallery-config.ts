import type { Fill } from "@/lib/product-config"

export const PRODUCT_IMAGE_SIZE = { width: 928, height: 992 } as const
export const LIFESTYLE_IMAGE_SIZE = { width: 1440, height: 1655 } as const

/** Distinct aspect ratios used to compute the narrowest gallery content width. */
export const GALLERY_IMAGE_SIZES = [
  PRODUCT_IMAGE_SIZE,
  LIFESTYLE_IMAGE_SIZE,
] as const

export const PRODUCT_IMAGES: Record<
  Fill,
  { src: string; alt: string }
> = {
  "down-feather": {
    src: "/images/Product/down-feather.png",
    alt: "FluffCo Hotel Pillow with down feather fill",
  },
  "down-alternative": {
    src: "/images/Product/down-alternative.png",
    alt: "FluffCo Hotel Pillow with down-alternative fill",
  },
}

export const EXTRA_GALLERY_IMAGE = {
  src: "/images/Product/terracotta.png",
  alt: "FluffCo Hotel Pillow on terracotta bedding",
} as const

export const LIFESTYLE_IMAGES = [
  {
    src: "/images/Product/olive.png",
    alt: "FluffCo Hotel Pillow on olive bedding",
  },
  {
    src: "/images/Product/brown.png",
    alt: "FluffCo Hotel Pillow on neutral bedding",
  },
  {
    src: "/images/Product/White.png",
    alt: "Close-up of FluffCo Hotel Pillow stitching and fabric",
  },
] as const

export function getGalleryThumbnails(fill: Fill) {
  return [PRODUCT_IMAGES[fill], EXTRA_GALLERY_IMAGE, ...LIFESTYLE_IMAGES]
}
