"use client"
import styles from "./page.module.css"
import { clsx } from "clsx"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { Typography } from "@/UI/Typography/Typography"
import { MouseEvent, useRef, useState } from "react"
import scrollToElement from "@/utils/scrollToElement"

export default function ToBuyers() {
  const [payment, setPayment] = useState<boolean>(true)
  const [delivery, setDelivery] = useState<boolean>(false)
  const [backProd, setBackProd] = useState<boolean>(false)
  const [warranty, setWarranty] = useState<boolean>(false)

  const paymentRef = useRef(null)
  const deliveryRef = useRef(null)
  const backProdkRef = useRef(null)
  const warrantyRef = useRef(null)

  const resetActiveMenu = () => {
    setPayment(false)
    setDelivery(false)
    setBackProd(false)
    setWarranty(false)
  }
  const refSwitcher = (currentRef: string) => {
    switch (currentRef) {
      case "paymentRef":
        resetActiveMenu()
        scrollToElement(paymentRef, "center")
        setPayment(true)
        break
      case "deliveryRef":
        resetActiveMenu()
        scrollToElement(deliveryRef, "center")
        setDelivery(true)
        break
      case "backProdkRef":
        resetActiveMenu()
        scrollToElement(backProdkRef, "center")
        setBackProd(true)
        break
      case "warrantyRef":
        resetActiveMenu()
        scrollToElement(warrantyRef, "center")
        setWarranty(true)
        break

      default:
        break
    }
  }

  const clickMenuHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    const refName = evt.currentTarget.dataset.link
    refName && refSwitcher(refName)
  }

  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={"Покупателям"} padding />
      <div className={clsx(styles.main_container, "main_grid")}>
        <div className={clsx(styles.page_nav, "main_col_1")}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <button
                type="button"
                className={clsx(styles.nav_btn, payment && styles.nav_btn__active)}
                data-link="paymentRef"
                onClick={clickMenuHandler}
              >
                Оплата
              </button>
            </li>
            <li className={styles.nav_item}>
              <button
                type="button"
                className={clsx(styles.nav_btn, delivery && styles.nav_btn__active)}
                data-link="deliveryRef"
                onClick={clickMenuHandler}
              >
                Доставка
              </button>
            </li>
            <li className={styles.nav_item}>
              <button
                type="button"
                className={clsx(styles.nav_btn, backProd && styles.nav_btn__active)}
                data-link="backProdkRef"
                onClick={clickMenuHandler}
              >
                Возврат
              </button>
            </li>
            <li className={styles.nav_item}>
              <button
                type="button"
                className={clsx(styles.nav_btn, warranty && styles.nav_btn__active)}
                data-link="warrantyRef"
                onClick={clickMenuHandler}
              >
                Гарантия
              </button>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.page_content, "main_col_2")}>
          <div className={styles.content_wrap} ref={paymentRef}>
            <Typography className={styles.title} tag="h3" variant="h1">
              Оплата заказа
            </Typography>
            <Typography className={styles.description} tag="p" variant="text">
              После оформления заказа на сайте в новом окне открывается форма для оплаты заказа онлайн. Мы не храним
              данные о картах покупателя — вся информация остается на стороне банка. Оплата в российских рублях. При
              самовывозе возможна оплата наличными или картой.
            </Typography>
          </div>
          <div className={styles.content_wrap} ref={deliveryRef}>
            <Typography className={styles.title} tag="h3" variant="h1">
              Получение заказа, оформленного на сайте
            </Typography>
            <Typography className={styles.description} tag="p" variant="text">
              Доставка транспортной компанией СДЭК. Организацию доставки мы берём на себя. Покупатель оплачивает
              доставку по тарифам транспортной компании. После оформления заказа наш менеджер свяжется с вами и
              расскажет о стоимости заказа вместе с доставкой, способах оплаты и сроках доставки.
            </Typography>
          </div>
          <div className={styles.content_wrap} ref={backProdkRef}>
            <Typography className={styles.title} tag="h3" variant="h1">
              Получение заказа, оформленного на сайте
            </Typography>
            <Typography className={styles.description} tag="p" variant="text">
              Если после покупки изделия вы поняли, что оно вам не нравится, не подходит по цвету, размеру, вы можете
              обратиться к нам и оформить возврат.
            </Typography>
            <Typography className={styles.description} tag="p" variant="text">
              При самовывозе вы можете вернуть покупку в течение 7 дней. При приобретении онлайн — в течение 30 дней с
              момента покупки.
            </Typography>
            <Typography className={styles.description} tag="p" variant="text">
              Важно, чтобы одежда не была в эксплуатации — бирки и ярлыки на месте, вещи сохранили товарный вид. Мы не
              можем принять к возврату изделия со следами использования: с запахом, с пятнами, с повреждением ткани и
              фурнитуры, без составных частей, без бирок и ярлыков.
            </Typography>
            <Typography className={styles.description} tag="p" variant="text">
              При соблюдении этих условий мы полностью вернем вам деньги, за исключением стоимости доставки (ст. 26.1 ФЗ
              «О защите прав потребителей»). В этом случае расходы на доставку товара продавцу оплачивает покупатель.
            </Typography>
          </div>
          <div className={styles.content_wrap} ref={warrantyRef}>
            <Typography className={styles.title} tag="h3" variant="h1">
              Гарантия
            </Typography>
            <Typography className={styles.description} tag="p" variant="text">
              Мы даём гарантию полгода с момента покупки. Если обнаружите производственный брак, напишите нам на почту
              или в мессенджер, и мы оформим возврат быстро и без бюрократии. Расходы на доставку некачественного товара
              берём на себя.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  )
}
