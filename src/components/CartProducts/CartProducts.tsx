import styles from "./CartProducts.module.css"
import { Typography } from "@/UI/Typography/Typography"
import { useBoundStore } from "@/store/StoreProvider"
import CartProductItem from "../CartProductItem/CartProductItem"
import Link from "next/link"
import { useEffect, useState } from "react"
import { TcatalogGoodItem } from "../../../types/goodItem"

type CartProductsProps = {
  isLarge: boolean
}

export default function CartProducts({ isLarge }: CartProductsProps) {
  const [products, setProducts] = useState<TcatalogGoodItem[]>([])
  const { cartProducts } = useBoundStore((state) => ({
    cartProducts: state.cartProducts
  }))
  useEffect(() => {
    if (cartProducts) {
      setProducts(cartProducts.slice().reverse())
    }
  }, [cartProducts])

  return (
    <ul className={styles.product_list}>
      {cartProducts && cartProducts.length > 0 ? (
        products.map((product, ind) => (
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
