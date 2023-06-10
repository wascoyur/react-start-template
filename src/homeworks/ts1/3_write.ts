import { getData } from 'src/mock-data/mock-products';

/**
 * Функции написанные здесь пригодятся на последующих уроках
 * */
type Category = {
  id: string;
  name: string;
  photo?: string;
};
type Product = Partial<Category> & {
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
type Cost = Category &
  Pick<Product, 'createdAt'> & {
    amount: number;
    category: Category;
    readonly type: 'Cost';
  };
type Profit = Exclude<Cost, 'type'> & {
  readonly type: 'Profit';
};

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (строка)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

/**
  https://fakestoreapi.com/products/?limit=$
 * */
type fakeProduct = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: string;
  };
};

const getRandomProducts = (count = 1) => {
  const products = getData() as unknown as fakeProduct[];
  return products;
};

export const createRandomProduct = (createdAt: string) => {
  const mockProducts: fakeProduct[] = getRandomProducts();
  const products: Product[] = mockProducts.map((item) => {
    const { id, description, image, title, price, category } = item;
    const oldPrice = parseInt((parseInt(price) * Math.random() * 10).toFixed(2));
    const product: Product = {
      desc: description,
      name: title,
      photo: image,
      oldPrice: oldPrice,
      category: { id: id, name: category, photo: image },
      createdAt: createdAt,
      price: parseInt(price),
      id: id,
    };
    return product;
  });
  const rndIndx = Math.floor(Math.random() * mockProducts.length);
  return products[rndIndx];
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};
