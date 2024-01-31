// Logout.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import backgroundImage from '../assets/tension_cord.jpg';

function LogOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Your logout logic goes here
    console.log('Logout button clicked');
    // Logout API call or any other logic goes here
    navigate('/');
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div className="container mt-5 text-light" style={backgroundStyle}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark">
            <div className="card-body text-white">
              <h2 className="text-center mb-4">Logout</h2>
              <p>Are you sure you want to logout?</p>
              <button type="button" className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
              <p className="mt-3">
                Go back to <Link to="/">Home</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogOut;