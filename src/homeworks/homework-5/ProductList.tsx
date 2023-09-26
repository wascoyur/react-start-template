import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { ProductItem } from 'src/stories/components/product/ProductItem';
import Loader from 'src/stories/components/share/Loader';
import { TypeProduct } from 'src/types/typeProduct';
import { useFetchProduct } from 'src/common-functions/useFetchProduct';
import '../../stories/components/scss/product-list.scss';

export type typeProductList = { listClssNames?: string; itemClssNames?: string };

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
