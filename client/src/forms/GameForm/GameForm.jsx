import React from 'react';
import "../styles/style.css"

function GameForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Game Name" />
                <input type="number" placeholder="Price" />
                <input type="text" placeholder="Image URL" />
                <input type="textarea" placeholder="Genre" />
                <input type="text" placeholder="Description" />
                <button type="submit">Add Game</button>
            </form>
        </div>
    );
}

export default GameForm;
