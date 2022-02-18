import React from "react";

function PlayersTableHead({input}) {
    if (input==='player-add'){
        return (
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Favorite Game</th>
                </tr>
            </thead>
        );

    } else {
        return (
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Favorite Game</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
        );
    }
}

export default PlayersTableHead;