import React from 'react';
import ScoresTableHead from './ScoresTableHead';

function ScoresTable () {
    return (
        <table className="table-container">
            <ScoresTableHead />

            <tr className='player-row'>
                <td>Jeff Nelson</td>
                <td>Catan</td>
                <td>35</td>
                <td><input type="checkbox" checked/></td>
                <td><button className="add-button">Edit</button></td>
                <td><button className="add-button">Delete</button></td>
            </tr>
            <tr className='player-row'>
                <td>Margaret Swarts</td>
                <td>Checkers</td>
                <td></td>
                <td><input type="checkbox"/></td>
                <td><button className="add-button">Edit</button></td>
                <td><button className="add-button">Delete</button></td>
            </tr>
        </table>
    )
}

export default ScoresTable;
