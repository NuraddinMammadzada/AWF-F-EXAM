import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        try {
          const response = await axios.get(`/api/users/${userData.id}`);
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default Profile;
