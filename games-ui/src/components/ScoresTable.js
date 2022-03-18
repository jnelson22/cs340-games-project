import React from 'react';
import ScoresTableHead from './ScoresTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';
import { useState } from 'react';

function ScoresTable ({scores, onEdit, onDelete}) {

    //const [finished_playing, setFinishedPlaying] = useState('');

    const finishedPlayingBox = () => {
        console.log('checkbox toggled');
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
                        <td><input type="checkbox" onChange={finishedPlayingBox}/></td>
                        <td><FiEdit2 className="edit-icon" onClick={() => onEdit(score)}/></td>
                        <td><FiDelete className="delete-icon" onClick={() => onDelete(score.scoreID)}/></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ScoresTable;
