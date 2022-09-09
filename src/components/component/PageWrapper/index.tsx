import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import css from './PageWrapper.module.scss';
import { Outlet } from 'react-router-dom';

const PageWrapper = () => {
  return (
    <div className={css.container}>
      <Header />
      <main className={css.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
