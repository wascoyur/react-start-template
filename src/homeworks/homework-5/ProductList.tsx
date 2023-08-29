import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Product } from 'src/homeworks/ts1/3_write';
import { arrayMockProductsGenerate } from 'src/mock-data/mock-products';
import './product-list.scss';

export type TypeProductList = { listClssNames?: string; itemClssNames?: string };

export const ProductList: FC<TypeProductList> = (props) => {
  const { listClssNames = 'product-list', itemClssNames = 'product-item' } = props;
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialProducts = arrayMockProductsGenerate();
    setProductList(initialProducts);
    setIsLoading(false);
  }, []);

  const loadMoreProducts = () => {
    setIsLoading(true);
    const newProduct = arrayMockProductsGenerate();
    setProductList((productList) => [...productList, ...newProduct]);
    setIsLoading(false);
  };

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isLoading) {
      loadMoreProducts();
    }
  };

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isLoading, productList]);

  return (
    <div className={classNames(listClssNames)}>
      <div ref={containerRef}>
        {productList.map((product, index) => (
          <ProductItem item={product} key={product.createdAt} />
        ))}
      </div>
    </div>
  );
};

export type TypeProductItem = { item: Product; itemClssNames?: string };

export const ProductItem: FC<TypeProductItem> = (props) => {
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
