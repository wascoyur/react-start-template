import React, { FC } from 'react';
import styles from './ShoppingCartProduct.module.css';
import cn from 'clsx';
import { Button } from '../button/Button';

interface ShoppingCartProductProps {
  title: string;
  description: string;
  previewImage: string;
  count: number;
  price: number;
}

export const ShoppingCartProduct: FC<ShoppingCartProductProps> = ({
  title,
  description,
  previewImage,
  count,
  price,
}) => {
  return (
    <div className={cn(styles.productCard)}>
      <img className={cn(styles.preview)} src={previewImage} alt={title} />
      <div className={cn(styles.productInfo)}>
        <h3 className={cn(styles.title)} title={title}>
          {title}
        </h3>
        <p className={cn(styles.description)} title={description}>
          {description}
        </p>
      </div>
      <p className={cn(styles.price)}>{price}</p>
      <p className={cn(styles.count)}>{count}</p>
      <p className={cn(styles.total)}>{count * price}</p>
      <Button
        onClick={() => {
          console.log('Удалить');
        }}
      >
        X
      </Button>
    </div>
  );
};
