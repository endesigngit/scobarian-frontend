"use client"

import { useBoundStore } from "@/store/StoreProvider"
import Link from "next/link"
import { useEffect } from "react"
export default function Home() {
  const { bears, fishes } = useBoundStore((state) => ({
    bears: state.bears,
    fishes: state.fishes
  }))

  return (
    <main>
      <div>
        <h3>Bears: {bears}</h3>
        <h3>Fishes: {fishes}</h3>
        <Link href="../">Go back</Link>
      </div>
    </main>
  )
}
