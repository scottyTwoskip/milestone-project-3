import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
require('dotenv').config();

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
import AboutPage from './components/AboutPage';
import SignUp from './components/SignUp';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // ! Function to handle login
  const handleLogin = () => {
    // Login logic goes here
    // Make an API call to validate credentials

    // If the login is successful, setLoggedIn will be (true)
    setLoggedIn(true);
  };


  return (
    <Router>
      <>
        <Nav handleLogin={handleLogin} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
