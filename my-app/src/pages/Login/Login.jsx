// Login.jsx

import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import './Login.scss';
import { useAuth } from '../../contexts/authContext/index';
import BreadCrumb from '../../components/Breadcrumb/Breadcrumb';
import Meta from '../../components/Meta/Meta';

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="LOGIN" />
      {userLoggedIn && <Navigate to={'/home'} replace={true} />}
      <main className="container-xxl">
        <div className="login-card">
          <h3>Welcome Back</h3>
          <form onSubmit={onSubmit} className="login-form">
            {/* Email Input */}
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {errorMessage && <span className="error-message">{errorMessage}</span>}

            {/* Sign In Button */}
            <button type="submit" disabled={isSigningIn} className="btn">
              {isSigningIn ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link to={'/register'} style={{ textDecoration: 'none', fontWeight: 'bold' }}>
              Sign up
            </Link>
          </p>

          {/* OR Divider */}
          <div className="flex flex-row justify-center items-center my-3">
            <div className="border-b w-full mr-2"></div>
            <span className="text-sm font-bold">OR</span>
            <div className="border-b w-full ml-2"></div>
          </div>

          {/* Google Sign In Button */}
          <button
            disabled={isSigningIn}
            onClick={(e) => {
              onGoogleSignIn(e);
            }}
            className={`btn ${isSigningIn ? 'btn-disabled' : ''}`}
          >
            {isSigningIn ? 'Signing In...' : 'Continue with Google'} <GoogleIcon />
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
