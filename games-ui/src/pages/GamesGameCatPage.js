import React from 'react';
import { Link } from 'react-router-dom';
import GamesGameCatTable from '../components/GamesGameCatTable';

function GamesGameCatPage() {
    return (
        <>
            <h1>Games</h1>
            <GamesGameCatTable />
        </>
    );
}

export default GamesGameCatPage;