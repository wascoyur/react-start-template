import React, { FC } from 'react';
import { AddToCartButton } from '../addToCartButton';
import styles from './ProductCardSimple.module.scss';

interface ProductCardSimpleProps {
  title: string;
  description: string;
  previewImage: string;
  price: number;
}

export const ProductCardSimple: FC<ProductCardSimpleProps> = ({
  title,
  description,
  previewImage,
  price,
}) => {
  return (
    <div className={styles.productCard}>
      <img className={styles.image} src={previewImage} alt={title} />
      <h3 className={styles.title} title={title}>
        {title}
      </h3>
      <p className={styles.description} title={description}>
        {description}
      </p>
      <p className={styles.price}>{price}</p>
      <AddToCartButton counter={0} />
    </div>
  );
};
