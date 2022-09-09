import React from 'react';
import css from './GallerySidebar.module.scss';

const GallerySidebar = () => {
  return (
    <div className={css.sidebar}>
      <ul className={css.list}>
        <li className={css.item}>
          <button className={css.button}>Все</button>
        </li>
        <li className={css.item}>
          <button className={css.button}>Диваны</button>
        </li>
        <li className={css.item}>
          <button className={css.button}>Кровати</button>
        </li>
        <li className={css.item}>
          <button className={css.button}>Кресла и пуфы</button>
        </li>
        <li className={css.item}>
          <button className={css.button}>Разное</button>
        </li>
      </ul>
    </div>
  );
};

export default GallerySidebar;
