import React from 'react';
import {useNavigate} from "react-router-dom";
import "./MainPage.css"

function MainPage() {
    const navigate = useNavigate();
    const handleCkick = () => {
        navigate("/catalog")
    }
    return (
        <div>
            <section className="hero">
                <h1>Game Shop</h1>
                <div className="main">Welcome to Game Shop</div>
                <p>
                    Buy your favorite games instantly. Digital keys, great prices,
                    zero hassle.
                </p>
                <button className="hero-btn" onClick={handleCkick}>Browse games</button>
            </section>

            <div className="description">The Game Shop is the big store of games where you can buy whatever you want!</div>
        </div>
    );
}

export default MainPage;