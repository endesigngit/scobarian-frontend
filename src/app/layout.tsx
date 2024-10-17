import type { Metadata } from "next"
import { lack, steppe } from "./fonts"
import "./globals.css"
import { useEffect } from "react"
import { BoundStoreProvider } from "@/store/StoreProvider"
import Footer from "@/components/Footer/Footer"
import MainHeader from "@/components/MainHeader/MainHeader"

export const metadata: Metadata = {
  title: {
    default: "I’am skobarian - пошив корпоративного мерча с доставкой",
    template: ""
  },
  description: "Шьём мерч с символикой бизнеса по нашим лекалам с любыми нанесениями большим тиражом"
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body className={`${lack.variable} ${steppe.variable}`}>
        <BoundStoreProvider>
          <MainHeader />
          {children}
          <Footer />
        </BoundStoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
