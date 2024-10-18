import clsx from "clsx"
import styles from "./OffcanvasFilters.module.css"
import FiltersItem from "../FiltersItem/FiltersItem"

const sortList = ["Низкая цена", "Высокая цена", "Новое", "скидки"]
const sizeList = ["XS", "S", "M", "L", "ХL"]
const typeList = ["Худи", "Бомбер", "Футболка"]
const colorList = ["milk", "steel", "black", "indigo"]

export default function OffcanvasFilters() {
  return (
    <div className={styles.filters}>
      <ul className={styles.filters_list}>
        <li className={styles.filters_item}>
          <FiltersItem list={sortList} title="Сортировка" />
        </li>
        <li className={styles.filters_item}>
          <FiltersItem list={sizeList} title="Размер" type="size" />
        </li>
        <li className={styles.filters_item}>
          <FiltersItem list={colorList} title="Цвет" type="color" />
        </li>
        <li className={styles.filters_item}>
          <FiltersItem list={typeList} title="Тип" />
        </li>
      </ul>
      <button type="button" className={styles.send_filters}>
        Применить
      </button>
    </div>
  )
}
