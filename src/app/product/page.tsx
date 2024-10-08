"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import Image from "next/image"
import image1 from "../../assets/images/product-img-3.jpg"
import image2 from "../../assets/images/product-img-4.jpg"
import image3 from "../../assets/images/product-img-5.jpg"
import image4 from "../../assets/images/product-img-6.jpg"
import Offcanvas from "@/components/Offcanvas/Offcanvas"
import { useState } from "react"
import SizeTable from "@/components/SizeTable/SizeTable"
import Cart from "../../components/Cart/Cart"
import ProductItem from "@/components/ProductItem/ProductItem"
import ProductColors from "@/components/ProductColors/ProductColors"
import ProductDimensions from "@/components/ProductDimensions/ProductDimensions"

export default function Tailoring() {
  const [offcanvasIsActive, setOffcanvasIsActive] = useState<boolean>(false)
  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={"Худи I’am skobarian Vintage Wash Distressed Hoodie"} padding />
      <div className={clsx("main_grid", styles.product_container)}>
        <div className={styles.left_side}>
          <div className={styles.product_gallery}>
            <div className={styles.product_gallery__item}>
              <Image className={styles.gallery_img} src={image1} alt="Picture of product" />
            </div>
            <div className={styles.product_gallery__item}>
              <Image className={styles.gallery_img} src={image2} alt="Picture of product" />
            </div>
            <div className={styles.product_gallery__item}>
              <Image className={styles.gallery_img} src={image3} alt="Picture of product" />
            </div>
            <div className={styles.product_gallery__item}>
              <Image className={styles.gallery_img} src={image4} alt="Picture of product" />
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.product_top}>
            <div className={styles.product_sticky}>
              <div className={styles.product_header}>
                <h3 className={styles.product_cat__name}>Худи I’am skobarian</h3>
                <button type="button" className={styles.details_btn}>
                  Показать детали
                </button>
              </div>
              <p className={styles.product_main_price}>9 600 P</p>
              <div className={styles.product_parameters_container}>
                <div className={styles.parameters}>
                  <div className={styles.parameters_item}>
                    <span className={styles.parameter_title}>Размер:</span>
                    <ProductDimensions isLarge />
                  </div>
                  <div className={styles.parameters_item}>
                    <span className={styles.parameter_title}>Цвет:</span>
                    <ProductColors isLarge colors={[]} />
                  </div>
                </div>
                <button type="button" className={styles.more_colors} onClick={() => setOffcanvasIsActive(true)}>
                  Больше цветов
                </button>
                <button type="button" className={styles.product_btn__mobile} onClick={() => setOffcanvasIsActive(true)}>
                  Таблица размеров
                </button>
              </div>

              <button type="button" className={styles.add_to_cart} onClick={() => setOffcanvasIsActive(true)}>
                <span className={styles.cart_main_title}>Добавить в корзину</span>
                <span className={styles.cart_secondary_title}>перейти в корзину</span>
              </button>
            </div>
          </div>
          <div className={styles.mini_gallery_container}>
            <div className={styles.mini_gallery_btns}>
              <button type="button" className={styles.product_btn} onClick={() => setOffcanvasIsActive(true)}>
                Таблица размеров
              </button>
              <button type="button" className={styles.product_btn}>
                Доставка и оплата
              </button>
            </div>
            <div className={styles.mini_gallery}>
              <button type="button" className={styles.mini_gallery_btn}>
                <Image className={styles.mini_gallery_btn__img} src={image1} alt="Picture of product" />
              </button>
              <button type="button" className={styles.mini_gallery_btn}>
                <Image className={styles.mini_gallery_btn__img} src={image2} alt="Picture of product" />
              </button>
              <button type="button" className={styles.mini_gallery_btn}>
                <Image className={styles.mini_gallery_btn__img} src={image3} alt="Picture of product" />
              </button>
              <button type="button" className={styles.mini_gallery_btn}>
                <Image className={styles.mini_gallery_btn__img} src={image4} alt="Picture of product" />
              </button>
            </div>
          </div>
          <div className={styles.product_bottom}>
            <div className={styles.description_container}>
              <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                Состав
              </Typography>
              <ul className={styles.page_list}>
                <li className={styles.page_list_item}>92% хлопок</li>
                <li className={styles.page_list_item}>8% эластан</li>
              </ul>
            </div>
            <div className={styles.description_container}>
              <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                Уход
              </Typography>
              <ul className={styles.page_list}>
                <li className={styles.page_list_item}>
                  бережная машинная стирка на изнаночной стороне при температуре 30-40°С
                </li>
                <li className={styles.page_list_item}>не отбеливать</li>
                <li className={styles.page_list_item}>не использовать агрессивные моющие средства</li>
                <li className={styles.page_list_item}>утюжить при температуре утюга до 150°С</li>
              </ul>
            </div>
            <div className={styles.description_container}>
              <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                Доставка
              </Typography>
              <Typography className={styles.description_text} tag={"p"} variant={"text"}>
                Подробнее о доставке вы можете прочитать здесь.
              </Typography>
            </div>
            <div className={styles.description_container}>
              <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
                Помощь
              </Typography>
              <Typography className={styles.description_text} tag={"p"} variant={"text"}>
                Товар надлежащего качества может быть возвращен в течение x дней. Подробную информацию о возврате товара
                Вы можете получить здесь.
              </Typography>
            </div>
            <button type="button" className={styles.add_to_cart} onClick={() => setOffcanvasIsActive(true)}>
              <span className={styles.cart_main_title}>Добавить в корзину</span>
              <span className={styles.cart_secondary_title}>перейти в корзину</span>
            </button>
          </div>
        </div>
        <div className={clsx("main_grid", styles.recommendations)}>
          <p className={styles.recommendations_title}>РЕКОМЕНДУЕМ</p>
          <div className={styles.product_list_container}>
            {/* <ul className={styles.product_list}>
              <li className={styles.product_item}>
                <ProductItem />
              </li>
              <li className={styles.product_item}>
                <ProductItem />
              </li>
              <li className={styles.product_item}>
                <ProductItem />
              </li>
              <li className={styles.product_item}>
                <ProductItem />
              </li>
            </ul> */}
          </div>
        </div>
        <div className={styles.add_to_cart_mobile_container}>
          <button type="button" className={styles.add_to_cart_mobile} onClick={() => setOffcanvasIsActive(true)}>
            <span className={styles.cart_main_title}>Добавить в корзину</span>
            <span className={styles.cart_secondary_title}>перейти в корзину</span>
          </button>
        </div>
      </div>
      <Offcanvas isActive={offcanvasIsActive} closeHandler={setOffcanvasIsActive} title="Корзина">
        <SizeTable />
        {/* <Cart /> */}
      </Offcanvas>
    </main>
  )
}
