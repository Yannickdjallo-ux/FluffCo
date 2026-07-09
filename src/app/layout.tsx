import type { Metadata } from "next"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AppHeader } from "@/components/app-header"
import { pangram, recoleta } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "FluffCo — 5-Star Hotel Quality Bedding",
  description: "Premium sleep and wellness bedding for the home.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${recoleta.variable} ${pangram.variable} font-sans antialiased`}
      >
        <TooltipProvider>
          <AppHeader />
          <main>{children}</main>
        </TooltipProvider>
      </body>
    </html>
  )
}
