import React, { FC, ReactNode } from 'react';
import styles from './Modal.module.scss';
import cn from 'classnames';

interface ModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
  const onClose = () => {
    setVisible(!visible);
  };

  return (
    <div
      className={cn(styles.modal, {
        [styles.visible]: visible,
      })}
    >
      <div className={styles.overlay}></div>
      <div className={styles.popup}>
        <button className={styles.close} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
