import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
