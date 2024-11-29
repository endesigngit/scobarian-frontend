"use client"
import Link from "next/link"
import styles from "./MainHeader.module.css"
import { clsx } from "clsx"
import OffcanvasMenuTab from "../OffcanvasMenuTab/OffcanvasMenuTab"
import { MouseEvent, useEffect, useRef, useState } from "react"
import HeaderCart from "../HeaderCart/HeaderCart"
import OffcanvasMenuMob from "../OffcanvasMenuMob/OffcanvasMenuMob"
import { CSSTransition } from "react-transition-group"

import { usePathname } from "next/navigation"

export default function MainHeader() {
  const [IsActive, setActive] = useState<boolean>(false)
  const [IsTab, setTab] = useState<boolean>(false)
  const [IsBlend, setBlend] = useState<boolean>(true)
  const [path, setPath] = useState<string>("")
  const pathname = usePathname()

  const menuClickHandler = (evt: MouseEvent<HTMLAnchorElement>) => {
    if (IsTab) {
      evt.preventDefault()
      setActive(!IsActive)
    }
  }
  useEffect(() => {
    if (window.document.documentElement.clientWidth >= 950 && window.document.documentElement.clientWidth <= 1024) {
      setTab(true)
    }
    setPath(pathname)
  }, [pathname])

  const nodeReflink1 = useRef(null)
  const nodeReflink2 = useRef(null)
  const nodeReflink3 = useRef(null)
  const nodeReflink4 = useRef(null)
  const nodeReflink5 = useRef(null)
  const nodeReflink6 = useRef(null)

  const onEnterHandler = () => {
    setActive(true)
    setBlend(false)
  }
  const onLeaveHandler = () => {
    setActive(false)
    setTimeout(() => {
      setBlend(true)
    }, 100)
  }

  const activeHadler = (status: boolean) => {
    status ? onEnterHandler() : onLeaveHandler()
  }

  return (
    <header className={clsx(styles.header, IsActive && styles.header__active, IsBlend && styles.blend_mode)}>
      <nav className={styles.header__nav} onMouseEnter={() => onEnterHandler()} onMouseLeave={() => onLeaveHandler()}>
        <ul className={clsx("main_grid", styles.main_menu)}>
          <li className={clsx(styles.main_menu__item, "main_col_1")}>
            <CSSTransition nodeRef={nodeReflink1} in={pathname != path} timeout={300} classNames={"anim-1"}>
              <Link href="/about" className={styles.main_menu__link} ref={nodeReflink1}>
                О нас
              </Link>
            </CSSTransition>
          </li>
          <li className={clsx(styles.main_menu__item, "main_col_2")}>
            <CSSTransition nodeRef={nodeReflink2} in={pathname != path} timeout={500} classNames={"anim-2"}>
              <Link href="/catalog" className={styles.main_menu__link} onClick={menuClickHandler} ref={nodeReflink2}>
                Каталог
              </Link>
            </CSSTransition>
            <ul className={styles.main_submenu}>
              <li className={styles.main_submenu__item}>
                <Link href="/catalog/womens" className={styles.main_submenu__title}>
                  Женщинам
                </Link>
                <ul className={styles.inner_submenu}>
                  <li className={styles.inner_submenu__item}>
                    <Link href="/catalog/womens/hoodie">Худи</Link>
                  </li>
                  {/* <li className={styles.inner_submenu__item}>
                    <Link href="/catalog/womens/bomber">Бомбер</Link>
                  </li> */}
                  <li className={styles.inner_submenu__item}>
                    <Link href="/catalog/womens/t-shirt">Футболка</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.main_submenu__item}>
                <Link href="/catalog/mens" className={styles.main_submenu__title}>
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
          <li className={clsx(styles.main_menu__item, "main_col_3")}>
            <CSSTransition nodeRef={nodeReflink3} in={pathname != path} timeout={700} classNames={"anim-3"}>
              <Link href="/tailoring" className={styles.main_menu__link} ref={nodeReflink3}>
                Пошив
              </Link>
            </CSSTransition>
          </li>
          <li className={clsx(styles.main_menu__item, "main_col_4")}>
            <CSSTransition nodeRef={nodeReflink4} in={pathname != path} timeout={700} classNames={"anim-4"}>
              <Link href="/to-buyers" className={styles.main_menu__link} ref={nodeReflink4}>
                Покупателям
              </Link>
            </CSSTransition>
          </li>
          <li className={clsx(styles.main_menu__item, styles.whith_carts, "main_col_5")}>
            <CSSTransition nodeRef={nodeReflink5} in={pathname != path} timeout={700} classNames={"anim-5"}>
              <Link href="/contacts" className={styles.main_menu__link} ref={nodeReflink5}>
                Контакты
              </Link>
            </CSSTransition>
            <CSSTransition nodeRef={nodeReflink6} in={pathname != path} timeout={700} classNames={"anim-6"}>
              <HeaderCart isActiveHeader={IsActive} />
            </CSSTransition>
          </li>
        </ul>
      </nav>
      <OffcanvasMenuTab isActive={IsActive} activeHandler={activeHadler} />
      <OffcanvasMenuMob isActive={IsActive} activeHandler={activeHadler} />
    </header>
  )
}
