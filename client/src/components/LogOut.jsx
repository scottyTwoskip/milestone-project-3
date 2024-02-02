import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LogOut({ handleAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {

    console.log('Logout button clicked');
    // Clears the token from the local storage
    localStorage.removeItem('token');
    // Updates the authentication state
    handleAuth(false);
    // Redirects to home page after logging out
    navigate('/');
  };

  return (
    <div className="container mt-5 text-light">
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