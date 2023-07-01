import React, { useState } from 'react';
import './App.scss';
import './components/modal/Modal-window.scss';
import ModalWindow from './components/modal/ModalWindow';
import { Header } from './components/header/Header';
import { Logo } from './components/logo/Logo';
import { Layout } from './components/layout/Layout';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      <Header>
        <Logo />
      </Header>
      <Layout>
        <button onClick={() => setIsVisible(true)}> Show modal</button>
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
