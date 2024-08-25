import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image"
import imageOne from "../../assets/images/product-img-1.jpg"
import imagesTo from "../../assets/images/product-img-2.jpg"
import clsx from "clsx"
export default function Cart() {
  return (
    <main>
      <Breadcrumb pageTitle={"Корзина"} padding />
      <div className={styles.main_grid_container}>
        <div className={styles.left_side}>
          <div className={styles.product_list}>
            <div className={styles.product_item}>
              <Link className={styles.product_img__wrap} href={"/"}>
                <Image
                  className={styles.product_img}
                  src={imageOne}
                  width={174}
                  height={231}
                  alt="Picture of product"
                />
              </Link>
              <div className={styles.product_content}>
                <div className={styles.product_header}>
                  <Link className={styles.product_title} href={"/"}>
                    Худи I’am skobarian
                  </Link>
                  <span className={styles.product_price}>9600 P</span>
                </div>
                <div className={styles.product_parameters}>
                  <p className={styles.parameters_item}>
                    <span className={styles.parameters_title}>Размер:</span>
                    <span className={styles.parameters_value}>S</span>
                  </p>
                  <p className={styles.parameters_item}>
                    <span className={styles.parameters_title}>Цвет:</span>
                    <div className={clsx(styles.product_color, styles.product_color_violet)}></div>
                  </p>
                </div>
                <div className={styles.product_buttons}>
                  <button type="button" className={styles.product_btn}>
                    Добавить еще
                  </button>
                  <button type="button" className={styles.product_btn}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.product_item}>
              <Link className={styles.product_img__wrap} href={"/"}>
                <Image
                  className={styles.product_img}
                  src={imagesTo}
                  width={174}
                  height={231}
                  alt="Picture of product"
                />
              </Link>
              <div className={styles.product_content}>
                <div className={styles.product_header}>
                  <Link className={styles.product_title} href={"/"}>
                    Бомбер I’am skobarian
                  </Link>
                  <span className={styles.product_price}>7600 Р</span>
                </div>
                <div className={styles.product_parameters}>
                  <p className={styles.parameters_item}>
                    <span className={styles.parameters_title}>Размер:</span>
                    <span className={styles.parameters_value}>S</span>
                  </p>
                  <p className={styles.parameters_item}>
                    <span className={styles.parameters_title}>Цвет:</span>
                    <div className={clsx(styles.product_color)}></div>
                  </p>
                </div>
                <div className={styles.product_buttons}>
                  <button type="button" className={styles.product_btn}>
                    Добавить еще
                  </button>
                  <button type="button" className={styles.product_btn}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.product_item}>
              <Link className={styles.product_img__wrap} href={"/"}>
                <Image
                  className={styles.product_img}
                  src={imageOne}
                  width={174}
                  height={231}
                  alt="Picture of product"
                />
              </Link>
              <div className={styles.product_content}>
                <div className={styles.product_header}>
                  <Link className={styles.product_title} href={"/"}>
                    Худи I’am skobarian
                  </Link>
                  <span className={styles.product_price}>9600 Р</span>
                </div>
                <div className={styles.product_parameters}>
                  <p className={styles.parameters_item}>
                    <span className={styles.parameters_title}>Размер:</span>
                    <span className={styles.parameters_value}>S</span>
                  </p>
                  <p className={styles.parameters_item}>
                    <span className={styles.parameters_title}>Цвет:</span>
                    <div className={clsx(styles.product_color, styles.product_color_violet)}></div>
                  </p>
                </div>
                <div className={styles.product_buttons}>
                  <button type="button" className={styles.product_btn}>
                    Добавить еще
                  </button>
                  <button type="button" className={styles.product_btn}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_side}>right_side</div>
      </div>
    </main>
  )
}
