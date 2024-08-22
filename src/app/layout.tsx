import type { Metadata } from "next"
import { lack, steppe } from "./fonts"
import "./globals.css"
import { useEffect } from "react"
import { BoundStoreProvider } from "@/store/StoreProvider"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"

export const metadata: Metadata = {
  title: "I’am skobarian",
  description: "skobarian app"
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body className={`${lack.variable} ${steppe.variable}`}>
        <BoundStoreProvider>
          <Header />
          <Breadcrumb />
          {children}
          <Footer />
        </BoundStoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
