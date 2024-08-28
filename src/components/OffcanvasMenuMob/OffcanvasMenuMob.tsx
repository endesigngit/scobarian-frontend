import Link from "next/link"
import styles from "./OffcanvasMenuMob.module.css"
import clsx from "clsx"
import HeaderCart from "../HeaderCart/HeaderCart"

type OffcanvasMenuMobProps = {
  isActive: boolean
  activeHandler: (value: boolean) => void
}

export default function OffcanvasMenuMob({ isActive, activeHandler }: OffcanvasMenuMobProps) {
  return (
    <div className={clsx(styles.offcanvas, isActive && styles.offcanvas__active)}>
      <div className={styles.mobile_header}>
        <button type="button" className={styles.mobile_toggle} onClick={() => activeHandler(true)}>
          <span>Меню</span>
        </button>
        <HeaderCart isActiveNeader={isActive} />
      </div>
      <div className={styles.offcanvas_mobile_body}>
        <div className={styles.offcanvas_header}>
          <div className={styles.mobile_logo}>
            <Link href={"/"}>I’am skobarian</Link>
          </div>
          <button type="button" className={styles.mobile_toggle} onClick={() => activeHandler(false)}>
            <span>Закрыть</span>
          </button>
        </div>
        <nav className={styles.offcanvas_mobile_nav}>
          <ul className={styles.mobile_menu}>
            <li className={styles.mobile_menu_item}>
              <Link href={"/"} className={styles.mobile_menu__link}>
                Главная
              </Link>
            </li>
            <li className={styles.mobile_menu_item}>
              <Link href={"/about"} className={styles.mobile_menu__link}>
                О нас
              </Link>
            </li>
            <li className={styles.mobile_menu_item}>
              <Link href={"/about"} className={styles.mobile_menu__link}>
                Каталог
              </Link>
              <ul className={styles.mobile_submenu}>
                <li className={styles.mobile_submenu__item}>
                  <Link href="#" className={styles.mobile_submenu_title}>
                    Женщинам
                  </Link>
                </li>
                <li className={styles.main_submenu__item}>
                  <Link href="#" className={styles.mobile_submenu_title}>
                    Мужчинам
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.mobile_menu_item}>
              <Link href={"/tailoring"} className={styles.mobile_menu__link}>
                Пошив
              </Link>
            </li>
            <li className={styles.mobile_menu_item}>
              <Link href={"/to-buyers"} className={styles.mobile_menu__link}>
                Покупателям
              </Link>
            </li>
            <li className={styles.mobile_menu_item}>
              <Link href={"/contacts"} className={styles.mobile_menu__link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.offcanvas_mobile}>
          <div className={clsx(styles.mobile_cart, styles.mobile_cart__empty)}>
            <Link href={"/cart"} className={styles.mobile_menu__link}>
              Корзина
            </Link>
            <span className={styles.mobile_cart_count}>0</span>
          </div>
          <div className={styles.contacts}>
            <Link href={"tel:+79808005491"} className={styles.contacts_link}>
              +7 (980) 800-54-91
            </Link>
            <Link href={"mailto:info@iamskobarian.ru"} className={styles.contacts_link}>
              info@iamskobarian.ru
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
