"use client"
import Link from "next/link"
import styles from "./Logo.module.css"
import { clsx } from "clsx"

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.logo_title}>
        I’am skobarian
      </Link>
    </div>
  )
}
