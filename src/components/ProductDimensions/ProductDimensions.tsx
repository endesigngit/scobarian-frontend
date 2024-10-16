import clsx from "clsx"
import styles from "./ProductDimensions.module.css"

type ProductDimensionsProps = {
  isLarge?: boolean
}

export default function ProductDimensions({ isLarge }: ProductDimensionsProps) {
  return (
    <ul className={clsx(styles.dimensions, isLarge && styles.dimensions__L)}>
      <li className={styles.size_S}>S</li>
      <li className={styles.size_M}>M</li>
      <li className={styles.size_L}>L</li>
    </ul>
  )
}
