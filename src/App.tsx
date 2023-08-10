import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from 'src/pages/error-page';
import { Layout } from 'src/stories/components/layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
