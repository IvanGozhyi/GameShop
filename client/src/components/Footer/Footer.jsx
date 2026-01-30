import React from 'react';
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">


                <div className="footer-brand">
                    <h3>Game Shop</h3>
                    <p>Your digital store for the best games.</p>
                </div>


                <div className="footer-social">
                    <h4>Follow us</h4>
                    <p> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
                    <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>


                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Email:</p>
                    <span>gameshop123@gmail.com</span>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Game Shop. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
