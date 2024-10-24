import clsx from "clsx"
import styles from "./FilterToggle.module.css"
import { useState } from "react"
import { colorNames, filterType } from "@/utils/filtersConst"
import { useBoundStore } from "@/store/StoreProvider"

type FilterToggleProps = {
  title: string
  type: filterType
}

export default function FilterToggle({ title, type }: FilterToggleProps) {
  const [isActive, setActive] = useState<boolean>(false)

  const { setFilters, removeFilters } = useBoundStore((state) => ({
    setFilters: state.setFilters,
    removeFilters: state.removeFilters,
    filtersState: state.filters
  }))

  const buttonHandler = (filterName: string, status: boolean) => {
    status ? setFilters({ type: type, value: filterName }) : removeFilters({ type: type, value: filterName })
  }
  const onClickHanler = () => {
    setActive(!isActive)
    buttonHandler(title, !isActive)
  }
  return (
    <button
      className={clsx(styles.filter_toggle, type && styles[type], isActive && styles.filter_toggle__active)}
      onClick={onClickHanler}
    >
      <span className={type == "color" ? styles[colorNames[title]] : ""}>{type == "color" ? "" : title}</span>
    </button>
  )
}
