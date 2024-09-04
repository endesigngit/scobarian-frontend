"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"

export default function Home() {
  return (
    <main className={styles.image_blocks}>
      <Breadcrumb padding />
      <div className={styles.image_block}>
        <div className={styles.image_block_content}>
          <Link className={styles.image_block__link} href={"/"}>
            перейти к покупкам
          </Link>
        </div>
      </div>
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
      <div className={clsx(styles.image_block, styles.image_block__bomber)}>
        <div className={clsx(styles.block_title_wrap, "main_grid")}>
          <h3 className={styles.image_block_title}>бомбер</h3>
        </div>
      </div>
      <div className={clsx(styles.image_block, styles.image_block__tshirt)}>
        <div className={clsx(styles.block_title_wrap, "main_grid")}>
          <h3 className={styles.image_block_title}>футболка</h3>
        </div>
      </div>
      <div className={clsx(styles.image_block, styles.image_block__tailoring)}>
        <div className={styles.image_block_content}>
          <Link className={styles.image_block__link} href={"/tailoring"}>
            Пошив мерча для бизнеса
          </Link>
        </div>
      </div>
    </main>
  )
}
