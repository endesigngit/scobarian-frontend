"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"

export default function ToBuyers() {
  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={"Покупателям"} padding />
      <div className={clsx(styles.main_container, "main_grid")}>
        <div className={clsx(styles.page_nav, "main_col_1")}>
          <ul className={styles.nav_list}>
            <li className={clsx(styles.nav_item, styles.nav_item__active)}>
              <a href="#">Оплата</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#">Доставка</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#">Возврат</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#">Гарантия</a>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.page_content, "main_col_2")}>
          <div className={styles.content_wrap}>
            <div className={styles.title}>Оплата заказа</div>
            <p className={styles.description}>
              После оформления заказа на сайте в новом окне открывается форма для оплаты заказа онлайн. Мы не храним
              данные о картах покупателя — вся информация остается на стороне банка. Оплата в российских рублях.  При
              самовывозе возможна оплата наличными или картой.
            </p>
          </div>
          <div className={styles.content_wrap}>
            <div className={styles.title}>Получение заказа, оформленного на сайте</div>
            <p className={styles.description}>
              Доставка транспортной компанией СДЭК. Организацию доставки мы берём на себя. Покупатель оплачивает
              доставку по тарифам транспортной компании. После оформления заказа наш менеджер свяжется с вами и
              расскажет о стоимости заказа вместе с доставкой, способах оплаты и сроках доставки.
            </p>
          </div>
          <div className={styles.content_wrap}>
            <div className={styles.title}>Получение заказа, оформленного на сайте</div>
            <p className={styles.description}>
              Если после покупки изделия вы поняли, что оно вам не нравится, не подходит по цвету, размеру, вы можете
              обратиться к нам и оформить возврат.
            </p>
            <p className={styles.description}>
              При самовывозе вы можете вернуть покупку в течение 7 дней. При приобретении онлайн — в течение 30 дней с
              момента покупки.
            </p>
            <p className={styles.description}>
              Важно, чтобы одежда не была в эксплуатации — бирки и ярлыки на месте, вещи сохранили товарный вид. Мы не
              можем принять к возврату изделия со следами использования: с запахом, с пятнами, с повреждением ткани и
              фурнитуры, без составных частей, без бирок и ярлыков.
            </p>
            <p className={styles.description}>
              При соблюдении этих условий мы полностью вернем вам деньги, за исключением стоимости доставки (ст. 26.1 ФЗ
              «О защите прав потребителей»). В этом случае расходы на доставку товара продавцу оплачивает покупатель.
            </p>
          </div>
          <div className={styles.content_wrap}>
            <div className={styles.title}>Гарантия</div>
            <p className={styles.description}>
              Мы даём гарантию полгода с момента покупки. Если обнаружите производственный брак, напишите нам на почту
              или в мессенджер, и мы оформим возврат быстро и без бюрократии. Расходы на доставку некачественного товара
              берём на себя.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
