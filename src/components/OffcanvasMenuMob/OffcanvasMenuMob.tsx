import Link from "next/link"
import styles from "./OffcanvasMenuMob.module.css"
import clsx from "clsx"
import HeaderCart from "../HeaderCart/HeaderCart"
import { useEffect, useState } from "react"
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

  useEffect(() => {
    setOpen(isActive)
  }, [isActive])

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
          <div className={clsx(styles.mobile_logo, styles.anim_show)}>
            <Link href={"/"}>I’am skobarian</Link>
          </div>
          <button
            type="button"
            className={clsx(styles.mobile_toggle, styles.anim_show, styles.anim_show__s2)}
            onClick={() => activeInnerHandler(false)}
          >
            <span>Закрыть</span>
          </button>
        </div>
        <nav className={styles.offcanvas_mobile_nav} onClick={() => activeInnerHandler(false)}>
          <ul className={styles.mobile_menu}>
            <li className={clsx(styles.mobile_menu_item, styles.anim_show, styles.anim_show__s2)}>
              <Link href={"/"} className={styles.mobile_menu__link}>
                Главная
              </Link>
            </li>
            <li className={clsx(styles.mobile_menu_item, styles.anim_show, styles.anim_show__s3)}>
              <Link href={"/about"} className={styles.mobile_menu__link}>
                О нас
              </Link>
            </li>
            <li className={clsx(styles.mobile_menu_item, styles.anim_show, styles.anim_show__s4)}>
              <Link href={"/catalog"} className={styles.mobile_menu__link}>
                Каталог
              </Link>
              <ul className={styles.mobile_submenu}>
                <li className={styles.mobile_submenu__item}>
                  <Link href="/catalog/womens" className={styles.mobile_submenu_title}>
                    Женщинам
                  </Link>
                </li>
                <li className={styles.main_submenu__item}>
                  <Link href="/catalog/mens" className={styles.mobile_submenu_title}>
                    Мужчинам
                  </Link>
                </li>
              </ul>
            </li>
            <li className={clsx(styles.mobile_menu_item, styles.anim_show, styles.anim_show__s5)}>
              <Link href={"/tailoring"} className={styles.mobile_menu__link}>
                Пошив
              </Link>
            </li>
            <li className={clsx(styles.mobile_menu_item, styles.anim_show, styles.anim_show__s6)}>
              <Link href={"/to-buyers"} className={styles.mobile_menu__link}>
                Покупателям
              </Link>
            </li>
            <li className={clsx(styles.mobile_menu_item, styles.anim_show, styles.anim_show__s7)}>
              <Link href={"/contacts"} className={styles.mobile_menu__link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={clsx(styles.offcanvas_mobile, styles.anim_show, styles.anim_show__s7)}>
          <div className={clsx(styles.mobile_cart, productCount == 0 && styles.mobile_cart__empty)}>
            <Link href={"/cart"} className={styles.mobile_menu__link}>
              Корзина
            </Link>
            <span className={styles.mobile_cart_count}>{productCount}</span>
          </div>
          <div className={styles.contacts}>
            <Link href={"tel:+78112702080"} className={styles.contacts_link}>
              +7 (8112) 70-20-80
            </Link>
            <Link href={"mailto:zakaz@skobarian.ru"} className={styles.contacts_link}>
              zakaz@skobarian.ru
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
