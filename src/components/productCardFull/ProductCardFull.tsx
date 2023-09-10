import React, { FC, useState } from 'react';
import { AddToCartButton } from '../addToCartButton';
import styles from './ProductCardFull.module.scss';
import cn from 'classnames';

interface ProductCardFullProps {
  title: string;
  description: string;
  category: string;
  previewImages: string[];
  price: number;
}

export const ProductCardFull: FC<ProductCardFullProps> = ({
  title,
  description,
  category,
  previewImages,
  price,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className={styles.productCard}>
      <span className={styles.category}>{category}</span>
      <div
        className={styles.preview}
        style={{
          backgroundImage: `url('${previewImages[activeImageIndex]}')`,
        }}
      >
        {previewImages.length > 1 && (
          <div className={styles.previewPoints}>
            {previewImages.map((_, index) => {
              return (
                <span
                  key={index}
                  className={cn(styles.previewPoint, {
                    [styles.active]: activeImageIndex === index,
                  })}
                  onClick={() => setActiveImageIndex(index)}
                ></span>
              );
            })}
          </div>
        )}
      </div>
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
