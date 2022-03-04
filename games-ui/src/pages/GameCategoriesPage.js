import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GameCategoriesTable from '../components/GameCategoriesTable';
import GameCategoriesTableHead from '../components/GameCategoriesTableHead';
import {useState, useEffect} from 'react';

function GameCategoriesPage() {
    const [gameCategories, setGameCategories] = useState([]);
    const history = useHistory();

    const loadGameCategories = async () => {
        const response = await fetch('/api/game-categories');
        const data = await response.json();
        setGameCategories(data);
    }

    useEffect(() => {
        loadGameCategories();
    }, []);

    return (
        <>
            <h1>Game Categories</h1>
                <GameCategoriesTable gameCategories={gameCategories}/>
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