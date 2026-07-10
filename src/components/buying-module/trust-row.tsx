import { ShieldIcon, TruckIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

const TRUST_ITEMS = [
  {
    icon: ShieldIcon,
    label: "30-night risk-free trial",
  },
  {
    icon: TruckIcon,
    label: "Free shipping on every order",
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
          : "flex-col gap-1.5"
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
