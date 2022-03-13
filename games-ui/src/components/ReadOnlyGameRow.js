import React from 'react';
import { FiEdit2, FiDelete } from 'react-icons/fi';
import { useState } from 'react';

const ReadOnlyGameRow = ({game, onDelete}) => {
    return (
        <tr className='game-row'>
            <td>{game.name}</td>
            <td>{game.min_number_player}</td>
            <td>{game.max_number_player}</td>
            <td><FiEdit2 /></td>
            <td><FiDelete onClick={() => onDelete(game.gameID)}/></td>
        </tr>
    );
};

export default ReadOnlyGameRow;