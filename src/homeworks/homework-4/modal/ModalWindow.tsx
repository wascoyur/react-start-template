import React from 'react';
import ReactDOM from 'react-dom';
import './Modal-window.scss';

export type ModalProps = {
  onClick: () => void;
  visible: boolean;
  children?: React.ReactNode;
};

const ModalWindow = (props: ModalProps) => {
  const { children, onClick, visible } = props;
  const modal = () => {
    return (
      <div className="modal-layout">
        <div className="modal-window">
          <div className="close-wrapper">
            <div className="close-icon" onClick={onClick}>
              X
            </div>
          </div>
          {children ? children : <div>Что-то произошло...</div>}
        </div>
      </div>
    );
  };

  return visible ? ReactDOM.createPortal(modal(), document.getElementById('modal') as HTMLElement) : children;
};

export default ModalWindow;
