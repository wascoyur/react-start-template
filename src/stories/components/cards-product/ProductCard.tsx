import React from 'react';
import mockImage from '../../assets/products/card-img.jpg';
import { InCartButton } from '../in-cart-button/InCartButton';
import './product-card.scss';

export type TypeProduct = {
  id?: number;
  title?: React.ReactNode | string;
  category?: string;
  description?: React.ReactNode | string;
  img_url?: string;
  price?: number;
};
export const ProductCard = (props: TypeProduct) => {
  const { description, title, price, category } = props;
  const Title = () => {
    return <div className="product-card-title">{title || `The Title product`}</div>;
  };
  const Description = () => {
    return <div className="product-card-description">{description || `Dedcription Product`}</div>;
  };

  const Category = () => {
    return <div className="product-card-category">{category || `category`}</div>;
  };

  const Pay = () => {
    return <div className="product-card-price">{price || 123}р.</div>;
  };

  return (
    <div className="product-card">
      <Title />
      <ProductImage img_url={mockImage} />
      <div className="product-info-wrapper">
        <Category />
        <Description />
        <Pay />
        <div className="in-cart-wrapper">
          <InCartButton />
        </div>
      </div>
    </div>
  );
};
export const ProductImage = (props: { img_url: string }) => {
  return (
    <div className="product-image">
      <img src={props.img_url} alt={'product'} />
    </div>
  );
};
