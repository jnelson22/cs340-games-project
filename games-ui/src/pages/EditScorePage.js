import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditScorePage = ({scoreToEdit}) => {

    const history = useHistory();

    const [player_name, setPlayerName] = useState(scoreToEdit.playerName);
    const [game, setGame] = useState(scoreToEdit.game);
    const [score, setScore] = useState(scoreToEdit.score);
    //const [finished_playing, setFinishedPlaying] = useState(scoreToEdit.finishedPlaying);
    const [scoreID] = useState(scoreToEdit.scoreID);

    const editScore = async () => {
        const editedScore = {player_name, game, score, scoreID};
        const response= await fetch(`api/scores/${scoreToEdit.scoreID}`, {
            method: 'PUT',
            body: JSON.stringify(editedScore),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status == 200){
            alert('successfully updated score');
        }else{
            alert(`failed to edit score, status code=${response.status}`);
        }
        history.push('/');
    };

    return (
        <div>
            <h1>Edit Score</h1>
            <input
                type="text"
                value={player_name}
                onChange={e => setPlayerName(e.target.value)} />
            <input
                type="text"
                value={game}
                onChange={e => setGame(e.target.value)} />
            <input
                type="text"
                value={score}
                onChange={e => setScore(e.target.value)} />
        </div>
    );
}

export default EditScorePage;