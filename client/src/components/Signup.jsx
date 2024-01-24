import React from 'react';
import { Link } from 'react-router-dom';

function SignUp () {
  const handleSignUp = () => {
    
    console.log('Sign up button clicked');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        {/* Your form fields here */}

        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>

        {/* Link to navigate to the signup route */}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
