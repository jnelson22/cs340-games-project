import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import GameCategoriesPage from './pages/GameCategoriesPage';
import GamesGameCatPage from './pages/GamesGameCatPage';
import PlayersPage from './pages/PlayersPage';
import ScoresPage from './pages/ScoresPage';
import Navigator from './components/navigation';

function App() {
  return (
    <Router>
      <Navigator />
      <main>
        <Route path="/" exact>
            <HomePage />
        </Route>
        <Route path="/games" exact>
            <GamesPage />
        </Route>
        <Route path="/game-categories" exact>
          <GameCategoriesPage />
        </Route>
        <Route path="/games-game-categories" exact>
          <GamesGameCatPage />
        </Route>
        <Route path="/players" exact>
          <PlayersPage />
        </Route>
        <Route path="/scores" exact>
          <ScoresPage />
        </Route>
      </main>
    </Router>
  );
}

export default App;
