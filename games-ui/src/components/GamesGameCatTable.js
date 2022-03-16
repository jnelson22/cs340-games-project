import React from 'react';
import GamesGameCatTableHead from './GamesGameCatTableHead';

function GamesGameCatTable ({gamesGameCategories}) {
    return (
        <table className="table-container">
            <GamesGameCatTableHead />
            <tbody>
                {gamesGameCategories.map((gamesGameCategory) => (
                    <tr className='games-game-cat-row'>
                    <td>{gamesGameCategory.game_name}</td>
                    <td>{gamesGameCategory.games_cat}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GamesGameCatTable;