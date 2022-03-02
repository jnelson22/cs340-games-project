import React from 'react';
import GameCategoriesTableHead from './GameCategoriesTableHead';

function GameCategoriesTable () {
    return (
        <table className="table-container">
            <GameCategoriesTableHead />
            <tbody>
                <tr className='category-row'>
                    <td>card</td>
                </tr>
                <tr className='category-row'>
                    <td>board</td>
                </tr>
                <tr className='category-row'>
                    <td>dice</td>
                </tr>
                <tr className='category-row'>
                    <td>role-playing</td>
                </tr>
                <tr className='category-row'>
                    <td>strategy</td>
                </tr>
                <tr className='category-row'>
                    <td>tile-based</td>
                </tr>
                <tr className='category-row'>
                    <td>deterministic</td>
                </tr>
                <tr className='category-row'>
                    <td>stochastic</td>
                </tr>
            </tbody>
        </table>
    )
}

export default GameCategoriesTable;