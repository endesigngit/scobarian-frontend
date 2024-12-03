"use client";
import Link from "next/link";
import styles from "./MainHeader.module.css";
import { clsx } from "clsx";
import OffcanvasMenuTab from "../OffcanvasMenuTab/OffcanvasMenuTab";
import HeaderCart from "../HeaderCart/HeaderCart";
import OffcanvasMenuMob from "../OffcanvasMenuMob/OffcanvasMenuMob";
import { CSSTransition } from "react-transition-group";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const [isActive, setActive] = useState<boolean>(false); // Для таб-меню
  const [isTab, setTab] = useState<boolean>(false); // Определяем, нужен ли таб
  const [isBlend, setBlend] = useState<boolean>(true); // Эффект смешивания
  const [isHeaderVisible, setHeaderVisible] = useState<boolean>(true); // Контролирует видимость хедера
  const [path, setPath] = useState<string>(""); // Для анимаций переходов
  const pathname = usePathname(); // Текущий путь
  const lastScrollY = useRef(0); // Хранит последнее положение скролла

  // Обработчик скролла
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      // Скрываем хедер при скролле вниз
      setHeaderVisible(false);
    } else {
      // Показываем хедер при скролле вверх или остановке
      setHeaderVisible(true);
    }

    lastScrollY.current = currentScrollY;
  };

  // Устанавливаем обработчик скролла
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Определяем ширину окна для таб-меню
  useEffect(() => {
    if (
      window.document.documentElement.clientWidth >= 950 &&
      window.document.documentElement.clientWidth <= 1024
    ) {
      setTab(true);
    }
    setPath(pathname); // Устанавливаем текущий путь
  }, [pathname]);

  const menuClickHandler = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTab) {
      evt.preventDefault();
      setActive(!isActive);
    }
  };

  const onEnterHandler = () => {
    setActive(true);
    setBlend(false);
  };

  const onLeaveHandler = () => {
    setActive(false);
    setTimeout(() => {
      setBlend(true);
    }, 100);
  };

  const activeHandler = (status: boolean) => {
    status ? onEnterHandler() : onLeaveHandler();
  };

  return (
    <header
      className={clsx(
        styles.header,
        isActive && styles.header__active,
        isBlend && styles.blend_mode,
        !isHeaderVisible && styles.header__hidden // Скрываем хедер
      )}
    >
      <nav
        className={styles.header__nav}
        onMouseEnter={() => onEnterHandler()}
        onMouseLeave={() => onLeaveHandler()}
      >
        <ul className={clsx("main_grid", styles.main_menu)}>
          <li className={clsx(styles.main_menu__item, "main_col_1")}>
            <CSSTransition nodeRef={null} in={pathname != path} timeout={300} classNames={"anim-1"}>
              <Link href="/about" className={styles.main_menu__link}>
                О нас
              </Link>
            </CSSTransition>
          </li>
          <li className={clsx(styles.main_menu__item, "main_col_2")}>
            <CSSTransition nodeRef={null} in={pathname != path} timeout={500} classNames={"anim-2"}>
              <Link href="/catalog" className={styles.main_menu__link} onClick={menuClickHandler}>
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
            <CSSTransition nodeRef={null} in={pathname != path} timeout={700} classNames={"anim-3"}>
              <Link href="/tailoring" className={styles.main_menu__link}>
                Пошив
              </Link>
            </CSSTransition>
          </li>
          <li className={clsx(styles.main_menu__item, "main_col_4")}>
            <CSSTransition nodeRef={null} in={pathname != path} timeout={700} classNames={"anim-4"}>
              <Link href="/to-buyers" className={styles.main_menu__link}>
                Покупателям
              </Link>
            </CSSTransition>
          </li>
          <li className={clsx(styles.main_menu__item, styles.whith_carts, "main_col_5")}>
            <CSSTransition nodeRef={null} in={pathname != path} timeout={700} classNames={"anim-5"}>
              <Link href="/contacts" className={styles.main_menu__link}>
                Контакты
              </Link>
            </CSSTransition>
            <CSSTransition nodeRef={null} in={pathname != path} timeout={700} classNames={"anim-6"}>
              <HeaderCart isActiveHeader={isActive} />
            </CSSTransition>
          </li>
        </ul>
      </nav>
      <OffcanvasMenuTab isActive={isActive} activeHandler={activeHandler} />
      <OffcanvasMenuMob isActive={isActive} activeHandler={activeHandler} />
    </header>
  );
}
