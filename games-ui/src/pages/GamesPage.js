import React from 'react';
import { Link } from 'react-router-dom';
import GamesTable from '../components/GamesTable';
import GamesTableHead from '../components/GamesTableHead';

function GamesPage() {
    return (
        <>
            <h1>Games</h1>
            <GamesTable />
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