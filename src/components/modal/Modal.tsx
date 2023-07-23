import React, { FC, ReactNode } from 'react';
import styles from './Modal.module.css';
import cn from 'clsx';

interface ModalProps {
  visible: boolean;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, children }) => {
  return (
    <div
      className={cn(styles.modal, {
        visible,
      })}
    >
      <div className={cn(styles.overlay)}></div>
      <div className={cn(styles.popup)}>
        <button className={cn(styles.close)}>X</button>
        {children}
      </div>
    </div>
  );
};
