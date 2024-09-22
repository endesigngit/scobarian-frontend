import styles from "./CartProducts.module.css"
import { Typography } from "@/UI/Typography/Typography"
import { useBoundStore } from "@/store/StoreProvider"
import CartProductItem from "../CartProductItem/CartProductItem"
import Link from "next/link"

type CartProductsProps = {
  isLarge: boolean
}

export default function CartProducts({ isLarge }: CartProductsProps) {
  const { cartProducts } = useBoundStore((state) => ({
    cartProducts: state.cartProducts
  }))

  return (
    <ul className={styles.product_list}>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map((product, ind) => (
          <li key={`${product.id} + ${ind}`}>
            <CartProductItem isLarge={isLarge} good={product} />
          </li>
        ))
      ) : (
        <div className={styles.empty_list}>
          <Typography tag="span" variant="text">
            Нет добавленных товаров
          </Typography>
          <Link href="/catalog">Вернутся в магазин</Link>
        </div>
      )}
    </ul>
  )
}
