import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
                <span className="navbar-text">Home</span>

                <span className="navbar-text">Live Deals</span>
                <span className="navbar-text">Become a member</span>
            </div>
            <div className="navbar-right">
                <span className="navbar-text">EN</span>
                <span className="navbar-text">Log In</span>
                <button className="join-btn">Book Live Demo</button>
            </div>
        </nav>
    );
};

export default Navbar;
