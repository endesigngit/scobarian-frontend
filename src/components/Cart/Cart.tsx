import Link from "next/link"
import CartProducts from "../CartProducts/CartProducts"
import styles from "./Cart.module.css"

export default function Cart() {
  return (
    <div className={styles.cart_container}>
      <div className={styles.product_list_container}>
        <CartProducts isLarge />
      </div>
      <div className={styles.cart_total}>
        <p className={styles.total_title}>
          Итого <span>С включенным НДС</span>
        </p>
        <span className={styles.total_count}>9 600 P</span>
      </div>
      <div className={styles.cart_buttons}>
        <Link href={"/cart"} type="button" className={styles.cart_btn__next}>
          Перейти к оформлению
        </Link>
        <Link href={"/cart"} type="button" className={styles.cart_btn}>
          Посмотреть мою корзину
        </Link>
        <p className={styles.policy_text}>
          Совершая этот платеж, вы принимаете <span>Общие условия продажи</span> и подтверждаете, что прочитали и поняли
          <Link href={"/"}> Политику конфиденциальности.</Link>
        </p>
      </div>
    </div>
  )
}
