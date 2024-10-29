"use client"
import { useBoundStore } from "@/store/StoreProvider"
import { useEffect } from "react"

export default function TailoringLayout({ children }: { children: React.ReactNode }) {
  const { setTitle } = useBoundStore((state) => ({
    setTitle: state.setTitle
  }))

  useEffect(() => {
    setTitle("Пошив")
  }, [setTitle])
  return <>{children}</>
}
