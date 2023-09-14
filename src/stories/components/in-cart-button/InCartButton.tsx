import React, { useState } from 'react';
import { Button } from '../button/Button';
import './in-cart-button.scss';

type propsInCartButton = {
  count?: number;
};
export const InCartButton = (props: propsInCartButton) => {
  const { count = 0 } = props;

  const InCart = () => {
    return (
      <div className="button-in-cart">
        <Button label="В корзину" backgroundColor="#1ea7fd" />
      </div>
    );
  };

  const Input = () => {
    const backgroundColor = '#1ea7fd';
    const [count, setCount] = useState(0);
    return (
      <div className="card-count-input">
        <Button label={'-'} backgroundColor={backgroundColor} onClick={() => setCount(count - 1)} />
        <input
          value={count}
          onChange={(e) => {
            setCount(parseInt(e.target.value));
          }}
        />
        <Button label={'+'} backgroundColor={backgroundColor} onClick={() => setCount(count + 1)} />
      </div>
    );
  };
  return (
    <div className="add-to-cart-button">
      {count > 0 ? (
        <InCart />
      ) : (
        <div className="card-count-input">
          <Input />
        </div>
      )}
    </div>
  );
};
