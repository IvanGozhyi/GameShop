import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../store/features/cart.js";
import './CartPage.css';

function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);


    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart-page">
            <h1 className="cart-title">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
            ) : (
                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <div className="item-details">
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-price">Price: {item.price}</p>
                                    <p className="item-quantity">Quantity: {item.quantity}</p>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Total: {totalPrice}</h2>
                        <button
                            className="clear-btn"
                            onClick={() => dispatch(clearCart())}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;