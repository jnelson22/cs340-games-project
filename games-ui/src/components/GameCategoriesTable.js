import React from 'react';
import GameCategoriesTableHead from './GameCategoriesTableHead';

function GameCategoriesTable () {
    return (
        <table className="table-container">
            <GameCategoriesTableHead />
            <tbody>
                <tr>
                    <td>card</td>
                </tr>
                <tr>
                    <td>board</td>
                </tr>
                <tr>
                    <td>dice</td>
                </tr>
                <tr>
                    <td>role-playing</td>
                </tr>
                <tr>
                    <td>strategy</td>
                </tr>
                <tr>
                    <td>tile-based</td>
                </tr>
                <tr>
                    <td>deterministic</td>
                </tr>
                <tr>
                    <td>stochastic</td>
                </tr>
            </tbody>
        </table>
    )
}

export default GameCategoriesTable;