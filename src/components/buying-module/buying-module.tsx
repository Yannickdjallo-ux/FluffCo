"use client"

import { useMemo, useState } from "react"
import { OptionCard } from "@/components/buying-module/option-card"
import { OptionGroup } from "@/components/buying-module/option-group"
import { OptionPill } from "@/components/buying-module/option-pill"
import { ProductGallery } from "@/components/buying-module/product-gallery"
import { ProductHeader } from "@/components/buying-module/product-header"
import { ProductPrice } from "@/components/buying-module/product-price"
import { QuantityCard } from "@/components/buying-module/quantity-card"
import { TrustRow } from "@/components/buying-module/trust-row"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import {
  FILL_OPTIONS,
  FIRMNESS_OPTIONS,
  formatBundlePriceLabel,
  formatPrice,
  getCompareAtPrice,
  getBundleTotal,
  getFillDisplayPrice,
  getUnitPrice,
  QUANTITY_OPTIONS,
  SIZE_OPTIONS,
  type Fill,
  type Firmness,
  type QuantityTier,
  type Size,
} from "@/lib/product-config"

type BuyingControlsProps = {
  fill: Fill
  onFillChange: (fill: Fill) => void
}

function BuyingControls({ fill, onFillChange }: BuyingControlsProps) {
  const { addToCart } = useCart()
  const [size, setSize] = useState<Size>("standard")
  const [firmness, setFirmness] = useState<Firmness>("firm")
  const [quantityTier, setQuantityTier] = useState<QuantityTier>("single")

  const unitPrice = useMemo(() => getUnitPrice(fill, size), [fill, size])
  const displayPrice = useMemo(
    () => getBundleTotal(unitPrice, quantityTier),
    [unitPrice, quantityTier]
  )
  const compareAtPrice = useMemo(
    () => getCompareAtPrice(unitPrice, quantityTier),
    [unitPrice, quantityTier]
  )

  return (
    <div className="mx-auto flex w-full max-w-[520px] flex-col gap-6 lg:mx-0 lg:max-w-none">
      <ProductHeader />

      <OptionGroup label="Choose your fill">
        <div
          className="flex flex-col gap-3"
          role="radiogroup"
          aria-label="Choose your fill"
        >
          {FILL_OPTIONS.map((option) => (
            <OptionCard
              key={option.id}
              label={option.label}
              description={option.description}
              price={formatPrice(getFillDisplayPrice(option.id))}
              icon={option.icon}
              selected={fill === option.id}
              onSelect={() => onFillChange(option.id)}
            />
          ))}
        </div>
      </OptionGroup>

      <div className="flex flex-col gap-5">
        <OptionGroup label="Choose your size">
          <div
            className="flex flex-wrap gap-2"
            role="radiogroup"
            aria-label="Choose your size"
          >
            {SIZE_OPTIONS.map((option) => (
              <OptionPill
                key={option.id}
                label={option.label}
                selected={size === option.id}
                onSelect={() => setSize(option.id)}
              />
            ))}
          </div>
        </OptionGroup>

        <OptionGroup label="Choose your firmness">
          <div
            className="flex flex-wrap gap-2"
            role="radiogroup"
            aria-label="Choose your firmness"
          >
            {FIRMNESS_OPTIONS.map((option) => (
              <OptionPill
                key={option.id}
                label={option.label}
                selected={firmness === option.id}
                onSelect={() => setFirmness(option.id)}
              />
            ))}
          </div>
        </OptionGroup>

        <OptionGroup label="Quantity">
          <div
            className="flex min-w-0 gap-2 sm:gap-3"
            role="radiogroup"
            aria-label="Quantity"
          >
            {QUANTITY_OPTIONS.map((option) => (
              <QuantityCard
                key={option.id}
                label={option.label}
                price={formatBundlePriceLabel(unitPrice, option.id)}
                selected={quantityTier === option.id}
                onSelect={() => setQuantityTier(option.id)}
              />
            ))}
          </div>
        </OptionGroup>
      </div>

      <div>
        <ProductPrice price={displayPrice} compareAtPrice={compareAtPrice} />

        <Button
          type="button"
          className="w-full"
          onClick={() => addToCart({ fill, size, firmness, quantityTier })}
        >
          Add to cart
        </Button>

        <TrustRow layout="inline" />
      </div>
    </div>
  )
}

export function BuyingModule() {
  const [fill, setFill] = useState<Fill>("down-feather")

  return (
    <section id="product" className="scroll-mt-12 bg-beige-50 section-light py-16 lg:py-20">
      <PageContainer>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery key={fill} fill={fill} />
          <BuyingControls fill={fill} onFillChange={setFill} />
        </div>
      </PageContainer>
    </section>
  )
}
