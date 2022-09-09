import React from 'react';
import css from './Form.module.scss';

const Form = () => {
  return (
    <div className={css.container}>
      <form className={css.form} action="post">
        <h2>Оставьте заявку</h2>
        <label htmlFor="name_input">
          Введите Ваше имя:
          <input
            id="name_input"
            className={css.input_name}
            name="name"
            type="text"
            required
            autoFocus
          />
        </label>
        <label htmlFor="check-email">
          <input
            className={css.check_email}
            id="check-email"
            name="check-email"
            type="checkbox"
          />{' '}
          Связаться по электронной почте
        </label>
        <input className={css.input_email} name="email" type="email" required />
        <label htmlFor="check-phone">
          <input
            className={css.check_phone}
            id="check-phone"
            name="check-phone"
            type="checkbox"
          />{' '}
          Связаться по телефону
        </label>

        <input
          className={css.input_phone}
          name="phone"
          type="tel"
          placeholder="+7"
          required
        />

        <textarea
          className={css.text_area}
          placeholder="Введите Ваше сообщение"
        
          maxLength={300}
          cols={50}
          rows={20}
          name="text-area"
        />
        <label htmlFor="submit">
          <input
            className={css.submit}
            name="submit"
            value="Отправить"
            type="submit"
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
