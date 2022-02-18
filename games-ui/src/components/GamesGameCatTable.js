import React from 'react';
import GamesGameCatTableHead from './GamesGameCatTableHead';

function GamesGameCatTable () {
    return (
        <table className="table-container">
            <caption>Available Games</caption>
            <GamesGameCatTableHead />
            <tbody>
                <tr>
                    <td>1</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>33</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>50</td>
                </tr>
            </tbody>
        </table>
    )
}

export default GamesGameCatTable;