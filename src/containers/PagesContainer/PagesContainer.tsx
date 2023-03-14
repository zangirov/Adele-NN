import React from 'react';
import Footer from '../../components/component/Footer/Footer';
import Header from '../../components/component/Header';
import css from './PagesContainer.module.scss';
import { Outlet } from 'react-router-dom';

const PageWrapper = () => {
  return (
    <div className={css.container}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default PageWrapper;
