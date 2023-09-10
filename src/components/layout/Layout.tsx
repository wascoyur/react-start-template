import React, { FC } from 'react';
import { Header } from '../header';
import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
    </div>
  );
};
