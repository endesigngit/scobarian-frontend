import clsx from "clsx"
import styles from "./ProductDimensions.module.css"
import { TcatalogGoodItem } from "../../../types/goodItem"
import Link from "next/link"

type ProductDimensionsProps = {
  isLarge?: boolean
  sizes: string[]
  actualSize: string
  products?: TcatalogGoodItem[]
}

export default function ProductDimensions({ isLarge, products, actualSize, sizes }: ProductDimensionsProps) {
  const filteredSizes = sizes.filter((size) => size != actualSize).slice(0, 2)
  return (
    <ul className={clsx(styles.dimensions, isLarge && styles.dimensions__L)}>
      <li className={styles.size_actual} key={actualSize}>
        {actualSize}
      </li>
      {products
        ? products.map(({ size, id, slug }: TcatalogGoodItem) => (
            <li className={styles.size} key={size}>
              <Link href={`/product/${slug}-${id}`}>{size}</Link>
            </li>
          ))
        : filteredSizes.map((size) => (
            <li className={styles.size} key={size}>
              {size}
            </li>
          ))}
    </ul>
  )
}
