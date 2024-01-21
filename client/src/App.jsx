import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'

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
    <div className='App'>
      <Nav handleLogin={handleLogin} />
      {/* Login component goes here */}

      {/* Conditionally renders the Dashboard based on login status */}
      {isLoggedIn && <Dashboard />}
    </div>
  );
}

export default App;
