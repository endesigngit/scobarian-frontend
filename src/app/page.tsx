"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useEffect, useState } from "react"
import { InView } from "react-intersection-observer"
import { useBoundStore } from "@/store/StoreProvider"
import MainHeader from "@/components/MainHeader/MainHeader"

export default function Home() {
  const [showBreadcrumb, setShowBreadcrumb] = useState<boolean>(true)

  const { setTitle } = useBoundStore((state) => ({
    setTitle: state.setTitle
  }))

  useEffect(() => {
    if (window.document.documentElement.clientWidth <= 950) {
      setShowBreadcrumb(false)
    }
  }, [])

  return (
    <main className={styles.image_blocks}>
      {showBreadcrumb && <Breadcrumb padding />}
      <InView onChange={() => setTitle("")} threshold={0.6}>
        <div className={styles.image_block}>
          <div className={styles.image_block_content}>
            <Link className={styles.image_block__link} href={"/catalog"}>
              перейти к покупкам
            </Link>
          </div>
        </div>
      </InView>
      <InView onChange={() => setTitle("худи")} threshold={0.8}>
        <div className={clsx(styles.image_block, styles.image_block__hoodie)}>
          <div className={clsx(styles.block_title_wrap, "main_grid")}>
            <h3 className={styles.image_block_title}>худи</h3>
          </div>
          <div className={styles.image_block__links}>
            <Link className={styles.image_block__link} href={"/catalog/mens"}>
              мужчины
            </Link>
            <Link className={styles.image_block__link} href={"/catalog/womens"}>
              женщины
            </Link>
          </div>
        </div>
      </InView>
      <InView onChange={() => setTitle("Философия")} threshold={0.8}>
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
      <InView onChange={() => setTitle("бомбер")} threshold={0.8}>
        <div className={clsx(styles.image_block, styles.image_block__bomber)}>
          <div className={clsx(styles.block_title_wrap, "main_grid")}>
            <h3 className={styles.image_block_title}>бомбер</h3>
          </div>
        </div>
      </InView>
      <InView onChange={() => setTitle("футболка")} threshold={0.8}>
        <div className={clsx(styles.image_block, styles.image_block__tshirt)}>
          <div className={clsx(styles.block_title_wrap, "main_grid")}>
            <h3 className={styles.image_block_title}>футболка</h3>
          </div>
        </div>
      </InView>
      <InView onChange={() => setTitle("")} threshold={0.8}>
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
