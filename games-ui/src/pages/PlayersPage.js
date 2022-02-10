import React from 'react';
import { Link } from 'react-router-dom';

function PlayersPage() {
    return (
        <>
            <h1>Players Page</h1>
                <Link className="App-link" to="/">Go to the Home Page</Link>
        </>
    );
}

export default PlayersPage;