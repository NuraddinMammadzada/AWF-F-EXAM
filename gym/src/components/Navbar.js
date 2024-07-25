import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ user, logout }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/women">Women</NavLink>
      <NavLink to="/men">Men</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      {user ? (
        <div>
          <span>{user.email}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
