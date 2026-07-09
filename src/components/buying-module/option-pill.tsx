import { cn } from "@/lib/utils"

type OptionPillProps = {
  label: string
  selected: boolean
  onSelect: () => void
}

export function OptionPill({ label, selected, onSelect }: OptionPillProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "rounded-full bg-beige-50 text-center transition-colors",
        selected
          ? "border-[1.5px] border-coral-300 px-[17px] py-2 text-b2-bold text-fluff-400"
          : "border border-beige-300 px-[17px] py-2 text-b2 text-beige-600 hover:border-beige-400"
      )}
    >
      {label}
    </button>
  )
}
