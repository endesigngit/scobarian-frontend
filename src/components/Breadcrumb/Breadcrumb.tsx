"use client"
// import Link from "next/link"
import styles from "./Breadcrumb.module.css"
import { clsx } from "clsx"
import Logo from "../Logo/Logo"
import { useEffect, useState } from "react"
// import { useEffect, useState } from "react"

type BreadcrumbProps = {
  pageTitle: string
  padding?: boolean
}

export default function Breadcrumb({ pageTitle, padding }: BreadcrumbProps) {
  const [isActive, setActive] = useState<boolean>(false)
  useEffect(() => {
    if (pageTitle != "") setActive(true)
    setTimeout(() => {
      setActive(false)
    }, 1000)
  }, [pageTitle])
  return (
    <div className={clsx(styles.breadcrumb, padding && styles.breadcrumb_full)}>
      <div className={styles.main_grid_container}>
        <div className={clsx(styles.breadcrumb_col, "main_col_1")}>
          <Logo />
        </div>
        <div className={clsx(styles.breadcrumb_col, "main_col_2")}>
          <h3 className={clsx(styles.breadcrumb_title, isActive && "moveTop_anim", "moveTop_anim_s2")}>{pageTitle}</h3>
        </div>
      </div>
    </div>
  )
}
