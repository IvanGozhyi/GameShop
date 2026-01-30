import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './GamePage.css';

function GamePage() {

    const {id} = useParams();
    const [game,setGame] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/games/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Game not found");
                return res.json();
            })
            .then(data => setGame(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!game) return <div>Loading...</div>;




    return (
        <div className="product-page">
            <div className="product-layout">

                <div className="product-image">
                    <img src={game.picture} alt={game.name} />
                </div>

                <div className="product-info">
                    <h1>{game.name}</h1>

                    <div className="description">
                        <p>{game.description}</p>
                    </div>

                    <ul className="genres">
                        {game.genres.map(g => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>

                    <div className="price-row">
                        <span className="price">${game.price}</span>
                        <button className="buy-btn">Buy now</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default GamePage;