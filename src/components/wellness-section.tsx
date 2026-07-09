import Image from "next/image"
import Link from "next/link"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const bodyCopyClass = "text-b1 md:text-[1rem] md:leading-[1.375rem]"
const bodyCopyBoldClass = "text-b1-bold md:text-[1rem] md:leading-[1.375rem]"

type IconProps = {
  className?: string
}

function MoonIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-5 shrink-0", className)}
    >
      <path
        d="M20.985 12.486C20.8912 14.2221 20.2966 15.894 19.273 17.2994C18.2494 18.7048 16.8406 19.7837 15.217 20.4055C13.5933 21.0274 11.8243 21.1656 10.1237 20.8035C8.42318 20.4414 6.86392 19.5945 5.63442 18.3652C4.40493 17.1358 3.55785 15.5766 3.19558 13.8761C2.83331 12.1756 2.97136 10.4065 3.59304 8.78282C4.21472 7.15909 5.29342 5.75019 6.69874 4.72644C8.10406 3.70269 9.77583 3.10791 11.512 3.014C11.917 2.992 12.129 3.474 11.914 3.817C11.1949 4.96756 10.8869 6.32787 11.0405 7.67595C11.194 9.02403 11.7999 10.2803 12.7593 11.2397C13.7187 12.1991 14.9749 12.805 16.323 12.9585C17.6711 13.112 19.0314 12.8041 20.182 12.085C20.526 11.87 21.007 12.081 20.985 12.486Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BoneIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-5 shrink-0", className)}
    >
      <path
        d="M17 10C17.7 9.3 18.69 10 19.5 10C20.163 10 20.7989 9.73661 21.2678 9.26777C21.7366 8.79893 22 8.16304 22 7.5C22 6.83696 21.7366 6.20107 21.2678 5.73223C20.7989 5.26339 20.163 5 19.5 5C19.3674 5 19.2402 4.94732 19.1464 4.85355C19.0527 4.75979 19 4.63261 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C15.837 2 15.2011 2.26339 14.7322 2.73223C14.2634 3.20107 14 3.83696 14 4.5C14 5.31 14.7 6.3 14 7L7 14C6.3 14.7 5.31 14 4.5 14C3.83696 14 3.20107 14.2634 2.73223 14.7322C2.26339 15.2011 2 15.837 2 16.5C2 17.163 2.26339 17.7989 2.73223 18.2678C3.20107 18.7366 3.83696 19 4.5 19C4.78 19 5 19.22 5 19.5C5 20.163 5.26339 20.7989 5.73223 21.2678C6.20107 21.7366 6.83696 22 7.5 22C8.16304 22 8.79893 21.7366 9.26777 21.2678C9.73661 20.7989 10 20.163 10 19.5C10 18.69 9.3 17.7 10 17L17 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TemperatureIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-5 shrink-0", className)}
    >
      <path
        d="M14 4V14.54C14.7626 14.9803 15.3586 15.6599 15.6945 16.4734C16.0325 17.2869 16.0916 18.1888 15.8637 19.0394C15.6358 19.8899 15.1336 20.6415 14.435 21.1775C13.7365 21.7136 12.8805 22.0041 12 22.0041C11.1195 22.0041 10.2635 21.7136 9.56496 21.1775C8.86638 20.6415 8.3642 19.8899 8.1363 19.0394C7.9084 18.1888 7.96752 17.2869 8.30448 16.4734C8.64145 15.6599 9.23743 14.9803 10 14.54V4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SparkleIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-5 shrink-0", className)}
    >
      <path
        d="M11.017 2.81401C11.0598 2.58462 11.1815 2.37743 11.3611 2.22833C11.5406 2.07924 11.7666 1.99762 12 1.99762C12.2333 1.99762 12.4593 2.07924 12.6389 2.22833C12.8184 2.37743 12.9401 2.58462 12.983 2.81401L14.034 8.37201C14.1086 8.76716 14.3006 9.13063 14.585 9.41498C14.8693 9.69934 15.2328 9.89137 15.628 9.96601L21.186 11.017C21.4153 11.0599 21.6225 11.1816 21.7716 11.3611C21.9207 11.5406 22.0023 11.7667 22.0023 12C22.0023 12.2334 21.9207 12.4594 21.7716 12.6389C21.6225 12.8184 21.4153 12.9402 21.186 12.983L15.628 14.034C15.2328 14.1087 14.8693 14.3007 14.585 14.585C14.3006 14.8694 14.1086 15.2329 14.034 15.628L12.983 21.186C12.9401 21.4154 12.8184 21.6226 12.6389 21.7717C12.4593 21.9208 12.2333 22.0024 12 22.0024C11.7666 22.0024 11.5406 21.9208 11.3611 21.7717C11.1815 21.6226 11.0598 21.4154 11.017 21.186L9.96595 15.628C9.89131 15.2329 9.69928 14.8694 9.41492 14.585C9.13057 14.3007 8.7671 14.1087 8.37195 14.034L2.81395 12.983C2.58456 12.9402 2.37737 12.8184 2.22827 12.6389C2.07917 12.4594 1.99756 12.2334 1.99756 12C1.99756 11.7667 2.07917 11.5406 2.22827 11.3611C2.37737 11.1816 2.58456 11.0599 2.81395 11.017L8.37195 9.96601C8.7671 9.89137 9.13057 9.69934 9.41492 9.41498C9.69928 9.13063 9.89131 8.76716 9.96595 8.37201L11.017 2.81401Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 2V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-[18px] shrink-0", className)}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const LEFT_BENEFITS = [
  { icon: MoonIcon, label: "Deeper sleep" },
  { icon: BoneIcon, label: "Spinal alignment" },
] as const

