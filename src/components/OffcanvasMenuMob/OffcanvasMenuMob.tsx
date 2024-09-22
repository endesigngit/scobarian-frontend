import Link from "next/link"
import styles from "./OffcanvasMenuMob.module.css"
import clsx from "clsx"
import HeaderCart from "../HeaderCart/HeaderCart"
import { useState } from "react"
import { useBoundStore } from "@/store/StoreProvider"

type OffcanvasMenuMobProps = {
  isActive: boolean
  activeHandler: (value: boolean) => void
}

export default function OffcanvasMenuMob({ isActive, activeHandler }: OffcanvasMenuMobProps) {
  const [isOpen, setOpen] = useState<boolean>(isActive)
  const activeInnerHandler = (status: boolean) => {
    setOpen(status)
    status ? activeHandler(status) : setTimeout(() => activeHandler(status), 300)
  }
  const { cartProduct } = useBoundStore((state) => ({
    cartProduct: state.cartProducts
  }))
  const productCount = cartProduct.length ?? 0
  return (
    <div className={clsx(styles.offcanvas, isOpen && styles.offcanvas__active)}>
      <div className={styles.mobile_header}>
        <button type="button" className={styles.mobile_toggle} onClick={() => activeInnerHandler(true)}>
          <span>Меню</span>
        </button>
        <HeaderCart isActiveHeader={isActive} />
      </div>
      <div className={styles.offcanvas_mobile_body}>
        <div className={styles.offcanvas_header}>
          <div className={styles.mobile_logo}>
            <Link href={"/"}>I’am skobarian</Link>
          </div>
          <button type="button" className={styles.mobile_toggle} onClick={() => activeInnerHandler(false)}>
            <span>Закрыть</span>
          </button>
        </div>
        <nav className={styles.offcanvas_mobile_nav} onClick={() => activeInnerHandler(false)}>
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
              <Link href={"/catalog"} className={styles.mobile_menu__link}>
                Каталог
              </Link>
              <ul className={styles.mobile_submenu}>
                <li className={styles.mobile_submenu__item}>
                  <Link href="/catalog" className={styles.mobile_submenu_title}>
                    Женщинам
                  </Link>
                </li>
                <li className={styles.main_submenu__item}>
                  <Link href="/catalog" className={styles.mobile_submenu_title}>
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
          <div className={clsx(styles.mobile_cart, productCount == 0 && styles.mobile_cart__empty)}>
            <Link href={"/cart"} className={styles.mobile_menu__link}>
              Корзина
            </Link>
            <span className={styles.mobile_cart_count}>{productCount}</span>
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
