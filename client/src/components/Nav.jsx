import React from "react";

function Nav({ handleLogin }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo and Brand Name */}
        <a className="navbar-brand" href="#">
          💪
          <img
            src="path_to_logo.jpg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Gains Tracker
        </a>

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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#signup">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login" onClick={handleLogin}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;