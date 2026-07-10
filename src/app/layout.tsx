import type { Metadata } from "next"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AppHeader } from "@/components/app-header"
import { CartProvider } from "@/lib/cart-context"
import { pangram, recoleta, recoletaAlt } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "FluffCo — 5-Star Hotel Quality Bedding",
  description:
    "Hotel-quality pillows designed for better sleep — soft or firm, down or down-alternative, with a 30-night trial.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-beige-50">
      <body
        className={`${recoleta.variable} ${recoletaAlt.variable} ${pangram.variable} overflow-x-hidden bg-beige-50 font-sans text-foreground antialiased`}
      >
        <TooltipProvider>
          <CartProvider>
            <AppHeader />
            <main className="overflow-x-hidden bg-beige-50">{children}</main>
          </CartProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
