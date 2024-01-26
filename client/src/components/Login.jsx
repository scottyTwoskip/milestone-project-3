import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const handleLogin = () => {
    // Your Login logic goes here
    console.log('Login button clicked');
  };

  return (
    <div className="container mt-5 text-light">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;