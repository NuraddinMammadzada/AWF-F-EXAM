import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-item" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
