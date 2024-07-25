import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password });
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const createProduct = async (name, price, category) => {
  const response = await axios.post(`${API_URL}/products`, { name, price, category });
  return response.data;
};
