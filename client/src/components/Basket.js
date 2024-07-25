import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Basket.css';

const Basket = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchBasket = async () => {
      try {
        const response = await axios.get('/api/basket');
        setBasket(response.data);
      } catch (error) {
        console.error('Error fetching basket:', error);
      }
    };
    fetchBasket();
  }, []);

  return (
    <div className="basket">
      <h1>Your Basket</h1>
      {basket.length === 0 ? <p>Your basket is empty.</p> : (
        <ul>
          {basket.map(item => (
            <li key={item._id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Basket;
