import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditScorePage = ({scoreToEdit}) => {

    const history = useHistory();

    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);
    const [gameID, setGameID] = useState('');
    const [playerID, setPlayerID] = useState('');
    const [player_name, setPlayerName] = useState(scoreToEdit.player_name);
    const [game_name, setGameName] = useState(scoreToEdit.game_name);
    const [score, setScore] = useState(scoreToEdit.score);
    const [finished_playing, setFinishedPlaying] = useState(scoreToEdit.finishedPlaying);
    const [scoreID] = useState(scoreToEdit.scoreID);

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
        const editedScore = {playerID, gameID, score, scoreID, finished_playing};
        const response= await fetch(`api/scores/${scoreToEdit.scoreID}`, {
            method: 'PUT',
            body: JSON.stringify(editedScore),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(editedScore);
        if(response.status === 200){
            alert('successfully updated score');
        }else{
            alert(`failed to edit score, status code=${response.status}`);
        }
        history.push("/scores");
    };

    return (
        <div>
            <h1>Edit Score</h1>
                <select onChange={e => setPlayerID(e.target.value)}>
                    <option value="none" selected disabled hidden>Select a Player</option>
                    {players.map((player, i) => (
                        <option value={player.playerID}>{player.first_name} {player.last_name}</option>
                    ))}
                </select>
                <select onChange={e => setGameID(e.target.value)}>
                    <option value="none" selected disabled hidden>Select a Game</option>
                    {games.map((game, i) => (
                        <option value={game.gameID}>{game.name}</option>
                    ))}
                </select>
                <input 
                    type="checkbox" 
                    checked={score.finished_playing}
                    onChange={e => setFinishedPlaying(e.target.value)}
                />
                <input
                    type="number"
                    //placeholder='Enter Score'
                    value={score}
                    onChange={e => setScore(e.target.value)}
                />
                <button className="add-button" type='submit' onClick={editScore}>
                    Save
                </button>
        </div>
    );
}

export default EditScorePage;