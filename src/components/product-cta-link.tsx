"use client"

import { useReducedMotion } from "framer-motion"
import type { ComponentProps } from "react"
import {
  PRODUCT_SECTION_ID,
  scrollToProductSection,
} from "@/lib/scroll-to-product"

type ProductCtaLinkProps = ComponentProps<"a">

export function ProductCtaLink({
  children,
  onClick,
  href = `#${PRODUCT_SECTION_ID}`,
  ...props
}: ProductCtaLinkProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault()
        onClick?.(event)
        scrollToProductSection({ instant: prefersReducedMotion ?? false })
      }}
      {...props}
    >
      {children}
    </a>
  )
}
