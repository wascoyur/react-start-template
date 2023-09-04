import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ProductList } from 'src/homeworks/homework-5/ProductList';
import { PageBucket } from 'src/pages/bucket-page';
import { ErrorPage } from 'src/pages/error-page';
import { HomePage } from 'src/pages/home-page';
import { AddProductForm } from 'src/stories/components/product/AddProductForm';
import { RedoUserProfileForm } from 'src/stories/components/hw-6-Forms/RedoUserProfileForm';
import ModalWindow from 'src/stories/components/modal/ModalWindow';
import { Header } from 'src/stories/components/header/Header';
import { Logo } from 'src/stories/components/logo/Logo';
import { LoginPage } from 'src/pages/login-page';

function App() {
  const AppHeader = () => {
    return (
      <Header>
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
        <NavLink to={'products'}>Товары</NavLink>
        <NavLink to={'edit-products'}>Создание/редактирование товара</NavLink>
        <NavLink to={'bucket'}>Корзина</NavLink>
        <NavLink to={'auth'}>Вход</NavLink>
      </Header>
    );
  };
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<RedoUserProfileForm />} />
        <Route path="products" element={<ProductList />} />
        <Route
          path="edit-products"
          element={
            <ModalWindow
              modalContent={<AddProductForm />}
              onClick={() => {
                console.log('click');
              }}
              visible={true}
            ></ModalWindow>
          }
        />
        <Route path="create-product" element={<ErrorPage />} />
        <Route path="bucket" element={<PageBucket />} />
        <Route path="auth" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
