import { ProductList } from 'src/homeworks/homework-5/ProductList';
import React from 'react';
import { useStore } from 'src/store/store';
import { AddProductForm } from 'src/stories/components/product/AddProductForm';
import ModalWindow from 'src/stories/components/modal/ModalWindow';

export const ProductPage = () => {
  const token = useStore();
  return (
    <>
      <ProductList listClssNames="product-list-item" />
      {token.tokenAdmin.length && (
        <ModalWindow
          modalContent={<AddProductForm />}
          onClick={() => {
            console.log('click');
          }}
          visible={true}
        ></ModalWindow>
      )}
    </>
  );
};
