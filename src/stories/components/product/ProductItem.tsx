import classNames from 'classnames';
import React from 'react';
import { Product } from 'src/homeworks/ts1/3_write';
import './product-list.scss';

type typeProductItem = { item: Product; itemClssNames?: string };
export const ProductItem = (props: typeProductItem) => {
  const {
    item: { name, price, category },
  } = props;
  const itemClssNames = props.itemClssNames ?? 'product-item';

  return (
    <div className={classNames(itemClssNames)}>
      <h4>{name}</h4>
      <div>{`категория: ${category}`}</div>
      <p>Price: {price}</p>
    </div>
  );
};
