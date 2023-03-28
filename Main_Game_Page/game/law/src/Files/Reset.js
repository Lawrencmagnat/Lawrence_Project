import React from 'react';
import './Reset.css';

function Reset({resetBoard}){

    return (
        <button class="reset-btn" onClick={resetBoard}>Reset 😏</button>
    )
}

export default Reset;