import clsx from "clsx"
import styles from "./ProductColors.module.css"

type ProductColorsProps = {
  isLarge?: boolean
}
export default function ProductColors({ isLarge }: ProductColorsProps) {
  return (
    <ul className={clsx(styles.colors, isLarge && styles.colors__L)}>
      <li className={styles.color_brown}></li>
      <li className={styles.color_grey}></li>
      <li className={styles.color_violet}></li>
    </ul>
  )
}
