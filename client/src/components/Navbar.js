import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Safely parse user data from localStorage
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
