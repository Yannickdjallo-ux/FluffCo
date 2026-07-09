import Image from "next/image"

export function TrustPilotStars() {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label="4.8 out of 5 stars on Trustpilot"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src="/images/icons/Star.svg"
          alt=""
          width={16}
          height={16}
          className="size-4"
          aria-hidden
        />
      ))}
    </div>
  )
}
