import React, { FC, ReactNode } from 'react';
import styles from './Button.module.css';
import cn from 'clsx';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={cn(styles.button)} onClick={onClick}>
      {children}
    </button>
  );
};
