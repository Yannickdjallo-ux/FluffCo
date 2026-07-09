import { FeatherIcon, LeafIcon } from "@/components/icons"
import { SelectedBadge } from "@/components/buying-module/selected-badge"
import type { FillIcon } from "@/lib/product-config"
import { cn } from "@/lib/utils"

const FILL_ICON_MAP = {
  feather: FeatherIcon,
  leaf: LeafIcon,
} as const

type OptionCardProps = {
  label: string
  description: string
  price: string
  icon: FillIcon
  selected: boolean
  onSelect: () => void
}

export function OptionCard({
  label,
  description,
  price,
  icon,
  selected,
  onSelect,
}: OptionCardProps) {
  const Icon = FILL_ICON_MAP[icon]

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl bg-beige-50 text-left transition-colors",
        selected
          ? "border-[1.5px] border-coral-300 px-[17px] py-[13px]"
          : "border border-beige-300 px-[17px] py-[13px] hover:border-beige-400"
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded bg-beige-100",
          selected ? "text-fluff-400" : "text-beige-900"
        )}
      >
        <Icon />
      </span>

      <span className="min-w-0 flex-1">
        <span
          className={cn(
            "block text-b2-bold",
            selected ? "text-fluff-400" : "text-beige-900"
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "block text-b3",
            selected ? "text-fluff-400" : "text-beige-600"
          )}
        >
          {description}
        </span>
      </span>

      <span className="flex shrink-0 items-center gap-2">
        <span
          className={cn(
            "text-base font-bold leading-[22px]",
            selected ? "text-fluff-400" : "text-beige-900"
          )}
        >
          {price}
        </span>
        {selected ? <SelectedBadge /> : null}
      </span>
    </button>
  )
}
