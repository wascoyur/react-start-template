import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from 'src/pages/error-page';
import { HomePage } from 'src/pages/home-page';
import { AddProductForm } from 'src/stories/components/hw-6-Forms/AddProductForm';
import { RedoUserProfileForm } from 'src/stories/components/hw-6-Forms/RedoUserProfileForm';
import { UserRegisterForm } from 'src/stories/components/hw-6-Forms/UserRegisterForm';
import { Layout } from 'src/stories/components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<RedoUserProfileForm />} />
          <Route path="products" element={<ErrorPage />} />
          <Route path="edit-products" element={<AddProductForm />} />
          <Route path="bucket" element={<ErrorPage />} />
          <Route path="register" element={<UserRegisterForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
