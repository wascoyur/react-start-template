import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { typeProduct } from 'src/homeworks/ts1/3_write';
import { ProductItem } from 'src/stories/components/product/ProductItem';
import '../../stories/components/product/product-list.scss';
import Loader from 'src/stories/components/share/Loader';
import { useStore } from 'src/store/state';
import { createProductHelper } from 'src/common-functions/productHelper';
import { TypeProduct } from 'src/types/typeProduct';
import { useFetchProduct } from 'src/common-functions/useFetchProduct';

export type typeProductList = { listClssNames?: string; itemClssNames?: string };

export interface ApiResponseProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const ProductList: React.FC<typeProductList> = (props) => {
  const { listClssNames = 'product-list', itemClssNames = 'product-item' } = props;
  const [productList, setProductList] = useState<TypeProduct[]>([]);
  const { loading, products } = useFetchProduct();

  useEffect(() => {
    setProductList(products);
  }, [products]);
  const ListItems = () => {
    return products.map((product) => {
      return <ProductItem itemClssNames={itemClssNames} item={product} key={product.id} />;
    });
  };

  const EmptyList = () => <div>No Products</div>;

  return (
    <div className={classNames(listClssNames)}>
      {loading ? <Loader /> : productList?.length > 0 ? <ListItems /> : <EmptyList />}
    </div>
  );
};
