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
    <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
      {TRUST_ITEMS.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.label} className="flex items-center gap-1">
            <Icon className="text-coral-300" />
            <span className="text-b2 text-beige-900">{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}
