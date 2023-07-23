import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { Product } from 'src/homeworks/ts1/3_write';
import './product-list.scss';

type typeProductList = { products: Array<Product>; listClssNames?: string; itemClssNames?: string };

export const ProductList: React.FC<typeProductList> = (props) => {
  const { products, listClssNames = 'product-list', itemClssNames = 'product-item' } = props;

  const [productList, setProductList] = useState<typeProductList>({ products: [] });
  useEffect(() => {
    products && setProductList({ products });
  }, [products]);

  const ListItems = () => {
    return productList.products.map((product) => {
      return (
        <div key={product.createdAt}>
          <ProductItem itemClssNames={itemClssNames} item={product} />
        </div>
      );
    });
  };

  const EmptyList = () => <div>No Products</div>;
  return <div className={classNames(listClssNames)}>{productList.products.length ? <ListItems /> : <EmptyList />}</div>;
};

type typeProductItem = { item: Product; itemClssNames?: string };

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
