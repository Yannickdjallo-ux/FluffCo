import type { ReactNode } from "react"

type OptionGroupProps = {
  label: string
  children: ReactNode
  className?: string
}

export function OptionGroup({ label, children, className }: OptionGroupProps) {
  return (
    <div className={className}>
      <p className="text-b3-bold text-beige-900">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  )
}
