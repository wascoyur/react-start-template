import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { typeProduct } from 'src/homeworks/ts1/3_write';
import { ProductItem } from 'src/stories/components/product/ProductItem';
import '../../stories/components/product/product-list.scss';
import Loader from 'src/stories/components/share/Loader';

export type typeProductList = { listClssNames?: string; itemClssNames?: string };

interface ApiResponse {
  limit: number;
  skip: number;
  total: number;
  product: Array<ApiResponseProduct>;
}
interface ApiResponseProduct {
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
  const [productList, setProductList] = useState<typeProduct[]>([]); // Изменил на массив пустых товаров
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse = await response.json();
      console.log(data.product);
      const products = createProductHelper(data.product) as unknown as ApiResponseProduct[];
      products && setProductList(products as unknown as typeProduct[]);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Функция для создания продуктов из ответа сервера
  const createProductHelper = (response: ApiResponseProduct[]) => {
    console.log(response);
    return response.map((cur, index) => {
      const {
        thumbnail,
        id: ids,
        brand,
        discountPercentage,
        images,
        price,
        category,
        rating,
        title,
        description,
      } = cur;
      return {
        id: ids.toString(),
        price,
        desc: description,
        name: title,
        photo: thumbnail,
        createdAt: Date.now().toString(),
        category: {
          id: index, // У вас здесь должен быть ID категории
          name: category, // У вас здесь должно быть название категории
          photo: '', // У вас здесь должна быть фотография категории
        },
      };
    });
  };

  const ListItems = () => {
    return productList.map((product) => {
      return <ProductItem itemClssNames={itemClssNames} item={product} key={product.id} />; // Исправил ключ на уникальный ID товара
    });
  };

  const EmptyList = () => <div>No Products</div>;

  return (
    <div className={classNames(listClssNames)}>
      {loading ? <Loader /> : productList.length > 0 ? <ListItems /> : <EmptyList />}
    </div>
  );
};
