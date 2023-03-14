import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.titles}>
        Адрес производства:
        <p className={styles.info}>
          г. Нижний Новгород, ул. Заводская 38 (СП Кудьма)
        </p>
      </h3>
      <h3 className={styles.titles}>
        Юридический (почтовый) адрес:
        <p className={styles.info}>
          603049, г. Нижний Новгород, ул. Спутника, 7А, 66
        </p>
      </h3>

      <h3 className={styles.titles}>
        Телефоны: <p className={styles.info}>+79535770579</p>
      </h3>
      <h3 className={styles.titles}>
        Режим работы: <p className={styles.info}>с 9:00 до 18:00</p>
      </h3>
      <h3 className={styles.titles}>
        e-mail: <p className={styles.info}>adele-nn@mail.ru</p>
      </h3>
      <h3 className={styles.titles}>
        Мы на карте:
        <div
          className={styles.map_block}
          style={{ position: 'relative', overflow: 'hidden' }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?from=tabbar&ll=43.867056%2C56.166161&mode=search&oid=20938660410&ol=biz&sll=43.867056%2C56.166161&source=serp_navig&text=%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%20%D0%BD%D0%BD%20%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9%20%D0%BD%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4&z=15"
            className={styles.map}
            frameBorder="1"
            allowFullScreen={true} />
        </div>
      </h3>
    </div>
  );
};

export default Contacts;
