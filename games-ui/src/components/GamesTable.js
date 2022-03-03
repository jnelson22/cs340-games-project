import React from 'react';
import GamesTableHead from './GamesTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';

function GamesTable () {
    return (
        <table className="table-container">
            <GamesTableHead />
            <tbody>
                <tr className='game-row'>
                    <td>Risk</td>
                    <td>2</td>
                    <td>6</td>
                    <td><FiEdit2 /></td>
                    <td><FiDelete /></td>
                </tr>
                <tr className='game-row'>
                    <td>Checkers</td>
                    <td>2</td>
                    <td>2</td>
                    <td><FiEdit2 /></td>
                    <td><FiDelete /></td>
                </tr>
                <tr className='game-row'>
                    <td>Settlers of Catan</td>
                    <td>3</td>
                    <td>6</td>
                    <td><FiEdit2 /></td>
                    <td><FiDelete /></td>
                </tr>
            </tbody>
        </table>
    )
}

export default GamesTable;