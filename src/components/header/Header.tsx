import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Logo } from '../logo';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
};
