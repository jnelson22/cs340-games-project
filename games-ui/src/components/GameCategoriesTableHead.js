import React from "react";

function GameCategoriesTableHead({input}) {
    if (input === 'add') {
        return (
            <thead>
                <tr>
                    <th>Category</th>
                </tr>
            </thead>
        );
    } else {
        return (
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Delete</th>
                </tr>
            </thead>
        );
    }     
}

export default GameCategoriesTableHead;