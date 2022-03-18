import React from 'react';
import GameCategoriesTableHead from './GameCategoriesTableHead';
import { FiDelete } from 'react-icons/fi';

function GameCategoriesTable ({gameCategories, onDelete}) {
    return (
        <table className="table-container">
            <GameCategoriesTableHead />
            <tbody>
                {gameCategories.map((gameCategory) => (
                    <tr className='category-row'>
                        <td>{gameCategory.category}</td>
                        <td><FiDelete className="delete-icon" onClick={() => onDelete(gameCategory.game_categoryID)}/></td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GameCategoriesTable;