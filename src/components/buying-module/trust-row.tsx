import { ShieldIcon, TruckIcon } from "@/components/icons"
import { TRUST_COPY } from "@/lib/site-copy"
import { cn } from "@/lib/utils"

const TRUST_ITEMS = [
  {
    icon: TruckIcon,
    label: TRUST_COPY.freeShipping,
  },
  {
    icon: ShieldIcon,
    label: TRUST_COPY.moneyBackGuarantee,
  },
] as const

type TrustRowProps = {
  layout?: "inline" | "stacked"
}

export function TrustRow({ layout = "stacked" }: TrustRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center pt-4",
        layout === "inline"
          ? "flex-row flex-wrap justify-center gap-3 sm:flex-nowrap"
          : "flex-col gap-1.5 lg:flex-row lg:flex-nowrap lg:gap-3"
      )}
    >
      {TRUST_ITEMS.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.label} className="flex items-center gap-1">
            <Icon className="text-coral-300" />
            <span className="whitespace-nowrap text-[0.875rem] leading-[1.25rem] font-medium text-beige-900">
              {item.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
