import clsx from "clsx"
import styles from "./ProductColors.module.css"
import ProductColorItem from "../ProductColorItem/ProductColorItem"

type ProductColorsProps = {
  isLarge?: boolean
  colors: string[]
}
export default function ProductColors({ isLarge, colors }: ProductColorsProps) {
  return (
    <ul className={clsx(styles.colors, isLarge && styles.colors__L)}>
      {colors.map((color: string) => (
        <li key={color}>
          <ProductColorItem colorName={color} />
        </li>
      ))}
    </ul>
  )
}
