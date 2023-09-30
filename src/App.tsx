import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageBucket } from 'src/pages/bucket-page';
import { ErrorPage } from 'src/pages/error-page';
import { HomePage } from 'src/pages/home-page';
import { RedoUserProfileForm } from 'src/stories/components/profle/RedoUserProfileForm';
import { LoginPage } from 'src/pages/login-page';
import { ProductPage } from 'src/pages/product-page';
import { AddProductForm } from 'src/stories/components/product/AddProductForm';
import { ProductCard } from 'src/stories/components/cards-product/ProductCard';
import { RegisterUser } from 'src/stories/components/profle/RegisterUser';
import { AppHeader } from 'src/stories/components/header/Header';
import { useStore } from 'src/store/state';

function App() {
  useStore((state) => state.products);
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<RedoUserProfileForm />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/edit-products" element={<AddProductForm />} />
        <Route path="products/product-card/:productId" element={<ProductCard />} />

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

//todo: 2) Нет модалки добавления/редактирования товара
