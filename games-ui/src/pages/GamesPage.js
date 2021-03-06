import React from 'react';
import { useHistory } from 'react-router-dom';
import GamesTable from '../components/GamesTable';
import GamesTableHead from '../components/GamesTableHead';
import {useState, useEffect } from 'react';
//import {useHistory} from 'react-router-dom';

function GamesPage({setGameToEdit}) {
    const [games, setGames] = useState([]);
    const [name, setName] = useState('');
    const [min_number_player, setMin_number_player] = useState('');
    const [max_number_player, setMax_number_player] = useState('');
    const [gameSerach, setGameSearch] = useState('');
    const [gameMinPlayerSerach, setGameMinPlayerSerach] = useState('');
    const [gameMaxPlayerSerach, setGameMaxPlayerSerach] = useState('');


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
        const response = await fetch('/api/games', {
            method: 'POST',
            body: JSON.stringify(newGame),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 201) {
            alert("Game has been added")
            loadGames()
        }
    };

    const onDelete = async gameID => {
        const response = await fetch(`/api/games/${gameID}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newGames = games.filter(m => m.gameID !== gameID);
            setGames(newGames);
        } else {
            console.log(`Failed to delete movie with _id ${gameID}, status code = ${response.status}`)
        }
    };

    const onEdit = async gameToEdit => {
        setGameToEdit(gameToEdit);
        history.push('/edit-game');
    }

    const gameSearch = async () => {
        const gameFilter = {gameSerach, gameMinPlayerSerach, gameMaxPlayerSerach};
        const response = await fetch('/api/games-fliter', {
            method: 'POST',
            body: JSON.stringify(gameFilter),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.status === 201) {
            const data = await response.json()
            setGames(data)
        }
    }

    const clearSearch = () => {
        setGameSearch('')
        setGameMinPlayerSerach('')
        setGameMaxPlayerSerach('')
        loadGames()
    }

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
                                value={gameSerach}
                                onChange={e => setGameSearch(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Min # of Players"
                                min="1"
                                value={gameMinPlayerSerach}
                                onChange={e => setGameMinPlayerSerach(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Max # of Players"
                                min="1"
                                value={gameMaxPlayerSerach}
                                onChange={e => setGameMaxPlayerSerach(e.target.value)}
                            />
                        </td>
                        <td>
                            <button type='submit' className="add-button" onClick={gameSearch}>Search</button>
                        </td>
                        <td>
                            <button type='submit' className="add-button" onClick={clearSearch}>Clear</button>
                        </td>
                    </tr>
                </table>
            </div>
            <br></br>
            <GamesTable games={games} onDelete={onDelete} onEdit={onEdit}/>
            <hr></hr>
            <div>
                <h2>Add Game</h2>
                    <table className='table-edit'>
                        <GamesTableHead input='game-add'/>
                        <tbody>
                            <tr className='input-table'>
                                <td className='input-table'>
                                    <input 
                                        type="text" 
                                        value={name}
                                        required
                                        placeholder='Enter game name...'
                                        onChange={e => setName(e.target.value)}
                                    />
                                </td>
                                <td className='input-table'>
                                    <input 
                                        type="number"
                                        min="1"
                                        required
                                        value={min_number_player}
                                        placeholder='Enter min number of players...'
                                        onChange={e => setMin_number_player(e.target.value)}
                                    />
                                </td>
                                <td className='input-table'>
                                    <input 
                                        type="number"
                                        min="1"
                                        required
                                        value={max_number_player}
                                        placeholder='Enter max number of players...'
                                        onChange={e => setMax_number_player(e.target.value)} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <button type='submit' className="add-button" onClick={addGame}>Add</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </>
    );
}

export default GamesPage;