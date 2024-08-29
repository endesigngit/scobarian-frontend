"use client"
import Link from "next/link"
import styles from "./Footer.module.css"
import { clsx } from "clsx"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.left_side}>
          <div className={styles.footer_col}>
            <Link href="/about" className={styles.main_footer__link}>
              О нас
            </Link>
          </div>
          <div className={styles.footer_col}>
            <Link href="#" className={styles.main_footer__link}>
              Каталог
            </Link>
            <ul className={styles.footer_list}>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  Женщинам
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  Мужчинам
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.footer_col}>
            <Link href="/tailoring" className={styles.main_footer__link}>
              Пошив
            </Link>
          </div>
          <div className={styles.footer_col}>
            <Link href="/to-buyers" className={styles.main_footer__link}>
              Покупателям
            </Link>
            <ul className={styles.footer_list}>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  Возврат и гарантия
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <Link href="/contacts" className={styles.main_footer__link}>
              Контакты
            </Link>
            <ul className={styles.footer_list}>
              <li>
                <Link href="tel:+79808005491" className={styles.secondary_footer__link}>
                  {`+7 (980) 800-54-91`}
                </Link>
              </li>
              <li>
                <Link href="mailto:info@iamskobarian.ru" className={styles.secondary_footer__link}>
                  info@iamskobarian.ru
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_col}>
          <Link href="/" className={clsx(styles.main_footer__link, styles.footer_logo)}>
            I’am skobarian ©
          </Link>
        </div>
        <div className={styles.footer_col}>
          <Link href="#" className={styles.main_footer__link}>
            Политика конфиденциальности
          </Link>
        </div>
        <div className={clsx(styles.footer_col, styles.footer_social)}>
          <Link href="#" className={styles.main_footer__link}>
            WhatsApp
          </Link>
          <Link href="#" className={styles.main_footer__link}>
            Telegram
          </Link>
        </div>
      </div>
    </footer>
  )
}
