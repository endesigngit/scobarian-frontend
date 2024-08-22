import styles from "./FeedbackForm.module.css"

export default function FeedbackForm() {
  return (
    <div className={styles.feedback_form__wrap}>
      <form action="/" method="post" className={styles.feedback_form}>
        <p>
          <input type="text" name="user-name" id="user-name" maxLength={60} required />
          <label htmlFor="user-name">Имя</label>
        </p>
        <p>
          <input
            type="tel"
            id="user-phone"
            name="user-phone"
            pattern="+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
          />
          <label htmlFor="user-phone">Телефон</label>
        </p>
        <p>
          <input type="user-email" id="user-email" pattern=".+@example\.com" size={30} required />
          <label htmlFor="user-email">E-mail</label>
        </p>
        <p>
          <textarea name="user-text" id="user-text" cols={30} rows={5}></textarea>
          <label htmlFor="user-text">Сообщение</label>
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
  )
}
