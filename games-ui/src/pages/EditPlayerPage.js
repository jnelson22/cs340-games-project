import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditPlayerPage =({playerToEdit}) => {
    
    const history = useHistory();
    const [first_name, setFirstName] = useState(playerToEdit.first_name);
    const [last_name, setLastName] = useState(playerToEdit.last_name);
    const [playerID] = useState(playerToEdit.playerID);
    const [games, setGames] = useState([]);
    const [gameID, setGameID] = useState('');

    const loadGames = async () => {
        const response = await fetch('/api/games');
        const data = await response.json();
        setGames(data);
    }

    useEffect(() => {
        loadGames();
    }, []);

    const editPlayer = async () => {
        const editedPlayer = {first_name, last_name, gameID, playerID};
        const response =await fetch(`/api/players/${playerToEdit.playerID}`, {
            method: 'PUT',
            body: JSON.stringify(editedPlayer),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200) {
            alert('successfully edited player');
        }else {
            alert(`failed to edit player, status code=${response.status}`);
        }
        history.push("/players");
    };

    return (
        <div>
            <h1>Edit Player</h1>
            <input
                type="text"
                value={first_name}
                onChange={e => setFirstName(e.target.value)} />
            <input 
                type="text"
                value={last_name}
                onChange={e => setLastName(e.target.value)} />
            <select onChange={e => setGameID(e.target.value)}>
                <option value="none" selected disabled hidden>Select a game</option>
                {games.map((game, i) => (
                    <option value={game.gameID}>{game.name}</option>
                )
                )}
            </select>
            <button
                className="add-button"
                onClick={editPlayer}
            >Save</button>
        </div>
    );
}

export default EditPlayerPage;
