"use client"
import styles from "./ProductItem.module.css"
import Image from "next/image"
import Link from "next/link"
import ProductColors from "../ProductColors/ProductColors"
import ProductDimensions from "../ProductDimensions/ProductDimensions"
import getGoods from "@/mock/goods"
import { useBoundStore } from "@/store/StoreProvider"
import { TcatalogGood } from "../../../types/goods"
import { MouseEvent, useEffect, useState } from "react"
import formatPriceNum from "@/utils/formatPriceNum"
import { TcatalogGoodItem } from "../../../types/goodItem"
import { STRAPI_URL } from "@/utils/api/endpoints"
import clsx from "clsx"
import { useRouter } from "next/navigation"

type ProductItemProps = {
  good: TcatalogGoodItem;
  ofcanvasHandler: () => void;
};

export default function ProductItem({ good, ofcanvasHandler }: ProductItemProps) {
  const { name, images, type, price, colors, color, sizes, id, slug, size } = good;

  const [selectedSize, setSelectedSize] = useState<string>(size); // Выбранный размер
  const [selectedColor, setSelectedColor] = useState<string>(color); // Выбранный цвет
  const [inCart, setCart] = useState<boolean>(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const { addToCart, cartProducts } = useBoundStore((state) => ({
    addToCart: state.addToCart,
    cartProducts: state.cartProducts,
  }));

  const openPopup = () => {
    if (!inCart) {
      setPopupVisible(true);
    } else {
      ofcanvasHandler(); 
    }
  };

  const addToCartHandler = () => {
    if (!inCart) {
      addToCart({ ...good, size: selectedSize, color: selectedColor });
    }
    ofcanvasHandler();
    setCart(true);
    setPopupVisible(false);
  };

  useEffect(() => {
    if (cartProducts.find((prod) => prod.id == id)) {
      setCart(true);
    } else {
      setCart(false);
    }
  }, [cartProducts, id]);

  return (
    <div className={clsx(styles.product, "animate_show")}>
      <Link href={`/product/${slug}-${id}`} className={styles.product_img_wrap}>
        <Image
          className={styles.product_img}
          src={`${STRAPI_URL}${images[0]}`}
          width={500}
          height={750}
          alt={name}
          priority={true}
        />
        <div className={styles.product_parameters}>
          <div className={styles.parameters_item}>
            <ProductColors colors={colors} actualColor={color} />
          </div>
          <div className={styles.parameters_item}>
            <ProductDimensions sizes={sizes} actualSize={size} />
          </div>
        </div>
      </Link>
      <button type="button" className={styles.add_cart_btn} onClick={openPopup}>
        <span className={styles.add_cart_title}>{inCart ? "Перейти в корзину" : "В корзину"}</span>
      </button>
      <Link href={`/product/${slug}-${id}`} className={styles.product_content}>
        <h3 className={styles.product_title}>{name}</h3>
        <span className={styles.product_price}>{formatPriceNum(price)} P</span>
      </Link>

      {isPopupVisible && (
        <div className={styles.popup}>
          <div className={styles.popup__choice}>
            <p>Выберите размер</p>
            <div className={styles.popup__desmisions}>
              {sizes.map((item) => (
                <button
                  key={item}
                  className={clsx(styles.popup__size, {
                    [styles.selected]: item === selectedSize,
                  })}
                  onClick={() => setSelectedSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.popup__choice}>
            <p>Выберите цвет</p>
            <div className={styles.popup__desmisions}>
              {colors.map((item) => (
                <button
                  key={item}
                  className={clsx(styles.popup__size, {
                    [styles.selected]: item === selectedColor,
                  })}
                  onClick={() => setSelectedColor(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.popup__buttons}>
            <Link href={`/product/${slug}-${id}`}>Подробнее о товаре</Link>
            <button onClick={addToCartHandler}>Добавить в корзину</button>
            <button onClick={() => setPopupVisible(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}
