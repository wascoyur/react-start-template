import React, { FC, FormEvent, useState } from 'react';
import { Modal } from '../modal';
import { Button } from '../button';
import styles from './OpenModal.module.scss';

export const OpenModal: FC = () => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');

  const onInput = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onClick = () => {
    setOpened(!opened);
  };

  return (
    <div className={styles.container}>
      <input type={'text'} onInput={onInput} />
      <Button onClick={onClick}>Открыть окно</Button>
      <Modal visible={opened} setVisible={setOpened}>
        {value}
      </Modal>
    </div>
  );
};
