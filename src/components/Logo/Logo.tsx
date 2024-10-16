"use client"
import Link from "next/link"
import styles from "./Logo.module.css"
import { clsx } from "clsx"

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/" className={clsx(styles.logo_title, "moveTop_anim", "moveTop_anim_s1")}>
        I’am skobarian
      </Link>
    </div>
  )
}
