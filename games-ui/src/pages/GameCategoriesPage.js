import React from 'react';
import { Link } from 'react-router-dom';

function GameCategoriesPage() {
    return (
        <>
            <h1>Game Categories Page</h1>
                <Link className="App-link" to="/">Go to the Home Page</Link>
            <h1>Game Categories</h1>
            <div>
                <table className="table-container">
                    <caption>Types of Games</caption>
                    <thead>
                        <tr>
                            <th>Category</th>
                        </tr>
                    </thead>
                </table>
            </div>  
            <div>
                <h2>Add or Edit Category</h2>
                <input
                    type="text"
                    placeholder="Game Name"
                />
                <button>Add</button>
                <button>Edit</button>
            </div>  
        </>
    );
}

export default GameCategoriesPage;