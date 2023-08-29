import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Product } from 'src/homeworks/ts1/3_write';
import { arrayMockProductsGenerate } from 'src/mock-data/mock-products';
import './product-list.scss';

export type TypeProductList = { listClssNames?: string; itemClssNames?: string };

export const ProductList: FC<TypeProductList> = (props) => {
  const { listClssNames = 'product-list', itemClssNames = 'product-item' } = props;
  const [productList, setProductList] = useState<Product[] | undefined>();

  useEffect(() => {
    const products = arrayMockProductsGenerate();
    setProductList(products);
  }, []);

  const ListItems: FC = () => {
    return productList ? (
      productList.map((product) => <ProductItem item={product} key={product.createdAt} />)
    ) : (
      <EmptyList />
    );
  };

  const EmptyList: FC = () => <div>No Products</div>;

  return (
    <div className={classNames(listClssNames)}>
      <ListItems />
    </div>
  );
};

export type TypeProductItem = { item: Product; itemClssNames?: string };

export const ProductItem: FC<TypeProductItem> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    item: { name, price },
    itemClssNames = 'product-item',
  } = props;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      entry.isIntersecting && arrayMockProductsGenerate();
    });
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className={classNames(itemClssNames)} ref={ref}>
      <h4>{name}</h4>
      <p>Price: {price}</p>
    </div>
  );
};
