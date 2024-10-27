// src/OrderInfo.js
import React from 'react';

const OrderInfo = ({ product }) => {
  if (!product) return <div>No order placed</div>;

  const totalPrice = product.price * product.quantity;

  return (
    <div>
      <h2>Order Info</h2>
      <p>Product: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default OrderInfo;
