import Image from "next/image"
import { ProductCtaLink } from "@/components/product-cta-link"
import { TrustRow } from "@/components/buying-module/trust-row"
import { TrustPilotStars } from "@/components/buying-module/trust-pilot-stars"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const bodyCopyClass = "text-b1 md:text-[1rem] md:leading-[1.375rem]"
const ratingText = "4.8 · based on 2,341 reviews"

type IconProps = {
  className?: string
}

type Review = {
  name: string
  title: string
  review: string
  daysAgo: string
}

const REVIEWS: Review[] = [
  {
    name: "Susan C.",
    title: "Best pillow out there",
    review:
      "As a side sleeper I could never keep my neck straight, the Firm Fluff finally fixed that. Best pillow out there.",
    daysAgo: "4 days ago",
  },
  {
    name: "Markus T.",
    title: "I was skeptical at first",
    review:
      "I'd wake up two or three times a night and never knew why. A week on the Soft Fluff and I'm sleeping through. I wake up genuinely rested for the first time in years.",
    daysAgo: "2 weeks ago",
  },
  {
    name: "Patrick M.",
    title: "Shoulder pain is gone",
    review:
      "The Down Feather cradles my head without going flat. My neck and shoulders genuinely feel looser in the morning, didn't expect a pillow to do that!",
    daysAgo: "3 weeks ago",
  },
]

function VerifiedBuyerIcon({ className }: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-[22px] shrink-0", className)}
    >
      <circle cx="11" cy="11" r="9" fill="currentColor" />
      <path
        d="M7.5 11L9.75 13.25L14.5 8.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ReviewCardStars() {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src="/images/icons/Star.svg"
          alt=""
          width={20}
          height={20}
          className="size-5"
          aria-hidden
        />
      ))}
    </div>
  )
}

function ReviewRatingText({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "text-[0.875rem] leading-[1.25rem] font-medium text-beige-900",
        className
      )}
    >
      {ratingText}
    </p>
  )
}

function TrustpilotLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/testimonials/Trustpilot.svg"
      alt="Trustpilot"
      width={98}
      height={24}
      className={cn("h-5 w-auto", className)}
    />
  )
}

function ReviewsSummaryMobile() {
  return (
    <div className="flex flex-col items-center gap-4 lg:hidden">
      <TrustpilotLogo />
      <div className="flex items-center gap-2.5">
        <TrustPilotStars />
        <ReviewRatingText />
      </div>
    </div>
  )
}

function ReviewsSummaryDesktop() {
  return (
    <div className="hidden flex-col items-center gap-5 lg:flex">
      <div className="flex items-center gap-2.5">
        <TrustPilotStars />
        <ReviewRatingText />
        <TrustpilotLogo />
      </div>
      <h2 className="text-h2 text-fluff-400">What our guests say</h2>
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-[300px] w-full flex-col justify-between rounded-[12px] border border-beige-100 bg-white px-5 py-6 lg:max-w-[307px] lg:rounded-xl">
      <div className="flex flex-col gap-5">
        <ReviewCardStars />
        <div className="flex flex-col gap-1">
          <h3 className="text-[1.125rem] leading-[1.5rem] font-bold text-fluff-400">
            {review.title}
          </h3>
          <p className={cn(bodyCopyClass, "text-beige-900")}>{review.review}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[1rem] leading-[1.375rem] font-bold text-fluff-400">
          {review.name}
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <VerifiedBuyerIcon className="text-coral-300" />
            <span className="whitespace-nowrap text-[0.875rem] leading-[1.25rem] font-medium text-beige-900">
              Verified Buyer
            </span>
          </div>
          <span className="whitespace-nowrap text-[0.875rem] leading-[1.25rem] font-medium text-beige-900">
            {review.daysAgo}
          </span>
        </div>
      </div>
    </article>
  )
}

export function ReviewsSection() {
  return (
    <section className="bg-beige-50 section-light">
      <PageContainer className="py-16 lg:pt-20 lg:pb-[152px]">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 lg:gap-10">
          <ReviewsSummaryMobile />
          <ReviewsSummaryDesktop />

          <div className="flex flex-col gap-5 lg:hidden">
            <h2 className="text-center text-h3 text-fluff-400">
              What our guests say
            </h2>
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>

          <div className="hidden justify-center gap-8 lg:flex">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
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
