import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect } from "react"
import { BoundStoreProvider } from "@/store/StoreProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-noto_sans" })

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
      <body className={inter.className}>
        <BoundStoreProvider>{children}</BoundStoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
