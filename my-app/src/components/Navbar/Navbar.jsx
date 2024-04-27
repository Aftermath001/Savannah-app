// Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import './Navbar.scss';

const Navbar = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-items">
                {
                    userLoggedIn
                        ?
                        <>
                            <ResponsiveLink to="/photo">Photos</ResponsiveLink>
                            <ResponsiveLink to="/user">User</ResponsiveLink>
                            <ResponsiveLink to="/album">Album</ResponsiveLink>
                            <button onClick={() => { doSignOut().then(() => { navigate('/') }) }} className='logout-button'>Logout</button>
                        </>
                        :
                        <>
                            <ResponsiveLink to="/home">Homepage</ResponsiveLink>
                            <ResponsiveLink to='/'>Login</ResponsiveLink>
                            <ResponsiveLink to='/register'>Register New Account</ResponsiveLink>
                        </>
                }
            </div>
        </nav>
    );
};

const ResponsiveLink = ({ to, children }) => {
    return (
        <Link to={to}>{children}</Link>
    );
};

export default Navbar;
