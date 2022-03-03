import React from 'react';
import { Link } from 'react-router-dom';
import GameCategoriesTable from '../components/GameCategoriesTable';
import GameCategoriesTableHead from '../components/GameCategoriesTableHead';

function GameCategoriesPage() {
    return (
        <>
            <h1>Game Categories</h1>
                <GameCategoriesTable />
            <div>
                <table className="table-edit">
                    <GameCategoriesTableHead />
                    <tbody>
                        <tr className="input-table">
                            <td className="input-table">
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan= "5">
                                <button className="add-button">Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default GameCategoriesPage;