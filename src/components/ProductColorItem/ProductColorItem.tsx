import clsx from "clsx"
import styles from "./ProductColorItem.module.css"

type ProductColorItemProps = {
  colorName: string
}

export default function ProductColorItem({ colorName }: ProductColorItemProps) {
  switch (colorName) {
    case "Черный":
      return <span className={styles.color}></span>
    case "Сталь":
      return <span className={clsx(styles.color, styles.color_steel)}></span>
    case "Молочный":
      return <span className={clsx(styles.color, styles.color_milk)}></span>
    case "Индиго":
      return <span className={clsx(styles.color, styles.color_indigo)}></span>
    default:
      return <span className={styles.color}></span>
  }
}
