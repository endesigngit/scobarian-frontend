"use client"
import styles from "./page.module.css"
import Link from "next/link"
import { clsx } from "clsx"
import { Typography } from "@/UI/Typography/Typography"
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"

export default function Tailoring() {
  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={"Пошив"} padding />
      <div className={styles.main_grid_container}>
        <div className={clsx(styles.left_side, styles.left_side__stickyBG)}></div>
        <div className={styles.right_side}>
          <div className={styles.grid_col}>
            <Typography className={styles.page_title} tag={"h1"} variant={"h1"}>
              Пошив корпоративного мерча
            </Typography>
            <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
              Шьём мерч с символикой бизнеса по нашим лекалам с любыми нанесениями большим тиражом. Отбираем лучших
              поставщиков и работаем только с теми, кто гарантирует высокое качество.
              <br /> Ткани и фурнитуру проверяем на брак.
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
            <FeedbackForm />
          </div>
        </div>
      </div>
    </main>
  )
}
