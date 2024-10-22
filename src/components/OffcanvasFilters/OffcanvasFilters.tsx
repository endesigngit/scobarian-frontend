import clsx from "clsx"
import styles from "./OffcanvasFilters.module.css"
import FiltersItem from "../FiltersItem/FiltersItem"
import { filtersConst, filterType } from "@/utils/filtersConst"

export default function OffcanvasFilters() {
  return (
    <div className={styles.filters}>
      <ul className={styles.filters_list}>
        <li className={styles.filters_item}>
          <FiltersItem list={filtersConst.sortList} title="Сортировка" type={filterType.SORT} />
        </li>
        <li className={styles.filters_item}>
          <FiltersItem list={filtersConst.sizeList} title="Размер" type={filterType.SIZE} />
        </li>
        <li className={styles.filters_item}>
          <FiltersItem list={filtersConst.colorList} title="Цвет" type={filterType.COLOR} />
        </li>
        <li className={styles.filters_item}>
          <FiltersItem list={filtersConst.typeList} title="Тип" type={filterType.CATEGORY} />
        </li>
      </ul>
      <button type="button" className={styles.send_filters}>
        Применить
      </button>
    </div>
  )
}
