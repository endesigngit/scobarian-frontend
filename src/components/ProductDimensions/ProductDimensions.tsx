import clsx from "clsx"
import styles from "./ProductDimensions.module.css"

type ProductDimensionsProps = {
  isLarge?: boolean
  sizes: string[]
}

export default function ProductDimensions({ isLarge, sizes }: ProductDimensionsProps) {
  return (
    <ul className={clsx(styles.dimensions, isLarge && styles.dimensions__L)}>
      {sizes.map((size) => (
        <li className={styles.size_S} key={size}>
          {size}
        </li>
      ))}
      {/* <li className={styles.size_S}>S</li>
      <li className={styles.size_M}>M</li>
      <li className={styles.size_L}>L</li> */}
    </ul>
  )
}
