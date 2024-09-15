import styles from "./CartProducts.module.css"
import Link from "next/link"
import Image from "next/image"
import imageOne from "../../assets/images/product-img-1.jpg"
import imagesTo from "../../assets/images/product-img-2.jpg"
import clsx from "clsx"
import { Typography } from "@/UI/Typography/Typography"

type CartProductsProps = {
  isLarge: boolean
}

export default function CartProducts({ isLarge }: CartProductsProps) {
  return (
    <div className={styles.product_list}>
      <div className={clsx(styles.product_item, isLarge && styles.product_item__large)}>
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
          <div className={styles.product_descriptions}>
            <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
              Состав
            </Typography>
            <ul className={styles.page_list}>
              <li className={styles.page_list_item}>92% хлопок</li>
              <li className={styles.page_list_item}>8% эластан</li>
            </ul>
          </div>
          <ul className={styles.parameters_list}>
            <li className={styles.parameters_item}>
              <span className={styles.parameters_title}>Размер:</span>
              <span className={styles.parameters_value}>S</span>
            </li>
            <li className={styles.parameters_item}>
              <span className={styles.parameters_title}>Цвет:</span>
              <span className={clsx(styles.product_color, styles.product_color_violet)}></span>
            </li>
          </ul>
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
      <div className={clsx(styles.product_item, isLarge && styles.product_item__large)}>
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
          <div className={styles.product_descriptions}>
            <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
              Состав
            </Typography>
            <ul className={styles.page_list}>
              <li className={styles.page_list_item}>92% хлопок</li>
              <li className={styles.page_list_item}>8% эластан</li>
            </ul>
          </div>
          <ul className={styles.parameters_list}>
            <li className={styles.parameters_item}>
              <span className={styles.parameters_title}>Размер:</span>
              <span className={styles.parameters_value}>S</span>
            </li>
            <li className={styles.parameters_item}>
              <span className={styles.parameters_title}>Цвет:</span>
              <span className={clsx(styles.product_color)}></span>
            </li>
          </ul>
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
      <div className={clsx(styles.product_item, isLarge && styles.product_item__large)}>
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
          <div className={styles.product_descriptions}>
            <Typography className={styles.description_title} tag={"h4"} variant={"h1"}>
              Состав
            </Typography>
            <ul className={styles.page_list}>
              <li className={styles.page_list_item}>92% хлопок</li>
              <li className={styles.page_list_item}>8% эластан</li>
            </ul>
          </div>
          <ul className={styles.parameters_list}>
            <li className={styles.parameters_item}>
              <span className={styles.parameters_title}>Размер:</span>
              <span className={styles.parameters_value}>S</span>
            </li>
            <li className={styles.parameters_item}>
              <span className={styles.parameters_title}>Цвет:</span>
              <span className={clsx(styles.product_color, styles.product_color_violet)}></span>
            </li>
          </ul>
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
