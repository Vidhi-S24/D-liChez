import React, { useEffect, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets.js';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close popup" 
          />
        </div>

        <div className="login-popup-input">
          {currState === "Sign In" ? null : <input type="text" placeholder="Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Sign In"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy</p>
        </div>

        {currState === "Sign In" ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState("Sign In")}>Sign In here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
