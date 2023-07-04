import React, { useState } from 'react';
import './App.scss';
import './components/modal/Modal-window.scss';
import ModalWindow from './components/modal/ModalWindow';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { InCartButton } from './components/in-cart-button/InCartButton';
import { product, ProductCard } from './components/cards-product/ProductCard';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const tmpProduct: product = {
    id: 1,
    img_url: '',
    price: 100,
    title: 'какой-то продукт',
    description: 'Непонятное описание',
  };
  return (
    <div className="App">
      <Header></Header>
      <Layout>
        <button onClick={() => setIsVisible(true)}> Show modal</button> <br />
        <br />
        <InCartButton />
        <ProductCard {...tmpProduct} />
      </Layout>
      <ModalWindow
        onClick={() => {
          setIsVisible((v) => !v);
        }}
        visible={isVisible}
      ></ModalWindow>
    </div>
  );
}

export default App;
