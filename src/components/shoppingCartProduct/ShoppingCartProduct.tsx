import React, { FC } from 'react';
import { Button } from '../button';
import styles from './ShoppingCartProduct.module.scss';

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
    <div className={styles.productCard}>
      <img className={styles.preview} src={previewImage} alt={title} />
      <div className={styles.productInfo}>
        <h3 className={styles.title} title={title}>
          {title}
        </h3>
        <p className={styles.description} title={description}>
          {description}
        </p>
      </div>
      <p className={styles.price}>{price}</p>
      <p className={styles.count}>{count}</p>
      <p className={styles.total}>{count * price}</p>
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
