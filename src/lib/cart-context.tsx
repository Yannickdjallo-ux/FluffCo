"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  getBundleTotal,
  getUnitPrice,
  getVariantKey,
  PILLOW_COUNT,
  PRODUCT_ID,
  type Fill,
  type Firmness,
  type QuantityTier,
  type Size,
} from "@/lib/product-config"

export type CartLine = {
  id: string
  productId: typeof PRODUCT_ID
  fill: Fill
  size: Size
  firmness: Firmness
  quantityTier: QuantityTier
  lineQuantity: number
  unitPrice: number
  bundleTotal: number
  pillowCount: number
}

type AddToCartInput = {
  fill: Fill
  size: Size
  firmness: Firmness
  quantityTier: QuantityTier
}

type CartContextValue = {
  lines: CartLine[]
  itemCount: number
  addToCart: (input: AddToCartInput) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])

  const addToCart = useCallback((input: AddToCartInput) => {
    const unitPrice = getUnitPrice(input.fill, input.size)
    const bundleTotal = getBundleTotal(unitPrice, input.quantityTier)
    const id = getVariantKey(
      input.fill,
      input.size,
      input.firmness,
      input.quantityTier
    )

    setLines((current) => {
      const existing = current.find((line) => line.id === id)
      if (existing) {
        return current.map((line) =>
          line.id === id
            ? { ...line, lineQuantity: line.lineQuantity + 1 }
            : line
        )
      }

      return [
        ...current,
        {
          id,
          productId: PRODUCT_ID,
          fill: input.fill,
          size: input.size,
          firmness: input.firmness,
          quantityTier: input.quantityTier,
          lineQuantity: 1,
          unitPrice,
          bundleTotal,
          pillowCount: PILLOW_COUNT[input.quantityTier],
        },
      ]
    })
  }, [])

  const itemCount = useMemo(
    () =>
      lines.reduce(
        (total, line) => total + line.lineQuantity * line.pillowCount,
        0
      ),
    [lines]
  )

  const value = useMemo(
    () => ({ lines, itemCount, addToCart }),
    [lines, itemCount, addToCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
