import clsx from "clsx"
import styles from "./ProductDimensions.module.css"

type ProductDimensionsProps = {
  isLarge?: boolean
  sizes: string[]
  actualSize: string
}

export default function ProductDimensions({ isLarge, sizes, actualSize }: ProductDimensionsProps) {
  const filteredSizes = sizes.filter((size) => size != actualSize).slice(0, 2)
  return (
    <ul className={clsx(styles.dimensions, isLarge && styles.dimensions__L)}>
      <li className={styles.size_actual} key={actualSize}>
        {actualSize}
      </li>
      {filteredSizes.map((size) => (
        <li className={styles.size} key={size}>
          {size}
        </li>
      ))}
    </ul>
  )
}
