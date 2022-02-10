import React from 'react';
import { Link } from 'react-router-dom'

function Navigator() {
  return (
        <nav>
            <Link className="App-link" to="/">Home Page</Link>
            <Link className="App-link" to="/create-exercise">Log an Exercise</Link>
        </nav>
  );
}




export default Navigator;
