import styles from "./CartProducts.module.css"
import Link from "next/link"
import Image from "next/image"
import imageOne from "../../assets/images/product-img-1.jpg"
import imagesTo from "../../assets/images/product-img-2.jpg"
import clsx from "clsx"

export default function CartProducts() {
  return (
    <div className={styles.product_list}>
      <div className={styles.product_item}>
        <Link className={styles.product_img__wrap} href={"/"}>
          <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
        </Link>
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
            <span className={clsx(styles.product_color, styles.product_color_violet)}></span>
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
      <div className={styles.product_item}>
        <Link className={styles.product_img__wrap} href={"/"}>
          <Image className={styles.product_img} src={imagesTo} alt="Picture of product" />
        </Link>
        <div className={styles.product_header}>
          <Link className={styles.product_title} href={"/"}>
            Худи I’am skobarian Vintage Wash Distressed Hoodie
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
            <span className={clsx(styles.product_color)}></span>
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
      <div className={styles.product_item}>
        <Link className={styles.product_img__wrap} href={"/"}>
          <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
        </Link>
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
            <span className={clsx(styles.product_color, styles.product_color_violet)}></span>
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
  )
}
