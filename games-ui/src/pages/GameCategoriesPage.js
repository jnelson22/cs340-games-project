import React from 'react';
import { Link } from 'react-router-dom';
import GameCategoriesTable from '../components/GameCategoriesTable';

function GameCategoriesPage() {
    return (
        <>
            <h1>Game Categories</h1>
                <GameCategoriesTable />
            <div>
                <h2>Add Category</h2>
                <input
                    type="text"
                    placeholder="Category Name"
                />
                <button>Add</button>
            </div>  
        </>
    );
}

export default GameCategoriesPage;