"use client"
import styles from "./ProductItem.module.css"
import Image from "next/image"
import Link from "next/link"
import ProductColors from "../ProductColors/ProductColors"
import ProductDimensions from "../ProductDimensions/ProductDimensions"
import getGoods from "@/mock/goods"
import { useBoundStore } from "@/store/StoreProvider"
import { TcatalogGood } from "../../../types/goods"
import { MouseEvent, useEffect, useState } from "react"
import formatPriceNum from "@/utils/formatPriceNum"
import { TcatalogGoodItem } from "../../../types/goodItem"
import { STRAPI_URL } from "@/utils/api/endpoints"
import clsx from "clsx"
import { useRouter } from "next/navigation"

type ProductItemProps = {
  good: TcatalogGoodItem
  ofcanvasHandler: () => void
}
const goodFirst = getGoods()[0]
export default function ProductItem({ good, ofcanvasHandler }: ProductItemProps) {
  const { name, images, type, price, colors, color, sizes, id, slug, size } = good
  const [inCart, setCart] = useState<boolean>(false)

  const { addToCart, cartProducts } = useBoundStore((state) => ({
    addToCart: state.addToCart,
    cartProducts: state.cartProducts
  }))

  const addToCartHandler = () => {
    if (!inCart) {
      addToCart(good)
    }
    ofcanvasHandler()
    setCart(true)
  }
  useEffect(() => {
    if (cartProducts.find((prod) => prod.id == id)) {
      setCart(true)
    } else {
      setCart(false)
    }
  }, [cartProducts, good, id])

  return (
    <div className={clsx(styles.product, "animate_show")}>
      <Link href={`/product/${slug}-${id}`} className={styles.product_img_wrap}>
        <Image
          className={styles.product_img}
          src={`${STRAPI_URL}${images[0]}`}
          width={500}
          height={750}
          alt={name}
          priority={true}
        />
        <div className={styles.product_parameters}>
          <div className={styles.parameters_item}>
            <ProductColors colors={colors} actualColor={color} />
          </div>
          <div className={styles.parameters_item}>
            <ProductDimensions sizes={sizes} actualSize={size} />
          </div>
        </div>
      </Link>
      <button type="button" className={styles.add_cart_btn} onClick={addToCartHandler}>
        {!inCart && <span className={styles.add_cart_title}>В корзину</span>}
        {inCart && <span className={styles.add_cart_title}>Перейти в корзину</span>}
        <span className={clsx(styles.add_cart_icon, inCart && styles.add_cart_icon__added)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
              stroke="black"
            />
            <path
              d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
              stroke="black"
            />
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
              fill="black"
              stroke="black"
            />
            <path
              d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
              stroke="black"
            />
          </svg>
        </span>
      </button>
      <Link href={`/product/${slug}-${id}`} className={styles.product_content}>
        <h3 className={styles.product_title}>{name}</h3>
        <span className={styles.product_price}>{formatPriceNum(price)} P</span>
      </Link>
    </div>
  )
}
