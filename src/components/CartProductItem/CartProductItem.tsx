import clsx from "clsx"
import styles from "./CartProductItem.module.css"
import { Typography } from "@/UI/Typography/Typography"
import Link from "next/link"
import Image from "next/image"
import { TcatalogGood } from "../../../types/goods"
import getGoods from "@/mock/goods"
import { useBoundStore } from "@/store/StoreProvider"
type CartProductItemProps = {
  isLarge: boolean
  good: TcatalogGood
}
const firstGood = getGoods()[0]
export default function CartProductItem({ isLarge, good = firstGood }: CartProductItemProps) {
  const { name, images, price, colors, sizes, slug, consistPrimary, id } = good
  // console.log(consistPrimary)
  const { addToCart, deleteProduct } = useBoundStore((state) => ({
    addToCart: state.addToCart,
    deleteProduct: state.deleteProduct
  }))
  return (
    <div className={clsx(styles.product_item, isLarge && styles.product_item__large)}>
      <Link className={styles.product_img__wrap} href={`/catalog/${slug}`}>
        <Image className={styles.product_img} src={images[0]} alt={name} fill />
      </Link>
      <div className={styles.product_header}>
        <Link className={styles.product_title} href={`/catalog/${slug}`}>
          {name}
        </Link>
        <span className={styles.product_price}>{price} P</span>
      </div>
      <div className={styles.product_parameters}>
        <div className={styles.product_descriptions}>
          <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
            Состав
          </Typography>
          <ul className={styles.page_list}>
            <li className={styles.page_list_item}>92% хлопок</li>
            <li className={styles.page_list_item}>8% эластан</li>
          </ul>
        </div>
        <ul className={styles.parameters_list}>
          <li className={styles.parameters_item}>
            <span className={styles.parameters_title}>Размер:</span>
            <span className={styles.parameters_value}>S</span>
          </li>
          <li className={styles.parameters_item}>
            <span className={styles.parameters_title}>Цвет:</span>
            <span className={clsx(styles.product_color, styles.product_color_violet)}></span>
          </li>
        </ul>
      </div>
      <div className={styles.product_buttons}>
        <button type="button" className={styles.product_btn} onClick={() => addToCart(good)}>
          Добавить еще
        </button>
        <button type="button" className={styles.product_btn} onClick={() => deleteProduct(good)}>
          Удалить
        </button>
      </div>
    </div>
  )
}
