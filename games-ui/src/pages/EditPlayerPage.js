import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditPlayerPage =({playerToEdit}) => {
    
    const history = useHistory();
    const [first_name, setFirstName] = useState(playerToEdit.first_name);
    const [last_name, setLastName] = useState(playerToEdit.last_name);
    const [favorite_game, setFavoriteGame] = useState(playerToEdit.favorite_game);
    const [playerID] = useState(playerToEdit.playerID);

    const editPlayer = async () => {
        const editedPlayer = {first_name, last_name, favorite_game, playerID};
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
        history.push('/');
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
            <input
                type="text"
                value={favorite_game}
                placeholder="enter favorite game"
                onChange={e => setFavoriteGame(e.target.value)} />
            <button
                className="add-button"
                onClick={editPlayer}
            >Save</button>
        </div>
    );
}

export default EditPlayerPage;