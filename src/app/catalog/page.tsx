"use client"
import clsx from "clsx"
import styles from "./page.module.css"
import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { useState } from "react"
import Image from "next/image"
import imageOne from "../../assets/images/product-img-1.jpg"
import imagesTo from "../../assets/images/product-img-2.jpg"
import Offcanvas from "@/components/Offcanvas/Offcanvas"
import OffcanvasFilters from "@/components/OffcanvasFilters/OffcanvasFilters"

export default function Catalog() {
  const [gridStatus, setGridStatus] = useState<boolean>(true)
  const [offcanvasIsActive, setOffcanvasIsActive] = useState<boolean>(false)
  return (
    <main className={styles.page_main}>
      <Breadcrumb pageTitle={"Каталог"} padding />
      <div className={`${styles.catalog_top} main_grid`}>
        <div className={styles.grid_toggles}>
          <button
            type="button"
            className={clsx(styles.grid_toggle, gridStatus && styles.grid_toggle__active)}
            onClick={() => setGridStatus(!gridStatus)}
          >
            <span>4</span>
            <span>3</span>
          </button>
          <button
            type="button"
            className={clsx(styles.grid_toggle, !gridStatus && styles.grid_toggle__active)}
            onClick={() => setGridStatus(!gridStatus)}
          >
            <span>3</span>
            <span>2</span>
          </button>
        </div>
        <div className={styles.filter_toggles}>
          <button
            type="button"
            className={styles.filter_toggle}
            onClick={() => setOffcanvasIsActive(!offcanvasIsActive)}
          >
            Фильтры
          </button>
        </div>
      </div>
      <div className={styles.catalog_container}>
        <ul className={clsx(styles.product_list, !gridStatus && styles.product_list__second)}>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <ul className={styles.dimensions}>
                      <li className={styles.size_S}>S</li>
                      <li className={styles.size_M}>M</li>
                      <li className={styles.size_L}>L</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>Худи I’am skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imagesTo} alt="Picture of product" />
                <button type="button" className={clsx(styles.add_cart_btn, styles.add_cart_btn__active)}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <p className={styles.proportions}>34х58</p>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>шопер skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <ul className={styles.dimensions}>
                      <li className={styles.size_S}>S</li>
                      <li className={styles.size_M}>M</li>
                      <li className={styles.size_L}>L</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>Худи I’am skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imagesTo} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <p className={styles.proportions}>34х58</p>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>шопер skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <ul className={styles.dimensions}>
                      <li className={styles.size_S}>S</li>
                      <li className={styles.size_M}>M</li>
                      <li className={styles.size_L}>L</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>Худи I’am skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imagesTo} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <p className={styles.proportions}>34х58</p>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>шопер skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <ul className={styles.dimensions}>
                      <li className={styles.size_S}>S</li>
                      <li className={styles.size_M}>M</li>
                      <li className={styles.size_L}>L</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>Худи I’am skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imagesTo} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <p className={styles.proportions}>34х58</p>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>шопер skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <ul className={styles.dimensions}>
                      <li className={styles.size_S}>S</li>
                      <li className={styles.size_M}>M</li>
                      <li className={styles.size_L}>L</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>Худи I’am skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imagesTo} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <p className={styles.proportions}>34х58</p>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>шопер skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <ul className={styles.dimensions}>
                      <li className={styles.size_S}>S</li>
                      <li className={styles.size_M}>M</li>
                      <li className={styles.size_L}>L</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>Худи I’am skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imagesTo} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <p className={styles.proportions}>34х58</p>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>шопер skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imageOne} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <ul className={styles.dimensions}>
                      <li className={styles.size_S}>S</li>
                      <li className={styles.size_M}>M</li>
                      <li className={styles.size_L}>L</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>Худи I’am skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
          <li className={styles.product_item}>
            <div className={styles.product}>
              <div className={styles.product_img_wrap}>
                <Image className={styles.product_img} src={imagesTo} alt="Picture of product" />
                <button type="button" className={styles.add_cart_btn}>
                  <span className={styles.add_cart_title}>в корзину</span>
                  <span className={styles.add_cart_icon}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        stroke="black"
                      />
                      <path
                        d="M5 5V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 5 11 5"
                        stroke="black"
                      />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.83284 5.79399L1.2539 13.294C1.12304 13.9155 1.59727 14.5 2.23245 14.5H13.7676C14.4027 14.5 14.877 13.9155 14.7461 13.294L13.1672 5.79399C13.0697 5.33125 12.6615 5 12.1886 5H3.81139C3.33851 5 2.93026 5.33125 2.83284 5.79399Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M5 6V4.5C5 2.84315 6.34315 1.5 8 1.5C9.65685 1.5 11 2.84315 11 4.5C11 5 11 6 11 6"
                        stroke="black"
                      />
                    </svg>
                  </span>
                </button>
                <div className={styles.product_parameters}>
                  <div className={styles.parameters_item}>
                    <ul className={styles.colors}>
                      <li className={styles.color_brown}></li>
                      <li className={styles.color_grey}></li>
                      <li className={styles.color_violet}></li>
                    </ul>
                  </div>
                  <div className={styles.parameters_item}>
                    <p className={styles.proportions}>34х58</p>
                  </div>
                </div>
              </div>
              <Link href={"/"} className={styles.product_content}>
                <h3 className={styles.product_title}>шопер skobarian</h3>
                <span className={styles.product_price}>9 600 P</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <Offcanvas isActive={offcanvasIsActive} closeHandler={setOffcanvasIsActive} >
        <OffcanvasFilters />
      </Offcanvas>
    </main>
  )
}
