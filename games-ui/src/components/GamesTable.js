import React from 'react';
import GamesTableHead from './GamesTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';

function GamesTable ({games, onDelete}) {
    console.log(games)
    
    return (
        <table className="table-container">
            <GamesTableHead />
            <tbody>
                {games.map((game, i) => (
                    <tr className='game-row'>
                        <td>{game.name}</td>
                        <td>{game.min_number_player}</td>
                        <td>{game.max_number_player}</td>
                        <td><FiEdit2 onEdit = {onEdit}/></td>
                        <td><FiDelete onClick={() => onDelete(game.gameID)}/></td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    )
}

export default GamesTable;