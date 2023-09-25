import React from 'react';
import mockImage from '../../assets/products/card-img.jpg';
import { InCartButton } from '../in-cart-button/InCartButton';
import './product-card.scss';
import { useStore } from 'src/store/state';
import { useParams } from 'react-router-dom';

export const ProductCard = () => {
  const { params } = useParams();
  const { getProductById } = useGetProduct();
  const id = parseInt(params);
  console.log(params);
  const product = getProductById(id);
  const { desc, title, price, category } = product;

  const Title = () => {
    return <div className="product-card-title">{title || `The Title product`}</div>;
  };
  const Description = () => {
    return <div className="product-card-description">{desc || `Dedcription Product`}</div>;
  };

  const Category = () => {
    return <div className="product-card-category">{category.name}</div>;
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
const useGetProduct = () => {
  const getProductById = useStore((state) => state.getProductById);
  return { getProductById };
};
