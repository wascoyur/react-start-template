import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { PageBucket } from 'src/pages/bucket-page';
import { ErrorPage } from 'src/pages/error-page';
import { HomePage } from 'src/pages/home-page';
import { RedoUserProfileForm } from 'src/stories/components/profle/RedoUserProfileForm';
import { Header } from 'src/stories/components/header/Header';
import { Logo } from 'src/stories/components/logo/Logo';
import { LoginPage } from 'src/pages/login-page';
import { ProductPage } from 'src/pages/product-page';
import { AddProductForm } from 'src/stories/components/product/AddProductForm';
import { ProductCard } from 'src/stories/components/cards-product/ProductCard';
import { RegisterUser } from 'src/stories/components/profle/RegisterUser';
import { useUserAuth } from 'src/components/hooks/isAuth';
import { useUserStore } from 'src/mock-data/mock-profile';

function App() {
  const isUserAuth = useUserAuth();
  useUserStore();
  const AppHeader = () => {
    return (
      <Header>
        <NavLink to={'/'}>
          <Logo />
        </NavLink>
        <NavLink to={'products'}>Товары</NavLink>
        <NavLink to={'bucket'}>Корзина</NavLink>
        <NavLink to={'auth'}>{isUserAuth ? `Профиль` : `Вход`}</NavLink>
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
        <Route path="products/edit-products" element={<AddProductForm />} />
        <Route path="products/product-card" element={<ProductCard />} />

        <Route path="create-product" element={<AddProductForm />} />
        <Route path="bucket" element={<PageBucket />} />
        <Route path="auth" element={<LoginPage />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
