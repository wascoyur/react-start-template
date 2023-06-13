// eslint-disable-next-line import/no-unresolved
import { getData } from 'src/mock-data/mock-products';

/**
 * Функции написанные здесь пригодятся на последующих уроках
 * */
type Category = {
  id: string;
  name: string;
  photo?: string;
};
type Product = Category & {
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
type Cost = Category &
  Pick<Product, 'createdAt' | 'desc'> & {
    amount: number;
    category: Category;
    readonly type: 'Cost';
  };
type Profit = Exclude<Cost, 'type'> & {
  readonly type: 'Profit';
};
type Operation = Pick<Profit, 'type'> | Pick<Cost, 'type'>;
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

const getRandomProducts = () => {
  return getData() as unknown as fakeProduct[];
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
export const createRandomOperation = (createdAt: string): Operation => {
  const getRandomCategory = (): Category => {
    // Генерация случайной категории (здесь вам нужно реализовать свою логику получения случайной категории)
    const categories: Category[] = [
      { id: '1', name: 'Category 1' },
      { id: '2', name: 'Category 2' },
      { id: '3', name: 'Category 3' },
      { id: '3', name: 'Category 4' },
    ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };

  const getRandomAmount = (): number => {
    // Генерация случайного значения amount (здесь вам нужно реализовать свою логику генерации случайного значения)
    return Math.floor(Math.random() * 100);
  };

  const getRandomType = (): 'Cost' | 'Profit' => {
    // Генерация случайного типа ('Cost' или 'Profit')
    return Math.random() > 0.5 ? 'Profit' : 'Cost';
  };

  const operations: Operation[] = [];

  for (let i = 0; i < 3; i++) {
    const category = getRandomCategory();
    const amount = getRandomAmount();
    const type = getRandomType();

    const operation: Operation = {
      type,
      id: category.id,
      name: category.name,
      amount,
      category,
      createdAt: createdAt,
      desc: 'description',
    } as Operation;

    operations.push(operation);
  }
  const operationIdx = Math.floor(Math.random() * operations.length);

  return operations[operationIdx];
};
