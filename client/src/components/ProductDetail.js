import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
