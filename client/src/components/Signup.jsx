import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import backgroundImage from "../assets/lifting.jpg";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await fetch(
        // `${process.env.WEB_APP_URL}/api/users/signup`,
        `${process.env.REACT_APP_WEB_APP_URL}/api/users/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }
      console.log(response);
      const data = response.json();
      console.log(data); // You can handle the response data as needed
      navigate("/login"); // Navigate to login page after successful signup
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed: " + error.message);
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div className="container mt-5 text-light" style={backgroundStyle}>
      <img
        src={backgroundImage}
        alt="Deadlift weights image by Victor Freitas on Unsplash"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark">
            <div className="card-body text-white">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSignUp}
                >
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
