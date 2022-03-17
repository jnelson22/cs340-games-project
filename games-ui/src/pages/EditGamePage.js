import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditGamePage = ({gameToEdit}) => {

    const history = useHistory();

    const [name, setName] = useState(gameToEdit.name);
    const [min_number_player, setMinNum] = useState(gameToEdit.min_number_player);
    const [max_number_player, setMaxNum] = useState(gameToEdit.max_number_player);
    const [gameID] = useState(gameToEdit.gameID);

    const editGame = async () => {
        const editedGame = { name, min_number_player, max_number_player, gameID };
        //const response= await fetch('api/games/', {
        const response= await fetch(`/api/games/${gameToEdit.gameID}`, {
            method: 'PUT', 
            body: JSON.stringify(editedGame),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(editedGame);
        if(response.status === 200){
            alert('successfully edited game');
        }else {
            alert(`failed to edit game, status code =${response.status}`);
        }
        history.push('/');
    };

    return (
        <div>
            <h1>Edit Game</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input  
                type="number"
                value={min_number_player}
                onChange={e => setMinNum(e.target.value)} />
            <input
                type="number"
                value={max_number_player}
                onChange={e => setMaxNum(e.target.value)} />
            <button
                className="add-button"
                onClick={editGame}
            >Save</button>
        </div>
    );
}

export default EditGamePage;