import React from 'react';
import css from './Header.module.scss';
import image from '../../../assets/images/banner.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.container}>
        <div className={css.banner}>
          <img className={css.image} src={image} alt="#!" />
          <NavLink className={css.banner_title} to="/">
            Adele
          </NavLink>
          <h2 className={css.banner_slogan}>
            Мягкая мебель в Нижнем Новгороде
          </h2>
        </div>
        <span className={css.decoration}></span>
        <div className={css.menu}>
          <ul className={css.menu_list}>
            <li className={css.list_item}>
              <NavLink className={css.item_navigate} to="/">
                Главная
              </NavLink>
            </li>
            
            <li className={css.list_item}>
              <NavLink className={css.item_navigate} to="/gallery">
                Выполненные работы
              </NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink className={css.item_navigate} to="/condition">
                Оплата и доставка
              </NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink className={css.item_navigate} to="/contacts">
                Контакты
              </NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink className={css.item_navigate} to="/request">
                Оставить заявку
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
