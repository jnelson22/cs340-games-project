import React from 'react';
import { useHistory } from 'react-router-dom';
import PlayersTable from '../components/PlayersTable';
import PlayersTableHead from '../components/PlayersTableHead';
import { useState, useEffect } from 'react';


function PlayersPage({setPlayerToEdit}) {
    const [players, setPlayers] = useState([]);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [fav_game, setFavGame] = useState('');
    const [games, setGames] = useState([]);


    const history = useHistory();

    const loadPlayers = async () => {
        const response = await fetch('/api/players');
        const data = await response.json();
        setPlayers(data);
    }

    useEffect(() => {
        loadPlayers();
    }, []);

    const addPlayer = async () => {
        const newPlayer = {first_name, last_name, fav_game};
        const response = await fetch('/api/players', {
            method: 'POST',
            body: JSON.stringify(newPlayer),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response)
        if (response.status === 201) {
            alert("Player was added!")
            loadPlayers()
        }
    };

    const onDelete = async playerID => {
        const response = await fetch(`/api/players/${playerID}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newGames = players.filter(m => m.playerID !== playerID);
            setPlayers(newGames);
        } else {
            console.log(`Failed to delete game with id ${playerID}, status code = ${response.status}`)
        }
    };

    const loadGames = async () => {
        const response = await fetch('/api/games');
        const data = await response.json();
        setGames(data);
    }

    const onEdit = async playerToEdit => {
        setPlayerToEdit(playerToEdit);
        history.push('/edit-player');
    }

    useEffect(() => {
        loadGames();
    }, []);

    return (
        <>
            <h1>Players Page</h1>
            <table className="table-search">
                <tr>
                    <td>
                        <input type="text" placeholder='First'/>
                    </td>
                    <td>
                        <input type="text" placeholder='Last'/>
                    </td>
                    <td>
                        <input type="text" placeholder='Favorite Game'/>
                    </td>
                    <td>
                        <button>Search</button>
                    </td>
                </tr>
            </table>
            <br></br>
            <PlayersTable players={players} onDelete={onDelete} onEdit={onEdit}/>
            <hr></hr>
            <table className="table-edit">
                <PlayersTableHead input="player-add"/>
                <tbody>
                    <tr className="input-table">
                        <td className="input-table">
                            <input 
                                type="text" 
                                required
                                value={first_name}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </td>
                        <td className="input-table">
                            <input 
                                type="text" 
                                required
                                value={last_name}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </td>
                        <td className="input-table">
                            <select onChange={e => setFavGame(e.target.value)}>
                                <option value="none" selected disabled hidden>Select an Option</option>
                                {games.map((game, i) => (
                                    <option value={game.gameID}>{game.name}</option>
                                )
                                )}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="5"> 
                            <button className="add-button" onClick={addPlayer}>Add</button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

export default PlayersPage;