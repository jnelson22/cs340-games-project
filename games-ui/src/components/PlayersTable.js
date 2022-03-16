import React from 'react';
import PlayersTableHead from './PlayersTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';

function PlayersTable ({players, onDelete}) {
    return (
        <table className="table-container">
            <PlayersTableHead />
            <tbody>
                {players.map((player) => (
                    <tr className='player-row'>
                    <td>{player.first_name}</td>
                    <td>{player.last_name}</td>
                    <td>{player.favorite_game}</td>
                    <td><FiEdit2 className="edit-icon" /></td>
                    <td><FiDelete className="delete-icon" onClick={() => onDelete(player.playerID)}/></td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlayersTable;
