import clsx from "clsx"
import styles from "./ProductColors.module.css"
import ProductColorItem from "../ProductColorItem/ProductColorItem"
import { TcatalogGoodItem } from "../../../types/goodItem"
import Link from "next/link"

type ProductColorsProps = {
  isLarge?: boolean
  colors: string[]
  actualColor: string
  products?: TcatalogGoodItem[]
}
export default function ProductColors({ isLarge, colors, actualColor, products }: ProductColorsProps) {
  const restColor = colors.filter((color) => color != actualColor).slice(0, 2)
  return (
    <ul className={clsx(styles.colors, isLarge && styles.colors__L)}>
      <li className={styles.actual_color}>
        <ProductColorItem colorName={actualColor} />
      </li>
      {products
        ? products.map(({ color, id, slug }: TcatalogGoodItem) => (
            <li key={color}>
              <Link href={`/product/${slug}-${id}`}>
                <ProductColorItem colorName={color} />
              </Link>
            </li>
          ))
        : restColor.map((color: string) => (
            <li key={color}>
              <ProductColorItem colorName={color} />
            </li>
          ))}
    </ul>
  )
}
