import Link from "next/link"
import { PageContainer } from "@/components/page-container"

type UspBarProps = {
  message: string
  linkText?: string
  linkHref?: string
}

export function UspBar({ message, linkText, linkHref }: UspBarProps) {
  return (
    <div className="bg-beige-bg border-b border-beige-200 py-2 text-center">
      <PageContainer>
        <p className="text-b3 text-beige-900 md:text-b2">
          {message}
          {linkText && linkHref ? (
            <>
              {" "}
              <Link
                href={linkHref}
                className="text-fluff-400 font-bold underline-offset-2 hover:underline"
              >
                {linkText}
              </Link>
            </>
          ) : null}
        </p>
      </PageContainer>
    </div>
  )
}
