import React from 'react';
import logo from './logo.svg';
import './App.css';
import { transformCustomers } from 'src/homeworks/ts1/1_base';

function App() {
  const customers = [
    { id: 1, name: 'John', age: 25, isSubscribed: true },
    { id: 2, name: 'Mary', age: 40, isSubscribed: false },
    { id: 3, name: 'Bob', age: 32, isSubscribed: true },
    { id: 4, name: 'Alice', age: 22, isSubscribed: true },
    { id: 5, name: 'David', age: 48, isSubscribed: false },
  ];
  const result = transformCustomers(customers);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>powered by yuriy.vasilev</p>
      </header>
    </div>
  );
}

export default App;
