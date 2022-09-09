import React from 'react';
import css from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={css.container}>
      <footer className={css.footer}>
        <div>
          <h3>Logotype</h3>
        </div>
        <div>
          <h3>Number</h3>
        </div>
        <div>
          <h3>Footer</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
