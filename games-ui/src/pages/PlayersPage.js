import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PlayersTable from '../components/PlayersTable';
import PlayersTableHead from '../components/PlayersTableHead';
import { useState, useEffect } from 'react';


function PlayersPage() {
    const [players, setPlayers] = useState([]);
    const history = useHistory();

    const loadPlayers = async () => {
        const response = await fetch('/api/players');
        const data = await response.json();
        setPlayers(data);
    }

    useEffect(() => {
        loadPlayers();
    }, []);

    const onDelete = async playerID => {
        console.log(playerID)
        const response = await fetch(`/api/games/${playerID}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newGames = players.filter(m => m.playerID !== playerID);
            setPlayers(newGames);
        } else {
            console.log(`Failed to delete movie with _id ${playerID}, status code = ${response.status}`)
        }
    };

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
            <PlayersTable players={players} onDelete={onDelete}/>
            <hr></hr>
            <table className="table-edit">
                <PlayersTableHead input="player-add"/>
                <tbody>
                    <tr className="input-table">
                        <td className="input-table">
                            <input type="text" />
                        </td>
                        <td className="input-table">
                            <input type="text" />
                        </td>
                        <td className="input-table">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="5"> 
                            <button className="add-button">Add</button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

export default PlayersPage;