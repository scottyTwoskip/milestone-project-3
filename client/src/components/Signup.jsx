import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from '../assets/lifting.jpg'; // Import the image

function SignUp() {
  const handleSignUp = () => {
    // Your sign-up logic goes here
    console.log('Sign up button clicked');
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
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark">
            <div className="card-body text-white"> {/* Set text color to white */}
              <h2 className="text-center mb-4">Sign Up</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="button" className="btn btn-success" onClick={handleSignUp}>
                  Sign Up
                </button>
                <p className="mt-3">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;