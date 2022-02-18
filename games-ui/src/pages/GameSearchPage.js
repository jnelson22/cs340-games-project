import React from 'react';
import { Link } from 'react-router-dom';

function GameSearchPage() {
    return(
        <>
            <h1>search for a game</h1>
            <h3>search using one or more attributes</h3>
            <div>
            <input
                    type="text"
                    placeholder="Game Name"
                />
                <input
                    type="number"
                    placeholder="Min # of Players"
                />
                <input
                    type="number"
                    placeholder="Max # of Players"
                />
                <button>Search</button>
            </div>
        </>
    );
}

export default GameSearchPage;