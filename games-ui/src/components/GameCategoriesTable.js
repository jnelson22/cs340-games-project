import React from 'react';
import GamesGameCatPage from '../pages/GamesGameCatPage';
import GameCategoriesTableHead from './GameCategoriesTableHead';

function GameCategoriesTable ({gameCategories}) {
    return (
        <table className="table-container">
            <GameCategoriesTableHead />
            <tbody>
                {gameCategories.map((gameCategory) => (
                    <tr className='category-row'>
                        <td>{gameCategory.category}</td>
                        <td><FiEdit2 /></td>
                        <td><FiDelete /></td> 
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GameCategoriesTable;