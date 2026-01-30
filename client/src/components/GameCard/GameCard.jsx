import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GameCard.css';

function GameCard({_id, name, price, picture}) {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate(`/catalog/${_id}`);
    }

    return (
        <div className="game-card" onClick={HandleClick}>
            <div className="game-card__image-wrapper">
                <img src={picture} alt={name} className="game-card__image" />
            </div>
            <div className="game-card__content">
                <h2 className="game-card__title">{name}</h2>
                <p className="game-card__price">${price}</p>
            </div>
        </div>
    );
}

export default GameCard;