const RIGHT_BENEFITS = [
  { icon: TemperatureIcon, label: "Temperature regulation" },
  { icon: SparkleIcon, label: "Wake refreshed" },
] as const

function BenefitItem({
  icon: Icon,
  label,
}: {
  icon: typeof MoonIcon
  label: string
}) {
  return (
    <li className="flex items-center gap-2 lg:gap-3">
      <Icon className="text-maize-300" />
      <span className={cn(bodyCopyClass, "text-beige-50")}>{label}</span>
    </li>
  )
}

function BenefitsGrid() {
  return (
    <div className="grid grid-cols-2">
      <ul className="flex flex-col gap-6">
        {LEFT_BENEFITS.map((benefit) => (
          <BenefitItem key={benefit.label} {...benefit} />
        ))}
      </ul>
      <ul className="flex flex-col gap-6">
        {RIGHT_BENEFITS.map((benefit) => (
          <BenefitItem key={benefit.label} {...benefit} />
        ))}
      </ul>
    </div>
  )
}

function WellnessImage() {
  return (
    <div className="relative min-h-[300px] w-full overflow-hidden rounded-3xl lg:min-h-[550px] lg:self-stretch">
      <Image
        src="/images/wellness/dr-maya.jpg"
        alt="Dr. Maya Ellison, sleep physiologist"
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-x-0 bottom-0 flex justify-center p-4">
        <p className={cn(bodyCopyClass, "rounded border border-dashed border-beige-300 bg-beige-50/95 px-3 py-2 text-beige-800")}>
          *Dr. Maya Ellison is a fictional persona
        </p>
      </div>
    </div>
  )
}

export function WellnessSection() {
  return (
    <section className="bg-fluff-400">
      <PageContainer className="py-[120px]">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="order-2 lg:order-1">
            <WellnessImage />
          </div>

          <div className="order-1 flex flex-col gap-10 lg:order-2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <p className={cn(bodyCopyClass, "text-maize-300")}>
                  The science of sleeping right
                </p>
                <h2 className="text-h3 text-beige-50 lg:text-h2">
                  Sleep isn&apos;t downtime.
                  <br />
                  It&apos;s when everything resets.
                </h2>
                <p className={cn(bodyCopyClass, "text-beige-50")}>
                  Poor sleep quietly taxes your focus, your mood, and how well
                  your body recovers. The right pillow is the smallest change
                  with the largest return on how you wake up.
                </p>
              </div>

              <BenefitsGrid />
            </div>

            <blockquote className="rounded-tr-xl rounded-br-xl rounded-bl-xl bg-fluff-500 p-5">
              <p className={cn(bodyCopyClass, "text-beige-50")}>
                &ldquo;A pillow&apos;s only job is to keep your head in line with
                your spine. Match the loft to how you sleep, and your body stops
                working all night to compensate.&rdquo;
              </p>
              <footer className={cn(bodyCopyClass, "mt-2 text-beige-50")}>
                <span className={bodyCopyBoldClass}>Dr. Maya Ellison</span>
                <span className="text-maize-300"> · Sleep physiologist</span>
              </footer>
            </blockquote>

            <div>
              <Button
                asChild
                variant="secondary"
                className="w-full bg-beige-50 text-fluff-400 hover:bg-beige-100"
              >
                <Link href="#product">Choose your firmness</Link>
              </Button>
              <p className={cn(bodyCopyClass, "flex items-start gap-3 pt-5 text-fluff-100")}>
                <InfoIcon className="mt-0.5 text-maize-300" />
                Side sleepers need a firmer, higher loft to keep the spine
                neutral; back and stomach sleepers need less.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
