import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ShoppingCart.css'


const ShoppingCart = () => {

    const cartItems = useSelector(state => state.cart.items);
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Link to="/cart" className="cart-wrapper">

            <svg className="cart-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16.5" cy="18.5" r="1.5"/>
                <circle cx="9.5" cy="18.5" r="1.5"/>
                <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
            </svg>


            {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
            )}
        </Link>
    );
};

export default ShoppingCart;