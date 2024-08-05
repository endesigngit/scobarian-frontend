"use client"

import { useBoundStore } from "@/store/StoreProvider"
import Link from "next/link"
import { Typography } from "@/UI/Typography/Typography"
import styles from "./page.module.css"

export default function Home() {
  const { bears, fishes, addFish, addBear, eatFish } = useBoundStore((state) => ({
    bears: state.bears,
    fishes: state.fishes,
    addFish: state.addFish,
    addBear: state.addBear,
    eatFish: state.eatFish
  }))

  return (
    <main>
      <div>
        <h3>Bears: {bears}</h3>
        <h3>Fishes: {fishes}</h3>
        <button onClick={eatFish}>eat fish</button>
        <br />
        <button onClick={addBear}>add bear</button>
        <br />
        <button onClick={addFish}>add fish</button>
      </div>
      <Link href="/test">
        <Typography tag="span" variant="text">
          Go to test page
        </Typography>
      </Link>
    </main>
  )
}
