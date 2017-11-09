import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class VoteResult extends Component {
  render() {
    return (
        <div className="voteResult">
            <h1>{this.props.result}</h1>
            <h3>{this.props.name}</h3>
        </div>
    );
  }
}
