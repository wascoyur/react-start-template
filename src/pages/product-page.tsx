import { ProductList } from 'src/homeworks/homework-5/ProductList';
import React from 'react';
import { useStore } from 'src/store/state';

export const ProductPage = () => {
  const token = useStore();
  return (
    <>
      <ProductList listClssNames="product-list-item" />
    </>
  );
};
