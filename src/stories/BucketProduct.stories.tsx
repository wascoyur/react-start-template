import React from 'react';
import { BucketComponent } from './components/bucket-component/BucketComponent';
import { BucketItem } from 'src/stories/components/product/ProductListItem';

export default {
  title: 'Компонент товара для корзины',
  component: BucketComponent,
};

export const BucketComponentS = () => {
  return (
    <>
      <BucketItem itemName={'BucketItem'} />
    </>
  );
};
