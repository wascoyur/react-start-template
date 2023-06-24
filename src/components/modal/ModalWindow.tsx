import React from 'react';
import './Modal-window.scss';

type Props = {
  onClick: () => void;
  visible: boolean;
  children?: React.ReactNode;
};

const ModalWindow = (props: Props) => {
  const { children } = props;
  return (
    <div className="modal-layout">
      <div className="modal-window">{children}</div>
    </div>
  );
};

export { ModalWindow };
