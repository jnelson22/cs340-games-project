import React from 'react';
import { Link } from 'react-router-dom';
import GamesGameCatTable from '../components/GamesGameCatTable';

function GamesGameCatPage() {
    return (
        <>
            <h1>Games and Game Categories Intersection Page</h1>
            <GamesGameCatTable />
        </>
    );
}

export default GamesGameCatPage;