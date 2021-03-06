import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GamesGameCatTable from '../components/GamesGameCatTable';
import { useState, useEffect } from 'react';
import Select from 'react-select'

function GamesGameCatPage() {
    const [gamesGameCategories, setGamesGameCategories] = useState([]);
    const [games, setGames] = useState([]);
    const [gameCategories, setGameCategories] = useState([]);
    const [gameID, setGameID] = useState('');
    const [gameCatID, setGameCatID] = useState(null);
    
    const history = useHistory();

    const loadGamesGameCategories = async () => {
        const response = await fetch('/api/games-game-categories'); 
        const data = await response.json();
        setGamesGameCategories(data);
    }

    useEffect(() => {
        loadGamesGameCategories();
    }, []);

    const loadGames = async () => {
        const response = await fetch('/api/games');
        const data = await response.json();
        setGames(data);
    }

    useEffect(() => {
        loadGames();
    }, []);

    const loadGameCategories = async () => {
        const response = await fetch('/api/game-categories');
        const data = await response.json();
        setGameCategories(data);
    }

    useEffect(() => {
        loadGameCategories();
    }, []);

    const gameCatOptions = gameCategories.map((gameCat, i) => (
        {value:gameCat.game_categoryID, label:gameCat.category}));

    const gameNameOptions = games.map((game) => (
        {value:game.gameID, label:game.name}));

    console.log(gameCatID)

    const addGamesGameCat = async () => {
        const newGamesGameCat = {gameID, gameCatID}
        console.log(newGamesGameCat)
        const response = await fetch('/api/games-game-categories', {
            method: 'POST',
            body: JSON.stringify(newGamesGameCat),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 201) {
            alert('Game catefories have been added to Game');
            loadGamesGameCategories()
        }
    }

    return (
        <>
            <h1>Games and Game Categories Intersection Page</h1>
            <GamesGameCatTable gamesGameCategories={gamesGameCategories}/>
            <hr></hr>
            <h2>Add Category to Game</h2>
            <table className='table-edit'>
                <tbody>
                        <tr className="input-table">
                            <td className="input-table">
                                <Select
                                    defaultValue={null}
                                    isSearchable
                                    name='game-name'
                                    onChange={setGameID}
                                    options={gameNameOptions}
                                />
                            </td>
                            <td>
                                <Select
                                    defaultValue={null}
                                    isMulti
                                    isSearchable
                                    name='game-cats'
                                    onChange={setGameCatID}
                                    options={gameCatOptions}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button className="add-button" type='submit' onClick={addGamesGameCat}>Link Game and Categories</button>
                            </td>
                        </tr>
                </tbody>
            </table>
        </>
    );
}

export default GamesGameCatPage;