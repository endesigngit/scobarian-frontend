import clsx from "clsx"
import styles from "./page.module.css"
import Link from "next/link"
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm"

export default function Contacts() {
  return (
    <main className={styles.page_main}>
      <div className={styles.main_grid_container}>
        <div className={styles.left_side}>
          <div className={styles.grid_col}></div>
          <div className={styles.grid_col}>
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
        </div>
        <div className={styles.right_side}>
          <div className={clsx(styles.grid_col, styles.grid_col_lg)}>
            <h3 className={styles.form_title}>Форма обратной связи</h3>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </main>
  )
}
