import clsx from "clsx"
import styles from "./FeedbackForm.module.css"
import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { InputMask } from "@react-input/mask"

type FormInputs = {
  phone: string
  email: string
  userText: string
  userName: string
}
export default function FeedbackForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset
  } = useForm<FormInputs>({ mode: "onBlur" })

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    validateUserText(data.userText) ? console.log(data) : console.log("error")

    reset()
  }
  const validateUserText = (text: string) => {
    if (text.match(/<|>|\=|\?|@/)) return false
    return true
  }
  return (
    <div className={styles.feedback_form__wrap}>
      <form className={styles.feedback_form} onSubmit={handleSubmit(onSubmit)}>
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
            name="phone"
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
          {errors.phone && <span className={styles.error_text}>{errors.phone.message}</span>}
        </div>
        <div className={styles.form_row}>
          <input
            id="user-email"
            {...register("email", {
              pattern: { value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/, message: "Введите корректную почту" }
            })}
          />
          <label htmlFor="user-email">E-mail</label>
          {errors.email && <span className={styles.error_text}>{errors.email.message}</span>}
        </div>
        <div className={styles.form_row}>
          <textarea id="user-text" cols={30} rows={5} {...register("userText")}></textarea>
          <label htmlFor="user-text">Сообщение</label>
        </div>
        <div className={styles.submit_wrap}>
          <button
            type="submit"
            className={clsx(styles.submit_btn, !isValid && styles.submit_btn__disabled)}
            disabled={!isValid}
          >
            Отправить
          </button>
          <p className={styles.policy_text}>
            Нажимая на кнопку «Отправить» вы даете согласие на обработку <span>персональных данных</span>
          </p>
          {isSubmitSuccessful && <p className={styles.success_text}>Сообщение успешно отправлено</p>}
        </div>
      </form>
    </div>
  )
}
