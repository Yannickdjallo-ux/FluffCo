import { UspBar } from "@/components/usp-bar"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50">
      <UspBar
        message="Save 50% with the"
        linkText="Set of 2"
        linkHref="#product"
      />
    </header>
  )
}
