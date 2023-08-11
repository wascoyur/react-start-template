import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal-window.scss';

export type ModalProps = {
  onClick?: () => void;
  visible: boolean;
  children?: React.ReactNode;
  modalContent?: React.ReactNode;
};

const ModalWindow = (props: ModalProps) => {
  const { children, onClick, visible, modalContent = `Something happend...` } = props;
  const [isVisible, setIsVisible] = useState<boolean>(visible);
  const onClose = () => {
    onClick && onClick();
    setIsVisible(false);
  };
  const modal = () => {
    return (
      <div className="modal-layout">
        <div className="modal-window">
          <div className="close-wrapper">
            <div className="close-icon" onClick={onClose}>
              X
            </div>
          </div>
          {<div className="content">{modalContent || <div>Поле ввода пустое...</div>}</div>}
        </div>
      </div>
    );
  };
  const root = document.getElementById('root');

  return isVisible && root ? ReactDOM.createPortal(modal(), root) : children;
};

export default ModalWindow;
