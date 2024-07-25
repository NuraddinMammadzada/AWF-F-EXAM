import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-history">
      <h1>Order History</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <h2>Order #{order._id}</h2>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
