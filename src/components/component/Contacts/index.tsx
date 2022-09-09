import React from 'react';
import css from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={css.contacts}>
      <div className={css.container}>
        <h3 className={css.titles}>
          Почтовый адрес:
          <p className={css.info}>
            603049, г. Нижний Новгород, ул. Спутника, 7А, 66
          </p>
        </h3>
        <h3 className={css.titles}>
          Фактический адрес:
          <p className={css.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            officiis laudantium accusantium natus fuga repudiandae, minus
            quaerat impedit eos deleniti. Illum officia hic architecto
            doloremque deserunt eveniet fuga quisquam excepturi!
          </p>
        </h3>
        <h3 className={css.titles}>
          Телефон: <p className={css.info}>+79535770579</p>
        </h3>
        <h3 className={css.titles}>
          Режим работы: <p className={css.info}>с 9:00 до 18:00</p>
        </h3>
        <h3 className={css.titles}>
          e-mail: <p className={css.info}>adele-nn@mail.ru</p>
        </h3>
        <h3 className={css.titles}>
          Наше местоположение:
          <p className={css.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure,
            ducimus voluptatum placeat nihil quod laboriosam a nisi autem
            dignissimos accusantium earum ipsam ad repellendus ex perferendis?
            Blanditiis, aliquid dolorem.
          </p>
        </h3>
      </div>
    </div>
  );
};

export default Contacts;
