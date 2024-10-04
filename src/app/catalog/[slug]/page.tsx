"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Image from "next/image"
import Offcanvas from "@/components/Offcanvas/Offcanvas"
import { useEffect, useRef, useState } from "react"
import SizeTable from "@/components/SizeTable/SizeTable"
import Cart from "../../../components/Cart/Cart"
import ProductItem from "@/components/ProductItem/ProductItem"
import ProductColors from "@/components/ProductColors/ProductColors"
import ProductDimensions from "@/components/ProductDimensions/ProductDimensions"
import getGoods from "@/mock/goods"
import { useBoundStore } from "@/store/StoreProvider"
import scrollToElement from "@/utils/scrollToElement"
import formatPriceNum from "@/utils/formatPriceNum"
import { useInView } from "react-intersection-observer"

export default function Tailoring({ params }: { params: { slug: string } }) {
  const [offcanvasIsActive, setOffcanvasIsActive] = useState<boolean>(false)
  const [offcanvasIsCart, setOffcanvasCart] = useState<boolean>(false)
  const [inCart, setCart] = useState<boolean>(false)
  const [pageTitle, setPageTitle] = useState<string>("")
  const [framePos, setFramePos] = useState<number>(0)

  const [refRecommendations, inView] = useInView({
    threshold: 0.6
  })

  const goods = getGoods()
  const good = goods.find((product) => product.slug == params.slug) ?? goods[0]
  const { name, id, colors, images, price, slug, consistPrimary, materialPrimary } = good

  const { addToCart, cartProducts } = useBoundStore((state) => ({
    addToCart: state.addToCart,
    cartProducts: state.cartProducts
  }))

  const detailRef = useRef(null)
  const imageRef1 = useRef<HTMLDivElement>(null)
  const imageRef2 = useRef<HTMLDivElement>(null)
  const imageRef3 = useRef<HTMLDivElement>(null)
  const imageRef4 = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  const imageRefs = [imageRef1, imageRef2, imageRef3, imageRef4]

  const framePositions = [
    "",
    styles.mini_gallery__frame__s1,
    styles.mini_gallery__frame__s2,
    styles.mini_gallery__frame__s3
  ]

  const setFramePositionByScroll = (scroll: any, chunk: number) => {
    if (scroll >= chunk && scroll < chunk * 2) {
      setFramePos(1)
      return
    }
    if (scroll >= chunk * 2 && scroll < chunk * 3) {
      setFramePos(2)
      return
    }
    if (scroll >= chunk * 3) {
      setFramePos(3)
      return
    }
    setFramePos(0)
  }

  useEffect(() => {
    if (cartProducts.find((prod) => prod.id == id)) {
      setCart(true)
    } else {
      setCart(false)
    }
    if (inView) {
      setPageTitle("РЕКОМЕНДУЕМ")
    } else {
      setPageTitle(name)
    }

    const chunk = imageRef1.current ? imageRef1.current.offsetHeight - 100 : 700

    window.addEventListener("scroll", () => {
      setFramePositionByScroll(window.scrollY, chunk)
    })
  }, [cartProducts, id, name, inView])

  const sizeTableOpen = () => {
    setOffcanvasIsActive(true)
    setOffcanvasCart(false)
  }
  const addToCartHandler = () => {
    if (!inCart) {
      addToCart(good)
    }
    setOffcanvasIsActive(true)
    setOffcanvasCart(true)
    setCart(true)
  }

  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={pageTitle} padding />
      <div className={clsx("main_grid", styles.product_container)}>
        <div className={styles.left_side}>
          <div className={styles.product_gallery}>
            {images.slice(0, 4).map((image, idx) => (
              <div className={styles.product_gallery__item} key={idx} ref={imageRefs[idx]}>
                <Image className={styles.gallery_img} src={image} width={700} height={1050} priority alt={name} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.product_top}>
            <div className={styles.product_sticky}>
              <div className={styles.product_header}>
                <h3 className={styles.product_cat__name}>{name}</h3>
                <button
                  type="button"
                  className={styles.details_btn}
                  onClick={() => scrollToElement(detailRef, "center")}
                >
                  Показать детали
                </button>
              </div>
              <p className={styles.product_main_price}>{formatPriceNum(price)} P</p>
              <div className={styles.product_parameters_container}>
                <div className={styles.parameters}>
                  <div className={styles.parameters_item}>
                    <span className={styles.parameter_title}>Размер:</span>
                    <ProductDimensions isLarge />
                  </div>
                  <div className={styles.parameters_item}>
                    <span className={styles.parameter_title}>Цвет:</span>
                    <ProductColors isLarge colors={colors} />
                  </div>
                </div>
                <button type="button" className={styles.more_colors} onClick={() => sizeTableOpen()}>
                  Больше цветов
                </button>
                <button type="button" className={styles.product_btn__mobile} onClick={() => sizeTableOpen()}>
                  Таблица размеров
                </button>
              </div>

              <button type="button" className={styles.add_to_cart} onClick={() => addToCartHandler()}>
                {!inCart ? (
                  <span className={styles.cart_main_title}>Добавить в корзину</span>
                ) : (
                  <span className={styles.cart_main_title}>перейти в корзину</span>
                )}
              </button>
            </div>
          </div>
          <div className={styles.mini_gallery_container}>
            <div className={styles.mini_gallery_btns}>
              <button type="button" className={styles.product_btn} onClick={() => sizeTableOpen()}>
                Таблица размеров
              </button>
              <button type="button" className={styles.product_btn} onClick={() => scrollToElement(detailRef, "end")}>
                Доставка и оплата
              </button>
            </div>
            <div className={styles.mini_gallery}>
              {images.slice(0, 4).map((image, idx) => (
                <button
                  type="button"
                  className={styles.mini_gallery_btn}
                  key={idx}
                  onClick={() => {
                    scrollToElement(imageRefs[idx], "start")
                  }}
                >
                  <Image
                    className={styles.mini_gallery_btn__img}
                    src={image}
                    width={70}
                    height={105}
                    priority
                    alt={name}
                  />
                </button>
              ))}
              <div className={clsx(styles.mini_gallery__frame, framePositions[framePos])} ref={frameRef}></div>
            </div>
          </div>
          <div className={styles.product_bottom} ref={detailRef}>
            <div className={styles.description_container}>
              <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                Состав
              </Typography>
              <ul className={styles.page_list}>
                {consistPrimary.split(",").map((str, idx) => (
                  <li className={styles.page_list_item} key={idx}>
                    {str}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.description_container}>
              <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                Уход
              </Typography>
              <ul className={styles.page_list}>
                <li className={styles.page_list_item}>
                  бережная машинная стирка на изнаночной стороне при температуре 30-40°С
                </li>
                <li className={styles.page_list_item}>не отбеливать</li>
                <li className={styles.page_list_item}>не использовать агрессивные моющие средства</li>
                <li className={styles.page_list_item}>утюжить при температуре утюга до 150°С</li>
              </ul>
            </div>
            <div className={styles.description_container}>
              <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                Доставка
              </Typography>
              <Typography className={styles.description_text} tag={"p"} variant={"text"}>
                Подробнее о доставке вы можете прочитать здесь.
              </Typography>
            </div>
            <div className={styles.description_container}>
              <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                Помощь
              </Typography>
              <Typography className={styles.description_text} tag={"p"} variant={"text"}>
                Товар надлежащего качества может быть возвращен в течение x дней. Подробную информацию о возврате товара
                Вы можете получить здесь.
              </Typography>
            </div>
            <button type="button" className={styles.add_to_cart} onClick={() => addToCartHandler()}>
              {!inCart ? (
                <span className={styles.cart_main_title}>Добавить в корзину</span>
              ) : (
                <span className={styles.cart_main_title}>перейти в корзину</span>
              )}
            </button>
          </div>
        </div>
        <div className={clsx("main_grid", styles.recommendations)} ref={refRecommendations}>
          <p className={styles.recommendations_title}>РЕКОМЕНДУЕМ</p>
          <div className={styles.product_list_container}>
            <ul className={styles.product_list}>
              {goods
                ? goods.slice(3).map((good) => (
                    <li className={styles.product_item} key={good.id}>
                      <ProductItem good={good} ofcanvasHandler={addToCartHandler} />
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
        <div className={styles.add_to_cart_mobile_container}>
          <button type="button" className={styles.add_to_cart_mobile} onClick={() => addToCartHandler()}>
            {!inCart ? (
              <span className={styles.cart_main_title}>Добавить в корзину</span>
            ) : (
              <span className={styles.cart_main_title}>перейти в корзину</span>
            )}
          </button>
        </div>
      </div>
      <Offcanvas isActive={offcanvasIsActive} closeHandler={setOffcanvasIsActive} title="Корзина">
        {!offcanvasIsCart ? <SizeTable /> : <Cart />}
      </Offcanvas>
    </main>
  )
}
