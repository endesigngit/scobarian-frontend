"use client"
import styles from "./page.module.css"
import { clsx } from "clsx"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { Typography } from "@/UI/Typography/Typography"
import { MouseEvent, useEffect, useRef, useState } from "react"

export default function ToBuyers() {
  const [payment, setPayment] = useState<boolean>(true)
  const [delivery, setDelivery] = useState<boolean>(false)
  const [backProd, setBackProd] = useState<boolean>(false)
  const [warranty, setWarranty] = useState<boolean>(false)
  const [scrollChank, setScrollChank] = useState<number>(0)

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
  const setActiveMenuItem = (cb: (par: boolean) => void) => {
    resetActiveMenu()
    cb(true)
  }

  const refSwitcher = (currentRef: string) => {
    switch (currentRef) {
      case "paymentRef":
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
        setActiveMenuItem(setPayment)
        break
      case "deliveryRef":
        window.scrollTo({
          top: scrollChank + 1,
          behavior: "smooth"
        })
        setActiveMenuItem(setDelivery)
        break
      case "backProdkRef":
        window.scrollTo({
          top: scrollChank * 2 + 1,
          behavior: "smooth"
        })
        setActiveMenuItem(setBackProd)
        break
      case "warrantyRef":
        window.scrollTo({
          top: scrollChank * 3 + 1,
          behavior: "smooth"
        })
        setActiveMenuItem(setWarranty)
        break

      default:
        break
    }
  }

  const clickMenuHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    const refName = evt.currentTarget.dataset.link
    refName && refSwitcher(refName)
  }

  useEffect(() => {
    const scrollChank = (window.document.body.offsetHeight - window.innerHeight) / 4
    setScrollChank(scrollChank)
    window.addEventListener("scroll", (evt) => {
      if (window.scrollY <= scrollChank) {
        setActiveMenuItem(setPayment)
      }
      if (window.scrollY >= scrollChank && window.scrollY <= scrollChank * 2) {
        setActiveMenuItem(setDelivery)
      }
      if (window.scrollY >= scrollChank * 2 && window.scrollY <= scrollChank * 3) {
        setActiveMenuItem(setBackProd)
      }
      if (window.scrollY >= scrollChank * 3 && window.scrollY <= scrollChank * 4) {
        setActiveMenuItem(setWarranty)
      }
    })
  }, [])
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
