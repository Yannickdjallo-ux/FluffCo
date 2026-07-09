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
        "flex h-[65px] min-w-0 flex-1 flex-col justify-center rounded-lg bg-beige-50 text-left transition-colors",
        selected
          ? "border-[1.5px] border-coral-300 px-[17px] py-[13px]"
          : "border border-beige-300 px-[17px] py-[13px] hover:border-beige-400"
      )}
    >
      <span
        className={cn(
          "text-b2-bold",
          selected ? "text-fluff-400" : "text-beige-900"
        )}
      >
        {label}
      </span>
      <span
        className={cn("text-b3", selected ? "text-fluff-400" : "text-beige-600")}
      >
        {price}
      </span>
    </button>
  )
}
