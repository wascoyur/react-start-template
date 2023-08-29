import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { Product } from 'src/homeworks/ts1/3_write';
import { arrayMockProductsGenerate } from 'src/mock-data/mock-products';
import './product-list.scss';

export type typeProductList = { listClssNames?: string; itemClssNames?: string };

export const ProductList: React.FC<typeProductList> = (props) => {
  const { listClssNames = 'product-list', itemClssNames = 'product-item' } = props;
  const [productList, setProductList] = useState<Product[]>();
  const getProducts = () => {
    const products = arrayMockProductsGenerate();
    setProductList(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const ListItems = () => {
    return productList.map((product) => {
      return <ProductItem itemClssNames={itemClssNames} item={product} key={product.createdAt} />;
    });
  };

  const EmptyList = () => <div>No Products</div>;

  return (
    <div className={classNames(listClssNames)}>{productList && productList.length ? <ListItems /> : <EmptyList />}</div>
  );
};

export type typeProductItem = { item: Product; itemClssNames?: string };

export const ProductItem: FC<typeProductItem> = (props) => {
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
