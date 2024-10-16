import clsx from "clsx"
import styles from "./CartProductItem.module.css"
import { Typography } from "@/UI/Typography/Typography"
import Link from "next/link"
import Image from "next/image"
import getGoods from "@/mock/goods"
import { useBoundStore } from "@/store/StoreProvider"
import ProductColorItem from "../ProductColorItem/ProductColorItem"
import { TcatalogGoodItem } from "../../../types/goodItem"
type CartProductItemProps = {
  isLarge: boolean
  good: TcatalogGoodItem
}
const firstGood = getGoods()[0]
export default function CartProductItem({ isLarge, good = firstGood }: CartProductItemProps) {
  const { name, images, price, color, size, compound, slug } = good
  // console.log(consistPrimary)
  const { addToCart, deleteProduct } = useBoundStore((state) => ({
    addToCart: state.addToCart,
    deleteProduct: state.deleteProduct
  }))
  return (
    <div className={clsx(styles.product_item, isLarge && styles.product_item__large)}>
      <Link className={styles.product_img__wrap} href={`/catalog/${slug}`}>
        <Image
          className={styles.product_img}
          src={`http://admin.skobarian.ru${images[0]}`}
          alt={name}
          width={250}
          height={375}
          priority={true}
        />
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
            {compound.split(";").map((str, idx) => (
              <li className={styles.page_list_item} key={idx}>
                {str}
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.parameters_list}>
          <li className={styles.parameters_item}>
            <span className={styles.parameters_title}>Размер:</span>
            <span className={styles.parameters_value}>{size}</span>
          </li>
          <li className={styles.parameters_item}>
            <span className={styles.parameters_title}>Цвет:</span>
            <ProductColorItem colorName={color} />
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
