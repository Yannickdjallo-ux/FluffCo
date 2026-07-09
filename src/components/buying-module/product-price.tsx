import { formatPrice } from "@/lib/product-config"

type ProductPriceProps = {
  price: number
  compareAtPrice: number
}

export function ProductPrice({ price, compareAtPrice }: ProductPriceProps) {
  return (
    <div className="flex items-center gap-2.5 py-5">
      <p className="font-heading text-[36px] leading-10 tracking-[-1px] text-fluff-400">
        {formatPrice(price)}
      </p>
      <p className="text-b1 line-through text-beige-300">
        {formatPrice(compareAtPrice)}
      </p>
    </div>
  )
}
