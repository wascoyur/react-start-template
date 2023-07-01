import React from 'react';
import './Modal-window.scss';
import ReactDOM from 'react-dom';

type Props = {
  onClick: () => void;
  visible: boolean;
  children?: React.ReactNode;
  pp?: React.ReactNode;
};

const ModalWindow = (props: Props) => {
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
          {children}
        </div>
      </div>
    );
  };

  return visible ? ReactDOM.createPortal(modal(), document.getElementById('modal') as HTMLElement) : children;
};

export { ModalWindow };
