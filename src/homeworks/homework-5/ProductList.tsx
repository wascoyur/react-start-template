import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Product } from 'src/homeworks/ts1/3_write';
import { arrayMockProductsGenerate } from 'src/mock-data/mock-products';
import { ProductItem } from 'src/stories/components/product/ProductItem';
import '../../stories/components/product/product-list.scss';

export type typeProductList = { listClssNames?: string; itemClssNames?: string };

export const ProductList: React.FC<typeProductList> = (props) => {
  const { listClssNames = 'product-list', itemClssNames = 'product-item' } = props;
  const [productList, setProductList] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const getProducts = () => {
    return arrayMockProductsGenerate();
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

  return <div className={classNames(listClssNames)}>{loading ? <EmptyList /> : <ListItems />}</div>;
};
