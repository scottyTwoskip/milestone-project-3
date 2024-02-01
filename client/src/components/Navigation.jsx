import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import gainsLogo from "../assets/logo.png";

function Navigation({ handleAuth, isLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logout logic goes here
        console.log("Logout button clicked");
        // Logout API call or any other logic goes here
        handleAuth(false); // Pass the updated value to the parent component
        navigate("/"); // Redirect to home page after logout
    };

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
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
                <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {isLoggedIn ? (
              // If user is logged in, show Logout link
              <Nav.Link as={Link} to="/">
                Logout
              </Nav.Link>
            ) : (
              // If user is not logged in, show Sign Up and Login links
              <>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
