import { cn } from "@/lib/utils"

type QuantityCardProps = {
  label: string
  price: string
  selected: boolean
  onSelect: () => void
}

export function QuantityCard({
  label,
  price,
  selected,
  onSelect,
}: QuantityCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex min-w-0 flex-1 flex-col items-start justify-center rounded-[12px] bg-beige-50 text-left transition-colors lg:h-[65px] lg:rounded-lg",
        selected
          ? "border-[1.5px] border-coral-300 px-[17px] py-[13px]"
          : "border border-beige-300 px-[17px] py-[13px] hover:border-beige-400"
      )}
    >
      <span
        className={cn(
          "whitespace-nowrap text-b3-bold lg:text-b2-bold",
          selected ? "text-fluff-400" : "text-beige-900"
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "whitespace-nowrap text-b3",
          selected ? "text-fluff-400" : "text-beige-600"
        )}
      >
        {price}
      </span>
    </button>
  )
}
