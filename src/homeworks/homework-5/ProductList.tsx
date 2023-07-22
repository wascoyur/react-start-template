import React, { useEffect, useState } from 'react';
import { Product } from 'src/homeworks/ts1/3_write';

type typeProductList = { products: Array<Product> };

export const ProductList: React.FC<typeProductList> = (props) => {
  const { products } = props;

  const [productList, setProductList] = useState<typeProductList>({ products: [] });
  useEffect(() => {
    products && setProductList({ products });
  }, [products]);

  const ListItems = () => {
    return productList.products.map((product) => {
      return (
        <ProductItem
          key={product.id}
          category={product.category}
          createdAt={product.createdAt}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      );
    });
  };

  const EmptyList = () => <div>No Products</div>;
  return <div>{productList.products.length ? <ListItems /> : <EmptyList />}</div>; // Use 'productList.products.length' instead of 'props.length'
};

export const ProductItem = (props: Product) => {
  const { name, price } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  );
};
