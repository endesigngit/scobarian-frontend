import clsx from "clsx"
import styles from "./FiltersItem.module.css"
import { useState } from "react"
import FilterToggle from "../FilterToggle/FilterToggle"

type FiltersItemProps = {
  title: string
  list: string[]
  type?: "color" | "size"
}

export default function FiltersItem({ title, list, type }: FiltersItemProps) {
  const [isActive, setActive] = useState<boolean>(false)

  const buttonHandler = (title: string, status: boolean) => {
    console.log(title, status)
  }
  return (
    <div className={styles.filter}>
      <button
        type="button"
        className={clsx(styles.filter_toggle, isActive && styles.filter_toggle__active)}
        onClick={() => setActive(!isActive)}
      >
        {title}
      </button>
      <div className={clsx(styles.filter_content, isActive && styles.filter_content__open)}>
        <ul className={clsx(styles.filter_list, type && styles[type])}>
          {list
            ? list.map((title) => (
                <li className={clsx(styles.filter_item)} key={title}>
                  <FilterToggle title={title} hadler={buttonHandler} type={type} />
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  )
}
