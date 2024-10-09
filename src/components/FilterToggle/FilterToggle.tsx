import clsx from "clsx"
import styles from "./FilterToggle.module.css"
import { useState } from "react"

type FilterToggleProps = {
  title: string
  type?: "size" | "color"
  hadler: (title: string, value: boolean) => void
}

export default function FilterToggle({ title, type, hadler }: FilterToggleProps) {
  const [isActive, setActive] = useState<boolean>(false)

  const onClickHanler = () => {
    setActive(!isActive)
    hadler(title, !isActive)
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
