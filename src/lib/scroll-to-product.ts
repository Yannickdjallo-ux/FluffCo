import { animate } from "framer-motion"

export const PRODUCT_SECTION_ID = "product"

function getStickyHeaderOffset() {
  const header = document.querySelector("header")
  return header?.getBoundingClientRect().height ?? 0
}

export function getProductSectionScrollTop() {
  const target = document.getElementById(PRODUCT_SECTION_ID)
  if (!target) return null

  return (
    target.getBoundingClientRect().top + window.scrollY - getStickyHeaderOffset()
  )
}

export function scrollToProductSection(options?: { instant?: boolean }) {
  const top = getProductSectionScrollTop()
  if (top === null) return

  if (options?.instant) {
    window.scrollTo({ top, behavior: "auto" })
    return
  }

  animate(window.scrollY, top, {
    type: "tween",
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
    onUpdate: (value) => window.scrollTo(0, value),
  })
}
