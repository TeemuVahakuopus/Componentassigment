// src/App.js
import React, { useState } from 'react';
import Header from  './Header';
import ProductForm from './ProductForm';
import OrderInfo from './OrderInfo';
import './App.css';
import logo from './logo.svg'; // Make sure this image is in your src folder

function App() {
  const [order, setOrder] = useState(null);

  const products = [
    { name: 'NVIDIA RTX 4090', price: 1500 },
    { name: 'AMD Radeon RX 7900', price: 1000 },
    { name: 'Intel Arc A770', price: 400 },
  ];

  const handleOrder = (order) => setOrder(order);

  return (
    <div className="App">
      <Header image={logo} title="Graphics Card Store" />
      <ProductForm products={products} onOrder={handleOrder} />
      <OrderInfo product={order} />
    </div>
  );
}

export default App;
