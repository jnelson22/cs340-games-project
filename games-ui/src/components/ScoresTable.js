import React from 'react';
import ScoresTableHead from './ScoresTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';

function ScoresTable ({scores, onDelete}) {
    return (
        <table className="table-container">
            <ScoresTableHead />
            <tbody>
                {scores.map((score) =>
                    <tr className='player-row'>
                        <td>{score.player_name}</td>
                        <td>{score.game_name}</td>
                        <td>{score.score}</td>
                        <td><input type="checkbox" checked/></td>
                        <td><FiEdit2 /></td>
                        <td><FiDelete onClick={() => onDelete(score.scoreID)}/></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ScoresTable;
