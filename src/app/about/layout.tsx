"use client"
import { useBoundStore } from "@/store/StoreProvider"
import { useEffect } from "react"

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const { setTitle } = useBoundStore((state) => ({
    setTitle: state.setTitle
  }))

  useEffect(() => {
    setTitle("О нас")
  }, [setTitle])
  return <section>{children}</section>
}
