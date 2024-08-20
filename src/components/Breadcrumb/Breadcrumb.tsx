"use client"
import Link from "next/link"
import styles from "./Breadcrumb.module.css"
import { clsx } from "clsx"
import Logo from "../Logo/Logo"
import { useState } from "react"

export default function Breadcrumb() {
  const [innerTitle, setInnerTitle] = useState<string | null>("худи")
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.main_grid_container}>
        <div className={styles.left_side}>
          <div className={styles.breadcrumb_col}>
            <Logo />
          </div>
          <div className={styles.breadcrumb_col}>
            <h3 className={styles.breadcrumb_title}>{innerTitle}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
