import React from 'react';
import PlayersTableHead from './PlayersTableHead';

function PlayersTable () {
    return (
        <table className="table-container">
            <PlayersTableHead />
            <tr className='player-row'>
                <td>Jeff</td>
                <td>Nelson</td>
                <td>Catan</td>
                <td><button className="add-button">Edit</button></td>
                <td><button className="add-button">Delete</button></td>
            </tr>
            <tr className='player-row'>
                <td>Margaret</td>
                <td>Swarts</td>
                <td></td>
                <td><button className="add-button">Edit</button></td>
                <td><button className="add-button">Delete</button></td>
            </tr>
        </table>
    )
}

export default PlayersTable;
