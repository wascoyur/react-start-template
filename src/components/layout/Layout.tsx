import React, { FC } from 'react';
import { Header } from '../header/Header';
import styles from './Layout.module.css';
import cn from 'clsx';

export const Layout: FC = () => {
  return (
    <div className={cn(styles.layout)}>
      <Header />
    </div>
  );
};
