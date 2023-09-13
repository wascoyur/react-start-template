import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { PageBucket } from 'src/pages/bucket-page';
import { ErrorPage } from 'src/pages/error-page';
import { HomePage } from 'src/pages/home-page';
import { RedoUserProfileForm } from 'src/stories/components/hw-6-Forms/RedoUserProfileForm';
import { Header } from 'src/stories/components/header/Header';
import { Logo } from 'src/stories/components/logo/Logo';
import { LoginPage } from 'src/pages/login-page';
import { ProductPage } from 'src/pages/product-page';
import { useStore } from 'src/store/store';

function App() {
  const AppHeader = () => {
    const userToken = useStore();

    return (
      <Header>
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
        <NavLink to={'products'}>Товары</NavLink>
        {userToken.tokenAdmin.length > 0 && <NavLink to={'edit-products'}>Создание/редактирование товара</NavLink>}
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
        <Route path="products" element={<ProductPage />} />

        <Route path="create-product" element={<ErrorPage />} />
        <Route path="bucket" element={<PageBucket />} />
        <Route path="auth" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
