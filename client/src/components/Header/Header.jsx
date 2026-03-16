import React from 'react';
import './Header.css';
import {useNavigate} from "react-router-dom";
import logo from '../../assets/logo.png';
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/features/auth.js";


function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = () => {
        navigate("/login")
    }
    const { isAuth, user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <header className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <nav className="header__nav">
                <a href="/" className="header__nav-link">Main</a>
                <a href="/catalog" className="header__nav-link">Games</a>
                <a href="/purchase" className="header__nav-link">Purchases</a>
            </nav>

            <div className="header__cart">
                <ShoppingCart />
            </div>

            <div className="header__actions">
                {isAuth ? (
                    <div className="header__user-info">
                        <span className="user-greeting">Hello, {user?.username}!</span>
                        <button className="header__logout-btn" type="button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <button className="header__login-btn" type="button" onClick={handleLogin}>
                        Login
                    </button>
                )}
            </div>

        </header>
    );
}

export default Header;