import Image from "next/image"
import { ProductCtaLink } from "@/components/product-cta-link"
import { Button } from "@/components/ui/button"

const FEATURES = [
  "Plush and supportive",
  "Stays cool and holds shape",
  "Fitted to how you sleep",
  "True 5-star hotel quality",
  "30-night risk-free trial",
]

function FeatureCheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="size-6 shrink-0"
    >
      <path
        d="M3.84995 8.62001C3.70399 7.96253 3.7264 7.27885 3.91511 6.63235C4.10381 5.98584 4.4527 5.39745 4.92942 4.92173C5.40614 4.446 5.99526 4.09835 6.64216 3.911C7.28905 3.72365 7.97278 3.70267 8.62995 3.85001C8.99166 3.28431 9.48995 2.81876 10.0789 2.49629C10.6678 2.17382 11.3285 2.00479 11.9999 2.00479C12.6714 2.00479 13.332 2.17382 13.921 2.49629C14.5099 2.81876 15.0082 3.28431 15.3699 3.85001C16.0281 3.70203 16.713 3.72292 17.3609 3.91072C18.0089 4.09852 18.5988 4.44715 19.0758 4.92416C19.5528 5.40117 19.9014 5.99108 20.0892 6.63901C20.277 7.28694 20.2979 7.97184 20.1499 8.63001C20.7156 8.99171 21.1812 9.49001 21.5037 10.079C21.8261 10.6679 21.9952 11.3286 21.9952 12C21.9952 12.6715 21.8261 13.3321 21.5037 13.9211C21.1812 14.51 20.7156 15.0083 20.1499 15.37C20.2973 16.0272 20.2763 16.7109 20.089 17.3578C19.9016 18.0047 19.554 18.5938 19.0782 19.0705C18.6025 19.5473 18.0141 19.8961 17.3676 20.0848C16.7211 20.2736 16.0374 20.296 15.3799 20.15C15.0187 20.7179 14.52 21.1854 13.9301 21.5093C13.3401 21.8332 12.678 22.0031 12.0049 22.0031C11.3319 22.0031 10.6698 21.8332 10.0798 21.5093C9.48987 21.1854 8.99119 20.7179 8.62995 20.15C7.97278 20.2973 7.28905 20.2764 6.64216 20.089C5.99526 19.9017 5.40614 19.554 4.92942 19.0783C4.4527 18.6026 4.10381 18.0142 3.91511 17.3677C3.7264 16.7212 3.70399 16.0375 3.84995 15.38C3.27991 15.0192 2.81036 14.5202 2.485 13.9292C2.15963 13.3383 1.98901 12.6746 1.98901 12C1.98901 11.3254 2.15963 10.6617 2.485 10.0708C2.81036 9.47983 3.27991 8.98076 3.84995 8.62001Z"
        className="fill-coral-300"
      />
      <path
        d="M9 12L11 14L15 10"
        className="stroke-beige-50"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="bg-beige-50 section-light flex flex-col gap-8 px-5 py-16 lg:grid lg:grid-cols-[1fr_minmax(0,700px)_minmax(0,700px)_1fr] lg:gap-0 lg:px-0 lg:py-0">
      <div className="hidden lg:block" aria-hidden />

      <div className="relative h-[260px] shrink-0 overflow-hidden rounded-[12px] lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:h-auto lg:min-h-0 lg:rounded-none">
        <Image
          src="/images/Product/white-pillow.png"
          alt="FluffCo white hotel pillow on a bed with warm natural light"
          fill
          priority
          className="rounded-[12px] object-cover object-center lg:rounded-none"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex items-end justify-end p-3 lg:p-6">
          <Image
            src="/images/graphics/AptTherapy.png"
            alt="Apartment Therapy Best Overall Pillow award badge"
            width={128}
            height={128}
            className="size-20 lg:h-auto lg:w-32"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:col-start-2 lg:row-start-1 lg:justify-center lg:gap-8 lg:px-16 lg:py-20">
        <div className="flex flex-col gap-5">
          <h1 className="font-heading font-semibold text-fluff-400 max-lg:text-[2.5rem] max-lg:leading-[2.75rem] max-lg:tracking-[-0.09375rem] lg:max-w-[400px] lg:text-[3rem] lg:leading-[3.25rem] lg:tracking-[-0.125rem]">
            The last pillow you&apos;ll flip at 3 a.m.
          </h1>
          <p className="font-[family-name:var(--font-recoleta-alt)] text-[1.25rem] leading-[1.625rem] tracking-[0.03125rem] text-beige-900 lg:text-[1.375rem]">
            Flat by midnight, lumpy by morning? Not this one.
          </p>
          <ul className="space-y-3">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <FeatureCheckIcon />
                <span className="text-[1rem] leading-[1.375rem] text-beige-900 lg:text-[1.125rem]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Button asChild className="w-full lg:w-fit" size="default">
          <ProductCtaLink>
            <span className="lg:hidden">Upgrade your Pillow</span>
            <span className="hidden lg:inline">Shop Hotel Pillow</span>
          </ProductCtaLink>
        </Button>
      </div>
    </section>
  )
}
