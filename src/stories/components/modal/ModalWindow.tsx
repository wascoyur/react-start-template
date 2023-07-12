import React from 'react';
import './Modal-window.scss';
import ReactDOM from 'react-dom';

export type ModalProps = {
  onClick: () => void;
  visible: boolean;
  children?: React.ReactNode;
  modalContent?: React.ReactNode;
};

const ModalWindow = (props: ModalProps) => {
  const { children, onClick, visible, modalContent } = props;
  const modal = () => {
    return (
      <div className="modal-layout">
        <div className="modal-window">
          <div className="close-wrapper">
            <div className="close-icon" onClick={onClick}>
              X
            </div>
          </div>
          {<div className="content">{modalContent}</div>}
        </div>
      </div>
    );
  };
  const root = document.body as HTMLElement;

  return visible && root ? ReactDOM.createPortal(modal(), root) : children;
};

export default ModalWindow;
