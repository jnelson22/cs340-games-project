import React from 'react';
import ScoresTableHead from './ScoresTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function ScoresTable ({scoreToEdit, scores, onEdit, onDelete}) {

    const history = useHistory();

    const [finished_playing, setFinishedPlaying] = useState(0);

    const editFinishedPlaying = async () => {
        console.log('checkbox toggled');
        const finishedPlayingVal = {finished_playing};
        const response= await fetch(`api/scores/${scoreToEdit.finished_playing}`, {
            method: 'PUT',
            body: JSON.stringify(finishedPlayingVal),
            headers: {
                'Content-Type:': 'application.json',
            },
        });
        console.log(finishedPlayingVal);
        if(response.status === 200){
            alert('successfully updated score');
        }else{
            alert(`failed to edit score, status code=${response.status}`);
        }
        history.push('/');
    };

    return (
        <table className="table-container">
            <ScoresTableHead />
            <tbody>
                {scores.map((score) =>
                    <tr className='player-row'>
                        <td>{score.player_name}</td>
                        <td>{score.game_name}</td>
                        <td>{score.score}</td>
                        <td><input type="checkbox" onChange={editFinishedPlaying}/></td>
                        <td><FiEdit2 className="edit-icon" onClick={() => onEdit(score)}/></td>
                        <td><FiDelete className="delete-icon" onClick={() => onDelete(score.scoreID)}/></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ScoresTable;
