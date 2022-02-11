import React from 'react';
import { Link } from 'react-router-dom';

function GamesPage() {
    return (
        <>
            <h1>Games</h1>
            <div>
                <table className="table-container">
                    <caption>Available Games</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Minimum number of players</th>
                            <th>Maximum number of players</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div>
                <h2>Add Game</h2>
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
                <button>Add</button>
            </div>
        </>

    );
}

export default GamesPage;