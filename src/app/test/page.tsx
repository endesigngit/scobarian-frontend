"use client"

import { useBoundStore } from "@/store/StoreProvider"
import { Typography } from "@/UI/Typography/Typography"
import Link from "next/link"
import { useEffect } from "react"

export default function Test() {
  const { bears, fishes } = useBoundStore((state) => ({ bears: state.bears, fishes: state.fishes }))
  return (
    <main>
      <div>
        <h3>Bears: {bears}</h3> <h3>Fishes: {fishes}</h3>
        <Link href="../">
          <Typography tag="span" variant="text">
            Go back
          </Typography>
        </Link>
      </div>
    </main>
  )
}
