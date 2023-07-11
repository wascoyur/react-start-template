import React, { ChangeEvent, FC, useState } from 'react';
import styles from './AddToCartButton.module.css';
import cn from 'clsx';
import { Button } from '../button/Button';

interface AddToCartButtonProps {
  counter: number;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ counter }) => {
  const [value, setValue] = useState(counter);

  if (value === 0) {
    return <Button onClick={() => setValue(1)}>Добавить</Button>;
  }

  return <CountSwitcher counter={value} setCounter={setValue} />;
};

interface CountSwitcherProps {
  counter: number;
  setCounter: (number) => void;
}

const CountSwitcher: FC<CountSwitcherProps> = ({ counter, setCounter }) => {
  const updateValue = (newValue: number) => {
    setCounter(newValue >= 0 ? newValue : 0);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateValue(parseInt(event.target.value, 10));
  };

  const onIncrement = () => {
    updateValue(counter + 1);
  };

  const onDecrement = () => {
    updateValue(counter - 1);
  };

  return (
    <div className={cn(styles.switcher)}>
      <Button onClick={onDecrement}>-</Button>
      <input className={cn(styles.input)} type="text" value={counter} onChange={onChange} />
      <Button onClick={onIncrement}>+</Button>
    </div>
  );
};
