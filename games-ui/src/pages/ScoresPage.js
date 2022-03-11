import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ScoresTable from '../components/ScoresTable';
import ScoresTableHead from '../components/ScoresTableHead';
import { useState, useEffect } from 'react';



function ScoresPage() {
    const [scores, setScores] = useState([]);
    const history = useHistory();

    const loadScores = async () => {
        const response = await fetch('/api/scores');
        const data = await response.json();
        setScores(data);
    }

    useEffect(() => {
        loadScores();
    }, []);

    const onDelete = async scoreID => {
        console.log(scoreID)
        const response = await fetch(`/api/games/${scoreID}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newScores = scores.filter(m => m.playerID !== scoreID);
            setScores(newScores);
        } else {
            console.log(`Failed to delete movie with _id ${scoreID}, status code = ${response.status}`)
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
                            <select id="dropdown">
                                <option value="Jeff Nelson">Jeff Nelson</option>
                                <option value="Margaret Swarts">Margaret Swarts</option>
                            </select>
                        </td>
                        <td className="input-table">
                            <select id="dropdown">
                                <option value="">Catan</option>
                                <option value="">Kingdomino</option>
                            </select>
                        </td>
                        <td className="input-table">
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4"> 
                            <button className="add-button">Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ScoresPage;