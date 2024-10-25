import styles from "./page.module.css"
import { Typography } from "@/UI/Typography/Typography"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "О бренде I’am skobarian",
    template: ""
  },
  description: "Бренд I am Skobarian основан в начале 2024 года в Пскове. Имя бренд получил от слова «скобарь»."
}

export default function About() {
  return (
    <main className={styles.page_main}>
      <Breadcrumb padding />
      <div className="main_grid">
        <div className={styles.grid_col_img}></div>
        <div className={styles.grid_col}>
          <Typography className={styles.page_title} tag={"h1"} variant={"h1"}>
            Философия бренда
          </Typography>
          <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
            Бренд I am Skobarian основан в начале 2024 года в Пскове. Имя бренд получил от слова «скобарь».
          </Typography>
          <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
            Скоба́рь — разговорное название жителей Пскова и Псковщины. Так называли тех, кто ковал скобяные изделия. По
            легенде, Петр I, обладавший недюжинной силой, не смог разогнуть скобу, выкованную псковскими кузнецами. «Вот
            это скобари!» — воскликнул государь и позвал их на строительство Санкт-Петербурга и зарождавшегося
            российского флота. Вот так скобари стали у истоков государства российского
          </Typography>
          <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
            Сегодня скобари — символ псковской аутентичности. Псковская земля славится людьми и их ремёслами. Общее дело
            сплачивает людей и делает их сильнее. Скобарь — это несгибаемый, надёжный, трудолюбивый, честный человек,
            какими в древности и были псковичи.
          </Typography>
          <Typography className={styles.page_paragraph} tag={"p"} variant={"text"}>
            Скобарь — это твёрдый характер, сила убеждений, умение слышать себя, любовь к природе, житейская мудрость.
            Такой человек сначала пугает своей суровостью, а потом, когда видишь под жёсткой скорлупой искренность,
            бесхитростность и доброту, хочется его обнять
          </Typography>
        </div>
      </div>
    </main>
  )
}
