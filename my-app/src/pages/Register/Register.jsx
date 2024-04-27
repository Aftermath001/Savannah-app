import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { doCreateUserWithEmailAndPassword} from '../../firebase/auth'
import { useAuth } from '../../contexts/authContext/index'


const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
      e.preventDefault()
      if(!isRegistering) {
          setIsRegistering(true)
          await doCreateUserWithEmailAndPassword(email, password)
      }
    }


  return (
    <>
            {/* {userLoggedIn && (<Navigate to={'/home'} replace={true} />)} */}

    <main className="container-xxl">
        <div className="register-card">
            <h3>Create a New Account</h3>
            <form onSubmit={onSubmit} className="register-form">
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
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {/* Confirm Password Input */}
            <div className="input-group">
                <label>Confirm Password</label>
                <input
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                />
            </div>

            {/* Error Message */}
            {errorMessage && <span className="error-message">{errorMessage}</span>}

            {/* Sign Up Button */}
            <button
                type="submit"
                disabled={isRegistering}
                className="btn"
            >
                {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>

            {/* Already have an account */}
            <div className="text-sm text-center">
                Already have an account? <Link to={'/'} style={{ textDecoration: 'none', fontWeight: 'bold' }}>Sign in</Link>
            </div>
            </form>
        </div>
    </main>

</>
  );
};

export default Register;