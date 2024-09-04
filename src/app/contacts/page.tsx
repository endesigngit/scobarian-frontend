import clsx from "clsx"
import styles from "./page.module.css"
import Link from "next/link"
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"

export default function Contacts() {
  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={"Контакты"} padding />
      <div className={clsx("main_grid", styles.main_container)}>
        <div className={clsx("main_col_2", styles.contacts_first_col)}>
          <div className={styles.contacts_wrap}>
            <h3 className={styles.page_title}>Интернет-магазина:</h3>
            <Link className={styles.contacts_link} href={"tel:+78112702080"}>
              +7 (8112) 70-20-80
            </Link>
            <span className={styles.page_paragraph}>Ежедневно, с 10 до 20 часов</span>
            <Link className={styles.contacts_link} href={"mailto:iamskobarianzakaz@iamskobarian.ru"}>
              iamskobarianzakaz@iamskobarian.ru
            </Link>
          </div>
          <div className={styles.contacts_wrap}>
            <h3 className={styles.page_title}>Адрес для возврата товара:</h3>
            <span className={styles.page_paragraph}>
              109004, г. Псков, Красноармейская, 4.
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
