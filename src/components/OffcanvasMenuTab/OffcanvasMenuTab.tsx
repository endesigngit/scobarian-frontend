import Link from "next/link"
import styles from "./OffcanvasMenuTab.module.css"
import clsx from "clsx"
import HeaderCart from "../HeaderCart/HeaderCart"

type OffcanvasMenuTabProps = {
  isActive: boolean
  activeHandler: (value: boolean) => void
}

export default function OffcanvasMenuTab({ isActive, activeHandler }: OffcanvasMenuTabProps) {
  return (
    <div className={clsx(styles.offcanvas, isActive && styles.offcanvas__active)}>
      <div className={clsx(styles.tablet_header, "main_grid")}>
        <div className={styles.tablet_logo}>
          <Link href={"/"}>I’am skobarian</Link>
        </div>
        <div className={styles.tablet_toggles}>
          <button type="button" className={styles.tablet_toggle} onClick={() => activeHandler(!isActive)}>
            {!isActive && <span>Меню</span>}
            {isActive && <span>Закрыть</span>}
          </button>
        </div>
        <div className={styles.tablet_toggles}>
          <HeaderCart isActiveHeader={isActive} />
        </div>
      </div>
      <div className={styles.offcanvas_tab_body}>
        <nav className={clsx(styles.offcanvas_tab_nav)}>
          <ul className={clsx(styles.tablet_menu, "main_grid")}>
            <li className={clsx(styles.tablet_menu_item, "main_col_1")}>
              <Link href={"/about"} className={styles.tablet_menu__link}>
                О нас
              </Link>
            </li>
            <li className={clsx(styles.tablet_menu_item, "main_col_2")}>
              <Link href={"/catalog"} className={styles.tablet_menu__link}>
                Каталог
              </Link>
              <ul className={styles.tablet_submenu}>
                <li className={styles.tablet_submenu__item}>
                  <Link href="/catalog/womens" className={styles.tablet_submenu_title}>
                    Женщинам
                  </Link>
                  <ul className={styles.inner_submenu}>
                    <li className={styles.inner_submenu__item}>
                      <Link href="/catalog/womens/hoodie">Худи</Link>
                    </li>
                    <li className={styles.inner_submenu__item}>
                      <Link href="/catalog/womens/bomber">Бомбер</Link>
                    </li>
                    <li className={styles.inner_submenu__item}>
                      <Link href="/catalog/womens/t-shirt">Футболка</Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.main_submenu__item}>
                  <Link href="/catalog/mens" className={styles.tablet_submenu_title}>
                    Мужчинам
                  </Link>
                  <ul className={styles.inner_submenu}>
                    <li className={styles.inner_submenu__item}>
                      <Link href="/catalog/mens/hoodie">Худи</Link>
                    </li>
                    <li className={styles.inner_submenu__item}>
                      <Link href="/catalog/mens/bomber">Бомбер</Link>
                    </li>
                    <li className={styles.inner_submenu__item}>
                      <Link href="/catalog/mens/t-shirt">Футболка</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className={clsx(styles.tablet_menu_item)}>
              <Link href={"/tailoring"} className={styles.tablet_menu__link}>
                Пошив
              </Link>
            </li>
            <li className={clsx(styles.tablet_menu_item, "main_col_4")}>
              <Link href={"/to-buyers"} className={styles.tablet_menu__link}>
                Покупателям
              </Link>
            </li>
            <li className={clsx(styles.tablet_menu_item, "main_col_5")}>
              <Link href={"/contacts"} className={styles.tablet_menu__link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
