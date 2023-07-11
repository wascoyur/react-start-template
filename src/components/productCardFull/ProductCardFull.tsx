import React, { FC, useState } from 'react';
import { AddToCartButton } from '../addToCartButton/AddToCartButton';
import styles from './ProductCardFull.module.css';
import cn from 'clsx';

interface ProductCardFullProps {
  title: string;
  description: string;
  category: string;
  previewImages: string[];
  price: number;
}

export const ProductCardFull: FC<ProductCardFullProps> = ({ title, description, category, previewImages, price }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className={cn(styles.productCard)}>
      <span className={cn(styles.category)}>{category}</span>
      <div
        className={cn(styles.preview)}
        style={{
          backgroundImage: `url('${previewImages[activeImageIndex]}')`,
        }}
      >
        {previewImages.length > 1 && (
          <div className={cn(styles.previewPoints)}>
            {previewImages.map((_, index) => {
              return (
                <span
                  key={index}
                  className={cn([styles.previewPoint, activeImageIndex === index && styles.active])}
                  onClick={() => setActiveImageIndex(index)}
                ></span>
              );
            })}
          </div>
        )}
      </div>
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
