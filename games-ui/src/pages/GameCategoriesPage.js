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

    const onDelete = async game_categoryID => {
        console.log(game_categoryID)
        const response = await fetch(`/api/games/${game_categoryID}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newCategories = category.filter(m => m.game_categoryID !== game_categoryID);
            setGameCategories(newCategories);
        } else {
            console.log(`Failed to delete movie with _id ${game_categoryID}, status code = ${response.status}`)
        }
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