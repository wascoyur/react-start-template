import React, { FC } from 'react';
import styles from './Logo.module.css';
import cn from 'clsx';

export const Logo: FC = () => {
  return <div className={cn(styles.logo)} />;
};
