"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"

export default function Main() {
  return (
    <main>
      <section className={styles.image_block}>
        <Link href={"/"}>перейти к покупкам</Link>
      </section>
    </main>

  )
}
