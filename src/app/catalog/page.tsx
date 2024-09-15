"use client"
import clsx from "clsx"
import styles from "./page.module.css"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useState } from "react"
import Image from "next/image"
import imageOne from "../../assets/images/product-img-1.jpg"
import imagesTo from "../../assets/images/product-img-2.jpg"
import Offcanvas from "@/components/Offcanvas/Offcanvas"
import OffcanvasFilters from "@/components/OffcanvasFilters/OffcanvasFilters"
import ProductItem from "@/components/ProductItem/ProductItem"

export default function Catalog() {
  const [gridStatus, setGridStatus] = useState<boolean>(true)
  const [offcanvasIsActive, setOffcanvasIsActive] = useState<boolean>(false)
  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={"Каталог"} padding />
      <div className={`${styles.catalog_top} main_grid`}>
        <div className={styles.grid_toggles}>
          <button
            type="button"
            className={clsx(styles.grid_toggle, gridStatus && styles.grid_toggle__active)}
            onClick={() => setGridStatus(!gridStatus)}
          >
            <span>4</span>
            <span>3</span>
          </button>
          <button
            type="button"
            className={clsx(styles.grid_toggle, !gridStatus && styles.grid_toggle__active)}
            onClick={() => setGridStatus(!gridStatus)}
          >
            <span>3</span>
            <span>2</span>
          </button>
        </div>
        <div className={styles.filter_toggles}>
          <button
            type="button"
            className={styles.filter_toggle}
            onClick={() => setOffcanvasIsActive(!offcanvasIsActive)}
          >
            Фильтры
          </button>
        </div>
      </div>
      <div className={styles.catalog_container}>
        <ul className={clsx(styles.product_list, !gridStatus && styles.product_list__second)}>
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
          <li className={styles.product_item}>
            <ProductItem />
          </li>
        </ul>
      </div>
      <Offcanvas isActive={offcanvasIsActive} closeHandler={setOffcanvasIsActive} title="Фильтры">
        <OffcanvasFilters />
      </Offcanvas>
    </main>
  )
}
