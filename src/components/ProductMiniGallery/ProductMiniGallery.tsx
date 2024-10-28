"use client"
import { RefObject, useEffect, useRef, useState } from "react"
import styles from "./ProductMiniGallery.module.css"
import Image from "next/image"
import scrollToElement from "@/utils/scrollToElement"
import { STRAPI_URL } from "@/utils/api/endpoints"
import clsx from "clsx"

const framePositions = [
  "",
  styles.mini_gallery__frame__s1,
  styles.mini_gallery__frame__s2,
  styles.mini_gallery__frame__s3
]

type ProductMiniGalleryProps = {
  images: string[]
  refs: RefObject<HTMLDivElement>[]
}

export default function ProductMiniGallery({ images, refs }: ProductMiniGalleryProps) {
  const [framePos, setFramePos] = useState<number>(0)

  const frameRef = useRef<HTMLDivElement>(null)

  const setFramePositionByScroll = (scroll: any, chunk: number) => {
    if (scroll >= chunk && scroll < chunk * 2) {
      setFramePos(1)
      return
    }
    if (scroll >= chunk * 2 && scroll < chunk * 3) {
      setFramePos(2)
      return
    }
    if (scroll >= chunk * 3) {
      setFramePos(3)
      return
    }
    setFramePos(0)
  }

  useEffect(() => {
    const chunk = refs[0].current ? refs[0].current.offsetHeight - 100 : 700

    window.addEventListener("scroll", () => {
      setFramePositionByScroll(window.scrollY, chunk)
    })
  }, [refs])

  return (
    <div className={styles.mini_gallery}>
      {images.slice(0, 4).map((image, idx) => (
        <button
          type="button"
          className={styles.mini_gallery_btn}
          key={idx}
          onClick={() => {
            scrollToElement(refs[idx], "start")
          }}
        >
          <Image
            className={styles.mini_gallery_btn__img}
            src={`${STRAPI_URL}${image}`}
            width={70}
            height={105}
            priority
            alt={"product icon"}
          />
        </button>
      ))}
      <div className={clsx(styles.mini_gallery__frame, framePositions[framePos])} ref={frameRef}></div>
    </div>
  )
}
