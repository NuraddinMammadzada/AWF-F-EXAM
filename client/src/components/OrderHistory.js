import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="order-history">
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(order => (
          <div className="order-item" key={order._id}>
            <h2>Order ID: {order._id}</h2>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Total: ${order.total}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
