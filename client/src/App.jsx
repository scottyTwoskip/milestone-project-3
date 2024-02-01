import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AboutPage from './components/AboutPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LogOut from './components/LogOut';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // ! Function to handle login
  const handleAuthentication = () => {
    // Login / Logout logic goes here
    // Make an API call to validate credentials

    // If the login is successful, setLoggedIn will be (true)
    setLoggedIn(true);
  };

  const pageStyle = {
    backgroundColor: '#f5f5dc', // Beige background color
    paddingBottom: '35px', // Adjust padding to create space at the bottom
  };

  return (
    <Router>
      <div style={pageStyle}>
      <Navigation handleAuth={handleAuthentication} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;