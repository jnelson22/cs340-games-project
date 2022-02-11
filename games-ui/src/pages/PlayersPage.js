import React from 'react';
import { Link } from 'react-router-dom';
import PlayersTable from '../components/PlayersTable';


function PlayersPage() {
    return (
        <>
            <h1>Players Page</h1>
            <PlayersTable />
        </>
    );
}

export default PlayersPage;