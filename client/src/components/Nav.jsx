import React from "react";
import { Link } from 'react-router-dom';

import gainsLogo from '../assets/logo.png';

function Nav({ handleLogin }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={gainsLogo}
            alt="weight icon from icons8.com"
            width="30"
            height="24"
            className="d-inline-block align-text-top me-3"
          />
          <span className="align-middle">Gains Tracker</span>
        </Link>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={handleLogin}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;