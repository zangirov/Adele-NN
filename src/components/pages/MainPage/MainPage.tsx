import React from 'react';
import css from './MainPage.module.scss';
import MainPageCard from '../../component/MainPageCard/MainPageCard';
import Photo from '../../../assets/icons/drawing_photo.svg';
import Furniture from '../../../assets/icons/furniture.svg';
import Build from '../../../assets/icons/time_build.svg';

const Main = () => {
  return (

      <div className={css.container}>
        <div className={css.cards_block}>
          <MainPageCard
            paragraph={'Изготовление по индивидуальному проекту/фото'}
            src={Photo}
            alt={'icon_photo'}
          />
          <MainPageCard
            paragraph={'Перетяжка и ремонт мягкой мебели'}
            src={Furniture}
            alt={'icon_furniture'}
          />
          <MainPageCard
            paragraph={'Собственное производство и быстрое изготовление'}
            src={Build}
            alt={'icon_furniture'}
          />
        </div>
        <div className={css.main_text}>
          <p className={css.text}>
            Мы изготавливаем мягкую мебель на заказ по индивидуальному проекту
            или по Вашему фото, для жилого помещения, так и для коммерческого
            использования. Помогаем начиная с первоначальной идеи и заканчивая
            установкой, уделяя особое внимание процессу производства. Мы
            компания с более чем 10 лет опыта и большим количеством хороших
            отзывов от наших клиентов.
          </p>
        </div>
      </div>

  );
};

export default Main;
