import Link from "next/link"
import { TcatalogGoodItem } from "../../../types/goodItem"
import styles from "./OtherProducts.module.css"
import Image from "next/image"
import { STRAPI_URL } from "@/utils/api/endpoints"

type OtherProductsProps = {
  products: TcatalogGoodItem[]
}

export default function OtherProducts({ products }: OtherProductsProps) {
  return (
    <div className={styles.products_container}>
      <ul className={styles.products_list}>
        {products.map(({ id, images, name, color, slug }) => (
          <li key={id}>
            <Link href={`/product/${slug}-${id}`} className={styles.product}>
              <div className={styles.product_img}>
                <Image
                  className={styles.gallery_img}
                  src={`${STRAPI_URL}${images[0]}`}
                  width={280}
                  height={350}
                  priority
                  alt={name}
                />
              </div>
              <div className={styles.product_title}>
                <span>{color}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
