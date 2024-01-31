import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from '../assets/tension_cord.jpg'; // Import the image

function Login() {
  const handleLogin = () => {
    // Your Login logic goes here
    console.log('Login button clicked');
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Optional: Set a minimum height for the background
  };

  return (
    <div className="container mt-5 text-light" style={backgroundStyle}>
      <img
        src={backgroundImage}
        alt="Tension cord and weights image by Kelly Sikkema on Unsplash"
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark">
            <div className="card-body text-white"> {/* Set text color to white */}
              <h2 className="text-center mb-4">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="button" className="btn btn-success" onClick={handleLogin}>
                  Login
                </button>
                <p className="mt-3">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;