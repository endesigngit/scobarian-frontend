"use client"
import clsx from "clsx"
import styles from "./page.module.css"
import Link from "next/link"
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useBoundStore } from "@/store/StoreProvider"
import { useEffect } from "react"

export default function Contacts() {
  const { setTitle } = useBoundStore((state) => ({
    setTitle: state.setTitle
  }))

  useEffect(() => {
    setTitle("Контакты")
  }, [setTitle])
  return (
    <main className={styles.page_main}>
      <Breadcrumb padding />
      <div className={clsx("main_grid", styles.main_container)}>
        <div className={clsx("main_col_2", styles.contacts_first_col)}>
          <div className={styles.contacts_wrap}>
            <h3 className={styles.page_title}>Интернет-магазина:</h3>
            <Link className={styles.contacts_link} href={"tel:+78112702080"}>
              +7 (8112) 70-20-80
            </Link>
            <span className={styles.page_paragraph}>Ежедневно, с 10 до 20 часов</span>
            <Link className={styles.contacts_link} href={"mailto:zakaz@skobarian.ru"}>
              zakaz@skobarian.ru
            </Link>
          </div>
          <div className={styles.contacts_wrap}>
            <h3 className={styles.page_title}>Адрес для возврата товара:</h3>
            <span className={styles.page_paragraph}>
              180007, г. Псков, Красноармейская, 4.
              <br />
              Возвраты принимаются в будние дни, с 9 до 18 часов.
              <br /> В пятницу до 17.00
            </span>
          </div>
        </div>
        <div className={clsx("main_col_3", styles.grid_col_lg)}>
          <h3 className={styles.form_title}>Форма обратной связи</h3>
          <FeedbackForm />
        </div>
      </div>
    </main>
  )
}
