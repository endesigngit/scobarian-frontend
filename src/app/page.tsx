"use client"

import { useBoundStore } from "@/store/StoreProvider"
import styles from "./page.module.css"
import Link from "next/link"

const Home = () => {
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
      <Link href="/test">Go to test page</Link>
    </main>
  )
}

export default Home
