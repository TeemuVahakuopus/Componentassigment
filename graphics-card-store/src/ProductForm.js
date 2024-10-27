// src/ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ products, onOrder }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    setQuantity(newQuantity < 1 ? 1 : newQuantity); // Prevent negative quantities
  };

  const handleOrder = () => {
    const product = products[selectedProductIndex];
    onOrder({ name: product.name, price: product.price, quantity });
  };

  return (
    <div>
      <select
        value={selectedProductIndex}
        onChange={(e) => setSelectedProductIndex(e.target.value)}
      >
        {products.map((product, index) => (
          <option key={index} value={index}>
            {product.name}
          </option>
        ))}
      </select>
      <button onClick={() => handleQuantityChange(-1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantityChange(1)}>+</button>
      <button onClick={handleOrder}>Order</button>
    </div>
  );
};

export default ProductForm;
