import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  // Your existing component code

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        {/* Your form fields here */}

        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>

        {/* Link to navigate to the signup route */}
        <p>
          Already have an account? <Link to="/signup">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
