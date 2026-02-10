import React, {useEffect} from 'react';
import GameCard from "../../components/GameCard/GameCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchGames} from "../../store/features/games.js";
import "./Catalog.css"
import {useNavigate} from "react-router-dom";

function Catalog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { gamesList, status, error } = useSelector((state) => state.games);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchGames());
        }
    }, [status, dispatch]);

    const handleAddGame = () => {
        navigate('/catalog/add')
    }

    return (
        <div className="catalog">
            <button type="button" onClick={handleAddGame}>Add Game</button>
            {gamesList.map((game) => (
                <GameCard
                    key={game._id}
                    _id={game._id}
                    name={game.name}
                    price={game.price}
                    picture={game.picture}
                />
            ))}
        </div>
    );
}

export default Catalog;