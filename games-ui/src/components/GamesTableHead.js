import React from "react";

function GamesTableHead({input}) {
    if (input==='game-add'){
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Min. # of Players</th>
                    <th>Max # of Players</th>
                </tr>
            </thead>
        );
    }
    else {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Min. # of Players</th>
                    <th>Max # of Players</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
        );
    }
          
}

export default GamesTableHead;