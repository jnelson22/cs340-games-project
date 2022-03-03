import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GamesTable from '../components/GamesTable';
import GamesTableHead from '../components/GamesTableHead';
import {useState, useEffect } from 'react';

function GamesPage() {
    const [games, setGames] = useState([]);
    const [name, setName] = useState('');
    const [min_number_player, setMin_number_player] = useState('');
    const [max_number_player, setMax_number_player] = useState('');

    const history = useHistory();

    const loadGames = async () => {
        const response = await fetch('/api/games');
        const data = await response.json();
        setGames(data);
    }

    useEffect(() => {
        loadGames();
    }, []);

    const addGame = async () => {
        const newGame = {name, min_number_player, max_number_player};
        console.log(newGame)
        const response = await fetch('/api/games', {
            method: 'POST',
            body: JSON.stringify(newGame),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response)
    };

    return (
        <>
            <h1>Games Page</h1>
            <div>
                <table className="table-search">
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Game Name"
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Min # of Players"
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Max # of Players"
                            />
                        </td>
                        <td>
                            <button>Search</button>
                        </td>
                    </tr>
                </table>
            </div>
            <br></br>
            <GamesTable games={games}/>
            <hr></hr>
            <div>
                <h2>Add Game</h2>
                <form>
                    <input 
                        type="text" 
                        value={name}
                        placeholder='Enter game name...'
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="number"
                        value={min_number_player}
                        placeholder='Enter min number of players...'
                        onChange={e => setMin_number_player(e.target.value)}
                    />
                    <input 
                        type="number"
                        value={max_number_player}
                        placeholder='Enter max number of players...'
                        onChange={e => setMax_number_player(e.target.value)} 
                    />
                    <button type='submit' className="add-button" onClick={addGame}>Add</button>
                </form>
            </div>
        </>
    );
}

export default GamesPage;