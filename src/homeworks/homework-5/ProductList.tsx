import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { typeProduct } from 'src/homeworks/ts1/3_write';
import { ProductItem } from 'src/stories/components/product/ProductItem';
import '../../stories/components/product/product-list.scss';
import Loader from 'src/stories/components/share/Loader';
import { useStore } from 'src/store/store';

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
  const [productList, setProductList] = useState<typeProduct[]>([]); // Изменил на массив пустых товаров
  const [loading, setLoading] = useState<boolean>(true);
  const { setRawProducts, rawProducts } = useStore();

  const getProducts = async () => {
    await fetch(`${process.env.API_URL}/products`)
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        setRawProducts(data.products);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    async function getRawProduct() {
      await getProducts().catch((err) => {
        setLoading(false);
        console.error(err);
      });
    }
    if (!rawProducts)
      getRawProduct().catch((err) => {
        setLoading(false);
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (rawProducts && productList.length < 1) {
      setProductList(createProductHelper(rawProducts));
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawProducts]);

  // Функция для создания продуктов из ответа сервера
  const createProductHelper = (response: ApiResponseProduct[]) => {
    const res = response.map((cur, index) => {
      const {
        thumbnail,
        id: ids,
        // brand,
        // discountPercentage,
        // images,
        price,
        category,
        // rating,
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
          id: index,
          name: category,
          photo: '',
        },
      };
    });
    return res as unknown as Array<typeProduct>;
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
