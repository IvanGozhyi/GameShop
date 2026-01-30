import React from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";
import logo from '../../assets/logo.png';

function Header() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login")
    }
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <nav className="header__nav">
                <a href="/" className="header__nav-link">Main</a>
                <a href="/catalog" className="header__nav-link">Games</a>
                <a href="/purchase" className="header__nav-link">Purchases</a>
            </nav>
            <div className="header__actions">
                <button className="header__login-btn" type="button" onClick={handleClick}>
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;