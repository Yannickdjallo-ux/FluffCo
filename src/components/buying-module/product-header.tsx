import { TrustPilotStars } from "@/components/buying-module/trust-pilot-stars"
import { PRODUCT_RATING_TEXT } from "@/lib/site-copy"

export function ProductHeader() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-h3 text-fluff-400">FluffCo Hotel Pillow</h2>
      <div className="flex items-center gap-2 pt-1">
        <TrustPilotStars />
        <p className="text-b2 text-beige-900">{PRODUCT_RATING_TEXT}</p>
      </div>
    </div>
  )
}
