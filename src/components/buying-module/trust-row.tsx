import { ShieldIcon, TruckIcon } from "@/components/icons"

const TRUST_ITEMS = [
  {
    icon: TruckIcon,
    label: "Free shipping",
  },
  {
    icon: ShieldIcon,
    label: "30-day money back guarantee",
  },
] as const

export function TrustRow() {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-1 pt-4">
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
