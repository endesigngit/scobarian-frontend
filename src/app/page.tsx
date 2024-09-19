"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useEffect, useState } from "react"
import { InView } from "react-intersection-observer"

export default function Home() {
  const [headerTitle, setHeaderTitle] = useState<string>("")
  const [showBreadcrumb, setShowBreadcrumb] = useState<boolean>(true)
  useEffect(() => {
    if (window.document.documentElement.clientWidth <= 950) {
      setShowBreadcrumb(false)
    }
  }, [])
  return (
    <main className={styles.image_blocks}>
      {showBreadcrumb && <Breadcrumb padding pageTitle={headerTitle} />}
      <InView onChange={() => setHeaderTitle("")} threshold={1}>
        <div className={styles.image_block}>
          <div className={styles.image_block_content}>
            <Link className={styles.image_block__link} href={"/"}>
              перейти к покупкам
            </Link>
          </div>
        </div>
      </InView>
      <InView onChange={() => setHeaderTitle("худи")} threshold={1}>
        <div className={clsx(styles.image_block, styles.image_block__hoodie)}>
          <div className={clsx(styles.block_title_wrap, "main_grid")}>
            <h3 className={styles.image_block_title}>худи</h3>
          </div>
          <div className={styles.image_block__links}>
            <Link className={styles.image_block__link} href={"/"}>
              мужчины
            </Link>
            <Link className={styles.image_block__link} href={"/"}>
              женщины
            </Link>
          </div>
        </div>
      </InView>

      <InView onChange={() => setHeaderTitle("Философия")} threshold={1}>
        <div className={clsx(styles.image_block, styles.image_block__philosophy)}>
          <div className={clsx(styles.block_title_wrap, "main_grid")}>
            <h3 className={styles.image_block_title}>Философия</h3>
          </div>
          <div className={styles.image_block_content}>
            <Typography className={styles.image_block__link} tag={"p"} variant={"text"}>
              Живу
            </Typography>
            <Typography className={styles.image_block__link} tag={"p"} variant={"text"}>
              куя
            </Typography>
          </div>
        </div>
      </InView>

      <InView onChange={() => setHeaderTitle("бомбер")} threshold={1}>
        <div className={clsx(styles.image_block, styles.image_block__bomber)}>
          <div className={clsx(styles.block_title_wrap, "main_grid")}>
            <h3 className={styles.image_block_title}>бомбер</h3>
          </div>
        </div>
      </InView>

      <InView onChange={() => setHeaderTitle("футболка")} threshold={1}>
        <div className={clsx(styles.image_block, styles.image_block__tshirt)}>
          <div className={clsx(styles.block_title_wrap, "main_grid")}>
            <h3 className={styles.image_block_title}>футболка</h3>
          </div>
        </div>
      </InView>
      <InView onChange={() => setHeaderTitle("")} threshold={1}>
        <div className={clsx(styles.image_block, styles.image_block__tailoring)}>
          <div className={styles.image_block_content}>
            <Link className={styles.image_block__link} href={"/tailoring"}>
              Пошив мерча для бизнеса
            </Link>
          </div>
        </div>
      </InView>
    </main>
  )
}
