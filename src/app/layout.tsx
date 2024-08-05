import type { Metadata } from "next"
import { BoundStoreProvider } from "@/store/StoreProvider"
import clsx from "clsx"
import "./globals.css"

export const metadata: Metadata = {
  title: "I'am skobarian",
  description: ""
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html>
      <BoundStoreProvider>
        <body>{children}</body>
      </BoundStoreProvider>
    </html>
  )
}

export default RootLayout
