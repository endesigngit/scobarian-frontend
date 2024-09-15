import { clsx } from "clsx"
import styles from "./Offcanvas.module.css"
import { ReactNode } from "react"

type OffcanvasProps = {
  isActive: boolean
  closeHandler: (value: boolean) => void
  children: ReactNode
}

export default function Offcanvas({ isActive, closeHandler, children }: OffcanvasProps) {
  return (
    <div className={clsx(styles.offcanvas, isActive && styles.offcanvas__active)}>
      <div className={styles.overlay} onClick={() => closeHandler(false)}></div>
      <div className={styles.offcanvas_body}>
        <div className={styles.offcanvas_nav}>
          <span className={styles.offcanvas_title}>Фильтры</span>
          <button type="button" className={styles.offcanvas_close_btn} onClick={() => closeHandler(false)}>
            Закрыть
          </button>
        </div>
        <div className={styles.offcanvas_content}>{children}</div>
      </div>
    </div>
  )
}
