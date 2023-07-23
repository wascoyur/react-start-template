import React, { useState } from 'react';
import { ProductList } from 'src/homeworks/homework-5/ProductList';
import { Product } from 'src/homeworks/ts1/3_write';
import { arrayMockProductsGenerate } from 'src/mock-data/mock-products';

function App() {
  const [products, setProducts] = useState<Array<Product> | undefined>();

  const addMockProduct = (count?: number) => {
    arrayMockProductsGenerate({ count: 0, currentListProducts: products, setNewProducts: setProducts });
  };

  return (
    <div className="App">
      <ProductList products={products} />
      <div style={{ display: 'grid', placeContent: 'center', padding: '2rem' }}>
        <button onClick={() => addMockProduct()}>Еще...</button>
      </div>
    </div>
  );
}

export default App;
