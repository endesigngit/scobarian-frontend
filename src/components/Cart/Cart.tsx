import Link from "next/link"
import CartProducts from "../CartProducts/CartProducts"
import styles from "./Cart.module.css"
import { useBoundStore } from "@/store/StoreProvider"
import formatPriceNum from "@/utils/formatPriceNum"

export default function Cart() {
  const { cartProducts } = useBoundStore((state) => ({
    cartProducts: state.cartProducts
  }))
  const getTotal = formatPriceNum(
    cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
  )
  return (
    <div className={styles.cart_container}>
      <div className={styles.product_list_container}>
        <CartProducts isLarge />
      </div>
      <div className={styles.cart_total}>
        <p className={styles.total_title}>
          Итого <span>С включенным НДС</span>
        </p>
        <span className={styles.total_count}>{getTotal} P</span>
      </div>
      <div className={styles.cart_buttons}>
        <Link href={"/cart"} type="button" className={styles.cart_btn__next}>
          Перейти к оформлению
        </Link>
        <Link href={"/cart"} type="button" className={styles.cart_btn}>
          <span>Посмотреть мою корзину</span>
        </Link>
        <p className={styles.policy_text}>
          Совершая этот платеж, вы принимаете{" "}
          <span>
            <Link href={"/to-buyers"}>Общие условия продажи</Link>
          </span>{" "}
          и подтверждаете, что прочитали и поняли
          <Link href={"/privacy"}> Политику конфиденциальности.</Link>
        </p>
      </div>
    </div>
  )
}
