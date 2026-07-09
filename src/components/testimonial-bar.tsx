"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import { PageContainer } from "@/components/page-container"

const LOGOS = [
  {
    src: "/images/testimonials/BusinessInsider.svg",
    alt: "Business Insider",
    width: 77,
    height: 24,
  },
  {
    src: "/images/testimonials/MensHealth.svg",
    alt: "Men's Health",
    width: 89,
    height: 24,
  },
  {
    src: "/images/testimonials/Forbes.svg",
    alt: "Forbes",
    width: 96,
    height: 24,
  },
  {
    src: "/images/testimonials/Cosmopolitan.svg",
    alt: "Cosmopolitan",
    width: 135,
    height: 24,
  },
] as const

const LOGO_HEIGHT = 16
const LOGO_GAP = 64

function getLogoSetWidth() {
  return LOGOS.reduce((width, logo, index) => {
    const logoWidth = (logo.width / logo.height) * LOGO_HEIGHT
    const gap = index < LOGOS.length - 1 ? LOGO_GAP : 0
    return width + logoWidth + gap
  }, 0)
}

function buildMarqueeHalf(repeats: number) {
  return Array.from({ length: repeats }, () => LOGOS).flat()
}

function LogoImage({
  logo,
  decorative,
}: {
  logo: (typeof LOGOS)[number]
  decorative?: boolean
}) {
  return (
    <Image
      src={logo.src}
      alt={decorative ? "" : logo.alt}
      width={logo.width}
      height={logo.height}
      className="h-4 w-auto"
    />
  )
}

export function TestimonialBar() {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [setsPerHalf, setSetsPerHalf] = useState(4)

  useEffect(() => {
    const container = containerRef.current
    if (!container || prefersReducedMotion) return

    const updateSetsPerHalf = () => {
      const setWidth = getLogoSetWidth()
      const needed = Math.max(2, Math.ceil(container.offsetWidth / setWidth) + 1)
      setSetsPerHalf(needed)
    }

    updateSetsPerHalf()

    const observer = new ResizeObserver(updateSetsPerHalf)
    observer.observe(container)

    return () => observer.disconnect()
  }, [prefersReducedMotion])

  const marqueeLogos = useMemo(
    () => [...buildMarqueeHalf(setsPerHalf), ...buildMarqueeHalf(setsPerHalf)],
    [setsPerHalf]
  )

  return (
    <div className="bg-beige-comp py-4">
      <PageContainer>
        <div className="flex items-center gap-8">
          <span className="text-eyebrow shrink-0 text-fluff-500">As seen in</span>

          <div
            ref={containerRef}
            className="relative min-w-0 flex-1 overflow-hidden"
          >
            {prefersReducedMotion ? (
              <ul className="flex flex-wrap items-center gap-16">
                {LOGOS.map((logo) => (
                  <li key={logo.src} className="shrink-0">
                    <LogoImage logo={logo} />
                  </li>
                ))}
              </ul>
            ) : (
              <motion.ul
                className="flex w-max items-center gap-16"
                animate={{ x: ["0%", "-30%"] }}
                transition={{
                  duration: setsPerHalf * 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {marqueeLogos.map((logo, index) => (
                  <li key={`${logo.src}-${index}`} className="shrink-0">
                    <LogoImage logo={logo} decorative={index >= LOGOS.length} />
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
