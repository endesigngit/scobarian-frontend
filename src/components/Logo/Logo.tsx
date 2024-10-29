"use client"
import Link from "next/link"
import styles from "./Logo.module.css"
import { clsx } from "clsx"
import { CSSTransition } from "react-transition-group"

export default function Logo() {
  return (
    <CSSTransition in appear timeout={300} classNames={{ ...styles }}>
      <div className={styles.logo}>
        <Link href="/" className={clsx(styles.logo_title)}>
          I’am skobarian
        </Link>
      </div>
    </CSSTransition>
  )
}
