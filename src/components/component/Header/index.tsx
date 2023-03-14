import React from 'react';
import css from './Header.module.scss';

import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <div className={css.header}>
      <Banner />

      <Menu />
    </div>
  );
};

export default Header;
