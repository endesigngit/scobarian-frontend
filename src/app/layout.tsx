import type { Metadata } from "next"
import { lack, steppe } from "./fonts"
import "./globals.css"
import { Suspense, useEffect } from "react"
import { BoundStoreProvider } from "@/store/StoreProvider"
import Footer from "@/components/Footer/Footer"
import MainHeader from "@/components/MainHeader/MainHeader"
import Script from "next/script"
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika"

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
      <Script  type="text/javascript" id="metrika-counter" strategy="afterInteractive" >
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(98691808, "init", {
                defer: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
          });`}
        </Script>
        <Suspense fallback={<></>}>
            <YandexMetrika />
          </Suspense>
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
