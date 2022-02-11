import React from 'react';
import ScoresTable from '../components/ScoresTable';
import ScoresTableHead from '../components/ScoresTableHead';



function ScoresPage() {
    return (
        <>
            <h1>Scores Page</h1>
            <ScoresTable />
            <hr></hr>
            <table className="table-edit">
                <ScoresTableHead />
                <tbody>
                    <tr className="input-table">
                        <td className="input-table">
                            <select id="dropdown">
                                <option value="Jeff Nelson">Jeff Nelson</option>
                                <option value="Margaret Swarts">Margaret Swarts</option>
                            </select>
                        </td>
                        <td className="input-table">
                            <select id="dropdown">
                                <option value="">Catan</option>
                                <option value="">Kingdomino</option>
                            </select>
                        </td>
                        <td className="input-table">
                            <input type="text" />
                        </td>
                        <td className="input-table">
                            <input type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4"> 
                            <button className="add-button">Add</button>
                            <button className="add-button">Update</button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ScoresPage;