import localFont from "next/font/local"

// Font files can be colocated inside of `app`
export const lack = localFont({
  src: "../assets/fonts/Lack-Regular.ttf",
  variable: "--font-lack",
  style: "normal",
  display: "swap"
})
export const steppe = localFont({
  src: "../assets/fonts/Steppe.otf",
  variable: "--font-steppe",
  style: "normal",
  display: "swap"
})
