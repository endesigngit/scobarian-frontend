import clsx from "clsx"
import styles from "./page.module.css"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"

export default function Catalog() {
  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={"Каталог"} padding />
      <div className={`${styles.catalog_top} main_grid`}>
        <div className={styles.grid_toggles}>
          <button type="button" className={styles.grid_toggle}>
            4
          </button>
          <button type="button" className={styles.grid_toggle}>
            3
          </button>
        </div>
        <div className={styles.filters_toggle}>
          <button type="button" className={styles.filter_toggle}>
            Фильтры
          </button>
        </div>
      </div>

      <div className={styles.main_grid_container}>
        <div className={styles.left_side}>
          <div className={styles.grid_col}></div>
        </div>
        <div className={styles.right_side}></div>
      </div>
    </main>
  )
}
