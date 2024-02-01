import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../assets/tension_cord.jpg"; // Import the image

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        // `${process.env.WEB_APP_URL}/api/users/login`
        `http://localhost:5001/api/users/login`,
        {
          // Use environment variable for the URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to Login");
      }

      const data = await response.json();
      // Store the token securely, e.g., in localStorage
      localStorage.setItem("token", data.token);

      navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Optional: Set a minimum height for the background
  };

  return (
    <div className="container mt-5 text-light" style={backgroundStyle}>
      <img
        src={backgroundImage}
        alt="Tension cord and weights image by Kelly Sikkema on Unsplash"
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
              {" "}
              {/* Set text color to white */}
              <h2 className="text-center mb-4">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleLogin}
                >
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