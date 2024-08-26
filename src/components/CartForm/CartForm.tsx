import styles from "./CartForm.module.css"

export default function CartForm() {
  return (
    <div className={styles.cart_form__wrap}>
      <form action="/" method="post" className={styles.cart_form}>
        <div className={styles.forms_grid}>
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
            <textarea name="user-text" id="user-text" cols={30} rows={1}></textarea>
            <label htmlFor="user-text">Сообщение</label>
          </p>
        </div>
        <div className={styles.submit_wrap}>
          <button type="submit" className={styles.submit_btn}>
            Отправить запрос
          </button>
        </div>
      </form>
    </div>
  )
}
