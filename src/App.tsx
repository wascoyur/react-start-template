import React, { useState } from 'react';
import './App.scss';
import './components/modal/Modal-window.scss';
import ModalWindow from './components/modal/ModalWindow';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { InCartButton } from './components/in-cart-button/InCartButton';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      <Header></Header>
      <Layout>
        <button onClick={() => setIsVisible(true)}> Show modal</button> <br />
        <br />
        <InCartButton />
        <InCartButton count={5} />
        <div>
          Start loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong
          looooooooooooooooooooooooooooooooooong text
        </div>
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
