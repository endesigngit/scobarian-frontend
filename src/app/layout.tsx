import type { Metadata } from "next"
import { lack, steppe } from "./fonts"
import "./globals.css"
import { useEffect } from "react"
import { BoundStoreProvider } from "@/store/StoreProvider"
import Header from "@/components/header/header"

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
          <Header></Header>
          {children}
        </BoundStoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
