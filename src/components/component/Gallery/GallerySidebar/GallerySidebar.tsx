import React from 'react';
import css from './GallerySidebar.module.scss';
import Button from '../LinkItem/Link';


const GallerySidebar = () => {
  


  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        <ul className={css.list}>
          <li className={css.item}>
            <Button id="straight">Диван прямой</Button>
          </li>
          <li className={css.item}>
            <Button id="corner">Диван угловой</Button>
          </li>
          <li className={css.item}>
            <Button id="module">Диван модульный</Button>
          </li>
          <li className={css.item}>
            <Button id="bed">Кровать</Button>
          </li>
          <li className={css.item}>
            <Button id="business">Мебель для кафе, ресторанов</Button>
          </li>
          <li className={css.item}>
            <Button id="armchair">Кресло</Button>
          </li>
          <li className={css.item}>
            <Button id="taht">Тахта</Button>
          </li>
          <li className={css.item}>
            <Button id="puffs">Пуф</Button>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default GallerySidebar;
