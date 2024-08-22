"use client"
import Link from "next/link"
import styles from "./Footer.module.css"
import { clsx } from "clsx"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main_grid_container}>
        <div className={styles.left_side}>
          <div className={styles.footer_col}>
            <Link href="#" className={styles.main_footer__link}>
              О нас
            </Link>
            <ul className={styles.footer_list}>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  О бренде
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  Контакты
                </Link>
              </li>
            </ul>
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
            <ul className={styles.footer_list}>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  Для бизнеса
                </Link>
              </li>
            </ul>
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
            <Link href="#" className={styles.main_footer__link}>
              Контакты
            </Link>
            <ul className={styles.footer_list}>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  {`+7 (980) 800-54-91`}
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.secondary_footer__link}>
                  info@iamskobarian.ru
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={clsx(styles.main_grid_container, styles.main_grid_container__secondary)}>
        <div className={styles.left_side}>
          <div className={styles.footer_col}>
            <Link href="/" className={clsx(styles.main_footer__link, styles.footer_logo)}>
              I’am skobarian ©
            </Link>
          </div>
          <div className={styles.footer_col}>
            <Link href="#" className={styles.main_footer__link}>
              Условия и положения
            </Link>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.footer_col}>
            <Link href="#" className={styles.main_footer__link}>
              Политика конфиденциальности
            </Link>
          </div>
          <div className={styles.footer_col}>
            <Link href="#" className={styles.main_footer__link}>
              WhatsApp
            </Link>
          </div>
          <div className={styles.footer_col}>
            <Link href="#" className={styles.main_footer__link}>
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
