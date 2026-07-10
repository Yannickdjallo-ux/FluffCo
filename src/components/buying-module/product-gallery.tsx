"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  GALLERY_IMAGE_SIZES,
  getGalleryThumbnails,
} from "@/lib/product-gallery-config"
import type { Fill } from "@/lib/product-config"
import { cn } from "@/lib/utils"

type ProductGalleryProps = {
  fill: Fill
}

function getContainedContentWidth(
  containerWidth: number,
  containerHeight: number,
  naturalWidth: number,
  naturalHeight: number
) {
  if (naturalWidth === 0 || naturalHeight === 0) {
    return containerWidth
  }

  const containerRatio = containerWidth / containerHeight
  const imageRatio = naturalWidth / naturalHeight

  return imageRatio > containerRatio
    ? containerWidth
    : containerHeight * imageRatio
}

function getMinContainedContentWidth(
  containerWidth: number,
  containerHeight: number,
  sizes: readonly { width: number; height: number }[]
) {
  return Math.min(
    ...sizes.map(({ width, height }) =>
      getContainedContentWidth(containerWidth, containerHeight, width, height)
    )
  )
}

export function ProductGallery({ fill }: ProductGalleryProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0)
  const [contentWidth, setContentWidth] = useState<number | null>(null)
  const thumbnails = useMemo(() => getGalleryThumbnails(fill), [fill])
  const mainImage = thumbnails[selectedThumbIndex]

  const updateContentWidth = useCallback(() => {
    const frame = frameRef.current
    if (!frame) {
      return
    }

    const { width: frameWidth, height: frameHeight } =
      frame.getBoundingClientRect()

    setContentWidth(
      getMinContainedContentWidth(
        frameWidth,
        frameHeight,
        GALLERY_IMAGE_SIZES
      )
    )
  }, [])

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) {
      return
    }

    updateContentWidth()

    const observer = new ResizeObserver(updateContentWidth)
    observer.observe(frame)

    return () => observer.disconnect()
  }, [updateContentWidth])

  return (
    <div className="flex w-full flex-col gap-2.5">
      <div
        ref={frameRef}
        className="relative aspect-[464/496] w-full max-h-[496px] overflow-hidden rounded-[12px] bg-beige-50 lg:h-[496px] lg:max-h-none lg:rounded-none"
      >
        <Image
          key={mainImage.src}
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-[12px] object-contain lg:rounded-none"
        />
      </div>

      <div
        className="mx-auto grid grid-cols-5 gap-2"
        style={{ width: contentWidth ?? "100%" }}
        role="tablist"
        aria-label="Product images"
      >
        {thumbnails.map((image, index) => {
          const selected = index === selectedThumbIndex
          const isProductThumb = index === 0
          return (
            <button
              key={`${image.src}-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={image.alt}
              onClick={() => setSelectedThumbIndex(index)}
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-[12px] bg-beige-50 lg:rounded",
                selected
                  ? "border-[1.5px] border-coral-300"
                  : "border border-beige-300 hover:border-beige-400"
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 1024px) 20vw, 10vw"
                className={cn(
                  "object-center",
                  isProductThumb ? "object-contain" : "object-cover"
                )}
                aria-hidden
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
