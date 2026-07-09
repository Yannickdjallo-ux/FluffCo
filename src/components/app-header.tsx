"use client"

import Image from "next/image"
import Link from "next/link"
import { PageContainer } from "@/components/page-container"
import { UspBar } from "@/components/usp-bar"

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.10303 6.034H20.897"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.4 5.467C3.14036 5.81319 3 6.23426 3 6.667V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6.667C21 6.23426 20.8596 5.81319 20.6 5.467L18.6 2.8C18.4137 2.55161 18.1721 2.35 17.8944 2.21115C17.6167 2.07229 17.3105 2 17 2H7C6.68951 2 6.38328 2.07229 6.10557 2.21115C5.82786 2.35 5.58629 2.55161 5.4 2.8L3.4 5.467Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50">
      <UspBar
        message="Save 50% with the"
        linkText="Set of 2"
        linkHref="#product"
      />

      <div className="border-b border-beige-200 bg-beige-50/95 backdrop-blur-sm">
        <PageContainer className="flex items-center justify-between py-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/brand/fluffcoLogo.svg"
              alt="FluffCo"
              width={120}
              height={20}
              priority
            />
          </Link>

          <button
            type="button"
            aria-label="Shopping bag"
            className="flex size-10 items-center justify-center rounded-full text-fluff-400 transition-colors hover:bg-beige-100"
          >
            <ShoppingBagIcon />
          </button>
        </PageContainer>
      </div>
    </header>
  )
}
