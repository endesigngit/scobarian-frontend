import { clsx } from "clsx"
import styles from "./Offcanvas.module.css"

type OffcanvasProps = {
  isActive: boolean
  closeHandler: (value: boolean) => void
}

export default function Offcanvas({ isActive, closeHandler }: OffcanvasProps) {
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
        <div className={styles.offcanvas_content}>
          <div className={styles.filters}>
            <ul className={styles.filters_list}>
              <li className={styles.filters_item}>
                <div className={styles.filter}>
                  <button type="button" className={styles.filter_toggle}>
                    Сортировка
                  </button>
                  <div className={clsx(styles.filter_content, styles.filter_content__open)}>
                    <ul className={styles.filter_list}>
                      <li className={clsx(styles.filter_item, styles.filter_item__active)}>
                        <button className={styles.filter_name} value={"Низкая цена"}>
                          <span>Низкая цена</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"Высокая цена"}>
                          <span>Высокая цена</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"Новое"}>
                          <span>Новое</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"скидки"}>
                          <span>скидки</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.filters_item}>
                <div className={styles.filter}>
                  <button type="button" className={styles.filter_toggle}>
                    Размер
                  </button>
                  <div className={clsx(styles.filter_content, styles.filter_content__open)}>
                    <ul className={clsx(styles.filter_list, styles.filter_list__size)}>
                      <li className={clsx(styles.filter_item, styles.filter_item__active)}>
                        <button className={styles.filter_name} value={"XS"}>
                          <span>XS</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"S"}>
                          <span>S</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"M"}>
                          <span>M</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"L"}>
                          <span>L</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"ХL"}>
                          <span>ХL</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.filters_item}>
                <div className={styles.filter}>
                  <button type="button" className={styles.filter_toggle}>
                    Цвет
                  </button>
                  <div className={clsx(styles.filter_content, styles.filter_content__open)}>
                    <ul className={clsx(styles.filter_list, styles.filter_list__colors)}>
                      <li className={clsx(styles.filter_item, styles.filter_item__active)}>
                        <button className={styles.filter_name} value={"white"}>
                          <span>white</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"black"}>
                          <span>black</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"green"}>
                          <span>green</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"violet"}>
                          <span>violet</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"brown"}>
                          <span>brown</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"grey"}>
                          <span>grey</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={styles.filters_item}>
                <div className={styles.filter}>
                  <button type="button" className={styles.filter_toggle}>
                    Тип
                  </button>
                  <div className={clsx(styles.filter_content, styles.filter_content__open)}>
                    <ul className={styles.filter_list}>
                      <li className={clsx(styles.filter_item, styles.filter_item__active)}>
                        <button className={styles.filter_name} value={"Худи"}>
                          <span>Худи</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"Бомбер"}>
                          <span>Бомбер</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"Футболка"}>
                          <span>Футболка</span>
                        </button>
                      </li>
                      <li className={styles.filter_item}>
                        <button className={styles.filter_name} value={"Толстовка"}>
                          <span>Толстовка</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
