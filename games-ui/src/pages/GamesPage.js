import React from 'react';
import { Link } from 'react-router-dom';
import GamesTable from '../components/GamesTable';
import GamesTableHead from '../components/GamesTableHead';

function GamesPage() {
    return (
        <>
            <h1>Games Page</h1>
            <div>
                <table className="table-search">
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Game Name"
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Min # of Players"
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Max # of Players"
                            />
                        </td>
                        <td>
                            <button>Search</button>
                        </td>
                    </tr>
                </table>
            </div>
            <br></br>
            <GamesTable />
            <hr></hr>
            <div>
                <table className="table-edit">
                    <GamesTableHead input="game-add" />
                    <tbody>
                        <tr className="input-table">
                            <td className="input-table"> 
                                <input type="text" />
                            </td>
                            <td className="input-table">
                                <input type="number" />
                            </td>
                            <td className ="input-table">
                                <input type="number" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <button className="add-button">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default GamesPage;