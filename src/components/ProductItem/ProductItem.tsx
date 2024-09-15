import styles from "./ProductItem.module.css"
import Image from "next/image"
import image1 from "../../assets/images/product-img-3.jpg"
import Link from "next/link"
import ProductColors from "../ProductColors/ProductColors"
import ProductDimensions from "../ProductDimensions/ProductDimensions"

export default function ProductItem() {
  return (
    <div className={styles.product}>
      <div className={styles.product_img_wrap}>
        <Image className={styles.product_img} src={image1} alt="Picture of product" />
        <button type="button" className={styles.add_cart_btn}>
          <span className={styles.add_cart_title}>в корзину</span>
          <span className={styles.add_cart_icon}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                stroke="black"
              />
              <path
                d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                stroke="black"
              />
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                fill="black"
                stroke="black"
              />
              <path
                d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                stroke="black"
              />
            </svg>
          </span>
        </button>
        <ul className={styles.product_parameters}>
          <li className={styles.parameters_item}>
            <ProductColors />
          </li>
          <li className={styles.parameters_item}>
            <ProductDimensions />
          </li>
        </ul>
      </div>
      <Link href={"/"} className={styles.product_content}>
        <h3 className={styles.product_title}>Худи I’am skobarian</h3>
        <span className={styles.product_price}>9 600 P</span>
      </Link>
    </div>
  )
}
