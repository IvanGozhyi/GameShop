import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './GamePage.css';
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/features/cart.js";
import {shopObserver} from "../../utils/Observer.js";

function GamePage() {

    const {id} = useParams();
    const [game,setGame] = useState(null);
    const dispatch = useDispatch();

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

    const handleBuy = () => {
        dispatch(
            addToCart({
                id: game._id,
                name: game.name,
                price: game.price,
            })
        );
        shopObserver.notify('ITEM_ADDED', { name: game.name });
    }



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
                        <button className="buy-btn" onClick={handleBuy}>Buy now</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default GamePage;