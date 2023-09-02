import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductList } from 'src/homeworks/homework-5/ProductList';
import { PageBucket } from 'src/pages/bucket-page';
import { ErrorPage } from 'src/pages/error-page';
import { HomePage } from 'src/pages/home-page';
import { AddProductForm } from 'src/stories/components/hw-6-Forms/AddProductForm';
import { RedoUserProfileForm } from 'src/stories/components/hw-6-Forms/RedoUserProfileForm';
import { UserRegisterForm } from 'src/stories/components/hw-6-Forms/UserRegisterForm';
import { Layout } from 'src/stories/components/layout/Layout';
import ModalWindow from 'src/stories/components/modal/ModalWindow';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route path="register" element={<UserRegisterForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
