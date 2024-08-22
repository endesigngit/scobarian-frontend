"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"

export default function Tailoring() {
  return (
    <main className={styles.page_main}>
      <div className={styles.main_grid_container}>
        <div className={clsx(styles.left_side, styles.left_side__stickyBG)}></div>
        <div className={styles.right_side}>
          <div className={styles.grid_col}>
            <Typography className={styles.page_title} tag={"h1"} variant={"h1"}>
              Пошив корпоративного мерча
            </Typography>
            <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
              Шьём мерч с символикой бизнеса по нашим лекалам с любыми нанесениями большим тиражом. Отбираем лучших
              поставщиков и работаем только с теми, кто гарантирует высокое качество.Ткани и фурнитуру проверяем на
              брак.
            </Typography>
            <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
              Заказывая пошив корпоративной одежды у нас, вы получите:
            </Typography>
            <ul className={styles.page_list}>
              <li className={styles.page_list_item}>высокое качество материалов</li>
              <li className={styles.page_list_item}>короткий срок исполнения</li>
              <li className={styles.page_list_item}>
                индивидуальное моделирование выбор из широкого спектра цветовой палитры материалов
              </li>
              <li className={styles.page_list_item}>высокое качество материалов</li>
            </ul>
            <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
              Изготовим сигнальный образец для согласования перед отправкой тиража в производство.
            </Typography>
            <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
              Организуем доставку в любую точку <span>России и СНГ</span>.
            </Typography>
          </div>
          <div className={styles.form_wrap}>
            <Typography className={styles.form_title} tag={"h1"} variant={"h1"}>
              Связаться с нами
            </Typography>
            <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
              Оставьте обращение в форме ниже, и мы обязательно ответим вам
            </Typography>
            <div className={styles.feedback_form__wrap}>
              <form action="/" method="post" className={styles.feedback_form}>
                <p>
                  <label htmlFor="user-name">Имя</label>
                  <input type="text" name="user-name" id="user-name" required />
                </p>
                <p>
                  <label htmlFor="user-phone">Телефон</label>
                  <input
                    type="tel"
                    id="user-phone"
                    name="user-phone"
                    pattern="+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    required
                  />
                </p>
                <p>
                  <label htmlFor="user-email">E-mail</label>
                  <input type="user-email" id="user-email" pattern=".+@example\.com" size={30} required />
                </p>
                <p>
                  <label htmlFor="user-text">Сообщение</label>
                  <textarea name="user-text" id="user-text" cols={30} rows={5}></textarea>
                </p>
                <div className={styles.submit_wrap}>
                  <button type="submit" className={styles.submit_btn}>
                    Отправить
                  </button>
                  <p className={styles.policy_text}>
                    Нажимая на кнопку «Отправить» вы даете согласие на обработку <span>персональных данных</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
