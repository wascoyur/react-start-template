import React from 'react';
import { Button } from '../button/Button';
import './in-cart-button.scss';

type propsInCartButton = {
  count?: number;
};
export const InCartButton = (props: propsInCartButton) => {
  const { count } = props;

  const InCart = () => {
    return (
      <div className="button-in-cart">
        <Button label="В корзину" backgroundColor="#1ea7fd" />
      </div>
    );
  };

  const Input = () => {
    const backgroundColor = '#1ea7fd';
    return (
      <div className="card-count-input">
        <Button label={'-'} backgroundColor={backgroundColor} />
        <input value={0} />
        <Button label={'+'} backgroundColor={backgroundColor} />
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
