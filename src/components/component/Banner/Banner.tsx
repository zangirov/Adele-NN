import React from 'react';
import styles from './Banner.module.scss';
import { NavLink } from 'react-router-dom';
import phone from '../../../assets/icons/phone.svg';
import mail from '../../../assets/icons/mail.svg';
import logotype from '../../../assets/icons/logotype.svg'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.left}>
          <NavLink className={styles.title} to="/">
            <img src={logotype} alt="logo" className={styles.logo}/>
          </NavLink>
          <h1 className={styles.slogan}>Мягкая мебель в Нижнем Новгороде</h1>
        </div>
        <div className={styles.right}>
          <a href="tel: " className={styles.phone}>
            +7 (987) 654-32-10
          </a>          
          <img src={phone} alt="Позвонить нам" />
          <a href="mailto: " className={styles.mail}>
            adele-nn@mail.ru
          </a>
          <img src={mail} alt="Написать e-mail" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
