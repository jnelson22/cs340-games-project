import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return(
        <>
            <h1>HomePage</h1>
            <Link className="App-link" to="/scores">Go the Scores Page</Link>
            <Link className="App-link" to="/games">Go the Games Page</Link>
            <Link className="App-link" to="/players">Go the Players Page</Link>
            <Link className="App-link" to="/game-categories">Go the Game Categories Page</Link>
        </>
    );
}

export default HomePage;