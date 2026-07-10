import { PageContainer } from "@/components/page-container"
import { ProductCtaLink } from "@/components/product-cta-link"

type UspBarProps = {
  message: string
  linkText?: string
  linkHref?: string
}

export function UspBar({ message, linkText, linkHref }: UspBarProps) {
  return (
    <div className="bg-beige-comp border-b border-beige-200 py-2 text-center">
      <PageContainer>
        <p className="text-[14px] leading-[1.125rem] text-beige-900 md:text-b2">
          {message}
          {linkText && linkHref ? (
            <>
              {" "}
              <ProductCtaLink className="text-fluff-400 font-bold underline-offset-2 hover:underline">
                {linkText}
              </ProductCtaLink>
            </>
          ) : null}
        </p>
      </PageContainer>
    </div>
  )
}
