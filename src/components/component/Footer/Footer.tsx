import React from 'react';
import css from './Footer.module.scss';

const Footer = () => {
  return (
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
  );
};

export default Footer;
