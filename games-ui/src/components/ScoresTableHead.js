import React from "react";

function ScoresTableHead({input}) {
    if (input==='score-add'){
        return (
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Game</th>
                    <th>Score</th>
                </tr>
            </thead>
        );
    } else {
        return (
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Game</th>
                    <th>Score</th>
                    <th>Finshed Playing</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
        );
    }
}

export default ScoresTableHead;