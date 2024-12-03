"use client"
import Link from "next/link"
import styles from "./Footer.module.css"
import { clsx } from "clsx"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.footer_container, "main_grid")}>
        <div className={clsx(styles.footer_col, "main_col_1")}>
          <Link href="/about" className={styles.main_footer__link}>
            О нас
          </Link>
        </div>
        <div className={clsx(styles.footer_col, "main_col_2")}>
          <Link href="/catalog" className={styles.main_footer__link}>
            Каталог
          </Link>
          <ul className={styles.footer_list}>
            <li>
              <Link href="/catalog/womens" className={styles.secondary_footer__link}>
                Женщинам
              </Link>
            </li>
            <li>
              <Link href="/catalog/mens" className={styles.secondary_footer__link}>
                Мужчинам
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.footer_col, "main_col_3")}>
          <Link href="/tailoring" className={styles.main_footer__link}>
            Пошив
          </Link>
        </div>
        <div className={clsx(styles.footer_col, "main_col_4")}>
          <Link href="/to-buyers" className={styles.main_footer__link}>
            Покупателям
          </Link>
          <ul className={styles.footer_list}>
            <li>
              <Link href="/to-buyers" className={styles.secondary_footer__link}>
                Доставка и оплата
              </Link>
            </li>
            <li>
              <Link href="/to-buyers" className={styles.secondary_footer__link}>
                Возврат и гарантия
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.footer_col, "main_col_5")}>
          <Link href="/contacts" className={styles.main_footer__link}>
            Контакты
          </Link>
          <ul className={styles.footer_list}>
            <li>
              <Link href="tel:+78112702080" className={styles.secondary_footer__link}>
                {`+7 (8112) 70-20-80`}
              </Link>
            </li>
            <li>
              <Link href="mailto:zakaz@skobarian.ru" className={styles.secondary_footer__link}>
                zakaz@skobarian.ru
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={clsx(styles.footer_bottom, "main_grid")}>
        <div className={clsx(styles.footer_col, "main_col_1")}>
          <Link href="/" className={clsx(styles.main_footer__link, styles.footer_logo)}>
            I’am skobarian ©
          </Link>
        </div>
        <div className={clsx(styles.footer_col, styles.footer_colspan)}>
          <Link href="/privacy" className={styles.main_footer__link}>
            Политика конфиденциальности
          </Link>
        </div>
        <div className={clsx(styles.footer_col, styles.footer_social, "main_col_4")}>
          <Link href="https://wa.me/+79113719950" className={styles.main_footer__link}>
            WhatsApp
          </Link>
        </div>
        <div className={clsx(styles.footer_col, styles.footer_social, "main_col_5")}>
          <Link href="https://t.me/+79113719950" className={styles.main_footer__link}>
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  )
}
