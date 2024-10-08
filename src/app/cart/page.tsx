"use client"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import styles from "./page.module.css"
import Link from "next/link"
import clsx from "clsx"
import CartProducts from "@/components/CartProducts/CartProducts"
import CartForm from "@/components/CartForm/CartForm"
import { useRef, useState } from "react"
import scrollToElement from "@/utils/scrollToElement"
import { useBoundStore } from "@/store/StoreProvider"
import formatPriceNum from "@/utils/formatPriceNum"
import getWordByCount from "@/utils/getWordByCount"

export default function Cart() {
  const [isDetails, setIsDetails] = useState<boolean>(true)
  const [isForm, setIsForm] = useState<boolean>(false)

  const { cartProducts, clearCart } = useBoundStore((state) => ({
    cartProducts: state.cartProducts,
    clearCart: state.clearCart
  }))
  const refMain = useRef(null)
  const tabHanler = (stepFlag: boolean) => {
    if (stepFlag) {
      setIsForm(true)
      setIsDetails(false)
      scrollToElement(refMain, "start")
    } else {
      setIsForm(false)
      setIsDetails(true)
    }
  }
  const productCount = cartProducts.length
  const getTotal = formatPriceNum(
    cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
  )

  return (
    <main ref={refMain}>
      <Breadcrumb pageTitle={"Корзина"} padding />
      <div className="main_grid">
        <div className={styles.left_side}>
          <CartProducts isLarge={false} />
        </div>
        <div className={styles.right_side}>
          <div className={styles.cart_tab}>
            <div className={styles.cart_tab_nav}>
              <div
                className={clsx(styles.cart_tab_step, isDetails && styles.cart_tab_step__active)}
                onClick={() => tabHanler(false)}
              >
                <span className={styles.step_count}>1 из 2</span>
                <span className={styles.step_count}>Корзина</span>
              </div>
              <div
                className={clsx(styles.cart_tab_step, isForm && styles.cart_tab_step__active)}
                onClick={() => tabHanler(true)}
              >
                <span className={styles.step_count}>2 из 2</span>
                <span className={styles.step_count}>Контакты для связи</span>
              </div>
            </div>
            <div className={styles.cart_tab_content}>
              {isDetails && (
                <div className={styles.cart_details}>
                  <p className={styles.cart_info}>
                    <span>
                      {productCount} {getWordByCount(productCount, "продукт", "продукта", "продуктов")}
                    </span>
                    <span>{getTotal} P</span>
                  </p>
                  <p className={styles.cart_info}>
                    <span>Доставка</span>
                    <span>Рассчитывается при оформлении заказа</span>
                  </p>
                  <div className={styles.cart_products_mob}>
                    <CartProducts isLarge={false} />
                  </div>
                  <div className={styles.cart_total}>
                    <p>
                      Итого <span>С включенным НДС</span>
                    </p>
                    <p>{getTotal} P</p>
                  </div>
                  <button type="button" className={styles.cart_next_btn} onClick={() => tabHanler(true)}>
                    перйти к оформлению
                  </button>
                </div>
              )}
              {isForm && (
                <div className={styles.cart_form}>
                  <CartForm />
                </div>
              )}
            </div>
          </div>
          <div className={styles.cart_desc}>
            <p className={styles.policy_text}>
              Совершая этот платеж, вы принимаете <span>Общие условия продажи</span> и подтверждаете, что прочитали и
              поняли <span>Политику конфиденциальности</span>.
            </p>
            <div className={styles.cart_contacts}>
              <h4 className={styles.contacts_title}>Нужна помощь? Связаться с нами</h4>
              <p className={styles.contacts_text}>
                +7 (8112) 70-20-80, ежедневно, с 10 до 20 часов <br />
                iamskobarianzakaz@iamskobarian.ru
              </p>
            </div>
            <Link href={"/catalog"} className={styles.cart_desc_link}>
              Продолжить покупки
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
