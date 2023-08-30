import { ProductItem } from './components/product/ProductItem';

export default {
  component: ProductItem,
  title: 'Элемент списка товаров',
};
export const Default = {
  args: {
    item: {
      id: 20,
      name: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      description:
        '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    itemClssNames: 'product-item',
  },
};
