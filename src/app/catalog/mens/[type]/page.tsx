"use client"
import clsx from "clsx"
import styles from "../page.module.css"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useEffect, useState } from "react"
import Offcanvas from "@/components/Offcanvas/Offcanvas"
import OffcanvasFilters from "@/components/OffcanvasFilters/OffcanvasFilters"
import ProductItem from "@/components/ProductItem/ProductItem"
import Cart from "../../../../components/Cart/Cart"
import { useBoundStore } from "@/store/StoreProvider"
import { getAllItemGoods } from "@/utils/api/queries/getAllItemGoods"
import { categoryNames, filterType } from "@/utils/filtersConst"
import { TcatalogGoodItem } from "../../../../../types/goodItem"

export default function Catalog({ params }: { params: { type: string } }) {
  const [gridStatus, setGridStatus] = useState<boolean>(true)
  const [offcanvasIsActive, setOffcanvasIsActive] = useState<boolean>(false)
  const [offcanvasIsCart, setOffcanvasCart] = useState<boolean>(false)
  const [goods, setGoods] = useState<TcatalogGoodItem[]>([])

  const { addItemsGoods, setPageTitle, filteredGoods, setFilters, filters } = useBoundStore((state) => ({
    addItemsGoods: state.addItemsGoods,
    setPageTitle: state.setTitle,
    setFilters: state.setFilters,
    filteredGoods: state.filetredGoods,
    filters: state.filters
  }))

  const filtersOpen = () => {
    setOffcanvasIsActive(true)
    setOffcanvasCart(false)
  }
  const cartOpen = () => {
    setOffcanvasIsActive(true)
    setOffcanvasCart(true)
  }

  useEffect(() => {
    getAllItemGoods("?gender=Мужчинам")
      .then((data) => data?.data)
      .then((data) => {
        addItemsGoods(data.data)
      })
    setPageTitle(`Мужчинам`)
  }, [setPageTitle, addItemsGoods, params])
  useEffect(() => {
    setGoods(filteredGoods.filter((good) => good.type == categoryNames[params.type]))
  }, [filteredGoods])
  return (
    <main className={styles.page_main}>
      <Breadcrumb padding />
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
          <button type="button" className={styles.filter_toggle} onClick={() => filtersOpen()}>
            Фильтры
          </button>
        </div>
      </div>
      <div className={styles.catalog_container}>
        {goods.length > 0 ? (
          <ul className={clsx(styles.product_list, !gridStatus && styles.product_list__second)}>
            {goods.map((good, idx) => (
              <li className={styles.product_item} key={`${good.id}--${idx}`}>
                <ProductItem good={good} ofcanvasHandler={cartOpen} />
              </li>
            ))}
          </ul>
        ) : (
          <h3 className={styles.empty_list}>Список товаров по выбранному фильтру пуст</h3>
        )}
      </div>
      <Offcanvas
        isActive={offcanvasIsActive}
        closeHandler={setOffcanvasIsActive}
        title={offcanvasIsCart ? "Корзина" : "Фильтры"}
      >
        {!offcanvasIsCart && <OffcanvasFilters />}
        {offcanvasIsCart && <Cart />}
      </Offcanvas>
    </main>
  )
}
