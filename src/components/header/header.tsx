"use client"
import Link from "next/link"
import styles from "./Header.module.css"
import { clsx } from "clsx"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={clsx(styles.header__nav, styles.main_grid_container)}>
        <div className={styles.left_side}>
          <ul className={styles.main_menu}>
            <li className={styles.main_menu__item}>
              <Link href="#" className={styles.main_menu__link}>
                О нас
              </Link>
            </li>
            <li className={styles.main_menu__item}>
              <Link href="#" className={styles.main_menu__link}>
                Каталог
              </Link>
            </li>
          </ul>
          <ul className={styles.secondary_menu}>
            <li className={styles.main_menu__item}>
              <Link href="#">О бренде</Link>
            </li>
            <li className={styles.main_menu__item}>
              <ul className={styles.main_submenu}>
                <li className={styles.main_submenu__item}>
                  <Link href="#">Женщинам</Link>
                  <ul className={styles.inner_submenu}>
                    <li className={styles.inner_submenu__item}>
                      <Link href="#">Худи</Link>
                    </li>
                    <li className={styles.inner_submenu__item}>
                      <Link href="#">Бомбер</Link>
                    </li>
                    <li className={styles.inner_submenu__item}>
                      <Link href="#">Футболка</Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.main_submenu__item}>
                  <Link href="#">Мужчинам</Link>
                  <ul className={styles.inner_submenu}>
                    <li className={styles.inner_submenu__item}>
                      <Link href="#">Худи</Link>
                    </li>
                    <li className={styles.inner_submenu__item}>
                      <Link href="#">Бомбер</Link>
                    </li>
                    <li className={styles.inner_submenu__item}>
                      <Link href="#">Футболка</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.right_side}>
          <ul className={styles.main_menu}>
            <li className={styles.main_menu__item}>
              <Link href="#" className={styles.main_menu__link}>
                Пошив
              </Link>
            </li>
            <li className={styles.main_menu__item}>
              <Link href="#" className={styles.main_menu__link}>
                Покупателям
              </Link>
            </li>
            <li className={styles.main_menu__item}>
              <Link href="#" className={styles.main_menu__link}>
                Контакты
              </Link>
              <button type="button" className={clsx(styles.cart, styles.cart__empty)}>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z" />
                  <path d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5" />
                </svg>
                <span className={styles.cart_count}>0</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.mobile_offcanvas}>
        <div className={styles.mobile_offcanvas__header}>
          <div className={styles.main_logo}>
            <span className={styles.logo_text}>I’am skobarian</span>
          </div>
          <button className={styles.mobile_menu__toggle}>Закрыть</button>
        </div>
        <nav className={styles.mobile__nav}>
          <ul className={styles.mobile_menu}>
            <li className={styles.mobile_menu__item}>
              <Link href="#" className={styles.mobile_menu__link}>
                О нас
              </Link>
              <ul className={styles.mobile_submenu}>
                <li className={styles.mobile_submenu__item}>
                  <Link href="#">О бренде</Link>
                </li>
              </ul>
            </li>
            <li className={styles.mobile_menu__item}>
              <Link href="#" className={styles.mobile_menu__link}>
                Каталог
              </Link>
              <ul className={styles.mobile_submenu}>
                <li className={styles.mobile_submenu__item}>
                  <Link href="#">Женщинам</Link>
                </li>
                <li className={styles.mobile_submenu__item}>
                  <Link href="#">Мужчинам</Link>
                </li>
              </ul>
            </li>
            <li className={styles.mobile_menu__item}>
              <Link href="#" className={styles.mobile_menu__link}>
                Пошив
              </Link>
            </li>
            <li className={styles.mobile_menu__item}>
              <Link href="#" className={styles.mobile_menu__link}>
                Покупателям
              </Link>
            </li>
            <li className={styles.mobile_menu__item}>
              <Link href="#" className={styles.mobile_menu__link}>
                Контакты
              </Link>
            </li>
            <li className={styles.mobile_menu__item}>
              <Link href="#" className={styles.mobile_menu__link}>
                Корзина
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.mobile_offcanvas__footer}>
          <div className={styles.mobile_contacts}>
            <Link href="tel:+79808005491">+7 (980) 800-54-91</Link>
            <Link href="mailto:info@iamskobarian.ru">info@iamskobarian.ru</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
