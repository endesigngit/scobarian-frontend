"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
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
import { TcatalogGoodItem } from "../../../../types/goodItem"
import { getAllItemGoods } from "@/utils/api/queries/getAllItemGoods"
import { getItemGood } from "@/utils/api/queries/getItemGood"
import OtherProducts from "@/components/OtherProducts/OtherProducts"
import ProductMiniGallery from "@/components/ProductMiniGallery/ProductMiniGallery"
import ProductGallery from "@/components/ProductGallery/ProductGallery"

export default function SingleProduct({ params }: { params: { slug: string } }) {
  const [offcanvasIsActive, setOffcanvasIsActive] = useState<boolean>(false)
  const [offcanvasTitle, setOffcanvasTitle] = useState<string>("")
  const [inCart, setCart] = useState<boolean>(false)
  const [goodItem, setGoodItem] = useState<TcatalogGoodItem>(getGoods()[1])

  const [refRecommendations, inView] = useInView({
    threshold: 0.6
  })

  const { itemsGoods, addToCart, cartProducts, addItemsGoods, setPTitle } = useBoundStore((state) => ({
    addToCart: state.addToCart,
    itemsGoods: state.itemsGoods,
    addItemsGoods: state.addItemsGoods,
    cartProducts: state.cartProducts,
    setPTitle: state.setTitle
  }))

  const { name, id, colors, color, images, price, care, compound, sizes, type, size, slug, gender } = goodItem

  const filteredGoods = itemsGoods.filter((good) => good.id != id).slice(0, 4)
  const otherProductByColor = itemsGoods.filter((good) => good.slug == slug && good.color !== color)
  const otherProductBySize = itemsGoods.filter((good) => good.slug == slug && good.size !== size)

  const getId = (pars: string) => {
    const par = pars.split("-")
    return par[par.length - 1]
  }

  useEffect(() => {
    getAllItemGoods("")
      .then((data) => data?.data)
      .then((data) => {
        addItemsGoods(data.data)
      })

    getItemGood(getId(params.slug))
      .then((data) => data?.data)
      .then((data) => {
        setGoodItem(data.data)
      })

    if (cartProducts.find((prod) => prod.id == id)) {
      setCart(true)
    } else {
      setCart(false)
    }
  }, [params.slug, id, cartProducts, addItemsGoods])

  const detailRef = useRef(null)
  const imageRef1 = useRef<HTMLDivElement>(null)
  const imageRef2 = useRef<HTMLDivElement>(null)
  const imageRef3 = useRef<HTMLDivElement>(null)
  const imageRef4 = useRef<HTMLDivElement>(null)

  const imageRefs = [imageRef1, imageRef2, imageRef3, imageRef4]

  useEffect(() => {
    if (inView) {
      setPTitle("РЕКОМЕНДУЕМ")
    } else {
      setPTitle(type)
    }
  }, [inView, type, setPTitle])

  const addToCartHandler = () => {
    if (!inCart) {
      addToCart(goodItem)
    }
    setOffcanvasIsActive(true)
    setCart(true)
  }

  const offcanvasHandler = (title: string) => {
    switch (title) {
      case "Корзина":
        addToCartHandler()
        setOffcanvasTitle("Корзина")
        return
      case "Таблица размеров":
        setOffcanvasTitle("Таблица размеров")
        setOffcanvasIsActive(true)
        return
      case "Больше цветов":
        setOffcanvasTitle("Больше цветов")
        setOffcanvasIsActive(true)
        return

      default:
        addToCartHandler()
        return
    }
  }

  const contentSwitch = (title: string) => {
    switch (title) {
      case "Корзина":
        return <Cart />
      case "Таблица размеров":
        return <SizeTable />
      case "Больше цветов":
        return <OtherProducts products={otherProductByColor} />

      default:
        return <OtherProducts products={otherProductByColor} />
    }
  }

  return (
    <main className={styles.page_main}>
      <Breadcrumb padding />
      <div className={clsx("main_grid", styles.product_container)}>
        <div className={styles.left_side}>
          <ProductGallery images={images} refs={imageRefs} altName={name} />
        </div>
        <div className={styles.right_side}>
          <div className={styles.product_content}>
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
                      <ProductDimensions isLarge sizes={sizes} actualSize={size} products={otherProductBySize} />
                    </div>
                    <div className={styles.parameters_item}>
                      <span className={styles.parameter_title}>Цвет:</span>
                      <ProductColors isLarge colors={colors} actualColor={color} products={otherProductByColor} />
                    </div>
                  </div>
                  {otherProductByColor.length > 1 ? (
                    <button
                      type="button"
                      className={styles.more_colors}
                      onClick={() => offcanvasHandler("Больше цветов")}
                    >
                      Больше цветов
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    type="button"
                    className={styles.product_btn__mobile}
                    onClick={() => offcanvasHandler("Таблица размеров")}
                  >
                    Таблица размеров
                  </button>
                </div>

                <button type="button" className={styles.add_to_cart} onClick={() => offcanvasHandler("Корзина")}>
                  {!inCart ? (
                    <span className={styles.cart_main_title}>Добавить в корзину</span>
                  ) : (
                    <span className={styles.cart_main_title}>перейти в корзину</span>
                  )}
                </button>
                <div className={styles.product_top_btns}>
                  <button
                    type="button"
                    className={styles.product_btn}
                    onClick={() => offcanvasHandler("Таблица размеров")}
                  >
                    Таблица размеров
                  </button>
                  <button
                    type="button"
                    className={styles.product_btn}
                    onClick={() => scrollToElement(detailRef, "end")}
                  >
                    Доставка и оплата
                  </button>
                </div>
              </div>
            </div>
            <div id={"detail"} className={styles.product_bottom} ref={detailRef}>
              <div className={styles.description_container}>
                <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                  Состав
                </Typography>
                <ul className={styles.page_list}>
                  {compound.split(";").map((str, idx) => (
                    <li className={styles.page_list_item} key={idx}>
                      {str}
                    </li>
                  ))}
                </ul>
              </div>
              {care && (
                <div className={styles.description_container}>
                  <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                    Уход
                  </Typography>
                  <ul className={styles.page_list}>
                    {care.split(";").map((item, idx) => (
                      <li className={styles.page_list_item} key={idx}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className={styles.description_container}>
                <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                  Доставка
                </Typography>
                <Typography className={styles.description_text} tag={"p"} variant={"text"}>
                  Подробнее о доставке вы можете прочитать <Link href={"/to-buyers"}>здесь</Link>.
                </Typography>
              </div>
              <div className={styles.description_container}>
                <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                  Помощь
                </Typography>
                <Typography className={styles.description_text} tag={"p"} variant={"text"}>
                  Товар надлежащего качества может быть возвращен в течение x дней. Подробную информацию о возврате
                  товара Вы можете получить <Link href={"/to-buyers"}>здесь</Link>.
                </Typography>
              </div>
              <button type="button" className={styles.add_to_cart} onClick={() => offcanvasHandler("Корзина")}>
                {!inCart ? (
                  <span className={styles.cart_main_title}>Добавить в корзину</span>
                ) : (
                  <span className={styles.cart_main_title}>перейти в корзину</span>
                )}
              </button>
            </div>
          </div>

          <div className={styles.mini_gallery_container}>
            <ProductMiniGallery images={images} refs={imageRefs} />
          </div>
        </div>
        <div className={clsx("main_grid", styles.recommendations)} ref={refRecommendations}>
          <p className={styles.recommendations_title}>РЕКОМЕНДУЕМ</p>
          <div className={styles.product_list_container}>
            <ul className={styles.product_list}>
              {filteredGoods
                ? filteredGoods.map((good) => (
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
      <Offcanvas isActive={offcanvasIsActive} closeHandler={setOffcanvasIsActive} title={offcanvasTitle}>
        {contentSwitch(offcanvasTitle)}
      </Offcanvas>
    </main>
  )
}
