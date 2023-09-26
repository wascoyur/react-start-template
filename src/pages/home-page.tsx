import React from 'react';
import { ProductCardList } from 'src/stories/components/lists/ProductCardList';
import { useFetchProduct } from 'src/common-functions/useFetchProduct';

type homeProps = {
  children?: React.ReactNode;
};
export const HomePage = ({ children }: homeProps) => {
  useFetchProduct();
  return (
    <>
      <h1>Домашняя страница</h1>
      {children}
      <ProductCardList />
    </>
  );
};
