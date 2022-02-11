import React from 'react';
import { Link } from 'react-router-dom';

function GameCategoriesPage() {
    return (
        <>
            <h1>Game Categories</h1>
            <div className="gameCatTable">
                <table>
                    <caption>Types of Games</caption>
                    <thead>
                        <tr>
                            <th>Category</th>
                        </tr>
                    </thead>
                </table>
            </div>    
        </>
    );
}

export default GameCategoriesPage;