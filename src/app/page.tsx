"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"

export default function Home() {
  return (
    <main>
      <Breadcrumb pageTitle={"худи"} padding />
      <div className={styles.image_block}>
        <Link className={styles.image_block__title} href={"/"}>
          перейти к покупкам
        </Link>
      </div>
      <div className={clsx(styles.image_block, styles.image_block__sb)}>
        <Link className={styles.image_block__title} href={"/"}>
          мужчины
        </Link>
        <Link className={styles.image_block__title} href={"/"}>
          женщины
        </Link>
      </div>
      <div className={styles.image_block}>
        <Typography className={styles.image_block__title} tag={"p"} variant={"text"}>
          Живу
        </Typography>
        <Typography className={styles.image_block__title} tag={"p"} variant={"text"}>
          куя
        </Typography>
      </div>
      <div className={styles.image_block}></div>
      <div className={styles.image_block}></div>
      <div className={styles.image_block}>
        <Link className={styles.image_block__title} href={"/tailoring"}>
          Пошив мерча для бизнеса
        </Link>
      </div>
    </main>
  )
}
