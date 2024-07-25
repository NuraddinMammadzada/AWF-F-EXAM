import React, { useState } from 'react';
import axios from 'axios';
import './styles/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { email, password, name });
      // Redirect to login or home page after successful signup
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
