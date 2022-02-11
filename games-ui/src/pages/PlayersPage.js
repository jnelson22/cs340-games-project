import React from 'react';
import PlayersTable from '../components/PlayersTable';
import PlayersTableHead from '../components/PlayersTableHead';


function PlayersPage() {
    return (
        <>
            <h1>Players Page</h1>
            <PlayersTable />
            <hr></hr>
            <table className="table-edit">
                <PlayersTableHead />
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
                            <button className="add-button">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

export default PlayersPage;