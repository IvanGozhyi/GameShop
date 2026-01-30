import React, {useEffect} from 'react';
import GameCard from "../../components/GameCard/GameCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchGames} from "../../store/features/games.js";
import "./Catalog.css"

function Catalog() {
    const dispatch = useDispatch();

    const { gamesList, status, error } = useSelector((state) => state.games);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchGames());
        }
    }, [status, dispatch]);


    console.log("Status:", status);
    console.log("Games List:", gamesList);

    return (
        <div className="catalog">
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