import classNames from 'classnames';
import React from 'react';
import { typeProductItem } from 'src/homeworks/homework-5/ProductList';

export const ProductItem = (props: typeProductItem) => {
  const {
    item: { name, price },
    itemClssNames = 'product-item',
  } = props;

  return (
    <div className={classNames(itemClssNames)}>
      <h4>{name}</h4>
      <p>Price: {price}</p>
    </div>
  );
};
