import { STRAPI_URL } from "@/utils/api/endpoints"
import styles from "./ProductGallery.module.css"
import Image from "next/image"
import { RefObject } from "react"

type ProductGalleryProps = {
  images: string[]
  refs: RefObject<HTMLDivElement>[]
  altName: string
}

export default function ProductGallery({ images, refs, altName }: ProductGalleryProps) {
  return (
    <div className={styles.product_gallery}>
      {images.slice(0, 4).map((image, idx) => (
        <div className={styles.product_gallery__item} key={idx} ref={refs[idx]}>
          <Image
            className={styles.gallery_img}
            src={`${STRAPI_URL}${image}`}
            width={700}
            height={1050}
            priority
            alt={altName}
          />
        </div>
      ))}
    </div>
  )
}
