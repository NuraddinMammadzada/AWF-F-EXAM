import React, { useState } from 'react';
import './styles/Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({ name: '', address: '', paymentMethod: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
