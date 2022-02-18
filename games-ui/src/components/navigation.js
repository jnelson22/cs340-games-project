import React from 'react';
import { Link } from 'react-router-dom'

function Navigator() {
  return (
        <nav>
            <Link className="App-link" to="/">Home Page</Link>
            <Link className="App-link" to="/games">Games</Link>
            <Link className="App-link" to="/game-categories">Game Categories</Link>
            <Link className="App-Link" to="/game-game-categories">Game_Game_Categories</Link>
            <Link className="App-link" to="/players">Players</Link>
            <Link className="App-link" to="/scores">Scores</Link>
            <Link className='App-Link' to="/game-search">Game Search</Link>
        </nav>
  );
}




export default Navigator;
