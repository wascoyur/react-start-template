import React from 'react';
import { ProductList } from 'src/homeworks/homework-5/ProductList';
import { createRandomProduct } from 'src/homeworks/ts1/3_write';

function App() {
  const mockProducts = () => {
    const mockProd = [];
    for (let i = 1; i <= 5; i++) {
      mockProd.push(createRandomProduct(i.toString()));
    }
    return mockProd;
  };
  return (
    <div className="App">
      <ProductList products={mockProducts()} />
    </div>
  );
}

export default App;
