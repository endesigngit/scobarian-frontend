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
  const [isActive, setActive] = useState<boolean>(false);
  const [isTab, setTab] = useState<boolean>(false); 
  const [isBlend, setBlend] = useState<boolean>(true); 
  const [isHeaderVisible, setHeaderVisible] = useState<boolean>(true); 
  const [path, setPath] = useState<string>(""); 
  const pathname = usePathname();
  const lastScrollY = useRef(0); 

 
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
     
      setHeaderVisible(false);
    } else {
      
      setHeaderVisible(true);
    }

    lastScrollY.current = currentScrollY;
  };

 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  useEffect(() => {
    if (
      window.document.documentElement.clientWidth >= 950 &&
      window.document.documentElement.clientWidth <= 1024
    ) {
      setTab(true);
    }
    setPath(pathname); 
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
        !isHeaderVisible && styles.header__hidden 
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
