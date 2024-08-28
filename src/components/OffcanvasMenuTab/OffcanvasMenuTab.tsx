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
      <div className={clsx(styles.tablet_header, styles.main_grid_container)}>
        <div className={clsx(styles.tablet_logo, styles.left_side)}>
          <Link href={"/"}>I’am skobarian</Link>
        </div>
        <div className={clsx(styles.tablet_toggles, styles.right_side)}>
          <button type="button" className={styles.tablet_toggle} onClick={() => activeHandler(!isActive)}>
            {!isActive && <span>Меню</span>}
            {isActive && <span>Закрыть</span>}
          </button>
          <HeaderCart isActiveNeader={isActive} />
        </div>
      </div>
      <div className={styles.offcanvas_tab_body}>
        <nav className={clsx(styles.offcanvas_tab_nav, styles.main_grid_container)}>
          <ul className={clsx(styles.tablet_menu, styles.left_side)}>
            <li className={styles.tablet_menu_item}>
              <Link href={"/about"} className={styles.tablet_menu__link}>
                О нас
              </Link>
            </li>
            <li className={styles.tablet_menu_item}>
              <Link href={"/about"} className={styles.tablet_menu__link}>
                Каталог
              </Link>
              <ul className={styles.tablet_submenu}>
                <li className={styles.tablet_submenu__item}>
                  <Link href="#" className={styles.tablet_submenu_title}>
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
                  <Link href="#" className={styles.tablet_submenu_title}>
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
          </ul>
          <ul className={clsx(styles.tablet_menu, styles.right_side)}>
            <li className={styles.tablet_menu_item}>
              <Link href={"/tailoring"} className={styles.tablet_menu__link}>
                Пошив
              </Link>
            </li>
            <li className={styles.tablet_menu_item}>
              <Link href={"/to-buyers"} className={styles.tablet_menu__link}>
                Покупателям
              </Link>
            </li>
            <li className={styles.tablet_menu_item}>
              <Link href={"/to-buyers"} className={styles.tablet_menu__link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.offcanvas_mobile}></div>
    </div>
  )
}
