import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const VoteResult = props => {
    return (
        <div className="voteResult">
            <h1>{props.result}</h1>
            <h4>{props.name}</h4>
        </div>
    )
}

export default VoteResult ;
