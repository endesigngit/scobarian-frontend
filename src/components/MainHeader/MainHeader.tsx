"use client"
import Link from "next/link"
import styles from "./MainHeader.module.css"
import { clsx } from "clsx"
import OffcanvasMenuTab from "../OffcanvasMenuTab/OffcanvasMenuTab"
import { useState } from "react"
import HeaderCart from "../HeaderCart/HeaderCart"
import OffcanvasMenuMob from "../OffcanvasMenuMob/OffcanvasMenuMob"

export default function MainHeader() {
  const [IsActive, setActive] = useState<boolean>(false)
  const menuClickHandler = (evt: any) => {
    evt.preventDefault()
    setActive(!IsActive)
  }
  return (
    <header className={clsx(styles.header, IsActive && styles.header__active)}>
      <nav className={styles.header__nav}>
        <ul className={clsx("main_grid", styles.main_menu)}>
          <li className={clsx(styles.main_menu__item, "main_col_1")}>
            <Link href="/about" className={styles.main_menu__link}>
              О нас
            </Link>
          </li>
          <li className={clsx(styles.main_menu__item, "main_col_2")}>
            <Link href="#" className={styles.main_menu__link} onClick={menuClickHandler}>
              Каталог
            </Link>
            <ul className={styles.main_submenu}>
              <li className={styles.main_submenu__item}>
                <Link href="#" className={styles.main_submenu__title}>
                  Женщинам
                </Link>
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
                <Link href="#" className={styles.main_submenu__title}>
                  Мужчинам
                </Link>
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
          <li className={clsx(styles.main_menu__item, "main_col_3")}>
            <Link href="/tailoring" className={styles.main_menu__link}>
              Пошив
            </Link>
          </li>
          <li className={clsx(styles.main_menu__item, "main_col_4")}>
            <Link href="/to-buyers" className={styles.main_menu__link}>
              Покупателям
            </Link>
          </li>
          <li className={clsx(styles.main_menu__item, styles.whith_carts, "main_col_5")}>
            <Link href="/contacts" className={styles.main_menu__link}>
              Контакты
            </Link>
            <HeaderCart isActiveNeader={IsActive} />
          </li>
        </ul>
      </nav>
      <OffcanvasMenuTab isActive={IsActive} activeHandler={setActive} />
      <OffcanvasMenuMob isActive={IsActive} activeHandler={setActive} />
    </header>
  )
}
