import React from 'react';
import GameCategoriesTableHead from './GameCategoriesTableHead';

function GameCategoriesTable ({gameCategories}) {
    return (
        <table className="table-container">
            <GameCategoriesTableHead />
            <tbody>
                {gameCategories.map((gameCategory) => (
                    <tr className='category-row'>
                        <td>{gameCategory.category}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GameCategoriesTable;