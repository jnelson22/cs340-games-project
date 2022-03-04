import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GamesGameCatTable from '../components/GamesGameCatTable';
import { useState, useEffect } from 'react';

function GamesGameCatPage() {
    const [gamesGameCategories, setGamesGameCategories] = useState([]);
    const history = useHistory();

    const loadGamesGameCategories = async () => {
        const response = await fetch('/api/games-game-categories'); 
        const data = await response.json();
        setGamesGameCategories(data);
    }

    useEffect(() => {
        loadGamesGameCategories();
    }, []);
    return (
        <>
            <h1>Games and Game Categories Intersection Page</h1>
            <GamesGameCatTable />
        </>
    );
}

export default GamesGameCatPage;