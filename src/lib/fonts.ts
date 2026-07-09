import localFont from "next/font/local"

export const recoleta = localFont({
  src: "../../public/fonts/Latinotype - Recoleta SemiBold.otf",
  variable: "--font-recoleta",
  weight: "600",
  display: "swap",
})

export const recoletaAlt = localFont({
  src: "../../public/fonts/Latinotype - Recoleta Alt Regular.otf",
  variable: "--font-recoleta-alt",
  weight: "400",
  display: "swap",
})

export const pangram = localFont({
  src: [
    {
      path: "../../public/fonts/PPPangramSansRounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPPangramSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pangram",
  display: "swap",
})
