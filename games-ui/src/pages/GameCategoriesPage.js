import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GameCategoriesTable from '../components/GameCategoriesTable';
import GameCategoriesTableHead from '../components/GameCategoriesTableHead';
import {useState, useEffect} from 'react';

function GameCategoriesPage() {
    const [gameCategories, setGameCategories] = useState([]);
    const [category, setGameCat] = useState('');
    const history = useHistory();

    const loadGameCategories = async () => {
        const response = await fetch('/api/game-categories');
        const data = await response.json();
        setGameCategories(data);
    }

    useEffect(() => {
        loadGameCategories();
    }, []);

    const addGameCat = async () => {
        const newGameCat = {category};
        const response = await fetch('/api/game-categories', {
            method: 'POST',
            body: JSON.stringify(newGameCat),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
    };

    return (
        <>
            <h1>Game Categories</h1>
                <GameCategoriesTable gameCategories={gameCategories}/>
            <hr></hr>
            <div>
                <table className="table-edit">
                    <GameCategoriesTableHead />
                    <tbody>
                        <tr className="input-table">
                            <td className="input-table">
                            <input 
                                type="text" 
                                value={category}
                                onChange={e => setGameCat(e.target.value)}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan= "5">
                                <button type='submit' className="add-button" onClick={addGameCat}>Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default GameCategoriesPage;