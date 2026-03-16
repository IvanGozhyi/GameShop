import React from 'react';
import "../styles/style.css"

function GameForm() {
    return (
        <div>
            <form className="form">
                <input type="text" placeholder="Game Name" required />
                <input type="number" placeholder="Price" required />
                <input type="text" placeholder="Image URL" required />
                <textarea placeholder="Genre" required />
                <input type="text" placeholder="Description" required />
                <button type="submit">Add Game</button>
            </form>
        </div>
    );
}

export default GameForm;
