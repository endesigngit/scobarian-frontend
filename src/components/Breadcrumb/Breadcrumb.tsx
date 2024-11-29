"use client"
import styles from "./Breadcrumb.module.css"
import { clsx } from "clsx"
import Logo from "../Logo/Logo"
import { useEffect, useRef, useState } from "react"
import { useBoundStore } from "@/store/StoreProvider"
import { CSSTransition } from "react-transition-group"

type BreadcrumbProps = {
  padding?: boolean
}

export default function Breadcrumb({ padding }: BreadcrumbProps) {
  const [pageTitle, setPageTitle] = useState<string>("")
  const { title } = useBoundStore((state) => ({
    title: state.title
  }))

  useEffect(() => {
    setPageTitle(title)
  }, [title])

  const nodeRef = useRef(null)

  return (
    <div className={clsx(styles.breadcrumb, padding && styles.breadcrumb_full)}>
      <div className={styles.main_grid_container}>
        <div className={clsx(styles.breadcrumb_col, "main_col_1")}>
          <Logo />
        </div>
        <div className={clsx(styles.breadcrumb_col, "main_col_2")}>
          <CSSTransition nodeRef={nodeRef} in={title != pageTitle} timeout={1000} classNames={{ ...styles }}>
            <h3 className={clsx(styles.breadcrumb_title)} ref={nodeRef}>
              {pageTitle}
            </h3>
          </CSSTransition>
        </div>
      </div>
    </div>
  )
}
