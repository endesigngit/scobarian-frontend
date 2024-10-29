"use client"
import Link from "next/link"
import styles from "./Logo.module.css"
import { clsx } from "clsx"
import { CSSTransition } from "react-transition-group"
import { useRef } from "react"

export default function Logo() {
  const nodeRef = useRef(null)
  return (
    <CSSTransition nodeRef={nodeRef} in appear timeout={300} classNames={{ ...styles }}>
      <div className={styles.logo} ref={nodeRef}>
        <Link href="/" className={clsx(styles.logo_title)}>
          I’am skobarian
        </Link>
      </div>
    </CSSTransition>
  )
}
