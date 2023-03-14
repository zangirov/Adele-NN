import React from 'react';
import css from './Condition.module.scss';

const Condition = () => {
  return (
    <div className={css.container}>
      <h3 className={css.payment}>
        Условия оплаты:
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In velit
          saepe iure omnis deserunt? Dolorum quisquam vero reprehenderit vitae
          accusamus.
        </p>
      </h3>
      <h3 className={css.delivery}>
        Условия доставки:
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut,
          laudantium fugit deleniti magnam distinctio accusamus adipisci ipsam
          ipsum, provident amet quam veniam fugiat at perspiciatis dolorum
          voluptates ullam harum?
        </p>
      </h3>
    </div>
  );
};

export default Condition;
