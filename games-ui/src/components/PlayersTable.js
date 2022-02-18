import React from 'react';
import PlayersTableHead from './PlayersTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';

function PlayersTable () {
    return (
        <table className="table-container">
            <PlayersTableHead />
            <tr className='player-row'>
                <td>Jeff</td>
                <td>Nelson</td>
                <td>Catan</td>
                <td><FiEdit2 /></td>
                <td><FiDelete /></td>
            </tr>
            <tr className='player-row'>
                <td>Margaret</td>
                <td>Swarts</td>
                <td></td>
                <td><FiEdit2 /></td>
                <td><FiDelete /></td>
            </tr>
        </table>
    )
}

export default PlayersTable;
