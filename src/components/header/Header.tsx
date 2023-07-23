import React, { FC } from 'react';
import styles from './Header.module.css';
import cn from 'clsx';
import { Logo } from '../logo/Logo';

export const Header: FC = () => {
  return (
    <div className={cn(styles.header)}>
      <Logo />
    </div>
  );
};
