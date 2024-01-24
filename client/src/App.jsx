import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

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
        </Routes>
      </>
    </Router>
  );
}

export default App;
