import React from 'react';
import PlayersTable from '../components/PlayersTable';
import PlayersTableHead from '../components/PlayersTableHead';


function PlayersPage() {
    return (
        <>
            <h1>Players Page</h1>
            <table className="table-search">
                <tr>
                    <td>
                        <input type="text" placeholder='First'/>
                    </td>
                    <td>
                        <input type="text" placeholder='Last'/>
                    </td>
                    <td>
                        <input type="text" placeholder='Favorite Game'/>
                    </td>
                    <td>
                        <button>Search</button>
                    </td>
                </tr>
            </table>
            <br></br>
            <PlayersTable />
            <hr></hr>
            <table className="table-edit">
                <PlayersTableHead input="player-add"/>
                <tbody>
                    <tr className="input-table">
                        <td className="input-table">
                            <input type="text" />
                        </td>
                        <td className="input-table">
                            <input type="text" />
                        </td>
                        <td className="input-table">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="5"> 
                            <button className="add-button">Add</button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

export default PlayersPage;