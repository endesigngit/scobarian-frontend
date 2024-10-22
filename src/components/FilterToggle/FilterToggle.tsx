import clsx from "clsx"
import styles from "./FilterToggle.module.css"
import { useState } from "react"
import { filterType } from "@/utils/filtersConst"

type FilterToggleProps = {
  title: string
  type?: filterType
  handler: (title: string, value: boolean) => void
}

export default function FilterToggle({ title, type, handler }: FilterToggleProps) {
  const [isActive, setActive] = useState<boolean>(false)

  const onClickHanler = () => {
    setActive(!isActive)
    handler(title, !isActive)
  }
  return (
    <button
      className={clsx(styles.filter_toggle, type && styles[type], isActive && styles.filter_toggle__active)}
      onClick={onClickHanler}
    >
      <span className={type == "color" ? styles[title] : ""}>{type == "color" ? "" : title}</span>
    </button>
  )
}
