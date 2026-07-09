import { cn } from "@/lib/utils"

export function PageContainer({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1400px] px-5 md:px-16",
        className
      )}
    >
      {children}
    </div>
  )
}
