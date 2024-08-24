"use client"
import Link from "next/link"
import styles from "./Breadcrumb.module.css"
import { clsx } from "clsx"
import Logo from "../Logo/Logo"
import { useState } from "react"

type BreadcrumbProps = {
  pageTitle?: string
  padding?: boolean
}

export default function Breadcrumb({ pageTitle, padding }: BreadcrumbProps) {
  // const [innerTitle, setInnerTitle] = useState<string | null>("худи")
  return (
    <div className={clsx(styles.breadcrumb, padding && styles.breadcrumb_full)}>
      <div className={styles.main_grid_container}>
        <div className={styles.left_side}>
          <div className={styles.breadcrumb_col}>
            <Logo />
          </div>
          <div className={styles.breadcrumb_col}>
            <h3 className={styles.breadcrumb_title}>{pageTitle}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
