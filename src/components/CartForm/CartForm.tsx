import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Tfeedback } from "../../../types/feedback"
import styles from "./CartForm.module.css"
import { InputMask } from "@react-input/mask"
import clsx from "clsx"
import { useBoundStore } from "@/store/StoreProvider"
import { createOrder } from "@/utils/api/queries/createOrder"
import { TcatalogGoodItem } from "../../../types/goodItem"

export default function CartForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset
  } = useForm<Tfeedback>({ mode: "onBlur" })

  const { cartProducts, clearCart } = useBoundStore((state) => ({
    cartProducts: state.cartProducts,
    clearCart: state.clearCart
  }))

  const getProductList = (products: TcatalogGoodItem[]) => {
    let prodList: string[] = []
    products.forEach((product) => {
      let prodListItem = `--Товар: "${product.name}", Цвет: "${product.colors[0]}", Размер: ${product.sizes[0]}, Цена: ${product.price}p`
      prodList.push(prodListItem)
    })
    return prodList.join(";")
  }

  const submitDataHandler = (data: Tfeedback) => {
    // createFeedback(data
    let prodList = getProductList(cartProducts)
    const order = {
      userPhone: data.userPhone,
      userEmail: data.userEmail,
      userText: data.userText,
      userName: data.userName,
      products: prodList
    }

    createOrder(order)
    clearCart(true)
    reset()
  }

  const onSubmit: SubmitHandler<Tfeedback> = (data) => {
    validateUserText(data.userText) ? submitDataHandler(data) : console.log("error")
  }
  const validateUserText = (text: string) => {
    if (text.match(/<|>|\=|\?|@/)) return false
    return true
  }

  return (
    <div className={styles.cart_form__wrap}>
      <form action="/" method="post" className={styles.cart_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.forms_grid}>
          <div className={styles.form_row}>
            <input
              id="user-name"
              {...register("userName", {
                required: "Это поле обязвтельно",
                maxLength: { value: 60, message: "Слишком длинное имя" },
                minLength: { value: 2, message: "Слишком короткое имя" },
                pattern: { value: /[^\<\>\?]/, message: "В имени недопустимые символы" }
              })}
            />
            <label htmlFor="user-name">Имя</label>
            {errors.userName && <span className={styles.error_text}>{errors.userName.message}</span>}
          </div>
          <div className={styles.form_row}>
            <Controller
              name="userPhone"
              control={control}
              rules={{
                required: "Это поле обязвтельно"
              }}
              defaultValue=""
              render={({ field: { onChange, onBlur } }) => (
                <InputMask mask="+7 (___)-___-__-__" replacement={{ _: /\d/ }} onChange={onChange} onBlur={onBlur} />
              )}
            />
            <label htmlFor="user-phone">Телефон</label>
            {errors.userPhone && <span className={styles.error_text}>{errors.userPhone.message}</span>}
          </div>
          <div className={styles.form_row}>
            <input
              id="user-email"
              {...register("userEmail", {
                pattern: {
                  value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                  message: "Введите корректную почту"
                }
              })}
            />
            <label htmlFor="user-email">E-mail</label>
            {errors.userEmail && <span className={styles.error_text}>{errors.userEmail.message}</span>}
          </div>
          <div className={styles.form_row}>
            <textarea id="user-text" cols={30} rows={1} {...register("userText")}></textarea>
            <label htmlFor="user-text">Сообщение</label>
          </div>
        </div>
        <div className={styles.submit_wrap}>
          <button
            type="submit"
            className={clsx(styles.submit_btn, !isValid && styles.submit_btn__disabled)}
            disabled={!isValid}
          >
            Отправить
          </button>

          {isSubmitSuccessful && <p className={styles.success_text}>Сообщение успешно отправлено</p>}
        </div>
      </form>
    </div>
  )
}
