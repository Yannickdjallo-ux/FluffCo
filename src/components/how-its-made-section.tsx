import { ProductCtaLink } from "@/components/product-cta-link"
import { TrustRow } from "@/components/buying-module/trust-row"
import { LeafIcon } from "@/components/icons"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const bodyCopyClass = "text-b1 md:text-[1rem] md:leading-[1.375rem]"

type IconProps = {
  className?: string
}

function ConciergeIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-6 shrink-0", className)}
    >
      <path
        d="M3 20C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V18C2 17.4696 2.21071 16.9609 2.58579 16.5858C2.96086 16.2107 3.46957 16 4 16H20C20.5304 16 21.0391 16.2107 21.4142 16.5858C21.7893 16.9609 22 17.4696 22 18V19C22 19.2652 21.8946 19.5196 21.7071 19.7071C21.5196 19.8946 21.2652 20 21 20H3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16C20 13.8783 19.1571 11.8434 17.6569 10.3431C16.1566 8.84285 14.1217 8 12 8C9.87827 8 7.84344 8.84285 6.34315 10.3431C4.84285 11.8434 4 13.8783 4 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FilterIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-6 shrink-0", className)}
    >
      <path
        d="M10 5H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 5H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TestIcon({ className }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-6 shrink-0", className)}
    >
      <path
        d="M21 7L6.81997 21.18C6.28843 21.7057 5.57048 21.9997 4.82291 21.9978C4.07534 21.9959 3.35887 21.6983 2.82997 21.17C2.29993 20.6394 2.0022 19.92 2.0022 19.17C2.0022 18.42 2.29993 17.7006 2.82997 17.17L17 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2L22 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const USP_ITEMS = [
  {
    icon: ConciergeIcon,
    title: "5-star hotel quality",
    description:
      "Built on the same lines as luxury hotel pillows. The real thing, minus the hotel price tag.",
  },
  {
    icon: FilterIcon,
    title: "Fitted to how you sleep",
    description:
      "Firm Fluff or Soft Fluff, matches to your sleeping position. Not one-size-fits-all.",
  },
  {
    icon: LeafIcon,
    title: "Certified, humane fluff™",
    description:
      "RDS-certified fill and OEKO-TEX tested, comfort you can feel good about.",
  },
  {
    icon: TestIcon,
    title: "Meticulously tested",
    description:
      "Checked for loft, support, and durability before it earns a place on your bed.",
  },
] as const

type UspItem = (typeof USP_ITEMS)[number]

function UspCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof ConciergeIcon
  title: string
  description: string
}) {
  return (
    <article className="flex flex-col gap-3 rounded-[12px] border border-beige-100 bg-white p-6 lg:rounded-xl">
      <Icon className="size-6 text-coral-300" />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[18px] leading-6 font-bold text-fluff-400">{title}</h3>
        <p className={cn(bodyCopyClass, "text-beige-900")}>{description}</p>
      </div>
    </article>
  )
}

function ProductVideo() {
  return (
    <div className="relative mx-auto aspect-[23/16] w-full max-w-[345px] overflow-hidden rounded-[12px] lg:aspect-auto lg:h-full lg:min-h-[384px] lg:shrink-0 lg:self-stretch lg:rounded-xl">
      <video
        src="/video/product-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 size-full rounded-[12px] object-cover lg:rounded-xl"
        aria-label="Close-up of FluffCo hotel pillow fabric and construction"
      />
    </div>
  )
}

function UspColumn({ items }: { items: readonly UspItem[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <UspCard key={item.title} {...item} />
      ))}
    </div>
  )
}

export function HowItsMadeSection() {
  const leftItems = USP_ITEMS.slice(0, 2)
  const rightItems = USP_ITEMS.slice(2, 4)

  return (
    <section className="bg-beige-50 section-light">
      <PageContainer className="py-16 lg:px-[104px] lg:py-20">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10">
          <header className="mx-auto flex max-w-[440px] flex-col items-center gap-5 text-center">
            <span className="rounded-md bg-beige-comp px-2 py-1 text-[0.875rem] leading-[1.25rem] font-medium text-fluff-400">
              How it&apos;s made
            </span>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-h3 text-fluff-400 lg:text-h2">
                Made in the same factories as five-star hotels
              </h2>
              <p className={cn(bodyCopyClass, "text-beige-900")}>
                The same pillow the best hotels put on their beds, for a price
                that actually makes sense.
              </p>
            </div>
          </header>

          <div className="flex flex-col gap-6 lg:hidden">
            <UspColumn items={leftItems} />
            <ProductVideo />
            <UspColumn items={rightItems} />
          </div>

          <div className="mx-auto hidden w-fit lg:grid lg:grid-cols-[300px_345px_300px] lg:items-stretch lg:gap-6">
            <UspColumn items={leftItems} />
            <ProductVideo />
            <UspColumn items={rightItems} />
          </div>

          <div className="mx-auto flex w-full flex-col items-stretch lg:items-center">
            <Button asChild className="w-full lg:w-fit lg:max-w-[344px]">
              <ProductCtaLink>Shop Hotel Pillow</ProductCtaLink>
            </Button>
            <TrustRow />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
