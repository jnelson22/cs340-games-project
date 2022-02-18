import React from 'react';
import ScoresTableHead from './ScoresTableHead';
import { FiEdit2, FiDelete } from 'react-icons/fi';

function ScoresTable () {
    return (
        <table className="table-container">
            <ScoresTableHead />

            <tr className='player-row'>
                <td>Jeff Nelson</td>
                <td>Catan</td>
                <td>35</td>
                <td><input type="checkbox" checked/></td>
                <td><FiEdit2 /></td>
                <td><FiDelete /></td>
            </tr>
            <tr className='player-row'>
                <td>Margaret Swarts</td>
                <td>Checkers</td>
                <td></td>
                <td><input type="checkbox"/></td>
                <td><FiEdit2 /></td>
                <td><FiDelete /></td>
            </tr>
        </table>
    )
}

export default ScoresTable;
