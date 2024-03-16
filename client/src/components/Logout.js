// Logout.js
import React from 'react';
import './AuthForm.css';

const Logout = () => {
  const handleLogout = () => {
    // Handle logout logic
  };

  return (
    <div className="auth-container">
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
