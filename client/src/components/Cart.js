import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <div className="cart-total">
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
