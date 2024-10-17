import clsx from "clsx"
import styles from "./ProductColors.module.css"
import ProductColorItem from "../ProductColorItem/ProductColorItem"

type ProductColorsProps = {
  isLarge?: boolean
  colors: string[]
  actualColor: string
}
export default function ProductColors({ isLarge, colors, actualColor }: ProductColorsProps) {
  const restColor = colors.filter((color) => color != actualColor).slice(0, 2)
  return (
    <ul className={clsx(styles.colors, isLarge && styles.colors__L)}>
      <li>
        <ProductColorItem colorName={actualColor} />
      </li>
      {restColor.map((color: string) => (
        <li key={color}>
          <ProductColorItem colorName={color} />
        </li>
      ))}
    </ul>
  )
}
