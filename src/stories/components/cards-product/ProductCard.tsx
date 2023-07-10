import React from 'react';
import './product-card.scss';
import productImage from '../../assets/products/card-img.jpg';
import { InCartButton } from '../in-cart-button/InCartButton';

export type product = {
  id: number;
  title: React.ReactNode;
  category?: string;
  description: React.ReactNode;
  img_url: string;
  price: number;
};
export const ProductCard = (props: product) => {
  const { description, img_url, id, title, price, category } = props;
  const ProductImage = () => {
    return (
      <div className="product-image">
        <img src={img_url || productImage} alt={'product'} />
      </div>
    );
  };
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
      <ProductImage />
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
