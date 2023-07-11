import React, { FC } from 'react';
import { AddToCartButton } from '../addToCartButton/AddToCartButton';
import styles from './ProductCardSimple.module.css';
import cn from 'clsx';

interface ProductCardSimpleProps {
  title: string;
  description: string;
  previewImage: string;
  price: number;
}

export const ProductCardSimple: FC<ProductCardSimpleProps> = ({ title, description, previewImage, price }) => {
  return (
    <div className={cn(styles.productCard)}>
      <img className={cn(styles.image)} src={previewImage} alt={title} />
      <h3 className={cn(styles.title)} title={title}>
        {title}
      </h3>
      <p className={cn(styles.description)} title={description}>
        {description}
      </p>
      <p className={cn(styles.price)}>{price}</p>
      <AddToCartButton counter={0} />
    </div>
  );
};
