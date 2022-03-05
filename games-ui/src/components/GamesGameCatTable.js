import React from 'react';
import GamesGameCatTableHead from './GamesGameCatTableHead';

function GamesGameCatTable ({gamesGameCategories}) {
    return (
        <table className="table-container">
            <GamesGameCatTableHead />
            <tbody>
                {gamesGameCategories.map((gamesGameCategory) => (
                    <tr className='games-game-cat-row'>
                    <td>{gamesGameCategory.gameID}</td>
                    <td>{gamesGameCategory.gameCategoryID}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GamesGameCatTable;