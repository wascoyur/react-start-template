import ModalWindow, { ModalProps } from './components/modal/ModalWindow';
import { Button } from './components/button/Button';
import React, { useState } from 'react';
import './components/modal/Modal-window.scss';
import './components/index.scss';

export default {
  title: 'Modal Window',
  component: ModalWindow,
};

export const ModalWindowS = (props: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const { children } = props;

  const handleClickButton = () => {
    if (isVisible) {
      setModalContent('');
      setIsVisible(false);
    }
    setIsVisible(true);
  };

  const input = (
    <div className="input">
      <input value={modalContent} onChange={(e) => setModalContent(e.target.value)} />
    </div>
  );
  return (
    <>
      <span>{input}</span>
      <div className="story-wrapper">
        <div>
          <Button label={'modal window'} onClick={handleClickButton} size="small" backgroundColor="gray" />
        </div>
        <ModalWindow onCloseModal={() => setIsVisible(false)} visible={isVisible} modalContent={modalContent}>
          {children}
        </ModalWindow>
      </div>
    </>
  );
};
