"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useEffect, useRef, useState } from "react"
import { InView } from "react-intersection-observer"
import { useBoundStore } from "@/store/StoreProvider"
import Image from "next/image"
import img1 from "../../assets/images/main-bg-1-mob.webp"

export default function Home() {
  const [showBreadcrumb, setShowBreadcrumb] = useState<boolean>(true)
  // const [pos, setPos] = useState<boolean>(false)

  const { setTitle } = useBoundStore((state) => ({
    setTitle: state.setTitle
  }))

  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.document.documentElement.clientWidth <= 950) {
      setShowBreadcrumb(false)
    }

    if (window.document.documentElement.clientWidth > 1024) {
      const endPoint = window.document.documentElement.scrollHeight - window.document.documentElement.clientHeight - 255
      window.addEventListener("scroll", (evt) => {
        window.requestAnimationFrame(() => {
          if (lineRef.current && window.scrollY <= endPoint) {
            lineRef.current.style.transform = `translateY(-${window.scrollY * 1.1}px)`
          }
          // console.log(window.pageYOffset)
        })
      })
    }
  }, [])

  return (
    <main className={styles.image_blocks}>
      {showBreadcrumb && <Breadcrumb padding />}
      <div className={styles.anim_line_container}>
        <div className={clsx(styles.anim_line)} ref={lineRef}>
          <InView
            as="div"
            onChange={() => {
              setTitle("")
            }}
            threshold={0.6}
            className={styles.slide}
          >
            {({ inView, ref }) => (
              <div
                className={clsx(styles.image_block, inView ? styles.image_block__active : styles.image_block__bottom)}
                ref={ref}
              >
                <div className={styles.image_block_content}>
                  <Link className={styles.image_block__link} href={"/catalog"}>
                    <span className={styles.link_text}>перейти </span> <span className={styles.link_text}> к </span>{" "}
                    <span className={styles.link_text}> покупкам </span>
                  </Link>
                </div>
              </div>
            )}
          </InView>
          <InView
            as="div"
            onChange={() => {
              setTitle("худи")
            }}
            threshold={0.8}
          >
            {({ inView, ref }) => (
              <div
                className={clsx(
                  styles.image_block,
                  styles.image_block__hoodie,
                  inView ? styles.image_block__active : styles.image_block__bottom
                )}
                ref={ref}
              >
                <div className={clsx(styles.block_title_wrap, "main_grid")}>
                  <h3 className={styles.image_block_title}>худи</h3>
                </div>
                <div className={styles.image_block__links}>
                  <Link className={styles.image_block__link} href={"/catalog/mens"}>
                    <span className={styles.link_text}>мужчины</span>
                  </Link>
                  <Link className={styles.image_block__link} href={"/catalog/womens"}>
                    <span className={clsx(styles.link_text, styles.link_text__sec)}>женщины</span>
                  </Link>
                </div>
              </div>
            )}
          </InView>
          <InView
            as="div"
            onChange={() => {
              setTitle("Философия")
            }}
            threshold={0.8}
          >
            {({ inView, ref }) => (
              <div
                className={clsx(
                  styles.image_block,
                  styles.image_block__philosophy,
                  inView ? styles.image_block__active : styles.image_block__bottom
                )}
                ref={ref}
              >
                <div className={clsx(styles.block_title_wrap, "main_grid")}>
                  <h3 className={styles.image_block_title}>Философия</h3>
                </div>
                <div className={styles.image_block_content}>
                  <Typography className={styles.image_block__link} tag={"p"} variant={"text"}>
                    <span className={styles.link_text}>Живу</span>
                  </Typography>
                  <Typography className={styles.image_block__link} tag={"p"} variant={"text"}>
                    <span className={clsx(styles.link_text, styles.link_text__sec)}>куя</span>
                  </Typography>
                </div>
              </div>
            )}
          </InView>
          <InView as="div" onChange={() => setTitle("бомбер")} threshold={0.8}>
            {({ inView, ref }) => (
              <div
                className={clsx(
                  styles.image_block,
                  styles.image_block__bomber,
                  inView ? styles.image_block__active : styles.image_block__bottom
                )}
                ref={ref}
              >
                <div className={clsx(styles.block_title_wrap, "main_grid")}>
                  <h3 className={styles.image_block_title}>бомбер</h3>
                </div>
              </div>
            )}
          </InView>
          <InView as="div" onChange={() => setTitle("футболка")} threshold={0.8}>
            {({ inView, ref }) => (
              <div
                className={clsx(
                  styles.image_block,
                  styles.image_block__tshirt,
                  inView ? styles.image_block__active : styles.image_block__bottom
                )}
                ref={ref}
              >
                <div className={clsx(styles.block_title_wrap, "main_grid")}>
                  <h3 className={styles.image_block_title}>футболка</h3>
                </div>
              </div>
            )}
          </InView>
          <InView as="div" onChange={() => setTitle("")} threshold={0.6}>
            {({ inView, ref }) => (
              <div
                className={clsx(
                  styles.image_block,
                  styles.image_block__tailoring,
                  inView ? styles.image_block__active : styles.image_block__bottom
                )}
              >
                <div className={styles.image_block_content} ref={ref}>
                  <Link className={styles.image_block__link} href={"/tailoring"}>
                    <span className={clsx(styles.link_text)}>Пошив мерча</span>{" "}
                    <span className={clsx(styles.link_text, styles.link_text__sec)}> для бизнеса</span>
                  </Link>
                </div>
              </div>
            )}
          </InView>
        </div>
      </div>
    </main>
  )
}
