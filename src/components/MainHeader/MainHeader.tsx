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
  return (
    <header className={clsx(styles.header, IsActive && styles.header__active)}>
      <nav className={clsx(styles.header__nav, styles.main_grid_container)}>
        <div className={styles.left_side}>
          <ul className={styles.main_menu}>
            <li className={styles.main_menu__item}>
              <Link href="/about" className={styles.main_menu__link}>
                О нас
              </Link>
            </li>
            <li className={styles.main_menu__item}>
              <Link href="#" className={styles.main_menu__link} onClick={() => setActive(!IsActive)}>
                Каталог
              </Link>
            </li>
          </ul>
          <ul className={styles.secondary_menu}>
            <li className={styles.main_menu__item}></li>
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
              <Link href="/tailoring" className={styles.main_menu__link}>
                Пошив
              </Link>
            </li>
            <li className={styles.main_menu__item}>
              <Link href="/to-buyers" className={styles.main_menu__link}>
                Покупателям
              </Link>
            </li>
            <li className={styles.main_menu__item}>
              <Link href="/contacts" className={styles.main_menu__link}>
                Контакты
              </Link>
              <HeaderCart isActiveNeader={IsActive} />
            </li>
          </ul>
        </div>
      </nav>
      <OffcanvasMenuTab isActive={IsActive} activeHandler={setActive} />
      <OffcanvasMenuMob isActive={IsActive} activeHandler={setActive} />
    </header>
  )
}
