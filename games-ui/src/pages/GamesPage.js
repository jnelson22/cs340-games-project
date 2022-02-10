import React from 'react';
import { Link } from 'react-router-dom';

function GamesPage() {
    return (
        <>
            <h1>Games Page</h1>
                <Link className="App-link" to="/">Go to the Home Page</Link>
        </>
    );
}

export default GamesPage;