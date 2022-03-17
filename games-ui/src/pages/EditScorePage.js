import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import GamesGameCatPage from './GamesGameCatPage';
import PlayersPage from './PlayersPage';

export const EditScorePage = ({scoreToEdit}) => {

    const history = useHistory();

    //const [playerID, setPlayerID] = useState(scoreToEdit.playerID);
    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);
    //const [gameID, setGameID] = useState('');
    const [player_name, setPlayerName] = useState(scoreToEdit.player_name);
    const [game_name, setGameName] = useState(scoreToEdit.game);
    const [score, setScore] = useState(scoreToEdit.score);
    //const [finished_playing, setFinishedPlaying] = useState(scoreToEdit.finishedPlaying);
    const [scoreID] = useState(scoreToEdit.scoreID);

    //const loadScores = async () => {
    //    const response = await fetch('/api/scores');
    //    const data = await response.json();
    //    setScores(data);
   //     console.log(data);
    //}

    //useEffect(() => {
    //    loadScores();
    //}, []);

    const loadPlayers = async () => {
        const response = await fetch('/api/players');
        const data = await response.json();
        setPlayers(data);
    }

    useEffect(() => {
        loadPlayers();
    }, []);

    const loadGames = async () => {
        const response = await fetch('/api/games');
        const data = await response.json();
        setGames(data);
    }

    useEffect(() => {
        loadGames();
    }, []);

    const editScore = async () => {
        const editedScore = {player_name, game_name, score, scoreID};
        const response= await fetch(`api/scores/${scoreToEdit.scoreID}`, {
            method: 'PUT',
            body: JSON.stringify(editedScore),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status == 200){
            alert('successfully updated score');
        }else{
            alert(`failed to edit score, status code=${response.status}`);
        }
        history.push('/');
    };

    return (
        <div>
            <h1>Edit Score</h1>
            <form>
                <select onChange={e => setPlayerName(e.target.value)}>
                    <option value="none" selected disabled hidden>Select a Player</option>
                    {players.map((player, i) => (
                        <option value={player.playerID}>{player.first_name} {player.last_name}</option>
                    ))}
                </select>
                <select onChange={e => setGameName(e.target.value)}>
                    <option value="none" selected disabled hidden>Select a Game</option>
                    {games.map((game, i) => (
                        <option value={game.gameID}>{game.name}</option>
                    ))}
                </select>
                <input
                    type="number"
                    //placeholder='Enter Score'
                    value={score}
                    onChange={e=> setScore(e.target.value)}
                />
                <button className="add-button" type='submit' onClick={editScore}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default EditScorePage;