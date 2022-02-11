import React from 'react';
import { Link } from 'react-router-dom';

function GamesPage() {
    return (
        <>
            <h1>Games</h1>
            <div className="gamesTable">
                <table>
                    <caption>Available Games</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Minimum number of players</th>
                            <th>Maximum number of players</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>

    );
}

export default GamesPage;