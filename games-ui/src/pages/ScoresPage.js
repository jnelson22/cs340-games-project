import React from 'react';
import { useHistory } from 'react-router-dom';
import ScoresTable from '../components/ScoresTable';
import ScoresTableHead from '../components/ScoresTableHead';
import { useState, useEffect } from 'react';



function ScoresPage() {
    const [scores, setScores] = useState([]);
    const [players, setPlayers] = useState([]);
    const [games, setGames] = useState([]);
    const [playerID, setPlayerID] = useState('');
    const [gameID, setGameID] = useState('');
    const [score, setScore] = useState('');
    
    const history = useHistory();

    const loadScores = async () => {
        const response = await fetch('/api/scores');
        const data = await response.json();
        setScores(data);
        console.log(data);
    }

    useEffect(() => {
        loadScores();
    }, []);

    const onDelete = async scoreID => {
        console.log(scoreID)
        const response = await fetch(`/api/scores/${scoreID}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newScores = scores.filter(m => m.scoreID !== scoreID);
            setScores(newScores);
        } else {
            console.log(`Failed to delete movie with _id ${scoreID}, status code = ${response.status}`)
        }
    };

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

    const addScore = async () => {
        const newScore = {playerID, gameID, score};
        console.log(newScore)
        const response = await fetch('/api/scores', {
            method: 'POST',
            body: JSON.stringify(newScore),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response)
        if (response.status === 201) {
            alert("Score has been added");
            loadScores()
            // const newScores = [...scores, newScore];
            // setScores(newScores)
        }
    };

    return (
        <>
            <h1>Scores Page</h1>
            <table className="table-search">
                <tr>
                    <td>
                        <input type="text" placeholder='Player Name'/>
                    </td>
                    <td>
                        <input type="text" placeholder='Game'/>
                    </td>
                    <td>
                        <button>Search</button>
                    </td>
                </tr>
            </table>
            <br></br>
            <ScoresTable scores={scores} onDelete={onDelete}/>
            <hr></hr>
            <table className="table-edit">
                <ScoresTableHead input="score-add"/>
                <tbody>
                    <tr className="input-table">
                        <td className="input-table">
                            <select onChange={e => setPlayerID(e.target.value)}>
                                <option value="none" selected disabled hidden>Select a Player</option>
                                {players.map((player, i) => (
                                    <option value={player.playerID}>{player.first_name} {player.last_name}</option>
                                )
                                )}
                            </select>
                        </td>
                        <td className="input-table">
                            <select onChange={e => setGameID(e.target.value)}>
                                <option value="none" selected disabled hidden>Select a Game</option>
                                {games.map((game, i) => (
                                    <option value={game.gameID}>{game.name}</option>
                                )
                                )}
                            </select>
                        </td>
                        <td className="input-table">
                            <input 
                                type="number"
                                required
                                placeholder='Enter score'
                                onChange={e => setScore(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4"> 
                            <button className="add-button" type='submit' onClick={addScore}>Add Score</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ScoresPage;