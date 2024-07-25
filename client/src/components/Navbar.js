import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyStore</Link>
      </div>
      <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        {isLoggedIn && <li><Link to="/profile">Profile</Link></li>}
        {isLoggedIn ? (
          <li><button onClick={handleLogout} className="logout-button">Log Out</button></li>
        ) : (
          <li><Link to="/signup" className="signup-link">Sign Up</Link></li>
        )}
        <li><Link to="/basket" className="basket-icon"><i className="fas fa-shopping-basket"></i></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
