import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="profile">
      <h1>Welcome, {user.name}</h1>
      {/* Add more profile details here */}
    </div>
  );
};

export default Profile;
