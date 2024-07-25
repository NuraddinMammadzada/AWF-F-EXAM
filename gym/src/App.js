import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import ProductDetail from './pages/ProductDetail';
import Signup from './components/Signup';
import Login from './components/Login';
import Cart from './pages/Cart';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const response = await axios.post('/api/login', userData);
      const { token, email, gender } = response.data;
      localStorage.setItem('token', token);
      setUser({ email, gender });
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally verify token and set user info here
      // setUser({ email, gender });
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/signup" element={<Signup login={login} />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
