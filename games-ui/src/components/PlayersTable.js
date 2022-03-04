import React from 'react';
import PlayersTableHead from './PlayersTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';

function PlayersTable ({players}) {
    return (
        <table className="table-container">
            <PlayersTableHead />
            <tbody>
                {players.map((player) => (
                    <tr className='player-row'>
                    <td>{player.first_name}</td>
                    <td>{player.last_name}</td>
                    <td>{player.favorite_game}</td>
                    <td><FiEdit2 /></td>
                    <td><FiDelete /></td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlayersTable;
