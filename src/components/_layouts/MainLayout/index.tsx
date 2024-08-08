import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />

      <main>
        {children}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
