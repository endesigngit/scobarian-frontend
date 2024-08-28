import styles from "./HeaderCart.module.css"
import clsx from "clsx"
import Link from "next/link"

type HeaderCartProps = {
  className?: string
  isActiveNeader: boolean
}

export default function HeaderCart({ className, isActiveNeader }: HeaderCartProps) {
  return (
    <Link
      href={"/cart"}
      className={clsx(styles.cart, styles.cart__empty, className, isActiveNeader && styles.cart__active)}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z" />
        <path d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5" />
      </svg>
      <span className={styles.cart_count}>0</span>
    </Link>
  )
}
