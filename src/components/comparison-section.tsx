import Image from "next/image"
import { ProductCtaLink } from "@/components/product-cta-link"
import { TrustRow } from "@/components/buying-module/trust-row"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const bodyCopyClass = "text-b1 md:text-[1rem] md:leading-[1.375rem]"

type IconProps = {
  className?: string
}

function ComparisonCheckIcon({ className }: IconProps) {
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
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M8 12L10.5 14.5L16 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ComparisonCrossIcon({ className }: IconProps) {
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
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M9 9L15 15M15 9L9 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type ComparisonDetail = {
  text: string
  positive: boolean
}

type ComparisonCard = {
  id: string
  title: string
  variant: "negative" | "featured"
  details: ComparisonDetail[]
}

const FLUFFCO_DETAILS: ComparisonDetail[] = [
  { text: "Hotel quality at a fair price", positive: true },
  { text: "Choose soft or firm for your sleep style", positive: true },
  { text: "Responsibly sourced, certified fill", positive: true },
  { text: "30-night risk-free trial", positive: true },
]

const FLUFFCO_DETAILS_MOBILE: ComparisonDetail[] = [
  { text: "5-star hotel quality", positive: true },
  ...FLUFFCO_DETAILS.slice(1),
]

const LUXURY_DETAILS: ComparisonDetail[] = [
  { text: "Genuine hotel quality", positive: true },
  { text: "Over $200 for one pillow", positive: false },
  { text: "Usually one firmness — not tailored to you", positive: false },
  { text: "No home trial", positive: false },
]

const TYPICAL_DETAILS: ComparisonDetail[] = [
  { text: "Goes flat within months", positive: false },
  { text: "No choice in firmness", positive: false },
  { text: "Fill quality often unknown", positive: false },
  { text: "Often needs replacing within a year", positive: false },
]

const DESKTOP_CARDS: ComparisonCard[] = [
  {
    id: "typical",
    title: "A typical pillow",
    variant: "negative",
    details: TYPICAL_DETAILS,
  },
  {
    id: "luxury",
    title: "Luxury hotel brands",
    variant: "negative",
    details: LUXURY_DETAILS,
  },
  {
    id: "fluffco",
    title: "FluffCo Hotel Pillow",
    variant: "featured",
    details: FLUFFCO_DETAILS,
  },
]

const MOBILE_CARDS: ComparisonCard[] = [
  {
    id: "fluffco",
    title: "FluffCo Hotel Pillow",
    variant: "featured",
    details: FLUFFCO_DETAILS_MOBILE,
  },
  {
    id: "luxury",
    title: "Luxury hotel brands",
    variant: "negative",
    details: LUXURY_DETAILS,
  },
  {
    id: "typical",
    title: "A typical pillow",
    variant: "negative",
    details: TYPICAL_DETAILS,
  },
]

function ComparisonHero() {
  return (
    <div className="relative h-[440px] w-full overflow-hidden rounded-[12px] lg:h-[300px] lg:rounded-3xl">
      <Image
        src="/images/comparisson/Woman-bed-2.png"
        alt=""
        fill
        className="rounded-[12px] object-cover object-center lg:hidden lg:rounded-none"
        sizes="100vw"
        priority={false}
      />
      <Image
        src="/images/comparisson/woman-bed-1.png"
        alt=""
        fill
        className="hidden rounded-[12px] object-cover object-center lg:block lg:rounded-none"
        sizes="(max-width: 1024px) 100vw, 1120px"
        priority={false}
      />

      <div className="relative flex h-full flex-col p-5 lg:justify-end lg:p-8">
        <div className="flex flex-1 flex-col items-center justify-between lg:flex-none lg:items-start lg:justify-end lg:gap-4">
          <h2 className="order-1 text-center text-h3 text-fluff-400 lg:order-2 lg:text-left lg:text-h2">
            The 5-star standard,
            <br />
            minus the 5-star price
          </h2>

          <span className="order-2 rounded-md border border-fluff-200 bg-fluff-100 px-2 py-1 text-[0.75rem] leading-[1.125rem] font-bold text-fluff-400 lg:order-1 lg:self-start">
            How we compare
          </span>
        </div>
      </div>
    </div>
  )
}

function ComparisonDetailRow({
  detail,
  variant,
}: {
  detail: ComparisonDetail
  variant: ComparisonCard["variant"]
}) {
  const Icon = detail.positive ? ComparisonCheckIcon : ComparisonCrossIcon

  return (
    <div className="flex items-center gap-2.5">
      <Icon
        className={cn(
          detail.positive ? "text-fluff-400" : "text-coral-300"
        )}
      />
      <p
        className={cn(
          bodyCopyClass,
          variant === "featured" ? "text-fluff-400" : "text-beige-900"
        )}
      >
        {detail.text}
      </p>
    </div>
  )
}

function ComparisonCardView({ card }: { card: ComparisonCard }) {
  const isFeatured = card.variant === "featured"

  return (
    <article
      className={cn(
        "flex flex-col rounded-[12px] lg:rounded-2xl",
        isFeatured
          ? "border-[1.5px] border-fluff-200 bg-fluff-100 p-[1.5px]"
          : "border border-coral-200 bg-coral-100 p-px"
      )}
    >
      <div className="flex flex-col gap-4 px-5 py-6">
        <h3
          className={cn(
            "text-[1.25rem] leading-[1.625rem] font-bold",
            isFeatured ? "text-fluff-400" : "text-beige-900"
          )}
        >
          {card.title}
        </h3>
        <div className="flex flex-col gap-2.5">
          {card.details.map((detail) => (
            <ComparisonDetailRow
              key={detail.text}
              detail={detail}
              variant={card.variant}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

function ComparisonCards({
  cards,
  className,
}: {
  cards: ComparisonCard[]
  className?: string
}) {
  return (
    <div className={className}>
      {cards.map((card) => (
        <ComparisonCardView key={card.id} card={card} />
      ))}
    </div>
  )
}

export function ComparisonSection() {
  return (
    <section className="bg-beige-50 section-light">
      <PageContainer className="py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 lg:gap-10">
          <ComparisonHero />

          <ComparisonCards
            cards={MOBILE_CARDS}
            className="flex flex-col gap-5 lg:hidden"
          />
          <ComparisonCards
            cards={DESKTOP_CARDS}
            className="hidden gap-8 lg:grid lg:grid-cols-3"
          />

          <div className="mx-auto flex w-full flex-col items-stretch lg:items-center">
            <Button asChild className="w-full lg:w-fit lg:max-w-[344px]">
              <ProductCtaLink>
                <span className="lg:hidden">Find your pillow</span>
                <span className="hidden lg:inline">Shop the Hotel Pillow</span>
              </ProductCtaLink>
            </Button>
            <TrustRow />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
